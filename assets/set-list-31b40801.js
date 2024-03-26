import { g as defineComponent, k as useRouter, j as inject, i as ref, n as onMounted, r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, w as withCtx, u as unref, m as mergeProps, b as createBaseVNode, t as toDisplayString, d as createTextVNode, e as createBlock, f as createCommentVNode, s as storageKey, l } from "./index-69785e9f.js";
import { _ as _sfc_main$1 } from "./confirm-dialog.vue_vue_type_script_setup_true_lang-44bc35d0.js";
import { u as useFilterByKey } from "./use-filter-by-key-9d749721.js";
const _hoisted_1 = { class: "d-flex flex-column h-100" };
const _hoisted_2 = { class: "d-flex align-center w-100" };
const _hoisted_3 = { class: "d-flex justify-space-between align-center w-100" };
const _hoisted_4 = { class: "d-flex flex-column" };
const _hoisted_5 = { class: "text-caption" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "set-list",
  setup(__props) {
    const router = useRouter();
    const storage = inject(storageKey);
    const confirmDialogRef = ref(null);
    const sets = ref([]);
    const filterValue = ref("");
    const filteredSets = useFilterByKey({ filterValue, key: "name", list: sets });
    async function confirm(options) {
      if (options.data.type === "delete")
        await deleteSet(options.data.set.id);
      if (options.data.type === "copy")
        await copySet(options.data.set);
      options.closeDialog();
    }
    async function deleteSet(id) {
      await storage?.set.deleteSet(id);
      sets.value = sets.value.filter((w) => w.id !== id);
    }
    async function copySet(set) {
      try {
        if (set.id == void 0)
          return;
        const existingSet = await storage?.set.getSet(set.id);
        if (!existingSet)
          return;
        await storage?.set.addSet({
          id: void 0,
          name: existingSet.name + "-copy",
          type_ids: existingSet.type_ids,
          word_ids: existingSet.word_ids || []
        });
        l("Copy has been successfully created", { type: "success" });
        getSets();
      } catch (error) {
        console.error(error);
      }
    }
    function select(set, params) {
      if (params.id === "edit")
        router.push({ name: "edit-set", params: { id: set.id } });
      if (params.id === "delete")
        confirmDialogRef.value?.openDialog({
          data: {
            type: "delete",
            set
          },
          text: `Are you sure you want to delete "${set.name}"?`
        });
      if (params.id === "copy")
        confirmDialogRef.value?.openDialog({
          data: {
            type: "copy",
            set
          },
          text: `Are you sure you want to copy "${set.name}"?`
        });
    }
    async function getSets() {
      sets.value = await storage?.set.getSets() || [];
    }
    onMounted(async () => getSets());
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
          onConfirm: confirm
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
              items: unref(filteredSets),
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
                              createBaseVNode("span", null, toDisplayString(item.name), 1),
                              createBaseVNode("span", _hoisted_5, toDisplayString(item.count) + " words", 1)
                            ])
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
                                  createVNode(_component_v_list_item, { value: "copy" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Copy")
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
                sets.value.length - 1 !== index ? (openBlock(), createBlock(_component_v_divider, { key: 0 })) : createCommentVNode("", true)
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
