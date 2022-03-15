import Link from "next/link";
import CarroselComponent from "./carrousel/Carrosel";
import { DestaqueContainer, TxtDestaques } from './styles'

export default function DestaqueBanner(){
    return (
      <>
        <TxtDestaques>DESTAQUES</TxtDestaques>
        <DestaqueContainer>
          <CarroselComponent />
        </DestaqueContainer>
      </>
    );
}