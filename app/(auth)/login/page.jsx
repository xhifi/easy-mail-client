"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "./schema";

import Button from "@/app/src/components/primitives/Button";
import Link from "@/app/src/components/primitives/Link";

const BackButton = ({ ...props }) => {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };
  return (
    <Button onClick={navigateBack} {...props}>
      Go Back
    </Button>
  );
};

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isValid,
      isDirty,
      isSubmitted,
      isSubmitting,
      touchedFields,
      dirtyFields,
      isValidating,
      isSubmittedError,
      isSubmitSuccessful,
    },
  } = useForm({ mode: "onBlur", resolver: zodResolver(schema) });

  console.log(isValid);

  const onSubmit = async ({ email, password }) => {
    console.log(errors);
    console.log("is Valid", isValid);
    console.log("Is Submitted", isSubmitted);
    console.log("Is Submitting", isSubmitting);
    console.log("Dirty Fields", dirtyFields);
    console.log("Is Validating", isValidating);
    console.log("is Submitted Error", isSubmittedError);
  };

  return (
    <div className="col-span-1 p-12 space-y-4 w-full">
      <BackButton />

      <div className="p-12 bg-slate-300 rounded-md border-white border-2 shadow-lg shadow-black/15">
        <div className="mb-4">
          <h2 className="text-5xl font-black mb-2">Login Here</h2>
          <p className="text-balance">
            Haven't signed up yet?{" "}
            <Link href="/signup" className="text-primary">
              click here
            </Link>
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1">
            <label htmlFor="email" className="block text-xl font-medium">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="block w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:border-secondary rounded-md border-2 border-b-4 border-secondary"
            />
            <p className="text-sm text-red-600">{errors["email"]?.message}</p>
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block text-xl font-medium">
              Password
            </label>
            <input
              {...register("password")}
              id="password"
              type="password"
              className="block w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:border-secondary rounded-md border-2 border-b-4 border-secondary"
            />
            <p className="text-sm text-red-600">{errors["password"]?.message}</p>
          </div>
          <div className="">
            <label htmlFor="rememberMe" className="inline me-3">
              Remember
            </label>
            <input
              {...register("rememberMe")}
              id="rememberMe"
              type="checkbox"
              className="outline-none w-5 h-5 focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:border-secondary rounded-md border-2 border-b-4 border-secondary accent-secondary"
            />
            <p className="text-sm text-red-600"></p>
          </div>
          <div className="space-y-2 text-center">
            <Button type="submit" className="w-full" variant="secondary">
              Login
            </Button>
            <div>
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
