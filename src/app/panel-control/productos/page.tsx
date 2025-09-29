
import HeaderProducts from "./components/headerProducts"
import EstadisticasProductos from "./components/EstadisticasProductos"
import { DataTable } from "../inventario/components/data-table"
import { productos } from "@/data/mockProductos"
import { columns } from "../inventario/components/columns"

const PageProductos = () => {

    return (
        <div className='space-y-3'>
            {/* Header */}
            <HeaderProducts />
            {/* Estadisticas */}
            <EstadisticasProductos />
            {/* Tabla */}
            <DataTable columns={columns} data={productos} filtro="nombre" />
        </div>
    )
}

export default PageProductos