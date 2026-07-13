"use client";
import {Verified,Waves,Globe,AlertTriangle} from "lucide-react";
import { motion } from "framer-motion"
const CommitmentBanner = () => {
    return (
        <>
            <section className="py-stack-lg bg-primary text-surface overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    <div className="flex gap-20 items-center px-4"> 
                        <motion.span initial={{x: "0"}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className="font-label-md uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="eco"><Globe /></span> CARBON NEUTRAL BY 2026</motion.span>
                        <motion.span initial={{x: "0"}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className="font-label-md uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="all_inclusive"><AlertTriangle /></span> 100% CIRCULAR DESIGN</motion.span>
                        <motion.span initial={{x: "0"}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className="font-label-md uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="verified"><Verified /></span> ETHICALLY MANUFACTURED</motion.span>
                        <motion.span initial={{x: "0"}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className="font-label-md uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="tsunami"><Waves /></span> WATER WASTE REDUCTION</motion.span>
                    </div>
                    <div className="flex gap-20 items-center px-4">
                        <motion.span initial={{x: "0"}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className="font-label-md uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="eco"><Globe /></span> CARBON NEUTRAL BY 2026</motion.span>
                        <motion.span initial={{x: "0"}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className="font-label-md uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="all_inclusive"><AlertTriangle /></span> 100% CIRCULAR DESIGN</motion.span>
                        <motion.span initial={{x: "0"}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className="font-label-md uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="verified"><Verified /></span> ETHICALLY MANUFACTURED</motion.span>
                        <motion.span initial={{x: "0"}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className="font-label-md uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="tsunami"><Waves /></span> WATER WASTE REDUCTION</motion.span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommitmentBanner