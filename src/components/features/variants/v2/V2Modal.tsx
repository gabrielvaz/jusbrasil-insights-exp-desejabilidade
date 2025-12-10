import { Modal } from '../../../ui/Modal';
import type { VariantModalProps } from '../types';
import { CheckboxList } from '../../../CheckboxList';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../../../lib/utils';
import { useState, useEffect } from 'react';

export function V2Modal({ isOpen, onClose, activeActionId, actions, onOptionToggle, selectedOptions }: VariantModalProps) {
    // If we open with a specific action, set that as the default tab
    const [activeTab, setActiveTab] = useState(activeActionId || actions[0]?.id);

    useEffect(() => {
        if (activeActionId) {
            setActiveTab(activeActionId);
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
            <TabsPrimitive.Root value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
                <TabsPrimitive.List className="flex border-b border-gray-200 mb-4 overflow-x-auto">
                    {actions.map((action) => (
                        <TabsPrimitive.Trigger
                            key={action.id}
                            value={action.id}
                            className={cn(
                                "px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent transition-colors whitespace-nowrap",
                                "data-[state=active]:text-jusbrasil-green data-[state=active]:border-jusbrasil-green hover:text-gray-700"
                            )}
                        >
                            <span className="flex items-center gap-2">
                                {/* Render icon properly */}
                                {(() => { const Icon = action.icon; return <Icon className="w-5 h-5" />; })()}
                                {action.title}
                            </span>
                        </TabsPrimitive.Trigger>
                    ))}
                </TabsPrimitive.List>

                {actions.map((action) => (
                    <TabsPrimitive.Content key={action.id} value={action.id} className="outline-none">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{action.title}</h3>
                            <p className="text-sm text-gray-500">{action.subtitle}</p>
                        </div>
                        <CheckboxList
                            options={action.options}
                            selected={selectedOptions[action.id] || []}
                            onToggle={(optionId: string) => onOptionToggle(action.id, optionId)}
                        />
                    </TabsPrimitive.Content>
                ))}
            </TabsPrimitive.Root>
        </Modal>
    );
}
