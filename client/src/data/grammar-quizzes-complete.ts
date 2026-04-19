import { QuizQuestion } from "./quizzes";

export const grammarQuizzesComplete: QuizQuestion[] = [
  {
    id: "grammar_001",
    category: "grammar",
    difficulty: "intermediate",
    question: "She _____ been working here for five years.",
    questionTranslation: "彼女は5年間ここで働いています。",
    questionKatakana: "シー ハズ ビーン ワーキング ヒア フォー ファイヴ イヤーズ",
    options: [
      {
        id: "opt_001_a",
        text: "has",
        isCorrect: true,
        translation: "持っている（現在完了形の助動詞）",
      },
      {
        id: "opt_001_b",
        text: "have",
        isCorrect: false,
        translation: "持っている（複数形・一人称・二人称用）",
      },
      {
        id: "opt_001_c",
        text: "is",
        isCorrect: false,
        translation: "〜である（現在進行形の助動詞）",
      },
      {
        id: "opt_001_d",
        text: "was",
        isCorrect: false,
        translation: "〜だった（過去形）",
      },
    ],
    explanation:
      "正解は「has」です。主語が「She（三人称単数）」であるため、現在完了形の助動詞は「has」を使用します。「for five years（5年間）」という期間を示す表現は、現在完了形と一緒に使われることが多いです。",
    vocabularyItems: [
      {
        word: "has",
        meaning: "持っている、ある",
        katakanaReading: "ハズ",
      },
      {
        word: "been",
        meaning: "〜である（beの過去分詞）",
        katakanaReading: "ビーン",
      },
      {
        word: "working",
        meaning: "働いている",
        katakanaReading: "ワーキング",
      },
      {
        word: "for",
        meaning: "〜の間、〜の期間",
        katakanaReading: "フォー",
      },
      {
        word: "five years",
        meaning: "5年間",
        katakanaReading: "ファイヴ イヤーズ",
      },
    ],
    grammarPoints: [
      {
        rule: "現在完了形（Present Perfect）",
        explanation:
          "現在完了形は「have/has + 過去分詞」の形で、過去から現在までの継続、経験、または最近の動作を表します。この文では、彼女が5年前から働き始めて、現在も働いている状態を示しています。",
        example: "I have lived in Tokyo for 3 years. （私は3年間東京に住んでいます）",
      },
      {
        rule: "三人称単数現在形",
        explanation:
          "主語が「She（三人称単数）」の場合、助動詞は「has」を使用します。一人称・二人称・複数形の場合は「have」を使用します。",
        example:
          "He has finished his homework. （彼は宿題を終わらせました）/ They have finished their homework. （彼らは宿題を終わらせました）",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を5回、ゆっくり音読してください。特に「has been」の部分をスムーズに発音することを意識してください。",
      phraseReplacements: [
        {
          original: "She has been working here for five years.",
          instruction:
            "「working here」の部分を別の職業や場所に入れ替えて、同じ文法構造で文を作ってみましょう。",
          examples: [
            "She has been teaching English for five years. （彼女は5年間英語を教えています）",
            "She has been living in New York for five years. （彼女は5年間ニューヨークに住んでいます）",
            "She has been studying medicine for five years. （彼女は5年間医学を勉強しています）",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「How long have you been working here?（ここでどのくらい働いていますか？）」と聞かれることがあります。その場合、この文のような「I have been working here for...」という形で答えるのが自然です。",
    },
    hint: "三人称単数（She）の場合、現在完了形の助動詞は「has」です。",
  },

  {
    id: "grammar_002",
    category: "grammar",
    difficulty: "intermediate",
    question: "The book _____ I borrowed last week was very interesting.",
    questionTranslation: "先週私が借りた本はとても面白かった。",
    questionKatakana:
      "ザ ブック ザット アイ バロウド ラスト ウィーク ワズ ベリー インタレスティング",
    options: [
      {
        id: "opt_002_a",
        text: "that",
        isCorrect: true,
        translation: "〜する（関係代名詞）",
      },
      {
        id: "opt_002_b",
        text: "which",
        isCorrect: false,
        translation: "どれ、どの（疑問詞・関係代名詞）",
      },
      {
        id: "opt_002_c",
        text: "who",
        isCorrect: false,
        translation: "誰が、誰を（人を指す関係代名詞）",
      },
      {
        id: "opt_002_d",
        text: "where",
        isCorrect: false,
        translation: "どこ（場所を指す関係副詞）",
      },
    ],
    explanation:
      "正解は「that」です。関係代名詞を選ぶ問題です。先行詞が「the book（本）」という物であり、関係詞節内で目的語として機能しているため、「that」または「which」が候補になります。ただし、この文では「that」がより自然で、特に「the only...」「the first...」などの限定的な表現の後では「that」が好まれます。",
    vocabularyItems: [
      {
        word: "book",
        meaning: "本",
        katakanaReading: "ブック",
      },
      {
        word: "borrowed",
        meaning: "借りた（borrowの過去形）",
        katakanaReading: "バロウド",
      },
      {
        word: "last week",
        meaning: "先週",
        katakanaReading: "ラスト ウィーク",
      },
      {
        word: "interesting",
        meaning: "面白い、興味深い",
        katakanaReading: "インタレスティング",
      },
    ],
    grammarPoints: [
      {
        rule: "関係代名詞（Relative Pronouns）",
        explanation:
          "関係代名詞は先行詞（この場合は「book」）を修飾する形容詞節を導きます。先行詞が物の場合、「that」または「which」を使用します。「that」は制限的用法（限定的な情報）で、「which」は非制限的用法（追加情報）で使われることが多いです。",
        example:
          "The movie that I watched yesterday was great. （昨日私が見た映画は素晴らしかった）",
      },
      {
        rule: "that vs which",
        explanation:
          "一般的に、制限的用法（先行詞を限定する必要がある場合）では「that」が好まれます。特に「the only...」「the first...」などの限定的な表現の後では「that」を使うのが標準です。",
        example:
          "This is the only book that I have. （これは私が持っている唯一の本です）",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を5回音読してください。特に「that I borrowed」の部分をスムーズに発音することを意識してください。",
      phraseReplacements: [
        {
          original: "The book that I borrowed last week was very interesting.",
          instruction:
            "「the book」と「last week」の部分を別の物や時間に入れ替えて、同じ文法構造で文を作ってみましょう。",
          examples: [
            "The movie that I watched last night was very interesting. （昨夜見た映画はとても面白かった）",
            "The restaurant that I visited last month was very good. （先月訪れたレストランはとても良かった）",
            "The song that I heard yesterday was very beautiful. （昨日聞いた歌はとても美しかった）",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「Do you remember the book that I told you about?（私が話した本を覚えていますか？）」のように、関係代名詞を使って特定の物や人について説明することがよくあります。",
    },
    hint: "先行詞が物（book）で、関係詞節内で目的語として機能しているため、「that」または「which」を使用します。",
  },

  {
    id: "grammar_003",
    category: "grammar",
    difficulty: "intermediate",
    question: "_____ she studies hard, she will pass the exam.",
    questionTranslation: "彼女が一生懸命勉強すれば、試験に合格するでしょう。",
    questionKatakana: "イフ シー スタディーズ ハード、 シー ウィル パス ザ イグザム",
    options: [
      {
        id: "opt_003_a",
        text: "If",
        isCorrect: true,
        translation: "もし、〜ならば（条件を表す接続詞）",
      },
      {
        id: "opt_003_b",
        text: "Although",
        isCorrect: false,
        translation: "〜だけれども（譲歩を表す接続詞）",
      },
      {
        id: "opt_003_c",
        text: "Because",
        isCorrect: false,
        translation: "なぜなら（理由を表す接続詞）",
      },
      {
        id: "opt_003_d",
        text: "Unless",
        isCorrect: false,
        translation: "〜でない限り（否定的条件を表す接続詞）",
      },
    ],
    explanation:
      "正解は「If」です。この文は条件を表す従属節を導く接続詞を必要としています。「If she studies hard」は「彼女が一生懸命勉強すれば」という条件を表し、主節「she will pass the exam」の結果につながります。これは第一条件法（現在の事実に基づく条件）です。",
    vocabularyItems: [
      {
        word: "If",
        meaning: "もし、〜ならば",
        katakanaReading: "イフ",
      },
      {
        word: "studies",
        meaning: "勉強する（三人称単数現在形）",
        katakanaReading: "スタディーズ",
      },
      {
        word: "hard",
        meaning: "一生懸命に、努力して",
        katakanaReading: "ハード",
      },
      {
        word: "pass",
        meaning: "合格する、通過する",
        katakanaReading: "パス",
      },
      {
        word: "exam",
        meaning: "試験、テスト",
        katakanaReading: "イグザム",
      },
    ],
    grammarPoints: [
      {
        rule: "第一条件法（First Conditional）",
        explanation:
          "第一条件法は「If + 現在形, will + 動詞」の形で、現在の事実に基づいた実現可能な条件と結果を表します。この文では、「彼女が一生懸命勉強すれば（条件）、試験に合格するでしょう（結果）」という論理的な因果関係を示しています。",
        example:
          "If you study hard, you will get good grades. （勉強を頑張れば、良い成績が取れます）",
      },
      {
        rule: "接続詞の使い分け",
        explanation:
          "条件を表す接続詞には「If（もし〜ならば）」と「Unless（〜でない限り）」があります。「Although（〜だけれども）」は譲歩を、「Because（なぜなら）」は理由を表すため、この文には適しません。",
        example:
          "Unless you study, you will fail. （勉強しない限り、失敗するでしょう）= If you don't study, you will fail.",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を5回音読してください。特に「If」から「hard」までの従属節と、「she will pass」の主節をスムーズに発音することを意識してください。",
      phraseReplacements: [
        {
          original: "If she studies hard, she will pass the exam.",
          instruction:
            "「studies hard」と「pass the exam」の部分を別の動作や結果に入れ替えて、同じ文法構造で文を作ってみましょう。",
          examples: [
            "If you exercise regularly, you will be healthy. （定期的に運動すれば、健康になるでしょう）",
            "If you practice English daily, you will improve. （毎日英語を練習すれば、上達するでしょう）",
            "If you save money, you will buy a car. （お金を貯めれば、車を買えるでしょう）",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「If you need help, let me know.（手伝いが必要なら、教えてください）」のように、第一条件法を使って相手に条件付きの提案をすることがよくあります。",
    },
    hint: "この文は条件を表しているため、「If」が正解です。",
  },

  {
    id: "grammar_004",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The project _____ by the team members before the deadline was impressive.",
    questionTranslation: "期限前にチームメンバーによって完成させられたプロジェクトは印象的でした。",
    questionKatakana:
      "ザ プロジェクト ワズ コンプリーテッド バイ ザ ティーム メンバーズ ビフォア ザ デッドライン ワズ インプレッシブ",
    options: [
      {
        id: "opt_004_a",
        text: "completed",
        isCorrect: true,
        translation: "完成させた（過去分詞）",
      },
      {
        id: "opt_004_b",
        text: "completing",
        isCorrect: false,
        translation: "完成させている（現在分詞）",
      },
      {
        id: "opt_004_c",
        text: "complete",
        isCorrect: false,
        translation: "完成させる（原形）",
      },
      {
        id: "opt_004_d",
        text: "completes",
        isCorrect: false,
        translation: "完成させる（三人称単数現在形）",
      },
    ],
    explanation:
      "正解は「completed」です。この文では、「the project」を修飾する分詞句が使われています。「completed by the team members before the deadline」は「期限前にチームメンバーによって完成させられた」という意味の過去分詞句で、受動態の意味を持ちます。過去分詞を使うことで、プロジェクトが完成させられたという完了した状態を表しています。",
    vocabularyItems: [
      {
        word: "project",
        meaning: "プロジェクト、計画",
        katakanaReading: "プロジェクト",
      },
      {
        word: "completed",
        meaning: "完成させた（過去分詞）",
        katakanaReading: "コンプリーテッド",
      },
      {
        word: "team members",
        meaning: "チームメンバー、チーム員",
        katakanaReading: "ティーム メンバーズ",
      },
      {
        word: "deadline",
        meaning: "期限、締め切り",
        katakanaReading: "デッドライン",
      },
      {
        word: "impressive",
        meaning: "印象的な、素晴らしい",
        katakanaReading: "インプレッシブ",
      },
    ],
    grammarPoints: [
      {
        rule: "分詞句（Participial Phrases）",
        explanation:
          "分詞句は名詞を修飾する形容詞的な役割を果たします。過去分詞を使った分詞句は受動態の意味を持ち、「〜された」という意味を表します。この文では、「completed by the team members before the deadline」が「the project」を修飾しています。",
        example:
          "The book written by the famous author was a bestseller. （有名な著者によって書かれた本はベストセラーでした）",
      },
      {
        rule: "過去分詞の用法",
        explanation:
          "過去分詞は受動態や完了形の一部として使われるだけでなく、名詞を修飾する形容詞的な役割も果たします。この場合、「completed」は「the project」が「完成させられた」という状態を表しています。",
        example:
          "The broken window needs to be repaired. （壊れた窓は修理が必要です）",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を5回音読してください。特に「completed by the team members before the deadline」の部分をスムーズに発音することを意識してください。",
      phraseReplacements: [
        {
          original:
            "The project completed by the team members before the deadline was impressive.",
          instruction:
            "「project」と「completed」の部分を別の名詞と過去分詞に入れ替えて、同じ文法構造で文を作ってみましょう。",
          examples: [
            "The report submitted by the students before the deadline was impressive. （学生によって期限前に提出されたレポートは印象的でした）",
            "The building constructed by the engineers before the deadline was impressive. （エンジニアによって期限前に建設された建物は印象的でした）",
            "The presentation prepared by the staff before the deadline was impressive. （スタッフによって期限前に準備されたプレゼンテーションは印象的でした）",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「The food prepared by the chef was delicious.（シェフによって準備された食事はおいしかった）」のように、分詞句を使って誰かが何かをした結果について説明することがあります。",
    },
    hint: "この文では、「the project」を修飾する分詞句が必要です。過去分詞「completed」を使用します。",
  },

  {
    id: "grammar_005",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The student _____ is studying abroad next year is my best friend.",
    questionTranslation: "来年留学する学生は私の親友です。",
    questionKatakana:
      "ザ スチューデント フー イズ スタディーイング ア ブロード ネクスト イヤー イズ マイ ベスト フレンド",
    options: [
      {
        id: "opt_005_a",
        text: "who",
        isCorrect: true,
        translation: "誰が、誰を（人を指す関係代名詞）",
      },
      {
        id: "opt_005_b",
        text: "which",
        isCorrect: false,
        translation: "どれ、どの（物を指す関係代名詞）",
      },
      {
        id: "opt_005_c",
        text: "that",
        isCorrect: false,
        translation: "〜する（関係代名詞）",
      },
      {
        id: "opt_005_d",
        text: "where",
        isCorrect: false,
        translation: "どこ（場所を指す関係副詞）",
      },
    ],
    explanation:
      "正解は「who」です。関係代名詞を選ぶ問題です。先行詞が「the student（学生）」という人であり、関係詞節内で主語として機能しているため、「who」を使用します。「who」は人を指す関係代名詞で、関係詞節内で主語または目的語として使われます。",
    vocabularyItems: [
      {
        word: "student",
        meaning: "学生",
        katakanaReading: "スチューデント",
      },
      {
        word: "studying",
        meaning: "勉強している、学んでいる",
        katakanaReading: "スタディーイング",
      },
      {
        word: "abroad",
        meaning: "海外に、留学して",
        katakanaReading: "ア ブロード",
      },
      {
        word: "next year",
        meaning: "来年",
        katakanaReading: "ネクスト イヤー",
      },
      {
        word: "best friend",
        meaning: "親友、親しい友人",
        katakanaReading: "ベスト フレンド",
      },
    ],
    grammarPoints: [
      {
        rule: "関係代名詞 who（人を指す）",
        explanation:
          "「who」は人を指す関係代名詞で、関係詞節内で主語または目的語として使われます。この文では、「who」が関係詞節「who is studying abroad next year」の主語として機能しており、「the student」という先行詞を修飾しています。",
        example:
          "The teacher who teaches English is very kind. （英語を教えている先生はとても親切です）",
      },
      {
        rule: "who vs which vs that",
        explanation:
          "関係代名詞の選択は先行詞によって決まります。人の場合は「who」、物の場合は「which」または「that」を使用します。「that」は人にも物にも使える万能な関係代名詞ですが、この文では「who」がより自然です。",
        example:
          "The book which I read was interesting. （私が読んだ本は面白かった）/ The book that I read was interesting.",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を5回音読してください。特に「who is studying abroad next year」の部分をスムーズに発音することを意識してください。",
      phraseReplacements: [
        {
          original: "The student who is studying abroad next year is my best friend.",
          instruction:
            "「studying abroad」と「next year」の部分を別の活動や時間に入れ替えて、同じ文法構造で文を作ってみましょう。",
          examples: [
            "The student who is working in Tokyo next year is my best friend. （来年東京で働く学生は私の親友です）",
            "The student who is learning Japanese next year is my best friend. （来年日本語を学ぶ学生は私の親友です）",
            "The student who is starting university next year is my best friend. （来年大学に入学する学生は私の親友です）",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「Do you know the person who is sitting over there?（あそこに座っている人を知っていますか？）」のように、関係代名詞「who」を使って特定の人について説明することがよくあります。",
    },
    hint: "先行詞が人（student）で、関係詞節内で主語として機能しているため、「who」を使用します。",
  },
];
