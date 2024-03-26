import { g as defineComponent, j as inject, i as ref, r as resolveComponent, o as openBlock, e as createBlock, w as withCtx, d as createTextVNode, a as createVNode, s as storageKey, l } from "./index-2f9eae48.js";
import { _ as _sfc_main$1 } from "./word-form.vue_vue_type_script_setup_true_lang-68f8a4b9.js";
import "./required-5fd17c0e.js";
import "./link-chip.vue_vue_type_script_setup_true_lang-be6326e8.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "add-word",
  setup(__props) {
    const storage = inject(storageKey);
    const wordFormRef = ref(null);
    function reset() {
      wordFormRef.value?.reset();
    }
    async function submit() {
      if (!await wordFormRef.value?.validate())
        return;
      const data = wordFormRef.value?.getFormData();
      if (data) {
        await storage?.word.addWord(data);
        l(`Word "${data?.word}" has been successfully added.`, { type: "success" });
        reset();
      }
    }
    return (_ctx, _cache) => {
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_btn_primary = resolveComponent("v-btn-primary");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_card = resolveComponent("v-card");
      return openBlock(), createBlock(_component_v_card, null, {
        title: withCtx(() => [
          createTextVNode("Add new word")
        ]),
        default: withCtx(() => [
          createVNode(_component_v_divider),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, {
                ref_key: "wordFormRef",
                ref: wordFormRef
              }, null, 512)
            ]),
            _: 1
          }),
          createVNode(_component_v_divider),
          createVNode(_component_v_card_actions, { class: "justify-end" }, {
            default: withCtx(() => [
              createVNode(_component_v_btn, { onClick: reset }, {
                default: withCtx(() => [
                  createTextVNode("Reset")
                ]),
                _: 1
              }),
              createVNode(_component_v_btn_primary, { onClick: submit }, {
                default: withCtx(() => [
                  createTextVNode("Add")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
