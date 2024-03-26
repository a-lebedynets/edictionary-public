import { g as defineComponent, j as inject, r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, w as withCtx, d as createTextVNode, s as storageKey } from "./index-63eb1cfb.js";
function saveDataIntoJSON(data, name = "dictionary-data") {
  const formattedData = JSON.stringify(data);
  const blob = new Blob([formattedData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${name}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
const _hoisted_1 = { class: "d-flex flex-column align-center justify-center h-100 w-50 mx-auto" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "export",
  setup(__props) {
    const storage = inject(storageKey);
    async function exportData() {
      const setsWithWords = await storage?.sets.getDataForExport();
      const sets = await storage?.set.getDataForExport();
      const words = await storage?.word.getDataForExport();
      saveDataIntoJSON({
        sets,
        words,
        setsWithWords
      });
    }
    return (_ctx, _cache) => {
      const _component_v_btn = resolveComponent("v-btn");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_v_btn, { onClick: exportData }, {
          default: withCtx(() => [
            createTextVNode("Export data")
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
