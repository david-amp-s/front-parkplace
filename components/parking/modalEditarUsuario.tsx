"use client";

import { useState } from "react";
import { UsuarioDto, UsuarioCreateDto } from "@/types/usuarios";
import { modificarUsuario } from "@/types/usuarios";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface Props {
  usuario: UsuarioDto;
  onUpdated: (updated: UsuarioDto) => void;
}

export default function ModalEditarUsuario({ usuario, onUpdated }: Props) {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState<UsuarioCreateDto>({
    nombre: usuario.nombre,
    email: usuario.correo,
    contraseña: "",        // Obligatoria, inicial vacía
    rolNombre: usuario.rolNombre,
  });

  const handleChange = (field: keyof UsuarioCreateDto, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    if (!form.contraseña.trim()) {
      toast.error("La contraseña es obligatoria");
      return;
    }

    try {
      const updated = await modificarUsuario(usuario.id, form);

      onUpdated(updated);
      toast.success("Usuario actualizado");
      setOpen(false);
    } catch (e) {
      console.error(e);
      toast.error("Error actualizando usuario");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-blue-500 hover:underline">
          <img src="/icons/editar.svg" className="w-4 h-4" alt="Editar" />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Editar usuario</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Nombre</label>
            <Input
              value={form.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Correo</label>
            <Input
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Contraseña</label>
            <Input
              type="password"
              value={form.contraseña}
              onChange={(e) => handleChange("contraseña", e.target.value)}
              placeholder="Ingrese nueva contraseña"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Rol</label>
            <Select
              value={form.rolNombre}
              onValueChange={(v) => handleChange("rolNombre", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ADMIN">Administrador</SelectItem>
                <SelectItem value="EMPLEADO">Operador</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>

          <Button onClick={handleSubmit} className="bg-blue-600 text-white">
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
