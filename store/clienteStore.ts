import { create } from "zustand";
import { ClienteDto } from "@/types/clientes";
import api from "@/lib/api";


interface ClientesState {
  clientes: ClienteDto[];
  cargarClientes: () => Promise<void>;
  eliminarCliente: (correo: string) => Promise<void>;
}

export const useClientesStore = create<ClientesState>((set, get) => ({
  clientes: [],

  cargarClientes: async () => {
    const res = await api.get("/clientes");
    set({ clientes: res.data });
  },

  eliminarCliente: async (id: nu) => {
    await api.delete(`/clientes/${correo}`);
    set({
      clientes: get().clientes.filter((c) => c.correo !== correo),
    });
  },
}));
