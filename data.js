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
            { kanji: "確認", hiragana: "かくにん", korean: "확인", examples: [ { main: "書類を確認する。", sub: "しょるいをかくにんする。", kr: "서류를 확인하다." } ] },
            { kanji: "準備", hiragana: "じゅんび", korean: "준비", examples: [ { main: "会議の準備が終わりました。", sub: "かいぎのじゅんびがおわりました。", kr: "회의 준비가 끝났습니다." } ] },
            { kanji: "連絡", hiragana: "れんらく", korean: "연락", examples: [ { main: "後で連絡します。", sub: "あとでれんらくします。", kr: "나중에 연락하겠습니다." } ] },
            { kanji: "経験", hiragana: "けいけん", korean: "경험", examples: [ { main: "いい経験になりました。", sub: "いいけいけんになりました。", kr: "좋은 경험이 되었습니다." } ] }
        ],
        sentences: [
            { kanji: "お世話になっております。", hiragana: "おせわになっております。", korean: "신세 지고 있습니다. (비즈니스 인사)", examples: [ { main: "いつも大変お世話になっております。", sub: "いつもたいへんおせわになっております。", kr: "항상 대단히 신세 지고 있습니다." } ] },
            { kanji: "よろしくお願いします。", hiragana: "よろしくおねがいします。", korean: "잘 부탁드립니다.", examples: [ { main: "今後ともよろしくお願いします。", sub: "こんごともよろしくおねがいします。", kr: "앞으로도 잘 부탁드립니다." } ] },
            { kanji: "申し訳ありません。", hiragana: "もうしわけありません。", korean: "죄송합니다.", examples: [ { main: "ご迷惑をおかけして申し訳ありません。", sub: "ごめいわくをおかけしてもうしわけありません。", kr: "폐를 끼쳐드려 죄송합니다." } ] },
            { kanji: "かしこまりました。", hiragana: "かしこまりました。", korean: "알겠습니다. (정중한 표현)", examples: [ { main: "はい、かしこまりました。すぐに対応いたします。", sub: "はい、かしこまりました。すぐにたいおういたします。", kr: "네, 알겠습니다. 즉시 대응하겠습니다." } ] },
            { kanji: "少々お待ちください。", hiragana: "しょうしょうおまちください。", korean: "잠시 기다려 주세요.", examples: [ { main: "確認いたしますので、少々お待ちください。", sub: "かくにんいたしますので、しょうしょうおまちください。", kr: "확인할 테니 잠시 기다려 주세요." } ] },
            { kanji: "お疲れ様です。", hiragana: "おつかれさまです。", korean: "수고하십니다.", examples: [ { main: "本日はお疲れ様でした。", sub: "ほんじつはおつかれさまでした。", kr: "오늘은 수고하셨습니다." } ] },
            { kanji: "ありがとうございます。", hiragana: "ありがとうございます。", korean: "감사합니다.", examples: [ { main: "ご協力いただき、ありがとうございます。", sub: "ごきょうりょくいただき、ありがとうございます。", kr: "협력해 주셔서 감사합니다." } ] },
            { kanji: "失礼いたします。", hiragana: "しつれいいたします。", korean: "실례하겠습니다.", examples: [ { main: "お先に失礼いたします。", sub: "おさきにしつれいいたします。", kr: "먼저 실례하겠습니다(퇴근하겠습니다)." } ] },
            { kanji: "ご確認をお願いします。", hiragana: "ごかくにんをおねがいします。", korean: "확인을 부탁드립니다.", examples: [ { main: "添付ファイルのご確認をお願いします。", sub: "てんぷファイルのごかくにんをおねがいします。", kr: "첨부 파일의 확인을 부탁드립니다." } ] },
            { kanji: "問題ありません。", hiragana: "もんだいありません。", korean: "문제없습니다.", examples: [ { main: "その日程で問題ありません。", sub: "そのにっていでもんだいありません。", kr: "그 일정으로 문제없습니다." } ] }
        ]
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
            { word: "Consider", korean: "고려하다", examples: [ { main: "We need to consider all the options.", kr: "우리는 모든 선택지를 고려해야 합니다." } ] },
            { word: "Improve", korean: "개선하다", examples: [ { main: "I want to improve my English skills.", kr: "내 영어 실력을 향상시키고 싶다." } ] },
            { word: "Suggest", korean: "제안하다", examples: [ { main: "I suggest we take a break.", kr: "휴식을 취할 것을 제안합니다." } ] },
            { word: "Opportunity", korean: "기회", examples: [ { main: "This is a great opportunity for you.", kr: "이것은 당신에게 아주 좋은 기회입니다." } ] }
        ],
        sentences: [
            { word: "I look forward to hearing from you.", korean: "답장을 고대하겠습니다.", examples: [ { main: "Please let me know your thoughts. I look forward to hearing from you.", kr: "당신의 의견을 알려주세요. 답장을 고대하겠습니다." } ] },
            { word: "Please let me know if you have any questions.", korean: "질문이 있으시면 알려주세요.", examples: [ { main: "Feel free to reach out. Please let me know if you have any questions.", kr: "편하게 연락 주세요. 질문이 있으시면 알려주세요." } ] },
            { word: "Could you please confirm receipt of this email?", korean: "이 이메일을 받으셨는지 확인해 주시겠어요?", examples: [ { main: "It's an urgent matter. Could you please confirm receipt of this email?", kr: "급한 건입니다. 이 이메일을 받으셨는지 확인해 주시겠어요?" } ] },
            { word: "I appreciate your prompt response.", korean: "빠른 답변에 감사드립니다.", examples: [ { main: "Thank you for the quick update. I appreciate your prompt response.", kr: "빠른 업데이트 감사합니다. 빠른 답변에 감사드립니다." } ] },
            { word: "I'm writing to inform you that...", korean: "...을 알려드리기 위해 이메일을 씁니다.", examples: [ { main: "I'm writing to inform you that the meeting has been rescheduled.", kr: "회의 일정이 변경되었음을 알려드리기 위해 이메일을 씁니다." } ] },
            { word: "Thank you for your understanding.", korean: "양해해 주셔서 감사합니다.", examples: [ { main: "We apologize for the delay. Thank you for your understanding.", kr: "지연되어 죄송합니다. 양해해 주셔서 감사합니다." } ] },
            { word: "Let's touch base next week.", korean: "다음 주에 다시 연락합시다.", examples: [ { main: "I'm quite busy right now. Let's touch base next week.", kr: "지금은 꽤 바쁩니다. 다음 주에 다시 연락합시다." } ] },
            { word: "Could you provide an update on...", korean: "...에 대한 업데이트를 제공해 주시겠어요?", examples: [ { main: "Could you provide an update on the current project status?", kr: "현재 프로젝트 진행 상황에 대한 업데이트를 제공해 주시겠어요?" } ] },
            { word: "As we discussed earlier...", korean: "우리가 앞서 논의했듯이...", examples: [ { main: "As we discussed earlier, we will proceed with plan A.", kr: "앞서 논의했듯이, 우리는 A 계획으로 진행할 것입니다." } ] },
            { word: "If you need any further assistance, please let me know.", korean: "추가 도움이 필요하시면 알려주세요.", examples: [ { main: "I have attached the document. If you need any further assistance, please let me know.", kr: "문서를 첨부했습니다. 추가 도움이 필요하시면 알려주세요." } ] }
        ]
    }
};
