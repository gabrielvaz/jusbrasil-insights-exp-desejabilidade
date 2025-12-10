import type { VariantBannerProps } from '../types';

export function V3Banner({ actions, onActionClick }: VariantBannerProps) {
    return (
        <div className="flex flex-wrap gap-3 py-4">
            {actions.map((action) => (
                <button
                    key={action.id}
                    onClick={() => onActionClick(action.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:border-jusbrasil-green hover:bg-green-50 hover:text-jusbrasil-green transition-all shadow-sm hover:shadow-md active:scale-95"
                >
                    <span className="w-4 h-4 flex items-center justify-center">{(() => { const Icon = action.icon; return <Icon className="w-4 h-4" />; })()}</span>
                    <span className="text-sm font-semibold text-gray-700">{action.title}</span>
                </button>
            ))}
        </div>
    );
}
