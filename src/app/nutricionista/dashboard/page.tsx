"use client"

import RoleGuard from "@/components/RoleGuard"
import DashboardHeader from "@/components/DashboardHeader"
import Navbar from "@/components/Navbar"

export default function NutricionistaDashboard() {
  return (
    <RoleGuard role="nutricionista">
      <main className="min-h-screen bg-gray-50 flex flex-col">
        <DashboardHeader
          title="Panel del Nutricionista"
          subtitle="Gestiona tus suscriptores, planes y menús personalizados"
        />
        <Navbar />

        <section className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-xl font-semibold mb-2">Gestión de planes</h2>
            <p className="text-gray-600">
              Crea o actualiza los planes nutricionales de tus suscriptores.
            </p>
            <button className="mt-4 bg-green-600 text-white rounded-xl px-4 py-2 hover:bg-green-700">
              Ver planes
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-xl font-semibold mb-2">Suscriptores</h2>
            <p className="text-gray-600">
              Consulta la evolución y estado de tus clientes activos.
            </p>
            <button className="mt-4 bg-blue-600 text-white rounded-xl px-4 py-2 hover:bg-blue-700">
              Ver suscriptores
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-xl font-semibold mb-2">Comunicación directa</h2>
            <p className="text-gray-600">
              Envía mensajes o recordatorios a tus suscriptores.
            </p>
            <button className="mt-4 bg-indigo-600 text-white rounded-xl px-4 py-2 hover:bg-indigo-700">
              Abrir chat
            </button>
          </div>
        </section>
      </main>
    </RoleGuard>
  )
}
