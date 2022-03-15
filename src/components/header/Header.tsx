import Link from 'next/link';
import {
  HeaderContainer,
  ButtonHeaderContainer,
  ItensHeaderContainer,
} from "./style";
import Nav from './navbar/Nav';
import Logo from '../logo/Logo';
import { FaShoppingCart, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import SearchBox from '../search/Search';
export default function Header(){
    return (
      <>
        <HeaderContainer>
          <Logo />
          <SearchBox />
          <ButtonHeaderContainer>
            <Link href="#" passHref>
              <ItensHeaderContainer className="nav-buttons-signin">
                <FaUserCircle color="#ffffff" size={30} />
                <p>Entrar</p>
              </ItensHeaderContainer>
            </Link>
            <>
              <Link href="/cart" passHref>
                <ItensHeaderContainer className="nav-buttons-items">
                  <FaShoppingCart color="#ffffff" size={30} />
                  <p>Itens</p>
                </ItensHeaderContainer>
              </Link>
            </>
          </ButtonHeaderContainer>
        </HeaderContainer>
        <Nav />
      </>
    );
}   