class MouseOperationsPage {
    // Selectors
    selectors = {
        navToggle: '.nav > :nth-child(1) > .dropdown-toggle',
        subOption: "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)",
        contextMenuButton: ".context-menu-one.btn.btn-neutral",
        contextMenuItem: ".context-menu-item.context-menu-icon.context-menu-icon-edit",
        iframeResultButton: "button[ondblclick='myFunction()']",
        iframeField: "#field2",
        dragSource: "#box6",
        dragTarget: "#box106",
        pakistanFlag: ':nth-child(2) > tbody > :nth-child(35) > :nth-child(1) > img',
        afghanistanFlag: ':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img',
        footer: '#footer'
    }

    // String constants
    strings = {
        opencartUrl: "https://demo.opencart.com/index.php?route=common/home&language=en-gb",
        contextMenuUrl: "https://swisnl.github.io/jQuery-contextMenu/demo.html",
        w3schoolsUrl: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3",
        dragDropUrl: "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html",
        flagsUrl: "https://www.countries-ofthe-world.com/flags-of-the-world.html",
        iframeId: "iframeResult",
        doubleClickValue: "Hello World!"
    }

    // Getters
    getNavToggle() {
        return cy.get(this.selectors.navToggle);
    }

    getSubOption() {
        return cy.get(this.selectors.subOption);
    }

    getContextMenuButton() {
        return cy.get(this.selectors.contextMenuButton);
    }

    getContextMenuItem() {
        return cy.get(this.selectors.contextMenuItem);
    }

    getIframeResultButton() {
        return cy.iframe(this.strings.iframeId).find(this.selectors.iframeResultButton);
    }

    getIframeField() {
        return cy.iframe(this.strings.iframeId).find(this.selectors.iframeField);
    }

    getDragSource() {
        return cy.get(this.selectors.dragSource);
    }

    getDragTarget() {
        return cy.get(this.selectors.dragTarget);
    }

    getPakistanFlag() {
        return cy.get(this.selectors.pakistanFlag);
    }

    getAfghanistanFlag() {
        return cy.get(this.selectors.afghanistanFlag);
    }

    getFooter() {
        return cy.get(this.selectors.footer);
    }

    // Actions
    visitOpencartUrl() {
        cy.visit(this.strings.opencartUrl);
    }

    visitContextMenuUrl() {
        cy.visit(this.strings.contextMenuUrl);
    }

    visitW3schoolsUrl() {
        cy.visit(this.strings.w3schoolsUrl);
    }

    visitDragDropUrl() {
        cy.visit(this.strings.dragDropUrl);
    }

    visitFlagsUrl() {
        cy.visit(this.strings.flagsUrl);
    }

    triggerMouseOverAndClick() {
        this.getNavToggle().trigger('mouseover').click();
    }

    triggerContextMenu() {
        this.getContextMenuButton().trigger('contextmenu');
    }

    rightClick() {
        this.getContextMenuButton().rightclick();
    }

    triggerDoubleClick() {
        this.getIframeResultButton().dblclick();
    }

    dragAndDrop() {
        this.getDragSource().drag(this.getDragTarget(), { force: true });
    }

    scrollToPakistanFlag() {
        this.getPakistanFlag().scrollIntoView({ duration: 2000 });
    }

    scrollToAfghanistanFlag() {
        this.getAfghanistanFlag().scrollIntoView({ duration: 1000 });
    }

    scrollToFooter() {
        this.getFooter().scrollIntoView({ duration: 6000 });
    }

    // Assertions
    verifySubOptionVisibility(visible) {
        this.getSubOption().should(visible ? 'be.visible' : 'not.be.visible');
    }

    verifyContextMenuItemVisibility() {
        this.getContextMenuItem().should('be.visible');
    }

    verifyIframeFieldValue() {
        this.getIframeField().should('have.value', this.strings.doubleClickValue);
    }

    verifyFlagVisibility(flag, visible) {
        flag.should(visible ? 'be.visible' : 'not.be.visible');
    }

    verifyFooterVisibility() {
        this.getFooter().should('be.visible');
    }
}

export default MouseOperationsPage;
