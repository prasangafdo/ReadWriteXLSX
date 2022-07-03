import Page from './page';

class VehiclesPage extends Page {
    //div[@class='ellipsis--AX_lz'] <- Vehicles topic

    get lblVehiclesTopic(){
        return $("//div[@class='ellipsis--AX_lz']")
    }
    get btnCloseAdPopup(){
        return $('#dismiss-button')
    }

    async closeAdPopup(){
        await browser.pause(1000)
        if (await this.btnCloseAdPopup.isDisplayed()){
            await this.btnCloseAdPopup.click()
            await browser.pause(2000)
        }
    }

}

export default new VehiclesPage();
