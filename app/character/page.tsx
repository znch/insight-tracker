import { PagePanel, PageControl} from "../ui/character/pagePanel"
import CharacterOverview from "../ui/character/overview"

export default function Page() {
    return(
        <>
        <div className="mb-4">
            <PagePanel />
        </div>
        <div>
            <CharacterOverview />
        </div>
        </>
    )
}