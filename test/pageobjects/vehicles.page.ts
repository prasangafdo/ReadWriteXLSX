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
    get btnPrice(){
        return $("//button[normalize-space()='Price (Rs)']")
    }
    get txtMinPrice(){
        return $("//button[normalize-space()='Price (Rs)']/parent::div//input[@aria-label='Min']")
    }
    get txtMaxPrice(){
        return $("//button[normalize-space()='Price (Rs)']/parent::div//input[@aria-label='Max']")
    }
    get btnApplyPrice(){
        return $("//button[normalize-space()='Price (Rs)']/parent::div//button[contains(@class,'apply')]")
    }
    get btnCars(){
        return $("//span[text()='Cars']//ancestor::button")
    }
    get lnkAds(){
        return $$("//ul[@class='list--3NxGO']/li/a")
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
    async getVehicleCategory(category){
        return $("//span[text()='"+category+"']//ancestor::button")
    }

    async openVehiclesByDistrict(valueArray){
        for (let district of valueArray){
            let element = await this.getLnkDistrict(district)
            await element.click()
        }

    }
    async getAllAds(){
        // for (let element of await this.lnkAds){
        //     console.log('=============>',await element.getText())
        // }
        return this.lnkAds;
    }


}

export default new VehiclesPage();
