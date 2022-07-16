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
    get btnBrand(){
        return $("//button[normalize-space()='Brand']")
    }
    get btnManufactureYear(){
        return $("//button[normalize-space()='Year of Manufacture']")
    }
    get txtBrand(){
        return $("//input[@placeholder='Select brand']")
    }
    get txtMinPrice(){
        return $("//button[normalize-space()='Price (Rs)']/parent::div//input[@aria-label='Min']")
    }
    get txtMaxPrice(){
        return $("//button[normalize-space()='Price (Rs)']/parent::div//input[@aria-label='Max']")
    }
    get btnRestetBrand(){
        return $("//button[@type='reset']")
    }
    get btnApplyBrand(){
        return $("//button[normalize-space()='Select brand']/parent::div//button[contains(@class,'apply')]")
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
        await browser.pause(3000)
        return this.lnkAds;
    }


}

export default new VehiclesPage();
