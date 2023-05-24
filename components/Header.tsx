import { Pacifico } from "next/font/google";
const dancingScript = Pacifico({ subsets: ["cyrillic-ext"], weight: "400" });

const Header = () => {
  const Links = ["About", "Skills", "Projects", "Experience"];

  return (
    <div className="fixed w-full z-50 bg-gradient-to-b from-black via-black to-black/40 backdrop-blur-sm pt-10 space-y-5">
      <a
        href="#home"
        className={`flex text-3xl text-white justify-center items-center ${dancingScript.className}`}
      >
        JK
      </a>
      <ul className="flex justify-center items-center space-x-3 sm:space-x-10">
        {Links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-white uppercase text-base sm:text-lg hover:text-cyan-500 transition-all duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
