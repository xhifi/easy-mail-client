import Image from "next/image";
import Link from "./primitives/Link";
import Logo from "@/app/src/static/images/brand/logo.svg";

const BrandLogo = () => {
  return (
    <Link href="/" className="relative d-inline-block">
      <Image alt="AAziz & Co. Brand Logo" src={Logo} className="max-h-11 object-contain object-left" />
    </Link>
  );
};

export default BrandLogo;
