"use client"

import { useEffect, useState } from "react"
import { getCurrentUser, logout } from "@/lib/auth"
import { useRouter } from "next/navigation"

interface DashboardHeaderProps {
    title: string
    subtitle?: string
}

export default function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
    const [username, setUsername] = useState("")
    const [role, setRole] = useState("")
    const router = useRouter()

    useEffect(() => {
        const user = getCurrentUser()
        if (user) {
            setUsername(user.username)
            setRole(user.role)
        }
    }, [])

    const handleLogout = () => {
        logout()
        router.push("/login")
    }

    return (
        <header className="flex flex-col md:flex-row items-center justify-between bg-white shadow px-6 py-4">
            {/* Título */}
            <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold text-blue-700">{title}</h1>
                {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
            </div>

        </header>
    )
}
