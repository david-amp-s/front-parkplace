import Image from "next/image";
import { VehiculoDto } from "@/types/vehiculos";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<VehiculoDto>[] = [
  {
    accessorKey: "placa",
    header: "Placa",
    cell: ({ row }) => {
      const placa = row.original.placa;
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-300">
            <Image
              src="/icons/registrarVehiculo.png"
              alt="Icono"
              width={40}
              height={40}
              className="p-1"
            />
          </div>
          <span>{placa}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "tipoVehiculo",
    header: "Tipo",
    cell: ({ row }) => {
      const tipo = row.original.tipoVehiculo;

      let bgColor = "bg-gray-200 text-gray-800";
      if (tipo === "CARRO") bgColor = "bg-blue-100 text-blue-800";
      if (tipo === "MOTO") bgColor = "bg-orange-100 text-orange-800";

      return (
        <span className={`px-2 py-1 rounded-full text-sm font-medium ${bgColor}`}>
          {tipo}
        </span>
      );
    },
  },
  {
    header: "Cliente",
    accessorFn: (row) => row.cliente?.nombre ?? "N/A",
  },
  {
    header: "Correo",
    accessorFn: (row) => row.cliente.correo ?? "N/A",
  },
  {
    id: "acciones",
    header: "Acciones",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <button className="flex items-center gap-1 text-blue-500 hover:underline">
          <img src="/icons/editar.svg" className="w-4 h-4" alt="Editar" />
        </button>
        <button className="hover:underline">
          <img src="/icons/eliminar.svg" className="w-4 h-4" alt="Eliminar" />
        </button>
      </div>
    ),
  },
];
