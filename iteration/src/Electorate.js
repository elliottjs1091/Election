class Electorate { // eslint-disable-line no-unused-vars
	constructor (electorateName,electorateWinner) {
	  this.electorate = electorateName;
      this.winner = electorateWinner;
      this.allCandidates = []
      this.candidateCount = 0
	}
  
	toString () {
	  return `${this.electorate}`;
	}

	electorateTableRow () {
		let result = '<tr>';
		result += `<td>${this.electorate}</td>`;
		result += `<td>${this.winner}</td>`
		result += '</tr>';
		return result;
	}

    //
	// ADD CANDIDATE TO TABLE
	//

	addCandidate (candidateName,candidateParty) {
		// add code
		const aNewCandidate = new Candidate(candidateName,candidateParty,this);
		this.allCandidates.push(aNewCandidate);
		this.candidateCount += 1;
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
	
	sortCandidateVotes () {
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
        // add code
		let result = this.findCandidate(candidateName)
		result.votes = candidateVotes
		console.log(result)
	}
	
	candidateTable () {
		// add code
		this.sortCandidateVotes();
		let result = `<table id="candidatetable"><tr><th>CANDIDATES</th><th>Party</th><th>Votes</th></tr>`;
		for (const aCandidate of Electorate.allCandidates) {
			result += aCandidate.candidateTableRow();
		}
		result += '</table>';
		return result;
    }
	
	getCandidates(electorateName) {
		let result = ''
		for (const anElectorate of this.allElectorates) {
			result += anElectorate + '\n'
			}
		return result
	}
}