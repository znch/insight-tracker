import { FunctionComponent } from "react";
import { CharacterCardInline } from "@/app/data/types";
import Link from "next/link";

export const CharCardInline : FunctionComponent<CharacterCardInline> = (props) => {

    const decorativeBorderShared = "h-1/3 w-1/3 absolute transition duration-200 border-transparent group-hover:border-stone-800"


    return(
        
        <>
        <Link href={"/character"} className="py-2 px-2">
        <div className="w-full border border-stone-800 bg-stone-200 px-2 py-2 flex flex-col gap-1 relative group transition duration-300">
        <h1 className="font-bold text-lg hover:underline">{props.charName}</h1>
        <h2>Lvl.{String(props.level)} {props.race} {props.charClass}</h2>
        <div id="border-extra-top" className={`${decorativeBorderShared} border-t border-l -top-2 -left-2`}></div>
        <div id="border-extra-bottom" className={`${decorativeBorderShared} border-b border-r -bottom-2 -right-2`}></div>
        <div id="border-extra-center" className="w-2 h-full absolute border-t -top-2 left-1/3 -translate-x-1/3 border-transparent group-hover:border-stone-800 duration-200"></div>
        <div id="border-extra-center" className="w-2 h-full absolute border-b -bottom-2 left-2/3 -translate-x-2/3 border-transparent group-hover:border-stone-800 duration-200"></div>
        </div>
        
        </Link>
        </>
    )
}

// TODO: pass data from DB about corresponding characters
export const CharManagerWrapper : FunctionComponent = (props) => {
    
    const chars = [{name: "Henrik", level: 12, race: "Human", charClass: "Warlock"}, {name: "Eylia", level: 15, race: "Elf", charClass: "Fighter"}]

    const listOfCharacters = chars.map((a, i) => {
        return(
        <CharCardInline 
            charClass={chars[i].charClass}
            charName={chars[i].name}
            level={chars[i].level}
            race={chars[i].race}
            key={i}
            ></ CharCardInline>
    )})
    
    return(
        <>
        <div id="title" className="mb-4 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl text-center">Select your character</h1>
        </div>
        <div id="char-wrapper" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {
            listOfCharacters
        }
        </div>
        </>
    )
}
