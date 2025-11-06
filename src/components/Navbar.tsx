"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { getCurrentUser, logout } from "@/lib/auth"

export default function Navbar() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const currentUser = getCurrentUser()
    setUser(currentUser)
  }, [])

  const handleLogout = () => {
    logout()
    setUser(null)
    router.push("/login")
  }

  // Rutas según el rol
  const roleRoutes: Record<string, { name: string; href: string }[]> = {
    admin: [
      { name: "Dashboard", href: "/admin/dashboard" },
      { name: "Usuarios", href: "/admin/usuarios" },
      { name: "Menús", href: "/admin/menus" },
      { name: "Reportes", href: "/admin/reportes" },
    ],
    nutricionista: [
      { name: "Dashboard", href: "/nutricionista/dashboard" },
      { name: "Suscriptores", href: "/nutricionista/suscriptores" },
      { name: "Planes", href: "/nutricionista/planes" },
    ],
    repartidor: [
      { name: "Dashboard", href: "/repartidor" },
      { name: "Pedidos", href: "/repartidor/pedidos" },
    ],
    suscriptor: [
      { name: "Dashboard", href: "/suscriptor/dashboard" },
      { name: "Mi Plan", href: "/suscriptor/plan" },
      { name: "Pedidos", href: "/suscriptor/pedidos" },
    ],
    invitado: [
      { name: "Inicio", href: "/" },
      { name: "Login", href: "/login" },
    ],
  }

  const routes = user ? roleRoutes[user.role] || roleRoutes["invitado"] : roleRoutes["invitado"]

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LOGO */}
        <Link href="/" className="text-blue-600 font-extrabold text-xl tracking-tight">
          Zona Azul
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-6">
          {routes.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className={`text-sm font-medium transition ${pathname === r.href ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
            >
              {r.name}
            </Link>
          ))}
        </div>

        {/* USUARIO / ACCIONES */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-gray-600 text-sm capitalize">{user.username}</span>
              <button
                onClick={handleLogout}
                className="text-sm text-white bg-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-700 transition"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="text-sm text-white bg-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-700 transition"
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
