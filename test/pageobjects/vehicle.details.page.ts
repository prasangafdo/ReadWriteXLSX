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
        return $("//div[@class='display--s3dc8 card--_2NNk']//button[contains(@class,'show-number')]")
    }
    get lblPhoneNumber(){
        return $("//div[@class='phone-numbers--2COKR']")
    }

    async allAdDetails(){
        await browser.pause(8000)
        // let vehicles = await Vehicle.getAllAds()

        // let promise = Promise.resolve(await Vehicle.getAllAds());

        // const p = Promise.resolve(Vehicle.getAllAds());
        //
        //
        // p.then((v) => {
        //     for (let value of v){
        //         let innerPromise = value
        //         console.log('cccccccccccc=======>',value.getText()); // 1
        //     }
        // });
        for (let element of await Vehicle.getAllAds()){
            await element.waitForDisplayed({timeout:900000})
            await element.click()
            console.log('=======Vehicle: ',await this.lblAdTitle.getText())
            console.log('=======Location: ',await this.lblLocation.getText())
            console.log('=======Price: ',await this.lblPrice.getText())
            console.log('=======year: ',await this.lblYear.getText())
            await this.btnShowPhoneNumber.click()
            console.log('=======Phone: ',await this.lblPhoneNumber.getText())
            await browser.back()
            await browser.pause(2000)
        }

    }





}

export default new VehicleDetailsPage();
