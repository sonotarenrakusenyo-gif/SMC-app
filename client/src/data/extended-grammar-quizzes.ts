import { QuizQuestion } from "./quizzes";

export const EXTENDED_GRAMMAR_QUIZZES: QuizQuestion[] = [
  // Present Perfect (現在完了)
  {
    id: "eg1",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "I _____ this book three times already. It's my favorite novel.",
    options: [
      { id: "a", text: "read", isCorrect: false },
      { id: "b", text: "have read", isCorrect: true },
      { id: "c", text: "had read", isCorrect: false },
      { id: "d", text: "am reading", isCorrect: false },
    ],
    explanation:
      "現在完了形（have read）を使用します。「すでに3回読んだ」という過去から現在までの経験を表します。\n\nEnglish: Use present perfect (have read) to express an experience that started in the past and continues to have relevance in the present. The adverb 'already' signals that the action is complete but recent.",
    hint: "「すでに」という表現は、現在完了形とよく一緒に使われます。",
  },
  {
    id: "eg2",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "She _____ in this city for five years, and she plans to stay longer.",
    options: [
      { id: "a", text: "lives", isCorrect: false },
      { id: "b", text: "has lived", isCorrect: true },
      { id: "c", text: "lived", isCorrect: false },
      { id: "d", text: "is living", isCorrect: false },
    ],
    explanation:
      "現在完了形（has lived）を使用します。過去から現在まで継続している状態を表します。\n\nEnglish: Use present perfect (has lived) to indicate an action that began in the past and continues to the present. The duration 'for five years' emphasizes the ongoing nature of the situation.",
    hint: "「5年間ずっと住んでいる」という継続を表すには、現在完了形を使います。",
  },
  {
    id: "eg3",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "By the time you arrive, I _____ dinner for two hours.",
    options: [
      { id: "a", text: "will have been cooking", isCorrect: true },
      { id: "b", text: "will be cooking", isCorrect: false },
      { id: "c", text: "have been cooking", isCorrect: false },
      { id: "d", text: "am cooking", isCorrect: false },
    ],
    explanation:
      "未来完了進行形（will have been cooking）を使用します。あなたが到着する時点までに、2時間ずっと料理をしていることになります。\n\nEnglish: Use future perfect continuous (will have been cooking) to show an action that will be ongoing up to a specific point in the future. This tense emphasizes both the duration and the continuation of the action.",
    hint: "未来のある時点までに、どのくらいの期間その行動が続いているかを表します。",
  },
  {
    id: "eg4",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The students _____ their assignments before the deadline yesterday.",
    options: [
      { id: "a", text: "have submitted", isCorrect: false },
      { id: "b", text: "had submitted", isCorrect: true },
      { id: "c", text: "submitted", isCorrect: false },
      { id: "d", text: "were submitting", isCorrect: false },
    ],
    explanation:
      "過去完了形（had submitted）を使用します。昨日の締め切りより前に提出が完了していたことを表します。\n\nEnglish: Use past perfect (had submitted) to show that one past action was completed before another past action. The deadline is the reference point, and the submission happened before that point.",
    hint: "過去の2つの出来事があるとき、より前に起きたことを表します。",
  },
  {
    id: "eg5",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "She _____ working on this project since last month and hasn't finished yet.",
    options: [
      { id: "a", text: "has been", isCorrect: true },
      { id: "b", text: "is", isCorrect: false },
      { id: "c", text: "was", isCorrect: false },
      { id: "d", text: "had been", isCorrect: false },
    ],
    explanation:
      "現在完了進行形（has been）を使用します。先月から現在まで継続している進行中の作業を表します。\n\nEnglish: Use present perfect continuous (has been) to indicate an action that started in the past and is still ongoing. The phrase 'since last month' shows the starting point of the continuous action.",
    hint: "「先月からずっと～している」という継続を表します。",
  },

  // Relative Pronouns (関係代名詞)
  {
    id: "eg6",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The professor _____ teaches this course is known for his challenging exams.",
    options: [
      { id: "a", text: "which", isCorrect: false },
      { id: "b", text: "who", isCorrect: true },
      { id: "c", text: "whose", isCorrect: false },
      { id: "d", text: "whom", isCorrect: false },
    ],
    explanation:
      "関係代名詞「who」を使用します。教授（人）を修飾するため、「who」が適切です。\n\nEnglish: Use the relative pronoun 'who' to refer to people. 'Which' is used for things, and 'whom' is the object form of 'who' (rarely used in modern English). Here, 'who' is the subject of the relative clause.",
    hint: "人を修飾する関係代名詞は「who」です。",
  },
  {
    id: "eg7",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The research paper _____ I submitted last week was about climate change.",
    options: [
      { id: "a", text: "that", isCorrect: true },
      { id: "b", text: "which", isCorrect: true },
      { id: "c", text: "who", isCorrect: false },
      { id: "d", text: "where", isCorrect: false },
    ],
    explanation:
      "関係代名詞「that」または「which」を使用します。論文（物）を修飾し、「I submitted」の目的語となります。\n\nEnglish: Both 'that' and 'which' can be used here as they refer to things. In this case, the relative pronoun is the object of the relative clause ('I submitted [the paper]'). 'That' is more common in restrictive clauses.",
    hint: "物を修飾する関係代名詞は「that」または「which」です。",
  },
  {
    id: "eg8",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The student _____ notebook was left in the classroom should contact the professor.",
    options: [
      { id: "a", text: "whose", isCorrect: true },
      { id: "b", text: "who", isCorrect: false },
      { id: "c", text: "which", isCorrect: false },
      { id: "d", text: "that", isCorrect: false },
    ],
    explanation:
      "所有格の関係代名詞「whose」を使用します。学生のノートブックという所有関係を表します。\n\nEnglish: Use the possessive relative pronoun 'whose' to show possession. 'Whose' can refer to both people and things and indicates that something belongs to the antecedent.",
    hint: "所有関係を表す関係代名詞は「whose」です。",
  },
  {
    id: "eg9",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The library _____ we studied yesterday has excellent research resources.",
    options: [
      { id: "a", text: "where", isCorrect: true },
      { id: "b", text: "which", isCorrect: false },
      { id: "c", text: "that", isCorrect: false },
      { id: "d", text: "when", isCorrect: false },
    ],
    explanation:
      "関係副詞「where」を使用します。図書館（場所）を修飾し、「昨日勉強した」という場所を表します。\n\nEnglish: Use the relative adverb 'where' to refer to places. 'When' refers to time, 'which' refers to things, and 'that' is a general relative pronoun. Here, 'where' indicates the location where the action took place.",
    hint: "場所を修飾する関係副詞は「where」です。",
  },
  {
    id: "eg10",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The day _____ I graduated was one of the happiest moments of my life.",
    options: [
      { id: "a", text: "when", isCorrect: true },
      { id: "b", text: "where", isCorrect: false },
      { id: "c", text: "which", isCorrect: false },
      { id: "d", text: "that", isCorrect: false },
    ],
    explanation:
      "関係副詞「when」を使用します。時間を修飾し、「卒業した日」という時点を表します。\n\nEnglish: Use the relative adverb 'when' to refer to time. 'When' connects a time expression to a relative clause. Here, it indicates the specific time when the graduation occurred.",
    hint: "時間を修飾する関係副詞は「when」です。",
  },

  // Conjunctions (接続詞)
  {
    id: "eg11",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "_____ the weather was bad, the students decided to postpone the outdoor event.",
    options: [
      { id: "a", text: "Because", isCorrect: true },
      { id: "b", text: "Although", isCorrect: false },
      { id: "c", text: "However", isCorrect: false },
      { id: "d", text: "Therefore", isCorrect: false },
    ],
    explanation:
      "接続詞「Because」を使用します。天気が悪いことが、イベント延期の理由（原因）を表します。\n\nEnglish: Use 'because' to show cause and effect. The bad weather is the reason for postponing the event. 'Although' shows contrast, 'however' is a transitional word, and 'therefore' shows result.",
    hint: "理由や原因を表す接続詞は「because」です。",
  },
  {
    id: "eg12",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "_____ she studied hard, she still failed the exam.",
    options: [
      { id: "a", text: "Although", isCorrect: true },
      { id: "b", text: "Because", isCorrect: false },
      { id: "c", text: "Since", isCorrect: false },
      { id: "d", text: "While", isCorrect: false },
    ],
    explanation:
      "接続詞「Although」を使用します。期待と異なる結果（対比）を表します。\n\nEnglish: Use 'although' (or 'though') to show contrast between two ideas. Despite studying hard, she failed—this is unexpected. 'Because' shows cause, 'since' shows reason, and 'while' shows time or contrast.",
    hint: "対比や予想外の結果を表す接続詞は「although」です。",
  },
  {
    id: "eg13",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "She wanted to attend the conference; _____, she couldn't afford the registration fee.",
    options: [
      { id: "a", text: "however", isCorrect: true },
      { id: "b", text: "because", isCorrect: false },
      { id: "c", text: "although", isCorrect: false },
      { id: "d", text: "therefore", isCorrect: false },
    ],
    explanation:
      "接続副詞「however」を使用します。2つの独立した文をセミコロンで結び、対比を表します。\n\nEnglish: Use 'however' as a transitional adverb to connect two independent clauses with a semicolon. It shows contrast between the desire to attend and the inability to afford it. Note: 'However' requires a semicolon before it and a comma after it.",
    hint: "2つの独立した文を対比で結ぶ接続副詞は「however」です。",
  },
  {
    id: "eg14",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "_____ you finish your homework, you can go out with your friends.",
    options: [
      { id: "a", text: "Once", isCorrect: true },
      { id: "b", text: "Unless", isCorrect: false },
      { id: "c", text: "Before", isCorrect: false },
      { id: "d", text: "While", isCorrect: false },
    ],
    explanation:
      "接続詞「Once」を使用します。「ひとたび～したら」という条件を表し、その後に友達と遊べることを示します。\n\nEnglish: Use 'once' to mean 'as soon as' or 'after.' It indicates that the action of going out will happen immediately after finishing homework. 'Unless' means 'if not,' 'before' indicates prior time, and 'while' shows simultaneous actions.",
    hint: "「～したら、すぐに」という条件を表す接続詞は「once」です。",
  },
  {
    id: "eg15",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "_____ you study regularly, you will improve your English skills significantly.",
    options: [
      { id: "a", text: "If", isCorrect: true },
      { id: "b", text: "Unless", isCorrect: false },
      { id: "c", text: "Although", isCorrect: false },
      { id: "d", text: "Because", isCorrect: false },
    ],
    explanation:
      "接続詞「If」を使用します。条件付き文を作り、「定期的に勉強すれば、英語スキルが向上する」という仮定を表します。\n\nEnglish: Use 'if' to introduce a conditional clause. This creates a first conditional sentence (if + present, will + verb) showing a likely future result based on a condition. 'Unless' means 'if not,' 'although' shows contrast, and 'because' shows cause.",
    hint: "条件を表す接続詞は「if」です。",
  },

  // Advanced Grammar (高度な文法)
  {
    id: "eg16",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The research _____ by the team revealed surprising findings about climate patterns.",
    options: [
      { id: "a", text: "conducting", isCorrect: false },
      { id: "b", text: "conducted", isCorrect: true },
      { id: "c", text: "to conduct", isCorrect: false },
      { id: "d", text: "having conducted", isCorrect: false },
    ],
    explanation:
      "過去分詞「conducted」を使用します。受動態の意味で、「チームによって行われた研究」を表します。\n\nEnglish: Use the past participle 'conducted' to form a reduced relative clause. It functions as an adjective modifying 'research' and implies 'that was conducted.' This is more concise than 'research that was conducted by the team.'",
    hint: "受動態の意味で、名詞を修飾する過去分詞を使用します。",
  },
  {
    id: "eg17",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "_____ the importance of the issue, the government took immediate action.",
    options: [
      { id: "a", text: "Recognizing", isCorrect: true },
      { id: "b", text: "Recognized", isCorrect: false },
      { id: "c", text: "To recognize", isCorrect: false },
      { id: "d", text: "Having recognized", isCorrect: false },
    ],
    explanation:
      "現在分詞「Recognizing」を使用します。文頭で、政府が行動を取った理由を表します。\n\nEnglish: Use the present participle 'recognizing' to introduce a participial phrase that explains the reason for the government's action. This construction is more formal and concise than using 'because they recognized.'",
    hint: "文頭で理由を表す現在分詞を使用します。",
  },
  {
    id: "eg18",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The students, _____ their projects, were excited to present them to the class.",
    options: [
      { id: "a", text: "completing", isCorrect: true },
      { id: "b", text: "completed", isCorrect: false },
      { id: "c", text: "to complete", isCorrect: false },
      { id: "d", text: "complete", isCorrect: false },
    ],
    explanation:
      "現在分詞「completing」を使用します。挿入句として、学生たちが何をしている状態なのかを追加情報として表します。\n\nEnglish: Use the present participle 'completing' in an appositive phrase (set off by commas) to provide additional information about the students. This shows what they were doing at the time they felt excited.",
    hint: "名詞の後に挿入句として、追加情報を表す現在分詞を使用します。",
  },
  {
    id: "eg19",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "I would have attended the meeting _____ I had known about it earlier.",
    options: [
      { id: "a", text: "if", isCorrect: true },
      { id: "b", text: "unless", isCorrect: false },
      { id: "c", text: "although", isCorrect: false },
      { id: "d", text: "because", isCorrect: false },
    ],
    explanation:
      "接続詞「if」を使用します。過去の仮定法を表し、「もし早く知っていたら、会議に出席していたはずだ」という事実に反する仮定を示します。\n\nEnglish: Use 'if' in a past conditional (third conditional) sentence: 'would have + past participle' + 'if + had + past participle.' This expresses a hypothetical situation contrary to past facts.",
    hint: "過去の仮定法で、事実に反する仮定を表します。",
  },
  {
    id: "eg20",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The professor suggested that the students _____ their essays before submission.",
    options: [
      { id: "a", text: "revise", isCorrect: true },
      { id: "b", text: "revised", isCorrect: false },
      { id: "c", text: "revises", isCorrect: false },
      { id: "d", text: "to revise", isCorrect: false },
    ],
    explanation:
      "接続法の現在形「revise」を使用します。「suggest」の後は接続法を使い、「学生がエッセイを修正することを提案する」という意味になります。\n\nEnglish: After verbs like 'suggest,' 'recommend,' 'insist,' and 'demand,' use the subjunctive mood (base form of the verb). Here, 'revise' (not 'revises' or 'revised') follows the subjunctive pattern.",
    hint: "「suggest」の後は接続法を使用します。",
  },

  // Additional Complex Structures
  {
    id: "eg21",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "Not only _____ she study hard, but she also helped her classmates.",
    options: [
      { id: "a", text: "did", isCorrect: true },
      { id: "b", text: "does", isCorrect: false },
      { id: "c", text: "has", isCorrect: false },
      { id: "d", text: "is", isCorrect: false },
    ],
    explanation:
      "助動詞「did」を使用します。「Not only」で始まる倒置構文では、助動詞が主語の前に来ます。\n\nEnglish: When a sentence begins with 'not only,' inversion occurs (auxiliary verb comes before subject). Use 'did' to match the past tense of the main clause. This structure emphasizes multiple positive actions.",
    hint: "「Not only」で始まる倒置構文では、助動詞が主語の前に来ます。",
  },
  {
    id: "eg22",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "Hardly had the meeting started _____ the fire alarm went off.",
    options: [
      { id: "a", text: "when", isCorrect: true },
      { id: "b", text: "than", isCorrect: false },
      { id: "c", text: "before", isCorrect: false },
      { id: "d", text: "as", isCorrect: false },
    ],
    explanation:
      "接続詞「when」を使用します。「Hardly had」で倒置が起きており、「会議がほとんど始まったばかりのとき、火災警報が鳴った」という意味です。\n\nEnglish: After 'hardly,' 'scarcely,' or 'no sooner' (which require inversion), use 'when' to introduce the following clause. This construction emphasizes that two events happened in quick succession.",
    hint: "「Hardly had」の後は「when」を使用します。",
  },
  {
    id: "eg23",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The more _____ you practice, the better your pronunciation becomes.",
    options: [
      { id: "a", text: "frequently", isCorrect: true },
      { id: "b", text: "frequent", isCorrect: false },
      { id: "c", text: "frequency", isCorrect: false },
      { id: "d", text: "frequenting", isCorrect: false },
    ],
    explanation:
      "副詞「frequently」を使用します。「The more...the more...」の構文で、「練習すればするほど、発音が良くなる」という比例関係を表します。\n\nEnglish: Use 'the more + adverb/adjective...the more/better' to show a proportional relationship between two things. Here, 'frequently' (an adverb) modifies 'practice,' indicating increased frequency leads to better pronunciation.",
    hint: "「The more...the more...」の構文で比例関係を表します。",
  },
  {
    id: "eg24",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "I would rather _____ at home than go to the crowded shopping mall.",
    options: [
      { id: "a", text: "stay", isCorrect: true },
      { id: "b", text: "stayed", isCorrect: false },
      { id: "c", text: "to stay", isCorrect: false },
      { id: "d", text: "staying", isCorrect: false },
    ],
    explanation:
      "動詞の原形「stay」を使用します。「would rather」の後は、「than」を使わない場合と同じく原形を使います。\n\nEnglish: After 'would rather,' use the base form of the verb (infinitive without 'to'). The structure is 'would rather + base verb + than + base verb.' This expresses preference between two alternatives.",
    hint: "「would rather」の後は動詞の原形を使用します。",
  },
  {
    id: "eg25",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The committee decided _____ the proposal despite the opposition.",
    options: [
      { id: "a", text: "to accept", isCorrect: true },
      { id: "b", text: "accepting", isCorrect: false },
      { id: "c", text: "accept", isCorrect: false },
      { id: "d", text: "accepted", isCorrect: false },
    ],
    explanation:
      "不定詞「to accept」を使用します。「decide」の後は不定詞を使い、「提案を受け入れることを決めた」という意味になります。\n\nEnglish: After the verb 'decide,' use the infinitive form (to + base verb). Other verbs that take infinitives include 'plan,' 'agree,' 'promise,' and 'attempt.' This structure indicates a decision or intention regarding a future action.",
    hint: "「decide」の後は不定詞を使用します。",
  },

  // More Present Perfect and Complex Tenses
  {
    id: "eg26",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "Since he _____ to the university, he has made many new friends.",
    options: [
      { id: "a", text: "came", isCorrect: true },
      { id: "b", text: "has come", isCorrect: false },
      { id: "c", text: "comes", isCorrect: false },
      { id: "d", text: "had come", isCorrect: false },
    ],
    explanation:
      "過去形「came」を使用します。「since」の後は過去形を使い、現在完了形と組み合わせて「大学に来てから今までの期間」を表します。\n\nEnglish: After 'since' (meaning 'from that time until now'), use the simple past tense in the subordinate clause. The main clause uses present perfect to show the result or continuation from that past point to now.",
    hint: "「since」の後は過去形を使用します。",
  },
  {
    id: "eg27",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "By next year, she _____ her master's degree.",
    options: [
      { id: "a", text: "will have completed", isCorrect: true },
      { id: "b", text: "will complete", isCorrect: false },
      { id: "c", text: "has completed", isCorrect: false },
      { id: "d", text: "completes", isCorrect: false },
    ],
    explanation:
      "未来完了形「will have completed」を使用します。「来年までに」という時点までに、修士号の取得が完了していることを表します。\n\nEnglish: Use future perfect (will have + past participle) to indicate that an action will be completed before a specific point in the future. 'By next year' signals the deadline for completion.",
    hint: "未来のある時点までに完了することを表します。",
  },
  {
    id: "eg28",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "When I arrived at the office, my colleagues _____ already left for lunch.",
    options: [
      { id: "a", text: "had", isCorrect: true },
      { id: "b", text: "have", isCorrect: false },
      { id: "c", text: "has", isCorrect: false },
      { id: "d", text: "were", isCorrect: false },
    ],
    explanation:
      "過去完了形「had」を使用します。「オフィスに着いた時点で、同僚たちはすでに昼食に出かけていた」という過去の2つの出来事の時間関係を表します。\n\nEnglish: Use past perfect (had + past participle) to show that one past action was completed before another past action. The arrival is the reference point, and the colleagues' departure happened before that.",
    hint: "過去の2つの出来事で、より前に起きたことを表します。",
  },
  {
    id: "eg29",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The teacher _____ the students' work carefully before returning it.",
    options: [
      { id: "a", text: "has reviewed", isCorrect: true },
      { id: "b", text: "reviews", isCorrect: false },
      { id: "c", text: "is reviewing", isCorrect: false },
      { id: "d", text: "reviewed", isCorrect: false },
    ],
    explanation:
      "現在完了形「has reviewed」を使用します。「返却する前に」という条件で、すでに確認が完了していることを表します。\n\nEnglish: Use present perfect (has + past participle) to show an action that occurred before now and is relevant to the present situation. The review must be completed before the work is returned.",
    hint: "「返却する前に」という条件で、すでに完了していることを表します。",
  },
  {
    id: "eg30",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "If I _____ known about the event earlier, I would have attended it.",
    options: [
      { id: "a", text: "had", isCorrect: true },
      { id: "b", text: "have", isCorrect: false },
      { id: "c", text: "has", isCorrect: false },
      { id: "d", text: "would have", isCorrect: false },
    ],
    explanation:
      "過去完了形「had」を使用します。過去の仮定法で、「もし早く知っていたら、出席していたはずだ」という事実に反する仮定を表します。\n\nEnglish: In a past conditional (third conditional), use 'if + had + past participle' in the condition clause. This expresses a hypothetical situation that contradicts past reality. The result clause uses 'would have + past participle.'",
    hint: "過去の仮定法で、事実に反する仮定を表します。",
  },
];
