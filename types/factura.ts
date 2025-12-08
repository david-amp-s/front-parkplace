import api from "@/lib/api";
import { DetallePagoInput } from "./detallesPagos";

export interface FacturaCreateDto {
  placa: string;
  usuario_id: number;
  pagos: DetallePagoInput[];
}

export interface FacturaDto {
  id: number;
  salida_id: number;
  usuario_id: number;
  total: number;
  pagos: DetallePagoInput[];
  fecha: string;
}

export async function generarFactura(data: FacturaCreateDto): Promise<FacturaDto> {
  const response = await api.post<FacturaDto>("/ingresos", data);
  return response.data;
}
