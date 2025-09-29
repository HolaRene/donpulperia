import ContentMain from "./components/ContentMain";

const PageComercios = () => {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="p-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold">DonPulperia</h1>
                    <p className="text-sm opacity-90">Descubre los mejores comercios de Nicaragua</p>
                </div>
            </header>
            {/* Contenido principal */}
            <ContentMain />
        </div>
    );
}
export default PageComercios