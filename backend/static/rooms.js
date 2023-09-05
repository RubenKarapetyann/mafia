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
                id : 1,
                avatar : "https://ionicframework.com/docs/img/demos/avatar.svg"
            }
        ],
        messages : [
            {
                text : "hello",
                id : 1,
                autherId : 1
            },
            {
                text : "hello hasdy jaskd nhy vsdik n uasfkafn jaf sdni sdu fsodb siudm ijsmvo jmfvoierbv iebmf ijerovi enmronemr v",
                id : 2,
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
                id : 1,
                avatar : "https://ionicframework.com/docs/img/demos/avatar.svg"
            }
        ],
        messages : []
    }
]

export default rooms