// ELECTION CLASS
class Election {
	constructor (electionName, electionYear) {
		this.name = electionName;
		this.year = electionYear;
		this.electorateCount = 0;
		this.allElectorates = [];
		this.partyCount = 0;
		this.allParties = [];
	}

	toString () {
		return `<h1 class=header>${this.name} ${this.year}</h1>`;
	}

	//
	// ADD ELECTORATE TO ELECTION
	//

	addElectorate (electorateName) {
		const aNewElectorate = new Electorate(electorateName,this);
		this.allElectorates.push(aNewElectorate);
		this.electorateCount += 1;
	}
	
	getElectorates () {
		let result = ''
		for (const anElectorate of this.allElectorates) {
			result += anElectorate + '\n'
			}
		return result
	}

	sortElectorates () {
		this.allElectorates.sort(function(a, b) {
			if (a.electorate < b.electorate) {
				return -1;
			}
			if (a.electorate > b.electorate) {
				return 1;
			}
			return 0;
		});
	}

	electorateTable () {
		this.sortElectorates();
		let result = `<table><tr><th>ELECTORATES</th><th>Winning Party</th></tr>`;
		for (const anElectorate of this.allElectorates) {
			result += anElectorate.electorateTableRow();
		}
		result += '</table>';
		return result;
	}

	setWinningParty (electorateName, electorateWinner) {
		//add code
		let result = this.findElectorate(electorateName)
		result.winner = electorateWinner
		console.log(result)
		// this.allParties.sort(function(a,b) => (a.winner < b.winner) ? 1 : (a.winner>b.winner) ? -1 : 0)
	}

	findElectorate (targetElectorate) {
		var foundElectorate, anElectorate
		foundElectorate = null
		for (anElectorate of this.allElectorates) {
			if (anElectorate.electorate === targetElectorate) {
				foundElectorate = anElectorate
				break
			}
		}
		return foundElectorate
	}

	//
	// ADD PARTY TO ELECTION
	//

	addParty (partyName,partySeats) {
		const aNewParty = new Party(partyName,partySeats,this);
		this.allParties.push(aNewParty);
		this.partyCount += 1;
	}
	
	getParty () {
		let result = ''
		for (const aParty of this.allParties) {
			result += aParty + '\n'
			}
		return result
	}
	
	findParty (targetParty) {
		var foundParty, aParty
		foundParty = null
		for (aParty of this.allParties) {
			if (aParty.party === targetParty) {
				foundParty = aParty
				break
			}
		}
		return foundParty
	}
	
	
	// sortParties () {
		// this.allParties.sort(function(a, b) {
			// if (a.party < b.party) {
				// return -1;
			// }
			// if (a.party > b.party) {
				// return 1;
			// }
			// return 0;
		// });
	// }
	
	sortPartyWinners () {
		this.allParties.sort(function(a, b) {
			if (a.votePercent > b.votePercent) {
				return -1;
			}
			if (a.votePercent < b.votePercent) {
				return 1;
			}
			return 0;
		});
	}

	partyTable () {
		this.sortPartyWinners();
		let result = `<table id="partytable"><tr><th>PARTIES</th><th>Seats</th><th>Vote%</th></tr>`;
		for (const aParty of this.allParties) {
			result += aParty.partyTableRow();
		}
		result += '</table>';
		return result;
	}

	setVotePercent (partyName,partyVotePercent) {
		// add code
		let result = this.findParty(partyName)
		result.votePercent = partyVotePercent
		console.log(result)
		
	}
	
}

