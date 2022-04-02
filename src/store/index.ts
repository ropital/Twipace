import { atom } from "jotai";
import { SpaceState } from "models/Space";

// Search atoms
export const keywordsAtom = atom("");
export const spaceStateAtom = atom<SpaceState | undefined>(undefined);
