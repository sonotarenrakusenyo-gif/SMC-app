import { QuizQuestion } from "./quizzes";

export const EXTENDED_GRAMMAR_QUIZZES_JP: QuizQuestion[] = [
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
      "【正解】have read\n\n【解説】\nこの文は「現在完了形」を使う必要があります。「すでに3回読んだ」という過去から現在までの経験を表しています。\n\n現在完了形の使い方：\n- 形式：have/has + 過去分詞\n- 用途：過去のある時点から現在までの経験や継続を表す\n- 「already」という副詞が付いているので、完了した行動を示唆しています\n\n他の選択肢が間違う理由：\n- read：単純過去形。「いつ読んだか」という時間が明確でないため不適切\n- had read：過去完了形。「過去のある時点より前」の行動を表すため、ここでは不適切\n- am reading：現在進行形。「今読んでいる途中」という意味になり、「すでに3回」と矛盾\n\n【英語での説明】\nUse present perfect (have read) to express an experience that started in the past and continues to have relevance in the present. The adverb 'already' signals that the action is complete but recent.",
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
      "【正解】has lived\n\n【解説】\n「5年間ずっと住んでいる」という過去から現在までの継続を表す必要があります。これは現在完了形の典型的な用法です。\n\n現在完了形の継続用法：\n- 形式：have/has + been + 動詞の-ing形（または have/has + 過去分詞）\n- 用途：過去から現在まで継続している状態や行動を表す\n- 「for + 期間」と一緒に使われることが多い\n\nこの文では「for five years」があるので、継続を表す現在完了形が必須です。\n\n他の選択肢が間違う理由：\n- lives：単純現在形。「今住んでいる」という事実を述べるだけで、継続期間を表さない\n- lived：単純過去形。「以前住んでいた（今は住んでいない）」という意味になり、矛盾\n- is living：現在進行形。一時的な行動を表すため、「5年間」という長期間に不適切\n\n【英語での説明】\nUse present perfect (has lived) to indicate an action that began in the past and continues to the present. The duration 'for five years' emphasizes the ongoing nature of the situation.",
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
      "【正解】will have been cooking\n\n【解説】\n「あなたが到着する時点までに、2時間ずっと料理をしていることになる」という未来の時点での継続を表す必要があります。これは「未来完了進行形」です。\n\n未来完了進行形の用法：\n- 形式：will + have + been + 動詞の-ing形\n- 用途：未来のある時点までに、どのくらいの期間その行動が続いているかを表す\n- 「by the time」という表現とよく一緒に使われる\n\n「By the time you arrive」は「あなたが到着するまでに」という意味で、その時点での状況を表します。\n\n他の選択肢が間違う理由：\n- will be cooking：未来進行形。「到着時に料理をしている」という状態を表すだけで、「2時間」という期間を表さない\n- have been cooking：現在完了進行形。現在の状況を表すため、未来の時点には不適切\n- am cooking：現在進行形。未来の時点に対応していない\n\n【英語での説明】\nUse future perfect continuous (will have been cooking) to show an action that will be ongoing up to a specific point in the future. This tense emphasizes both the duration and the continuation of the action.",
    hint: "「By the time」という表現が出たら、未来完了進行形を考えてみましょう。",
  },
  {
    id: "eg4",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The student _____ the assignment, which was due yesterday, finally submitted it today.",
    options: [
      { id: "a", text: "who completed", isCorrect: true },
      { id: "b", text: "that completed", isCorrect: false },
      { id: "c", text: "whom completed", isCorrect: false },
      { id: "d", text: "whose completed", isCorrect: false },
    ],
    explanation:
      "【正解】who completed\n\n【解説】\nこの文は「関係代名詞」を使う必要があります。「課題を完成させた学生」という意味で、先行詞「the student」を修飾しています。\n\n関係代名詞の使い分け：\n- who：人を指す関係代名詞（主語として機能）\n- whom：人を指す関係代名詞（目的語として機能）\n- that：人・物・事柄を指す関係代名詞（制限的用法）\n- whose：所有を表す関係代名詞\n\nこの文では「the student who completed the assignment」という構造で、「who」が関係詞節の主語として機能しています。\n\n他の選択肢が間違う理由：\n- that completed：「that」は非制限的用法（補足説明）では使えない。この文は「which was due yesterday」という補足説明があるため、「that」は不適切\n- whom completed：「whom」は目的語として機能するため、主語の位置には使えない\n- whose completed：「whose」は所有を表すため、この文脈では不適切\n\n【英語での説明】\nUse the relative pronoun 'who' to introduce a relative clause that describes a person. 'Who' functions as the subject of the relative clause. 'That' is typically used in restrictive clauses without commas, while 'which' is used in non-restrictive clauses (with commas) for additional information.",
    hint: "関係代名詞の後に動詞が続く場合、その関係代名詞は主語として機能しています。人を指す場合は「who」を使います。",
  },
  {
    id: "eg5",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "I will attend the conference _____ it is held in a convenient location.",
    options: [
      { id: "a", text: "if", isCorrect: true },
      { id: "b", text: "unless", isCorrect: false },
      { id: "c", text: "although", isCorrect: false },
      { id: "d", text: "because", isCorrect: false },
    ],
    explanation:
      "【正解】if\n\n【解説】\nこの文は「条件を表す接続詞」が必要です。「便利な場所で開催されるなら、会議に出席する」という条件付きの意思を表しています。\n\n接続詞の使い分け：\n- if：「もし～なら」という条件を表す\n- unless：「～でない限り」という否定的な条件を表す\n- although：「～だけれども」という譲歩（相反する事実）を表す\n- because：「～だから」という理由を表す\n\n文脈から「便利な場所であることが、出席する条件である」と読み取れるため、「if」が最適です。\n\n他の選択肢が間違う理由：\n- unless：「便利な場所でない限り、出席しない」という意味になり、文脈に合わない\n- although：「便利な場所だけれども、出席する」という意味になり、条件ではなく譲歩になる\n- because：「便利な場所だから、出席する」という理由を表すため、条件ではなく因果関係になる\n\n【英語での説明】\nUse the conditional conjunction 'if' to introduce a condition. 'If' presents a possible situation and its consequence. 'Unless' means 'if not,' 'although' introduces a concession, and 'because' introduces a reason or cause.",
    hint: "「もし～なら」という条件を表すには、接続詞「if」を使います。",
  },
];
