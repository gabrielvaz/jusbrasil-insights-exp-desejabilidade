import type { VariantBannerProps } from '../types';

export function V6Banner({ actions, onActionClick }: VariantBannerProps) {
    return (
        <div className="flex flex-wrap gap-3 py-4 border-b border-gray-100 mb-6">
            {actions.map((action) => (
                <button
                    key={action.id}
                    onClick={() => onActionClick(action.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
                >
                    <span className="text-gray-500">
                        {(() => { const Icon = action.icon; return <Icon className="w-4 h-4" />; })()}
                    </span>
                    {action.title}
                </button>
            ))}
        </div>
    );
}
