import Page from './page';

class VehiclesPage extends Page {
    //div[@class='ellipsis--AX_lz'] <- Vehicles topic

    get lblVehiclesTopic(){
        return $("//div[@class='ellipsis--AX_lz']")
    }
    get btnCloseAdPopup(){
        return $('#dismiss-button')
    }
    get lblLocation(){
        return $("//button[contains(@class,'location')]//child::div[@class='ellipsis--AX_lz']")
    }

    async closeAdPopup(){
        await browser.pause(1000)
        if (await this.btnCloseAdPopup.isDisplayed()){
            await this.btnCloseAdPopup.click()
            await browser.pause(2000)
        }
    }

    async getLnkDistrict(district){
        return $("//span[normalize-space()='"+district+"']/ancestor::a")
    }

    async openVehiclesByDistrict(value){
        let district = await this.getLnkDistrict(value)
        await district.click()
    }

}

export default new VehiclesPage();
