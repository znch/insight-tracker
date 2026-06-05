export interface CharacterCardInline {
    charName: string;
    race: string;
    charClass: string;
    level: number;
}

export interface CharacterAttribute {
    attributeType: "Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma";
    abilityScore: number;
}

export interface CharacterSkills {
    proficiency: boolean;

}