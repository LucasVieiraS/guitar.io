import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SongInfo from "../../components/SongInfo";
import TabHolder from "../../components/TabHolder";

import { Tab as TabType, TabData } from "../../interfaces/TabData";
import { SongService } from "../../services/SongService";

const getSongName = (searchParams: any) => {
  let songName = searchParams.get("_song_name")
  if (!songName) {
    // default
    songName = 'Reptilia'
  }
  return songName
}

export default function Song() {
    const [searchParams] = useSearchParams()
    const [songData, setSongData] = useState<TabData>()

    useEffect(() => {
      const songName = getSongName(searchParams)
      const songData = SongService().getSongDataAndTabsByName(songName)
      setSongData(songData as TabData)
    }, [searchParams])

    return <Fragment>
        {
          songData && (
            <Fragment>
              {
                songData.name && (
                  <SongInfo name={songData?.name} creator={songData?.creator}/>
                )
              }
              <TabHolder tabData={songData.tab as TabType[]}/>
            </Fragment>
          )
        }
    </Fragment>
}
