interface Chords {
    name: string
    pos: number
}

const tab = [
    {
        chords: [
            {
                name: "A",
                pos: 1,
            },
            {
                name: "A",
                pos: 50,
            },
        ],
        lyrics: "He seemed impressed by the way you came in",
    },
    {
        chords: [
            {
                name: "A",
                pos: 1,
            },
            {
                name: "A",
                pos: 50,
            },
        ],
        lyrics: "I was afraid that you would not insist",
    },
    {
        chords: [
            {
                name: "Bm",
                pos: 1,
            },
            {
                name: "Bm",
                pos: 50,
            },
        ],
        lyrics: "You're in a strange part of our town",
    },
    {
        chords: [
            {
                name: "Bm",
                pos: 1,
            },
            {
                name: "Bm",
                pos: 50,
            },
        ],
        lyrics: "I'm not drowning fast enough",
    },
    {
        chords: [
            {
                name: "D",
                pos: 1,
            },
            {
                name: "F#m",
                pos: 50,
            },
        ],
        lyrics: "Yeah, the night's not over",
    },
    {
        chords: [
            {
                name: "G",
                pos: 1,
            },
            {
                name: "A",
                pos: 50,
            },
        ],
        lyrics: "You're not trying hard enough, you're not trying hard enough",
    },
    {
        chords: [
            {
                name: "D",
                pos: 1,
            },
            {
                name: "F#m",
                pos: 50,
            },
        ],
        lyrics: "Our lives are changing lanes",
    },
    {
        chords: [
            {
                name: "G",
                pos: 1,
            },
            {
                name: "A",
                pos: 50,
            },
        ],
        lyrics: "You ran me off the road, you ran me off the road",
    },
    {
        chords: [
            {
                name: "F#m",
                pos: 1,
            },
            {
                name: "F#m",
                pos: 10,
            },
        ],
        lyrics: "The wait is over",
    },
    {
        chords: [
            {
                name: "G",
                pos: 1,
            },
            {
                name: "G",
                pos: 50,
            },
        ],
        lyrics: "I'm now taking over",
    },
    {
        chords: [
            {
                name: "D",
                pos: 1,
            },
            {
                name: "F#m",
                pos: 100,
            },
        ],
        lyrics: "You're no longer laughing",
    },
    {
        chords: [
            {
                name: "G",
                pos: 1,
            },
            {
                name: "A",
                pos: 50,
            },
        ],
        lyrics: "I'm not drowning fast enough, I'm not drowning fast enough",
    },
];

const formatChords = (chords: Chords[], lyrics: string) => {
    let aux = ''
    chords.forEach((chordData: Chords, index: number) => {
        let spaces = '';
        for (let i = 0; i < chordData.pos-1; i++) {
            if (i > lyrics.length+5) continue
            spaces += ' '
        }
        aux += spaces + chordData.name
    })
    return aux
}

export default function Tab() {
    return <pre className="py-6">
        {tab.map((tabData) => {
            return <>
                <p className="font-bold">{formatChords(tabData.chords, tabData.lyrics)}</p>
                <p>{tabData.lyrics}</p>
            </>
        })}
    </pre>
}