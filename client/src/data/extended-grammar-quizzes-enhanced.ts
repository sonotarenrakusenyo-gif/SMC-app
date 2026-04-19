import { QuizQuestion } from "./quizzes";

export const extendedGrammarQuizzesEnhanced: QuizQuestion[] = [
  {
    id: "grammar_1",
    category: "grammar",
    difficulty: "intermediate",
    question: "I _____ to the library every day since I started my studies at SMC.",
    
    options: [
      {
        id: "a",
        text: "have been going",
        
        isCorrect: true,
      },
      {
        id: "b",
        text: "go",
        
        isCorrect: false,
      },
      {
        id: "c",
        text: "went",
        
        isCorrect: false,
      },
      {
        id: "d",
        text: "have gone",
        
        isCorrect: false,
      },
    ],
    explanation:
      "「since I started my studies」という過去の時点から現在まで継続している動作を表すため、現在完了進行形（have been going）が正解です。この表現は「開始時点から今まで、ずっと続いている」という意味を持ちます。",
    vocabularyItems: [
      {
        word: "library",
        meaning: "図書館",
        example: "The library is open until 9 PM.",
      },
      {
        word: "since",
        meaning: "～以来、～から（過去のある時点から現在まで）",
        example: "I have lived here since 2020.",
      },
      {
        word: "studies",
        meaning: "勉強、研究",
        example: "My studies are very demanding.",
      },
    ],
    grammarPoints: [
      {
        rule: "現在完了進行形（Present Perfect Continuous）",
        explanation:
          "have/has + been + -ing形。過去のある時点から現在まで継続している動作や状態を表します。「どのくらい続いているか」という期間が重要です。",
        example: "I have been studying English for 3 years.",
      },
      {
        rule: "since vs. for",
        explanation:
          "since：過去の特定の時点（2020年、去年など）。for：期間の長さ（3年間、2ヶ月間など）。",
        example: "since 2020 / for 3 years",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を3回、自然なスピードで音読してください。特に「have been going」の部分をスムーズに発音することを意識してください。",
      phraseReplacements: [
        {
          original: "I have been going to the library every day",
          instruction: "「毎日」の部分を別の頻度に変えて言ってみてください",
          examples: [
            "I have been going to the library three times a week",
            "I have been going to the library every morning",
            "I have been going to the library on weekends",
          ],
        },
        {
          original: "since I started my studies at SMC",
          instruction: "「SMCで勉強を始めてから」の部分を別の時点に変えて言ってみてください",
          examples: [
            "since I moved to California",
            "since last semester",
            "since January",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「I've been going to...」と短く言うことが多いです。友人との会話で「最近、図書館よく行ってるよ」と言いたい時は、「I've been going to the library a lot lately」と表現します。",
    },
    hint: "「since」の後に過去の時点が来ているので、過去から現在まで続いている動作を表す時制が必要です。",
  },

  {
    id: "grammar_2",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The professor _____ the assignment, which was due last Friday, is now accepting late submissions.",
    questionTranslation:
      "「先週の金曜日が期限だった課題を忘れた教授は、今遅れた提出を受け付けています。」",
    options: [
      {
        id: "a",
        text: "who forgot",
        
        isCorrect: false,
      },
      {
        id: "b",
        text: "who has forgotten",
        
        isCorrect: false,
      },
      {
        id: "c",
        text: "who forgot about",
        
        isCorrect: false,
      },
      {
        id: "d",
        text: "who forgot the assignment",
        
        isCorrect: true,
      },
    ],
    explanation:
      "この文は関係代名詞を使った複文です。「The professor」を修飾する関係代名詞節が必要です。正解は「who forgot the assignment」で、教授が課題を忘れたという意味になります。",
    vocabularyItems: [
      {
        word: "assignment",
        meaning: "課題、宿題",
        example: "I have a lot of assignments this week.",
      },
      {
        word: "due",
        meaning: "期限が来ている、支払う必要がある",
        example: "The project is due on Friday.",
      },
      {
        word: "late submissions",
        meaning: "遅れた提出",
        example: "Late submissions will receive a 10% penalty.",
      },
    ],
    grammarPoints: [
      {
        rule: "関係代名詞（Relative Pronouns）",
        explanation:
          "who, which, that などを使って、名詞を修飾する節を作ります。who は人を、which は物を修飾します。",
        example: "The student who finished first got an A.",
      },
      {
        rule: "関係代名詞節の位置",
        explanation:
          "関係代名詞節は修飾する名詞のすぐ後に来ます。この場合、「The professor」の直後に「who forgot the assignment」が来ます。",
        example: "The book which I read last week was amazing.",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を2回、ゆっくり音読してください。関係代名詞節の部分を意識して、自然な区切りで読むことを心がけてください。",
      phraseReplacements: [
        {
          original: "The professor who forgot the assignment",
          instruction: "「課題を忘れた教授」の部分を別の職業に変えて言ってみてください",
          examples: [
            "The teacher who forgot the assignment",
            "The instructor who forgot the assignment",
            "The TA who forgot the assignment",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「The professor who forgot about the assignment」と「about」を付けることもあります。また、非公式な会話では「The professor that forgot the assignment」と「that」を使うこともあります。",
    },
    hint: "関係代名詞「who」の後には、その人が行った動作を表す動詞が必要です。",
  },

  {
    id: "grammar_3",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "Although she had never studied abroad before, _____ she was able to adapt quickly to the new environment.",
    questionTranslation:
      "「彼女は以前海外で勉強したことがなかったが、新しい環境にすぐに適応することができた。」",
    options: [
      {
        id: "a",
        text: "however",
        
        isCorrect: false,
      },
      {
        id: "b",
        text: "yet",
        
        isCorrect: true,
      },
      {
        id: "c",
        text: "therefore",
        
        isCorrect: false,
      },
      {
        id: "d",
        text: "thus",
        
        isCorrect: false,
      },
    ],
    explanation:
      "「Although」で始まる譲歩節（～だけれども）の後に来る主文では、対比を表す接続詞が必要です。「yet」は「しかし、それでも」という意味で、対比を強調します。「however」は通常、セミコロンの後に来るため、ここでは不適切です。",
    vocabularyItems: [
      {
        word: "although",
        meaning: "～だけれども、～にもかかわらず",
        example: "Although it was raining, we went out.",
      },
      {
        word: "abroad",
        meaning: "海外に、外国で",
        example: "Many students study abroad during college.",
      },
      {
        word: "adapt",
        meaning: "適応する、順応する",
        example: "It takes time to adapt to a new culture.",
      },
    ],
    grammarPoints: [
      {
        rule: "譲歩節（Concessive Clauses）",
        explanation:
          "although, though, even though などを使って、予想に反する状況を表します。譲歩節の後の主文では、対比を表す接続詞（yet, still など）が使われることが多いです。",
        example: "Although he studied hard, he failed the exam.",
      },
      {
        rule: "接続詞の使い分け",
        explanation:
          "yet：譲歩節の後に使う対比の接続詞。however：通常、セミコロンの後に来て、前の文と対比させる。",
        example: "Although it was cold; however, we went skiing. (不正確) / Although it was cold, yet we went skiing. (正確)",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を3回、感情を込めて音読してください。「Although」と「yet」の間の対比を感じながら読むことが大切です。",
      phraseReplacements: [
        {
          original: "Although she had never studied abroad before",
          instruction: "「海外で勉強したことがない」の部分を別の経験に変えて言ってみてください",
          examples: [
            "Although she had never lived alone before",
            "Although she had never worked in a team before",
            "Although she had never spoken English before",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「Although」の代わりに「Even though」をよく使います。また、「yet」の代わりに「still」を使うこともあります。例：「Even though she had never studied abroad before, still she was able to adapt quickly.」",
    },
    hint: "譲歩節（although）の後には、対比を表す接続詞が来ることが多いです。",
  },

  {
    id: "grammar_4",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "If I _____ about the exam earlier, I would have prepared better.",
    questionTranslation:
      "「もし試験のことをもっと早く知っていたら、もっとよく準備できたのに。」",
    options: [
      {
        id: "a",
        text: "knew",
        
        isCorrect: false,
      },
      {
        id: "b",
        text: "had known",
        
        isCorrect: true,
      },
      {
        id: "c",
        text: "have known",
        
        isCorrect: false,
      },
      {
        id: "d",
        text: "would have known",
        
        isCorrect: false,
      },
    ],
    explanation:
      "これは過去の仮定法（Third Conditional）です。「If + had + 過去分詞」の形で、過去の事実と反対の仮定を表します。「もし知っていたら」という過去の仮定に対して、「準備できたのに」という過去の結果を表しています。",
    vocabularyItems: [
      {
        word: "exam",
        meaning: "試験、テスト",
        example: "The exam is next Monday.",
      },
      {
        word: "earlier",
        meaning: "もっと早く、以前に",
        example: "I should have started earlier.",
      },
      {
        word: "prepare",
        meaning: "準備する",
        example: "We need to prepare for the presentation.",
      },
    ],
    grammarPoints: [
      {
        rule: "過去の仮定法（Third Conditional）",
        explanation:
          "If + had + 過去分詞, would have + 過去分詞。過去の事実と反対の仮定を表します。「もし～だったら、～だったのに」という意味です。",
        example: "If I had studied more, I would have passed the test.",
      },
      {
        rule: "仮定法の時制",
        explanation:
          "現在の仮定法：If + 過去形, would + 原形。過去の仮定法：If + had + 過去分詞, would have + 過去分詞。",
        example: "If I were rich, I would travel. (現在) / If I had been rich, I would have traveled. (過去)",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を2回、後悔の気持ちを込めて音読してください。「had known」と「would have prepared」の発音に注意してください。",
      phraseReplacements: [
        {
          original: "If I had known about the exam earlier",
          instruction: "「試験のことを知っていたら」の部分を別の状況に変えて言ってみてください",
          examples: [
            "If I had known about the deadline earlier",
            "If I had known about the meeting earlier",
            "If I had known about the change earlier",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「If I'd known...」と短縮形を使うことが多いです。また、「I would've prepared better」と「would've」と短縮することもあります。",
    },
    hint: "過去の仮定法では、「If」の後に「had + 過去分詞」が来ます。",
  },

  {
    id: "grammar_5",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The research _____ by the team last year has led to significant breakthroughs.",
    questionTranslation:
      "「昨年チームによって行われた研究は、重大な突破口につながった。」",
    options: [
      {
        id: "a",
        text: "conducted",
        
        isCorrect: true,
      },
      {
        id: "b",
        text: "was conducted",
        
        isCorrect: false,
      },
      {
        id: "c",
        text: "conducting",
        
        isCorrect: false,
      },
      {
        id: "d",
        text: "has been conducted",
        
        isCorrect: false,
      },
    ],
    explanation:
      "「The research」を修飾する過去分詞句が必要です。「conducted by the team last year」は「昨年チームによって実施された」という意味で、名詞を修飾しています。過去分詞は受動的な意味を持つため、ここでは「conducted」が正解です。",
    vocabularyItems: [
      {
        word: "research",
        meaning: "研究",
        example: "She is conducting research on climate change.",
      },
      {
        word: "conducted",
        meaning: "実施した、行った",
        example: "The survey was conducted last month.",
      },
      {
        word: "breakthroughs",
        meaning: "突破口、重大な発見",
        example: "The new technology represents a major breakthrough.",
      },
    ],
    grammarPoints: [
      {
        rule: "過去分詞を使った名詞修飾",
        explanation:
          "過去分詞は形容詞として名詞を修飾することができます。「conducted research」は「実施された研究」という意味です。",
        example: "The book written by the author is very popular.",
      },
      {
        rule: "受動的な意味の過去分詞",
        explanation:
          "過去分詞は受動的な意味を持つため、「～された」という意味になります。",
        example: "The broken window needs to be fixed.",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を3回、学術的なトーンで音読してください。「conducted」の発音に注意してください。",
      phraseReplacements: [
        {
          original: "The research conducted by the team",
          instruction: "「チームによって実施された」の部分を別の主体に変えて言ってみてください",
          examples: [
            "The research conducted by the scientists",
            "The research conducted by the university",
            "The research conducted by the organization",
          ],
        },
      ],
      dailyConversationTips:
        "学術的な会話では、「The research conducted by...」という表現がよく使われます。また、「The research done by...」と言うこともあります。",
    },
    hint: "名詞「research」を修飾する形容詞的な表現が必要です。過去分詞は受動的な意味を持ちます。",
  },

  {
    id: "grammar_6",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The students _____ for the exam all night, so they are exhausted today.",
    questionTranslation:
      "「学生たちは一晩中試験の勉強をしていたので、今日は疲れ果てている。」",
    options: [
      {
        id: "a",
        text: "studied",
        
        isCorrect: false,
      },
      {
        id: "b",
        text: "have been studying",
        
        isCorrect: false,
      },
      {
        id: "c",
        text: "had been studying",
        
        isCorrect: true,
      },
      {
        id: "d",
        text: "were studying",
        
        isCorrect: false,
      },
    ],
    explanation:
      "「all night」（一晩中）という期間を表す表現があり、過去のある時点から別の過去の時点まで継続していた動作を表すため、過去完了進行形（had been studying）が正解です。「so they are exhausted today」という結果が、その継続した動作の結果を示しています。",
    vocabularyItems: [
      {
        word: "all night",
        meaning: "一晩中、夜通し",
        example: "I worked all night to finish the project.",
      },
      {
        word: "exhausted",
        meaning: "疲れ果てた、疲労困憊した",
        example: "After the marathon, I was completely exhausted.",
      },
      {
        word: "exam",
        meaning: "試験、テスト",
        example: "The exam is very difficult.",
      },
    ],
    grammarPoints: [
      {
        rule: "過去完了進行形（Past Perfect Continuous）",
        explanation:
          "had + been + -ing形。過去のある時点から別の過去の時点まで継続していた動作を表します。",
        example: "I had been working for 3 hours when he arrived.",
      },
      {
        rule: "過去完了進行形と結果",
        explanation:
          "過去完了進行形で表した継続した動作が、その後の状態や結果に影響を与えることを表します。",
        example: "She had been running, so she was out of breath.",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を3回、疲れた感じで音読してください。「had been studying」の部分をスムーズに発音することを意識してください。",
      phraseReplacements: [
        {
          original: "The students had been studying for the exam all night",
          instruction: "「試験のために」の部分を別の目的に変えて言ってみてください",
          examples: [
            "The students had been studying for the presentation all night",
            "The students had been studying for the final all night",
            "The students had been studying for the quiz all night",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「They'd been studying all night」と短縮形を使うことが多いです。また、「They were studying all night」と過去進行形を使うこともありますが、「had been studying」の方がより継続性を強調します。",
    },
    hint: "「all night」という期間を表す表現があり、過去のある時点から別の過去の時点まで継続していた動作を表します。",
  },

  {
    id: "grammar_7",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The committee decided that the proposal _____ before the next meeting.",
    questionTranslation:
      "「委員会は、提案が次の会議の前に承認されるべきだと決定した。」",
    options: [
      {
        id: "a",
        text: "should be approved",
        
        isCorrect: true,
      },
      {
        id: "b",
        text: "should approve",
        
        isCorrect: false,
      },
      {
        id: "c",
        text: "be approved",
        
        isCorrect: false,
      },
      {
        id: "d",
        text: "will be approved",
        
        isCorrect: false,
      },
    ],
    explanation:
      "「decided that」の後には、提案（proposal）が承認されるべきという意見を表す必要があります。提案は承認される側（受動的）であり、「should be approved」という形で、「～すべき」という義務や推奨を表します。",
    vocabularyItems: [
      {
        word: "committee",
        meaning: "委員会",
        example: "She is a member of the committee.",
      },
      {
        word: "proposal",
        meaning: "提案、案",
        example: "The proposal was accepted by the board.",
      },
      {
        word: "approved",
        meaning: "承認する、認可する",
        example: "The manager approved the budget.",
      },
    ],
    grammarPoints: [
      {
        rule: "should + be + 過去分詞（受動形の仮定法）",
        explanation:
          "「～すべき」という義務や推奨を受動的に表します。",
        example: "The document should be signed by the director.",
      },
      {
        rule: "that節内の時制",
        explanation:
          "主文の時制に関わらず、that節内では、その内容に合った時制を使います。ここでは、「should be approved」で、推奨や義務を表します。",
        example: "He said that the meeting should be held tomorrow.",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を2回、公式なトーンで音読してください。「should be approved」の部分をはっきり発音してください。",
      phraseReplacements: [
        {
          original: "the proposal should be approved",
          instruction: "「提案が承認されるべき」の部分を別の行動に変えて言ってみてください",
          examples: [
            "the proposal should be discussed",
            "the proposal should be reviewed",
            "the proposal should be considered",
          ],
        },
      ],
      dailyConversationTips:
        "ビジネス会話では、「The proposal should be approved」という表現がよく使われます。また、「The proposal needs to be approved」と言うこともあります。",
    },
    hint: "「proposal」は承認される側なので、受動形が必要です。また、「should」は推奨や義務を表します。",
  },

  {
    id: "grammar_8",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "Neither the professor nor the students _____ about the schedule change.",
    questionTranslation:
      "「教授も学生も、スケジュール変更について知らなかった。」",
    options: [
      {
        id: "a",
        text: "was aware",
        
        isCorrect: false,
      },
      {
        id: "b",
        text: "were aware",
        
        isCorrect: true,
      },
      {
        id: "c",
        text: "is aware",
        
        isCorrect: false,
      },
      {
        id: "d",
        text: "are aware",
        
        isCorrect: false,
      },
    ],
    explanation:
      "「Neither A nor B」という構文では、B（最後に来る名詞）の数に動詞を合わせます。ここでは「students」が最後に来ているため、複数形の「were」を使います。また、過去の状況を表しているため、「were aware」が正解です。",
    vocabularyItems: [
      {
        word: "neither",
        meaning: "どちらも～ない（2つのもの）",
        example: "Neither option is good.",
      },
      {
        word: "aware",
        meaning: "気づいている、認識している",
        example: "Are you aware of the new policy?",
      },
      {
        word: "schedule change",
        meaning: "スケジュール変更",
        example: "There is a schedule change for tomorrow.",
      },
    ],
    grammarPoints: [
      {
        rule: "Neither A nor B の主語の一致",
        explanation:
          "「Neither A nor B」では、B（最後に来る名詞）の数に動詞を合わせます。",
        example: "Neither the book nor the pens are on the desk.",
      },
      {
        rule: "Either A or B の主語の一致",
        explanation:
          "「Either A or B」でも同じルールが適用されます。B の数に動詞を合わせます。",
        example: "Either the students or the teacher is responsible.",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を2回、否定的なトーンで音読してください。「Neither」と「nor」の発音に注意してください。",
      phraseReplacements: [
        {
          original: "Neither the professor nor the students were aware",
          instruction: "「教授も学生も」の部分を別の人物に変えて言ってみてください",
          examples: [
            "Neither the manager nor the employees were aware",
            "Neither the director nor the staff were aware",
            "Neither the teacher nor the students were aware",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「Neither...nor」の代わりに「Neither...or」と言う人もいますが、文法的には「nor」が正しいです。また、「Both the professor and the students were aware」と肯定的に言うこともあります。",
    },
    hint: "「Neither A nor B」では、B（最後に来る名詞）の数に動詞を合わせます。",
  },

  {
    id: "grammar_9",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The company requires that all employees _____ a background check before starting work.",
    questionTranslation:
      "「会社は、すべての従業員が仕事を始める前に身辺調査を受けることを要求している。」",
    options: [
      {
        id: "a",
        text: "undergo",
        
        isCorrect: true,
      },
      {
        id: "b",
        text: "will undergo",
        
        isCorrect: false,
      },
      {
        id: "c",
        text: "undergoing",
        
        isCorrect: false,
      },
      {
        id: "d",
        text: "to undergo",
        
        isCorrect: false,
      },
    ],
    explanation:
      "「requires that」の後には、仮定法現在（subjunctive mood）が来ます。英語では、「require, demand, suggest, insist」などの動詞の後の that節では、動詞が現在形（原形に近い形）になります。ここでは「undergo」が正解です。",
    vocabularyItems: [
      {
        word: "requires",
        meaning: "要求する、必要とする",
        example: "The job requires experience.",
      },
      {
        word: "background check",
        meaning: "身辺調査、背景確認",
        example: "A background check is required for this position.",
      },
      {
        word: "undergo",
        meaning: "受ける、経験する",
        example: "She will undergo surgery next week.",
      },
    ],
    grammarPoints: [
      {
        rule: "仮定法現在（Subjunctive Mood）",
        explanation:
          "「require, demand, suggest, insist」などの動詞の後の that節では、動詞が現在形（原形に近い形）になります。",
        example: "I suggest that he study harder.",
      },
      {
        rule: "that節内の動詞の形",
        explanation:
          "仮定法現在では、三人称単数でも「-s」が付きません。例えば、「he study」となります。",
        example: "The teacher insists that the student complete the assignment.",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を2回、公式なトーンで音読してください。「undergo」の発音に注意してください。",
      phraseReplacements: [
        {
          original: "requires that all employees undergo a background check",
          instruction: "「身辺調査を受けることを要求する」の部分を別の要求に変えて言ってみてください",
          examples: [
            "requires that all employees submit a resume",
            "requires that all employees attend training",
            "requires that all employees sign a contract",
          ],
        },
      ],
      dailyConversationTips:
        "ビジネス会話では、「The company requires that...」という表現がよく使われます。また、「The company demands that...」と言うこともあります。",
    },
    hint: "「require that」の後には、仮定法現在が来ます。動詞は原形に近い形になります。",
  },

  {
    id: "grammar_10",
    category: "grammar",
    difficulty: "intermediate",
    question:
      "The more you practice, _____ your English will become.",
    questionTranslation:
      "「練習すればするほど、あなたの英語はより流暢になるでしょう。」",
    options: [
      {
        id: "a",
        text: "the more fluent",
        
        isCorrect: true,
      },
      {
        id: "b",
        text: "the most fluent",
        
        isCorrect: false,
      },
      {
        id: "c",
        text: "more fluent",
        
        isCorrect: false,
      },
      {
        id: "d",
        text: "fluent",
        
        isCorrect: false,
      },
    ],
    explanation:
      "「The more...the more...」という構文は、「～すればするほど、ますます～」という意味を表します。比較級を2つ使って、2つの事柄の関係を表します。ここでは「The more you practice, the more fluent your English will become」が正解です。",
    vocabularyItems: [
      {
        word: "practice",
        meaning: "練習する",
        example: "I practice English every day.",
      },
      {
        word: "fluent",
        meaning: "流暢な、滑らかな",
        example: "She speaks fluent Spanish.",
      },
      {
        word: "the more...the more",
        meaning: "～すればするほど、ますます～",
        example: "The more you study, the better you will do.",
      },
    ],
    grammarPoints: [
      {
        rule: "The more...the more...構文",
        explanation:
          "比較級を2つ使って、2つの事柄の関係を表します。「～すればするほど、ますます～」という意味です。",
        example: "The more I read, the more I understand.",
      },
      {
        rule: "比較級の形成",
        explanation:
          "短い形容詞（1音節や2音節）には「-er」を付けます。長い形容詞には「more」を付けます。",
        example: "tall → taller / beautiful → more beautiful",
      },
    ],
    speakingPractice: {
      readingInstructions:
        "この文を3回、励ましのトーンで音読してください。「the more...the more」のリズムを感じながら読むことが大切です。",
      phraseReplacements: [
        {
          original: "The more you practice, the more fluent your English will become",
          instruction: "「練習する」と「流暢になる」の部分を別の組み合わせに変えて言ってみてください",
          examples: [
            "The more you study, the better your grades will become",
            "The more you exercise, the stronger you will become",
            "The more you read, the more you will learn",
          ],
        },
      ],
      dailyConversationTips:
        "日常会話では、「The more you practice, the better you'll get」と短縮形を使うことが多いです。また、「The more...the more...」の代わりに「If you practice more, you'll get better」と言うこともあります。",
    },
    hint: "「The more...the more...」という構文では、比較級を2つ使います。",
  },
];
