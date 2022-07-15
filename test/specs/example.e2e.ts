import SecurePage from '../pageobjects/secure.page';
import Landing from '../pageobjects/landing.page';
import AdBlock from '../pageobjects/adblock.page';
import Vehicle from '../pageobjects/vehicles.page';
import VehicleDetails from '../pageobjects/vehicle.details.page';
import DDTManager from '../util/DDTManager';

const testDataFile = './test/testdata/TestData.xlsx'

describe('Ikman.lk', () => {
    // it('test the page is loading', async () => {
    //     await Landing.open();
    //     expect(await Landing.imgCompanyLogo).toBeDisplayed()
    // });

    // it('test user can search cars ', async ()=> {
    //     // await Landing.open();
    //     await Landing.switchToAdvertisementTab()
    //     await browser.pause(2000)
    //     await Landing.lnkVehicles.click()
    //     expect(await Vehicle.lblVehiclesTopic).toBeDisplayed()
    //     expect(await Vehicle.lblVehiclesTopic).toHaveText('Vehicles')
    //     await Vehicle.openVehiclesByDistrict('Colombo')
    //     expect(await Vehicle.lblLocation.getText()).toHaveText('Colombo')
    //     await Vehicle.btnCars.click()
    //     await Vehicle.btnPrice.click()
    //     await Vehicle.txtMinPrice.setValue('100000')
    //     await Vehicle.txtMaxPrice.setValue('1000000')
    //     await Vehicle.btnApplyPrice.click()
    //     // await Vehicle.getAllAds()
    //     await VehicleDetails.allAdDetails()
    //     // await VehicleDetails.getAAA(await VehicleDetails.allAdDetails())
    //     // await browser.pause(5000)
    // }).timeout(900000);

    // it('Excel read test', async()=>{
    //     ExcelReader.excelToJson(testDataFile, 0)
    // })

    it('test user can search cars using Data driven testing', async ()=> {
        await Landing.open();
        await Landing.switchToAdvertisementTab()
        await browser.pause(2000)
        await Landing.lnkVehicles.click()
        expect(await Vehicle.lblVehiclesTopic).toBeDisplayed()
        expect(await Vehicle.lblVehiclesTopic).toHaveText('Vehicles')

await DDTManager.performDDT()
        // expect(await Vehicle.lblLocation.getText()).toHaveText('Colombo')
        // await Vehicle.btnCars.click()
        // await Vehicle.btnPrice.click()
        // await Vehicle.txtMinPrice.setValue('100000')
        // await Vehicle.txtMaxPrice.setValue('1000000')
        // await Vehicle.btnApplyPrice.click()
        // // await Vehicle.getAllAds()
        // await VehicleDetails.allAdDetails()
        // await VehicleDetails.getAAA(await VehicleDetails.allAdDetails())
        // await browser.pause(5000)
    }).timeout(900000);
});


