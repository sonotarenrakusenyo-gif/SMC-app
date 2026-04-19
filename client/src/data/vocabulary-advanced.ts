import { QuizQuestion } from "./quizzes";

export const vocabularyAdvancedQuizzes: QuizQuestion[] = [
  {
    id: "va-001",
    category: "vocabulary",
    difficulty: "advanced",
    question: "The collapse of the company was _____, given the mounting debt and failed investments.",
    options: [
      { id: "va001-a", text: "preventable", isCorrect: false, translation: "防げた" },
      { id: "va001-b", text: "inevitable", isCorrect: true, translation: "避けられない、必然的な" },
      { id: "va001-c", text: "surprising", isCorrect: false, translation: "驚くべき" },
      { id: "va001-d", text: "accidental", isCorrect: false, translation: "偶発的な" },
    ],
    explanation: "「mounting debt（累積する負債）」「failed investments（失敗した投資）」という状況から、会社の倒産は「inevitable（避けられない・必然的な）」だったと言えます。",
    hint: "累積する負債と失敗した投資があれば、会社の倒産は避けられますか、避けられませんか？",
    questionTranslation: "累積する負債と失敗した投資を考えると、その会社の倒産は避けられないことでした。",
    questionKatakana: "ザ コラプス オブ ザ カンパニー ワズ イネビタブル、ギブン ザ マウンティング デット アンド フェイルド インベストメンツ。",
    vocabularyItems: [
      { word: "inevitable", meaning: "不可避の、必然的な", katakanaReading: "イネビタブル", example: "Change is inevitable in any organization." },
      { word: "mounting", meaning: "増大する、累積する", katakanaReading: "マウンティング", example: "There is mounting pressure to act." },
      { word: "collapse", meaning: "崩壊、倒産（名詞）/ 崩壊する（動詞）", katakanaReading: "コラプス", example: "The bridge collapsed under the weight." },
    ],
    grammarPoints: [
      {
        rule: "given の分詞構文（前置詞的用法）",
        explanation: "「given + 名詞/節」は「〜を考慮すると、〜を踏まえると」という意味。formal な書き言葉でよく使われます。「Given the evidence, he was guilty.」「Given that she was new, she did well.」",
        example: "Given the circumstances, the decision was reasonable. / Given his experience, he was the best candidate. / Given the cost, the plan was abandoned.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The collapse of the company was inevitable, given the mounting debt.」を5回音読してください。inevitable の5音節（in-ev-i-ta-ble）をゆっくり確認してから発音しましょう。",
      phraseReplacements: [
        {
          original: "The collapse of the company was inevitable.",
          instruction: "inevitable を使って必然的な結果について話しましょう。",
          examples: [
            "Given the lack of preparation, failure was almost inevitable.",
            "Conflict between the two countries seemed inevitable.",
            "Change is inevitable; what matters is how we respond.",
          ],
        },
      ],
      dailyConversationTips: "「It was inevitable.」（それは避けられなかった）は何かが起こった後の状況説明によく使われます。議論や分析で使うと論理的な印象を与えます。",
    },
  },
  {
    id: "va-002",
    category: "vocabulary",
    difficulty: "advanced",
    question: "The poem's meaning is highly _____, with critics offering completely different interpretations.",
    options: [
      { id: "va002-a", text: "straightforward", isCorrect: false, translation: "わかりやすい" },
      { id: "va002-b", text: "literal", isCorrect: false, translation: "文字通りの" },
      { id: "va002-c", text: "ambiguous", isCorrect: true, translation: "曖昧な、多義的な" },
      { id: "va002-d", text: "explicit", isCorrect: false, translation: "明確な" },
    ],
    explanation: "「critics offering completely different interpretations（批評家がまったく異なる解釈をしている）」という文脈から、詩の意味が「ambiguous（曖昧で多義的）」であることが分かります。",
    hint: "批評家が全く異なる解釈をしているということは、詩の意味はどんな状態ですか？",
    questionTranslation: "その詩の意味は非常に曖昧で、批評家たちはまったく異なる解釈を提示しています。",
    questionKatakana: "ザ ポエムズ ミーニング イズ ハイリー アンビギュアス、ウィズ クリティックス オファリング コンプリートリー ディファレント インタープリテーションズ。",
    vocabularyItems: [
      { word: "ambiguous", meaning: "曖昧な、複数の意味を持つ", katakanaReading: "アンビギュアス", example: "The instruction was ambiguous." },
      { word: "interpretation", meaning: "解釈、理解", katakanaReading: "インタープリテーション", example: "There are many interpretations of this painting." },
      { word: "explicit", meaning: "明確な、はっきりした", katakanaReading: "エクスプリシット", example: "The contract includes explicit instructions." },
    ],
    grammarPoints: [
      {
        rule: "ambiguous vs vague vs obscure の違い",
        explanation: "ambiguous（複数の解釈が可能）、vague（漠然として不明確）、obscure（難解・わかりにくい）。「The answer is ambiguous.」（複数の解釈がある）「His directions were vague.」（漠然としている）「The reference is obscure.」（一般に知られていない）",
        example: "The politician gave an ambiguous answer. / The instructions were vague. / The text uses obscure literary references.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The poem's meaning is highly ambiguous.」を5回音読してください。ambiguous の /æmˈbɪgjuəs/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The poem's meaning is highly ambiguous.",
          instruction: "ambiguous を使って解釈が多様なものについて話しましょう。",
          examples: [
            "The court ruling was ambiguous, leaving room for different interpretations.",
            "Please avoid ambiguous language in your report.",
            "The outcome of the negotiation remains ambiguous.",
          ],
        },
      ],
      dailyConversationTips: "「That's a bit ambiguous. Can you clarify?」（それは少し曖昧です。明確にしてもらえますか？）はビジネスや学術的な場面で使う重要な質問フレーズです。",
    },
  },
  {
    id: "va-003",
    category: "vocabulary",
    difficulty: "advanced",
    question: "The environmental organization _____ stricter regulations on industrial pollution.",
    options: [
      { id: "va003-a", text: "opposes", isCorrect: false, translation: "反対する" },
      { id: "va003-b", text: "avoids", isCorrect: false, translation: "避ける" },
      { id: "va003-c", text: "advocates", isCorrect: true, translation: "提唱する、支持する" },
      { id: "va003-d", text: "doubts", isCorrect: false, translation: "疑う" },
    ],
    explanation: "環境団体が産業汚染に対する規制強化を「advocates（提唱する・支持する）」という文脈は最も自然です。opposes（反対する）は環境団体の立場に反します。",
    hint: "環境団体が産業汚染の規制について取ると予想される立場は何ですか？",
    questionTranslation: "その環境団体は産業汚染に対してより厳しい規制を求めています。",
    questionKatakana: "ジ エンバイロンメンタル オーガナイゼーション アドボケイツ ストリクター レギュレーションズ オン インダストリアル ポリューション。",
    vocabularyItems: [
      { word: "advocate (for)", meaning: "〜を提唱する、支持する", katakanaReading: "アドボケイト", example: "She advocates for equal rights." },
      { word: "stricter", meaning: "より厳しい（strict の比較級）", katakanaReading: "ストリクター", example: "We need stricter safety rules." },
      { word: "industrial pollution", meaning: "産業汚染", katakanaReading: "インダストリアル ポリューション", example: "Industrial pollution affects public health." },
    ],
    grammarPoints: [
      {
        rule: "advocate の品詞別用法",
        explanation: "advocate（動詞）：advocate for（〜のために主張・支持する）、advocate + doing（〜することを勧める）。advocate（名詞）：an advocate of/for（〜の支持者・擁護者）。「She advocates for children's rights.」「He is an advocate of free speech.」",
        example: "The group advocates for stricter food safety laws. / She is a strong advocate for environmental protection. / He advocated ending the war immediately.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The environmental organization advocates stricter regulations on industrial pollution.」を5回音読してください。advocates の /ˈædvəkeɪts/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The organization advocates stricter regulations on industrial pollution.",
          instruction: "advocate を使って支持や推奨の文を作りましょう。",
          examples: [
            "The professor advocates a student-centered approach to learning.",
            "Human rights organizations advocate for fair treatment of refugees.",
            "She is an advocate for mental health awareness in schools.",
          ],
        },
      ],
      dailyConversationTips: "「I advocate for...」（私は〜を支持します）はディスカッションや議論で自分の立場を明確にするときに使う表現です。",
    },
  },
  {
    id: "va-004",
    category: "vocabulary",
    difficulty: "advanced",
    question: "The CEO's primary _____ was to restore investor confidence after the scandal.",
    options: [
      { id: "va004-a", text: "obstacle", isCorrect: false, translation: "障害" },
      { id: "va004-b", text: "concern", isCorrect: false, translation: "懸念" },
      { id: "va004-c", text: "priority", isCorrect: true, translation: "優先事項" },
      { id: "va004-d", text: "privilege", isCorrect: false, translation: "特権" },
    ],
    explanation: "スキャンダル後に投資家の信頼を回復することがCEOの「primary（最重要の）priority（優先事項）」という文脈です。obstacle（障害）とは意味が異なります。",
    hint: "CEOがスキャンダル後に最も重要と考えた目標は何ですか？",
    questionTranslation: "CEOの最優先事項はスキャンダルの後に投資家の信頼を回復することでした。",
    questionKatakana: "ザ スィーイーオーズ プライマリー プライオリティー ワズ トゥ リストア インベスター コンフィデンス アフター ザ スキャンダル。",
    vocabularyItems: [
      { word: "priority", meaning: "優先事項", katakanaReading: "プライオリティー", example: "Health should be your top priority." },
      { word: "restore", meaning: "回復させる、取り戻す", katakanaReading: "リストア", example: "The new measures helped restore public trust." },
      { word: "confidence", meaning: "信頼、自信", katakanaReading: "コンフィデンス", example: "Investor confidence fell after the news." },
    ],
    grammarPoints: [
      {
        rule: "priority の用法",
        explanation: "priority（名詞）：top/first/main/primary priority（最優先事項）。「give priority to（〜を優先する）」「set priorities（優先順位をつける）」。「prioritize（動詞）：〜を優先する」も重要。「Let's prioritize safety.」",
        example: "Safety is our top priority. / She prioritized her family over her career. / Please give priority to urgent requests.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The CEO's primary priority was to restore investor confidence.」を5回音読してください。priority の /praɪˈɒrɪti/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The CEO's primary priority was to restore investor confidence.",
          instruction: "priority を使って目標や優先事項について話しましょう。",
          examples: [
            "My top priority this semester is to improve my writing skills.",
            "The company's priority is to reduce its carbon footprint.",
            "You need to prioritize your tasks to manage time effectively.",
          ],
        },
      ],
      dailyConversationTips: "「What's your top priority right now?」（今、最優先事項は何ですか？）は目標設定の会話で使える実践的な質問です。",
    },
  },
  {
    id: "va-005",
    category: "vocabulary",
    difficulty: "advanced",
    question: "The medication helped to _____ the patient's chronic back pain significantly.",
    options: [
      { id: "va005-a", text: "worsen", isCorrect: false, translation: "悪化させる" },
      { id: "va005-b", text: "cause", isCorrect: false, translation: "引き起こす" },
      { id: "va005-c", text: "alleviate", isCorrect: true, translation: "和らげる、軽減する" },
      { id: "va005-d", text: "ignore", isCorrect: false, translation: "無視する" },
    ],
    explanation: "「helped to（〜するのに役立った）」という文脈から、薬が慢性的な腰痛を「alleviate（和らげる）」ことを示しています。worsen（悪化させる）は反対の意味です。",
    hint: "薬が患者の慢性的な腰痛に「役立った」とはどういう意味ですか？",
    questionTranslation: "その薬は患者の慢性的な腰痛をかなり和らげるのに役立ちました。",
    questionKatakana: "ザ メディケーション ヘルプド トゥ アリービエイト ザ ペイシェンツ クロニック バック ペイン シグニフィカントリー。",
    vocabularyItems: [
      { word: "alleviate", meaning: "（痛みや苦しみを）和らげる、軽減する", katakanaReading: "アリービエイト", example: "This drug alleviates symptoms of anxiety." },
      { word: "chronic", meaning: "慢性的な（長期間続く）", katakanaReading: "クロニック", example: "She suffers from chronic fatigue." },
      { word: "relieve", meaning: "緩和する（alleviate より一般的）", katakanaReading: "リリーブ", example: "Exercise can relieve stress." },
    ],
    grammarPoints: [
      {
        rule: "alleviate / relieve / mitigate の違い",
        explanation: "alleviate（痛みや問題を部分的に軽くする）、relieve（苦痛・圧力から解放する・取り除く）、mitigate（深刻なマイナス効果を抑制する・緩和する）。「alleviate pain」「relieve stress」「mitigate risks」が典型的な組み合わせです。",
        example: "The medicine alleviated her headache. / A hot bath relieves muscle tension. / We must mitigate the impact of climate change.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The medication helped to alleviate the patient's chronic back pain.」を5回音読してください。alleviate の /əˈliːvieɪt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The medication helped to alleviate the patient's chronic back pain.",
          instruction: "alleviate/relieve/mitigate を使って問題の緩和について話しましょう。",
          examples: [
            "Talking to a counselor can help alleviate feelings of anxiety.",
            "Exercise is a great way to relieve stress after a long day.",
            "We need policies to mitigate the effects of global warming.",
          ],
        },
      ],
      dailyConversationTips: "「This might help alleviate the problem.」（これが問題の緩和に役立つかもしれません）はビジネスや医療の文脈でよく使う表現です。",
    },
  },
  {
    id: "va-006",
    category: "vocabulary",
    difficulty: "advanced",
    question: "The journalist _____ every claim in the article before it was published.",
    options: [
      { id: "va006-a", text: "created", isCorrect: false, translation: "作り出した" },
      { id: "va006-b", text: "accepted", isCorrect: false, translation: "受け入れた" },
      { id: "va006-c", text: "scrutinized", isCorrect: true, translation: "精査した、詳しく調べた" },
      { id: "va006-d", text: "ignored", isCorrect: false, translation: "無視した" },
    ],
    explanation: "「before it was published（公開前に）」という文脈から、ジャーナリストが記事の各主張を「scrutinized（精査した・徹底的に調べた）」ことが最も適切です。",
    hint: "ジャーナリストが記事を公開する前に各主張に対して何をするのが理想ですか？",
    questionTranslation: "そのジャーナリストは記事が公開される前に、すべての主張を精査しました。",
    questionKatakana: "ザ ジャーナリスト スクルーティナイズド エブリ クレイム イン ザ アーティクル ビフォア イット ワズ パブリッシュト。",
    vocabularyItems: [
      { word: "scrutinize", meaning: "精査する、細かく調べる", katakanaReading: "スクルーティナイズ", example: "The committee scrutinized every detail." },
      { word: "scrutiny", meaning: "精査、厳しい審査（名詞）", katakanaReading: "スクルーティニー", example: "The proposal came under scrutiny." },
      { word: "claim", meaning: "主張（名詞）/ 主張する（動詞）", katakanaReading: "クレイム", example: "His claims were not supported by evidence." },
    ],
    grammarPoints: [
      {
        rule: "scrutinize / examine / investigate の違い",
        explanation: "scrutinize（隅々まで精密に調べる・批判的に精査）、examine（詳しく調べる・検査する）、investigate（公的・体系的に調査する）。「scrutinize a document（文書を精査）」「examine a patient（患者を診察）」「investigate a crime（犯罪を捜査）」",
        example: "Auditors scrutinized every financial record. / The doctor examined the patient carefully. / Police are investigating the robbery.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The journalist scrutinized every claim in the article before it was published.」を5回音読してください。scrutinized の /ˈskruːtɪnaɪzd/ という発音に注意しましょう。",
      phraseReplacements: [
        {
          original: "The journalist scrutinized every claim before it was published.",
          instruction: "scrutinize を使って詳細な検討について話しましょう。",
          examples: [
            "The auditors scrutinized the company's financial records for errors.",
            "Her decision was scrutinized by the media and the public.",
            "Before signing, you should scrutinize the contract carefully.",
          ],
        },
      ],
      dailyConversationTips: "「This deserves more scrutiny.」（これはもっとよく検討する必要があります）はビジネスや議論で批判的な視点を示すときに使う表現です。",
    },
  },
  {
    id: "va-007",
    category: "vocabulary",
    difficulty: "advanced",
    question: "The rate of technological advancement in the 21st century is truly _____.",
    options: [
      { id: "va007-a", text: "outdated", isCorrect: false, translation: "時代遅れの" },
      { id: "va007-b", text: "unprecedented", isCorrect: true, translation: "前例のない" },
      { id: "va007-c", text: "gradual", isCorrect: false, translation: "段階的な" },
      { id: "va007-d", text: "predictable", isCorrect: false, translation: "予測可能な" },
    ],
    explanation: "21世紀の技術進歩の速さが「truly（本当に）」「unprecedented（前例のない）」という文脈は、現代技術の急速な発展を表す最も適切な表現です。",
    hint: "21世紀の技術進歩は過去に見られたことがない速さです。それを表す言葉は何ですか？",
    questionTranslation: "21世紀における技術進歩の速度は本当に前例のないものです。",
    questionKatakana: "ザ レイト オブ テクノロジカル アドバンスメント イン ザ トゥウェンティファースト センチュリー イズ トゥルーリー アンプレシデンテッド。",
    vocabularyItems: [
      { word: "unprecedented", meaning: "前例のない、空前の", katakanaReading: "アンプレシデンテッド", example: "The pandemic caused unprecedented disruption." },
      { word: "advancement", meaning: "進歩、前進（名詞）", katakanaReading: "アドバンスメント", example: "Medical advancements have saved millions of lives." },
      { word: "rate", meaning: "速度、割合", katakanaReading: "レイト", example: "The rate of change is increasing." },
    ],
    grammarPoints: [
      {
        rule: "un- 接頭辞（否定）の単語",
        explanation: "un- は「否定・反対」を表す接頭辞。unprecedented（前例がない）、unexpected（予期しない）、unbelievable（信じられない）、uncommon（珍しい）、unacceptable（受け入れられない）。これらはすべて formal な文脈でよく使われます。",
        example: "The decision was unprecedented. / His success was unexpected. / The level of pollution is unacceptable.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The rate of technological advancement in the 21st century is truly unprecedented.」を5回音読してください。unprecedented の /ʌnˈpresɪdentɪd/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The rate of technological advancement is truly unprecedented.",
          instruction: "unprecedented を使って前例のない出来事について話しましょう。",
          examples: [
            "The election results were unprecedented in the country's history.",
            "We are living in a time of unprecedented change.",
            "The company achieved unprecedented growth in its first year.",
          ],
        },
      ],
      dailyConversationTips: "「This is unprecedented.」（これは前例がない）は重大なニュースや出来事を議論するときによく使う表現です。特にビジネスや政治の文脈で有効です。",
    },
  },
  {
    id: "va-008",
    category: "vocabulary",
    difficulty: "advanced",
    question: "Despite their long-running feud, the two countries eventually managed to _____ their differences.",
    options: [
      { id: "va008-a", text: "ignore", isCorrect: false, translation: "無視する" },
      { id: "va008-b", text: "deepen", isCorrect: false, translation: "深める" },
      { id: "va008-c", text: "reconcile", isCorrect: true, translation: "和解させる、折り合いをつける" },
      { id: "va008-d", text: "expand", isCorrect: false, translation: "拡大する" },
    ],
    explanation: "「long-running feud（長期的な争い）」があったにもかかわらず「eventually（最終的に）」対立を「reconcile（和解する・折り合いをつける）」したという文脈です。",
    hint: "長年の争いの後に最終的に両国が違いに対してどうしたのですか？",
    questionTranslation: "長年の争いにもかかわらず、2国は最終的に対立を和解させることができました。",
    questionKatakana: "ディスパイト ゼア ロングランニング フィード、ザ トゥー カントリーズ イベンチュアリー マネージド トゥ レコンサイル ゼア ディファレンシズ。",
    vocabularyItems: [
      { word: "reconcile", meaning: "和解させる、折り合いをつける", katakanaReading: "レコンサイル", example: "They reconciled after years of conflict." },
      { word: "feud", meaning: "長年の争い・確執", katakanaReading: "フィード", example: "A family feud divided them for decades." },
      { word: "despite", meaning: "〜にもかかわらず", katakanaReading: "ディスパイト", example: "Despite the rain, she went jogging." },
    ],
    grammarPoints: [
      {
        rule: "reconcile の用法",
        explanation: "reconcile（人・意見・事実などを）和解させる・調和させる。「reconcile differences（違いを折り合わせる）」「be reconciled with（〜と和解する）」「reconcile facts（事実を整合させる）」",
        example: "The two sides were finally reconciled. / It is hard to reconcile his words with his actions. / They reconciled their conflicting views after long discussions.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The two countries eventually managed to reconcile their differences.」を5回音読してください。reconcile の /ˈrekənsaɪl/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The two countries managed to reconcile their differences.",
          instruction: "reconcile を使って和解や調整について話しましょう。",
          examples: [
            "The couple went to counseling to reconcile their relationship.",
            "It is difficult to reconcile environmental protection with economic growth.",
            "After years of argument, the siblings finally reconciled.",
          ],
        },
      ],
      dailyConversationTips: "「We need to reconcile these two ideas.」（この2つのアイデアを調整する必要があります）はビジネスや交渉の場面でよく使う表現です。",
    },
  },
  {
    id: "va-009",
    category: "vocabulary",
    difficulty: "advanced",
    question: "The lawyer needed more evidence to _____ her client's claim of innocence.",
    options: [
      { id: "va009-a", text: "contradict", isCorrect: false, translation: "反論する" },
      { id: "va009-b", text: "substantiate", isCorrect: true, translation: "裏付ける、証拠で実証する" },
      { id: "va009-c", text: "exaggerate", isCorrect: false, translation: "誇張する" },
      { id: "va009-d", text: "dismiss", isCorrect: false, translation: "却下する" },
    ],
    explanation: "弁護士がクライアントの無実を証明するために証拠を使って「substantiate（裏付ける・証拠で実証する）」必要があるという文脈です。",
    hint: "弁護士が依頼人の無実の主張に対して証拠を使って何をしますか？",
    questionTranslation: "弁護士はクライアントの無実の主張を裏付けるためにさらなる証拠が必要でした。",
    questionKatakana: "ザ ローヤー ニーデッド モア エビデンス トゥ サブスタンシエイト ハー クライエンツ クレイム オブ イノセンス。",
    vocabularyItems: [
      { word: "substantiate", meaning: "証拠で裏付ける、実証する", katakanaReading: "サブスタンシエイト", example: "Can you substantiate that claim?" },
      { word: "innocence", meaning: "無実、無罪", katakanaReading: "イノセンス", example: "She maintained her innocence throughout the trial." },
      { word: "evidence", meaning: "証拠、根拠", katakanaReading: "エビデンス", example: "The evidence against him was overwhelming." },
    ],
    grammarPoints: [
      {
        rule: "substantiate / support / corroborate の違い",
        explanation: "substantiate（証拠を提示して主張の正しさを証明する）、support（賛成・根拠を示す）、corroborate（他の証拠・証人が確認・裏付ける）。「substantiate a claim」「support an argument」「corroborate a statement」",
        example: "The data substantiates our hypothesis. / Evidence supports the theory. / His testimony was corroborated by two witnesses.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The lawyer needed more evidence to substantiate her client's claim of innocence.」を5回音読してください。substantiate の /səbˈstænʃieɪt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The lawyer needed more evidence to substantiate the claim.",
          instruction: "substantiate/support/corroborate を使って証拠に関する文を作りましょう。",
          examples: [
            "Can you substantiate that claim with credible sources?",
            "The research data substantiates our initial hypothesis.",
            "His alibi was corroborated by security camera footage.",
          ],
        },
      ],
      dailyConversationTips: "「Can you substantiate that?」（それを証拠で裏付けられますか？）は議論や研究発表で批判的思考を示す重要な問いかけです。",
    },
  },
  {
    id: "va-010",
    category: "vocabulary",
    difficulty: "advanced",
    question: "The new flood barriers are designed to _____ the risk of damage to coastal communities.",
    options: [
      { id: "va010-a", text: "increase", isCorrect: false, translation: "増大させる" },
      { id: "va010-b", text: "create", isCorrect: false, translation: "生み出す" },
      { id: "va010-c", text: "mitigate", isCorrect: true, translation: "緩和する、軽減する" },
      { id: "va010-d", text: "ignore", isCorrect: false, translation: "無視する" },
    ],
    explanation: "洪水バリアが設計された目的として、沿岸コミュニティへの被害リスクを「mitigate（緩和する・軽減する）」ことが最も適切です。increase（増大）は逆の意味です。",
    hint: "洪水バリアが沿岸地域への被害リスクに対して設計された目的は何ですか？",
    questionTranslation: "新しい洪水バリアは沿岸地域への被害リスクを軽減するために設計されています。",
    questionKatakana: "ザ ニュー フラッド バリアーズ アー ディザインド トゥ ミティゲイト ザ リスク オブ ダメージ トゥ コースタル コミュニティーズ。",
    vocabularyItems: [
      { word: "mitigate", meaning: "緩和する、軽減する", katakanaReading: "ミティゲイト", example: "Steps were taken to mitigate the risks." },
      { word: "coastal", meaning: "沿岸の、海岸沿いの", katakanaReading: "コースタル", example: "Rising sea levels threaten coastal cities." },
      { word: "barrier", meaning: "障壁、バリア", katakanaReading: "バリア", example: "The wall acts as a barrier against floods." },
    ],
    grammarPoints: [
      {
        rule: "mitigate / alleviate / reduce / minimize の比較",
        explanation: "mitigate（深刻な悪影響を部分的に緩和する：主に formal・ビジネス・政策の文脈）、alleviate（苦しみや痛みを和らげる）、reduce（量・程度を減らす）、minimize（最小限にする）。「mitigate risks」「alleviate suffering」「reduce costs」「minimize waste」",
        example: "We mitigated the damage. / The medication alleviated her pain. / We reduced expenses by 20%. / Minimize unnecessary steps.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The new flood barriers are designed to mitigate the risk of damage to coastal communities.」を5回音読してください。mitigate の /ˈmɪtɪɡeɪt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The barriers are designed to mitigate the risk of damage.",
          instruction: "mitigate を使って対策に関する文を作りましょう。",
          examples: [
            "Early warning systems help mitigate the impact of natural disasters.",
            "The company introduced new policies to mitigate financial risks.",
            "Urban planning can mitigate the effects of extreme heat.",
          ],
        },
      ],
      dailyConversationTips: "「We need to mitigate the risks.」（リスクを軽減する必要があります）はビジネスや政策の議論でよく使う表現です。",
    },
  },
  {
    id: "va-011",
    category: "vocabulary",
    difficulty: "advanced",
    question: "Her _____ grasp of economic theory impressed both faculty and students.",
    options: [
      { id: "va011-a", text: "shallow", isCorrect: false, translation: "浅い" },
      { id: "va011-b", text: "limited", isCorrect: false, translation: "限られた" },
      { id: "va011-c", text: "comprehensive", isCorrect: true, translation: "包括的な、徹底した" },
      { id: "va011-d", text: "occasional", isCorrect: false, translation: "時折の" },
    ],
    explanation: "教員も学生も感動させるほどの経済理論の理解力を表す形容詞として「comprehensive（包括的な・徹底した）」が最適です。shallow や limited は逆の意味です。",
    hint: "教員も学生も感動させるほどの理解力はどんな理解力ですか？",
    questionTranslation: "彼女の経済理論に対する包括的な理解は、教員も学生も感動させました。",
    questionKatakana: "ハー コンプリヘンシブ グラスプ オブ エコノミック セオリー インプレスト ボース ファカルティ アンド スチューデンツ。",
    vocabularyItems: [
      { word: "comprehensive", meaning: "包括的な、徹底した", katakanaReading: "コンプリヘンシブ", example: "She gave a comprehensive overview of the topic." },
      { word: "grasp", meaning: "理解、把握（名詞）/ 把握する（動詞）", katakanaReading: "グラスプ", example: "He has a good grasp of mathematics." },
      { word: "faculty", meaning: "教員陣、学部（大学用語）", katakanaReading: "ファカルティ", example: "The faculty praised her research." },
    ],
    grammarPoints: [
      {
        rule: "comprehensive vs thorough vs complete の違い",
        explanation: "comprehensive（広範囲を網羅する）、thorough（細部まで徹底する）、complete（全部揃っている・完全な）。「a comprehensive guide（包括的なガイド）」「a thorough investigation（徹底した調査）」「a complete list（完全なリスト）」",
        example: "We need a comprehensive plan. / The police conducted a thorough search. / Make sure the list is complete.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Her comprehensive grasp of economic theory impressed both faculty and students.」を5回音読してください。comprehensive の /ˌkɒmprɪˈhensɪv/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "Her comprehensive grasp of economic theory impressed everyone.",
          instruction: "comprehensive を使って幅広い理解について話しましょう。",
          examples: [
            "The report provides a comprehensive analysis of the market.",
            "Students need a comprehensive understanding of grammar rules.",
            "She has a comprehensive knowledge of Japanese history.",
          ],
        },
      ],
      dailyConversationTips: "「I need a more comprehensive understanding of this topic.」（このトピックについてより包括的な理解が必要です）はアカデミックな文脈でよく使う表現です。",
    },
  },
  {
    id: "va-012",
    category: "vocabulary",
    difficulty: "advanced",
    question: "She felt _____ about accepting the promotion because it meant moving away from her family.",
    options: [
      { id: "va012-a", text: "confident", isCorrect: false, translation: "自信のある" },
      { id: "va012-b", text: "enthusiastic", isCorrect: false, translation: "熱心な" },
      { id: "va012-c", text: "ambivalent", isCorrect: true, translation: "相反する感情を持つ、複雑な気持ちの" },
      { id: "va012-d", text: "indifferent", isCorrect: false, translation: "無関心な" },
    ],
    explanation: "昇進は良いことですが、家族から離れることになります。このプラスとマイナス両方の感情を同時に持つ状態が「ambivalent（相反する感情を持つ）」です。",
    hint: "昇進はうれしいが、家族と離れなければならない。この「うれしいが悲しい」という複雑な感情を表す言葉は？",
    questionTranslation: "昇進を受け入れることは家族から離れることを意味するため、彼女は複雑な気持ちでした。",
    questionKatakana: "シー フェルト アンビバレント アバウト アクセプティング ザ プロモーション ビコーズ イット メント ムービング アウェイ フロム ハー ファミリー。",
    vocabularyItems: [
      { word: "ambivalent", meaning: "相反する感情を同時に持つ", katakanaReading: "アンビバレント", example: "I'm ambivalent about the new policy." },
      { word: "ambivalence", meaning: "相反する感情・葛藤（名詞）", katakanaReading: "アンビバレンス", example: "Her ambivalence about the job offer was evident." },
      { word: "promotion", meaning: "昇進、昇格", katakanaReading: "プロモーション", example: "She received a promotion after three years." },
    ],
    grammarPoints: [
      {
        rule: "feel + 形容詞（複雑な感情を表す上級形容詞）",
        explanation: "feel + 形容詞で感情を表す上級語彙：ambivalent（相反する感情）、conflicted（葛藤がある）、reluctant（気が乗らない）、apprehensive（不安な）、overwhelmed（圧倒された）。",
        example: "I feel ambivalent about this change. / She felt conflicted about her decision. / He was reluctant to speak in public.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She felt ambivalent about accepting the promotion because it meant moving away from her family.」を5回音読してください。ambivalent の /æmˈbɪvələnt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "She felt ambivalent about accepting the promotion.",
          instruction: "ambivalent を使って複雑な気持ちを表現しましょう。",
          examples: [
            "He was ambivalent about moving to another country for work.",
            "Many people feel ambivalent about new technology.",
            "She was ambivalent about the merger — it had both advantages and disadvantages.",
          ],
        },
      ],
      dailyConversationTips: "「I'm a bit ambivalent about that.」（それについては複雑な気持ちです）は単純に「わからない」ではなく、両面があることを伝える sophisticated な表現です。",
    },
  },
  {
    id: "va-013",
    category: "vocabulary",
    difficulty: "advanced",
    question: "Increasing traffic and pollution are likely to _____ the city's already serious air quality problem.",
    options: [
      { id: "va013-a", text: "resolve", isCorrect: false, translation: "解決する" },
      { id: "va013-b", text: "improve", isCorrect: false, translation: "改善する" },
      { id: "va013-c", text: "exacerbate", isCorrect: true, translation: "悪化させる" },
      { id: "va013-d", text: "minimize", isCorrect: false, translation: "最小化する" },
    ],
    explanation: "「already serious（すでに深刻な）」大気汚染問題に対し、増加する交通量と汚染が「exacerbate（悪化させる）」という文脈が最適です。resolve や improve は逆の意味です。",
    hint: "すでに深刻な大気汚染問題に、さらに汚染が増えるとどうなりますか？",
    questionTranslation: "交通量と汚染の増加は、すでに深刻な都市の大気質問題をさらに悪化させる可能性があります。",
    questionKatakana: "インクリーシング トラフィック アンド ポリューション アー ライクリー トゥ イグザサーベイト ザ シティーズ オールレディ シリアス エア クオリティー プロブレム。",
    vocabularyItems: [
      { word: "exacerbate", meaning: "悪化させる、問題をさらにひどくする", katakanaReading: "イグザサーベイト", example: "Stress can exacerbate health problems." },
      { word: "air quality", meaning: "大気質", katakanaReading: "エア クオリティー", example: "Poor air quality affects respiratory health." },
      { word: "aggravate", meaning: "悪化させる（exacerbate に近い）", katakanaReading: "アグラベイト", example: "Cold weather aggravates joint pain." },
    ],
    grammarPoints: [
      {
        rule: "exacerbate vs aggravate vs worsen の違い",
        explanation: "exacerbate（問題・状況をさらに悪化させる：formal）、aggravate（問題・痛みを悪化させる：医療・日常）、worsen（悪化する/させる：最も一般的）。「exacerbate a crisis」「aggravate an injury」「the situation worsened」",
        example: "The drought exacerbated the food shortage. / Don't aggravate the wound. / Economic conditions worsened.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Increasing pollution is likely to exacerbate the city's air quality problem.」を5回音読してください。exacerbate の /ɪɡˈzæsərbeɪt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "Increasing pollution is likely to exacerbate the air quality problem.",
          instruction: "exacerbate を使って問題の悪化について話しましょう。",
          examples: [
            "Lack of sleep can exacerbate stress and anxiety.",
            "The recession exacerbated the gap between rich and poor.",
            "Poor communication can exacerbate conflicts in the workplace.",
          ],
        },
      ],
      dailyConversationTips: "「That will only exacerbate the problem.」（それは問題をさらに悪化させるだけです）は対策を議論するときに反論する際の effective な表現です。",
    },
  },
  {
    id: "va-014",
    category: "vocabulary",
    difficulty: "advanced",
    question: "Her explanation of the complex theory was so _____ that even beginners could understand it.",
    options: [
      { id: "va014-a", text: "confusing", isCorrect: false, translation: "紛らわしい" },
      { id: "va014-b", text: "technical", isCorrect: false, translation: "専門的な" },
      { id: "va014-c", text: "lucid", isCorrect: true, translation: "明快な、わかりやすい" },
      { id: "va014-d", text: "verbose", isCorrect: false, translation: "冗長な" },
    ],
    explanation: "「even beginners could understand it（初心者でも理解できるほど）」という文脈から、説明が「lucid（明快な・わかりやすい）」であることが分かります。confusing や verbose は逆の方向です。",
    hint: "初心者でも複雑な理論を理解できたということは、説明がどんな質でしたか？",
    questionTranslation: "複雑な理論に対する彼女の説明はとても明快で、初心者でも理解できました。",
    questionKatakana: "ハー エクスプラネーション オブ ザ コンプレックス セオリー ワズ ソウ ルーシッド ザット イーブン ビギナーズ クッド アンダースタンド イット。",
    vocabularyItems: [
      { word: "lucid", meaning: "明快な、わかりやすい", katakanaReading: "ルーシッド", example: "He gave a lucid explanation of the problem." },
      { word: "verbose", meaning: "冗長な、言葉が多すぎる", katakanaReading: "バーボース", example: "His writing is too verbose." },
      { word: "concise", meaning: "簡潔な（lucid に近いが短さを強調）", katakanaReading: "コンサイス", example: "Please give a concise summary." },
    ],
    grammarPoints: [
      {
        rule: "lucid / clear / concise / succinct の違い",
        explanation: "lucid（論理的で明快・理解しやすい）、clear（明確・はっきり）、concise（簡潔：無駄のない短さ）、succinct（簡潔・要点を外さない）。「lucid prose」「a clear explanation」「a concise report」「a succinct summary」",
        example: "The professor gave a lucid lecture. / Please be clear and concise. / She offered a succinct response.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Her explanation was so lucid that even beginners could understand it.」を5回音読してください。lucid の /ˈluːsɪd/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "Her explanation was so lucid that even beginners could understand it.",
          instruction: "lucid/clear/concise を使って質の高い説明について話しましょう。",
          examples: [
            "The textbook provides a lucid introduction to quantum physics.",
            "A good teacher makes complex ideas lucid and accessible.",
            "Please write a clear and concise conclusion for your essay.",
          ],
        },
      ],
      dailyConversationTips: "「Could you be more lucid?」（もっとわかりやすく説明していただけますか？）はアカデミックや professional な場面で使える洗練されたフレーズです。",
    },
  },
  {
    id: "va-015",
    category: "vocabulary",
    difficulty: "advanced",
    question: "A love of learning is _____ in most children before formal education begins.",
    options: [
      { id: "va015-a", text: "artificial", isCorrect: false, translation: "人工的な" },
      { id: "va015-b", text: "optional", isCorrect: false, translation: "任意の" },
      { id: "va015-c", text: "inherent", isCorrect: true, translation: "生まれ持った、本来備わった" },
      { id: "va015-d", text: "external", isCorrect: false, translation: "外部の" },
    ],
    explanation: "「before formal education begins（正式な教育が始まる前から）」という表現から、学習への愛着は子供に「inherent（生まれ持った・本来備わった）」ものだと言えます。",
    hint: "正式な教育が始まる前から子供に学習への愛着があるということは、それは「生まれ持った」ものですか、「外から与えられた」ものですか？",
    questionTranslation: "学習への愛着は、正式な教育が始まる前から多くの子供に生まれ持って備わっています。",
    questionKatakana: "ア ラブ オブ ラーニング イズ インヒアレント イン モースト チルドレン ビフォア フォーマル エデュケーション ビギンズ。",
    vocabularyItems: [
      { word: "inherent", meaning: "本来備わった、固有の", katakanaReading: "インヒアレント", example: "There are inherent risks in any investment." },
      { word: "innate", meaning: "生まれつきの（inherent に近い）", katakanaReading: "イネイト", example: "She has an innate talent for music." },
      { word: "intrinsic", meaning: "本質的な、内部からの", katakanaReading: "イントリンジック", example: "Intrinsic motivation leads to better learning." },
    ],
    grammarPoints: [
      {
        rule: "inherent / innate / intrinsic の違い",
        explanation: "inherent（物・状況に本来備わった性質）、innate（生まれつき持っている能力・傾向）、intrinsic（外部要因に依存せず内側から来る：internal value/motivation）。「inherent risks（固有のリスク）」「innate ability（生来の能力）」「intrinsic motivation（内発的動機）」",
        example: "There is an inherent tension in the relationship. / She has an innate sense of rhythm. / He is driven by intrinsic motivation.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「A love of learning is inherent in most children before formal education begins.」を5回音読してください。inherent の /ɪnˈhɪərənt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "A love of learning is inherent in most children.",
          instruction: "inherent/innate/intrinsic を使って本来の性質について話しましょう。",
          examples: [
            "There are inherent risks in any new business venture.",
            "She has an innate ability to connect with people.",
            "Intrinsic motivation is more powerful than external rewards.",
          ],
        },
      ],
      dailyConversationTips: "「There's an inherent problem with this approach.」（このアプローチには本質的な問題があります）はビジネスや議論で問題の根本を指摘するときの有効な表現です。",
    },
  },
  {
    id: "va-016",
    category: "vocabulary",
    difficulty: "advanced",
    question: "The documentary made a _____ case for reforming the criminal justice system.",
    options: [
      { id: "va016-a", text: "weak", isCorrect: false, translation: "弱い" },
      { id: "va016-b", text: "irrelevant", isCorrect: false, translation: "無関係の" },
      { id: "va016-c", text: "compelling", isCorrect: true, translation: "説得力のある、印象的な" },
      { id: "va016-d", text: "vague", isCorrect: false, translation: "漠然とした" },
    ],
    explanation: "「made a case for（〜の主張をした）」という表現と組み合わせて、強力で説得力のある主張を表す「compelling（説得力のある）」が最適です。",
    hint: "ドキュメンタリーが刑事司法改革について強力な主張をしたとき、それはどんな主張でしたか？",
    questionTranslation: "そのドキュメンタリーは刑事司法制度の改革に向けて説得力のある主張をしました。",
    questionKatakana: "ザ ドキュメンタリー メイド ア コンペリング ケース フォー リフォーミング ザ クリミナル ジャスティス システム。",
    vocabularyItems: [
      { word: "compelling", meaning: "説得力のある、人を引き付ける", katakanaReading: "コンペリング", example: "She gave a compelling argument for change." },
      { word: "persuasive", meaning: "説得力のある（compelling に近い）", katakanaReading: "パースウェイシブ", example: "His speech was very persuasive." },
      { word: "make a case for", meaning: "〜への主張をする", katakanaReading: "メイク ア ケース フォー", example: "She made a strong case for the new policy." },
    ],
    grammarPoints: [
      {
        rule: "compelling / persuasive / convincing の違い",
        explanation: "compelling（反論するのが難しいほど強力・魅力的）、persuasive（相手を動かす説得力がある）、convincing（信じさせるほど説得力がある）。「compelling evidence」「persuasive argument」「convincing performance」",
        example: "The evidence is compelling. / Her arguments were persuasive. / He gave a convincing performance.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The documentary made a compelling case for reforming the criminal justice system.」を5回音読してください。compelling の /kəmˈpelɪŋ/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The documentary made a compelling case for reform.",
          instruction: "compelling を使って強力な主張について話しましょう。",
          examples: [
            "The author makes a compelling argument for universal basic income.",
            "Her research provides compelling evidence for climate change.",
            "He made a compelling case for investing in renewable energy.",
          ],
        },
      ],
      dailyConversationTips: "「That's a compelling argument.」（それは説得力のある議論ですね）はディスカッションで相手の意見を認める洗練された表現です。",
    },
  },
  {
    id: "va-017",
    category: "vocabulary",
    difficulty: "advanced",
    question: "Excessive use of social media can be _____ to mental health, especially in teenagers.",
    options: [
      { id: "va017-a", text: "beneficial", isCorrect: false, translation: "有益な" },
      { id: "va017-b", text: "neutral", isCorrect: false, translation: "中立的な" },
      { id: "va017-c", text: "detrimental", isCorrect: true, translation: "有害な、悪影響を与える" },
      { id: "va017-d", text: "irrelevant", isCorrect: false, translation: "無関係な" },
    ],
    explanation: "「excessive use（過剰使用）」とティーンエイジャーへの影響という文脈から、SNSの過剰使用がメンタルヘルスに「detrimental（有害な・悪影響を与える）」という判断が自然です。",
    hint: "SNSの過剰使用がメンタルヘルスに与える影響はプラスですか、マイナスですか？",
    questionTranslation: "SNSの過剰使用は、特に10代の若者のメンタルヘルスに有害である可能性があります。",
    questionKatakana: "エクセシブ ユーズ オブ ソーシャル メディア キャン ビー デトリメンタル トゥ メンタル ヘルス、エスペシャリー イン ティーンエイジャーズ。",
    vocabularyItems: [
      { word: "detrimental", meaning: "有害な、マイナスの影響を与える", katakanaReading: "デトリメンタル", example: "Smoking is detrimental to your health." },
      { word: "excessive", meaning: "過剰な、度を超えた", katakanaReading: "エクセシブ", example: "Excessive exercise can cause injury." },
      { word: "harmful", meaning: "有害な（detrimental より一般的）", katakanaReading: "ハームフル", example: "Harmful chemicals were found in the water." },
    ],
    grammarPoints: [
      {
        rule: "detrimental / harmful / adverse / damaging の違い",
        explanation: "detrimental（harmful より formal・書き言葉）、harmful（一般的）、adverse（特に条件・状況・反応に使う：adverse effects/conditions）、damaging（評判・関係を傷つける：damaging to reputation）。",
        example: "Pollution is detrimental to ecosystems. / Alcohol is harmful. / There were adverse side effects. / The scandal was damaging to his career.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「Excessive use of social media can be detrimental to mental health.」を5回音読してください。detrimental の /ˌdetrɪˈmentəl/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "Excessive use of social media can be detrimental to mental health.",
          instruction: "detrimental を使って有害な影響について話しましょう。",
          examples: [
            "Lack of sleep is detrimental to cognitive function.",
            "Air pollution is detrimental to the health of urban residents.",
            "Poor diet can be detrimental to both physical and mental well-being.",
          ],
        },
      ],
      dailyConversationTips: "「This could be detrimental to our progress.」（これは私たちの進捗に悪影響を与える可能性があります）はリスクを指摘するときのプロフェッショナルな表現です。",
    },
  },
  {
    id: "va-018",
    category: "vocabulary",
    difficulty: "advanced",
    question: "The new community center will _____ better communication between different cultural groups.",
    options: [
      { id: "va018-a", text: "prevent", isCorrect: false, translation: "防ぐ" },
      { id: "va018-b", text: "hinder", isCorrect: false, translation: "妨げる" },
      { id: "va018-c", text: "facilitate", isCorrect: true, translation: "促進する、容易にする" },
      { id: "va018-d", text: "limit", isCorrect: false, translation: "制限する" },
    ],
    explanation: "コミュニティセンターが異文化グループ間のコミュニケーションを「facilitate（促進する・容易にする）」という文脈は最も自然です。prevent（防ぐ）や hinder（妨げる）は逆です。",
    hint: "コミュニティセンターが異文化グループのコミュニケーションに対してどんな良い影響を与えますか？",
    questionTranslation: "新しいコミュニティセンターは、異文化グループ間のコミュニケーションを促進するでしょう。",
    questionKatakana: "ザ ニュー コミュニティー センター ウィル ファシリテイト ベター コミュニケーション ビトゥウィーン ディファレント カルチャル グループス。",
    vocabularyItems: [
      { word: "facilitate", meaning: "促進する、容易にする", katakanaReading: "ファシリテイト", example: "The new bridge facilitates transport." },
      { word: "foster", meaning: "育む、促進する（関係・感情に使うことが多い）", katakanaReading: "フォスター", example: "The program fosters international friendships." },
      { word: "promote", meaning: "促進する、宣伝する", katakanaReading: "プロモート", example: "Exercise promotes physical well-being." },
    ],
    grammarPoints: [
      {
        rule: "facilitate / promote / foster / enable の違い",
        explanation: "facilitate（プロセスを容易にする）、promote（行動・意識を奨励する）、foster（関係・成長を育む）、enable（可能にする）。「facilitate communication」「promote health」「foster creativity」「enable access」",
        example: "Technology facilitates remote work. / The campaign promotes environmental awareness. / Good schools foster critical thinking. / The new law enables citizens to vote online.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The new community center will facilitate better communication between different cultural groups.」を5回音読してください。facilitate の /fəˈsɪlɪteɪt/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The community center will facilitate better communication between cultural groups.",
          instruction: "facilitate/promote/foster を使って促進に関する文を作りましょう。",
          examples: [
            "Technology can facilitate learning outside the classroom.",
            "The exchange program promotes international understanding.",
            "A positive classroom environment fosters student creativity.",
          ],
        },
      ],
      dailyConversationTips: "「I'd like to facilitate a discussion on this topic.」（このトピックについて議論を進行させたいと思います）は会議や授業の司会者がよく使う表現です。",
    },
  },
  {
    id: "va-019",
    category: "vocabulary",
    difficulty: "advanced",
    question: "Rather than following theory blindly, she took a _____ approach, focusing on what actually works.",
    options: [
      { id: "va019-a", text: "idealistic", isCorrect: false, translation: "理想主義的な" },
      { id: "va019-b", text: "theoretical", isCorrect: false, translation: "理論的な" },
      { id: "va019-c", text: "pragmatic", isCorrect: true, translation: "実用主義的な、実際的な" },
      { id: "va019-d", text: "impulsive", isCorrect: false, translation: "衝動的な" },
    ],
    explanation: "「Rather than following theory blindly（理論に盲目的に従うのではなく）」「what actually works（実際に機能すること）に焦点を当てる」という文脈から、「pragmatic（実用主義的な）」が正解です。",
    hint: "「理論より実際に機能することを重視する」アプローチとはどんなアプローチですか？",
    questionTranslation: "理論に盲目的に従うのではなく、彼女は実際に機能することに焦点を当てた実用主義的なアプローチを取りました。",
    questionKatakana: "ラザー ザン フォローイング セオリー ブラインドリー、シー トゥック ア プラグマティック アプローチ、フォーカシング オン ワット アクチュアリー ワークス。",
    vocabularyItems: [
      { word: "pragmatic", meaning: "実用主義的な、現実的な", katakanaReading: "プラグマティック", example: "We need a pragmatic solution." },
      { word: "pragmatism", meaning: "実用主義（名詞）", katakanaReading: "プラグマティズム", example: "His pragmatism helped resolve the conflict." },
      { word: "idealistic", meaning: "理想主義的な", katakanaReading: "アイディアリスティック", example: "Young students can be idealistic." },
    ],
    grammarPoints: [
      {
        rule: "pragmatic / practical / realistic の違い",
        explanation: "pragmatic（理論より結果・効果を重視する態度）、practical（実際的で応用しやすい）、realistic（現実に即している）。「a pragmatic approach」「practical advice」「a realistic goal」",
        example: "She took a pragmatic approach to the budget. / He gave practical advice. / Set realistic expectations.",
      },
    ],
    speakingPractice: {
      readingInstructions: "「She took a pragmatic approach, focusing on what actually works.」を5回音読してください。pragmatic の /præɡˈmætɪk/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "She took a pragmatic approach, focusing on what actually works.",
          instruction: "pragmatic を使って実際的なアプローチについて話しましょう。",
          examples: [
            "We need a pragmatic solution to the housing crisis.",
            "A good leader balances idealism with pragmatism.",
            "His pragmatic attitude helped the team meet its deadline.",
          ],
        },
      ],
      dailyConversationTips: "「Let's be pragmatic about this.」（これについては現実的に考えましょう）は問題解決の場面で使える effective な表現です。",
    },
  },
  {
    id: "va-020",
    category: "vocabulary",
    difficulty: "advanced",
    question: "The _____ between 'freedom' and 'liberty' is subtle but important in political science.",
    options: [
      { id: "va020-a", text: "similarity", isCorrect: false, translation: "類似点" },
      { id: "va020-b", text: "definition", isCorrect: false, translation: "定義" },
      { id: "va020-c", text: "nuance", isCorrect: true, translation: "ニュアンス、微妙な違い" },
      { id: "va020-d", text: "translation", isCorrect: false, translation: "翻訳" },
    ],
    explanation: "「subtle but important（微妙だが重要な）」という表現から、「freedom」と「liberty」の「nuance（ニュアンス・微妙な違い）」を指していることが分かります。similarity（類似点）は微妙な差異ではなく共通点を指します。",
    hint: "「微妙だが重要な」差異を表す言葉は何ですか？",
    questionTranslation: "「freedom」と「liberty」の間のニュアンスは微妙ですが、政治学において重要です。",
    questionKatakana: "ザ ニュアンス ビトゥウィーン フリーダム アンド リバティー イズ サトル バット インポータント イン ポリティカル サイエンス。",
    vocabularyItems: [
      { word: "nuance", meaning: "ニュアンス、微妙な差異", katakanaReading: "ニュアンス", example: "She understood the nuance of the poem." },
      { word: "subtle", meaning: "微妙な、繊細な", katakanaReading: "サトル", example: "There is a subtle difference between the two." },
      { word: "distinction", meaning: "区別、相違点", katakanaReading: "ディスティンクション", example: "The distinction between the two concepts is important." },
    ],
    grammarPoints: [
      {
        rule: "nuance / distinction / difference の違い",
        explanation: "nuance（微妙なニュアンス・文脈による意味の差）、distinction（はっきりとした区別）、difference（一般的な差異）。「a nuance in meaning」「a clear distinction」「a significant difference」",
        example: "There are subtle nuances in the two words. / Make a clear distinction between fact and opinion. / What is the difference between the two methods?",
      },
    ],
    speakingPractice: {
      readingInstructions: "「The nuance between 'freedom' and 'liberty' is subtle but important in political science.」を5回音読してください。nuance の /ˈnjuːɑːns/ というアクセントに注意しましょう。",
      phraseReplacements: [
        {
          original: "The nuance between 'freedom' and 'liberty' is subtle but important.",
          instruction: "nuance を使って言語の微妙な差について話しましょう。",
          examples: [
            "Understanding cultural nuances is essential for effective communication.",
            "The nuance in her tone suggested she was not fully satisfied.",
            "Advanced learners appreciate the nuances of idiomatic expressions.",
          ],
        },
      ],
      dailyConversationTips: "「There's a nuance here that's easy to miss.」（ここに見落としやすいニュアンスがあります）は言語学習や文化の議論で使える sophisticated な表現です。",
    },
  },
];
