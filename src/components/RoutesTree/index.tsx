import { Routes, Route } from 'react-router'

import Song from '../../pages/Song'
import Store from '../../pages/Store'
import Tabs from '../../pages/Tabs'

export default function RoutesTree() {
  return <>
      <Routes>
        <Route path="/" element={<Tabs />} />
        <Route path="tabs" element={<Tabs />} />
        <Route path="song/*" element={<Song />} />
        <Route path="store" element={<Store />} />
      </Routes>
  </>

}
