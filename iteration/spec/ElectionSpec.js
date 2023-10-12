describe('<<<<<< ELECTION >>>>>>', () => { // ELECTION SPECIFCATIONS
	
	describe('PROPERTIES', () => {
		let theElection;
		beforeEach(() => {
			theElection = new Election ('NZ Election', 2023);
		});
		it('Should have a .name property', () => {
			expect(theElection.hasOwnProperty('name')).toBeTruthy();
		});
		it('Should have a .year property', () => {
			expect(theElection.hasOwnProperty('year')).toBeTruthy();
		});
	});
	
	describe('METHODS',() => {
		let theElection;
		beforeEach(() => {
			theElection = new Election;
		});

		it('Should have .electionTable function', function () {
			expect(typeof theElection.electionTable).toBe('function');
		})

		it('Should have .addElectorate function', function () {
			expect(typeof theElection.addElectorate).toBe('function');
		})

		it('Should have .sortElectorates function', function () {
			expect(typeof theElection.sortElectorates).toBe('function');
		})

		it('Should have .addParty function', function () {
			expect(typeof theElection.addParty).toBe('function');
		})

		it('Should have .findParty function', function () {
			expect(typeof theElection.findParty).toBe('function');
		})

		it('Should have .sortPartyWinners function', function () {
			expect(typeof theElection.sortPartyWinners).toBe('function');
		})

		it('Should have .setWinningParty function', function () {
			expect(typeof theElection.setWinningParty).toBe('function');
		})

		it('Should have .setVotePercent function', function () {
			expect(typeof theElection.setVotePercent).toBe('function');
		})

		it('Should have .findElectorate function', function () {
			expect(typeof theElection.findElectorate).toBe('function');
		})
	})
	
	describe('CONTROLLER SETUP VALUE', () => {
		let theElection;
		beforeEach(() => {
			theElection = Controller.setup();
		});
		it('Should have the correct name', () => {
			expect(theElection.name).toBe('NZ Election');
		});
		it('Should have the correct year', () => {
			expect(theElection.year).toBe(2023);
		});
	});
	
	describe('CONTROLLER SETUP FORMATTING', () => {
		let theElection;
		beforeEach(() => {
			theElection = Controller.setup();
		});
		it('Name should NOT have leading spaces', () => {
			expect(theElection.name[0]).not.toBe(' ');
		});
		it('Name should NOT have trailing spaces', () => {
			expect(theElection.name[theElection.name.length-1]).not.toBe(' ');
		});
		it('Year should be a number', () => {
			expect(typeof theElection.year).toBe('number');
		});
	});

});

describe('<<<<  PARTY  >>>>', () => { // PARTY SPECIFCATIONS
	describe('PROPERTIES', () => {
	  let theParty;
	  beforeEach(() => {
		theParty = new Party();
	  });
	  it('Should have a .party property', () => {
		expect(theParty.hasOwnProperty('party')).toBeTruthy();
	  });
	  it('Should have a .seats property', () => {
		  expect(theParty.hasOwnProperty('seats')).toBeTruthy();
	  })
	  it('Should have a .votePercent property', () => {
		expect(theParty.hasOwnProperty('votePercent')).toBeTruthy();
	})
	})

	describe('METHODS', () => {
		let theParty;
		beforeEach(() => {
		  theParty = new Party();
		});
		
		it('Should have .partyTableRow function', function () {
			expect(typeof theParty.partyTableRow).toBe('function');
		})
	});

	describe('CONTROLLER DATA', () => {
		var theElection;
		beforeEach(() => {
			theElection = Controller.setup();
	})
	it('Should have 17 Parties', () => {
		expect(theElection.allParties.length).toBe(17)
	})
	it('Should have correctly set details for the first 5 parties', () =>{
		var aParty
		aParty = theElection.sortPartyWinners()
		aParty = theElection.allParties[0];
            expect(aParty).toBeDefined();
            expect(aParty.party).toBe('Labour Party');
            expect(aParty.seats).toEqual(43);
			expect(aParty.votePercent).toEqual(49.1);
		aParty = theElection.allParties[1];
            expect(aParty).toBeDefined();
            expect(aParty.party).toBe('National Party');
            expect(aParty.seats).toEqual(26);
			expect(aParty.votePercent).toEqual(26.8);
		aParty = theElection.allParties[2];
            expect(aParty).toBeDefined();
            expect(aParty.party).toBe('ACT New Zealand');
            expect(aParty.seats).toEqual(1);
			expect(aParty.votePercent).toEqual(8);
		aParty = theElection.allParties[3];
            expect(aParty).toBeDefined();
            expect(aParty.party).toBe('Green Party');
            expect(aParty.seats).toEqual(1);
			expect(aParty.votePercent).toEqual(7.6);
		aParty = theElection.allParties[4];
            expect(aParty).toBeDefined();
            expect(aParty.party).toBe('New Zealand First Party');
            expect(aParty.seats).toEqual(0);
			expect(aParty.votePercent).toEqual(2.7);
	})

	})
	
});

describe('<<<<  ELECTORATE  >>>>', () => { // ELECTORATE SPECIFCATIONS

    describe('PROPERTIES', () => {
        let theElectorate;
        beforeEach(() => {
            theElectorate = new Electorate();
        });
        it('Should have a .electorate property', () => {
            expect(theElectorate.hasOwnProperty('electorate')).toBeTruthy();
        });
        it('Should have a .winner property', () => {
            expect(theElectorate.hasOwnProperty('winner')).toBeTruthy();
        });
		it('Should have a .allCandidates property', () => {
            expect(theElectorate.hasOwnProperty('allCandidates')).toBeTruthy();
        });
    });

	describe('METHODS', () => {
		let theElectorate;
		beforeEach(() => {
		  theElectorate = new Electorate();
		});
		
		it('Should have .electorateTableRow function', function () {
			expect(typeof theElectorate.electorateTableRow).toBe('function');
		})

		it('Should have .addCandidate function', function () {
			expect(typeof theElectorate.addCandidate).toBe('function');
		})

		it('Should have .findCandidate function', function () {
			expect(typeof theElectorate.findCandidate).toBe('function');
		})

		it('Should have .findCandidate function', function () {
			expect(typeof theElectorate.findCandidate).toBe('function');
		})

		it('Should have .setCandidateVote function', function () {
			expect(typeof theElectorate.setCandidateVote).toBe('function');
		})
	});

	describe('CONTROLLER DATA', () => {
		var theElection;
		beforeEach(() => {
			theElection = Controller.setup();
	})
	it('Should have 72 parties', () => {
		expect(theElection.allElectorates.length).toBe(72)
	})
	it('Should have correctly set details for the electorates', () =>{
		var anElectorate
		anElectorate = theElection.sortElectorates()

		anElectorate = theElection.allElectorates[0];
            expect(anElectorate).toBeDefined();
            expect(anElectorate.electorate).toBe('Auckland Central');
            expect(anElectorate.winner).toBe('Green Party');

		anElectorate = theElection.allElectorates[1];
            expect(anElectorate).toBeDefined();
            expect(anElectorate.electorate).toBe('Banks Peninsula');
            expect(anElectorate.winner).toBe('Labour Party');

		anElectorate = theElection.allElectorates[2];
            expect(anElectorate).toBeDefined();
            expect(anElectorate.electorate).toBe('Bay of Plenty');
            expect(anElectorate.winner).toBe('National Party');

		anElectorate = theElection.allElectorates[3];
            expect(anElectorate).toBeDefined();
            expect(anElectorate.electorate).toBe('Botany');
            expect(anElectorate.winner).toBe('National Party');
		anElectorate = theElection.allElectorates[4];
            expect(anElectorate).toBeDefined();
            expect(anElectorate.electorate).toBe('Christchurch Central');
            expect(anElectorate.winner).toBe('Labour Party');
	})
	})
});

describe('<<<<  CANDIDATE  >>>>', () => { // CANDIDATE SPECIFCATIONS
	describe('PROPERTIES', () => {
	  var theCandidate;
	  beforeEach(() => {
		theCandidate = new Candidate();
	  });
	  it('Should have a .name property', () => {
		expect(theCandidate.hasOwnProperty('name')).toBeTruthy();
	  });
	  it('Should have a .party property', () => {
		  expect(theCandidate.hasOwnProperty('party')).toBeTruthy();
	  })
	  it('Should have a .votes property', () => {
		expect(theCandidate.hasOwnProperty('votes')).toBeTruthy();
	  })
	  it('Should have a .electorate property', () => {
		expect(theCandidate.hasOwnProperty('electorate')).toBeTruthy();
	  });
	})

	describe('METHODS', () => {
		let theCandidate;
		beforeEach(() => {
		  theCandidate = new Candidate();
		});
		
		it('Should have .candidateTableRow function', function () {
			expect(typeof theCandidate.candidateTableRow).toBe('function');
		})
	});

	describe('CONTROLLER DATA', () => {
		var theElection
		beforeEach(() => {
			theElection = Controller.setup()
		})
		it('Christchurch Central should have 7 candidates', () => {
			var theElectorate = theElection.findElectorate('Christchurch Central')
			expect(theElectorate.allCandidates.length).toBe(7)
		})
		it('Should have set candidate details correctly', () =>{
			var aCandidate, theElectorate
			theElectorate = theElection.findElectorate('Christchurch Central')
			aCandidate = theElectorate.sortCandidateVotes()

			aCandidate = theElectorate.allCandidates[0]
			expect(aCandidate.electorate).toEqual(theElectorate)
			expect(aCandidate.name).toBe('WEBB, Duncan Alexander')
			expect(aCandidate.party).toBe('Labour Party')
			expect(aCandidate.votes).toBe(16631)

			aCandidate = theElectorate.allCandidates[1]
			expect(aCandidate.electorate).toEqual(theElectorate)
			expect(aCandidate.name).toBe('WAGNER, Nicola Joanne')
			expect(aCandidate.party).toBe('National Party')
			expect(aCandidate.votes).toBe(13760)

			aCandidate = theElectorate.allCandidates[2]
			expect(aCandidate.electorate).toEqual(theElectorate)
			expect(aCandidate.name).toBe('RICHARDSON, Peter Ian')
			expect(aCandidate.party).toBe('Green Party')
			expect(aCandidate.votes).toBe(1957)

			aCandidate = theElectorate.allCandidates[3]
			expect(aCandidate.electorate).toEqual(theElectorate)
			expect(aCandidate.name).toBe('ROBINSON, Philip John')
			expect(aCandidate.party).toBe('New Zealand First Party')
			expect(aCandidate.votes).toBe(1091)

			aCandidate = theElectorate.allCandidates[4]
			expect(aCandidate.electorate).toEqual(theElectorate)
			expect(aCandidate.name).toBe('HILL, Douglas MacMillan')
			expect(aCandidate.party).toBe('The Opportunities Party (TOP)')
			expect(aCandidate.votes).toBe(879)

			aCandidate = theElectorate.allCandidates[5]
			expect(aCandidate.electorate).toEqual(theElectorate)
			expect(aCandidate.name).toBe('HERBERT-SHUFFLEBOTHAM, Janine Anne')
			expect(aCandidate.party).toBe('Aotearoa Legalise Cannabis Party')
			expect(aCandidate.votes).toBe(304)

			aCandidate = theElectorate.allCandidates[6]
			expect(aCandidate.electorate).toEqual(theElectorate)
			expect(aCandidate.name).toBe('GASKIN, Ian Camden')
			expect(aCandidate.party).toBe('United Future')
			expect(aCandidate.votes).toBe(80)
		})
	})
});
