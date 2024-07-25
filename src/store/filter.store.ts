import { create } from "zustand";
import { devtools } from 'zustand/middleware'

interface IFilterStore {
sortValue: string,
setSortValue: (val: string) => void;
}

export const filterStore = create<IFilterStore>()(devtools(
    (set,get) => ({
            sortValue: '',
            setSortValue: (val) => set({sortValue: val}),
        
    })
))