declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to verify a page's heading element that has data-test="title"
     * @param expectedTitle Text expected inside the element
     */
    verifyPageTitle(expectedTitle: string): Chainable<Subject>;
  }
}