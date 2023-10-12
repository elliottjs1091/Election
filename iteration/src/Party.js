class Party {
	constructor (partyName,partySeats,partyVotePercent) {
	  this.party = partyName;
	  this.seats = partySeats;
	  this.votePercent = partyVotePercent;
	}
  
	toString () {
		return `${this.party}`;
	}

	partyTableRow () { // ADD PARTY TABLE DATA
		let result = '<tr>';
		result += `<td id=partyName>${this.party}</td>`;
		result += `<td id=partySeats>${this.seats}</td>`;
		result += `<td id=partyVotePercent>${this.votePercent}%</td>`;
		result += '</tr>';
		return result;
	}
}
