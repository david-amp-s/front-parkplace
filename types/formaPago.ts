import api from "@/lib/api";



export interface FormaPagoCreateDto{
    detalle : string
}

export interface FormaPagoDto{
         id : number,
         descripcion: string

}

export async function obtenerFormaPago(): Promise<FormaPagoDto[]> {
  const response = await api.get<FormaPagoDto[]>("/formas_pago");
  return response.data;
}
