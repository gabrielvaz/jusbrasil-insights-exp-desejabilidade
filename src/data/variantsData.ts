export interface VariantData {
    id: string;
    label: string;
    name: string;
    description: string;
    testCard: {
        evidence: string;
        hypothesis: string;
        verification: string;
        metrics: string;
        validationCriteria: string;
    };
}

export const COMMON_SUBOPTIONS = {
    similarity: [
        "Confirmar similaridade entre processos",
        "Identificar argumentos bem-sucedidos em casos semelhantes",
        "Identificar argumentos bem-sucedidos em casos da mesma contraparte",
        "Identificar a tese central do conflito em casos parecidos",
        "Acompanhar o desenvolvimento de casos similares ao meu"
    ],
    strategy: [
        "Entender pedidos feitos em processos semelhantes",
        "Entender pedidos feitos em processos semelhantes contra a mesma contraparte",
        "Identificar pedidos mais eficientes e comuns",
        "Avaliar valor da causa em casos semelhantes"
    ],
    validity: [
        "Validar se a decisão foi mantida, modificada ou anulada",
        "Ver tendências de entendimento no tribunal ao longo do tempo",
        "Verificar status atual do processo citado e robustez do precedente"
    ],
    counterpart: [
        "Rastrear bens da contraparte",
        "Rastrear endereços alternativos",
        "Ver histórico processual e reputacional",
        "Entender saúde financeira da contraparte",
        "Mapear vínculos com outras pessoas físicas ou jurídicas"
    ]
};

export const VARIANTS_DATA: VariantData[] = [
    {
        id: 'v1',
        label: 'V1',
        name: 'Variante 1: Minimalista',
        description: 'Banner minimalista em linha + modal em lista simples',
        testCard: {
            evidence: "Usuários relatam sobrecarga cognitiva com interfaces densas e preferem listas de verificação rápidas para tarefas rotineiras.",
            hypothesis: "Acreditamos que usar elementos visuais mínimos e listas verticais simples reduzirá a distração e aumentará a velocidade de seleção.",
            verification: "Para verificar isso, vamos apresentar um banner discreto apenas com texto/ícone pequeno e um modal com checklist padrão.",
            metrics: "E mediremos isso com o tempo médio para completar uma seleção e a taxa de rejeição do modal.",
            validationCriteria: "Consideramos que a hipótese está validada se o tempo de tarefa for 20% menor que a média atual."
        }
    },
    {
        id: 'v2',
        label: 'V2',
        name: 'Variante 2: Cards & Tabs',
        description: 'Banner com ícones grandes estilo cards + modal com tabs internas',
        testCard: {
            evidence: "Advogados visuais tendem a engajar mais com áreas de clique grandes e categorização clara por abas para não perder o contexto.",
            hypothesis: "Acreditamos que cards grandes no banner e abas no modal facilitarão a descoberta de funcionalidades e a navegação entre categorias sem fechar o modal.",
            verification: "Para verificar isso, vamos usar cards destacados no topo e um modal que permite alternar entre 'Similaridade', 'Estratégia' etc. via abas.",
            metrics: "E mediremos isso com o número de alternâncias de abas por sessão e cliques totais nos cards do banner.",
            validationCriteria: "Consideramos que a hipótese está validada se 40% dos usuários navegarem por mais de uma categoria na mesma sessão."
        }
    },
    {
        id: 'v3',
        label: 'V3',
        name: 'Variante 3: Pills & Grid',
        description: 'Banner em formato de pílulas segmentadas + modal em grid (grade)',
        testCard: {
            evidence: "Interfaces mobile-first com 'chips' são familiares, e grids permitem visualização panorâmica de muitas opções simultâneas.",
            hypothesis: "Acreditamos que pílulas de acesso rápido e um layout de grade no modal permitirão uma varredura visual (skimming) mais eficiente das opções.",
            verification: "Para verificar isso, vamos implementar botões tipo 'pill' e organizar as subopções em colunas (grid) dentro do modal.",
            metrics: "E mediremos isso com a taxa de clique em opções posicionadas visualmente mais abaixo na grade (scroll depth visual).",
            validationCriteria: "Consideramos que a hipótese está validada se a distribuição de cliques for uniforme entre as opções do grid."
        }
    },
    {
        id: 'v4',
        label: 'V4',
        name: 'Variante 4: Sticky & Cards',
        description: 'Barra fixa superior ao rolar + modal em cards detalhados',
        testCard: {
            evidence: "Usuários perdem o contexto das ferramentas de pesquisa ao rolar documentos longos de jurisprudência.",
            hypothesis: "Acreditamos que manter o banner fixo no topo durante a leitura e usar cards detalhados no modal aumentará o uso contextual das ferramentas.",
            verification: "Para verificar isso, vamos fixar a barra de ferramentas no topo da janela ao rolar e usar cards com títulos grandes no modal.",
            metrics: "E mediremos isso com a taxa de ativação das ferramentas após 50% de scroll da página.",
            validationCriteria: "Consideramos que a hipótese está validada se o uso das ferramentas aumentar em 30% durante a leitura profunda (scroll > 50%)."
        }
    },
    {
        id: 'v5',
        label: 'V5',
        name: 'Variante 5: Accordion',
        description: 'Banner em formato de acordeão expandível + modal com accordion interno',
        testCard: {
            evidence: "O excesso de informação aberta compete com a leitura da decisão; usuários preferem expandir detalhes apenas sob demanda.",
            hypothesis: "Acreditamos que o uso de acordeões (expandir/colapsar) tanto no banner quanto no modal manterá a interface limpa e focada.",
            verification: "Para verificar isso, vamos esconder as descrições no banner e subopções no modal dentro de elementos colapsáveis.",
            metrics: "E mediremos isso com a frequência de expansão das seções e o tempo de permanência na página (menos poluição).",
            validationCriteria: "Consideramos que a hipótese está validada se a percepção de 'limpeza' da interface aumentar nos feedbacks qualitativos."
        }
    },
    // Placeholders for V6-V8 if needed to keep button layout consistent
    { id: 'v6', label: 'V6', name: 'Variante 6', description: 'Placeholder', testCard: { evidence: '', hypothesis: '', verification: '', metrics: '', validationCriteria: '' } },
    { id: 'v7', label: 'V7', name: 'Variante 7', description: 'Placeholder', testCard: { evidence: '', hypothesis: '', verification: '', metrics: '', validationCriteria: '' } },
    { id: 'v8', label: 'V8', name: 'Variante 8', description: 'Placeholder', testCard: { evidence: '', hypothesis: '', verification: '', metrics: '', validationCriteria: '' } },
];
