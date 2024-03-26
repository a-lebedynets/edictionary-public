import { g as defineComponent, j as inject, i as ref, r as resolveComponent, o as openBlock, e as createBlock, w as withCtx, a as createVNode, u as unref, d as createTextVNode, c as createElementBlock, h as renderList, F as Fragment, f as createCommentVNode, x as withModifiers, s as storageKey, v as toRaw, b as createBaseVNode, t as toDisplayString, V as VForm } from "./index-63eb1cfb.js";
import { r as required } from "./required-5fd17c0e.js";
import { _ as _sfc_main$1 } from "./link-chip.vue_vue_type_script_setup_true_lang-e0249bc5.js";
function useDebounce(pause, func) {
  let timerId = null;
  return function() {
    if (timerId !== null)
      clearTimeout(timerId);
    timerId = window.setTimeout(() => {
      func();
      timerId = null;
    }, pause);
  };
}
const _hoisted_1 = { class: "d-flex align-center w-100" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "word-form",
  setup(__props, { expose: __expose }) {
    const storage = inject(storageKey);
    const form = ref({
      id: void 0,
      word: "",
      transcription: "",
      translation: "",
      description: ""
    });
    const formRef = ref(null);
    async function validate() {
      const result = await formRef.value?.validate();
      return result?.valid || false;
    }
    function trimFormField(field) {
      form.value[field] = form.value[field]?.trim();
    }
    function getFormData() {
      return toRaw(form.value);
    }
    function setForm(word) {
      form.value = word;
    }
    function reset() {
      formRef.value?.reset();
      form.value = {
        id: void 0,
        word: "",
        transcription: "",
        translation: "",
        description: ""
      };
      existingsWords.value = [];
    }
    const loading = ref(false);
    const existingsWords = ref([]);
    const inputDebounce = useDebounce(500, async () => {
      existingsWords.value = [];
      if (!form.value.word.trim()) {
        return;
      }
      loading.value = true;
      const result = await storage?.word.getExistingsWords(form.value.word);
      if (result?.length)
        existingsWords.value = result;
      loading.value = false;
    });
    __expose({
      setForm,
      validate,
      getFormData,
      reset
    });
    return (_ctx, _cache) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_textarea = resolveComponent("v-textarea");
      return openBlock(), createBlock(unref(VForm), {
        ref_key: "formRef",
        ref: formRef,
        onSubmit: _cache[8] || (_cache[8] = withModifiers(() => {
        }, ["prevent"]))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_text_field, {
            modelValue: form.value.word,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.word = $event),
            rules: [unref(required)("Word")],
            label: "Word",
            clearable: "",
            required: "",
            loading: loading.value,
            onInput: unref(inputDebounce),
            onBlur: _cache[1] || (_cache[1] = ($event) => trimFormField("word"))
          }, null, 8, ["modelValue", "rules", "loading", "onInput"]),
          existingsWords.value.length ? (openBlock(), createBlock(_component_v_card, {
            key: 0,
            class: "mb-6"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_card_title, null, {
                default: withCtx(() => [
                  createTextVNode("Existing words")
                ]),
                _: 1
              }),
              createVNode(_component_v_list, { lines: "one" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(existingsWords.value, (w) => {
                    return openBlock(), createBlock(_component_v_list_item, {
                      key: w.id,
                      class: "w-100"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_1, [
                          createBaseVNode("span", null, toDisplayString(w.word) + " - " + toDisplayString(w.translation), 1),
                          w.sets?.length ? (openBlock(), createBlock(_sfc_main$1, {
                            key: 0,
                            to: { name: "edit-set", params: { id: w.sets[0].id } },
                            class: "mx-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(w.sets?.[0].name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_v_text_field, {
            modelValue: form.value.translation,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.translation = $event),
            rules: [unref(required)("Translation")],
            label: "Translation",
            clearable: "",
            required: "",
            onBlur: _cache[3] || (_cache[3] = ($event) => trimFormField("transcription"))
          }, null, 8, ["modelValue", "rules"]),
          createVNode(_component_v_text_field, {
            modelValue: form.value.transcription,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.transcription = $event),
            label: "Transcription",
            clearable: "",
            onBlur: _cache[5] || (_cache[5] = ($event) => trimFormField("translation"))
          }, null, 8, ["modelValue"]),
          createVNode(_component_v_textarea, {
            modelValue: form.value.description,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.description = $event),
            label: "Description",
            clearable: "",
            onBlur: _cache[7] || (_cache[7] = ($event) => trimFormField("description"))
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 512);
    };
  }
});
export {
  _sfc_main as _
};
