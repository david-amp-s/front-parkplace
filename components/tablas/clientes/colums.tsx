import Image from "next/image";
import { ClienteDto, ClienteCreateDto } from "@/types/clientes";
import { ColumnDef } from "@tanstack/react-table";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const columns = (
  onDelete: (id: number) => void,
  onEdit: (id: number, data: ClienteCreateDto) => void
): ColumnDef<ClienteDto>[] => [
  {
    accessorKey: "nombre",
    header: "Nombre",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300">
          <Image
            src={`/icons/registrarUsuario.png`}
            alt="Icono"
            width={40}
            height={40}
            className="p-1"
          />
        </div>
        <span>{row.original.nombre}</span>
      </div>
    ),
  },

  { accessorKey: "correo", header: "Correo" },
  { accessorKey: "cedula", header: "Cédula" },

  {
    accessorKey: "tipoCliente",
    header: "Rol",
    cell: ({ row }) => {
      const tipo = row.original.tipoCliente;

      const styles: Record<string, string> = {
        ESTUDIANTE: "bg-green-100 text-green-800",
        CLIENTE: "bg-orange-100 text-orange-800",
      };

      return (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium ${
            styles[tipo] ?? "bg-gray-200 text-gray-800"
          }`}
        >
          {tipo}
        </span>
      );
    },
  },

  /**
   * ACCIONES: EDITAR + ELIMINAR
   */
  {
    id: "acciones",
    header: "Acciones",
    cell: ({ row }) => {
      const cliente = row.original;

      // 👇 Estados del modal de edición
      const [form, setForm] = useState<ClienteCreateDto>({
        nombre: cliente.nombre,
        correo: cliente.correo,
        cedula: cliente.cedula,
        tipoCliente: cliente.tipoCliente,
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

      return (
        <div className="flex gap-4 items-center">
          {/* EDITAR */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center text-blue-500">
                <img src="/icons/editar.svg" className="w-4 h-4" /> 
              </button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editar Cliente</DialogTitle>
              </DialogHeader>

              <div className="flex flex-col gap-4 mt-4">
                <Input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                />

                <Input
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="Correo"
                />

                <Input
                  name="cedula"
                  value={form.cedula}
                  onChange={handleChange}
                  placeholder="Cédula"
                />

                <Input
                  name="tipoCliente"
                  value={form.tipoCliente}
                  onChange={handleChange}
                  placeholder="Tipo cliente"
                />
              </div>

              <DialogFooter>
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => onEdit(cliente.id, form)}
                >
                  Guardar cambios
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* ELIMINAR */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button>
                <img
                  src="/icons/eliminar.svg"
                  className="w-4 h-4 cursor-pointer"
                  alt="Eliminar"
                />
              </button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <h2 className="text-lg font-semibold">¿Eliminar cliente?</h2>
                <p className="text-sm text-gray-500">
                  Esta acción no se puede deshacer.
                </p>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>

                <AlertDialogAction
                  className="bg-red-500 text-white hover:bg-red-600"
                  onClick={() => onDelete(cliente.id)}
                >
                  Eliminar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
