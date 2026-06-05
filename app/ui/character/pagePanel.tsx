"use client"
import Link from "next/link"

export function PagePanel() {
    return(
        <>
        <div className="flex flex-col gap-2 sm:flex-row">
            <button className="w-full px-2 py-2 hover:cursor-pointer bg-black text-white rounded-lg" onClick={() => {return 1}}>Character overview</button>
            <button className="w-full px-2 py-2 hover:cursor-pointer bg-black text-white rounded-lg" onClick={() => {return 2}}>Spells&nbsp;&&nbsp;abilities</button>
            <button className="w-full px-2 py-2 hover:cursor-pointer bg-black text-white rounded-lg" onClick={() => {return 3}}>Notes</button>
            <button className="w-full px-2 py-2 hover:cursor-pointer bg-black text-white rounded-lg" onClick={() => {return 4}}>Combat planner</button>
        </div>
        </>
    )
}

export function PageControl() {
    return(
        <>
        
        </>
    )
}