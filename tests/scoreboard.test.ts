import  Scoreboard  from'../src/scoreboard';

describe('Scoreboard', () => {
    let scoreboard: Scoreboard;

    beforeEach(() => {
        scoreboard = new Scoreboard();
    });

    it('new match score is 0 - 0', () => {
        const current_match = scoreboard.startMatch('Home', 'Away');
        const { away_score, home_score } = current_match;

        expect(away_score).toBe(0);
        expect(home_score).toBe(0);
    });

    it('update score', () => {
        const match = scoreboard.startMatch('Home', 'Away');
        scoreboard.updateScore(match.id, 1, 2);
        expect(scoreboard.getMatch(match.id)).toHaveProperty("home_score", 1);
        expect(scoreboard.getMatch(match.id)).toHaveProperty("away_score", 2);
      });

    it('should get a summary of matchs in progress ordered by their total score', () => {
        const match1 = scoreboard.startMatch('Home1', 'Away1');
        scoreboard.updateScore(match1.id, 1, 2);

        const match2 = scoreboard.startMatch('Home2', 'Away2');
        scoreboard.updateScore(match2.id, 3, 4);

        const match3 = scoreboard.startMatch('Home3', 'Away3');
        scoreboard.updateScore(match3.id, 1, 2);

        const summary_ids = scoreboard.getSummary().map(match => match.id);


        expect(summary_ids).toEqual([2, 3, 1]);
      });

    it('finish ongoing match', () => {
        scoreboard.startMatch('Home2', 'Away2');
        const match = scoreboard.startMatch('Home1', 'Away1');
        scoreboard.startMatch('Home3', 'Away3');

        scoreboard.endMatch(match.id);

        expect(!scoreboard.getMatch(match.id)).toBe(true);
    })


    it('example scenario', () => {

        const match1 = scoreboard.startMatch('Mexico','Canada');
        scoreboard.updateScore(match1.id, 0, 5);
        const match2 = scoreboard.startMatch('Spain','Brazil');
        scoreboard.updateScore(match2.id, 10, 2);
        const match3 = scoreboard.startMatch('Germany','France');
        scoreboard.updateScore(match3.id, 2, 2);
        const match4 = scoreboard.startMatch('Uruguay','Italy');
        scoreboard.updateScore(match4.id, 6, 6);
        const match5 = scoreboard.startMatch('Argentina','Australia');
        scoreboard.updateScore(match5.id, 3, 1);

        const summary_ids = scoreboard.getSummary().map(match => match.id);

        expect(summary_ids).toEqual([4,2,1,5,3]);

    })

});


