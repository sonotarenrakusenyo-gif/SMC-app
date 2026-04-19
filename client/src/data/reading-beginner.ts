import { QuizQuestion } from "./quizzes";

export const readingBeginnerQuizzes: QuizQuestion[] = [
  {
    id: "rb-001",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Maria wakes up at 7:00 every morning. She eats breakfast and then takes a shower. After that, she walks to school. Classes start at 8:30.'\n\nWhat does Maria do after breakfast?",
    options: [
      { id: "rb001-a", text: "She goes to school immediately", isCorrect: false, translation: "すぐに学校へ行く" },
      { id: "rb001-b", text: "She takes a shower", isCorrect: true, translation: "シャワーを浴びる" },
      { id: "rb001-c", text: "She watches TV", isCorrect: false, translation: "テレビを見る" },
      { id: "rb001-d", text: "She reads a book", isCorrect: false, translation: "本を読む" },
    ],
    explanation: "パッセージによると、マリアは朝食の後（after breakfast）シャワーを浴びます（takes a shower）。その後（after that）学校へ歩いていきます。順序に注意して読むことが大切です。",
    hint: "「After breakfast」の直後に何が来るか確認しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nマリアは毎朝7時に起きます。朝食を食べてからシャワーを浴びます。その後、学校へ歩いていきます。授業は8時30分に始まります。\n\n【問題文の和訳】\nマリアは朝食の後に何をしますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nマリア ウェイクス アップ アット セブン オクロック エブリー モーニング。シー イーツ ブレックファスト アンド ゼン テイクス ア シャワー。アフター ザット、シー ウォークス トゥ スクール。クラシズ スタート アット エイト サーティー。\n\n【問題文のカタカナ読み】\nワット ダズ マリア ドゥ アフター ブレックファスト？",
    vocabularyItems: [
      { word: "wake up", meaning: "起きる、目が覚める", katakanaReading: "ウェイク アップ", example: "I wake up at 6 every morning." },
      { word: "take a shower", meaning: "シャワーを浴びる", katakanaReading: "テイク ア シャワー", example: "She takes a shower before bed." },
      { word: "walk to school", meaning: "歩いて学校へ行く", katakanaReading: "ウォーク トゥ スクール", example: "He walks to school every day." },
    ],
    grammarPoints: [
      {
        rule: "時間の順序を表す接続詞・副詞",
        explanation: "「and then（そして次に）」「after that（その後）」「after + 名詞（〜の後）」は順序を示す表現です。読解問題では、この順序の表現に注目して内容を整理しましょう。",
        example: "She ate dinner and then watched TV. / After that, she went to bed.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Maria wakes up at 7:00 every morning. She eats breakfast and then takes a shower.」を5回音読してください。and then のリンキングに注意しましょう。",
      phraseReplacements: [
        {
          original: "She eats breakfast and then takes a shower.",
          instruction: "自分の朝のルーティンを説明しましょう。",
          examples: [
            "I wake up at 6:30 and then make coffee.",
            "He checks his phone and then gets dressed.",
            "She exercises and then takes a shower.",
          ],
        },
      ],
      dailyConversationTips: "「What's your morning routine?」（朝のルーティンは何ですか？）と聞かれたら、and then や after that を使って順番に説明しましょう。",
    },
  },
  {
    id: "rb-002",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Today is sunny and warm. Tom wants to play outside. He asks his mother for permission. His mother says yes, but she tells him to be home before dinner.'\n\nWhat time must Tom be home?",
    options: [
      { id: "rb002-a", text: "Before lunch", isCorrect: false, translation: "昼食前" },
      { id: "rb002-b", text: "After dinner", isCorrect: false, translation: "夕食後" },
      { id: "rb002-c", text: "Before dinner", isCorrect: true, translation: "夕食前" },
      { id: "rb002-d", text: "At noon", isCorrect: false, translation: "正午に" },
    ],
    explanation: "パッセージの最後に「she tells him to be home before dinner（夕食前に帰るよう言った）」とあります。dinner（夕食）の前（before）に帰宅しなければなりません。",
    hint: "お母さんがトムに言った条件を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n今日は晴れて暖かいです。トムは外で遊びたいと思っています。彼はお母さんに許可を求めます。お母さんはいいよと言いますが、夕食の前に帰るように言います。\n\n【問題文の和訳】\nトムは何時までに帰宅しなければなりませんか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nトゥデイ イズ サニー アンド ウォーム。トム ウォンツ トゥ プレイ アウトサイド。ヒー アスクス ヒズ マザー フォー パーミッション。ヒズ マザー セイズ イエス、バット シー テルズ ヒム トゥ ビー ホーム ビフォア ディナー。\n\n【問題文のカタカナ読み】\nワット タイム マスト トム ビー ホーム？",
    vocabularyItems: [
      { word: "sunny", meaning: "晴れた", katakanaReading: "サニー", example: "It's a sunny day today." },
      { word: "permission", meaning: "許可", katakanaReading: "パーミッション", example: "You need permission to leave early." },
      { word: "before", meaning: "〜の前に", katakanaReading: "ビフォア", example: "Wash your hands before eating." },
    ],
    grammarPoints: [
      {
        rule: "条件・制限を表す「but」の用法",
        explanation: "「but（しかし・ただし）」は前の内容に条件や制限を加えるときに使います。「She says yes, but she tells him to be home before dinner.」→ 許可は出るが、条件（夕食前に帰宅）がある。",
        example: "You can go out, but be careful. / I'll help you, but it will take time.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「His mother says yes, but she tells him to be home before dinner.」を5回音読してください。but の前後の内容の対比を意識しましょう。",
      phraseReplacements: [
        {
          original: "She says yes, but tells him to be home before dinner.",
          instruction: "but を使って許可と条件を伝える文を作りましょう。",
          examples: [
            "You can borrow my bike, but please return it by evening.",
            "I'll come to the party, but I can't stay long.",
            "She agreed to help, but only if she had time.",
          ],
        },
      ],
      dailyConversationTips: "「You can do it, but...」（〜してもいいけど、〜）は日常会話で許可と条件を同時に伝えるときに使います。",
    },
  },
  {
    id: "rb-003",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'The supermarket has many different foods. There are fruits, vegetables, meat, and bread. Everything is organized in different aisles. Most people shop there every week.'\n\nHow often do most people shop at the supermarket?",
    options: [
      { id: "rb003-a", text: "Every day", isCorrect: false, translation: "毎日" },
      { id: "rb003-b", text: "Every month", isCorrect: false, translation: "毎月" },
      { id: "rb003-c", text: "Every week", isCorrect: true, translation: "毎週" },
      { id: "rb003-d", text: "Twice a week", isCorrect: false, translation: "週に2回" },
    ],
    explanation: "パッセージの最後に「Most people shop there every week（ほとんどの人は毎週そこで買い物をする）」とあります。every week（毎週）が正解です。",
    hint: "パッセージの最後の文を確認しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nスーパーマーケットには様々な食品があります。果物、野菜、肉、そしてパンがあります。すべてが異なる通路に整理されています。ほとんどの人は毎週そこで買い物をします。\n\n【問題文の和訳】\nほとんどの人はどのくらいの頻度でスーパーマーケットで買い物をしますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ スーパーマーケット ハズ メニー ディファレント フーズ。ゼア アー フルーツ、ベジタブルズ、ミート、アンド ブレッド。エブリシング イズ オーガナイズド イン ディファレント アイルズ。モースト ピープル ショップ ゼア エブリー ウィーク。\n\n【問題文のカタカナ読み】\nハウ オフン ドゥ モースト ピープル ショップ アット ザ スーパーマーケット？",
    vocabularyItems: [
      { word: "organized", meaning: "整理された、整頓された", katakanaReading: "オーガナイズド", example: "The office is well organized." },
      { word: "aisle", meaning: "（スーパーなどの）通路", katakanaReading: "アイル", example: "The cereal is in aisle 3." },
      { word: "every week", meaning: "毎週", katakanaReading: "エブリー ウィーク", example: "She calls her parents every week." },
    ],
    grammarPoints: [
      {
        rule: "頻度を表す表現（Frequency Expressions）",
        explanation: "頻度を表す表現：every day（毎日）、every week（毎週）、every month（毎月）、once a week（週に1回）、twice a day（1日2回）。これらは文末または主語と動詞の間に置きます。",
        example: "I exercise every day. / She visits twice a month. / He checks email once a week.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Most people shop there every week.」を5回音読してください。every week のリズムを意識しましょう。",
      phraseReplacements: [
        {
          original: "Most people shop there every week.",
          instruction: "頻度を表す表現を使って習慣を話しましょう。",
          examples: [
            "I go to the gym every other day.",
            "She reads a book once a week.",
            "They eat out twice a month.",
          ],
        },
      ],
      dailyConversationTips: "「How often do you...?」（どのくらいの頻度で〜しますか？）は習慣を聞く基本的な表現です。every week / twice a month などで答えましょう。",
    },
  },
  {
    id: "rb-004",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Lisa has a cat named Mochi. Mochi is white and very playful. Every morning, Mochi wakes Lisa up by sitting on her face. Lisa laughs, but she also gets a little annoyed sometimes.'\n\nHow does Mochi wake Lisa up?",
    options: [
      { id: "rb004-a", text: "By making a loud noise", isCorrect: false, translation: "大きな音を出すことで" },
      { id: "rb004-b", text: "By sitting on her face", isCorrect: true, translation: "顔の上に座ることで" },
      { id: "rb004-c", text: "By jumping on the bed", isCorrect: false, translation: "ベッドの上にジャンプすることで" },
      { id: "rb004-d", text: "By scratching the door", isCorrect: false, translation: "ドアを引っ掻くことで" },
    ],
    explanation: "パッセージに「Mochi wakes Lisa up by sitting on her face（モチはリサの顔の上に座ることでリサを起こす）」と明記されています。「by + -ing」は手段・方法を表します。",
    hint: "「by」の後ろに注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nリサはモチという名前の猫を飼っています。モチは白くてとても遊び好きです。毎朝、モチはリサの顔の上に座ることでリサを起こします。リサは笑いますが、時々少しイライラすることもあります。\n\n【問題文の和訳】\nモチはどのようにしてリサを起こしますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nリサ ハズ ア キャット ネイムド モチ。モチ イズ ホワイト アンド ベリー プレイフル。エブリー モーニング、モチ ウェイクス リサ アップ バイ スィッティング オン ハー フェイス。リサ ラフス、バット シー オールソウ ゲッツ ア リトル アノイド サムタイムズ。\n\n【問題文のカタカナ読み】\nハウ ダズ モチ ウェイク リサ アップ？",
    vocabularyItems: [
      { word: "playful", meaning: "遊び好きな、茶目っ気のある", katakanaReading: "プレイフル", example: "Kittens are always very playful." },
      { word: "wake up", meaning: "起こす（他動詞）", katakanaReading: "ウェイク アップ", example: "Please wake me up at 7." },
      { word: "annoyed", meaning: "イライラした、うんざりした", katakanaReading: "アノイド", example: "She was annoyed by the noise." },
    ],
    grammarPoints: [
      {
        rule: "by + -ing（手段・方法）",
        explanation: "「by + -ing」は「〜することによって」という手段や方法を表します。「She learned English by watching movies.」（映画を見ることで英語を学んだ）「He saved money by cooking at home.」",
        example: "She improved her skills by practicing daily. / He woke up by hearing the alarm. / They communicate by sending emails.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Mochi wakes Lisa up by sitting on her face.」を5回音読してください。by sitting on をつなげて発音しましょう。",
      phraseReplacements: [
        {
          original: "Mochi wakes Lisa up by sitting on her face.",
          instruction: "by + -ing を使って方法を説明しましょう。",
          examples: [
            "She keeps in touch with friends by texting every day.",
            "He learned the song by listening to it many times.",
            "I got better at English by speaking with native speakers.",
          ],
        },
      ],
      dailyConversationTips: "「How did you do that?」（どうやってそれをしたの？）と聞かれたら「By + -ing」で答えましょう。「By studying hard!」（一生懸命勉強することで！）など。",
    },
  },
  {
    id: "rb-005",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Kevin takes the bus to school every day. The bus stop is near his house. The ride takes about 20 minutes. Kevin usually listens to music on the bus.'\n\nHow long does Kevin's bus ride take?",
    options: [
      { id: "rb005-a", text: "10 minutes", isCorrect: false, translation: "10分" },
      { id: "rb005-b", text: "About 30 minutes", isCorrect: false, translation: "約30分" },
      { id: "rb005-c", text: "About 20 minutes", isCorrect: true, translation: "約20分" },
      { id: "rb005-d", text: "1 hour", isCorrect: false, translation: "1時間" },
    ],
    explanation: "パッセージに「The ride takes about 20 minutes（乗車時間は約20分かかる）」と書かれています。about は「約」という意味です。",
    hint: "The ride takes... に注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nケビンは毎日バスで学校に通っています。バス停は彼の家の近くにあります。乗車時間は約20分かかります。ケビンはいつもバスの中で音楽を聴いています。\n\n【問題文の和訳】\nケビンのバスの乗車時間はどのくらいかかりますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nケビン テイクス ザ バス トゥ スクール エブリー デイ。ザ バス ストップ イズ ニア ヒズ ハウス。ザ ライド テイクス アバウト トゥウェンティー ミニッツ。ケビン ユージュアリー リスンズ トゥ ミュージック オン ザ バス。\n\n【問題文のカタカナ読み】\nハウ ロング ダズ ケビンズ バス ライド テイク？",
    vocabularyItems: [
      { word: "bus stop", meaning: "バス停", katakanaReading: "バス ストップ", example: "I'll meet you at the bus stop." },
      { word: "ride", meaning: "乗車（名詞）", katakanaReading: "ライド", example: "The train ride was very comfortable." },
      { word: "usually", meaning: "たいてい、普通は", katakanaReading: "ユージュアリー", example: "I usually eat breakfast at home." },
    ],
    grammarPoints: [
      {
        rule: "「It takes + 時間」の使い方",
        explanation: "「It takes + 時間 + to 不定詞」または「The ride/trip takes + 時間」は移動や作業にかかる時間を表します。「It takes 20 minutes to get there.」「The drive takes about an hour.」",
        example: "It takes 10 minutes to walk to school. / The flight takes about 12 hours. / How long does it take?",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The ride takes about 20 minutes.」を5回音読してください。takes about をつなげて発音しましょう。",
      phraseReplacements: [
        {
          original: "The ride takes about 20 minutes.",
          instruction: "移動時間を表す文を作りましょう。",
          examples: [
            "It takes about 30 minutes to get to the airport.",
            "The walk from here to the station takes 5 minutes.",
            "The flight takes approximately 11 hours.",
          ],
        },
      ],
      dailyConversationTips: "「How long does it take to get there?」（そこまでどのくらいかかりますか？）はとてもよく使われる質問です。「About 20 minutes by train.」のように答えましょう。",
    },
  },
  {
    id: "rb-006",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Today is Anna's birthday. Her friends made a cake for her. They put ten candles on it. Anna made a wish and then blew out all the candles.'\n\nWhat did Anna do after making a wish?",
    options: [
      { id: "rb006-a", text: "She ate the cake", isCorrect: false, translation: "ケーキを食べた" },
      { id: "rb006-b", text: "She blew out the candles", isCorrect: true, translation: "ろうそくを吹き消した" },
      { id: "rb006-c", text: "She opened her presents", isCorrect: false, translation: "プレゼントを開けた" },
      { id: "rb006-d", text: "She thanked her friends", isCorrect: false, translation: "友達にお礼を言った" },
    ],
    explanation: "「Anna made a wish and then blew out all the candles（アナは願い事をして、それからすべてのろうそくを吹き消した）」と書かれています。made a wish の後の行動は blow out the candles です。",
    hint: "「and then」の後に何が来ますか？",
    questionTranslation: "【パッセージ全体の和訳】\n今日はアナの誕生日です。友達が彼女のためにケーキを作りました。ケーキには10本のろうそくが立てられています。アナは願い事をして、それからすべてのろうそくを吹き消しました。\n\n【問題文の和訳】\nアナは願い事をした後に何をしましたか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nトゥデイ イズ アナズ バースデイ。ハー フレンズ メイド ア ケイク フォー ハー。ゼイ プット テン キャンドルズ オン イット。アナ メイド ア ウィッシュ アンド ゼン ブロウ アウト オール ザ キャンドルズ。\n\n【問題文のカタカナ読み】\nワット ディッド アナ ドゥ アフター メイキング ア ウィッシュ？",
    vocabularyItems: [
      { word: "candle", meaning: "ろうそく", katakanaReading: "キャンドル", example: "She lit a candle on the table." },
      { word: "make a wish", meaning: "願い事をする", katakanaReading: "メイク ア ウィッシュ", example: "Close your eyes and make a wish!" },
      { word: "blow out", meaning: "吹き消す", katakanaReading: "ブロウ アウト", example: "Blow out the candles on your cake." },
    ],
    grammarPoints: [
      {
        rule: "and then を使った行動の順序",
        explanation: "「and then」は2つの行動の順序を示します。「She made a wish and then blew out the candles.」wish → blow out という順番です。読解では「and then」の前後の行動を正確に把握することが重要です。",
        example: "He waved goodbye and then left. / She smiled and then answered the question.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Anna made a wish and then blew out all the candles.」を5回音読してください。blew out の /uː/ 音を長く発音しましょう。",
      phraseReplacements: [
        {
          original: "Anna made a wish and then blew out all the candles.",
          instruction: "誕生日パーティーの場面を説明する文を作りましょう。",
          examples: [
            "Everyone sang 'Happy Birthday' and then ate the cake.",
            "She opened her presents and then thanked her friends.",
            "We took photos and then went out for dinner.",
          ],
        },
      ],
      dailyConversationTips: "「Happy Birthday!」に対して「Thank you so much!」はもちろん、「I made a wish!」（願い事をしたよ！）と言うと会話が広がります。",
    },
  },
  {
    id: "rb-007",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'The school cafeteria serves lunch from 11:30 to 1:00. Students can choose from three different meals. There is also a salad bar with fresh vegetables. The food is healthy and not very expensive.'\n\nWhat can students find at the salad bar?",
    options: [
      { id: "rb007-a", text: "Three different meals", isCorrect: false, translation: "3種類の食事" },
      { id: "rb007-b", text: "Hot soup", isCorrect: false, translation: "温かいスープ" },
      { id: "rb007-c", text: "Fresh vegetables", isCorrect: true, translation: "新鮮な野菜" },
      { id: "rb007-d", text: "Desserts and cakes", isCorrect: false, translation: "デザートとケーキ" },
    ],
    explanation: "「There is also a salad bar with fresh vegetables（新鮮な野菜を揃えたサラダバーもある）」と書かれています。サラダバーにあるのは fresh vegetables（新鮮な野菜）です。",
    hint: "「salad bar」について書かれている文を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n学校の食堂は11時30分から1時まで昼食を提供しています。学生は3種類の食事から選ぶことができます。新鮮な野菜を揃えたサラダバーもあります。食事は健康的でそれほど高くありません。\n\n【問題文の和訳】\n学生はサラダバーで何を見つけることができますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ スクール カフェテリア サーブズ ランチ フロム イレブン サーティー トゥ ワン オクロック。スチューデンツ キャン チューズ フロム スリー ディファレント ミールズ。ゼア イズ オールソウ ア サラッド バー ウィズ フレッシュ ベジタブルズ。ザ フード イズ ヘルシー アンド ノット ベリー エクスペンシブ。\n\n【問題文のカタカナ読み】\nワット キャン スチューデンツ ファインド アット ザ サラッド バー？",
    vocabularyItems: [
      { word: "cafeteria", meaning: "食堂、カフェテリア", katakanaReading: "カフェテリア", example: "The cafeteria opens at 7 a.m." },
      { word: "serve", meaning: "提供する、出す", katakanaReading: "サーブ", example: "The restaurant serves breakfast all day." },
      { word: "fresh", meaning: "新鮮な", katakanaReading: "フレッシュ", example: "I love fresh fruit in the morning." },
    ],
    grammarPoints: [
      {
        rule: "There is / There are の使い方",
        explanation: "「There is + 単数名詞（〜がある）」「There are + 複数名詞（〜がある）」は存在を表す構文です。「There is a salad bar.」「There are three meals.」読解では情報の存在を確認するときに使います。",
        example: "There is a library on campus. / There are many choices. / Is there a gym here?",
      },
    ],
    speakingPractice: {
      readingInstructions: "「There is also a salad bar with fresh vegetables.」を5回音読してください。also の位置と意味（また、さらに）に注目しましょう。",
      phraseReplacements: [
        {
          original: "There is also a salad bar with fresh vegetables.",
          instruction: "There is/are を使って場所にあるものを説明しましょう。",
          examples: [
            "There is a vending machine near the entrance.",
            "There are many study rooms in the library.",
            "There is also a quiet area for reading.",
          ],
        },
      ],
      dailyConversationTips: "「Is there a...?」（〜はありますか？）はどこかに何かがあるか尋ねるときに使う最も基本的な表現です。",
    },
  },
  {
    id: "rb-008",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Soccer is David's favorite sport. He practices every Tuesday and Thursday after school. His team has ten players. They want to win the city championship this year.'\n\nHow many players are on David's team?",
    options: [
      { id: "rb008-a", text: "Eight", isCorrect: false, translation: "8人" },
      { id: "rb008-b", text: "Eleven", isCorrect: false, translation: "11人" },
      { id: "rb008-c", text: "Ten", isCorrect: true, translation: "10人" },
      { id: "rb008-d", text: "Twelve", isCorrect: false, translation: "12人" },
    ],
    explanation: "パッセージに「His team has ten players（彼のチームには10人の選手がいる）」と明記されています。数字の細部を正確に読み取る練習をしましょう。",
    hint: "チームの人数について書かれた文を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nサッカーはデビッドの好きなスポーツです。彼は毎週火曜日と木曜日の放課後に練習しています。彼のチームには10人の選手がいます。彼らは今年、市のチャンピオンシップで優勝したいと思っています。\n\n【問題文の和訳】\nデビッドのチームには何人の選手がいますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nサッカー イズ デビッズ フェイバリット スポーツ。ヒー プラクティシズ エブリー チューズデイ アンド サーズデイ アフター スクール。ヒズ チーム ハズ テン プレイヤーズ。ゼイ ウォント トゥ ウィン ザ スィティー チャンピオンシップ ディス イヤー。\n\n【問題文のカタカナ読み】\nハウ メニー プレイヤーズ アー オン デビッズ チーム？",
    vocabularyItems: [
      { word: "practice", meaning: "練習する（動詞）", katakanaReading: "プラクティス", example: "She practices piano every evening." },
      { word: "championship", meaning: "選手権、チャンピオンシップ", katakanaReading: "チャンピオンシップ", example: "Our school won the championship." },
      { word: "player", meaning: "選手、プレーヤー", katakanaReading: "プレイヤー", example: "She is the best player on the team." },
    ],
    grammarPoints: [
      {
        rule: "How many を使った数の質問",
        explanation: "「How many + 複数名詞 + are there?」は数を聞く表現です。「How many players are on the team?」→「There are ten players.」複数形（players）を使うことに注意しましょう。",
        example: "How many students are in your class? / How many chapters are in this book? / How many people came to the party?",
      },
    ],
    speakingPractice: {
      readingInstructions: "「His team has ten players. They want to win the city championship this year.」を5回音読してください。championship の長い単語を4音節で区切って練習しましょう（cham-pi-on-ship）。",
      phraseReplacements: [
        {
          original: "They want to win the city championship this year.",
          instruction: "スポーツの目標について話しましょう。",
          examples: [
            "Our team wants to reach the national tournament.",
            "She hopes to win a gold medal at the next competition.",
            "The club aims to become the best in the region.",
          ],
        },
      ],
      dailyConversationTips: "「What sport do you play?」（何のスポーツをやっていますか？）「How often do you practice?」（どのくらい練習しますか？）はスポーツの話題で使える会話の入り口です。",
    },
  },
  {
    id: "rb-009",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'The library is open Monday through Friday from 9 a.m. to 8 p.m. On weekends, it closes at 5 p.m. Students can borrow up to five books at a time.'\n\nWhat time does the library close on Saturday?",
    options: [
      { id: "rb009-a", text: "8 p.m.", isCorrect: false, translation: "午後8時" },
      { id: "rb009-b", text: "9 p.m.", isCorrect: false, translation: "午後9時" },
      { id: "rb009-c", text: "5 p.m.", isCorrect: true, translation: "午後5時" },
      { id: "rb009-d", text: "6 p.m.", isCorrect: false, translation: "午後6時" },
    ],
    explanation: "「On weekends, it closes at 5 p.m.（週末は午後5時に閉まる）」と書かれています。土曜日は週末（weekend）なので5 p.m.が正解です。",
    hint: "Saturday は週末（weekend）です。週末の閉館時間を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n図書館は月曜日から金曜日まで午前9時から午後8時まで開いています。週末は午後5時に閉まります。学生は一度に最大5冊の本を借りることができます。\n\n【問題文の和訳】\n図書館は土曜日の何時に閉まりますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ ライブラリー イズ オープン マンデイ スルー フライデイ フロム ナイン エイエム トゥ エイト ピーエム。オン ウィークエンズ、イット クローズズ アット ファイブ ピーエム。スチューデンツ キャン ボロウ アップ トゥ ファイブ ブックス アット ア タイム。\n\n【問題文のカタカナ読み】\nワット タイム ダズ ザ ライブラリー クローズ オン サタデイ？",
    vocabularyItems: [
      { word: "Monday through Friday", meaning: "月曜日から金曜日まで", katakanaReading: "マンデイ スルー フライデイ", example: "We work Monday through Friday." },
      { word: "borrow", meaning: "借りる", katakanaReading: "ボロウ", example: "Can I borrow your pen?" },
      { word: "up to", meaning: "最大〜まで", katakanaReading: "アップ トゥ", example: "You can take up to three items." },
    ],
    grammarPoints: [
      {
        rule: "前置詞 through の用法（A through B = A から B まで）",
        explanation: "「Monday through Friday」は「月曜日から金曜日まで（inclusive）」という意味のアメリカ英語表現です。イギリス英語では「Monday to Friday」が一般的です。「9 a.m. through 5 p.m.」も同様です。",
        example: "The store is open Tuesday through Sunday. / Pages 10 through 20 are the introduction.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The library is open Monday through Friday from 9 a.m. to 8 p.m.」を5回音読してください。Monday through Friday の流れるような発音を練習しましょう。",
      phraseReplacements: [
        {
          original: "The library is open Monday through Friday from 9 a.m. to 8 p.m.",
          instruction: "営業時間について話す文を作りましょう。",
          examples: [
            "The gym is open Monday through Saturday from 6 a.m. to 10 p.m.",
            "The café is closed on Sundays.",
            "Office hours are Tuesday through Thursday, 2 p.m. to 4 p.m.",
          ],
        },
      ],
      dailyConversationTips: "「What are your hours?」（営業時間は何時ですか？）「Are you open on weekends?」（週末は開いていますか？）は店や施設でよく使う質問です。",
    },
  },
  {
    id: "rb-010",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Jenny loves cooking. Every Sunday, she makes a big meal for her family. Last Sunday, she made pasta and a green salad. Everyone said it was delicious.'\n\nWhat did Jenny make last Sunday?",
    options: [
      { id: "rb010-a", text: "Rice and chicken", isCorrect: false, translation: "ご飯とチキン" },
      { id: "rb010-b", text: "Soup and bread", isCorrect: false, translation: "スープとパン" },
      { id: "rb010-c", text: "Pasta and a green salad", isCorrect: true, translation: "パスタとグリーンサラダ" },
      { id: "rb010-d", text: "Pizza and fries", isCorrect: false, translation: "ピザとフライドポテト" },
    ],
    explanation: "「Last Sunday, she made pasta and a green salad（先週の日曜日、彼女はパスタとグリーンサラダを作った）」と書かれています。Last Sunday（先週の日曜日）の料理を問う問題です。",
    hint: "Last Sunday（先週の日曜日）に作ったものに注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nジェニーは料理が大好きです。毎週日曜日、彼女は家族のために豪華な食事を作ります。先週の日曜日、彼女はパスタとグリーンサラダを作りました。みんなおいしいと言いました。\n\n【問題文の和訳】\nジェニーは先週の日曜日に何を作りましたか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nジェニー ラブズ クッキング。エブリー サンデイ、シー メイクス ア ビッグ ミール フォー ハー ファミリー。ラスト サンデイ、シー メイド パスタ アンド ア グリーン サラッド。エブリワン セッド イット ワズ デリシャス。\n\n【問題文のカタカナ読み】\nワット ディッド ジェニー メイク ラスト サンデイ？",
    vocabularyItems: [
      { word: "cooking", meaning: "料理（すること）", katakanaReading: "クッキング", example: "Cooking is her favorite hobby." },
      { word: "delicious", meaning: "おいしい", katakanaReading: "デリシャス", example: "This soup is absolutely delicious." },
      { word: "last Sunday", meaning: "先週の日曜日", katakanaReading: "ラスト サンデイ", example: "I saw a movie last Sunday." },
    ],
    grammarPoints: [
      {
        rule: "every Sunday vs last Sunday（現在と過去の使い分け）",
        explanation: "「every Sunday（毎週日曜日）」は現在形で習慣を表します。「last Sunday（先週の日曜日）」は過去形を使います。「She makes pasta every Sunday.」（現在・習慣）vs「She made pasta last Sunday.」（過去・出来事）",
        example: "Every morning, she drinks coffee. / Last morning, she forgot her coffee.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Every Sunday, she makes a big meal for her family.」を5回音読してください。Every Sunday のアクセントを意識しましょう。",
      phraseReplacements: [
        {
          original: "Every Sunday, she makes a big meal for her family.",
          instruction: "週末の習慣と先週の出来事を話しましょう。",
          examples: [
            "Every Saturday, I clean my apartment.",
            "Last weekend, I cooked a new recipe from the internet.",
            "Every Friday, we have movie night at home.",
          ],
        },
      ],
      dailyConversationTips: "「What did you do last weekend?」（先週末は何をしましたか？）はよく聞かれる質問です。「I made dinner for my family.」など具体的に答えましょう。",
    },
  },
  {
    id: "rb-011",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'It is raining outside. Sam cannot go to the park. Instead, he decides to read a book. He reads for two hours and finishes the whole book.'\n\nWhy does Sam stay home?",
    options: [
      { id: "rb011-a", text: "He is sick", isCorrect: false, translation: "具合が悪いから" },
      { id: "rb011-b", text: "He has homework", isCorrect: false, translation: "宿題があるから" },
      { id: "rb011-c", text: "It is raining", isCorrect: true, translation: "雨が降っているから" },
      { id: "rb011-d", text: "The park is closed", isCorrect: false, translation: "公園が閉まっているから" },
    ],
    explanation: "「It is raining outside. Sam cannot go to the park.（外は雨。サムは公園に行けない）」という因果関係があります。雨（raining）が理由で家にいるのです。",
    hint: "サムが公園に行けない直接の理由は何ですか？",
    questionTranslation: "【パッセージ全体の和訳】\n外は雨が降っています。サムは公園に行けません。代わりに、彼は本を読むことにしました。彼は2時間読み続け、本を全部読み終えました。\n\n【問題文の和訳】\nサムはなぜ家にいるのですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nイット イズ レイニング アウトサイド。サム キャノット ゴウ トゥ ザ パーク。インステッド、ヒー ディサイズ トゥ リード ア ブック。ヒー リーズ フォー トゥー アワーズ アンド フィニシズ ザ ホール ブック。\n\n【問題文のカタカナ読み】\nホワイ ダズ サム ステイ ホーム？",
    vocabularyItems: [
      { word: "instead", meaning: "代わりに", katakanaReading: "インステッド", example: "I missed the bus, so I walked instead." },
      { word: "decide to", meaning: "〜することに決める", katakanaReading: "ディサイド トゥ", example: "She decided to stay home." },
      { word: "whole", meaning: "全部の、全体の", katakanaReading: "ホール", example: "He ate the whole pizza by himself." },
    ],
    grammarPoints: [
      {
        rule: "原因・理由を推測する読解スキル",
        explanation: "読解では、直接「because（なぜなら）」という言葉がなくても、文の流れから原因と結果を読み取れることがあります。「It is raining. Sam cannot go to the park.」→ 雨が理由（原因）、公園に行けない（結果）。この関係を意識して読みましょう。",
        example: "The store was closed. She couldn't buy milk. (→ closed = reason, couldn't buy = result)",
      },
    ],
    speakingPractice: {
      readingInstructions: "「It is raining outside. Sam cannot go to the park. Instead, he decides to read a book.」を5回音読してください。Instead のアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "He decides to read a book instead.",
          instruction: "雨の日の過ごし方について話しましょう。",
          examples: [
            "It was raining, so I stayed home and watched a movie instead.",
            "Since the concert was canceled, we went to a restaurant instead.",
            "I couldn't go jogging, so I did yoga at home instead.",
          ],
        },
      ],
      dailyConversationTips: "「Instead of going out, let's...」（外に出る代わりに〜しよう）は天候や状況の変化に対応する提案によく使います。",
    },
  },
  {
    id: "rb-012",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Jake is a new student at Westside Elementary School. He moved from another city last month. He doesn't know many people yet, but his teacher introduced him to the class on his first day.'\n\nWhy doesn't Jake know many people?",
    options: [
      { id: "rb012-a", text: "He is very shy", isCorrect: false, translation: "とても恥ずかしがり屋だから" },
      { id: "rb012-b", text: "He just moved from another city", isCorrect: true, translation: "別の市から引っ越してきたばかりだから" },
      { id: "rb012-c", text: "He doesn't like talking to people", isCorrect: false, translation: "人と話すのが好きではないから" },
      { id: "rb012-d", text: "He is absent often", isCorrect: false, translation: "よく欠席するから" },
    ],
    explanation: "「He moved from another city last month（先月、別の市から引っ越してきた）」とあります。新しい学校に来たばかりだから知っている人が少ないという因果関係を理解することが大切です。",
    hint: "ジェイクが新しい学校にいる理由を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nジェイクはウェストサイド小学校の新入生です。彼は先月、別の市から引っ越してきました。まだあまり多くの人を知りませんが、初日に先生がクラスに紹介してくれました。\n\n【問題文の和訳】\nなぜジェイクはあまり多くの人を知らないのですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nジェイク イズ ア ニュー スチューデント アット ウェストサイド エレメンタリー スクール。ヒー ムーブド フロム アナザー スィティー ラスト マンス。ヒー ダズント ノウ メニー ピープル イェット、バット ヒズ ティーチャー イントロデュースト ヒム トゥ ザ クラス オン ヒズ ファースト デイ。\n\n【問題文のカタカナ読み】\nホワイ ダズント ジェイク ノウ メニー ピープル？",
    vocabularyItems: [
      { word: "elementary school", meaning: "小学校", katakanaReading: "エレメンタリー スクール", example: "She teaches at an elementary school." },
      { word: "introduce", meaning: "紹介する", katakanaReading: "イントロデュース", example: "Let me introduce my friend." },
      { word: "yet", meaning: "まだ（否定文で）", katakanaReading: "イェット", example: "I haven't finished yet." },
    ],
    grammarPoints: [
      {
        rule: "yet の用法（否定文）",
        explanation: "「yet（まだ）」は否定文（not yet）で「まだ〜ない」という意味です。「He doesn't know many people yet.」（まだあまり知らない）。疑問文では「もう〜した？」の意味になります。「Have you eaten yet?」（もう食べた？）",
        example: "She hasn't arrived yet. / Is the food ready yet? / I'm not tired yet.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「He doesn't know many people yet, but his teacher introduced him to the class on his first day.」を5回音読してください。introduced him を流れるように発音しましょう。",
      phraseReplacements: [
        {
          original: "He doesn't know many people yet.",
          instruction: "新しい環境について話す文を作りましょう。",
          examples: [
            "I just started the new job, so I don't know everyone yet.",
            "She hasn't gotten used to the new city yet.",
            "It takes time, but I'm slowly getting to know my classmates.",
          ],
        },
      ],
      dailyConversationTips: "「I'm new here.」（ここは初めてです）と言えば、周りの人が助けてくれます。新しい環境でもどんどん自己紹介しましょう。",
    },
  },
  {
    id: "rb-013",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Carlos plays the guitar in a band. His band has four members. They practice together every Saturday afternoon. Their dream is to perform at the school festival.'\n\nWhat is the band's goal?",
    options: [
      { id: "rb013-a", text: "To win a music competition", isCorrect: false, translation: "音楽コンテストで優勝すること" },
      { id: "rb013-b", text: "To perform at the school festival", isCorrect: true, translation: "学校のフェスティバルで演奏すること" },
      { id: "rb013-c", text: "To record an album", isCorrect: false, translation: "アルバムを録音すること" },
      { id: "rb013-d", text: "To go on tour", isCorrect: false, translation: "ツアーに出ること" },
    ],
    explanation: "「Their dream is to perform at the school festival（彼らの夢は学校のフェスティバルで演奏すること）」と明記されています。dream（夢）= goal（目標）として問われています。",
    hint: "「dream（夢）」という言葉に注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nカルロスはバンドでギターを弾いています。彼のバンドには4人のメンバーがいます。彼らは毎週土曜日の午後、一緒に練習しています。彼らの夢は学校のフェスティバルで演奏することです。\n\n【問題文の和訳】\nバンドの目標は何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nカルロス プレイズ ザ ギター イン ア バンド。ヒズ バンド ハズ フォー メンバーズ。ゼイ プラクティス トゥゲザー エブリー サタデイ アフタヌーン。ゼア ドリーム イズ トゥ パフォーム アット ザ スクール フェスティバル。\n\n【問題文のカタカナ読み】\nワット イズ ザ バンズ ゴール？",
    vocabularyItems: [
      { word: "member", meaning: "メンバー、構成員", katakanaReading: "メンバー", example: "She is a member of the student council." },
      { word: "perform", meaning: "演奏する、演じる", katakanaReading: "パフォーム", example: "They will perform at the concert tonight." },
      { word: "dream", meaning: "夢（名詞）", katakanaReading: "ドリーム", example: "Her dream is to become a doctor." },
    ],
    grammarPoints: [
      {
        rule: "「dream is to + 動詞原形」の構造",
        explanation: "「Someone's dream is to + 動詞原形（〜することが〜の夢）」は目標や夢を表す基本的な構文です。「His dream is to become a soccer player.」「Her goal is to graduate from college.」",
        example: "Her dream is to travel the world. / My goal is to speak English fluently. / Their aim is to reduce pollution.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Their dream is to perform at the school festival.」を5回音読してください。perform at をつなげて発音しましょう。",
      phraseReplacements: [
        {
          original: "Their dream is to perform at the school festival.",
          instruction: "夢や目標について話す文を作りましょう。",
          examples: [
            "My dream is to study abroad in the United States.",
            "His goal is to become a professional photographer.",
            "Our team's aim is to win the championship next year.",
          ],
        },
      ],
      dailyConversationTips: "「What's your dream?」（あなたの夢は何ですか？）「What are your goals?」（目標は何ですか？）はよく聞かれる質問です。「My dream is to...」で答えましょう。",
    },
  },
  {
    id: "rb-014",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Amy went to the doctor yesterday. She had a headache and a sore throat. The doctor told her to rest and drink lots of water. He also gave her some medicine.'\n\nWhat did the doctor give Amy?",
    options: [
      { id: "rb014-a", text: "Some food", isCorrect: false, translation: "食べ物" },
      { id: "rb014-b", text: "Some medicine", isCorrect: true, translation: "薬" },
      { id: "rb014-c", text: "An injection", isCorrect: false, translation: "注射" },
      { id: "rb014-d", text: "A note for school", isCorrect: false, translation: "学校への連絡書" },
    ],
    explanation: "「He also gave her some medicine（医師はまた薬を処方した）」と書かれています。told her to rest（休むよう言った）と gave her medicine（薬を与えた）の2つが処置として述べられています。",
    hint: "医師がエイミーに「与えた（gave）」ものは何ですか？",
    questionTranslation: "【パッセージ全体の和訳】\nエイミーは昨日医者に行きました。彼女は頭痛と喉の痛みがありました。医師は彼女に休んで水をたくさん飲むよう言いました。また、薬も処方してもらいました。\n\n【問題文の和訳】\n医師はエイミーに何を渡しましたか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nエイミー ウェント トゥ ザ ドクター イエスタデイ。シー ハッド ア ヘッドエイク アンド ア ソア スロート。ザ ドクター トールド ハー トゥ レスト アンド ドリンク ロッツ オブ ウォーター。ヒー オールソウ ゲイブ ハー サム メディシン。\n\n【問題文のカタカナ読み】\nワット ディッド ザ ドクター ギブ エイミー？",
    vocabularyItems: [
      { word: "headache", meaning: "頭痛", katakanaReading: "ヘッドエイク", example: "I have a terrible headache today." },
      { word: "sore throat", meaning: "喉の痛み", katakanaReading: "ソア スロート", example: "I can't sing because I have a sore throat." },
      { word: "medicine", meaning: "薬、医療", katakanaReading: "メディシン", example: "Take this medicine three times a day." },
    ],
    grammarPoints: [
      {
        rule: "tell + 人 + to 不定詞（〜するよう言う）",
        explanation: "「tell + 人 + to 不定詞」は「誰かに〜するよう指示・命令する」構文です。「The doctor told her to rest.」「She told him to be quiet.」「My teacher told me to rewrite the essay.」",
        example: "The nurse told him to take the pills. / She told me to wait outside. / He told the students to open their books.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The doctor told her to rest and drink lots of water.」を5回音読してください。told her to をつなげて発音しましょう。",
      phraseReplacements: [
        {
          original: "The doctor told her to rest and drink lots of water.",
          instruction: "tell + 人 + to を使って指示・アドバイスを言いましょう。",
          examples: [
            "My doctor told me to reduce my stress levels.",
            "The teacher told us to bring a dictionary tomorrow.",
            "She told her son to clean his room before dinner.",
          ],
        },
      ],
      dailyConversationTips: "「The doctor told me to...」（医者に〜するよう言われた）は医療の話題や欠席の理由を説明するときに使います。",
    },
  },
  {
    id: "rb-015",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Mike is packing his bag for a camping trip. He packs a tent, a sleeping bag, and some food. He also brings a flashlight because there is no electricity at the campsite.'\n\nWhy does Mike bring a flashlight?",
    options: [
      { id: "rb015-a", text: "Because it is his favorite tool", isCorrect: false, translation: "お気に入りの道具だから" },
      { id: "rb015-b", text: "Because there is no electricity at the campsite", isCorrect: true, translation: "キャンプ場に電気がないから" },
      { id: "rb015-c", text: "Because it might rain", isCorrect: false, translation: "雨が降るかもしれないから" },
      { id: "rb015-d", text: "Because he likes reading at night", isCorrect: false, translation: "夜に読書が好きだから" },
    ],
    explanation: "「He also brings a flashlight because there is no electricity at the campsite（キャンプ場に電気がないので懐中電灯も持っていく）」と because（なぜなら）を使った理由が明記されています。",
    hint: "「because（なぜなら）」の後の部分に理由が書かれています。",
    questionTranslation: "【パッセージ全体の和訳】\nマイクはキャンプ旅行のためにバッグを詰めています。テント、寝袋、そして食料を入れます。また、キャンプ場には電気がないので懐中電灯も持っていきます。\n\n【問題文の和訳】\nなぜマイクは懐中電灯を持っていくのですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nマイク イズ パッキング ヒズ バッグ フォー ア キャンピング トリップ。ヒー パックス ア テント、ア スリーピング バッグ、アンド サム フード。ヒー オールソウ ブリングズ ア フラッシュライト ビコーズ ゼア イズ ノウ エレクトリシティー アット ザ キャンプサイト。\n\n【問題文のカタカナ読み】\nホワイ ダズ マイク ブリング ア フラッシュライト？",
    vocabularyItems: [
      { word: "flashlight", meaning: "懐中電灯", katakanaReading: "フラッシュライト", example: "Don't forget your flashlight for the hike." },
      { word: "campsite", meaning: "キャンプ場", katakanaReading: "キャンプサイト", example: "The campsite is near a lake." },
      { word: "electricity", meaning: "電気", katakanaReading: "エレクトリシティー", example: "There was no electricity after the storm." },
    ],
    grammarPoints: [
      {
        rule: "because を使った理由の表現",
        explanation: "「because（なぜなら）」は理由を直接示す接続詞です。「He brings a flashlight because there is no electricity.」because 節が「why?（なぜ？）」の答えになります。読解問題では「Why?」の質問の答えを because 節に探す練習をしましょう。",
        example: "She wore a coat because it was cold. / He failed the test because he didn't study. / They were late because of the traffic.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「He brings a flashlight because there is no electricity at the campsite.」を5回音読してください。because there is のリンキングに注意しましょう。",
      phraseReplacements: [
        {
          original: "He brings a flashlight because there is no electricity.",
          instruction: "because を使って持ち物を説明しましょう。",
          examples: [
            "She always carries an umbrella because the weather is unpredictable.",
            "He brought a water bottle because it was hot outside.",
            "I packed an extra sweater because it gets cold at night.",
          ],
        },
      ],
      dailyConversationTips: "「I brought this because...」（〜を持ってきたのは〜だから）は自分の選択や行動を説明するときの基本的なフレーズです。",
    },
  },
  {
    id: "rb-016",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Sarah and her friends are planning a trip to the beach next weekend. They will drive there in Sarah's car. The beach is two hours away. They plan to swim, eat seafood, and watch the sunset.'\n\nHow will they travel to the beach?",
    options: [
      { id: "rb016-a", text: "By train", isCorrect: false, translation: "電車で" },
      { id: "rb016-b", text: "By bus", isCorrect: false, translation: "バスで" },
      { id: "rb016-c", text: "By car", isCorrect: true, translation: "車で" },
      { id: "rb016-d", text: "By bicycle", isCorrect: false, translation: "自転車で" },
    ],
    explanation: "「They will drive there in Sarah's car（サラの車で運転していく）」と書かれています。drive（運転する）→ by car（車で）という推論が必要です。",
    hint: "「drive」という動詞は何を使って移動することを示していますか？",
    questionTranslation: "【パッセージ全体の和訳】\nサラと友達は来週末、ビーチへの旅行を計画しています。サラの車で行きます。ビーチまでは2時間かかります。彼女たちは泳いだり、シーフードを食べたり、夕日を見たりする予定です。\n\n【問題文の和訳】\n彼女たちはどのようにしてビーチへ行きますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nサラ アンド ハー フレンズ アー プランニング ア トリップ トゥ ザ ビーチ ネクスト ウィークエンド。ゼイ ウィル ドライブ ゼア イン サラズ カー。ザ ビーチ イズ トゥー アワーズ アウェイ。ゼイ プラン トゥ スウィム、イート スィーフード、アンド ウォッチ ザ サンセット。\n\n【問題文のカタカナ読み】\nハウ ウィル ゼイ トラベル トゥ ザ ビーチ？",
    vocabularyItems: [
      { word: "plan to", meaning: "〜する予定である", katakanaReading: "プラン トゥ", example: "We plan to leave early tomorrow." },
      { word: "seafood", meaning: "シーフード、魚介類", katakanaReading: "スィーフード", example: "I love fresh seafood at the beach." },
      { word: "sunset", meaning: "夕日、日没", katakanaReading: "サンセット", example: "The sunset was beautiful tonight." },
    ],
    grammarPoints: [
      {
        rule: "will を使った未来の予定",
        explanation: "「will + 動詞原形」は未来の予定や意志を表します。「They will drive there.」「They will swim and eat seafood.」計画を話すときは will または be going to を使います。",
        example: "We will have a meeting tomorrow. / She will call you later. / I will help you with that.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「They plan to swim, eat seafood, and watch the sunset.」を5回音読してください。3つの活動をカンマで区切るリズムを意識しましょう。",
      phraseReplacements: [
        {
          original: "They plan to swim, eat seafood, and watch the sunset.",
          instruction: "旅行の計画について話しましょう。",
          examples: [
            "We plan to hike, cook over a campfire, and stargaze.",
            "They plan to visit museums, try local food, and shop for souvenirs.",
            "I plan to relax, read a book, and take long walks on the beach.",
          ],
        },
      ],
      dailyConversationTips: "「What are you planning to do this weekend?」（今週末は何をする予定ですか？）はよく聞かれる質問です。「I plan to...」で答えましょう。",
    },
  },
  {
    id: "rb-017",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Eric wakes up at 6:00 a.m. every day. He goes for a 30-minute walk before breakfast. He says the morning walk helps him feel awake and ready for the day.'\n\nAccording to Eric, what does the morning walk help him do?",
    options: [
      { id: "rb017-a", text: "Lose weight", isCorrect: false, translation: "体重を減らす" },
      { id: "rb017-b", text: "Fall asleep faster", isCorrect: false, translation: "早く眠れる" },
      { id: "rb017-c", text: "Feel awake and ready for the day", isCorrect: true, translation: "目が覚めて1日の準備ができる" },
      { id: "rb017-d", text: "Arrive at work on time", isCorrect: false, translation: "仕事に時間通りに着く" },
    ],
    explanation: "「He says the morning walk helps him feel awake and ready for the day（朝の散歩が目覚めと1日の準備に役立つ）」と書かれています。「According to Eric（エリックによると）」は「パッセージに書かれていることを根拠として答えよ」という指示です。",
    hint: "「He says...」の後に何が続きますか？",
    questionTranslation: "【パッセージ全体の和訳】\nエリックは毎日午前6時に起きます。朝食の前に30分のウォーキングをします。朝の散歩で目が覚めて1日の準備ができると彼は言っています。\n\n【問題文の和訳】\nエリックによると、朝の散歩は彼にとって何の助けになりますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nエリック ウェイクス アップ アット スィックス エイエム エブリー デイ。ヒー ゴウズ フォー ア サーティー ミニット ウォーク ビフォア ブレックファスト。ヒー セイズ ザ モーニング ウォーク ヘルプス ヒム フィール アウェイク アンド レディー フォー ザ デイ。\n\n【問題文のカタカナ読み】\nアコーディング トゥ エリック、ワット ダズ ザ モーニング ウォーク ヘルプ ヒム ドゥ？",
    vocabularyItems: [
      { word: "awake", meaning: "目が覚めた、起きている", katakanaReading: "アウェイク", example: "I can't stay awake during long meetings." },
      { word: "according to", meaning: "〜によると", katakanaReading: "アコーディング トゥ", example: "According to the report, sales increased." },
      { word: "help + 人 + 動詞原形", meaning: "〜が〜するのを助ける", katakanaReading: "ヘルプ", example: "Music helps me concentrate." },
    ],
    grammarPoints: [
      {
        rule: "According to の使い方",
        explanation: "「According to + 情報源」は「〜によると」という意味で、情報の出所を示します。「According to the passage（パッセージによると）」「According to the article（記事によると）」「According to him（彼によると）」は読解問題でよく出てきます。",
        example: "According to the news, it will rain tomorrow. / According to the study, exercise reduces stress.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「He says the morning walk helps him feel awake and ready for the day.」を5回音読してください。helps him feel をリンキングして発音しましょう。",
      phraseReplacements: [
        {
          original: "The morning walk helps him feel awake and ready for the day.",
          instruction: "朝の習慣の効果について話しましょう。",
          examples: [
            "Stretching in the morning helps me feel energized.",
            "Drinking coffee helps me wake up and focus.",
            "Journaling at night helps me feel calm and organized.",
          ],
        },
      ],
      dailyConversationTips: "「I find that... really helps me.」（〜が本当に役立つと感じます）は習慣の効果を説明するときの natural なフレーズです。",
    },
  },
  {
    id: "rb-018",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'The weather report says it will be cloudy tomorrow with a chance of rain. Lucy is deciding what to wear. She chooses a raincoat and brings an umbrella just in case.'\n\nWhy does Lucy bring an umbrella?",
    options: [
      { id: "rb018-a", text: "Because it is definitely going to rain", isCorrect: false, translation: "確実に雨が降るから" },
      { id: "rb018-b", text: "Because it is very sunny", isCorrect: false, translation: "とても晴れているから" },
      { id: "rb018-c", text: "Just in case it rains", isCorrect: true, translation: "雨が降った場合に備えて" },
      { id: "rb018-d", text: "Because she forgot her coat", isCorrect: false, translation: "コートを忘れたから" },
    ],
    explanation: "「She brings an umbrella just in case（念のため傘を持っていく）」と書かれています。「just in case（念のため・万が一に備えて）」は確実ではないが備えるという意味です。",
    hint: "「just in case（念のため）」はどんな意味ですか？",
    questionTranslation: "【パッセージ全体の和訳】\n天気予報によると、明日は曇りで雨が降る可能性があります。ルーシーは何を着るか決めています。念のため、レインコートを選び傘を持っていきます。\n\n【問題文の和訳】\nなぜルーシーは傘を持っていくのですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ ウェザー リポート セイズ イット ウィル ビー クラウディー トゥモロウ ウィズ ア チャンス オブ レイン。ルーシー イズ ディサイディング ワット トゥ ウェア。シー チューズズ ア レインコート アンド ブリングズ アン アンブレラ ジャスト イン ケース。\n\n【問題文のカタカナ読み】\nホワイ ダズ ルーシー ブリング アン アンブレラ？",
    vocabularyItems: [
      { word: "just in case", meaning: "念のため、万が一に備えて", katakanaReading: "ジャスト イン ケース", example: "Take an extra pen, just in case." },
      { word: "chance of rain", meaning: "雨の可能性", katakanaReading: "チャンス オブ レイン", example: "There's a 40% chance of rain today." },
      { word: "raincoat", meaning: "レインコート", katakanaReading: "レインコート", example: "Put on your raincoat before going out." },
    ],
    grammarPoints: [
      {
        rule: "just in case の使い方",
        explanation: "「just in case（念のため）」は何か悪いことが起こる可能性があるときに備える表現です。「Bring an umbrella just in case.」「Save the file just in case you lose it.」未来への備えを表す便利な表現です。",
        example: "I always carry a phone charger just in case. / Write down the address just in case you forget.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She brings an umbrella just in case.」を5回音読してください。just in case をひとまとまりとして発音しましょう。",
      phraseReplacements: [
        {
          original: "She brings an umbrella just in case.",
          instruction: "just in case を使って備えについて話しましょう。",
          examples: [
            "I always carry a first aid kit in my car, just in case.",
            "Pack extra clothes just in case the weather changes.",
            "Save a backup of your work just in case the computer crashes.",
          ],
        },
      ],
      dailyConversationTips: "「Take it with you, just in case.」（念のため持っていきなよ）は相手への気遣いを示す便利なフレーズです。",
    },
  },
  {
    id: "rb-019",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'Ben is learning English at school. He studies grammar, vocabulary, and reading. His favorite part of English class is speaking with classmates. He wants to visit New York someday.'\n\nWhat is Ben's favorite part of English class?",
    options: [
      { id: "rb019-a", text: "Grammar exercises", isCorrect: false, translation: "文法練習" },
      { id: "rb019-b", text: "Reading passages", isCorrect: false, translation: "長文読解" },
      { id: "rb019-c", text: "Speaking with classmates", isCorrect: true, translation: "クラスメートと話すこと" },
      { id: "rb019-d", text: "Writing essays", isCorrect: false, translation: "作文を書くこと" },
    ],
    explanation: "「His favorite part of English class is speaking with classmates（英語の授業で一番好きなのはクラスメートと話すこと）」と書かれています。favorite part（一番好きな部分）を正確に読み取ることが大切です。",
    hint: "「favorite part（一番好きな部分）」について書かれた文を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nベンは学校で英語を学んでいます。文法、語彙、読解を勉強しています。英語の授業で一番好きなのはクラスメートと話すことです。彼はいつかニューヨークを訪れたいと思っています。\n\n【問題文の和訳】\n英語の授業でベンが一番好きなのは何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nベン イズ ラーニング イングリッシュ アット スクール。ヒー スタディーズ グラマー、ボキャブラリー、アンド リーディング。ヒズ フェイバリット パート オブ イングリッシュ クラス イズ スピーキング ウィズ クラスメイツ。ヒー ウォンツ トゥ ビジット ニュー ヨーク サムデイ。\n\n【問題文のカタカナ読み】\nワット イズ ベンズ フェイバリット パート オブ イングリッシュ クラス？",
    vocabularyItems: [
      { word: "favorite", meaning: "一番好きな（形容詞）", katakanaReading: "フェイバリット", example: "What's your favorite food?" },
      { word: "someday", meaning: "いつか", katakanaReading: "サムデイ", example: "Someday I want to see the Northern Lights." },
      { word: "classmate", meaning: "クラスメート", katakanaReading: "クラスメイト", example: "She is my classmate and best friend." },
    ],
    grammarPoints: [
      {
        rule: "「favorite + 名詞」の使い方",
        explanation: "「favorite（一番好きな）」は形容詞として名詞の前に置きます。「favorite food」「favorite subject」「favorite part」など。疑問文：「What is your favorite ___?」答え：「My favorite ___ is ___」",
        example: "My favorite subject is English. / What's your favorite movie? / Her favorite season is spring.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「His favorite part of English class is speaking with classmates.」を5回音読してください。favorite part of をつなげて発音しましょう。",
      phraseReplacements: [
        {
          original: "His favorite part of English class is speaking with classmates.",
          instruction: "英語学習の好きな部分について話しましょう。",
          examples: [
            "My favorite part of learning English is watching movies without subtitles.",
            "Her favorite aspect of the course is the group discussions.",
            "The best part about studying abroad is meeting people from all over the world.",
          ],
        },
      ],
      dailyConversationTips: "「What's your favorite part of this class?」（この授業で一番好きなのはどこですか？）は授業の最初のアイスブレイクでよく使う質問です。",
    },
  },
  {
    id: "rb-020",
    category: "reading",
    difficulty: "beginner",
    question: "Passage: 'The community center offers many free classes for adults. There are cooking classes, painting classes, and yoga classes. People can sign up online or at the front desk. Classes are available on weekday evenings and on Saturdays.'\n\nHow can people sign up for classes?",
    options: [
      { id: "rb020-a", text: "By calling on the phone only", isCorrect: false, translation: "電話でのみ" },
      { id: "rb020-b", text: "Online or at the front desk", isCorrect: true, translation: "オンラインまたはフロントで" },
      { id: "rb020-c", text: "By sending a letter", isCorrect: false, translation: "手紙を送ることで" },
      { id: "rb020-d", text: "Only on Saturdays", isCorrect: false, translation: "土曜日のみ" },
    ],
    explanation: "「People can sign up online or at the front desk（オンラインまたはフロントで申し込める）」と明記されています。2つの方法が「or（または）」で結ばれています。",
    hint: "sign up（申し込む）の方法が書かれた文を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nコミュニティセンターは大人向けの無料クラスを多数提供しています。料理、絵画、ヨガのクラスがあります。オンラインまたはフロントで申し込めます。クラスは平日の夜と土曜日に利用できます。\n\n【問題文の和訳】\n人々はどのようにしてクラスに申し込めますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nザ コミュニティー センター オファーズ メニー フリー クラシズ フォー アダルツ。ゼア アー クッキング クラシズ、ペインティング クラシズ、アンド ヨーガ クラシズ。ピープル キャン サイン アップ オンライン オア アット ザ フロント デスク。クラシズ アー アベイラブル オン ウィークデイ イブニングズ アンド オン サタデイズ。\n\n【問題文のカタカナ読み】\nハウ キャン ピープル サイン アップ フォー クラシズ？",
    vocabularyItems: [
      { word: "sign up", meaning: "申し込む、登録する", katakanaReading: "サイン アップ", example: "Sign up for the newsletter on our website." },
      { word: "available", meaning: "利用できる、参加できる", katakanaReading: "アベイラブル", example: "Is this class still available?" },
      { word: "community center", meaning: "コミュニティセンター、地域交流センター", katakanaReading: "コミュニティー センター", example: "The community center runs free workshops." },
    ],
    grammarPoints: [
      {
        rule: "A or B（どちらか一方または両方の選択肢）",
        explanation: "「or（または）」は2つの選択肢を示します。「online or at the front desk」は2つの方法のどちらでも良いことを示します。読解問題では「or」で結ばれた選択肢を両方チェックしましょう。",
        example: "You can pay by cash or card. / Call or email to make a reservation. / Take the subway or the bus.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「People can sign up online or at the front desk.」を5回音読してください。online or at のリンキングを練習しましょう。",
      phraseReplacements: [
        {
          original: "People can sign up online or at the front desk.",
          instruction: "申し込みや登録の方法を説明しましょう。",
          examples: [
            "You can register for the event online or in person.",
            "Applications can be submitted by email or mail.",
            "Tickets are available at the box office or through the website.",
          ],
        },
      ],
      dailyConversationTips: "「How do I sign up?」（どうやって申し込みますか？）は新しいクラスやプログラムに参加するときの基本の質問です。",
    },
  },
];
