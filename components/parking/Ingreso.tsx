"use client";

import { useIngresoStore } from "@/store/ingresoStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ingresoSchema, IngresoForm } from "@/schemas/ingresoSchema";
import { ingresarVehiculo } from "@/types/ingresoVehiculo";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

import { toast } from "sonner";
import { Loader2, CarFront, Clock } from "lucide-react";

import { useState } from "react";

export default function Ingreso() {
  const { loading, setLoading } = useIngresoStore();
  const [data, setData] = useState<any>(null);

  const form = useForm<IngresoForm>({
    resolver: zodResolver(ingresoSchema),
    defaultValues: { placa: "" },
  });

  const onSubmit = async (values: IngresoForm) => {
    setLoading(true);

    try {
      const res = await ingresarVehiculo(values);
      setData(res);
      toast.success("Vehículo ingresado correctamente");
    } catch (error: any) {
      toast.error(error.message || "Error al ingresar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-2xl shadow-xl">
        {/* HEADER */}
        <div className="bg-green-600 p-6 flex items-center gap-4 text-white rounded-t-xl">
          <div className="bg-white/20 p-4 rounded-xl">
            <CarFront size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Ingreso de Vehículo</h2>
            <p className="text-white/80">Registrar entrada al parqueadero</p>
          </div>
        </div>

        {/* FORM */}
        <CardContent className="p-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            <div>
              <label className="text-gray-700 font-medium">Placa</label>
              <Input
                {...form.register("placa")}
                onChange={(e) =>
                  form.setValue("placa", e.target.value.toUpperCase())
                }
                placeholder="ABC123"
                className="mt-1"
              />
              {form.formState.errors.placa && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.placa.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Buscar"
              )}
            </Button>
          </form>

          {/* RESULTADO */}
          {data && (
            <div className="mt-6 p-6 bg-green-50 border border-green-100 rounded-xl">
              <h3 className="text-green-700 font-bold text-lg">Datos del Vehículo</h3>

              <p className="text-xl font-bold text-green-900 mt-2">{data.placa}</p>

              <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
                <div>
                  <p className="font-medium">Tipo</p>
                  <p>{data.tipoVehiculo}</p>
                </div>
                <div>
                  <p className="font-medium">Espacio</p>
                  <p>{data.espacio}</p>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 border rounded-xl flex items-start gap-3">
                <Clock className="text-gray-600" />

                <div>
                  <p className="font-medium text-gray-700">Hora de ingreso</p>
                  <p className="text-2xl font-bold">
                    {new Date(data.fecha_ingreso).toLocaleTimeString("es-CO", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>

                  <p className="text-gray-600 text-sm">
                    {new Date(data.fecha_ingreso).toLocaleDateString("es-CO", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
