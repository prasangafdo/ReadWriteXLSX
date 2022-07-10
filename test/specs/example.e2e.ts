import SecurePage from '../pageobjects/secure.page';
import Landing from '../pageobjects/landing.page';
import AdBlock from '../pageobjects/adblock.page';
import Vehicle from '../pageobjects/vehicles.page';

describe('Ikman.lk', () => {
    it('test the page is loading', async () => {
        await Landing.open();
        expect(await Landing.imgCompanyLogo).toBeDisplayed()
    });

    it('test user can search cars ', async ()=> {
        // await Landing.open();
        await Landing.switchToAdvertisementTab()
        await browser.pause(2000)
        await Landing.lnkVehicles.click()
        expect(await Vehicle.lblVehiclesTopic).toBeDisplayed()
        expect(await Vehicle.lblVehiclesTopic).toHaveText('Vehicles')
        await Vehicle.openVehiclesByDistrict('Colombo')
        expect(await Vehicle.lblLocation.getText()).toHaveText('Colombo')
        await Vehicle.btnCars.click()
        await Vehicle.btnPrice.click()
        await Vehicle.txtMinPrice.setValue('100000')
        await Vehicle.txtMaxPrice.setValue('1000000')
        await Vehicle.btnApplyPrice.click()
        await Vehicle.getAllAds()
        await browser.pause(5000)
    });//[@section='content column logo-section']//*[name()='svg']
});


