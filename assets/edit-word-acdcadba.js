import { g as defineComponent, q as useRoute, j as inject, i as ref, p as onMounted, r as resolveComponent, o as openBlock, e as createBlock, w as withCtx, d as createTextVNode, t as toDisplayString, a as createVNode, s as storageKey, v as toRaw, l } from "./index-b4ccc58a.js";
import { _ as _sfc_main$1 } from "./word-form.vue_vue_type_script_setup_true_lang-9c34504f.js";
import "./required-5fd17c0e.js";
import "./link-chip.vue_vue_type_script_setup_true_lang-befc7594.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "edit-word",
  setup(__props) {
    const route = useRoute();
    const storage = inject(storageKey);
    const wordFormRef = ref(null);
    const initialWord = ref("");
    async function submit() {
      if (!await wordFormRef.value?.validate())
        return;
      const data = wordFormRef.value?.getFormData();
      if (data) {
        await storage?.word.updateWord(toRaw(data));
        l(`Word has been successfull updated`, { type: "success" });
      }
    }
    onMounted(async () => {
      const word = await storage?.word.getWordById(Number(route.params.id));
      if (word) {
        wordFormRef.value?.setForm(word);
        initialWord.value = word.word;
      }
    });
    return (_ctx, _cache) => {
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_btn_primary = resolveComponent("v-btn-primary");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_card = resolveComponent("v-card");
      return openBlock(), createBlock(_component_v_card, null, {
        title: withCtx(() => [
          createTextVNode("Update word: " + toDisplayString(initialWord.value), 1)
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
              createVNode(_component_v_btn, {
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back())
              }, {
                default: withCtx(() => [
                  createTextVNode("Back")
                ]),
                _: 1
              }),
              createVNode(_component_v_btn_primary, { onClick: submit }, {
                default: withCtx(() => [
                  createTextVNode("Save")
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
