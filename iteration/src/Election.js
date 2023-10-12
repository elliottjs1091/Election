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
		return `<table><th class=header>${this.name} ${this.year}</th></table>`;
	}

	electionTable () {
		this.sortPartyWinners()
		var heading = ''
		var newHeading = ''

		var partyResult = `<thead><table><tr><th>PARTIES</th><th>Seats</th><th>Vote%</th></tr></thead>`
		for (var aParty of this.allParties) { // CREATE PARTY TABLE
			partyResult += aParty.partyTableRow();
		}
		partyResult += '</table>';

		var electorateResult = `<table><thead><tr><th>ELECTORATES</th><th>Winning Party</th></tr></thead>`;
		for (var anElectorate of this.allElectorates) { // CREATE ELECTORATE TABLE
			electorateResult += anElectorate.electorateTableRow();
		}
		electorateResult += '</table>';

		var candidateResult = ''
		for (var anElectorate of this.allElectorates) { // CREATE CANDIDATE TABLE
			if (anElectorate.allCandidates.length > 0) {
				heading = `${anElectorate.electorate}`
				 // lol?
				newHeading = `<table><thead><tr><th id=candidateHead>${heading} Candidates</th><th colspan="2",id=candidateHead>(Sorted by Vote)</th></tr></thead>`;
				console.log(heading.toString())
				for (var aCandidate of anElectorate.allCandidates) {
					candidateResult += aCandidate.candidateTableRow()
				}				
			}
		}	
		candidateResult += '</table>';

		return partyResult + electorateResult + newHeading + candidateResult
	}

	addElectorate (electorateName) { // ADD ELECTORATE TO ELECTION
		const aNewElectorate = new Electorate(electorateName,this);
		this.allElectorates.push(aNewElectorate);
		this.electorateCount += 1;
		this.sortElectorates();
	}
	
	sortElectorates () { // SORT ELECTORATE ALPHABETICALLY
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

	setWinningParty (electorateName, electorateWinner) {
		let result = this.findElectorate(electorateName)
		result.winner = electorateWinner
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
	
	addParty (partyName,partySeats) { // ADD PARTY TO ELECTION
		const aNewParty = new Party(partyName,partySeats,this);
		this.allParties.push(aNewParty);
		this.partyCount += 1;
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
	
	sortPartyWinners () { // SORT BY VOTE % HIGH >> LOW
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

	setVotePercent (partyName,partyVotePercent) {
		// add code
		let result = this.findParty(partyName)
		result.votePercent = partyVotePercent
	}

	// getElectorates () {
	// 	let result = ''
	// 	for (const anElectorate of this.allElectorates) {
	// 		result += anElectorate + '\n'
	// 		}
	// 	return result
	// }

	// sortParties () {
	// 	this.allParties.sort(function(a, b) {
	// 		if (a.party < b.party) {
	// 			return -1;
	// 		}
	// 		if (a.party > b.party) {
	// 			return 1;
	// 		}
	// 		return 0;
	// 	});
	// }
	
	// getParty () {
	// 	let result = ''
	// 	for (const aParty of this.allParties) {
	// 		result += aParty + '\n'
	// 		}
	// 	return result
	// }

	// partyTable () {
	// 	this.sortPartyWinners();
	// 	let result = `<table id="partytable"><tr><th>PARTIES</th><th>Seats</th><th>Vote%</th></tr>`;
	// 	for (const aParty of this.allParties) {
	// 		result += aParty.partyTableRow();
	// 	}
	// 	result += '</table>';
	// 	return result;
	// }
}

