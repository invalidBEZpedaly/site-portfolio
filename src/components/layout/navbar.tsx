"use client";
import Link from "next/link";
import { links } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { Icons } from "../icons";
import { FaTelegramPlane } from "react-icons/fa";

export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-sm backdrop-filter">
        <div className="container mx-auto flex w-full max-w-4xl items-center py-4 sm:justify-between sm:space-x-0">
          <div>
            <h1 className="text-xl font-bold sm:text-2xl">Магомедов Закир</h1>
            <p className="text-muted-foreground">Full-Stack разработчик</p>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="/" passHref>
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  <span className="text-base font-medium">На главную</span>
                </div>
              </Link>
              <Link href="/projects/practicalWorks" passHref>
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  <span className="text-base font-medium">Практические работы</span>
                </div>
              </Link>
              <Link href={links.github} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  <Icons.gitHub className="h-[1.2rem] w-[1.2rem] fill-current" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              
              <Link href={links.telegram} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  <FaTelegramPlane  className="h-[1.2rem] w-[1.2rem] fill-current" />
                  <span className="sr-only">telegam</span>
                </div>
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
        <Separator />
      </header>
    </>
  );
}
