import { Modal } from '../../../ui/Modal';
import type { VariantModalProps } from '../types';
import { CheckboxList } from '../../../CheckboxList';
// Adjust path if needed

export function V1Modal({ isOpen, onClose, activeActionId, actions, onOptionToggle, selectedOptions }: VariantModalProps) {
    const activeAction = actions.find(a => a.id === activeActionId);

    if (!activeAction) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Ferramentas de Análise"
            description="Explore as opções disponíveis em cada categoria."
            onConfirm={onClose}
        >
            <div className="mt-4">
                <div className="flex items-center gap-2">
                    {/* Fix: Render icon as component */}
                    {(() => { const Icon = activeAction.icon; return <Icon className="w-5 h-5" />; })()}
                    {activeAction.title}
                </div>
                <CheckboxList
                    options={activeAction.options}
                    selected={selectedOptions[activeAction.id] || []}
                    onToggle={(optionId) => onOptionToggle(activeAction.id, optionId)}
                />
            </div>
        </Modal>
    );
}
