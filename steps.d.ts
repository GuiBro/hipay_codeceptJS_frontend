/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type fraudManagementPage = typeof import('./pages/FraudManagement.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, fraudManagementPage: fraudManagementPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
