export const questions: Question[] = [
  {
    id: 1,
    question: "Qual tipo de problema você mais gosta de resolver?",
    options: [
      {
        text: "Criar interfaces visuais atrativas",
        areas: { frontend: 3, ux: 2 },
      },
      {
        text: "Otimizar performance de sistemas",
        areas: { backend: 3, devops: 2 },
      },
      {
        text: "Analisar dados para insights",
        areas: { data: 3, backend: 1 },
      },
      { text: "Automatizar processos", areas: { devops: 3, backend: 2 } },
      {
        text: "Garantir qualidade de software",
        areas: { qa: 3, backend: 1 },
      },
    ],
  },
  {
    id: 2,
    question: "Em um projeto em equipe, qual papel você prefere assumir?",
    options: [
      {
        text: "Liderar a arquitetura técnica",
        areas: { backend: 3, devops: 2 },
      },
      {
        text: "Cuidar da experiência do usuário",
        areas: { frontend: 3, ux: 3 },
      },
      {
        text: "Gerenciar dados e relatórios",
        areas: { data: 3, database: 2 },
      },
      {
        text: "Coordenar deploys e infraestrutura",
        areas: { devops: 3, backend: 1 },
      },
      { text: "Validar funcionalidades", areas: { qa: 3, backend: 1 } },
    ],
  },
  {
    id: 3,
    question: "Qual tecnologia despertou mais seu interesse durante o curso?",
    options: [
      { text: "HTML, CSS, JavaScript", areas: { frontend: 3, ux: 1 } },
      { text: "Java, Python, C#", areas: { backend: 3, data: 1 } },
      { text: "SQL, NoSQL, Modelagem", areas: { database: 3, backend: 2 } },
      { text: "Docker, Kubernetes, AWS", areas: { devops: 3, backend: 1 } },
      {
        text: "Power BI, Tableau, Analytics",
        areas: { data: 3, database: 1 },
      },
    ],
  },
  {
    id: 4,
    question: "Como você prefere trabalhar?",
    options: [
      { text: "Criando protótipos visuais", areas: { frontend: 3, ux: 2 } },
      {
        text: "Desenvolvendo lógica complexa",
        areas: { backend: 3, data: 2 },
      },
      {
        text: "Automatizando tarefas repetitivas",
        areas: { devops: 3, qa: 2 },
      },
      {
        text: "Analisando padrões em dados",
        areas: { data: 3, database: 2 },
      },
      { text: "Testando cenários diversos", areas: { qa: 3, backend: 1 } },
    ],
  },
  {
    id: 5,
    question: "Qual aspecto de um sistema você considera mais importante?",
    options: [
      { text: "Interface intuitiva e bonita", areas: { frontend: 3, ux: 3 } },
      {
        text: "Performance e escalabilidade",
        areas: { backend: 3, devops: 2 },
      },
      {
        text: "Segurança e confiabilidade",
        areas: { backend: 2, devops: 3 },
      },
      { text: "Qualidade e ausência de bugs", areas: { qa: 3, backend: 1 } },
      {
        text: "Insights valiosos dos dados",
        areas: { data: 3, database: 1 },
      },
    ],
  },
  {
    id: 6,
    question: "Qual ambiente de trabalho você prefere?",
    options: [
      { text: "Criativo e visual", areas: { frontend: 3, ux: 2 } },
      { text: "Técnico e estruturado", areas: { backend: 3, database: 2 } },
      { text: "Dinâmico e colaborativo", areas: { devops: 2, qa: 3 } },
      { text: "Analítico e investigativo", areas: { data: 3, qa: 2 } },
      { text: "Focado em otimização", areas: { devops: 3, backend: 2 } },
    ],
  },
  {
    id: 7,
    question: "Qual tipo de desafio mais te motiva?",
    options: [
      { text: "Criar experiências incríveis", areas: { frontend: 3, ux: 3 } },
      {
        text: "Resolver problemas complexos",
        areas: { backend: 3, data: 2 },
      },
      { text: "Melhorar processos existentes", areas: { devops: 3, qa: 2 } },
      { text: "Descobrir insights ocultos", areas: { data: 3, database: 2 } },
      { text: "Garantir zero defeitos", areas: { qa: 3, backend: 1 } },
    ],
  },
  {
    id: 8,
    question: "Como você gosta de aprender novas tecnologias?",
    options: [
      { text: "Criando projetos visuais", areas: { frontend: 3, ux: 2 } },
      {
        text: "Estudando documentação técnica",
        areas: { backend: 3, database: 2 },
      },
      { text: "Praticando automação", areas: { devops: 3, qa: 2 } },
      { text: "Analisando casos reais", areas: { data: 3, qa: 2 } },
      {
        text: "Experimentando ferramentas",
        areas: { devops: 2, backend: 2 },
      },
    ],
  },
  {
    id: 9,
    question: "Qual resultado final te dá mais satisfação?",
    options: [
      {
        text: "Ver usuários usando sua interface",
        areas: { frontend: 3, ux: 3 },
      },
      {
        text: "Sistema funcionando perfeitamente",
        areas: { backend: 3, devops: 2 },
      },
      {
        text: "Relatórios com insights valiosos",
        areas: { data: 3, database: 1 },
      },
      {
        text: "Deploy automatizado e confiável",
        areas: { devops: 3, backend: 1 },
      },
      { text: "Software livre de bugs", areas: { qa: 3, backend: 1 } },
    ],
  },
  {
    id: 10,
    question: "Qual ferramenta você tem mais curiosidade em dominar?",
    options: [
      { text: "React, Vue, Angular", areas: { frontend: 3, ux: 1 } },
      { text: "Spring, Django, Node.js", areas: { backend: 3, data: 1 } },
      {
        text: "Jenkins, GitLab CI, Azure DevOps",
        areas: { devops: 3, qa: 1 },
      },
      { text: "Selenium, Cypress, Jest", areas: { qa: 3, frontend: 1 } },
      { text: "Pandas, R, Tableau", areas: { data: 3, database: 1 } },
    ],
  },
  {
    id: 11,
    question: "Qual tipo de documentação você prefere criar?",
    options: [
      {
        text: "Guias de estilo e componentes",
        areas: { frontend: 3, ux: 2 },
      },
      { text: "Arquitetura de sistemas", areas: { backend: 3, devops: 2 } },
      { text: "Processos de deploy", areas: { devops: 3, backend: 1 } },
      { text: "Casos de teste", areas: { qa: 3, backend: 1 } },
      { text: "Análises de dados", areas: { data: 3, database: 1 } },
    ],
  },
  {
    id: 12,
    question: "Qual métrica você considera mais importante acompanhar?",
    options: [
      { text: "Experiência do usuário", areas: { frontend: 3, ux: 3 } },
      { text: "Performance da aplicação", areas: { backend: 3, devops: 2 } },
      { text: "Uptime e disponibilidade", areas: { devops: 3, backend: 2 } },
      { text: "Taxa de bugs encontrados", areas: { qa: 3, backend: 1 } },
      { text: "Insights e conversões", areas: { data: 3, frontend: 1 } },
    ],
  },
  {
    id: 13,
    question: "Como você aborda a resolução de problemas?",
    options: [
      {
        text: "Focando na experiência visual",
        areas: { frontend: 3, ux: 3 },
      },
      { text: "Analisando logs e dados", areas: { backend: 3, data: 2 } },
      {
        text: "Verificando infraestrutura",
        areas: { devops: 3, backend: 2 },
      },
      { text: "Reproduzindo cenários", areas: { qa: 3, backend: 1 } },
      { text: "Investigando padrões", areas: { data: 3, qa: 2 } },
    ],
  },
  {
    id: 14,
    question: "Qual tipo de projeto mais te empolgaria?",
    options: [
      { text: "E-commerce com UX inovadora", areas: { frontend: 3, ux: 3 } },
      {
        text: "Sistema de alta performance",
        areas: { backend: 3, devops: 2 },
      },
      { text: "Plataforma de analytics", areas: { data: 3, database: 2 } },
      {
        text: "Pipeline de CI/CD completo",
        areas: { devops: 3, backend: 1 },
      },
      { text: "Framework de testes", areas: { qa: 3, backend: 2 } },
    ],
  },
  {
    id: 15,
    question: "Qual skill você mais quer desenvolver?",
    options: [
      { text: "Design responsivo avançado", areas: { frontend: 3, ux: 2 } },
      {
        text: "Arquitetura de microserviços",
        areas: { backend: 3, devops: 2 },
      },
      { text: "Machine Learning", areas: { data: 3, backend: 1 } },
      { text: "Kubernetes e containers", areas: { devops: 3, backend: 1 } },
      { text: "Automação de testes", areas: { qa: 3, devops: 2 } },
    ],
  },
  {
    id: 16,
    question: "Qual certificação te interessaria mais?",
    options: [
      { text: "Google UX Design", areas: { frontend: 2, ux: 3 } },
      { text: "AWS Solutions Architect", areas: { backend: 2, devops: 3 } },
      {
        text: "Microsoft Azure Data Scientist",
        areas: { data: 3, database: 1 },
      },
      { text: "Kubernetes Administrator", areas: { devops: 3, backend: 1 } },
      { text: "ISTQB Testing", areas: { qa: 3, backend: 1 } },
    ],
  },
  {
    id: 17,
    question:
      "Qual linguagem/tecnologia você tem mais interesse em se especializar?",
    options: [
      {
        text: "TypeScript e frameworks front",
        areas: { frontend: 3, ux: 1 },
      },
      {
        text: "Java ou Python para backends",
        areas: { backend: 3, data: 2 },
      },
      {
        text: "Go ou Rust para performance",
        areas: { backend: 2, devops: 3 },
      },
      { text: "R ou Python para dados", areas: { data: 3, database: 1 } },
      { text: "Ferramentas de automação", areas: { devops: 3, qa: 2 } },
    ],
  },
  {
    id: 18,
    question: "Qual tipo de empresa você preferiria trabalhar?",
    options: [
      { text: "Agência digital focada em UX", areas: { frontend: 3, ux: 3 } },
      {
        text: "Fintech com sistemas complexos",
        areas: { backend: 3, devops: 2 },
      },
      { text: "Startup data-driven", areas: { data: 3, backend: 1 } },
      {
        text: "Empresa de cloud computing",
        areas: { devops: 3, backend: 2 },
      },
      { text: "Consultoria de qualidade", areas: { qa: 3, backend: 1 } },
    ],
  },
  {
    id: 19,
    question: "Qual aspecto da carreira mais te atrai?",
    options: [
      {
        text: "Impacto direto na experiência do usuário",
        areas: { frontend: 3, ux: 3 },
      },
      {
        text: "Resolver desafios técnicos complexos",
        areas: { backend: 3, data: 2 },
      },
      {
        text: "Otimizar e automatizar processos",
        areas: { devops: 3, qa: 2 },
      },
      {
        text: "Descobrir insights em dados",
        areas: { data: 3, database: 2 },
      },
      {
        text: "Garantir qualidade e confiabilidade",
        areas: { qa: 3, devops: 2 },
      },
    ],
  },
  {
    id: 20,
    question: "Como você se vê daqui a 5 anos?",
    options: [
      { text: "Especialista em UX/UI", areas: { frontend: 3, ux: 3 } },
      { text: "Arquiteto de software", areas: { backend: 3, devops: 2 } },
      { text: "Cientista de dados", areas: { data: 3, database: 1 } },
      { text: "DevOps Engineer", areas: { devops: 3, backend: 1 } },
      { text: "QA Lead", areas: { qa: 3, backend: 1 } },
    ],
  },
];

export const personalityQuestions: Question[] = [
  {
    id: 1,
    question: "Como você lida com problemas no dia a dia?",
    options: [
      { text: "Analiso antes de agir", areas: { data: 2, backend: 1 } },
      {
        text: "Tento resolver de forma criativa",
        areas: { frontend: 2, ux: 1 },
      },
      {
        text: "Crio formas de evitar que aconteça de novo",
        areas: { devops: 2, qa: 1 },
      },
    ],
  },
  {
    id: 2,
    question: "Como você costuma agir em trabalhos em grupo?",
    options: [
      {
        text: "Organizo e acompanho o progresso",
        areas: { devops: 2, backend: 1 },
      },
      { text: "Crio ideias e protótipos", areas: { frontend: 2, ux: 2 } },
      { text: "Testo e procuro erros", areas: { qa: 2, data: 1 } },
    ],
  },
  {
    id: 3,
    question: "O que te dá mais satisfação ao concluir uma tarefa?",
    options: [
      {
        text: "Ver que ficou bonito e funcional",
        areas: { frontend: 2, ux: 2 },
      },
      {
        text: "Garantir que funcione bem por dentro",
        areas: { backend: 2, devops: 1 },
      },
      { text: "Ver sentido nos resultados", areas: { data: 2, database: 1 } },
    ],
  },
  {
    id: 4,
    question: "O que mais te motiva em um projeto?",
    options: [
      { text: "Impactar o usuário final", areas: { frontend: 2, ux: 2 } },
      { text: "Resolver desafios complexos", areas: { backend: 2, data: 1 } },
      { text: "Melhorar o processo como um todo", areas: { devops: 2, qa: 1 } },
    ],
  },
  {
    id: 5,
    question: "Quando algo dá errado, você tende a...",
    options: [
      { text: "Tentar entender o motivo", areas: { qa: 2, data: 1 } },
      {
        text: "Ajustar a experiência para ser mais fácil",
        areas: { ux: 2, frontend: 1 },
      },
      {
        text: "Criar algo que evite o erro no futuro",
        areas: { devops: 2, backend: 1 },
      },
    ],
  },
  {
    id: 6,
    question: "Como você define sucesso em um trabalho?",
    options: [
      { text: "Usuário satisfeito", areas: { frontend: 2, ux: 2 } },
      { text: "Solução eficiente e segura", areas: { backend: 2, devops: 1 } },
      { text: "Dados bem interpretados", areas: { data: 2, database: 1 } },
    ],
  },
  {
    id: 7,
    question: "Como você gosta de resolver problemas?",
    options: [
      { text: "Testando possibilidades", areas: { qa: 2, devops: 1 } },
      { text: "Com lógica e análise", areas: { backend: 2, data: 1 } },
      { text: "Experimentando com a aparência", areas: { frontend: 2, ux: 1 } },
    ],
  },
  {
    id: 8,
    question: "Qual dessas frases combina mais com você?",
    options: [
      {
        text: "Gosto de deixar as coisas organizadas",
        areas: { qa: 2, devops: 1 },
      },
      { text: "Sou curioso e observador", areas: { data: 2, ux: 1 } },
      { text: "Crio com foco no visual", areas: { frontend: 2, ux: 2 } },
    ],
  },
  {
    id: 9,
    question: "Quando você vê um aplicativo novo, você repara mais em...",
    options: [
      { text: "Design e aparência", areas: { frontend: 2, ux: 2 } },
      { text: "Funcionalidade e desempenho", areas: { backend: 2, devops: 1 } },
      {
        text: "O que dá para aprender com os dados",
        areas: { data: 2, qa: 1 },
      },
    ],
  },
  {
    id: 10,
    question: "Você se considera mais...",
    options: [
      { text: "Criativo e visual", areas: { frontend: 2, ux: 2 } },
      { text: "Analítico e estruturado", areas: { backend: 2, data: 1 } },
      { text: "Cuidadoso e detalhista", areas: { qa: 2, devops: 1 } },
    ],
  },
];

export const styleQuestions: Question[] = [
  {
    id: 11,
    question: "Como você aprende melhor?",
    options: [
      { text: "Vendo exemplos e vídeos", areas: { frontend: 2, ux: 1 } },
      { text: "Lendo e refletindo", areas: { backend: 2, data: 1 } },
      { text: "Fazendo testes e experimentos", areas: { qa: 2, devops: 1 } },
    ],
  },
  {
    id: 12,
    question: "Você prefere tarefas que são...",
    options: [
      { text: "Criativas e visuais", areas: { frontend: 2, ux: 2 } },
      { text: "Complexas e analíticas", areas: { backend: 2, data: 2 } },
      { text: "Organizadas e metódicas", areas: { qa: 2, devops: 2 } },
    ],
  },
  {
    id: 13,
    question: "Ao estudar, você gosta mais de...",
    options: [
      {
        text: "Criar algo para testar o que aprendeu",
        areas: { frontend: 2, backend: 1 },
      },
      { text: "Analisar resultados e padrões", areas: { data: 2, qa: 1 } },
      {
        text: "Seguir um passo a passo técnico",
        areas: { devops: 2, backend: 1 },
      },
    ],
  },
  {
    id: 14,
    question: "Qual ambiente te faz render mais?",
    options: [
      { text: "Ambiente criativo e dinâmico", areas: { frontend: 2, ux: 1 } },
      { text: "Ambiente calmo e técnico", areas: { backend: 2, database: 1 } },
      { text: "Ambiente com desafios práticos", areas: { qa: 2, devops: 2 } },
    ],
  },
  {
    id: 15,
    question: "Você prefere trabalhar com...",
    options: [
      { text: "Coisas que o usuário vê", areas: { frontend: 2, ux: 2 } },
      { text: "Lógica que o usuário não vê", areas: { backend: 2, devops: 1 } },
      { text: "Testes e confiabilidade", areas: { qa: 2, data: 1 } },
    ],
  },
  {
    id: 16,
    question: "Quando está aprendendo algo novo, você...",
    options: [
      { text: "Gosta de testar visualmente", areas: { frontend: 2, ux: 1 } },
      {
        text: "Lê sobre o funcionamento primeiro",
        areas: { backend: 2, data: 1 },
      },
      { text: "Vai direto para a prática", areas: { devops: 2, qa: 1 } },
    ],
  },
];

export const techInterestQuestions: Question[] = [
  {
    id: 17,
    question: "Você já ficou curioso sobre...",
    options: [
      {
        text: "Como sites e apps são desenhados",
        areas: { frontend: 2, ux: 2 },
      },
      {
        text: "Como programas entendem comandos",
        areas: { backend: 2, data: 1 },
      },
      {
        text: "Como as coisas funcionam por trás dos sistemas",
        areas: { devops: 2, backend: 1 },
      },
    ],
  },
  {
    id: 18,
    question: "Se pudesse escolher um tipo de projeto para começar hoje...",
    options: [
      { text: "Um app com interface bonita", areas: { frontend: 2, ux: 2 } },
      {
        text: "Um sistema com lógica por trás",
        areas: { backend: 2, data: 1 },
      },
      { text: "Uma automação de algo repetitivo", areas: { devops: 2, qa: 1 } },
    ],
  },
  {
    id: 19,
    question: "Qual dessas atividades te parece mais interessante?",
    options: [
      { text: "Criar a tela de um aplicativo", areas: { frontend: 2, ux: 2 } },
      { text: "Pensar na lógica de um jogo", areas: { backend: 2, data: 1 } },
      {
        text: "Ver como os sistemas se comunicam",
        areas: { devops: 2, qa: 1 },
      },
    ],
  },
  {
    id: 20,
    question:
      "Se tivesse que escolher uma habilidade para desenvolver primeiro...",
    options: [
      {
        text: "Deixar um app bonito e intuitivo",
        areas: { frontend: 2, ux: 2 },
      },
      {
        text: "Entender como funciona por trás",
        areas: { backend: 2, devops: 1 },
      },
      {
        text: "Melhorar a qualidade e os testes",
        areas: { qa: 2, backend: 1 },
      },
    ],
  },
];

export const questionsSocial: Question[] = [
  ...personalityQuestions,
  ...styleQuestions,
  ...techInterestQuestions,
];

export interface OptionAreas {
  frontend?: number;
  backend?: number;
  devops?: number;
  data?: number;
  qa?: number;
  database?: number;
  ux?: number;
}

export interface QuestionOption {
  text: string;
  areas: OptionAreas;
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}

export interface AnswersState {
  [key: number]: number;
}
