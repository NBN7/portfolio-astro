import { Card, CardHeader, CardFooter, Button, Link } from "@nextui-org/react";

import { FaGithub } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";

interface ProjectProps {
  description: string;
  title: string;
  image: string;
  github: string;
  deploy: string;
}

export const Project = ({
  description,
  title,
  image,
  github,
  deploy,
}: ProjectProps) => {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absoulte z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          {description}
        </p>
        <h4 className="text-white font-medium text-large">{title}</h4>
      </CardHeader>
      <img className="absolute z-0 w-full h-full object-cover" src={image} />
      <CardFooter className="flex absolute bg-black/40 bottom-0 z-10 border-t-1 border-white/15">
        <Link href={github} target="_blank">
          <Button className="bg-transparent" isIconOnly radius="full">
            <FaGithub size="20px" />
          </Button>
        </Link>

        <Link href={deploy} target="_blank">
          <Button className="bg-transparent" isIconOnly radius="full">
            <FaBolt size="20px" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
