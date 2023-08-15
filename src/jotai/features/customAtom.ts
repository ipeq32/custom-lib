import { atom } from 'jotai'

export const customAtom = atom<string[]>([])
customAtom.debugLabel = 'customAtom'