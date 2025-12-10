import { Quote, Copy, Bookmark, MoreVertical } from 'lucide-react';

export function JurisprudenceHeader() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">2º grau</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Tribunal Regional do Trabalho da 9ª Região TRT-9 - RECURSO ORDINARIO TRABALHISTA: ROT 0000921-63.2020.5.09.0007
            </h1>

            <div className="flex items-center justify-between mt-2">
                <button className="flex items-center gap-2 bg-[#00897b] hover:bg-[#00796b] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm">
                    <Quote className="w-4 h-4" />
                    Ementa para citação
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
