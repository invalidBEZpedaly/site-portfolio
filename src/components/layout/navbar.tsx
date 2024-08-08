import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { links } from '@/config/site';
import { FaTelegramPlane } from 'react-icons/fa';
import { Icons } from '../icons';
import { ThemeToggle } from '../theme/theme-toggle';

export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-10 backdrop-filter bg-white/30">
        <div className="container mx-auto flex justify-between items-center px-4 py-3 max-w-4xl">
          <h1 className="text-xl font-bold">Магомедов Закир</h1>
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
          <div className="hidden sm:flex space-x-4"> 
            <Link href={links.hh} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "link",
                })}
              >
                <span className="text-base font-medium">Резюме hh.ru</span>
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
                <FaTelegramPlane className="h-[1.2rem] w-[1.2rem] fill-current" />
                <span className="sr-only">Telegram</span>
              </div>
            </Link>
          </div>
          <ThemeToggle />

          <HamburgerMenu />
        </div>

        <Separator />
      </header>
    </>
  );
}

export default SiteHeader;