import { QuizQuestion } from "./quizzes";

export const grammarAdvancedQuizzes: QuizQuestion[] = [
  {
    id: "ga-001",
    category: "grammar",
    difficulty: "advanced",
    question: "If I had studied harder, I _____ the entrance exam now.",
    options: [
      { id: "ga001-a", text: "would pass", isCorrect: true, translation: "合格できるのに（混合仮定法・現在の結果）" },
      { id: "ga001-b", text: "would have passed", isCorrect: false, translation: "合格できていたのに（第三条件法）" },
      { id: "ga001-c", text: "will pass", isCorrect: false, translation: "合格するだろう（直説法未来）" },
      { id: "ga001-d", text: "had passed", isCorrect: false, translation: "合格していた（過去完了）" },
    ],
    explanation: "混合仮定法（Mixed Conditional）では、過去の条件（If + had + PP）と現在の結果（would + 動詞原形）を組み合わせます。「もし過去にもっと勉強していたら、今頃合格できるのに」という文です。「now」が現在の結果を示すサインです。",
    hint: "if 節は過去の仮定（had studied）、主節は「now」があるので現在の結果を表します。混合仮定法のパターンは？",
    questionTranslation: "もし一生懸命勉強していたなら、今頃入学試験に合格できるのに。",
    questionKatakana: "イフ アイ ハッド スタディド ハーダー、アイ ウッド パス ザ エントランス イグザム ナウ。",
    vocabularyItems: [
      { word: "entrance exam", meaning: "入学試験", katakanaReading: "エントランス イグザム", example: "She passed the entrance exam on her first try." },
      { word: "mixed conditional", meaning: "混合仮定法", katakanaReading: "ミックスト コンディショナル", example: "Mixed conditionals connect past and present." },
    ],
    grammarPoints: [
      {
        rule: "混合仮定法（Mixed Conditional）",
        explanation: "過去の条件→現在の結果：If + had + PP, would + 動詞原形（now）。現在の条件→過去の結果：If + were/did, would have + PP。「If I had taken that job, I would be living in Paris now.」",
        example: "If she had taken better care of her health, she would be fine now. / If I were more organized, I would have finished earlier.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「If I had studied harder, I would pass the entrance exam now.」を5回音読してください。had studied と would pass のコントラストに注意しましょう。",
      phraseReplacements: [
        {
          original: "If I had studied harder, I would pass the entrance exam now.",
          instruction: "混合仮定法を使って過去の選択が現在に与える影響を表しましょう。",
          examples: [
            "If I had learned to drive earlier, I would have a car now.",
            "If she had invested her savings, she would be wealthy now.",
            "If they had planned better, the project would be on track now.",
          ],
        },
      ],
      dailyConversationTips: "「If I had known earlier, I would be better prepared now.」のように、後悔や反省を現在の状況と結びつけて表現するときに混合仮定法が使えます。",
    },
  },
  {
    id: "ga-002",
    category: "grammar",
    difficulty: "advanced",
    question: "It was John _____ submitted the winning proposal.",
    options: [
      { id: "ga002-a", text: "who", isCorrect: true, translation: "（人を指す関係代名詞・強調構文）" },
      { id: "ga002-b", text: "which", isCorrect: false, translation: "（物・動物を指す関係代名詞）" },
      { id: "ga002-c", text: "what", isCorrect: false, translation: "（疑問代名詞・名詞節を導く）" },
      { id: "ga002-d", text: "that", isCorrect: false, translation: "（that は使えるが who が最適）" },
    ],
    explanation: "「It is/was + 強調する要素 + who/that + 残りの部分」が強調構文（Cleft Sentence）です。John（人）を強調しているので who を使うのが最も適切です（that も可ですが、人には who が自然です）。",
    hint: "「It was _____ who/that...」の形は強調構文です。John は人なので何を使いますか？",
    questionTranslation: "優勝提案を提出したのは、ほかでもないジョンでした。",
    questionKatakana: "イット ワズ ジョン フー サブミテッド ザ ウィニング プロポーザル。",
    vocabularyItems: [
      { word: "cleft sentence", meaning: "強調構文（It is/was...who/that...）", katakanaReading: "クレフト センテンス", example: "It was the teacher who explained the rule." },
      { word: "proposal", meaning: "提案、企画書", katakanaReading: "プロポーザル", example: "She submitted a proposal for the new project." },
    ],
    grammarPoints: [
      {
        rule: "強調構文（Cleft Sentence）",
        explanation: "「It is/was + 強調部分 + who/that + 残り」の形で、特定の要素を強調します。強調する要素が人なら who（または that）、物・場所・時なら that を使います。「It was yesterday that I saw her.」（私が彼女に会ったのは昨日でした）",
        example: "It is hard work that leads to success. / It was in this room that the meeting took place. / It was you who inspired me.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「It was John who submitted the winning proposal.」を5回音読してください。John を強く読み、強調を意識しましょう。",
      phraseReplacements: [
        {
          original: "It was John who submitted the winning proposal.",
          instruction: "強調構文を使って特定の情報を強調しましょう。",
          examples: [
            "It was the lack of sleep that caused her poor performance.",
            "It was during the summer that they first met.",
            "It is teamwork that makes the project successful.",
          ],
        },
      ],
      dailyConversationTips: "「It's the timing that matters most.」（一番大事なのはタイミングです）のように、強調構文は何が最も重要かを明確に伝えたいときに使えます。",
    },
  },
  {
    id: "ga-003",
    category: "grammar",
    difficulty: "advanced",
    question: "_____ known the truth, I would have acted differently.",
    options: [
      { id: "ga003-a", text: "If I had", isCorrect: false, translation: "もし知っていたなら（通常の仮定法）" },
      { id: "ga003-b", text: "Had I", isCorrect: true, translation: "もし知っていたなら（if 省略・倒置）" },
      { id: "ga003-c", text: "Should I have", isCorrect: false, translation: "（誤った形）" },
      { id: "ga003-d", text: "Would I have", isCorrect: false, translation: "（誤った形）" },
    ],
    explanation: "仮定法で if を省略する場合、助動詞（had/should/were）と主語を倒置させます。「Had I known」= 「If I had known」。書き言葉や改まった場面でよく使われる上級表現です。",
    hint: "if を省略した仮定法の倒置形です。「Had I」= 「If I had」と同じ意味になります。",
    questionTranslation: "真実を知っていたならば、私は違う行動をとっていたでしょう。",
    questionKatakana: "ハッド アイ ノウン ザ トゥルース、アイ ウッド ハブ アクテッド ディファレントリー。",
    vocabularyItems: [
      { word: "inversion (conditional)", meaning: "条件の倒置（if 省略）", katakanaReading: "インバージョン", example: "Were I in your position, I would accept." },
      { word: "act differently", meaning: "違う行動をとる", katakanaReading: "アクト ディファレントリー", example: "If I could go back, I would act differently." },
    ],
    grammarPoints: [
      {
        rule: "条件の倒置（If 省略）",
        explanation: "仮定法で if を省略し、助動詞を文頭に置く倒置が可能です。Had I known...（If I had known...）/ Were she here...（If she were here...）/ Should you need help...（If you should need help...）。格式ある書き言葉でよく使われます。",
        example: "Had they arrived earlier, they would have met the director. / Were it not for your help, I couldn't do this.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Had I known the truth, I would have acted differently.」を5回音読してください。Had I の倒置のリズムを掴みましょう。",
      phraseReplacements: [
        {
          original: "Had I known the truth, I would have acted differently.",
          instruction: "if 省略の倒置仮定法を使った文を作ってみましょう。",
          examples: [
            "Had she prepared more, she would have done better on the exam.",
            "Were I to win the lottery, I would travel the world.",
            "Should you encounter any problems, please contact us immediately.",
          ],
        },
      ],
      dailyConversationTips: "この倒置形は主にビジネス文書やアカデミックなライティングで使います。「Should you have any questions, please feel free to ask.」は丁寧なメールの結び文として定番です。",
    },
  },
  {
    id: "ga-004",
    category: "grammar",
    difficulty: "advanced",
    question: "The report _____ by the manager contains several errors.",
    options: [
      { id: "ga004-a", text: "written", isCorrect: true, translation: "（書かれた：過去分詞による後置修飾）" },
      { id: "ga004-b", text: "writing", isCorrect: false, translation: "（書いている：現在分詞・能動の意味）" },
      { id: "ga004-c", text: "that writes", isCorrect: false, translation: "（誤った関係詞節）" },
      { id: "ga004-d", text: "was written", isCorrect: false, translation: "（受動態の定形：主文の動詞と競合）" },
    ],
    explanation: "過去分詞（written）を名詞の後ろに置くと「〜された」という受動の意味で名詞を修飾します（分詞後置修飾）。「written by the manager」で「マネージャーによって書かれた」という意味になります。",
    hint: "「the report _____ by the manager」の空欄は report を後ろから修飾しています。受動の意味の分詞は何形ですか？",
    questionTranslation: "マネージャーによって書かれた報告書にはいくつかの誤りが含まれています。",
    questionKatakana: "ザ レポート リッテン バイ ザ マネージャー コンテインズ セブラル エラーズ。",
    vocabularyItems: [
      { word: "reduced relative clause", meaning: "分詞による後置修飾（関係詞節の省略）", katakanaReading: "リデュースト リラティブ クローズ", example: "The car parked outside is mine." },
      { word: "contain", meaning: "含む", katakanaReading: "コンテイン", example: "This document contains important information." },
    ],
    grammarPoints: [
      {
        rule: "分詞後置修飾（Reduced Relative Clause）",
        explanation: "関係詞節を分詞で短縮できます。能動（〜している）→ 現在分詞（-ing）：the man sitting over there = the man who is sitting. 受動（〜された）→ 過去分詞（PP）：the report written yesterday = the report that was written.",
        example: "The students taking the exam must remain quiet. / The building damaged in the storm was repaired. / The results obtained from the study were surprising.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The report written by the manager contains several errors.」を5回音読してください。written by という過去分詞句のまとまりを意識しましょう。",
      phraseReplacements: [
        {
          original: "The report written by the manager contains several errors.",
          instruction: "分詞後置修飾を使って名詞を修飾する文を作りましょう。",
          examples: [
            "The article published last week attracted many readers.",
            "The students enrolled in this program are highly motivated.",
            "The problems identified in the survey need immediate attention.",
          ],
        },
      ],
      dailyConversationTips: "分詞後置修飾はアカデミックなライティングで非常によく使われます。「the data collected from the experiment」のようなフレーズで簡潔に情報を伝えることができます。",
    },
  },
  {
    id: "ga-005",
    category: "grammar",
    difficulty: "advanced",
    question: "Rarely _____ such a dedicated student in my teaching career.",
    options: [
      { id: "ga005-a", text: "I have seen", isCorrect: false, translation: "（通常の語順）" },
      { id: "ga005-b", text: "I saw", isCorrect: false, translation: "（通常の過去形）" },
      { id: "ga005-c", text: "have I seen", isCorrect: true, translation: "（否定副詞の倒置形）" },
      { id: "ga005-d", text: "did I see", isCorrect: false, translation: "（過去形の倒置：時制不一致）" },
    ],
    explanation: "「Rarely, Never, Seldom, Hardly, Little, Not only」などの否定的な副詞が文頭に来ると、疑問文と同じ語順に倒置されます（Rarely have I seen...）。これは強調と文体的な効果のための上級表現です。",
    hint: "否定的な副詞（Rarely）が文頭に来ると倒置が起きます。現在完了の倒置形はどう作りますか？",
    questionTranslation: "私の教師キャリアの中で、これほど熱心な学生に会ったことはほとんどありません。",
    questionKatakana: "レアリー ハブ アイ スィーン サッチ ア デディケイテッド スチューデント イン マイ ティーチング キャリア。",
    vocabularyItems: [
      { word: "rarely", meaning: "めったに〜ない", katakanaReading: "レアリー", example: "She rarely misses a deadline." },
      { word: "dedicated", meaning: "熱心な、献身的な", katakanaReading: "デディケイテッド", example: "He is a dedicated researcher." },
      { word: "inversion", meaning: "倒置", katakanaReading: "インバージョン", example: "Never have I seen such beauty." },
    ],
    grammarPoints: [
      {
        rule: "否定的副詞による倒置（Negative Adverb Inversion）",
        explanation: "Never, Rarely, Seldom, Hardly...when, Not only...but also, No sooner...than, Little, Only then が文頭に来ると助動詞 + 主語 の倒置が起きます。Rarely have I seen... / Never did she complain. / Not only did he pass, but he also won a prize.",
        example: "Never have I been so impressed. / Seldom does she arrive late. / Not only is he talented, but he is also hardworking.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Rarely have I seen such a dedicated student in my teaching career.」を5回音読してください。Rarely の後の倒置（have I）を意識して読みましょう。",
      phraseReplacements: [
        {
          original: "Rarely have I seen such a dedicated student in my teaching career.",
          instruction: "否定副詞を使った倒置文を作ってみましょう。",
          examples: [
            "Never have I encountered such a difficult problem.",
            "Seldom do we get such a wonderful opportunity.",
            "Not only did she complete the project on time, but she also exceeded expectations.",
          ],
        },
      ],
      dailyConversationTips: "この構文はスピーチや改まった文章で印象的な表現として使われます。「Never have I been more proud.」（これほど誇りに思ったことはない）のように感情的な強調に効果的です。",
    },
  },
  {
    id: "ga-006",
    category: "grammar",
    difficulty: "advanced",
    question: "_____ they decided at the meeting surprised everyone in the department.",
    options: [
      { id: "ga006-a", text: "That", isCorrect: false, translation: "（接続詞：後ろに完全な文が必要）" },
      { id: "ga006-b", text: "What", isCorrect: true, translation: "（名詞節：〜すること／もの）" },
      { id: "ga006-c", text: "Which", isCorrect: false, translation: "（先行詞が必要な関係代名詞）" },
      { id: "ga006-d", text: "How", isCorrect: false, translation: "（方法・程度を導く間接疑問）" },
    ],
    explanation: "「What + 主語 + 動詞」は名詞節として機能し、「〜すること・〜もの」という意味です。ここでは「彼らが決定したこと（what they decided）」全体が主語になっています。that は後ろに完全な文が必要ですが、what 節は目的語が欠けた不完全な文が続きます。",
    hint: "空欄に入る語は主語となる名詞節を導きます。「decided」の目的語が欠けているので何を使いますか？",
    questionTranslation: "会議で彼らが決定したことは、部署の全員を驚かせました。",
    questionKatakana: "ワット ゼイ ディサイデッド アット ザ ミーティング サープライズド エブリワン イン ザ ディパートメント。",
    vocabularyItems: [
      { word: "nominal clause", meaning: "名詞節", katakanaReading: "ノミナル クローズ", example: "What she said was very helpful." },
      { word: "department", meaning: "部署、学部", katakanaReading: "ディパートメント", example: "She works in the marketing department." },
    ],
    grammarPoints: [
      {
        rule: "what 名詞節（Nominal what-clause）",
        explanation: "what が導く名詞節は主語・目的語・補語になります。「What + 主語 + 動詞（＋目的語なし）」の形で「〜すること／もの」を表します。free relative clause とも言います。that 節との違い：that 節は完全な文が続く（It is true that she left.）、what 節は目的語が欠けた不完全な文。",
        example: "What he said shocked me. / I don't understand what she wants. / This is exactly what I was looking for.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「What they decided at the meeting surprised everyone in the department.」を5回音読してください。what they decided をひとまとまりの主語として読みましょう。",
      phraseReplacements: [
        {
          original: "What they decided at the meeting surprised everyone.",
          instruction: "what 名詞節を使った文を作ってみましょう。",
          examples: [
            "What the professor explained in class was very difficult.",
            "What she achieved in one year is remarkable.",
            "I don't know what I should do next.",
          ],
        },
      ],
      dailyConversationTips: "「What I really want is more time.」（私が本当に欲しいのは時間です）のように what 節を使うと、何を最も重視しているかを明確に伝えられます。",
    },
  },
  {
    id: "ga-007",
    category: "grammar",
    difficulty: "advanced",
    question: "The deadline _____ extended due to the unforeseen circumstances.",
    options: [
      { id: "ga007-a", text: "might extend", isCorrect: false, translation: "延長するかもしれない（能動態）" },
      { id: "ga007-b", text: "might be extended", isCorrect: true, translation: "延長されるかもしれない（受動態 + 法助動詞）" },
      { id: "ga007-c", text: "might have extended", isCorrect: false, translation: "延長したかもしれない（完了形能動）" },
      { id: "ga007-d", text: "extended", isCorrect: false, translation: "延長された（過去形のみ）" },
    ],
    explanation: "法助動詞（might/could/should/may）と受動態を組み合わせるときは「助動詞 + be + 過去分詞」の形を使います。締め切りは「延長される」（受動）もので、might で可能性を表しているので might be extended が正解です。",
    hint: "締め切りは「延長する」のではなく「延長される」（受動）です。法助動詞と受動態を組み合わせた形は？",
    questionTranslation: "予期せぬ事情のため、締め切りが延長されるかもしれません。",
    questionKatakana: "ザ デッドライン マイト ビー エクステンデッド デュー トゥ ザ アンフォーシーン サーカムスタンシズ。",
    vocabularyItems: [
      { word: "unforeseen", meaning: "予期しない、想定外の", katakanaReading: "アンフォーシーン", example: "Due to unforeseen circumstances, the event was canceled." },
      { word: "modal + passive", meaning: "法助動詞 + 受動態", katakanaReading: "モーダル プラス パッシブ", example: "The issue should be addressed immediately." },
      { word: "due to", meaning: "〜のせいで、〜が原因で", katakanaReading: "デュー トゥ", example: "The delay was due to a technical problem." },
    ],
    grammarPoints: [
      {
        rule: "法助動詞 + 受動態（Modal + be + PP）",
        explanation: "法助動詞と受動態を組み合わせる形：can/could/will/would/should/may/might/must + be + 過去分詞。「The problem should be solved.」「All documents must be submitted by Friday.」「The event might be canceled.」",
        example: "This plan should be revised. / The contract must be signed by both parties. / These results could be interpreted in different ways.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The deadline might be extended due to the unforeseen circumstances.」を5回音読してください。might be extended をつなげて発音しましょう。",
      phraseReplacements: [
        {
          original: "The deadline might be extended due to the unforeseen circumstances.",
          instruction: "法助動詞と受動態を組み合わせた文を作りましょう。",
          examples: [
            "The project should be completed by the end of the month.",
            "New policies will be announced at the next meeting.",
            "The application must be submitted before the deadline.",
          ],
        },
      ],
      dailyConversationTips: "ビジネスでは「It should be noted that...」（〜に留意すべきです）「This issue needs to be addressed.」（この問題は対処される必要があります）のような受動態が多用されます。",
    },
  },
  {
    id: "ga-008",
    category: "grammar",
    difficulty: "advanced",
    question: "It is essential that every participant _____ a signed consent form.",
    options: [
      { id: "ga008-a", text: "submits", isCorrect: false, translation: "提出する（三人称単数現在）" },
      { id: "ga008-b", text: "submitted", isCorrect: false, translation: "提出した（過去形）" },
      { id: "ga008-c", text: "submit", isCorrect: true, translation: "提出する（仮定法現在・原形）" },
      { id: "ga008-d", text: "will submit", isCorrect: false, translation: "提出するだろう（未来形）" },
    ],
    explanation: "「It is essential/important/necessary/recommended/required that + 主語 + 動詞の原形（仮定法現在）」のパターンです。that 節の動詞は主語の人称・数に関わらず原形（should は省略）を使います。これはアメリカ英語で特に重要です。",
    hint: "「It is essential that...」の後の that 節では仮定法現在を使います。動詞は三人称単数でも原形になります。",
    questionTranslation: "すべての参加者が署名した同意書を提出することが不可欠です。",
    questionKatakana: "イット イズ エッセンシャル ザット エブリ パーティシパント サブミット ア サインド コンセント フォーム。",
    vocabularyItems: [
      { word: "subjunctive mood", meaning: "仮定法（法の一種）", katakanaReading: "サブジャンクティブ ムード", example: "The doctor recommended that he rest." },
      { word: "consent form", meaning: "同意書", katakanaReading: "コンセント フォーム", example: "Please sign the consent form before the procedure." },
      { word: "essential", meaning: "不可欠な、必須の", katakanaReading: "エッセンシャル", example: "Hydration is essential for good health." },
    ],
    grammarPoints: [
      {
        rule: "仮定法現在（Mandative Subjunctive）",
        explanation: "要求・提案・推薦・命令を表す動詞（insist, recommend, suggest, demand, require, request）または形容詞（essential, important, necessary）の後の that 節では、主語の人称に関わらず動詞の原形を使います。英国英語では should + 原形を使うこともあります。",
        example: "We recommend that he take more exercise. / It is necessary that all students attend the orientation. / The committee insisted that the vote be held immediately.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「It is essential that every participant submit a signed consent form.」を5回音読してください。submit が原形であることを意識しながら読みましょう。",
      phraseReplacements: [
        {
          original: "It is essential that every participant submit a signed consent form.",
          instruction: "仮定法現在を使った要求・推薦の文を作りましょう。",
          examples: [
            "It is important that each student complete the assignment independently.",
            "The professor recommends that all students read the article before class.",
            "The company requires that employees wear proper identification at all times.",
          ],
        },
      ],
      dailyConversationTips: "アカデミックな文章や公式な文書で「It is recommended that...」「It is required that...」という表現はよく使われます。論文やレポートで使えるようにしておきましょう。",
    },
  },
  {
    id: "ga-009",
    category: "grammar",
    difficulty: "advanced",
    question: "The manager asked us to review the data, _____ a comprehensive report, and present findings to the board.",
    options: [
      { id: "ga009-a", text: "to prepare", isCorrect: false, translation: "（to が重複・並列構造を崩す）" },
      { id: "ga009-b", text: "preparing", isCorrect: false, translation: "（-ing は to 不定詞と並列不可）" },
      { id: "ga009-c", text: "prepare", isCorrect: true, translation: "（原形：to の省略で並列を保つ）" },
      { id: "ga009-d", text: "prepared", isCorrect: false, translation: "（過去形は並列構造を崩す）" },
    ],
    explanation: "並列構造（Parallel Structure）では同じ文法的形が連続します。「to review ... (to) prepare ... (and) (to) present」のように、最初の to の後は原形が続き、2番目以降は to を省略して原形のみを使います。",
    hint: "「review ... _____ ... and present」という並列構造です。最初の to review に合わせて動詞はどんな形にしますか？",
    questionTranslation: "マネージャーは私たちに、データを精査し、包括的なレポートを作成し、調査結果を取締役会に発表するよう依頼しました。",
    questionKatakana: "ザ マネージャー アスクド アス トゥ リビュー ザ データ、プリペア ア コンプリヘンシブ レポート、アンド プレゼント ファインディングズ トゥ ザ ボード。",
    vocabularyItems: [
      { word: "parallel structure", meaning: "並列構造（文法的形を揃える）", katakanaReading: "パラレル ストラクチャー", example: "She likes swimming, hiking, and cycling." },
      { word: "comprehensive", meaning: "包括的な、総合的な", katakanaReading: "コンプリヘンシブ", example: "We need a comprehensive plan." },
      { word: "board (of directors)", meaning: "取締役会", katakanaReading: "ボード", example: "The decision was approved by the board." },
    ],
    grammarPoints: [
      {
        rule: "並列構造（Parallel Structure）",
        explanation: "and や or でつながれた要素は同じ文法的形にそろえます。「She likes to swim, (to) run, and (to) cycle.」「He spoke clearly, confidently, and persuasively.」並列の乱れは文法的誤りです。「She likes swimming and to run」は不正解。",
        example: "The proposal was well-organized, clearly written, and thoroughly researched. / We need to identify the problem, analyze the data, and develop a solution.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The manager asked us to review the data, prepare a report, and present findings to the board.」を5回音読してください。3つの動作がリズムよく並ぶように読みましょう。",
      phraseReplacements: [
        {
          original: "The manager asked us to review the data, prepare a report, and present findings.",
          instruction: "並列構造を使って3つの動作を列挙する文を作りましょう。",
          examples: [
            "The professor asked students to read the chapter, take notes, and write a summary.",
            "To succeed in this course, you need to attend classes, complete assignments, and participate actively.",
            "The job requires the ability to work independently, communicate effectively, and meet deadlines.",
          ],
        },
      ],
      dailyConversationTips: "面接などで自分のスキルを話すときは「I can analyze data, create reports, and present to stakeholders.」のように並列構造で整理して話すと説得力が増します。",
    },
  },
  {
    id: "ga-010",
    category: "grammar",
    difficulty: "advanced",
    question: "The harder you practice English, _____ you will become at communication.",
    options: [
      { id: "ga010-a", text: "the better", isCorrect: true, translation: "よりうまくなる（二重比較）" },
      { id: "ga010-b", text: "better", isCorrect: false, translation: "（the が必要）" },
      { id: "ga010-c", text: "the more better", isCorrect: false, translation: "（誤った重複）" },
      { id: "ga010-d", text: "the best", isCorrect: false, translation: "（最上級：比較に使えない）" },
    ],
    explanation: "「The + 比較級..., the + 比較級...」は「〜すればするほど、ますます〜」という相関表現（Double Comparative）です。The harder... the better... で「より一生懸命練習するほど、よりうまくなる」という意味です。",
    hint: "「The + 比較級, the + 比較級」の構造です。better の前に何が必要ですか？",
    questionTranslation: "英語を練習すればするほど、コミュニケーションがうまくなります。",
    questionKatakana: "ザ ハーダー ユー プラクティス イングリッシュ、ザ ベター ユー ウィル ビカム アット コミュニケーション。",
    vocabularyItems: [
      { word: "double comparative", meaning: "二重比較（the＋比較級、the＋比較級）", katakanaReading: "ダブル コンパラティブ", example: "The more you read, the more you learn." },
      { word: "communication", meaning: "コミュニケーション、意思疎通", katakanaReading: "コミュニケーション", example: "Good communication is key to success." },
    ],
    grammarPoints: [
      {
        rule: "二重比較（The + 比較級, the + 比較級）",
        explanation: "「The + 比較級 + 主語 + 動詞, the + 比較級 + 主語 + 動詞」で「〜すればするほど、ますます〜」を表します。定冠詞 the を必ず使い、形容詞・副詞の比較級を使います。「The more you give, the more you receive.」",
        example: "The sooner you start, the sooner you'll finish. / The more experience you gain, the more confident you become. / The harder the challenge, the greater the reward.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The harder you practice English, the better you will become at communication.」を5回音読してください。The...the...のリズムを覚えましょう。",
      phraseReplacements: [
        {
          original: "The harder you practice, the better you will become.",
          instruction: "二重比較を使って励ましや格言を作りましょう。",
          examples: [
            "The more mistakes you make, the more you learn.",
            "The earlier you start preparing, the less stressed you will be.",
            "The more clearly you write, the easier it is to understand.",
          ],
        },
      ],
      dailyConversationTips: "「The more, the merrier!」（多ければ多いほど楽しい！）は英語の決まり文句です。この構造を使って自分なりの格言を作ってみましょう。",
    },
  },
  {
    id: "ga-011",
    category: "grammar",
    difficulty: "advanced",
    question: "No sooner had she arrived at the venue _____ the ceremony began.",
    options: [
      { id: "ga011-a", text: "than", isCorrect: true, translation: "〜するやいなや（no sooner...than）" },
      { id: "ga011-b", text: "when", isCorrect: false, translation: "（hardly/scarcely...when と組み合わせる）" },
      { id: "ga011-c", text: "that", isCorrect: false, translation: "（so...that と混同しない）" },
      { id: "ga011-d", text: "as", isCorrect: false, translation: "（as soon as と混同しない）" },
    ],
    explanation: "「No sooner had + 主語 + PP + than + 主語 + 過去形」は「〜するやいなや」という意味の上級表現です。no sooner が文頭に出ると倒置（had + 主語）が起きます。than と組み合わせて使います（hardly/scarcely...when/before も同様の意味）。",
    hint: "「No sooner...」の構文は「〜するやいなや」を表し、必ず _____ と組み合わせます。",
    questionTranslation: "彼女が会場に到着するやいなや、式典が始まりました。",
    questionKatakana: "ノウ スーナー ハッド シー アライブド アット ザ ベニュー ザン ザ セレモニー ビガン。",
    vocabularyItems: [
      { word: "no sooner...than", meaning: "〜するやいなや", katakanaReading: "ノウ スーナー ザン", example: "No sooner had I left than it started raining." },
      { word: "venue", meaning: "会場、開催地", katakanaReading: "ベニュー", example: "The venue for the conference is downtown." },
      { word: "ceremony", meaning: "式典、セレモニー", katakanaReading: "セレモニー", example: "The graduation ceremony is on Friday." },
    ],
    grammarPoints: [
      {
        rule: "No sooner...than / Hardly...when（時間の相関表現）",
        explanation: "No sooner had S PP than S V（過去形）「〜するやいなや〜した」。Hardly/Scarcely had S PP when/before S V（過去形）も同義。どちらも否定的な副詞が文頭にくるため倒置が起きます。",
        example: "No sooner had I sat down than the phone rang. / Hardly had she closed her eyes when the alarm went off.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「No sooner had she arrived at the venue than the ceremony began.」を5回音読してください。no sooner の後の倒置（had she）に注意しましょう。",
      phraseReplacements: [
        {
          original: "No sooner had she arrived than the ceremony began.",
          instruction: "No sooner...than を使って出来事の素早い連続を表しましょう。",
          examples: [
            "No sooner had I finished the exam than I realized my mistake.",
            "No sooner had the meeting ended than a new crisis emerged.",
            "Hardly had we started the project when the funding was cut.",
          ],
        },
      ],
      dailyConversationTips: "この表現はやや文語的ですが、ストーリーを生き生きと語るときに使うと英語が上達している印象を与えます。as soon as の代わりに使ってみましょう。",
    },
  },
  {
    id: "ga-012",
    category: "grammar",
    difficulty: "advanced",
    question: "I remember _____ the door this morning before leaving.",
    options: [
      { id: "ga012-a", text: "to lock", isCorrect: false, translation: "（これからロックする：未来の意味）" },
      { id: "ga012-b", text: "locking", isCorrect: true, translation: "（過去にロックしたことを覚えている）" },
      { id: "ga012-c", text: "locked", isCorrect: false, translation: "（過去形：remember の目的語には不可）" },
      { id: "ga012-d", text: "lock", isCorrect: false, translation: "（原形：動詞の目的語には不可）" },
    ],
    explanation: "「remember + -ing」は「（過去に）〜したことを覚えている」という意味です。「remember + to 不定詞」は「（これから）〜することを忘れずに覚えておく」という意味です。今朝ドアを施錠したことを覚えているので -ing 形（locking）が正解です。",
    hint: "「remember + to do」と「remember + doing」は意味が違います。今朝施錠した（過去の出来事を覚えている）のはどちらですか？",
    questionTranslation: "私は今朝出発する前にドアに鍵をかけたことを覚えています。",
    questionKatakana: "アイ リメンバー ロッキング ザ ドア ディス モーニング ビフォア リービング。",
    vocabularyItems: [
      { word: "remember + -ing", meaning: "〜したことを覚えている（過去）", katakanaReading: "リメンバー + イング", example: "I remember meeting her at the conference." },
      { word: "remember + to do", meaning: "〜することを覚えておく（未来）", katakanaReading: "リメンバー トゥ ドゥ", example: "Remember to lock the door when you leave." },
    ],
    grammarPoints: [
      {
        rule: "動名詞 vs 不定詞で意味が変わる動詞",
        explanation: "remember/forget/try/stop の後に -ing か to 不定詞かで意味が変わります。remember + -ing（過去の出来事）vs to do（未来の行動）。forget + -ing（〜したことを忘れる）vs to do（〜するのを忘れる）。try + -ing（試しに〜してみる）vs to do（〜しようと努力する）。",
        example: "I forgot locking it. ≠ I forgot to lock it. / She stopped smoking. vs She stopped to smoke.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「I remember locking the door this morning before leaving.」を5回音読してください。locking の -ing を明確に発音しましょう。",
      phraseReplacements: [
        {
          original: "I remember locking the door this morning before leaving.",
          instruction: "remember/forget + -ing と to do の違いを使った文を作りましょう。",
          examples: [
            "I remember seeing that movie with her. / I must remember to buy a gift.",
            "I forgot submitting the form. / I forgot to submit the form.",
            "She tried calling him. / She tried to call him but couldn't.",
          ],
        },
      ],
      dailyConversationTips: "「I remember doing...」と「I remember to do...」の違いはとても重要です。「Did you remember to call the doctor?」（医者に電話するの覚えてた？）は日常でよく使うフレーズです。",
    },
  },
  {
    id: "ga-013",
    category: "grammar",
    difficulty: "advanced",
    question: "The school _____ I studied English has recently been renovated.",
    options: [
      { id: "ga013-a", text: "which", isCorrect: false, translation: "（場所には which より where が自然）" },
      { id: "ga013-b", text: "where", isCorrect: true, translation: "（場所を先行詞とする関係副詞）" },
      { id: "ga013-c", text: "that", isCorrect: false, translation: "（前置詞なしの that は場所には使いにくい）" },
      { id: "ga013-d", text: "when", isCorrect: false, translation: "（時を先行詞とする関係副詞）" },
    ],
    explanation: "場所（the school）を先行詞とする関係副詞は where を使います。「where I studied English」＝「in which I studied English」。関係副詞は関係代名詞と違い、直後に完全な文（主語・動詞・目的語がそろった文）が来ます。",
    hint: "先行詞が「the school（場所）」です。場所を指す関係副詞は何ですか？",
    questionTranslation: "私が英語を勉強した学校は最近改装されました。",
    questionKatakana: "ザ スクール ウェア アイ スタディド イングリッシュ ハズ リーセントリー ビーン レノベイテッド。",
    vocabularyItems: [
      { word: "relative adverb", meaning: "関係副詞（where/when/why/how）", katakanaReading: "リラティブ アドバーブ", example: "The city where I grew up has changed a lot." },
      { word: "renovate", meaning: "改装する、リノベーションする", katakanaReading: "レノベイト", example: "They are renovating the old building." },
    ],
    grammarPoints: [
      {
        rule: "関係副詞（where / when / why / how）",
        explanation: "関係副詞は先行詞の種類によって使い分けます：where（場所：the place where）、when（時：the time when）、why（理由：the reason why）、how（方法：the way how→通常は the way か how どちらか一方）。関係副詞の後は完全な文が続きます。",
        example: "The hotel where we stayed was wonderful. / I remember the day when we first met. / That is the reason why she left.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The school where I studied English has recently been renovated.」を5回音読してください。where I studied という関係副詞節のまとまりを意識しましょう。",
      phraseReplacements: [
        {
          original: "The school where I studied English has recently been renovated.",
          instruction: "関係副詞を使って場所・時・理由を説明する文を作りましょう。",
          examples: [
            "The café where I usually study is always full.",
            "I will never forget the summer when I traveled alone.",
            "That is the reason why she decided to change her career.",
          ],
        },
      ],
      dailyConversationTips: "「The place where I grew up is a small town.」のように、自分の出身地や大事な場所について話すときに where の関係副詞節を使うと表現が豊かになります。",
    },
  },
  {
    id: "ga-014",
    category: "grammar",
    difficulty: "advanced",
    question: "The committee insisted that the controversial decision _____ immediately.",
    options: [
      { id: "ga014-a", text: "is reconsidered", isCorrect: false, translation: "（受動態現在：仮定法では不可）" },
      { id: "ga014-b", text: "was reconsidered", isCorrect: false, translation: "（受動態過去：仮定法では不可）" },
      { id: "ga014-c", text: "be reconsidered", isCorrect: true, translation: "（仮定法現在の受動態）" },
      { id: "ga014-d", text: "reconsider", isCorrect: false, translation: "（能動態：ここは受動の意味が必要）" },
    ],
    explanation: "insist（要求する）の後の that 節では仮定法現在を使います。決定（decision）は「再考される」（受動）ので、仮定法現在の受動態「be + 過去分詞」が正解です。be reconsider ではなく be reconsidered（過去分詞）になります。",
    hint: "「insist that...」の後は仮定法現在です。また、decision は再考する側ではなく再考される側です。仮定法現在の受動態は？",
    questionTranslation: "委員会は、その物議を醸す決定を直ちに再考するよう主張しました。",
    questionKatakana: "ザ コミッティー インシステッド ザット ザ コントロバーシャル ディシジョン ビー リコンシダード イミーディエットリー。",
    vocabularyItems: [
      { word: "insist that", meaning: "〜するよう主張する（仮定法現在）", katakanaReading: "インシスト ザット", example: "The doctor insisted that she take a rest." },
      { word: "controversial", meaning: "物議を醸す、議論を呼ぶ", katakanaReading: "コントロバーシャル", example: "The new law is highly controversial." },
      { word: "reconsider", meaning: "再考する、考え直す", katakanaReading: "リコンシダー", example: "Please reconsider your decision." },
    ],
    grammarPoints: [
      {
        rule: "仮定法現在の受動態（be + 過去分詞）",
        explanation: "要求・推薦を表す動詞（insist, demand, suggest, recommend, require）の that 節に仮定法現在受動態：「that + 主語 + be + 過去分詞」。「The manager demanded that the report be revised.」「It was suggested that the meeting be postponed.」",
        example: "The professor insisted that the assignment be rewritten. / We recommended that the plan be approved by the board.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The committee insisted that the controversial decision be reconsidered immediately.」を5回音読してください。be reconsidered という仮定法受動の形を意識しましょう。",
      phraseReplacements: [
        {
          original: "The committee insisted that the decision be reconsidered.",
          instruction: "仮定法現在の受動態を使った要求表現を作りましょう。",
          examples: [
            "The professor required that all essays be submitted digitally.",
            "The regulations demand that employees be properly trained.",
            "The board suggested that the budget be reduced by 10%.",
          ],
        },
      ],
      dailyConversationTips: "「I suggest that this issue be discussed further.」のように、会議やディスカッションで提案・要求する際に仮定法現在受動態はよく使われます。アカデミックな場面で必須です。",
    },
  },
  {
    id: "ga-015",
    category: "grammar",
    difficulty: "advanced",
    question: "Were it not for your generous support, this project _____ possible.",
    options: [
      { id: "ga015-a", text: "would not be", isCorrect: true, translation: "〜できないでしょう（仮定法現在の主節）" },
      { id: "ga015-b", text: "will not be", isCorrect: false, translation: "（直説法未来：仮定法と混用不可）" },
      { id: "ga015-c", text: "would not have been", isCorrect: false, translation: "（第三条件法：were it not for は現在仮定）" },
      { id: "ga015-d", text: "is not", isCorrect: false, translation: "（直説法現在：仮定法の主節に使えない）" },
    ],
    explanation: "「Were it not for + 名詞」は「もし〜がなければ」という仮定法現在の慣用表現（if it were not for の倒置形）です。現在の仮定なので主節は would + 動詞原形です。感謝を伝える改まった表現として使われます。",
    hint: "「Were it not for」は仮定法現在の倒置形です。現在の仮定なので主節は would + 動詞原形を使います。",
    questionTranslation: "あなたの寛大なご支援がなければ、このプロジェクトは実現できないでしょう。",
    questionKatakana: "ワー イット ノット フォー ユア ジェネラス サポート、ディス プロジェクト ウッド ノット ビー ポッシブル。",
    vocabularyItems: [
      { word: "were it not for", meaning: "もし〜がなければ（仮定法倒置）", katakanaReading: "ワー イット ノット フォー", example: "Were it not for your help, I couldn't finish." },
      { word: "generous", meaning: "寛大な、気前の良い", katakanaReading: "ジェネラス", example: "She made a generous donation." },
      { word: "if it were not for", meaning: "もし〜がなければ（仮定法現在）", katakanaReading: "イフ イット ワー ノット フォー", example: "If it were not for music, life would be boring." },
    ],
    grammarPoints: [
      {
        rule: "Were it not for / Had it not been for（慣用仮定法）",
        explanation: "「Were it not for + 名詞（現在）」＝ If it were not for... → 「〜がなければ」（主節：would/could + 原形）。「Had it not been for + 名詞（過去）」＝ If it had not been for... → 「〜がなかったならば」（主節：would have + PP）。",
        example: "Were it not for modern medicine, many diseases would be fatal. / Had it not been for her advice, I would have made a serious mistake.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Were it not for your generous support, this project would not be possible.」を5回音読してください。Were it not for という倒置の流れを自然に言えるよう練習しましょう。",
      phraseReplacements: [
        {
          original: "Were it not for your generous support, this project would not be possible.",
          instruction: "Were it not for / Had it not been for を使った感謝や反事実の表現を作りましょう。",
          examples: [
            "Were it not for modern technology, remote work would be impossible.",
            "Had it not been for her encouragement, I would have given up.",
            "Were it not for the scholarship, I could not afford to study abroad.",
          ],
        },
      ],
      dailyConversationTips: "感謝のスピーチや改まった場面で「Were it not for your support...」という表現は非常に印象的です。Thank you の一言よりずっと深い感謝を伝えられます。",
    },
  },
  {
    id: "ga-016",
    category: "grammar",
    difficulty: "advanced",
    question: "The findings of the study, _____ were published last year, have sparked a new debate.",
    options: [
      { id: "ga016-a", text: "that", isCorrect: false, translation: "（制限的関係詞：コンマ付きには使えない）" },
      { id: "ga016-b", text: "which", isCorrect: true, translation: "（非制限的関係詞節：コンマ付き）" },
      { id: "ga016-c", text: "who", isCorrect: false, translation: "（人に使う関係代名詞）" },
      { id: "ga016-d", text: "what", isCorrect: false, translation: "（名詞節を導く：先行詞と使えない）" },
    ],
    explanation: "コンマ（,）の後の関係詞節は非制限的用法（Non-restrictive Relative Clause）で、先行詞に補足情報を加えます。非制限的用法では that は使えず which（物）または who（人）を使います。",
    hint: "コンマに挟まれた関係詞節は非制限的用法です。物（findings）を修飾する場合、that は使えません。何を使いますか？",
    questionTranslation: "昨年発表されたその研究の結果は、新たな議論を引き起こしました。",
    questionKatakana: "ザ ファインディングズ オブ ザ スタディ、ウィッチ ワー パブリッシュト ラスト イヤー、ハブ スパークト ア ニュー ディベイト。",
    vocabularyItems: [
      { word: "non-restrictive relative clause", meaning: "非制限的関係詞節（コンマあり）", katakanaReading: "ノン リストリクティブ リラティブ クローズ", example: "My car, which is red, is in the garage." },
      { word: "spark a debate", meaning: "議論に火を付ける", katakanaReading: "スパーク ア ディベイト", example: "The speech sparked a national debate." },
      { word: "findings", meaning: "研究結果、調査結果", katakanaReading: "ファインディングズ", example: "The findings support the hypothesis." },
    ],
    grammarPoints: [
      {
        rule: "制限的 vs 非制限的関係詞節",
        explanation: "制限的（コンマなし）：先行詞を特定する（The book that I read was great.）→ that/which/who 使用可。非制限的（コンマあり）：補足情報を追加（My book, which I read yesterday, was great.）→ that 不可、which/who のみ。",
        example: "Restrictive: The student who passed is talented. / Non-restrictive: Tom, who passed the exam, is talented. (Tom に追加情報を付加)",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The findings of the study, which were published last year, have sparked a new debate.」を5回音読してください。which 節をコンマで区切ってゆっくり読みましょう。",
      phraseReplacements: [
        {
          original: "The findings of the study, which were published last year, have sparked a new debate.",
          instruction: "非制限的関係詞節を使って補足情報を付けた文を作りましょう。",
          examples: [
            "The professor, who has taught here for 30 years, is retiring next month.",
            "The conference, which is held annually, attracts thousands of researchers.",
            "Her first novel, which won several awards, is now being adapted into a film.",
          ],
        },
      ],
      dailyConversationTips: "「My friend, who is a doctor, told me to rest.」のように、非制限的関係詞節は人物紹介で追加情報を自然に付け加える際に使います。アカデミックライティングでも必須の構文です。",
    },
  },
  {
    id: "ga-017",
    category: "grammar",
    difficulty: "advanced",
    question: "She provided _____ information to reach a well-informed conclusion.",
    options: [
      { id: "ga017-a", text: "enough", isCorrect: true, translation: "十分な（形容詞：名詞の前可）" },
      { id: "ga017-b", text: "enough of", isCorrect: false, translation: "（of が不要：名詞の直前は enough のみ）" },
      { id: "ga017-c", text: "sufficient of", isCorrect: false, translation: "（of は不要）" },
      { id: "ga017-d", text: "plenty", isCorrect: false, translation: "（plenty of が正しい形）" },
    ],
    explanation: "「enough」は形容詞として名詞の前に置けます（enough information）。「plenty of」も「十分な」という意味ですが、plenty of はカジュアルな表現です。「enough of + 名詞」は「〜に飽き飽きした」という意味で使うこともあり、ここでは不適切です。",
    hint: "「enough」を形容詞として使う場合、名詞の前に直接置けます。of は不要です。",
    questionTranslation: "彼女は十分な情報を提供し、十分な情報に基づいた結論に到達できるようにしました。",
    questionKatakana: "シー プロバイデッド イナフ インフォメーション トゥ リーチ ア ウェル インフォームド コンクルージョン。",
    vocabularyItems: [
      { word: "sufficient / enough", meaning: "十分な", katakanaReading: "サフィシェント／イナフ", example: "We don't have enough time to finish." },
      { word: "well-informed", meaning: "十分な情報を持っている", katakanaReading: "ウェル インフォームド", example: "Make an informed decision." },
      { word: "conclusion", meaning: "結論", katakanaReading: "コンクルージョン", example: "The study reached an interesting conclusion." },
    ],
    grammarPoints: [
      {
        rule: "enough の用法（形容詞・副詞・代名詞）",
        explanation: "enough の使い方：①形容詞（名詞の前）：enough time, enough money。②副詞（形容詞・副詞の後）：tall enough, quickly enough。③「enough of + 名詞」は「〜にうんざりした」（I've had enough of this）の意味も。「plenty of + 名詞」も「十分な」だがカジュアル表現。",
        example: "Do we have enough chairs? / She is smart enough to understand. / He had enough of the noise.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She provided enough information to reach a well-informed conclusion.」を5回音読してください。enough information のつながりを滑らかに言いましょう。",
      phraseReplacements: [
        {
          original: "She provided enough information to reach a well-informed conclusion.",
          instruction: "enough を形容詞・副詞として使った文を作りましょう。",
          examples: [
            "Do we have enough evidence to support this claim?",
            "He was experienced enough to manage the team independently.",
            "The study provided sufficient data to draw meaningful conclusions.",
          ],
        },
      ],
      dailyConversationTips: "「I've had enough.」（もう十分です／うんざりです）は文脈によって意味が大きく変わります。「enough of + 名詞」と「enough + 名詞」の使い分けを意識しましょう。",
    },
  },
  {
    id: "ga-018",
    category: "grammar",
    difficulty: "advanced",
    question: "I do _____ enjoy a good mystery novel, even if I rarely have time to read.",
    options: [
      { id: "ga018-a", text: "very", isCorrect: false, translation: "（very は動詞を強調しない）" },
      { id: "ga018-b", text: "much", isCorrect: false, translation: "（much は「I much enjoy」とも言えるが、do が既にある）" },
      { id: "ga018-c", text: "really", isCorrect: false, translation: "（really は副詞として可だが do に続く場合は用法が限定）" },
      { id: "ga018-d", text: "— (no word needed)", isCorrect: true, translation: "（do 自体が強調の働きをする）" },
    ],
    explanation: "「I do enjoy...」の do は強調の do（Emphatic do）で、「本当に〜する」という強調を表します。この場合、do の後ろに強調の副詞を重ねる必要はなく、do + 動詞原形だけで強調が完成します。",
    hint: "「I do enjoy」の do はすでに強調の働きをしています。これに副詞を重ねる必要はありません。空欄は必要？",
    questionTranslation: "読む時間はほとんどありませんが、私は本当にミステリー小説を楽しんでいます。",
    questionKatakana: "アイ ドゥ エンジョイ ア グッド ミスタリー ノベル、イーブン イフ アイ レアリー ハブ タイム トゥ リード。",
    vocabularyItems: [
      { word: "emphatic do", meaning: "強調の do（本当に〜する）", katakanaReading: "エンファティック ドゥー", example: "I do believe you are right." },
      { word: "mystery novel", meaning: "ミステリー小説、推理小説", katakanaReading: "ミスタリー ノベル", example: "She loves reading mystery novels." },
    ],
    grammarPoints: [
      {
        rule: "強調の do（Emphatic do）",
        explanation: "平叙文で do/does/did + 動詞原形を使うと強調の意味になります。「I do love you.」（本当に愛している）「She does work hard.」（彼女は本当によく頑張っている）「They did come.」（彼らは確かに来た）。主語の人称・時制に合わせて do/does/did を使います。",
        example: "I do understand your concern. / She does make the best coffee. / They did submit the report on time.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「I do enjoy a good mystery novel.」を5回音読してください。do を少し強めに読むことで強調のニュアンスが出ます。",
      phraseReplacements: [
        {
          original: "I do enjoy a good mystery novel.",
          instruction: "強調の do を使って気持ちを強調した文を作りましょう。",
          examples: [
            "I do appreciate your help with this project.",
            "She does have a point about the budget.",
            "They did try their best under the circumstances.",
          ],
        },
      ],
      dailyConversationTips: "「I do think that's a great idea.」（それは本当に良いアイデアだと思います）のように、強調の do を使うと確信や熱意を相手に強く伝えられます。",
    },
  },
  {
    id: "ga-019",
    category: "grammar",
    difficulty: "advanced",
    question: "Some students passed the final exam, and others did _____.",
    options: [
      { id: "ga019-a", text: "not", isCorrect: true, translation: "（省略：did not pass の pass を省略）" },
      { id: "ga019-b", text: "not pass", isCorrect: false, translation: "（pass は省略するべき）" },
      { id: "ga019-c", text: "not passed", isCorrect: false, translation: "（過去分詞の省略は did と不一致）" },
      { id: "ga019-d", text: "not do", isCorrect: false, translation: "（do は already used as auxiliary）" },
    ],
    explanation: "英語では繰り返しを避けるために動詞や動詞句を省略する（Ellipsis）ことがあります。「others did not (pass the final exam)」の「pass the final exam」が省略されています。「did not」に続く pass は省略が自然です。",
    hint: "前の文の「passed the final exam」を繰り返さないために省略（Ellipsis）が使われています。「others did ___」の形で何が来ますか？",
    questionTranslation: "最終試験に合格した学生もいれば、合格しなかった学生もいました。",
    questionKatakana: "サム スチューデンツ パスト ザ ファイナル イグザム、アンド アザーズ ディッド ノット。",
    vocabularyItems: [
      { word: "ellipsis", meaning: "省略（繰り返しを避けるため）", katakanaReading: "エリプシス", example: "She can swim, and so can I." },
      { word: "substitution", meaning: "代用（do so, one, it など）", katakanaReading: "サブスティテューション", example: "He passed, but others did not." },
    ],
    grammarPoints: [
      {
        rule: "省略（Ellipsis）と代用（Substitution）",
        explanation: "同じ要素の繰り返しを避けるために、動詞句を省略したり do so/does/did で代用したりします。「She studied and he did too.」「I can come, but she cannot.」「Some finished, others did not.」また、so, neither を使った代用も重要：「I passed. So did he. / I didn't fail. Neither did she.」",
        example: "A: Can you swim? B: Yes, I can (swim). / Some liked it, others didn't (like it). / I've been to Paris. So has she.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Some students passed the final exam, and others did not.」を5回音読してください。did not の not を強調して読みましょう。",
      phraseReplacements: [
        {
          original: "Some students passed the final exam, and others did not.",
          instruction: "省略を使って対比を表す文を作りましょう。",
          examples: [
            "Some people enjoy public speaking; others do not.",
            "She completed the assignment, but her partner did not.",
            "I was excited about the trip, and so was my sister.",
          ],
        },
      ],
      dailyConversationTips: "「I do. / She doesn't.」「I can, but he can't.」のような短い省略形は英語の自然な会話に欠かせません。繰り返しを避ける省略を積極的に使いましょう。",
    },
  },
  {
    id: "ga-020",
    category: "grammar",
    difficulty: "advanced",
    question: "The professor, along with her research assistants, _____ currently working on a groundbreaking study.",
    options: [
      { id: "ga020-a", text: "are", isCorrect: false, translation: "（along with は複数を作らない）" },
      { id: "ga020-b", text: "is", isCorrect: true, translation: "（主語は the professor：単数）" },
      { id: "ga020-c", text: "were", isCorrect: false, translation: "（過去形：文脈に合わない）" },
      { id: "ga020-d", text: "have been", isCorrect: false, translation: "（現在完了：currently と不一致）" },
    ],
    explanation: "「along with, together with, as well as, accompanied by」などは主語を複数にしません。文法上の主語は「the professor」（単数）なので動詞は is になります。これは together with と and の違いです（A and B → 複数、A together with B → A が主語）。",
    hint: "「along with」は and と違い、主語を複数にしません。本来の主語（the professor）は単数です。",
    questionTranslation: "その教授は研究助手たちとともに、現在画期的な研究に取り組んでいます。",
    questionKatakana: "ザ プロフェサー、アロング ウィズ ハー リサーチ アシスタンツ、イズ カレントリー ワーキング オン ア グラウンドブレイキング スタディ。",
    vocabularyItems: [
      { word: "along with", meaning: "〜とともに（主語を複数にしない）", katakanaReading: "アロング ウィズ", example: "The CEO, along with the board, is attending." },
      { word: "groundbreaking", meaning: "画期的な、革新的な", katakanaReading: "グラウンドブレイキング", example: "This is a groundbreaking discovery." },
      { word: "together with", meaning: "〜とともに（along with と同じ扱い）", katakanaReading: "トゥゲザー ウィズ", example: "She, together with her team, was recognized." },
    ],
    grammarPoints: [
      {
        rule: "along with / together with / as well as による主語の一致",
        explanation: "A, along with/together with/as well as B, + 動詞 → 動詞は A（単数か複数か）に合わせます。along with などはカッコ内扱いで主語を変えません。「The teacher, as well as the students, was present.」(teacher が主語なので was)",
        example: "The manager, together with her assistants, is attending the conference. / The students, as well as the teacher, were surprised by the result.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The professor, along with her research assistants, is currently working on a groundbreaking study.」を5回音読してください。along with の句をコンマで区切って読みましょう。",
      phraseReplacements: [
        {
          original: "The professor, along with her research assistants, is working on a study.",
          instruction: "along with / together with を使って主語一致の問題に気をつけながら文を作りましょう。",
          examples: [
            "The director, along with the entire cast, is attending the premiere.",
            "The president, together with her advisors, was briefed on the situation.",
            "The CEO, as well as the board members, is expected to sign the agreement.",
          ],
        },
      ],
      dailyConversationTips: "「My team, along with the support staff, is ready to help.」のように along with を使うと、チームの協力関係を強調しながら主語（自分のチーム）を前面に出せます。",
    },
  },
];
