import { cn } from '../../lib/utils';
import { useState } from 'react';

const tabs = [
    { id: 'resumo', label: 'Resumo' },
    { id: 'inteiro-teor', label: 'Inteiro Teor' },
    { id: 'fatos', label: 'Fatos' },
];

export function Tabs() {
    const [activeTab, setActiveTab] = useState('resumo');

    return (
        <div className="flex gap-6 border-b border-gray-200 mt-8">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                        "pb-3 text-sm font-medium transition-all relative",
                        activeTab === tab.id
                            ? "data-[state=active]:text-jusbrasil-green data-[state=active]:border-jusbrasil-green hover:text-gray-700"
                            : "text-gray-600 hover:text-gray-900"
                    )}
                >
                    {tab.label}
                    {activeTab === tab.id && (
                        <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00897b] rounded-t-sm" />
                    )}
                </button>
            ))}
        </div>
    );
}
