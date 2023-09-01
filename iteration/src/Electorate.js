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

