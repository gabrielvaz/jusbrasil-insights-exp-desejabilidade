import { cn } from '../lib/utils';
import { Check } from 'lucide-react';

interface Option {
    id: string;
    label: string;
}

interface CheckboxListProps {
    options: Option[];
    selected: string[];
    onToggle: (id: string) => void;
}

export function CheckboxList({ options, selected, onToggle }: CheckboxListProps) {
    return (
        <div className="flex flex-col gap-2">
            {options.map((option) => {
                const isSelected = selected.includes(option.id);
                return (
                    <div
                        key={option.id}
                        onClick={() => onToggle(option.id)}
                        className={cn(
                            "flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all select-none hover:shadow-sm",
                            isSelected
                                ? "bg-green-50 border-green-500 ring-1 ring-green-500"
                                : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        )}
                    >
                        <div className={cn(
                            "w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
                            isSelected
                                ? "bg-jusbrasil-green border-jusbrasil-green"
                                : "border-gray-300 bg-white"
                        )}>
                            {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <span className={cn("text-sm leading-relaxed", isSelected ? "text-gray-900 font-medium" : "text-gray-700")}>
                            {option.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
