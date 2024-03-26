import { i as ref, g as defineComponent, z as watch, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBlock, f as createCommentVNode } from "./index-5372ad8c.js";
function getVoice(voiceAttr, voiceValue) {
  let selectedVoice = null;
  const voices = speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++)
    if (voices[i][voiceAttr] == voiceValue)
      selectedVoice = voices[i];
  return selectedVoice;
}
function getEnglishVoice() {
  let currentVoice = getVoice("name", "Alex");
  if (currentVoice === void 0)
    currentVoice = getVoice("name", "Google UK English Male");
  if (currentVoice === void 0)
    currentVoice = getVoice("lang", "en-US");
  if (currentVoice === void 0)
    currentVoice = getVoice("lang", "en_US");
  return currentVoice || speechSynthesis.getVoices()[0];
}
const useSpeak = function() {
  const utterance = ref(new SpeechSynthesisUtterance());
  const currentVoice = getEnglishVoice();
  console.log(currentVoice);
  utterance.value.voice = currentVoice;
  utterance.value.lang = currentVoice?.lang || "en-US";
  function setSpeakText(text) {
    utterance.value.text = text;
  }
  return function() {
    return { utterance, setSpeakText };
  };
}();
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "speak",
  props: {
    text: {},
    type: { default: "button" }
  },
  setup(__props, { expose: __expose }) {
    const { utterance, setSpeakText } = useSpeak();
    const props = __props;
    const showSpeak = ref(true);
    watch(
      () => props.text,
      () => {
        showSpeak.value = /^[a-zA-Z-\s]+$/.test(props.text);
      },
      { immediate: true }
    );
    function speak() {
      speechSynthesis.cancel();
      setSpeakText(props.text);
      speechSynthesis.speak(utterance.value);
    }
    __expose({ speak });
    return (_ctx, _cache) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      return showSpeak.value ? (openBlock(), createElementBlock("span", _hoisted_1, [
        _ctx.$props.type === "button" ? (openBlock(), createBlock(_component_v_btn, {
          key: 0,
          size: "x-small",
          icon: "mdi-volume-high",
          onClick: speak
        })) : (openBlock(), createBlock(_component_v_icon, {
          key: 1,
          icon: "mdi-volume-high",
          onClick: speak
        }))
      ])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _
};
