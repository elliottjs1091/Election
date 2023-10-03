class Party {
	constructor (partyName,partySeats,partyVotePercent) {
	  this.party = partyName;
	  this.seats = partySeats;
	  this.votePercent = partyVotePercent;
	}
  
	toString () {
		return `${this.party}`;
	}

	partyTableRow () {
		let result = '<tr>';
		result += `<td>${this.party}</td>`;
		result += `<td>${this.seats}</td>`
		result += `<td>${this.votePercent}%</td>`
		result += '</tr>';
		return result;
	}
}
