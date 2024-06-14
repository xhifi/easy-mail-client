"use client";

import Button from "../primitives/Button";
import DashboardButton from "./DashboardButton";
import BrandLogo from "../BrandLogo";
import NavLink from "./NavLink";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Our Services",
    href: "/services",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

const Navigation = () => {
  return (
    <div className="max-w-full mx-auto px-4 md:px-6 bg-white border-b-2 shadow-lg shadow-black/15 hover:shadow-none transition-all">
      <div className="md:flex items-center py-2">
        <div className="flex flex-row">
          <BrandLogo />
          <Button variant="primary" size="sm" className="md:hidden ms-auto">
            Menu
          </Button>
        </div>
        <div className="ms-auto md:flex items-center md:space-x-3">
          <ul className="md:flex flex-nowrap items-center md:space-x-1 md:space-y-0 my-2 md:my-0 rounded-md bg-primary/10 md:bg-transparent md:bg-none p-4 md:p-0">
            {navigation.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.href}>{link.name}</NavLink>
                </li>
              );
            })}
          </ul>
          <DashboardButton />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
