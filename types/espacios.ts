import api from "@/lib/api"
export interface EspacioDto{
     id: number,
     codigo : string,
    tipoEspacio : string,
    tipoVehiculoPermitido : string
}
export async function listarEspaciosOcupados():Promise<EspacioDto[]> {
    const response = await api.get("/espacios")
    return response.data
}
