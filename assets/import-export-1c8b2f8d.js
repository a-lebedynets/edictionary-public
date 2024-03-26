import { _ as _export_sfc } from "./00plugin-vue_export-helper-cc2b3d55.js";
import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, w as withCtx, b as createBaseVNode, F as Fragment, d as createTextVNode } from "./index-5372ad8c.js";
const _sfc_main = {};
const _hoisted_1 = { class: "overflow-auto pa-1 flex-grow-1" };
function _sfc_render(_ctx, _cache) {
  const _component_v_tab = resolveComponent("v-tab");
  const _component_v_tabs = resolveComponent("v-tabs");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_v_tabs, {
      mandatory: true,
      class: "mt-n5 mb-5 flex-shrink-0"
    }, {
      default: withCtx(() => [
        createVNode(_component_v_tab, {
          to: { name: "import" },
          exact: ""
        }, {
          default: withCtx(() => [
            createTextVNode("Import")
          ]),
          _: 1
        }),
        createVNode(_component_v_tab, {
          to: { name: "export" },
          exact: ""
        }, {
          default: withCtx(() => [
            createTextVNode("Export")
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_router_view)
    ])
  ], 64);
}
const importExport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  importExport as default
};
