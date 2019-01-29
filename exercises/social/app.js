var goPlayers = {
    name: "Hikaru",
    age: 23,
    previousWins: [
        {
            nameOfTournament: "Baby Tournament",
            year: 2018,
            entryRank: "15kyu"
        },
        {
            nameOfTournament: "Slightly Better Tournament",
            year: 2019,
            entryRank: "10kyu"
        }
    ],
    opponents: [
        {
            name: "Saske",
            age: 32,
            previousWins: [
                {
                    nameOfTournament: "Big Tournament",
                    year: 2008,
                    entryRank: "2 dan"
                },
                {
                    nameOfTournament: "Huge Tournament",
                    year: 2010,
                    entryRank: "5 dan"
                }
            ],
            opponents: [
                {
                    name: "Mansui",
                    age: 90,
                    previousWins: [
                        {
                            nameOfTournament: "Some Professional Tournament",
                            year: 1982,
                            entryRank: "12 kyu"
                        },
                        {
                            nameOfTournament: "Another Tournament",
                            year: 2012,
                            entryRank: "3 dan"
                        }
                    ],
                    opponents: [
                        {
                            name: "Jon",
                            aka: function() {
                                console.log("magpie")
                            },
                            age: 50,
                            previousWins: [],
                            opponents: [],
                        }
                    ]
                }
            ],
            yearWins: [2002, 2004, 2006]
        }
    ],
    yearWins: [2001, 2003, 2005]
}
goPlayers.nationality = "Japanese";
goPlayers.town = "Osaka";
goPlayers.yearWins.push(2008);
goPlayers.yearWins.push(2010);
goPlayers.opponents[0].yearWins.push(2011);
goPlayers.opponents[0].yearWins.push(2013);
console.log(goPlayers.opponents[0].yearWins[4])
