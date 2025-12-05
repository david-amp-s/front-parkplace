"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/lib/api"; // tu instancia axios
import { toast } from "sonner";

/* IMPORTS shadcn (ajusta rutas si en tu proyecto difieren) */
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/* Schema con Zod */
const loginSchema = z.object({
  email: z.string().min(1, "El correo es requerido").email("Correo inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: LoginFormValues) => {
  setLoading(true);
  const toastId = toast.loading("Iniciando sesión...");

  try {
    const res = await api.post("/login", {
      email: values.email,
      contraseña: values.password,
    });

    const data = res.data;

    if (typeof window !== "undefined") {
      localStorage.setItem("token", data.tokenJwt);
      localStorage.setItem("rol", data.rol ?? "");
      localStorage.setItem("idUser", String(data.idUser ?? ""));
    }

    toast.dismiss(toastId);
    toast.success("Login exitoso");

    if (data.rol === "ADMIN") router.push("/admin");
    else if (data.rol === "EMPLEADO") router.push("/empleado");
    else router.push("/dashboard");

  } catch (error: any) {
    toast.dismiss(toastId);
    const msg = error?.response?.data?.message || "Error al iniciar sesión";
    toast.error(msg);

  } finally {
    setLoading(false);
  }
};


  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-6 text-center">Iniciar sesión</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <label className="block text-sm font-medium mb-1">Correo</label>
                  <FormControl>
                    <Input
                      placeholder="tucorreo@ejemplo.com"
                      {...field}
                      type="email"
                      autoComplete="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <label className="block text-sm font-medium mb-1">Contraseña</label>
                  <FormControl>
                    <Input
                      placeholder="••••••••"
                      {...field}
                      type="password"
                      autoComplete="current-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Iniciando..." : "Iniciar sesión"}
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
