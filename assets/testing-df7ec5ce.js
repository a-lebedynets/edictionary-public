import { g as defineComponent, r as resolveComponent, o as openBlock, e as createBlock, i as ref, y as computed, z as watch, c as createElementBlock, b as createBaseVNode, A as withDirectives, B as vShow, a as createVNode, t as toDisplayString, f as createCommentVNode, C as withKeys, u as unref, D as VTextField, E as nextTick, n as onMounted, G as onBeforeUnmount, F as Fragment, h as renderList, w as withCtx, d as createTextVNode, H as pushScopeId, I as popScopeId, J as onUnmounted, K as normalizeClass, L as VBtn, M as resolveDynamicComponent, m as mergeProps, p as useRoute, j as inject, s as storageKey } from "./index-2f9eae48.js";
import { _ as _sfc_main$8 } from "./speak.vue_vue_type_script_setup_true_lang-4b64f790.js";
import { _ as _export_sfc } from "./00plugin-vue_export-helper-cc2b3d55.js";
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "test-icon",
  props: {
    valid: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      return openBlock(), createBlock(_component_v_icon, {
        icon: _ctx.$props.valid ? "mdi-check" : "mdi-close",
        color: _ctx.$props.valid ? "success" : "error"
      }, null, 8, ["icon", "color"]);
    };
  }
});
const _hoisted_1$5 = { class: "d-flex flex-column align-center" };
const _hoisted_2$5 = { class: "d-flex align-center ga-2" };
const _hoisted_3$4 = { key: 0 };
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_5$1 = {
  key: 0,
  class: "d-flex ga-2"
};
const _hoisted_6$1 = {
  key: 0,
  class: "d-flex flex-column align-center"
};
const _hoisted_7$1 = { key: 1 };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "compare",
  props: {
    data: {},
    initialKey: {},
    resultKey: {},
    bySound: { type: Boolean }
  },
  emits: ["check"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const speakEl = ref(null);
    const inputText = ref("");
    const showError = ref(false);
    const finished = ref(false);
    const placeholder = computed(() => {
      return `${props.data?.[props.resultKey].length.toString() || 0} letters`;
    });
    watch(
      () => props.data,
      () => {
        if (props.bySound)
          nextTick(() => makeSound());
      },
      {
        immediate: true
      }
    );
    function makeSound() {
      speakEl.value?.speak();
    }
    function check() {
      setTimeout(() => {
        const isCorrect = props.data[props.resultKey].trim().toLowerCase() === inputText.value.trim().toLowerCase();
        showError.value = !isCorrect;
        finished.value = true;
        makeSound();
        emits("check", { value: isCorrect, wordData: props.data });
      }, 0);
    }
    function reset() {
      inputText.value = "";
      showError.value = false;
      finished.value = false;
    }
    __expose({ reset, check });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          withDirectives(createVNode(_sfc_main$8, {
            text: _ctx.data.word,
            ref_key: "speakEl",
            ref: speakEl
          }, null, 8, ["text"]), [
            [vShow, finished.value || _ctx.$props.bySound]
          ]),
          !_ctx.$props.bySound ? (openBlock(), createElementBlock("span", _hoisted_3$4, toDisplayString(_ctx.data[_ctx.$props.initialKey]), 1)) : createCommentVNode("", true)
        ]),
        _hoisted_4$2,
        (openBlock(), createBlock(unref(VTextField), {
          key: _ctx.data[_ctx.$props.initialKey],
          modelValue: inputText.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputText.value = $event),
          error: showError.value,
          placeholder: placeholder.value,
          disabled: finished.value,
          onKeypress: withKeys(check, ["enter"]),
          class: "w-100",
          autofocus: ""
        }, null, 8, ["modelValue", "error", "placeholder", "disabled", "onKeypress"])),
        finished.value ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
          createVNode(_sfc_main$7, {
            valid: !showError.value
          }, null, 8, ["valid"]),
          _ctx.$props.bySound ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
            createBaseVNode("span", null, toDisplayString(_ctx.data.word) + " - " + toDisplayString(_ctx.data.translation), 1),
            createBaseVNode("span", null, toDisplayString(_ctx.data.transcription), 1)
          ])) : (openBlock(), createElementBlock("span", _hoisted_7$1, toDisplayString(_ctx.data[_ctx.$props.resultKey]) + " - " + toDisplayString(_ctx.data.transcription), 1))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-dc72a435"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "d-flex flex-column align-center" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_3$3 = { class: "d-flex align-center ga-2" };
const _hoisted_4$1 = { key: 0 };
const _hoisted_5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_6 = { class: "d-flex ga-2 justify-center flex-wrap" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_9 = { class: "d-flex ga-2" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_11 = {
  key: 0,
  class: "d-flex ga-2"
};
const _hoisted_12 = {
  key: 0,
  class: "d-flex flex-column align-center"
};
const _hoisted_13 = { key: 1 };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "letters",
  props: {
    data: {},
    initialKey: {},
    resultKey: {},
    bySound: { type: Boolean }
  },
  emits: ["check"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const speakEl = ref(null);
    const valid = ref(true);
    const finished = ref(false);
    const mistakesInARow = ref(0);
    const letterIndex = ref(0);
    const splitedWordByWhitespaces = ref([]);
    const lettersForClick = ref([]);
    const wordWithoutSpaces = computed(() => splitedWordByWhitespaces.value.join(""));
    function check() {
      finished.value = true;
      const value = letterIndex.value >= wordWithoutSpaces.value.length - 1 ? valid.value : false;
      valid.value = value;
      lettersForClick.value.forEach((l) => l.count = 0);
      letterIndex.value = wordWithoutSpaces.value.length;
      makeSound();
      emits("check", { value, wordData: props.data });
    }
    function reset() {
      valid.value = true;
      finished.value = false;
      letterIndex.value = 0;
    }
    watch(
      () => props.data,
      () => {
        splitedWordByWhitespaces.value = props.data[props.initialKey].toLowerCase().split(" ");
        lettersForClick.value = createLettersForClick(wordWithoutSpaces.value);
        if (props.bySound)
          nextTick(() => makeSound());
      },
      { immediate: true, deep: true }
    );
    function makeSound() {
      speakEl.value?.speak();
    }
    function isAvailableSymbol(value) {
      return /^[\W\da-zA-Z]$/.test(value);
    }
    function createLettersForClick(word) {
      const temp = {};
      word.split("").forEach((letter) => {
        if (temp[letter])
          temp[letter] += 1;
        else
          temp[letter] = 1;
      });
      const result = [];
      for (const letter in temp) {
        if (Object.prototype.hasOwnProperty.call(temp, letter))
          result.push({ letter, count: temp[letter], color: "default" });
      }
      return shuffleArray(result);
    }
    function inputEvent(event) {
      const letter = event.key;
      clickLetter(letter);
    }
    function clickLetter(letter) {
      if (finished.value)
        return;
      const lowerLetter = letter.toLowerCase();
      if (!isAvailableSymbol(lowerLetter))
        return;
      const word = wordWithoutSpaces.value;
      const currentLetterIndex = letterIndex.value;
      const letterForClick = lettersForClick.value.find((l) => l.letter === letter);
      if (letterForClick && letterForClick.count) {
        if (word[currentLetterIndex] === letter) {
          mistakesInARow.value = 0;
          letterForClick.count -= 1;
          letterIndex.value = currentLetterIndex + 1;
        } else {
          highlightWrongLetter(letterForClick);
          highlightCorrectLetter();
          valid.value = false;
          mistakesInARow.value += 1;
          return;
        }
      }
      if (letterIndex.value > word.length - 1) {
        check();
        return;
      }
    }
    function highlightWrongLetter(data) {
      data.color = "error";
      setTimeout(() => {
        data.color = "default";
      }, 500);
    }
    function highlightCorrectLetter() {
      if (mistakesInARow.value >= 3) {
        const correctLetter = lettersForClick.value.find(
          (i) => i.letter == wordWithoutSpaces.value[letterIndex.value]
        );
        if (correctLetter) {
          correctLetter.color = "success";
          setTimeout(() => {
            correctLetter.color = "default";
          }, 500);
        }
      }
    }
    function getPreviewIndex(outerIndex, innerIndex) {
      let index = innerIndex;
      for (let i = 0; i < outerIndex; i++) {
        index += splitedWordByWhitespaces.value[i].length;
      }
      return index;
    }
    onMounted(() => {
      window.addEventListener("keyup", inputEvent);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("keyup", inputEvent);
    });
    __expose({ reset, check });
    return (_ctx, _cache) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_badge = resolveComponent("v-badge");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _hoisted_2$4,
        createBaseVNode("div", _hoisted_3$3, [
          withDirectives(createVNode(_sfc_main$8, {
            text: _ctx.data.word,
            ref_key: "speakEl",
            ref: speakEl
          }, null, 8, ["text"]), [
            [vShow, finished.value || _ctx.$props.bySound]
          ]),
          !_ctx.$props.bySound ? (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString(_ctx.data[_ctx.$props.resultKey]), 1)) : createCommentVNode("", true)
        ]),
        _hoisted_5,
        createBaseVNode("div", _hoisted_6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(splitedWordByWhitespaces.value, (word, outerIndex) => {
            return openBlock(), createElementBlock("div", {
              key: outerIndex,
              class: "d-flex ga-1"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(word, (_, innerIndex) => {
                return openBlock(), createBlock(_component_v_btn, {
                  key: innerIndex,
                  disabled: getPreviewIndex(outerIndex, innerIndex) >= letterIndex.value,
                  ripple: false,
                  class: "letter"
                }, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("span", null, toDisplayString(splitedWordByWhitespaces.value[outerIndex][innerIndex]), 513), [
                      [vShow, getPreviewIndex(outerIndex, innerIndex) < letterIndex.value]
                    ])
                  ]),
                  _: 2
                }, 1032, ["disabled"]);
              }), 128)),
              _hoisted_7
            ]);
          }), 128))
        ]),
        _hoisted_8,
        createBaseVNode("div", _hoisted_9, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(lettersForClick.value, (_, index) => {
            return openBlock(), createBlock(_component_v_badge, {
              key: index,
              content: _.count || "",
              color: _.count ? "info" : "transparent"
            }, {
              default: withCtx(() => [
                createVNode(_component_v_btn, {
                  disabled: !_.count,
                  color: _.color,
                  class: "letter",
                  onClick: ($event) => clickLetter(_.letter)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_.letter), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "color", "onClick"])
              ]),
              _: 2
            }, 1032, ["content", "color"]);
          }), 128))
        ]),
        _hoisted_10,
        finished.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
          createVNode(_sfc_main$7, { valid: valid.value }, null, 8, ["valid"]),
          _ctx.$props.bySound ? (openBlock(), createElementBlock("div", _hoisted_12, [
            createBaseVNode("span", null, toDisplayString(_ctx.data.word) + " - " + toDisplayString(_ctx.data.translation), 1),
            createBaseVNode("span", null, toDisplayString(_ctx.data.transcription), 1)
          ])) : (openBlock(), createElementBlock("span", _hoisted_13, toDisplayString(_ctx.data[_ctx.$props.initialKey]) + " - " + toDisplayString(_ctx.data.transcription), 1))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const letters_vue_vue_type_style_index_0_scoped_dc72a435_lang = "";
const letters = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-dc72a435"]]);
function peekRandomItemsWithoutDuplicates(array, count) {
  const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
  const selectedSet = /* @__PURE__ */ new Set();
  const randomItems = [];
  for (const item of shuffledArray) {
    if (randomItems.length === count)
      break;
    if (!selectedSet.has(item)) {
      randomItems.push(item);
      selectedSet.add(item);
    }
  }
  return randomItems;
}
function removeDuplicatesFromArray(array, key) {
  const map = /* @__PURE__ */ new Map();
  return array.reduce((acc, obj) => {
    if (!map.has(obj[key])) {
      map.set(obj[key], true);
      acc.push(obj);
    }
    return acc;
  }, []);
}
const _hoisted_1$3 = { class: "d-flex justify-between align-center" };
const _hoisted_2$3 = { key: 0 };
const _hoisted_3$2 = {
  key: 0,
  class: "d-flex flex-column align-center"
};
const _hoisted_4 = { key: 1 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "variants",
  props: {
    data: {},
    words: {},
    initialKey: {},
    resultKey: {},
    bySound: { type: Boolean }
  },
  emits: ["check"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const speakEl = ref(null);
    const valid = ref(true);
    const finished = ref(false);
    const variants = ref([]);
    const selected = ref("");
    watch(
      () => props.data,
      () => {
        createVariants();
        if (props.bySound)
          nextTick(() => makeSound());
      },
      { immediate: true }
    );
    function makeSound() {
      speakEl.value?.speak();
    }
    function createVariants() {
      const uniqueWordsWithoutAnswer = removeDuplicatesFromArray(props.words, props.initialKey).filter(
        (w) => w[props.initialKey] !== props.data[props.initialKey]
      );
      const peekedvariants = peekRandomItemsWithoutDuplicates(uniqueWordsWithoutAnswer, 2);
      peekedvariants.push(props.data);
      variants.value = shuffleArray(peekedvariants);
    }
    function selectedChanged(value) {
      if (value === props.data[props.initialKey]) {
        finished.value = true;
        check();
      } else
        valid.value = false;
    }
    function check() {
      selected.value = props.data[props.initialKey];
      const value = finished.value ? valid.value : false;
      finished.value = true;
      makeSound();
      emits("check", { value, wordData: props.data });
    }
    function reset() {
      valid.value = true;
      finished.value = false;
      selected.value = "";
      variants.value = [];
    }
    function keypressEvent(event) {
      if (finished.value)
        return;
      const index = parseInt(event.key) - 1;
      if (variants.value[index]) {
        selected.value = variants.value[index][props.initialKey];
        selectedChanged(selected.value);
      }
    }
    onMounted(() => window.addEventListener("keyup", keypressEvent));
    onUnmounted(() => window.removeEventListener("keyup", keypressEvent));
    __expose({ reset, check });
    return (_ctx, _cache) => {
      const _component_test_icon = resolveComponent("test-icon");
      const _component_v_radio = resolveComponent("v-radio");
      const _component_v_radio_group = resolveComponent("v-radio-group");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", {
          class: normalizeClass(["w-50 d-flex align-center ga-2", { "flex-column": _ctx.$props.bySound }])
        }, [
          withDirectives(createVNode(_sfc_main$8, {
            text: _ctx.data.word,
            ref_key: "speakEl",
            ref: speakEl
          }, null, 8, ["text"]), [
            [vShow, finished.value || _ctx.$props.bySound]
          ]),
          !_ctx.$props.bySound ? (openBlock(), createElementBlock("span", _hoisted_2$3, toDisplayString(_ctx.$props.data[_ctx.$props.resultKey]), 1)) : createCommentVNode("", true),
          finished.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createVNode(_component_test_icon, { valid: valid.value }, null, 8, ["valid"]),
            _ctx.$props.bySound ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
              createBaseVNode("span", null, toDisplayString(_ctx.data.word) + " - " + toDisplayString(_ctx.data.translation), 1),
              createBaseVNode("span", null, toDisplayString(_ctx.data.transcription), 1)
            ])) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(_ctx.data.transcription), 1))
          ], 64)) : createCommentVNode("", true)
        ], 2),
        createVNode(_component_v_radio_group, {
          modelValue: selected.value,
          "onUpdate:modelValue": [
            _cache[0] || (_cache[0] = ($event) => selected.value = $event),
            selectedChanged
          ],
          column: "",
          class: "w-50"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(variants.value, (variant, index) => {
              return openBlock(), createBlock(_component_v_radio, {
                key: index,
                label: variant[_ctx.$props.initialKey],
                color: variant[_ctx.$props.initialKey] == _ctx.$props.data[_ctx.$props.initialKey] ? "success" : "error",
                value: variant[_ctx.$props.initialKey],
                disabled: finished.value
              }, null, 8, ["label", "color", "value", "disabled"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "w-100 d-flex justify-center" };
const _hoisted_2$2 = { class: "d-flex justify-center w-50 ga-4" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "test-controls",
  props: {
    showNext: { type: Boolean }
  },
  emits: ["check", "next"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    function enterPress(event) {
      if (event.key === "Enter" && props.showNext)
        emits("next");
    }
    onMounted(() => {
      window.addEventListener("keypress", enterPress);
    });
    onUnmounted(() => {
      window.removeEventListener("keypress", enterPress);
    });
    const emits = __emit;
    return (_ctx, _cache) => {
      const _component_v_btn_primary = resolveComponent("v-btn-primary");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          _ctx.$props.showNext ? (openBlock(), createBlock(_component_v_btn_primary, {
            key: 0,
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("next"))
          }, {
            default: withCtx(() => [
              createTextVNode(" Next ")
            ]),
            _: 1
          })) : (openBlock(), createBlock(unref(VBtn), {
            key: 1,
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("check")),
            variant: "plain"
          }, {
            default: withCtx(() => [
              createTextVNode("Don't know")
            ]),
            _: 1
          }))
        ])
      ]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "test-results",
  props: {
    items: {}
  },
  setup(__props) {
    const headers = [
      { key: "value", title: "Result" },
      { key: "wordData.word", title: "Word" },
      { key: "wordData.translation", title: "Translation" }
    ];
    return (_ctx, _cache) => {
      const _component_v_data_table_virtual = resolveComponent("v-data-table-virtual");
      return openBlock(), createBlock(_component_v_data_table_virtual, {
        headers,
        items: _ctx.items,
        height: "400",
        "item-value": "name"
      }, {
        item: withCtx(({ item }) => [
          createBaseVNode("tr", null, [
            createBaseVNode("td", null, [
              createVNode(_sfc_main$7, {
                valid: item.value
              }, null, 8, ["valid"])
            ]),
            createBaseVNode("td", null, toDisplayString(item.wordData.word), 1),
            createBaseVNode("td", null, toDisplayString(item.wordData.translation), 1)
          ])
        ]),
        _: 1
      }, 8, ["items"]);
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-2fac273a"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  key: 0,
  class: "d-flex flex-column ga-4 w-100"
};
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "test",
  setup(__props, { expose: __expose }) {
    const data = ref({
      testTypes: [],
      words: []
    });
    const dynamicTestEl = ref(null);
    const allTestWords = ref([]);
    const currentWordIndex = ref(-1);
    const currentWord = computed(() => allTestWords.value[currentWordIndex.value]);
    const status = ref("default");
    const answers = ref([]);
    const typeComponents = ref({
      1: {
        component: _sfc_main$6,
        props: {
          initialKey: "translation",
          resultKey: "word",
          data: currentWord
        }
      },
      2: {
        component: _sfc_main$6,
        props: {
          initialKey: "word",
          resultKey: "translation",
          data: currentWord
        }
      },
      3: {
        component: _sfc_main$6,
        props: {
          initialKey: "word",
          resultKey: "word",
          data: currentWord,
          bySound: true
        }
      },
      4: {
        component: letters,
        props: {
          initialKey: "translation",
          resultKey: "word",
          data: currentWord
        }
      },
      5: {
        component: letters,
        props: {
          initialKey: "word",
          resultKey: "translation",
          data: currentWord
        }
      },
      6: {
        component: letters,
        props: {
          initialKey: "word",
          resultKey: "word",
          data: currentWord,
          bySound: true
        }
      },
      7: {
        component: _sfc_main$4,
        props: {
          initialKey: "translation",
          resultKey: "word",
          data: currentWord,
          words: allTestWords
        }
      },
      8: {
        component: _sfc_main$4,
        props: {
          initialKey: "word",
          resultKey: "translation",
          data: currentWord,
          words: allTestWords
        }
      },
      9: {
        component: _sfc_main$4,
        props: {
          initialKey: "translation",
          resultKey: "word",
          data: currentWord,
          words: allTestWords,
          bySound: true
        }
      }
    });
    function start() {
      next();
      status.value = "progress";
    }
    function next() {
      if (allTestWords.value[currentWordIndex.value + 1]) {
        currentWordIndex.value = currentWordIndex.value + 1;
        status.value = "progress";
      } else
        status.value = "finished";
      dynamicTestEl.value?.reset();
    }
    function showNext(result) {
      answers.value.push(result);
      if (allTestWords.value.length === currentWordIndex.value + 1) {
        status.value = "finished";
      } else
        status.value = "next";
    }
    function check() {
      if (dynamicTestEl.value?.check)
        dynamicTestEl.value?.check?.();
      else
        throw new Error("Implement check method. Method should return boolean value.");
    }
    function setData(initData) {
      data.value = initData;
      generateTest();
    }
    function generateTest() {
      let result = [];
      data.value.testTypes.forEach((typeId) => {
        result = [
          ...result,
          ...data.value.words.map((w) => ({
            word: w.word,
            translation: w.translation,
            typeId,
            transcription: w.transcription
          }))
        ];
      });
      allTestWords.value = shuffleArray(result);
    }
    __expose({
      setData
    });
    return (_ctx, _cache) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_btn_primary = resolveComponent("v-btn-primary");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card = resolveComponent("v-card");
      return openBlock(), createElementBlock(Fragment, null, [
        allTestWords.value.length ? (openBlock(), createBlock(_component_v_card, {
          key: 0,
          class: "test mb-1"
        }, {
          default: withCtx(() => [
            createVNode(_component_v_card_text, { class: "h-100 d-flex justify-center" }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(["d-flex flex-column align-center w-50", { "justify-center": status.value == "default", "mt-10": status.value != "default" }])
                }, [
                  status.value === "finished" ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
                    createVNode(_component_v_btn, {
                      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
                      class: "w-50 ma-auto"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Go back")
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$2, { items: answers.value }, null, 8, ["items"])
                  ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    status.value == "default" ? (openBlock(), createBlock(_component_v_btn_primary, {
                      key: 0,
                      autofocus: "",
                      class: "w-50",
                      onClick: start
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Start ")
                      ]),
                      _: 1
                    })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createBaseVNode("div", null, toDisplayString(currentWordIndex.value + 1) + " / " + toDisplayString(allTestWords.value.length), 1),
                      _hoisted_2$1,
                      (openBlock(), createBlock(resolveDynamicComponent(typeComponents.value[currentWord.value.typeId].component), mergeProps(typeComponents.value[currentWord.value.typeId].props, {
                        ref_key: "dynamicTestEl",
                        ref: dynamicTestEl,
                        class: "w-100",
                        onCheck: showNext
                      }), null, 16))
                    ], 64))
                  ], 64))
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        _hoisted_3$1,
        status.value == "next" || status.value == "progress" ? (openBlock(), createBlock(_sfc_main$3, {
          key: 1,
          "show-next": status.value == "next",
          class: "w-50",
          onNext: next,
          onCheck: check
        }, null, 8, ["show-next"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const test_vue_vue_type_style_index_0_scoped_2fac273a_lang = "";
const Test = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2fac273a"]]);
const _hoisted_1 = { class: "d-flex align-center ga-2" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h4", null, "Set name:", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "testing",
  setup(__props) {
    const route = useRoute();
    const storage = inject(storageKey);
    const testEl = ref(null);
    const set = ref({
      name: "",
      type_ids: [],
      word_ids: []
    });
    const words = ref([]);
    onMounted(async () => {
      const setData = await storage?.set.getSet(Number(route.params.id));
      if (setData && setData.word_ids) {
        set.value = setData;
        words.value = await storage?.word.getWordsByIds(setData.word_ids) || [];
        testEl.value?.setData({
          testTypes: set.value.type_ids,
          words: words.value
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives(createBaseVNode("div", _hoisted_1, [
          _hoisted_2,
          createBaseVNode("span", null, toDisplayString(set.value?.name), 1)
        ], 512), [
          [vShow, set.value.name]
        ]),
        _hoisted_3,
        createVNode(Test, {
          ref_key: "testEl",
          ref: testEl
        }, null, 512)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
