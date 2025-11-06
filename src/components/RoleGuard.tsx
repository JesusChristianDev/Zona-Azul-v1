"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"

export default function RoleGuard({
    role,
    children,
}: {
    role: string
    children: React.ReactNode
}) {
    const router = useRouter()
    const [authorized, setAuthorized] = useState(false)
    const [loading, setLoading] = useState(true) // nuevo

    useEffect(() => {
        const timer = setTimeout(() => {
            const user = getCurrentUser()
            console.log("🔍 Usuario actual desde RoleGuard:", user)

            if (!user) {
                console.warn("Usuario no autenticado, redirigiendo a /login")
                router.replace("/login")
                return
            }

            if (user.role !== role) {
                console.warn(
                    `Acceso denegado: ${user.role} intentando acceder a ${role}. Redirigiendo a su panel.`
                )
                router.replace(`/${user.role}/dashboard`)
                return
            }

            setAuthorized(true)
            setLoading(false)
        }, 150)

        return () => clearTimeout(timer)
    }, [role, router])

    if (loading)
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-500">Verificando permisos...</p>
            </div>
        )

    if (!authorized) return null

    return <>{children}</>
}
