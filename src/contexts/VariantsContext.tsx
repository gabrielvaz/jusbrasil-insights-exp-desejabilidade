import { createContext, useContext, useState, type ReactNode } from 'react';
import type { VariantData } from '../data/variantsData';
import { VARIANTS_DATA } from '../data/variantsData';

interface VariantsContextType {
    activeVariantId: string;
    setActiveVariantId: (id: string) => void;
    currentVariant: VariantData;
    allVariants: VariantData[];
}

const VariantsContext = createContext<VariantsContextType | undefined>(undefined);

export function VariantsProvider({ children }: { children: ReactNode }) {
    const [activeVariantId, setActiveVariantId] = useState<string>(VARIANTS_DATA[0].id);

    const currentVariant = VARIANTS_DATA.find(v => v.id === activeVariantId) || VARIANTS_DATA[0];

    return (
        <VariantsContext.Provider value={{
            activeVariantId,
            setActiveVariantId,
            currentVariant,
            allVariants: VARIANTS_DATA
        }}>
            {children}
        </VariantsContext.Provider>
    );
}

export function useVariants() {
    const context = useContext(VariantsContext);
    if (context === undefined) {
        throw new Error('useVariants must be used within a VariantsProvider');
    }
    return context;
}
