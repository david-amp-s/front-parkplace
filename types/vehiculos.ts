
import { ClienteResponsiveDto } from "./clientes";
import api from "@/lib/api";

export interface VehiculoCreateDto {
  placa: string;           
  tipoVehiculo: string;    
  cedula?: string;         
}


export interface VehiculoDto {
  id: number;
  placa: string;
  tipoVehiculo: string;  
  cliente: ClienteResponsiveDto;  
}


export async function listarVehiculos(): Promise<VehiculoDto[]> {
  const res = await api.get("/vehiculos");
  return res.data;
}

// Buscar por ID (GET /api/vehiculos/id/{id})
export async function buscarVehiculoPorId(id: number): Promise<VehiculoDto> {
  const res = await api.get(`/vehiculos/id/${id}`);
  return res.data;
}

// Buscar por placa (GET /api/vehiculos/{placa})
export async function buscarVehiculoPorPlaca(placa: string): Promise<VehiculoDto> {
  const res = await api.get(`/vehiculos/${placa}`);
  return res.data;
}

// Crear vehículo (POST /api/vehiculos)
export async function crearVehiculo(
  vehiculo: VehiculoCreateDto
): Promise<VehiculoDto> {
  const res = await api.post("/vehiculos", vehiculo);
  return res.data;
}

// Corregir vehículo (PUT /api/vehiculos/{placa})
export async function corregirVehiculo(
  placa: string,
  vehiculo: VehiculoCreateDto
): Promise<VehiculoDto> {
  const res = await api.put(`/vehiculos/${placa}`, vehiculo);
  return res.data;
}