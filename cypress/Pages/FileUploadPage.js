class FileUploadPage {
    // Selectors
    selectors = {
        fileUploadInput: "#file-upload",
        fileSubmitButton: "#file-submit",
        uploadSuccessMessage: "div[class='example'] > h3",
        dragDropUploadArea: "#drag-drop-upload",
        uploadedFileName: '#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span',
        multipleFileUploadInput: "#filesToUpload",
        multipleUploadMessage: ":nth-child(6) > strong",
        shadowDomFileInput: ".smart-browse-input",
        shadowDomUploadedFileName: ".smart-item-name"
    }

    // String constants
    strings = {
        internetUrl: "https://the-internet.herokuapp.com/upload",
        davidWalshUrl: "https://davidwalsh.name/demo/multiple-file-upload.php",
        htmlElementsUrl: "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm",
        fileName: "test01.pdf",
        renamedFileName: "myFile.pdf",
        multipleUploadMessageText: "Files You Selected:",
        uploadSuccessText: "File Uploaded!"
    }

    // Getters
    getFileUploadInput() {
        return cy.get(this.selectors.fileUploadInput);
    }

    getFileSubmitButton() {
        return cy.get(this.selectors.fileSubmitButton);
    }

    getUploadSuccessMessage() {
        return cy.get(this.selectors.uploadSuccessMessage);
    }

    getDragDropUploadArea() {
        return cy.get(this.selectors.dragDropUploadArea);
    }

    getUploadedFileName() {
        return cy.get(this.selectors.uploadedFileName);
    }

    getMultipleFileUploadInput() {
        return cy.get(this.selectors.multipleFileUploadInput);
    }

    getMultipleUploadMessage() {
        return cy.get(this.selectors.multipleUploadMessage);
    }

    getShadowDomFileInput() {
        return cy.get(this.selectors.shadowDomFileInput, { includeShadowDom: true });
    }

    getShadowDomUploadedFileName() {
        return cy.get(this.selectors.shadowDomUploadedFileName, { includeShadowDom: true });
    }

    // Actions
    visitInternetUrl() {
        cy.visit(this.strings.internetUrl);
    }

    visitDavidWalshUrl() {
        cy.visit(this.strings.davidWalshUrl);
    }

    visitHtmlElementsUrl() {
        cy.visit(this.strings.htmlElementsUrl);
    }

    attachSingleFile(fileName) {
        this.getFileUploadInput().attachFile(fileName);
    }

    attachFileWithNewName(filePath, fileName) {
        this.getFileUploadInput().attachFile({ filePath, fileName });
    }

    attachFileDragAndDrop(fileName) {
        this.getDragDropUploadArea().attachFile(fileName, { subjectType: "drag-n-drop" });
    }

    attachMultipleFiles(fileNames) {
        this.getMultipleFileUploadInput().attachFile(fileNames);
    }

    attachFileToShadowDom(fileName) {
        this.getShadowDomFileInput().attachFile(fileName);
    }

    clickSubmitButton() {
        this.getFileSubmitButton().click();
    }

    // Assertions
    verifyUploadSuccess() {
        this.getUploadSuccessMessage().should("have.text", this.strings.uploadSuccessText);
    }

    verifyUploadedFileName(fileName) {
        this.getUploadedFileName().contains(fileName);
    }

    verifyMultipleUploadMessage() {
        this.getMultipleUploadMessage().should("contain.text", this.strings.multipleUploadMessageText);
    }

    verifyShadowDomUploadedFileName(fileName) {
        this.getShadowDomUploadedFileName().should("contain.text", fileName);
    }
}

export default FileUploadPage;
