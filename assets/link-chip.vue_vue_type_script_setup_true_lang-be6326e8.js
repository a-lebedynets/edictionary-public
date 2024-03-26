import { g as defineComponent, r as resolveComponent, o as openBlock, e as createBlock, w as withCtx, a as createVNode, x as renderSlot } from "./index-2f9eae48.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "link-chip",
  props: {
    to: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_v_chip = resolveComponent("v-chip");
      return openBlock(), createBlock(_component_v_chip, {
        size: "small",
        title: "Set name"
      }, {
        default: withCtx(() => [
          createVNode(_component_router_link, {
            to: _ctx.$props.to,
            class: "text-decoration-none",
            style: { "color": "var(--info)" }
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["to"])
        ]),
        _: 3
      });
    };
  }
});
export {
  _sfc_main as _
};
