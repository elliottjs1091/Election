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
		return `<div class="title"><h1>${this.name} ${this.year}</h1></div>`;
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

	// PARTY TABLE
	partyTable () {
		this.sortParties();
		let result = `<h3>Parties</h3><table>`;
		for (const aParty of this.allParties) {
			result += aParty.partyTableRow();
		}
		result += '</table>';
		return result;
	}

	// ADD ELECTORATES TO ELECTION
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
	// ELECTORATE TABLE
	electorateTable () {
		this.sortElectorates();
		let result = `<h3>Electorates</h3><table>`;
		for (const anElectorate of this.allElectorates) {
			result += anElectorate.electorateTableRow();
		}
		result += '</table>';
		return result;
	}
}

// ADD PARTY CLASS
class Party { // eslint-disable-line no-unused-vars
	constructor (partyName) {
	  this.party = partyName;
	}
  
	toString () {
	  const result = `${this.party}`;
	  return result;
	}
  
	partyTableRow () {
	  let result = '<tr>';
	  result += `<td>${this.party}</td>`;
	  result += '</tr>';
	  return result;
	}
}

// ADD ELECTORATE CLASS
class Electorate { // eslint-disable-line no-unused-vars
	constructor (electorateName,electorateParty) {
	  this.name = electorateName;
	  this.party = electorateParty;
	}
  
	toString () {
	  const result = `${this.name} ${this.party}`;
	  return result;
	}
  
	electorateTableRow () {
	  let result = '<tr>';
	  result += `<td>${this.party}</td>`;
	  result += `<td>${this.name}</td>`;
	  result += '</tr>';
	  return result;
	}
}