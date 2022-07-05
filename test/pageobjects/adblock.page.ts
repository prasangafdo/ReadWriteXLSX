import Page from './page';

class AdBlockPage extends Page {

    get imgAdBlockLogo(){
        return $("//section[@class='content column logo-section']//*[name()='svg']")
    }

    async closeAdBlockTab(){
        const handles = await browser.getWindowHandles();
        if ( handles.length > 1) {
            await browser.switchToWindow(handles[1]);
            await browser.closeWindow();
            await browser.pause(9000)
            console.log('------------------>',handles.length)
        }
    }
}

export default new AdBlockPage();