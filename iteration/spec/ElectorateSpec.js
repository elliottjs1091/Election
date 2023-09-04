/* global describe beforeEach Controller it expect Electorate */
describe('<<<<  ELECTORATE  >>>>', () => {
    describe('PROPERTIES', () => {
        let theElectorate
        beforeEach(() => {
            theElectorate = new Electorate
        })
        it('Should have a .electorate property', () => {
            expect(theElectorate.hasOwnProperty('electorate')).toBeTruthy()
        })
        it('Should have a .party property', () => {
            expect(theElectorate.hasOwnProperty('party')).toBeTruthy()
        })
    })
}) 