"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { buttonVariants } from '../ui/button';
import { links } from '@/config/site';
import { Icons } from '../icons';
import { FaTelegramPlane } from "react-icons/fa";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="hamburger sm:hidden focus:outline-none" // Показать только на мобильных устройствах
        onClick={() => setOpen(!isOpen)}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <div className={`menu ${isOpen ? 'flex' : 'hidden'} flex-col absolute right-0 top-full mt-2 bg-white shadow-md py-2 w-40 z-50`}>
        <ul className="space-y-4">
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
