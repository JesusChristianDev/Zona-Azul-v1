export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Bienvenido a Zona Azul</h1>
            <p className="text-gray-700 text-lg max-w-xl">
                Alimentación saludable personalizada. Gestiona tus menús, pedidos y progreso con ayuda de nuestro equipo de nutricionistas.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    href="/login"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Iniciar sesión
                </a>
                <a
                    href="/menu"
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
                >
                    Ver menú
                </a>
            </div>
        </div>
    )
}

