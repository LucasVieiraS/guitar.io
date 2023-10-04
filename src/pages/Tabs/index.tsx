import { useEffect, useState } from "react"

import { SongData } from '../../interfaces/SongData';

import TabCard from "../../components/TabCard";
import { SongService } from "../../services/SongService";


export default function Tabs() {
  const [tabs, setTabs] = useState<SongData[]>([])

  useEffect(() => {
    setTabs(SongService().getSongs())
  }, [setTabs])

  return <div className="w-full h-fit flex gap-2 flex-col">
    {
      tabs.map((tabData: SongData) => {
        return <TabCard tabData={tabData}/>
      })
    }
  </div>
}
