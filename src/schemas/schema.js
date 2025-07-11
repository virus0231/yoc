import * as zod from "zod";

export const loginSchema = zod.object({
  username_val: zod.string().min(1, "Username is required"),
  password_val: zod.string().min(1, "Password is required"),
});
