const { I } = inject();

module.exports = {
  // Sélecteurs
  boutons: {
    fermerSansAccepter: '#axeptio_btn_dismiss'
  },

  acceptCookies() {
    I.waitForVisible(this.boutons.fermerSansAccepter, 5);
    I.click(this.boutons.fermerSansAccepter);
    I.waitForInvisible(this.boutons.fermerSansAccepter, 5);
  }
};