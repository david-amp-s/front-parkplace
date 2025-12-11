"use client";
import TableUsuarios from "@/components/tablas/dashboardAdmin/tablaEmpleados";
import TableVehiculosRecientes from "@/components/tablas/dashboardAdmin/tablaVehiculosDs";
import TarjetasAccionesRapidas from "@/components/ui/tarjetasAccionesRapidas";
import TarjetasResumen from "@/components/ui/tarjetasResumen";
import { DashboardAdminDto, datosDashboardAdmin } from "@/types/dashboardAdmin";
import { useEffect, useState } from "react";


const AdminDashboard = () => {
    const [data, setData] = useState<DashboardAdminDto | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await datosDashboardAdmin();
                setData(res);
            } catch (error) {
                console.error("Error obteniendo dashboard:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className="p-10">Cargando dashboard...</p>;

   return (
  <div className="p-10  min-h-screen">

    {/* Título */}
    <div>
      <h2 className="text-4xl font-semibold">Panel Administrador</h2>
      <p className="text-gray-500 mt-1">Vista general del parqueadero</p>
    </div>

    {/* Cards principales */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
      <TarjetasResumen titulo="Ingresos Día" color="bg-gradient-to-br from-green-600 to-green-400" valor={data?.diario ?? 0} />
      <TarjetasResumen titulo="Ingresos Semana" color="bg-gradient-to-br from-blue-600 to-blue-400" valor={data?.semana ?? 0} />
      <TarjetasResumen titulo="Ingresos Mes" color="bg-gradient-to-br from-purple-600 to-purple-400" valor={data?.mensual ?? 0} />
      <TarjetasResumen titulo="Vehiculos Dentro" color="bg-gradient-to-br from-orange-600 to-orange-400" valor={data?.vehiculosDentro ?? 0} />

      <TarjetasResumen titulo="Taza de Ocupación" color="bg-gradient-to-br from-cyan-600 to-cyan-400" valor={`${data?.tazaDeOcupacion ?? 0}%`} />
      <TarjetasResumen titulo="Espacios Disponibles" color="bg-gradient-to-br from-indigo-600 to-indigo-400" valor={data?.espaciosDisponibles ?? 0} />
      <TarjetasResumen titulo="Vehiculos Registrados" color="bg-gradient-to-br from-fuchsia-600 to-fuchsia-400" valor={data?.vehiculosDentro ?? 0} />
      <TarjetasResumen titulo="Clientes" color="bg-gradient-to-br from-teal-600 to-teal-400" valor={data?.totalClientes ?? 0} />
    </div>

    {/* Sección de tablas */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

      {/* Usuarios */}
      <div className="bg-white w-[90%] p-6 shadow rounded-2xl border border-gray-200 ">
        <h3 className="text-xl font-medium mb-4">Usuarios registrados</h3>
        {data && <TableUsuarios usuarios={data.listadoUsuarios} />}
      </div>

      {/* Vehículos recientes */}
      <div className="bg-white p-6 shadow rounded-2xl border border-gray-200">
        <h3 className="text-xl font-medium mb-4">Vehículos recientes</h3>
        {data && <TableVehiculosRecientes vehiculos={data.listadoVehiculosRecientes} />}
      </div>

    </div>

    {/* Acciones rápidas */}
    <div className="bg-white rounded-2xl p-6 shadow border border-gray-200 mt-12">
      <h2 className="text-xl font-semibold mb-4">Acciones Rápidas</h2>

      <div className="flex justify-around items-center">

        <TarjetasAccionesRapidas
             color="bg-blue-200"
             rutaImg="IngresoRapido"
             titulo="Ingreso Rápido" 
             rutaLink={"/admin/ingreso"}        
             />

        <TarjetasAccionesRapidas
          color="bg-red-200"
          rutaImg="SalidaRapida"
          titulo="Salida Rápida"
          rutaLink={"/admin/salida"}
        />

        <TarjetasAccionesRapidas
          color="bg-green-200 "
          rutaImg="NuevoCliente"
          titulo="Nuevo Cliente"
          rutaLink={"/admin/usuarios"}
        />

        <TarjetasAccionesRapidas
          color="bg-purple-200"
          rutaImg="VerFacturas"
          titulo="Ver Reportes"
          rutaLink={"/admin/facturacion"}
        />
        
      </div>

    </div>

  </div>
);

}
 
export default AdminDashboard;