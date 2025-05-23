import FormPage from "../pageObjects/FormPage.js";

describe("FINAL TASK", () => {
  context("Form test", () => {
    beforeEach(() => {
      FormPage.visit("https://demoqa.com/automation-practice-form");
    })

    it("Fill form", () => {
      const name = "Kurts";
      const lastName = "Folkmanis";
      const email = "name@email.com";
      const number  = "28741322";

      FormPage.firstNameInput.type(name);
      FormPage.lastNameInput.type(lastName);
      FormPage.emailInput.type(email);
      FormPage.genderRadio.find("input[value='Male']").check({ force: true });
      FormPage.phoneNumberInput.type(number);

      FormPage.dateOfBirthInput.click();
      FormPage.dateOfBirthYear.select("1930");
      FormPage.dateOfBirthMonth.select("February");
      FormPage.dateOfBirthDay28.click();

      // Date picker didn't close itself without clicking somewhere outside of it.
      cy.get("body").click(0, 0);

      FormPage.subjectsInput.type("Economics{enter}");
      FormPage.hobbiesRadio.find("input[value='3']").check({ force: true });
      FormPage.selectPictureButton.selectFile("./cypress/files/Test.jpg", { action: "select" });
      FormPage.currentAddressTextarea.type("Talsi");
      FormPage.stateDropdown.click().find("#react-select-3-option-0").click();
      FormPage.cityDropdown.click().find("#react-select-4-option-0").click();
      FormPage.submitButton.click();

      FormPage.resultTable.should("contain.text", name);
      FormPage.resultTable.should("contain.text", lastName);
      FormPage.resultTable.should("contain.text", email);
      FormPage.resultTable.should("contain.text", number);
      FormPage.resultTable.should("contain.text", "28 February,1930");
      FormPage.resultTable.should("contain.text", "Economics");
      FormPage.resultTable.should("contain.text", "Music");
      FormPage.resultTable.should("contain.text", "Test.jpg");
      FormPage.resultTable.should("contain.text", "Talsi");
      FormPage.resultTable.should("contain.text", "NCR Delhi");
    });
  });
});