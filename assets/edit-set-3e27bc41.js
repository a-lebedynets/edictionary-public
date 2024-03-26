import { g as defineComponent, q as useRoute, j as inject, i as ref, p as onMounted, r as resolveComponent, o as openBlock, e as createBlock, w as withCtx, d as createTextVNode, t as toDisplayString, a as createVNode, s as storageKey, v as toRaw, l } from "./index-63eb1cfb.js";
import { _ as _sfc_main$1 } from "./set-form.vue_vue_type_script_setup_true_lang-f3a9b4b6.js";
import "./required-5fd17c0e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "edit-set",
  setup(__props) {
    const route = useRoute();
    const storage = inject(storageKey);
    const setFormRef = ref(null);
    const initialSet = ref("");
    async function submit() {
      if (!await setFormRef.value?.validate())
        return;
      const data = setFormRef.value?.getFormData();
      if (data) {
        await storage?.set.updateSet(toRaw(data));
        l(`Set has been successfully updated`, { type: "success" });
      }
    }
    onMounted(async () => {
      const set = await storage?.set.getSet(Number(route.params.id));
      if (set) {
        setFormRef.value?.setForm(set);
        initialSet.value = set.name;
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
          createTextVNode("Update set: " + toDisplayString(initialSet.value), 1)
        ]),
        default: withCtx(() => [
          createVNode(_component_v_divider),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, {
                ref_key: "setFormRef",
                ref: setFormRef
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
