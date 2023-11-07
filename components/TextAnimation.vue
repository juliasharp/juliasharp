<script setup>
import {
  Renderer,
  Camera,
  Transform,
  Geometry,
  Program,
  Mesh,
  Color,
  Texture,
} from 'ogl';
import { createTextCanvas } from '@/utils/utils';
import { damp, clamp } from '@/utils/math';

const fontSizes = {
  large: 120,
  medium: 90,
  small: 68,
};

const size = 'medium';

const state = reactive({
  settings: {
    ratio: 0,
    distortionRatio: 0,
  },
  isMouseOver: false,
  width: 0,
  height: 0,
  renderer: null,
  gl: null,
  camera: null,
  scene: null,
  program: null,
  mousePosition: {
    x: 0,
    y: 0,
  },
  smoothedMousePosition: {
    x: 0,
    y: 0,
  },
});

const canvasRef = ref(null);

const init = () => {
  const parentWidth = canvasRef.value.parentNode.offsetWidth;
  const parentHeight = canvasRef.value.parentNode.offsetHeight;
  //device pixel ratio
  const dpr = clamp(window.devicePixelRatio, 1, 2) * 2;

  state.width = parentWidth;
  state.height = parentHeight;

  state.renderer = new Renderer({
    canvas: canvasRef.value,
    width: state.width,
    height: state.height,
    antialias: true,
    alpha: false,
    dpr,
  });

  state.gl = state.renderer.gl;
  state.gl.clearColor(1.0, 1.0, 1.0, 1.0);

  state.camera = new Camera(state.gl, { fov: 35 });
  state.camera.position.set(0, 0, 0);
  state.camera.lookAt([0, 0, 0]);

  initMouse();
  resize();

  state.scene = new Transform();

  const fontSize = fontSizes[size];

  const canvasText = createTextCanvas({
    text: 'Hello',
    fontSize,
    width: state.width,
    height: state.height,
  });

  const texture = new Texture(state.gl, { generateMipmaps: false });
  const img = new Image();
  img.src = canvasText.toDataURL();
  img.onload = () => (texture.image = img);

  const geometry = new Geometry(state.gl, {
    position: {
      size: 3,
      data: new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
    },
    uv: {
      size: 2,
      data: new Float32Array([0, 0, 2, 0, 0, 2]),
    },
  });

  state.program = new Program(state.gl, {
    vertex: vaporVertex,
    fragment: vaporFragment,
    uniforms: {
      uTime: { value: 0 },
      uRatio: { value: state.settings.ratio },
      uMaskRatio: { value: 0 },
      uDistortionRatio: { value: state.settings.distortionRatio },
      uMouseCoord: { value: [state.mousePosition.x, state.mousePosition.y] },
      tMap: { value: texture },
    },
  });

  const mesh = new Mesh(state.gl, { geometry, program: state.program });
  mesh.setParent(state.scene);

  requestAnimationFrame(update);
}

const initMouse = () => {
  const elOffset = canvasRef.value.getBoundingClientRect();
  state.centerMousePosition = {
    x: elOffset.left + elOffset.width / 2,
    y: elOffset.top + elOffset.height / 2,
  };

  state.mousePosition = { ...state.centerMousePosition };
  state.smoothedMousePosition = { ...state.mousePosition };
};

const update = (t) => {
  requestAnimationFrame(update);

  state.program.uniforms.uTime.value = t * 0.001;

  updateMouse();

  state.renderer.render({
    scene: state.scene,
    camera: state.camera,
  });
};

const updateMouse = () => {
  const smoothSpeed = 0.045;

  state.smoothedMousePosition.x = damp(
    state.smoothedMousePosition.x,
    state.mousePosition.x,
    smoothSpeed
  );

  state.smoothedMousePosition.y = damp(
    state.smoothedMousePosition.y,
    state.mousePosition.y,
    smoothSpeed
  );

  const mouseCoords = mouseToCoords(state.smoothedMousePosition);
  state.program.uniforms.uMouseCoord.value = [mouseCoords.x, mouseCoords.y];
};

const resize = () => {
  // Implement your resize logic here if needed
};

const handleMovement = (e) => {
  if (!state.isMouseOver) {
    return;
  }

  state.mousePosition.x = e.clientX;
  state.mousePosition.y = e.clientY;
};

const onMouseEnter = (e) => {
  state.isMouseOver = true;

  const tl = new TweenMax.timeline();

  tl.to(state.program.uniforms.uDistortionRatio, 1.4, {
    value: 1.0,
    ease: Cubic.easeOut,
  });

  tl.to(
    state.program.uniforms.uMaskRatio,
    1,
    { value: 1.0, ease: Quart.easeOut },
    0
  );
};

const onMouseLeave = (e) => {
  state.isMouseOver = false;

  const tl = new TweenMax.timeline();

  tl.to(state.program.uniforms.uDistortionRatio, 1.4, {
    value: 0,
    ease: Expo.easeOut,
  });

  tl.to(
    state.program.uniforms.uMaskRatio,
    1,
    { value: 0, ease: Cubic.easeInOut },
    0
  );

  state.mousePosition = { ...state.centerMousePosition };
};

const mouseToCoords = (mousePosition) => {
  const { x, y } = mousePosition;
  const offset = canvasRef.value.getBoundingClientRect();
  const coords = {
    x: ((x - offset.left) / state.width) * 2 - 1,
    y: 1 - ((y - offset.top) / state.height) * 2,
  };
  return coords;
};

onMounted(init);
onUnmounted(() => {
  // Clean up any resources if needed
});

</script>

<template>
  <div style="width: 300px; height: 60px;">
    <canvas ref="canvasRef" class="canvas"/>
  </div>
</template>

<style>
.canvas {
  width: 100%;
  height: 100%;
}
</style>