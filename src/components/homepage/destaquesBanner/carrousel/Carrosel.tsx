import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

// const Image= props=>{
//     const {
//         alt,
//         ...otherProps
//     }= props;
// }

export default function CarroselComponent(){
    return (
      <div className="carousel-wrapper">
        <Carousel>
          <div>
            <Image
              src="/img/camisa-liverpool.png"
              alt="Jotinha Store"
              width={350}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/img/camisa-liverpool.png"
              alt="Jotinha Store"
              width={140}
              height={120}
            />
          </div>
          <div>
            <Image
              src="/img/camisa-liverpool.png"
              alt="camisa-liverpoolcamisa-liverpool"
              width={140}
              height={120}
            />
          </div>
        </Carousel>
      </div>
    );
}
