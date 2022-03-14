import Link from "next/link";
import ItenNav from "./itensNav/ItensNav";
import { NavContainer } from "./style";

export default function Nav(){
    return (
        <NavContainer>
            <ItenNav />
        </NavContainer>
    );
}