import os

from argparse import ArgumentParser
import numpy as np
import pandas as pd

import requests
from bs4 import BeautifulSoup
from selenium import webdriver

RELATIVE_TRANCO_PATH = './top-1m.csv'
GECKO_DRIVER_PATH = r'C:/Users/annab/Downloads/geckodriver-v0.31.0-win64/geckodriver.exe'


class WebScraper():

    def __init__(self):
        self.websites = dict()

    def add(self, name, url):
        if name not in self.websites:
            self.websites[name] = url

    def importCSV(self, csv):
    
        data = pd.read_csv(RELATIVE_TRANCO_PATH, index_col=0, header=None, names=['site']).values
        data = [x[0] for x in data]
        select_from_first = 1000
        sites = data[:select_from_first].copy()

        for name, url in websites:
            self.add(name, url)

    def save(self, name, soup):
        filename = os.path.join(os.getcwd(), f"{name}.html")
        
        # Remove the old version of this web page if it was downloaded before
        if os.path.exists(filename):
            os.remove(filename)

        data = soup.tag.text
        encoding = soup.original_encoding or 'utf-8'

        # Save the HTML file as {name}.html
        with open(filename, 'wb+') as file:
            file.write(data.encode(encoding))
    
    def remove_preloading(self, soup, preload_directives):
        # TODO: check HTTP response header for preload directives and remove

        for preload_directive in preload_directives:
            soup.replace_with(preload_directive, None)
        
        if n > 0:
            print(f"Removed {n} preload directives.")
            
            return soup

        return None

    def download(self):
        # Create a new Requests session for config, pooling etc.
        # session = requests.Session()
        browser = webdriver.Firefox(executable_path=GECKO_DRIVER_PATH)

        # TODO: ADD COUNTER AND STOP AT 20 !!

        sites_w_preloading = list()

        for name in self.websites:
            url = self.websites[name]
            
            # Perform HTTP GET request to obtain the main HTML file
            print(f"Downloading {url}...")
            # response = session.get(url)
            browser.get(url)
            
            # Turn it into a BeautifulSoup data structure
            # soup = BeautifulSoup(response.content, 'html.parser')
            soup = BeautifulSoup(browser.page_source)

            # Find occurrences of "rel=preload" in the HTML file
            preload_directives = soup.find_all(rel="preload")
            n = len(preload_directives)

            # If HTML file uses preload, save it, and create second version without preload
            # TODO: FIND BOUNDARY
            if n > 10:
                sites_w_preloading.append(name)
                # # self.save(name, soup)

                # # Remove any preloading directives
                # # soup_no_preloading = self.remove_preloading(soup, preload_directives)

                # # If the page used preloading, save the non-preloading version separately.
                #  if (soup_no_preloading is not None):
                #     name = f"{name}-no-preloading"
                #     self.save(name, soup)
                # # else:
                #     print(f"{url} does not use preloading. SHOULD NOT HAPPEN")
            else:
                print(f"{url} does not use preloading, in else block")
            if len(sites_w_preloading) == 20 :
                break

        print(sites_w_preloading)


if __name__ == "__main__":
    parser = ArgumentParser()
    parser.add_argument("-i", "--input-file", dest="input")
    args = parser.parse_args()

    # import tranco csv
    # starting from top, check if site uses preload (bs). if yes, scraper.add(...)
    # once 20 have been added, exit loop

    scraper = WebScraper()

    # scraper.importCSV(args.input)

    # scraper.add("google", "https://www.google.com")
    # scraper.add("new-york-times", "https://www.nytimes.com")
    scraper.add("housing", "https://www.housing.com")
    scraper.add("youtube", "https://www.youtube.com/")
    scraper.add("facebook", "https://www.facebook.com/")
    scraper.add("netflix", "https://www.netflix.com/")
    scraper.add("twitter", "https://twitter.com/")
    scraper.add("instagram", "https://www.instagram.com/")
    scraper.add("cloudflare", "https://www.cloudflare.com/")
    scraper.add("yahoo", "https://www.yahoo.com/")
    scraper.add("blibli", "https://www.bilibili.com/")
    scraper.add("office", "https://www.office.com/")
    scraper.add("bing", "https://www.bing.com/")
    scraper.add("github", "https://github.com/")
    scraper.add("WA", "https://www.whatsapp.com/")
    scraper.add("mail.ru", "https://mail.ru/")
    scraper.add("reddit", "https://www.reddit.com/")
    scraper.add("gandi", "https://www.gandi.net/")
    scraper.add("microsoft", "https://www.microsoft.com/")
    scraper.add("ticktack", "https://www.tiktok.com/")
    scraper.add("intuit", "https://www.intuit.com/")
    scraper.add("tumblr", "https://www.tumblr.com/")
    scraper.add("paypal", "https://www.paypal.com/")


    scraper.download()