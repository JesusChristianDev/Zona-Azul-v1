import './globals.css'
import Navbar from '@/components/Navbar.tsx'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
