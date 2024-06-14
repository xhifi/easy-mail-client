import Link from "../primitives/Link";

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="w-full inline-block md:block md:text-nowrap hover:bg-primary/10 md:border-2 md:border-b-4 md:hover:border-b-2 border-primary/25 px-2 py-2 md:py-0.5 rounded-md transition all"
    >
      {children}
    </Link>
  );
};

export default NavLink;
