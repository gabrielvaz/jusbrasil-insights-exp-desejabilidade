import { X } from 'lucide-react';
import type { VariantModalProps } from '../types';
import { CheckboxList } from '../../../CheckboxList';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export function V6Modal({ isOpen, onClose, activeActionId, actions, onOptionToggle, selectedOptions }: VariantModalProps) {
    const [isVisible, setIsVisible] = useState(false);
    const activeAction = actions.find(a => a.id === activeActionId);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen && !isVisible) return null;
    if (!activeAction) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`
                    w-full max-w-md h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out pointer-events-auto relative flex flex-col
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            {(() => { const Icon = activeAction.icon; return <Icon className="w-5 h-5 text-jusbrasil-green" />; })()}
                            {activeAction.title}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">Selecione as opções desejadas</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    <CheckboxList
                        options={activeAction.options}
                        selected={selectedOptions[activeAction.id] || []}
                        onToggle={(optionId) => onOptionToggle(activeAction.id, optionId)}
                    />
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                    <button
                        onClick={onClose}
                        className="w-full py-3 bg-jusbrasil-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-sm"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}
