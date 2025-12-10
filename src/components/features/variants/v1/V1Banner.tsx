import type { VariantBannerProps } from '../types';

export function V1Banner({ actions, onActionClick }: VariantBannerProps) {
    return (
        <div className="flex items-center gap-4 py-4 border-b border-gray-100 mb-6 overflow-x-auto">
            {actions.map((action) => (
                <button
                    key={action.id}
                    onClick={() => onActionClick(action.id)}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-jusbrasil-green hover:bg-green-50 rounded-md transition-colors whitespace-nowrap"
                >
                    <span className="w-4 h-4 flex items-center justify-center">
                        {(() => { const Icon = action.icon; return <Icon className="w-4 h-4" />; })()}
                    </span>
                    {action.title}
                </button>
            ))}
        </div>
    );
}
