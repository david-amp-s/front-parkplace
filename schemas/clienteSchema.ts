import * as z from "zod";

export const clienteSchema = z.object({
  nombre: z.string().min(2, "Nombre requerido"),
  correo: z.string().email("Correo inválido"),
  cedula: z.string().min(5, "Cédula inválida"),
  tipoCliente: z.enum(["ESTUDIANTE", "CLIENTE"], "Tipo de cliente requerido"),
});

export type ClienteFormValues = z.infer<typeof clienteSchema>;
