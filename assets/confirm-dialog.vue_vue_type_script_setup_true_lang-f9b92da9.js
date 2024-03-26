import { g as defineComponent, i as ref, r as resolveComponent, o as openBlock, e as createBlock, w as withCtx, a as createVNode, d as createTextVNode, t as toDisplayString } from "./index-63eb1cfb.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "confirm-dialog",
  props: {
    width: { default: "auto" }
  },
  emits: ["confirm"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const showDialog = ref(false);
    const text = ref("");
    const data = ref();
    function openDialog(options) {
      showDialog.value = true;
      text.value = options?.text || "";
      data.value = options?.data;
    }
    function confirm() {
      emit("confirm", { closeDialog, data: data.value });
    }
    function closeDialog() {
      showDialog.value = false;
    }
    __expose({
      openDialog,
      closeDialog
    });
    return (_ctx, _cache) => {
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_btn_primary = resolveComponent("v-btn-primary");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_dialog = resolveComponent("v-dialog");
      return openBlock(), createBlock(_component_v_dialog, {
        modelValue: showDialog.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showDialog.value = $event),
        persistent: "",
        width: _ctx.$props.width
      }, {
        default: withCtx(() => [
          createVNode(_component_v_card, null, {
            default: withCtx(() => [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(text.value), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_card_actions, null, {
                default: withCtx(() => [
                  createVNode(_component_v_spacer),
                  createVNode(_component_v_btn, { onClick: closeDialog }, {
                    default: withCtx(() => [
                      createTextVNode(" No ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn_primary, { onClick: confirm }, {
                    default: withCtx(() => [
                      createTextVNode(" Yes ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "width"]);
    };
  }
});
export {
  _sfc_main as _
};
