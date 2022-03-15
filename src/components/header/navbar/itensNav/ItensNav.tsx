import Link from "next/link";
import { FaBars} from 'react-icons/fa';
import { AllCategorias, FonteCategorias, FontMarca, ItemCategoria, ItensCategoria, ItensNavContainer, MarcaEsquerda } from "./styles";

export default function ItenNav(){
    return (
      <ItensNavContainer>
        <AllCategorias>
          <FaBars color="#fafafa" />
          <ItensCategoria defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Categorias
            </option>
            <option value="#">Futebol Nacional</option>
            <option value="#">Futebol Internacional</option>
            <option value="#">Basquete</option>
            <option value="#">Corta-Vento</option>
          </ItensCategoria>
        </AllCategorias>
        <ItemCategoria>
          <Link href="#" passHref>
            <FonteCategorias>Promoções</FonteCategorias>
          </Link>
          <Link href="#" passHref>
            <FonteCategorias>Contato</FonteCategorias>
          </Link>
          <Link href="#" passHref>
            <FonteCategorias>Brasileirão</FonteCategorias>
          </Link>
          <Link href="#" passHref>
            <FonteCategorias>Basquete</FonteCategorias>
          </Link>
          <Link href="#" passHref>
            <FonteCategorias>Corta-Vento</FonteCategorias>
          </Link>
        </ItemCategoria>
        <MarcaEsquerda>
          <FontMarca>Jotinha Store</FontMarca>
        </MarcaEsquerda>
      </ItensNavContainer>
    ); 
}
