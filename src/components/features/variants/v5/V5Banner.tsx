import type { VariantBannerProps } from '../types';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, ExternalLink } from 'lucide-react';

export function V5Banner({ actions, onActionClick }: VariantBannerProps) {
    return (
        <Accordion.Root type="single" collapsible className="space-y-2 mb-6">
            {actions.map((action) => (
                <Accordion.Item key={action.id} value={action.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50 transition-colors group">
                            <div className="flex items-center gap-3">
                                <span className="text-jusbrasil-green flex items-center">{(() => { const Icon = action.icon; return <Icon className="w-5 h-5" />; })()}</span>
                                <span className="font-semibold text-gray-900">{action.title}</span>
                            </div>
                            <ChevronDown className="w-5 h-5 text-gray-400 transform transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                        <div className="p-4 pt-0 text-sm text-gray-600 bg-gray-50 border-t border-gray-100">
                            <p className="mb-3">{action.subtitle}</p>
                            <button
                                onClick={() => onActionClick(action.id)}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-jusbrasil-green text-white rounded-md hover:bg-opacity-90 transition-colors text-sm font-medium"
                            >
                                Explorar Opções <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
}
