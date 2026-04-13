const { I, fraudManagementPage } = inject();
// Add in your custom step files

//  Background
Given('I am on the fraud management page', () => {
  I.amOnPage(fraudManagementPage.url);
  I.see(fraudManagementPage.label.title);
  I.see(fraudManagementPage.label.description);
});

//  Scenario 1
When('I request a tool demo', () => {
  I.click(fraudManagementPage.buttons.request_demo);
  I.see(fraudManagementPage.label.contact_title);
  I.see(fraudManagementPage.label.contact_aboutyou);
});

When('I fill the contact form with incomplete details', () => {
  I.appendField(fraudManagementPage.champs_contact.last_name, 'Vador')
  I.appendField(fraudManagementPage.champs_contact.phone_number, '0123456789')
});

When('I submit the contact form', () => {
  I.scrollTo(fraudManagementPage.buttons.submit_contact);
  I.click(fraudManagementPage.buttons.submit_contact);
});

Then('I should see a contact input error message', () => {
  I.see(fraudManagementPage.label.erreur_saisie_contact);
});

//  Scenario 2
When('I scroll to the anti-fraud rules section', () => {
  I.amOnPage(fraudManagementPage.url);
  I.scrollPageToBottom;
  I.scrollTo(fraudManagementPage.label.title_slider_antifraud);
});

Then('I should see and navigate through all anti-fraud rules', () => {
  fraudManagementPage.verifyAntifraudSliderDisplay();
});
