"use client"

import RoleGuard from "@/components/RoleGuard"
import DashboardHeader from "@/components/DashboardHeader"
import Navbar from "@/components/Navbar"

export default function RepartidorDashboard() {
  return (
    <RoleGuard role="repartidor">
      <main className="min-h-screen bg-gray-50 flex flex-col">
        <DashboardHeader title="Panel del Repartidor" subtitle="Pedidos y rutas asignadas" />
        <Navbar />

        <section className="p-6 grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-xl font-semibold mb-2">Pedidos activos</h2>
            <p className="text-gray-600">Consulta los pedidos pendientes, direcciones de entrega y tiempos estimados.</p>
            <button className="mt-4 bg-blue-600 text-white rounded-xl px-4 py-2 hover:bg-blue-700">Ver pedidos</button>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-xl font-semibold mb-2">Historial de entregas</h2>
            <p className="text-gray-600">Revisa tus entregas completadas y el estado de cada una.</p>
            <button className="mt-4 bg-green-600 text-white rounded-xl px-4 py-2 hover:bg-green-700">Ver historial</button>
          </div>
        </section>
      </main>
    </RoleGuard>
  )
}
