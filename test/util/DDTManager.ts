import ExcelReader from '../util/ExcelReader';
import Vehicles from '../pageobjects/vehicles.page';
import VehicleDetails from '../pageobjects/vehicle.details.page';
const testDataFile = './test/testdata/TestData.xlsx'

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
    async performDDT(){

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
            let elementsArray = []
            await Vehicles.getAllAds().then(function (ttt) {
                console.log('-----<', ttt)
                for (let element of ttt){
                    elementsArray.push(element)
                }
            })
            console.log('+++++++++<',elementsArray)
            console.log('+++++++++<',await elementsArray[0].getText())

            // for (let vehicle of aaa){
            //     console.log('}}}}}}}}}}}}}}}}',await vehicle.getText())
            //     await vehicle.click()
            //     console.log('--->',await VehicleDetails.lblAdTitle.getText())
            //     await browser.back()
            // }
            await browser.pause(5000)

            // console.log('---------District', await Vehicles.getLnkDistrict(data.District).click())
            // console.log('---------District', data.District)
        }
        // await Vehicles.getLnkDistrict(this.getAllCarsTestDataFromExcel().District)
        // await Vehicles.getAllAds()
    }

}
export default new DDTManager();