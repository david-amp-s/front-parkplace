"use server";

import api from "@/lib/api";

export interface IngresoCreateDto {
  placa: string;
}

export interface IngresoDto {
  id: number;
  placa: string;
  tipoVehiculo: string;
  espacio: string;
  fecha_ingreso: string;
}

export async function ingresarVehiculo(placa: string): Promise<IngresoDto> {
  try {
    const response = await api.post<IngresoDto>("/ingreso", { placa });
    return response.data;
  } catch (error: any) {
    console.error("Error ingresando vehículo:", error);
    throw new Error(error.response?.data?.message || "Error al ingresar");
  }
}
