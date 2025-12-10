import api from "@/lib/api";

export interface TarifaDto {
  id: number;
  tipoVehiculo: string;
  tipoCliente: string;
  nuevaTarifa: number;
}

export interface TarifaCreateDto {
  vehiculo: string;
  tipoCliente: string;
  valorMinuto: number;
  valorTarifaFija: number;
}

// GET → Listar tarifas
export async function listarTarifas(): Promise<TarifaDto[]> {
  const res = await api.get("/tarifas");
  return res.data;
}

// POST → Crear tarifa
export async function crearTarifa(dto: TarifaCreateDto): Promise<TarifaDto> {
  const res = await api.post("/tarifas", dto);
  return res.data;
}

// PUT → Cambiar tarifa por minuto
export async function cambiarTarifaMinuto(dto: TarifaCreateDto): Promise<TarifaDto> {
  const res = await api.put("/tarifas/minuto", dto);
  return res.data;
}

// PUT → Cambiar tarifa fija
export async function cambiarTarifaFija(dto: TarifaCreateDto): Promise<TarifaDto> {
  const res = await api.put("/tarifas/fija", dto);
  return res.data;
}
