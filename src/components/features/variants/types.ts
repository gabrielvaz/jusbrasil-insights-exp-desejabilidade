import { bannerActions } from '../../../data/bannerData';

export type BannerAction = typeof bannerActions[number];

export interface VariantBannerProps {
    onActionClick: (actionId: string) => void;
    actions: BannerAction[];
}

export interface VariantModalProps {
    isOpen: boolean;
    onClose: () => void;
    activeActionId: string | null;
    actions: BannerAction[];
    onOptionToggle: (actionId: string, optionId: string) => void;
    selectedOptions: Record<string, string[]>;
}
