// src/lib/users.ts

export const users = [
    {
        id: "1",
        username: "admin",
        password: "zonaadmin123",
        role: "admin",
        name: "Administrador General",
        email: "admin@zonaazul.com",
        permissions: ["create_nutricionista", "manage_system", "view_reports"],
    },
    {
        id: "2",
        username: "nutricionista1",
        password: "nutri2025",
        role: "nutricionista",
        name: "Laura Gómez",
        email: "laura@zonaazul.com",
        permissions: [
            "create_suscriptor",
            "view_suscriptores",
            "manage_menus",
            "send_feedback",
        ],
    },
    {
        id: "3",
        username: "suscriptor1",
        password: "cliente2025",
        role: "suscriptor",
        name: "Carlos Pérez",
        email: "carlos@zonaazul.com",
        assignedNutricionista: "2", // ID del nutricionista asignado
        permissions: ["view_menu", "track_progress", "make_orders"],
    },
    {
        id: "4",
        username: "repartidor1",
        password: "reparte2025",
        role: "repartidor",
        name: "José Martínez",
        email: "jose@zonaazul.com",
        permissions: ["view_orders", "update_delivery_status"],
    },
]

