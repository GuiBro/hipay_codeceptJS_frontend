Feature('fraudmanagement');

Scenario('saisie contact incorrecte',  ({ I, fraudManagementPage }) => {
    // Affichage page "Solutions"
    I.amOnPage(fraudManagementPage.url);
    I.see(fraudManagementPage.label.title);
    I.see(fraudManagementPage.label.description);
    I.click(fraudManagementPage.buttons.request_demo);

    // Formulaire de contact
    I.see(fraudManagementPage.label.contact_title);
    I.see(fraudManagementPage.label.contact_aboutyou);
    I.appendField(fraudManagementPage.champs_contact.last_name, 'Vador')
    I.appendField(fraudManagementPage.champs_contact.phone_number, '0123456789')
    I.scrollTo(fraudManagementPage.buttons.submit_contact);
    I.click(fraudManagementPage.buttons.submit_contact);
    I.see(fraudManagementPage.label.erreur_saisie_contact);
});

Scenario('affichage slider regles anti fraude',  ({ I, fraudManagementPage }) => {
    I.amOnPage(fraudManagementPage.url);
    I.scrollPageToBottom;
    I.scrollTo(fraudManagementPage.label.title_slider_antifraud);
    fraudManagementPage.verifyAntifraudSliderDisplay();
});
