import os, sys, time

import numpy as np
import pandas as pd

from bs4 import BeautifulSoup
from selenium import webdriver

from selenium.common.exceptions import NoSuchElementException, WebDriverException
from webdriver_manager.chrome import ChromeDriverManager

RELATIVE_TRANCO_PATH = 'subject_selection/top-1m.csv'
RELATIVE_RESULTS_PATH = 'subject_selection/sites-preloading.csv'

class WebScraper():

    def __init__(self):
        self.tranco_sites = list()
        self.preload_sites = dict()

    def add(self, url):
        if url not in self.tranco_sites:
            self.tranco_sites.append(url)

    def importCSV(self):
        data = pd.read_csv(RELATIVE_TRANCO_PATH, index_col=0, header=None, names=['site']).values
        data = [x[0] for x in data]

        select_from_first = 1000
        sites = data[:select_from_first].copy()

        for i, site in enumerate(sites):
            self.add(site)

    def download(self):
        browser = webdriver.Chrome(ChromeDriverManager().install())
        browser.implicitly_wait(10)

        for i, site in enumerate(self.tranco_sites):
            url = 'https://www.' + site
            if not url == 'https://www.yandex.net' and not url == 'https://www.indeed.com' and not url == 'https://www.aiv-cdn.net/':
                # Perform HTTP GET request to obtain the main HTML file
                print(f"Downloading {url}...")

                try:
                    browser.get(url)
                except WebDriverException:
                    print(f'not found: {url}')
                
                # Turn it into a BeautifulSoup data structure
                soup = BeautifulSoup(browser.page_source, 'html.parser')

                # Find occurrences of "rel=preload" in the HTML file
                preload_directives = soup.find_all(rel="preload")
                n = len(preload_directives)

                # If HTML file uses at least 10 preload, save it
                if n >= 10:
                    self.preload_sites[site] = [n, i]
                    print(f"{url} uses {n} preloading directives.")
                    
                if len(self.preload_sites) >= 50:
                    print(f"Final list of sites using at least 10 preload directives:")
                    print(self.preload_sites.keys())

                    # Save as CSV
                    df = pd.DataFrame.from_dict(data=self.preload_sites, orient='index') 
                    with open(RELATIVE_RESULTS_PATH, 'wb') as f:
                        df.to_csv(f, header=['Preload count', 'Tranco position'])
                    break
                time.sleep(.1)

if __name__ == "__main__":
    scraper = WebScraper()
    scraper.importCSV()
    scraper.download()
