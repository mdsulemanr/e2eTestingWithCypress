import CaptureScreenshot from '../Pages/CaptureScreenshot';

describe('My Suite', () => {
    const captureScreenshot = new CaptureScreenshot;

    it.only('Capture SS & Videos', () => {
        captureScreenshot.visit();
        captureScreenshot.captureHomepageScreenshot();
        cy.wait(5000);
        captureScreenshot.captureLogoScreenshot();
    });

    it('Capture SS & Videos - Automatically', () => {
        captureScreenshot.visit();

        // Automatically capture SS & Video on failure - only when you execute through CLI
        captureScreenshot.clickCameraPage();
        cy.wait(5000);
        captureScreenshot.checkWidget();
        captureScreenshot.verifyWidgetChecked();
        captureScreenshot.verifyTabletsText();
    });
});
