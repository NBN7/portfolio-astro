import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import { FaGithub } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface ProjectProps {
  description: string;
  title: string;
  technologies: string;
  image: string;
  github: string;
  deploy: string;
}

export const Project = ({
  description,
  title,
  technologies,
  image,
  github,
  deploy,
}: ProjectProps) => {
  const iconSize = "20px";

  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <div className="absolute z-50 top-0 right-0 flex items-center justify-center w-12 h-12 ">
        <Popover placement="top" backdrop="opaque">
          <PopoverTrigger>
            <Button
              className="bg-transparent"
              isIconOnly
              radius="full"
              aria-label="Information"
            >
              <IoIosInformationCircleOutline size={iconSize} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <h4 className="text-small font-bold">Technologies</h4>
              <p className="text-tiny">{technologies}</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <CardHeader className="absoulte z-10 top-1 flex-col !items-start">
        <h3 className="text-tiny text-white/60 uppercase font-bold">
          {description}
        </h3>
        <h4 className="text-white font-medium text-large">{title}</h4>
      </CardHeader>
      <img
        className="absolute z-0 w-full h-full object-cover"
        src={image}
        alt={`${title} project`}
      />
      <CardFooter className="flex absolute bg-black/40 bottom-0 z-10 border-t-1 border-white/15">
        <Link href={github} target="_blank">
          <Button
            className="bg-transparent"
            isIconOnly
            radius="full"
            aria-label="GitHub"
          >
            <FaGithub size={iconSize} />
          </Button>
        </Link>

        <Link href={deploy} target="_blank">
          <Button
            className="bg-transparent"
            isIconOnly
            radius="full"
            aria-label="Deploy"
          >
            <FaBolt size={iconSize} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
