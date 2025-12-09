import { z } from "zod";

export const ingresoSchema = z.object({
  placa: z.string().min(3, "La placa es obligatoria"),
});

export type IngresoForm = z.infer<typeof ingresoSchema>;
