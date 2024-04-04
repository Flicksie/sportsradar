import { MatchScoresStore } from "./store/game_scores"
import { ActiveMatch } from "./types/Match"

export default class Scoreboard {

    private matches: MatchScoresStore;

    constructor(matchesStore?: MatchScoresStore) {
        this.matches = matchesStore || new MatchScoresStore;
    }

    startGame(home: string, away: string) {
        if (!home || !away) {
            throw new Error('Both home and away teams must be provided');
        }

        return this.matches.registerMatch({
            home_team: home,
            home_score: 0,
            away_team: away,
            away_score: 0,
            start_time: new Date(),
        })
    }

    updateScore(id: number, home: number, away: number) {
        const match = this.matches.getMatch(id);
        if (!match) {
            throw new Error(`Match with ID ${id} could not be found.`);
        }

        const newMatchData = {
            ...this.matches.getMatch(id),
            home_score: home,
            away_score: away,
        } as ActiveMatch;

        return this.matches.updateMatch(newMatchData);
    }

    incrementScore(id: number, team: 'home' | 'away') {
        const matchData = this.matches.getMatch(id) as ActiveMatch;
        const targetProperty = `${team}_score` as keyof ActiveMatch;
        const newMatchData = {
            ...matchData,
            [targetProperty]: matchData[targetProperty] as number + 1
        }
        return this.matches.updateMatch(newMatchData);
    }

    decrementScore(id: number, team: 'home' | 'away') {
        const matchData = this.matches.getMatch(id) as ActiveMatch;
        const targetProperty = `${team}_score` as keyof ActiveMatch;
        const newMatchData = {
            ...matchData,
            [targetProperty]: matchData[targetProperty] as number - 1
        }
        return this.matches.updateMatch(newMatchData);
    }

    getMatch(id: number) {
        return this.matches.getMatch(id)
    }

    endMatch(id: number) {
        return this.matches.deleteMatch(id)
    }

    getSummary() {
        const fnMatchSort = (a: ActiveMatch, b: ActiveMatch) => {
            const a_sum = a.home_score + a.away_score;
            const b_sum = b.home_score + b.away_score;

            return (
                b_sum - a_sum
                || b.start_time.getTime() - a.start_time.getTime()
                || b.id - a.id
            )
        }

        return this.matches.getAllMatches().sort(fnMatchSort);
    }

}
