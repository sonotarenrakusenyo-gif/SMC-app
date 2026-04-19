import { QuizQuestion } from "./quizzes";

export const readingQuizzes: QuizQuestion[] = [
  {
    id: "reading-001",
    category: "reading",
    difficulty: "intermediate",
    question: `Read the passage and answer the question.

"Climate change is one of the most pressing challenges of our time. Rising temperatures have led to melting ice caps, rising sea levels, and more frequent extreme weather events. Scientists agree that human activities, particularly the burning of fossil fuels, are the primary cause of global warming. To address this crisis, governments and individuals must take immediate action to reduce carbon emissions and transition to renewable energy sources."

What is the main cause of climate change according to the passage?`,
    options: [
      {
        id: "r001-a",
        text: "Rising sea levels",
        isCorrect: false,
        translation: "海面上昇",
      },
      {
        id: "r001-b",
        text: "Human activities, particularly burning fossil fuels",
        isCorrect: true,
        translation: "人間の活動、特に化石燃料の燃焼",
      },
      {
        id: "r001-c",
        text: "Extreme weather events",
        isCorrect: false,
        translation: "極端な気象現象",
      },
      {
        id: "r001-d",
        text: "Melting ice caps",
        isCorrect: false,
        translation: "氷冠の融解",
      },
    ],
    explanation:
      "正解は「Human activities, particularly burning fossil fuels」です。本文に「Scientists agree that human activities, particularly the burning of fossil fuels, are the primary cause of global warming.」と明確に書かれています。他の選択肢は気候変動の結果や影響であり、原因ではありません。",
    hint: "本文で「primary cause」（主な原因）として明確に述べられているのは何ですか？",
    questionTranslation:
      "【パッセージ全体の和訳】\n「気候変動は現代において最も緊急性の高い課題の一つです。気温の上昇により、氷冠の融解、海面上昇、より頻繁な異常気象が起きています。科学者たちは、人間の活動、特に化石燃料の燃焼が地球温暖化の主な原因であることに同意しています。この危機に対処するために、政府と個人は炭素排出量を削減し、再生可能エネルギーへ移行するための即座の行動を取らなければなりません。」\n\n【問題文の和訳】\n本文によると、気候変動の主な原因は何ですか？",
    questionKatakana:
      "【パッセージ全体のカタカナ読み】\nクライメット チェンジ イズ ワン オブ ザ モスト プレッシング チャレンジズ オブ アワ タイム。ライジング テンパラチャーズ ハブ レッド トゥ メルティング アイス キャップス、ライジング スィー レベルズ、アンド モア フリークウェント エクストリーム ウェザー イベンツ。サイエンティスト アグリー ザット ヒューマン アクティビティーズ、パーティキュラリー ザ バーニング オブ フォッシル フューエルズ、アー ザ プライマリー コーズ オブ グローバル ウォーミング。トゥ アドレス ディス クライシス、ガバメンツ アンド インディビジュアルズ マスト テイク イミーディエット アクション トゥ リデュース カーボン エミッションズ アンド トランジション トゥ リニューアブル エナジー ソーシズ。\n\n【問題文のカタカナ読み】\nワット イズ ザ メイン コーズ オブ クライメット チェンジ アコーディング トゥ ザ パッセージ？",
    vocabularyItems: [
      {
        word: "pressing",
        meaning: "緊急の、差し迫った",
        katakanaReading: "プレッシング",
        example: "We have a pressing need for action.",
      },
      {
        word: "melting",
        meaning: "融解、溶ける",
        katakanaReading: "メルティング",
        example: "The ice is melting rapidly.",
      },
      {
        word: "fossil fuels",
        meaning: "化石燃料",
        katakanaReading: "フォッシル フューエルズ",
        example: "Coal and oil are fossil fuels.",
      },
      {
        word: "emissions",
        meaning: "排出、放出",
        katakanaReading: "エミッションズ",
        example: "We need to reduce carbon emissions.",
      },
    ],
    grammarPoints: [
      {
        rule: "読解における主要情報の抽出",
        explanation:
          "学術的な読解では、本文から主要な情報を正確に抽出することが重要です。「primary cause」「main idea」などのキーワードに注目し、本文に明確に書かれている情報を選ぶ必要があります。",
        example:
          "The passage states that... = 本文は～と述べています。",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "このパッセージを2回音読してください。特に「Scientists agree that human activities, particularly the burning of fossil fuels, are the primary cause of global warming.」という重要な文を注意深く読んでください。",
      phraseReplacements: [
        {
          original: "Scientists agree that human activities, particularly the burning of fossil fuels, are the primary cause of global warming.",
          instruction:
            "このパターンを使って、他の科学的な主張を表現してみてください。",
          examples: [
            "Researchers agree that regular exercise, particularly aerobic activity, is the primary factor in maintaining health.",
            "Experts agree that early education, particularly literacy programs, is the primary factor in child development.",
            "Economists agree that inflation, particularly rising energy costs, is the primary cause of economic slowdown.",
          ],
        },
      ],
      dailyConversationTips:
        "学術的な読解では、「according to the passage」（本文によると）という表現を使って、本文に基づいた回答をすることが重要です。自分の意見ではなく、本文に書かれていることを述べるようにしましょう。",
    },
  },
  {
    id: "reading-002",
    category: "reading",
    difficulty: "intermediate",
    question: `Read the passage and answer the question.

"The Industrial Revolution, which began in Britain in the late 18th century, transformed human society in unprecedented ways. It introduced mechanized production, which dramatically increased productivity and led to the development of factories. While the Industrial Revolution brought significant economic benefits and improved living standards for many, it also created new social problems, including poor working conditions, child labor, and urban overcrowding."

What is implied about the Industrial Revolution in the passage?`,
    options: [
      {
        id: "r002-a",
        text: "It was entirely beneficial to society",
        isCorrect: false,
        translation: "それは社会に完全に有益だった",
      },
      {
        id: "r002-b",
        text: "It had both positive and negative effects on society",
        isCorrect: true,
        translation: "それは社会に肯定的および否定的な影響を与えた",
      },
      {
        id: "r002-c",
        text: "It only created social problems",
        isCorrect: false,
        translation: "それは社会問題だけを生み出した",
      },
      {
        id: "r002-d",
        text: "It started in America",
        isCorrect: false,
        translation: "それはアメリカで始まった",
      },
    ],
    explanation:
      "正解は「It had both positive and negative effects on society」です。本文に「brought significant economic benefits and improved living standards」（経済的利益と生活水準の向上をもたらした）と同時に、「created new social problems, including poor working conditions, child labor, and urban overcrowding」（貧しい労働条件、児童労働、都市過密化などの新しい社会問題を生み出した）と書かれています。",
    hint: "本文は産業革命の利点と問題の両方について述べていますか？",
    questionTranslation:
      "【パッセージ全体の和訳】\n「18世紀後半にイギリスで始まった産業革命は、人間社会を前例のない方法で変革しました。機械化された生産を導入し、生産性を劇的に向上させ、工場の発展につながりました。産業革命は多くの人々に大きな経済的利益と生活水準の向上をもたらした一方で、劣悪な労働条件、児童労働、都市過密化などの新しい社会問題も生み出しました。」\n\n【問題文の和訳】\n本文で産業革命について何が示唆されていますか？",
    questionKatakana:
      "【パッセージ全体のカタカナ読み】\nザ インダストリアル レボリューション、ウィッチ ビガン イン ブリテン イン ザ レイト エイティーンス センチュリー、トランスフォームド ヒューマン ソサイエティー イン アンプレシデンテッド ウェイズ。イット イントロデュースド メカナイズド プロダクション、ウィッチ ドラマティカリー インクリースト プロダクティビティー アンド レッド トゥ ザ デベロップメント オブ ファクトリーズ。ワイル ザ インダストリアル レボリューション ブロート シグニフィカント エコノミック ベネフィッツ アンド インプルーブド リビング スタンダーズ フォー メニー、イット オールソウ クリエイテッド ニュー ソーシャル プロブレムズ、インクルーディング プア ワーキング コンディションズ、チャイルド レイバー、アンド アーバン オーバークラウディング。\n\n【問題文のカタカナ読み】\nワット イズ インプライド アバウト ザ インダストリアル レボリューション イン ザ パッセージ？",
    vocabularyItems: [
      {
        word: "transformed",
        meaning: "変形させた、変えた、変革した",
        katakanaReading: "トランスフォームド",
        example: "Technology has transformed our lives.",
      },
      {
        word: "mechanized",
        meaning: "機械化された",
        katakanaReading: "メカナイズド",
        example: "Mechanized farming increased productivity.",
      },
      {
        word: "productivity",
        meaning: "生産性、生産力",
        katakanaReading: "プロダクティビティ",
        example: "The new system improved productivity.",
      },
      {
        word: "overcrowding",
        meaning: "過密、混雑",
        katakanaReading: "オーバークラウディング",
        example: "Urban overcrowding is a major problem.",
      },
    ],
    grammarPoints: [
      {
        rule: "推論的読解（Inferential Reading）",
        explanation:
          "本文に明確に書かれていない情報を、本文の内容から推測することを推論的読解といいます。「While...also」という対比表現から、産業革命が利点と問題の両方を持っていたことが推測できます。",
        example:
          "The passage implies that... = 本文は～を示唆しています。",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "このパッセージを2回音読してください。特に「While the Industrial Revolution brought significant economic benefits...it also created new social problems」という対比表現に注意してください。",
      phraseReplacements: [
        {
          original: "While the Industrial Revolution brought significant economic benefits and improved living standards for many, it also created new social problems.",
          instruction:
            "このパターンを使って、他の歴史的イベントについて対比的な文を作ってみてください。",
          examples: [
            "While the digital revolution brought unprecedented connectivity and access to information, it also created new privacy concerns.",
            "While globalization brought economic opportunities and cultural exchange, it also created job displacement and cultural homogenization.",
            "While urbanization brought economic growth and improved services, it also created environmental pollution and social inequality.",
          ],
        },
      ],
      dailyConversationTips:
        "「While」を使った対比表現は、複雑な現象を説明するときに非常に役立ちます。「While I enjoy the benefits, I also recognize the challenges.」（利点を楽しむ一方で、課題も認識しています）のように、バランスの取れた意見を表現できます。",
    },
  },
  {
    id: "reading-003",
    category: "reading",
    difficulty: "intermediate",
    question: `Read the passage and answer the question.

"Photosynthesis is the process by which plants convert sunlight into chemical energy. This process is essential for life on Earth because it produces oxygen, which is necessary for respiration in most organisms. Additionally, photosynthesis forms the base of most food chains, as plants are the primary producers that convert solar energy into organic matter that other organisms consume."

What is the primary function of photosynthesis according to the passage?`,
    options: [
      {
        id: "r003-a",
        text: "To produce oxygen only",
        isCorrect: false,
        translation: "酸素だけを生成すること",
      },
      {
        id: "r003-b",
        text: "To convert sunlight into chemical energy and produce oxygen",
        isCorrect: true,
        translation: "太陽光を化学エネルギーに変換し、酸素を生成すること",
      },
      {
        id: "r003-c",
        text: "To form the base of food chains",
        isCorrect: false,
        translation: "食物連鎖の基盤を形成すること",
      },
      {
        id: "r003-d",
        text: "To provide energy for respiration",
        isCorrect: false,
        translation: "呼吸のためのエネルギーを提供すること",
      },
    ],
    explanation:
      "正解は「To convert sunlight into chemical energy and produce oxygen」です。本文の最初の文に「Photosynthesis is the process by which plants convert sunlight into chemical energy.」と定義されており、これが光合成の主要な機能です。酸素の生成も重要ですが、光合成の定義そのものは太陽光を化学エネルギーに変換することです。",
    hint: "本文で光合成の定義として最初に述べられているのは何ですか？",
    questionTranslation:
      "【パッセージ全体の和訳】\n「光合成は、植物が太陽光を化学エネルギーに変換するプロセスです。このプロセスは、ほとんどの生物の呼吸に必要な酸素を生成するため、地球上の生命にとって不可欠です。さらに、植物は太陽エネルギーを他の生物が消費する有機物に変換する一次生産者であるため、光合成はほとんどの食物連鎖の基盤を形成しています。」\n\n【問題文の和訳】\n本文によると、光合成の主要な機能は何ですか？",
    questionKatakana:
      "【パッセージ全体のカタカナ読み】\nフォトシンセシス イズ ザ プロセス バイ ウィッチ プランツ コンバート サンライト イントゥ ケミカル エナジー。ディス プロセス イズ エッセンシャル フォー ライフ オン アース ビコーズ イット プロデューシズ オキシジェン、ウィッチ イズ ネセサリー フォー レスピレーション イン モスト オーガニズムズ。アディショナリー、フォトシンセシス フォームズ ザ ベイス オブ モスト フード チェインズ、アズ プランツ アー ザ プライマリー プロデューサーズ ザット コンバート ソーラー エナジー イントゥ オーガニック マター ザット アザー オーガニズムズ コンシューム。\n\n【問題文のカタカナ読み】\nワット イズ ザ プライマリー ファンクション オブ フォトシンセシス アコーディング トゥ ザ パッセージ？",
    vocabularyItems: [
      {
        word: "photosynthesis",
        meaning: "光合成",
        katakanaReading: "フォトシンセシス",
        example: "Plants perform photosynthesis using sunlight.",
      },
      {
        word: "convert",
        meaning: "変換する、転換する",
        katakanaReading: "コンバート",
        example: "We can convert solar energy into electricity.",
      },
      {
        word: "respiration",
        meaning: "呼吸、呼吸作用",
        katakanaReading: "レスピレーション",
        example: "Cellular respiration provides energy to cells.",
      },
      {
        word: "organic matter",
        meaning: "有機物",
        katakanaReading: "オーガニック マター",
        example: "Soil contains organic matter.",
      },
    ],
    grammarPoints: [
      {
        rule: "定義的読解（Definitional Reading）",
        explanation:
          "学術的な読解では、用語や概念の定義を正確に理解することが重要です。本文の最初の文で定義されている内容が、その用語の主要な特性を表しています。",
        example:
          "According to the passage, X is defined as... = 本文によると、Xは～と定義されています。",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "このパッセージを2回音読してください。特に「Photosynthesis is the process by which plants convert sunlight into chemical energy.」という定義的な文に注意してください。",
      phraseReplacements: [
        {
          original: "Photosynthesis is the process by which plants convert sunlight into chemical energy.",
          instruction:
            "このパターンを使って、他の科学的プロセスの定義を作ってみてください。",
          examples: [
            "Digestion is the process by which the body breaks down food into nutrients.",
            "Evaporation is the process by which water converts from liquid to gas.",
            "Fermentation is the process by which microorganisms convert sugars into alcohol.",
          ],
        },
      ],
      dailyConversationTips:
        "「is the process by which」というパターンは、複雑なプロセスを説明するときに非常に役立ちます。学術的な文脈で、何かがどのように機能するかを説明するときに使えます。",
    },
  },
  {
    id: "reading-004",
    category: "reading",
    difficulty: "intermediate",
    question: `Read the passage and answer the question.

"The development of the internet has fundamentally changed how we communicate, work, and access information. While the internet has provided unprecedented benefits, including instant global communication and access to vast amounts of information, it has also introduced new challenges such as cybersecurity threats, misinformation, and digital divide issues. Despite these challenges, the internet remains an essential tool for modern society."

What is the author's overall attitude toward the internet?`,
    options: [
      {
        id: "r004-a",
        text: "Entirely negative",
        isCorrect: false,
        translation: "完全に否定的",
      },
      {
        id: "r004-b",
        text: "Entirely positive",
        isCorrect: false,
        translation: "完全に肯定的",
      },
      {
        id: "r004-c",
        text: "Balanced, acknowledging both benefits and challenges",
        isCorrect: true,
        translation: "バランスの取れた、利点と課題の両方を認識している",
      },
      {
        id: "r004-d",
        text: "Skeptical about its usefulness",
        isCorrect: false,
        translation: "その有用性について懐疑的",
      },
    ],
    explanation:
      "正解は「Balanced, acknowledging both benefits and challenges」です。本文は「provided unprecedented benefits」と「introduced new challenges」の両方を述べており、最後に「the internet remains an essential tool」と結論づけています。著者はインターネットの利点と課題の両方を認識しながら、全体的には肯定的な見方をしています。",
    hint: "著者はインターネットの利点と課題の両方について述べていますか？",
    questionTranslation:
      "【パッセージ全体の和訳】\n「インターネットの発展は、私たちのコミュニケーション、仕事、情報へのアクセス方法を根本的に変えました。インターネットは瞬時のグローバルコミュニケーションや膨大な情報へのアクセスなど、前例のない利点をもたらした一方で、サイバーセキュリティの脅威、偽情報、デジタル格差の問題など、新たな課題ももたらしました。これらの課題にもかかわらず、インターネットは現代社会に不可欠なツールであり続けています。」\n\n【問題文の和訳】\nインターネットに対する著者の全体的な態度は何ですか？",
    questionKatakana:
      "【パッセージ全体のカタカナ読み】\nザ デベロップメント オブ ザ インターネット ハズ ファンダメンタリー チェンジド ハウ ウィー コミュニケート、ワーク、アンド アクセス インフォメーション。ワイル ザ インターネット ハズ プロバイデッド アンプレシデンテッド ベネフィッツ、インクルーディング インスタント グローバル コミュニケーション アンド アクセス トゥ ヴァスト アマウンツ オブ インフォメーション、イット ハズ オールソウ イントロデュースド ニュー チャレンジズ サッチ アズ サイバーセキュリティー スレッツ、ミスインフォメーション、アンド デジタル ディバイド イシューズ。ディスパイト ディーズ チャレンジズ、ザ インターネット リメインズ アン エッセンシャル トゥール フォー モダン ソサイエティー。\n\n【問題文のカタカナ読み】\nワット イズ ザ オーサーズ オーバーオール アティチュード トゥワード ザ インターネット？",
    vocabularyItems: [
      {
        word: "fundamentally",
        meaning: "根本的に、基本的に",
        katakanaReading: "ファンダメンタリー",
        example: "This discovery fundamentally changed science.",
      },
      {
        word: "cybersecurity",
        meaning: "サイバーセキュリティ、情報セキュリティ",
        katakanaReading: "サイバーセキュリティ",
        example: "Cybersecurity is crucial for businesses.",
      },
      {
        word: "misinformation",
        meaning: "誤った情報、虚偽情報",
        katakanaReading: "ミスインフォメーション",
        example: "Misinformation spreads quickly online.",
      },
      {
        word: "digital divide",
        meaning: "デジタル格差",
        katakanaReading: "デジタル ディバイド",
        example: "The digital divide affects rural areas.",
      },
    ],
    grammarPoints: [
      {
        rule: "著者の態度・トーンの読み取り",
        explanation:
          "学術的な読解では、著者の態度やトーンを読み取ることが重要です。「While...also」「Despite...remains」などの表現から、著者のバランスの取れた見方が読み取れます。",
        example:
          "The author's tone is balanced and objective. = 著者のトーンはバランスが取れており、客観的です。",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "このパッセージを2回音読してください。特に「While...also」と「Despite...remains」という対比表現に注意してください。",
      phraseReplacements: [
        {
          original: "While the internet has provided unprecedented benefits, including instant global communication and access to vast amounts of information, it has also introduced new challenges.",
          instruction:
            "このパターンを使って、他のテクノロジーについて対比的な文を作ってみてください。",
          examples: [
            "While artificial intelligence has provided unprecedented efficiency, including automation and data analysis, it has also introduced new ethical concerns.",
            "While social media has provided unprecedented connectivity, including instant communication and community building, it has also introduced new mental health challenges.",
            "While automation has provided unprecedented productivity, including reduced labor costs and increased output, it has also introduced new employment challenges.",
          ],
        },
      ],
      dailyConversationTips:
        "複雑なトピックについて議論するときは、バランスの取れた見方を示すことが重要です。「On one hand...on the other hand」や「While...also」という表現を使って、複数の視点を認識することで、より説得力のある議論ができます。",
    },
  },
  {
    id: "reading-005",
    category: "reading",
    difficulty: "intermediate",
    question: `Read the passage and answer the question.

"Renewable energy sources such as solar and wind power are becoming increasingly important as the world seeks to reduce its dependence on fossil fuels. These energy sources are sustainable because they can be replenished naturally and do not produce greenhouse gas emissions. However, the transition to renewable energy faces significant challenges, including high initial costs, technological limitations, and the need for infrastructure development. Despite these obstacles, many countries are investing heavily in renewable energy to combat climate change and ensure energy security."

What is the main reason countries are investing in renewable energy?`,
    options: [
      {
        id: "r005-a",
        text: "To reduce initial costs",
        isCorrect: false,
        translation: "初期コストを削減するため",
      },
      {
        id: "r005-b",
        text: "To develop new infrastructure",
        isCorrect: false,
        translation: "新しいインフラを開発するため",
      },
      {
        id: "r005-c",
        text: "To combat climate change and ensure energy security",
        isCorrect: true,
        translation: "気候変動に対抗し、エネルギー安全保障を確保するため",
      },
      {
        id: "r005-d",
        text: "To overcome technological limitations",
        isCorrect: false,
        translation: "技術的限界を克服するため",
      },
    ],
    explanation:
      "正解は「To combat climate change and ensure energy security」です。本文の最後に「many countries are investing heavily in renewable energy to combat climate change and ensure energy security」と明確に書かれています。他の選択肢は再生可能エネルギーへの転換における課題であり、投資の理由ではありません。",
    hint: "本文で「countries are investing heavily in renewable energy」の理由として述べられているのは何ですか？",
    questionTranslation:
      "【パッセージ全体の和訳】\n「太陽光や風力発電などの再生可能エネルギーは、世界が化石燃料への依存を減らそうとする中、ますます重要になっています。これらのエネルギー源は、自然に補充され、温室効果ガスを排出しないため、持続可能です。しかし、再生可能エネルギーへの移行には、高い初期コスト、技術的限界、インフラ整備の必要性など、大きな課題があります。これらの障害にもかかわらず、多くの国が気候変動に対抗し、エネルギー安全保障を確保するために再生可能エネルギーに多額の投資をしています。」\n\n【問題文の和訳】\n各国が再生可能エネルギーに投資している主な理由は何ですか？",
    questionKatakana:
      "【パッセージ全体のカタカナ読み】\nリニューアブル エナジー ソーシズ サッチ アズ ソーラー アンド ウィンド パワー アー ビカミング インクリーシングリー インポータント アズ ザ ワールド スィークス トゥ リデュース イッツ ディペンデンス オン フォッシル フューエルズ。ディーズ エナジー ソーシズ アー サスティナブル ビコーズ ゼイ キャン ビー リプレニッシュド ナチュラリー アンド ドゥ ノット プロデュース グリーンハウス ガス エミッションズ。ハウエバー、ザ トランジション トゥ リニューアブル エナジー フェイシズ シグニフィカント チャレンジズ、インクルーディング ハイ イニシャル コスツ、テクノロジカル リミテーションズ、アンド ザ ニード フォー インフラストラクチャー デベロップメント。ディスパイト ディーズ オブスタクルズ、メニー カントリーズ アー インベスティング ヘビリー イン リニューアブル エナジー トゥ コンバット クライメット チェンジ アンド エンシュア エナジー セキュリティー。\n\n【問題文のカタカナ読み】\nワット イズ ザ メイン リーズン カントリーズ アー インベスティング イン リニューアブル エナジー？",
    vocabularyItems: [
      {
        word: "renewable",
        meaning: "再生可能な、更新可能な",
        katakanaReading: "リニューアブル",
        example: "Solar energy is a renewable resource.",
      },
      {
        word: "sustainable",
        meaning: "持続可能な、サステナブル",
        katakanaReading: "サスティナブル",
        example: "Sustainable development is important.",
      },
      {
        word: "replenished",
        meaning: "補充された、復元された",
        katakanaReading: "リプレニッシュド",
        example: "Water resources can be replenished.",
      },
      {
        word: "greenhouse gas",
        meaning: "温室効果ガス",
        katakanaReading: "グリーンハウス ガス",
        example: "Carbon dioxide is a greenhouse gas.",
      },
    ],
    grammarPoints: [
      {
        rule: "因果関係の読み取り",
        explanation:
          "学術的な読解では、「why」（なぜ）という因果関係を正確に理解することが重要です。「to」という不定詞が使われている場合、それが目的や理由を表しています。",
        example:
          "Countries are investing in renewable energy to... = 各国は～するために再生可能エネルギーに投資しています。",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "このパッセージを2回音読してください。特に「many countries are investing heavily in renewable energy to combat climate change and ensure energy security」という目的を示す文に注意してください。",
      phraseReplacements: [
        {
          original: "Many countries are investing heavily in renewable energy to combat climate change and ensure energy security.",
          instruction:
            "このパターンを使って、他の政策投資について文を作ってみてください。",
          examples: [
            "Many governments are investing heavily in education to improve workforce skills and boost economic growth.",
            "Many organizations are investing heavily in technology to enhance efficiency and remain competitive.",
            "Many companies are investing heavily in research to develop new products and maintain market leadership.",
          ],
        },
      ],
      dailyConversationTips:
        "「to」を使った目的表現は、なぜ何かをするのかを説明するときに非常に役立ちます。「I'm studying hard to pass the exam.」（試験に合格するために一生懸命勉強しています）のように、日常会話でもよく使われます。",
    },
  },
];
