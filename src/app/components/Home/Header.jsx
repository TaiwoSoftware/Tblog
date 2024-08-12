import Image from "next/image";
import threeLadiesImg from "../images/crop-three-ladies.jpg";
export default function Header() {
  return (
    <>
      <div>
        <div>
          <h1></h1>
        </div>
        <Image
          src={threeLadiesImg}
          alt="three-ladies-img"
          className="w-[50%] rounded-md"
        />
      </div>
    </>
  );
}
