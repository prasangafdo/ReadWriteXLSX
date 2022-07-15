import ExcelReader from '../util/ExcelReader';
import Vehicles from '../pageobjects/vehicles.page';
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
            await browser.pause(5000)

            // console.log('---------District', await Vehicles.getLnkDistrict(data.District).click())
            // console.log('---------District', data.District)
        }
        // await Vehicles.getLnkDistrict(this.getAllCarsTestDataFromExcel().District)
        // await Vehicles.getAllAds()
    }

}
export default new DDTManager();