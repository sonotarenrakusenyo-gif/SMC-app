import { QuizQuestion } from "./quizzes";

export const grammarBeginnerQuizzes: QuizQuestion[] = [
  {
    id: "gb-001",
    category: "grammar",
    difficulty: "beginner",
    question: "She _____ to school every day.",
    options: [
      { id: "gb001-a", text: "go", isCorrect: false, translation: "行く（原形）" },
      { id: "gb001-b", text: "goes", isCorrect: true, translation: "行く（三人称単数現在）" },
      { id: "gb001-c", text: "going", isCorrect: false, translation: "行く（現在分詞）" },
      { id: "gb001-d", text: "went", isCorrect: false, translation: "行った（過去形）" },
    ],
    explanation: "主語が三人称単数（she / he / it）の現在形では、動詞に -s/-es を付けます。「She goes」が正解です。",
    hint: "主語は she（彼女）です。三人称単数の現在形はどう変わりますか？",
    questionTranslation: "彼女は毎日学校へ行きます。",
    questionKatakana: "シー ゴウズ トゥ スクール エブリ デイ。",
    vocabularyItems: [
      { word: "every day", meaning: "毎日", katakanaReading: "エブリ デイ", example: "I drink coffee every day." },
      { word: "school", meaning: "学校", katakanaReading: "スクール", example: "She likes school." },
    ],
    grammarPoints: [
      {
        rule: "三人称単数現在形（-s/-es）",
        explanation: "主語が he / she / it のとき、動詞の語尾に -s または -es を付けます。go → goes、watch → watches のように変化します。",
        example: "He works at a hospital. / She teaches English.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She goes to school every day.」を5回音読してください。goes の最後の /z/ 音に注意しましょう。",
      phraseReplacements: [
        {
          original: "She goes to school every day.",
          instruction: "主語を変えて同じ文を作ってみましょう。",
          examples: [
            "He goes to the gym every day.",
            "My sister goes to work every day.",
            "Tom goes to the library every day.",
          ],
        },
      ],
      dailyConversationTips: "日常会話で習慣を話すときは現在形を使います。「What do you do every day?」と聞かれたら「I go to school.」と答えましょう。",
    },
  },
  {
    id: "gb-002",
    category: "grammar",
    difficulty: "beginner",
    question: "They _____ watching TV right now.",
    options: [
      { id: "gb002-a", text: "is", isCorrect: false, translation: "〜している（三人称単数）" },
      { id: "gb002-b", text: "are", isCorrect: true, translation: "〜している（複数）" },
      { id: "gb002-c", text: "am", isCorrect: false, translation: "〜している（一人称単数）" },
      { id: "gb002-d", text: "be", isCorrect: false, translation: "be 動詞の原形" },
    ],
    explanation: "現在進行形は「be 動詞 + 動詞の -ing 形」で表します。主語が they（複数）なので be 動詞は are を使います。",
    hint: "「right now」（今まさに）は進行形のサインです。they の be 動詞は何ですか？",
    questionTranslation: "彼らは今テレビを見ています。",
    questionKatakana: "ゼイ アー ウォッチング ティービー ライト ナウ。",
    vocabularyItems: [
      { word: "right now", meaning: "今まさに、ちょうど今", katakanaReading: "ライト ナウ", example: "She is sleeping right now." },
      { word: "watch TV", meaning: "テレビを見る", katakanaReading: "ウォッチ ティービー", example: "I love watching TV." },
    ],
    grammarPoints: [
      {
        rule: "現在進行形（am/is/are + -ing）",
        explanation: "今この瞬間に起きている動作を表すときは現在進行形を使います。I → am、he/she/it → is、you/we/they → are を使います。",
        example: "I am eating lunch. / He is studying. / They are playing soccer.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「They are watching TV right now.」を5回音読してください。are の /r/ 音を意識して発音しましょう。",
      phraseReplacements: [
        {
          original: "They are watching TV right now.",
          instruction: "動作の部分を変えて文を作ってみましょう。",
          examples: [
            "They are playing soccer right now.",
            "They are eating dinner right now.",
            "They are studying English right now.",
          ],
        },
      ],
      dailyConversationTips: "「What are you doing?」（今何してるの？）と聞かれたら「I am studying.」のように答えましょう。日常会話でよく使われる表現です。",
    },
  },
  {
    id: "gb-003",
    category: "grammar",
    difficulty: "beginner",
    question: "Yesterday, I _____ to the supermarket.",
    options: [
      { id: "gb003-a", text: "go", isCorrect: false, translation: "行く（現在形）" },
      { id: "gb003-b", text: "goes", isCorrect: false, translation: "行く（三人称単数現在）" },
      { id: "gb003-c", text: "went", isCorrect: true, translation: "行った（過去形）" },
      { id: "gb003-d", text: "gone", isCorrect: false, translation: "行った（過去分詞）" },
    ],
    explanation: "「Yesterday（昨日）」は過去のサインです。go の過去形は went（不規則変化）です。",
    hint: "「Yesterday」があれば過去形を使います。go の過去形は何ですか？",
    questionTranslation: "昨日、私はスーパーマーケットへ行きました。",
    questionKatakana: "イエスタデイ、アイ ウェント トゥ ザ スーパーマーケット。",
    vocabularyItems: [
      { word: "yesterday", meaning: "昨日", katakanaReading: "イエスタデイ", example: "Yesterday was Monday." },
      { word: "supermarket", meaning: "スーパーマーケット", katakanaReading: "スーパーマーケット", example: "I buy food at the supermarket." },
    ],
    grammarPoints: [
      {
        rule: "過去形（不規則動詞）",
        explanation: "go → went のように、不規則に変化する動詞があります。他にも have → had、come → came、see → saw などがあります。過去を表す語句（yesterday, last night, ago など）が目印です。",
        example: "I went to school. / She came home late. / They saw a movie.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Yesterday, I went to the supermarket.」を5回音読してください。went の /w/ 音を明確に発音しましょう。",
      phraseReplacements: [
        {
          original: "Yesterday, I went to the supermarket.",
          instruction: "場所を変えて文を作ってみましょう。",
          examples: [
            "Yesterday, I went to the library.",
            "Yesterday, I went to the park.",
            "Yesterday, I went to my friend's house.",
          ],
        },
      ],
      dailyConversationTips: "過去のことを話すときは時間を表す言葉（yesterday, last week, two days ago など）を文頭か文末に置くと伝わりやすくなります。",
    },
  },
  {
    id: "gb-004",
    category: "grammar",
    difficulty: "beginner",
    question: "He _____ speak three languages.",
    options: [
      { id: "gb004-a", text: "can", isCorrect: true, translation: "〜できる（能力）" },
      { id: "gb004-b", text: "cans", isCorrect: false, translation: "（誤った形）" },
      { id: "gb004-c", text: "could to", isCorrect: false, translation: "（誤った形）" },
      { id: "gb004-d", text: "is able", isCorrect: false, translation: "〜できる（不完全な形）" },
    ],
    explanation: "「can」は能力・可能を表す助動詞で、主語が何であっても形が変わりません（can のままで cans にはなりません）。can の後ろは動詞の原形です。",
    hint: "能力（〜できる）を表す助動詞は何ですか？助動詞の後ろは動詞の原形です。",
    questionTranslation: "彼は3つの言語を話すことができます。",
    questionKatakana: "ヒー キャン スピーク スリー ランゲージズ。",
    vocabularyItems: [
      { word: "language", meaning: "言語、言葉", katakanaReading: "ランゲージ", example: "English is a global language." },
      { word: "speak", meaning: "話す", katakanaReading: "スピーク", example: "She can speak French." },
    ],
    grammarPoints: [
      {
        rule: "助動詞 can（能力・可能）",
        explanation: "can は「〜できる」という能力や可能を表します。助動詞の特徴として①主語に関係なく形が変わらない ②直後に動詞の原形がくる という2点を覚えましょう。",
        example: "I can swim. / She can drive. / They can cook well.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「He can speak three languages.」を5回音読してください。can の /æ/ の音をはっきり発音しましょう。",
      phraseReplacements: [
        {
          original: "He can speak three languages.",
          instruction: "can を使って自分の能力について文を作ってみましょう。",
          examples: [
            "I can play the guitar.",
            "She can run very fast.",
            "They can cook Japanese food.",
          ],
        },
      ],
      dailyConversationTips: "「Can you...?」は能力を尋ねるだけでなく、丁寧なお願いにも使えます。「Can you help me?」（手伝ってもらえますか？）のように使いましょう。",
    },
  },
  {
    id: "gb-005",
    category: "grammar",
    difficulty: "beginner",
    question: "She is _____ engineer.",
    options: [
      { id: "gb005-a", text: "a", isCorrect: false, translation: "不定冠詞（子音の前）" },
      { id: "gb005-b", text: "an", isCorrect: true, translation: "不定冠詞（母音の前）" },
      { id: "gb005-c", text: "the", isCorrect: false, translation: "定冠詞" },
      { id: "gb005-d", text: "—（なし）", isCorrect: false, translation: "冠詞なし" },
    ],
    explanation: "不定冠詞は母音（a, e, i, o, u）の音で始まる単語の前では an を使います。engineer は /e/ の音で始まるので an を使います。",
    hint: "engineer はどんな音で始まりますか？母音の前は a と an のどちらを使いますか？",
    questionTranslation: "彼女はエンジニアです。",
    questionKatakana: "シー イズ アン エンジニア。",
    vocabularyItems: [
      { word: "engineer", meaning: "エンジニア、技術者", katakanaReading: "エンジニア", example: "My father is an engineer." },
      { word: "article", meaning: "冠詞", katakanaReading: "アーティクル", example: "Use 'an' before a vowel sound." },
    ],
    grammarPoints: [
      {
        rule: "不定冠詞 a / an の使い分け",
        explanation: "a は子音の音で始まる単語の前（a book, a car）、an は母音の音（a, e, i, o, u）で始まる単語の前（an apple, an engineer, an hour）に使います。スペルではなく発音で判断します。",
        example: "a university（/j/ で始まる音）/ an umbrella（/ʌ/ で始まる音）",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She is an engineer.」を5回音読してください。「an engineer」をつなげて「アネンジニア」のように発音するのが自然です。",
      phraseReplacements: [
        {
          original: "She is an engineer.",
          instruction: "a か an を使って職業を紹介する文を作りましょう。",
          examples: [
            "He is a teacher.",
            "She is an actress.",
            "My brother is an artist.",
          ],
        },
      ],
      dailyConversationTips: "自己紹介で職業を言うときは「I am a/an _____.」を使います。「I am a student.」や「I am an English teacher.」のように練習しましょう。",
    },
  },
  {
    id: "gb-006",
    category: "grammar",
    difficulty: "beginner",
    question: "The book is _____ the table.",
    options: [
      { id: "gb006-a", text: "in", isCorrect: false, translation: "〜の中に" },
      { id: "gb006-b", text: "on", isCorrect: true, translation: "〜の上に（接触）" },
      { id: "gb006-c", text: "under", isCorrect: false, translation: "〜の下に" },
      { id: "gb006-d", text: "at", isCorrect: false, translation: "〜のところに" },
    ],
    explanation: "「on」は物が表面に乗っている（接触している）状態を表します。本がテーブルの上に置かれているので on が正解です。",
    hint: "本はテーブルの上に乗っています。「接触している」場合の前置詞は？",
    questionTranslation: "本はテーブルの上にあります。",
    questionKatakana: "ザ ブック イズ オン ザ テイブル。",
    vocabularyItems: [
      { word: "on", meaning: "〜の上に（接触）", katakanaReading: "オン", example: "The cup is on the desk." },
      { word: "in", meaning: "〜の中に", katakanaReading: "イン", example: "The cat is in the box." },
      { word: "under", meaning: "〜の下に", katakanaReading: "アンダー", example: "The shoes are under the bed." },
    ],
    grammarPoints: [
      {
        rule: "場所の前置詞 in / on / at / under",
        explanation: "in（囲まれた空間の中）、on（表面に接触）、at（特定の場所・地点）、under（下）。「本がテーブルの上にある」は on、「水がボトルの中にある」は in を使います。",
        example: "in a box / on the wall / at the station / under the chair",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The book is on the table.」を5回音読してください。on と table の /t/ をはっきり発音しましょう。",
      phraseReplacements: [
        {
          original: "The book is on the table.",
          instruction: "物の場所を説明する文を作ってみましょう。",
          examples: [
            "The keys are on the counter.",
            "My phone is in my bag.",
            "The cat is under the sofa.",
          ],
        },
      ],
      dailyConversationTips: "物の場所を尋ねるときは「Where is my ___?」（私の〜はどこ？）、答えるときは「It's on/in/under the _____.」を使いましょう。",
    },
  },
  {
    id: "gb-007",
    category: "grammar",
    difficulty: "beginner",
    question: "It _____ rain tomorrow, so bring an umbrella.",
    options: [
      { id: "gb007-a", text: "will", isCorrect: true, translation: "〜するだろう（未来）" },
      { id: "gb007-b", text: "is", isCorrect: false, translation: "〜である（現在）" },
      { id: "gb007-c", text: "was", isCorrect: false, translation: "〜だった（過去）" },
      { id: "gb007-d", text: "has", isCorrect: false, translation: "〜を持っている（現在）" },
    ],
    explanation: "「will」は未来の予測や意志を表します。「tomorrow（明日）」が未来のサインです。will の後ろは動詞の原形を使います。",
    hint: "「tomorrow」は未来を示しています。未来の予測には何を使いますか？",
    questionTranslation: "明日は雨が降るでしょう。だから傘を持ってきてください。",
    questionKatakana: "イット ウィル レイン トゥモロウ、ソウ ブリング アン アンブレラ。",
    vocabularyItems: [
      { word: "tomorrow", meaning: "明日", katakanaReading: "トゥモロウ", example: "I have a test tomorrow." },
      { word: "umbrella", meaning: "傘", katakanaReading: "アンブレラ", example: "Don't forget your umbrella." },
      { word: "bring", meaning: "持ってくる", katakanaReading: "ブリング", example: "Please bring your textbook." },
    ],
    grammarPoints: [
      {
        rule: "未来形 will + 動詞の原形",
        explanation: "will は予測・意志・約束などを表す未来形です。「tomorrow, next week, soon」などの語句とセットで使われることが多いです。will の後ろは必ず動詞の原形です。",
        example: "I will call you later. / It will snow tomorrow. / She will come to the party.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「It will rain tomorrow, so bring an umbrella.」を5回音読してください。will rain をつなげて「ウィルレイン」のように発音しましょう。",
      phraseReplacements: [
        {
          original: "It will rain tomorrow.",
          instruction: "明日の天気予報を英語で言ってみましょう。",
          examples: [
            "It will be sunny tomorrow.",
            "It will snow tomorrow.",
            "It will be very hot tomorrow.",
          ],
        },
      ],
      dailyConversationTips: "天気の話は会話の出発点として最適です。「Do you think it will rain?」（雨が降ると思う？）「I think it will be nice weather.」のように使いましょう。",
    },
  },
  {
    id: "gb-008",
    category: "grammar",
    difficulty: "beginner",
    question: "There _____ two cats in the garden.",
    options: [
      { id: "gb008-a", text: "is", isCorrect: false, translation: "〜がある（単数）" },
      { id: "gb008-b", text: "are", isCorrect: true, translation: "〜がある（複数）" },
      { id: "gb008-c", text: "has", isCorrect: false, translation: "〜を持っている" },
      { id: "gb008-d", text: "have", isCorrect: false, translation: "〜を持っている（複数主語）" },
    ],
    explanation: "「There is / There are」は「〜がある・いる」という存在を表します。後ろの名詞が複数（two cats）なので There are を使います。",
    hint: "cats は複数形です。「There is」と「There are」の使い分けは？",
    questionTranslation: "庭に猫が2匹います。",
    questionKatakana: "ゼア アー トゥー キャッツ イン ザ ガーデン。",
    vocabularyItems: [
      { word: "garden", meaning: "庭、庭園", katakanaReading: "ガーデン", example: "My mother works in the garden." },
      { word: "there is/are", meaning: "〜がある・いる（存在）", katakanaReading: "ゼア イズ／アー", example: "There is a park near my house." },
    ],
    grammarPoints: [
      {
        rule: "There is / There are（存在の表現）",
        explanation: "「〜がある・いる」という存在を表すときは「There is（単数）/ There are（複数）」を使います。There の後ろの名詞の数に合わせて is か are を選びます。",
        example: "There is a cat on the roof. / There are many students in the library.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「There are two cats in the garden.」を5回音読してください。There are をつなげて「ゼアアー」のように発音しましょう。",
      phraseReplacements: [
        {
          original: "There are two cats in the garden.",
          instruction: "身の回りの物について there is / there are を使って文を作りましょう。",
          examples: [
            "There are three chairs in the room.",
            "There is a TV on the wall.",
            "There are many books on the shelf.",
          ],
        },
      ],
      dailyConversationTips: "部屋の説明や場所の説明には「There is/are」がとても便利です。初対面の人に「There are many nice restaurants near here.」のように使うと自然です。",
    },
  },
  {
    id: "gb-009",
    category: "grammar",
    difficulty: "beginner",
    question: "I have three _____ in my family.",
    options: [
      { id: "gb009-a", text: "childs", isCorrect: false, translation: "（誤った複数形）" },
      { id: "gb009-b", text: "childrens", isCorrect: false, translation: "（誤った複数形）" },
      { id: "gb009-c", text: "children", isCorrect: true, translation: "子どもたち（正しい複数形）" },
      { id: "gb009-d", text: "child", isCorrect: false, translation: "子ども（単数形）" },
    ],
    explanation: "child（子ども）の複数形は children です。-s を付けない不規則な複数形の代表例です。他に man → men、woman → women などがあります。",
    hint: "child の複数形は規則的ではありません。不規則複数形を覚えましょう。",
    questionTranslation: "私の家族には子どもが3人います。",
    questionKatakana: "アイ ハブ スリー チルドレン イン マイ ファミリー。",
    vocabularyItems: [
      { word: "child / children", meaning: "子ども / 子どもたち", katakanaReading: "チャイルド／チルドレン", example: "How many children do you have?" },
      { word: "family", meaning: "家族", katakanaReading: "ファミリー", example: "My family is important to me." },
    ],
    grammarPoints: [
      {
        rule: "不規則複数形",
        explanation: "英語には -s を付けない不規則な複数形があります。代表的なもの：child→children, man→men, woman→women, person→people, tooth→teeth, foot→feet。日常会話でよく使う単語が多いので必ず覚えましょう。",
        example: "There are many children in the park. / Two men are waiting outside.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「I have three children in my family.」を5回音読してください。children の /tʃ/ 音（チ）を正確に発音しましょう。",
      phraseReplacements: [
        {
          original: "I have three children in my family.",
          instruction: "家族について紹介する文を作ってみましょう。",
          examples: [
            "I have two brothers and one sister.",
            "There are four people in my family.",
            "My family has one child.",
          ],
        },
      ],
      dailyConversationTips: "「Do you have any siblings?」（兄弟はいますか？）「How many people are in your family?」など、家族についての会話は自己紹介で頻繁に出てきます。",
    },
  },
  {
    id: "gb-010",
    category: "grammar",
    difficulty: "beginner",
    question: "This bag is _____ than that one.",
    options: [
      { id: "gb010-a", text: "heavy", isCorrect: false, translation: "重い（原級）" },
      { id: "gb010-b", text: "more heavy", isCorrect: false, translation: "（誤った比較級）" },
      { id: "gb010-c", text: "heavier", isCorrect: true, translation: "より重い（比較級）" },
      { id: "gb010-d", text: "heaviest", isCorrect: false, translation: "最も重い（最上級）" },
    ],
    explanation: "2つのものを比べるときは比較級（形容詞 + -er または more + 形容詞）を使います。heavy は -y を -ier に変えて heavier になります。",
    hint: "「than」があれば比較級を使います。heavy の比較級はどう作りますか？",
    questionTranslation: "このバッグはあちらのバッグより重いです。",
    questionKatakana: "ディス バッグ イズ ヘビアー ザン ザット ワン。",
    vocabularyItems: [
      { word: "heavy / heavier", meaning: "重い / より重い", katakanaReading: "ヘビー／ヘビアー", example: "This suitcase is heavier than mine." },
      { word: "than", meaning: "〜より（比較）", katakanaReading: "ザン", example: "She is taller than her brother." },
    ],
    grammarPoints: [
      {
        rule: "比較級（-er / more）",
        explanation: "2つを比べるときは比較級 + than を使います。①短い形容詞：-er を付ける（tall→taller, old→older）②-y で終わる：-ier（happy→happier, heavy→heavier）③長い形容詞：more + 形容詞（more expensive）。",
        example: "This car is faster than that one. / She is more intelligent than him.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「This bag is heavier than that one.」を5回音読してください。heavier の /i/ と /ər/ の音に注意しましょう。",
      phraseReplacements: [
        {
          original: "This bag is heavier than that one.",
          instruction: "身の回りの物を比べる文を作ってみましょう。",
          examples: [
            "This book is thicker than that one.",
            "My phone is newer than yours.",
            "Today is hotter than yesterday.",
          ],
        },
      ],
      dailyConversationTips: "ショッピングで「Is this one cheaper than that?」（こっちのほうが安いですか？）と使えます。比較級は日常会話で非常によく使います。",
    },
  },
  {
    id: "gb-011",
    category: "grammar",
    difficulty: "beginner",
    question: "_____ you like coffee or tea?",
    options: [
      { id: "gb011-a", text: "Are", isCorrect: false, translation: "（be動詞の疑問文）" },
      { id: "gb011-b", text: "Do", isCorrect: true, translation: "（一般動詞の疑問文を作る）" },
      { id: "gb011-c", text: "Have", isCorrect: false, translation: "（現在完了の疑問文）" },
      { id: "gb011-d", text: "Is", isCorrect: false, translation: "（三人称単数の be 動詞）" },
    ],
    explanation: "一般動詞（like, go, eat など）の疑問文は、文頭に Do（主語が I/you/we/they の場合）または Does（主語が he/she/it の場合）を置きます。ここでは you が主語なので Do を使います。",
    hint: "like は一般動詞です。you が主語の疑問文には Do を使います。",
    questionTranslation: "あなたはコーヒーと紅茶、どちらが好きですか？",
    questionKatakana: "ドゥ ユー ライク コーヒー オア ティー？",
    vocabularyItems: [
      { word: "or", meaning: "または、あるいは", katakanaReading: "オア", example: "Do you want cake or pie?" },
      { word: "prefer", meaning: "〜の方を好む", katakanaReading: "プリファー", example: "I prefer tea to coffee." },
    ],
    grammarPoints: [
      {
        rule: "一般動詞の疑問文（Do/Does + 主語 + 動詞原形?）",
        explanation: "一般動詞の疑問文は do/does を文頭に置きます。主語が I/you/we/they → Do、主語が he/she/it → Does を使い、動詞は原形に戻します。",
        example: "Do you like music? / Does she play tennis? / Do they live here?",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Do you like coffee or tea?」を5回音読してください。or の前で少し上がるイントネーションを意識しましょう。",
      phraseReplacements: [
        {
          original: "Do you like coffee or tea?",
          instruction: "Do you like を使って好みを聞く文を作りましょう。",
          examples: [
            "Do you like Japanese food or Italian food?",
            "Do you like summer or winter?",
            "Do you like reading or watching movies?",
          ],
        },
      ],
      dailyConversationTips: "初対面の会話では相手の好みを聞くことが多いです。「Do you like...?」は最も基本的な質問表現なのでしっかり練習しましょう。",
    },
  },
  {
    id: "gb-012",
    category: "grammar",
    difficulty: "beginner",
    question: "I was tired, _____ I went to bed early.",
    options: [
      { id: "gb012-a", text: "but", isCorrect: false, translation: "しかし（逆接）" },
      { id: "gb012-b", text: "or", isCorrect: false, translation: "または（選択）" },
      { id: "gb012-c", text: "so", isCorrect: true, translation: "だから（結果）" },
      { id: "gb012-d", text: "because", isCorrect: false, translation: "なぜなら（理由）" },
    ],
    explanation: "「so」は「だから・そのため」という結果・結論を表す接続詞です。「疲れていた → だから早く寝た」という因果関係を表すには so が適切です。because は理由を述べる際に使います（I went to bed early because I was tired.）。",
    hint: "疲れていた「結果」として早く寝た。「結果・結論」を表す接続詞は？",
    questionTranslation: "私は疲れていたので、早く寝ました。",
    questionKatakana: "アイ ワズ タイアード、ソウ アイ ウェント トゥ ベッド アーリー。",
    vocabularyItems: [
      { word: "tired", meaning: "疲れた", katakanaReading: "タイアード", example: "I feel tired after work." },
      { word: "go to bed", meaning: "寝る、就寝する", katakanaReading: "ゴウ トゥ ベッド", example: "I go to bed at 10 p.m." },
      { word: "early", meaning: "早く", katakanaReading: "アーリー", example: "She wakes up early every morning." },
    ],
    grammarPoints: [
      {
        rule: "等位接続詞 and / but / or / so",
        explanation: "and（そして）、but（しかし）、or（または）、so（だから）の4つは等位接続詞で、2つの文を対等につなぎます。so は原因→結果の順、because は結果→原因の逆の順で使います。",
        example: "It was cold, so I wore a coat. / I wore a coat because it was cold.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「I was tired, so I went to bed early.」を5回音読してください。so の後ろで少し間を置くと自然に聞こえます。",
      phraseReplacements: [
        {
          original: "I was tired, so I went to bed early.",
          instruction: "so を使って原因と結果の文を作ってみましょう。",
          examples: [
            "It was raining, so I stayed inside.",
            "I was hungry, so I made a sandwich.",
            "The test was hard, so I studied all night.",
          ],
        },
      ],
      dailyConversationTips: "「I'm sorry, but...」（申し訳ないけど…）「I'd love to, but...」（ぜひそうしたいけど…）のように but を使った断り方も便利です。",
    },
  },
  {
    id: "gb-013",
    category: "grammar",
    difficulty: "beginner",
    question: "Please give the book to _____.",
    options: [
      { id: "gb013-a", text: "I", isCorrect: false, translation: "私は（主語）" },
      { id: "gb013-b", text: "me", isCorrect: true, translation: "私に／私を（目的語）" },
      { id: "gb013-c", text: "my", isCorrect: false, translation: "私の（所有格）" },
      { id: "gb013-d", text: "mine", isCorrect: false, translation: "私のもの（所有代名詞）" },
    ],
    explanation: "前置詞（to）の後ろや動詞の目的語には目的格（me, him, her, us, them）を使います。「I」は主語の場合にのみ使います。",
    hint: "「to」の後ろには主格（I）ではなく目的格を使います。",
    questionTranslation: "その本を私にください。",
    questionKatakana: "プリーズ ギブ ザ ブック トゥ ミー。",
    vocabularyItems: [
      { word: "give", meaning: "あげる、渡す", katakanaReading: "ギブ", example: "Give me a call later." },
      { word: "object pronoun", meaning: "目的格代名詞", katakanaReading: "オブジェクト プロナウン", example: "Tell him the news." },
    ],
    grammarPoints: [
      {
        rule: "人称代名詞の格（主格 vs 目的格）",
        explanation: "I/you/he/she/we/they は主語として使う主格。me/you/him/her/us/them は動詞や前置詞の後ろで使う目的格。「Give I the book」は誤りで「Give me the book」が正解です。",
        example: "She loves him. / Please call us. / I saw them at school.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Please give the book to me.」を5回音読してください。give と me のつながり（give me）を練習しましょう。",
      phraseReplacements: [
        {
          original: "Please give the book to me.",
          instruction: "目的語（me/him/her/them）を使ったお願いの文を作りましょう。",
          examples: [
            "Please send the email to her.",
            "Could you explain it to me?",
            "Please show them your passport.",
          ],
        },
      ],
      dailyConversationTips: "「Can you show me...?」（〜を見せてくれますか？）「Tell me more.」（もっと教えて）など、me を使ったフレーズは会話でとても頻繁に出てきます。",
    },
  },
  {
    id: "gb-014",
    category: "grammar",
    difficulty: "beginner",
    question: "This is _____ bag. She left it here.",
    options: [
      { id: "gb014-a", text: "she", isCorrect: false, translation: "彼女は（主格）" },
      { id: "gb014-b", text: "her", isCorrect: true, translation: "彼女の（所有格）" },
      { id: "gb014-c", text: "hers", isCorrect: false, translation: "彼女のもの（所有代名詞）" },
      { id: "gb014-d", text: "him", isCorrect: false, translation: "彼を／彼に（目的格）" },
    ],
    explanation: "名詞（bag）の前で「〜の」という所有を表すには所有形容詞（my, your, his, her, our, their）を使います。「彼女の」は her です。",
    hint: "bag という名詞の前に置いて「彼女の」を表すには何を使いますか？",
    questionTranslation: "これは彼女のバッグです。彼女はここに置いていきました。",
    questionKatakana: "ディス イズ ハー バッグ。シー レフト イット ヒア。",
    vocabularyItems: [
      { word: "possessive adjective", meaning: "所有形容詞", katakanaReading: "ポゼシブ アジェクティブ", example: "This is my book." },
      { word: "leave", meaning: "置いていく、去る", katakanaReading: "リーブ", example: "She left her umbrella on the bus." },
    ],
    grammarPoints: [
      {
        rule: "所有形容詞（my / your / his / her / our / their）",
        explanation: "所有形容詞は名詞の前に置いて「〜の」を表します。her bag（彼女のバッグ）、his phone（彼の電話）のように使います。her と hers を混同しないよう注意：her bag（形容詞）vs This is hers.（代名詞）",
        example: "This is my house. / Is that your car? / Their children are cute.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「This is her bag.」を5回音読してください。her の /h/ 音をはっきり発音しましょう。",
      phraseReplacements: [
        {
          original: "This is her bag.",
          instruction: "所有形容詞を使って所有を表す文を作りましょう。",
          examples: [
            "This is my notebook.",
            "That is his phone.",
            "These are our seats.",
          ],
        },
      ],
      dailyConversationTips: "忘れ物をした人に「Is this your umbrella?」（これ、あなたの傘ですか？）と声をかけるときに使えます。",
    },
  },
  {
    id: "gb-015",
    category: "grammar",
    difficulty: "beginner",
    question: "This is the _____ movie I have ever seen.",
    options: [
      { id: "gb015-a", text: "good", isCorrect: false, translation: "良い（原級）" },
      { id: "gb015-b", text: "better", isCorrect: false, translation: "より良い（比較級）" },
      { id: "gb015-c", text: "best", isCorrect: true, translation: "最も良い（最上級）" },
      { id: "gb015-d", text: "more good", isCorrect: false, translation: "（誤った形）" },
    ],
    explanation: "「the + 最上級」は「最も〜」という意味で、3つ以上を比べるときに使います。「I have ever seen」（今まで見た中で）と組み合わせてよく使われます。good の最上級は best です（不規則変化）。",
    hint: "「ever seen（今まで見た中で）」とあります。「最も〜」は最上級を使います。good の最上級は？",
    questionTranslation: "これは私が今まで見た中で最高の映画です。",
    questionKatakana: "ディス イズ ザ ベスト ムービー アイ ハブ エバー スィーン。",
    vocabularyItems: [
      { word: "ever", meaning: "今までに、かつて", katakanaReading: "エバー", example: "Have you ever been to Europe?" },
      { word: "good / better / best", meaning: "良い / より良い / 最も良い", katakanaReading: "グッド／ベター／ベスト", example: "This is the best restaurant in town." },
    ],
    grammarPoints: [
      {
        rule: "最上級（the + -est / the most）",
        explanation: "3つ以上を比べて「最も〜」というときは最上級を使います。short→shortest、happy→happiest（-y→-iest）、expensive→most expensive。不規則変化：good→best、bad→worst、many→most。必ず the を付けます。",
        example: "She is the tallest in the class. / This is the most beautiful park I've ever visited.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「This is the best movie I have ever seen.」を5回音読してください。the best をつなげて「ザベスト」のように発音しましょう。",
      phraseReplacements: [
        {
          original: "This is the best movie I have ever seen.",
          instruction: "最上級を使って感想を表す文を作りましょう。",
          examples: [
            "This is the worst weather I have ever experienced.",
            "She is the kindest person I have ever met.",
            "That was the most delicious meal I have ever had.",
          ],
        },
      ],
      dailyConversationTips: "「This is the best _____ I've ever had!」はレストランや旅先で感激を伝える便利なフレーズです。食べ物や体験について使ってみましょう。",
    },
  },
  {
    id: "gb-016",
    category: "grammar",
    difficulty: "beginner",
    question: "We _____ going to visit our grandparents next week.",
    options: [
      { id: "gb016-a", text: "is", isCorrect: false, translation: "（単数 be 動詞）" },
      { id: "gb016-b", text: "are", isCorrect: true, translation: "〜するつもり（複数 be 動詞）" },
      { id: "gb016-c", text: "was", isCorrect: false, translation: "（過去の be 動詞）" },
      { id: "gb016-d", text: "will", isCorrect: false, translation: "（will を be going to と重複不可）" },
    ],
    explanation: "「be going to + 動詞の原形」は計画・予定を表す未来形です。主語が we（複数）なので be 動詞は are を使います。",
    hint: "「be going to」の be は主語に合わせて変化します。we の be 動詞は？",
    questionTranslation: "私たちは来週、祖父母を訪ねる予定です。",
    questionKatakana: "ウィー アー ゴウイング トゥ ビジット アワー グランドペアレンツ ネクスト ウィーク。",
    vocabularyItems: [
      { word: "visit", meaning: "訪ねる、訪問する", katakanaReading: "ビジット", example: "We will visit the museum tomorrow." },
      { word: "grandparents", meaning: "祖父母", katakanaReading: "グランドペアレンツ", example: "I love spending time with my grandparents." },
    ],
    grammarPoints: [
      {
        rule: "be going to + 動詞原形（計画・予定）",
        explanation: "be going to は「〜するつもりだ・〜する予定だ」という計画を表します。will が突発的な決定を表すのに対し、be going to は事前に決まっていた計画に使います。be は主語によって am/is/are に変化します。",
        example: "I am going to study tonight. / She is going to travel to Japan. / They are going to get married.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「We are going to visit our grandparents next week.」を5回音読してください。going to を速く言うと「ガナ」に聞こえます。",
      phraseReplacements: [
        {
          original: "We are going to visit our grandparents next week.",
          instruction: "be going to を使って週末の予定を話しましょう。",
          examples: [
            "I am going to study at the library this weekend.",
            "She is going to take a cooking class next month.",
            "They are going to move to a new apartment.",
          ],
        },
      ],
      dailyConversationTips: "「What are you going to do this weekend?」（今週末何する予定？）という質問は友達との会話でよく使います。be going to か will で答えましょう。",
    },
  },
  {
    id: "gb-017",
    category: "grammar",
    difficulty: "beginner",
    question: "I need _____ information about the class.",
    options: [
      { id: "gb017-a", text: "a", isCorrect: false, translation: "（不定冠詞：不可算名詞には使えない）" },
      { id: "gb017-b", text: "an", isCorrect: false, translation: "（不定冠詞：不可算名詞には使えない）" },
      { id: "gb017-c", text: "some", isCorrect: true, translation: "いくらかの（不可算・可算名詞に使う）" },
      { id: "gb017-d", text: "many", isCorrect: false, translation: "たくさんの（可算名詞のみ）" },
    ],
    explanation: "information（情報）は不可算名詞で、a/an や数字と一緒に使えません。不可算名詞には some（いくらかの）や any（否定・疑問文で）、much（多くの）などを使います。",
    hint: "information は数えられない名詞（不可算名詞）です。a や an は使えません。",
    questionTranslation: "私はそのクラスについて何か情報が必要です。",
    questionKatakana: "アイ ニード サム インフォメーション アバウト ザ クラス。",
    vocabularyItems: [
      { word: "information", meaning: "情報（不可算名詞）", katakanaReading: "インフォメーション", example: "Can you give me some information?" },
      { word: "some", meaning: "いくらかの（肯定文）", katakanaReading: "サム", example: "I need some help." },
    ],
    grammarPoints: [
      {
        rule: "不可算名詞（Uncountable Nouns）",
        explanation: "不可算名詞は数えられないため a/an を使えず、複数形もありません。代表例：water, money, time, advice, information, homework, knowledge, news。数量は some, any, much, a lot of で表します。",
        example: "I need some advice. / Do you have any money? / There is a lot of information online.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「I need some information about the class.」を5回音読してください。information の /ɪnfərˈmeɪʃən/ という強勢（3音節目）に注意しましょう。",
      phraseReplacements: [
        {
          original: "I need some information about the class.",
          instruction: "some を使って必要なものを表す文を作りましょう。",
          examples: [
            "I need some advice about my career.",
            "She needs some time to think.",
            "Can you give me some feedback on my essay?",
          ],
        },
      ],
      dailyConversationTips: "受付や窓口で「I'd like some information about...」（〜について情報がほしいのですが）と言うと丁寧に聞けます。窓口での場面で役立つフレーズです。",
    },
  },
  {
    id: "gb-018",
    category: "grammar",
    difficulty: "beginner",
    question: "Have you ever _____ sushi?",
    options: [
      { id: "gb018-a", text: "eat", isCorrect: false, translation: "食べる（原形）" },
      { id: "gb018-b", text: "ate", isCorrect: false, translation: "食べた（過去形）" },
      { id: "gb018-c", text: "eaten", isCorrect: true, translation: "食べたことがある（過去分詞）" },
      { id: "gb018-d", text: "eating", isCorrect: false, translation: "食べている（現在分詞）" },
    ],
    explanation: "「Have you ever + 過去分詞?」は「〜したことがありますか？」という経験を尋ねる現在完了形です。eat の過去分詞は eaten（不規則変化）です。",
    hint: "「Have you ever」の後ろには動詞の過去分詞を使います。eat の過去分詞は？",
    questionTranslation: "あなたは今までに寿司を食べたことがありますか？",
    questionKatakana: "ハブ ユー エバー イートゥン スーシー？",
    vocabularyItems: [
      { word: "ever", meaning: "今までに（疑問文・否定文）", katakanaReading: "エバー", example: "Have you ever been to Paris?" },
      { word: "eat / ate / eaten", meaning: "食べる（原形/過去形/過去分詞）", katakanaReading: "イート／エイト／イートゥン", example: "I have eaten at that restaurant before." },
    ],
    grammarPoints: [
      {
        rule: "現在完了形（経験）Have you ever + 過去分詞？",
        explanation: "「Have you ever + 過去分詞？」で「〜したことがありますか？」という経験を尋ねます。答えは「Yes, I have.」または「No, I have never + 過去分詞.」です。",
        example: "Have you ever tried Thai food? — Yes, I have. / Have you ever seen snow? — No, I never have.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Have you ever eaten sushi?」を5回音読してください。ever eaten をつなげて「エバーイートゥン」のように発音しましょう。",
      phraseReplacements: [
        {
          original: "Have you ever eaten sushi?",
          instruction: "Have you ever を使って経験を尋ねる文を作りましょう。",
          examples: [
            "Have you ever visited Japan?",
            "Have you ever ridden a horse?",
            "Have you ever tried bungee jumping?",
          ],
        },
      ],
      dailyConversationTips: "「Have you ever been to...?」（〜に行ったことありますか？）は旅行の話をするときに便利です。相手の経験を聞いて会話を広げましょう。",
    },
  },
  {
    id: "gb-019",
    category: "grammar",
    difficulty: "beginner",
    question: "I like tea, _____ I don't like coffee.",
    options: [
      { id: "gb019-a", text: "and", isCorrect: false, translation: "そして（追加）" },
      { id: "gb019-b", text: "but", isCorrect: true, translation: "しかし（対比・逆接）" },
      { id: "gb019-c", text: "so", isCorrect: false, translation: "だから（結果）" },
      { id: "gb019-d", text: "because", isCorrect: false, translation: "なぜなら（理由）" },
    ],
    explanation: "「but」は対比・逆接を表す接続詞です。「お茶が好き ← 対比 → コーヒーは好きじゃない」という反対の内容をつなぐので but が適切です。",
    hint: "お茶が好き「でも」コーヒーは好きじゃない。反対の内容をつなぐ接続詞は？",
    questionTranslation: "私はお茶が好きですが、コーヒーは好きではありません。",
    questionKatakana: "アイ ライク ティー、バット アイ ドント ライク コーヒー。",
    vocabularyItems: [
      { word: "but", meaning: "しかし、でも（逆接）", katakanaReading: "バット", example: "I want to go, but I'm busy." },
      { word: "however", meaning: "しかしながら（文頭）", katakanaReading: "ハウエバー", example: "I like tea. However, I don't like coffee." },
    ],
    grammarPoints: [
      {
        rule: "逆接の接続詞 but",
        explanation: "but（しかし）は前の内容と反対・対比の内容をつなぐ接続詞です。文の中で使います（A, but B）。文頭で使う逆接の接続詞は however（しかしながら）です。",
        example: "He is smart, but he is lazy. / She wanted to come, but she was sick.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「I like tea, but I don't like coffee.」を5回音読してください。but の前に少し間をとると自然に聞こえます。",
      phraseReplacements: [
        {
          original: "I like tea, but I don't like coffee.",
          instruction: "but を使って好みの対比を表す文を作りましょう。",
          examples: [
            "I like summer, but I don't like the heat.",
            "She is friendly, but she is sometimes forgetful.",
            "He works hard, but he doesn't earn much money.",
          ],
        },
      ],
      dailyConversationTips: "意見を言うときに「I agree with you, but...」（同意しますが…）と but を使うと反対意見を柔らかく述べることができます。",
    },
  },
  {
    id: "gb-020",
    category: "grammar",
    difficulty: "beginner",
    question: "She _____ her homework before dinner every day.",
    options: [
      { id: "gb020-a", text: "finish", isCorrect: false, translation: "終わらせる（三人称単数以外の現在）" },
      { id: "gb020-b", text: "finishes", isCorrect: true, translation: "終わらせる（三人称単数現在）" },
      { id: "gb020-c", text: "finished", isCorrect: false, translation: "終わらせた（過去形）" },
      { id: "gb020-d", text: "is finishing", isCorrect: false, translation: "終わらせている（現在進行形）" },
    ],
    explanation: "「every day（毎日）」は繰り返しの習慣を表すので現在形を使います。主語が she（三人称単数）なので finish に -es を付けて finishes となります（-sh で終わる動詞は -es）。",
    hint: "「every day」は習慣を表します。she が主語なので動詞はどう変化しますか？",
    questionTranslation: "彼女は毎日夕食前に宿題を終わらせます。",
    questionKatakana: "シー フィニシズ ハー ホームワーク ビフォア ディナー エブリ デイ。",
    vocabularyItems: [
      { word: "finish", meaning: "終わらせる、完了する", katakanaReading: "フィニッシュ", example: "Did you finish your project?" },
      { word: "before", meaning: "〜の前に", katakanaReading: "ビフォア", example: "Wash your hands before eating." },
      { word: "homework", meaning: "宿題", katakanaReading: "ホームワーク", example: "I always do my homework after school." },
    ],
    grammarPoints: [
      {
        rule: "三人称単数現在形の -es（-sh/-ch/-o で終わる動詞）",
        explanation: "動詞が -sh, -ch, -x, -o, -ss で終わるときは -es を付けます。finish→finishes, watch→watches, do→does, go→goes, fix→fixes。every day, usually, always などの副詞が目印です。",
        example: "She watches TV every night. / He does his homework early. / She goes to the gym on weekends.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She finishes her homework before dinner every day.」を5回音読してください。finishes の /ɪz/ の音に注意しましょう。",
      phraseReplacements: [
        {
          original: "She finishes her homework before dinner every day.",
          instruction: "毎日の習慣について三人称単数を使って文を作りましょう。",
          examples: [
            "He brushes his teeth before going to bed.",
            "My sister watches the news every morning.",
            "The teacher finishes class at 3 p.m.",
          ],
        },
      ],
      dailyConversationTips: "「What does she usually do after school?」のように、第三者の習慣を聞くときに三人称単数形を使います。does と動詞の両方に注意しましょう。",
    },
  },
];
