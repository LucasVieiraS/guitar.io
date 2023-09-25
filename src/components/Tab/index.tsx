interface Chords {
    name: string
    pos: number
}

const tab = [
    {
        chords: [
            {
                name: 'A',
                pos: 1,
            },
            {
                name: 'A',
                pos: 50,
            }
        ],
        lyrics: 'He seemed impressed by the way you came in'
    },
]

const formatChords = (chords: Chords[]) => {
    let aux = ''
    chords.forEach((chordData: Chords) => {
        let spaces = '';
        for (let i = 0; i < chordData.pos; i++) {
            spaces += ' '
        }
        aux += spaces + chordData.name
    })
    return aux
}

export default function Tab() {
    return <pre className="py-6">
        { tab.map((tabData) => {
            return <>
                <p className="font-bold">{formatChords(tabData.chords)}</p>
                <p>{tabData.lyrics}</p>
            </>
        }) }
    </pre>
}