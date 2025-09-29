
import { productos } from "@/data/mockProductos";
import { comercios } from "@/data/mockComercio";
import { DataTable } from "./data-table";
import { columns } from "./columns";



const TablaInventario = () => {
    const primerComer = comercios[0].nombre || "El meroDon"

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-medium">Tabla de Inventario de tu tienda <span className="text-3xl text-pretty">{primerComer}</span></h1>
            <DataTable columns={columns} data={productos} filtro="nombre" />
        </div>
    )
}

export default TablaInventario