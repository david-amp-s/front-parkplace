import api from "@/lib/api";
export interface ClienteResponsiveDto {
  id: number;
  nombre: string;
  correo : string
}
export interface ClienteDto {
  id: number;
  nombre: string;
  correo: string;
  cedula: string;
  tipoCliente: string;
}
export interface InfoClienteDto {
  totalClientes: number;
  estudiantes: number;
  cliente: number;
}
export interface ClienteCreateDto {
  nombre: string;
  correo: string;
  cedula: string;
  tipoCliente: string; 
}

export async function datosCliente():Promise<InfoClienteDto> {
    const res = await api.get("/clientes/info")
    return res.data;
}

export async function listarClientes():Promise<ClienteDto[]> {
  const res = await api.get("/clientes")
    return res.data;
}

export async function crearCliente(data:ClienteCreateDto):Promise<ClienteDto> {
  const res = await api.post("/clientes", data)
  return res.data
}