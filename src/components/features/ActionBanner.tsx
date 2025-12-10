import { useState } from 'react';
import { bannerActions } from '../../data/bannerData';
import { Modal } from '../ui/Modal';
import { Check } from 'lucide-react';

import { cn } from '../../lib/utils';

export function ActionBanner() {
    const [activeActionId, setActiveActionId] = useState<string | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});

    const activeAction = bannerActions.find(a => a.id === activeActionId);

    const handleOptionToggle = (optionId: string) => {
        if (!activeActionId) return;

        setSelectedOptions(prev => {
            const current = prev[activeActionId] || [];
            const isSelected = current.includes(optionId);

            if (isSelected) {
                return { ...prev, [activeActionId]: current.filter(id => id !== optionId) };
            } else {
                return { ...prev, [activeActionId]: [...current, optionId] };
            }
        });
    };

    const handleConfirm = () => {
        // Just close for prototype
        setActiveActionId(null);
    };

    return (
        <>
            <div className="flex flex-col gap-4 my-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {bannerActions.map((action) => {
                        const Icon = action.icon;
                        return (
                            <button
                                key={action.id}
                                onClick={() => setActiveActionId(action.id)}
                                className="flex flex-col items-start text-left bg-gray-50 hover:bg-white border border-gray-200 hover:border-[#00897b] hover:shadow-md p-4 rounded-xl transition-all group"
                            >
                                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-[#00897b]/10 mb-3 transition-colors">
                                    <Icon className="w-5 h-5 text-gray-700 group-hover:text-[#00897b]" />
                                </div>

                                <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-[#00897b] transition-colors">
                                    {action.title}
                                </h3>
                                <p className="text-xs text-gray-500 leading-normal">
                                    {action.subtitle}
                                </p>
                            </button>
                        );
                    })}
                </div>
            </div>

            <Modal
                isOpen={!!activeActionId}
                onClose={() => setActiveActionId(null)}
                title={activeAction?.modalTitle || ''}
                description={activeAction?.modalDescription || ''}
                onConfirm={handleConfirm}
            >
                <div className="space-y-3">
                    {activeAction?.options.map((option) => {
                        const isSelected = (selectedOptions[activeAction.id] || []).includes(option.id);
                        return (
                            <div
                                key={option.id}
                                onClick={() => handleOptionToggle(option.id)}
                                className={cn(
                                    "flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all select-none",
                                    isSelected
                                        ? "bg-[#00897b]/5 border-[#00897b]"
                                        : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                )}
                            >
                                <div className={cn(
                                    "w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
                                    isSelected
                                        ? "bg-[#00897b] border-[#00897b]"
                                        : "border-gray-300 bg-white"
                                )}>
                                    {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                                </div>
                                <span className={cn("text-sm", isSelected ? "text-gray-900 font-medium" : "text-gray-700")}>
                                    {option.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </Modal>
        </>
    );
}
