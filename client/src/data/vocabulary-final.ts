import { QuizQuestion } from "./quizzes";

export const vocabularyQuizzes: QuizQuestion[] = [
  {
    id: "vocab-001",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The professor's _____ on climate change influenced many students to pursue environmental science.",
    options: [
      {
        id: "v001-a",
        text: "lecture",
        isCorrect: true,
        translation: "講義",
      },
      {
        id: "v001-b",
        text: "conversation",
        isCorrect: false,
        translation: "会話",
      },
      {
        id: "v001-c",
        text: "discussion",
        isCorrect: false,
        translation: "議論",
      },
      {
        id: "v001-d",
        text: "debate",
        isCorrect: false,
        translation: "討論",
      },
    ],
    explanation:
      "正解は「lecture」です。「professor's」（教授の）と「influenced many students」（多くの学生に影響を与えた）という文脈から、正式な教育的な講演を意味する「lecture」が最適です。",
    hint: "大学の教授が学生に与える正式な講演は何でしょうか？",
    questionTranslation:
      "教授の気候変動に関する講義は、多くの学生に環境科学を追求させるよう影響を与えました。",
    questionKatakana:
      "ザ プロフェッサーズ レクチャー オン クライメット チェンジ インフルエンスド メニー スチューデンツ トゥ パースゥ エンバイロンメンタル サイエンス。",
    vocabularyItems: [
      {
        word: "lecture",
        meaning: "講義、講演（大学や公式な場での教育的な話）",
        katakanaReading: "レクチャー",
        example: "I attended a lecture on modern history.",
      },
      {
        word: "influence",
        meaning: "影響を与える、影響",
        katakanaReading: "インフルエンス",
        example: "Your opinion influenced my decision.",
      },
      {
        word: "pursue",
        meaning: "追求する、勉強する（専門分野を）",
        katakanaReading: "パースゥ",
        example: "She pursued a career in medicine.",
      },
      {
        word: "environmental",
        meaning: "環境の、環境に関する",
        katakanaReading: "エンバイロンメンタル",
        example: "Environmental protection is important.",
      },
    ],
    grammarPoints: [
      {
        rule: "Academic Word List (AWL) の重要語彙",
        explanation:
          "「lecture」「influence」「pursue」「environmental」はすべてAcademic Word Listに含まれる重要な学術語彙です。大学の講義や学術的な文脈で頻繁に使われます。",
        example:
          "The lecture covered various environmental issues. = その講義は様々な環境問題をカバーしました。",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "「The professor's lecture on climate change influenced many students to pursue environmental science.」を5回音読してください。「lecture」と「influenced」の発音に注意してください。",
      phraseReplacements: [
        {
          original: "The professor's lecture on climate change influenced many students to pursue environmental science.",
          instruction:
            "「lecture on climate change」と「pursue environmental science」の部分を変えて、同じ文法構造で文を作ってみてください。",
          examples: [
            "The professor's lecture on psychology influenced many students to pursue a career in counseling.",
            "The researcher's presentation on technology influenced many investors to pursue innovation projects.",
            "The speaker's talk on economics influenced many people to pursue business studies.",
          ],
        },
      ],
      dailyConversationTips:
        "「lecture」は大学の講義を指すフォーマルな言葉です。「attend a lecture」（講義に出席する）や「give a lecture」（講義をする）という表現がよく使われます。",
    },
  },
  {
    id: "vocab-002",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The company's _____ to sustainability has led to significant changes in their production methods.",
    options: [
      {
        id: "v002-a",
        text: "commitment",
        isCorrect: true,
        translation: "約束、献身",
      },
      {
        id: "v002-b",
        text: "interest",
        isCorrect: false,
        translation: "興味",
      },
      {
        id: "v002-c",
        text: "attention",
        isCorrect: false,
        translation: "注意",
      },
      {
        id: "v002-d",
        text: "concern",
        isCorrect: false,
        translation: "懸念",
      },
    ],
    explanation:
      "正解は「commitment」です。「has led to significant changes」という結果から、単なる興味や懸念ではなく、強い決意や約束を示す「commitment」が適切です。",
    hint: "実際に行動を起こし、変化をもたらすような強い決意を表す言葉は？",
    questionTranslation:
      "その企業の持続可能性への献身は、生産方法の大きな変化につながりました。",
    questionKatakana:
      "ザ カンパニーズ コミットメント トゥ サスティナビリティ ハズ レッド トゥ シグニフィカント チェンジズ イン ザイア プロダクション メソッズ。",
    vocabularyItems: [
      {
        word: "commitment",
        meaning: "献身、約束、コミットメント（強い決意）",
        katakanaReading: "コミットメント",
        example: "His commitment to education is admirable.",
      },
      {
        word: "sustainability",
        meaning: "持続可能性、サステナビリティ",
        katakanaReading: "サスティナビリティ",
        example: "Environmental sustainability is crucial.",
      },
      {
        word: "significant",
        meaning: "重要な、著しい、有意な",
        katakanaReading: "シグニフィカント",
        example: "There was a significant increase in sales.",
      },
      {
        word: "production",
        meaning: "生産、製造",
        katakanaReading: "プロダクション",
        example: "The factory increased its production.",
      },
    ],
    grammarPoints: [
      {
        rule: "Academic Word List (AWL) の重要語彙",
        explanation:
          "「commitment」「sustainability」「significant」「production」はすべてAWLに含まれる重要な学術語彙です。ビジネスや学術的な文脈で頻繁に使われます。",
        example:
          "The company's commitment to quality is evident in their products. = その企業の品質への献身は製品に明らかです。",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "「The company's commitment to sustainability has led to significant changes in their production methods.」を5回音読してください。「commitment」と「sustainability」の発音に注意してください。",
      phraseReplacements: [
        {
          original: "The company's commitment to sustainability has led to significant changes in their production methods.",
          instruction:
            "「commitment to sustainability」と「production methods」の部分を変えて、同じ文法構造で文を作ってみてください。",
          examples: [
            "The organization's commitment to education has led to significant improvements in their training programs.",
            "The government's commitment to healthcare has led to significant changes in their medical policies.",
            "The university's commitment to research has led to significant advances in their scientific discoveries.",
          ],
        },
      ],
      dailyConversationTips:
        "「commitment」は「be committed to」という形でよく使われます。「I'm committed to learning English.」（私は英語学習にコミットしています）のように、自分の決意を表現するのに役立ちます。",
    },
  },
  {
    id: "vocab-003",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The researcher's findings _____ the previous theory about human behavior.",
    options: [
      {
        id: "v003-a",
        text: "challenged",
        isCorrect: true,
        translation: "異議を唱えた、挑戦した",
      },
      {
        id: "v003-b",
        text: "supported",
        isCorrect: false,
        translation: "支持した",
      },
      {
        id: "v003-c",
        text: "confirmed",
        isCorrect: false,
        translation: "確認した",
      },
      {
        id: "v003-d",
        text: "explained",
        isCorrect: false,
        translation: "説明した",
      },
    ],
    explanation:
      "正解は「challenged」です。「previous theory」（以前の理論）という文脈と、新しい研究結果が既存の理論に対して異議を唱えるという学術的な文脈から、「challenged」が最適です。",
    hint: "新しい研究結果が古い理論に対して何をするでしょうか？",
    questionTranslation:
      "その研究者の発見は、人間の行動に関する以前の理論に異議を唱えました。",
    questionKatakana:
      "ザ リサーチャーズ ファインディングズ チャレンジド ザ プリビアス セオリー アバウト ヒューマン ビヘイビア。",
    vocabularyItems: [
      {
        word: "challenged",
        meaning: "異議を唱えた、挑戦した、疑問を呈した",
        katakanaReading: "チャレンジド",
        example: "The study challenged conventional wisdom.",
      },
      {
        word: "findings",
        meaning: "発見、調査結果、知見",
        katakanaReading: "ファインディングズ",
        example: "The research findings were surprising.",
      },
      {
        word: "theory",
        meaning: "理論、学説",
        katakanaReading: "セオリー",
        example: "Einstein's theory of relativity changed science.",
      },
      {
        word: "behavior",
        meaning: "行動、振る舞い",
        katakanaReading: "ビヘイビア",
        example: "The child's behavior improved significantly.",
      },
    ],
    grammarPoints: [
      {
        rule: "Academic Word List (AWL) の重要語彙",
        explanation:
          "「challenged」「findings」「theory」「behavior」はすべてAWLに含まれる重要な学術語彙です。科学や研究の文脈で頻繁に使われます。",
        example:
          "The new evidence challenged the existing theory. = 新しい証拠は既存の理論に異議を唱えました。",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "「The researcher's findings challenged the previous theory about human behavior.」を5回音読してください。「challenged」と「theory」の発音に注意してください。",
      phraseReplacements: [
        {
          original: "The researcher's findings challenged the previous theory about human behavior.",
          instruction:
            "「findings challenged」と「theory about human behavior」の部分を変えて、同じ文法構造で文を作ってみてください。",
          examples: [
            "The experiment's results challenged the previous theory about physics.",
            "The survey's data challenged the previous theory about consumer preferences.",
            "The study's conclusions challenged the previous theory about climate patterns.",
          ],
        },
      ],
      dailyConversationTips:
        "「challenge」は「異議を唱える」「疑問を呈する」という意味で、学術的な文脈で非常によく使われます。「That challenges my assumptions.」（それは私の仮定に異議を唱えます）のように使えます。",
    },
  },
  {
    id: "vocab-004",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The government implemented new policies to _____ economic growth and reduce unemployment.",
    options: [
      {
        id: "v004-a",
        text: "stimulate",
        isCorrect: true,
        translation: "刺激する、促進する",
      },
      {
        id: "v004-b",
        text: "prevent",
        isCorrect: false,
        translation: "防ぐ",
      },
      {
        id: "v004-c",
        text: "limit",
        isCorrect: false,
        translation: "制限する",
      },
      {
        id: "v004-d",
        text: "maintain",
        isCorrect: false,
        translation: "維持する",
      },
    ],
    explanation:
      "正解は「stimulate」です。「economic growth」（経済成長）と「reduce unemployment」（失業率を減らす）という目的から、経済を活性化させるという意味の「stimulate」が適切です。",
    hint: "経済を活性化させて成長させるという意味の動詞は？",
    questionTranslation:
      "政府は経済成長を促進し、失業率を減らすための新しい政策を実施しました。",
    questionKatakana:
      "ザ ガバメント インプリメンティッド ニュー ポリシーズ トゥ スティミュレイト イコノミック グロース アンド リデュース アンエンプロイメント。",
    vocabularyItems: [
      {
        word: "stimulate",
        meaning: "刺激する、促進する、活性化させる",
        katakanaReading: "スティミュレイト",
        example: "Exercise stimulates blood circulation.",
      },
      {
        word: "economic",
        meaning: "経済の、経済的な",
        katakanaReading: "イコノミック",
        example: "The economic crisis affected many people.",
      },
      {
        word: "growth",
        meaning: "成長、増加",
        katakanaReading: "グロース",
        example: "The company experienced rapid growth.",
      },
      {
        word: "unemployment",
        meaning: "失業、失業率",
        katakanaReading: "アンエンプロイメント",
        example: "Unemployment rates have decreased.",
      },
    ],
    grammarPoints: [
      {
        rule: "Academic Word List (AWL) の重要語彙",
        explanation:
          "「stimulate」「economic」「growth」「unemployment」はすべてAWLに含まれる重要な学術語彙です。経済学やビジネスの文脈で頻繁に使われます。",
        example:
          "The government's policies stimulated economic development. = 政府の政策は経済発展を促進しました。",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "「The government implemented new policies to stimulate economic growth and reduce unemployment.」を5回音読してください。「stimulate」と「unemployment」の発音に注意してください。",
      phraseReplacements: [
        {
          original: "The government implemented new policies to stimulate economic growth and reduce unemployment.",
          instruction:
            "「stimulate economic growth」と「reduce unemployment」の部分を変えて、同じ文法構造で文を作ってみてください。",
          examples: [
            "The company implemented new strategies to stimulate sales and reduce costs.",
            "The school implemented new programs to stimulate student learning and reduce dropout rates.",
            "The organization implemented new initiatives to stimulate innovation and reduce waste.",
          ],
        },
      ],
      dailyConversationTips:
        "「stimulate」は「刺激する」「促進する」という意味で、ビジネスや経済の文脈でよく使われます。「That stimulates my interest.」（それは私の興味を刺激します）のように、日常会話でも使えます。",
    },
  },
  {
    id: "vocab-005",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The company's _____ to innovation has resulted in the development of cutting-edge products.",
    options: [
      {
        id: "v005-a",
        text: "dedication",
        isCorrect: true,
        translation: "献身、専念",
      },
      {
        id: "v005-b",
        text: "interest",
        isCorrect: false,
        translation: "興味",
      },
      {
        id: "v005-c",
        text: "preference",
        isCorrect: false,
        translation: "好み",
      },
      {
        id: "v005-d",
        text: "tendency",
        isCorrect: false,
        translation: "傾向",
      },
    ],
    explanation:
      "正解は「dedication」です。「has resulted in the development of cutting-edge products」という強い結果から、単なる興味や好みではなく、深い献身を示す「dedication」が適切です。",
    hint: "革新的な製品開発に至るような強い決意や献身を表す言葉は？",
    questionTranslation:
      "その企業のイノベーションへの献身は、最先端製品の開発をもたらしました。",
    questionKatakana:
      "ザ カンパニーズ デディケーション トゥ イノベーション ハズ リザルティッド イン ザ デベロップメント オブ カッティング エッジ プロダクツ。",
    vocabularyItems: [
      {
        word: "dedication",
        meaning: "献身、専念、熱心さ",
        katakanaReading: "デディケーション",
        example: "Her dedication to her work is admirable.",
      },
      {
        word: "innovation",
        meaning: "革新、イノベーション、新しい考え",
        katakanaReading: "イノベーション",
        example: "Innovation is key to success.",
      },
      {
        word: "resulted",
        meaning: "結果として生じた、もたらした",
        katakanaReading: "リザルティッド",
        example: "The accident resulted in injuries.",
      },
      {
        word: "cutting-edge",
        meaning: "最先端の、最新の",
        katakanaReading: "カッティング エッジ",
        example: "The company uses cutting-edge technology.",
      },
    ],
    grammarPoints: [
      {
        rule: "Academic Word List (AWL) の重要語彙",
        explanation:
          "「dedication」「innovation」「resulted」「cutting-edge」はすべてAWLに含まれる重要な学術語彙です。ビジネスや技術の文脈で頻繁に使われます。",
        example:
          "The team's dedication to excellence resulted in success. = チームの卓越性への献身は成功をもたらしました。",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "「The company's dedication to innovation has resulted in the development of cutting-edge products.」を5回音読してください。「dedication」と「innovation」の発音に注意してください。",
      phraseReplacements: [
        {
          original: "The company's dedication to innovation has resulted in the development of cutting-edge products.",
          instruction:
            "「dedication to innovation」と「cutting-edge products」の部分を変えて、同じ文法構造で文を作ってみてください。",
          examples: [
            "The researcher's dedication to science has resulted in the discovery of groundbreaking findings.",
            "The athlete's dedication to training has resulted in the achievement of world records.",
            "The artist's dedication to perfection has resulted in the creation of masterpieces.",
          ],
        },
      ],
      dailyConversationTips:
        "「dedication」は「be dedicated to」という形でよく使われます。「I'm dedicated to my studies.」（私は勉強に献身しています）のように、自分の熱心さを表現するのに役立ちます。",
    },
  },
];
