// EPRS 自然發音 13 大核心規則標準知識庫
window.EPRS_RULES = [
  {
    id: "R001",
    name: "閉音節短母音",
    englishName: "Closed Syllable (Short Vowels)",
    category: "母音法則",
    formula: "[(C)VC] 母音後接子音封閉 ➔ 發短母音",
    description: "閉音節（Closed Syllable）是英語中最基礎的音節結構。母音後方受子音封閉阻擋氣流，母音長度受限，發出緊湊短促的短母音：a→/æ/ (cat), e→/ɛ/ (bed), i→/ɪ/ (sit), o→/ɑː/ (stop), u→/ʌ/ (bus)。",
    summary: "單一母音字母後方被子音封閉時發短母音。注意：非重讀/弱化前綴禁止判定為適用（轉入 R012）；後接 r 轉入 R005。",
    examples: [
      { word: "cat", ipa: "/kæt/" },
      { word: "bed", ipa: "/bɛd/" },
      { word: "sit", ipa: "/sɪt/" },
      { word: "stop", ipa: "/stɑːp/" },
      { word: "bus", ipa: "/bʌs/" }
    ]
  },
  {
    id: "R002",
    name: "開音節長母音",
    englishName: "Open Syllable (Long Vowels)",
    category: "母音法則",
    formula: "[(C)V] 母音結尾未被封閉 ➔ 發字母本名長母音",
    description: "開音節（Open Syllable）的音節尾端沒有子音阻擋，氣流通暢，母音發出字母本音長母音：a→/eɪ/ (paper), e→/iː/ (me), i→/aɪ/ (tiger), o→/oʊ/ (go), u→/juː/ (music)。",
    summary: "音節以單一母音字母結尾發字母本音長音。非重音音節之開音節常發生弱化（如 banana 首音節）。",
    examples: [
      { word: "me", ipa: "/miː/" },
      { word: "go", ipa: "/ɡoʊ/" },
      { word: "paper", ipa: "/ˈpeɪ.pɚ/" },
      { word: "tiger", ipa: "/ˈtaɪ.ɡɚ/" },
      { word: "music", ipa: "/ˈmjuː.zɪk/" }
    ]
  },
  {
    id: "R003",
    name: "魔術 E 規則",
    englishName: "Magic E / V-C-e",
    category: "母音法則",
    formula: "[V + C + e] 字尾 e 靜音 ➔ 使前方母音發長母音",
    description: "單字呈現「母音 + 單子音 + e」結構，字尾 e 保持靜音，賦予前方母音發字母本名長音：a_e→/eɪ/ (cake), i_e→/aɪ/ (bike), o_e→/oʊ/ (home), u_e→/juː/ (cute)。",
    summary: "字尾無聲 e 使前方母音由短變長。have, live, give, love 為歷史音變例外，歸入 R010。",
    examples: [
      { word: "cake", ipa: "/keɪk/" },
      { word: "bike", ipa: "/baɪk/" },
      { word: "home", ipa: "/hoʊm/" },
      { word: "cute", ipa: "/kjuːt/" },
      { word: "brave", ipa: "/breɪv/" }
    ]
  },
  {
    id: "R004",
    name: "母音字母組合",
    englishName: "Vowel Teams",
    category: "母音法則",
    formula: "[VV] 相連母音組合 ➔ 發固定長音或滑音雙母音",
    description: "兩個相連的母音字母組合成固定發音：ai/ay→/eɪ/ (rain, day), ee/ea→/iː/ (meet, read), oa/ow→/oʊ/ (boat, snow), oi/oy→/ɔɪ/ (coin, boy), ou/ow→/aʊ/ (house, cow), oo→/uː/ (moon) 或 /ʊ/ (book)。",
    summary: "相連母音字母團隊發固定音素。ea 有時發短音 /ɛ/ (bread) 或 /eɪ/ (break)，需標記歷史音變。",
    examples: [
      { word: "rain", ipa: "/reɪn/" },
      { word: "read", ipa: "/riːd/" },
      { word: "boat", ipa: "/boʊt/" },
      { word: "coin", ipa: "/kɔɪn/" },
      { word: "house", ipa: "/haʊs/" }
    ]
  },
  {
    id: "R005",
    name: "R 控制母音",
    englishName: "R-Controlled Vowels",
    category: "母音法則",
    formula: "[V + r] 母音受 r 捲舌同化 ➔ 發捲舌色彩音",
    description: "母音接字母 r 時受其舌位後縮影響同化為捲舌母音：ar→/ɑːr/ (car), or→/ɔːr/ (fork), er/ir/ur→/ɝː/ (her, bird, nurse), air/are→/ɛr/ (chair, care), ear/eer→/ɪr/ (hear, deer)。",
    summary: "母音與 r 緊密結合發捲舌音。war, warm 中 a 受 w 圓唇化發 /ɔːr/。",
    examples: [
      { word: "car", ipa: "/kɑːr/" },
      { word: "bird", ipa: "/bɝːd/" },
      { word: "fork", ipa: "/fɔːr/" },
      { word: "nurse", ipa: "/nɝːs/" },
      { word: "chair", ipa: "/tʃɛr/" }
    ]
  },
  {
    id: "R006",
    name: "子音連綴與合音",
    englishName: "Consonant Blends & Digraphs",
    category: "子音法則",
    formula: "[CC] 子音群結合成新單音或順滑連綴",
    description: "複合子音（Digraphs）結合成全新單音：sh→/ʃ/ (ship), ch→/tʃ/ (chat), th→/θ/ (think) 或 /ð/ (this), ph→/f/ (photo), wh→/w/ (what), ng→/ŋ/ (sing), ck→/k/ (black)。子音連綴（Blends）如 bl, cl, sp, st 等平滑過渡。",
    summary: "不可任意拆分的子音組合發特定音位。ch 在希臘借詞發 /k/ (echo, chemistry)，在法語借詞發 /ʃ/ (chef)。",
    examples: [
      { word: "ship", ipa: "/ʃɪp/" },
      { word: "chat", ipa: "/tʃæt/" },
      { word: "think", ipa: "/θɪŋk/" },
      { word: "photo", ipa: "/ˈfoʊ.toʊ/" },
      { word: "black", ipa: "/blæk/" }
    ]
  },
  {
    id: "R007",
    name: "軟硬子音規則",
    englishName: "Soft and Hard C/G",
    category: "子音法則",
    formula: "[C/G + e/i/y] 發軟音；其餘接 a, o, u 或子音發硬音",
    description: "字母 c 和 g 遇到 e, i, y 時發軟音：軟 C→/s/ (city, cell), 軟 G→/dʒ/ (gem, giant)；遇到 a, o, u 或其他子音時發硬音：硬 C→/k/ (cat, cold), 硬 G→/ɡ/ (game, gold)。",
    summary: "c/g 在 e, i, y 前軟化。get, give, gift 為古諾斯語借詞硬音例外，歸入 R010。",
    examples: [
      { word: "city", ipa: "/ˈsɪt.i/" },
      { word: "cell", ipa: "/sɛl/" },
      { word: "giant", ipa: "/ˈdʒaɪ.ənt/" },
      { word: "cat", ipa: "/kæt/" },
      { word: "game", ipa: "/ɡeɪm/" }
    ]
  },
  {
    id: "R008",
    name: "非重音母音弱化",
    englishName: "Unstressed Vowel Reduction",
    category: "音節與弱化",
    formula: "[Unstressed Syllable] 弱音節弱化為央母音 /ə/ 或 /ɪ/",
    description: "英語重音等時節奏特性使非重讀音節的母音字母弱化為中央央母音 /ə/ (schwa) 或前高弱音 /ɪ/：about /əˈbaʊt/, pencil /ˈpɛn.səl/, family /ˈfæm.ə.li/。",
    summary: "凡非重音音節且音標發 /ə/ 或 /ɪ/ 者，優先適用本規則。",
    examples: [
      { word: "about", ipa: "/əˈbaʊt/" },
      { word: "pencil", ipa: "/ˈpɛn.səl/" },
      { word: "family", ipa: "/ˈfæm.ə.li/" },
      { word: "banana", ipa: "/bəˈnæn.ə/" },
      { word: "lemon", ipa: "/ˈlɛm.ən/" }
    ]
  },
  {
    id: "R009",
    name: "靜符子音規則",
    englishName: "Silent Consonants",
    category: "子音法則",
    formula: "歷史輔音群簡化後特定字母不發音",
    description: "歷史語音演化簡化時保留拼寫但不發音之輔音：kn-→/n/ (know, knee), wr-→/r/ (write, wrong), -mb→/m/ (climb, lamb), -bt→/t/ (doubt, debt), -gn→/n/ (sign), -lk→/k/ (walk, talk), ps-→/s/ (psychology)。",
    summary: "需在推導鏈中明確註記靜音字母與歷史簡化背景。",
    examples: [
      { word: "know", ipa: "/noʊ/" },
      { word: "write", ipa: "/raɪt/" },
      { word: "climb", ipa: "/klaɪm/" },
      { word: "doubt", ipa: "/daʊt/" },
      { word: "sign", ipa: "/saɪn/" }
    ]
  },
  {
    id: "R010",
    name: "例外音標字",
    englishName: "Phonetic Exceptions",
    category: "例外與特殊",
    formula: "借詞、歷史音變、拼寫不合常規字",
    description: "不符合現代標準拼讀規則的歷史音變字、外來借詞或特殊拼讀字：debt /dɛt/ (b靜音), island /ˈaɪ.lənd/ (s靜音), laugh /læf/ (gh發/f/), colonel /ˈkɝː.nəl/ 等。",
    summary: "必須標註具體例外分類（如「外來借詞」、「歷史母音推移殘留」）。",
    examples: [
      { word: "debt", ipa: "/dɛt/" },
      { word: "island", ipa: "/ˈaɪ.lənd/" },
      { word: "laugh", ipa: "/læf/" },
      { word: "colonel", ipa: "/ˈkɝː.nəl/" },
      { word: "busy", ipa: "/ˈbɪz.i/" }
    ]
  },
  {
    id: "R011",
    name: "字首字尾與詞構規則",
    englishName: "Morphology & Affixes",
    category: "詞綴與複合詞",
    formula: "詞根 + 前後綴或複合字組合規律",
    description: "字根結合前綴與後綴形成的固定發音型態：-tion/-sion→/ʃən/ (nation), -ture→/tʃɚ/ (nature), -ous→/əs/ (famous), -ly→/li/ (quickly), un-, re-, dis- 等。重音常落在 -tion, -ic, -ity 前一個音節。",
    summary: "詞綴具備固定發音模式並對單字主重音位置產生系統性牽引。",
    examples: [
      { word: "nation", ipa: "/ˈneɪ.ʃən/" },
      { word: "nature", ipa: "/ˈneɪ.tʃɚ/" },
      { word: "famous", ipa: "/ˈfeɪ.məs/" },
      { word: "quickly", ipa: "/ˈkwɪk.li/" },
      { word: "unhappy", ipa: "/ʌnˈhæp.i/" }
    ]
  },
  {
    id: "R012",
    name: "非重讀前綴弱化",
    englishName: "Unstressed Prefix Reduction",
    category: "音節與弱化",
    formula: "多音節非重讀前綴母音 ➔ 弱化發 /ə/ 或 /ɪ/",
    description: "ac-, ad-, af-, al-, ap-, as-, at-, con-, com-, de-, re-, ex- 處於非重讀音節時發 /ə/ 或 /ɪ/：account /əˈkaʊnt/, admit /ədˈmɪt/, apply /əˈplaɪ/, connect /kəˈnɛkt/。嚴禁誤判為 R001 閉音節短母音。雙子音 (cc, pp, tt) 在此僅發單子音。",
    summary: "非重讀前綴優先弱化判定，主導權高於 R001 閉音節。",
    examples: [
      { word: "account", ipa: "/əˈkaʊnt/" },
      { word: "admit", ipa: "/ədˈmɪt/" },
      { word: "apply", ipa: "/əˈplaɪ/" },
      { word: "connect", ipa: "/kəˈnɛkt/" },
      { word: "decide", ipa: "/dɪˈsaɪd/" }
    ]
  },
  {
    id: "R013",
    name: "子音+le 音節規則",
    englishName: "Consonant + le Syllable",
    category: "音節與弱化",
    formula: "[C + le] 字尾 ➔ 成音節輔音發 /C + əl/",
    description: "單字結尾之「子音 + le」結構自成一個非重讀輕音節，自帶成音節 /l/：-ble→/bəl/ (table), -cle→/kəl/ (circle), -dle→/dəl/ (candle), -fle→/fəl/ (waffle), -gle→/ɡəl/ (eagle), -tle→/təl/ (bottle)。",
    summary: "字尾 C+le 為獨立輕音節，由成音節 /l/ 支撐音節核。",
    examples: [
      { word: "table", ipa: "/ˈteɪ.bəl/" },
      { word: "circle", ipa: "/ˈsɝː.kəl/" },
      { word: "candle", ipa: "/ˈkæn.dəl/" },
      { word: "bottle", ipa: "/ˈbɑː.təl/" },
      { word: "eagle", ipa: "/ˈiː.ɡəl/" }
    ]
  }
];
