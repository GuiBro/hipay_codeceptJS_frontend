const fraudManagementPage = require('./pages/FraudManagement.js')

module.exports = function() {
  return actor({
    user_lastname: 'Vador',
    user_phone: '0123456789',

    fillFraudContactForm() {
      this.appendField(fraudManagementPage.champs_contact.last_name, this.user_lastname),
      this.appendField(fraudManagementPage.champs_contact.phone_number, this.user_phone)
    }
  });
}
