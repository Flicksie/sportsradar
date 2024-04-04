# Simple Scoreboard Mini Lib

- [x] Start match with 0 - 0 score as default
- [x] Update score receives a pair of absolute scores
- [x] Finish ongoing match
- [x] Get summary of matches in progress sorted by: score total > most recently started

Example scenario covered in the tests

# Scoreboard class

 - Talks to the store/backend to perform CRUD operations and more context-specific operations (like inc/dec) hence the redundancy in `Scoreboard` and `MatchScoresStore`

 ### Initialize

    Can be initialized as is with `new Scoreboard()` or it can be provided a pre-instantiated store from `MatchScoresStore`, otherwise it will create itself.

 ### startMatch(HomeTeam, AwayTeam)

    Starts a new match, requires both team names to be provided.

    Will return the match data upon creation.

### updateScore(ID, HomeScore, AwayScore)

    Updates the score of the match with given ID, scores cannot be ommited.

    Will return the match data with updated data.

### incrementScore / decrementScore (ID, Team: "away" | "home")

    Utility function to increments/decrements the score of the team provided by the string literal argument Team by one.

    Will return the match data with updated data.

### getMatch(ID)

    Returns match with given ID. Throws if none is found;


### getSummary

    Returns a list of matches and their data sorted by Total score, then creation date, (then ID, descending)

# MatchScoresStore class

Class that deals with the store instance to be used to keep track of scoreboards and its respective CRUD operations.

This layer can be replaced with an actual API backend broker

