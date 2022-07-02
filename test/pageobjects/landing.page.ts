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

    async isCompanyLogoDisplaying(){
        return this.imgCompanyLogo.isDisplayed()
    }
    async navigateToVehicles(){
        await this.lnkVehicles.click()
    }


}



export default new LandingPage();