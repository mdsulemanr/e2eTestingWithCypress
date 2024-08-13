import 'cypress-iframe';
import '@4tw/cypress-drag-drop';
import MouseOperationsPage from './pages/MouseOperationsPage';

// Test URL: https://demo.opencart.com/index.php?route=common/home&language=en-gb
describe('Mouse Operations', () => {
    const mouseOperationsPage = new MouseOperationsPage();

    // Mouse Hover action
    it('Mouse Hover', () => {
        mouseOperationsPage.visitOpencartUrl();
        mouseOperationsPage.verifySubOptionVisibility(false);
        mouseOperationsPage.triggerMouseOverAndClick(); // hover over option
        mouseOperationsPage.verifySubOptionVisibility(true);
    });

    // Mouse right-click action - Approach 1
    // URL: https://swisnl.github.io/jQuery-contextMenu/demo.html
    it('Mouse right-click only - Approach 1', () => {
        mouseOperationsPage.visitContextMenuUrl();
        mouseOperationsPage.triggerContextMenu(); // right click context menu
        mouseOperationsPage.verifyContextMenuItemVisibility();
    });

    // Mouse right-click action - Approach 2
    // URL: https://swisnl.github.io/jQuery-contextMenu/demo.html
    it('Mouse right-click only - Approach 2', () => {
        mouseOperationsPage.visitContextMenuUrl();
        mouseOperationsPage.rightClick();
        mouseOperationsPage.verifyContextMenuItemVisibility();
    });

    // Mouse double-click action
    // URL: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3
    it('Mouse double-click', () => {
        mouseOperationsPage.visitW3schoolsUrl();
        cy.frameLoaded(mouseOperationsPage.strings.iframeId); // load the frame
        mouseOperationsPage.triggerDoubleClick(); // double click action
        mouseOperationsPage.verifyIframeFieldValue();
    });

    // Drag and drop
    // URL: http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html
    it('Drag and drop', () => {
        mouseOperationsPage.visitDragDropUrl();
        mouseOperationsPage.getDragSource().should('be.visible');
        mouseOperationsPage.getDragTarget().should('be.visible');
        mouseOperationsPage.dragAndDrop();
    });

    // Scroll the page
    // URL: https://www.countries-ofthe-world.com/flags-of-the-world.html
    it.only('Scroll the page', () => {
        mouseOperationsPage.visitFlagsUrl();
        
        // Pakistan flag
        mouseOperationsPage.scrollToPakistanFlag();
        mouseOperationsPage.verifyFlagVisibility(mouseOperationsPage.getPakistanFlag(), true);

        // Afghanistan flag
        mouseOperationsPage.scrollToAfghanistanFlag();
        mouseOperationsPage.verifyFlagVisibility(mouseOperationsPage.getAfghanistanFlag(), true);

        // go to footer
        mouseOperationsPage.scrollToFooter();
        mouseOperationsPage.verifyFooterVisibility();
    });
});
