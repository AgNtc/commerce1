import { FaSearch } from "react-icons/fa";
import { InputSearch, SearchButton, SearchContainer } from "./styles";

export default function SearchBox() {
  return (
    <>
      <SearchContainer>
        <SearchButton>
          <FaSearch color="#054293" size="15px" />
        </SearchButton>
        <InputSearch
          id="search"
          type="text"
          name="search"
          placeholder="Pesquisar"
        />
      </SearchContainer>
    </>
  );
}
