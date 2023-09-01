/* global describe beforeEach Controller it expect Election */
describe('Task 1 - Adding Election -', () => {
  
  describe('Election properties -', () => {
    let theElection
    beforeEach(() => {
      theElection = new Election('New Zealand Election', 2023)
    })

    it('Should have a .name property', () => {
       expect(theElection.hasOwnProperty('name')).toBeTruthy()
    })

    it('Should have a .year property', () => {
      expect(theElection.hasOwnProperty('year')).toBeTruthy()
    })
  })

  describe('Values of Election from the setup method of Controller -', () => {
    var theElection
    beforeEach(() => {
      theElection = Controller.setup()
    })

    it('Should have the correct name', () => {
      expect(theElection.name).toBe('New Zealand Election')
    })

    it('Should have the correct year', () => {
       expect(theElection.year).toBe(2023)
    })
  })
  
    describe('Types of values of Election from the setup method of Controller -', () => {
      var theElection
      beforeEach(() => {
        theElection = Controller.setup()
      })

      it('Name should NOT have leading spaces', () => {
        expect(theElection.name[0]).not.toBe(' ')
      })
      
      it('Name should NOT have trailing spaces', () => {
        expect(theElection.name[theElection.name.length-1]).not.toBe(' ')
      })


      it('Year should be a number', () => {
         expect(typeof theElection.year).toBe('number')
      })
  })
})