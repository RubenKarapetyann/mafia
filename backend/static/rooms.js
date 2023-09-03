const rooms = [
    {
        id : 1,
        name : "Ruben`s room",
        description : "go to play friends",
        status : "open",
        password : false,
        players : [
            {
                name : "Ruben",
                role : "mafia",
                id : 1
            }
        ],
        messages : [
            {
                text : "hello",
                id : 1,
                autherId : 1
            }
        ]
    },
    {
        id : 2,
        name : "Davo`s room",
        description : "hello",
        status : "private",
        password : "$2a$10$bL1MNWpK2TqLMoiz4VWT7uMljXTdTF8kvEvZm4Pt1b1P.GJd/NBRa",
        players : [
            {
                name : "Vrdo",
                role : "mafia",
                id : 1
            }
        ],
        messages : []
    }
]

export default rooms