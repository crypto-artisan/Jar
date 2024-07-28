"use client"

import React, { useState } from 'react';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";
import {
  SearchIcon,
} from "@/components/icons";
import Image from "next/image";
import { useContext } from 'react';
import { SearchContext } from '@/app/contexts/searchContext';

export const Navbar = () => {

  const { setKeyWord } = useContext(SearchContext);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive); // Toggle the active state
  };
  const handleChange = (e: any) => {
    setKeyWord(e.target.value);
  };
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: `searchInput border-1 transition-all duration-3000 ${isSearchActive ? 'border-white w-[160px] md:w-[220px]' : 'border-none w-0'}`,
        input: "flex text-md text-white transition-all duration-3000",
      }}
      labelPlacement="outside"
      placeholder="Search transfer number"
      startContent={
        <SearchIcon onClick={toggleSearch} className="text-white flex-shrink-0 cursor-pointer w-[20px] h-[20px]" />
      }
      onChange={handleChange}
      type="search"
    />
  );

  return (
    <div className="fixed w-full items-center z-[10]">
      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent
          className="w-full"
          justify="end"
        >
          <div className="flex flex-row items-center justify-between w-1/2 mr-[20px] md:mr-[30px]">
            <Image src="/logo.svg" alt="logo-svg" width={50} height={50} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
            <NavbarItem>
              {searchInput}
            </NavbarItem>
          </div>
        </NavbarContent>
      </NextUINavbar>
    </div>
  );
};
