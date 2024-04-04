import  Scoreboard  from'../src/scoreboard';

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

    it('update score', () => {
        const game = scoreboard.startGame('Home', 'Away');
        scoreboard.updateScore(game.id, 1, 2);
        expect(scoreboard.getMatch(game.id)).toHaveProperty("home_score", 1);
        expect(scoreboard.getMatch(game.id)).toHaveProperty("away_score", 2);
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


    it('example scenario', () => {

        const game1 = scoreboard.startGame('Mexico','Canada');
        scoreboard.updateScore(game1.id, 0, 5);
        const game2 = scoreboard.startGame('Spain','Brazil');
        scoreboard.updateScore(game2.id, 10, 2);
        const game3 = scoreboard.startGame('Germany','France');
        scoreboard.updateScore(game3.id, 2, 2);
        const game4 = scoreboard.startGame('Uruguay','Italy');
        scoreboard.updateScore(game4.id, 6, 6);
        const game5 = scoreboard.startGame('Argentina','Australia');
        scoreboard.updateScore(game5.id, 3, 1);

        const summary_ids = scoreboard.getSummary().map(game => game.id);

        expect(summary_ids).toEqual([4,2,1,5,3]);

    })

});


