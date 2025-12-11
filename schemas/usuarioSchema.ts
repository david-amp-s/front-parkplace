import { z } from "zod";

export const usuarioSchema = z.object({
  nombre: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Correo inválido"),
  contraseña: z.string().min(6, "Mínimo 6 caracteres"),
  rolNombre: z.string().min(1, "Debe seleccionar un rol"),
});

export type UsuarioFormValues = z.infer<typeof usuarioSchema>;
