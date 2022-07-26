import ExcelReader from '../util/ExcelReader';
import Vehicles from '../pageobjects/vehicles.page';
import VehicleDetails from '../pageobjects/vehicle.details.page';
const testDataFile = './test/testdata/TestData.xlsx'
import excelWriter from '../util/ExcelWriter';

class DDTManager{

    getAllCarsTestDataFromExcel(){
        return ExcelReader.excelToJson(testDataFile, 0)
    }
    getAllLocationsTestDataFromExcel(){
        ExcelReader.excelToJson(testDataFile,0).forEach(function(obj) {
            console.log(obj.District); });
        return true;
    }
    getAllVansTestDataFromExcel(){ //Test data not yet configured
        // return ExcelReader.excelToJson(testDataFile, 0)
    }
    // async performDDT(){
    //     let elementsArray = []
    //     for (let data of this.getAllCarsTestDataFromExcel()){
    //
    //         await $("//span[normalize-space()='"+data.District+"']/ancestor::a").click()
    //         await Vehicles.btnCars.click()
    //         if ( !await Vehicles.txtMinPrice.isDisplayed()){
    //             await Vehicles.btnPrice.click()
    //         }
    //         await Vehicles.txtMinPrice.clearValue()
    //         await Vehicles.txtMaxPrice.clearValue()
    //         await Vehicles.txtMinPrice.setValue(data.min_price)//Add a clear value
    //         await Vehicles.txtMaxPrice.setValue(data.max_price)
    //         await Vehicles.btnApplyPrice.click()
    //
    //         await Vehicles.lnkAds.then(function (ttt) {
    //             for (let element of ttt){
    //                 elementsArray.push(element)
    //             }
    //         })
    //         // console.log('+++++++++<',elementsArray)
    //         // console.log('+++++++++<',await elementsArray[0].getText())
    //
    //         for (let vehicle of elementsArray){
    //             // console.log('}}}}}}}}}}}}}}}}',await vehicle.getText())
    //             await browser.waitUntil(
    //                 async ()=>vehicle.isExisting()
    //             )
    //             await vehicle.click()
    //             if(!await VehicleDetails.lblAdTitle.isDisplayed()){
    //                 await VehicleDetails.lblAdTitle.waitForDisplayed({timeout:60000})
    //
    //                 console.log('--->',await VehicleDetails.lblAdTitle.getText())
    //             }
    //             await VehicleDetails.lblAdTitle.waitForDisplayed({timeout:60000}).then(function (ttt) {
    //                 console.log('--->',ttt)
    //             })
    //             // console.log('--->',await VehicleDetails.lblAdTitle.getText())
    //             await browser.back()
    //         }
    //         await browser.pause(5000)
    //
    //         // console.log('---------District', await Vehicles.getLnkDistrict(data.District).click())
    //         // console.log('---------District', data.District)
    //     }
    //     // await Vehicles.getLnkDistrict(this.getAllCarsTestDataFromExcel().District)
    //     // await Vehicles.getAllAds()
    // }

    async performDDT(){ //Returning ads list in page 1
        await browser.pause(3000)
        let elementsArray = []
        let details = [{}]
        let carsList = []

        for (let data of this.getAllCarsTestDataFromExcel()){

            await $("//span[normalize-space()='"+data.District+"']/ancestor::a").click()
            await Vehicles.btnCars.click()
            if ( !await Vehicles.txtMinPrice.isDisplayed()){
                await Vehicles.btnPrice.click()
            }
            await Vehicles.txtMinPrice.clearValue()
            await Vehicles.txtMaxPrice.clearValue()
            await Vehicles.txtMinPrice.setValue(data.min_price)//Add a clear value
            await Vehicles.txtMaxPrice.setValue(data.max_price)
            await Vehicles.btnApplyPrice.click()
            await browser.pause(5000)

            await Vehicles.lnkAds.then(function (ttt) {


                for (let element of ttt){
                    elementsArray.push(element) //Elements are not getting pushed. Need to check here
                }
            })
            for (let vehicle of elementsArray) {
                // console.log('}}}}}}}}}}}}}}}}',await vehicle.getText())
                await browser.waitUntil(
                    async () => vehicle.isExisting()
                )
                await vehicle.click()
                if (!await VehicleDetails.lblAdTitle.isDisplayed()) {
                    await VehicleDetails.lblAdTitle.waitForDisplayed({timeout: 60000})

                    console.log('--->', await VehicleDetails.lblAdTitle.getText())
                }
                console.log('--->', await VehicleDetails.lblAdTitle.getText())
                await VehicleDetails.btnShowPhoneNumber.click()

                console.log('--->', await VehicleDetails.lblPhoneNumber.getText())
                console.log('--->', await VehicleDetails.lblYear.getText())
                console.log('--->', await VehicleDetails.lblPrice.getText())
                console.log('--->', await VehicleDetails.lblLocation.getText())

                let cars = [{
                    title: await VehicleDetails.lblPhoneNumber.getText(),
                    year: await VehicleDetails.lblYear.getText(),
                    price: await VehicleDetails.lblPrice.getText(),
                    location: await VehicleDetails.lblLocation.getText(),
                    phone: await VehicleDetails.lblPhoneNumber.getText()
                }]

                console.log(cars)

                 carsList.push(cars)

                await browser.back()

            }//////
            console.log(carsList)
            excelWriter.excelToJson("Cars",carsList)
        }
        return elementsArray
    }

    // async openAdvertisementsByElement(elementsArray) {
    //     // elementsArray.forEach(aaa=>{
    //     //     aaa.then(function (abc) {
    //     //         console.log('abc resolved', abc.getText())
    //     //     })
    //     //     (async () => console.log(']]]',await aaa.getText())
    //     //     )()
    //     // })
    //
    //
    //     for (let vehicle of elementsArray) {
    //         // console.log('}}}}}}}}}}}}}}}}',await vehicle.getText())
    //         await browser.waitUntil(
    //             async () => vehicle.isExisting()
    //         )
    //         // await vehicle.click()
    //         if (!await VehicleDetails.lblAdTitle.isDisplayed()) {
    //             await VehicleDetails.lblAdTitle.waitForDisplayed({timeout: 60000})
    //
    //             console.log('--->', await VehicleDetails.lblAdTitle.getText())
    //         }
    //         console.log('--->', await VehicleDetails.lblAdTitle.getText())
    //         await VehicleDetails.btnShowPhoneNumber.click()
    //         console.log('--->', await VehicleDetails.lblPhoneNumber.getText())
    //         console.log('--->', await VehicleDetails.lblYear.getText())
    //         console.log('--->', await VehicleDetails.lblPrice.getText())
    //         console.log('--->', await VehicleDetails.lblLocation.getText())
    //
    //         // console.log('--->',await VehicleDetails.lblAdTitle.getText())
    //         await browser.back()
    //         //         }
    //     }
    // }

}
export default new DDTManager();