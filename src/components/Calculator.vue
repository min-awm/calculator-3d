<script setup>
import { ref, watch } from "vue";
import { TresCanvas } from "@tresjs/core";
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from "three";
import {
  OrbitControls,
  Html,
  useGLTF,
  Stats,
  Environment,
} from "@tresjs/cientos";
import CalcMath from "@/services/calculator-math.js";
import gsap from "gsap";

const resultText = ref(0);
const gl = {
  clearColor: "#82DBC5",
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};
const calcMath = new CalcMath();
const { nodes } = await useGLTF("./model/calculator/scene.gltf");
const calculatorRef = ref(null);

watch(calculatorRef, (newValue, oldValue) => {
  if (newValue) {
    gsap.to(newValue.rotation, {
      duration: 4,
      y: 180 * (Math.PI / 180),
    });
  }
});

const pressKey = (key) => {
  const screenResultDom = document.getElementById("sceen-result");
  if (screenResultDom) {
    screenResultDom.scrollLeft = screenResultDom.scrollWidth;
  }
  resultText.value = calcMath.calc(key);
};
</script>

<template>
  <TresCanvas v-bind="gl">
    <Stats />
    <Environment :background="true" preset="sunset" :blur="0.8" />
    <TresPerspectiveCamera :position="[0, 0.75, -1.5]" />
    <OrbitControls />
    <primitive
      :object="nodes.Calculator"
      :scale-x="0.001"
      :scale-y="0.001"
      :scale-z="0.001"
      :rotation-x="5 * (Math.PI / 180)"
      :position="[0, 0, 0]"
      ref="calculatorRef"
    >
      <Html
        transform
        wrapper-class="webpage"
        :distance-factor="11"
        :position="[0, -12, 70]"
        occlude
        :scale-x="50"
        :scale-y="50"
        :scale-z="50"
      >
        <div class="calculator-wrapper">
          <div id="sceen-result" v-html="resultText"></div>
          <button class="button button1" @click="pressKey('mc')"></button>
          <button class="button button2" @click="pressKey('m+')"></button>
          <button class="button button3" @click="pressKey('/')"></button>
          <button class="button button4" @click="pressKey('*')"></button>
          <button class="button button5" @click="pressKey(7)"></button>
          <button class="button button6" @click="pressKey(8)"></button>
          <button class="button button7" @click="pressKey(9)"></button>
          <button class="button button8" @click="pressKey('+')"></button>
          <button class="button button9" @click="pressKey(4)"></button>
          <button class="button button10" @click="pressKey(5)"></button>
          <button class="button button11" @click="pressKey(6)"></button>
          <button class="button button12" @click="pressKey('-')"></button>
          <button class="button button13" @click="pressKey('1')"></button>
          <button class="button button14" @click="pressKey('2')"></button>
          <button class="button button15" @click="pressKey('3')"></button>
          <button class="button button16" @click="pressKey('=')"></button>
          <button class="button button17" @click="pressKey('0')"></button>
          <button class="button button18" @click="pressKey('.')"></button>
        </div>
      </Html>
    </primitive>
    <TresAmbientLight :intensity="1" />
    <TresDirectionalLight
      :intensity="2"
      :position="[2, 3, 0]"
      :cast-shadow="true"
      :shadow-camera-far="50"
      :shadow-camera-left="-10"
      :shadow-camera-right="10"
      :shadow-camera-top="10"
      :shadow-camera-bottom="-10"
    />
  </TresCanvas>
</template>

<style scoped>
.calculator-wrapper {
  width: 560px;
  height: 730px;
}

.calculator-wrapper .button {
  background: none;
  border: none;
  outline: none;
}

.calculator-wrapper .button:focus {
  background-color: rgba(202, 196, 196, 0.26);
}

.calculator-wrapper .button1 {
  width: 120px;
  height: 70px;
  position: absolute;
  top: 205px;
  left: 10px;
}

.calculator-wrapper #sceen-result {
  position: absolute;
  top: 40px;
  left: 10px;
  font-family: "Digital Numbers";
  font-size: 70px;
  width: 540px;
  height: 100px;
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  text-align: right;
  white-space: nowrap;
}

.calculator-wrapper #sceen-result::-webkit-scrollbar {
  display: none;
}

.calculator-wrapper .button2 {
  width: 120px;
  height: 70px;
  position: absolute;
  top: 205px;
  left: 150px;
}

.calculator-wrapper .button3 {
  width: 120px;
  height: 70px;
  position: absolute;
  top: 205px;
  left: 290px;
}

.calculator-wrapper .button4 {
  width: 120px;
  height: 70px;
  position: absolute;
  top: 205px;
  left: 430px;
}

.calculator-wrapper .button5 {
  width: 120px;
  height: 82px;
  position: absolute;
  top: 310px;
  left: 10px;
}

.calculator-wrapper .button6 {
  width: 120px;
  height: 82px;
  position: absolute;
  top: 310px;
  left: 150px;
}

.calculator-wrapper .button7 {
  width: 120px;
  height: 82px;
  position: absolute;
  top: 310px;
  left: 290px;
}

.calculator-wrapper .button8 {
  width: 120px;
  height: 82px;
  position: absolute;
  top: 310px;
  left: 430px;
}

.calculator-wrapper .button9 {
  width: 120px;
  height: 84px;
  position: absolute;
  top: 420px;
  left: 10px;
}

.calculator-wrapper .button10 {
  width: 120px;
  height: 84px;
  position: absolute;
  top: 420px;
  left: 150px;
}

.calculator-wrapper .button11 {
  width: 120px;
  height: 84px;
  position: absolute;
  top: 420px;
  left: 290px;
}

.calculator-wrapper .button12 {
  width: 120px;
  height: 84px;
  position: absolute;
  top: 420px;
  left: 430px;
}

.calculator-wrapper .button13 {
  width: 120px;
  height: 84px;
  position: absolute;
  top: 532px;
  left: 10px;
}

.calculator-wrapper .button14 {
  width: 120px;
  height: 84px;
  position: absolute;
  top: 532px;
  left: 150px;
}

.calculator-wrapper .button15 {
  width: 120px;
  height: 84px;
  position: absolute;
  top: 532px;
  left: 290px;
}

.calculator-wrapper .button16 {
  width: 120px;
  height: 198px;
  position: absolute;
  top: 532px;
  left: 430px;
}

.calculator-wrapper .button17 {
  width: 260px;
  height: 84px;
  position: absolute;
  top: 642px;
  left: 10px;
}

.calculator-wrapper .button18 {
  width: 120px;
  height: 84px;
  position: absolute;
  top: 642px;
  left: 290px;
}
</style>
