import { Attribute } from "./attribute"
import { CharacterAttribute } from "@/app/data/types"

export default function CharacterOverview() {

    const placeHolderAttributes: Array<CharacterAttribute> = [
        {attributeType: "Strength", abilityScore: 11},
        {attributeType: "Dexterity", abilityScore: 13},
        {attributeType: "Constitution", abilityScore: 9},
        {attributeType: "Intelligence", abilityScore: 15},
        {attributeType: "Wisdom", abilityScore: 12},
        {attributeType: "Charisma", abilityScore: 10},

    ]

    const renderAttributes = placeHolderAttributes.map((e, i) => {
        return <Attribute abilityScore={e.abilityScore} attributeType={e.attributeType} key={i}></Attribute>
    })

    return(
        <>
        <div>
            <div id="attribute-column" className="flex flex-col gap-2 bg-stone-200 rounded-md w-max p-2 border border-stone-900">
                {renderAttributes}
            </div>
        </div>
        </>
    )
}