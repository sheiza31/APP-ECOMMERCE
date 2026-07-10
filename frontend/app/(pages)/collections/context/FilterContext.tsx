"use client"
import { createContext, useContext, useState, ReactNode } from "react"

export type SortOrder = "default" | "price_asc" | "price_desc"

interface FilterState {
    selectedColors: string[]
    selectedCategoryIDs: number[]
    sortOrder: SortOrder
    toggleColor: (color: string) => void
    toggleCategory: (id: number) => void
    setSortOrder: (sort: SortOrder) => void
    clearFilters: () => void
}

const FilterContext = createContext<FilterState | null>(null)

export function FilterProvider({ children }: { children: ReactNode }) {
    const [selectedColors, setSelectedColors] = useState<string[]>([])
    const [selectedCategoryIDs, setSelectedCategoryIDs] = useState<number[]>([])
    const [sortOrder, setSortOrder] = useState<SortOrder>("default")

    const toggleColor = (color: string) => {
        setSelectedColors(prev =>
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        )
    }

    const toggleCategory = (id: number) => {
        setSelectedCategoryIDs(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        )
    }

    const clearFilters = () => {
        setSelectedColors([])
        setSelectedCategoryIDs([])
        setSortOrder("default")
    }

    return (
        <FilterContext.Provider value={{
            selectedColors,
            selectedCategoryIDs,
            sortOrder,
            toggleColor,
            toggleCategory,
            setSortOrder,
            clearFilters,
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export function useFilter() {
    const ctx = useContext(FilterContext)
    if (!ctx) throw new Error("useFilter must be used inside FilterProvider")
    return ctx
}
