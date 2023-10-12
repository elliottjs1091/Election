class Candidate {
	constructor (candidateName, candidateParty, candidateElectorate, candidateVotes) {
		this.name = candidateName;
		this.party = candidateParty;
        this.electorate = candidateElectorate;
        this.votes = candidateVotes;
	}

    toString () {
        return `${this.name} ${this.party} ${this.vote}`;
    }

    candidateTableRow () { // ADD CANDIDATE TABLE DATA
        let result = '<tr>';
        result += `<td id=candidateName>${this.name}</td>`;
        result += `<td id=candidateParty>${this.party}</td>`;
        result += `<td id=candidateVotes>${this.votes}</td>`;
        result += '</tr>';
        return result;
    }
}