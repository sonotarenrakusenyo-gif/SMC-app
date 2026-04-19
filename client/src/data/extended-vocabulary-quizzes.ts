import { QuizQuestion } from "./quizzes";

export const EXTENDED_VOCABULARY_QUIZZES: QuizQuestion[] = [
  // Academic Word List (AWL) - Tier 1 & 2
  {
    id: "ev1",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The professor's _____ to the research was innovative and challenged traditional thinking.",
    options: [
      { id: "a", text: "approach", isCorrect: true },
      { id: "b", text: "attitude", isCorrect: false },
      { id: "c", text: "appearance", isCorrect: false },
      { id: "d", text: "approval", isCorrect: false },
    ],
    explanation:
      "「approach」（アプローチ、方法）が正解です。研究に対する方法論や手段を表します。\n\nEnglish: 'Approach' means a way of dealing with or thinking about something. In academic contexts, it refers to a methodology or strategy. 'Attitude' is a feeling or opinion, 'appearance' is how something looks, and 'approval' is permission or agreement.",
    hint: "研究の方法論や戦略を表す学術用語です。",
  },
  {
    id: "ev2",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The study _____ that regular exercise improves mental health significantly.",
    options: [
      { id: "a", text: "indicates", isCorrect: true },
      { id: "b", text: "ignores", isCorrect: false },
      { id: "c", text: "insists", isCorrect: false },
      { id: "d", text: "involves", isCorrect: false },
    ],
    explanation:
      "「indicates」（示唆する、指摘する）が正解です。研究結果が何かを示すという意味です。\n\nEnglish: 'Indicates' means to show, suggest, or point out evidence. In academic writing, it's used to present findings. 'Ignores' means to disregard, 'insists' means to demand firmly, and 'involves' means to include or require participation.",
    hint: "研究結果が何かを示すという意味の学術用語です。",
  },
  {
    id: "ev3",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of climate change on coastal communities is severe and requires immediate action.",
    options: [
      { id: "a", text: "impact", isCorrect: true },
      { id: "b", text: "import", isCorrect: false },
      { id: "c", text: "impart", isCorrect: false },
      { id: "d", text: "impulse", isCorrect: false },
    ],
    explanation:
      "「impact」（影響）が正解です。気候変動が沿岸地域に与える影響を表します。\n\nEnglish: 'Impact' refers to the effect or influence of something. In academic contexts, it describes consequences or outcomes. 'Import' means to bring in goods, 'impart' means to share or teach, and 'impulse' is a sudden urge.",
    hint: "～が～に与える影響を表す学術用語です。",
  },
  {
    id: "ev4",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The research _____ three main factors contributing to student success.",
    options: [
      { id: "a", text: "identifies", isCorrect: true },
      { id: "b", text: "identifies", isCorrect: true },
      { id: "c", text: "ignores", isCorrect: false },
      { id: "d", text: "imitates", isCorrect: false },
    ],
    explanation:
      "「identifies」（特定する、同定する）が正解です。研究が学生の成功に貢献する3つの主要な要因を特定したことを表します。\n\nEnglish: 'Identifies' means to recognize, determine, or point out specific elements. In research contexts, it indicates finding or discovering particular factors or patterns. 'Ignores' means to disregard, and 'imitates' means to copy.",
    hint: "研究が特定の要因を特定することを表す学術用語です。",
  },
  {
    id: "ev5",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The university has a strong _____ in promoting diversity and inclusion.",
    options: [
      { id: "a", text: "commitment", isCorrect: true },
      { id: "b", text: "committee", isCorrect: false },
      { id: "c", text: "community", isCorrect: false },
      { id: "d", text: "commerce", isCorrect: false },
    ],
    explanation:
      "「commitment」（コミットメント、約束）が正解です。大学が多様性と包括性の推進に対して持つ強い約束を表します。\n\nEnglish: 'Commitment' refers to a pledge or dedication to a cause or goal. In institutional contexts, it indicates organizational values and priorities. 'Committee' is a group, 'community' is a group of people, and 'commerce' is business.",
    hint: "機関や個人が何かに対して持つ強い約束を表します。",
  },
  {
    id: "ev6",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The data _____ that the new policy has been effective in reducing costs.",
    options: [
      { id: "a", text: "demonstrates", isCorrect: true },
      { id: "b", text: "demotes", isCorrect: false },
      { id: "c", text: "demolishes", isCorrect: false },
      { id: "d", text: "demands", isCorrect: false },
    ],
    explanation:
      "「demonstrates」（実証する、証明する）が正解です。データが新しいポリシーの有効性を証明することを表します。\n\nEnglish: 'Demonstrates' means to show clearly or prove through evidence. In academic writing, it indicates that data or evidence supports a claim. 'Demotes' means to reduce in rank, 'demolishes' means to destroy, and 'demands' means to require.",
    hint: "データや証拠が何かを証明することを表す学術用語です。",
  },
  {
    id: "ev7",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the research is to develop a new treatment for the disease.",
    options: [
      { id: "a", text: "objective", isCorrect: true },
      { id: "b", text: "object", isCorrect: false },
      { id: "c", text: "objection", isCorrect: false },
      { id: "d", text: "obligation", isCorrect: false },
    ],
    explanation:
      "「objective」（目的、目標）が正解です。研究の目的を表します。\n\nEnglish: 'Objective' as a noun means a goal or aim. In research contexts, it describes what the study intends to accomplish. 'Object' is a physical thing, 'objection' is a reason for disagreeing, and 'obligation' is a duty.",
    hint: "研究や計画の目的や目標を表す学術用語です。",
  },
  {
    id: "ev8",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The professor asked students to _____ their arguments with specific examples.",
    options: [
      { id: "a", text: "support", isCorrect: true },
      { id: "b", text: "suppress", isCorrect: false },
      { id: "c", text: "suppose", isCorrect: false },
      { id: "d", text: "supply", isCorrect: false },
    ],
    explanation:
      "「support」（支持する、裏付ける）が正解です。議論を具体例で裏付けることを表します。\n\nEnglish: 'Support' means to provide evidence or reasons for something. In academic writing, it means to back up claims with examples or data. 'Suppress' means to prevent, 'suppose' means to assume, and 'supply' means to provide.",
    hint: "議論や主張を証拠や例で裏付けることを表します。",
  },
  {
    id: "ev9",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ between the two studies is that one focused on urban areas while the other studied rural regions.",
    options: [
      { id: "a", text: "distinction", isCorrect: true },
      { id: "b", text: "distance", isCorrect: false },
      { id: "c", text: "distribution", isCorrect: false },
      { id: "d", text: "distraction", isCorrect: false },
    ],
    explanation:
      "「distinction」（区別、違い）が正解です。2つの研究の違いを表します。\n\nEnglish: 'Distinction' means a difference or contrast between things. In academic contexts, it highlights important differences between studies or concepts. 'Distance' is physical space, 'distribution' is spreading out, and 'distraction' is something that diverts attention.",
    hint: "2つのもの間の違いや区別を表す学術用語です。",
  },
  {
    id: "ev10",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the conference will focus on sustainable development and environmental protection.",
    options: [
      { id: "a", text: "theme", isCorrect: true },
      { id: "b", text: "theory", isCorrect: false },
      { id: "c", text: "therapy", isCorrect: false },
      { id: "d", text: "threat", isCorrect: false },
    ],
    explanation:
      "「theme」（テーマ、主題）が正解です。会議の主要なテーマを表します。\n\nEnglish: 'Theme' refers to the main subject or topic. In event contexts, it's the central idea or focus. 'Theory' is a system of ideas, 'therapy' is medical treatment, and 'threat' is a danger.",
    hint: "会議やイベントの主要なテーマを表します。",
  },

  // More Academic Vocabulary
  {
    id: "ev11",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The study _____ a significant correlation between sleep deprivation and academic performance.",
    options: [
      { id: "a", text: "revealed", isCorrect: true },
      { id: "b", text: "revolved", isCorrect: false },
      { id: "c", text: "revoked", isCorrect: false },
      { id: "d", text: "revised", isCorrect: false },
    ],
    explanation:
      "「revealed」（明らかにする、暴露する）が正解です。研究が睡眠不足と学業成績の間に有意な相関があることを明らかにしたことを表します。\n\nEnglish: 'Revealed' means to uncover or disclose something previously unknown. In research contexts, it indicates that findings show or expose a relationship. 'Revolved' means to rotate, 'revoked' means to cancel, and 'revised' means to change.",
    hint: "研究が何かを明らかにすることを表す学術用語です。",
  },
  {
    id: "ev12",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the new technology has transformed the way we communicate.",
    options: [
      { id: "a", text: "emergence", isCorrect: true },
      { id: "b", text: "emergency", isCorrect: false },
      { id: "c", text: "emigration", isCorrect: false },
      { id: "d", text: "emission", isCorrect: false },
    ],
    explanation:
      "「emergence」（出現、浮上）が正解です。新しい技術の出現がコミュニケーション方法を変えたことを表します。\n\nEnglish: 'Emergence' means the process of coming into view or becoming known. In technology contexts, it refers to the appearance of new innovations. 'Emergency' is an urgent situation, 'emigration' is leaving a country, and 'emission' is discharge.",
    hint: "新しい技術や現象の出現を表す学術用語です。",
  },
  {
    id: "ev13",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The professor's _____ on the subject matter was evident in her comprehensive lectures.",
    options: [
      { id: "a", text: "expertise", isCorrect: true },
      { id: "b", text: "experience", isCorrect: false },
      { id: "c", text: "experiment", isCorrect: false },
      { id: "d", text: "expression", isCorrect: false },
    ],
    explanation:
      "「expertise」（専門知識、専門技術）が正解です。教授の主題に関する深い知識を表します。\n\nEnglish: 'Expertise' refers to expert knowledge or specialized skill in a particular area. It indicates high-level competence and mastery. 'Experience' is general knowledge from doing things, 'experiment' is a scientific test, and 'expression' is a way of communicating.",
    hint: "特定の分野における専門的な知識や技術を表します。",
  },
  {
    id: "ev14",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the research findings suggests that further investigation is needed.",
    options: [
      { id: "a", text: "implication", isCorrect: true },
      { id: "b", text: "application", isCorrect: false },
      { id: "c", text: "appreciation", isCorrect: false },
      { id: "d", text: "approximation", isCorrect: false },
    ],
    explanation:
      "「implication」（含意、暗示）が正解です。研究結果が示唆する意味や結論を表します。\n\nEnglish: 'Implication' refers to a suggested or indirect meaning. In academic contexts, it indicates what findings suggest or point toward. 'Application' is practical use, 'appreciation' is gratitude, and 'approximation' is an estimate.",
    hint: "研究結果が示唆する意味や結論を表す学術用語です。",
  },
  {
    id: "ev15",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the policy was to reduce inequality in educational access.",
    options: [
      { id: "a", text: "intention", isCorrect: true },
      { id: "b", text: "invention", isCorrect: false },
      { id: "c", text: "intervention", isCorrect: false },
      { id: "d", text: "interaction", isCorrect: false },
    ],
    explanation:
      "「intention」（意図、目的）が正解です。ポリシーの目的を表します。\n\nEnglish: 'Intention' means the aim or purpose behind an action or policy. It indicates what was intended to be achieved. 'Invention' is a new creation, 'intervention' is interference or involvement, and 'interaction' is mutual influence.",
    hint: "ポリシーや行動の目的や意図を表します。",
  },
  {
    id: "ev16",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the two approaches resulted in a more comprehensive solution.",
    options: [
      { id: "a", text: "integration", isCorrect: true },
      { id: "b", text: "intimidation", isCorrect: false },
      { id: "c", text: "intoxication", isCorrect: false },
      { id: "d", text: "interruption", isCorrect: false },
    ],
    explanation:
      "「integration」（統合、融合）が正解です。2つのアプローチの統合がより包括的な解決策をもたらしたことを表します。\n\nEnglish: 'Integration' means the combining of different elements into a unified whole. In academic contexts, it refers to bringing together different approaches or ideas. 'Intimidation' is threatening, 'intoxication' is being drunk, and 'interruption' is breaking in.",
    hint: "異なる要素を統合することを表す学術用語です。",
  },
  {
    id: "ev17",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the study was limited to urban populations, which may affect generalizability.",
    options: [
      { id: "a", text: "scope", isCorrect: true },
      { id: "b", text: "scale", isCorrect: false },
      { id: "c", text: "score", isCorrect: false },
      { id: "d", text: "scene", isCorrect: false },
    ],
    explanation:
      "「scope」（範囲、対象範囲）が正解です。研究の対象範囲が都市人口に限定されていることを表します。\n\nEnglish: 'Scope' refers to the extent or range of something. In research, it indicates what is and isn't included in the study. 'Scale' is size or proportion, 'score' is a number of points, and 'scene' is a location or setting.",
    hint: "研究の対象範囲や規模を表す学術用語です。",
  },
  {
    id: "ev18",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the data was crucial for ensuring the validity of the conclusions.",
    options: [
      { id: "a", text: "accuracy", isCorrect: true },
      { id: "b", text: "activity", isCorrect: false },
      { id: "c", text: "acidity", isCorrect: false },
      { id: "d", text: "anxiety", isCorrect: false },
    ],
    explanation:
      "「accuracy」（正確性、精度）が正解です。データの正確性が結論の妥当性を確保するために重要であることを表します。\n\nEnglish: 'Accuracy' refers to the quality of being correct and precise. In research, it's essential for ensuring reliable findings. 'Activity' is action or movement, 'acidity' is the quality of being acidic, and 'anxiety' is worry.",
    hint: "データやの正確性や精度を表す学術用語です。",
  },
  {
    id: "ev19",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the research to real-world problems makes it valuable for practitioners.",
    options: [
      { id: "a", text: "relevance", isCorrect: true },
      { id: "b", text: "reverence", isCorrect: false },
      { id: "c", text: "reference", isCorrect: false },
      { id: "d", text: "resilience", isCorrect: false },
    ],
    explanation:
      "「relevance」（関連性、適切性）が正解です。研究が実世界の問題に対する関連性があることを表します。\n\nEnglish: 'Relevance' refers to the quality of being closely connected or appropriate to something. In academic contexts, it indicates how applicable findings are to practical situations. 'Reverence' is respect, 'reference' is a mention or source, and 'resilience' is ability to recover.",
    hint: "研究が実世界の問題にどの程度関連しているかを表します。",
  },
  {
    id: "ev20",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the participants in the study was voluntary and informed.",
    options: [
      { id: "a", text: "participation", isCorrect: true },
      { id: "b", text: "partition", isCorrect: false },
      { id: "c", text: "pardon", isCorrect: false },
      { id: "d", text: "parliament", isCorrect: false },
    ],
    explanation:
      "「participation」（参加）が正解です。研究参加者の参加が自発的で情報に基づいていたことを表します。\n\nEnglish: 'Participation' refers to the act of taking part in something. In research ethics, it emphasizes voluntary and informed involvement. 'Partition' is a division, 'pardon' is forgiveness, and 'parliament' is a legislative body.",
    hint: "研究参加者の参加を表す学術用語です。",
  },

  // Additional Academic Vocabulary
  {
    id: "ev21",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the findings across multiple studies strengthens the validity of the conclusion.",
    options: [
      { id: "a", text: "consistency", isCorrect: true },
      { id: "b", text: "consequence", isCorrect: false },
      { id: "c", text: "constitution", isCorrect: false },
      { id: "d", text: "construction", isCorrect: false },
    ],
    explanation:
      "「consistency」（一貫性、矛盾のなさ）が正解です。複数の研究における結果の一貫性が結論の妥当性を強化することを表します。\n\nEnglish: 'Consistency' refers to the quality of being uniform or in agreement. In research, it indicates that findings are reliable and reproducible across studies. 'Consequence' is a result, 'constitution' is a system of laws, and 'construction' is building.",
    hint: "複数の研究における結果の一貫性を表す学術用語です。",
  },
  {
    id: "ev22",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the research methodology was questioned by peer reviewers.",
    options: [
      { id: "a", text: "validity", isCorrect: true },
      { id: "b", text: "velocity", isCorrect: false },
      { id: "c", text: "vicinity", isCorrect: false },
      { id: "d", text: "victory", isCorrect: false },
    ],
    explanation:
      "「validity」（妥当性、有効性）が正解です。研究方法論の妥当性がピアレビューアーから質問されたことを表します。\n\nEnglish: 'Validity' refers to the quality of being sound, justified, or well-founded. In research, it indicates whether the methodology actually measures what it claims to measure. 'Velocity' is speed, 'vicinity' is nearby area, and 'victory' is winning.",
    hint: "研究方法論の妥当性や有効性を表す学術用語です。",
  },
  {
    id: "ev23",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the new policy on student retention rates was monitored closely.",
    options: [
      { id: "a", text: "effect", isCorrect: true },
      { id: "b", text: "effort", isCorrect: false },
      { id: "c", text: "affect", isCorrect: false },
      { id: "d", text: "afford", isCorrect: false },
    ],
    explanation:
      "「effect」（効果、影響）が正解です。新しいポリシーが学生の保持率に与える効果を表します。\n\nEnglish: 'Effect' (noun) means a result or consequence. In policy contexts, it refers to the impact or outcome. 'Effort' is hard work, 'affect' (verb) means to influence, and 'afford' means to have enough money.",
    hint: "ポリシーが何かに与える効果や影響を表します。",
  },
  {
    id: "ev24",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the literature review was to establish the theoretical framework for the study.",
    options: [
      { id: "a", text: "purpose", isCorrect: true },
      { id: "b", text: "pursuit", isCorrect: false },
      { id: "c", text: "purchase", isCorrect: false },
      { id: "d", text: "pressure", isCorrect: false },
    ],
    explanation:
      "「purpose」（目的、意図）が正解です。文献レビューの目的が研究の理論的枠組みを確立することであることを表します。\n\nEnglish: 'Purpose' means the reason for which something is done or exists. In academic writing, it clarifies the goal or intention. 'Pursuit' is the act of chasing, 'purchase' is buying, and 'pressure' is force.",
    hint: "文献レビューの目的や意図を表します。",
  },
  {
    id: "ev25",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ between theory and practice is often a challenge in educational settings.",
    options: [
      { id: "a", text: "gap", isCorrect: true },
      { id: "b", text: "gain", isCorrect: false },
      { id: "c", text: "gate", isCorrect: false },
      { id: "d", text: "gauge", isCorrect: false },
    ],
    explanation:
      "「gap」（隔たり、ギャップ）が正解です。理論と実践の間の隔たりが教育現場での課題であることを表します。\n\nEnglish: 'Gap' refers to a space or difference between things. In academic contexts, it indicates a disparity or disconnect between concepts or practices. 'Gain' is to obtain, 'gate' is an entrance, and 'gauge' is to measure.",
    hint: "理論と実践の間の隔たりを表す学術用語です。",
  },
  {
    id: "ev26",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the student population has become increasingly diverse over the past decade.",
    options: [
      { id: "a", text: "composition", isCorrect: true },
      { id: "b", text: "competition", isCorrect: false },
      { id: "c", text: "completion", isCorrect: false },
      { id: "d", text: "compensation", isCorrect: false },
    ],
    explanation:
      "「composition」（構成、組成）が正解です。学生人口の構成が過去10年間でますます多様になったことを表します。\n\nEnglish: 'Composition' refers to the way something is put together or made up. In demographic contexts, it indicates the makeup of a population. 'Competition' is rivalry, 'completion' is finishing, and 'compensation' is payment.",
    hint: "学生人口の構成や構造を表す学術用語です。",
  },
  {
    id: "ev27",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the research findings to other populations requires careful consideration.",
    options: [
      { id: "a", text: "generalization", isCorrect: true },
      { id: "b", text: "generation", isCorrect: false },
      { id: "c", text: "generosity", isCorrect: false },
      { id: "d", text: "generator", isCorrect: false },
    ],
    explanation:
      "「generalization」（一般化、一般的な結論）が正解です。研究結果を他の人口に一般化することが慎重な検討を必要とすることを表します。\n\nEnglish: 'Generalization' refers to a broad statement or conclusion drawn from specific instances. In research, it indicates extending findings to larger populations. 'Generation' is a group of people, 'generosity' is kindness, and 'generator' is a machine.",
    hint: "研究結果を他の人口に一般化することを表す学術用語です。",
  },
  {
    id: "ev28",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the study was to examine the relationship between variables.",
    options: [
      { id: "a", text: "focus", isCorrect: true },
      { id: "b", text: "force", isCorrect: false },
      { id: "c", text: "forest", isCorrect: false },
      { id: "d", text: "foreign", isCorrect: false },
    ],
    explanation:
      "「focus」（焦点、重点）が正解です。研究の焦点が変数間の関係を調べることであることを表します。\n\nEnglish: 'Focus' refers to the center of attention or interest. In research, it indicates the main subject or area of investigation. 'Force' is strength or power, 'forest' is trees, and 'foreign' is from another country.",
    hint: "研究の焦点や重点を表す学術用語です。",
  },
  {
    id: "ev29",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the findings suggests that intervention programs are effective.",
    options: [
      { id: "a", text: "magnitude", isCorrect: true },
      { id: "b", text: "management", isCorrect: false },
      { id: "c", text: "marriage", isCorrect: false },
      { id: "d", text: "margin", isCorrect: false },
    ],
    explanation:
      "「magnitude」（大きさ、規模）が正解です。結果の大きさや重要性が介入プログラムが有効であることを示唆することを表します。\n\nEnglish: 'Magnitude' refers to the size, extent, or importance of something. In research, it indicates the strength or significance of findings. 'Management' is administration, 'marriage' is union, and 'margin' is edge.",
    hint: "研究結果の大きさや重要性を表す学術用語です。",
  },
  {
    id: "ev30",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the study was to provide evidence-based recommendations for policy makers.",
    options: [
      { id: "a", text: "goal", isCorrect: true },
      { id: "b", text: "gold", isCorrect: false },
      { id: "c", text: "golf", isCorrect: false },
      { id: "d", text: "guilt", isCorrect: false },
    ],
    explanation:
      "「goal」（目標、ゴール）が正解です。研究の目標が政策立案者のための証拠に基づいた推奨事項を提供することであることを表します。\n\nEnglish: 'Goal' refers to the desired end result or objective. In research, it indicates what the study aims to achieve or accomplish. 'Gold' is a precious metal, 'golf' is a sport, and 'guilt' is a feeling of wrongdoing.",
    hint: "研究の最終的な目標や目的を表す学術用語です。",
  },
];
