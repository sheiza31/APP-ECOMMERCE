const TableProducts = () => {
    return (
        <>
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-outline-variant/20 flex justify-between items-center">
                    <h3 className="font-headline-sm text-headline-sm text-primary">Top Performing Products</h3>
                    <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-surface-container-low rounded-lg border border-outline-variant/40">
                            <span className="material-symbols-outlined text-[20px]" data-icon="filter_list">filter_list</span>
                        </button>
                        <button className="p-2 hover:bg-surface-container-low rounded-lg border border-outline-variant/40">
                            <span className="material-symbols-outlined text-[20px]" data-icon="download">download</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-surface-container-low/50 font-label-md text-label-md text-secondary border-b border-outline-variant/10">
                            <tr>
                                <th className="px-8 py-4 font-semibold">Product Details</th>
                                <th className="px-8 py-4 font-semibold">Category</th>
                                <th className="px-8 py-4 font-semibold">Price</th>
                                <th className="px-8 py-4 font-semibold text-center">Units Sold</th>
                                <th className="px-8 py-4 font-semibold text-right">Revenue</th>
                                <th className="px-8 py-4 font-semibold text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/10">
                            <tr className="hover:bg-surface-container-low/30 transition-colors group">
                                <td className="px-8 py-5">
                                    <div className="flex items-center space-x-4">
                                        <div className="h-12 w-12 rounded-lg bg-surface-container-highest overflow-hidden border border-outline-variant/20 flex-shrink-0">
                                            <img className="w-full h-full object-cover" data-alt="A studio shot of a high-end minimalist ceramic table lamp with a soft cream finish and a linen shade. The lighting is diffused and editorial, set against a pristine white background with subtle shadows. The aesthetic is extremely clean and sophisticated, aligning with premium interior design branding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-1HHwGJ0D-2FGSgAszk1lLBJ07m4qLp1sw3elf1e4YjJWRLCSqrsR_LKMwh4qgsoWtdpyZMoYQanivF8FnSgU8rVeS3nVt4N7oOWM__BLbQZW1krC3CkJ9c4ymD0-LVwMxxQzC-erc0Rwm9IL8xIlNfNXxg94NL2W6e1pmQ95dO1BIyrG1CG_Vvr8qWtVhR9wFYdaxkDfQRybnB_UzCTwoibQ1AGDkAaGKMPqbbJjOOIcr3XqfkIJGu7DUAZm1Q3tmf8ikOpgV_A" />
                                        </div>
                                        <div>
                                            <p className="font-label-md text-label-md text-primary group-hover:text-surface-tint">Luna Ceramic Lamp</p>
                                            <p className="font-label-sm text-label-sm text-secondary opacity-70">ID: LUM-2091</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <span className="px-3 py-1 bg-surface-container-low rounded-full font-label-sm text-label-sm text-secondary">Home Decor</span>
                                </td>
                                <td className="px-8 py-5 font-body-sm text-body-sm text-primary">$285.00</td>
                                <td className="px-8 py-5 text-center font-body-sm text-body-sm text-primary">1,248</td>
                                <td className="px-8 py-5 text-right font-body-sm text-body-sm text-primary font-bold">$355,680</td>
                                <td className="px-8 py-5 text-right">
                                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full font-label-sm text-label-sm">High Demand</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low/30 transition-colors group">
                                <td className="px-8 py-5">
                                    <div className="flex items-center space-x-4">
                                        <div className="h-12 w-12 rounded-lg bg-surface-container-highest overflow-hidden border border-outline-variant/20 flex-shrink-0">
                                            <img className="w-full h-full object-cover" data-alt="Close-up product photography of an elegant minimalist leather watch with a deep indigo strap and a brushed steel watch face. Shot in a professional studio setting with sharp focus and cinematic lighting that highlights the textures of the leather and the metal. The mood is luxurious and modern." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBigbCIUhjcMffhShNqNK_unwpEIxi16DWmVoxYZqmwe01-KXphampufJKvfNaebvpoHoRunKBju3Im2otYEAtrvhT3_MKjTWtgtkAwPGtLiCTB32JUlD2EdkZr0mBn4Eyti27LFmmw41wRBmMnap2EVTTs-6iDQcSX2kpmDvng8E7a2Qou6eiA9uDmoh-N5Lg0AbaruXqcCgd2qP28eTtEH1YjKMSUBbqN-aS5QmtKGWuL9R5fLOAKCD04NirEghzA2HNUgNI3CXk" />
                                        </div>
                                        <div>
                                            <p className="font-label-md text-label-md text-primary group-hover:text-surface-tint">Apex Steel Watch</p>
                                            <p className="font-label-sm text-label-sm text-secondary opacity-70">ID: LUM-8832</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <span className="px-3 py-1 bg-surface-container-low rounded-full font-label-sm text-label-sm text-secondary">Accessories</span>
                                </td>
                                <td className="px-8 py-5 font-body-sm text-body-sm text-primary">$420.00</td>
                                <td className="px-8 py-5 text-center font-body-sm text-body-sm text-primary">842</td>
                                <td className="px-8 py-5 text-right font-body-sm text-body-sm text-primary font-bold">$353,640</td>
                                <td className="px-8 py-5 text-right">
                                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full font-label-sm text-label-sm">Steady</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low/30 transition-colors group">
                                <td className="px-8 py-5">
                                    <div className="flex items-center space-x-4">
                                        <div className="h-12 w-12 rounded-lg bg-surface-container-highest overflow-hidden border border-outline-variant/20 flex-shrink-0">
                                            <img className="w-full h-full object-cover" data-alt="Architectural minimalist designer chair made of light white oak and premium grey wool upholstery. The photo is taken from a low angle in a sun-drenched, white-walled modern living room. Soft natural shadows fall across the wood grain, emphasizing craft and quality. The color palette is strictly warm neutrals and whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_EZH1ldzyo8AtvFQwTd3yr1C8Qa5oOOpbYscyYU_ykn7VALYPkJJL6xHxWTGPppiegZOmkTfhKoppliSxk1fARtowlpkhBdgKagsagPXYyX61ptb4lZldVOJqv7MwW5yDdCoNRClOyW-ccFNvt-cghr5sJ6MABt9wxSxRk4hOs289SfIm_MUZkgnLFMU-lFX_mNlHJbrtC65W1a83-EirjFTQz_zIhOm_8RjS5zft9eS4OqeOuZkhsXm8_iMONCw0IkTv86efKTg" />
                                        </div>
                                        <div>
                                            <p className="font-label-md text-label-md text-primary group-hover:text-surface-tint">Nordic Oak Chair</p>
                                            <p className="font-label-sm text-label-sm text-secondary opacity-70">ID: LUM-4401</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <span className="px-3 py-1 bg-surface-container-low rounded-full font-label-sm text-label-sm text-secondary">Furniture</span>
                                </td>
                                <td className="px-8 py-5 font-body-sm text-body-sm text-primary">$1,250.00</td>
                                <td className="px-8 py-5 text-center font-body-sm text-body-sm text-primary">156</td>
                                <td className="px-8 py-5 text-right font-body-sm text-body-sm text-primary font-bold">$195,000</td>
                                <td className="px-8 py-5 text-right">
                                    <span className="px-3 py-1 bg-secondary-container/30 text-on-secondary-container rounded-full font-label-sm text-label-sm">Backorder</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="px-8 py-4 bg-surface-container-low/20 flex justify-between items-center font-label-sm text-label-sm text-secondary">
                    <span>Showing 1-10 of 248 products</span>
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 rounded border border-outline-variant/50 hover:bg-surface-container-low">Prev</button>
                        <button className="px-3 py-1 rounded border border-outline-variant/50 bg-primary text-on-primary">1</button>
                        <button className="px-3 py-1 rounded border border-outline-variant/50 hover:bg-surface-container-low">2</button>
                        <button className="px-3 py-1 rounded border border-outline-variant/50 hover:bg-surface-container-low">Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TableProducts