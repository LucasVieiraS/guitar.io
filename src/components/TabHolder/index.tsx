import { Chords, Tab } from "../../interfaces/TabData";

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

export default function TabHolder({ tabData }: { tabData: Tab[] }) {
    if (tabData) {
      return <pre className="my-4">
      {tabData.map((tab) => {
            return <>
                <p className="font-bold transition-opacity hover:opacity-50 hover:cursor-pointer">{formatChords(tab.chords, tab.lyrics)}</p>
                <p>{tab.lyrics}</p>
            </>
        })}

    </pre>
    }
    return <h1>There is no tab for this song yet.</h1>
}
