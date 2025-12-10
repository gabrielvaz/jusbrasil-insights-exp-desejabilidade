import { Modal } from '../ui/Modal';
import { useVariants } from '../../contexts/VariantsContext';

interface TestCardModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function TestCardModal({ isOpen, onClose }: TestCardModalProps) {
    const { currentVariant } = useVariants();
    const { testCard } = currentVariant;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={`Test Card: ${currentVariant.name}`}
            description={currentVariant.description}
            onConfirm={onClose}
        >
            <div className="space-y-6">
                <div>
                    <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Insight / Evidência</h4>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm text-gray-700">
                        {testCard.evidence}
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Hipótese</h4>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm text-gray-700 italic">
                        "{testCard.hypothesis}"
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">O que vamos verificar</h4>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-xs text-gray-600">
                            {testCard.verification}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Métricas</h4>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-xs text-gray-600">
                            {testCard.metrics}
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Critério de Validação</h4>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-sm text-green-800 font-medium">
                        {testCard.validationCriteria}
                    </div>
                </div>
            </div>
            {/* Override footer in Modal if needed, or just use default Confirm which closes it */}
        </Modal>
    );
}
