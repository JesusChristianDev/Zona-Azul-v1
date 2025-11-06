// src/lib/auth.ts
import { users } from "./users"

// Inicia sesión y guarda el usuario en localStorage
export function login(username: string, password: string) {
    const user = users.find(
        (u) => u.username === username && u.password === password
    )
    if (!user) return null

    // Se guarda el usuario con un timestamp para depuración si hace falta
    const session = { ...user, loginAt: new Date().toISOString() }
    if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(session))
    }

    return session
}

// Cierra sesión
export function logout() {
    if (typeof window !== "undefined") {
        localStorage.removeItem("user")
    }
}

// Obtiene el usuario actual (si existe)
export function getCurrentUser() {
    if (typeof window === "undefined") return null
    try {
        const data = localStorage.getItem("user")
        if (!data) return null
        const parsed = JSON.parse(data)
        // Validamos que tenga el campo role (para evitar errores)
        return parsed?.role ? parsed : null
    } catch {
        return null
    }
}
