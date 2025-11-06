"use client"

import RoleGuard from "@/components/RoleGuard"
import DashboardHeader from "@/components/DashboardHeader"
import Navbar from "@/components/Navbar"

export default function SuscriptorDashboard() {
    return (
        <RoleGuard role="suscriptor">
            <main className="min-h-screen bg-gray-50 flex flex-col">
                <DashboardHeader title="Zona Personal" subtitle="Tu progreso y pedidos activos" />
                <Navbar />

                <section className="p-6 grid gap-6 md:grid-cols-2">
                    <div className="bg-white rounded-2xl shadow p-5">
                        <h2 className="text-xl font-semibold mb-2">Tu plan nutricional</h2>
                        <p className="text-gray-600">Visualiza tus comidas programadas, calorías diarias y recomendaciones del nutricionista.</p>
                        <button className="mt-4 bg-blue-600 text-white rounded-xl px-4 py-2 hover:bg-blue-700">Ver plan</button>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-5">
                        <h2 className="text-xl font-semibold mb-2">Pedidos en curso</h2>
                        <p className="text-gray-600">Consulta el estado de tus entregas y comunica incidencias directamente con el repartidor.</p>
                        <button className="mt-4 bg-green-600 text-white rounded-xl px-4 py-2 hover:bg-green-700">Ver pedidos</button>
                    </div>
                </section>
            </main>
        </RoleGuard>
    )
}
