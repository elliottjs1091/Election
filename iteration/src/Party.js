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