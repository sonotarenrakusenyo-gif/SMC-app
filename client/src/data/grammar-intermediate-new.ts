import { QuizQuestion } from "./quizzes";

export const grammarIntermediateNewQuizzes: QuizQuestion[] = [
  {
    id: "gi-001",
    category: "grammar",
    difficulty: "intermediate",
    question: "She had already left when I _____ at the station.",
    options: [
      { id: "gi001-a", text: "arrived", isCorrect: true, translation: "到着した（過去形）" },
      { id: "gi001-b", text: "had arrived", isCorrect: false, translation: "到着していた（過去完了形）" },
      { id: "gi001-c", text: "arrive", isCorrect: false, translation: "到着する（現在形）" },
      { id: "gi001-d", text: "was arriving", isCorrect: false, translation: "到着しているところだった（過去進行形）" },
    ],
    explanation: "過去の2つの出来事では、先に起きた方を過去完了（had + 過去分詞）、後で起きた方を過去形で表します。「彼女が立ち去った（had left）」ことは「私が到着した（arrived）」より先なので、私の到着は過去形 arrived が正解です。",
    hint: "「had already left」が既に過去完了なので、私の到着はその後に起きた出来事＝過去形です。",
    questionTranslation: "私が駅に着いたとき、彼女はすでに出発していました。",
    questionKatakana: "シー ハッド オールレディ レフト ウェン アイ アライブド アット ザ ステーション。",
    vocabularyItems: [
      { word: "already", meaning: "すでに、もう（肯定文）", katakanaReading: "オールレディ", example: "She has already finished the report." },
      { word: "station", meaning: "駅", katakanaReading: "ステーション", example: "Let's meet at the station." },
    ],
    grammarPoints: [
      {
        rule: "過去完了と過去形の時系列",
        explanation: "過去の2つの出来事の前後関係を明確にするために使います。「by the time, when, before, after」などの接続詞と一緒に使われることが多いです。先に起きた出来事→過去完了（had + PP）、後に起きた出来事→過去形。",
        example: "When I got home, my parents had already eaten dinner. / She had studied English before she moved to the US.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She had already left when I arrived at the station.」を5回音読してください。had already left の had を短く弱く読むのが自然です。",
      phraseReplacements: [
        {
          original: "She had already left when I arrived at the station.",
          instruction: "過去完了と過去形を組み合わせた文を作ってみましょう。",
          examples: [
            "The movie had already started when we entered the theater.",
            "He had finished his homework when his mother called him.",
            "By the time the ambulance arrived, the accident had already happened.",
          ],
        },
      ],
      dailyConversationTips: "「I had already eaten when they invited me to dinner.」のように、過去の「手遅れ」の状況を説明するときに過去完了はとても便利です。",
    },
  },
  {
    id: "gi-002",
    category: "grammar",
    difficulty: "intermediate",
    question: "English _____ spoken in many countries around the world.",
    options: [
      { id: "gi002-a", text: "speaks", isCorrect: false, translation: "話す（能動態・三人称単数）" },
      { id: "gi002-b", text: "is spoken", isCorrect: true, translation: "話されている（受動態・現在）" },
      { id: "gi002-c", text: "was spoken", isCorrect: false, translation: "話されていた（受動態・過去）" },
      { id: "gi002-d", text: "has spoken", isCorrect: false, translation: "話したことがある（完了形）" },
    ],
    explanation: "受動態は「be 動詞 + 過去分詞」で「〜される・〜されている」を表します。英語が「話される」状態なので受動態が適切です。現在の事実なので is spoken が正解です。",
    hint: "「英語が話される」という受動の表現は何を使いますか？現在の事実を表す受動態は？",
    questionTranslation: "英語は世界中の多くの国で話されています。",
    questionKatakana: "イングリッシュ イズ スポークン イン メニー カントリーズ アラウンド ザ ワールド。",
    vocabularyItems: [
      { word: "be spoken", meaning: "話されている（受動態）", katakanaReading: "ビー スポークン", example: "Spanish is spoken in many countries." },
      { word: "around the world", meaning: "世界中で", katakanaReading: "アラウンド ザ ワールド", example: "This product is sold around the world." },
    ],
    grammarPoints: [
      {
        rule: "受動態（be + 過去分詞）",
        explanation: "受動態は動作を受ける側を主語にする形です。能動態：「Someone speaks English.」→ 受動態：「English is spoken (by someone).」。be 動詞を時制に合わせて変化させます：is/are/was/were/has been + 過去分詞。",
        example: "The report is written by the manager. / The window was broken by a student. / The book has been translated into 20 languages.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「English is spoken in many countries around the world.」を5回音読してください。is spoken をつなげて発音しましょう。",
      phraseReplacements: [
        {
          original: "English is spoken in many countries around the world.",
          instruction: "受動態を使って事実や習慣を表す文を作りましょう。",
          examples: [
            "Rice is eaten every day in Japan.",
            "This bridge was built in 1950.",
            "The office is cleaned every morning.",
          ],
        },
      ],
      dailyConversationTips: "「It is said that...」（〜と言われています）「The meeting is scheduled for...」（会議は〜に予定されています）など、受動態は丁寧で客観的な表現です。",
    },
  },
  {
    id: "gi-003",
    category: "grammar",
    difficulty: "intermediate",
    question: "If I were you, I _____ accept the offer.",
    options: [
      { id: "gi003-a", text: "will", isCorrect: false, translation: "〜するだろう（直説法未来）" },
      { id: "gi003-b", text: "would", isCorrect: true, translation: "〜するだろうに（仮定法過去）" },
      { id: "gi003-c", text: "should", isCorrect: false, translation: "〜すべき（義務）" },
      { id: "gi003-d", text: "could", isCorrect: false, translation: "〜できるだろう（可能性）" },
    ],
    explanation: "「If I were you（もし私があなたなら）」は仮定法過去で、現実ではない仮定を表します。仮定法過去の主節では would/could/might + 動詞原形を使います。",
    hint: "「If I were you」は仮定法過去のサインです。仮定法では主節に何を使いますか？",
    questionTranslation: "もし私があなたなら、その申し出を受け入れるでしょう。",
    questionKatakana: "イフ アイ ワー ユー、アイ ウッド アクセプト ザ オファー。",
    vocabularyItems: [
      { word: "offer", meaning: "申し出、提案", katakanaReading: "オファー", example: "She received a job offer." },
      { word: "accept", meaning: "受け入れる、承諾する", katakanaReading: "アクセプト", example: "I decided to accept the invitation." },
    ],
    grammarPoints: [
      {
        rule: "仮定法過去（If + 過去形, would/could + 原形）",
        explanation: "現実ではない仮定や想像を表すときに仮定法過去を使います。if 節の be 動詞は主語に関係なく were を使うのが正式です（口語では was も可）。主節は would/could/might + 動詞原形です。",
        example: "If I had more time, I would learn Spanish. / If she were here, she would know what to do.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「If I were you, I would accept the offer.」を5回音読してください。would の /d/ 音を軽く発音しましょう。",
      phraseReplacements: [
        {
          original: "If I were you, I would accept the offer.",
          instruction: "If I were you を使ってアドバイスの文を作りましょう。",
          examples: [
            "If I were you, I would apologize to her.",
            "If I were you, I would take the scholarship.",
            "If I were in your situation, I would ask for help.",
          ],
        },
      ],
      dailyConversationTips: "「If I were you, I would...」は友達にアドバイスをするときの定番フレーズです。直接的すぎず、でもしっかり意見を伝えられる便利な表現です。",
    },
  },
  {
    id: "gi-004",
    category: "grammar",
    difficulty: "intermediate",
    question: "She is good at _____ complex problems.",
    options: [
      { id: "gi004-a", text: "solve", isCorrect: false, translation: "解く（不定詞の原形）" },
      { id: "gi004-b", text: "to solve", isCorrect: false, translation: "解くこと（不定詞）" },
      { id: "gi004-c", text: "solving", isCorrect: true, translation: "解くこと（動名詞）" },
      { id: "gi004-d", text: "solved", isCorrect: false, translation: "解いた（過去形・過去分詞）" },
    ],
    explanation: "前置詞（at, in, of, for, about など）の後ろには動詞の -ing 形（動名詞）を使います。「good at doing」は「〜するのが得意」という意味です。",
    hint: "「at」は前置詞です。前置詞の後ろには動詞をどんな形にしますか？",
    questionTranslation: "彼女は複雑な問題を解くのが得意です。",
    questionKatakana: "シー イズ グッド アット ソルビング コンプレックス プロブレムズ。",
    vocabularyItems: [
      { word: "good at", meaning: "〜が得意な", katakanaReading: "グッド アット", example: "He is good at playing chess." },
      { word: "complex", meaning: "複雑な", katakanaReading: "コンプレックス", example: "This is a complex situation." },
    ],
    grammarPoints: [
      {
        rule: "前置詞 + 動名詞（-ing 形）",
        explanation: "前置詞の後ろには名詞か動名詞（動詞の -ing 形）が来ます。よく使われるパターン：be good at -ing、be interested in -ing、look forward to -ing（to は前置詞！）、instead of -ing、before/after -ing。",
        example: "I am interested in learning Japanese. / Thank you for coming. / She left without saying goodbye.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She is good at solving complex problems.」を5回音読してください。good at をつなげて「グダット」のように発音しましょう。",
      phraseReplacements: [
        {
          original: "She is good at solving complex problems.",
          instruction: "good at / interested in / tired of を使って文を作りましょう。",
          examples: [
            "He is good at playing the piano.",
            "I am interested in learning new languages.",
            "She is tired of waiting for the bus.",
          ],
        },
      ],
      dailyConversationTips: "「I'm not good at...」（〜が苦手です）という表現も会話でよく使います。謙虚さを表す日本語的な感覚と合うフレーズです。",
    },
  },
  {
    id: "gi-005",
    category: "grammar",
    difficulty: "intermediate",
    question: "I have been studying English _____ three years.",
    options: [
      { id: "gi005-a", text: "since", isCorrect: false, translation: "〜以来（起点）" },
      { id: "gi005-b", text: "for", isCorrect: true, translation: "〜の間（期間）" },
      { id: "gi005-c", text: "during", isCorrect: false, translation: "〜の間中（特定期間）" },
      { id: "gi005-d", text: "ago", isCorrect: false, translation: "〜前（過去形と使う）" },
    ],
    explanation: "「for」は「3年間」などの期間の長さを表します。「since」は起点（2020年から）を表します。「three years」は期間なので for が正解です。",
    hint: "「three years（3年間）」は期間の長さです。期間には for と since のどちらを使いますか？",
    questionTranslation: "私は3年間英語を勉強しています。",
    questionKatakana: "アイ ハブ ビーン スタディング イングリッシュ フォー スリー イヤーズ。",
    vocabularyItems: [
      { word: "for (duration)", meaning: "〜の間（期間）", katakanaReading: "フォー", example: "I have lived here for five years." },
      { word: "since (point)", meaning: "〜から（起点）", katakanaReading: "シンス", example: "I have studied here since 2020." },
    ],
    grammarPoints: [
      {
        rule: "現在完了進行形 + for / since",
        explanation: "「have been + -ing」は過去に始まり今も継続中の動作を表します。for + 期間の長さ（for two hours, for a long time）、since + 起点（since Monday, since 2019）。現在完了形と一緒に使います。",
        example: "She has been waiting for an hour. / They have been living here since 2015.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「I have been studying English for three years.」を5回音読してください。have been studying をリズムよく言いましょう。",
      phraseReplacements: [
        {
          original: "I have been studying English for three years.",
          instruction: "現在完了進行形を使って継続していることを話しましょう。",
          examples: [
            "She has been working at this company for ten years.",
            "They have been dating since last spring.",
            "He has been learning the guitar for six months.",
          ],
        },
      ],
      dailyConversationTips: "「How long have you been living here?」（どのくらいここに住んでいますか？）という質問に「I've been living here for two years.」のように答えましょう。",
    },
  },
  {
    id: "gi-006",
    category: "grammar",
    difficulty: "intermediate",
    question: "_____ the rain, we decided to go for a walk.",
    options: [
      { id: "gi006-a", text: "Although", isCorrect: false, translation: "〜にもかかわらず（接続詞：後ろは文）" },
      { id: "gi006-b", text: "Despite", isCorrect: true, translation: "〜にもかかわらず（前置詞：後ろは名詞）" },
      { id: "gi006-c", text: "Because of", isCorrect: false, translation: "〜のせいで（原因）" },
      { id: "gi006-d", text: "However", isCorrect: false, translation: "しかしながら（副詞）" },
    ],
    explanation: "「despite」は前置詞なので後ろに名詞句（the rain）が来ます。「although」は接続詞なので後ろに「主語＋動詞」の文が来ます（Although it was raining, ...）。ここでは the rain（名詞）が続くので despite が正解です。",
    hint: "空欄の後ろは「the rain」という名詞です。名詞の前に使える逆接の語は何ですか？",
    questionTranslation: "雨にもかかわらず、私たちは散歩に行くことにしました。",
    questionKatakana: "ディスパイト ザ レイン、ウィー ディサイデッド トゥ ゴウ フォア ア ウォーク。",
    vocabularyItems: [
      { word: "despite", meaning: "〜にもかかわらず（前置詞）", katakanaReading: "ディスパイト", example: "Despite the cold, she went swimming." },
      { word: "although", meaning: "〜だけれども（接続詞）", katakanaReading: "オールゾウ", example: "Although it was late, he kept working." },
    ],
    grammarPoints: [
      {
        rule: "despite vs although（譲歩表現の使い分け）",
        explanation: "despite / in spite of（前置詞）+ 名詞句：Despite the difficulty, she passed. / although / even though（接続詞）+ 主語・動詞：Although it was difficult, she passed. 意味は同じですが品詞が違います。",
        example: "Despite the noise, I fell asleep. / Although it was noisy, I fell asleep.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Despite the rain, we decided to go for a walk.」を5回音読してください。despite の /dɪˈspaɪt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "Despite the rain, we decided to go for a walk.",
          instruction: "despite と although を使って譲歩の文を作りましょう。",
          examples: [
            "Despite his busy schedule, he always finds time to exercise.",
            "Although the exam was difficult, she got a high score.",
            "Despite being tired, she finished the project on time.",
          ],
        },
      ],
      dailyConversationTips: "「Despite everything, I'm glad I came.」（いろいろあったけど、来て良かった）のように、困難を乗り越えたことを伝えるときに despite は便利な表現です。",
    },
  },
  {
    id: "gi-007",
    category: "grammar",
    difficulty: "intermediate",
    question: "She studied hard _____ she could pass the exam.",
    options: [
      { id: "gi007-a", text: "so that", isCorrect: true, translation: "〜するために（目的）" },
      { id: "gi007-b", text: "because", isCorrect: false, translation: "〜なので（理由）" },
      { id: "gi007-c", text: "although", isCorrect: false, translation: "〜にもかかわらず（譲歩）" },
      { id: "gi007-d", text: "as long as", isCorrect: false, translation: "〜する限り（条件）" },
    ],
    explanation: "「so that + 主語 + can/could + 動詞」は「〜するために」という目的を表します。主節が過去形（studied）なので that 節も過去形（could）を使います。",
    hint: "「一生懸命勉強した目的」は合格すること。「〜するために」という目的を表す接続詞は？",
    questionTranslation: "彼女は試験に合格できるように一生懸命勉強しました。",
    questionKatakana: "シー スタディド ハード ソウ ザット シー クッド パス ザ イグザム。",
    vocabularyItems: [
      { word: "so that", meaning: "〜するために（目的）", katakanaReading: "ソウ ザット", example: "She saves money so that she can travel." },
      { word: "pass an exam", meaning: "試験に合格する", katakanaReading: "パス アン イグザム", example: "Did you pass the driving test?" },
    ],
    grammarPoints: [
      {
        rule: "目的を表す so that / in order to",
        explanation: "「so that + 主語 + can/could/will/would + 動詞」で目的を表します。「in order to + 動詞原形」も同じ意味でより formal です。主節が過去なら that 節は could/would を使います。",
        example: "He set an alarm so that he wouldn't be late. / She took notes in order to remember the information.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She studied hard so that she could pass the exam.」を5回音読してください。so that をつなげて発音しましょう。",
      phraseReplacements: [
        {
          original: "She studied hard so that she could pass the exam.",
          instruction: "so that を使って目的を表す文を作りましょう。",
          examples: [
            "He saved money so that he could buy a new laptop.",
            "She practiced every day so that she could improve her pronunciation.",
            "They left early so that they wouldn't miss the train.",
          ],
        },
      ],
      dailyConversationTips: "「I'm studying English so that I can communicate better.」のように、勉強の目的を聞かれたら so that を使って答えると具体的で説得力が増します。",
    },
  },
  {
    id: "gi-008",
    category: "grammar",
    difficulty: "intermediate",
    question: "He used to _____ in New York, but now he lives in Los Angeles.",
    options: [
      { id: "gi008-a", text: "lived", isCorrect: false, translation: "住んでいた（過去形）" },
      { id: "gi008-b", text: "living", isCorrect: false, translation: "住んでいる（現在分詞）" },
      { id: "gi008-c", text: "live", isCorrect: true, translation: "住む（原形）" },
      { id: "gi008-d", text: "lives", isCorrect: false, translation: "住んでいる（三人称単数現在）" },
    ],
    explanation: "「used to + 動詞の原形」は「以前は〜していた（今はしていない）」という過去の習慣を表します。used to の後ろは必ず動詞の原形を使います。",
    hint: "「used to」の後ろに来る動詞の形は何ですか？",
    questionTranslation: "彼は以前ニューヨークに住んでいましたが、今はロサンゼルスに住んでいます。",
    questionKatakana: "ヒー ユーズド トゥ リブ イン ニュー ヨーク、バット ナウ ヒー リブズ イン ロス アンジェレス。",
    vocabularyItems: [
      { word: "used to", meaning: "以前は〜していた（今はしていない）", katakanaReading: "ユーズド トゥ", example: "I used to play soccer when I was young." },
      { word: "anymore", meaning: "もはや〜ない", katakanaReading: "エニモア", example: "He doesn't live here anymore." },
    ],
    grammarPoints: [
      {
        rule: "used to + 動詞原形（過去の習慣）",
        explanation: "used to は「以前は〜だったが、今は違う」という過去の習慣や状態を表します。否定は「didn't use to / used not to」、疑問は「Did you use to...?」となります。would も過去の習慣に使えますが、状態動詞（live, believe など）には used to のみ使えます。",
        example: "She used to be shy, but now she is outgoing. / I didn't use to like vegetables, but now I do.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「He used to live in New York, but now he lives in Los Angeles.」を5回音読してください。used to をつなげて「ユーストゥ」のように発音しましょう。",
      phraseReplacements: [
        {
          original: "He used to live in New York, but now he lives in Los Angeles.",
          instruction: "used to を使って自分の変化について話しましょう。",
          examples: [
            "I used to hate coffee, but now I love it.",
            "She used to walk to school, but now she takes the bus.",
            "They used to argue a lot, but now they get along well.",
          ],
        },
      ],
      dailyConversationTips: "「I used to be really shy.」（昔は本当に内気でした）のように、自分の変化や成長を話すときに used to を使うと会話が深まります。",
    },
  },
  {
    id: "gi-009",
    category: "grammar",
    difficulty: "intermediate",
    question: "Both the manager and the employees _____ satisfied with the result.",
    options: [
      { id: "gi009-a", text: "was", isCorrect: false, translation: "（過去単数 be 動詞）" },
      { id: "gi009-b", text: "is", isCorrect: false, translation: "（現在単数 be 動詞）" },
      { id: "gi009-c", text: "were", isCorrect: true, translation: "（過去複数 be 動詞）" },
      { id: "gi009-d", text: "has been", isCorrect: false, translation: "（現在完了単数）" },
    ],
    explanation: "「Both A and B」は2つの主語を結ぶ表現で、動詞は必ず複数形（were/are）を使います。「the manager and the employees」の両方が満足しているので複数の were が正解です。",
    hint: "「Both A and B」の動詞は単数ですか、複数ですか？",
    questionTranslation: "マネージャーも従業員も、その結果に満足していました。",
    questionKatakana: "ボウス ザ マネージャー アンド ザ エンプロイーズ ワー サティスファイド ウィズ ザ リザルト。",
    vocabularyItems: [
      { word: "both A and B", meaning: "AもBも両方（複数扱い）", katakanaReading: "ボウス アンド", example: "Both salt and pepper are on the table." },
      { word: "satisfied with", meaning: "〜に満足した", katakanaReading: "サティスファイド ウィズ", example: "Are you satisfied with your grade?" },
    ],
    grammarPoints: [
      {
        rule: "相関接続詞の主語・動詞の一致",
        explanation: "both A and B → 複数の動詞。either A or B / neither A nor B → 動詞は B（近い方の名詞）に一致。not only A but also B → 動詞は B に一致。「Both the students and the teacher were present.」",
        example: "Both he and she are coming. / Neither the teacher nor the students were ready.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Both the manager and the employees were satisfied with the result.」を5回音読してください。Both...and... のリズムを意識しましょう。",
      phraseReplacements: [
        {
          original: "Both the manager and the employees were satisfied with the result.",
          instruction: "both A and B を使って文を作りましょう。",
          examples: [
            "Both the food and the service were excellent.",
            "Both the students and the teacher enjoyed the lesson.",
            "Both my parents and my sister were at the party.",
          ],
        },
      ],
      dailyConversationTips: "「Both A and B are important.」は複数のことを等しく重要だと伝えるときに便利です。ビジネスや学術的な文脈でよく使われます。",
    },
  },
  {
    id: "gi-010",
    category: "grammar",
    difficulty: "intermediate",
    question: "She is old enough _____ vote in the election.",
    options: [
      { id: "gi010-a", text: "to", isCorrect: true, translation: "〜するために（不定詞）" },
      { id: "gi010-b", text: "for", isCorrect: false, translation: "〜のための（前置詞）" },
      { id: "gi010-c", text: "that", isCorrect: false, translation: "〜ということ（接続詞）" },
      { id: "gi010-d", text: "and", isCorrect: false, translation: "そして（接続詞）" },
    ],
    explanation: "「enough to + 動詞原形」は「〜するのに十分な」という意味です。「old enough to vote」で「投票できるくらいの年齢」を表します。enough は形容詞の後ろに置きます（old enough、not fast enough）。",
    hint: "「enough to do」は「〜するのに十分な」というパターンです。enough の後ろは何を使いますか？",
    questionTranslation: "彼女は選挙で投票できる年齢に達しています。",
    questionKatakana: "シー イズ オウルド イナフ トゥ ボウト イン ザ エレクション。",
    vocabularyItems: [
      { word: "enough to", meaning: "〜するのに十分な", katakanaReading: "イナフ トゥ", example: "He is strong enough to lift that box." },
      { word: "vote", meaning: "投票する", katakanaReading: "ボウト", example: "Did you vote in the last election?" },
      { word: "election", meaning: "選挙", katakanaReading: "エレクション", example: "The election is next Tuesday." },
    ],
    grammarPoints: [
      {
        rule: "too...to / enough to（程度の表現）",
        explanation: "enough to：「〜するのに十分な」（肯定的）→ She is tall enough to reach the shelf. / too...to：「〜すぎて〜できない」（否定的）→ The box is too heavy to carry. この2つはよくセットで学びます。",
        example: "He is old enough to drive. / She is too young to drink alcohol. / The food was good enough to order again.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She is old enough to vote in the election.」を5回音読してください。enough to をつなげて「イナフトゥ」のように言いましょう。",
      phraseReplacements: [
        {
          original: "She is old enough to vote in the election.",
          instruction: "enough to と too...to を使って文を作りましょう。",
          examples: [
            "He is experienced enough to lead the team.",
            "The instructions are simple enough to follow.",
            "This suitcase is too heavy to carry alone.",
          ],
        },
      ],
      dailyConversationTips: "「I'm not good enough yet.」（まだ十分じゃない）のように enough は自己評価にもよく使います。謙虚さを表す表現として覚えておきましょう。",
    },
  },
  {
    id: "gi-011",
    category: "grammar",
    difficulty: "intermediate",
    question: "Have you ever _____ to Paris?",
    options: [
      { id: "gi011-a", text: "been", isCorrect: true, translation: "行ったことがある（経験・have been to）" },
      { id: "gi011-b", text: "gone", isCorrect: false, translation: "行ってしまった（have gone to：行き先にいるニュアンス）" },
      { id: "gi011-c", text: "go", isCorrect: false, translation: "行く（原形）" },
      { id: "gi011-d", text: "went", isCorrect: false, translation: "行った（過去形）" },
    ],
    explanation: "経験を尋ねる「Have you ever...?」では、場所に「行ったことがある」を表すときは「have been to + 地名」が基本です。「have gone to」は「（今その場所に）行ってしまった」というニュアンスが強く、経験の質問には been が自然です。",
    hint: "「〜に行ったことがありますか？」という経験の質問では、been と gone のどちらをよく使いますか？",
    questionTranslation: "パリに行ったことがありますか？",
    questionKatakana: "ハブ ユー エバー ビーン トゥ パリス？",
    vocabularyItems: [
      { word: "have been to", meaning: "〜に行ったことがある（経験）", katakanaReading: "ハブ ビーン トゥ", example: "I have been to Canada twice." },
      { word: "ever", meaning: "今までに（疑問文・否定文で経験）", katakanaReading: "エバー", example: "Have you ever tried sushi?" },
    ],
    grammarPoints: [
      {
        rule: "現在完了（経験）have been to / have gone to",
        explanation: "have been to：その場所へ行って戻ってきた経験。have gone to：その場所へ行って（まだ）そこにいる、または結果としてそこにいる。質問「Have you ever been to...?」は定番の経験を尋ねる表現です。",
        example: "She has been to Italy three times. / He has gone to the bank (he is still there).",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Have you ever been to Paris?」を5回音読してください。Have you ever been を滑らかにつなげましょう。",
      phraseReplacements: [
        {
          original: "Have you ever been to Paris?",
          instruction: "Have you ever been to...? で旅行や経験について質問しましょう。",
          examples: [
            "Have you ever been to Hawaii?",
            "Have you ever tried skydiving?",
            "Has she ever lived abroad?",
          ],
        },
      ],
      dailyConversationTips: "初対面の会話では「Have you ever been to Japan?」のように相手の国や都市について聞くと会話が広がりやすいです。",
    },
  },
  {
    id: "gi-012",
    category: "grammar",
    difficulty: "intermediate",
    question: "She said she _____ help us the next day.",
    options: [
      { id: "gi012-a", text: "would", isCorrect: true, translation: "〜するだろう（間接話法で will の時制がずれる）" },
      { id: "gi012-b", text: "will", isCorrect: false, translation: "〜するだろう（直接話法のまま）" },
      { id: "gi012-c", text: "can", isCorrect: false, translation: "〜できる（間接話法では could にずれることが多い）" },
      { id: "gi012-d", text: "helps", isCorrect: false, translation: "手伝う（三人称単数現在）" },
    ],
    explanation: "間接話法では、主節の動詞が過去形（said）のとき、従属節内の未来を表す will は would に、can は could に、may は might にずれることが一般的です。「明日手伝う」と言った内容を伝えるので would help が正解です。",
    hint: "She said の後ろの節では、元の「I will help」はどう形が変わりますか？",
    questionTranslation: "彼女は翌日私たちを手伝うと言いました。",
    questionKatakana: "シー セッド シー ウッド ヘルプ アス ザ ネクスト デイ。",
    vocabularyItems: [
      { word: "reported speech", meaning: "間接話法", katakanaReading: "リポーテッド スピーチ", example: "He said he was tired." },
      { word: "the next day", meaning: "翌日（間接話法で tomorrow の代わり）", katakanaReading: "ザ ネクスト デイ", example: "She called the next day." },
    ],
    grammarPoints: [
      {
        rule: "間接話法の時制の一致（バックシフト）",
        explanation: "主節が過去（said, told, thought）のとき、従属節の時制が一段過去にずれることが多い：will→would、can→could、am/is→was、are→were、has done→had done。ただし普遍的真理は現在形のままにすることもあります。",
        example: "He said he would call me later. / They told us they were busy.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She said she would help us the next day.」を5回音読してください。said she would のリズムを意識しましょう。",
      phraseReplacements: [
        {
          original: "She said she would help us the next day.",
          instruction: "間接話法で人の言葉を伝えましょう。",
          examples: [
            "He said he would arrive before noon.",
            "They told me they could finish the work by Friday.",
            "She said she was looking for a new apartment.",
          ],
        },
      ],
      dailyConversationTips: "「He said he would be late.」（遅れると言っていました）はメッセージの伝言に必須のパターンです。",
    },
  },
  {
    id: "gi-013",
    category: "grammar",
    difficulty: "intermediate",
    question: "The woman _____ lives next door is a doctor.",
    options: [
      { id: "gi013-a", text: "who", isCorrect: true, translation: "〜する人（人を先行詞とする主格の関係代名詞）" },
      { id: "gi013-b", text: "which", isCorrect: false, translation: "〜するもの（物の関係代名詞）" },
      { id: "gi013-c", text: "whose", isCorrect: false, translation: "〜の（所有の関係代名詞）" },
      { id: "gi013-d", text: "whom", isCorrect: false, translation: "〜する人を（目的格：ここは主語が必要）" },
    ],
    explanation: "先行詞が「the woman（人）」で、関係詞節の中で主語の役割が必要なので who を使います。which は物、whose は「〜の」、whom は目的格です。",
    hint: "先行詞は人です。関係詞節の中で「住んでいる」の主語になる関係代名詞は？",
    questionTranslation: "隣に住んでいる女性は医者です。",
    questionKatakana: "ザ ウーマン フー リブズ ネクスト ドア イズ ア ドクター。",
    vocabularyItems: [
      { word: "next door", meaning: "隣に", katakanaReading: "ネクスト ドア", example: "The neighbors next door are very kind." },
      { word: "relative pronoun", meaning: "関係代名詞", katakanaReading: "リラティブ プロナウン", example: "The book that I bought is interesting." },
    ],
    grammarPoints: [
      {
        rule: "関係代名詞 who / which / that",
        explanation: "人を先行詞にして主語になる場合は who（または that）。目的語のときは whom（フォーマル）または who/that。物なら which/that。whose は「先行詞の〜」という所有を表します。",
        example: "The students who study hard usually pass. / The house which we rented was small.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The woman who lives next door is a doctor.」を5回音読してください。who lives をひとまとまりで読みましょう。",
      phraseReplacements: [
        {
          original: "The woman who lives next door is a doctor.",
          instruction: "who を使って人を説明する文を作りましょう。",
          examples: [
            "The man who called yesterday is my uncle.",
            "I know someone who works at that company.",
            "The teacher who taught us grammar is retiring.",
          ],
        },
      ],
      dailyConversationTips: "「The guy who...」「The person who...」は日常会話で人物を特定するときに頻出です。",
    },
  },
  {
    id: "gi-014",
    category: "grammar",
    difficulty: "intermediate",
    question: "You don't like coffee, _____ you?",
    options: [
      { id: "gi014-a", text: "do", isCorrect: true, translation: "〜ですね（否定文＋肯定の付加疑問）" },
      { id: "gi014-b", text: "don't", isCorrect: false, translation: "（否定の付加疑問：文が肯定である必要）" },
      { id: "gi014-c", text: "are", isCorrect: false, translation: "（be 動詞の文でない）" },
      { id: "gi014-d", text: "aren't", isCorrect: false, translation: "（主文が don't like で助動詞は do）" },
    ],
    explanation: "付加疑問文では、主文が否定なら付加部分は肯定形にし、主文の助動詞・be 動詞と主語を繰り返します。「You don't like...」の否定は do not なので、付加疑問は do you です。",
    hint: "主文が don't のとき、付加疑問の短い部分は don't の対になる助動詞＋主語です。",
    questionTranslation: "コーヒーは好きじゃないんですね？",
    questionKatakana: "ユー ドント ライク コーヒー、ドゥ ユー？",
    vocabularyItems: [
      { word: "question tag", meaning: "付加疑問文", katakanaReading: "クエスチョン タグ", example: "It's cold today, isn't it?" },
      { word: "coffee", meaning: "コーヒー", katakanaReading: "コーヒー", example: "Would you like some coffee?" },
    ],
    grammarPoints: [
      {
        rule: "付加疑問文（Question tags）",
        explanation: "肯定文→否定タグ（..., isn't he?）。否定文→肯定タグ（..., do you?）。命令文は will you / won't you。Let's は shall we。",
        example: "She speaks French, doesn't she? / They aren't ready, are they?",
      },
    ],
    speakingPractice: {
      readingInstructions: "「You don't like coffee, do you?」を5回音読してください。文末の do you? をやや上げるイントネーションで。",
      phraseReplacements: [
        {
          original: "You don't like coffee, do you?",
          instruction: "付加疑問文を作りましょう。",
          examples: [
            "He works here, doesn't he?",
            "You haven't seen my keys, have you?",
            "It's a beautiful day, isn't it?",
          ],
        },
      ],
      dailyConversationTips: "付加疑問は「確認」や「話しかけ」に使えます。相手に同意を求める柔らかい響きになります。",
    },
  },
  {
    id: "gi-015",
    category: "grammar",
    difficulty: "intermediate",
    question: "I wish I _____ harder for the exam last month.",
    options: [
      { id: "gi015-a", text: "had studied", isCorrect: true, translation: "もっと勉強していたらな（過去への願い：wish + 過去完了）" },
      { id: "gi015-b", text: "studied", isCorrect: false, translation: "勉強したらな（現在への願い：wish + 過去）" },
      { id: "gi015-c", text: "have studied", isCorrect: false, translation: "（wish の直後の形として不自然）" },
      { id: "gi015-d", text: "would study", isCorrect: false, translation: "勉強してくれたらな（他人への願いで使うことが多い）" },
    ],
    explanation: "「I wish + 過去完了」は「（過去に）〜していたらよかったのに」という後悔や反事実の願いを表します。last month は過去なので、過去についての wish は had studied が正解です。",
    hint: "last month の試験についての「後悔」です。wish の後ろで過去の事実と逆のことを願う形は？",
    questionTranslation: "先月の試験のために、もっと勉強しておけばよかった。",
    questionKatakana: "アイ ウィッシュ アイ ハッド スタディド ハーダー フォー ザ イグザム ラスト マンス。",
    vocabularyItems: [
      { word: "I wish", meaning: "〜だったらいいのに", katakanaReading: "アイ ウィッシュ", example: "I wish I were taller." },
      { word: "regret", meaning: "後悔", katakanaReading: "リグレット", example: "She regrets her decision." },
    ],
    grammarPoints: [
      {
        rule: "wish の後の時制（過去・過去完了）",
        explanation: "wish + 過去形：現在の状況と反対の願い（I wish I knew...）。wish + 過去完了：過去の出来事についての後悔（I wish I had studied...）。wish + would：他人の行動の変化への願い（I wish he would stop...）。",
        example: "I wish I had saved more money. / I wish I were on vacation right now.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「I wish I had studied harder for the exam last month.」を5回音読してください。I wish I had の塊を練習しましょう。",
      phraseReplacements: [
        {
          original: "I wish I had studied harder for the exam last month.",
          instruction: "I wish I had... で後悔を表現しましょう。",
          examples: [
            "I wish I had listened to your advice.",
            "She wishes she had applied for the scholarship.",
            "We wish we had booked tickets earlier.",
          ],
        },
      ],
      dailyConversationTips: "「I wish I had known.」（知っていればよかった）はよく使う後悔のフレーズです。",
    },
  },
  {
    id: "gi-016",
    category: "grammar",
    difficulty: "intermediate",
    question: "He _____ lost his keys; he's been searching for an hour.",
    options: [
      { id: "gi016-a", text: "must have", isCorrect: true, translation: "きっと〜したに違いない（過去への推量）" },
      { id: "gi016-b", text: "should have", isCorrect: false, translation: "〜すべきだった（義務・後悔）" },
      { id: "gi016-c", text: "might have", isCorrect: false, translation: "〜したかもしれない（可能性はあるが弱い）" },
      { id: "gi016-d", text: "can't have", isCorrect: false, translation: "〜したはずがない（否定の推量）" },
    ],
    explanation: "「must have + 過去分詞」は過去の出来事について強い推量を表します。「1時間探している」という状況から「鍵をなくしたに違いない」という筋の通った推論なので must have lost が適切です。",
    hint: "状況から「たぶんそうだ」と強く推測するとき、過去について使う法助動詞＋have の形は？",
    questionTranslation: "彼は鍵をなくしたに違いない。もう1時間探している。",
    questionKatakana: "ヒー マスト ハブ ロスト ヒズ キーズ、ヒーズ ビーン サーチング フォー アン アワー。",
    vocabularyItems: [
      { word: "must have done", meaning: "きっと〜したに違いない（推量）", katakanaReading: "マスト ハブ ダン", example: "You must have been tired after the trip." },
      { word: "search for", meaning: "〜を探す", katakanaReading: "サーチ フォー", example: "I am searching for my phone." },
    ],
    grammarPoints: [
      {
        rule: "法助動詞 + have + 過去分詞（過去への推量・推定）",
        explanation: "must have done：強い肯定の推量。may/might have done：かもしれない。can't/couldn't have done：〜だったはずがない。should have done：すべきだった（実際はしなかった）。",
        example: "She can't have forgotten; she wrote it in her notebook. / You might have left it in the car.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「He must have lost his keys; he's been searching for an hour.」を5回音読してください。must have lost をつなげて発音しましょう。",
      phraseReplacements: [
        {
          original: "He must have lost his keys.",
          instruction: "must have / might have / can't have を使った推量の文を作りましょう。",
          examples: [
            "You must have worked really hard on this project.",
            "They might have missed the last train.",
            "He can't have finished already; we just started!",
          ],
        },
      ],
      dailyConversationTips: "「You must be kidding!」（まさか！）に近いニュアンスで、must は推量・確信を表すときによく使います。",
    },
  },
  {
    id: "gi-017",
    category: "grammar",
    difficulty: "intermediate",
    question: "She avoids _____ late at night.",
    options: [
      { id: "gi017-a", text: "driving", isCorrect: true, translation: "運転すること（動名詞）" },
      { id: "gi017-b", text: "to drive", isCorrect: false, translation: "運転すること（不定詞）" },
      { id: "gi017-c", text: "drive", isCorrect: false, translation: "運転する（原形）" },
      { id: "gi017-d", text: "drove", isCorrect: false, translation: "運転した（過去形）" },
    ],
    explanation: "avoid, enjoy, finish, mind, suggest などの動詞の後ろには動名詞（-ing 形）を置くのが一般的です。「avoid doing」で「〜することを避ける」という意味になります。",
    hint: "avoid の後ろに続く動詞の形を思い出しましょう。",
    questionTranslation: "彼女は夜遅くに運転することを避けています。",
    questionKatakana: "シー アヴォイドズ ドライビング レイト アット ナイト。",
    vocabularyItems: [
      { word: "avoid", meaning: "避ける", katakanaReading: "アヴォイド", example: "Avoid eating too much sugar." },
      { word: "at night", meaning: "夜に", katakanaReading: "アット ナイト", example: "The streets are quiet at night." },
    ],
    grammarPoints: [
      {
        rule: "動詞 + 動名詞（-ing）",
        explanation: "avoid, enjoy, finish, mind, practice, suggest, consider, deny, risk などの後ろは動名詞。try / remember / forget / stop は -ing と to do で意味が変わるので注意。",
        example: "I enjoy reading novels. / He finished writing the report. / Would you mind closing the window?",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She avoids driving late at night.」を5回音読してください。avoids driving を滑らかに。",
      phraseReplacements: [
        {
          original: "She avoids driving late at night.",
          instruction: "avoid + -ing を使って文を作りましょう。",
          examples: [
            "I avoid checking email on weekends.",
            "He avoids talking about politics at work.",
            "We avoid using plastic bags when shopping.",
          ],
        },
      ],
      dailyConversationTips: "「I try to avoid...」（〜を避けるようにしている）は習慣や方針を話すときに便利です。",
    },
  },
  {
    id: "gi-018",
    category: "grammar",
    difficulty: "intermediate",
    question: "This novel is not _____ interesting as her first book.",
    options: [
      { id: "gi018-a", text: "as", isCorrect: true, translation: "（as + 形容詞 + as：同程度の比較）" },
      { id: "gi018-b", text: "so", isCorrect: false, translation: "（否定では so...as も古い文体で可だが、現代英語では as...as が一般的）" },
      { id: "gi018-c", text: "more", isCorrect: false, translation: "（more interesting は比較級で as と組み合わせない）" },
      { id: "gi018-d", text: "such", isCorrect: false, translation: "（such は名詞を修飾）" },
    ],
    explanation: "「as + 形容詞/副詞 + as」は「〜と同じくらい〜」という同程度比較です。否定文では「not as/so ... as」で「〜ほど〜ではない」となります。現代の一般的な会話・ライティングでは not as interesting as が自然です。",
    hint: "「同じくらい面白い」は as interesting as。否定は not as ... as です。",
    questionTranslation: "この小説は彼女の処女作ほど面白くありません。",
    questionKatakana: "ディス ノベル イズ ノット アズ インタレスティング アズ ハー ファースト ブック。",
    vocabularyItems: [
      { word: "as...as", meaning: "〜と同じくらい", katakanaReading: "アズ...アズ", example: "He is as tall as his father." },
      { word: "novel", meaning: "小説", katakanaReading: "ノベル", example: "She wrote a historical novel." },
    ],
    grammarPoints: [
      {
        rule: "同程度比較（as...as / not as...as）",
        explanation: "as + 形/副 + as で同等比較。否定は not as ... as または not so ... as（やや文語的）。「half as expensive as」「twice as big as」のように倍数も使えます。",
        example: "This room isn't as large as we expected. / She runs as fast as he does.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「This novel is not as interesting as her first book.」を5回音読してください。as ... as のリズムを保ちましょう。",
      phraseReplacements: [
        {
          original: "This novel is not as interesting as her first book.",
          instruction: "as...as を使って比較の文を作りましょう。",
          examples: [
            "The second movie wasn't as exciting as the first one.",
            "He doesn't work as hard as his brother.",
            "This phone is twice as expensive as that model.",
          ],
        },
      ],
      dailyConversationTips: "「It's not as bad as it sounds.」（聞くほど悪くないよ）は相手を安心させる表現です。",
    },
  },
  {
    id: "gi-019",
    category: "grammar",
    difficulty: "intermediate",
    question: "You won't pass the test _____ you study harder.",
    options: [
      { id: "gi019-a", text: "unless", isCorrect: true, translation: "〜しない限り（否定条件）" },
      { id: "gi019-b", text: "if", isCorrect: false, translation: "もし〜なら（肯定条件：文意が逆）" },
      { id: "gi019-c", text: "until", isCorrect: false, translation: "〜するまで（時）" },
      { id: "gi019-d", text: "when", isCorrect: false, translation: "〜するとき（時）" },
    ],
    explanation: "unless は「if ... not」とほぼ同じで「〜しない限り」「もし〜しなければ」の意味です。「もっと勉強しない限り合格しない」なので unless が正解です。",
    hint: "「勉強しないと合格しない」という条件。if not を一語で表す接続詞は？",
    questionTranslation: "もっと勉強しない限り、その試験に合格しません。",
    questionKatakana: "ユー ウォント パス ザ テスト アンレス ユー スタディ ハーダー。",
    vocabularyItems: [
      { word: "unless", meaning: "〜しない限り", katakanaReading: "アンレス", example: "Don't call unless it is urgent." },
      { word: "pass a test", meaning: "試験に合格する", katakanaReading: "パス ア テスト", example: "Did you pass the driving test?" },
    ],
    grammarPoints: [
      {
        rule: "unless（条件）",
        explanation: "unless = if not。「Unless you hurry, you will be late.」= 「If you don't hurry, you will be late.」unless の後ろには肯定文が来ることが多い（*unless you don't は二重否定になりやすく避ける）。",
        example: "You can't enter unless you have a ticket. / I won't go unless she invites me.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「You won't pass the test unless you study harder.」を5回音読してください。unless のストレスに注意しましょう。",
      phraseReplacements: [
        {
          original: "You won't pass the test unless you study harder.",
          instruction: "unless を使った条件の文を作りましょう。",
          examples: [
            "We can't start unless everyone is here.",
            "You won't improve unless you practice every day.",
            "Don't leave unless you lock the door.",
          ],
        },
      ],
      dailyConversationTips: "「Unless I'm mistaken,...」（私の勘違いでなければ…）は議論や発表でよく使う導入表現です。",
    },
  },
  {
    id: "gi-020",
    category: "grammar",
    difficulty: "intermediate",
    question: "Not only did she finish the project, _____ she also presented it to the board.",
    options: [
      { id: "gi020-a", text: "but", isCorrect: true, translation: "（not only ... but also の一部）" },
      { id: "gi020-b", text: "and", isCorrect: false, translation: "そして（定型の相関構造ではない）" },
      { id: "gi020-c", text: "so", isCorrect: false, translation: "だから（接続詞として不適切）" },
      { id: "gi020-d", text: "or", isCorrect: false, translation: "または（意味が合わない）" },
    ],
    explanation: "「Not only ... but (also) ...」は2つの情報を並べて強調する相関接続詞です。倒置（Not only did she...）のあとは but を置き、続けて also と述べるのが定番です。",
    hint: "Not only で始まる強調の並列は、後半を but でつなぐ決まったパターンがあります。",
    questionTranslation: "彼女はプロジェクトを完成させただけでなく、取締役会にも発表しました。",
    questionKatakana: "ノット オンリー ディッド シー フィニッシュ ザ プロジェクト、バット シー オールソー プリゼンテッド イット トゥ ザ ボード。",
    vocabularyItems: [
      { word: "not only ... but also", meaning: "〜だけでなく…もまた", katakanaReading: "ノット オンリー バット オールソー", example: "He is not only smart but also kind." },
      { word: "board", meaning: "取締役会、理事会", katakanaReading: "ボード", example: "The proposal was approved by the board." },
    ],
    grammarPoints: [
      {
        rule: "Not only ... but also ...（倒置を伴う強調）",
        explanation: "Not only が文頭に来ると助動詞の倒置が起きることがある：Not only did she finish, but she also...（彼女は完成させただけでなく…もした）。also は but の後に置くのが一般的。",
        example: "Not only is he talented, but he is also very humble. / She not only sings but also writes songs.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Not only did she finish the project, but she also presented it to the board.」を5回音読してください。Not only did の倒置に慣れましょう。",
      phraseReplacements: [
        {
          original: "Not only did she finish the project, but she also presented it.",
          instruction: "not only ... but also を使って強調しましょう。",
          examples: [
            "Not only did we save money, but we also improved quality.",
            "She not only passed the exam but also won a scholarship.",
            "Not only is the apartment spacious, but it is also close to the station.",
          ],
        },
      ],
      dailyConversationTips: "「Not only A but also B」はプレゼンや自己PRで実績を並べるときに説得力が出ます。",
    },
  },
];
