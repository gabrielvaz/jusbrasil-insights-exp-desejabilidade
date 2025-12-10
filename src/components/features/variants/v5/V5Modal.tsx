import { Modal } from '../../../ui/Modal';
import type { VariantModalProps } from '../types';
import { CheckboxList } from '../../../CheckboxList';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export function V5Modal({ isOpen, onClose, activeActionId, actions, onOptionToggle, selectedOptions }: VariantModalProps) {
    const [activeItem, setActiveItem] = useState(activeActionId || actions[0]?.id);

    useEffect(() => {
        if (activeActionId) {
            setActiveItem(activeActionId);
        }
    }, [activeActionId]);

    if (!isOpen) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Ferramentas Detalhadas"
            description="Navegue pelas categorias para ver as opções disponíveis."
            onConfirm={onClose}
        >
            <Accordion.Root type="single" collapsible value={activeItem} onValueChange={setActiveItem} className="space-y-2 mt-4">
                {actions.map((action) => (
                    <Accordion.Item key={action.id} value={action.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <Accordion.Header className="flex">
                            <Accordion.Trigger className="flex flex-1 items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-all font-medium text-gray-900 group">
                                <span className="flex items-center gap-2">
                                    {(() => { const Icon = action.icon; return <Icon className="w-5 h-5 text-jusbrasil-green" />; })()}
                                    {action.title}
                                </span>
                                <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden bg-white">
                            <div className="p-4 border-t border-gray-200">
                                <CheckboxList
                                    options={action.options}
                                    selected={selectedOptions[action.id] || []}
                                    onToggle={(optionId: string) => onOptionToggle(action.id, optionId)}
                                />
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </Modal>
    );
}
