// ADD PARTY CLASS
class Party { // eslint-disable-line no-unused-vars
	constructor (partyName) {
	  this.party = partyName;
	}
  
	toString () {
		return `${this.party}`;
	}

	partyTableRow () {
		let result = '<tr>';
		result += `<td>${this.party}</td>`;
		result += '</tr>';
		return result;
	}
}