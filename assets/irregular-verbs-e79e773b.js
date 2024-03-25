import { _ as _sfc_main$2 } from "./speak.vue_vue_type_script_setup_true_lang-36db1f78.js";
import { g as defineComponent, r as resolveComponent, o as openBlock, e as createBlock, w as withCtx, b as createBaseVNode, t as toDisplayString, c as createElementBlock, f as createCommentVNode, a as createVNode, h as renderList, F as Fragment, d as createTextVNode, i as ref, u as unref } from "./index-2fa88c03.js";
const _hoisted_1$1 = {
  key: 0,
  class: "mx-4"
};
const _hoisted_2$1 = {
  key: 1,
  class: "text-grey"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "irregular-table",
  props: {
    data: {},
    title: {},
    subtitle: {},
    value: {}
  },
  setup(__props) {
    const headers = ["Infinitive", "Past simple", "Past participle", "Translation"];
    return (_ctx, _cache) => {
      const _component_v_table = resolveComponent("v-table");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      return openBlock(), createBlock(_component_v_expansion_panel, { value: _ctx.value }, {
        title: withCtx(() => [
          createBaseVNode("span", null, toDisplayString(_ctx.$props.title), 1),
          _ctx.$props.subtitle ? (openBlock(), createElementBlock("span", _hoisted_1$1, "-")) : createCommentVNode("", true),
          _ctx.$props.subtitle ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(_ctx.$props.subtitle), 1)) : createCommentVNode("", true)
        ]),
        text: withCtx(() => [
          createVNode(_component_v_table, null, {
            default: withCtx(() => [
              createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(headers, (header) => {
                    return createBaseVNode("th", {
                      key: header,
                      class: "text-left font-weight-bold"
                    }, toDisplayString(header), 1);
                  }), 64))
                ])
              ]),
              createBaseVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.$props.data, (item) => {
                  return openBlock(), createElementBlock("tr", {
                    key: item.infinitive
                  }, [
                    createBaseVNode("td", null, [
                      createVNode(_sfc_main$2, {
                        text: item.infinitive
                      }, null, 8, ["text"]),
                      createTextVNode(" " + toDisplayString(item.infinitive) + " [" + toDisplayString(item["infinitive-transcription"]) + "] ", 1)
                    ]),
                    createBaseVNode("td", null, [
                      createVNode(_sfc_main$2, {
                        text: item["past-simple"]
                      }, null, 8, ["text"]),
                      createTextVNode(" " + toDisplayString(item["past-simple"]) + " [" + toDisplayString(item["past-simple-transcription"]) + "] ", 1)
                    ]),
                    createBaseVNode("td", null, [
                      createVNode(_sfc_main$2, {
                        text: item["past-participle"]
                      }, null, 8, ["text"]),
                      createTextVNode(" " + toDisplayString(item["past-participle"]) + " [" + toDisplayString(item["past-participle-transcription"]) + "] ", 1)
                    ]),
                    createBaseVNode("td", null, [
                      createVNode(_sfc_main$2, {
                        text: item.translation
                      }, null, 8, ["text"]),
                      createTextVNode(toDisplayString(item.translation), 1)
                    ])
                  ]);
                }), 128))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
});
const allThreeFormsCoincide = [
  {
    infinitive: "bet",
    "infinitive-transcription": "bet",
    "past-simple": "bet",
    "past-simple-transcription": "bet",
    "past-participle": "bet",
    "past-participle-transcription": "bet",
    translation: "ставка"
  },
  {
    infinitive: "burst",
    "infinitive-transcription": "bз:st",
    "past-simple": "burst",
    "past-simple-transcription": "bз:st",
    "past-participle": "burst",
    "past-participle-transcription": "bз:st",
    translation: "вибухнути, підривати(ся)"
  },
  {
    infinitive: "cast",
    "infinitive-transcription": "kɑːst",
    "past-simple": "cast",
    "past-simple-transcription": "kɑːst",
    "past-participle": "cast",
    "past-participle-transcription": "kɑːst",
    translation: "кинути, лити (метал)"
  },
  {
    infinitive: "cost",
    "infinitive-transcription": "kɒst",
    "past-simple": "cost",
    "past-simple-transcription": "kɒst",
    "past-participle": "cost",
    "past-participle-transcription": "kɒst",
    translation: "коштувати"
  },
  {
    infinitive: "cut",
    "infinitive-transcription": "kʌt",
    "past-simple": "cut",
    "past-simple-transcription": "kʌt",
    "past-participle": "cut",
    "past-participle-transcription": "kʌt",
    translation: "різати"
  },
  {
    infinitive: "fit",
    "infinitive-transcription": "fit",
    "past-simple": "fit",
    "past-simple-transcription": "fit",
    "past-participle": "fit",
    "past-participle-transcription": "fit",
    translation: "підходити за розміром"
  },
  {
    infinitive: "hit",
    "infinitive-transcription": "hɪt",
    "past-simple": "hit",
    "past-simple-transcription": "hɪt",
    "past-participle": "hit",
    "past-participle-transcription": "hɪt",
    translation: "потрапляти в ціль"
  },
  {
    infinitive: "hurt",
    "infinitive-transcription": "hɜ:rt",
    "past-simple": "hurt",
    "past-simple-transcription": "hɜ:rt",
    "past-participle": "hurt",
    "past-participle-transcription": "hɜ:rt",
    translation: "поранити, пошкодити"
  },
  {
    infinitive: "let",
    "infinitive-transcription": "let",
    "past-simple": "let",
    "past-simple-transcription": "let",
    "past-participle": "let",
    "past-participle-transcription": "let",
    translation: "дозволяти"
  },
  {
    infinitive: "put",
    "infinitive-transcription": "pʊt",
    "past-simple": "put",
    "past-simple-transcription": "pʊt",
    "past-participle": "put",
    "past-participle-transcription": "pʊt",
    translation: "класти, ставити"
  },
  {
    infinitive: "quit",
    "infinitive-transcription": "kwɪt",
    "past-simple": "quit",
    "past-simple-transcription": "kwɪt",
    "past-participle": "quit",
    "past-participle-transcription": "kwɪt",
    translation: "залишати, покидати, виходити"
  }
];
const rotatingVowelsIE = [
  {
    infinitive: "keep",
    "infinitive-transcription": "ki:p",
    "past-simple": "kept",
    "past-simple-transcription": "kept",
    "past-participle": "kept",
    "past-participle-transcription": "kept",
    translation: "тримати, зберігати"
  },
  {
    infinitive: "sleep",
    "infinitive-transcription": "sli:p",
    "past-simple": "slept",
    "past-simple-transcription": "slept",
    "past-participle": "slept",
    "past-participle-transcription": "slept",
    translation: "спати"
  },
  {
    infinitive: "feel",
    "infinitive-transcription": "fi:l",
    "past-simple": "felt",
    "past-simple-transcription": "felt",
    "past-participle": "felt",
    "past-participle-transcription": "felt",
    translation: "відчувати"
  },
  {
    infinitive: "bleed",
    "infinitive-transcription": "bli:d",
    "past-simple": "bled",
    "past-simple-transcription": "bled",
    "past-participle": "bled",
    "past-participle-transcription": "bled",
    translation: "кровоточити"
  },
  {
    infinitive: "feed",
    "infinitive-transcription": "fi:d",
    "past-simple": "fed",
    "past-simple-transcription": "fed",
    "past-participle": "fed",
    "past-participle-transcription": "fed",
    translation: "годувати"
  },
  {
    infinitive: "meet",
    "infinitive-transcription": "mi:t",
    "past-simple": "met",
    "past-simple-transcription": "met",
    "past-participle": "met",
    "past-participle-transcription": "met",
    translation: "зустрічати"
  },
  {
    infinitive: "lead",
    "infinitive-transcription": "li:d",
    "past-simple": "led",
    "past-simple-transcription": "led",
    "past-participle": "led",
    "past-participle-transcription": "led",
    translation: "вести, очолювати"
  },
  {
    infinitive: "breed",
    "infinitive-transcription": "bri:d",
    "past-simple": "bred",
    "past-simple-transcription": "bred",
    "past-participle": "bred",
    "past-participle-transcription": "bred",
    translation: "виховувати"
  },
  {
    infinitive: "flee",
    "infinitive-transcription": "fliː",
    "past-simple": "fled",
    "past-simple-transcription": "fled",
    "past-participle": "fled",
    "past-participle-transcription": "fled",
    translation: "бігти, тікати, рятуватися втечею"
  },
  {
    infinitive: "speed",
    "infinitive-transcription": "spiːd",
    "past-simple": "sped",
    "past-simple-transcription": "sped",
    "past-participle": "sped",
    "past-participle-transcription": "sped",
    translation: "поспішати, прискорювати, квапити"
  },
  {
    infinitive: "weep",
    "infinitive-transcription": "wi:p",
    "past-simple": "wept",
    "past-simple-transcription": "wept",
    "past-participle": "wept",
    "past-participle-transcription": "wept",
    translation: "плакати"
  },
  {
    infinitive: "lean",
    "infinitive-transcription": "li:n",
    "past-simple": "leant",
    "past-simple-transcription": "lent",
    "past-participle": "leant",
    "past-participle-transcription": "lent",
    translation: "нахилятися"
  }
];
const rotatingVowelsEa = [
  {
    infinitive: "deal",
    "infinitive-transcription": "diːl",
    "past-simple": "dealt",
    "past-simple-transcription": "delt",
    "past-participle": "dealt",
    "past-participle-transcription": "delt",
    translation: "мати справу, торгувати, розглядати питання"
  },
  {
    infinitive: "dream",
    "infinitive-transcription": "dri:m",
    "past-simple": "dreamt",
    "past-simple-transcription": "dremt",
    "past-participle": "dreamt",
    "past-participle-transcription": "dremt",
    translation: "мріяти, снитися"
  },
  {
    infinitive: "mean",
    "infinitive-transcription": "mi:n",
    "past-simple": "meant",
    "past-simple-transcription": "ment",
    "past-participle": "meant",
    "past-participle-transcription": "ment",
    translation: "значити"
  },
  {
    infinitive: "read",
    "infinitive-transcription": "ri:d",
    "past-simple": "read",
    "past-simple-transcription": "red",
    "past-participle": "read",
    "past-participle-transcription": "red",
    translation: "читати"
  },
  {
    infinitive: "hear",
    "infinitive-transcription": "hɪər",
    "past-simple": "heard",
    "past-simple-transcription": "hɜ:rd",
    "past-participle": "heard",
    "past-participle-transcription": "hɜ:rd",
    translation: "чути"
  }
];
const rotatingVowelsAiAu = [
  {
    infinitive: "bind",
    "infinitive-transcription": "baɪnd",
    "past-simple": "bound",
    "past-simple-transcription": "baʊnd",
    "past-participle": "bound",
    "past-participle-transcription": "baʊnd",
    translation: "пов'язувати"
  },
  {
    infinitive: "find",
    "infinitive-transcription": "faɪnd",
    "past-simple": "found",
    "past-simple-transcription": "faʊnd",
    "past-participle": "found",
    "past-participle-transcription": "faʊnd",
    translation: "знаходити"
  },
  {
    infinitive: "grind",
    "infinitive-transcription": "ɡraɪnd",
    "past-simple": "ground",
    "past-simple-transcription": "ɡraʊnd",
    "past-participle": "ground",
    "past-participle-transcription": "ɡraʊnd",
    translation: "молоти, розтерти, шліфувати, точити"
  },
  {
    infinitive: "wind",
    "infinitive-transcription": "waind",
    "past-simple": "wound",
    "past-simple-transcription": "waund",
    "past-participle": "wound",
    "past-participle-transcription": "waund",
    translation: "обмотувати, заводити (годинник)"
  }
];
const rotatingVowelsIA = [
  {
    infinitive: "dig",
    "infinitive-transcription": "dɪg",
    "past-simple": "dug",
    "past-simple-transcription": "dʌg",
    "past-participle": "dug",
    "past-participle-transcription": "dʌg",
    translation: "рити, копати"
  },
  {
    infinitive: "stick",
    "infinitive-transcription": "stik",
    "past-simple": "stuck",
    "past-simple-transcription": "stʌk",
    "past-participle": "stuck",
    "past-participle-transcription": "stʌk",
    translation: "приклеювати(ся), застрявати, упиратися"
  },
  {
    infinitive: "spin",
    "infinitive-transcription": "spɪn",
    "past-simple": "spun",
    "past-simple-transcription": "spʌn",
    "past-participle": "spun",
    "past-participle-transcription": "spʌn",
    translation: "прясти, крутити, вертіти, плести"
  },
  {
    infinitive: "sting",
    "infinitive-transcription": "stiŋ",
    "past-simple": "stung",
    "past-simple-transcription": "stʌŋ",
    "past-participle": "stung",
    "past-participle-transcription": "stʌŋ",
    translation: "жалити"
  },
  {
    infinitive: "swing",
    "infinitive-transcription": "swɪŋ",
    "past-simple": "swung",
    "past-simple-transcription": "swʌŋ",
    "past-participle": "swung",
    "past-participle-transcription": "swʌŋ",
    translation: "качати, хитатися, розгойдувати, висіти"
  },
  {
    infinitive: "cling",
    "infinitive-transcription": "klɪŋ",
    "past-simple": "clung",
    "past-simple-transcription": "klʌŋ",
    "past-participle": "clung",
    "past-participle-transcription": "klʌŋ",
    translation: "чіплятися, триматися, липнути"
  },
  {
    infinitive: "fling",
    "infinitive-transcription": "flɪŋ",
    "past-simple": "flung",
    "past-simple-transcription": "flʌŋ",
    "past-participle": "flung",
    "past-participle-transcription": "flʌŋ",
    translation: "кидати, кидати"
  },
  {
    infinitive: "hang",
    "infinitive-transcription": "hæŋ",
    "past-simple": "hung",
    "past-simple-transcription": "hʌŋ",
    "past-participle": "hung",
    "past-participle-transcription": "hʌŋ",
    translation: "висіти, розвішувати"
  },
  {
    infinitive: "strike",
    "infinitive-transcription": "straɪk",
    "past-simple": "struck",
    "past-simple-transcription": "strʌk",
    "past-participle": "struck",
    "past-participle-transcription": "strʌk",
    translation: "ударяти, страйкувати"
  }
];
const ellOld = [
  {
    infinitive: "sell",
    "infinitive-transcription": "sel",
    "past-simple": "sold",
    "past-simple-transcription": "sould",
    "past-participle": "sold",
    "past-participle-transcription": "sould",
    translation: "продавати"
  },
  {
    infinitive: "tell",
    "infinitive-transcription": "tel",
    "past-simple": "told",
    "past-simple-transcription": "tould",
    "past-participle": "told",
    "past-participle-transcription": "tould",
    translation: "розповідати"
  }
];
const oughtAught = [
  {
    infinitive: "bring",
    "infinitive-transcription": "brɪŋ",
    "past-simple": "brought",
    "past-simple-transcription": "brɔ:t",
    "past-participle": "brought",
    "past-participle-transcription": "brɔ:t",
    translation: "приносити"
  },
  {
    infinitive: "buy",
    "infinitive-transcription": "baɪ",
    "past-simple": "bought",
    "past-simple-transcription": "bɔ:t",
    "past-participle": "bought",
    "past-participle-transcription": "bɔ:t",
    translation: "купувати"
  },
  {
    infinitive: "sell",
    "infinitive-transcription": "sel",
    "past-simple": "sold",
    "past-simple-transcription": "sould",
    "past-participle": "sold",
    "past-participle-transcription": "sould",
    translation: "продавати"
  },
  {
    infinitive: "catch",
    "infinitive-transcription": "kætʃ",
    "past-simple": "caught",
    "past-simple-transcription": "kɔ:t",
    "past-participle": "caught",
    "past-participle-transcription": "kɔ:t",
    translation: "ловити, схоплювати"
  },
  {
    infinitive: "fight",
    "infinitive-transcription": "faɪt",
    "past-simple": "fought",
    "past-simple-transcription": "fɔ:t",
    "past-participle": "fought",
    "past-participle-transcription": "fɔ:t",
    translation: "боротися"
  },
  {
    infinitive: "seek",
    "infinitive-transcription": "si:k",
    "past-simple": "sought",
    "past-simple-transcription": "sɔ:t",
    "past-participle": "sought",
    "past-participle-transcription": "sɔ:t",
    translation: "шукати"
  },
  {
    infinitive: "teach",
    "infinitive-transcription": "ti:tʃ",
    "past-simple": "taught",
    "past-simple-transcription": "tɔ:t",
    "past-participle": "taught",
    "past-participle-transcription": "tɔ:t",
    translation: "вчити"
  },
  {
    infinitive: "think",
    "infinitive-transcription": "θɪŋk",
    "past-simple": "thought",
    "past-simple-transcription": "θɔ:t",
    "past-participle": "thought",
    "past-participle-transcription": "θɔ:t",
    translation: "думати"
  }
];
const indenticalPastAndPastParticiple = [
  {
    infinitive: "bend",
    "infinitive-transcription": "bend",
    "past-simple": "bent",
    "past-simple-transcription": "bent",
    "past-participle": "bent",
    "past-participle-transcription": "bent",
    translation: "гнути, згинати"
  },
  {
    infinitive: "build",
    "infinitive-transcription": "bɪld",
    "past-simple": "built",
    "past-simple-transcription": "bɪlt",
    "past-participle": "built",
    "past-participle-transcription": "bɪlt",
    translation: "будувати"
  },
  {
    infinitive: "burn",
    "infinitive-transcription": "bɜ:rn",
    "past-simple": "burnt",
    "past-simple-transcription": "bз:nt",
    "past-participle": "burnt",
    "past-participle-transcription": "bз:nt",
    translation: "горіти, палити"
  },
  {
    infinitive: "dwell",
    "infinitive-transcription": "dwel",
    "past-simple": "dwelt",
    "past-simple-transcription": "dwelt",
    "past-participle": "dwelt",
    "past-participle-transcription": "dwelt",
    translation: "жити, мешкати, перебувати, зупинятися (десь)"
  },
  {
    infinitive: "have",
    "infinitive-transcription": "hæv",
    "past-simple": "had",
    "past-simple-transcription": "hæd",
    "past-participle": "had",
    "past-participle-transcription": "hæd",
    translation: "мати"
  },
  {
    infinitive: "hold",
    "infinitive-transcription": "hould",
    "past-simple": "held",
    "past-simple-transcription": "held",
    "past-participle": "held",
    "past-participle-transcription": "held",
    translation: "тримати"
  },
  {
    infinitive: "lay",
    "infinitive-transcription": "leɪ",
    "past-simple": "laid",
    "past-simple-transcription": "leɪd",
    "past-participle": "laid",
    "past-participle-transcription": "leɪd",
    translation: "класти, покласти"
  },
  {
    infinitive: "lend",
    "infinitive-transcription": "lend",
    "past-simple": "lent",
    "past-simple-transcription": "lent",
    "past-participle": "lent",
    "past-participle-transcription": "lent",
    translation: "займати, позичати"
  },
  {
    infinitive: "lose",
    "infinitive-transcription": "lu:z",
    "past-simple": "lost",
    "past-simple-transcription": "lɒst",
    "past-participle": "lost",
    "past-participle-transcription": "lɒst",
    translation: "втрачати"
  },
  {
    infinitive: "make",
    "infinitive-transcription": "meɪk",
    "past-simple": "made",
    "past-simple-transcription": "meɪd",
    "past-participle": "made",
    "past-participle-transcription": "meɪd",
    translation: "робити"
  },
  {
    infinitive: "pay",
    "infinitive-transcription": "peɪ",
    "past-simple": "paid",
    "past-simple-transcription": "peɪd",
    "past-participle": "paid",
    "past-participle-transcription": "peɪd",
    translation: "платити"
  },
  {
    infinitive: "say",
    "infinitive-transcription": "seɪ",
    "past-simple": "said",
    "past-simple-transcription": "sed",
    "past-participle": "said",
    "past-participle-transcription": "sed",
    translation: "говорити"
  },
  {
    infinitive: "send",
    "infinitive-transcription": "send",
    "past-simple": "sent",
    "past-simple-transcription": "sent",
    "past-participle": "sent",
    "past-participle-transcription": "sent",
    translation: "посилати"
  },
  {
    infinitive: "shine",
    "infinitive-transcription": "ʃaɪn",
    "past-simple": "shone",
    "past-simple-transcription": "ʃɒn",
    "past-participle": "shone",
    "past-participle-transcription": "ʃɒn",
    translation: "світити, сяяти, блищати"
  },
  {
    infinitive: "shoot",
    "infinitive-transcription": "ʃu:t",
    "past-simple": "shot",
    "past-simple-transcription": "ʃɒt",
    "past-participle": "shot",
    "past-participle-transcription": "ʃɒt",
    translation: "стріляти"
  },
  {
    infinitive: "sit",
    "infinitive-transcription": "sɪt",
    "past-simple": "sat",
    "past-simple-transcription": "sɪt",
    "past-participle": "sat",
    "past-participle-transcription": "sɪt",
    translation: "сидіти"
  },
  {
    infinitive: "slide",
    "infinitive-transcription": "slaid",
    "past-simple": "slid",
    "past-simple-transcription": "slid",
    "past-participle": "slid",
    "past-participle-transcription": "slid",
    translation: "ковзати"
  },
  {
    infinitive: "spend",
    "infinitive-transcription": "",
    "past-simple": "spent",
    "past-simple-transcription": "spent",
    "past-participle": "spent",
    "past-participle-transcription": "spent",
    translation: "витрачати"
  },
  {
    infinitive: "stand",
    "infinitive-transcription": "stænd",
    "past-simple": "stood",
    "past-simple-transcription": "stʊd",
    "past-participle": "stood",
    "past-participle-transcription": "stʊd",
    translation: "стояти"
  },
  {
    infinitive: "win",
    "infinitive-transcription": "win",
    "past-simple": "won",
    "past-simple-transcription": "wʌn",
    "past-participle": "won",
    "past-participle-transcription": "wʌn",
    translation: "вигравати, перемагати"
  },
  {
    infinitive: "withstand",
    "infinitive-transcription": "wɪðˈstænd",
    "past-simple": "withstood",
    "past-simple-transcription": "wɪðˈstʊd",
    "past-participle": "withstood",
    "past-participle-transcription": "wɪðˈstʊd",
    translation: "встояти, витримувати, чинити опір"
  }
];
const threeDifferentVowels = [
  {
    infinitive: "dive",
    "infinitive-transcription": "daɪv",
    "past-simple": "dove",
    "past-simple-transcription": "dʌv",
    "past-participle": "dived",
    "past-participle-transcription": "daɪvd",
    translation: "пірнати, стрибати вниз, занурюватися"
  },
  {
    infinitive: "bear",
    "infinitive-transcription": "bɛə",
    "past-simple": "bore",
    "past-simple-transcription": "bɔ:",
    "past-participle": "born",
    "past-participle-transcription": "bɔ:n",
    translation: "народжувати, приносити"
  },
  {
    infinitive: "lie",
    "infinitive-transcription": "laɪ",
    "past-simple": "lay",
    "past-simple-transcription": "leɪ",
    "past-participle": "lain",
    "past-participle-transcription": "leɪn",
    translation: "лежати"
  },
  {
    infinitive: "be",
    "infinitive-transcription": "bi:",
    "past-simple": "was,were",
    "past-simple-transcription": "wɔz | wз:",
    "past-participle": "been",
    "past-participle-transcription": "bi:n",
    translation: "бути"
  },
  {
    infinitive: "do",
    "infinitive-transcription": "du:",
    "past-simple": "did",
    "past-simple-transcription": "did",
    "past-participle": "done",
    "past-participle-transcription": "dʌn",
    translation: "робити"
  },
  {
    infinitive: "go",
    "infinitive-transcription": "gou",
    "past-simple": "went",
    "past-simple-transcription": "went",
    "past-participle": "gone",
    "past-participle-transcription": "gɒn",
    translation: "іти, ходити"
  }
];
const iAURotating = [
  {
    infinitive: "begin",
    "infinitive-transcription": "bɪ 'gɪn",
    "past-simple": "began",
    "past-simple-transcription": "bɪ 'gæn",
    "past-participle": "begun",
    "past-participle-transcription": "bɪ 'gʌn",
    translation: "починати(ся)"
  },
  {
    infinitive: "drink",
    "infinitive-transcription": "drɪŋk",
    "past-simple": "drank",
    "past-simple-transcription": "dræŋk",
    "past-participle": "drunk",
    "past-participle-transcription": "drʌŋk",
    translation: "пити"
  },
  {
    infinitive: "ring",
    "infinitive-transcription": "rɪŋ",
    "past-simple": "rang",
    "past-simple-transcription": "ræŋ",
    "past-participle": "rung",
    "past-participle-transcription": "rʌŋ",
    translation: "дзвонити, дзвеніти"
  },
  {
    infinitive: "shrink",
    "infinitive-transcription": "ʃriŋk",
    "past-simple": "shrank",
    "past-simple-transcription": "ʃræŋk",
    "past-participle": "shrunk",
    "past-participle-transcription": "ʃrʌŋk",
    translation: "сідати (про матеріал), зменшувати(ся), скорочувати(ся)"
  },
  {
    infinitive: "sing",
    "infinitive-transcription": "sɪŋ",
    "past-simple": "sang",
    "past-simple-transcription": "sæŋ",
    "past-participle": "sung",
    "past-participle-transcription": "sʌŋ",
    translation: "співати"
  },
  {
    infinitive: "sink",
    "infinitive-transcription": "sɪŋk",
    "past-simple": "sank",
    "past-simple-transcription": "sæŋk",
    "past-participle": "sunk",
    "past-participle-transcription": "sʌŋk",
    translation: "тонути"
  },
  {
    infinitive: "spring",
    "infinitive-transcription": "sprɪŋ",
    "past-simple": "sprang",
    "past-simple-transcription": "spræŋ",
    "past-participle": "sprung",
    "past-participle-transcription": "sprʌŋ",
    translation: "стрибати, вскочити"
  },
  {
    infinitive: "swim",
    "infinitive-transcription": "swɪm",
    "past-simple": "swam",
    "past-simple-transcription": "swæm",
    "past-participle": "swum",
    "past-participle-transcription": "swʌm",
    translation: "плавати, плисти"
  }
];
const _hoisted_1 = { class: "overflow-auto pa-2" };
const _hoisted_2 = { class: "mb-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "irregular-verbs",
  setup(__props) {
    const panels = ref([]);
    function openAll() {
      panels.value = [...new Array(10)].map((_, i) => i);
      console.log(panels.value);
    }
    function closeAll() {
      panels.value = [];
    }
    return (_ctx, _cache) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_v_btn, { onClick: openAll }, {
            default: withCtx(() => [
              createTextVNode("Open")
            ]),
            _: 1
          }),
          createVNode(_component_v_btn, {
            onClick: closeAll,
            class: "mx-4"
          }, {
            default: withCtx(() => [
              createTextVNode("Close")
            ]),
            _: 1
          })
        ]),
        createVNode(_component_v_expansion_panels, {
          modelValue: panels.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => panels.value = $event),
          multiple: ""
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, {
              title: "All three forms coincide",
              data: unref(allThreeFormsCoincide),
              value: "1"
            }, null, 8, ["data"]),
            createVNode(_sfc_main$1, {
              title: "Rotating vowels",
              subtitle: "[i:] becomes [e]",
              data: unref(rotatingVowelsIE),
              value: "2"
            }, null, 8, ["data"]),
            createVNode(_sfc_main$1, {
              title: "Rotating vowels",
              subtitle: "Ea is pronounced differently",
              data: unref(rotatingVowelsEa),
              value: "3"
            }, null, 8, ["data"]),
            createVNode(_sfc_main$1, {
              title: "Rotating vowels",
              subtitle: "[ʌi] becomes [aʊ]",
              data: unref(rotatingVowelsAiAu),
              value: "4"
            }, null, 8, ["data"]),
            createVNode(_sfc_main$1, {
              title: "Rotating vowels",
              subtitle: "[i] becomes [ʌ]",
              data: unref(rotatingVowelsIA),
              value: "5"
            }, null, 8, ["data"]),
            createVNode(_sfc_main$1, {
              title: '"-ell" at the end becomes "-old"',
              data: unref(ellOld),
              value: "6"
            }, null, 8, ["data"]),
            createVNode(_sfc_main$1, {
              title: 'Past and Past Participle ending in "-ought" and "-aught"',
              data: unref(oughtAught),
              value: "7"
            }, null, 8, ["data"]),
            createVNode(_sfc_main$1, {
              title: "Verbs with indentical Present and Participle",
              data: unref(indenticalPastAndPastParticiple),
              value: "8"
            }, null, 8, ["data"]),
            createVNode(_sfc_main$1, {
              title: "Verbs with 3 different vowels",
              data: unref(threeDifferentVowels),
              value: "9"
            }, null, 8, ["data"]),
            createVNode(_sfc_main$1, {
              title: "i-a-u rotating",
              data: unref(iAURotating),
              value: "10"
            }, null, 8, ["data"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
