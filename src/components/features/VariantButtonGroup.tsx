import { useVariants } from '../../contexts/VariantsContext';
import { cn } from '../../lib/utils';

export function VariantButtonGroup() {
    const { allVariants, activeVariantId, setActiveVariantId } = useVariants();

    return (
        <div className="flex items-center bg-gray-900 rounded-lg p-1 border border-gray-800">
            {allVariants.map((variant) => {
                const isActive = variant.id === activeVariantId;
                return (
                    <button
                        key={variant.id}
                        onClick={() => setActiveVariantId(variant.id)}
                        className={cn(
                            "px-3 py-1.5 text-xs font-medium rounded-md transition-all min-w-[36px]",
                            isActive
                                ? "bg-gray-700 text-white shadow-sm"
                                : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                        )}
                    >
                        {variant.label}
                    </button>
                );
            })}
        </div>
    );
}
