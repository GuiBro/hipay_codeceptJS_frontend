/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type fraudManagementPage = typeof import('./pages/FraudManagement.js');
type cookiesHandlingPage = typeof import('./pages/cookiesHandling.js');
type mobiappsHomepagePage = typeof import('./pages/MobiappsHomepage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, fraudManagementPage: fraudManagementPage, cookiesHandlingPage: cookiesHandlingPage, mobiappsHomepagePage: mobiappsHomepagePage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
