
import DetallesDashboard from "@/app/panel-control/components/DetallesDashboard"
import ResumenVentas from "./components/ResumenVentas"


const Page = () => {
    return (
        <div className='space-y-4'>
            {/* Header */}
            <div>
                <h1 className="text-3xl font-medium">Dashboard</h1>
                <p className="text-gray-600 mt-1">Resumen de tu negocio en tiempo real</p>
            </div>
            {/* Tarjetas de resumen */}
            <ResumenVentas />

            <DetallesDashboard />
        </div>
    )
}

export default Page