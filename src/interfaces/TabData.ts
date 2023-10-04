export interface Chords {
  name: string
  pos: number
}

export interface Tab {
  chords: Chords[]
  lyrics: string
}

export interface TabData {
  id?: number
  name?: string
  creator?: string
  tab?: Tab[]
}
