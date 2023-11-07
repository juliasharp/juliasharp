export function lerp(min, max, t) {
  return min * (1 - t) + max * t;
}

export function damp(a, b, lambda) {
  return lerp(a, b, 1 - Math.exp(-lambda));
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
