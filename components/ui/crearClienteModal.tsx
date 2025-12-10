"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClienteFormValues, clienteSchema } from "@/schemas/clienteSchema";
import { crearCliente, ClienteCreateDto } from "@/types/clientes";
import { toast } from "sonner";
import React from "react";

interface Props {
  onSuccess?: () => void; // Callback cuando se crea un cliente
}

export default function CrearClienteModal({ onSuccess }: Props) {
  const [open, setOpen] = React.useState(false);

  const form = useForm<ClienteFormValues>({
    resolver: zodResolver(clienteSchema),
    defaultValues: {
      nombre: "",
      correo: "",
      cedula: "",
      tipoCliente: "CLIENTE",
    },
  });

  const onSubmit = async (data: ClienteFormValues) => {
    try {
      await crearCliente(data as ClienteCreateDto);
      toast.success("Cliente creado correctamente");
      setOpen(false);
      form.reset();
      onSuccess?.(); // Llamar callback para actualizar cards o tabla
    } catch (error) {
      toast.error("Error al crear cliente");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-600">+ Nuevo usuario</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Crear nuevo cliente</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <Input placeholder="Nombre" {...form.register("nombre")} />
          <Input placeholder="Correo" type="email" {...form.register("correo")} />
          <Input placeholder="Cédula" {...form.register("cedula")} />
          <select {...form.register("tipoCliente")} className="border rounded p-2">
            <option value="ESTUDIANTE">Estudiante</option>
            <option value="CLIENTE">Cliente</option>
          </select>
          <DialogFooter>
            <Button type="submit">Crear</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
