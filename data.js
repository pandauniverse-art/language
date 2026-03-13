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
            {
                kanji: "約束", hiragana: "やくそく", korean: "약속",
                examples: [
                    { main: "友達と約束をする。", sub: "ともだちとやくそくをする。", kr: "친구와 약속을 하다." },
                    { main: "約束の時間を守る。", sub: "やくそくのじかんをまもる。", kr: "약속 시간을 지키다." },
                    { main: "彼との約束を忘れた。", sub: "かれとのやくそくをわすれた。", kr: "그와의 약속을 잊었다." }
                ]
            },
            {
                kanji: "確認", hiragana: "かくにん", korean: "확인",
                examples: [
                    { main: "書類の内容を確認する。", sub: "しょるいのないようをかくにんする。", kr: "서류의 내용을 확인하다." },
                    { main: "安全を確認してから出発する。", sub: "あんぜんをかくにんしてからしゅっぱつする。", kr: "안전을 확인하고 나서 출발하다." }
                ]
            },
            {
                kanji: "準備", hiragana: "じゅんび", korean: "준비",
                examples: [
                    { main: "会議の準備が終わりました。", sub: "かいぎのじゅんびがおわりました。", kr: "회의 준비가 끝났습니다." },
                    { main: "旅行の準備をする。", sub: "りょこうのじゅんびをする。", kr: "여행 준비를 하다." },
                    { main: "心の準備ができていない。", sub: "こころのじゅんびができていない。", kr: "마음의 준비가 안 되어 있다." }
                ]
            },
            {
                kanji: "連絡", hiragana: "れんらく", korean: "연락",
                examples: [
                    { main: "後でまた連絡します。", sub: "あとでまたれんらくします。", kr: "나중에 다시 연락하겠습니다." },
                    { main: "連絡先を教えてください。", sub: "れんらくさきをおしえてください。", kr: "연락처를 가르쳐 주세요." }
                ]
            },
            {
                kanji: "経験", hiragana: "けいけん", korean: "경험",
                examples: [
                    { main: "いい経験になりました。", sub: "いいけいけんになりました。", kr: "좋은 경험이 되었습니다." },
                    { main: "彼は経験が豊富だ。", sub: "かれはけいけんがほうふだ。", kr: "그는 경험이 풍부하다." },
                    { main: "海外で働く経験を積む。", sub: "かいがいではたらくけいけんをつむ。", kr: "해외에서 일하는 경험을 쌓다." }
                ]
            }
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
            {
                word: "Provide", korean: "제공하다",
                examples: [
                    { main: "The hotel provides free breakfast.", kr: "그 호텔은 무료 아침 식사를 제공합니다." },
                    { main: "Please provide your contact information.", kr: "연락처를 제공해 주세요." },
                    { main: "They provide support for local businesses.", kr: "그들은 지역 기업에 지원을 제공합니다." }
                ]
            },
            {
                word: "Consider", korean: "고려하다, 생각하다",
                examples: [
                    { main: "We need to consider all the options.", kr: "우리는 모든 선택지를 고려해야 합니다." },
                    { main: "I consider him a good friend.", kr: "나는 그를 좋은 친구로 생각한다." }
                ]
            },
            {
                word: "Improve", korean: "개선하다, 향상시키다",
                examples: [
                    { main: "I want to improve my English skills.", kr: "내 영어 실력을 향상시키고 싶다." },
                    { main: "The weather is expected to improve tomorrow.", kr: "내일은 날씨가 갤 것으로 예상된다." },
                    { main: "There is always room to improve.", kr: "항상 개선의 여지는 있다." }
                ]
            },
            {
                word: "Suggest", korean: "제안하다, 암시하다",
                examples: [
                    { main: "I suggest we take a break.", kr: "휴식을 취할 것을 제안합니다." },
                    { main: "The evidence suggests otherwise.", kr: "증거는 다르게 암시한다." }
                ]
            },
            {
                word: "Opportunity", korean: "기회",
                examples: [
                    { main: "This is a great opportunity for you.", kr: "이것은 당신에게 아주 좋은 기회입니다." },
                    { main: "I had the opportunity to travel to Japan.", kr: "나는 일본을 여행할 기회가 있었다." },
                    { main: "Don't miss this opportunity.", kr: "이 기회를 놓치지 마세요." }
                ]
            }
        ],
        sentences: []
    }
};
