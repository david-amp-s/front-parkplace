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

import { crearVehiculo, VehiculoCreateDto } from "@/types/vehiculos";
import { VehiculoFormValues, vehiculoSchema } from "@/schemas/vehiculoShemas";

import { toast } from "sonner";
import React from "react";

interface Props {
  onSuccess?: () => void;
}

export default function CrearVehiculoModal({ onSuccess }: Props) {
  const [open, setOpen] = React.useState(false);

  const form = useForm<VehiculoFormValues>({
    resolver: zodResolver(vehiculoSchema),
    defaultValues: {
      placa: "",
      tipoVehiculo: "CARRO",
      cedula: "",
    },
  });

  const onSubmit = async (data: VehiculoFormValues) => {
    try {
      await crearVehiculo(data as VehiculoCreateDto);

      toast.success("Vehículo creado correctamente");
      setOpen(false);
      form.reset();
      onSuccess?.();
    } catch (error) {
      toast.error("Error al crear vehículo");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-600">
          + Nuevo vehículo
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Crear nuevo vehículo</DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <Input
            placeholder="Placa"
            {...form.register("placa")}
          />

          <Input
            placeholder="Cédula del cliente"
            {...form.register("cedula")}
          />

          <select
            {...form.register("tipoVehiculo")}
            className="border rounded p-2"
          >
            <option value="CARRO">Carro</option>
            <option value="MOTO">Moto</option>
          </select>

          <DialogFooter>
            <Button type="submit">Crear</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
