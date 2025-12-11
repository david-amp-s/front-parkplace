import api from "@/lib/api";
import { IngresoDto } from "./ingresoVehiculo";
import { UsuarioDto } from "./usuarios";

export interface DashboardAdminDto{
    vehiculosDentro: number,
    totalSalidas : number,
    espaciosDisponibles : number,
    tazaDeOcupacion : number,
    totalClientes : number,
    diario : number,
    mensual : number,
    semana : number,
    listadoUsuarios : UsuarioDto[],
    listadoVehiculosRecientes : IngresoDto[]
}

export async function datosDashboardAdmin():Promise<DashboardAdminDto> {
    const res = await api.get("/dashboard-admin")
    return res.data
}