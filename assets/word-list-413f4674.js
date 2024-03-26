import { g as defineComponent, k as useRouter, j as inject, i as ref, n as onMounted, r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, w as withCtx, u as unref, m as mergeProps, b as createBaseVNode, d as createTextVNode, t as toDisplayString, F as Fragment, h as renderList, e as createBlock, f as createCommentVNode, s as storageKey } from "./index-2f9eae48.js";
import { _ as _sfc_main$1 } from "./confirm-dialog.vue_vue_type_script_setup_true_lang-f9f7a8a2.js";
import { u as useFilterByKey } from "./use-filter-by-key-b1c58ff4.js";
import { _ as _sfc_main$2 } from "./speak.vue_vue_type_script_setup_true_lang-4b64f790.js";
import { _ as _sfc_main$3 } from "./link-chip.vue_vue_type_script_setup_true_lang-be6326e8.js";
const _hoisted_1 = { class: "d-flex flex-column h-100" };
const _hoisted_2 = { class: "d-flex align-center w-100" };
const _hoisted_3 = { class: "d-flex justify-space-between align-center w-100" };
const _hoisted_4 = { class: "d-flex flex-column" };
const _hoisted_5 = { class: "ga-2" };
const _hoisted_6 = { class: "text-caption" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "word-list",
  setup(__props) {
    const router = useRouter();
    const storage = inject(storageKey);
    const confirmDialogRef = ref(null);
    const words = ref([]);
    const filterValue = ref("");
    const filteredWords = useFilterByKey({ filterValue, key: "word", list: words });
    async function confirmDelete(options) {
      await deleteWord(options.data.id);
      options.closeDialog();
    }
    async function deleteWord(id) {
      await storage?.word.deleteWord(id);
      words.value = words.value.filter((w) => w.id !== id);
    }
    function select(word, params) {
      if (params.id === "edit")
        router.push({ name: "edit-word", params: { id: word.id } });
      if (params.id === "delete")
        confirmDialogRef.value?.openDialog({
          data: word,
          text: `Are you sure you want to delete "${word.word}"?`
        });
    }
    onMounted(async () => {
      words.value = await storage?.word.getWords() || [];
    });
    return (_ctx, _cache) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_hover = resolveComponent("v-hover");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_RecycleScroller = resolveComponent("RecycleScroller");
      const _component_v_card = resolveComponent("v-card");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, {
          ref_key: "confirmDialogRef",
          ref: confirmDialogRef,
          onConfirm: confirmDelete
        }, null, 512),
        createVNode(_component_v_text_field, {
          modelValue: filterValue.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filterValue.value = $event),
          name: "name",
          label: "Search",
          clearable: "",
          class: "flex-grow-0"
        }, null, 8, ["modelValue"]),
        createVNode(_component_v_card, { class: "d-flex flex-col" }, {
          default: withCtx(() => [
            createVNode(_component_RecycleScroller, {
              items: unref(filteredWords),
              "item-size": 60,
              "key-field": "id",
              class: "flex-grow-1"
            }, {
              default: withCtx(({ item, index }) => [
                createVNode(_component_v_hover, null, {
                  default: withCtx(({ isHovering, props }) => [
                    createVNode(_component_v_list_item, mergeProps(props, {
                      class: isHovering ? "bg-primary" : void 0,
                      height: 60
                    }), {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_2, [
                          createBaseVNode("div", _hoisted_3, [
                            createBaseVNode("span", _hoisted_4, [
                              createBaseVNode("span", _hoisted_5, [
                                createVNode(_sfc_main$2, {
                                  text: item.word,
                                  type: "icon"
                                }, null, 8, ["text"]),
                                createTextVNode(" " + toDisplayString(item.word) + " ", 1),
                                (openBlock(true), createElementBlock(Fragment, null, renderList(item.sets, (s, i) => {
                                  return openBlock(), createBlock(_sfc_main$3, {
                                    key: i,
                                    to: { name: "edit-set", params: { id: s.id } }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(s.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 128))
                              ]),
                              createBaseVNode("span", _hoisted_6, "[" + toDisplayString(item.transcription) + "]", 1)
                            ]),
                            createBaseVNode("span", null, toDisplayString(item.translation), 1)
                          ]),
                          createVNode(_component_v_menu, null, {
                            activator: withCtx(({ props: props2 }) => [
                              createVNode(_component_v_icon, mergeProps(props2, { icon: "mdi-dots-vertical" }), null, 16)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, {
                                "onClick:select": ($event) => select(item, $event)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, { value: "edit" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Edit")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, { value: "delete" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Delete")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick:select"])
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 2
                    }, 1040, ["class"])
                  ]),
                  _: 2
                }, 1024),
                words.value.length - 1 !== index ? (openBlock(), createBlock(_component_v_divider, { key: 0 })) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["items"])
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
