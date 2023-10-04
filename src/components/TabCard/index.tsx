import { FaMicrophone } from "react-icons/fa";
import { TabData } from "../../interfaces/TabData";

export default function TabCard({ tabData }: { tabData: TabData }) {
  return <a className="p-5 py-5 w-full h-20 bg-blue-500 rounded shadow-sm flex justify-start align-center gap-3" href={`song/_song_name=${tabData.name}`}>
    <FaMicrophone className="h-6 w-6 text-white my-auto"/> <h1 className="font-bold text-white my-auto text-2xl">{tabData.name}</h1>
  </a>
}
