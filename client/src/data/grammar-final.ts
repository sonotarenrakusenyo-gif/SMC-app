import { QuizQuestion } from "./quizzes";

export const grammarQuizzes: QuizQuestion[] = [
  {
    id: "grammar-001",
    category: "grammar",
    difficulty: "intermediate",
    question: "She _____ to Paris three times since 2020.",
    options: [
      {
        id: "g001-a",
        text: "has gone",
        isCorrect: true,
        translation: "行ったことがある",
      },
      {
        id: "g001-b",
        text: "went",
        isCorrect: false,
        translation: "行った",
      },
      {
        id: "g001-c",
        text: "goes",
        isCorrect: false,
        translation: "行く",
      },
      {
        id: "g001-d",
        text: "had gone",
        isCorrect: false,
        translation: "行ってしまった",
      },
    ],
    explanation:
      "正解は「has gone」です。「since 2020」という過去のある時点から現在までの期間を示す時間表現が使われているため、現在完了形を使う必要があります。",
    hint: "「since 2020」は過去から現在までを表す時間表現です。",
    questionTranslation:
      "彼女は2020年以来、パリに3回行ったことがあります。",
    questionKatakana: "シー ハズ ゴーン トゥ パリス スリー タイムズ シンス トゥエンティ トゥエンティ。",
    vocabularyItems: [
      {
        word: "has gone",
        meaning: "行ったことがある（現在完了形）",
        katakanaReading: "ハズ ゴーン",
        example: "I have gone to that restaurant before.",
      },
      {
        word: "since",
        meaning: "～以来、～から（ずっと）",
        katakanaReading: "シンス",
        example: "I have lived here since 2010.",
      },
      {
        word: "three times",
        meaning: "3回",
        katakanaReading: "スリー タイムズ",
        example: "She called me three times yesterday.",
      },
    ],
    grammarPoints: [
      {
        rule: "現在完了形（Present Perfect）",
        explanation:
          "現在完了形は「have/has + 過去分詞」で構成されます。過去のある時点から現在までの期間における経験や状態を表します。特に「since（～以来）」や「for（～間）」などの時間表現と一緒に使われることが多いです。",
        example:
          "I have studied English for 5 years. = 私は5年間英語を勉強しています。",
      },
      {
        rule: "単純過去形との違い",
        explanation:
          "単純過去形（went）は過去の特定の時点での出来事を表し、現在との関連性は示しません。一方、現在完了形（has gone）は過去から現在までの期間を表し、現在に影響を与えています。",
        example:
          "I went to Paris in 2020. = 2020年にパリに行きました。（過去の事実）\nI have gone to Paris three times. = パリに3回行ったことがあります。（経験）",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "「She has gone to Paris three times since 2020.」を5回音読してください。ネイティブスピーカーのように、「has」と「gone」をスムーズにつなげて発音することを意識してください。",
      phraseReplacements: [
        {
          original: "She has gone to Paris three times since 2020.",
          instruction:
            "主語と行き先を変えて、同じ文法構造で文を作ってみてください。",
          examples: [
            "I have gone to Tokyo five times since 2015.",
            "They have gone to the beach twice since summer.",
            "He has gone to that café many times since he moved here.",
          ],
        },
      ],
      dailyConversationTips:
        "現在完了形は日常会話で非常によく使われます。「I have been to...」（～に行ったことがある）は旅行や経験について話すときの定番表現です。相手の経験を聞くときは「Have you ever been to...?」と質問します。",
    },
  },
  {
    id: "grammar-002",
    category: "grammar",
    difficulty: "intermediate",
    question: "The book _____ I borrowed from the library is very interesting.",
    options: [
      {
        id: "g002-a",
        text: "that",
        isCorrect: true,
        translation: "～である（関係代名詞）",
      },
      {
        id: "g002-b",
        text: "which",
        isCorrect: false,
        translation: "どれ",
      },
      {
        id: "g002-c",
        text: "who",
        isCorrect: false,
        translation: "誰",
      },
      {
        id: "g002-d",
        text: "what",
        isCorrect: false,
        translation: "何",
      },
    ],
    explanation:
      "正解は「that」です。先行詞が「the book」という物であり、関係代名詞が目的語の役割を果たしているため、「that」または「which」が使えます。ただし、この文脈では「that」がより自然です。",
    hint: "関係代名詞は先行詞の種類（人か物か）と、関係詞節内での役割（主語か目的語か）によって決まります。",
    questionTranslation:
      "私が図書館から借りた本はとても面白いです。",
    questionKatakana:
      "ザ ブック ザット アイ バロード フロム ザ ライブラリー イズ ベリー インタレスティング。",
    vocabularyItems: [
      {
        word: "that",
        meaning: "関係代名詞（物を指す）",
        katakanaReading: "ザット",
        example: "The car that I bought is red.",
      },
      {
        word: "borrow",
        meaning: "借りる",
        katakanaReading: "バロー",
        example: "Can I borrow your pen?",
      },
      {
        word: "interesting",
        meaning: "面白い、興味深い",
        katakanaReading: "インタレスティング",
        example: "This is an interesting movie.",
      },
    ],
    grammarPoints: [
      {
        rule: "関係代名詞（Relative Pronouns）",
        explanation:
          "関係代名詞は2つの文を1つにつなぐ役割を果たします。先行詞が物の場合は「that」または「which」を使い、先行詞が人の場合は「who」を使います。関係詞節内で目的語の役割を果たす場合、関係代名詞は省略できることもあります。",
        example:
          "The book (that) I read yesterday was excellent. = 昨日読んだ本は素晴らしかった。",
      },
      {
        rule: "that vs. which",
        explanation:
          "制限的関係詞節（先行詞を限定する）では「that」が好まれます。非制限的関係詞節（補足情報を加える）では「which」を使い、カンマで区切ります。",
        example:
          "The book that I borrowed is interesting. = 私が借りた本（特定の本）は面白いです。\nThe book, which I borrowed, is interesting. = その本は面白いです。（ちなみに、それは私が借りたものです。）",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "「The book that I borrowed from the library is very interesting.」を5回音読してください。「that」の前後で自然なポーズを入れることを意識してください。",
      phraseReplacements: [
        {
          original: "The book that I borrowed from the library is very interesting.",
          instruction:
            "「the book」と「very interesting」の部分を変えて、同じ文法構造で文を作ってみてください。",
          examples: [
            "The movie that I watched last night was very entertaining.",
            "The restaurant that I visited yesterday was very delicious.",
            "The course that I took was very challenging.",
          ],
        },
      ],
      dailyConversationTips:
        "関係代名詞は複雑に聞こえるかもしれませんが、実は日常会話で頻繁に使われます。「The person who called me」や「The thing that happened」など、自分の経験について詳しく説明するときに役立ちます。",
    },
  },
  {
    id: "grammar-003",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "_____ you study hard, you will not pass the exam.",
    options: [
      {
        id: "g003-a",
        text: "Unless",
        isCorrect: true,
        translation: "～でない限り",
      },
      {
        id: "g003-b",
        text: "If",
        isCorrect: false,
        translation: "もし",
      },
      {
        id: "g003-c",
        text: "Although",
        isCorrect: false,
        translation: "～にもかかわらず",
      },
      {
        id: "g003-d",
        text: "Because",
        isCorrect: false,
        translation: "～だから",
      },
    ],
    explanation:
      "正解は「Unless」です。「Unless = If not」という意味で、「勉強しない限り、試験に合格しないだろう」という否定的な条件を表します。",
    hint: "「Unless」は「If not」と同じ意味です。否定的な条件を表す接続詞です。",
    questionTranslation:
      "勉強しない限り、試験に合格しないでしょう。",
    questionKatakana:
      "アンレス ユー スタディ ハード、ユー ウィル ノット パス ザ イグザム。",
    vocabularyItems: [
      {
        word: "unless",
        meaning: "～でない限り、～しない限り",
        katakanaReading: "アンレス",
        example: "Unless you hurry, you will be late.",
      },
      {
        word: "study hard",
        meaning: "一生懸命勉強する",
        katakanaReading: "スタディ ハード",
        example: "If you study hard, you will succeed.",
      },
      {
        word: "pass",
        meaning: "合格する、通過する",
        katakanaReading: "パス",
        example: "I passed the test.",
      },
    ],
    grammarPoints: [
      {
        rule: "接続詞 Unless（～でない限り）",
        explanation:
          "「Unless」は条件を表す接続詞で、「If not」と同じ意味です。否定的な条件を表すときに使われます。「Unless + 肯定文」で「～でない限り」という意味になります。",
        example:
          "Unless you leave now, you will miss the bus. = 今出発しない限り、バスに乗り遅れるでしょう。",
      },
      {
        rule: "If と Unless の違い",
        explanation:
          "「If」は肯定的な条件を表し、「Unless」は否定的な条件を表します。\nIf you study hard, you will pass. = 勉強すれば、合格するでしょう。\nUnless you study hard, you will not pass. = 勉強しない限り、合格しないでしょう。",
        example:
          "If you eat healthy food, you will be healthy. = 健康的な食べ物を食べれば、健康になるでしょう。\nUnless you eat healthy food, you will not be healthy. = 健康的な食べ物を食べない限り、健康にはならないでしょう。",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "「Unless you study hard, you will not pass the exam.」を5回音読してください。「Unless」の発音に注意し、「アンレス」と明確に発音してください。",
      phraseReplacements: [
        {
          original: "Unless you study hard, you will not pass the exam.",
          instruction:
            "「study hard」と「pass the exam」の部分を変えて、同じ文法構造で文を作ってみてください。",
          examples: [
            "Unless you practice regularly, you will not improve your English.",
            "Unless you save money, you will not be able to buy a house.",
            "Unless you exercise, you will not stay healthy.",
          ],
        },
      ],
      dailyConversationTips:
        "「Unless」は警告や条件を述べるときに使われます。「Unless you hurry, we'll be late.」のように、相手に行動を促すときに役立ちます。",
    },
  },
  {
    id: "grammar-004",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "If I _____ about the meeting, I would have attended it.",
    options: [
      {
        id: "g004-a",
        text: "had known",
        isCorrect: true,
        translation: "知っていたなら",
      },
      {
        id: "g004-b",
        text: "knew",
        isCorrect: false,
        translation: "知っている",
      },
      {
        id: "g004-c",
        text: "have known",
        isCorrect: false,
        translation: "知ったことがある",
      },
      {
        id: "g004-d",
        text: "know",
        isCorrect: false,
        translation: "知る",
      },
    ],
    explanation:
      "正解は「had known」です。この文は過去の反事実的条件文（仮定法過去完了）です。「would have attended」という帰結部から、過去の状況について反事実的な仮定をしていることがわかります。",
    hint: "「would have + 過去分詞」という帰結部が使われている場合、条件部では「had + 過去分詞」を使います。",
    questionTranslation:
      "もし会議のことを知っていたら、参加していたでしょう。",
    questionKatakana:
      "イフ アイ ハッド ノウン アバウト ザ ミーティング、アイ ウッド ハブ アテンディッド イット。",
    vocabularyItems: [
      {
        word: "had known",
        meaning: "知っていたなら（仮定法過去完了）",
        katakanaReading: "ハッド ノウン",
        example: "If I had known, I would have told you.",
      },
      {
        word: "would have attended",
        meaning: "参加していたでしょう（仮定法過去完了の帰結）",
        katakanaReading: "ウッド ハブ アテンディッド",
        example: "I would have attended if I had known.",
      },
      {
        word: "meeting",
        meaning: "会議、ミーティング",
        katakanaReading: "ミーティング",
        example: "The meeting starts at 9 AM.",
      },
    ],
    grammarPoints: [
      {
        rule: "仮定法過去完了（Conditional Perfect）",
        explanation:
          "仮定法過去完了は、過去の状況について反事実的な仮定をするときに使われます。構造は「If + had + 過去分詞, would have + 過去分詞」です。実際には起こらなかったが、もし起こっていたなら、という状況を表します。",
        example:
          "If I had studied harder, I would have passed the exam. = もっと一生懸命勉強していたら、試験に合格していたでしょう。",
      },
      {
        rule: "仮定法の時制の使い分け",
        explanation:
          "仮定法には3つのレベルがあります。\n1. 現在の反事実：If I were you, I would... = もし私があなただったら、～するでしょう。\n2. 未来の反事実：If I went, I would... = もし行ったら、～するでしょう。\n3. 過去の反事実：If I had gone, I would have... = もし行っていたら、～していたでしょう。",
        example:
          "If I were rich, I would travel the world. = もし金持ちだったら、世界中を旅するでしょう。（現在）\nIf I went to Paris, I would visit the Louvre. = もしパリに行ったら、ルーヴル美術館を訪れるでしょう。（未来）\nIf I had gone to Paris, I would have visited the Louvre. = もしパリに行っていたら、ルーヴル美術館を訪れていたでしょう。（過去）",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "「If I had known about the meeting, I would have attended it.」を5回音読してください。「had」と「would」の発音に注意し、自然なリズムで発音してください。",
      phraseReplacements: [
        {
          original: "If I had known about the meeting, I would have attended it.",
          instruction:
            "「known about the meeting」と「attended it」の部分を変えて、同じ文法構造で文を作ってみてください。",
          examples: [
            "If I had known about the party, I would have gone.",
            "If I had known about the problem, I would have helped.",
            "If I had known about the deadline, I would have finished it on time.",
          ],
        },
      ],
      dailyConversationTips:
        "仮定法過去完了は、後悔や反省を表すときに使われます。「If I had known...」は「知っていたら良かったのに」という後悔の気持ちを表現するのに最適です。",
    },
  },
  {
    id: "grammar-005",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The students _____ their homework before they left the classroom.",
    options: [
      {
        id: "g005-a",
        text: "had finished",
        isCorrect: true,
        translation: "終わらせていた",
      },
      {
        id: "g005-b",
        text: "have finished",
        isCorrect: false,
        translation: "終わらせた",
      },
      {
        id: "g005-c",
        text: "finished",
        isCorrect: false,
        translation: "終わらせた",
      },
      {
        id: "g005-d",
        text: "were finishing",
        isCorrect: false,
        translation: "終わらせていた",
      },
    ],
    explanation:
      "正解は「had finished」です。この文では、2つの過去の出来事が時間順に示されています。「宿題を終わらせる」という出来事が「教室を出る」という出来事より前に起こったため、過去完了形を使う必要があります。",
    hint: "過去の中でも、より前に起こった出来事には過去完了形（had + 過去分詞）を使います。",
    questionTranslation:
      "学生たちは教室を出る前に宿題を終わらせていました。",
    questionKatakana:
      "ザ スチューデンツ ハッド フィニッシュド ザイア ホームワーク ビフォア ザイ レフト ザ クラスルーム。",
    vocabularyItems: [
      {
        word: "had finished",
        meaning: "終わらせていた（過去完了形）",
        katakanaReading: "ハッド フィニッシュド",
        example: "I had finished my work before he arrived.",
      },
      {
        word: "homework",
        meaning: "宿題",
        katakanaReading: "ホームワーク",
        example: "Do you have homework today?",
      },
      {
        word: "before",
        meaning: "～の前に",
        katakanaReading: "ビフォア",
        example: "Before you leave, please close the door.",
      },
    ],
    grammarPoints: [
      {
        rule: "過去完了形（Past Perfect）",
        explanation:
          "過去完了形は「had + 過去分詞」で構成されます。過去のある時点より前に起こった出来事を表します。特に「before」や「after」などの時間表現と一緒に使われることが多いです。",
        example:
          "She had eaten before I arrived. = 私が到着する前に、彼女は食べていました。",
      },
      {
        rule: "時間順序の表現",
        explanation:
          "複数の過去の出来事を述べるときは、時間順序を明確にすることが重要です。より前に起こった出来事には過去完了形を、後に起こった出来事には単純過去形を使います。",
        example:
          "After I had finished my homework, I went to bed. = 宿題を終わらせた後、私は寝ました。",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "「The students had finished their homework before they left the classroom.」を5回音読してください。「had」と「finished」をスムーズにつなげて発音することを意識してください。",
      phraseReplacements: [
        {
          original: "The students had finished their homework before they left the classroom.",
          instruction:
            "「finished their homework」と「left the classroom」の部分を変えて、同じ文法構造で文を作ってみてください。",
          examples: [
            "The employees had completed their tasks before they went home.",
            "The team had prepared for the game before the match started.",
            "The workers had cleaned the office before the boss arrived.",
          ],
        },
      ],
      dailyConversationTips:
        "過去完了形は、物語や説明で時間順序を明確にするときに使われます。「I had already eaten when he called.」のように、相手に状況を正確に伝えるのに役立ちます。",
    },
  },
];
