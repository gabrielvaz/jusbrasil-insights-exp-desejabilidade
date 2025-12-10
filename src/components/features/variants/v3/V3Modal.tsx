import { Modal } from '../../../ui/Modal';
import type { VariantModalProps } from '../types';

export function V3Modal({ isOpen, onClose, activeActionId, actions, onOptionToggle, selectedOptions }: VariantModalProps) {
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
            {/* Override the default stack layout for Grid */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeAction.options.map((option) => {
                    const isSelected = selectedOptions[activeAction.id]?.includes(option.id);
                    return (
                        <div
                            key={option.id}
                            onClick={() => onOptionToggle(activeAction.id, option.id)}
                            className={`
                               cursor-pointer border rounded-lg p-3 flex items-start gap-3 transition-all
                               ${isSelected ? 'bg-green-50 border-jusbrasil-green' : 'bg-white border-gray-200 hover:border-green-300'}
                           `}
                        >
                            <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-jusbrasil-green border-jusbrasil-green' : 'border-gray-300'}`}>
                                {isSelected && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                            </div>
                            <span className={`text-sm ${isSelected ? 'text-jusbrasil-green font-medium' : 'text-gray-700'}`}>{option.label}</span>
                        </div>
                    );
                })}
            </div>
        </Modal>
    );
}
