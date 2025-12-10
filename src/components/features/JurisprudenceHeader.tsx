import { Copy, Bookmark, MoreVertical } from 'lucide-react';
import { Plus } from 'lucide-react'; // Added Plus import

export function JurisprudenceHeader() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <span className="text-[10px] font-bold text-jusbrasil-green bg-green-50 px-2 py-0.5 rounded">2º grau</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Tribunal Regional do Trabalho da 9ª Região TRT-9 - RECURSO ORDINARIO TRABALHISTA: ROT 0000921-63.2020.5.09.0007
            </h1>

            <div className="flex items-center justify-between mt-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-jusbrasil-green text-white text-xs font-medium rounded hover:bg-opacity-90 transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                    Seguir
                </button>

                <div className="flex items-center gap-2 text-gray-500">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Copiar">
                        <Copy className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Salvar">
                        <Bookmark className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Mais opções">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
