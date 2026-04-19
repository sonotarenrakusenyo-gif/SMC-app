export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  translation?: string; // Japanese translation of the option (shown in explanation)
}

export interface VocabularyItem {
  word: string;
  meaning: string;
  katakanaReading?: string; // Katakana reading of the word
  example?: string;
}

export interface GrammarPoint {
  rule: string;
  explanation: string;
  example?: string;
}

export interface SpeakingPractice {
  readingInstructions: string; // e.g., "この文を5回音読してください"
  phraseReplacements: {
    original: string;
    instruction: string;
    examples: string[];
  }[];
  dailyConversationTips: string;
}

export interface QuizQuestion {
  id: string;
  category: "grammar" | "vocabulary" | "reading";
  difficulty: "beginner" | "intermediate" | "advanced";
  question: string;
  questionTranslation?: string;
  questionKatakana?: string;
  options: QuizOption[];
  explanation: string;
  vocabularyItems?: VocabularyItem[];
  grammarPoints?: GrammarPoint[];
  speakingPractice?: SpeakingPractice;
  hint?: string;
}

export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  questionCount: number;
}

// Quiz Data for SMC ESL Intermediate Level (ESL 903/904)

export const QUIZ_CATEGORIES: QuizCategory[] = [
  {
    id: "grammar",
    name: "文法",
    description: "動詞の時制、助動詞、文構造をマスター",
    icon: "📝",
    color: "from-blue-400 to-blue-600",
    questionCount: 60, // 初級20 + 中級20 + 上級20
  },
  {
    id: "vocabulary",
    name: "語彙",
    description: "学術的・社会的な文脈の語彙を習得",
    icon: "📚",
    color: "from-green-400 to-green-600",
    questionCount: 60, // 初級20 + 中級20 + 上級20
  },
  {
    id: "reading",
    name: "読解",
    description: "読解力と推論スキルを向上させる",
    icon: "👁️",
    color: "from-purple-400 to-purple-600",
    questionCount: 60, // 初級20 + 中級20 + 上級20
  },
];


export const GRAMMAR_QUIZZES: QuizQuestion[] = [
  {
    id: "g1",
    category: "grammar",
    difficulty: "intermediate",
    question: "If I _____ you were coming, I would have prepared dinner.",
    options: [
      { id: "a", text: "knew", isCorrect: false },
      { id: "b", text: "had known", isCorrect: true },
      { id: "c", text: "know", isCorrect: false },
      { id: "d", text: "would know", isCorrect: false },
    ],
    explanation:
      "This is a mixed conditional (past condition with present result). Use 'had known' (past perfect) in the if-clause to show the condition was not met in the past.",
    hint: "Think about what tense you need when talking about something that didn't happen in the past.",
  },
  {
    id: "g2",
    category: "grammar",
    difficulty: "intermediate",
    question: "She _____ working here for five years before she got promoted.",
    options: [
      { id: "a", text: "has been", isCorrect: false },
      { id: "b", text: "had been", isCorrect: true },
      { id: "c", text: "was", isCorrect: false },
      { id: "d", text: "is", isCorrect: false },
    ],
    explanation:
      "Use past perfect continuous ('had been') to show an action that started in the past and continued up to another past event (getting promoted).",
    hint: "The promotion happened in the past. What tense shows an action that continued up to that point?",
  },
  {
    id: "g3",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "You _____ submit your assignment by Friday, or you will lose points.",
    options: [
      { id: "a", text: "must", isCorrect: true },
      { id: "b", text: "can", isCorrect: false },
      { id: "c", text: "might", isCorrect: false },
      { id: "d", text: "could", isCorrect: false },
    ],
    explanation:
      "'Must' expresses a strong obligation or requirement. 'Can' shows ability, 'might' shows possibility, and 'could' shows past ability or polite possibility.",
    hint: "Which modal shows a strong requirement or obligation?",
  },
  {
    id: "g4",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The student _____ the assignment because he didn't understand the instructions.",
    options: [
      { id: "a", text: "couldn't complete", isCorrect: true },
      { id: "b", text: "can't complete", isCorrect: false },
      { id: "c", text: "won't complete", isCorrect: false },
      { id: "d", text: "shouldn't complete", isCorrect: false },
    ],
    explanation:
      "Use 'couldn't' (past form of 'can't') to show inability in the past. The reason given ('didn't understand') indicates a past event.",
    hint: "The sentence talks about something that happened in the past. Which form shows past inability?",
  },
  {
    id: "g5",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "Although she _____ very tired, she decided to attend the meeting.",
    options: [
      { id: "a", text: "was", isCorrect: true },
      { id: "b", text: "is", isCorrect: false },
      { id: "c", text: "were", isCorrect: false },
      { id: "d", text: "has been", isCorrect: false },
    ],
    explanation:
      "Use simple past 'was' to match the past tense of 'decided.' The subject 'she' requires 'was' (not 'were').",
    hint: "Look at the verb 'decided' - what tense is it? Match that tense for the first verb.",
  },
  {
    id: "g6",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The manager asked if we _____ the project on time next week.",
    options: [
      { id: "a", text: "could complete", isCorrect: true },
      { id: "b", text: "can complete", isCorrect: false },
      { id: "c", text: "will complete", isCorrect: false },
      { id: "d", text: "would complete", isCorrect: false },
    ],
    explanation:
      "In reported speech after 'asked,' use 'could' (past form of 'can') to show ability. This is the correct form for indirect questions about possibility.",
    hint: "This is reported speech. The main verb 'asked' is past, so the reported verb should be in a past form.",
  },
  {
    id: "g7",
    category: "grammar",
    difficulty: "intermediate",
    question: "Neither the teacher nor the students _____ ready for the exam.",
    options: [
      { id: "a", text: "was", isCorrect: false },
      { id: "b", text: "were", isCorrect: true },
      { id: "c", text: "is", isCorrect: false },
      { id: "d", text: "are", isCorrect: false },
    ],
    explanation:
      "With 'neither...nor,' the verb agrees with the nearest subject. 'Students' (plural) is nearest, so use 'were.'",
    hint: "In 'neither...nor' constructions, which subject is closest to the verb?",
  },
  {
    id: "g8",
    category: "grammar",
    difficulty: "intermediate",
    question: "By the time you arrive, I _____ dinner.",
    options: [
      { id: "a", text: "will finish", isCorrect: false },
      { id: "b", text: "will have finished", isCorrect: true },
      { id: "c", text: "finish", isCorrect: false },
      { id: "d", text: "have finished", isCorrect: false },
    ],
    explanation:
      "Use future perfect 'will have finished' to show an action that will be completed before another future action (your arrival).",
    hint: "One action will be finished before another future action. Which tense shows this?",
  },
  {
    id: "g9",
    category: "grammar",
    difficulty: "intermediate",
    question: "The committee _____ divided on the proposal.",
    options: [
      { id: "a", text: "is", isCorrect: true },
      { id: "b", text: "are", isCorrect: false },
      { id: "c", text: "was", isCorrect: false },
      { id: "d", text: "were", isCorrect: false },
    ],
    explanation:
      "'Committee' is a collective noun that takes a singular verb when treated as a single unit. Use 'is' (present singular).",
    hint: "Is 'committee' acting as one group or as individuals?",
  },
  {
    id: "g10",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "I wish I _____ more time to study for the test last week.",
    options: [
      { id: "a", text: "had", isCorrect: true },
      { id: "b", text: "have", isCorrect: false },
      { id: "c", text: "had had", isCorrect: false },
      { id: "d", text: "would have", isCorrect: false },
    ],
    explanation:
      "Use 'had' (simple past) after 'I wish' to express a regret about the past. This is a common structure for expressing unfulfilled wishes about past situations.",
    hint: "When expressing regret about the past with 'I wish,' use simple past tense.",
  },
];

export const VOCABULARY_QUIZZES: QuizQuestion[] = [
  {
    id: "v1",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The manager decided to _____ the meeting because of the urgent situation.",
    options: [
      { id: "a", text: "postpone", isCorrect: true },
      { id: "b", text: "cancel", isCorrect: false },
      { id: "c", text: "attend", isCorrect: false },
      { id: "d", text: "schedule", isCorrect: false },
    ],
    explanation:
      "'Postpone' means to delay or reschedule for a later time. 'Cancel' means to stop completely. Since the situation is urgent, postponing (delaying) makes more sense than canceling.",
    hint: "Which word means to delay something to a later time?",
  },
  {
    id: "v2",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The professor's _____ on the subject was very helpful for our research.",
    options: [
      { id: "a", text: "expertise", isCorrect: true },
      { id: "b", text: "experience", isCorrect: false },
      { id: "c", text: "experiment", isCorrect: false },
      { id: "d", text: "expression", isCorrect: false },
    ],
    explanation:
      "'Expertise' refers to expert knowledge or skill in a particular area. 'Experience' is broader and means general knowledge from doing things. 'Experiment' is a scientific test, and 'expression' means a way of communicating.",
    hint: "What word means specialized knowledge or skill?",
  },
  {
    id: "v3",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ between the two countries was resolved through diplomatic negotiations.",
    options: [
      { id: "a", text: "conflict", isCorrect: true },
      { id: "b", text: "agreement", isCorrect: false },
      { id: "c", text: "alliance", isCorrect: false },
      { id: "d", text: "treaty", isCorrect: false },
    ],
    explanation:
      "'Conflict' means a disagreement or dispute. 'Agreement' is when parties reach the same conclusion. 'Alliance' is a partnership, and 'treaty' is a formal agreement. The context shows a problem that was resolved, so 'conflict' is correct.",
    hint: "Which word means a disagreement or dispute?",
  },
  {
    id: "v4",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The new policy will _____ the company's productivity significantly.",
    options: [
      { id: "a", text: "enhance", isCorrect: true },
      { id: "b", text: "reduce", isCorrect: false },
      { id: "c", text: "maintain", isCorrect: false },
      { id: "d", text: "ignore", isCorrect: false },
    ],
    explanation:
      "'Enhance' means to improve or increase. 'Reduce' means to decrease. 'Maintain' means to keep the same. 'Ignore' means to not pay attention. The context suggests improvement, so 'enhance' is correct.",
    hint: "Which word means to improve or make better?",
  },
  {
    id: "v5",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "Her _____ to succeed in the program was evident from her hard work.",
    options: [
      { id: "a", text: "commitment", isCorrect: true },
      { id: "b", text: "committee", isCorrect: false },
      { id: "c", text: "comment", isCorrect: false },
      { id: "d", text: "common", isCorrect: false },
    ],
    explanation:
      "'Commitment' means dedication or promise to do something. 'Committee' is a group of people. 'Comment' is a remark, and 'common' is an adjective meaning shared. The context shows dedication, so 'commitment' is correct.",
    hint: "Which word means dedication or promise?",
  },
  {
    id: "v6",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The student's _____ to the rules caused problems in the classroom.",
    options: [
      { id: "a", text: "compliance", isCorrect: false },
      { id: "b", text: "defiance", isCorrect: true },
      { id: "c", text: "confidence", isCorrect: false },
      { id: "d", text: "confusion", isCorrect: false },
    ],
    explanation:
      "'Defiance' means refusal to obey or resist authority. 'Compliance' means following rules. 'Confidence' is self-assurance, and 'confusion' is lack of understanding. The context shows rule-breaking, so 'defiance' is correct.",
    hint: "Which word means refusal to obey or resist authority?",
  },
  {
    id: "v7",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The company's _____ to environmental sustainability impressed many investors.",
    options: [
      { id: "a", text: "dedication", isCorrect: true },
      { id: "b", text: "decision", isCorrect: false },
      { id: "c", text: "description", isCorrect: false },
      { id: "d", text: "decoration", isCorrect: false },
    ],
    explanation:
      "'Dedication' means commitment or devotion to a cause. 'Decision' is a choice. 'Description' is an account of something. 'Decoration' is ornament. The context shows commitment to a cause, so 'dedication' is correct.",
    hint: "Which word means commitment or devotion to a cause?",
  },
  {
    id: "v8",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the new technology will change how we work.",
    options: [
      { id: "a", text: "implementation", isCorrect: true },
      { id: "b", text: "implication", isCorrect: false },
      { id: "c", text: "importance", isCorrect: false },
      { id: "d", text: "impression", isCorrect: false },
    ],
    explanation:
      "'Implementation' means putting a plan or system into action. 'Implication' is a consequence or suggestion. 'Importance' is significance. 'Impression' is a feeling or belief. The context shows putting technology into action, so 'implementation' is correct.",
    hint: "Which word means putting a plan into action?",
  },
  {
    id: "v9",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ between her words and actions made people doubt her sincerity.",
    options: [
      { id: "a", text: "contradiction", isCorrect: true },
      { id: "b", text: "contrast", isCorrect: false },
      { id: "c", text: "contribution", isCorrect: false },
      { id: "d", text: "construction", isCorrect: false },
    ],
    explanation:
      "'Contradiction' means a conflict or inconsistency between things. 'Contrast' is a comparison of differences. 'Contribution' is a gift or addition. 'Construction' is building. The context shows inconsistency, so 'contradiction' is correct.",
    hint: "Which word means an inconsistency or conflict?",
  },
  {
    id: "v10",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the project depends on everyone's cooperation.",
    options: [
      { id: "a", text: "success", isCorrect: true },
      { id: "b", text: "sequence", isCorrect: false },
      { id: "c", text: "section", isCorrect: false },
      { id: "d", text: "security", isCorrect: false },
    ],
    explanation:
      "'Success' means achieving a goal or positive outcome. 'Sequence' is an order of events. 'Section' is a part of something. 'Security' is safety or protection. The context shows achieving a goal, so 'success' is correct.",
    hint: "Which word means achieving a goal or positive outcome?",
  },
];

export const READING_QUIZZES: QuizQuestion[] = [
  {
    id: "r1",
    category: "reading",
    difficulty: "intermediate",
    question:
      "Passage: 'Remote work has become increasingly popular in recent years. Many companies have discovered that employees can be productive from home, and workers appreciate the flexibility and reduced commute time. However, some challenges remain, such as maintaining team cohesion and ensuring proper work-life balance.'\n\nWhat is the main idea of this passage?",
    options: [
      { id: "a", text: "Remote work is always better than office work", isCorrect: false },
      { id: "b", text: "Remote work has both advantages and challenges", isCorrect: true },
      { id: "c", text: "Companies should never allow remote work", isCorrect: false },
      { id: "d", text: "Employees prefer commuting to work", isCorrect: false },
    ],
    explanation:
      "The passage presents both positive aspects (productivity, flexibility) and challenges (team cohesion, work-life balance), showing a balanced view of remote work.",
    hint: "Look for the overall message, not just one detail.",
  },
  {
    id: "r2",
    category: "reading",
    difficulty: "intermediate",
    question:
      "Passage: 'Climate change is causing rising sea levels, which threatens coastal communities. Scientists predict that without significant action, many islands and low-lying areas could be submerged within the next century.'\n\nWhat does 'submerged' mean in this context?",
    options: [
      { id: "a", text: "Covered with water", isCorrect: true },
      { id: "b", text: "Moved to a different location", isCorrect: false },
      { id: "c", text: "Developed with new technology", isCorrect: false },
      { id: "d", text: "Protected by barriers", isCorrect: false },
    ],
    explanation:
      "'Submerged' means covered or immersed in water. In this context, it refers to islands and areas being covered by rising sea levels.",
    hint: "Think about what happens when water levels rise.",
  },
  {
    id: "r3",
    category: "reading",
    difficulty: "intermediate",
    question:
      "Passage: 'The invention of the printing press by Johannes Gutenberg in the 15th century revolutionized the spread of information. Before this invention, books were copied by hand, making them rare and expensive. The printing press made books more accessible to the general population, which contributed to increased literacy rates and the spread of new ideas.'\n\nWhat was the primary effect of the printing press?",
    options: [
      { id: "a", text: "It made handwriting obsolete", isCorrect: false },
      { id: "b", text: "It made books more accessible and increased literacy", isCorrect: true },
      { id: "c", text: "It was invented by Johannes Gutenberg alone", isCorrect: false },
      { id: "d", text: "It prevented the spread of new ideas", isCorrect: false },
    ],
    explanation:
      "The passage clearly states that the printing press made books more accessible and contributed to increased literacy rates and the spread of ideas.",
    hint: "What changed after the printing press was invented?",
  },
  {
    id: "r4",
    category: "reading",
    difficulty: "intermediate",
    question:
      "Passage: 'Renewable energy sources like solar and wind power are becoming increasingly important as we face climate change. Unlike fossil fuels, renewable energy does not produce greenhouse gases. However, the initial cost of installing renewable energy systems is high, which can be a barrier for many communities.'\n\nWhat is a disadvantage of renewable energy mentioned in the passage?",
    options: [
      { id: "a", text: "It produces greenhouse gases", isCorrect: false },
      { id: "b", text: "It is not becoming more important", isCorrect: false },
      { id: "c", text: "The initial installation cost is high", isCorrect: true },
      { id: "d", text: "It is only available in certain countries", isCorrect: false },
    ],
    explanation:
      "The passage explicitly states that 'the initial cost of installing renewable energy systems is high, which can be a barrier for many communities.'",
    hint: "Look for what the passage identifies as a problem or barrier.",
  },
  {
    id: "r5",
    category: "reading",
    difficulty: "intermediate",
    question:
      "Passage: 'Social media has transformed how people communicate and share information. While it has enabled people to connect globally and organize social movements, it has also led to the spread of misinformation and increased anxiety among users.'\n\nWhat can be inferred from this passage?",
    options: [
      { id: "a", text: "Social media is entirely positive", isCorrect: false },
      { id: "b", text: "Social media has both positive and negative effects", isCorrect: true },
      { id: "c", text: "Social media should be banned", isCorrect: false },
      { id: "d", text: "People do not use social media to communicate", isCorrect: false },
    ],
    explanation:
      "The passage presents both benefits (global connection, organizing movements) and drawbacks (misinformation, anxiety), showing a balanced perspective.",
    hint: "What overall impression does the passage give about social media?",
  },
  {
    id: "r6",
    category: "reading",
    difficulty: "intermediate",
    question:
      "Passage: 'Exercise is one of the most effective ways to improve both physical and mental health. Regular physical activity strengthens the heart, improves flexibility, and reduces the risk of chronic diseases. Additionally, exercise releases endorphins, which are chemicals that improve mood and reduce stress.'\n\nAccording to the passage, why does exercise improve mental health?",
    options: [
      { id: "a", text: "It strengthens the heart", isCorrect: false },
      { id: "b", text: "It improves flexibility", isCorrect: false },
      { id: "c", text: "It releases endorphins that improve mood and reduce stress", isCorrect: true },
      { id: "d", text: "It reduces the risk of chronic diseases", isCorrect: false },
    ],
    explanation:
      "The passage states that 'exercise releases endorphins, which are chemicals that improve mood and reduce stress,' which explains how exercise improves mental health.",
    hint: "Look for the sentence that specifically explains mental health benefits.",
  },
  {
    id: "r7",
    category: "reading",
    difficulty: "intermediate",
    question:
      "Passage: 'Artificial intelligence (AI) is rapidly advancing and has applications in many fields, from healthcare to finance. In healthcare, AI can help diagnose diseases more accurately and quickly than human doctors. However, some people worry about job displacement and the ethical implications of AI decision-making.'\n\nWhat is the author's tone in this passage?",
    options: [
      { id: "a", text: "Entirely positive about AI", isCorrect: false },
      { id: "b", text: "Entirely negative about AI", isCorrect: false },
      { id: "c", text: "Balanced, presenting both benefits and concerns", isCorrect: true },
      { id: "d", text: "Confused about AI applications", isCorrect: false },
    ],
    explanation:
      "The author presents both positive aspects (accurate diagnosis) and concerns (job displacement, ethical issues), showing a balanced perspective.",
    hint: "Does the author only present positive or negative information?",
  },
  {
    id: "r8",
    category: "reading",
    difficulty: "intermediate",
    question:
      "Passage: 'The Amazon rainforest is often called the 'lungs of the Earth' because it produces about 20% of the world's oxygen. It is also home to millions of species of plants and animals. However, deforestation is destroying this vital ecosystem at an alarming rate.'\n\nWhat does the metaphor 'lungs of the Earth' suggest?",
    options: [
      { id: "a", text: "The rainforest is a living organism", isCorrect: false },
      { id: "b", text: "The rainforest is essential for the planet's survival", isCorrect: true },
      { id: "c", text: "The rainforest produces only oxygen", isCorrect: false },
      { id: "d", text: "The rainforest is located in the center of Earth", isCorrect: false },
    ],
    explanation:
      "The metaphor compares the rainforest to lungs, suggesting it is essential for the planet's survival, just as lungs are essential for human survival.",
    hint: "What is the purpose of lungs? How does this compare to the rainforest?",
  },
  {
    id: "r9",
    category: "reading",
    difficulty: "intermediate",
    question:
      "Passage: 'Bilingual education has been shown to have numerous benefits for students. Research indicates that bilingual students often have better cognitive flexibility, improved problem-solving skills, and better performance in other academic subjects. Additionally, bilingualism opens doors to more career opportunities.'\n\nWhat is the author's purpose in writing this passage?",
    options: [
      { id: "a", text: "To criticize bilingual education", isCorrect: false },
      { id: "b", text: "To inform readers about the benefits of bilingual education", isCorrect: true },
      { id: "c", text: "To argue that all students should be bilingual", isCorrect: false },
      { id: "d", text: "To explain how to teach bilingual students", isCorrect: false },
    ],
    explanation:
      "The passage presents research and benefits of bilingual education, with the clear purpose of informing readers about its advantages.",
    hint: "What is the main goal of the passage?",
  },
  {
    id: "r10",
    category: "reading",
    difficulty: "intermediate",
    question:
      "Passage: 'The Great Wall of China was built over many centuries by different dynasties. It was constructed to protect against invasions from the north and to control trade along the Silk Road. Today, it is one of the most famous landmarks in the world and attracts millions of tourists annually.'\n\nWhat were two original purposes of the Great Wall?",
    options: [
      { id: "a", text: "To attract tourists and serve as a landmark", isCorrect: false },
      { id: "b", text: "To protect against invasions and control trade", isCorrect: true },
      { id: "c", text: "To provide housing and create jobs", isCorrect: false },
      { id: "d", text: "To demonstrate architectural skills only", isCorrect: false },
    ],
    explanation:
      "The passage clearly states that the Great Wall was 'constructed to protect against invasions from the north and to control trade along the Silk Road.'",
    hint: "Look for the sentence that explains why the Great Wall was built.",
  },
];

// 高品質な5項目解説（英語問題＋日本語解説）を持つファイルのみを使用
import { vocabularyQuizzes } from "./vocabulary-final";
import { vocabularyQuizzesComplete } from "./vocabulary-quizzes-complete";
import { readingQuizzes } from "./reading-final";
// レベル別文法問題
import { grammarBeginnerQuizzes } from "./grammar-beginner";
import { grammarIntermediateNewQuizzes } from "./grammar-intermediate-new";
import { grammarAdvancedQuizzes } from "./grammar-advanced";
// レベル別語彙問題
import { vocabularyBeginnerQuizzes } from "./vocabulary-beginner";
import { vocabularyIntermediateNewQuizzes } from "./vocabulary-intermediate-new";
import { vocabularyAdvancedQuizzes } from "./vocabulary-advanced";
// レベル別読解問題
import { readingBeginnerQuizzes } from "./reading-beginner";
import { readingIntermediateNewQuizzes } from "./reading-intermediate-new";
import { readingAdvancedQuizzes } from "./reading-advanced";

// ── 文法：60問（初級20・中級20・上級20）────────────────────
// 中級は grammar-intermediate-new のみ（5項目日本語解説で20問）
const ALL_GRAMMAR: QuizQuestion[] = [
  ...grammarBeginnerQuizzes, // 20問（初級）
  ...grammarIntermediateNewQuizzes, // 20問（中級）
  ...grammarAdvancedQuizzes, // 20問（上級）
];

// ── 語彙：60問（初級20・中級20・上級20）────────────────────
// 既存の中級8問に difficulty: "intermediate" を付加して統合
const vocabularyIntermediateExisting: QuizQuestion[] = [
  ...vocabularyQuizzes,         // 5問 (vocab-001〜005)
  ...vocabularyQuizzesComplete, // 3問 (vocab_001〜003)
].map((q) => ({ ...q, difficulty: "intermediate" as const }));

const ALL_VOCABULARY: QuizQuestion[] = [
  ...vocabularyBeginnerQuizzes,        // 20問（初級）
  ...vocabularyIntermediateExisting,   // 8問（中級・既存）
  ...vocabularyIntermediateNewQuizzes, // 12問（中級・新規）
  ...vocabularyAdvancedQuizzes,        // 20問（上級）
];

// ── 読解：60問（初級20・中級20・上級20）────────────────────
// 既存の中級5問に difficulty: "intermediate" を付加して統合
const readingIntermediateExisting: QuizQuestion[] = [
  ...readingQuizzes, // 5問 (reading-001〜005)
].map((q) => ({ ...q, difficulty: "intermediate" as const }));

const ALL_READING: QuizQuestion[] = [
  ...readingBeginnerQuizzes,        // 20問（初級）
  ...readingIntermediateExisting,   // 5問（中級・既存）
  ...readingIntermediateNewQuizzes, // 15問（中級・新規）
  ...readingAdvancedQuizzes,        // 20問（上級）
];

export const getAllQuizzes = (): QuizQuestion[] => {
  return [...ALL_GRAMMAR, ...ALL_VOCABULARY, ...ALL_READING];
};

/**
 * カテゴリー（＋オプションでレベル）によって問題を絞り込む
 * level を省略した場合は全レベルを返す
 */
export const getQuizzesByCategory = (
  category: "grammar" | "vocabulary" | "reading",
  level?: "beginner" | "intermediate" | "advanced"
): QuizQuestion[] => {
  let questions: QuizQuestion[];
  switch (category) {
    case "grammar":
      questions = ALL_GRAMMAR;
      break;
    case "vocabulary":
      questions = ALL_VOCABULARY;
      break;
    case "reading":
      questions = ALL_READING;
      break;
    default:
      return [];
  }
  if (level) {
    return questions.filter((q) => q.difficulty === level);
  }
  return questions;
};

/** カテゴリー・レベルごとの問題数を返す */
export const getQuestionCount = (
  category: "grammar" | "vocabulary" | "reading",
  level?: "beginner" | "intermediate" | "advanced"
): number => getQuizzesByCategory(category, level).length;
