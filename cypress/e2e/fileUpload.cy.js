// Test URL: https://the-internet.herokuapp.com/upload
// Install package command: npm install --save-dev cypress-file-upload

import 'cypress-file-upload';
import FileUploadPage from '../Pages/FileUploadPage';

describe('Files Uploads', () => {
    const fileUploadPage = new FileUploadPage();

    it('Single file upload', () => {
        fileUploadPage.visitInternetUrl();
        fileUploadPage.attachSingleFile(fileUploadPage.strings.fileName);
        fileUploadPage.clickSubmitButton();
        cy.wait(5000);
        fileUploadPage.verifyUploadSuccess();
    });

    it('File upload - Rename', () => {
        fileUploadPage.visitInternetUrl();
        fileUploadPage.attachFileWithNewName(fileUploadPage.strings.fileName, fileUploadPage.strings.renamedFileName);
        fileUploadPage.clickSubmitButton();
        cy.wait(5000);
        fileUploadPage.verifyUploadSuccess();
    });

    it('File upload - Drag and drop', () => {
        fileUploadPage.visitInternetUrl();
        fileUploadPage.attachFileDragAndDrop(fileUploadPage.strings.fileName);
        cy.wait(5000);
        fileUploadPage.verifyUploadedFileName(fileUploadPage.strings.fileName);
    });

    // URL: https://davidwalsh.name/demo/multiple-file-upload.php
    it('Multiple Files upload - Drag and drop', () => {
        fileUploadPage.visitDavidWalshUrl();
        fileUploadPage.attachMultipleFiles([fileUploadPage.strings.fileName, "test02.pdf"]);
        cy.wait(5000);
        fileUploadPage.verifyMultipleUploadMessage();
    });

    // URL: https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm
    it('File upload - Shadow DOM', () => {
        fileUploadPage.visitHtmlElementsUrl();
        fileUploadPage.attachFileToShadowDom(fileUploadPage.strings.fileName);
        cy.wait(5000);
        fileUploadPage.verifyShadowDomUploadedFileName(fileUploadPage.strings.fileName);
    });
});
