import HorizontalDiv from "./HorizontalDiv";

export default function Hamburger() {
  return (
    <div className="cursor-pointer">
        <HorizontalDiv 
            hamburgerMenu={'bg-white w-16 rounded-lg h-1 mb-1'}
        />
        <HorizontalDiv 
            hamburgerMenu={'bg-white w-16 rounded-lg h-1 mb-1'}
        />
        <HorizontalDiv 
            hamburgerMenu={'bg-white w-16 rounded-lg h-1 mb-1'}
        />
    </div>
  )
}
