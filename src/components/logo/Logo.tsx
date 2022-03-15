import Link from "next/link";
import Image from "next/image";
import { LogoContainer, TxtLogo } from "./styles";

export default function Logo() {
  return (
    <>
      <Link href="/" passHref>
        <LogoContainer className="logo">
          <Image
            src="/img/logo1-removebg-preview.png"
            alt="Jotinha Store"
            width={140}
            height={120}
          />
          <TxtLogo className="text_logo">Jotinha Store</TxtLogo>
        </LogoContainer>
      </Link>
    </>
  );
}
