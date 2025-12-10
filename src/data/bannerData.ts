import { FileText, Scale, ShieldCheck, Users } from 'lucide-react';

export const bannerActions = [
    {
        id: 'similaridade',
        title: 'Similaridade fática',
        subtitle: 'Encontre casos realmente parecidos com este.',
        icon: FileText,
        modalTitle: 'Similaridade fática',
        modalDescription: 'Selecione que tipo de comparação com casos similares você quer explorar.',
        options: [
            { id: 'A', label: '[A] Confirmar similaridade fática entre um processo de terceiro e o meu processo.' },
            { id: 'C', label: '[C] Encontrar argumentos bem-sucedidos em processos similares em geral.' },
            { id: 'D', label: '[D] Encontrar argumentos bem-sucedidos em processos similares envolvendo a mesma contraparte.' },
            { id: 'W', label: '[W] Identificar rapidamente a tese central das partes (autor e réu) em processos similares, para entender o eixo do conflito.' },
            { id: 'V', label: '[V] Acompanhar o desenvolvimento de um processo similar ao meu ao longo do tempo.' },
        ]
    },
    {
        id: 'pedidos',
        title: 'Pedidos e estratégia',
        subtitle: 'Veja o que outros advogados pediram em casos similares.',
        icon: Scale,
        modalTitle: 'Pedidos e estratégia na petição',
        modalDescription: 'Selecione o tipo de apoio que você quer para formular pedidos e estratégia na sua peça.',
        options: [
            { id: 'E', label: '[E] Entender o que pedir na minha petição inicial a partir do que foi pedido em processos similares bem-sucedidos.' },
            { id: 'F', label: '[F] Entender o que pedir na minha petição inicial a partir do que foi pedido em processos similares bem-sucedidos contra a mesma contraparte.' },
            { id: 'X', label: '[X] Verificar quais pedidos são mais comuns e mais eficientes em casos parecidos, para calibrar minha estratégia inicial.' },
            { id: 'Z', label: '[Z] Avaliar o valor da causa em processos similares para estimar riscos, custos e potencial de retorno da minha ação.' },
        ]
    },
    {
        id: 'validade',
        title: 'Validade e reforma da decisão',
        subtitle: 'Confirme se esta decisão ainda vale hoje.',
        icon: ShieldCheck,
        modalTitle: 'Validade e reforma da decisão',
        modalDescription: 'Selecione o que você precisa validar sobre a atualidade e a força desta decisão.',
        options: [
            { id: 'B', label: '[B] Entender se a decisão encontrada foi reformada, anulada, mantida ou continua válida.' },
            { id: 'AB', label: '[AB] Identificar mudanças importantes na posição de tribunais ou câmaras específicas sobre esse tema ao longo do tempo (tendência decisória).' },
            { id: 'AC', label: '[AC] Verificar se o processo citado na jurisprudência continua ativo e em qual estágio, para avaliar a robustez do precedente.' },
        ]
    },
    {
        id: 'contraparte',
        title: 'Contraparte e rastreio',
        subtitle: 'Investigue histórico, bens e vínculos da contraparte.',
        icon: Users,
        modalTitle: 'Contraparte e rastreio',
        modalDescription: 'Selecione o tipo de investigação que você quer fazer sobre a contraparte.',
        options: [
            { id: 'H', label: '[H] Rastrear bens da contraparte para fins de execução.' },
            { id: 'I', label: '[I] Rastrear endereços alternativos da contraparte para fins de citação.' },
            { id: 'J', label: '[J] Entender o volume de processos similares contra a mesma contraparte (análise de reputação).' },
            { id: 'U', label: '[U] Entender a saúde financeira da contraparte (ex.: falência, recuperação, inatividade) para avaliar viabilidade de ação ou acordo.' },
            { id: 'AA', label: '[AA] Mapear vínculos entre pessoas físicas e jurídicas citadas em processos diferentes (ex.: grupo econômico, sócios ocultos).' },
        ]
    }
];
