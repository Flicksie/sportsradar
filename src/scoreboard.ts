import { MatchScoresStore } from "./store/game_scores"

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

    }


    getMatch(id: number) {
        return this.matches.getMatch(id)
    }


    getSummary() {

    }

}
