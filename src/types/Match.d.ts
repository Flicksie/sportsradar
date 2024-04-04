export type MatchData = {
    home_team: string,
    away_team: string,
    home_score: number,
    away_score: number,
    start_time: Date,
    end_time?: Date,
}

export type ActiveMatch =  MatchData & {
    id: number,
}
