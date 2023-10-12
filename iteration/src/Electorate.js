class Electorate {
	constructor (electorateName,electorateWinner) {
	  this.electorate = electorateName;
      this.winner = electorateWinner;
      this.allCandidates = []
      this.candidateCount = 0
	}
  
	toString () {
	  return `${this.electorate}`;
	}

	electorateTableRow () { // ADD ELECTORATE TABLE DATA
		this.sortCandidateVotes()
		let result = '<tr>';
		result += `<td>${this.electorate}</td>`;
		result += `<td>${this.winner}</td>`
		result += '</tr>';
		return result;
	}

	addCandidate (candidateName,candidateParty) { // ADD CANDIDATE TO TABLE
		const aNewCandidate = new Candidate(candidateName,candidateParty,this);
		this.allCandidates.push(aNewCandidate);
		this.candidateCount += 1;
		this.sortCandidateVotes()
	}
	
	findCandidate(targetCandidate) {
		var foundCandidate, aCandidate
		foundCandidate = null
		for (aCandidate of this.allCandidates) {
			if (aCandidate.name === targetCandidate) {
				foundCandidate = aCandidate
				break
			}
		}
		return foundCandidate
	}
	
	sortCandidateVotes () { // SORT BY VOTE COUNT HIGH >> LOW
		this.allCandidates.sort(function(a, b) {
			if (a.votes > b.votes) {
				return -1;
			}
			if (a.votes < b.votes) {
				return 1;
			}
			return 0;
		});
	}
	
	setCandidateVote (candidateName,candidateVotes) {
		let result = this.findCandidate(candidateName)
		result.votes = candidateVotes
	}
	
	// candidateTable () {
	// 	// add code
	// 	this.sortCandidateVotes();
	// 	let result = `<table><tr><th>Name</th><th>(Sorted by Vote)</th></tr>`;
	// 	for (const aCandidate of this.allCandidates) {
	// 		result += aCandidate.candidateTableRow();
	// 	}
	// 	result += '</table>';
	// 	return result;
    // }
}