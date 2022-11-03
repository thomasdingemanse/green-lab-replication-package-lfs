import os
import shutil

from bs4 import BeautifulSoup
import requests

websites = sorted(os.listdir("./ALL_SUBJECTS"))

for website in websites:
    for variant in ["preload", "no-preload"]:
        filename = f"./ALL_SUBJECTS/{website}/{variant}/index.html"
        with open(filename, "r+") as index_html:
            # Parse the HTML contents of the current file
            contents = index_html.read()
            soup = BeautifulSoup(contents, "html.parser")

            for link in soup.findAll("link"):
                try:
                    href = link["href"]
                except KeyError:
                    print("\tLink has no href attribute, skipping.")

                # Split URL and trim trailing forward slash if present
                url_segments = href.rstrip("/").split("/")
                print(url_segments[-1])

                # Skip <link> tags that already refer to local files
                if "./index_files" in href:
                    print("\tLocal file, skipping.")
                    continue

                # Skip irrelevant <link> tags like preconnect and dns-prefetch
                skip_rels = ["dns-prefetch", "preconnect", "canonical", "alternate"]
                try:
                    rel = link["rel"][0]
                    if rel in skip_rels:
                        print(f"\tLink rel={rel}, skipping.")
                        continue
                except KeyError:
                    print("\tLink rel missing, assuming it's relevant and attempting to download.")
                    pass

                # Download the <link> resources only once because they are
                # identical for both variants (preloading and no preloading)
                if variant == "preload":
                    # Download the <link> resource
                    response = requests.get(href, stream=True)

                    # Skip if it returns a non-success HTTP status code
                    if response.status_code < 200 or response.status_code >= 300:
                        print(f"\tResource {href} failed to download.")
                        continue

                    # Decode if it's compressed/gzipped
                    response.raw.decode_content = True

                    # Write the resource to a local file for both variants
                    filename_preload = f"./ALL_SUBJECTS/{website}/preload/index_files/{url_segments[-1]}"
                    filename_no_preload = f"./ALL_SUBJECTS/{website}/no-preload/index_files/{url_segments[-1]}"
                    with open(filename_preload, "wb") as resource_file:
                        # Save to index_files directory of the preload variant
                        shutil.copyfileobj(response.raw, resource_file)
                        # Copy to the no-preload directory as well
                        shutil.copy(filename_preload, filename_no_preload)

                # Update the href value of the <link> tag to refer to the
                # downloaded file instead of the original URL
                link["href"] = f"./index_files/{url_segments[-1]}"

            # Write the modified HTML content back to the file
            contents = soup.prettify()
            index_html.seek(0)
            index_html.write(contents)
            index_html.truncate()
            print(f"\tUpdated {filename}\n")