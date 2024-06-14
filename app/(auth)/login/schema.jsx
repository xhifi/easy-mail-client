import { z } from "zod";

export default z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string().min(6, { message: "Password is a required field" }),
});
