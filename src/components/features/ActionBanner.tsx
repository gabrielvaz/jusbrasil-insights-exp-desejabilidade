import { useState } from 'react';
import { bannerActions } from '../../data/bannerData';
import { useVariants } from '../../contexts/VariantsContext';

// Import Variant Components
import { V1Banner } from './variants/v1/V1Banner';
import { V1Modal } from './variants/v1/V1Modal';
import { V2Banner } from './variants/v2/V2Banner';
import { V2Modal } from './variants/v2/V2Modal';
import { V3Banner } from './variants/v3/V3Banner';
import { V3Modal } from './variants/v3/V3Modal';
import { V4Banner } from './variants/v4/V4Banner';
import { V4Modal } from './variants/v4/V4Modal';
import { V5Banner } from './variants/v5/V5Banner';
import { V5Modal } from './variants/v5/V5Modal';

// Fallback (Original)

export function ActionBanner() {
    const { currentVariant } = useVariants();
    const [activeActionId, setActiveActionId] = useState<string | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});

    const handleToggleOption = (actionId: string, optionId: string) => {
        setSelectedOptions(prev => {
            const current = prev[actionId] || [];
            const updated = current.includes(optionId)
                ? current.filter(id => id !== optionId)
                : [...current, optionId];
            return { ...prev, [actionId]: updated };
        });
    };

    const handleClose = () => setActiveActionId(null);

    // Dynamic Rendering Logic
    switch (currentVariant.id) {
        case 'v1':
            return (
                <>
                    <V1Banner actions={bannerActions} onActionClick={setActiveActionId} />
                    <V1Modal
                        isOpen={!!activeActionId}
                        onClose={handleClose}
                        activeActionId={activeActionId}
                        actions={bannerActions}
                        onOptionToggle={handleToggleOption}
                        selectedOptions={selectedOptions}
                    />
                </>
            );
        case 'v2':
            return (
                <>
                    <V2Banner actions={bannerActions} onActionClick={setActiveActionId} />
                    <V2Modal
                        isOpen={!!activeActionId}
                        onClose={handleClose}
                        activeActionId={activeActionId}
                        actions={bannerActions}
                        onOptionToggle={handleToggleOption}
                        selectedOptions={selectedOptions}
                    />
                </>
            );
        case 'v3':
            return (
                <>
                    <V3Banner actions={bannerActions} onActionClick={setActiveActionId} />
                    <V3Modal
                        isOpen={!!activeActionId}
                        onClose={handleClose}
                        activeActionId={activeActionId}
                        actions={bannerActions}
                        onOptionToggle={handleToggleOption}
                        selectedOptions={selectedOptions}
                    />
                </>
            );
        case 'v4':
            return (
                <>
                    <V4Banner actions={bannerActions} onActionClick={setActiveActionId} />
                    <V4Modal
                        isOpen={!!activeActionId}
                        onClose={handleClose}
                        activeActionId={activeActionId}
                        actions={bannerActions}
                        onOptionToggle={handleToggleOption}
                        selectedOptions={selectedOptions}
                    />
                </>
            );
        case 'v5':
            return (
                <>
                    <V5Banner actions={bannerActions} onActionClick={setActiveActionId} />
                    <V5Modal
                        isOpen={!!activeActionId}
                        onClose={handleClose}
                        activeActionId={activeActionId}
                        actions={bannerActions}
                        onOptionToggle={handleToggleOption}
                        selectedOptions={selectedOptions}
                    />
                </>
            );
        default:
            // Default / Fallback to V1 style or previous implementation
            return (
                <>
                    <V1Banner actions={bannerActions} onActionClick={setActiveActionId} />
                    <V1Modal
                        isOpen={!!activeActionId}
                        onClose={handleClose}
                        activeActionId={activeActionId}
                        actions={bannerActions}
                        onOptionToggle={handleToggleOption}
                        selectedOptions={selectedOptions}
                    />
                </>
            );
    }
}
