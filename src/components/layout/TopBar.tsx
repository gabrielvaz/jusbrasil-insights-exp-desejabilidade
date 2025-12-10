import { useState } from 'react';
import { VariantButtonGroup } from '../features/VariantButtonGroup';
import { useVariants } from '../../contexts/VariantsContext';
import { Info } from 'lucide-react';
import { TestCardModal } from '../features/TestCardModal';

export function TopBar() {
    const { currentVariant } = useVariants();
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    return (
        <>
            <div className="fixed top-0 left-0 right-0 h-16 bg-black z-[100] flex items-center justify-between px-6 shadow-md">
                {/* Left: Button Group */}
                <div>
                    <VariantButtonGroup />
                </div>

                {/* Right: Variant Name + Info */}
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-white/90 tracking-wide">
                        {currentVariant.name}
                    </span>
                    <button
                        onClick={() => setIsInfoOpen(true)}
                        className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                        title="Ver Test Card"
                    >
                        <Info className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <TestCardModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />
        </>
    );
}
