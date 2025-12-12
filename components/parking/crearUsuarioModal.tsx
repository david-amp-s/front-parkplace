"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UsuarioFormValues, usuarioSchema } from "@/schemas/usuarioSchema";

import { toast } from "sonner";
import React from "react";
import { UsuarioCreateDto } from "@/types/usuarios";
import { crearUsuario } from "@/types/usuarios";

interface Props {
  onSuccess?: () => void;
}

export default function CrearUsuarioModal({ onSuccess }: Props) {
  const [open, setOpen] = React.useState(false);

  const form = useForm<UsuarioFormValues>({
    resolver: zodResolver(usuarioSchema),
    defaultValues: {
      nombre: "",
      email: "",
      contraseña: "",
      rolNombre: "USUARIO",
    },
  });

const onSubmit = async (data: UsuarioFormValues) => {
  try {
    await crearUsuario(data as UsuarioCreateDto);
    toast.success("Usuario creado correctamente");

    setOpen(false);
    form.reset();

    window.location.reload();  
  } catch (error) {
    console.error(error);
    toast.error("Error al crear usuario");
  }
};


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-600">
          + Nuevo usuario
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Crear nuevo usuario</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4 py-4"
        >
          <Input
            placeholder="Nombre"
            {...form.register("nombre")}
          />

          <Input
            placeholder="Correo"
            type="email"
            {...form.register("email")}
          />

          <Input
            placeholder="Contraseña"
            type="password"
            {...form.register("contraseña")}
          />

          <select
            {...form.register("rolNombre")}
            className="border rounded p-2"
          >
            <option value="ADMIN">Administrador</option>
            <option value="EMPLEADO">operador</option>
          </select>

          <DialogFooter>
            <Button type="submit">Crear</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
