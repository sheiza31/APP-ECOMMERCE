import Link from "next/link"
const Footer = () => {
    return (
        <>
            <footer className="w-full border-t border-outline-variant bg-surface dark:bg-surface-container-lowest mt-section-gap">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-stack-lg max-w-container-max mx-auto">
                    <div className="space-y-4">
                        <Link className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed" href="#">LUMINA</Link>
                        <p className="font-body-sm text-body-sm text-on-secondary-container dark:text-on-secondary-fixed-variant leading-relaxed">
                            Defining the modern wardrobe through precision, sustainability, and timeless minimalism.
                        </p>
                        <div className="flex gap-4">
                            <a className="text-secondary hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                            <a className="text-secondary hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">camera_enhance</span></a>
                            <a className="text-secondary hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-label-md text-label-md font-bold text-primary mb-6">Customer Service</h4>
                        <ul className="space-y-4">
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Shipping</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Returns</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-md text-label-md font-bold text-primary mb-6">About Us</h4>
                        <ul className="space-y-4">
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Our Story</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Sustainability</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-md text-label-md font-bold text-primary mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Privacy</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Terms</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-outline-variant px-margin-desktop py-8 max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-body-sm text-body-sm text-on-secondary-container dark:text-on-secondary-fixed-variant">© 2024 LUMINA. All rights reserved.</p>
                    <div className="flex gap-6">
                        <img alt="Visa" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5n1emg1lfHJDEEkRHekbxkS0NCAsJqzhr3rxOteTCL3AEAPUjDaA4nbVBIEprT9tX6076lvXrzHP5D7GlROiY1XWkfUZ10AywMrULSk3hTic22s2LbsFMvNVTD0IQXz7x42bsMUM9Q7JzqneP6nllQeSQWeNy2RuXUUPV5nU95bhtM-3RQ2kW7d-Xkoxmr5Et5gpbgnKb0rlzm8mu74MuUbijguTk-dgPQElPPSdqSGLsXZDzD8tFlSnt6lkRoS72Q05kT7Uig0k" />
                        <img alt="Mastercard" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmTgeSK37DAs0GPJRSRiwX-tTDvMnOCIg2OId-6J9At-gaoTZzje73YHQrL7ViqMF09a9noY65i22l_RNvKhtHEt_ipEJvHP6KvMMpVaT5akMx-NmqPL16Q0_L6du9NyMGnVR-g3q9oNyspsBiAiMqcRXG9p1RpL7x50KS-MQZ_w8Q9GDo7myBCHZ0vb32RWt7t3hSUKsjEoAU8XWX4VbnaSKGWf8JmTiYxsrCAHzHTFqMbBuHpIU1dCjiDPt3zSxiLgOVfn8SV-Q" />
                        <img alt="Paypal" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa8zDye_r9ugtAaIYcLmykyE2CJ78fB1f9w4NB-x6p64KOKBQS-Dxrn5uc7ylM1XI5AWcANBP_zyUO1Rz58cTU0vAyWPPBxhPNExvfUEzxKnLWAc5A8YqqXlPxsUz0qq4E3Z-EQ1Bow9_NomJw90LKhbHGrBuHz8oN8u7AljwIFflz2ZOmxGMn4vY7yXfouGYmjYtNFLitOf79gnXPpRyOs2_4LFQVnKMcFKDijzvDLmbkgaNATYwMysNICgUpHobnedZl7FtS438" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer