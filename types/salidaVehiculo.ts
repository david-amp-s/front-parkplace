import api from "@/lib/api";

export interface SalidaDto {
  id: number;
  ingreso_Id: string;
  fechaSalida: string;
  total: number;
}

export interface SalidaCreateDto {
  placa: string;
}

export async function registrarSalida(data: SalidaCreateDto): Promise<SalidaDto> {
  const response = await api.post<SalidaDto>("/salidas", data);
  return response.data;
}

export async function cancelarSalida(placa:string): Promise<void> {
  const response = await api.delete(`/salidas/${placa}`);
  return response.data;
}