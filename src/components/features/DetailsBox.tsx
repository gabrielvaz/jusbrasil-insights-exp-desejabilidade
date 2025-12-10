export function DetailsBox() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6 font-sans">Detalhes</h2>

            <div className="space-y-6">
                <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Processo</h3>
                    <button className="w-full py-2 px-4 bg-jusbrasil-green text-white font-medium rounded hover:bg-opacity-90 transition-colors">
                        ROT 0000921-63.2020.5.09.0007
                    </button>
                </div>

                <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Data de publicação</h3>
                    <p className="text-sm text-gray-600">21/03/2022</p>
                </div>

                <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Relator</h3>
                    <p className="text-sm text-gray-600 uppercase">EDMILSON ANTONIO DE LIMA</p>
                </div>
            </div>
        </div>
    );
}
