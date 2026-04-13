const { I } = inject();

module.exports = {
  url: '/our-solutions/fraud-management/',
  champs_contact: {
    last_name: '//input[@name="lastname"]',
    phone_number: '//input[@name="phone"]'
  },
  buttons: {
    request_demo: 'Request a tool demo',
    submit_contact: 'input.submit-button',
    slider_previous: 'button[aria-label="slider previous"]',
    slider_next: 'button[aria-label="slider next"]'
  },
  label: {
    title: 'Strike the balance between safety and customer experience',
    description: 'Fight fraud effectively by maximizing your conversion rate through simplified authentication. Up to +7pts on the net success rate of our merchants thanks to our anti-fraud tool and Acquirer TRA.',
    contact_title: 'Ready to learn more about our anti-fraud tool?',
    contact_aboutyou: 'About you',
    erreur_saisie_contact: 'Sorry, there must have been an error. Please try again.',
    title_slider_antifraud: '//h2[contains(text(), "Define your own anti-fraud rules")]'
  },
  labels_slider_antifraud: {
    device_fingerprint: {
      title: 'Device fingerprint',
      description: "This fingerprint, collected for identification purposes, is used to detect anonymous proxy servers or to check if the buyer's personal information has been altered."
    },
    velocity_controls: {
      title: 'Velocity controls',
      description: 'These settings help with the choice of an action or a score based on different criteria (email address, card, phone, IP address) and on how often a customer has completed a purchase over a certain period of time.'
    },
    payment_data: {
      title: 'Payment data',
      description: 'The information related to a payment is used to analyze the level of risk associated with a transaction: customer email address, IP location, credit card country, shipping and billing country, payment method, etc.'
    },
    limited_expenses: {
      title: 'Limited expenses',
      description: 'This filter lets you set limits and control levels based on transaction amounts as well as your customers’ purchasing habits over a certain period of time.'
    },
    consistency_controls: {
      title: 'Consistency controls',
      description: 'The tool makes sure the information related to a given payment is consistent (e.g. card country different from IP country, billing address different from delivery address).'
    },
    activity_controls: {
      title: 'Activity controls',
      description: 'High-risk purchasing behaviors are detected by analyzing a variety of data over a certain period of time for one customer (e.g. number of different cards used for the same email address).'
    },
    customized_data: {
      title: 'Customized data',
      description: 'You can set up specific actions or scores based on your business data. You can add an infinite number of custom data, such as rules on baskets that contain products targeted by fraudsters.'
    }
  },
  verifyAntifraudSliderDisplay() {
    const entries = Object.values(this.labels_slider_antifraud);

    entries.forEach((label, index) => {
      if (index === 0) {
        I.seeAttributesOnElements(this.buttons.slider_previous, {disabled: true});
      }
      I.see(label.title);
      I.see(label.description);
      if (index === entries.length - 1) {
        I.seeElement(this.buttons.slider_next + ':disabled');
      } 
      else {
        I.click(this.buttons.slider_next);
      }
    }
    )
  }

}
