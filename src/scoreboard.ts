import { MatchScoresStore } from "./store/game_scores"
import { ActiveMatch } from "./types/Match"


export default class Scoreboard {

    private matches: MatchScoresStore;

    constructor() {
        this.matches = new MatchScoresStore();
    }

    startGame(home: string, away: string) {
        return this.matches.registerMatch({
            home_team: home,
            home_score: 0,
            away_team: away,
            away_score: 0,
            start_time: new Date(),
        })
    }

    updateScore(id: number, home: number, away: number) {
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


    getSummary() {

    }

}
