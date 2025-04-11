import {create} from "zustand";




type DateAudienceStore = {
    date: Date,
    time: number,
    campus: "Drago" | "Tarny",
    setDate: (payload: Date) => void,
    setTime: (payload: number) => void,
    setCampus: (payload: "Drago" | "Tarny") => void,
}


type SearchResults = {
    data: object[],
    setData: (payload: object[]) => void,
}

export const useSearchResultsStore = create<SearchResults>((set) => ({
    data: [],
    setData: (payload: object[]) => {
        set((state) => ({data: payload}));
    }
}))

export const useDatePickerStore = create<DateAudienceStore>((set) => ({
    date: new Date(0),
    time: 1,
    campus: "Drago",
    setDate: (payload: Date) => {
        set((state) => ({date: payload}));
    },
    setTime: (payload:  number) => {
        set((state) => ({time: payload}));
    },
    setCampus: (payload: "Drago" | "Tarny") => {
        set((state) => ({campus: payload}));
    }

}))