import { SongData } from "../interfaces/SongData"
import { Tab, TabData } from "../interfaces/TabData"

const songs: SongData[] = [
  {
    id: 1,
    name: 'You Only Live Once',
    creator: 'The Strokes'
  },
  {
    id: 2,
    name: 'Reptilia',
    creator: 'The Strokes'
  },
]

const tabs: TabData[] = [
  {
    id: 2,
    tab: [
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
  ]
  }
]

export const SongService = () => {

  const getSongs = () => {
    return songs
  }

  const getSongDataAndTabsByName = (name: string) => {
    const inner = () => {
      return songs.filter((songData: SongData) => songData.name.toLowerCase().includes(name.toLowerCase()))
    }

    const getTab = (songId: number) => {
      return tabs.filter((tabData: TabData) => tabData.id === songId)
    }

    const songData = inner()[0]
    if (!songData || songData.id == null) {
      return {}
    }

    const songTab = getTab(songData.id)
    if (!songTab) {
      return {}
    }

    const destructuredTabs = songTab.map((tab: any) => {
      return tab.tab;
    })

    const songDataAndTabs: TabData = {
      id: songData.id,
      name: songData.name,
      creator: songData.creator,
      tab: [
        ...destructuredTabs[0]
      ]
    }

    console.log(songData, songDataAndTabs)

    return songDataAndTabs
  }

  return {
    getSongDataAndTabsByName,
    getSongs
  }
}
