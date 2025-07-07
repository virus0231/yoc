import * as zod from "zod";

export const loginSchema = zod.object({
  user_name: zod.string().min(1, "Username is required"),
  user_password: zod.string().min(1, "Password is required"),
});
