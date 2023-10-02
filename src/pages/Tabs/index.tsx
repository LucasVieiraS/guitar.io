import { useState } from "react"

import { TabsData } from '../../interfaces/TabsData';

import TabCard from "../../components/TabCard";

export default function Tabs() {
  const [tabs, setTabs] = useState<TabsData[]>([
    {
      id: 1,
      name: 'You Only Live Once'
    }
  ])

  return <>
    {
      tabs.map((tabData: TabsData) => {
        return <TabCard tabData={tabData}/>
      })
    }
  </>
}
