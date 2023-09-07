/* global describe it expect Party */
describe('<<<<  PARTY  >>>>', () => {
  describe('PROPERTIES', () => {
    var theParty;
    beforeEach(() => {
      theParty = new Party();
    });
    it('Should have a .party property', () => {
      expect(theParty.hasOwnProperty('party')).toBeTruthy();
    });
  });
});