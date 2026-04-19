import { QuizQuestion } from "./quizzes";

export const vocabularyQuizzesComplete: QuizQuestion[] = [
  {
    id: "vocab_001",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The _____ of the new hybrid work policy across all regional offices was completed ahead of schedule.",
    questionTranslation:
      "新しいハイブリッド勤務方針を全地域のオフィスに導入する実施作業は、予定より早く完了しました。",
    questionKatakana:
      "ザ インプリメンテーション オブ ザ ニュー ハイブリッド ワーク ポリシー アクロス オール リージョナル オフィシズ ワズ コンプリーテッド アヘッド オブ スケジュール",
    options: [
      {
        id: "opt_v001_a",
        text: "implementation",
        isCorrect: true,
        translation: "実施、導入、実行（インプリメンテーション）",
      },
      {
        id: "opt_v001_b",
        text: "implication",
        isCorrect: false,
        translation: "含意、示唆（インプリケーション）",
      },
      {
        id: "opt_v001_c",
        text: "improvisation",
        isCorrect: false,
        translation: "即興、即興演奏（インプロヴァイゼーション）",
      },
      {
        id: "opt_v001_d",
        text: "imposition",
        isCorrect: false,
        translation: "課すこと、押し付け（インポジション）",
      },
    ],
    explanation:
      "正解は「implementation」です。「the implementation of 〜」は「〜の実施・導入」という意味で、政策やシステム、計画を現場に落とし込むときに使うアカデミック・ビジネス語彙です。他の選択肢は im- で始まりますが、意味は異なります。",
    vocabularyItems: [
      {
        word: "implementation",
        meaning: "実施、導入、実行",
        katakanaReading: "インプリメンテーション",
      },
      {
        word: "policy",
        meaning: "方針、政策",
        katakanaReading: "ポリシー",
      },
      {
        word: "regional",
        meaning: "地域の、地方の",
        katakanaReading: "リージョナル",
      },
      {
        word: "ahead of schedule",
        meaning: "予定より早く",
        katakanaReading: "アヘッド オブ スケジュール",
      },
    ],
    grammarPoints: [
      {
        rule: "Academic Word List (AWL) - implementation",
        explanation:
          "「implementation」は「計画・政策・システムなどを実際に運用に移すこと」を表す名詞です。「implement（動詞：実施する）」とセットで覚えると定着しやすいです。",
        example:
          "Successful implementation of the plan requires teamwork. （計画の成功裏の実施にはチームワークが必要です）",
      },
      {
        rule: "Noun Phrase - the implementation of ...",
        explanation:
          "「the implementation of + 名詞」で「〜の実施・導入」と言います。似た構文に the introduction of...（〜の導入）、the adoption of...（〜の採用）があります。",
        example:
          "the implementation of new software （新ソフトウェアの導入）/ the implementation of safety measures （安全対策の実施）",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を5回音読してください。特に「implementation of the new hybrid work policy」の部分をスムーズに発音することを意識してください。",
      phraseReplacements: [
        {
          original:
            "The implementation of the new hybrid work policy across all regional offices was completed ahead of schedule.",
          instruction:
            "「implementation of ...」の部分を別の政策やシステムに入れ替えて、同じ文法構造で文を作ってみましょう。",
          examples: [
            "The implementation of the data backup system across all departments was completed ahead of schedule. （データバックアップ体制の全部署への導入は予定より早く完了しました）",
            "The implementation of the new training program for new hires was completed ahead of schedule. （新入社員向け新研修プログラムの実施は予定より早く完了しました）",
            "The implementation of energy-saving measures in all buildings was completed ahead of schedule. （全館での省エネ対策の実施は予定より早く完了しました）",
          ],
        },
      ],
      dailyConversationTips:
        "ビジネスでは「We're still in the implementation phase.（まだ実施段階にあります）」のように、プロジェクトの進行を説明するときに implementation がよく使われます。",
    },
    hint: "方針や計画を「実際に運用に移すこと」を表す名詞を選びます。",
  },

  {
    id: "vocab_002",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The professor's _____ explanation of the complex theory helped students understand it better.",
    questionTranslation: "その教授の複雑な理論の明確な説明は、学生がそれをより良く理解するのに役立ちました。",
    questionKatakana:
      "ザ プロフェッサーズ クリア エクスプラネーション オブ ザ コンプレックス セオリー ヘルプド スチューデンツ アンダースタンド イット ベター",
    options: [
      {
        id: "opt_v002_a",
        text: "clear",
        isCorrect: true,
        translation: "明確な、わかりやすい（クリア）",
      },
      {
        id: "opt_v002_b",
        text: "clever",
        isCorrect: false,
        translation: "賢い、巧妙な（クレバー）",
      },
      {
        id: "opt_v002_c",
        text: "clean",
        isCorrect: false,
        translation: "きれいな、清潔な（クリーン）",
      },
      {
        id: "opt_v002_d",
        text: "close",
        isCorrect: false,
        translation: "近い、親密な（クロース）",
      },
    ],
    explanation:
      "正解は「clear」です。「clear explanation」は「明確な説明」「わかりやすい説明」という意味で、アカデミック文脈でよく使われます。複雑な理論（complex theory）を学生が理解するのに役立ったという文脈から、「clear（明確な）」が最も適切です。",
    vocabularyItems: [
      {
        word: "clear",
        meaning: "明確な、わかりやすい、透明な",
        katakanaReading: "クリア",
      },
      {
        word: "explanation",
        meaning: "説明、解説",
        katakanaReading: "エクスプラネーション",
      },
      {
        word: "complex",
        meaning: "複雑な、複合的な",
        katakanaReading: "コンプレックス",
      },
      {
        word: "theory",
        meaning: "理論、学説",
        katakanaReading: "セオリー",
      },
      {
        word: "understand",
        meaning: "理解する、わかる",
        katakanaReading: "アンダースタンド",
      },
    ],
    grammarPoints: [
      {
        rule: "Adjective + Noun Collocation",
        explanation:
          "「clear explanation」は形容詞と名詞の組み合わせで、アカデミック英語でよく使われる表現です。「clear」は「明確な」「わかりやすい」という意味で、説明や指示に対してよく使われます。",
        example:
          "The teacher gave a clear instruction. （その先生は明確な指示を与えました）",
      },
      {
        rule: "Academic Vocabulary - clear",
        explanation:
          "「clear」はアカデミック文脈で「明確な」「はっきりした」という意味でよく使われます。「clear evidence」「clear conclusion」など、学術的な文章では頻出です。",
        example:
          "There is clear evidence that climate change is happening. （気候変動が起こっているという明確な証拠があります）",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を5回音読してください。特に「clear explanation」の部分をスムーズに発音することを意識してください。",
      phraseReplacements: [
        {
          original:
            "The professor's clear explanation of the complex theory helped students understand it better.",
          instruction:
            "「complex theory」と「understand」の部分を別の複雑な概念や理解に入れ替えて、同じ文法構造で文を作ってみましょう。",
          examples: [
            "The teacher's clear explanation of the difficult concept helped students grasp it better. （その先生の難しい概念の明確な説明は、学生がそれをより良く理解するのに役立ちました）",
            "The author's clear explanation of the philosophical idea helped readers comprehend it better. （その著者の哲学的思想の明確な説明は、読者がそれをより良く理解するのに役立ちました）",
            "The trainer's clear explanation of the technical process helped participants learn it better. （そのトレーナーの技術的プロセスの明確な説明は、参加者がそれをより良く学ぶのに役立ちました）",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「Can you give me a clear explanation?（明確な説明をしてもらえますか？）」のように、相手にわかりやすく説明してもらうことをお願いすることがあります。",
    },
    hint: "複雑な理論を学生が理解するのに役立ったという文脈から、「明確な」という意味の形容詞を選びます。",
  },

  {
    id: "vocab_003",
    category: "vocabulary",
    difficulty: "intermediate",
    question:
      "The research _____ several important findings about climate change.",
    questionTranslation: "その研究は気候変動についていくつかの重要な発見を明らかにしました。",
    questionKatakana:
      "ザ リサーチ ディスクローズド セバラル インポータント ファインディングス ア バウト クライメット チェンジ",
    options: [
      {
        id: "opt_v003_a",
        text: "disclosed",
        isCorrect: true,
        translation: "明らかにした、開示した（ディスクローズド）",
      },
      {
        id: "opt_v003_b",
        text: "discussed",
        isCorrect: false,
        translation: "議論した、話し合った（ディスカッスド）",
      },
      {
        id: "opt_v003_c",
        text: "discovered",
        isCorrect: false,
        translation: "発見した（ディスカバード）",
      },
      {
        id: "opt_v003_d",
        text: "displayed",
        isCorrect: false,
        translation: "表示した、展示した（ディスプレイド）",
      },
    ],
    explanation:
      "正解は「disclosed」です。「disclose」は「明らかにする」「開示する」という意味で、アカデミック・ビジネス文脈でよく使われます。特に「research disclosed findings」という表現は、研究が新しい発見を明らかにしたことを表します。他の選択肢も似た音ですが、文脈に合いません。",
    vocabularyItems: [
      {
        word: "disclosed",
        meaning: "明らかにした、開示した、暴露した",
        katakanaReading: "ディスクローズド",
      },
      {
        word: "findings",
        meaning: "発見、調査結果",
        katakanaReading: "ファインディングス",
      },
      {
        word: "climate change",
        meaning: "気候変動",
        katakanaReading: "クライメット チェンジ",
      },
      {
        word: "research",
        meaning: "研究、調査",
        katakanaReading: "リサーチ",
      },
    ],
    grammarPoints: [
      {
        rule: "Academic Vocabulary - disclose",
        explanation:
          "「disclose」はアカデミック・ビジネス英語で「明らかにする」「開示する」という意味です。「reveal」と似ていますが、「disclose」はより正式で、特に重要な情報や秘密を明かす場合に使われます。",
        example:
          "The company disclosed its financial results. （その企業は財務結果を開示しました）",
      },
      {
        rule: "Research Findings",
        explanation:
          "「findings」は研究や調査の結果を表す名詞で、アカデミック文脈で頻出です。「research findings」「survey findings」など、学術的な文章では常に見かけます。",
        example:
          "The study's findings suggest that exercise improves mental health. （その研究の発見は、運動がメンタルヘルスを改善することを示唆しています）",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を5回音読してください。特に「disclosed several important findings」の部分をスムーズに発音することを意識してください。",
      phraseReplacements: [
        {
          original: "The research disclosed several important findings about climate change.",
          instruction:
            "「climate change」の部分を別の研究テーマに入れ替えて、同じ文法構造で文を作ってみましょう。",
          examples: [
            "The research disclosed several important findings about artificial intelligence. （その研究は人工知能についていくつかの重要な発見を明らかにしました）",
            "The study disclosed several important findings about human behavior. （その研究は人間の行動についていくつかの重要な発見を明らかにしました）",
            "The investigation disclosed several important findings about the accident. （その調査は事故についていくつかの重要な発見を明らかにしました）",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「What did the research disclose?（その研究は何を明らかにしましたか？）」のように、研究結果について尋ねることがあります。",
    },
    hint: "「明らかにする」「開示する」という意味のアカデミック語彙を選びます。",
  },
];
