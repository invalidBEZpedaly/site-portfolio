"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/types";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent } from "./ui/tooltip";
import { Icons } from "./icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProjectCard = (project: Project) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <Card className="cursor-pointer" onClick={handleCardClick}>
      <CardHeader>
        <CardTitle className="flex items-center">
          <h3 className="mr-2">{project.name}</h3>
          {project.status && (
            <Badge
              variant={
                project.status === "Planning"
                  ? "default"
                  : project.status === "On Hold"
                  ? "destructive"
                  : "outline"
              }
            >
              {project.status}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden">
          <p className="line-clamp-3">{project.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end">
        <Tooltip>
          {!project.demo && (
            <TooltipContent>
              <p>There is no live demo</p>
            </TooltipContent>
          )}
        </Tooltip>
        <Button asChild className="ml-4" onClick={(e) => e.stopPropagation()}>
          <Link href={project.repo} target="_blank" rel="noreferrer">
            <Icons.gitHub className="mr-2 h-4 w-4" /> Исходный код
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
