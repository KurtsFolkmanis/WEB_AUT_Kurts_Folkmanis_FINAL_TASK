export default class FormPage {
    static visit() {
        return cy.visit("https://demoqa.com/automation-practice-form");
    }

    static get firstNameInput() {
        return cy.get("#firstName");
    }

    static get lastNameInput() {
        return cy.get("#lastName");
    }

    static get emailInput() {
        return cy.get("#userEmail");
    }

    static get genderRadio() {
        return cy.get("#genterWrapper");
    }

    static get phoneNumberInput() {
        return cy.get("#userNumber");
    }

    static get dateOfBirthInput() {
        return cy.get("#dateOfBirthInput");
    }

    static get dateOfBirthYear() {
        return cy.get(".react-datepicker__year-select");
    }

    static get dateOfBirthMonth() {
        return cy.get(".react-datepicker__month-select");
    }

    static get dateOfBirthDay28() {
        return cy.get("[aria-label=\"Choose Friday, February 28th, 1930\"]");
    }

    static get subjectsInput() {
        return cy.get("#subjectsInput");
    }

    static get hobbiesRadio() {
        return cy.get("#hobbiesWrapper");
    }

    static get selectPictureButton() {
        return cy.get("#uploadPicture");
    }

    static get currentAddressTextarea() {
        return cy.get("#currentAddress");
    }

    static get stateDropdown() {
        return cy.get("#state");
    }

    static get cityDropdown() {
        return cy.get("#city");
    }

    static get submitButton() {
        return cy.get("#submit");
    }

    static get resultTable() {
        return cy.get("table");
    }
}