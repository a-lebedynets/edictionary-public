import { g as defineComponent, k as useDisplay, j as inject, i as ref, z as computed, p as onMounted, r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, b as createBaseVNode, F as Fragment, h as renderList, u as unref, s as storageKey, e as createBlock, w as withCtx, m as mergeProps, d as createTextVNode, t as toDisplayString, O as normalizeStyle } from "./index-b4ccc58a.js";
import { u as useFilterByKey } from "./use-filter-by-key-a33f1baf.js";
const _hoisted_1 = { class: "d-flex flex-column h-100" };
const _hoisted_2 = {
  class: "d-flex flex-row flex-wrap ga-3 w-100 pa-1",
  style: { "overflow-y": "auto" }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "practice-sets",
  setup(__props) {
    const { smAndDown } = useDisplay();
    const storage = inject(storageKey);
    const sets = ref([]);
    const filterValue = ref("");
    const filteredSets = useFilterByKey({ filterValue, key: "name", list: sets });
    const itemStyle = computed(
      () => `max-width: ${smAndDown.value ? "100%; width: 100% !important" : "calc(100% / 3 - 6px)"};`
    );
    onMounted(async () => {
      sets.value = await storage?.set.getSets() || [];
    });
    return (_ctx, _cache) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_hover = resolveComponent("v-hover");
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_v_text_field, {
          modelValue: filterValue.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filterValue.value = $event),
          name: "name",
          label: "Search",
          clearable: "",
          class: "flex-grow-0"
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredSets), (item) => {
            return openBlock(), createBlock(_component_router_link, {
              key: item.id,
              to: { name: "testing", params: { id: item.id } },
              class: "w-25 text-decoration-none flex-grow-1",
              style: normalizeStyle(itemStyle.value)
            }, {
              default: withCtx(() => [
                createVNode(_component_v_hover, null, {
                  default: withCtx(({ isHovering, props }) => [
                    createVNode(_component_v_card, mergeProps(props, {
                      color: isHovering ? "primary" : void 0,
                      class: "cursor-pointer"
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.count) + " words ", 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1040, ["color"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["to", "style"]);
          }), 128))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
