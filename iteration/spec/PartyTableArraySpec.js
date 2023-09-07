describe('<<<<  PARTY TABLE AND ARRAY  >>>>', () =>{
    beforeEach( () => {
      theElection = new Election();
    });
    describe('EMPTY PARTY TABLE', () => {
      beforeEach( () => {
        theParty = new Election ();
      });
      it('Should have .partyCount property in Election', () => {
        expect(theParty.hasOwnProperty('partyCount')).toBeTruthy();
      });
      it('Should have a .partyCount count of 0', () => {
        const count = theElection.partyCount;
        expect(count).toBe(0);
      });
      it('Should have a .allParties property', () => {
        expect(theElection.hasOwnProperty('allParties')).toBeTruthy();
      });
      it('Should have an array for .allParties', () => {
        expect(Array.isArray(theElection.allParties)).toBeTruthy();
      });
      it('Should have nothing in the .allParties array', () => {
        const arraySize = theElection.allParties.length;
        expect(arraySize).toBe(0);
      });
    });
    describe('FIRST ENTRY IN THE PARTY TABLE', () => {
      beforeEach( () => {
        theElection.addParty('The New Zealand Labour Party');
      });
      it('Should have a .partyCount count of 1 in the table', () => {
        const count = theElection.partyCount;
        expect(count).toBe(1);
      });
      it('Should have one entry in the .allParties array', () =>{
        const arraySize = theElection.allParties.length;
        expect(arraySize).toBe(1);
      });
      it('Should have Party class in the .allParties array', () =>{
        const aParty = theElection.allParties[0];
        expect(aParty instanceof Party).toBeTruthy();
      });
      describe('LABOUR IN THE PARTY TABLE', () => {
        var aParty;
        beforeEach( () => {
          aParty = theElection.allParties[0];
        });
        it('Should have a .party property', () => {
          expect(aParty.hasOwnProperty('party')).toBeTruthy();
        });
        it('Should have a .party instance of "The New Zealand Labour Party"', () => {
          var theValue = aParty.party;
          expect(theValue).toBe('The New Zealand Labour Party');
        });
        it('Should return the correct string', () => {
          var theWords = aParty.toString();
          expect(theWords).toBe('The New Zealand Labour Party');
        });
      });
    });
	
	describe('LAST ENTRY IN THE PARTY TABLE', () => {
		beforeEach(() => {
			theElection.addParty('ACT New Zealand');
			theElection.addParty('Aotearoa Legalise Cannabis Party');
			theElection.addParty('Heartland New Zealand Party');
			theElection.addParty('MANA Movement');
			theElection.addParty('Māori Party');
			theElection.addParty('New Conservative');
			theElection.addParty('New Zealand First Party');
			theElection.addParty('New Zealand Labour Party');
			theElection.addParty('New Zealand TEA Party');
			theElection.addParty('NZ Outdoors Party');
			theElection.addParty('ONE Party');
			theElection.addParty('Sustainable New Zealand Party');
			theElection.addParty('The Advance New Zealand Party');
			theElection.addParty('The Green Party of Aotearoa/New Zealand');
			theElection.addParty('The New Zealand Democratic Party for Social Credit');
			theElection.addParty('The New Zealand National Party');
			theElection.addParty('The Opportunities Party (TOP)');
			theElection.addParty('Vision New Zealand');
		});
		it('Should have a .partyCount of 18', () => {
			const count = theElection.partyCount;
			expect(count).toBe(18);
		});
		it('Should have 17 entries in the .allParties table array', () => {
			const arraySize = theElection.allParties.length;
			expect(arraySize).toBe(18);
		});
		it('Should have an instance of the Party class in the Array', () => {
			const aParty = theElection.allParties.slice(-1)[0];
			expect(aParty instanceof Party).toBeTruthy();
		});
		describe('LAST PARTY IN THE PARTY TABLE', () => {
			var aParty;
			beforeEach( () => {
				aParty = theElection.allParties.slice(-1)[0];
			});
			it('Should have a .party property', () => {
				expect(aParty.hasOwnProperty('party')).toBeTruthy();
			});
			it('Should a .party instance of "Vision New Zealand"', () => {
				var theValue = aParty.party;
				expect(theValue).toBe('Vision New Zealand');
			});
			it('Return the correct string', () => {
				
				expect(aParty.toString()).toBe('Vision New Zealand');
			});
		});
	});
	
    describe('SIX ENTRIES IN THE PARTY TABLE', () => {
      beforeEach( () => {
        theElection.addParty('The Green Party of Aotearoa/New Zealand');
        theElection.addParty('The New Zealand Democratic Party for Social Credit');
        theElection.addParty('The New Zealand National Party');
        theElection.addParty('New Conservative');
        theElection.addParty('New Zealand First Party');
        theElection.addParty('New Zealand Labour Party');
      });
      it('Should have a .partyCount count of 6', () => {
        const count = theElection.partyCount;
        expect(count).toBe(6);
      });
      it('Should have 6 entries in the .allParties array', () => {
        const arraySize = theElection.allParties.length;
        expect(arraySize).toBe(6);
      });
      it('Should return the correct string', () => {
        const output = theElection.countParties();
        expect(output).toBe('There are 6 parties.');
      });
    });
});