import { QuizQuestion } from "./quizzes";

export const vocabularyBeginnerQuizzes: QuizQuestion[] = [
  {
    id: "vb-001",
    category: "vocabulary",
    difficulty: "beginner",
    question: "She felt very _____ after hearing the good news.",
    options: [
      { id: "vb001-a", text: "happy", isCorrect: true, translation: "うれしい、幸せな" },
      { id: "vb001-b", text: "angry", isCorrect: false, translation: "怒った" },
      { id: "vb001-c", text: "tired", isCorrect: false, translation: "疲れた" },
      { id: "vb001-d", text: "hungry", isCorrect: false, translation: "お腹が空いた" },
    ],
    explanation: "良いニュースを聞いた後の感情として最も自然なのは「happy（うれしい・幸せな）」です。感情を表す形容詞のうち、happy はポジティブな感情を表します。",
    hint: "良いニュースを聞いたときの気持ちはどれですか？",
    questionTranslation: "彼女は良いニュースを聞いてとてもうれしく感じました。",
    questionKatakana: "シー フェルト ベリー ハッピー アフター ヒアリング ザ グッド ニューズ。",
    vocabularyItems: [
      { word: "happy", meaning: "うれしい、幸せな", katakanaReading: "ハッピー", example: "I am happy to see you." },
      { word: "angry", meaning: "怒っている", katakanaReading: "アングリー", example: "He was angry about the delay." },
      { word: "tired", meaning: "疲れた", katakanaReading: "タイアード", example: "She felt tired after the long trip." },
    ],
    grammarPoints: [
      {
        rule: "感情を表す形容詞",
        explanation: "感情を表す形容詞は「feel + 形容詞」または「be + 形容詞」の形で使います。happy（うれしい）、sad（悲しい）、angry（怒った）、excited（興奮した）、nervous（緊張した）などを覚えましょう。",
        example: "I feel happy. / She is excited. / He was angry about the news.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She felt very happy after hearing the good news.」を5回音読してください。happy の /æ/ 音をはっきり発音しましょう。",
      phraseReplacements: [
        {
          original: "She felt very happy after hearing the good news.",
          instruction: "感情を表す形容詞を変えて文を作りましょう。",
          examples: [
            "She felt very excited after hearing the good news.",
            "He felt sad after hearing the bad news.",
            "They felt relieved after hearing the result.",
          ],
        },
      ],
      dailyConversationTips: "「How do you feel?」（気分はどうですか？）と聞かれたら「I feel happy/tired/nervous」などと答えましょう。感情を素直に伝えることがコミュニケーションの第一歩です。",
    },
  },
  {
    id: "vb-002",
    category: "vocabulary",
    difficulty: "beginner",
    question: "The elephant is a very _____ animal.",
    options: [
      { id: "vb002-a", text: "small", isCorrect: false, translation: "小さい" },
      { id: "vb002-b", text: "big", isCorrect: true, translation: "大きい" },
      { id: "vb002-c", text: "fast", isCorrect: false, translation: "速い" },
      { id: "vb002-d", text: "quiet", isCorrect: false, translation: "静かな" },
    ],
    explanation: "ゾウは地上最大の陸上動物の一つです。「big（大きい）」が最も適切な形容詞です。",
    hint: "ゾウはどんな大きさですか？",
    questionTranslation: "ゾウはとても大きな動物です。",
    questionKatakana: "ジ エレファント イズ ア ベリー ビッグ アニマル。",
    vocabularyItems: [
      { word: "big / large", meaning: "大きい", katakanaReading: "ビッグ／ラージ", example: "This is a big city." },
      { word: "small / little", meaning: "小さい", katakanaReading: "スモール／リトル", example: "She has a small dog." },
      { word: "huge / enormous", meaning: "巨大な（さらに大きい）", katakanaReading: "ヒュージ／イノーマス", example: "The whale is a huge animal." },
    ],
    grammarPoints: [
      {
        rule: "大きさを表す形容詞（サイズ）",
        explanation: "大きさを表す形容詞のグラデーション：tiny（極小）< small（小さい）< medium（中くらい）< big/large（大きい）< huge/enormous（巨大な）。状況に応じて使い分けましょう。",
        example: "A mouse is tiny. A cat is small. A cow is big. An elephant is huge.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The elephant is a very big animal.」を5回音読してください。big の /ɪ/ 音を短くはっきり発音しましょう。",
      phraseReplacements: [
        {
          original: "The elephant is a very big animal.",
          instruction: "大きさを表す形容詞を使って動物を説明しましょう。",
          examples: [
            "The cat is a small animal.",
            "The whale is an enormous animal.",
            "The ant is a tiny insect.",
          ],
        },
      ],
      dailyConversationTips: "「Is this room big enough?」（この部屋は十分な広さですか？）のように、big / large は日常会話でよく使います。",
    },
  },
  {
    id: "vb-003",
    category: "vocabulary",
    difficulty: "beginner",
    question: "I need to _____ a new pen at the store.",
    options: [
      { id: "vb003-a", text: "sell", isCorrect: false, translation: "売る" },
      { id: "vb003-b", text: "buy", isCorrect: true, translation: "買う" },
      { id: "vb003-c", text: "find", isCorrect: false, translation: "見つける" },
      { id: "vb003-d", text: "make", isCorrect: false, translation: "作る" },
    ],
    explanation: "「at the store（お店で）」という場所の表現と組み合わせると、お店で行う動作は「buy（買う）」が最も自然です。sell はお店側が行う動作です。",
    hint: "お店に行って何かをするとき、お客さんがする行動は何ですか？",
    questionTranslation: "私はお店で新しいペンを買う必要があります。",
    questionKatakana: "アイ ニード トゥ バイ ア ニュー ペン アット ザ ストア。",
    vocabularyItems: [
      { word: "buy", meaning: "買う", katakanaReading: "バイ", example: "I want to buy a new phone." },
      { word: "sell", meaning: "売る", katakanaReading: "セル", example: "They sell fresh vegetables here." },
      { word: "shop", meaning: "買い物をする（動詞）", katakanaReading: "ショップ", example: "She loves to shop online." },
    ],
    grammarPoints: [
      {
        rule: "buy と sell の違い（方向性）",
        explanation: "buy（買う）は「お金を払って物を得る」こと、sell（売る）は「物を渡してお金を得る」こと。buy は消費者側、sell は販売者側の動作です。「buy from（〜から買う）」「sell to（〜に売る）」というフレーズも覚えましょう。",
        example: "I bought this shirt from that shop. / They sell handmade goods at the market.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「I need to buy a new pen at the store.」を5回音読してください。buy の /aɪ/ 音（バイ）を正確に発音しましょう。",
      phraseReplacements: [
        {
          original: "I need to buy a new pen at the store.",
          instruction: "buy を使って買い物の文を作りましょう。",
          examples: [
            "I want to buy some groceries at the supermarket.",
            "She needs to buy a birthday present for her friend.",
            "He bought a laptop at the electronics store.",
          ],
        },
      ],
      dailyConversationTips: "「Where can I buy ___?」（〜はどこで買えますか？）はよく使う質問フレーズです。初めての場所でお店を探すときに便利です。",
    },
  },
  {
    id: "vb-004",
    category: "vocabulary",
    difficulty: "beginner",
    question: "The test was very _____, so many students failed.",
    options: [
      { id: "vb004-a", text: "easy", isCorrect: false, translation: "簡単な" },
      { id: "vb004-b", text: "difficult", isCorrect: true, translation: "難しい" },
      { id: "vb004-c", text: "short", isCorrect: false, translation: "短い" },
      { id: "vb004-d", text: "interesting", isCorrect: false, translation: "おもしろい" },
    ],
    explanation: "多くの学生が不合格になったという結果から、テストは「difficult（難しい）」だったと判断できます。easy なら多くの人が合格するはずです。",
    hint: "多くの学生が不合格になったということは、テストはどうでしたか？",
    questionTranslation: "そのテストはとても難しかったので、多くの学生が不合格になりました。",
    questionKatakana: "ザ テスト ワズ ベリー ディフィカルト、ソウ メニー スチューデンツ フェイルド。",
    vocabularyItems: [
      { word: "difficult / hard", meaning: "難しい", katakanaReading: "ディフィカルト／ハード", example: "This math problem is very difficult." },
      { word: "easy / simple", meaning: "簡単な", katakanaReading: "イージー／シンプル", example: "The first question was easy." },
      { word: "fail", meaning: "不合格になる、失敗する", katakanaReading: "フェイル", example: "She didn't want to fail the exam." },
    ],
    grammarPoints: [
      {
        rule: "難易度を表す形容詞",
        explanation: "難易度のグラデーション：easy（簡単）→ manageable（なんとかなる）→ challenging（やりがいのある難しさ）→ difficult/hard（難しい）→ impossible（不可能）。文脈によって使い分けましょう。",
        example: "Level 1 is easy. Level 5 is challenging. Level 10 is extremely difficult.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The test was very difficult, so many students failed.」を5回音読してください。difficult の3音節（dif-fi-cult）を意識して発音しましょう。",
      phraseReplacements: [
        {
          original: "The test was very difficult, so many students failed.",
          instruction: "difficult と easy を使って文を作りましょう。",
          examples: [
            "The interview was very difficult, so I was nervous.",
            "The instructions were easy to follow.",
            "Learning a new language is challenging but rewarding.",
          ],
        },
      ],
      dailyConversationTips: "「Was it difficult?」（難しかった？）と聞かれたら「Yes, it was really hard.」「Not really, it was manageable.」などと答えましょう。",
    },
  },
  {
    id: "vb-005",
    category: "vocabulary",
    difficulty: "beginner",
    question: "It is _____ to wear a seatbelt when you are in a car.",
    options: [
      { id: "vb005-a", text: "boring", isCorrect: false, translation: "退屈な" },
      { id: "vb005-b", text: "important", isCorrect: true, translation: "重要な、大切な" },
      { id: "vb005-c", text: "funny", isCorrect: false, translation: "おかしい" },
      { id: "vb005-d", text: "strange", isCorrect: false, translation: "奇妙な" },
    ],
    explanation: "シートベルトの着用は安全のために「important（重要な・大切な）」ことです。boring（退屈な）、funny（おかしい）、strange（奇妙な）は状況に合いません。",
    hint: "シートベルトをすることは安全のために何ですか？",
    questionTranslation: "車に乗るときシートベルトを着用することは大切です。",
    questionKatakana: "イット イズ インポータント トゥ ウェア ア スィートベルト ウェン ユー アー イン ア カー。",
    vocabularyItems: [
      { word: "important", meaning: "重要な、大切な", katakanaReading: "インポータント", example: "Exercise is important for good health." },
      { word: "seatbelt", meaning: "シートベルト", katakanaReading: "スィートベルト", example: "Always buckle your seatbelt." },
      { word: "necessary", meaning: "必要な", katakanaReading: "ネセサリー", example: "It is necessary to study hard." },
    ],
    grammarPoints: [
      {
        rule: "It is + 形容詞 + to 不定詞（〜することは〜だ）",
        explanation: "「It is + 形容詞 + to do」は「〜することは〜だ」という意味の重要構文です。It は形式主語で、本当の主語は to do 以下です。It is important to sleep well. / It is easy to make mistakes.",
        example: "It is important to drink water. / It is necessary to study every day. / It is dangerous to text while driving.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「It is important to wear a seatbelt when you are in a car.」を5回音読してください。important の /ɪm'pɔːrtənt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "It is important to wear a seatbelt when you are in a car.",
          instruction: "It is important/necessary/good to... を使って大切なことを言いましょう。",
          examples: [
            "It is important to wash your hands before eating.",
            "It is necessary to get enough sleep every night.",
            "It is good to exercise regularly.",
          ],
        },
      ],
      dailyConversationTips: "「It's important that...」や「It's essential to...」はルールや習慣を説明するときに使います。授業やミーティングでよく聞かれる表現です。",
    },
  },
  {
    id: "vb-006",
    category: "vocabulary",
    difficulty: "beginner",
    question: "Can you _____ me carry these heavy bags?",
    options: [
      { id: "vb006-a", text: "help", isCorrect: true, translation: "手伝う" },
      { id: "vb006-b", text: "stop", isCorrect: false, translation: "止める" },
      { id: "vb006-c", text: "leave", isCorrect: false, translation: "去る" },
      { id: "vb006-d", text: "push", isCorrect: false, translation: "押す" },
    ],
    explanation: "重い荷物を運ぶのに「手伝って」とお願いする文です。「help（手伝う）」が最適です。「Can you help me + 動詞の原形」は依頼の定番フレーズです。",
    hint: "重い荷物を持つのを誰かに頼むとき、何とお願いしますか？",
    questionTranslation: "これらの重いバッグを運ぶのを手伝っていただけますか？",
    questionKatakana: "キャン ユー ヘルプ ミー キャリー ジーズ ヘビー バッグズ？",
    vocabularyItems: [
      { word: "help", meaning: "助ける、手伝う", katakanaReading: "ヘルプ", example: "Could you help me with this?" },
      { word: "carry", meaning: "運ぶ、持つ", katakanaReading: "キャリー", example: "He carried the boxes to the truck." },
      { word: "assist", meaning: "手伝う（やや丁寧）", katakanaReading: "アシスト", example: "The staff will assist you." },
    ],
    grammarPoints: [
      {
        rule: "help + 目的語 + 動詞原形（または to 不定詞）",
        explanation: "「help + 人 + 動詞原形」は「人が〜するのを助ける」という意味です。to は省略されることが多いです。「Can you help me (to) carry this?」「She helped him (to) study.」",
        example: "He helped me move the furniture. / Can you help me find my phone? / She helped her mother clean the house.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Can you help me carry these heavy bags?」を5回音読してください。help me をつなげて「ヘルプミー」と発音しましょう。",
      phraseReplacements: [
        {
          original: "Can you help me carry these heavy bags?",
          instruction: "Can you help me...? を使ってお願いの文を作りましょう。",
          examples: [
            "Can you help me find the library?",
            "Could you help me with this math problem?",
            "Can you help me understand this word?",
          ],
        },
      ],
      dailyConversationTips: "「Excuse me, could you help me?」はどんな状況でも使える万能のお願いフレーズです。道に迷ったときや困ったときに積極的に使いましょう。",
    },
  },
  {
    id: "vb-007",
    category: "vocabulary",
    difficulty: "beginner",
    question: "Please _____ your name at the top of the form.",
    options: [
      { id: "vb007-a", text: "write", isCorrect: true, translation: "書く" },
      { id: "vb007-b", text: "read", isCorrect: false, translation: "読む" },
      { id: "vb007-c", text: "draw", isCorrect: false, translation: "描く" },
      { id: "vb007-d", text: "cut", isCorrect: false, translation: "切る" },
    ],
    explanation: "「please + 動詞の原形」は丁寧な命令文です。「at the top of the form（書式の上部に）」に名前を「書く（write）」のが正解です。",
    hint: "フォームの上部に名前を入れる動作は何ですか？",
    questionTranslation: "フォームの上部にあなたの名前を書いてください。",
    questionKatakana: "プリーズ ライト ユア ネイム アット ザ トップ オブ ザ フォーム。",
    vocabularyItems: [
      { word: "write", meaning: "書く", katakanaReading: "ライト", example: "Please write your address here." },
      { word: "fill in / fill out", meaning: "（フォームに）記入する", katakanaReading: "フィル イン／アウト", example: "Please fill in this form." },
      { word: "form", meaning: "書式、フォーム", katakanaReading: "フォーム", example: "You need to complete the application form." },
    ],
    grammarPoints: [
      {
        rule: "write vs draw の違い",
        explanation: "write（書く）は文字・単語・文章を書くこと。draw（描く）は絵や図形を描くこと。「write a letter（手紙を書く）」「draw a picture（絵を描く）」と使い分けます。",
        example: "Write your name here. / She drew a map to show me the way.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Please write your name at the top of the form.」を5回音読してください。Please をゆっくり丁寧に言いましょう。",
      phraseReplacements: [
        {
          original: "Please write your name at the top of the form.",
          instruction: "write を使った指示の文を作りましょう。",
          examples: [
            "Please write your answers clearly.",
            "Write your phone number in this box.",
            "Could you write that down for me?",
          ],
        },
      ],
      dailyConversationTips: "「Could you write that down?」（それを書き留めてもらえますか？）は電話やミーティングで使う便利なフレーズです。",
    },
  },
  {
    id: "vb-008",
    category: "vocabulary",
    difficulty: "beginner",
    question: "The movie will _____ at 7:00 p.m. Don't be late.",
    options: [
      { id: "vb008-a", text: "end", isCorrect: false, translation: "終わる" },
      { id: "vb008-b", text: "stop", isCorrect: false, translation: "止まる" },
      { id: "vb008-c", text: "begin", isCorrect: true, translation: "始まる" },
      { id: "vb008-d", text: "open", isCorrect: false, translation: "開く" },
    ],
    explanation: "「Don't be late（遅れないで）」という文脈から、これから何かが「始まる（begin）」という意味が適切です。begin と start はほぼ同じ意味で使えます。",
    hint: "「Don't be late（遅れないで）」という指示から、何が起こりますか？",
    questionTranslation: "映画は午後7時に始まります。遅れないでください。",
    questionKatakana: "ザ ムービー ウィル ビギン アット セブン ピーエム。ドント ビー レイト。",
    vocabularyItems: [
      { word: "begin / start", meaning: "始まる、始める", katakanaReading: "ビギン／スタート", example: "The class begins at 9 a.m." },
      { word: "end / finish", meaning: "終わる、終える", katakanaReading: "エンド／フィニッシュ", example: "The meeting ends at 5 p.m." },
      { word: "late", meaning: "遅い、遅刻して", katakanaReading: "レイト", example: "Sorry, I'm late." },
    ],
    grammarPoints: [
      {
        rule: "begin と start の違い",
        explanation: "begin と start はほぼ同じ意味で使えます（始まる/始める）。わずかな違い：begin はやや formal、start は日常的によく使われます。どちらも「+ to 不定詞」または「+ -ing」を取ります：begin/start to work / working。",
        example: "The concert begins at 8. / Let's start the meeting. / She began to cry. / He started working.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The movie will begin at 7:00 p.m. Don't be late.」を5回音読してください。begin の /ɪ/ 音を短く発音しましょう。",
      phraseReplacements: [
        {
          original: "The movie will begin at 7:00 p.m.",
          instruction: "begin/start を使って予定を言いましょう。",
          examples: [
            "The concert starts at 8:30 p.m.",
            "Classes begin on Monday.",
            "The new semester starts next week.",
          ],
        },
      ],
      dailyConversationTips: "「What time does it start?」（何時に始まりますか？）は映画やイベントで使う基本フレーズです。",
    },
  },
  {
    id: "vb-009",
    category: "vocabulary",
    difficulty: "beginner",
    question: "This jacket is very _____, so I can't buy it.",
    options: [
      { id: "vb009-a", text: "cheap", isCorrect: false, translation: "安い" },
      { id: "vb009-b", text: "expensive", isCorrect: true, translation: "高い（値段）" },
      { id: "vb009-c", text: "light", isCorrect: false, translation: "軽い" },
      { id: "vb009-d", text: "colorful", isCorrect: false, translation: "カラフルな" },
    ],
    explanation: "「so I can't buy it（だから買えない）」という結果から、ジャケットが「expensive（高い・値段が高い）」であることが分かります。cheap なら買えるはずです。",
    hint: "買えない理由として考えられるのは、値段が「高い」か「安い」か、どちらですか？",
    questionTranslation: "このジャケットはとても高いので、買うことができません。",
    questionKatakana: "ディス ジャケット イズ ベリー エクスペンシブ、ソウ アイ キャント バイ イット。",
    vocabularyItems: [
      { word: "expensive", meaning: "高価な、値段が高い", katakanaReading: "イクスペンシブ", example: "That restaurant is too expensive for me." },
      { word: "cheap", meaning: "安い（値段）", katakanaReading: "チープ", example: "This market has cheap vegetables." },
      { word: "affordable", meaning: "手ごろな値段の", katakanaReading: "アフォーダブル", example: "We need an affordable option." },
    ],
    grammarPoints: [
      {
        rule: "値段を表す形容詞",
        explanation: "値段のグラデーション：free（無料）< cheap/inexpensive（安い）< affordable（手ごろ）< moderate（適度）< expensive（高い）< pricey/costly（かなり高い）< luxurious（超高級）。",
        example: "This shirt is cheap. That watch is expensive. The hotel was affordable.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「This jacket is very expensive, so I can't buy it.」を5回音読してください。expensive の /ɪk'spensɪv/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "This jacket is very expensive, so I can't buy it.",
          instruction: "値段について話す文を作りましょう。",
          examples: [
            "This apartment is too expensive, so I'm looking for another one.",
            "The tickets were cheap, so we bought four of them.",
            "Is this price affordable for you?",
          ],
        },
      ],
      dailyConversationTips: "「Is this on sale?」（セール中ですか？）「Do you have anything cheaper?」（もっと安いものはありますか？）はショッピングで使える便利なフレーズです。",
    },
  },
  {
    id: "vb-010",
    category: "vocabulary",
    difficulty: "beginner",
    question: "Please _____ your name on the list if you want to join the club.",
    options: [
      { id: "vb010-a", text: "remove", isCorrect: false, translation: "取り除く" },
      { id: "vb010-b", text: "forget", isCorrect: false, translation: "忘れる" },
      { id: "vb010-c", text: "add", isCorrect: true, translation: "加える、追加する" },
      { id: "vb010-d", text: "change", isCorrect: false, translation: "変える" },
    ],
    explanation: "クラブに参加したい場合、リストに名前を「追加する（add）」のが正解です。remove は「取り除く」の意味で逆です。",
    hint: "クラブに参加したい場合、リストに名前を「追加」するのか「削除」するのかどちらですか？",
    questionTranslation: "クラブに参加したい場合は、リストにあなたの名前を加えてください。",
    questionKatakana: "プリーズ アド ユア ネイム オン ザ リスト イフ ユー ウォント トゥ ジョイン ザ クラブ。",
    vocabularyItems: [
      { word: "add", meaning: "加える、追加する", katakanaReading: "アッド", example: "Please add your email address." },
      { word: "remove", meaning: "取り除く、削除する", katakanaReading: "リムーブ", example: "Remove your name from the list." },
      { word: "join", meaning: "参加する、加入する", katakanaReading: "ジョイン", example: "Would you like to join our team?" },
    ],
    grammarPoints: [
      {
        rule: "add と remove の対義語関係",
        explanation: "add（加える）⇔ remove（取り除く）は対義語です。似た対義語のペア：include（含む）⇔ exclude（除外する）、connect（つなぐ）⇔ disconnect（切り離す）、turn on（つける）⇔ turn off（切る）。",
        example: "Add some salt. / Remove the seeds. / Include everyone in the plan.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Please add your name on the list if you want to join the club.」を5回音読してください。add の /æ/ 音を強くはっきり言いましょう。",
      phraseReplacements: [
        {
          original: "Please add your name on the list.",
          instruction: "add を使って指示する文を作りましょう。",
          examples: [
            "Please add me to the email list.",
            "Can you add more details to your report?",
            "She added her signature to the document.",
          ],
        },
      ],
      dailyConversationTips: "「Can you add me to the group chat?」（グループチャットに追加してもらえますか？）はSNS時代によく使うフレーズです。",
    },
  },
  {
    id: "vb-011",
    category: "vocabulary",
    difficulty: "beginner",
    question: "I always _____ my keys. I can never find them.",
    options: [
      { id: "vb011-a", text: "remember", isCorrect: false, translation: "覚えている" },
      { id: "vb011-b", text: "find", isCorrect: false, translation: "見つける" },
      { id: "vb011-c", text: "lose", isCorrect: true, translation: "なくす" },
      { id: "vb011-d", text: "keep", isCorrect: false, translation: "保つ、取っておく" },
    ],
    explanation: "「I can never find them（いつも見つからない）」という文脈から、鍵を「なくす（lose）」という動詞が最適です。",
    hint: "「いつも見つからない」ということは、鍵を「なくして」いるのですか、「覚えて」いるのですか？",
    questionTranslation: "私はいつも鍵をなくします。見つけることができません。",
    questionKatakana: "アイ オールウェイズ ルーズ マイ キーズ。アイ キャン ネバー ファインド ゼム。",
    vocabularyItems: [
      { word: "lose", meaning: "なくす、失う", katakanaReading: "ルーズ", example: "Don't lose your passport." },
      { word: "find", meaning: "見つける", katakanaReading: "ファインド", example: "I can't find my glasses." },
      { word: "keep", meaning: "取っておく、保つ", katakanaReading: "キープ", example: "Keep your receipt." },
    ],
    grammarPoints: [
      {
        rule: "lose と miss の違い",
        explanation: "lose（なくす）は物が行方不明になること。miss（乗り遅れる/さびしく思う）は機会を逃すことや人を恋しく思うことです。「I lost my phone.」（スマホをなくした）「I missed the bus.」（バスに乗り遅れた）「I miss my family.」（家族が恋しい）",
        example: "I lost my wallet. / I missed the meeting. / She misses her hometown.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「I always lose my keys. I can never find them.」を5回音読してください。lose の /uː/ 音（ルーズ）を長く発音しましょう。",
      phraseReplacements: [
        {
          original: "I always lose my keys.",
          instruction: "lose を使って困り事を話す文を作りましょう。",
          examples: [
            "I often lose my umbrella on the train.",
            "She lost her phone at the restaurant.",
            "Don't lose the ticket or you can't get in.",
          ],
        },
      ],
      dailyConversationTips: "「I think I lost my _____.」（〜をなくしてしまったと思います）は紛失物を報告するときに使います。lost and found（落し物センター）という単語も一緒に覚えましょう。",
    },
  },
  {
    id: "vb-012",
    category: "vocabulary",
    difficulty: "beginner",
    question: "You can _____ any seat you like. The theater is empty.",
    options: [
      { id: "vb012-a", text: "choose", isCorrect: true, translation: "選ぶ" },
      { id: "vb012-b", text: "close", isCorrect: false, translation: "閉める" },
      { id: "vb012-c", text: "use", isCorrect: false, translation: "使う" },
      { id: "vb012-d", text: "save", isCorrect: false, translation: "取っておく、節約する" },
    ],
    explanation: "劇場が空いていて「any seat you like（好きな席）」と言っているので、「choose（選ぶ）」が最適です。",
    hint: "「any seat you like（好きな席）」とあります。何をしますか？",
    questionTranslation: "好きな席を選んでよいですよ。劇場は空いています。",
    questionKatakana: "ユー キャン チューズ エニー スィート ユー ライク。ザ シアター イズ エンプティー。",
    vocabularyItems: [
      { word: "choose", meaning: "選ぶ", katakanaReading: "チューズ", example: "Choose the answer you think is correct." },
      { word: "select", meaning: "選ぶ（やや丁寧）", katakanaReading: "セレクト", example: "Please select your preferred date." },
      { word: "decide", meaning: "決める", katakanaReading: "ディサイド", example: "Have you decided what to order?" },
    ],
    grammarPoints: [
      {
        rule: "choose / select / pick の違い",
        explanation: "choose（選ぶ）は最も一般的。select（選択する）はより formal で慎重に選ぶ場合。pick（選ぶ）はカジュアルな会話で使います。「Choose your answer carefully.」「She was selected for the team.」「Just pick one.」",
        example: "Choose a restaurant. / The committee selected a winner. / Just pick a color you like.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「You can choose any seat you like.」を5回音読してください。choose の /uː/ 音（チューズ）を長く発音しましょう。",
      phraseReplacements: [
        {
          original: "You can choose any seat you like.",
          instruction: "choose を使って選択の文を作りましょう。",
          examples: [
            "You can choose any topic for your essay.",
            "Please choose one of the following options.",
            "She chose the blue dress for the party.",
          ],
        },
      ],
      dailyConversationTips: "「You can choose whatever you want.」（何でも好きなものを選んでいいよ）は相手に自由を与える表現です。レストランや買い物でよく使います。",
    },
  },
  {
    id: "vb-013",
    category: "vocabulary",
    difficulty: "beginner",
    question: "The train will _____ at platform 3 in ten minutes.",
    options: [
      { id: "vb013-a", text: "leave", isCorrect: false, translation: "出発する" },
      { id: "vb013-b", text: "arrive", isCorrect: true, translation: "到着する" },
      { id: "vb013-c", text: "stop", isCorrect: false, translation: "止まる" },
      { id: "vb013-d", text: "turn", isCorrect: false, translation: "曲がる" },
    ],
    explanation: "「at platform 3（3番ホームに）」という目的地への到着を表すのは「arrive（到着する）」です。leave（出発する）は反対の動作です。",
    hint: "「platform 3（3番ホーム）に」という表現から、電車はそこに「到着」するのですか「出発」するのですか？",
    questionTranslation: "電車は10分後に3番ホームに到着します。",
    questionKatakana: "ザ トレイン ウィル アライブ アット プラットフォーム スリー イン テン ミニッツ。",
    vocabularyItems: [
      { word: "arrive", meaning: "到着する", katakanaReading: "アライブ", example: "We arrived at the hotel at noon." },
      { word: "depart / leave", meaning: "出発する", katakanaReading: "ディパート／リーブ", example: "The train departs at 8:00 a.m." },
      { word: "platform", meaning: "（駅の）ホーム", katakanaReading: "プラットフォーム", example: "The train is at platform 2." },
    ],
    grammarPoints: [
      {
        rule: "arrive at vs arrive in の使い分け",
        explanation: "arrive at：小さい場所・建物（arrive at the station, at the airport, at the hotel）。arrive in：大きい場所・都市・国（arrive in Tokyo, in Japan, in New York）。「I arrived at the station.」「We arrived in Paris.」",
        example: "She arrived at school early. / They arrived in London on Monday. / The package arrived at our office.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The train will arrive at platform 3 in ten minutes.」を5回音読してください。arrive at をつなげて発音しましょう。",
      phraseReplacements: [
        {
          original: "The train will arrive at platform 3 in ten minutes.",
          instruction: "arrive を使って到着に関する文を作りましょう。",
          examples: [
            "The guests will arrive at the hotel tomorrow morning.",
            "She arrived in New York after a long flight.",
            "What time does the bus arrive at the terminal?",
          ],
        },
      ],
      dailyConversationTips: "「What time does the train arrive?」（電車は何時に着きますか？）は交通機関を使うときに必須の質問フレーズです。",
    },
  },
  {
    id: "vb-014",
    category: "vocabulary",
    difficulty: "beginner",
    question: "The room was very _____, so we opened the window.",
    options: [
      { id: "vb014-a", text: "cold", isCorrect: false, translation: "寒い" },
      { id: "vb014-b", text: "quiet", isCorrect: false, translation: "静かな" },
      { id: "vb014-c", text: "hot", isCorrect: true, translation: "暑い、熱い" },
      { id: "vb014-d", text: "dark", isCorrect: false, translation: "暗い" },
    ],
    explanation: "窓を開けたという行動から、部屋が「hot（暑い）」だったと推測できます。暑い場合に換気のために窓を開けることは自然な行動です。",
    hint: "なぜ窓を開けたのですか？部屋の状態を考えましょう。",
    questionTranslation: "部屋がとても暑かったので、窓を開けました。",
    questionKatakana: "ザ ルーム ワズ ベリー ホット、ソウ ウィー オープンド ザ ウィンドウ。",
    vocabularyItems: [
      { word: "hot", meaning: "暑い、熱い", katakanaReading: "ホット", example: "It is very hot in August." },
      { word: "warm", meaning: "暖かい", katakanaReading: "ウォーム", example: "The spring weather is warm and pleasant." },
      { word: "cool", meaning: "涼しい", katakanaReading: "クール", example: "It's cool in the shade." },
      { word: "cold", meaning: "寒い、冷たい", katakanaReading: "コールド", example: "The water is cold." },
    ],
    grammarPoints: [
      {
        rule: "温度・気温を表す形容詞のグラデーション",
        explanation: "温度の段階：freezing（極寒）< cold（寒い）< cool（涼しい）< warm（暖かい）< hot（暑い・熱い）< boiling（灼熱）。天気を話すときは「It is + 形容詞」を使います。",
        example: "It was freezing this morning. / The coffee is too hot. / Isn't it warm today?",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The room was very hot, so we opened the window.」を5回音読してください。hot の /ɑː/ 音（ホット）をはっきり発音しましょう。",
      phraseReplacements: [
        {
          original: "The room was very hot, so we opened the window.",
          instruction: "温度に関する形容詞を使って文を作りましょう。",
          examples: [
            "It was cold outside, so she wore a coat.",
            "The soup was too hot to eat.",
            "It's warm and sunny today, perfect for a walk.",
          ],
        },
      ],
      dailyConversationTips: "「It's so hot today, isn't it?」（今日は本当に暑いですね？）は天気の雑談で使う定番フレーズです。相手への話しかけのきっかけとして使えます。",
    },
  },
  {
    id: "vb-015",
    category: "vocabulary",
    difficulty: "beginner",
    question: "She speaks very _____, so it is hard to hear her.",
    options: [
      { id: "vb015-a", text: "loudly", isCorrect: false, translation: "大きな声で" },
      { id: "vb015-b", text: "clearly", isCorrect: false, translation: "はっきりと" },
      { id: "vb015-c", text: "quickly", isCorrect: false, translation: "速く" },
      { id: "vb015-d", text: "quietly", isCorrect: true, translation: "静かに、小さな声で" },
    ],
    explanation: "「it is hard to hear her（聞こえにくい）」という結果から、彼女は「quietly（静かに・小さな声で）」話していることが分かります。loudly ならよく聞こえるはずです。",
    hint: "聞こえにくいのは声が大きいからですか、小さいからですか？",
    questionTranslation: "彼女はとても静かに話すので、声が聞こえにくいです。",
    questionKatakana: "シー スピークス ベリー クワイエットリー、ソウ イット イズ ハード トゥ ヒア ハー。",
    vocabularyItems: [
      { word: "quietly", meaning: "静かに、小さな声で", katakanaReading: "クワイエットリー", example: "Please speak more quietly in the library." },
      { word: "loudly", meaning: "大きな声で、うるさく", katakanaReading: "ラウドリー", example: "He was talking loudly on the phone." },
      { word: "clearly", meaning: "はっきりと、明確に", katakanaReading: "クリアリー", example: "Please speak clearly and slowly." },
    ],
    grammarPoints: [
      {
        rule: "形容詞から副詞への変換（-ly）",
        explanation: "多くの形容詞に -ly を付けると副詞になります：quiet→quietly, loud→loudly, clear→clearly, slow→slowly, quick→quickly, careful→carefully。動詞を修飾するときは副詞を使います。「She speaks quietly.」（動詞 speaks を修飾）",
        example: "He drives carefully. / She sings beautifully. / They worked hard. / He speaks too quickly.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She speaks very quietly, so it is hard to hear her.」を5回音読してください。quietly の4音節（qui-et-ly）を区切って発音しましょう。",
      phraseReplacements: [
        {
          original: "She speaks very quietly.",
          instruction: "話し方を表す副詞を使って文を作りましょう。",
          examples: [
            "Please speak more slowly. I can't follow you.",
            "He always speaks clearly and confidently.",
            "She read the story loudly so everyone could hear.",
          ],
        },
      ],
      dailyConversationTips: "「Could you speak more slowly?」（もっとゆっくり話してもらえますか？）は語学学習者が使う最も重要なフレーズの一つです。遠慮せず使いましょう。",
    },
  },
  {
    id: "vb-016",
    category: "vocabulary",
    difficulty: "beginner",
    question: "I feel _____ after eating that large meal.",
    options: [
      { id: "vb016-a", text: "thirsty", isCorrect: false, translation: "喉が渇いた" },
      { id: "vb016-b", text: "hungry", isCorrect: false, translation: "お腹が空いた" },
      { id: "vb016-c", text: "full", isCorrect: true, translation: "お腹がいっぱいの" },
      { id: "vb016-d", text: "light", isCorrect: false, translation: "軽い" },
    ],
    explanation: "大きな食事の後の状態として「full（お腹がいっぱい）」が最適です。hungry はお腹が空いた状態なので逆です。",
    hint: "大きな食事を食べた後、お腹はどんな状態になりますか？",
    questionTranslation: "たくさん食べた後、お腹がいっぱいです。",
    questionKatakana: "アイ フィール フル アフター イーティング ザット ラージ ミール。",
    vocabularyItems: [
      { word: "full", meaning: "お腹がいっぱいの", katakanaReading: "フル", example: "I'm full. I can't eat anymore." },
      { word: "hungry", meaning: "お腹が空いた", katakanaReading: "ハングリー", example: "Are you hungry? Let's get lunch." },
      { word: "thirsty", meaning: "喉が渇いた", katakanaReading: "サースティー", example: "I'm thirsty. Can I have some water?" },
    ],
    grammarPoints: [
      {
        rule: "空腹・満腹を表す表現",
        explanation: "「I'm hungry.」（お腹空いた）「I'm full.」（お腹いっぱい）は食事の場面で必須表現です。「I'm starving.」（激しくお腹が空いている）はより強い表現。「I couldn't eat another bite.」（もう一口も食べられない）というフレーズも覚えておきましょう。",
        example: "I'm a bit hungry. Shall we eat? / I'm stuffed. That was delicious!",
      },
    ],
    speakingPractice: {
      readingInstructions: "「I feel full after eating that large meal.」を5回音読してください。full の /ʊ/ 音（フル）を丸く発音しましょう。",
      phraseReplacements: [
        {
          original: "I feel full after eating that large meal.",
          instruction: "空腹・満腹・喉の渇きについて話す文を作りましょう。",
          examples: [
            "I'm so hungry. Can we stop for lunch?",
            "I'm thirsty. Could I have some water, please?",
            "I'm full. The meal was absolutely delicious!",
          ],
        },
      ],
      dailyConversationTips: "食事の後は「I'm so full. That was delicious!」（すごくお腹いっぱい。美味しかった！）と言うと相手も喜びます。日本語の「お腹いっぱいです」がそのまま使えます。",
    },
  },
  {
    id: "vb-017",
    category: "vocabulary",
    difficulty: "beginner",
    question: "The library is _____ the park and the school.",
    options: [
      { id: "vb017-a", text: "behind", isCorrect: false, translation: "〜の後ろに" },
      { id: "vb017-b", text: "between", isCorrect: true, translation: "〜の間に（2つの物の）" },
      { id: "vb017-c", text: "above", isCorrect: false, translation: "〜の上に（位置）" },
      { id: "vb017-d", text: "near", isCorrect: false, translation: "〜の近くに" },
    ],
    explanation: "「between A and B」は「A と B の間に」という意味で、2つのものの間を表します。the park と the school という2つの場所の間に図書館があるので between が正解です。",
    hint: "「the park and the school」という2つの場所。2つのものの「間」を表す前置詞は？",
    questionTranslation: "図書館は公園と学校の間にあります。",
    questionKatakana: "ザ ライブラリー イズ ビトゥウィーン ザ パーク アンド ザ スクール。",
    vocabularyItems: [
      { word: "between", meaning: "〜の間（2つ）", katakanaReading: "ビトゥウィーン", example: "The store is between the bank and the pharmacy." },
      { word: "among", meaning: "〜の間（3つ以上）", katakanaReading: "アマング", example: "She is popular among her classmates." },
      { word: "next to / beside", meaning: "〜の隣に", katakanaReading: "ネクスト トゥ／ビサイド", example: "The café is next to the bookstore." },
    ],
    grammarPoints: [
      {
        rule: "between と among の違い",
        explanation: "between：2つのものの間（between A and B）。among：3つ以上のものの中（among the students）。「between three things」も使えますが、特定の2者間を強調するときは between、多数の中では among を使います。",
        example: "The book is between the lamp and the vase. / She was standing among a crowd of people.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The library is between the park and the school.」を5回音読してください。between の /ɪ/ 音に注意して発音しましょう。",
      phraseReplacements: [
        {
          original: "The library is between the park and the school.",
          instruction: "between を使って場所を説明しましょう。",
          examples: [
            "The café is between the bookstore and the pharmacy.",
            "She sat between her mother and her sister.",
            "The small town is located between two mountains.",
          ],
        },
      ],
      dailyConversationTips: "道を教えるときに「It's between the post office and the bank.」（郵便局と銀行の間にあります）というフレーズはとても実用的です。",
    },
  },
  {
    id: "vb-018",
    category: "vocabulary",
    difficulty: "beginner",
    question: "She was _____ after her long run, so she drank two bottles of water.",
    options: [
      { id: "vb018-a", text: "full", isCorrect: false, translation: "お腹がいっぱい" },
      { id: "vb018-b", text: "bored", isCorrect: false, translation: "退屈な" },
      { id: "vb018-c", text: "thirsty", isCorrect: true, translation: "喉が渇いた" },
      { id: "vb018-d", text: "cold", isCorrect: false, translation: "寒い" },
    ],
    explanation: "長い距離を走った後に水を2本飲むという行動から、「thirsty（喉が渇いた）」が最適です。運動後に喉が渇くのは自然なことです。",
    hint: "長距離を走った後、水を大量に飲んだ理由は何ですか？",
    questionTranslation: "彼女は長い距離を走った後、喉が渇いたので水を2本飲みました。",
    questionKatakana: "シー ワズ サースティー アフター ハー ロング ラン、ソウ シー ドランク トゥー ボトルズ オブ ウォーター。",
    vocabularyItems: [
      { word: "thirsty", meaning: "喉が渇いた", katakanaReading: "サースティー", example: "I'm really thirsty after the game." },
      { word: "run", meaning: "走ること（名詞）", katakanaReading: "ラン", example: "She goes for a run every morning." },
      { word: "dehydrated", meaning: "脱水状態の（上級表現）", katakanaReading: "ディハイドレイテッド", example: "Drink water to avoid dehydration." },
    ],
    grammarPoints: [
      {
        rule: "身体の状態を表す形容詞",
        explanation: "身体の状態を表す形容詞を「be / feel + 形容詞」で使います。tired（疲れた）、hungry（空腹）、thirsty（喉が渇いた）、sleepy（眠い）、sick（具合が悪い）、sore（筋肉痛など痛い）など。",
        example: "I feel tired. Are you hungry? She was very thirsty after the hike.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She was thirsty after her long run, so she drank two bottles of water.」を5回音読してください。thirsty の /θ/ 音に注意しましょう。",
      phraseReplacements: [
        {
          original: "She was thirsty after her long run.",
          instruction: "運動後の体の状態を話す文を作りましょう。",
          examples: [
            "I was exhausted after the hiking trip.",
            "He was thirsty and hungry after the soccer game.",
            "We felt tired but happy after the marathon.",
          ],
        },
      ],
      dailyConversationTips: "「Can I get some water? I'm really thirsty.」はレストランやカフェで使える実用的なフレーズです。水をお願いするときにすぐ使えます。",
    },
  },
  {
    id: "vb-019",
    category: "vocabulary",
    difficulty: "beginner",
    question: "Please _____ the door when you leave the room.",
    options: [
      { id: "vb019-a", text: "open", isCorrect: false, translation: "開ける" },
      { id: "vb019-b", text: "break", isCorrect: false, translation: "壊す" },
      { id: "vb019-c", text: "close", isCorrect: true, translation: "閉める" },
      { id: "vb019-d", text: "wash", isCorrect: false, translation: "洗う" },
    ],
    explanation: "「when you leave the room（部屋を出るとき）」というのは退室時の指示です。この文脈では「close（閉める）」が最も自然です。",
    hint: "部屋を出るときにドアをどうしますか？",
    questionTranslation: "部屋を出るときはドアを閉めてください。",
    questionKatakana: "プリーズ クローズ ザ ドア ウェン ユー リーブ ザ ルーム。",
    vocabularyItems: [
      { word: "close / shut", meaning: "閉める", katakanaReading: "クローズ／シャット", example: "Please close the window." },
      { word: "open", meaning: "開ける", katakanaReading: "オープン", example: "Open the door for me, please." },
      { word: "lock", meaning: "鍵をかける", katakanaReading: "ロック", example: "Lock the door before you go to bed." },
    ],
    grammarPoints: [
      {
        rule: "close と shut の違い",
        explanation: "close と shut はほぼ同じ意味（閉める）ですが、shut は突然・勢いよく閉めるニュアンスがあります。「Close the door gently.」「She shut the book.」また「lock」（鍵をかける）は close より一歩進んだ動作です。",
        example: "Please close the windows. / She shut the door behind her. / Don't forget to lock up when you leave.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Please close the door when you leave the room.」を5回音読してください。close の /oʊ/ 音（クローズ）を長く発音しましょう。",
      phraseReplacements: [
        {
          original: "Please close the door when you leave the room.",
          instruction: "open/close を使って指示の文を作りましょう。",
          examples: [
            "Please close your textbooks and listen.",
            "Could you open the window? It's hot in here.",
            "Close your eyes and take a deep breath.",
          ],
        },
      ],
      dailyConversationTips: "「Mind if I close the window?」（窓を閉めてもいいですか？）は許可を求める丁寧な表現です。「Mind if I...?」は日常会話でよく使う慣用表現です。",
    },
  },
  {
    id: "vb-020",
    category: "vocabulary",
    difficulty: "beginner",
    question: "I need to _____ studying early today because the exam is tomorrow.",
    options: [
      { id: "vb020-a", text: "stop", isCorrect: false, translation: "やめる" },
      { id: "vb020-b", text: "begin", isCorrect: true, translation: "始める" },
      { id: "vb020-c", text: "forget", isCorrect: false, translation: "忘れる" },
      { id: "vb020-d", text: "delay", isCorrect: false, translation: "遅らせる" },
    ],
    explanation: "「because the exam is tomorrow（明日試験があるから）」という理由から、早めに勉強を「始める（begin）」ことが自然な行動です。stop（やめる）やdelay（遅らせる）は逆の方向です。",
    hint: "明日試験があるから、今日早めにどうすべきですか？",
    questionTranslation: "明日試験があるので、今日は早くから勉強を始める必要があります。",
    questionKatakana: "アイ ニード トゥ ビギン スタディング アーリー トゥデイ ビコーズ ザ イグザム イズ トゥモロウ。",
    vocabularyItems: [
      { word: "begin / start", meaning: "始める", katakanaReading: "ビギン／スタート", example: "Let's begin the presentation." },
      { word: "early", meaning: "早く、早い時間に", katakanaReading: "アーリー", example: "She always arrives early." },
      { word: "prepare", meaning: "準備する", katakanaReading: "プリペア", example: "I need to prepare for the meeting." },
    ],
    grammarPoints: [
      {
        rule: "begin + 動名詞（-ing）",
        explanation: "「begin + -ing」または「begin + to 不定詞」はどちらも使えます（意味の差はほぼない）。「begin studying」「begin to study」は同じ意味。ただし begin / start の後ろに -ing が来るときは「状態が継続中に始まる動作」には to 不定詞を好む場合があります。",
        example: "She began studying at 8 p.m. / He started to feel nervous. / I began to understand the problem.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「I need to begin studying early today because the exam is tomorrow.」を5回音読してください。begin studying をつなげて発音しましょう。",
      phraseReplacements: [
        {
          original: "I need to begin studying early today because the exam is tomorrow.",
          instruction: "begin/start を使って早めの行動について話しましょう。",
          examples: [
            "I should start packing now because we leave early tomorrow.",
            "She began preparing for the interview a week in advance.",
            "It's never too early to begin learning a new skill.",
          ],
        },
      ],
      dailyConversationTips: "「I should get started on this.」（これに取り掛からないといけない）は勉強や仕事を始めるときのカジュアルな表現です。",
    },
  },
];
