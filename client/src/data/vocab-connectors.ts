/** 接続詞単語帳（厳選50語とは別枠） */

export type ConnectorMacroCategory = "逆接" | "因果関係" | "例示・追加" | "目的";

export type VocabConnectorEntry = {
  id: string;
  word: string;
  /** 英語のカタカナ読み */
  katakanaReading: string;
  macroCategory: ConnectorMacroCategory;
  /** 読解でどう効くかの短い説明（括弧付きでも可） */
  readingHint: string;
  /** 読解で役立つ一言メモ */
  memo: string;
};

export const CONNECTOR_VOCAB_LIST: VocabConnectorEntry[] = [
  // 逆接 — However / But / Nevertheless
  {
    id: "conn-however",
    word: "However",
    katakanaReading: "ハウエヴァー",
    macroCategory: "逆接",
    readingHint: "（直前と逆の方向。筆者の本当の主張が続きやすい）",
    memo: "「ここからが筆者の本当に伝えたい本音！」",
  },
  {
    id: "conn-but",
    word: "But",
    katakanaReading: "バット",
    macroCategory: "逆接",
    readingHint: "（直前と逆の方向。筆者の本当の主張が続きやすい）",
    memo: "「ここからが筆者の本当に伝えたい本音！」",
  },
  {
    id: "conn-nevertheless",
    word: "Nevertheless",
    katakanaReading: "ネヴァザレス",
    macroCategory: "逆接",
    readingHint: "（直前と逆の方向。筆者の本当の主張が続きやすい）",
    memo: "「ここからが筆者の本当に伝えたい本音！」",
  },
  // 逆接 — In contrast / Although / Despite
  {
    id: "conn-in-contrast",
    word: "In contrast",
    katakanaReading: "イン・コントラスト",
    macroCategory: "逆接",
    readingHint: "（二つを対比・譲歩するとき。違いや条件に注目）",
    memo: "「AとBを比べているよ。違いに注目！」",
  },
  {
    id: "conn-although",
    word: "Although",
    katakanaReading: "オールゾー",
    macroCategory: "逆接",
    readingHint: "（二つを対比・譲歩するとき。違いや条件に注目）",
    memo: "「AとBを比べているよ。違いに注目！」",
  },
  {
    id: "conn-despite",
    word: "Despite",
    katakanaReading: "ディスパイト",
    macroCategory: "逆接",
    readingHint: "（二つを対比・譲歩するとき。違いや条件に注目）",
    memo: "「AとBを比べているよ。違いに注目！」",
  },
  // 因果 — Because / Due to
  {
    id: "conn-because",
    word: "Because",
    katakanaReading: "ビコーズ",
    macroCategory: "因果関係",
    readingHint: "（このあと理由・原因が続く）",
    memo: "「原因・理由はこれ！」",
  },
  {
    id: "conn-due-to",
    word: "Due to",
    katakanaReading: "デュー・トゥ",
    macroCategory: "因果関係",
    readingHint: "（このあと理由・原因が続く）",
    memo: "「原因・理由はこれ！」",
  },
  // 因果 — Therefore / As a result / Consequently / Led to
  {
    id: "conn-therefore",
    word: "Therefore",
    katakanaReading: "ゼアフォー",
    macroCategory: "因果関係",
    readingHint: "（前述が原因で、ここから結果・結論）",
    memo: "「だからこうなった、という結論（答え）がくるよ！」",
  },
  {
    id: "conn-as-a-result",
    word: "As a result",
    katakanaReading: "アズ・ア・リザルト",
    macroCategory: "因果関係",
    readingHint: "（前述が原因で、ここから結果・結論）",
    memo: "「だからこうなった、という結論（答え）がくるよ！」",
  },
  {
    id: "conn-consequently",
    word: "Consequently",
    katakanaReading: "コンシークェントリー",
    macroCategory: "因果関係",
    readingHint: "（前述が原因で、ここから結果・結論）",
    memo: "「だからこうなった、という結論（答え）がくるよ！」",
  },
  {
    id: "conn-led-to",
    word: "Led to",
    katakanaReading: "レッド・トゥ",
    macroCategory: "因果関係",
    readingHint: "（前述が原因で、ここから結果・結論）",
    memo: "「だからこうなった、という結論（答え）がくるよ！」",
  },
  // 例示・追加 — For example / Such as
  {
    id: "conn-for-example",
    word: "For example",
    katakanaReading: "フォー・イグザンプル",
    macroCategory: "例示・追加",
    readingHint: "（抽象的な話の具体例が続く）",
    memo: "「具体的な話。難しいときはここを読んでイメージしよう！」",
  },
  {
    id: "conn-such-as",
    word: "Such as",
    katakanaReading: "サッチ・アズ",
    macroCategory: "例示・追加",
    readingHint: "（抽象的な話の具体例が続く）",
    memo: "「具体的な話。難しいときはここを読んでイメージしよう！」",
  },
  // 例示・追加 — Additionally / Furthermore / Moreover
  {
    id: "conn-additionally",
    word: "Additionally",
    katakanaReading: "アディショナリー",
    macroCategory: "例示・追加",
    readingHint: "（同じ方向の追加情報）",
    memo: "「さらに情報をおかわり！同じ流れの話が続くよ。」",
  },
  {
    id: "conn-furthermore",
    word: "Furthermore",
    katakanaReading: "ファーザモア",
    macroCategory: "例示・追加",
    readingHint: "（同じ方向の追加情報）",
    memo: "「さらに情報をおかわり！同じ流れの話が続くよ。」",
  },
  {
    id: "conn-moreover",
    word: "Moreover",
    katakanaReading: "モーローヴァー",
    macroCategory: "例示・追加",
    readingHint: "（同じ方向の追加情報）",
    memo: "「さらに情報をおかわり！同じ流れの話が続くよ。」",
  },
  // 目的
  {
    id: "conn-in-order-to",
    word: "In order to",
    katakanaReading: "イン・オーダー・トゥ",
    macroCategory: "目的",
    readingHint: "（直後に目的・望む結果が続く）",
    memo: "「目的はこれ。行動の理由を探すときに役立つよ！」",
  },
  {
    id: "conn-so-that",
    word: "So that",
    katakanaReading: "ソー・ザット",
    macroCategory: "目的",
    readingHint: "（直後に目的・望む結果が続く）",
    memo: "「目的はこれ。行動の理由を探すときに役立つよ！」",
  },
  // --- 以下 +11（試験・留学・キャンパス英文でよく見る接続）合計30語 ---
  {
    id: "conn-on-the-other-hand",
    word: "On the other hand",
    katakanaReading: "オン・ジ・アザー・ハンド",
    macroCategory: "逆接",
    readingHint: "（一方では〜、もう一方では〜と二つの側面や意見を並べる）",
    memo: "「賛否・比較のB面が来る！対になる話にマーカーを立てよう。」",
  },
  {
    id: "conn-even-though",
    word: "Even though",
    katakanaReading: "イーヴン・ゾー",
    macroCategory: "逆接",
    readingHint: "（Although より強い譲歩。「それでも」というニュアンス）",
    memo: "「不利な条件でも主張は曲げない——譲歩のあとに本音が続くよ。」",
  },
  {
    id: "conn-unless",
    word: "Unless",
    katakanaReading: "アンレス",
    macroCategory: "逆接",
    readingHint: "（「〜しない限り」「もし〜しなければ」の否定条件）",
    memo: "「if not の逆。試験の条件文・除外の読み取りに必須級。」",
  },
  {
    id: "conn-otherwise",
    word: "Otherwise",
    katakanaReading: "アザーワイズ",
    macroCategory: "逆接",
    readingHint: "（「そうでなければ」悪い結果や代わりの展開が続く）",
    memo: "「注意喚起やリスクの結論。前の指示とセットで読む。」",
  },
  {
    id: "conn-since",
    word: "Since",
    katakanaReading: "シンス",
    macroCategory: "因果関係",
    readingHint: "（「〜だから」「〜なので」と理由・原因を述べる。時の since とは文脈で見分ける）",
    memo: "「Because の堅めの仲間。エッセイや教授のメールでよく出る。」",
  },
  {
    id: "conn-owing-to",
    word: "Owing to",
    katakanaReading: "オーイング・トゥ",
    macroCategory: "因果関係",
    readingHint: "（Due to に近いフォーマルな「〜のため」）",
    memo: "「シラバスやお知らせの文で出やすい。原因の名詞が続く。」",
  },
  {
    id: "conn-thus",
    word: "Thus",
    katakanaReading: "ザス",
    macroCategory: "因果関係",
    readingHint: "（Therefore に近い「したがって」「こういうわけで」）",
    memo: "「一文で結論に着地。レポートの段落末に要注意。」",
  },
  {
    id: "conn-hence",
    word: "Hence",
    katakanaReading: "ヘンス",
    macroCategory: "因果関係",
    readingHint: "（Thus よりやや硬い「ゆえに」。前を受けて帰結を言う）",
    memo: "「論文・プレゼン用語。直前の根拠から何が言えるかを追え。」",
  },
  {
    id: "conn-in-addition",
    word: "In addition",
    katakanaReading: "イン・アディション",
    macroCategory: "例示・追加",
    readingHint: "（Additionally と同じで、さらに一つ情報が足される）",
    memo: "「Also の信号。段落の2つ目の根拠が来ることが多い。」",
  },
  {
    id: "conn-in-particular",
    word: "In particular",
    katakanaReading: "イン・パーティキュラー",
    macroCategory: "例示・追加",
    readingHint: "（全体のうち特にここが重要、と焦点を絞る）",
    memo: "「特にここを読め、の合図。設問と照合しやすい。」",
  },
  {
    id: "conn-meanwhile",
    word: "Meanwhile",
    katakanaReading: "ミーン・ワイル",
    macroCategory: "例示・追加",
    readingHint: "（同じ時期に別の場所・別の出来事が進行している）",
    memo: "「読解で二つの話が並行。時間軸をメモしながら読もう。」",
  },
];

export const CONNECTOR_VOCAB_LIST_SIZE = CONNECTOR_VOCAB_LIST.length;
