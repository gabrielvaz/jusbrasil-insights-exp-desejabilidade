import { Modal } from '../../../ui/Modal';
import type { VariantModalProps } from '../types';

export function V4Modal({ isOpen, onClose, activeActionId, actions, onOptionToggle, selectedOptions }: VariantModalProps) {
    const activeAction = actions.find(a => a.id === activeActionId);

    if (!activeAction) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={activeAction.title}
            description={activeAction.subtitle}
            onConfirm={onClose}
        >
            <div className="mt-4 space-y-4">
                {activeAction.options.map((option) => {
                    const isSelected = selectedOptions[activeAction.id]?.includes(option.id);
                    return (
                        <div
                            key={option.id}
                            onClick={() => onOptionToggle(activeAction.id, option.id)}
                            className={`
                               cursor-pointer border rounded-xl p-5 transition-all hover:shadow-md
                               ${isSelected ? 'bg-green-50 border-jusbrasil-green ring-1 ring-jusbrasil-green' : 'bg-white border-gray-200'}
                           `}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className={`font-bold text-lg ${isSelected ? 'text-jusbrasil-green' : 'text-gray-900'}`}>
                                    {option.label}
                                </h3>
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${isSelected ? 'bg-jusbrasil-green border-jusbrasil-green' : 'border-gray-300'}`}>
                                    {isSelected && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                                </div>
                            </div>
                            <p className={`text-sm ${isSelected ? 'text-jusbrasil-green' : 'text-gray-500'}`}>
                                {/* Mock subtitle since data doesn't have it explicitly yet */}
                                Detalhes adicionais sobre "{option.label}" e como isso impacta sua estratégia jurídica.
                            </p>
                        </div>
                    );
                })}
            </div>
        </Modal>
    );
}
