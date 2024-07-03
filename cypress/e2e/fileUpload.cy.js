//  test url: https://the-internet.herokuapp.com/upload
// install package command: npm install --save-dev cypress-file-upload

import 'cypress-file-upload'

describe('Files Uploads', () => {

    it('Single file upload', ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("test01.pdf")
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] > h3").should("have.text", "File Uploaded!")
        
})

it.only('File upload - Rename', ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").attachFile({filePath: "test01.pdf", fileName: "myFile.pdf"}) // rename the file during uploading
    cy.get("#file-submit").click()
    cy.wait(5000)
    cy.get("div[class='example'] > h3").should("have.text", "File Uploaded!")
    
})

it('File upload - Drag and drop', ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#drag-drop-upload").attachFile("test01.pdf", {subjectType: "drag-n-drop"})
    cy.wait(5000)
    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
    .contains("test01.pdf")
    
})

// url: https://davidwalsh.name/demo/multiple-file-upload.php
it('Multiple Files upload - Drag and drop', ()=>{
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
    cy.get("#filesToUpload").attachFile(["test01.pdf", "test02.pdf"])
    cy.wait(5000)
    cy.get("cy.get(':nth-child(6) > strong')").should("contain.text", "Files You Selected:")
    
})

// url: https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm
it('File upload - Shadow DOM', ()=>{
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")

    // Alert: This element is not interactable through selenium(automation) as it is not visible in UI. Try any near by element. Learn more...
    cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile("test01.pdf") 
    cy.wait(5000)
    cy.get(".smart-item-name", {includeShadowDom:true}).should("contain.text", "test01.pdf")
})
})