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
        await browser.pause(2000)
        await AdBlock.closeAdBlockTab()
        // await Landing.lnkVehicles.click()
        // await browser.pause(5000)
        // expect(await Vehicle.lblVehiclesTopic).toBeDisplayed()
        // await Vehicle.closeAdPopup()
        // expect(await Vehicle.lblVehiclesTopic).toHaveText('Vehicles')
        // await Vehicle.closeAdPopup()
        // await Vehicle.getLnkDistrict('Colombo')
        // await Vehicle.closeAdPopup()
        // await browser.pause(5000)
    });//[@section='content column logo-section']//*[name()='svg']
});


