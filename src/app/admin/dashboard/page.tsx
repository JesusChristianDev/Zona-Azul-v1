"use client"

import RoleGuard from "@/components/RoleGuard"
import DashboardHeader from "@/components/DashboardHeader"
import Navbar from "@/components/Navbar"

export default function AdminDashboard() {
    return (
        <RoleGuard role="admin">
            <main className="min-h-screen bg-gray-50 flex flex-col">
                <DashboardHeader title="Panel de Administración" subtitle="Gestión global del sistema" />
                <Navbar />

                <section className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white rounded-2xl shadow p-5">
                        <h2 className="text-xl font-semibold mb-2">Usuarios registrados</h2>
                        <p className="text-gray-600">Crea, edita o elimina cuentas de administradores, nutricionistas, repartidores y suscriptores.</p>
                        <button className="mt-4 bg-blue-600 text-white rounded-xl px-4 py-2 hover:bg-blue-700">Gestionar usuarios</button>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-5">
                        <h2 className="text-xl font-semibold mb-2">Control de menús</h2>
                        <p className="text-gray-600">Aprueba o modifica menús generados por nutricionistas. Supervisa su disponibilidad y costos.</p>
                        <button className="mt-4 bg-green-600 text-white rounded-xl px-4 py-2 hover:bg-green-700">Ver menús</button>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-5">
                        <h2 className="text-xl font-semibold mb-2">Actividad general</h2>
                        <p className="text-gray-600">Visualiza el estado del sistema: pedidos activos, entregas, métricas de rendimiento y usuarios online.</p>
                        <button className="mt-4 bg-indigo-600 text-white rounded-xl px-4 py-2 hover:bg-indigo-700">Ver panel</button>
                    </div>
                </section>
            </main>
        </RoleGuard>
    )
}
