/* global describe it expect Party */
describe('Task 2 - Adding Party -', () => {
  describe('Party Properties -', () => {
    let theParty
    beforeEach(() => {
      theParty = new Party('ACT New Zealand')
    })

    it('Should have a .name property', () => {
        expect(theParty.hasOwnProperty('name')).toBeTruthy()
    })
  })
})