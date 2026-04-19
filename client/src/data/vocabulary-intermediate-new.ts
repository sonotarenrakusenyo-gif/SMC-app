import { QuizQuestion } from "./quizzes";

export const vocabularyIntermediateNewQuizzes: QuizQuestion[] = [
  {
    id: "vi-001",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The new safety regulations are _____ for all employees, not just managers.",
    options: [
      { id: "vi001-a", text: "optional", isCorrect: false, translation: "任意の、選択できる" },
      { id: "vi001-b", text: "mandatory", isCorrect: true, translation: "義務的な、強制的な" },
      { id: "vi001-c", text: "temporary", isCorrect: false, translation: "一時的な" },
      { id: "vi001-d", text: "personal", isCorrect: false, translation: "個人的な" },
    ],
    explanation: "「not just managers（マネージャーだけでなく）」という表現から全員に適用されることが分かります。「mandatory（義務的な）」が正解です。optional（任意の）は逆の意味です。",
    hint: "全従業員に適用されるということは、その規則は「任意」ですか「義務」ですか？",
    questionTranslation: "新しい安全規則はマネージャーだけでなく、すべての従業員に義務付けられています。",
    questionKatakana: "ザ ニュー セイフティー レギュレーションズ アー マンダトリー フォー オール エンプロイーズ、ノット ジャスト マネージャーズ。",
    vocabularyItems: [
      { word: "mandatory", meaning: "義務的な、強制の", katakanaReading: "マンダトリー", example: "Attendance is mandatory for this course." },
      { word: "optional", meaning: "任意の、自由選択の", katakanaReading: "オプショナル", example: "The extra assignment is optional." },
      { word: "regulation", meaning: "規則、規制", katakanaReading: "レギュレーション", example: "New environmental regulations were introduced." },
    ],
    grammarPoints: [
      {
        rule: "義務・強制を表す形容詞の使い分け",
        explanation: "mandatory（法律・規則で義務付けられた）、compulsory（強制的な、mandatory と近似）、required（必要とされる）、optional（任意）、voluntary（自発的な）。文脈に応じて使い分けましょう。",
        example: "Wearing a seatbelt is mandatory. / Homework is compulsory in this class. / The final exam is required.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The new safety regulations are mandatory for all employees.」を5回音読してください。mandatory の /ˈmændətɔːri/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The new safety regulations are mandatory for all employees.",
          instruction: "mandatory と optional を使って規則について話しましょう。",
          examples: [
            "Wearing a uniform is mandatory at this school.",
            "Attendance at the orientation is mandatory for new students.",
            "The seminar is optional, but highly recommended.",
          ],
        },
      ],
      dailyConversationTips: "「Is this mandatory or optional?」（これは義務ですか、任意ですか？）は授業やセミナーで必ず役立つ質問です。",
    },
  },
  {
    id: "vi-002",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "Scientists use experiments to _____ their theories with real-world data.",
    options: [
      { id: "vi002-a", text: "ignore", isCorrect: false, translation: "無視する" },
      { id: "vi002-b", text: "deny", isCorrect: false, translation: "否定する" },
      { id: "vi002-c", text: "validate", isCorrect: true, translation: "検証する、正当性を確認する" },
      { id: "vi002-d", text: "replace", isCorrect: false, translation: "置き換える" },
    ],
    explanation: "「experiments（実験）」と「real-world data（実際のデータ）」を使って理論の正しさを「検証する（validate）」のが科学的アプローチです。ignore や deny は科学の目的に反します。",
    hint: "科学者が実験を使って理論に対して行うことは何ですか？",
    questionTranslation: "科学者は実際のデータで理論を検証するために実験を行います。",
    questionKatakana: "サイエンティスツ ユーズ エクスペリメンツ トゥ バリデイト ゼア セオリーズ ウィズ リアルワールド データ。",
    vocabularyItems: [
      { word: "validate", meaning: "検証する、正当性を確かめる", katakanaReading: "バリデイト", example: "The results validate our hypothesis." },
      { word: "theory", meaning: "理論", katakanaReading: "セオリー", example: "Einstein's theory of relativity is famous." },
      { word: "data", meaning: "データ（不可算名詞扱い）", katakanaReading: "データ", example: "The data supports the conclusion." },
    ],
    grammarPoints: [
      {
        rule: "validate / verify / confirm の違い",
        explanation: "validate（有効性や正確性を証明する）、verify（事実かどうかを確認する）、confirm（既に知っていることを確かめる）。「The experiment validated the theory.」「Please verify your email address.」「Can you confirm the meeting time?」",
        example: "The study validated the new treatment. / I need to verify the information before sharing it. / Please confirm your reservation.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Scientists use experiments to validate their theories with real-world data.」を5回音読してください。validate の /ˈvælɪdeɪt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "Scientists use experiments to validate their theories.",
          instruction: "validate/verify/confirm を使ってアカデミックな文を作りましょう。",
          examples: [
            "The researcher validated her findings with multiple tests.",
            "Please verify the information before submitting the report.",
            "The data confirms our initial hypothesis.",
          ],
        },
      ],
      dailyConversationTips: "「Can you verify that?」（それは確認できますか？）はビジネスや学術的な場面で使う便利なフレーズです。",
    },
  },
  {
    id: "vi-003",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The heavy rain had a significant _____ on the outdoor festival.",
    options: [
      { id: "vi003-a", text: "reason", isCorrect: false, translation: "理由" },
      { id: "vi003-b", text: "impact", isCorrect: true, translation: "影響、衝撃" },
      { id: "vi003-c", text: "solution", isCorrect: false, translation: "解決策" },
      { id: "vi003-d", text: "schedule", isCorrect: false, translation: "スケジュール" },
    ],
    explanation: "大雨がフェスティバルに「significant（重大な）」な「impact（影響）」を与えたという文脈です。impact は「have an impact on」という形でよく使われます。",
    hint: "大雨がフェスティバルに「与えたもの」は何ですか？",
    questionTranslation: "大雨は屋外フェスティバルに大きな影響を与えました。",
    questionKatakana: "ザ ヘビー レイン ハッド ア シグニフィカント インパクト オン ザ アウトドア フェスティバル。",
    vocabularyItems: [
      { word: "impact", meaning: "影響、衝撃", katakanaReading: "インパクト", example: "The new law had a major impact on business." },
      { word: "have an impact on", meaning: "〜に影響を与える", katakanaReading: "ハブ アン インパクト オン", example: "Social media has an impact on our daily lives." },
      { word: "significant", meaning: "重大な、かなりの", katakanaReading: "シグニフィカント", example: "There was a significant improvement in her grades." },
    ],
    grammarPoints: [
      {
        rule: "impact vs effect vs influence の使い分け",
        explanation: "impact（強い・直接的な影響）→ have an impact on。effect（影響・結果）→ have an effect on / the effects of。influence（間接的・継続的な影響）→ have an influence on / under the influence of。",
        example: "The earthquake had a devastating impact on the city. / Exercise has a positive effect on health. / Parents have a strong influence on their children.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The heavy rain had a significant impact on the outdoor festival.」を5回音読してください。impact の/ˈɪmpækt/（名詞）というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The heavy rain had a significant impact on the outdoor festival.",
          instruction: "impact を使って影響について話しましょう。",
          examples: [
            "Social media has a huge impact on young people's self-esteem.",
            "The new policy had a positive impact on employee satisfaction.",
            "Climate change is having a devastating impact on biodiversity.",
          ],
        },
      ],
      dailyConversationTips: "「What impact does this have on...?」（これは〜にどんな影響がありますか？）はビジネスや授業でのディスカッションに使える便利な質問フレーズです。",
    },
  },
  {
    id: "vi-004",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The company decided to _____ its marketing strategy to attract younger customers.",
    options: [
      { id: "vi004-a", text: "maintain", isCorrect: false, translation: "維持する" },
      { id: "vi004-b", text: "ignore", isCorrect: false, translation: "無視する" },
      { id: "vi004-c", text: "modify", isCorrect: true, translation: "修正する、変更する" },
      { id: "vi004-d", text: "destroy", isCorrect: false, translation: "破壊する" },
    ],
    explanation: "「to attract younger customers（若い顧客を引き付けるために）」という目的から、マーケティング戦略を「modify（修正する・変更する）」することが適切です。",
    hint: "若い顧客を引き付けるために戦略をどうする必要がありますか？",
    questionTranslation: "同社は若い顧客を引き付けるために、マーケティング戦略を修正することにしました。",
    questionKatakana: "ザ カンパニー ディサイデッド トゥ モディファイ イッツ マーケティング ストラテジー トゥ アトラクト ヤンガー カスタマーズ。",
    vocabularyItems: [
      { word: "modify", meaning: "修正する、一部変更する", katakanaReading: "モディファイ", example: "We need to modify the plan slightly." },
      { word: "strategy", meaning: "戦略", katakanaReading: "ストラテジー", example: "What's your strategy for the exam?" },
      { word: "attract", meaning: "引き付ける、魅了する", katakanaReading: "アトラクト", example: "The discount attracted many customers." },
    ],
    grammarPoints: [
      {
        rule: "modify / adjust / revise / alter の違い",
        explanation: "modify（部分的に変える）、adjust（細かく調整する）、revise（改訂する・見直す：文書・計画に使う）、alter（〔形・性質を〕変える）。「Modify the code.」「Adjust the settings.」「Revise the essay.」「Alter the design.」",
        example: "Please revise your essay before submitting. / Adjust the volume on the speaker. / The plan was modified after the meeting.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The company decided to modify its marketing strategy.」を5回音読してください。modify の /ˈmɒdɪfaɪ/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The company decided to modify its marketing strategy.",
          instruction: "modify/adjust/revise を使って変更に関する文を作りましょう。",
          examples: [
            "We need to modify our approach to the problem.",
            "She revised her essay three times before submitting.",
            "Adjust your schedule to make time for exercise.",
          ],
        },
      ],
      dailyConversationTips: "「I'll need to modify my plans.」（計画を変更する必要があります）はビジネスや日常会話で頻繁に使います。change より modify の方が formal でプロフェッショナルに聞こえます。",
    },
  },
  {
    id: "vi-005",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "Her research paper _____ the link between diet and mental health.",
    options: [
      { id: "vi005-a", text: "hides", isCorrect: false, translation: "隠す" },
      { id: "vi005-b", text: "denies", isCorrect: false, translation: "否定する" },
      { id: "vi005-c", text: "examines", isCorrect: true, translation: "調べる、検討する" },
      { id: "vi005-d", text: "ignores", isCorrect: false, translation: "無視する" },
    ],
    explanation: "研究論文が「食事とメンタルヘルスの関連性」について「examines（調べる・検討する）」のは学術的な文脈として最も自然です。hide や deny は研究の目的に反します。",
    hint: "研究論文が食事とメンタルヘルスの関係について何をするか考えてください。",
    questionTranslation: "彼女の研究論文は、食事とメンタルヘルスの関係を検討しています。",
    questionKatakana: "ハー リサーチ ペイパー イグザミンズ ザ リンク ビトゥウィーン ダイエット アンド メンタル ヘルス。",
    vocabularyItems: [
      { word: "examine", meaning: "調べる、検討する", katakanaReading: "イグザミン", example: "The study examines the effects of stress." },
      { word: "investigate", meaning: "調査する", katakanaReading: "インベスティゲイト", example: "Police are investigating the incident." },
      { word: "link", meaning: "つながり、関連性", katakanaReading: "リンク", example: "There is a clear link between exercise and mood." },
    ],
    grammarPoints: [
      {
        rule: "学術論文で使う動詞（アカデミック動詞）",
        explanation: "論文でよく使われる動詞：examine（検討する）、investigate（調査する）、analyze（分析する）、explore（探究する）、demonstrate（証明する）、suggest（示唆する）、argue（主張する）。これらを使うと academic なライティングになります。",
        example: "This paper examines the effects of... / The study investigates... / The results demonstrate that...",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Her research paper examines the link between diet and mental health.」を5回音読してください。examines の /ɪgˈzæmɪnz/ という発音に注意しましょう。",
      phraseReplacements: [
        {
          original: "Her research paper examines the link between diet and mental health.",
          instruction: "学術的な動詞を使って研究について説明しましょう。",
          examples: [
            "This study investigates the relationship between sleep and productivity.",
            "The report analyzes the economic impact of climate change.",
            "The article explores the benefits of bilingual education.",
          ],
        },
      ],
      dailyConversationTips: "「My paper examines...」（私の論文は〜を検討しています）はレポートや発表で自分の研究内容を説明するときの基本フレーズです。",
    },
  },
  {
    id: "vi-006",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The new software is very _____ because it saves hours of manual work each week.",
    options: [
      { id: "vi006-a", text: "complicated", isCorrect: false, translation: "複雑な" },
      { id: "vi006-b", text: "expensive", isCorrect: false, translation: "高価な" },
      { id: "vi006-c", text: "efficient", isCorrect: true, translation: "効率的な" },
      { id: "vi006-d", text: "outdated", isCorrect: false, translation: "時代遅れの" },
    ],
    explanation: "「saves hours of manual work（毎週何時間もの手作業を節約する）」という文脈から、ソフトウェアが「efficient（効率的な）」であることが分かります。",
    hint: "毎週何時間もの作業を節約するとは、どんなソフトウェアですか？",
    questionTranslation: "その新しいソフトウェアは毎週何時間もの手作業を節約するため、非常に効率的です。",
    questionKatakana: "ザ ニュー ソフトウェア イズ ベリー エフィシェント ビコーズ イット セイブズ アワーズ オブ マニュアル ワーク イーチ ウィーク。",
    vocabularyItems: [
      { word: "efficient", meaning: "効率的な（少ない労力で多くを達成）", katakanaReading: "エフィシェント", example: "She is an efficient worker." },
      { word: "effective", meaning: "効果的な（目的を達成する）", katakanaReading: "エフェクティブ", example: "Exercise is effective for weight loss." },
      { word: "manual", meaning: "手動の、手作業の", katakanaReading: "マニュアル", example: "Manual work takes a lot of time." },
    ],
    grammarPoints: [
      {
        rule: "efficient と effective の違い",
        explanation: "efficient（効率的・少ない労力で多くをこなす）vs effective（効果的・目的を達成する）。「She is efficient at her job.」（仕事が効率よい）「The medicine is effective.」（薬が効果的）。両方兼ね備えると「efficient and effective」です。",
        example: "The new system is efficient. / The new drug is effective. / We need an effective AND efficient solution.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The new software is very efficient because it saves hours of manual work.」を5回音読してください。efficient の /ɪˈfɪʃənt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The new software is very efficient because it saves hours of manual work.",
          instruction: "efficient と effective を使って比較の文を作りましょう。",
          examples: [
            "Public transportation is more efficient than driving in big cities.",
            "Regular practice is the most effective way to improve your English.",
            "We need to find a more efficient method of data analysis.",
          ],
        },
      ],
      dailyConversationTips: "「How can we make this process more efficient?」（このプロセスをどうすれば効率化できますか？）はビジネスの改善提案でよく使う表現です。",
    },
  },
  {
    id: "vi-007",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "Through years of practice, she _____ the skills needed to become a professional musician.",
    options: [
      { id: "vi007-a", text: "lost", isCorrect: false, translation: "失った" },
      { id: "vi007-b", text: "forgot", isCorrect: false, translation: "忘れた" },
      { id: "vi007-c", text: "acquired", isCorrect: true, translation: "習得した、身につけた" },
      { id: "vi007-d", text: "avoided", isCorrect: false, translation: "避けた" },
    ],
    explanation: "「through years of practice（何年もの練習を通して）」という文脈から、プロのミュージシャンになるために必要なスキルを「acquired（習得した）」ことが分かります。",
    hint: "何年もの練習を通してスキルをどうしましたか？",
    questionTranslation: "何年もの練習を通して、彼女はプロのミュージシャンになるために必要なスキルを習得しました。",
    questionKatakana: "スルー イヤーズ オブ プラクティス、シー アクワイアド ザ スキルズ ニーデッド トゥ ビカム ア プロフェッショナル ミュージシャン。",
    vocabularyItems: [
      { word: "acquire", meaning: "習得する、入手する", katakanaReading: "アクワイア", example: "She acquired fluency in three languages." },
      { word: "develop", meaning: "発達させる、身につける", katakanaReading: "ディベロップ", example: "He developed strong leadership skills." },
      { word: "master", meaning: "習得する（完全に）", katakanaReading: "マスター", example: "It takes years to master a musical instrument." },
    ],
    grammarPoints: [
      {
        rule: "acquire / obtain / gain の違い",
        explanation: "acquire（スキル・知識・習慣などを徐々に習得）、obtain（許可・情報・物を正式に入手）、gain（経験・利益・重さなどを得る）。「acquire a skill」「obtain a visa」「gain experience」が典型的な組み合わせです。",
        example: "She acquired English fluency through immersion. / He obtained a license to drive a truck. / She gained confidence through public speaking.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Through years of practice, she acquired the skills needed to become a professional musician.」を5回音読してください。acquired の /əˈkwaɪərd/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "She acquired the skills needed to become a professional musician.",
          instruction: "acquire/develop/gain を使ってスキル習得について話しましょう。",
          examples: [
            "He acquired the ability to speak Japanese through self-study.",
            "She developed strong communication skills during her internship.",
            "I gained valuable experience working at the research lab.",
          ],
        },
      ],
      dailyConversationTips: "「I'm trying to acquire new skills for my career.」（キャリアのために新しいスキルを習得しようとしています）は就職面接や自己紹介で使える表現です。",
    },
  },
  {
    id: "vi-008",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The government's new education policy will _____ students from low-income families.",
    options: [
      { id: "vi008-a", text: "harm", isCorrect: false, translation: "害を与える" },
      { id: "vi008-b", text: "ignore", isCorrect: false, translation: "無視する" },
      { id: "vi008-c", text: "benefit", isCorrect: true, translation: "恩恵を与える、利益をもたらす" },
      { id: "vi008-d", text: "exclude", isCorrect: false, translation: "除外する" },
    ],
    explanation: "教育政策が低所得世帯の学生に「benefit（恩恵をもたらす）」という文脈です。harm（害を与える）やexclude（除外する）は政策の目的に反します。",
    hint: "教育政策が低所得世帯の学生に対して何をすると考えられますか？",
    questionTranslation: "政府の新しい教育政策は、低所得家庭の学生に恩恵をもたらすでしょう。",
    questionKatakana: "ザ ガバメンツ ニュー エデュケーション ポリシー ウィル ベネフィット スチューデンツ フロム ロウ インカム ファミリーズ。",
    vocabularyItems: [
      { word: "benefit", meaning: "恩恵を与える（動詞）/ 恩恵（名詞）", katakanaReading: "ベネフィット", example: "Regular exercise benefits both body and mind." },
      { word: "policy", meaning: "政策、方針", katakanaReading: "ポリシー", example: "The company has a strict privacy policy." },
      { word: "low-income", meaning: "低所得の", katakanaReading: "ロウ インカム", example: "Low-income families need more support." },
    ],
    grammarPoints: [
      {
        rule: "benefit（動詞・名詞）の使い方",
        explanation: "benefit は動詞（恩恵を与える：benefit someone）と名詞（恩恵・利益：the benefits of...）の両方で使います。「The policy benefits students.」（動詞）「The benefits of exercise are well-known.」（名詞）「benefit from（〜から恩恵を受ける）」も重要。",
        example: "Regular exercise benefits your health. / She benefited from the scholarship. / The main benefit is cost reduction.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The government's new education policy will benefit students from low-income families.」を5回音読してください。benefit の /ˈbenɪfɪt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The new policy will benefit students from low-income families.",
          instruction: "benefit を動詞・名詞として使って文を作りましょう。",
          examples: [
            "This program benefits the entire community.",
            "She benefited greatly from her mentor's advice.",
            "What are the main benefits of studying abroad?",
          ],
        },
      ],
      dailyConversationTips: "「How would this benefit us?」（これは私たちにどんな恩恵がありますか？）はビジネスの提案や政策の議論でよく使われる実践的な質問です。",
    },
  },
  {
    id: "vi-009",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The nurse asked the patient to _____ her symptoms in detail.",
    options: [
      { id: "vi009-a", text: "create", isCorrect: false, translation: "作り出す" },
      { id: "vi009-b", text: "describe", isCorrect: true, translation: "描写する、説明する" },
      { id: "vi009-c", text: "forget", isCorrect: false, translation: "忘れる" },
      { id: "vi009-d", text: "prevent", isCorrect: false, translation: "防ぐ" },
    ],
    explanation: "看護師が患者に症状を「detail（詳しく）」「describe（説明する・描写する）」ように頼む文です。医療の場面で症状を言葉で伝えることを describe と言います。",
    hint: "看護師が患者に症状について何を求めていますか？「in detail（詳しく）」がヒントです。",
    questionTranslation: "看護師は患者に症状を詳しく説明するよう求めました。",
    questionKatakana: "ザ ナース アスクド ザ ペイシェント トゥ ディスクライブ ハー シンプトムズ イン ディテイル。",
    vocabularyItems: [
      { word: "describe", meaning: "描写する、説明する", katakanaReading: "ディスクライブ", example: "Can you describe what you saw?" },
      { word: "symptom", meaning: "症状", katakanaReading: "シンプトム", example: "What are your symptoms?" },
      { word: "in detail", meaning: "詳しく、詳細に", katakanaReading: "イン ディテイル", example: "Please explain the process in detail." },
    ],
    grammarPoints: [
      {
        rule: "describe と explain の違い",
        explanation: "describe（描写する・どんなものかを言葉で表す）vs explain（説明する・理由や方法を解説する）。「Describe the pain.」（痛みがどんな感じか言って）「Explain why you are here.」（なぜここにいるか説明して）。",
        example: "Describe the man you saw. / Can you explain how this machine works? / She explained the rules clearly.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The nurse asked the patient to describe her symptoms in detail.」を5回音読してください。describe の /dɪˈskraɪb/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The nurse asked the patient to describe her symptoms in detail.",
          instruction: "describe を使って説明する文を作りましょう。",
          examples: [
            "Can you describe the neighborhood where you grew up?",
            "Please describe your work experience in the interview.",
            "She described the accident to the police officer.",
          ],
        },
      ],
      dailyConversationTips: "病院やクリニックで「I'd like to describe my symptoms.」（症状を説明したいのですが）と言えると、より正確に状態を伝えられます。",
    },
  },
  {
    id: "vi-010",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The professor asked students to _____ the results of the experiment in class.",
    options: [
      { id: "vi010-a", text: "hide", isCorrect: false, translation: "隠す" },
      { id: "vi010-b", text: "present", isCorrect: true, translation: "発表する、提示する" },
      { id: "vi010-c", text: "erase", isCorrect: false, translation: "消去する" },
      { id: "vi010-d", text: "copy", isCorrect: false, translation: "コピーする" },
    ],
    explanation: "「in class（授業中に）」実験の結果を「present（発表する）」ことは学術的な文脈として最も自然です。hide や erase は学習の目的に反します。",
    hint: "授業中に実験の結果をクラスメートや先生に何をするのが普通ですか？",
    questionTranslation: "教授は学生に授業中に実験の結果を発表するよう求めました。",
    questionKatakana: "ザ プロフェサー アスクド スチューデンツ トゥ プリゼント ザ リザルツ オブ ザ エクスペリメント イン クラス。",
    vocabularyItems: [
      { word: "present", meaning: "発表する（動詞）/ 現在の（形容詞）", katakanaReading: "プリゼント（動詞）", example: "She presented her research findings." },
      { word: "report", meaning: "報告する、レポートする", katakanaReading: "リポート", example: "Please report your results by Friday." },
      { word: "demonstrate", meaning: "実演する、証明する", katakanaReading: "デモンストレイト", example: "He demonstrated how to use the equipment." },
    ],
    grammarPoints: [
      {
        rule: "present（動詞）の用法",
        explanation: "present（動詞）＝発表する・提示する。アクセントの変化：動詞は /prɪˈzent/（プリゼント）、名詞・形容詞は /ˈprezənt/（プレゼント）。「Present your findings.」（発表する）vs 「a present」（プレゼント/贈り物）",
        example: "She will present her project tomorrow. / He is present at every meeting. / What a wonderful present!",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The professor asked students to present the results of the experiment in class.」を5回音読してください。present（動詞）のアクセントは後ろにあります（プリゼント）。",
      phraseReplacements: [
        {
          original: "The professor asked students to present the results of the experiment.",
          instruction: "present/report/demonstrate を使って発表に関する文を作りましょう。",
          examples: [
            "Each team will present their project to the class on Friday.",
            "Students are required to report their findings in writing.",
            "The engineer demonstrated how the new system works.",
          ],
        },
      ],
      dailyConversationTips: "「I have to present my research tomorrow.」（明日研究を発表しなければなりません）は留学中によく使う表現です。present は使い勝手が良いので覚えておきましょう。",
    },
  },
  {
    id: "vi-011",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "The committee will _____ all applications before making a final decision.",
    options: [
      { id: "vi011-a", text: "ignore", isCorrect: false, translation: "無視する" },
      { id: "vi011-b", text: "avoid", isCorrect: false, translation: "避ける" },
      { id: "vi011-c", text: "review", isCorrect: true, translation: "審査する、見直す" },
      { id: "vi011-d", text: "delete", isCorrect: false, translation: "削除する" },
    ],
    explanation: "委員会が最終決定の前に申請書を「review（審査する・見直す）」ことは、選考プロセスとして最も自然です。ignore や delete は選考の目的に反します。",
    hint: "委員会が最終決定を下す前に申請書に対して何をしますか？",
    questionTranslation: "委員会は最終決定をする前に、すべての申請書を審査します。",
    questionKatakana: "ザ コミッティー ウィル リビュー オール アプリケーションズ ビフォア メイキング ア ファイナル ディシジョン。",
    vocabularyItems: [
      { word: "review", meaning: "審査する、見直す（動詞）/ 評価・批評（名詞）", katakanaReading: "リビュー", example: "Please review the document before sending." },
      { word: "evaluate", meaning: "評価する", katakanaReading: "イバリュエイト", example: "We need to evaluate the candidates carefully." },
      { word: "application", meaning: "申請書、出願", katakanaReading: "アプリケーション", example: "Submit your application by April 30." },
    ],
    grammarPoints: [
      {
        rule: "review / evaluate / assess の違い",
        explanation: "review（全体を見直す・確認する）、evaluate（基準に基づいて評価する）、assess（詳細に査定する）。「review a document」（文書を確認）「evaluate a candidate」（候補者を評価）「assess the damage」（損害を査定）。",
        example: "Please review my essay. / The teacher evaluated each student's performance. / The doctor assessed the patient's condition.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The committee will review all applications before making a final decision.」を5回音読してください。review の /rɪˈvjuː/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The committee will review all applications before making a final decision.",
          instruction: "review/evaluate/assess を使って評価に関する文を作りましょう。",
          examples: [
            "The professor will review the final draft of your paper.",
            "Management evaluated all the proposals submitted by the team.",
            "The insurance company assessed the damage after the accident.",
          ],
        },
      ],
      dailyConversationTips: "「Can you review this before I send it?」（送る前に確認してもらえますか？）はビジネスメールや文書のチェックをお願いするときの便利なフレーズです。",
    },
  },
  {
    id: "vi-012",
    category: "vocabulary",
    difficulty: "intermediate",
    question: "He failed to _____ his argument with reliable sources, so the professor was not convinced.",
    options: [
      { id: "vi012-a", text: "support", isCorrect: true, translation: "支持する、根拠を示す" },
      { id: "vi012-b", text: "weaken", isCorrect: false, translation: "弱める" },
      { id: "vi012-c", text: "remove", isCorrect: false, translation: "取り除く" },
      { id: "vi012-d", text: "copy", isCorrect: false, translation: "コピーする" },
    ],
    explanation: "「reliable sources（信頼できる情報源）」で議論を「support（支持する・根拠を示す）」できなかったため、教授が納得しなかったという文脈です。",
    hint: "信頼できる情報源を使って議論に何をする必要がありましたか？",
    questionTranslation: "彼は信頼できる情報源で議論を裏付けることができなかったので、教授は納得しませんでした。",
    questionKatakana: "ヒー フェイルド トゥ サポート ヒズ アーギュメント ウィズ リライアブル ソーシズ、ソウ ザ プロフェサー ワズ ノット コンビンスト。",
    vocabularyItems: [
      { word: "support an argument", meaning: "議論を裏付ける・根拠を示す", katakanaReading: "サポート アン アーギュメント", example: "Use evidence to support your argument." },
      { word: "reliable", meaning: "信頼できる", katakanaReading: "リライアブル", example: "Wikipedia is not always a reliable source." },
      { word: "convince", meaning: "納得させる、説得する", katakanaReading: "コンビンス", example: "She convinced her parents to let her study abroad." },
    ],
    grammarPoints: [
      {
        rule: "support の多様な用法",
        explanation: "support は名詞（支持・サポート）と動詞（支持する・根拠を示す）の両方で使います。「support an argument（議論を支持する）」「support a family（家族を養う）」「lend support（支援を提供する）」「with the support of（〜の支援のもとで）」",
        example: "Evidence supports this claim. / I support your decision. / She supported herself while studying.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「He failed to support his argument with reliable sources.」を5回音読してください。support の /səˈpɔːrt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "He failed to support his argument with reliable sources.",
          instruction: "support を使ってアカデミックな文を作りましょう。",
          examples: [
            "Always support your claims with evidence from credible sources.",
            "The data supports the conclusion that exercise reduces stress.",
            "She supported her thesis with examples from various studies.",
          ],
        },
      ],
      dailyConversationTips: "「Can you support that with evidence?」（それを証拠で裏付けられますか？）はディスカッションや議論での重要な問いかけです。",
    },
  },
];
