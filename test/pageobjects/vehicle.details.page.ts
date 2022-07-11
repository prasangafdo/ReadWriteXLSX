import Page from './page';
import Vehicle from './vehicles.page';

class VehicleDetailsPage extends Page {

    get lblAdTitle(){
        return $("//h1[@class='title--3s1R8']")
    }
    get lblLocation(){
        return $("//a[@data-testid='subtitle-sublocation-link']/span")
    }
    get lblPrice(){
        return $("//div[@class='amount--3NTpl']")
    }
    get lblYear(){
        return $("//div[text()='Year of Manufacture: ']//following-sibling::div//span")
    }
    get btnShowMore(){
        return $("//button[normalize-space()='Show more']")
    }
    get btnShowPhoneNumber(){
        return $("//div[@class='display--s3dc8 card--_2NNk']//button[contains(@class,'show-number')].")
    }

    async allAdDetails(){
        await browser.pause(2000)
        for (let element of await Vehicle.getAllAds()){
            console.log('=============>',await element.getText())
        }
    }





}

export default new VehicleDetailsPage();
