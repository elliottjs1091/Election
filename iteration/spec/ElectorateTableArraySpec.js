describe('<<<<  ELECTORATE TABLE AND ARRAY  >>>>', () =>{
    beforeEach( () => {
      theElection = new Election();
    });
    describe('EMPTY ELECTORATE TABLE', () => {
        beforeEach( () => {
        theElectorate = new Election ();
        });
        it('Should have a .electorateCount property in Election', () => {
        expect(theElectorate.hasOwnProperty('electorateCount')).toBeTruthy();
        });
        it('Should have a .electorateCount count of 0', () => {
        const count = theElection.electorateCount;
        expect(count).toBe(0);
        });
        it('Should have a .allElectorates property', () => {
        expect(theElection.hasOwnProperty('allElectorates')).toBeTruthy();
        });
        it('Should have an array for .allElectorates', () => {
        expect(Array.isArray(theElection.allElectorates)).toBeTruthy();
        });
        it('Should have nothing in the .allElectorates array', () => {
        const arraySize = theElection.allElectorates.length;
        expect(arraySize).toBe(0);
        });
    });
    describe('FIRST ENTRY IN THE ELECTORATE TABLE', () => {
        beforeEach( () => {
        theElection.addElectorate('Auckland Central', 'The New Zealand National Party');
        });
        it('Should have a .electorateCount count of 1 in the table', () => {
        const count = theElection.electorateCount;
        expect(count).toBe(1);
        });
        it('Should have one entry in the .allElectorates array', () => {
        const arraySize = theElection.allElectorates.length;
        expect(arraySize).toBe(1);
        });
        it('Should have Electorate in the .allParties array', () => {
        const anElectorate = theElection.allElectorates[0];
        expect(anElectorate instanceof Electorate).toBeTruthy();
        });
        describe('AUCKLAND CENTRAL & NATIONAL IN THE ELECTORATE TABLE', () => {
        var anElectorate;
        beforeEach( () => {
            anElectorate = theElection.allElectorates[0];
        });
        it('Should have an .electorate property', () => {
            expect(anElectorate.hasOwnProperty('electorate')).toBeTruthy();
        });
        it('Should have a .electorate instance of "Auckland Central"', () => {
            var theValue = anElectorate.electorate;
            expect(theValue).toBe('Auckland Central');
        });

        it('Should have a .party property', () => {
            expect(anElectorate.hasOwnProperty('party')).toBeTruthy();
        });
        it('Should have a .party instance of "The New Zealand National Party"', () => {
            var theValue = anElectorate.party;
            expect(theValue).toBe('The New Zealand National Party');
        });

        it('Should return the correct string', () => {
            var theWords = anElectorate.toString();
            expect(theWords).toBe('Auckland Central, The New Zealand National Party');
        });
        });
    });

    describe('LAST ENTRY IN THE ELECTORATE TABLE -', () => {
        beforeEach( () => {
            theElection.addElectorate('Auckland Central', 'The New Zealand National Party');
            theElection.addElectorate('Bay of Plenty', 'The New Zealand National Party');
            theElection.addElectorate('Botany', 'The Advance New Zealand Party');
            theElection.addElectorate('Christchurch Central', 'New Zealand Labour Party');
            theElection.addElectorate('Christchurch East', 'New Zealand Labour Party');
            theElection.addElectorate('Clutha-Southland', 'The New Zealand National Party');
            theElection.addElectorate('Coromandel', 'The New Zealand National Party');
            theElection.addElectorate('Dunedin North', 'New Zealand Labour Party');
            theElection.addElectorate('Dunedin South', 'New Zealand Labour Party');
            theElection.addElectorate('East Coast', 'The New Zealand National Party');
            theElection.addElectorate('East Coast Bays', 'The New Zealand National Party');
            theElection.addElectorate('Epsom', 'ACT New Zealand');
            theElection.addElectorate('Hamilton East', 'The New Zealand National Party');
            theElection.addElectorate('Hamilton West', 'The New Zealand National Party');
            theElection.addElectorate('Helensville', 'The New Zealand National Party');
            theElection.addElectorate('Hunua', 'The New Zealand National Party');
            theElection.addElectorate('Hutt South', 'The New Zealand National Party');
            theElection.addElectorate('Ilam', 'The New Zealand National Party');
            theElection.addElectorate('Invercargill', 'The New Zealand National Party');
            theElection.addElectorate('Kaikōura', 'The New Zealand National Party');
            theElection.addElectorate('Kelston', 'New Zealand Labour Party');
            theElection.addElectorate('Mana', 'New Zealand Labour Party');
            theElection.addElectorate('Māngere', 'New Zealand Labour Party');
            theElection.addElectorate('Manukau East', 'New Zealand Labour Party');
            theElection.addElectorate('Manurewa', 'New Zealand Labour Party');
            theElection.addElectorate('Maungakiekie', 'The New Zealand National Party');
            theElection.addElectorate('Mt Albert', 'New Zealand Labour Party');
            theElection.addElectorate('Mt Roskill', 'New Zealand Labour Party');
            theElection.addElectorate('Napier', 'New Zealand Labour Party');
            theElection.addElectorate('Nelson', 'The New Zealand National Party');
            theElection.addElectorate('New Lynn', 'New Zealand Labour Party');
            theElection.addElectorate('New Plymouth', 'The New Zealand National Party');
            theElection.addElectorate('North Shore', 'The New Zealand National Party');
            theElection.addElectorate('Northcote', 'The New Zealand National Party');
            theElection.addElectorate('Northland', 'The New Zealand National Party');
            theElection.addElectorate('Ōhariu', 'New Zealand Labour Party');
            theElection.addElectorate('Ōtaki', 'The New Zealand National Party');
            theElection.addElectorate('Pakuranga', 'The New Zealand National Party');
            theElection.addElectorate('Palmerston North', 'New Zealand Labour Party');
            theElection.addElectorate('Port Hills', 'New Zealand Labour Party');
            theElection.addElectorate('Papakura', 'The New Zealand National Party');
            theElection.addElectorate('Rangitata', 'The New Zealand National Party');
            theElection.addElectorate('Rangitīkei', 'The New Zealand National Party');
            theElection.addElectorate('Rimutaka', 'New Zealand Labour Party');
            theElection.addElectorate('Rodney', 'The New Zealand National Party');
            theElection.addElectorate('Rongotai', 'New Zealand Labour Party');
            theElection.addElectorate('Rotorua', 'The New Zealand National Party');
            theElection.addElectorate('Selwyn', 'The New Zealand National Party');
            theElection.addElectorate('Tāmaki', 'The New Zealand National Party');
            theElection.addElectorate('Taranaki-King Country', 'The New Zealand National Party');
            theElection.addElectorate('Taupō', 'The New Zealand National Party');
            theElection.addElectorate('Tauranga', 'The New Zealand National Party');
            theElection.addElectorate('Te Atatū', 'New Zealand Labour Party');
            theElection.addElectorate('Tukituki', 'The New Zealand National Party');
            theElection.addElectorate('Upper Harbour', 'The New Zealand National Party');
            theElection.addElectorate('Waikato', 'The New Zealand National Party');
            theElection.addElectorate('Waimakariri', 'The New Zealand National Party');
            theElection.addElectorate('Wairarapa', 'The New Zealand National Party');
            theElection.addElectorate('Waitaki', 'The New Zealand National Party');
            theElection.addElectorate('Wellington Central', 'New Zealand Labour Party');
            theElection.addElectorate('West Coast-Tasman', 'New Zealand Labour Party');
            theElection.addElectorate('Whanganui', 'The New Zealand National Party');
            theElection.addElectorate('Whangarei', 'The New Zealand National Party');
            theElection.addElectorate('Wigram', 'New Zealand Labour Party');
            theElection.addElectorate('Hauraki-Waikato', 'New Zealand Labour Party');
            theElection.addElectorate('Ikaroa-Rāwhiti', 'New Zealand Labour Party');
            theElection.addElectorate('Tāmaki Makaurau', 'New Zealand Labour Party');
            theElection.addElectorate('Te Tai Hauāuru', 'New Zealand Labour Party');
            theElection.addElectorate('Te Tai Tokerau', 'New Zealand Labour Party');
            theElection.addElectorate('Te Tai Tonga', 'New Zealand Labour Party');
        });
        // There are 72 electorates in New Zealand as of 2023, not 70.
        it('Should have a .electorateCount count of 70 in the table', () => {
			const count = theElection.electorateCount;
			expect(count).toBe(70);
        });
        it('Should have 70 entries in the .allElectorates array', () => {
			const arraySize = theElection.allElectorates.length;
			expect(arraySize).toBe(70);
        });
        it('Should have Electorate in the .allParties array', () => {
			const anElectorate = theElection.allElectorates.slice(-1)[0];
			expect(anElectorate instanceof Electorate).toBeTruthy();
        });
        describe('LAST ELECTORATE & PARTY IN THE ELECTORATE TABLE', () => {
        var anElectorate;
        beforeEach( () => {
            anElectorate = theElection.allElectorates.slice(-1)[0];
        });
        it('Should have an .electorate property', () => {
            expect(anElectorate.hasOwnProperty('electorate')).toBeTruthy();
        });
        it('Should have a .electorate instance of "Te Tai Tonga"', () => {
            var theValue = anElectorate.electorate;
            expect(theValue).toBe('Te Tai Tonga');
        });

        it('Should have a .party property', () => {
            expect(anElectorate.hasOwnProperty('party')).toBeTruthy();
        });
        it('Should have a .party instance of "New Zealand Labour Party"', () => {
            var theValue = anElectorate.party;
            expect(theValue).toBe('New Zealand Labour Party');
        });

        it('Should return the correct string', () => {
            var theWords = anElectorate.toString();
            expect(theWords).toBe('Te Tai Tonga, New Zealand Labour Party');
        });
        });
    });

    describe('SIX ENTRIES IN THE ELECTORATE TABLE', () => {
        beforeEach(() => {
        theElection.addElectorate('Invercargill', 'The New Zealand National Party');
        theElection.addElectorate('Kaikōura', 'The New Zealand National Party');
        theElection.addElectorate('Kelston', 'New Zealand Labour Party');
        theElection.addElectorate('Mana', 'New Zealand Labour Party');
        theElection.addElectorate('Māngere', 'New Zealand Labour Party');
        theElection.addElectorate('Manukau East', 'New Zealand Labour Party');
        });
        it('Should have a .electorateCount count of 6', () => {
        const count = theElection.electorateCount;
        expect(count).toBe(6);
        });
        it('Should have 6 entries in the .allElectorates array', () => {
        const arraySize = theElection.allElectorates.length;
        expect(arraySize).toBe(6);
        });
        it('Should return the correct string', () => {
        const output = theElection.countElectorates();
        expect(output).toBe('There are 6 electorates.');
        });
    });
});