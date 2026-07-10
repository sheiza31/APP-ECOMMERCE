"use client"
import { useEffect, useState } from "react"
import { useFilter } from "../context/FilterContext"

interface Category {
    ID: number
    name: string
    slug: string
}

// Hardcoded color palette — sama persis seperti design original
const COLOR_PALETTE = [
    { key: "black",    hex: "#131b2e", label: "Onyx" },
    { key: "white",    hex: "#f2f3ff", label: "Bone",   border: true },
    { key: "slate",    hex: "#545f73", label: "Slate" },
    { key: "stone",    hex: "#8d9092", label: "Stone" },
    { key: "charcoal", hex: "#26292b", label: "Charcoal" },
]

const AsideBar = () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
    const [categories, setCategories] = useState<Category[]>([])

    const { selectedColors, selectedCategoryIDs, toggleColor, toggleCategory } = useFilter()

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("http://localhost:8080/api/v1/category", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                })
                const data = await res.json()
                setCategories(data.data ?? [])
            } catch {
                console.error("Failed to fetch categories")
            }
        }
        fetchCategories()
    }, [])

    return (
        <>
            <aside className="w-full lg:w-64 flex-shrink-0 space-y-stack-lg">

                {/* Categories — sama seperti original, tapi checkbox fungsional */}
                <div className="border-b border-outline-variant pb-stack-md">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Categories</h3>
                    <ul className="space-y-3">
                        {categories.map((category) => {
                            const isChecked = selectedCategoryIDs.includes(category.ID)
                            return (
                                <li key={category.ID}>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            className="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5 transition-all"
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={() => toggleCategory(category.ID)}
                                        />
                                        <span className="font-body-md text-body-md text-secondary group-hover:text-primary transition-colors">
                                            {category.name}
                                        </span>
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Color Palette — sama persis seperti original, tapi fungsional */}
                <div className="border-b border-outline-variant pb-stack-md">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Color Palette</h3>
                    <div className="flex flex-wrap gap-2">
                        {COLOR_PALETTE.map(({ key, hex, label, border }) => {
                            const isSelected = selectedColors.includes(key)
                            return (
                                <button
                                    key={key}
                                    onClick={() => toggleColor(key)}
                                    title={label}
                                    className={`w-8 h-8 rounded-full transition-all ${
                                        isSelected
                                            ? "ring-2 ring-offset-2 ring-primary"
                                            : "hover:ring-2 hover:ring-offset-2 hover:ring-outline"
                                    } ${border ? "border border-outline-variant" : ""}`}
                                    style={{ backgroundColor: hex }}
                                />
                            )
                        })}
                    </div>
                </div>

                {/* Price Range — visual slider saja */}
                <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Price Range</h3>
                    <div className="px-2">
                        <input
                            className="w-full h-1 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary"
                            type="range"
                            readOnly
                        />
                        <div className="flex justify-between mt-2 font-label-sm text-label-sm text-secondary">
                            <span>$0</span>
                            <span>$1,000+</span>
                        </div>
                    </div>
                </div>

            </aside>
        </>
    )
}

export default AsideBar