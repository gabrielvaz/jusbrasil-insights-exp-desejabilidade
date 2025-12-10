import type { VariantBannerProps } from '../types';
import { useEffect, useState } from 'react';
import { cn } from '../../../../lib/utils';

export function V4Banner({ actions, onActionClick }: VariantBannerProps) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 64px is the top bar height. When we scroll past a certain point, we make this sticky.
            // Actually, sticky with top-[64px] works automatically if in normal flow.
            // But let's add a shadow when stuck if we want visual flair.
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // Sticky positioning: TopBar is 64px, so this should stick at top-16 (4rem = 64px)
        <div className={cn(
            "sticky top-16 z-40 bg-white/95 backdrop-blur-sm -mx-8 px-8 py-3 border-b border-gray-200 transition-shadow",
            isSticky ? "shadow-md" : ""
        )}>
            <div className="flex justify-between items-center max-w-[1280px]">
                {actions.map((action) => (
                    <button
                        key={action.id}
                        onClick={() => onActionClick(action.id)}
                        className="flex-1 px-4 py-2 mx-1 text-sm font-semibold text-gray-700 border-b-2 border-transparent hover:border-jusbrasil-green hover:text-jusbrasil-green transition-all text-center"
                    >
                        {action.title}
                    </button>
                ))}
            </div>
        </div>
    );
}
