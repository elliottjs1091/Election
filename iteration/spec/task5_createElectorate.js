/* global describe beforeEach Controller it expect Electorate */
describe('task5 adding Elecrorate', () => {
    describe('Elecorate Properties', () => {
        let theElectorate
        beforeEach(() => {
            theElectorate = new Electorate('Auckland Central', 'The New Zealand National Party')
        })
        it('should have a .name property', () => {
            expect(theElectorate.hasOwnProperty('name')).toBeTruthy()
        })
        it('should have a .party property', () => {
            expect(theElectorate.hasOwnProperty('party')).toBeTruthy()
        })
    })
    describe('values of Electorate from the setup method of Controller ', () => {
        var theElectorate
        beforeEach(() => {
            theElectorate = Controller.setupElectorate()
        })

        it('should have the correct name', () => {
            expect(theElectorate.name).toBe('Auckland Central')
        })

        it('should have the correct name', () => {
            expect(theElectorate.party).toBe('The New Zealand National Party')
        })
    })

    describe('types of values of Electorate from the setup method of Controller ', () => {
        var theElectorate
        beforeEach(() => {
            theElectorate = Controller.setupElectorate()
        })
        it('name should NOT have leading spaces', () => {
            expect(theElectorate.name[0]).not.toBe(' ')
        })
        it('name should NOT have trailing spaces', () => {
            expect(theElectorate.name[theElectorate.name.length-1]).not.toBe(' ')
        })
        it('party should NOT have leading spaces', () => {
            expect(theElectorate.party[0]).not.toBe(' ')
        })
        it('party should NOT have trailing spaces', () => {
            expect(theElectorate.party[theElectorate.party.length-1]).not.toBe(' ')
        })
    })
}) 