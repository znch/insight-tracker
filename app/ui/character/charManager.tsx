import { FunctionComponent } from "react";
import { CharacterCardInline } from "@/app/data/types";
import Link from "next/link";

const CharCardInline : FunctionComponent<CharacterCardInline> = (props) => {
    return(
        <>
        <Link href={""}>
        <div className="w-full border-2 border-transparent hover:border-stone-500 bg-stone-200 rounded-xl px-2 py-2 flex flex-col">
        <h1 className="font-bold text-lg hover:underline">{props.charName}</h1>
        <h2>Lvl.{String(props.level)} {props.race} {props.charClass}</h2>
        </div>
        </Link>
        </>
    )
}

// TODO: pass data from DB about corresponding characters
const CharManagerWrapper : FunctionComponent = (props) => {
    
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
        <div id="char-wrapper" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            listOfCharacters
        }
        </div>
        </>
    )
}

export {
    CharCardInline,
    CharManagerWrapper,
}