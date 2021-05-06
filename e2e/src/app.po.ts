import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  navigateToURL (suburl): Promise<unknown> {
    return browser.get(browser.baseUrl + suburl) as Promise<unknown>; 
  }

  async getTitleText(): Promise<string> {
    return element(by.id('app-title')).getText();
  }
}
