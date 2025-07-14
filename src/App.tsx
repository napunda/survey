import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Award,
  Code,
  Database,
  Shield,
  BarChart3,
  Cog,
  TestTube,
  Users,
  Briefcase,
  ArrowRight,
  Heart,
} from "lucide-react";
import type { AnswersState, OptionAreas } from "./store/quiz";
import { questions, questionsSocial } from "./store/quiz";

type QuizType = "tech" | "social";

const CareerQuiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizType | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<AnswersState>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  const areas = {
    frontend: {
      name: "Frontend Development",
      icon: <Code className="w-8 h-8 text-blue-500" />,
      description:
        "Você tem perfil para desenvolvimento Frontend! Sua paixão por criar interfaces atrativas e experiências de usuário excepcionais te destaca nesta área.",
      skills: "HTML, CSS, JavaScript, React, Vue, Angular, TypeScript",
      career:
        "Você pode atuar como Frontend Developer, UI Developer, ou evoluir para Tech Lead Frontend.",
      color: "bg-blue-50 border-blue-200",
    },
    backend: {
      name: "Backend Development",
      icon: <Database className="w-8 h-8 text-green-500" />,
      description:
        "Você tem perfil para desenvolvimento Backend! Sua habilidade para resolver problemas complexos e criar arquiteturas robustas é seu diferencial.",
      skills:
        "Java, Python, Node.js, APIs REST, Microserviços, Bancos de dados",
      career:
        "Você pode atuar como Backend Developer, API Developer, ou evoluir para Arquiteto de Software.",
      color: "bg-green-50 border-green-200",
    },
    devops: {
      name: "DevOps Engineering",
      icon: <Cog className="w-8 h-8 text-purple-500" />,
      description:
        "Você tem perfil para DevOps! Sua paixão por automatizar processos e otimizar infraestrutura te coloca nesta área em crescimento.",
      skills: "Docker, Kubernetes, AWS, CI/CD, Jenkins, Terraform, Linux",
      career:
        "Você pode atuar como DevOps Engineer, Cloud Engineer, ou evoluir para Cloud Architect.",
      color: "bg-purple-50 border-purple-200",
    },
    data: {
      name: "Ciência de Dados",
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      description:
        "Você tem perfil para Ciência de Dados! Sua capacidade analítica e interesse em descobrir insights valiosos te destacam nesta área.",
      skills:
        "Python, R, SQL, Machine Learning, Estatística, Tableau, Power BI",
      career:
        "Você pode atuar como Data Analyst, Data Scientist, ou evoluir para Data Engineer.",
      color: "bg-orange-50 border-orange-200",
    },
    qa: {
      name: "Quality Assurance",
      icon: <TestTube className="w-8 h-8 text-red-500" />,
      description:
        "Você tem perfil para Quality Assurance! Sua atenção aos detalhes e paixão pela qualidade são fundamentais nesta área.",
      skills:
        "Selenium, Cypress, Jest, Testes automatizados, JIRA, Metodologias ágeis",
      career:
        "Você pode atuar como QA Tester, QA Analyst, ou evoluir para QA Lead.",
      color: "bg-red-50 border-red-200",
    },
    database: {
      name: "Banco de Dados",
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      description:
        "Você tem perfil para especialização em Bancos de Dados! Sua habilidade com dados e estruturas é seu diferencial.",
      skills:
        "SQL, NoSQL, MySQL, PostgreSQL, MongoDB, Redis, Performance tuning",
      career:
        "Você pode atuar como Database Administrator, Data Engineer, ou evoluir para Database Architect.",
      color: "bg-indigo-50 border-indigo-200",
    },
    ux: {
      name: "UX/UI Design",
      icon: <Users className="w-8 h-8 text-pink-500" />,
      description:
        "Você tem perfil para UX/UI Design! Sua preocupação com a experiência do usuário e design intuitivo te destaca nesta área.",
      skills:
        "Figma, Adobe XD, Prototipação, User Research, Design Systems, Usabilidade",
      career:
        "Você pode atuar como UX Designer, UI Designer, ou evoluir para Product Designer.",
      color: "bg-pink-50 border-pink-200",
    },
  };

  const getCurrentQuestions = () => {
    return selectedQuiz === "tech" ? questions : questionsSocial;
  };

  const handleAnswer = (questionId: number, selectedOptionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOptionIndex,
    }));
  };

  const calculateResult = () => {
    const scores: OptionAreas = {
      frontend: 0,
      backend: 0,
      devops: 0,
      data: 0,
      qa: 0,
      database: 0,
      ux: 0,
    };

    const currentQuestions = getCurrentQuestions();

    Object.entries(answers).forEach(([questionId, optionIndex]) => {
      const question = currentQuestions.find(
        (q) => q.id === parseInt(questionId)
      );
      if (question && question.options[optionIndex]) {
        const selectedOption = question.options[optionIndex];
        Object.entries(selectedOption.areas).forEach(([area, points]) => {
          if (scores[area as keyof OptionAreas] !== undefined && points) {
            scores[area as keyof OptionAreas] =
              (scores[area as keyof OptionAreas] || 0) + points;
          }
        });
      }
    });

    const topArea = Object.entries(scores).reduce((a, b) =>
      (scores[a[0] as keyof OptionAreas] || 0) >
      (scores[b[0] as keyof OptionAreas] || 0)
        ? a
        : b
    )[0];

    return { topArea, scores };
  };

  const nextQuestion = () => {
    const currentQuestions = getCurrentQuestions();
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion((curr) => curr + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((curr) => curr - 1);
    }
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const startQuiz = (quizType: QuizType) => {
    setSelectedQuiz(quizType);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  // Tela de seleção de formulário
  if (!selectedQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Briefcase className="w-16 h-16 text-indigo-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Descobra Sua Área Ideal em Tech
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Escolha o tipo de avaliação que melhor se adapta ao seu perfil e
                descubra qual área da tecnologia combina mais com você.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Quiz Técnico */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-6">
                  <Code className="w-12 h-12 text-blue-600 mr-4" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Avaliação Técnica
                    </h2>
                    <p className="text-blue-600 font-medium">
                      Foco em habilidades e preferências técnicas
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Esta avaliação foca nas suas preferências técnicas,
                    linguagens de programação, ferramentas e metodologias que
                    você mais se identifica.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Linguagens de programação favoritas
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Ferramentas e tecnologias
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Metodologias de trabalho
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => startQuiz("tech")}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center group"
                >
                  Começar Avaliação Técnica
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Quiz Social */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-6">
                  <Heart className="w-12 h-12 text-pink-600 mr-4" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Avaliação Social
                    </h2>
                    <p className="text-pink-600 font-medium">
                      Foco em soft skills e trabalho em equipe
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Esta avaliação analisa suas habilidades sociais, forma de
                    trabalhar em equipe e como você se relaciona com diferentes
                    tipos de projetos.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                      Estilo de comunicação
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                      Trabalho em equipe
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                      Resolução de problemas
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => startQuiz("social")}
                  className="w-full bg-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-pink-700 transition-colors flex items-center justify-center group"
                >
                  Começar Avaliação Social
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                💡 Dica: Você pode fazer ambas as avaliações para ter uma visão
                mais completa do seu perfil profissional
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestions = getCurrentQuestions();
  const currentQ = currentQuestions[currentQuestion];
  const selectedAnswerIndex = answers[currentQ.id];

  if (showResult) {
    const { topArea, scores } = calculateResult();
    const result = areas[topArea as keyof typeof areas];

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Award className="w-16 h-16 text-yellow-500" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Resultado da Sua Avaliação{" "}
                {selectedQuiz === "tech" ? "Técnica" : "Social"}
              </h1>
              <p className="text-gray-600">
                Com base nas suas respostas, identificamos sua área ideal!
              </p>
            </div>

            <div className={`rounded-xl p-6 border-2 ${result.color} mb-8`}>
              <div className="flex items-center mb-4">
                {result.icon}
                <h2 className="text-2xl font-bold ml-3 text-gray-800">
                  {result.name}
                </h2>
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {result.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Tecnologias Principais
                  </h3>
                  <p className="text-gray-600">{result.skills}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Perspectivas de Carreira
                  </h3>
                  <p className="text-gray-600">{result.career}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-800 mb-4">
                Sua Pontuação por Área:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(scores).map(([area, score]) => (
                  <div key={area} className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">
                      {score || 0}
                    </div>
                    <div className="text-sm text-gray-600 capitalize">
                      {areas[area as keyof typeof areas].name.split(" ")[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={resetQuiz}
                className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Voltar ao Início
              </button>
              <button
                onClick={() =>
                  startQuiz(selectedQuiz === "tech" ? "social" : "tech")
                }
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Fazer Avaliação {selectedQuiz === "tech" ? "Social" : "Técnica"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                {selectedQuiz === "tech" ? (
                  <Code className="w-8 h-8 text-blue-600 mr-3" />
                ) : (
                  <Heart className="w-8 h-8 text-pink-600 mr-3" />
                )}
                <h1 className="text-2xl font-bold text-gray-800">
                  Avaliação {selectedQuiz === "tech" ? "Técnica" : "Social"}
                </h1>
              </div>
              <div className="text-sm text-gray-500">
                {currentQuestion + 1} de {currentQuestions.length}
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedQuiz === "tech" ? "bg-blue-600" : "bg-pink-600"
                }`}
                style={{
                  width: `${
                    ((currentQuestion + 1) / currentQuestions.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {currentQ.question}
            </h2>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQ.id, index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswerIndex === index
                      ? selectedQuiz === "tech"
                        ? "border-blue-500 bg-blue-50 text-blue-800"
                        : "border-pink-500 bg-pink-50 text-pink-800"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                        selectedAnswerIndex === index
                          ? selectedQuiz === "tech"
                            ? "border-blue-500 bg-blue-500"
                            : "border-pink-500 bg-pink-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedAnswerIndex === index && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="font-medium">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentQuestion === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Anterior
            </button>

            <button
              onClick={resetQuiz}
              className="px-6 py-3 rounded-lg font-semibold bg-gray-500 text-white hover:bg-gray-600 transition-colors"
            >
              Voltar ao Início
            </button>

            <button
              onClick={nextQuestion}
              disabled={selectedAnswerIndex === undefined}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedAnswerIndex === undefined
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : selectedQuiz === "tech"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-pink-600 text-white hover:bg-pink-700"
              }`}
            >
              {currentQuestion === currentQuestions.length - 1
                ? "Ver Resultado"
                : "Próxima"}
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerQuiz;
