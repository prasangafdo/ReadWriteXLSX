import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
