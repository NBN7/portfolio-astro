import { Container } from "./Container";

import { LINKS } from "../constants/links";
import { ROUTES } from "../constants/routes";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const iconSize = "25px";
const iconStyle =
  "transition-all hover:scale-110 hover:text-primary active:scale-110 active:text-primary";

export const Home = () => {
  return (
    <Container id={ROUTES.HOME}>
      <div className="sm:w-[400px] w-full flex flex-col gap-3">
        <h1 className="text-5xl font-bold">Ignacio Biran</h1>
        <h2 className="text-xl font-semibold font-mono text-primary">
          Frontend Developer
        </h2>
        <p className="text-gray-400 text-wrap">
          +1 year of experience. Based in Buenos Aires, Argentina. Specialized
          in best practices and exceptional user experiences.
        </p>

        <div className="w-full flex items-center gap-3">
          <a href={LINKS.LINKEDIN} target="_blank">
            <FaLinkedin className={iconStyle} size={iconSize} />
          </a>

          <a href={LINKS.GITHUB} target="_blank">
            <FaGithub className={iconStyle} size={iconSize} />
          </a>
        </div>
      </div>
    </Container>
  );
};
