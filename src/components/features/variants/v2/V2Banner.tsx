import type { VariantBannerProps } from '../types';

export function V2Banner({ actions, onActionClick }: VariantBannerProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
            {actions.map((action) => (
                <button
                    key={action.id}
                    onClick={() => onActionClick(action.id)}
                    className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-jusbrasil-green transition-all group text-center h-full"
                >
                    <div className="p-3 bg-green-50 text-jusbrasil-green rounded-full mb-3 group-hover:scale-110 transition-transform">
                        {(() => { const Icon = action.icon; return <Icon className="w-6 h-6" />; })()}
                    </div>
                    <span className="font-bold text-gray-900 mb-1">{action.title}</span>
                    <span className="text-xs text-gray-500">{action.subtitle}</span>
                </button>
            ))}
        </div>
    );
}
