import { api } from "@/lib/api"; // ajusta la ruta si tu api está en otro lado

export interface UsuarioDto {
  id: number;
  nombre: string;
  correo: string;
  rolNombre: string;
}

// DTO para crear / modificar usuario
export interface UsuarioCreateDto {
  nombre: string;      
  email: string;       
  contraseña: string;  
  rolNombre: string;   
}

// ✅ Listar usuarios (GET /api/usuarios)
export async function listarUsuarios(): Promise<UsuarioDto[]> {
  const response = await api.get<UsuarioDto[]>("/usuarios");
  return response.data;
}

// ✅ Crear usuario (POST /api/usuarios)
export async function crearUsuario(
  usuario: UsuarioCreateDto
): Promise<UsuarioDto> {
  const response = await api.post<UsuarioDto>("/usuarios", usuario);
  return response.data;
}

// ✅ Modificar usuario por correo (PUT /api/usuarios/{correo})
export async function modificarUsuario(
  id: number,
  usuario: UsuarioCreateDto
): Promise<UsuarioDto> {
  const response = await api.put<UsuarioDto>(`/usuarios/${id}`, usuario);
  return response.data;
}

export async function eliminarUsuario(id:number):Promise<void> {
  const response = await api.delete(`/usuarios/${id}` )
  return response.data
}