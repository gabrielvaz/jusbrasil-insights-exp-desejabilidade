import type { VariantBannerProps } from '../types';

export function V1Banner({ actions, onActionClick }: VariantBannerProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-2 mb-8">
            {actions.map((action) => (
                <button
                    key={action.id}
                    onClick={() => onActionClick(action.id)}
                    className="flex flex-col items-start text-left p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all h-full group"
                >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-700 mb-4 group-hover:scale-105 transition-transform">
                        {(() => { const Icon = action.icon; return <Icon className="w-5 h-5" />; })()}
                    </div>

                    <h3 className="font-bold text-gray-900 mb-2">
                        {action.title}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed">
                        {action.subtitle}
                    </p>
                </button>
            ))}
        </div>
    );
}
