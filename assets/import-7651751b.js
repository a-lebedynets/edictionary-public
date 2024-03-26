import { g as defineComponent, j as inject, i as ref, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, a as createVNode, w as withCtx, d as createTextVNode, F as Fragment, s as storageKey, l } from "./index-2f9eae48.js";
import { _ as _sfc_main$1 } from "./confirm-dialog.vue_vue_type_script_setup_true_lang-f9f7a8a2.js";
const _hoisted_1 = { class: "d-flex flex-column justify-center h-100 mx-auto w-50" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "After import whole data will be removed.", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Export your data if you want to save it.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "import",
  setup(__props) {
    const storage = inject(storageKey);
    const files = ref([]);
    const confirmDialogRef = ref(null);
    async function openDialog() {
      confirmDialogRef.value?.openDialog({
        text: "Are you sure you want to import data? All existing data will be removed."
      });
    }
    function importData() {
      if (!files.value.length)
        return;
      const reader = new FileReader();
      reader.onload = async (event) => {
        const result = event.target?.result;
        try {
          if (typeof result !== "string")
            return;
          const data = JSON.parse(result);
          if (data.sets && data.words && data.setsWithWords) {
            await storage?.common.importData(data);
            l("Data has been imported successfully", { type: "success" });
          }
        } catch (error) {
          console.error(error);
        } finally {
          confirmDialogRef.value?.closeDialog();
        }
      };
      reader.readAsText(files.value[0]);
    }
    return (_ctx, _cache) => {
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_file_input = resolveComponent("v-file-input");
      const _component_v_btn = resolveComponent("v-btn");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_v_alert, {
            type: "error",
            class: "flex-grow-0 mb-6 justify-space-between",
            style: { "flex": "auto" }
          }, {
            default: withCtx(() => [
              _hoisted_2,
              _hoisted_3
            ]),
            _: 1
          }),
          createVNode(_component_v_file_input, {
            modelValue: files.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => files.value = $event),
            accept: ".json, application/json",
            label: "Upload file",
            class: "flex-grow-0"
          }, null, 8, ["modelValue"]),
          createVNode(_component_v_btn, {
            disabled: !files.value.length,
            class: "flex-grow-0",
            onClick: openDialog
          }, {
            default: withCtx(() => [
              createTextVNode(" Import data ")
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        createVNode(_sfc_main$1, {
          ref_key: "confirmDialogRef",
          ref: confirmDialogRef,
          width: "400px",
          onConfirm: importData
        }, null, 512)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
