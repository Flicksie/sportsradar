import { MatchData, ActiveMatch } from "types/Match";

export class MatchScoresStore {

    private ongoingMatches = new Map<number, ActiveMatch>();

    public registerMatch(matchData: MatchData) {
        const newMatchID = this.ongoingMatches.size + 1;
        const newMatchData = { id: newMatchID, ...matchData } as ActiveMatch;
        this.ongoingMatches.set(newMatchID, newMatchData);

        return newMatchData;
    }

    public getMatch(id: number): ActiveMatch {
        const selectedMatch = this.ongoingMatches.get(id);
        if (!selectedMatch) throw new Error(`Match with ID ${id} could not be found.`);

        return selectedMatch;
    }

    public updateMatch(newData: ActiveMatch) {
        if (!this.ongoingMatches.has(newData.id)) throw new Error(`Match with ID ${newData.id} could not be found.`);
        this.ongoingMatches.set(newData.id, newData);

        return newData;
    }

}
