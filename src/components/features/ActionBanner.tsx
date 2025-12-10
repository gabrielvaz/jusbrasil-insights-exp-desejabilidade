import { useState } from 'react';
import { bannerActions } from '../../data/bannerData';
import { useVariants } from '../../contexts/VariantsContext';

// Variants
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
import { V6Banner } from './variants/v6/V6Banner';
import { V6Modal } from './variants/v6/V6Modal';

export function ActionBanner() {
    const { currentVariant } = useVariants();
    const [activeActionId, setActiveActionId] = useState<string | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});

    const handleClose = () => setActiveActionId(null);

    const handleToggleOption = (actionId: string, optionId: string) => {
        setSelectedOptions(prev => {
            const current = prev[actionId] || [];
            const isSelected = current.includes(optionId);
            const newSelection = isSelected
                ? current.filter(id => id !== optionId)
                : [...current, optionId];

            return { ...prev, [actionId]: newSelection };
        });
    };

    let BannerComponent;
    let ModalComponent;

    switch (currentVariant.id) {
        case 'v1':
            BannerComponent = V1Banner;
            ModalComponent = V1Modal;
            break;
        case 'v2':
            BannerComponent = V2Banner;
            ModalComponent = V2Modal;
            break;
        case 'v3':
            BannerComponent = V3Banner;
            ModalComponent = V3Modal;
            break;
        case 'v4':
            BannerComponent = V4Banner;
            ModalComponent = V4Modal;
            break;
        case 'v5':
            BannerComponent = V5Banner;
            ModalComponent = V5Modal;
            break;
        case 'v6':
            BannerComponent = V6Banner;
            ModalComponent = V6Modal;
            break;
        default:
            BannerComponent = V1Banner;
            ModalComponent = V1Modal;
    }

    return (
        <>
            <BannerComponent actions={bannerActions} onActionClick={setActiveActionId} />
            <ModalComponent
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
