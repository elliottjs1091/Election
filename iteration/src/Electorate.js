// ADD ELECTORATE CLASS
class Electorate { // eslint-disable-line no-unused-vars
	constructor (electorateName,electorateParty) {
	  this.electorate = electorateName;
	  this.party = electorateParty;
	}
  
	toString () {
	  const result = `${this.electorate}, ${this.party}`;
	  return result;
	}

	electorateTableRow () {
		let result = '<tr>';
		result += `<td>${this.party}</td>`;
		result += `<td>${this.electorate}</td>`;
		result += '</tr>';
		return result;
	}
}

