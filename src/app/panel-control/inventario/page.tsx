import { Button } from "@/components/ui/button"
import BajoStockProductos from "./components/BajoStockProductos"
import EstadisticasInventarios from "./components/EstadisticasInventarios"
// import FiltroInventario from "./components/FiltroInventario"
import TablaInventario from "./components/TablaInventario"
import { Download, Upload } from "lucide-react"



const InventariosProductos = () => {
    return (
        <div className='space-y-4'>
            {/* Header */}
            <div className=''>
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-medium">Inventario</h1>
                        <p className="text-gray-600 mt-1">Control y gestión de stock de productos</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <Upload className="h-4 w-4 mr-2" />
                            Importar Excel
                        </Button>
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Exportar Excel
                        </Button>
                    </div>
                </div>
            </div>
            {/* Estadísticas de Inventario */}
            <EstadisticasInventarios />
            {/* Alertas de bajo Productos */}
            <BajoStockProductos />
            {/* Filtro de inventario */}
            {/* <FiltroInventario /> */}
            {/* Tabla de Inventario */}
            <TablaInventario />
        </div>
    )
}

export default InventariosProductos