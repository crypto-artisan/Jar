import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";

import {
  SearchIcon,
} from "@/components/icons";
import Image from "next/image";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "customInput md:border-1 border-none",
        input: "hidden md:flex text-md text-white",
      }}
      labelPlacement="outside"
      placeholder="Search transfer number"
      startContent={
        <SearchIcon className="text-white pointer-events-none flex-shrink-0" />
      }
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
