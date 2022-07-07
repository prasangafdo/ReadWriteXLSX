import Page from './page';

class LandingPage extends Page {
    get imgCompanyLogo(){
        return $("//div[contains(@class,'desktop')]//a[@class='gtm-market-logo']")
    }
    get lnkVehicles(){
        return $("//a[contains(@href,'vehicles')]")
    }

    public open () {
        return super.open('');
    }

    async switchToAdvertisementTab(){
        const handles = await browser.getWindowHandles();
        // if ( handles.length > 1) {
        //     await browser.switchToWindow(handles[1]);
        //     await browser.closeWindow();
        //     await browser.pause(9000)
        //     console.log('------------------>',handles.length)
        // }

}

    // async isCompanyLogoDisplaying(){
    //     return this.imgCompanyLogo.isDisplayed()
    // }
    // async navigateToVehicles(){
    //     await this.lnkVehicles.click()
    // }


}



export default new LandingPage();