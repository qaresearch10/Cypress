class Elements {  
  addElementButton = "button[onclick='addElement()']";
  deleteElementButton = "button[onclick='deleteElement()']";
}

class addRemoveElementsPage {
  constructor() {
    this.elements = new Elements();
  }
  // Methods
  addElements(elements = 1) {
    for (let i = 0; i < elements; i++) {
      cy.get(this.elements.addElementButton).click();
    }
  }

  deleteAllElements() {
    cy.get(this.elements.deleteElementButton).each(($btn) => {
      cy.wrap($btn).click();
    });
  }
}

export default new addRemoveElementsPage();
