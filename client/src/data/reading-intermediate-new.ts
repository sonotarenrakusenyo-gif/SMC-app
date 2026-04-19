import { QuizQuestion } from "./quizzes";

export const readingIntermediateNewQuizzes: QuizQuestion[] = [
  {
    id: "ri-001",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Many students struggle with time management in college. Unlike high school, college requires students to balance classes, part-time jobs, and social life without much guidance. Experts suggest creating a weekly schedule and setting specific study hours. Students who manage their time effectively tend to perform better academically.'\n\nWhat do experts suggest to help with time management?",
    options: [
      { id: "ri001-a", text: "Taking fewer classes", isCorrect: false, translation: "授業数を減らす" },
      { id: "ri001-b", text: "Creating a weekly schedule and setting study hours", isCorrect: true, translation: "週間スケジュールを作りスタディタイムを設定する" },
      { id: "ri001-c", text: "Quitting part-time jobs", isCorrect: false, translation: "アルバイトをやめる" },
      { id: "ri001-d", text: "Asking teachers for help every day", isCorrect: false, translation: "毎日先生に助けを求める" },
    ],
    explanation: "「Experts suggest creating a weekly schedule and setting specific study hours（専門家は週間スケジュールを作り特定の学習時間を設定することを勧める）」と書かれています。suggest（提案する）の後の内容が正解です。",
    hint: "「Experts suggest...」に続く提案の内容を確認しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n多くの学生が大学での時間管理に苦労しています。高校とは異なり、大学では十分なガイダンスなしに授業、アルバイト、社会生活のバランスを取ることが求められます。専門家は週間スケジュールを作成し、特定の学習時間を設定することを提案しています。時間を効果的に管理する学生は学業成績が優れる傾向があります。\n\n【問題文の和訳】\n専門家が時間管理の助けになると提案しているのは何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nメニー スチューデンツ ストラグル ウィズ タイム マネージメント イン カレッジ。アンライク ハイスクール、カレッジ リクワイアーズ スチューデンツ トゥ バランス クラシズ、パートタイム ジョブズ、アンド ソーシャル ライフ ウィザウト マッチ ガイダンス。エクスパーツ サジェスト クリエイティング ア ウィークリー スケジュール アンド セッティング スペシフィック スタディー アワーズ。スチューデンツ フー マネージ ゼア タイム エフェクティブリー テンド トゥ パフォーム ベター アカデミカリー。\n\n【問題文のカタカナ読み】\nワット ドゥ エクスパーツ サジェスト トゥ ヘルプ ウィズ タイム マネージメント？",
    vocabularyItems: [
      { word: "struggle with", meaning: "〜に苦労する", katakanaReading: "ストラグル ウィズ", example: "She struggles with math." },
      { word: "tend to", meaning: "〜する傾向がある", katakanaReading: "テンド トゥ", example: "Students who study daily tend to do better." },
      { word: "academically", meaning: "学業的に", katakanaReading: "アカデミカリー", example: "She is performing well academically." },
    ],
    grammarPoints: [
      {
        rule: "suggest + -ing（〜することを勧める）",
        explanation: "「suggest（勧める・提案する）」の後ろは動名詞（-ing）を使います。「Experts suggest creating a schedule.」「I suggest taking a break.」「He suggested leaving early.」suggest の後に to 不定詞は使えないので注意。",
        example: "She suggested taking a different route. / The doctor suggested reducing stress. / I suggest starting with the easiest task.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Experts suggest creating a weekly schedule and setting specific study hours.」を5回音読してください。suggest creating のリンキングに注意しましょう。",
      phraseReplacements: [
        {
          original: "Experts suggest creating a weekly schedule and setting specific study hours.",
          instruction: "時間管理のコツについて話しましょう。",
          examples: [
            "I suggest making a to-do list every morning.",
            "Experts recommend breaking large tasks into smaller steps.",
            "It helps to set a specific time for studying each day.",
          ],
        },
      ],
      dailyConversationTips: "「I suggest...」（〜をお勧めします）は提案するときの丁寧で natural な表現です。ビジネスや会話で積極的に使いましょう。",
    },
  },
  {
    id: "ri-002",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Urban gardening is becoming popular in cities. Residents grow vegetables and herbs in small spaces like rooftops, balconies, and community gardens. This practice reduces food costs and helps people connect with their neighbors. It also has environmental benefits, such as reducing the urban heat island effect.'\n\nWhich of the following is NOT mentioned as a benefit of urban gardening?",
    options: [
      { id: "ri002-a", text: "Reducing food costs", isCorrect: false, translation: "食費の削減" },
      { id: "ri002-b", text: "Connecting with neighbors", isCorrect: false, translation: "近所とのつながり" },
      { id: "ri002-c", text: "Improving physical fitness", isCorrect: true, translation: "体力の向上" },
      { id: "ri002-d", text: "Reducing the urban heat island effect", isCorrect: false, translation: "ヒートアイランド現象の軽減" },
    ],
    explanation: "パッセージに挙げられている恩恵は「reduces food costs（食費削減）」「connect with neighbors（近所付き合い）」「reducing the urban heat island effect（ヒートアイランド軽減）」の3つです。「体力の向上（improving physical fitness）」は述べられていません。",
    hint: "パッセージに書かれていないものを選ぶ「NOT問題」です。パッセージに出てこない選択肢を選びましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n都市農業が都市部で人気になっています。住民は屋上、バルコニー、コミュニティガーデンなどの小スペースで野菜やハーブを育てています。この取り組みは食費を削減し、近隣住民との交流を深めます。また、都市のヒートアイランド現象を軽減するなどの環境的なメリットもあります。\n\n【問題文の和訳】\n都市農業のメリットとして述べられていないものはどれですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nアーバン ガーデニング イズ ビカミング ポピュラー イン スィティーズ。レジデンツ グロウ ベジタブルズ アンド ハーブズ イン スモール スペイシズ ライク ルーフトップス、バルコニーズ、アンド コミュニティー ガーデンズ。ディス プラクティス リデュースィズ フード コスツ アンド ヘルプス ピープル コネクト ウィズ ゼア ネイバーズ。イット オールソウ ハズ エンバイロンメンタル ベネフィッツ、サッチ アズ リデューシング ザ アーバン ヒート アイランド エフェクト。\n\n【問題文のカタカナ読み】\nウィッチ オブ ザ フォローイング イズ ノット メンションド アズ ア ベネフィット オブ アーバン ガーデニング？",
    vocabularyItems: [
      { word: "urban", meaning: "都市の、都市部の", katakanaReading: "アーバン", example: "Urban areas face many unique challenges." },
      { word: "heat island effect", meaning: "ヒートアイランド現象", katakanaReading: "ヒート アイランド エフェクト", example: "Trees help reduce the heat island effect." },
      { word: "resident", meaning: "住民、居住者", katakanaReading: "レジデント", example: "Local residents attended the town meeting." },
    ],
    grammarPoints: [
      {
        rule: "NOT問題（negation question）の解き方",
        explanation: "「Which is NOT mentioned?」「Which is NOT true?」という問題は、パッセージに書かれていない選択肢を見つける問題です。解法：各選択肢がパッセージのどこに書かれているか確認し、見つからない選択肢が正解です。",
        example: "Strategy: Go through each answer choice and find it in the passage. The one you cannot find is the answer.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Urban gardening reduces food costs and helps people connect with their neighbors.」を5回音読してください。reduces のように -s が3人称単数現在形に付くことに注意しましょう。",
      phraseReplacements: [
        {
          original: "Urban gardening reduces food costs and helps people connect with neighbors.",
          instruction: "活動のメリットを2つ列挙して話しましょう。",
          examples: [
            "Exercising regularly reduces stress and improves sleep quality.",
            "Learning a new language boosts brain function and opens career opportunities.",
            "Volunteering builds community connections and provides personal satisfaction.",
          ],
        },
      ],
      dailyConversationTips: "「One benefit is... Another benefit is...」（一つのメリットは〜、もう一つは〜）はメリットを複数列挙するときの便利な表現です。",
    },
  },
  {
    id: "ri-003",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Public transportation reduces traffic congestion and air pollution in cities. Many commuters prefer buses and trains because they are more affordable than owning a car. However, some areas lack adequate public transit options, forcing residents to rely on private vehicles. Improving transit infrastructure requires significant investment from local governments.'\n\nWhat is one reason commuters prefer public transportation?",
    options: [
      { id: "ri003-a", text: "It is always faster than driving", isCorrect: false, translation: "常に車より速いから" },
      { id: "ri003-b", text: "It is more affordable than owning a car", isCorrect: true, translation: "車を所有するよりも手頃だから" },
      { id: "ri003-c", text: "It is available in all areas", isCorrect: false, translation: "すべての地域で利用できるから" },
      { id: "ri003-d", text: "It requires no government investment", isCorrect: false, translation: "政府の投資が不要だから" },
    ],
    explanation: "「Many commuters prefer buses and trains because they are more affordable than owning a car（多くの通勤者はバスや電車を好む、なぜなら車を所有するよりも手頃だから）」と理由が明記されています。",
    hint: "「because（なぜなら）」の後に理由が続きます。",
    questionTranslation: "【パッセージ全体の和訳】\n公共交通機関は都市の交通渋滞と大気汚染を軽減します。多くの通勤者がバスや電車を好むのは、車を所有するよりも手頃だからです。しかし、一部の地域では十分な公共交通機関がなく、住民が自家用車に頼らざるを得ません。交通インフラの整備には地方政府からの多大な投資が必要です。\n\n【問題文の和訳】\n通勤者が公共交通機関を好む理由の一つは何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nパブリック トランスポーテーション リデュースィズ トラフィック コンジェスチョン アンド エア ポリューション イン スィティーズ。メニー コミューターズ プリファー バシズ アンド トレインズ ビコーズ ゼイ アー モア アフォーダブル ザン オウニング ア カー。ハウエバー、サム エリアズ ラック アデクワット パブリック トランジット オプションズ、フォーシング レジデンツ トゥ リライ オン プライベート ビヒクルズ。インプルーブング トランジット インフラストラクチャー リクワイアーズ シグニフィカント インベストメント フロム ローカル ガバメンツ。\n\n【問題文のカタカナ読み】\nワット イズ ワン リーズン コミューターズ プリファー パブリック トランスポーテーション？",
    vocabularyItems: [
      { word: "congestion", meaning: "渋滞、混雑", katakanaReading: "コンジェスチョン", example: "Traffic congestion is bad during rush hour." },
      { word: "commuter", meaning: "通勤者", katakanaReading: "コミューター", example: "Commuters in Tokyo rely heavily on trains." },
      { word: "infrastructure", meaning: "インフラ、基盤整備", katakanaReading: "インフラストラクチャー", example: "The city needs to improve its infrastructure." },
    ],
    grammarPoints: [
      {
        rule: "However を使った逆接",
        explanation: "「However（しかしながら）」は前の内容に対する反対・制限を示す接続副詞です。「Public transport is affordable. However, some areas lack options.」読解では「However」の前後で主張が変わることに注意しましょう。",
        example: "Exercise is important. However, excessive exercise can be harmful. / The plan seems good. However, the cost is too high.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Many commuters prefer buses and trains because they are more affordable than owning a car.」を5回音読してください。affordable の /əˈfɔːrdəbəl/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "Many commuters prefer buses and trains because they are more affordable.",
          instruction: "公共交通機関について話す文を作りましょう。",
          examples: [
            "I take the train to work because it's faster during rush hour.",
            "Public transit is more eco-friendly than driving alone.",
            "The city should invest more in affordable public transportation.",
          ],
        },
      ],
      dailyConversationTips: "「I prefer taking the train because...」（〜だから電車を好みます）は通勤・通学の方法を説明するときの便利なフレーズです。",
    },
  },
  {
    id: "ri-004",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Getting enough sleep is essential for good health. Adults need between 7 and 9 hours of sleep per night. Lack of sleep can lead to poor concentration, memory problems, and weakened immune function. Despite knowing this, many people sacrifice sleep for work or entertainment, especially with the rise of late-night screen use.'\n\nWhat is one consequence of not getting enough sleep?",
    options: [
      { id: "ri004-a", text: "Better physical performance", isCorrect: false, translation: "身体能力の向上" },
      { id: "ri004-b", text: "Poor concentration and memory problems", isCorrect: true, translation: "集中力の低下と記憶の問題" },
      { id: "ri004-c", text: "Increased creativity", isCorrect: false, translation: "創造性の向上" },
      { id: "ri004-d", text: "Lower stress levels", isCorrect: false, translation: "ストレスの軽減" },
    ],
    explanation: "「Lack of sleep can lead to poor concentration, memory problems, and weakened immune function（睡眠不足は集中力の低下、記憶の問題、免疫機能の低下を引き起こす可能性がある）」と書かれています。",
    hint: "「Lack of sleep can lead to...」の後に何が続いていますか？",
    questionTranslation: "【パッセージ全体の和訳】\n十分な睡眠は健康のために不可欠です。大人は1晩に7〜9時間の睡眠が必要です。睡眠不足は集中力の低下、記憶の問題、免疫機能の低下を引き起こす可能性があります。それを知っていても、特に深夜のスクリーン使用の増加により、多くの人が仕事や娯楽のために睡眠を犠牲にしています。\n\n【問題文の和訳】\n十分な睡眠が取れないことの結果の一つは何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nゲッティング イナフ スリープ イズ エッセンシャル フォー グッド ヘルス。アダルツ ニード ビトゥウィーン セブン アンド ナイン アワーズ オブ スリープ パー ナイト。ラック オブ スリープ キャン リード トゥ プア コンセントレーション、メモリー プロブレムズ、アンド ウィークンド イミューン ファンクション。ディスパイト ノウイング ディス、メニー ピープル サクリファイス スリープ フォー ワーク オア エンタテインメント、エスペシャリー ウィズ ザ ライズ オブ レイトナイト スクリーン ユーズ。\n\n【問題文のカタカナ読み】\nワット イズ ワン コンシクエンス オブ ノット ゲッティング イナフ スリープ？",
    vocabularyItems: [
      { word: "lack of", meaning: "〜の不足", katakanaReading: "ラック オブ", example: "Lack of exercise leads to health problems." },
      { word: "immune function", meaning: "免疫機能", katakanaReading: "イミューン ファンクション", example: "Good sleep strengthens immune function." },
      { word: "sacrifice", meaning: "犠牲にする", katakanaReading: "サクリファイス", example: "She sacrificed her vacation to finish the project." },
    ],
    grammarPoints: [
      {
        rule: "lead to + 名詞（〜を引き起こす、〜につながる）",
        explanation: "「lead to + 名詞/動名詞」は「〜を引き起こす・〜につながる」という表現です。「Lack of sleep leads to health problems.」「Poor diet can lead to disease.」原因と結果を表す読解でよく登場します。",
        example: "Stress can lead to serious health issues. / Success leads to more responsibility. / Hard work leads to achievement.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Lack of sleep can lead to poor concentration, memory problems, and weakened immune function.」を5回音読してください。3つのリストをカンマで区切るリズムを練習しましょう。",
      phraseReplacements: [
        {
          original: "Lack of sleep can lead to poor concentration and memory problems.",
          instruction: "sleep と health についての因果関係を話しましょう。",
          examples: [
            "Getting 8 hours of sleep improves focus and mood.",
            "Staying up late on your phone can disrupt your sleep cycle.",
            "A regular sleep schedule leads to better overall health.",
          ],
        },
      ],
      dailyConversationTips: "「I haven't been sleeping well lately.」（最近あまり眠れていなくて）はよく聞かれる悩みです。「Try going to bed at the same time every night.」（毎晩同じ時間に寝るようにしてみて）とアドバイスしましょう。",
    },
  },
  {
    id: "ri-005",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Volunteering has many benefits for both individuals and communities. Volunteers gain valuable work experience and develop new skills. It also provides a sense of purpose and improves mental health. Communities benefit from the free services volunteers provide, such as tutoring, food distribution, and elderly care.'\n\nWhich of the following is a benefit of volunteering for individuals?",
    options: [
      { id: "ri005-a", text: "Earning a high salary", isCorrect: false, translation: "高い給与を得ること" },
      { id: "ri005-b", text: "Gaining work experience and new skills", isCorrect: true, translation: "仕事の経験と新しいスキルを得ること" },
      { id: "ri005-c", text: "Avoiding social responsibilities", isCorrect: false, translation: "社会的責任を避けること" },
      { id: "ri005-d", text: "Receiving government funding", isCorrect: false, translation: "政府の資金援助を受けること" },
    ],
    explanation: "「Volunteers gain valuable work experience and develop new skills（ボランティアは貴重な職務経験を積み、新しいスキルを身につける）」と個人へのメリットが述べられています。",
    hint: "個人（individuals）へのメリットが書かれた部分を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nボランティア活動は個人にとっても地域にとっても多くのメリットがあります。ボランティアは貴重な職務経験を積み、新しいスキルを身につけます。また、目的意識が生まれ、メンタルヘルスも改善されます。地域は、ボランティアが提供する個別指導、食料配給、高齢者ケアなどの無料サービスから恩恵を受けます。\n\n【問題文の和訳】\n個人にとってのボランティアのメリットはどれですか？",
    questionKatakana: "【パッセージ全体のカタナ読み】\nボランティアリング ハズ メニー ベネフィッツ フォー ボウス インディビジュアルズ アンド コミュニティーズ。ボランティアズ ゲイン バリュアブル ワーク エクスペリエンス アンド ディベロップ ニュー スキルズ。イット オールソウ プロバイズ ア センス オブ パーパス アンド インプルーブズ メンタル ヘルス。コミュニティーズ ベネフィット フロム ザ フリー サービシズ ボランティアズ プロバイド。\n\n【問題文のカタカナ読み】\nウィッチ オブ ザ フォローイング イズ ア ベネフィット オブ ボランティアリング フォー インディビジュアルズ？",
    vocabularyItems: [
      { word: "volunteer", meaning: "ボランティア（名詞）/ ボランティアをする（動詞）", katakanaReading: "ボランティア", example: "She volunteers at the local shelter." },
      { word: "sense of purpose", meaning: "目的意識", katakanaReading: "センス オブ パーパス", example: "Helping others gives me a sense of purpose." },
      { word: "distribution", meaning: "配給、配布", katakanaReading: "ディストリビューション", example: "Food distribution was organized by the charity." },
    ],
    grammarPoints: [
      {
        rule: "both A and B（AもBも両方）",
        explanation: "「both A and B」は「AもBも両方」という意味です。「Volunteering benefits both individuals and communities.」読解問題では、対象が複数ある場合に both A and B でまとめて表現することがよくあります。",
        example: "Both students and teachers benefited from the new policy. / The book is both informative and entertaining.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Volunteering has many benefits for both individuals and communities.」を5回音読してください。both A and B の構造を意識して発音しましょう。",
      phraseReplacements: [
        {
          original: "Volunteering benefits both individuals and communities.",
          instruction: "ボランティア活動や社会貢献について話しましょう。",
          examples: [
            "I volunteer at a food bank every month to give back to the community.",
            "Volunteering helped me develop communication and leadership skills.",
            "Many students volunteer abroad to gain international experience.",
          ],
        },
      ],
      dailyConversationTips: "「Have you ever volunteered?」（ボランティアをしたことがありますか？）「Yes, I used to volunteer at...」（はい、以前〜でボランティアをしていました）は社会参加の話題でよく使われます。",
    },
  },
  {
    id: "ri-006",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Nutrition plays a key role in physical and mental performance. A diet rich in fruits, vegetables, and whole grains provides the vitamins and minerals the body needs. In contrast, diets high in processed foods and sugar are linked to fatigue, mood swings, and increased risk of chronic disease. Experts recommend limiting sugar intake and increasing fiber consumption.'\n\nWhat does the passage say about diets high in processed foods?",
    options: [
      { id: "ri006-a", text: "They improve physical performance", isCorrect: false, translation: "身体能力を向上させる" },
      { id: "ri006-b", text: "They are linked to fatigue and mood swings", isCorrect: true, translation: "疲労や気分の波と関係がある" },
      { id: "ri006-c", text: "They are recommended by experts", isCorrect: false, translation: "専門家に勧められている" },
      { id: "ri006-d", text: "They have no effect on health", isCorrect: false, translation: "健康には影響がない" },
    ],
    explanation: "「diets high in processed foods and sugar are linked to fatigue, mood swings, and increased risk of chronic disease（加工食品や砂糖の多い食事は疲労、気分の波、慢性疾患リスクの増大と関連している）」と書かれています。",
    hint: "「diets high in processed foods（加工食品の多い食事）」について書かれた部分を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n栄養は身体的・精神的パフォーマンスに重要な役割を果たします。果物、野菜、全粒穀物が豊富な食事は、体が必要とするビタミンとミネラルを提供します。それに対し、加工食品や砂糖の多い食事は疲労、気分の波、慢性疾患のリスク増大と関連しています。専門家は砂糖の摂取を制限し、食物繊維の摂取を増やすことを推奨しています。\n\n【問題文の和訳】\nパッセージは加工食品の多い食事についてどのように述べていますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nニュートリション プレイズ ア キー ロール イン フィジカル アンド メンタル パフォーマンス。ア ダイエット リッチ イン フルーツ、ベジタブルズ、アンド ホール グレインズ プロバイズ ザ ビタミンズ アンド ミネラルズ ザ ボディー ニーズ。イン コントラスト、ダイエッツ ハイ イン プロセスト フーズ アンド シュガー アー リンクト トゥ ファティーグ、ムード スウィングズ、アンド インクリースト リスク オブ クロニック ディジーズ。エクスパーツ レコメンド リミティング シュガー インテイク アンド インクリーシング ファイバー コンサンプション。\n\n【問題文のカタカナ読み】\nワット ダズ ザ パッセージ セイ アバウト ダイエッツ ハイ イン プロセスト フーズ？",
    vocabularyItems: [
      { word: "be linked to", meaning: "〜と関連している", katakanaReading: "ビー リンクト トゥ", example: "Stress is linked to many health problems." },
      { word: "chronic disease", meaning: "慢性疾患", katakanaReading: "クロニック ディジーズ", example: "Poor diet increases the risk of chronic disease." },
      { word: "in contrast", meaning: "それに対して、対照的に", katakanaReading: "イン コントラスト", example: "In contrast, the second group showed improvement." },
    ],
    grammarPoints: [
      {
        rule: "In contrast を使った対比",
        explanation: "「In contrast（それとは対照的に）」は前の情報と反対・対比する内容を導入します。「A diet rich in vegetables is healthy. In contrast, a diet high in sugar is harmful.」読解では「In contrast」の前後で対比される内容を整理しましょう。",
        example: "City life is fast-paced. In contrast, rural life is calm and quiet. / Some students study alone. In contrast, others prefer group study.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「In contrast, diets high in processed foods and sugar are linked to fatigue and mood swings.」を5回音読してください。In contrast で文頭を始めるリズムを練習しましょう。",
      phraseReplacements: [
        {
          original: "A healthy diet provides vitamins. In contrast, processed food leads to health problems.",
          instruction: "In contrast を使って食習慣の対比を話しましょう。",
          examples: [
            "A Mediterranean diet is rich in healthy fats. In contrast, Western diets are high in processed foods.",
            "Regular exercise improves mood. In contrast, a sedentary lifestyle contributes to depression.",
            "Home-cooked meals are nutritious. In contrast, fast food is often high in calories.",
          ],
        },
      ],
      dailyConversationTips: "「In contrast to what I used to eat...」（以前の食事と対照的に…）は食習慣の変化を説明するときの便利な表現です。",
    },
  },
  {
    id: "ri-007",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Technology is changing the way students learn. Many schools are now using tablets, online resources, and interactive software in classrooms. Supporters argue that technology makes learning more engaging and prepares students for the digital workplace. Critics, however, warn that excessive screen time and overreliance on technology may reduce critical thinking skills.'\n\nWhat concern do critics have about technology in education?",
    options: [
      { id: "ri007-a", text: "It makes classrooms too expensive", isCorrect: false, translation: "教室を高価にしすぎる" },
      { id: "ri007-b", text: "It may reduce critical thinking skills", isCorrect: true, translation: "批判的思考力を低下させる可能性がある" },
      { id: "ri007-c", text: "It is not available in most schools", isCorrect: false, translation: "ほとんどの学校で利用できない" },
      { id: "ri007-d", text: "It makes students too social", isCorrect: false, translation: "生徒を社交的にしすぎる" },
    ],
    explanation: "「Critics warn that excessive screen time and overreliance on technology may reduce critical thinking skills（批評家は過度のスクリーンタイムと技術への過剰依存が批判的思考力を低下させる可能性があると警告している）」と書かれています。",
    hint: "「Critics（批評家）」が何を「warn（警告している）」かに注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\nテクノロジーは生徒の学び方を変えています。多くの学校で今やタブレット、オンラインリソース、インタラクティブソフトウェアが教室で使われています。支持者は、テクノロジーが学習をより魅力的にし、デジタル職場への準備をさせると主張しています。しかし批評家は、過度のスクリーンタイムとテクノロジーへの過剰依存が批判的思考力を低下させる可能性があると警告しています。\n\n【問題文の和訳】\n批評家が教育における技術についてどんな懸念を持っていますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nテクノロジー イズ チェンジング ザ ウェイ スチューデンツ ラーン。メニー スクールズ アー ナウ ユージング タブレッツ、オンライン リソーシズ、アンド インタラクティブ ソフトウェア イン クラスルームズ。サポーターズ アーギュー ザット テクノロジー メイクス ラーニング モア エンゲイジング アンド プリペアズ スチューデンツ フォー ザ デジタル ワークプレイス。クリティックス、ハウエバー、ウォーン ザット エクセシブ スクリーン タイム アンド オーバーリライアンス オン テクノロジー メイ リデュース クリティカル シンキング スキルズ。\n\n【問題文のカタカナ読み】\nワット コンサーン ドゥ クリティックス ハブ アバウト テクノロジー イン エデュケーション？",
    vocabularyItems: [
      { word: "engaging", meaning: "魅力的な、引き付ける", katakanaReading: "エンゲイジング", example: "The lecture was very engaging." },
      { word: "overreliance", meaning: "過剰依存", katakanaReading: "オーバーリライアンス", example: "Overreliance on GPS has reduced map-reading skills." },
      { word: "critical thinking", meaning: "批判的思考（論理的・独立した思考）", katakanaReading: "クリティカル シンキング", example: "Schools should teach critical thinking." },
    ],
    grammarPoints: [
      {
        rule: "Supporters argue... Critics warn...（対立する意見を整理する）",
        explanation: "学術的な文章では「Supporters argue that...(支持者は〜と主張する)」「Critics warn that...(批評家は〜と警告する)」のように、賛否両論を対比して提示します。読解では「who said what」を区別することが重要です。",
        example: "Proponents claim the policy will create jobs. Opponents argue it will increase costs. / Supporters say technology improves learning. Critics fear it reduces focus.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Critics warn that excessive screen time may reduce critical thinking skills.」を5回音読してください。critical thinking をはっきり発音しましょう。",
      phraseReplacements: [
        {
          original: "Supporters argue technology makes learning engaging. Critics warn it may reduce critical thinking.",
          instruction: "テクノロジーと教育について賛否を話しましょう。",
          examples: [
            "Some argue that AI will improve education; others fear it will replace teachers.",
            "Tablets can make learning fun, but students may become too dependent on them.",
            "I think technology is helpful as long as it is used in a balanced way.",
          ],
        },
      ],
      dailyConversationTips: "「On one hand... On the other hand...」（一方では〜、他方では〜）は両面から意見を述べるときの便利な表現です。ディスカッションで使いましょう。",
    },
  },
  {
    id: "ri-008",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Reading for pleasure is declining among young people. Research shows that teenagers spend more time on social media than reading books. This concerns educators because regular reading improves vocabulary, concentration, and empathy. Some schools are introducing 'free reading time' during the school day to encourage the habit.'\n\nWhy do educators find the decline in reading concerning?",
    options: [
      { id: "ri008-a", text: "Because it increases social media use", isCorrect: false, translation: "SNSの使用が増えるから" },
      { id: "ri008-b", text: "Because reading improves vocabulary, concentration, and empathy", isCorrect: true, translation: "読書は語彙・集中力・共感力を高めるから" },
      { id: "ri008-c", text: "Because schools have no free time", isCorrect: false, translation: "学校に自由時間がないから" },
      { id: "ri008-d", text: "Because books are too expensive", isCorrect: false, translation: "本が高すぎるから" },
    ],
    explanation: "「This concerns educators because regular reading improves vocabulary, concentration, and empathy（読書習慣の低下が教育者を心配させるのは、定期的な読書が語彙・集中力・共感力を向上させるからだ）」と because 節に理由が書かれています。",
    hint: "「because（なぜなら）」の後に理由が続きます。教育者が心配する理由を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n若者の間で楽しみのための読書が減っています。研究によると、10代の若者は本を読むよりもSNSに多くの時間を費やしています。これが教育者を心配させているのは、定期的な読書が語彙、集中力、共感力を向上させるからです。一部の学校では、習慣を促進するために授業中に「自由読書の時間」を導入しています。\n\n【問題文の和訳】\nなぜ教育者は読書離れを懸念しているのですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nリーディング フォー プレジャー イズ ディクライニング アマング ヤング ピープル。リサーチ ショウズ ザット ティーンエイジャーズ スペンド モア タイム オン ソーシャル メディア ザン リーディング ブックス。ディス コンサーンズ エデュケイターズ ビコーズ レギュラー リーディング インプルーブズ ボキャブラリー、コンセントレーション、アンド エンパシー。サム スクールズ アー イントロデューシング フリー リーディング タイム ダリング ザ スクール デイ トゥ エンカレッジ ザ ハビット。\n\n【問題文のカタカナ読み】\nホワイ ドゥ エデュケイターズ ファインド ザ ディクライン イン リーディング コンサーニング？",
    vocabularyItems: [
      { word: "decline", meaning: "低下、減少（名詞）/ 低下する（動詞）", katakanaReading: "ディクライン", example: "There has been a decline in book sales." },
      { word: "empathy", meaning: "共感力、感情移入", katakanaReading: "エンパシー", example: "Reading fiction develops empathy." },
      { word: "encourage", meaning: "促進する、勧める", katakanaReading: "エンカレッジ", example: "Parents should encourage children to read." },
    ],
    grammarPoints: [
      {
        rule: "This concerns educators because...（理由を示す because）",
        explanation: "読解問題では「Why does...?」という質問に対して「because + 理由」を本文から探します。「This concerns educators because reading improves vocabulary.」という文では「because」以下が理由です。",
        example: "This worries doctors because it can lead to health problems. / This excites students because it makes learning fun.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Regular reading improves vocabulary, concentration, and empathy.」を5回音読してください。vocabulary, concentration, and empathy の3語を明確に発音しましょう。",
      phraseReplacements: [
        {
          original: "Regular reading improves vocabulary, concentration, and empathy.",
          instruction: "読書の習慣と効果について話しましょう。",
          examples: [
            "I try to read for 30 minutes before bed to improve my English vocabulary.",
            "Reading novels helps me understand different perspectives and cultures.",
            "My school introduced silent reading time every morning, and I think it really helps.",
          ],
        },
      ],
      dailyConversationTips: "「What kind of books do you enjoy reading?」（どんな本を読むのが好きですか？）は共通の話題を見つけるための会話のきっかけになります。",
    },
  },
  {
    id: "ri-009",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Cultural diversity in the workplace has many advantages. Companies with diverse teams tend to be more creative because employees bring different perspectives and experiences. However, managing a diverse team requires strong communication skills and cultural awareness. Without proper training, misunderstandings can arise and affect team performance.'\n\nWhat can happen without proper training in a diverse team?",
    options: [
      { id: "ri009-a", text: "Teams become more creative", isCorrect: false, translation: "チームがより創造的になる" },
      { id: "ri009-b", text: "Misunderstandings can arise and affect performance", isCorrect: true, translation: "誤解が生じ業績に影響する可能性がある" },
      { id: "ri009-c", text: "Employees share the same perspective", isCorrect: false, translation: "社員が同じ視点を持つ" },
      { id: "ri009-d", text: "Companies lose money immediately", isCorrect: false, translation: "会社がすぐに損失を出す" },
    ],
    explanation: "「Without proper training, misunderstandings can arise and affect team performance（適切なトレーニングなしでは誤解が生じ、チームのパフォーマンスに影響する可能性がある）」と書かれています。",
    hint: "「Without proper training（適切なトレーニングなしでは）」の後に何が続きますか？",
    questionTranslation: "【パッセージ全体の和訳】\n職場における文化的多様性には多くのメリットがあります。多様なチームを持つ企業は、従業員が異なる視点や経験を持ち込むため、より創造的になる傾向があります。しかし、多様なチームを管理するには強力なコミュニケーション能力と文化的認識が必要です。適切なトレーニングがなければ誤解が生じ、チームのパフォーマンスに影響することがあります。\n\n【問題文の和訳】\n多様なチームで適切なトレーニングなしに何が起こりうるのですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nカルチャラル ダイバーシティー イン ザ ワークプレイス ハズ メニー アドバンテージズ。カンパニーズ ウィズ ダイバース ティームズ テンド トゥ ビー モア クリエイティブ ビコーズ エンプロイーズ ブリング ディファレント パースペクティブズ アンド エクスペリエンシズ。ハウエバー、マネージング ア ダイバース ティーム リクワイアーズ ストロング コミュニケーション スキルズ アンド カルチャラル アウェアネス。ウィザウト プロパー トレーニング、ミスアンダースタンディングズ キャン アライズ アンド アフェクト ティーム パフォーマンス。\n\n【問題文のカタカナ読み】\nワット キャン ハプン ウィザウト プロパー トレーニング イン ア ダイバース ティーム？",
    vocabularyItems: [
      { word: "diversity", meaning: "多様性", katakanaReading: "ダイバーシティー", example: "Diversity in the workplace leads to innovation." },
      { word: "perspective", meaning: "視点、観点", katakanaReading: "パースペクティブ", example: "Try to see things from a different perspective." },
      { word: "arise", meaning: "（問題などが）生じる、起こる", katakanaReading: "アライズ", example: "New problems arose during the project." },
    ],
    grammarPoints: [
      {
        rule: "Without + 名詞（〜なしでは）",
        explanation: "「Without + 名詞/動名詞」は「〜がなければ、〜なしでは」という条件を表します。「Without proper training, mistakes can happen.」「Without water, plants cannot survive.」読解では否定条件の結果を確認しましょう。",
        example: "Without effort, success is impossible. / Without communication, relationships fail. / Without sleep, the body cannot recover.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Without proper training, misunderstandings can arise and affect team performance.」を5回音読してください。Without の後の条件節をはっきり発音しましょう。",
      phraseReplacements: [
        {
          original: "Without proper training, misunderstandings can arise.",
          instruction: "文化的多様性とコミュニケーションについて話しましょう。",
          examples: [
            "Without cultural awareness, it's easy to offend someone unintentionally.",
            "Effective communication is key to managing a diverse team.",
            "I think diversity makes teams more creative and productive.",
          ],
        },
      ],
      dailyConversationTips: "「Without good communication, no team can succeed.」（良いコミュニケーションなしではどんなチームも成功できない）はチームワークを語る場面でよく使われる表現です。",
    },
  },
  {
    id: "ri-010",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Local farmers markets provide fresh, seasonal produce directly to consumers. They support small farmers and help reduce the carbon footprint associated with transporting food long distances. Shopping at a farmers market also gives people the opportunity to connect with producers and learn about where their food comes from.'\n\nWhat is one environmental benefit of shopping at a farmers market?",
    options: [
      { id: "ri010-a", text: "Food is cheaper than at supermarkets", isCorrect: false, translation: "スーパーより安い食品" },
      { id: "ri010-b", text: "It reduces the carbon footprint from food transportation", isCorrect: true, translation: "食品輸送による炭素排出量を削減する" },
      { id: "ri010-c", text: "Farmers markets are open every day", isCorrect: false, translation: "毎日開かれている" },
      { id: "ri010-d", text: "Consumers can cook at the market", isCorrect: false, translation: "マーケットで料理できる" },
    ],
    explanation: "「help reduce the carbon footprint associated with transporting food long distances（食品を長距離輸送することに関連する炭素排出量の削減に役立つ）」と環境面のメリットが述べられています。",
    hint: "パッセージの中で「carbon footprint（炭素排出量）」について書かれた部分を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n地元のファーマーズマーケットは、消費者に新鮮な旬の農産物を直接提供します。小農家を支援し、食品を長距離輸送することに関連する炭素排出量の削減に役立ちます。ファーマーズマーケットでの買い物は、生産者と交流し食品の産地について学ぶ機会も与えてくれます。\n\n【問題文の和訳】\nファーマーズマーケットでの買い物の環境面のメリットの一つは何ですか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nローカル ファーマーズ マーケッツ プロバイド フレッシュ、スィーズナル プロデュース ダイレクトリー トゥ コンシューマーズ。ゼイ サポート スモール ファーマーズ アンド ヘルプ リデュース ザ カーボン フットプリント アソシエイテッド ウィズ トランスポーティング フード ロング ディスタンシズ。ショッピング アット ア ファーマーズ マーケット オールソウ ギブズ ピープル ザ オポチュニティー トゥ コネクト ウィズ プロデューサーズ アンド ラーン アバウト ウェア ゼア フード カムズ フロム。\n\n【問題文のカタカナ読み】\nワット イズ ワン エンバイロンメンタル ベネフィット オブ ショッピング アット ア ファーマーズ マーケット？",
    vocabularyItems: [
      { word: "carbon footprint", meaning: "炭素排出量", katakanaReading: "カーボン フットプリント", example: "Eating local food reduces your carbon footprint." },
      { word: "seasonal", meaning: "旬の、季節の", katakanaReading: "スィーズナル", example: "I prefer seasonal fruits and vegetables." },
      { word: "associated with", meaning: "〜と関連した", katakanaReading: "アソシエイテッド ウィズ", example: "The risks associated with smoking are well known." },
    ],
    grammarPoints: [
      {
        rule: "associated with（分詞句での名詞修飾）",
        explanation: "「associated with（〜と関連した）」は過去分詞を使った分詞句で直前の名詞を修飾します。「the carbon footprint associated with transporting food」=「食品輸送と関連した炭素排出量」。このような分詞句は academic writing でよく使われます。",
        example: "The risks associated with smoking are serious. / The costs associated with the project were high.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Shopping at a farmers market helps reduce the carbon footprint from transporting food long distances.」を5回音読してください。carbon footprint をはっきり発音しましょう。",
      phraseReplacements: [
        {
          original: "Shopping at a farmers market reduces the carbon footprint from food transport.",
          instruction: "環境に配慮した行動について話しましょう。",
          examples: [
            "Buying locally grown food is one way to reduce environmental impact.",
            "I try to choose seasonal produce to support local farmers and the environment.",
            "Reducing food waste is an important way to lower our carbon footprint.",
          ],
        },
      ],
      dailyConversationTips: "「Do you try to buy locally?」（地元産を買うようにしていますか？）は環境問題に関心のある人との話題に自然に使えるフレーズです。",
    },
  },
  {
    id: "ri-011",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Exercise has well-documented mental health benefits. Physical activity releases endorphins, which are natural mood elevators. Regular exercise has also been shown to reduce symptoms of depression and anxiety. Some mental health professionals now recommend exercise as a complementary treatment alongside traditional therapy.'\n\nHow do some mental health professionals view exercise?",
    options: [
      { id: "ri011-a", text: "As a replacement for all medication", isCorrect: false, translation: "あらゆる薬の代替として" },
      { id: "ri011-b", text: "As a complementary treatment alongside therapy", isCorrect: true, translation: "従来の治療と並行する補助的な治療として" },
      { id: "ri011-c", text: "As harmful to mental health", isCorrect: false, translation: "メンタルヘルスに有害なものとして" },
      { id: "ri011-d", text: "As only useful for physical health", isCorrect: false, translation: "身体的健康にのみ有益なものとして" },
    ],
    explanation: "「Some mental health professionals now recommend exercise as a complementary treatment alongside traditional therapy（一部のメンタルヘルス専門家は従来の治療と並行する補助的な治療として運動を勧めている）」と書かれています。",
    hint: "「Some mental health professionals now recommend...」の部分を確認しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n運動がメンタルヘルスに与える恩恵はよく記録されています。身体活動はエンドルフィンを放出し、これは天然の気分向上物質です。定期的な運動はうつ病や不安症の症状を軽減することも示されています。一部のメンタルヘルス専門家は今や、従来の治療と並行する補助的な治療として運動を勧めています。\n\n【問題文の和訳】\n一部のメンタルヘルス専門家は運動をどのように見ていますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nエクササイズ ハズ ウェル ドキュメンテッド メンタル ヘルス ベネフィッツ。フィジカル アクティビティー リリーシズ エンドルフィンズ、ウィッチ アー ナチュラル ムード エレベイターズ。レギュラー エクササイズ ハズ オールソウ ビーン ショウン トゥ リデュース シンプトムズ オブ ディプレッション アンド アングザイエティー。サム メンタル ヘルス プロフェッショナルズ ナウ レコメンド エクササイズ アズ ア コンプリメンタリー トリートメント アロングサイド トラディショナル セラピー。\n\n【問題文のカタカナ読み】\nハウ ドゥ サム メンタル ヘルス プロフェッショナルズ ビュー エクササイズ？",
    vocabularyItems: [
      { word: "endorphin", meaning: "エンドルフィン（神経物質）", katakanaReading: "エンドルフィン", example: "Exercise releases endorphins that boost mood." },
      { word: "complementary", meaning: "補完的な、補助的な", katakanaReading: "コンプリメンタリー", example: "Acupuncture is a complementary treatment." },
      { word: "alongside", meaning: "〜と並行して、〜と一緒に", katakanaReading: "アロングサイド", example: "Diet works best alongside regular exercise." },
    ],
    grammarPoints: [
      {
        rule: "recommend + 名詞 + as（〜として勧める）",
        explanation: "「recommend A as B（AをBとして勧める）」は推薦の表現です。「Professionals recommend exercise as a treatment.」「Doctors recommend yoga as a stress reliever.」recommend の後は名詞または動名詞が続きます。",
        example: "She recommended the book as a great resource. / He recommended walking as a form of exercise.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Mental health professionals recommend exercise as a complementary treatment alongside traditional therapy.」を5回音読してください。complementary の /ˌkɒmplɪˈmentəri/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "Exercise is recommended as a complementary treatment for depression.",
          instruction: "運動とメンタルヘルスについて話しましょう。",
          examples: [
            "Going for a walk when I'm stressed really helps clear my mind.",
            "Regular exercise has improved my mood and energy levels significantly.",
            "I think schools should encourage daily physical activity to support student well-being.",
          ],
        },
      ],
      dailyConversationTips: "「Exercise really helps me manage stress.」（運動がストレス管理にとても役立っています）は健康について話すときの自然な表現です。",
    },
  },
  {
    id: "ri-012",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Many cities are facing housing shortages due to rapid population growth. As a result, housing prices have risen sharply, making it difficult for low and middle-income families to afford homes. Local governments are responding with policies such as rent control, subsidized housing programs, and zoning changes to encourage more construction.'\n\nWhat has caused housing prices to rise?",
    options: [
      { id: "ri012-a", text: "Decrease in construction workers", isCorrect: false, translation: "建設労働者の減少" },
      { id: "ri012-b", text: "Rapid population growth", isCorrect: true, translation: "急速な人口増加" },
      { id: "ri012-c", text: "Government spending cuts", isCorrect: false, translation: "政府支出の削減" },
      { id: "ri012-d", text: "Lower demand for housing", isCorrect: false, translation: "住宅需要の低下" },
    ],
    explanation: "「Many cities are facing housing shortages due to rapid population growth（急速な人口増加による住宅不足）」→「housing prices have risen sharply（住宅価格が急上昇）」という因果関係が示されています。",
    hint: "「due to（〜が原因で）」という表現に注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n多くの都市が急速な人口増加による住宅不足に直面しています。その結果、住宅価格が急上昇し、低中所得世帯が住居を購入することが難しくなっています。地方政府は家賃規制、住宅補助プログラム、建設を促進するゾーニング変更などの政策で対応しています。\n\n【問題文の和訳】\n何が住宅価格の上昇を引き起こしましたか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nメニー スィティーズ アー フェイシング ハウジング ショーテージズ デュー トゥ ラピッド ポピュレーション グロウス。アズ ア リザルト、ハウジング プライシズ ハブ ライズン シャープリー、メイキング イット ディフィカルト フォー ロウ アンド ミドル インカム ファミリーズ トゥ アフォード ホームズ。ローカル ガバメンツ アー リスポンディング ウィズ ポリシーズ サッチ アズ レント コントロール、サブシダイズド ハウジング プログラムズ、アンド ゾーニング チェンジズ トゥ エンカレッジ モア コンストラクション。\n\n【問題文のカタカナ読み】\nワット ハズ コーズド ハウジング プライシズ トゥ ライズ？",
    vocabularyItems: [
      { word: "due to", meaning: "〜が原因で", katakanaReading: "デュー トゥ", example: "The flight was delayed due to bad weather." },
      { word: "shortage", meaning: "不足", katakanaReading: "ショーテージ", example: "There is a shortage of qualified teachers." },
      { word: "subsidized", meaning: "補助金を受けた、公費支援の", katakanaReading: "サブシダイズド", example: "Subsidized housing is available for low-income families." },
    ],
    grammarPoints: [
      {
        rule: "due to vs because of（原因を表す表現）",
        explanation: "「due to + 名詞（〜が原因で）」は formal な表現。「because of + 名詞」はより日常的。どちらも後ろに名詞（句）を置きます。「The shortage is due to population growth.」「The flight was canceled because of the storm.」",
        example: "Due to heavy rain, the game was postponed. / She was absent because of illness. / The delay was due to technical problems.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Housing prices have risen sharply due to rapid population growth.」を5回音読してください。due to の発音とアクセントを練習しましょう。",
      phraseReplacements: [
        {
          original: "Housing prices have risen sharply due to rapid population growth.",
          instruction: "都市問題や住宅について話しましょう。",
          examples: [
            "Rent in big cities has increased dramatically due to high demand.",
            "Many young people cannot afford to buy a home due to rising prices.",
            "The government needs to build more affordable housing for low-income families.",
          ],
        },
      ],
      dailyConversationTips: "「Housing is a real issue where I live.」（私の地域では住宅問題は深刻です）は社会問題を話題にするときの入り口として使えます。",
    },
  },
  {
    id: "ri-013",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Study habits have a significant impact on academic performance. Research suggests that active learning strategies, such as summarizing notes, self-testing, and teaching others, are more effective than passive reading. Students who space out their study sessions over time tend to retain information better than those who cram the night before an exam.'\n\nWhat does research suggest about active learning?",
    options: [
      { id: "ri013-a", text: "It is less effective than passive reading", isCorrect: false, translation: "受動的な読書より効果が低い" },
      { id: "ri013-b", text: "It is more effective than passive reading", isCorrect: true, translation: "受動的な読書より効果が高い" },
      { id: "ri013-c", text: "It should be done the night before an exam", isCorrect: false, translation: "試験前夜に行うべきだ" },
      { id: "ri013-d", text: "It only works for certain subjects", isCorrect: false, translation: "特定の科目にしか効果がない" },
    ],
    explanation: "「active learning strategies...are more effective than passive reading（アクティブラーニングは受動的な読書より効果的）」と明記されています。比較表現の more effective than に注目します。",
    hint: "「more effective than（〜より効果的）」という比較表現を探しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n学習習慣は学業成績に大きな影響を与えます。研究によると、ノートを要約する、自己テストをする、他者に教えるなどのアクティブラーニング戦略は、受動的な読書よりも効果的です。学習を時間をかけて分散させる学生は、試験前夜に一気に詰め込む学生よりも情報をよく保持する傾向があります。\n\n【問題文の和訳】\n研究はアクティブラーニングについて何を示唆していますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nスタディー ハビッツ ハブ ア シグニフィカント インパクト オン アカデミック パフォーマンス。リサーチ サジェスツ ザット アクティブ ラーニング ストラテジーズ、サッチ アズ サマライジング ノーツ、セルフ テスティング、アンド ティーチング アザーズ、アー モア エフェクティブ ザン パッシブ リーディング。スチューデンツ フー スペイス アウト ゼア スタディー セッションズ オーバー タイム テンド トゥ リテイン インフォメーション ベター ザン ゾウズ フー クラム ザ ナイト ビフォア アン イグザム。\n\n【問題文のカタカナ読み】\nワット ダズ リサーチ サジェスト アバウト アクティブ ラーニング？",
    vocabularyItems: [
      { word: "self-testing", meaning: "自己テスト（問題を自分で出して解く）", katakanaReading: "セルフ テスティング", example: "Self-testing is one of the best ways to study." },
      { word: "retain", meaning: "保持する、記憶しておく", katakanaReading: "リテイン", example: "We retain information better when we are interested." },
      { word: "cram", meaning: "（試験前に）詰め込む、一夜漬けする", katakanaReading: "クラム", example: "Cramming the night before doesn't work well." },
    ],
    grammarPoints: [
      {
        rule: "such as を使った例示",
        explanation: "「such as（〜など、〜のような）」は具体例を挙げるときに使います。「active learning strategies, such as summarizing, self-testing, and teaching others」。読解では「such as」の後に具体的な例が続くことに注意しましょう。",
        example: "Healthy foods, such as fruits and vegetables, are rich in vitamins. / Outdoor activities, such as hiking and cycling, are good for health.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Active learning strategies, such as summarizing notes and self-testing, are more effective than passive reading.」を5回音読してください。such as のリズムを意識しましょう。",
      phraseReplacements: [
        {
          original: "Active learning is more effective than passive reading.",
          instruction: "効果的な学習法について話しましょう。",
          examples: [
            "I find that making flashcards and quizzing myself helps me remember vocabulary.",
            "Teaching concepts to others is the best way to truly understand them.",
            "I study for one hour daily rather than cramming the night before a test.",
          ],
        },
      ],
      dailyConversationTips: "「What's your study strategy?」（勉強のやり方はどうしていますか？）はクラスメートとの自然な会話のきっかけになります。",
    },
  },
  {
    id: "ri-014",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Recycling plays an important role in waste management. By converting used materials into new products, recycling reduces the amount of waste sent to landfills and lowers greenhouse gas emissions. However, not all materials are recyclable, and contamination of recyclables with non-recyclable waste can reduce the effectiveness of recycling programs.'\n\nWhat problem can reduce the effectiveness of recycling?",
    options: [
      { id: "ri014-a", text: "Using too many recycling bins", isCorrect: false, translation: "リサイクルビンを使いすぎる" },
      { id: "ri014-b", text: "Contamination with non-recyclable waste", isCorrect: true, translation: "リサイクルできないゴミによる汚染" },
      { id: "ri014-c", text: "Producing too many new products", isCorrect: false, translation: "新製品を作りすぎる" },
      { id: "ri014-d", text: "High government investment", isCorrect: false, translation: "政府の高額な投資" },
    ],
    explanation: "「contamination of recyclables with non-recyclable waste can reduce the effectiveness of recycling programs（リサイクル不可なゴミがリサイクル可能物に混入するとリサイクルプログラムの効果が低下する）」と書かれています。",
    hint: "「can reduce the effectiveness（効果を低下させる可能性がある）」につながるのは何ですか？",
    questionTranslation: "【パッセージ全体の和訳】\nリサイクルは廃棄物管理において重要な役割を担っています。使用済み素材を新しい製品に変換することで、リサイクルは埋立地へのゴミ量を減らし、温室効果ガスの排出を抑えます。しかし、すべての素材がリサイクル可能なわけではなく、リサイクル物へのリサイクル不可物の混入はリサイクルプログラムの効果を低下させることがあります。\n\n【問題文の和訳】\n何がリサイクルの効果を低下させる可能性がありますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nリサイクリング プレイズ アン インポータント ロール イン ウェイスト マネージメント。バイ コンバーティング ユーズド マテリアルズ イントゥ ニュー プロダクツ、リサイクリング リデュースィズ ザ アマウント オブ ウェイスト セント トゥ ランドフィルズ アンド ロワーズ グリーンハウス ガス エミッションズ。ハウエバー、ノット オール マテリアルズ アー リサイクラブル、アンド コンタミネーション オブ リサイクラブルズ ウィズ ノン リサイクラブル ウェイスト キャン リデュース ザ エフェクティブネス オブ リサイクリング プログラムズ。\n\n【問題文のカタカナ読み】\nワット プロブレム キャン リデュース ザ エフェクティブネス オブ リサイクリング？",
    vocabularyItems: [
      { word: "landfill", meaning: "埋立地", katakanaReading: "ランドフィル", example: "Landfills produce methane gas." },
      { word: "contamination", meaning: "汚染、混入", katakanaReading: "コンタミネーション", example: "Contamination of water sources is a serious problem." },
      { word: "greenhouse gas", meaning: "温室効果ガス", katakanaReading: "グリーンハウス ガス", example: "Carbon dioxide is a major greenhouse gas." },
    ],
    grammarPoints: [
      {
        rule: "By + -ing（〜することによって：手段）",
        explanation: "「By + -ing」は手段や方法を表します。「By converting materials into new products, recycling reduces waste.」（素材を変換することで廃棄物を減らす）。By 節は文頭または文末に置けます。",
        example: "By exercising regularly, you can improve your health. / She learned English by watching TV shows. / By saving energy, we reduce our carbon footprint.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「By converting used materials into new products, recycling reduces the amount of waste sent to landfills.」を5回音読してください。converting をはっきり発音しましょう。",
      phraseReplacements: [
        {
          original: "By recycling, we reduce waste and lower greenhouse gas emissions.",
          instruction: "環境保護の手段について話しましょう。",
          examples: [
            "By using reusable bags, we can reduce plastic waste.",
            "By taking public transportation, you can lower your carbon footprint.",
            "By sorting recyclables properly, we can make recycling programs more effective.",
          ],
        },
      ],
      dailyConversationTips: "「Do you recycle at home?」（自宅でリサイクルをしていますか？）は環境について話すきっかけになります。日本のごみ分別ルールを英語で説明できると非常に印象的です。",
    },
  },
  {
    id: "ri-015",
    category: "reading",
    difficulty: "intermediate",
    question: "Passage: 'Language learning requires consistent practice and exposure to the target language. Immersion programs, where students are surrounded by the language all day, are highly effective. However, they are not always accessible. For those unable to study abroad, alternatives such as language exchange partners, apps, and online tutors can provide meaningful practice opportunities.'\n\nWhat does the passage say about immersion programs?",
    options: [
      { id: "ri015-a", text: "They are not effective for learning languages", isCorrect: false, translation: "言語習得に効果がない" },
      { id: "ri015-b", text: "They are highly effective but not always accessible", isCorrect: true, translation: "非常に効果的だが、常に利用できるわけではない" },
      { id: "ri015-c", text: "They are available online for free", isCorrect: false, translation: "オンラインで無料で利用できる" },
      { id: "ri015-d", text: "They replace all other learning methods", isCorrect: false, translation: "他のすべての学習法を置き換える" },
    ],
    explanation: "「Immersion programs...are highly effective. However, they are not always accessible.（イマージョンプログラムは非常に効果的だが、常に利用できるわけではない）」と両面が述べられています。",
    hint: "「highly effective」と「However」の後の制限に注目しましょう。",
    questionTranslation: "【パッセージ全体の和訳】\n言語学習には継続的な練習と対象言語への触れ合いが必要です。一日中その言語に囲まれるイマージョンプログラムは非常に効果的です。しかし、常に利用できるわけではありません。海外留学できない人には、言語交換パートナー、アプリ、オンライン家庭教師などの代替手段が有意義な練習機会を提供できます。\n\n【問題文の和訳】\nパッセージはイマージョンプログラムについて何と述べていますか？",
    questionKatakana: "【パッセージ全体のカタカナ読み】\nランゲージ ラーニング リクワイアーズ コンシステント プラクティス アンド エクスポージャー トゥ ザ ターゲット ランゲージ。イマージョン プログラムズ、ウェア スチューデンツ アー サラウンデッド バイ ザ ランゲージ オール デイ、アー ハイリー エフェクティブ。ハウエバー、ゼイ アー ノット オールウェイズ アクセシブル。フォー ゾウズ アネイブル トゥ スタディー アブロード、オルタナティブズ サッチ アズ ランゲージ エクスチェンジ パートナーズ、アップス、アンド オンライン チューターズ キャン プロバイド ミーニングフル プラクティス オポチュニティーズ。\n\n【問題文のカタカナ読み】\nワット ダズ ザ パッセージ セイ アバウト イマージョン プログラムズ？",
    vocabularyItems: [
      { word: "immersion", meaning: "（言語）没入、イマージョン", katakanaReading: "イマージョン", example: "Total immersion is the fastest way to learn a language." },
      { word: "accessible", meaning: "利用・アクセスしやすい", katakanaReading: "アクセシブル", example: "Online courses are accessible to everyone." },
      { word: "language exchange", meaning: "言語交換（お互いの言語を教え合う）", katakanaReading: "ランゲージ エクスチェンジ", example: "I practice English through language exchange with an American friend." },
    ],
    grammarPoints: [
      {
        rule: "where 関係副詞（先行詞が場所以外の場合）",
        explanation: "「Immersion programs, where students are surrounded by the language all day」の where は関係副詞で、「イマージョンプログラムにおいて（その状況で）学生は〜」という意味の非制限用法です。where は場所だけでなく状況・状態を説明するときにも使えます。",
        example: "A situation where everyone cooperates leads to success. / An environment where students feel safe encourages learning.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Immersion programs are highly effective. However, they are not always accessible.」を5回音読してください。However の後のコンマ（ポーズ）を意識して発音しましょう。",
      phraseReplacements: [
        {
          original: "Immersion programs are effective but not always accessible.",
          instruction: "言語学習の方法について話しましょう。",
          examples: [
            "I practice English by watching YouTube videos and talking with international classmates.",
            "Language exchange apps are a great alternative to studying abroad.",
            "Even without immersion, consistent daily practice can make a big difference.",
          ],
        },
      ],
      dailyConversationTips: "「How do you practice English outside of class?」（授業以外でどうやって英語を練習していますか？）はクラスメートや先生からよく聞かれる質問です。自分の方法を具体的に話せると印象が上がります。",
    },
  },
];
