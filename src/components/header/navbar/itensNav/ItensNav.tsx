import Link from "next/link";
import { FaBars} from 'react-icons/fa';
import { AllCategorias, ItemCategoria, ItensCategoria, ItensNavContainer } from "./styles";

export default function ItenNav(){
    return (
      <ItensNavContainer>
        <AllCategorias>
          <FaBars color="#fafafa" />
          <ItensCategoria name="categories" id="categories">
            <option value="All Categories" selected>
              Categorias
            </option>
            <option value="#">Futebol Nacional</option>
            <option value="#">Futebol Internacional</option>
            <option value="#">Basquete</option>
            <option value="#">Corta-Vento</option>
          </ItensCategoria>
        </AllCategorias>
        <ItemCategoria>
          <Link href="#">
            <a>Promoções</a>
          </Link>
          <Link href="#">
            <a>Contato</a>
          </Link>
          <Link href="#">
            <a>Brasileirão</a>
          </Link>
          <Link href="#">
            <a>Basquete</a>
          </Link>
          <Link href="#">
            <a>Corta-Vento</a>
          </Link>
        </ItemCategoria>
      </ItensNavContainer>
    ); 
}
