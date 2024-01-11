import { useState } from "react";

import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
  Link,
} from "@nextui-org/react";

import { NAVBAR_ITEMS } from "../constants/navbarItems";

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="fixed"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="sm:hidden font-bold">IB</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <p className="font-bold">IB</p>
        </NavbarBrand>

        {NAVBAR_ITEMS.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={item.PATH}>
              {item.NAME}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {NAVBAR_ITEMS.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color="foreground"
              className="w-full"
              href={item.PATH}
              size="lg"
            >
              {item.NAME}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
