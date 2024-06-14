"use client";
import useAuthContext from "@/app/src/hooks/useAuthContext";
import Button from "../primitives/Button";
import { actions } from "@/app/src/contexts/authContext";

const DashboardButton = ({ href, ...rest }) => {
  const { state, dispatch } = useAuthContext();

  if (state.isAuthenticated) {
    <Button variant={`primary`} href="/dashboard" className={`ms-0 w-full md:text-nowrap border-[3px] py-2`}>
      Dashboard
    </Button>;
  }
  return (
    <Button variant="borderPrimary" href="/login" className="ms-0 w-full md:text-nowrap border-[3px] py-2">
      Login / Signup
    </Button>
  );
};

export default DashboardButton;
