import  Scoreboard  from '../src/scoreboard';

describe('Scoreboard', () => {
    let scoreboard: Scoreboard;

    beforeEach(() => {
        scoreboard = new Scoreboard();
    });

    it('new game score is 0 - 0', () => {
        const current_game = scoreboard.startGame('Home', 'Away');
        const { away_score, home_score } = current_game;

        expect(away_score).toBe(0);
        expect(home_score).toBe(0);
    });

    it('should get a summary of games in progress ordered by their total score', () => {
        const game1 = scoreboard.startGame('Home1', 'Away1');
        scoreboard.updateScore(game1.id, 1, 2);

        const game2 = scoreboard.startGame('Home2', 'Away2');
        scoreboard.updateScore(game2.id, 3, 4);

        const game3 = scoreboard.startGame('Home3', 'Away3');
        scoreboard.updateScore(game3.id, 1, 2);

        const summary_ids = scoreboard.getSummary().map(game => game.id);


        expect(summary_ids).toEqual([2, 3, 1]);
      });

});
