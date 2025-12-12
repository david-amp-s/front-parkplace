"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/lib/api";
import { toast } from "sonner";

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
    <main >

      {/* CONTENEDOR GLASS REFINADO */}
     <div
  className="
    w-[420px]
    sm:w-[500px]
    md:w-[600px]
    lg:w-[650px]
    bg-white/10
    backdrop-blur-2xl
    rounded-3xl
    shadow-[0_0_40px_rgba(255,255,255,0.1)]
    border border-white/20
    p-14
    transition-all
  "
>

        {/* TÍTULO */}
        <h1 className="text-3xl font-semibold mb-8 text-center text-white tracking-wide drop-shadow-sm">
          Iniciar sesión
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* EMAIL */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <label className="text-white/90 text-sm font-medium mb-1 block">
                    Correo
                  </label>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="tucorreo@ejemplo.com"
                      autoComplete="email"
                      className="
                        bg-white/20
                        backdrop-blur-md
                        text-white
                        placeholder-white/70
                        border border-white/30
                        rounded-xl
                        h-11
                        transition-all
                        focus:bg-white/25
                        focus:border-white/50
                      "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* PASSWORD */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <label className="text-white/90 text-sm font-medium mb-1 block">
                    Contraseña
                  </label>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className="
                        bg-white/20
                        backdrop-blur-md
                        text-white
                        placeholder-white/70
                        border border-white/30
                        rounded-xl
                        h-11
                        transition-all
                        focus:bg-white/25
                        focus:border-white/50
                      "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* BOTÓN */}
            <Button
              type="submit"
              disabled={loading}
              className="
                w-full
                mt-4
                h-11
                rounded-xl
                bg-white/30
                text-white
                font-medium
                tracking-wide
                backdrop-blur-md
                hover:bg-white/40
                transition-all
                shadow-lg
              "
            >
              {loading ? "Iniciando..." : "Iniciar sesión"}
            </Button>

          </form>
        </Form>
      </div>
    </main>
  );
}
