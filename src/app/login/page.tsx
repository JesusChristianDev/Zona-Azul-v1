"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/lib/auth"

export default function LoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        const user = login(username, password)

        if (!user) {
            setError("Usuario o contraseña incorrectos")
            return
        }

        // Construimos destino según el rol
        const destination = `/${user.role}/dashboard`
        console.log("Redirigiendo a:", destination, "como:", user.role)

        // Redirección limpia y sin duplicados
        router.replace(destination)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Zona Azul</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80">
                <input
                    className="border p-2 rounded"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="border p-2 rounded"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Entrar
                </button>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    )
}

