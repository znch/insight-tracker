import Image from "next/image";
import Navbar from "./ui/navbar";
import { CharManagerWrapper } from "./ui/character/charManager";

export default function Home() {
  return (
    <>
    <div>
      <div>
        <CharManagerWrapper></CharManagerWrapper>
      </div>
    </div>
    </>
  );
}
