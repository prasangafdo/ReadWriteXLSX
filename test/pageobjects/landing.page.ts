import Page from './page';

class LandingPage extends Page {
    get imgCompanyLogo(){
        return $("//div[contains(@class,'desktop')]//a[@class='gtm-market-logo']")
    }

    public open () {
        return super.open('');
    }

    async isCompanyLogoDisplaying(){
        return this.imgCompanyLogo.isDisplayed()
    }


}



export default new LandingPage();