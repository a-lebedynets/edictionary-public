import { g as defineComponent, j as inject, i as ref, y as computed, n as onMounted, r as resolveComponent, o as openBlock, e as createBlock, w as withCtx, a as createVNode, u as unref, c as createElementBlock, b as createBaseVNode, t as toDisplayString, f as createCommentVNode, v as withModifiers, s as storageKey, q as toRaw, V as VForm } from "./index-2f9eae48.js";
import { r as required } from "./required-5fd17c0e.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "text-grey text-caption align-self-center"
};
const _hoisted_3 = {
  key: 1,
  class: "text-grey text-caption align-self-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "set-form",
  setup(__props, { expose: __expose }) {
    const storage = inject(storageKey);
    const form = ref({
      id: void 0,
      name: "",
      word_ids: [],
      type_ids: []
    });
    const testTypes = [
      { id: 1, title: "Compare: Original - Translation" },
      { id: 2, title: "Compare: Translation - Original" },
      { id: 3, title: "Compare: Original - Translation (by pronunciation)" },
      { id: 4, title: "Letters: Original - Translation" },
      { id: 5, title: "Letters: Translation - Original" },
      { id: 6, title: "Letters: Original - Translation (by pronunciation)" },
      { id: 7, title: "Variants: Original - Translation" },
      { id: 8, title: "Variants: Translation - Original" },
      { id: 9, title: "Variants: Original - Translation (by pronunciation)" }
    ];
    const words = ref([]);
    const someWordsSelected = computed(() => form.value.word_ids && form.value.word_ids?.length > 0);
    const allWordsSelected = computed(() => form.value.word_ids?.length === words.value.length);
    function toggleWords() {
      if (allWordsSelected.value)
        form.value.word_ids = [];
      else
        form.value.word_ids = words.value.map((w) => w.id);
    }
    const someTypesSelected = computed(() => form.value.type_ids && form.value.type_ids?.length > 0);
    const allTypesSelected = computed(() => form.value.type_ids?.length === testTypes.length);
    function toggleTypes() {
      if (allTypesSelected.value)
        form.value.type_ids = [];
      else
        form.value.type_ids = testTypes.map((w) => w.id);
    }
    const formRef = ref(null);
    async function validate() {
      const result = await formRef.value?.validate();
      return result?.valid || false;
    }
    function trimFormField(field) {
      form.value[field] = form.value[field].trim();
    }
    function getFormData() {
      return toRaw(form.value);
    }
    function setForm(set) {
      form.value = set;
    }
    function reset() {
      formRef.value?.reset();
      form.value = {
        id: void 0,
        name: "",
        word_ids: [],
        type_ids: []
      };
    }
    onMounted(async () => {
      const data = await storage?.word.getWords();
      if (data)
        words.value = data;
    });
    __expose({
      setForm,
      validate,
      getFormData,
      reset
    });
    return (_ctx, _cache) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_checkbox_btn = resolveComponent("v-checkbox-btn");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      const _component_v_chip = resolveComponent("v-chip");
      return openBlock(), createBlock(unref(VForm), {
        ref_key: "formRef",
        ref: formRef,
        onSubmit: _cache[4] || (_cache[4] = withModifiers(() => {
        }, ["prevent"]))
      }, {
        default: withCtx(() => [
          createVNode(_component_v_text_field, {
            modelValue: form.value.name,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.name = $event),
            rules: [unref(required)("Name")],
            label: "Set name",
            clearable: "",
            required: "",
            onBlur: _cache[1] || (_cache[1] = ($event) => trimFormField("name"))
          }, null, 8, ["modelValue", "rules"]),
          createVNode(_component_v_autocomplete, {
            modelValue: form.value.word_ids,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.word_ids = $event),
            items: words.value,
            rules: [unref(required)("Words")],
            required: "",
            label: "Words",
            "item-title": "word",
            "item-value": "id",
            multiple: "",
            clearable: ""
          }, {
            "prepend-item": withCtx(() => [
              createVNode(_component_v_list_item, {
                title: "Select All",
                onClick: toggleWords
              }, {
                prepend: withCtx(() => [
                  createVNode(_component_v_checkbox_btn, {
                    color: someWordsSelected.value ? "indigo-darken-4" : void 0,
                    indeterminate: someWordsSelected.value && !allWordsSelected.value,
                    "model-value": someWordsSelected.value
                  }, null, 8, ["color", "indeterminate", "model-value"])
                ]),
                _: 1
              }),
              createVNode(_component_v_divider, { class: "mt-2" })
            ]),
            selection: withCtx(({ item, index }) => [
              index < 2 ? (openBlock(), createElementBlock("span", _hoisted_1, [
                createBaseVNode("span", null, toDisplayString(item.title), 1)
              ])) : createCommentVNode("", true),
              index === 2 && form.value.word_ids ? (openBlock(), createElementBlock("span", _hoisted_2, " (+" + toDisplayString(form.value.word_ids.length - 2) + " others) ", 1)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["modelValue", "items", "rules"]),
          createVNode(_component_v_autocomplete, {
            modelValue: form.value.type_ids,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.type_ids = $event),
            items: testTypes,
            rules: [unref(required)("Types")],
            label: "Types",
            "item-title": "title",
            "item-value": "id",
            multiple: ""
          }, {
            "prepend-item": withCtx(() => [
              createVNode(_component_v_list_item, {
                title: "Select All",
                onClick: toggleTypes
              }, {
                prepend: withCtx(() => [
                  createVNode(_component_v_checkbox_btn, {
                    color: someTypesSelected.value ? "indigo-darken-4" : void 0,
                    indeterminate: someTypesSelected.value && !allTypesSelected.value,
                    "model-value": someTypesSelected.value
                  }, null, 8, ["color", "indeterminate", "model-value"])
                ]),
                _: 1
              }),
              createVNode(_component_v_divider, { class: "mt-2" })
            ]),
            selection: withCtx(({ item, index }) => [
              index < 2 ? (openBlock(), createBlock(_component_v_chip, { key: 0 }, {
                default: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(item.title), 1)
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              index === 2 ? (openBlock(), createElementBlock("span", _hoisted_3, " (+" + toDisplayString(form.value.type_ids.length - 2) + " others) ", 1)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["modelValue", "rules"])
        ]),
        _: 1
      }, 512);
    };
  }
});
export {
  _sfc_main as _
};
