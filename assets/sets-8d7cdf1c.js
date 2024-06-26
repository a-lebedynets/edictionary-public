import { _ as _export_sfc } from "./000plugin-vue_export-helper-cc2b3d55.js";
import { r as resolveComponent, o as openBlock, c as createElementBlock, e as createBlock, w as withCtx, f as createCommentVNode, b as createBaseVNode, a as createVNode, F as Fragment, d as createTextVNode } from "./index-63eb1cfb.js";
const _sfc_main = {};
const _hoisted_1 = { class: "overflow-auto pa-1 flex-grow-1" };
function _sfc_render(_ctx, _cache) {
  const _component_v_tab = resolveComponent("v-tab");
  const _component_v_tabs = resolveComponent("v-tabs");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.$route.name !== "edit-set" ? (openBlock(), createBlock(_component_v_tabs, {
      key: 0,
      mandatory: true,
      class: "mt-n5 mb-5 flex-shrink-0"
    }, {
      default: withCtx(() => [
        createVNode(_component_v_tab, {
          to: { name: "set-list" },
          exact: ""
        }, {
          default: withCtx(() => [
            createTextVNode("All sets")
          ]),
          _: 1
        }),
        createVNode(_component_v_tab, {
          to: { name: "add-set" },
          exact: ""
        }, {
          default: withCtx(() => [
            createTextVNode("Add set")
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_router_view)
    ])
  ], 64);
}
const sets = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  sets as default
};
