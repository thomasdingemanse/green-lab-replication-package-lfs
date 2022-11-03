import os

from argparse import ArgumentParser

import requests
from bs4 import BeautifulSoup

class WebScraper():

    def __init__(self):
        self.websites = dict()

    def add(self, name, url):
        if name not in self.websites:
            self.websites[name] = url

    def importCSV(self, csv):
        raise NotImplementedError()

        for name, url in websites:
            self.add(name, url)

    def save(self, name, soup):
        filename = os.path.join(os.getcwd(), f"{name}.html")
        
        # Remove the old version of this web page if it was downloaded before
        if os.path.exists(filename):
            os.remove(filename)

        # Save the HTML file as {name}.html
        with open(filename, 'w') as file:
            file.write(soup.prettify())
    
    def remove_preloading(self, soup):
        # TODO: check HTTP response header for preload directives and remove

        # Find occurrences of "rel=preload" in the HTML file
        preload_directives = soup.find_all(rel="preload")

        n = len(preload_directives)

        for preload_directive in preload_directives:
            soup.replace_with(preload_directive, None)
        
        if n > 0:
            print(f"Removed {n} preload directives.")
            
            return soup

        return None

    def download(self):
        # Create a new Requests session for config, pooling etc.
        session = requests.Session()

        for name in self.websites:
            url = self.websites[name]
            
            # Perform HTTP GET request to obtain the main HTML file
            print(f"Downloading {url}...")
            response = session.get(url)
            
            # Turn it into a BeautifulSoup data structure
            soup = BeautifulSoup(response.text, 'html.parser')

            # Save the website to disk
            self.save(name, soup)

            # Find and remove any preloading directives
            soup_no_preloading = self.remove_preloading(soup)

            # If the page used preloading, save the non-preloading version separately.
            if (soup_no_preloading is not None):
                name = f"{name}-no-preloading"
                self.save(name, soup)
            else:
                print(f"{url} does not use preloading.")

if __name__ == "__main__":
    parser = ArgumentParser()
    parser.add_argument("-i", "--input-file", dest="input")
    args = parser.parse_args()

    scraper = WebScraper()

    # scraper.importCSV(args.input)

    scraper.add("google", "https://www.google.com")
    scraper.add("new-york-times", "https://www.nytimes.com")

    scraper.download()