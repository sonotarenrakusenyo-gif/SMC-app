import { QuizQuestion } from "./quizzes";

export const readingAdvancedQuizzes: QuizQuestion[] = [
  {
    id: "ra-001",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'The rapid advancement of artificial intelligence raises profound ethical questions. As AI systems become capable of making consequential decisions — from medical diagnoses to criminal sentencing — concerns about accountability and bias have intensified. While proponents argue that AI can process data with greater precision than humans, critics contend that algorithmic systems often perpetuate existing societal inequalities, particularly when trained on historically biased datasets.'\n\nWhat is the primary concern critics raise about AI decision-making?",
    options: [
      { id: "ra001-a", text: "AI processes data too slowly", isCorrect: false, translation: "AIはデータ処理が遅すぎる" },
      { id: "ra001-b", text: "AI may perpetuate societal inequalities through biased datasets", isCorrect: true, translation: "AIは偏ったデータを通じて社会的不平等を永続させる可能性がある" },
      { id: "ra001-c", text: "AI is too expensive to develop", isCorrect: false, translation: "AIは開発費が高すぎる" },
      { id: "ra001-d", text: "AI cannot make medical diagnoses", isCorrect: false, translation: "AIは医療診断ができない" },
    ],
    explanation: "「critics contend that algorithmic systems often perpetuate existing societal inequalities, particularly when trained on historically biased datasets（批評家はアルゴリズムシステムが歴史的に偏ったデータで学習された場合、社会的不平等を永続させることが多いと主張する）」と書かれています。",
    hint: "「critics contend that...（批評家は〜と主張する）」に注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n人工知能の急速な進歩は、深刻な倫理的問題を提起しています。AIシステムが医療診断から刑事判決まで重大な決定を下せるようになるにつれ、説明責任と偏りについての懸念が高まっています。支持者はAIが人間より高い精度でデータを処理できると主張しますが、批評家はアルゴリズムシステムが、特に歴史的に偏ったデータセットで学習された場合、既存の社会的不平等を永続させることが多いと主張します。\n\n【問題文の和訳】\n批評家がAIの意思決定について提起する主な懸念は何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ ラピッド アドバンスメント オブ アーティフィシャル インテリジェンス レイジズ プロファウンド エシカル クエスチョンズ。アズ エーアイ システムズ ビカム ケイパブル オブ メイキング コンシクウェンシャル ディシジョンズ — フロム メディカル ダイアグノシズ トゥ クリミナル センテンシング — コンサーンズ アバウト アカウンタビリティー アンド バイアス ハブ インテンシファイド。ワイル プロポウネンツ アーギュー ザット エーアイ キャン プロセス データ ウィズ グレイター プリシジョン ザン ヒューマンズ、クリティックス コンテンド ザット アルゴリズミック システムズ オフテン パーペチュエイト イグジスティング ソシエタル イネクウォリティーズ、パーティキュラリー ウェン トレインド オン ヒストリカリー バイアスト データセッツ。\n\n【問題文のカタカナ読み】\nワット イズ ザ プライマリー コンサーン クリティックス レイズ アバウト エーアイ ディシジョン メイキング？",
    vocabularyItems: [
      { word: "perpetuate", meaning: "永続させる、持続させる", katakanaReading: "パーペチュエイト", example: "Stereotypes perpetuate harmful social biases." },
      { word: "accountability", meaning: "説明責任", katakanaReading: "アカウンタビリティー", example: "There must be accountability for AI errors." },
      { word: "algorithmic", meaning: "アルゴリズムの", katakanaReading: "アルゴリズミック", example: "Algorithmic bias is a growing concern." },
    ],
    grammarPoints: [
      {
        rule: "while を使った対比（While A..., B...）",
        explanation: "「While（〜である一方で）」は2つの対立する情報を対比させます。「While proponents argue X, critics contend Y.」支持者と批評家の意見を対比させる典型的なアカデミックな構造です。",
        example: "While some support the policy, others strongly oppose it. / While the data shows improvement, challenges remain.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「While proponents argue that AI can process data with precision, critics contend that it may perpetuate societal inequalities.」を5回音読してください。while の対比構造を意識して発音しましょう。",
      phraseReplacements: [
        {
          original: "While proponents argue AI is precise, critics warn it may perpetuate inequalities.",
          instruction: "AIの倫理について話しましょう。",
          examples: [
            "AI has great potential, but we must ensure it is developed responsibly.",
            "Algorithmic bias is a serious concern that needs to be addressed urgently.",
            "While AI can improve efficiency, human oversight remains essential.",
          ],
        },
      ],
      dailyConversationTips: "「While I agree that..., I also think that...」（〜には同意しますが、〜とも思います）は対立する意見をバランスよく述べる sophisticated なフレーズです。",
    },
  },
  {
    id: "ra-002",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'Globalization has facilitated unprecedented cultural exchange but has also prompted concerns about cultural homogenization. As Western media, fashion, and consumer goods permeate markets worldwide, minority languages and indigenous practices face the risk of extinction. Scholars debate whether globalization represents cultural imperialism or a natural evolution of human societies, with some arguing that local cultures adapt rather than disappear.'\n\nWhat do some scholars argue about local cultures in the context of globalization?",
    options: [
      { id: "ra002-a", text: "They will inevitably disappear", isCorrect: false, translation: "必然的に消滅する" },
      { id: "ra002-b", text: "They adapt rather than disappear", isCorrect: true, translation: "消滅するのではなく適応する" },
      { id: "ra002-c", text: "They resist all external influences", isCorrect: false, translation: "すべての外部の影響に抵抗する" },
      { id: "ra002-d", text: "They benefit from cultural imperialism", isCorrect: false, translation: "文化帝国主義から恩恵を受ける" },
    ],
    explanation: "「some arguing that local cultures adapt rather than disappear（地域文化は消滅するのではなく適応すると主張する学者もいる）」と書かれています。",
    hint: "「some arguing that...（〜と主張する人もいる）」に注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nグローバリゼーションは前例のない文化交流を促進してきましたが、文化の均質化への懸念も引き起こしています。西洋のメディア、ファッション、消費財が世界市場に浸透するにつれ、少数言語や先住民の慣行は絶滅の危機に晒されています。学者たちはグローバリゼーションが文化帝国主義なのか人間社会の自然な進化なのかを議論しており、地域文化は消滅するのではなく適応すると主張する人もいます。\n\n【問題文の和訳】\nグローバリゼーションの文脈で、一部の学者は地域文化について何と主張していますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nグローバライゼーション ハズ ファシリテイテッド アンプレシデンテッド カルチャル エクスチェンジ バット ハズ オールソウ プロンプテッド コンサーンズ アバウト カルチャル ホモジェナイゼーション。アズ ウェスタン メディア、ファッション、アンド コンシューマー グッズ パーミエイト マーケッツ ワールドワイド、マイノリティー ランゲージズ アンド インディジェナス プラクティシズ フェイス ザ リスク オブ エクスティンクション。スカラーズ ディベイト ホウェザー グローバライゼーション レプリゼンツ カルチャル インペリアリズム オア ア ナチュラル エボリューション オブ ヒューマン ソサイエティーズ、ウィズ サム アーギュイング ザット ローカル カルチャーズ アダプト ラザー ザン ディサピア。\n\n【問題文のカタカナ読み】\nワット ドゥ サム スカラーズ アーギュー アバウト ローカル カルチャーズ イン ザ コンテクスト オブ グローバライゼーション？",
    vocabularyItems: [
      { word: "homogenization", meaning: "均質化、画一化", katakanaReading: "ホモジェナイゼーション", example: "Critics fear the homogenization of world cultures." },
      { word: "indigenous", meaning: "先住民の、土着の", katakanaReading: "インディジェナス", example: "Indigenous languages are disappearing rapidly." },
      { word: "permeate", meaning: "浸透する、広まる", katakanaReading: "パーミエイト", example: "Social media has permeated every aspect of life." },
    ],
    grammarPoints: [
      {
        rule: "rather than（〜ではなく〜）の用法",
        explanation: "「rather than」は「Aではなく B」という対比を表します。「Local cultures adapt rather than disappear.」（消滅するのではなく適応する）。また「whether A or B（AなのかBなのか）」は二択の疑問や議論を表します。",
        example: "She chose to stay rather than leave. / Scholars debate whether it helps or harms. / We should discuss rather than argue.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Some argue that local cultures adapt rather than disappear in the face of globalization.」を5回音読してください。rather than の対比リズムを意識しましょう。",
      phraseReplacements: [
        {
          original: "Local cultures adapt rather than disappear in the face of globalization.",
          instruction: "グローバリゼーションと文化について話しましょう。",
          examples: [
            "I think Japanese culture has adapted to globalization while keeping its unique identity.",
            "The spread of English as a global language may threaten smaller languages.",
            "Cultural exchange enriches societies when it is balanced and respectful.",
          ],
        },
      ],
      dailyConversationTips: "「I think culture adapts rather than disappears.」（文化は消えるのではなく適応すると思います）はグローバリゼーションのディスカッションで使えるバランスの取れた意見表明です。",
    },
  },
  {
    id: "ra-003",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'Recent neuroscientific research suggests that sleep is critical for memory consolidation. During the slow-wave sleep phase, the brain replays and reorganizes information acquired during waking hours, transferring it from short-term to long-term memory. Disrupting this process through sleep deprivation not only impairs memory formation but also hinders emotional regulation, elevating the risk of mood disorders.'\n\nWhat function does slow-wave sleep serve in memory, according to the passage?",
    options: [
      { id: "ra003-a", text: "It erases short-term memories", isCorrect: false, translation: "短期記憶を消去する" },
      { id: "ra003-b", text: "It transfers information from short-term to long-term memory", isCorrect: true, translation: "情報を短期記憶から長期記憶に移す" },
      { id: "ra003-c", text: "It only affects emotional regulation", isCorrect: false, translation: "感情調整にのみ影響する" },
      { id: "ra003-d", text: "It prevents the brain from processing information", isCorrect: false, translation: "脳が情報を処理するのを妨げる" },
    ],
    explanation: "「transferring it from short-term to long-term memory（情報を短期記憶から長期記憶に移す）」と睡眠中の記憶固定プロセスが説明されています。",
    hint: "「slow-wave sleep」の機能として説明されている「transferring...memory」に注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n最近の神経科学研究によると、睡眠は記憶の固定に不可欠です。徐波睡眠段階において、脳は覚醒中に取得した情報を再生・再編成し、短期記憶から長期記憶へと移します。睡眠不足によりこのプロセスが中断されると、記憶形成が損なわれるだけでなく、感情調整も阻害され、気分障害のリスクが高まります。\n\n【問題文の和訳】\nパッセージによると、徐波睡眠は記憶においてどのような機能を果たしますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nリーセント ニューロサイエンティフィック リサーチ サジェスツ ザット スリープ イズ クリティカル フォー メモリー コンソリデーション。デュアリング ザ スロウウェイブ スリープ フェイズ、ザ ブレイン リプレイズ アンド リオーガナイジズ インフォメーション アクワイアード デュアリング ウェイキング アワーズ、トランスファリング イット フロム ショートターム トゥ ロングターム メモリー。ディスラプティング ディス プロセス スルー スリープ デプリベーション ノット オンリー インペアーズ メモリー フォーメーション バット オールソウ ヒンダーズ エモーショナル レギュレーション、エレベイティング ザ リスク オブ ムード ディスオーダーズ。\n\n【問題文のカタカナ読み】\nワット ファンクション ダズ スロウウェイブ スリープ サーブ イン メモリー、アコーディング トゥ ザ パッセージ？",
    vocabularyItems: [
      { word: "consolidation", meaning: "（記憶の）固定、強化", katakanaReading: "コンソリデーション", example: "Memory consolidation occurs during sleep." },
      { word: "deprivation", meaning: "剥奪、不足（睡眠不足：sleep deprivation）", katakanaReading: "デプリベーション", example: "Sleep deprivation impairs cognitive function." },
      { word: "hinder", meaning: "妨げる、阻害する", katakanaReading: "ヒンダー", example: "Anxiety can hinder academic performance." },
    ],
    grammarPoints: [
      {
        rule: "not only A but also B（AだけでなくBも）",
        explanation: "「not only A but also B」は「AだけでなくBも」という強調構文です。「Sleep deprivation not only impairs memory but also hinders emotional regulation.」記憶だけでなく感情調整も影響されると2つの結果を強調しています。",
        example: "Exercise not only improves physical health but also boosts mental well-being. / She is not only talented but also hardworking.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Sleep deprivation not only impairs memory formation but also hinders emotional regulation.」を5回音読してください。not only...but also の構造を意識して発音しましょう。",
      phraseReplacements: [
        {
          original: "Sleep deprivation not only impairs memory but also hinders emotional regulation.",
          instruction: "睡眠と認知機能の関係について話しましょう。",
          examples: [
            "Getting enough sleep is essential not only for physical health but also for academic performance.",
            "I notice that I make more mistakes when I haven't slept enough.",
            "Modern lifestyles often prioritize productivity over sleep, which is counterproductive.",
          ],
        },
      ],
      dailyConversationTips: "「Not only that, but...」（それだけでなく〜）は議論の中で追加のポイントを強調するときに使う sophisticated な表現です。",
    },
  },
  {
    id: "ra-004",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'Income inequality has widened significantly in many developed nations over the past four decades. Economists attribute this trend to technological change, which has increased demand for high-skilled workers while displacing low-skilled ones, and to globalization, which has intensified competition from lower-wage economies. Some economists argue that progressive taxation and investment in education are essential tools for redistribution, while others contend that market-driven growth will eventually reduce inequality through a trickle-down effect.'\n\nWhat do some economists propose to address income inequality?",
    options: [
      { id: "ra004-a", text: "Increasing trade with low-wage economies", isCorrect: false, translation: "低賃金経済国との貿易を増やす" },
      { id: "ra004-b", text: "Progressive taxation and investment in education", isCorrect: true, translation: "累進課税と教育への投資" },
      { id: "ra004-c", text: "Reducing technology in the workplace", isCorrect: false, translation: "職場の技術を削減する" },
      { id: "ra004-d", text: "Eliminating all forms of taxation", isCorrect: false, translation: "すべての課税を廃止する" },
    ],
    explanation: "「Some economists argue that progressive taxation and investment in education are essential tools for redistribution（一部の経済学者は累進課税と教育への投資が再配分のための不可欠なツールだと主張する）」と書かれています。",
    hint: "「Some economists argue that...（一部の経済学者は〜と主張する）」に注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n過去40年間で多くの先進国において所得格差が大幅に拡大しています。経済学者はこの傾向を、高技能労働者への需要を増やしながら低技能労働者を置き換えてきた技術変化と、低賃金経済国からの競争を激化させたグローバリゼーションに起因すると考えています。一部の経済学者は累進課税と教育への投資が再配分のための不可欠なツールだと主張する一方、市場主導の成長がトリクルダウン効果で最終的に格差を縮小すると主張する経済学者もいます。\n\n【問題文の和訳】\n一部の経済学者は所得格差に対処するために何を提案していますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nインカム イネクウォリティー ハズ ワイドンド シグニフィカントリー イン メニー ディベロップト ネーションズ オーバー ザ パスト フォー ディケイズ。エコノミスツ アトリビュート ディス トレンド トゥ テクノロジカル チェンジ、ウィッチ ハズ インクリースト ディマンド フォー ハイスキルド ワーカーズ ワイル ディスプレイシング ロウスキルド ワンズ、アンド トゥ グローバライゼーション、ウィッチ ハズ インテンシファイド コンペティション フロム ロワーウェイジ エコノミーズ。サム エコノミスツ アーギュー ザット プログレッシブ タクセーション アンド インベストメント イン エデュケーション アー エッセンシャル ツールズ フォー リディストリビューション、ワイル アザーズ コンテンド ザット マーケット ドリブン グロウス ウィル イベンチュアリー リデュース イネクウォリティー スルー ア トリクルダウン エフェクト。\n\n【問題文のカタカナ読み】\nワット ドゥ サム エコノミスツ プロポウズ トゥ アドレス インカム イネクウォリティー？",
    vocabularyItems: [
      { word: "progressive taxation", meaning: "累進課税（高所得者ほど高い税率）", katakanaReading: "プログレッシブ タクセーション", example: "Progressive taxation aims to reduce inequality." },
      { word: "redistribution", meaning: "再配分、富の再分配", katakanaReading: "リディストリビューション", example: "Government programs facilitate redistribution." },
      { word: "attribute A to B", meaning: "AをBに起因するとみなす", katakanaReading: "アトリビュート エー トゥ ビー", example: "They attribute the success to hard work." },
    ],
    grammarPoints: [
      {
        rule: "while A..., B...（一方でA, 他方でB）",
        explanation: "「while（〜である一方で）」を使って対立する意見を並列させる構造は学術的文章でよく使われます。「Some argue X, while others contend Y.」この構造を使うとバランスのとれた論述ができます。",
        example: "While some economists favor free markets, others support government intervention. / While the data is promising, further research is needed.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Some economists argue that progressive taxation and investment in education are essential tools for redistribution.」を5回音読してください。progressive taxation の発音を練習しましょう。",
      phraseReplacements: [
        {
          original: "Progressive taxation and education investment are proposed to address income inequality.",
          instruction: "経済格差と政策について話しましょう。",
          examples: [
            "I believe access to quality education is the most powerful tool for reducing inequality.",
            "Income inequality can have serious social consequences if left unaddressed.",
            "Technology creates both opportunities and challenges for workers at different skill levels.",
          ],
        },
      ],
      dailyConversationTips: "「What's your take on income inequality?」（所得格差についてどう思いますか？）はディスカッションクラスでよく出るテーマです。準備しておきましょう。",
    },
  },
  {
    id: "ra-005",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'The conservation of endangered languages is a topic of growing academic and political interest. Linguists estimate that approximately half of the world's roughly 7,000 languages are at risk of disappearing within this century. The loss of a language entails not merely the loss of a communication system but the extinction of an entire cultural worldview, including oral histories, indigenous ecological knowledge, and unique philosophical frameworks. Revitalization efforts, such as community-based language programs and digital archiving, have shown promise but face substantial challenges in reversing intergenerational language shift.'\n\nWhat does the passage imply about the consequences of language loss?",
    options: [
      { id: "ra005-a", text: "Only minor communication difficulties arise", isCorrect: false, translation: "軽微なコミュニケーションの困難が生じるだけ" },
      { id: "ra005-b", text: "An entire cultural worldview is lost, not just a communication system", isCorrect: true, translation: "コミュニケーション手段だけでなく文化的な世界観全体が失われる" },
      { id: "ra005-c", text: "Languages can be fully recovered through digital archiving alone", isCorrect: false, translation: "デジタルアーカイブだけで完全に回復できる" },
      { id: "ra005-d", text: "Language loss only affects older generations", isCorrect: false, translation: "言語の喪失は高齢者世代だけに影響する" },
    ],
    explanation: "「The loss of a language entails not merely the loss of a communication system but the extinction of an entire cultural worldview（言語の消滅はコミュニケーションシステムの喪失にとどまらず、文化的な世界観全体の絶滅を意味する）」と書かれています。",
    hint: "「not merely...but...（〜だけでなく〜）」という構造に注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n絶滅危惧言語の保護は、学術的・政治的関心が高まっているトピックです。言語学者は、世界の約7,000の言語のうち約半数が今世紀中に消滅の危機に瀕していると推定しています。言語の消滅はコミュニケーションシステムの喪失にとどまらず、口承の歴史、先住民の生態知識、独自の哲学的枠組みを含む文化的世界観全体の絶滅を意味します。コミュニティーベースの言語プログラムやデジタルアーカイブなどの再活性化の取り組みは有望ですが、世代間の言語シフトを逆転させるには相当な課題があります。\n\n【問題文の和訳】\n言語の消滅の結果についてパッセージは何を示唆していますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ コンサーベーション オブ エンデンジャード ランゲージズ イズ ア トピック オブ グロウイング アカデミック アンド ポリティカル インタレスト。リンギスト エスティメイト ザット アプロクシメイトリー ハーフ オブ ザ ワールズ ラフリー セブン サウザンド ランゲージズ アー アット リスク オブ ディサピアリング ウィジン ディス センチュリー。ザ ロス オブ ア ランゲージ エンテイルズ ノット ミアリー ザ ロス オブ ア コミュニケーション システム バット ザ エクスティンクション オブ アン エンタイア カルチャル ワールドビュー、インクルーディング オーラル ヒストリーズ、インディジェナス エコロジカル ナレッジ、アンド ユニーク フィロソフィカル フレームワークス。\n\n【問題文のカタカナ読み】\nワット ダズ ザ パッセージ インプライ アバウト ザ コンシクウェンシズ オブ ランゲージ ロス？",
    vocabularyItems: [
      { word: "entail", meaning: "伴う、必然的に含む", katakanaReading: "エンテイル", example: "This project entails significant financial risk." },
      { word: "revitalization", meaning: "再活性化、復活", katakanaReading: "リバイタライゼーション", example: "Language revitalization requires community commitment." },
      { word: "intergenerational", meaning: "世代間の", katakanaReading: "インタージェネレーショナル", example: "Intergenerational knowledge transfer is important." },
    ],
    grammarPoints: [
      {
        rule: "not merely A but B（AだけでなくBも：強調構文）",
        explanation: "「not merely A but B」は「単にAだけでなくBも」という強調表現です。「not only A but also B」より formal です。「The loss entails not merely a communication system but an entire worldview.」Bの方が重要で強調されます。",
        example: "The problem is not merely financial but also ethical. / The impact was not merely local but global in scale.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The loss of a language entails not merely the loss of a communication system but the extinction of an entire cultural worldview.」を5回音読してください。not merely...but を強調して発音しましょう。",
      phraseReplacements: [
        {
          original: "Language loss involves not merely a communication system but an entire cultural worldview.",
          instruction: "言語と文化の保護について話しましょう。",
          examples: [
            "Learning another language gives you access to a completely different way of thinking.",
            "I believe every language deserves to be preserved as a cultural heritage.",
            "Digital tools can help document endangered languages before they disappear.",
          ],
        },
      ],
      dailyConversationTips: "「Learning a language is more than just learning words; it's learning a way of seeing the world.」（言語を学ぶことは言葉を覚えること以上に、世界の見方を学ぶことです）はとても印象的なフレーズです。",
    },
  },
  {
    id: "ra-006",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'Urban planning plays a crucial role in shaping the social and environmental fabric of cities. Mixed-use development, which combines residential, commercial, and recreational spaces, reduces car dependency and fosters walkable communities. However, urban renewal projects have historically displaced low-income residents through a process known as gentrification, raising serious equity concerns. Planners are increasingly challenged to balance economic development with social inclusion and environmental sustainability.'\n\nWhat is the equity concern associated with urban renewal mentioned in the passage?",
    options: [
      { id: "ra006-a", text: "It increases car dependency in cities", isCorrect: false, translation: "都市の車への依存度を高める" },
      { id: "ra006-b", text: "It displaces low-income residents through gentrification", isCorrect: true, translation: "ジェントリフィケーションにより低所得者を排除する" },
      { id: "ra006-c", text: "It reduces commercial spaces in cities", isCorrect: false, translation: "都市の商業スペースを減らす" },
      { id: "ra006-d", text: "It harms high-income residents", isCorrect: false, translation: "高所得の住民に害を与える" },
    ],
    explanation: "「urban renewal projects have historically displaced low-income residents through a process known as gentrification, raising serious equity concerns（都市再生プロジェクトは歴史的にジェントリフィケーションと呼ばれるプロセスで低所得者を排除し、深刻な公平性の懸念を引き起こしてきた）」と書かれています。",
    hint: "「equity concerns（公平性の懸念）」に直接つながる記述を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n都市計画は都市の社会的・環境的構造を形成する上で重要な役割を果たしています。住宅、商業、娯楽スペースを組み合わせた複合開発は、車への依存を減らし、歩いて移動できるコミュニティを育みます。しかし、都市再生プロジェクトは歴史的にジェントリフィケーションと呼ばれるプロセスを通じて低所得者を排除し、深刻な公平性の懸念を引き起こしてきました。都市計画者は経済開発と社会的包摂、環境の持続可能性のバランスをとることがますます求められています。\n\n【問題文の和訳】\nパッセージで言及されている都市再生に関連した公平性の懸念は何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nアーバン プランニング プレイズ ア クルーシャル ロール イン シェイピング ザ ソーシャル アンド エンバイロンメンタル ファブリック オブ スィティーズ。ミックスドユーズ ディベロップメント、ウィッチ コンバインズ レジデンシャル、コマーシャル、アンド レクリエーショナル スペイシズ、リデュースィズ カー ディペンデンシー アンド フォスターズ ウォーカブル コミュニティーズ。ハウエバー、アーバン リニューアル プロジェクツ ハブ ヒストリカリー ディスプレイスト ロウ インカム レジデンツ スルー ア プロセス ノウン アズ ジェントリフィケーション、レイジング シリアス エクウィティー コンサーンズ。\n\n【問題文のカタカナ読み】\nワット イズ ザ エクウィティー コンサーン アソシエイテッド ウィズ アーバン リニューアル メンションド イン ザ パッセージ？",
    vocabularyItems: [
      { word: "gentrification", meaning: "ジェントリフィケーション（富裕化による低所得者の排除）", katakanaReading: "ジェントリフィケーション", example: "Gentrification has transformed many historic neighborhoods." },
      { word: "walkable", meaning: "歩いて移動できる（徒歩圏内の）", katakanaReading: "ウォーカブル", example: "Walkable cities reduce reliance on cars." },
      { word: "equity", meaning: "公平性、平等", katakanaReading: "エクウィティー", example: "Equity in education is a fundamental goal." },
    ],
    grammarPoints: [
      {
        rule: "過去分詞句による名詞修飾（known as）",
        explanation: "「a process known as gentrification（ジェントリフィケーションと呼ばれるプロセス）」は過去分詞 known が名詞を後置修飾しています。「known as（〜として知られる）」は説明を加えるときによく使われます。",
        example: "A condition known as 'jet lag' affects travelers. / A process known as fermentation produces wine and beer.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Urban renewal projects have historically displaced low-income residents through gentrification, raising serious equity concerns.」を5回音読してください。gentrification の発音を確認しましょう。",
      phraseReplacements: [
        {
          original: "Urban renewal can displace low-income residents through gentrification.",
          instruction: "都市開発と社会的公平性について話しましょう。",
          examples: [
            "Affordable housing should be a priority in any urban development plan.",
            "Cities need to find ways to develop economically without pushing out long-term residents.",
            "Walkable, mixed-use neighborhoods tend to be more vibrant and sustainable.",
          ],
        },
      ],
      dailyConversationTips: "「Urban planning affects everyone's daily life.」（都市計画は誰もの日常生活に影響します）は都市問題のディスカッションで会話を開くための effective なフレーズです。",
    },
  },
  {
    id: "ra-007",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'The psychology of happiness has undergone significant scholarly re-examination. Contrary to the hedonic treadmill hypothesis, which predicts that humans quickly adapt to both positive and negative life changes, longitudinal studies suggest that some life events — such as marriage and unemployment — have lasting effects on well-being. Furthermore, researchers distinguish between hedonic well-being, defined as the presence of pleasure and absence of pain, and eudaimonic well-being, which encompasses a sense of purpose, personal growth, and meaningful relationships.'\n\nAccording to the passage, how does eudaimonic well-being differ from hedonic well-being?",
    options: [
      { id: "ra007-a", text: "It focuses only on physical pleasure", isCorrect: false, translation: "身体的な快楽のみに焦点を当てる" },
      { id: "ra007-b", text: "It encompasses purpose, growth, and meaningful relationships", isCorrect: true, translation: "目的・成長・意義のある関係を含む" },
      { id: "ra007-c", text: "It is the same as hedonic well-being", isCorrect: false, translation: "快楽的幸福と同じである" },
      { id: "ra007-d", text: "It only applies to negative life events", isCorrect: false, translation: "否定的な人生の出来事にのみ当てはまる" },
    ],
    explanation: "「eudaimonic well-being, which encompasses a sense of purpose, personal growth, and meaningful relationships（目的意識、個人の成長、意義のある人間関係を含む幸福）」と対比的に定義されています。",
    hint: "「which encompasses（〜を含む）」に続くeudaimonic well-beingの定義を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n幸福の心理学は、学術的な再考が大きく進んでいます。人間がポジティブ・ネガティブの両方の人生の変化に素早く適応するというヘドニックトレッドミル仮説に反し、縦断的研究は結婚や失業などの一部の人生の出来事が幸福に持続的な影響を与えることを示唆しています。さらに、研究者たちは快楽の存在と苦痛の不在として定義される快楽的幸福（ヘドニック）と、目的意識、個人の成長、意義のある人間関係を含む幸福（ユーダイモニック）を区別しています。\n\n【問題文の和訳】\nパッセージによると、ユーダイモニック幸福はヘドニック幸福とどのように異なりますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ サイコロジー オブ ハピネス ハズ アンダーゴーン シグニフィカント スカラリー リイグザミネーション。コントラリー トゥ ザ ヘドニック トレッドミル ハイポセシス、ウィッチ プリディクツ ザット ヒューマンズ クウィックリー アダプト トゥ ボウス ポジティブ アンド ネガティブ ライフ チェンジズ、ロンギテューディナル スタディーズ サジェスト ザット サム ライフ イベンツ ハブ ラスティング エフェクツ オン ウェルビーイング。ファザーモア、リサーチャーズ ディスティングウィッシュ ビトゥウィーン ヘドニック ウェルビーイング アンド ユーダイモニック ウェルビーイング、ウィッチ エンコンパシズ ア センス オブ パーパス、パースナル グロウス、アンド ミーニングフル リレーションシップス。\n\n【問題文のカタカナ読み】\nアコーディング トゥ ザ パッセージ、ハウ ダズ ユーダイモニック ウェルビーイング ディファー フロム ヘドニック ウェルビーイング？",
    vocabularyItems: [
      { word: "longitudinal study", meaning: "縦断的研究（長期にわたる追跡調査）", katakanaReading: "ロンギテューディナル スタディー", example: "Longitudinal studies track participants over many years." },
      { word: "encompass", meaning: "含む、網羅する", katakanaReading: "エンコンパス", example: "The curriculum encompasses a wide range of topics." },
      { word: "eudaimonic", meaning: "ユーダイモニック（意味ある幸福）", katakanaReading: "ユーダイモニック", example: "Eudaimonic well-being goes beyond simple pleasure." },
    ],
    grammarPoints: [
      {
        rule: "Contrary to（〜に反して）の用法",
        explanation: "「Contrary to + 名詞（〜に反して、〜とは反対に）」は期待や仮説に反する事実を導入します。「Contrary to the hypothesis, studies suggest lasting effects.」academic writing でよく使われる逆接表現です。",
        example: "Contrary to popular belief, goldfish have good memories. / Contrary to expectations, the project was a success.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Eudaimonic well-being encompasses a sense of purpose, personal growth, and meaningful relationships.」を5回音読してください。eudaimonic の発音を確認しましょう。",
      phraseReplacements: [
        {
          original: "Eudaimonic well-being involves purpose, growth, and meaningful relationships.",
          instruction: "幸福とは何かについて話しましょう。",
          examples: [
            "I think true happiness comes from having a sense of purpose rather than just comfort.",
            "Meaningful relationships are more important to my well-being than material possessions.",
            "Research shows that helping others boosts our own sense of happiness and fulfillment.",
          ],
        },
      ],
      dailyConversationTips: "「What does happiness mean to you?」（幸福とはあなたにとって何を意味しますか？）はとても深い質問です。eudaimonic（意味や成長）とhedonic（快楽）の観点から答えると印象的です。",
    },
  },
  {
    id: "ra-008",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'The debate over nuclear energy has intensified in the context of climate change. Proponents argue that nuclear power offers a reliable, low-carbon alternative to fossil fuels and could play a vital role in decarbonizing electricity grids. Opponents, however, cite the risks of nuclear accidents, the unresolved challenge of radioactive waste disposal, and high construction costs. Some analysts propose that next-generation technologies, such as small modular reactors, may address several of these concerns.'\n\nWhat advantage of nuclear energy do proponents emphasize?",
    options: [
      { id: "ra008-a", text: "It is the cheapest form of energy", isCorrect: false, translation: "最も安価なエネルギー形態である" },
      { id: "ra008-b", text: "It is a reliable, low-carbon alternative to fossil fuels", isCorrect: true, translation: "信頼性の高い低炭素の化石燃料代替エネルギーだ" },
      { id: "ra008-c", text: "It produces no waste of any kind", isCorrect: false, translation: "いかなる廃棄物も生成しない" },
      { id: "ra008-d", text: "It is completely risk-free", isCorrect: false, translation: "完全にリスクがない" },
    ],
    explanation: "「Proponents argue that nuclear power offers a reliable, low-carbon alternative to fossil fuels（支持者は原子力が信頼性の高い低炭素の化石燃料代替エネルギーを提供すると主張する）」と書かれています。",
    hint: "「Proponents argue that...（支持者は〜と主張する）」の後の内容を確認しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n原子力エネルギーを巡る議論は、気候変動の文脈で激化しています。支持者は、原子力が信頼性の高い低炭素の化石燃料代替エネルギーを提供し、電力網の脱炭素化に重要な役割を果たせると主張します。しかし反対派は、原子力事故のリスク、放射性廃棄物処分の未解決の課題、高い建設コストを挙げます。一部のアナリストは、小型モジュール炉などの次世代技術がこれらの懸念のいくつかに対処できると提案しています。\n\n【問題文の和訳】\n支持者が強調する原子力エネルギーの利点は何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ ディベイト オーバー ニュークリア エナジー ハズ インテンシファイド イン ザ コンテクスト オブ クライメット チェンジ。プロポウネンツ アーギュー ザット ニュークリア パワー オファーズ ア リライアブル、ロウカーボン オルタナティブ トゥ フォッシル フューエルズ アンド クッド プレイ ア バイタル ロール イン ディカーボナイジング エレクトリシティー グリッズ。オポウネンツ、ハウエバー、サイト ザ リスクス オブ ニュークリア アクシデンツ、ザ アンリゾルブド チャレンジ オブ レイディオアクティブ ウェイスト ディスポウザル、アンド ハイ コンストラクション コスツ。\n\n【問題文のカタカナ読み】\nワット アドバンテージ オブ ニュークリア エナジー ドゥ プロポウネンツ エンファサイズ？",
    vocabularyItems: [
      { word: "decarbonize", meaning: "脱炭素化する", katakanaReading: "ディカーボナイズ", example: "We must decarbonize our energy systems." },
      { word: "radioactive waste", meaning: "放射性廃棄物", katakanaReading: "レイディオアクティブ ウェイスト", example: "Radioactive waste must be stored safely." },
      { word: "modular reactor", meaning: "モジュール型原子炉", katakanaReading: "モジュラー リアクター", example: "Small modular reactors are a newer technology." },
    ],
    grammarPoints: [
      {
        rule: "cite（〜を挙げる・引用する）の用法",
        explanation: "「cite（引用する・例として挙げる）」は evidence や reasons を示すときに使います。「Opponents cite the risks of nuclear accidents.」（反対派はリスクを挙げる）。cite A as B（AをBとして挙げる）という用法もあります。",
        example: "Doctors cite lack of sleep as a risk factor. / He cited three reasons for his decision. / The report cites multiple studies.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Proponents argue that nuclear power offers a reliable, low-carbon alternative to fossil fuels.」を5回音読してください。low-carbon alternative の発音を練習しましょう。",
      phraseReplacements: [
        {
          original: "Nuclear power is a low-carbon alternative, but concerns about safety and waste remain.",
          instruction: "エネルギー政策の賛否について話しましょう。",
          examples: [
            "I think we should invest more in renewable energy like solar and wind power.",
            "The risks of nuclear energy are real, but so is the threat of climate change.",
            "We need a balanced energy policy that considers both reliability and environmental impact.",
          ],
        },
      ],
      dailyConversationTips: "「What's your view on nuclear energy?」（原子力エネルギーについてどう思いますか？）はエネルギーと環境についての議論でよく出るテーマです。",
    },
  },
  {
    id: "ra-009",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'The concept of cognitive dissonance, introduced by Leon Festinger in 1957, describes the psychological discomfort experienced when a person holds two or more contradictory beliefs simultaneously, or when their actions conflict with their values. To resolve this tension, individuals may change their beliefs, alter their behavior, or rationalize the inconsistency. This mechanism has significant implications for understanding consumer behavior, political affiliation, and resistance to persuasion.'\n\nAccording to the passage, how might a person resolve cognitive dissonance?",
    options: [
      { id: "ra009-a", text: "By ignoring all contradictory information", isCorrect: false, translation: "すべての矛盾した情報を無視する" },
      { id: "ra009-b", text: "By changing beliefs, altering behavior, or rationalizing the inconsistency", isCorrect: true, translation: "信念を変える、行動を変える、または不一致を合理化する" },
      { id: "ra009-c", text: "By seeking more information to create further conflict", isCorrect: false, translation: "さらなる情報を求めてさらに葛藤を生む" },
      { id: "ra009-d", text: "By consistently avoiding decision-making", isCorrect: false, translation: "一貫して意思決定を避ける" },
    ],
    explanation: "「individuals may change their beliefs, alter their behavior, or rationalize the inconsistency（個人は信念を変えるか、行動を変えるか、または不一致を合理化する可能性がある）」と解決策が述べられています。",
    hint: "「To resolve this tension（このギャップを解消するために）」の後に何が続きますか？",
    questionTranslation: "【パッセージ全体の和訳】\n認知的不協和という概念は1957年にレオン・フェスティンガーによって提唱され、人が同時に2つ以上の矛盾した信念を持つ、または行動が価値観と矛盾するときに経験する心理的不快感を指します。このギャップを解消するために、人は信念を変えるか、行動を変えるか、または不一致を合理化することがあります。このメカニズムは、消費者行動、政治的所属、説得への抵抗を理解する上で重要な意味を持ちます。\n\n【問題文の和訳】\nパッセージによると、人はどのようにして認知的不協和を解消するかもしれませんか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ コンセプト オブ コグニティブ ディソナンス、イントロデュースト バイ レオン フェスティンガー イン ナインティーン フィフティーセブン、ディスクライブズ ザ サイコロジカル ディスカンフォート エクスピリエンスト ウェン ア パースン ホウルズ トゥー オア モア コントラディクトリー ビリーフス スィマルテイニアスリー、オア ウェン ゼア アクションズ コンフリクト ウィズ ゼア バリューズ。トゥ リゾルブ ディス テンション、インディビジュアルズ メイ チェンジ ゼア ビリーフス、オルター ゼア ビヘイビア、オア ラショナライズ ザ インコンシステンシー。\n\n【問題文のカタカナ読み】\nアコーディング トゥ ザ パッセージ、ハウ マイト ア パースン リゾルブ コグニティブ ディソナンス？",
    vocabularyItems: [
      { word: "cognitive dissonance", meaning: "認知的不協和", katakanaReading: "コグニティブ ディソナンス", example: "Smokers often experience cognitive dissonance." },
      { word: "rationalize", meaning: "合理化する", katakanaReading: "ラショナライズ", example: "He rationalized his unhealthy eating habits." },
      { word: "inconsistency", meaning: "不一致、矛盾", katakanaReading: "インコンシステンシー", example: "There is an inconsistency between his words and actions." },
    ],
    grammarPoints: [
      {
        rule: "may（可能性）の学術的用法",
        explanation: "学術的文章では「may（〜するかもしれない）」は断定を避けながら可能性を述べるときに使います。「Individuals may change their beliefs.」は「必ず変える」ではなく「変えることがある」。might はさらに低い確率を示します。",
        example: "The results may vary depending on individual factors. / This approach might not work in all situations.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「To resolve this tension, individuals may change their beliefs, alter their behavior, or rationalize the inconsistency.」を5回音読してください。rationalize の発音を確認しましょう。",
      phraseReplacements: [
        {
          original: "To resolve cognitive dissonance, people may change beliefs, alter behavior, or rationalize.",
          instruction: "信念と行動の矛盾について話しましょう。",
          examples: [
            "When I eat junk food despite knowing it's unhealthy, I experience cognitive dissonance.",
            "People often rationalize their decisions to reduce feelings of guilt or discomfort.",
            "Understanding cognitive dissonance helps us make more conscious choices.",
          ],
        },
      ],
      dailyConversationTips: "「Have you ever felt cognitive dissonance?」（認知的不協和を感じたことはありますか？）は心理学や日常行動について話す interesting なトピックです。",
    },
  },
  {
    id: "ra-010",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'The concept of sustainability encompasses environmental, economic, and social dimensions. The Brundtland Commission defined sustainable development as meeting the needs of the present without compromising the ability of future generations to meet their own needs. Critics argue that in practice, economic growth and environmental protection are often in tension, as resource extraction and industrial production inevitably generate ecological impacts. Advocates of degrowth contend that continuous economic expansion is fundamentally incompatible with ecological boundaries.'\n\nWhat is the main tension described in the passage?",
    options: [
      { id: "ra010-a", text: "Between governments and international organizations", isCorrect: false, translation: "政府と国際機関の間" },
      { id: "ra010-b", text: "Between economic growth and environmental protection", isCorrect: true, translation: "経済成長と環境保護の間" },
      { id: "ra010-c", text: "Between present and future economic systems", isCorrect: false, translation: "現在と将来の経済システムの間" },
      { id: "ra010-d", text: "Between developed and developing nations", isCorrect: false, translation: "先進国と途上国の間" },
    ],
    explanation: "「economic growth and environmental protection are often in tension（経済成長と環境保護はしばしば緊張関係にある）」と main tensionが明示されています。",
    hint: "「in tension（緊張関係にある）」という表現がどこに使われているか探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n持続可能性の概念は環境、経済、社会の側面を網羅しています。ブルントラント委員会は持続可能な開発を「将来世代が自らのニーズを満たす能力を損なうことなく、現在のニーズを満たすこと」と定義しました。批評家は実際には経済成長と環境保護はしばしば緊張関係にあると主張します、なぜなら資源採取と工業生産は必然的に生態系への影響をもたらすからです。脱成長の提唱者は継続的な経済拡大は生態系の境界と根本的に相容れないと主張します。\n\n【問題文の和訳】\nパッセージで説明されている主要な緊張関係は何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ コンセプト オブ サステイナビリティー エンコンパシズ エンバイロンメンタル、エコノミック、アンド ソーシャル ディメンションズ。ザ ブルントラント コミッション ディファインド サステイナブル ディベロップメント アズ ミーティング ザ ニーズ オブ ザ プレゼント ウィザウト コンプロマイジング ザ アビリティー オブ フューチャー ジェネレーションズ トゥ ミート ゼア オウン ニーズ。クリティックス アーギュー ザット イン プラクティス、エコノミック グロウス アンド エンバイロンメンタル プロテクション アー オフテン イン テンション。\n\n【問題文のカタカナ読み】\nワット イズ ザ メイン テンション ディスクライブド イン ザ パッセージ？",
    vocabularyItems: [
      { word: "sustainable development", meaning: "持続可能な開発", katakanaReading: "サステイナブル ディベロップメント", example: "Sustainable development is a global priority." },
      { word: "degrowth", meaning: "脱成長（経済縮小を志向する思想）", katakanaReading: "ディグロウス", example: "Degrowth advocates argue that endless growth is unsustainable." },
      { word: "incompatible", meaning: "相容れない、両立しない", katakanaReading: "インコンパティブル", example: "Their goals are fundamentally incompatible." },
    ],
    grammarPoints: [
      {
        rule: "定義の表現：define A as B（AをBと定義する）",
        explanation: "「define A as B（AをBと定義する）」はアカデミックな文章で重要な表現です。「The commission defined sustainable development as meeting the needs of the present without compromising future needs.」定義問題は読解でよく出ます。",
        example: "Merriam-Webster defines sustainability as 'capable of being maintained.' / Psychologists define stress as the body's response to demands.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Critics argue that economic growth and environmental protection are often in tension.」を5回音読してください。in tension の発音とニュアンスを確認しましょう。",
      phraseReplacements: [
        {
          original: "Economic growth and environmental protection are often in tension.",
          instruction: "持続可能性と経済について話しましょう。",
          examples: [
            "I believe sustainable business models can align economic growth with environmental goals.",
            "The challenge is ensuring that economic development does not come at the cost of the environment.",
            "Future generations deserve a planet with clean air, water, and healthy ecosystems.",
          ],
        },
      ],
      dailyConversationTips: "「Sustainability matters for future generations.」（持続可能性は将来世代にとって重要です）は環境問題を話す際の基本的なスタンスを示す表現です。",
    },
  },
  {
    id: "ra-011",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'Media literacy has emerged as a crucial competency in the digital age. The proliferation of online content has made it increasingly difficult to distinguish reliable information from misinformation, disinformation, and propaganda. Researchers emphasize that media literacy involves not only the ability to critically evaluate sources but also the recognition of one's own cognitive biases, which may predispose individuals to selectively accept information confirming their preexisting beliefs — a phenomenon known as confirmation bias.'\n\nWhat does the passage say about confirmation bias?",
    options: [
      { id: "ra011-a", text: "It helps people find reliable information", isCorrect: false, translation: "信頼できる情報を見つけるのを助ける" },
      { id: "ra011-b", text: "It predisposes individuals to accept information confirming their existing beliefs", isCorrect: true, translation: "既存の信念を確認する情報を受け入れやすくさせる" },
      { id: "ra011-c", text: "It is a type of propaganda", isCorrect: false, translation: "プロパガンダの一種である" },
      { id: "ra011-d", text: "It improves critical thinking skills", isCorrect: false, translation: "批判的思考力を向上させる" },
    ],
    explanation: "「confirmation bias（確証バイアス）」は「selectively accept information confirming their preexisting beliefs（既存の信念を確認する情報を選択的に受け入れる）」傾向として定義されています。",
    hint: "「a phenomenon known as confirmation bias（確証バイアスとして知られる現象）」の定義に注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nメディアリテラシーはデジタル時代において不可欠な能力として台頭しています。オンラインコンテンツの急増により、信頼できる情報を誤情報、偽情報、プロパガンダから区別することがますます困難になっています。研究者たちは、メディアリテラシーは批判的に情報源を評価する能力だけでなく、自身の認知バイアスの認識も含むと強調しています。認知バイアスは、確証バイアスとして知られる現象で、人々を既存の信念を確認する情報を選択的に受け入れやすくさせます。\n\n【問題文の和訳】\nパッセージは確証バイアスについて何と述べていますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nメディア リタラシー ハズ イマージド アズ ア クルーシャル コンピテンシー イン ザ デジタル エイジ。ザ プロリファレーション オブ オンライン コンテント ハズ メイド イット インクリーシングリー ディフィカルト トゥ ディスティングウィッシュ リライアブル インフォメーション フロム ミスインフォメーション、ディスインフォメーション、アンド プロパガンダ。リサーチャーズ エンファサイズ ザット メディア リタラシー インボルブズ ノット オンリー ザ アビリティー トゥ クリティカリー エバリュエイト ソーシズ バット オールソウ ザ レコグニション オブ ワンズ オウン コグニティブ バイアシズ、ウィッチ メイ プリディスポウズ インディビジュアルズ トゥ セレクティブリー アクセプト インフォメーション コンファーミング ゼア プリイグジスティング ビリーフス — ア フェノメノン ノウン アズ コンファーメーション バイアス。\n\n【問題文のカタカナ読み】\nワット ダズ ザ パッセージ セイ アバウト コンファーメーション バイアス？",
    vocabularyItems: [
      { word: "confirmation bias", meaning: "確証バイアス（自分の信念を確認する情報を優先する傾向）", katakanaReading: "コンファーメーション バイアス", example: "Confirmation bias can lead people to reject facts." },
      { word: "proliferation", meaning: "急増、拡散", katakanaReading: "プロリファレーション", example: "The proliferation of social media has transformed news." },
      { word: "predispose", meaning: "〜しやすくさせる、先入観を持たせる", katakanaReading: "プリディスポウズ", example: "Stress predisposes people to illness." },
    ],
    grammarPoints: [
      {
        rule: "not only A but also B（二段階の強調）",
        explanation: "「not only A but also B」で2つの要素を強調します。「Media literacy involves not only the ability to evaluate sources but also the recognition of one's own biases.」情報源の評価と自己バイアスの認識という2点を強調しています。",
        example: "The course not only improves writing skills but also develops critical thinking. / The city needs not only more housing but also better public transportation.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Confirmation bias predisposes individuals to selectively accept information confirming their preexisting beliefs.」を5回音読してください。predisposes の発音を確認しましょう。",
      phraseReplacements: [
        {
          original: "Confirmation bias leads people to accept information that confirms their existing beliefs.",
          instruction: "メディアリテラシーと認知バイアスについて話しましょう。",
          examples: [
            "I try to read news from different sources to avoid confirmation bias.",
            "Social media algorithms often reinforce our existing beliefs by showing us similar content.",
            "Media literacy should be taught in schools so students can think critically about information.",
          ],
        },
      ],
      dailyConversationTips: "「I try to challenge my own assumptions.」（自分の思い込みに疑問を持つようにしています）は批判的思考を示す sophisticated な表現です。",
    },
  },
  {
    id: "ra-012",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'Digital privacy has become a central issue as personal data has emerged as one of the most valuable commodities in the modern economy. Tech companies collect vast amounts of behavioral data through apps, websites, and smart devices, using this information to target advertisements and, in some cases, to influence consumer and political behavior. Privacy advocates call for stronger regulations such as the right to be forgotten and explicit consent requirements, while the industry argues that data collection is essential to providing free, personalized services.'\n\nWhat do privacy advocates propose to protect personal data?",
    options: [
      { id: "ra012-a", text: "Banning all tech companies from collecting data", isCorrect: false, translation: "すべての技術企業によるデータ収集を禁止する" },
      { id: "ra012-b", text: "Stronger regulations including the right to be forgotten and explicit consent", isCorrect: true, translation: "忘れられる権利と明示的同意を含むより強力な規制" },
      { id: "ra012-c", text: "Eliminating free online services", isCorrect: false, translation: "無料オンラインサービスを廃止する" },
      { id: "ra012-d", text: "Requiring companies to share data with the government", isCorrect: false, translation: "企業に政府とのデータ共有を義務付ける" },
    ],
    explanation: "「Privacy advocates call for stronger regulations such as the right to be forgotten and explicit consent requirements（プライバシー提唱者は忘れられる権利や明示的な同意要件などのより強力な規制を求めている）」と書かれています。",
    hint: "「Privacy advocates call for...（プライバシー提唱者は〜を求めている）」に続く内容を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n個人データが現代経済で最も価値ある商品の一つとして浮上するにつれ、デジタルプライバシーは中心的な問題となっています。テック企業はアプリ、ウェブサイト、スマートデバイスを通じて膨大な行動データを収集し、この情報を広告のターゲティングや場合によっては消費者・政治的行動の影響に使用しています。プライバシー提唱者は忘れられる権利や明示的な同意要件などのより強力な規制を求めている一方、業界はデータ収集が無料でパーソナライズされたサービスの提供に不可欠だと主張しています。\n\n【問題文の和訳】\nプライバシー提唱者は個人データを保護するために何を提案していますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nデジタル プライバシー ハズ ビカム ア セントラル イシュー アズ パースナル データ ハズ イマージド アズ ワン オブ ザ モースト バリュアブル コモディティーズ イン ザ モダン エコノミー。テック カンパニーズ コレクト ヴァスト アマウンツ オブ ビヘイビョラル データ スルー アップス、ウェブサイツ、アンド スマート ディバイシズ。プライバシー アドボケイツ コール フォー ストロンガー レギュレーションズ サッチ アズ ザ ライト トゥ ビー フォーゴトン アンド エクスプリシット コンセント リクワイアメンツ。\n\n【問題文のカタカナ読み】\nワット ドゥ プライバシー アドボケイツ プロポウズ トゥ プロテクト パースナル データ？",
    vocabularyItems: [
      { word: "commodity", meaning: "商品、財", katakanaReading: "コモディティー", example: "Data has become a valuable commodity." },
      { word: "explicit consent", meaning: "明示的な同意", katakanaReading: "エクスプリシット コンセント", example: "Apps must obtain explicit consent before collecting data." },
      { word: "right to be forgotten", meaning: "忘れられる権利（個人情報削除の権利）", katakanaReading: "ライト トゥ ビー フォーゴトン", example: "The EU's GDPR includes the right to be forgotten." },
    ],
    grammarPoints: [
      {
        rule: "call for（〜を求める・要求する）",
        explanation: "「call for + 名詞/動名詞」は「〜を求める・要求する」という表現です。「Advocates call for stronger regulations.」「The situation calls for immediate action.」正式な要求や要請を表す時によく使われます。",
        example: "Protesters called for an end to the policy. / The crisis calls for urgent attention. / They called for stricter data protection laws.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Privacy advocates call for stronger regulations such as the right to be forgotten and explicit consent requirements.」を5回音読してください。explicit consent をはっきり発音しましょう。",
      phraseReplacements: [
        {
          original: "Privacy advocates call for stronger regulations to protect personal data.",
          instruction: "デジタルプライバシーについて話しましょう。",
          examples: [
            "I think users should have more control over how their data is collected and used.",
            "Companies should be transparent about what data they collect and why.",
            "Strong privacy laws are essential to protect people in the digital age.",
          ],
        },
      ],
      dailyConversationTips: "「Have you ever read a privacy policy?」（プライバシーポリシーを読んだことがありますか？）は現代社会の問題意識を共有するための interesting な質問です。",
    },
  },
  {
    id: "ra-013",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'Behavioral economics challenges the assumption of classical economics that individuals act as perfectly rational agents who maximize their utility. Research by Kahneman and Tversky demonstrated that human decision-making is systematically influenced by cognitive shortcuts called heuristics, which, while often useful, can lead to predictable errors in judgment. Their prospect theory revealed that people are disproportionately averse to losses compared to gains of equivalent magnitude, a principle known as loss aversion.'\n\nWhat does prospect theory reveal about human behavior?",
    options: [
      { id: "ra013-a", text: "People value gains more than losses of equal magnitude", isCorrect: false, translation: "人は同じ大きさの損失より利得をより重視する" },
      { id: "ra013-b", text: "People are more averse to losses than attracted to equivalent gains", isCorrect: true, translation: "人は同等の利得に惹かれるよりも損失を嫌う" },
      { id: "ra013-c", text: "People always make rational financial decisions", isCorrect: false, translation: "人は常に合理的な財務的決断を下す" },
      { id: "ra013-d", text: "Heuristics eliminate all errors in judgment", isCorrect: false, translation: "ヒューリスティクスは判断のエラーをすべて排除する" },
    ],
    explanation: "「people are disproportionately averse to losses compared to gains of equivalent magnitude（人々は同等の利得に比べて損失を不釣り合いなほど嫌う）」と loss aversion（損失回避）が説明されています。",
    hint: "「loss aversion（損失回避）」とはどういう意味かを確認しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n行動経済学は、個人が効用を最大化する完全に合理的な行為者として行動するという古典経済学の前提に異議を唱えます。カーネマンとトベルスキーの研究は、人間の意思決定がヒューリスティクスと呼ばれる認知的ショートカットによって系統的に影響を受けることを実証しました。これは多くの場合役立ちますが、判断の予測可能なエラーにつながることもあります。彼らのプロスペクト理論は、人々が同等の利得に比べて損失を不釣り合いなほど嫌うことを明らかにしました。これは損失回避として知られる原則です。\n\n【問題文の和訳】\nプロスペクト理論は人間行動について何を明らかにしましたか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nビヘイビョラル エコノミックス チャレンジズ ザ アサンプション オブ クラシカル エコノミックス ザット インディビジュアルズ アクト アズ パーフェクトリー ラショナル エイジェンツ フー マクシマイズ ゼア ユーティリティー。リサーチ バイ カーネマン アンド トベルスキー デモンストレイテッド ザット ヒューマン ディシジョン メイキング イズ システマティカリー インフルエンスト バイ コグニティブ ショートカッツ コールド ヒューリスティックス。ゼア プロスペクト セオリー リビールド ザット ピープル アー ディスプロポーショネットリー アバース トゥ ロッシズ コンペアード トゥ ゲインズ オブ エクウィバレント マグニテュード、ア プリンシプル ノウン アズ ロス アバーション。\n\n【問題文のカタカナ読み】\nワット ダズ プロスペクト セオリー リビール アバウト ヒューマン ビヘイビア？",
    vocabularyItems: [
      { word: "heuristic", meaning: "ヒューリスティクス（直感的な判断の近道）", katakanaReading: "ヒューリスティック", example: "We rely on heuristics to make quick decisions." },
      { word: "loss aversion", meaning: "損失回避（損失を利得より強く感じる傾向）", katakanaReading: "ロス アバーション", example: "Loss aversion explains why people fear losing money more than they enjoy gaining it." },
      { word: "disproportionately", meaning: "不釣り合いなほど", katakanaReading: "ディスプロポーショネットリー", example: "Poor neighborhoods are disproportionately affected by pollution." },
    ],
    grammarPoints: [
      {
        rule: "compared to（〜に比べて）の用法",
        explanation: "「compared to（〜に比べて、〜と比較して）」は比較を示す表現です。「People are more averse to losses compared to gains.」（利得に比べて損失をより嫌う）。Compared with は両者を同等に比較する場合に使います。",
        example: "Sales increased by 20% compared to last year. / The new model is lighter compared to its predecessor.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「People are disproportionately averse to losses compared to gains of equivalent magnitude.」を5回音読してください。disproportionately の発音を確認しましょう。",
      phraseReplacements: [
        {
          original: "People are more motivated to avoid losses than to achieve gains of equal value.",
          instruction: "意思決定における心理について話しましょう。",
          examples: [
            "I notice that I feel worse after losing money than I feel good after earning the same amount.",
            "Loss aversion explains why people often hold onto losing investments for too long.",
            "Understanding behavioral economics can help us make better financial decisions.",
          ],
        },
      ],
      dailyConversationTips: "「We're often not as rational as we think.」（私たちは自分が思っているほど合理的ではありません）は行動経済学の話題を自然に始めるフレーズです。",
    },
  },
  {
    id: "ra-014",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'The democratization of information through the internet has had paradoxical effects. While it has dramatically expanded access to knowledge and enabled political mobilization, it has also amplified misinformation and facilitated the rise of echo chambers — social media environments in which users are primarily exposed to opinions and information that reinforce their existing worldview. This fragmentation of the information landscape poses significant challenges to democratic deliberation, as shared factual foundations become increasingly difficult to establish.'\n\nWhat is an echo chamber, according to the passage?",
    options: [
      { id: "ra014-a", text: "A place where sound echoes loudly", isCorrect: false, translation: "音が大きく反響する場所" },
      { id: "ra014-b", text: "A social media environment where users mainly see views that confirm their own", isCorrect: true, translation: "ユーザーが主に自分の見解を確認する意見を見るSNS環境" },
      { id: "ra014-c", text: "A type of internet censorship", isCorrect: false, translation: "インターネット検閲の一種" },
      { id: "ra014-d", text: "A system for fact-checking information", isCorrect: false, translation: "情報のファクトチェックシステム" },
    ],
    explanation: "「echo chambers — social media environments in which users are primarily exposed to opinions and information that reinforce their existing worldview（エコーチェンバー — ユーザーが主に既存の世界観を強化する意見や情報に晒されるSNS環境）」と定義されています。",
    hint: "ダッシュ（—）の後に echo chambers の定義が続きます。",
    questionTranslation: "【パッセージ全体の和訳】\nインターネットを通じた情報の民主化は逆説的な効果をもたらしました。知識へのアクセスを劇的に拡大し、政治的な動員を可能にした一方で、誤情報を増幅させ、エコーチェンバー（ユーザーが主に既存の世界観を強化する意見や情報に晒されるSNS環境）の台頭を促進しました。共有された事実的基盤の確立がますます困難になるにつれ、この情報環境の断片化は民主主義的議論に重大な課題をもたらしています。\n\n【問題文の和訳】\nパッセージによると、エコーチェンバーとは何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ デモクラタイゼーション オブ インフォメーション スルー ザ インターネット ハズ ハッド パラドキシカル エフェクツ。ワイル イット ハズ ドラマティカリー エクスパンデッド アクセス トゥ ナレッジ アンド エネイブルド ポリティカル モビライゼーション、イット ハズ オールソウ アンプリファイド ミスインフォメーション アンド ファシリテイテッド ザ ライズ オブ エコー チェンバーズ — ソーシャル メディア エンバイロンメンツ イン ウィッチ ユーザーズ アー プライマリリー エクスポウズド トゥ オピニオンズ アンド インフォメーション ザット リインフォース ゼア イグジスティング ワールドビュー。\n\n【問題文のカタカナ読み】\nワット イズ アン エコー チェンバー、アコーディング トゥ ザ パッセージ？",
    vocabularyItems: [
      { word: "echo chamber", meaning: "エコーチェンバー（同調した意見しか届かない情報環境）", katakanaReading: "エコー チェンバー", example: "Social media can create echo chambers." },
      { word: "deliberation", meaning: "熟議、じっくり考えること", katakanaReading: "デリバレーション", example: "Democratic deliberation requires access to diverse viewpoints." },
      { word: "paradoxical", meaning: "逆説的な", katakanaReading: "パラドキシカル", example: "The results were paradoxical and unexpected." },
    ],
    grammarPoints: [
      {
        rule: "ダッシュ（—）による定義・言い換え",
        explanation: "文中のダッシュ（—）は前の名詞を定義・説明するために使われます。「echo chambers — social media environments in which...」。ダッシュの後が前の語の定義や説明であることを覚えておくと、読解問題で素早く正解を見つけられます。",
        example: "The term 'cognitive dissonance' — the discomfort of holding contradictory beliefs — was coined by Festinger.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Echo chambers are social media environments where users are primarily exposed to views that reinforce their existing worldview.」を5回音読してください。reinforce の /rɪɪnˈfɔːrs/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "Echo chambers make it hard to encounter different perspectives online.",
          instruction: "SNSとエコーチェンバー効果について話しましょう。",
          examples: [
            "I try to follow people with different viewpoints to avoid getting stuck in an echo chamber.",
            "Social media algorithms tend to show us content we already agree with.",
            "Exposure to diverse opinions is essential for forming balanced views on complex issues.",
          ],
        },
      ],
      dailyConversationTips: "「I try to break out of my echo chamber by...」（〜することでエコーチェンバーから抜け出そうとしています）はSNSリテラシーについて語る sophisticated な表現です。",
    },
  },
  {
    id: "ra-015",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'The philosophy of education encompasses fundamental questions about the purposes and methods of teaching. Progressivists, following John Dewey, argue that education should focus on developing critical thinking and problem-solving skills through experiential learning, rather than the passive transmission of facts. In contrast, essentialists contend that students must first acquire a core body of knowledge and skills before they can engage meaningfully in higher-order thinking. This tension between process-oriented and content-oriented approaches continues to shape contemporary educational policy debates.'\n\nHow do progressivists believe education should be approached?",
    options: [
      { id: "ra015-a", text: "By focusing on rote memorization of facts", isCorrect: false, translation: "事実の丸暗記に集中することで" },
      { id: "ra015-b", text: "Through experiential learning to develop critical thinking", isCorrect: true, translation: "批判的思考を育む体験学習を通して" },
      { id: "ra015-c", text: "By establishing a strict core curriculum first", isCorrect: false, translation: "まず厳格なコアカリキュラムを確立することで" },
      { id: "ra015-d", text: "By eliminating all standardized testing", isCorrect: false, translation: "すべての標準化テストを廃止することで" },
    ],
    explanation: "「Progressivists argue that education should focus on developing critical thinking and problem-solving skills through experiential learning（進歩主義者は教育が体験学習を通じた批判的思考と問題解決スキルの育成に集中すべきだと主張する）」と書かれています。",
    hint: "「Progressivists argue that...（進歩主義者は〜と主張する）」に続く内容を確認しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n教育哲学は、教育の目的と方法についての根本的な問いを含んでいます。ジョン・デューイに従う進歩主義者たちは、教育は事実の受動的な伝達ではなく、体験学習を通じた批判的思考と問題解決スキルの育成に集中すべきだと主張します。それに対して本質主義者は、学生が高次の思考に有意義に取り組む前に、まずコアとなる知識とスキルを習得しなければならないと主張します。このプロセス重視とコンテンツ重視のアプローチの間の緊張は、現代の教育政策論争を形成し続けています。\n\n【問題文の和訳】\n進歩主義者は教育にどのようにアプローチすべきだと考えていますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ フィロソフィー オブ エデュケーション エンコンパシズ ファンダメンタル クエスチョンズ アバウト ザ パーパシズ アンド メソッズ オブ ティーチング。プログレッシビスツ、フォローイング ジョン デューイ、アーギュー ザット エデュケーション シュッド フォーカス オン ディベロッピング クリティカル シンキング アンド プロブレム ソルビング スキルズ スルー エクスペリエンシャル ラーニング、ラザー ザン ザ パッシブ トランスミッション オブ ファクツ。イン コントラスト、エッセンシャリスツ コンテンド ザット スチューデンツ マスト ファースト アクワイア ア コア ボディー オブ ナレッジ アンド スキルズ ビフォア ゼイ キャン エンゲイジ ミーニングフリー イン ハイアー オーダー シンキング。\n\n【問題文のカタカナ読み】\nハウ ドゥ プログレッシビスツ ビリーブ エデュケーション シュッド ビー アプローチト？",
    vocabularyItems: [
      { word: "progressivist", meaning: "進歩主義者（教育哲学）", katakanaReading: "プログレッシビスト", example: "Progressivists favor student-centered learning." },
      { word: "experiential learning", meaning: "体験学習", katakanaReading: "エクスペリエンシャル ラーニング", example: "Internships offer experiential learning opportunities." },
      { word: "higher-order thinking", meaning: "高次の思考（分析・評価・創造）", katakanaReading: "ハイアー オーダー シンキング", example: "Higher-order thinking involves analysis and synthesis." },
    ],
    grammarPoints: [
      {
        rule: "rather than（〜ではなく）による比較・対比",
        explanation: "「rather than（〜ではなく、〜よりもむしろ）」は2つの選択肢を対比させて、前者を否定し後者を支持します。「Education should focus on critical thinking rather than passive fact memorization.」前の内容を否定し、後の内容を肯定しています。",
        example: "We should focus on quality rather than quantity. / She chose to study abroad rather than stay at home.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Progressivists argue that education should focus on developing critical thinking through experiential learning rather than passive transmission of facts.」を5回音読してください。experiential learning をはっきり発音しましょう。",
      phraseReplacements: [
        {
          original: "Education should develop critical thinking through experiential learning, not just memorization.",
          instruction: "理想の教育について話しましょう。",
          examples: [
            "I learn much more from doing projects than from listening to lectures.",
            "Schools should teach students how to think, not just what to think.",
            "Critical thinking and creativity are more valuable in the modern world than memorized facts.",
          ],
        },
      ],
      dailyConversationTips: "「What kind of learning style works best for you?」（どんな学習スタイルが一番合っていますか？）は教育について話す自然なきっかけになります。",
    },
  },
  {
    id: "ra-016",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'Sustainable agriculture seeks to balance food production with environmental stewardship. Conventional industrial farming has dramatically increased yields but has also contributed to soil degradation, water pollution from fertilizer runoff, and biodiversity loss. Regenerative agricultural practices — such as crop rotation, cover cropping, and reduced tillage — seek to rebuild soil health and sequester carbon, presenting a potential pathway to more resilient food systems that can withstand the pressures of climate change.'\n\nWhat is the purpose of regenerative agricultural practices mentioned in the passage?",
    options: [
      { id: "ra016-a", text: "To increase the use of chemical fertilizers", isCorrect: false, translation: "化学肥料の使用を増やす" },
      { id: "ra016-b", text: "To rebuild soil health and sequester carbon", isCorrect: true, translation: "土壌の健康を回復し炭素を固定する" },
      { id: "ra016-c", text: "To eliminate all forms of farming", isCorrect: false, translation: "すべての形態の農業を廃止する" },
      { id: "ra016-d", text: "To increase industrial farm output", isCorrect: false, translation: "工業的農業の生産量を増やす" },
    ],
    explanation: "「Regenerative agricultural practices...seek to rebuild soil health and sequester carbon（再生農業の実践は土壌の健康を回復しカーボンを固定することを目指す）」と目的が述べられています。",
    hint: "「seek to（〜することを目指す）」の後に目的が書かれています。",
    questionTranslation: "【パッセージ全体の和訳】\n持続可能な農業は食料生産と環境管理のバランスを取ることを目指しています。従来の工業的農業は収穫量を劇的に増加させましたが、土壌の劣化、肥料流出による水質汚染、生物多様性の損失にも貢献してきました。輪作、カバークロッピング、耕起削減などの再生農業の実践は、土壌の健康を回復しカーボンを固定することを目指しており、気候変動のプレッシャーに耐えられるより回復力のある食料システムへの潜在的な道筋を示しています。\n\n【問題文の和訳】\nパッセージで言及された再生農業の実践の目的は何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nサステイナブル アグリカルチャー スィークス トゥ バランス フード プロダクション ウィズ エンバイロンメンタル スチュワードシップ。コンベンショナル インダストリアル ファーミング ハズ ドラマティカリー インクリースト イールズ バット ハズ オールソウ コントリビューテッド トゥ ソイル ディグラデーション、ウォーター ポリューション フロム ファーティライザー ランオフ、アンド バイオダイバーシティー ロス。リジェネラティブ アグリカルチャル プラクティシズ — サッチ アズ クロップ ローテーション、カバー クロッピング、アンド リデュースト ティレッジ — スィーク トゥ リビルド ソイル ヘルス アンド シクウェスター カーボン。\n\n【問題文のカタカナ読み】\nワット イズ ザ パーパス オブ リジェネラティブ アグリカルチャル プラクティシズ メンションド イン ザ パッセージ？",
    vocabularyItems: [
      { word: "regenerative agriculture", meaning: "再生農業", katakanaReading: "リジェネラティブ アグリカルチャー", example: "Regenerative agriculture restores soil health." },
      { word: "sequester carbon", meaning: "炭素を固定する・吸収させる", katakanaReading: "シクウェスター カーボン", example: "Forests sequester large amounts of carbon." },
      { word: "stewardship", meaning: "管理・保護責任", katakanaReading: "スチュワードシップ", example: "Environmental stewardship is our responsibility." },
    ],
    grammarPoints: [
      {
        rule: "seek to + 動詞原形（〜することを目指す・試みる）",
        explanation: "「seek to（〜することを目指す）」は目的や意図を表す formal な表現です。「The practices seek to rebuild soil health.」「The government seeks to address poverty.」aim to や attempt to と同様の意味合いです。",
        example: "The organization seeks to promote equality in education. / This policy seeks to reduce carbon emissions. / Researchers seek to understand the mechanism.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Regenerative agricultural practices seek to rebuild soil health and sequester carbon.」を5回音読してください。regenerative の /rɪˈdʒenərətɪv/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "Regenerative agriculture aims to restore soil health and reduce carbon in the atmosphere.",
          instruction: "持続可能な農業と食料システムについて話しましょう。",
          examples: [
            "Eating locally grown, seasonal food supports sustainable agriculture.",
            "Industrial farming has increased food production but at a significant environmental cost.",
            "I think it's important to support farmers who use regenerative and organic practices.",
          ],
        },
      ],
      dailyConversationTips: "「Where does your food come from?」（あなたの食べ物はどこから来ていますか？）は食と農業の話題を自然に始めるための interesting な質問です。",
    },
  },
  {
    id: "ra-017",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'The emergence of biotechnology raises profound questions about the boundaries of scientific intervention in human life. CRISPR gene-editing technology offers unprecedented precision in modifying the genetic code, with potential applications ranging from eliminating hereditary diseases to enhancing physical traits. While therapeutic applications are broadly supported by the scientific community, the prospect of germline editing — modifications that would be inherited by future generations — has prompted calls for international regulatory frameworks to prevent what critics term 'designer babies' and the creation of a genetically stratified society.'\n\nWhy has germline editing prompted particular concern?",
    options: [
      { id: "ra017-a", text: "It is less precise than other gene-editing methods", isCorrect: false, translation: "他の遺伝子編集方法より精度が低い" },
      { id: "ra017-b", text: "Its modifications would be inherited by future generations", isCorrect: true, translation: "その修正が将来の世代に受け継がれる" },
      { id: "ra017-c", text: "It is only useful for cosmetic purposes", isCorrect: false, translation: "美容目的にしか使えない" },
      { id: "ra017-d", text: "It has no therapeutic applications", isCorrect: false, translation: "治療的な応用がない" },
    ],
    explanation: "「germline editing — modifications that would be inherited by future generations（生殖細胞系列編集 — 将来世代に受け継がれる修正）」という定義から、世代を超えて遺伝することが懸念の理由です。",
    hint: "ダッシュ（—）の後の定義「modifications that would be inherited...」を確認しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nバイオテクノロジーの台頭は、人間の生命への科学的介入の限界について深刻な問いを提起しています。CRISPRゲノム編集技術は遺伝子コードの修正において前例のない精度を提供し、遺伝性疾患の根絶から身体的特徴の強化まで様々な応用が期待されています。治療的な応用は科学コミュニティに広く支持されていますが、将来世代に受け継がれる修正である生殖細胞系列編集の見通しは、批評家が「デザイナーベビー」と呼ぶものや遺伝的に階層化された社会の創出を防ぐための国際的な規制枠組みへの呼びかけを促しています。\n\n【問題文の和訳】\nなぜ生殖細胞系列編集は特別な懸念を引き起こしていますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ イマージェンス オブ バイオテクノロジー レイジズ プロファウンド クエスチョンズ アバウト ザ バウンダリーズ オブ サイエンティフィック インタービュンション イン ヒューマン ライフ。クリスパー ジーン エディティング テクノロジー オファーズ アンプレシデンテッド プリシジョン イン モディファイング ザ ジェネティック コード。ザ プロスペクト オブ ジャームライン エディティング — モディフィケーションズ ザット ウッド ビー インヘリテッド バイ フューチャー ジェネレーションズ — ハズ プロンプテッド コールズ フォー インターナショナル レギュラトリー フレームワークス。\n\n【問題文のカタカナ読み】\nホワイ ハズ ジャームライン エディティング プロンプテッド パーティキュラー コンサーン？",
    vocabularyItems: [
      { word: "germline editing", meaning: "生殖細胞系列編集（遺伝する遺伝子変更）", katakanaReading: "ジャームライン エディティング", example: "Germline editing is controversial because it affects future generations." },
      { word: "regulatory framework", meaning: "規制の枠組み", katakanaReading: "レギュラトリー フレームワーク", example: "A regulatory framework for AI is urgently needed." },
      { word: "stratified", meaning: "階層化された", katakanaReading: "ストラティファイド", example: "A stratified society divides people by genetics or wealth." },
    ],
    grammarPoints: [
      {
        rule: "has prompted calls for（〜への呼びかけを促している）",
        explanation: "「prompt + 名詞（〜を引き起こす・促す）」は原因と結果を表す動詞です。「The controversy prompted calls for regulation.」「The incident prompted an investigation.」academic writing でよく使われます。",
        example: "The data prompted researchers to conduct further studies. / Public outrage prompted an official apology.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Germline editing — modifications that would be inherited by future generations — has prompted calls for international regulatory frameworks.」を5回音読してください。ダッシュ部分はゆっくり、parenthetical（挿入句的）に発音しましょう。",
      phraseReplacements: [
        {
          original: "Germline editing raises concerns because its effects would be inherited by future generations.",
          instruction: "バイオテクノロジーの倫理について話しましょう。",
          examples: [
            "Gene editing could eliminate hereditary diseases, but the ethical boundaries must be clearly defined.",
            "I think therapeutic gene editing for serious diseases is acceptable, but enhancing traits is not.",
            "International cooperation is essential to prevent misuse of powerful biotechnologies.",
          ],
        },
      ],
      dailyConversationTips: "「Where do you draw the line with genetic technology?」（遺伝子技術にはどこで線引きをすべきと思いますか？）は生命倫理のディスカッションでよく使う問いかけです。",
    },
  },
  {
    id: "ra-018",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'The concept of intersectionality, coined by legal scholar Kimberlé Crenshaw, describes how overlapping social identities — such as race, gender, class, and disability — interact to create unique systems of discrimination and privilege. Traditional single-axis frameworks of analysis, which examine discrimination along only one dimension, fail to capture the complex realities faced by individuals who occupy multiple marginalized positions simultaneously. Intersectionality has become an influential framework in sociology, law, and public policy for understanding structural inequality.'\n\nWhat is the main limitation of traditional single-axis frameworks, according to the passage?",
    options: [
      { id: "ra018-a", text: "They are too complex for practical use", isCorrect: false, translation: "実際の使用には複雑すぎる" },
      { id: "ra018-b", text: "They fail to capture the reality of those facing multiple forms of discrimination", isCorrect: true, translation: "複数の差別に直面する人々の現実を把握できない" },
      { id: "ra018-c", text: "They focus too much on race and gender", isCorrect: false, translation: "人種とジェンダーに集中しすぎる" },
      { id: "ra018-d", text: "They were created by legal scholars", isCorrect: false, translation: "法学者によって作られた" },
    ],
    explanation: "「Traditional single-axis frameworks...fail to capture the complex realities faced by individuals who occupy multiple marginalized positions simultaneously（従来の単一軸の枠組みは同時に複数の周辺化された立場に置かれた個人が直面する複雑な現実を把握できない）」と限界が述べられています。",
    hint: "「fail to capture（把握できない）」の後に何が続くか確認しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n法学者キンバリー・クレンショーが作った「インターセクショナリティ」という概念は、人種、ジェンダー、階級、障害などの重なり合う社会的アイデンティティが、固有の差別と特権のシステムを生み出すために相互作用する方法を説明しています。一次元の差別のみを検討する従来の単一軸の分析枠組みは、同時に複数の周辺化された立場に置かれた個人が直面する複雑な現実を把握できません。インターセクショナリティは社会学、法律、公共政策において構造的不平等を理解するための影響力のある枠組みとなっています。\n\n【問題文の和訳】\nパッセージによると、従来の単一軸の枠組みの主な限界は何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ コンセプト オブ インタセクショナリティー、コインド バイ リーガル スカラー キンバリー クレンショー、ディスクライブズ ハウ オーバーラッピング ソーシャル アイデンティティーズ — サッチ アズ レイス、ジェンダー、クラス、アンド ディサビリティー — インタラクト トゥ クリエイト ユニーク システムズ オブ ディスクリミネーション アンド プリビレッジ。トラディショナル シングルアクシス フレームワークス オブ アナリシス、ウィッチ イグザミン ディスクリミネーション アロング オンリー ワン ディメンション、フェイル トゥ キャプチャー ザ コンプレックス リアリティーズ フェイスト バイ インディビジュアルズ フー オキュパイ マルティプル マージナライズド ポジションズ スィマルテイニアスリー。\n\n【問題文のカタカナ読み】\nワット イズ ザ メイン リミテーション オブ トラディショナル シングルアクシス フレームワークス、アコーディング トゥ ザ パッセージ？",
    vocabularyItems: [
      { word: "intersectionality", meaning: "インターセクショナリティ（交差性）", katakanaReading: "インタセクショナリティー", example: "Intersectionality helps us understand complex forms of inequality." },
      { word: "marginalized", meaning: "周辺化された、社会的に排除された", katakanaReading: "マージナライズド", example: "Marginalized communities need greater support." },
      { word: "coined", meaning: "（新語を）作り出した", katakanaReading: "コインド", example: "The term was coined in the 19th century." },
    ],
    grammarPoints: [
      {
        rule: "which を使った非制限用法（関係節）",
        explanation: "「Traditional single-axis frameworks, which examine discrimination along only one dimension, fail to capture...」の which は非制限用法で、前の名詞（frameworks）に追加情報を加えます。コンマ＋which は「そして、それは〜」という追加説明です。",
        example: "The new law, which was passed last year, has had mixed results. / Her book, which took ten years to write, became a bestseller.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Traditional single-axis frameworks fail to capture the complex realities faced by those who occupy multiple marginalized positions simultaneously.」を5回音読してください。simultaneously の /ˌsɪməlˈteɪniəsli/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "Intersectionality shows that multiple identities interact to create unique experiences of discrimination.",
          instruction: "社会的公平性と多様性について話しましょう。",
          examples: [
            "Understanding intersectionality helps us design more inclusive policies.",
            "People's experiences of inequality are shaped by multiple overlapping factors, not just one.",
            "Creating equitable systems requires recognizing and addressing all forms of discrimination.",
          ],
        },
      ],
      dailyConversationTips: "「It's more complicated than just one factor.」（それは一つの要素だけでは語れないほど複雑です）は社会的問題を語るときの balanced な視点を示す表現です。",
    },
  },
  {
    id: "ra-019",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'The transition to renewable energy represents both an opportunity and a challenge for global economies. While solar and wind energy have achieved cost parity with fossil fuels in many markets, the intermittent nature of these energy sources necessitates substantial investment in grid-scale energy storage and smart grid infrastructure. Furthermore, the mining of rare earth metals required for batteries and solar panels has raised concerns about supply chain sustainability and the geopolitical implications of resource concentration in a small number of countries.'\n\nWhat challenge does the passage identify with solar and wind energy?",
    options: [
      { id: "ra019-a", text: "They are more expensive than fossil fuels in all markets", isCorrect: false, translation: "すべての市場で化石燃料より高価である" },
      { id: "ra019-b", text: "Their intermittent nature requires investment in energy storage and smart grids", isCorrect: true, translation: "その断続的な性質のためにエネルギー貯蔵とスマートグリッドへの投資が必要だ" },
      { id: "ra019-c", text: "They produce too much energy for current grids", isCorrect: false, translation: "現在の電力網には電力が多すぎる" },
      { id: "ra019-d", text: "Rare earth metals are not needed for these technologies", isCorrect: false, translation: "これらの技術にレアアース金属は必要ない" },
    ],
    explanation: "「the intermittent nature of these energy sources necessitates substantial investment in grid-scale energy storage and smart grid infrastructure（これらのエネルギー源の断続的な性質は大規模なエネルギー貯蔵とスマートグリッドインフラへの相当な投資を必要とする）」と課題が述べられています。",
    hint: "「the intermittent nature（断続的な性質）」という特性がどんな問題を引き起こすか確認しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n再生可能エネルギーへの移行は世界経済にとって機会でもあり課題でもあります。太陽光発電と風力発電は多くの市場で化石燃料とコストパリティを達成しましたが、これらのエネルギー源の断続的な性質は、大規模なエネルギー貯蔵とスマートグリッドインフラへの相当な投資を必要とします。さらに、バッテリーや太陽電池パネルに必要なレアアース金属の採掘は、サプライチェーンの持続可能性と少数の国への資源集中の地政学的な影響について懸念を引き起こしています。\n\n【問題文の和訳】\nパッセージは太陽光発電と風力発電のどんな課題を特定していますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ トランジション トゥ リニューアブル エナジー レプリゼンツ ボウス アン オポチュニティー アンド ア チャレンジ フォー グローバル エコノミーズ。ワイル ソーラー アンド ウィンド エナジー ハブ アチーブド コスト パリティー ウィズ フォッシル フューエルズ イン メニー マーケッツ、ザ インタミテント ネイチャー オブ ジーズ エナジー ソーシズ ネセシテイツ サブスタンシャル インベストメント イン グリッドスケール エナジー ストレッジ アンド スマート グリッド インフラストラクチャー。\n\n【問題文のカタカナ読み】\nワット チャレンジ ダズ ザ パッセージ アイデンティファイ ウィズ ソーラー アンド ウィンド エナジー？",
    vocabularyItems: [
      { word: "intermittent", meaning: "断続的な、定期的に中断する", katakanaReading: "インタミテント", example: "Solar power is intermittent because the sun doesn't always shine." },
      { word: "cost parity", meaning: "コストパリティ（コストが同等になること）", katakanaReading: "コスト パリティー", example: "Solar has reached cost parity with coal in many regions." },
      { word: "necessitate", meaning: "〜を必要とする、〜を余儀なくさせる", katakanaReading: "ネセシテイト", example: "The crisis necessitates immediate action." },
    ],
    grammarPoints: [
      {
        rule: "While A, B（〜であるが、一方でB）の対比構造",
        explanation: "「While A（〜である一方）, B（しかし B）」は事実の対比を示します。「While solar and wind have achieved cost parity, their intermittent nature necessitates investment.」コスト面の改善（A）と技術的課題（B）を対比しています。",
        example: "While electric cars are environmentally friendly, their upfront cost remains high. / While the economy grew, inequality also increased.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「While solar and wind energy have achieved cost parity with fossil fuels, their intermittent nature necessitates investment in energy storage.」を5回音読してください。intermittent の /ˌɪntəˈmɪtənt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "Solar and wind are cost-competitive but require energy storage solutions to be reliable.",
          instruction: "再生可能エネルギーの課題と可能性について話しましょう。",
          examples: [
            "Battery technology is advancing rapidly, which could solve the intermittency problem.",
            "Investing in renewable energy is essential for a sustainable future.",
            "The geopolitical risks of rare earth metal dependency need to be carefully managed.",
          ],
        },
      ],
      dailyConversationTips: "「Renewable energy is the future, but there are still challenges to overcome.」（再生可能エネルギーは未来のものですが、まだ克服すべき課題があります）はバランスのとれたエネルギー問題への見解を示す表現です。",
    },
  },
  {
    id: "ra-020",
    category: "reading",
    difficulty: "advanced",
    question: "Passage: 'Contemporary healthcare systems face the dual challenge of managing chronic disease burdens while controlling costs. Value-based care models, which reimburse providers based on patient health outcomes rather than the volume of services rendered, have emerged as a promising alternative to traditional fee-for-service systems. Evidence suggests that value-based care can improve outcomes for conditions such as diabetes and heart disease while reducing unnecessary procedures. However, implementing such models requires sophisticated data infrastructure, strong care coordination, and agreement on meaningful outcome metrics.'\n\nWhat distinguishes value-based care from traditional fee-for-service systems?",
    options: [
      { id: "ra020-a", text: "It pays providers for the number of services they deliver", isCorrect: false, translation: "提供するサービス数に応じて支払われる" },
      { id: "ra020-b", text: "It reimburses providers based on patient health outcomes", isCorrect: true, translation: "患者の健康アウトカムに基づいて払い戻す" },
      { id: "ra020-c", text: "It eliminates the need for data infrastructure", isCorrect: false, translation: "データインフラの必要性をなくす" },
      { id: "ra020-d", text: "It only applies to emergency medical care", isCorrect: false, translation: "救急医療にのみ適用される" },
    ],
    explanation: "「Value-based care models, which reimburse providers based on patient health outcomes rather than the volume of services rendered（サービス量ではなく患者の健康アウトカムに基づいて医療提供者に払い戻す価値ベースのケアモデル）」と特徴が定義されています。",
    hint: "「rather than（〜ではなく）」という対比に注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n現代の医療システムはコストを管理しながら慢性疾患の負担を管理するという二重の課題に直面しています。提供されるサービス量ではなく患者の健康アウトカムに基づいて医療提供者に払い戻す価値ベースのケアモデルは、従来の出来高制システムの有望な代替として台頭しています。エビデンスは、価値ベースのケアが不必要な処置を減らしながら糖尿病や心疾患などの疾患のアウトカムを改善できることを示唆しています。しかし、そのようなモデルの実施には高度なデータインフラ、強力なケアコーディネーション、意味のあるアウトカム指標への合意が必要です。\n\n【問題文の和訳】\n価値ベースのケアは従来の出来高制システムとどのように異なりますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nコンテンポラリー ヘルスケア システムズ フェイス ザ デュアル チャレンジ オブ マネージング クロニック ディジーズ バーデンズ ワイル コントローリング コスツ。バリューベイスト ケア モデルズ、ウィッチ リインバース プロバイダーズ ベイスト オン ペイシェント ヘルス アウトカムズ ラザー ザン ザ ボリューム オブ サービシズ レンダード、ハブ イマージド アズ ア プロミシング オルタナティブ トゥ トラディショナル フィー フォー サービス システムズ。\n\n【問題文のカタカナ読み】\nワット ディスティングウィシズ バリューベイスト ケア フロム トラディショナル フィー フォー サービス システムズ？",
    vocabularyItems: [
      { word: "value-based care", meaning: "価値ベースの医療（アウトカム連動払い）", katakanaReading: "バリューベイスト ケア", example: "Value-based care rewards quality, not quantity." },
      { word: "reimburse", meaning: "払い戻す、補償する", katakanaReading: "リインバース", example: "The insurance company reimbursed her medical expenses." },
      { word: "outcome", meaning: "アウトカム、結果、成果", katakanaReading: "アウトカム", example: "We measure success by patient outcomes." },
    ],
    grammarPoints: [
      {
        rule: "which 節（関係代名詞・非制限用法）で定義を加える",
        explanation: "「Value-based care models, which reimburse providers based on outcomes...」の which 節は直前の名詞（models）に定義的な説明を加えています。コンマ＋which は「それは〜する、つまり〜という」という追加情報・定義です。",
        example: "The program, which was launched in 2020, has helped thousands of patients. / The new approach, which focuses on prevention, reduces costs.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Value-based care reimburses providers based on patient health outcomes rather than the volume of services rendered.」を5回音読してください。reimburses の発音を確認しましょう。",
      phraseReplacements: [
        {
          original: "Value-based care focuses on health outcomes rather than the number of services provided.",
          instruction: "医療システムの改善について話しましょう。",
          examples: [
            "I think healthcare should focus on keeping people healthy, not just treating illness.",
            "Preventive care is more cost-effective than treating diseases after they develop.",
            "Data and technology can help doctors make better decisions and improve patient outcomes.",
          ],
        },
      ],
      dailyConversationTips: "「How should we measure the quality of healthcare?」（医療の質をどう測るべきでしょうか？）は医療系の授業やディスカッションでよく出るテーマです。",
    },
  },
];
