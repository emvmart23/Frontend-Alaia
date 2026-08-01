import z from "zod";

export const SignInSchema = z.object({
  email: z.string().min(1, { message: "Campo requerido" }),
  password: z.string().min(1, {message:"Campo requerido"})
});

export const SignUpSchema = z.object({
  firstName: z.string().min(1, { message: "Campo requerido" }),
  lastName: z.string().min(1, {message:"Campo requerido"}),
  email: z.string().min(1, { message: "Campo requerido" }),
  password: z.string().min(1, {message:"Campo requerido"}),
  confirmPassword:z.string().min(1, {message:"Campo requerido"})
});


