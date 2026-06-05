import { CharacterAttribute } from "@/app/data/types"
import { FunctionComponent } from "react"

export const Attribute: FunctionComponent<CharacterAttribute> = (props) => {
    
    const score = String(props.abilityScore)

    function calculateModifier(abilityScore: number) {
        const result = Math.floor((abilityScore - 10) / 2); 
        return result
    }

    function parseModifier(modifier: number) {
        if(modifier >=0 ) {
            return "+" + modifier;
        }
        else {
            return String(modifier)
        }
    }


    const finalModifier = parseModifier(calculateModifier(props.abilityScore))
    
    return(
        <>
        <div className="border border-stone-900 w-24 rounded-xl p-0.5 flex flex-col gap-0 sm:gap-0.5 bg-white">
            <h1 id="attributeType" className="text-sm text-center">{props.attributeType}</h1>
            <h2 id="score" className="text-lg sm:text-2xl text-center">{score}</h2>
            <h2 id="modifier" className="text-md font-bold w-3/5 border-t mx-auto sm:text-lg text-center">{finalModifier}</h2>
        </div>
        </>
    )
}