import Image from "next/image";
import siteLogo from "./logo.webp";
import "./nav.scss";
export default function NavBar() {
  return (
    <header>
      <nav>
        <div className="logoContainer">
          <Image src={siteLogo} alt="logo of pixi quiz" height={60} priority />
        </div>
      </nav>
    </header>
  );
}
