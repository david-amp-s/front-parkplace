
import Image from "next/image";
import { ClienteDto } from "@/types/clientes";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ClienteDto>[] = [
 {
    accessorKey: "nombre",
    header: "Nombre",
    cell: ({ row }) => {
      const nombre = row.original.nombre;
      return (
        <div className="flex items-center gap-2"> 
        <div className={`w-6 h-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500  to-blue-300`}>
              <Image
                src={`/icons/registrarUsuario.png`}
                alt="Icono"
                width={40}
                height={40}
                className="p-1"
              />
            </div> 
          <span>{nombre}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "correo",
    header: "Correo",
  },
  {
    accessorKey: "cedula",
    header: "Cédula",
  },
 {
  accessorKey: "tipoCliente",
  header: "Rol",
  cell: ({ row }) => {
    const tipo = row.original.tipoCliente;

    // Definir colores por rol
    let bgColor = "bg-gray-200 text-gray-800";
    if (tipo === "ESTUDIANTE") bgColor = "bg-green-100 text-green-800";
    if (tipo === "CLIENTE") bgColor = "bg-orange-100 text-orange-800";

    return (
      <span className={`px-2 py-1 rounded-full text-sm font-medium ${bgColor}`}>
        {tipo}
      </span>
    );
  },
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
