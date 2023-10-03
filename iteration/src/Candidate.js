class Candidate {
	constructor (candidateName, candidateParty, candidateElectorate, candidateVotes) {
		this.name = candidateName
		this.party = candidateParty
        this.electorate = candidateElectorate
        this.votes = candidateVotes
	}

    toString () {
        return `${this.name} ${this.party} ${this.vote}`
    }

    candidateTableRow () {
        let result = '<tr>'
        result += `<td>${this.name}</td>`
        result += `<td>${this.party}</td>`
        result += `<td>${this.votes}</td>`
        result += '</tr>'
    }
}