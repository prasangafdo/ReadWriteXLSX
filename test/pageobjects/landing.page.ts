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
        let handles = await browser.getWindowHandles();
        console.log("---------->",handles)
        if ( handles.length > 1) {
            // let title = await browser.getTitle()
            // if(title.includes("Ad block")){
            //     await browser.closeWindow()
            // }
            // else{
                await browser.switchWindow('Adblock');
                // console.log("---------->",await browser.getTitle())
                await browser.closeWindow();
                await browser.pause(1000)
            await browser.switchWindow('ikman')
            // }
        }
        console.log("---------->",await browser.getTitle())

}

    // async isCompanyLogoDisplaying(){
    //     return this.imgCompanyLogo.isDisplayed()
    // }
    // async navigateToVehicles(){
    //     await this.lnkVehicles.click()
    // }


}



export default new LandingPage();