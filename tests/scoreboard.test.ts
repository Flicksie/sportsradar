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


});
