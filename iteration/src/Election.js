// ELECTION CLASS
class Election {
	constructor (electionName, electionYear) {
		this.name = electionName;
		this.year = electionYear;
		this.partyCount = 0;
		this.allParties = [];
		this.electorateCount = 0;
		this.allElectorates = [];
	}

	toString () {
		return `<h1 class=header>${this.name} ${this.year}</h1>`;
	}
	
	// ADD PARTY TO ELECTION
	addParty (partyName) {
		const aNewParty = new Party(partyName);
		this.allParties.push(aNewParty);
		this.partyCount += 1;
	}

	sortParties () {
		this.allParties.sort(function(a, b) {
			if (a.party < b.party) {
				return -1;
			}
			if (a.party > b.party) {
				return 1;
			}
			return 0;
		});
	}

	countParties () {
		return `There are ${this.partyCount} parties.`
	}

	partyTable () {
		this.sortParties();
		let result = `<table><h3>Parties</h3>`;
		// <p class=counter>${this.countParties()}</p>
		for (const aParty of this.allParties) {
			result += aParty.partyTableRow();
		}
		result += '</table>';
		return result;
	}

	addElectorate (electorateName, electorateParty) {
		const aNewElectorate = new Electorate(electorateName,electorateParty);
		this.allElectorates.push(aNewElectorate);
		this.electorateCount += 1;
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

	countElectorates () {
		return `There are ${this.electorateCount} electorates.`
	}

	electorateTable () {
		this.sortElectorates();
		let result = `<table><h3>Electorates</h3>`;
		// <p class=counter>${this.countElectorates()}</p>
		for (const anElectorate of this.allElectorates) {
			result += anElectorate.electorateTableRow();
		}
		result += '</table>';
		return result;
	}
}
