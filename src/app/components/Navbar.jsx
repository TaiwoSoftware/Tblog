import Link from "next/link";

export default function Navbar() {
  return (
    <navbar className=" p-4 flex items-center justify-between">
      <div>
        <Link href={"/"}>
          <h1 className="font-PacificFont font-extrabold text-3xl text-white">
            TBLOG!!!
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="list-none font-sans text-base  text-white ">
          <li className="inline-block ml-4">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="inline-block ml-4">
            <Link href={"/blog"}>Blog post</Link>
          </li>
          <li className="inline-block ml-4">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="inline-block ml-4">
            <Link href={"/contact"}>Contact us</Link>
          </li>
        </div>
        <button className="bg-white text-[#9b45fe] px-5 rounded-lg py-1">
          Login
        </button>
      </div>
    </navbar>
  );
}
