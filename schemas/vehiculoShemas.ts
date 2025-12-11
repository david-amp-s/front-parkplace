import { z } from "zod";

export const vehiculoSchema = z.object({
  placa: z
    .string()
    .min(6, "La placa debe tener mínimo 6 caracteres")
    .max(7, "La placa debe tener máximo 7 caracteres"),

  tipoVehiculo: z.enum(["CARRO", "MOTO"]),

  cedula: z
    .string()
    .min(6, "La cédula debe tener mínimo 6 caracteres")
    .optional()
    .or(z.literal("")),
});

export type VehiculoFormValues = z.infer<typeof vehiculoSchema>;
