const db = {
    japanese: {
        hiragana: [
            { char: "あ", read: "a (아)" }, { char: "い", read: "i (이)" }, { char: "う", read: "u (우)" }, { char: "え", read: "e (에)" }, { char: "お", read: "o (오)" },
            { char: "か", read: "ka (카)" }, { char: "き", read: "ki (키)" }, { char: "く", read: "ku (쿠)" }, { char: "け", read: "ke (케)" }, { char: "こ", read: "ko (코)" },
            { char: "さ", read: "sa (사)" }, { char: "し", read: "shi (시)" }, { char: "す", read: "su (스)" }, { char: "せ", read: "se (세)" }, { char: "そ", read: "so (소)" },
            { char: "た", read: "ta (타)" }, { char: "ち", read: "chi (치)" }, { char: "つ", read: "tsu (츠)" }, { char: "て", read: "te (테)" }, { char: "と", read: "to (토)" },
            { char: "な", read: "na (나)" }, { char: "に", read: "ni (니)" }, { char: "ぬ", read: "nu (누)" }, { char: "ね", read: "ne (네)" }, { char: "の", read: "no (노)" },
            { char: "は", read: "ha (하)" }, { char: "ひ", read: "hi (히)" }, { char: "ふ", read: "fu (후/푸)" }, { char: "へ", read: "he (헤)" }, { char: "ほ", read: "ho (호)" },
            { char: "ま", read: "ma (마)" }, { char: "み", read: "mi (미)" }, { char: "む", read: "mu (무)" }, { char: "め", read: "me (메)" }, { char: "も", read: "mo (모)" },
            { char: "や", read: "ya (야)" }, { char: "ゆ", read: "yu (유)" }, { char: "よ", read: "yo (요)" },
            { char: "ら", read: "ra (라)" }, { char: "り", read: "ri (리)" }, { char: "る", read: "ru (루)" }, { char: "れ", read: "re (레)" }, { char: "ろ", read: "ro (로)" },
            { char: "わ", read: "wa (와)" }, { char: "を", read: "wo (오/워)" }, { char: "ん", read: "n (응)" }
        ],
        katakana: [
            { char: "ア", read: "a (아)" }, { char: "イ", read: "i (이)" }, { char: "ウ", read: "u (우)" }, { char: "エ", read: "e (에)" }, { char: "オ", read: "o (오)" },
            { char: "カ", read: "ka (카)" }, { char: "キ", read: "ki (키)" }, { char: "ク", read: "ku (쿠)" }, { char: "ケ", read: "ke (케)" }, { char: "コ", read: "ko (코)" },
            { char: "サ", read: "sa (사)" }, { char: "シ", read: "shi (시)" }, { char: "ス", read: "su (스)" }, { char: "セ", read: "se (세)" }, { char: "ソ", read: "so (소)" },
            { char: "タ", read: "ta (타)" }, { char: "チ", read: "chi (치)" }, { char: "ツ", read: "tsu (츠)" }, { char: "テ", read: "te (테)" }, { char: "ト", read: "to (토)" },
            { char: "ナ", read: "na (나)" }, { char: "ニ", read: "ni (니)" }, { char: "ヌ", read: "nu (누)" }, { char: "ネ", read: "ne (네)" }, { char: "ノ", read: "no (노)" },
            { char: "ハ", read: "ha (하)" }, { char: "ヒ", read: "hi (히)" }, { char: "フ", read: "fu (후/푸)" }, { char: "ヘ", read: "he (헤)" }, { char: "ホ", read: "ho (호)" },
            { char: "マ", read: "ma (마)" }, { char: "ミ", read: "mi (미)" }, { char: "ム", read: "mu (무)" }, { char: "メ", read: "me (메)" }, { char: "モ", read: "mo (모)" },
            { char: "ヤ", read: "ya (야)" }, { char: "ユ", read: "yu (유)" }, { char: "ヨ", read: "yo (요)" },
            { char: "ラ", read: "ra (라)" }, { char: "リ", read: "ri (리)" }, { char: "ル", read: "ru (루)" }, { char: "レ", read: "re (레)" }, { char: "ロ", read: "ro (로)" },
            { char: "ワ", read: "wa (와)" }, { char: "ヲ", read: "wo (오/워)" }, { char: "ン", read: "n (응)" }
        ],
        words: [
            { kanji: "約束", hiragana: "やくそく", korean: "약속", examples: [ { main: "友達と約束をする。", sub: "ともだちとやくそくをする。", kr: "친구와 약속을 하다." }, { main: "約束を破る。", sub: "やくそくをやぶる。", kr: "약속을 어기다." } ] },
            { kanji: "確認", hiragana: "かくにん", korean: "확인", examples: [ { main: "書類を確認する。", sub: "しょるいをかくにんする。", kr: "서류를 확인하다." }, { main: "安全確認", sub: "あんぜんかくにん", kr: "안전 확인" } ] },
            { kanji: "準備", hiragana: "じゅんび", korean: "준비", examples: [ { main: "会議の準備が終わりました。", sub: "かいぎのじゅんびがおわりました。", kr: "회의 준비가 끝났습니다." }, { main: "旅行の準備", sub: "りょこうのじゅんび", kr: "여행 준비" } ] },
            { kanji: "連絡", hiragana: "れんらく", korean: "연락", examples: [ { main: "後で連絡します。", sub: "あとでれんらくします。", kr: "나중에 연락하겠습니다." }, { main: "連絡先", sub: "れんらくさき", kr: "연락처" } ] },
            { kanji: "経験", hiragana: "けいけん", korean: "경험", examples: [ { main: "いい経験になりました。", sub: "いいけいけんになりました。", kr: "좋은 경험이 되었습니다." } ] },
            { kanji: "理解", hiragana: "りかい", korean: "이해", examples: [ { main: "彼の言っていることを理解する。", sub: "かれのいっていることをりかいする。", kr: "그가 말하는 것을 이해하다." } ] },
            { kanji: "説明", hiragana: "せつめい", korean: "설명", examples: [ { main: "詳しく説明してください。", sub: "くわしくせつめいしてください。", kr: "자세히 설명해 주세요." } ] },
            { kanji: "問題", hiragana: "もんだい", korean: "문제", examples: [ { main: "大きな問題が起きた。", sub: "おおきなもんだいがおきた。", kr: "큰 문제가 발생했다." } ] },
            { kanji: "時間", hiragana: "じかん", korean: "시간", examples: [ { main: "時間がありません。", sub: "じかんがありません。", kr: "시간이 없습니다." } ] },
            { kanji: "関係", hiragana: "かんけい", korean: "관계", examples: [ { main: "二人の関係は良好だ。", sub: "ふたりのかんけいはりょうこうだ。", kr: "두 사람의 관계는 양호하다." } ] },
            { kanji: "必要", hiragana: "ひつよう", korean: "필요", examples: [ { main: "パスポートが必要です。", sub: "パスポートがひつようです。", kr: "여권이 필요합니다." } ] },
            { kanji: "最近", hiragana: "さいきん", korean: "최근", examples: [ { main: "最近、忙しいです。", sub: "さいきん、いそがしいです。", kr: "최근 바쁩니다." } ] },
            { kanji: "結果", hiragana: "けっか", korean: "결과", examples: [ { main: "テストの結果が出た。", sub: "テストのけっかがでた。", kr: "테스트 결과가 나왔다." } ] },
            { kanji: "理由", hiragana: "りゆう", korean: "이유", examples: [ { main: "遅れた理由を教える。", sub: "おくれたりゆうをおしえる。", kr: "지각한 이유를 알려주다." } ] },
            { kanji: "目的", hiragana: "もくてき", korean: "목적", examples: [ { main: "旅行の目的は何ですか。", sub: "りょこうのもくてきはなんですか。", kr: "여행의 목적은 무엇입니까?" } ] }
        ],
        sentences: []
    },
    english: {
        alphabet: [
            { char: "A a", read: "[eɪ] 에이" }, { char: "B b", read: "[biː] 비" }, { char: "C c", read: "[siː] 씨" }, { char: "D d", read: "[diː] 디" },
            { char: "E e", read: "[iː] 이" }, { char: "F f", read: "[ef] 에프" }, { char: "G g", read: "[dʒiː] 지" }, { char: "H h", read: "[eɪtʃ] 에이치" },
            { char: "I i", read: "[aɪ] 아이" }, { char: "J j", read: "[dʒeɪ] 제이" }, { char: "K k", read: "[keɪ] 케이" }, { char: "L l", read: "[el] 엘" },
            { char: "M m", read: "[em] 엠" }, { char: "N n", read: "[en] 엔" }, { char: "O o", read: "[oʊ] 오우" }, { char: "P p", read: "[piː] 피" },
            { char: "Q q", read: "[kjuː] 큐" }, { char: "R r", read: "[ɑːr] 아르" }, { char: "S s", read: "[es] 에스" }, { char: "T t", read: "[tiː] 티" },
            { char: "U u", read: "[juː] 유" }, { char: "V v", read: "[viː] 브이" }, { char: "W w", read: "[ˈdʌbljuː] 더블유" }, { char: "X x", read: "[eks] 엑스" },
            { char: "Y y", read: "[waɪ] 와이" }, { char: "Z z", read: "[ziː/zed] 지/제트" }
        ],
        words: [
            { word: "Provide", korean: "제공하다", examples: [ { main: "The hotel provides free breakfast.", kr: "그 호텔은 무료 아침 식사를 제공합니다." } ] },
            { word: "Consider", korean: "고려하다, 생각하다", examples: [ { main: "We need to consider all the options.", kr: "우리는 모든 선택지를 고려해야 합니다." } ] },
            { word: "Improve", korean: "개선하다, 향상시키다", examples: [ { main: "I want to improve my English skills.", kr: "내 영어 실력을 향상시키고 싶다." } ] },
            { word: "Suggest", korean: "제안하다", examples: [ { main: "I suggest we take a break.", kr: "휴식을 취할 것을 제안합니다." } ] },
            { word: "Opportunity", korean: "기회", examples: [ { main: "This is a great opportunity for you.", kr: "이것은 당신에게 아주 좋은 기회입니다." } ] },
            { word: "Determine", korean: "결정하다, 알아내다", examples: [ { main: "We need to determine the cause of the problem.", kr: "우리는 문제의 원인을 알아내야 합니다." } ] },
            { word: "Recognize", korean: "인정하다, 알아보다", examples: [ { main: "I didn't recognize you at first.", kr: "처음에는 당신을 알아보지 못했습니다." } ] },
            { word: "Available", korean: "이용 가능한, 시간이 있는", examples: [ { main: "Are you available tomorrow?", kr: "내일 시간 있으신가요?" } ] },
            { word: "Require", korean: "요구하다, 필요로 하다", examples: [ { main: "This job requires a lot of patience.", kr: "이 일은 많은 인내심을 요구합니다." } ] },
            { word: "Maintain", korean: "유지하다", examples: [ { main: "It is important to maintain a healthy lifestyle.", kr: "건강한 생활 방식을 유지하는 것이 중요합니다." } ] },
            { word: "Focus", korean: "집중하다", examples: [ { main: "Please focus on your work.", kr: "업무에 집중해 주세요." } ] },
            { word: "Prevent", korean: "예방하다, 막다", examples: [ { main: "We must prevent this from happening again.", kr: "우리는 이런 일이 다시 일어나는 것을 막아야 합니다." } ] },
            { word: "Achieve", korean: "달성하다, 성취하다", examples: [ { main: "She finally achieved her goal.", kr: "그녀는 마침내 목표를 달성했습니다." } ] },
            { word: "Benefit", korean: "이익, 혜택", examples: [ { main: "What are the benefits of this program?", kr: "이 프로그램의 혜택은 무엇입니까?" } ] },
            { word: "Influence", korean: "영향, 영향을 미치다", examples: [ { main: "His speech had a great influence on me.", kr: "그의 연설은 나에게 큰 영향을 미쳤다." } ] }
        ],
        sentences: []
    }
};
