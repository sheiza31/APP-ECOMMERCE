"use client"
import { useState } from "react";
import Header from "./Header";
import swal from "sweetalert2"

const StatsRow = () => {
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        try {
            const data = await fetch("http://localhost:8080/api/v1/category",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        name,
                        description
                    })
                }
            )
            const response = await data.json()
            if(response.status === 201){
                swal.fire({
                    title: "Success!",
                    text: "Category created successfully",
                    icon: "success",
                    confirmButtonText: "OK"
                })
            }

            } catch (error) {
                console.log(error)
                alert("Failed to create category")
            }

            
    }
    return (
        <>
            <div className="grid grid-cols-12 md:grid-cols-3 gap-gutter mb-stack-lg">
                <div className="col-span-4 bg-gray-100 flex  p-6">
                    <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">

                        <div className="grid md:grid-cols-3">
                            <div className="md:col-span-2 p-8">
                                <h1 className="text-3xl font-bold text-gray-800">
                                    Form Category
                                </h1>
                                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="text-sm font-medium text-gray-600">
                                                Nama Kategori
                                            </label>

                                            <input
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                type="text"
                                                placeholder="John"
                                                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="text-sm font-medium text-gray-600">
                                                Description
                                            </label>

                                            <textarea
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                rows={5}
                                                cols={30}
                                                placeholder="Masukkan Deskripsi"
                                                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex  gap-4 pt-4">
                                        <button
                                            type="submit"
                                            className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
                                            Save Changes
                                        </button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default StatsRow