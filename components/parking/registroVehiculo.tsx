"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import IconosImg from "../ui/iconosImg";
import api from "@/lib/api"; // tu instancia de Axios

const RegistrarVehiculo = () => {
  const [tipos, setTipos] = useState([]);
  const [form, setForm] = useState({
    placa: "",
    tipoVehiculo: "",
    cedula: ""
  });

  // Cargar tipos de vehículos desde el backend
  useEffect(() => {
    const fetchTipos = async () => {
      try {
        const res = await api.get("/tipos-vehiculo");
        setTipos(res.data);
      } catch (e) {
        console.error("Error cargando tipos de vehículos", e);
      }
    };

    fetchTipos();
  }, []);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        placa: form.placa,
        tipoVehiculoId: form.tipoVehiculo,
        propietarioCedula: form.cedula.trim() === "" ? null : form.cedula
        // Si es null → backend registra como invitado
      };

      await api.post("/vehiculos", payload);

      alert("Vehículo registrado exitosamente");
      setForm({ placa: "", tipoVehiculo: "", cedula: "" });
    } catch (e) {
      console.error(e);
      alert("Error registrando vehículo");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* HEADER AZUL */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white flex items-start gap-4 rounded-t-3xl">
          <div className="bg-white/20 p-4 rounded-2xl flex items-center justify-center">
            <IconosImg ruta="Vehiculo" color="#fff" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Registrar Vehículo</h2>
            <p className="text-white/90 text-sm">Nuevo ingreso al sistema</p>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* PLACA */}
          <div>
            <label className="text-gray-700 text-sm font-medium">Placa</label>
            <div className="relative mt-2">
              <span className="absolute left-4 top-3 text-gray-400">
                <IconosImg ruta="Hashtag" color="#9ca3af" />
              </span>
              <input
                type="text"
                name="placa"
                value={form.placa}
                onChange={handleChange}
                placeholder="ABC123"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* TIPOS DE VEHÍCULO — BACKEND */}
          <div>
            <label className="text-gray-700 text-sm font-medium">Tipo de Vehículo</label>
            <select
              name="tipoVehiculo"
              value={form.tipoVehiculo}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 bg-gray-50 rounded-xl border outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Seleccione...</option>
              {/*
               * {tipos.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.nombre}
                </option>
              ))}
               */}
            </select>
          </div>

          {/* CEDULA — OPCIONAL */}
          <div>
            <label className="text-gray-700 text-sm font-medium">Cédula del Propietario</label>
            <input
              type="text"
              name="cedula"
              value={form.cedula}
              onChange={handleChange}
              placeholder="(Opcional, vacío = invitado)"
              className="w-full mt-2 px-4 py-3 bg-gray-50 rounded-xl border outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

        </div>

        {/* BOTONES */}
        <div className="flex justify-end gap-4 px-8 pb-10">
          <Button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-200">
            Cancelar
          </Button>

          <Button
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-white"
          >
            <IconosImg ruta="Guardar" color="#fff" />
            Guardar Vehículo
          </Button>
        </div>

      </div>
    </section>
  );
};

export default RegistrarVehiculo;
