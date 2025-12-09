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
  const response = await api.post<FacturaDto>("/facturas", data);
  return response.data;
}

export async function imprimirFactura(id: number) {
  try {
    const response = await api.get(`/facturas/${id}/pdf`, {
      responseType: "blob", // Esto es CLAVE
    });

    // Crear URL del PDF en memoria
    const url = window.URL.createObjectURL(new Blob([response.data]));

    // Crear link invisible para iniciar la descarga
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `factura_${id}.pdf`);
    document.body.appendChild(link);
    link.click();

    // Limpieza
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error al descargar factura:", error);
    throw error;
  }
}

