import { Info, ChevronRight, ChevronDown } from 'lucide-react';

const timelineEvents = [
    { id: 1, type: 'Sentença', org: 'TRT-9', date: '02/10/2023' },
    { id: 2, type: 'Acórdão', org: 'TRT-9', date: '31/05/2022' },
    { id: 3, type: 'Acórdão', org: 'TRT-9', date: '21/03/2022', current: true },
    { id: 4, type: 'Sentença', org: 'TRT-9', date: '21/01/2022' },
    { id: 5, type: 'Sentença', org: 'TRT-9', date: '19/11/2021' },
];

export function Timeline() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-bold text-gray-900 font-sans">Documentos do processo</h2>
                <Info className="w-4 h-4 text-gray-400" />
            </div>

            <div className="relative pl-2">
                {/* Vertical Line */}
                <div className="absolute left-[11px] top-2 bottom-4 w-[2px] bg-gray-100" />

                <div className="space-y-6">
                    {timelineEvents.map((event) => (
                        <div key={event.id} className="relative flex items-center justify-between group cursor-pointer pl-8">
                            {/* Dot */}
                            <div className={`absolute left-0 w-3 h-3 rounded-full border-2 bg-white z-10 transition-colors ${event.current ? 'border-[#00897b]' : 'border-[#00897b] group-hover:bg-[#00897b]/10'
                                }`} />

                            <div className="flex flex-col">
                                <span className={`text-sm font-bold ${event.current ? 'text-gray-900' : 'text-gray-900'}`}>
                                    {event.type}
                                </span>
                                <span className="text-xs text-gray-500">
                                    {event.org} - {event.date}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                {event.current && (
                                    <span className="bg-green-100 text-[#00897b] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                                        Atual
                                    </span>
                                )}
                                {/* Just a placeholder for the arrow, typically shows on hover or always */}
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>
                    ))}
                </div>

                <button className="flex items-center gap-1 text-[#00897b] text-sm font-bold mt-6 hover:underline pl-8">
                    Mostrar mais <ChevronDown className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
