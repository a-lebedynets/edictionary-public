import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, w as withCtx, b as createBaseVNode, m as mergeProps, d as createTextVNode } from "./index-2fa88c03.js";
const _sfc_main = {};
const _hoisted_1 = { class: "d-flex flex-column align-center justify-center ga-4" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h3", null, "How to use:", -1);
function _sfc_render(_ctx, _cache) {
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_hover = resolveComponent("v-hover");
  const _component_router_link = resolveComponent("router-link");
  const _component_v_icon = resolveComponent("v-icon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_router_link, {
      to: { name: "words" },
      class: "w-50 text-decoration-none"
    }, {
      default: withCtx(() => [
        createVNode(_component_v_hover, null, {
          default: withCtx(({ isHovering, props }) => [
            createVNode(_component_v_card, mergeProps(props, {
              color: isHovering ? "primary" : void 0
            }), {
              default: withCtx(() => [
                createVNode(_component_v_card_text, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("Add new words")
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1040, ["color"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_v_icon, { icon: "mdi-arrow-down" }),
    createVNode(_component_router_link, {
      to: { name: "sets" },
      class: "w-50 text-decoration-none"
    }, {
      default: withCtx(() => [
        createVNode(_component_v_hover, null, {
          default: withCtx(({ isHovering, props }) => [
            createVNode(_component_v_card, mergeProps(props, {
              color: isHovering ? "primary" : void 0
            }), {
              default: withCtx(() => [
                createVNode(_component_v_card_text, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("Create set")
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1040, ["color"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_v_icon, { icon: "mdi-arrow-down" }),
    createVNode(_component_router_link, {
      to: { name: "practice" },
      class: "w-50 text-decoration-none"
    }, {
      default: withCtx(() => [
        createVNode(_component_v_hover, null, {
          default: withCtx(({ isHovering, props }) => [
            createVNode(_component_v_card, mergeProps(props, {
              color: isHovering ? "primary" : void 0
            }), {
              default: withCtx(() => [
                createVNode(_component_v_card_text, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("Practice")
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1040, ["color"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const start = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  start as default
};
