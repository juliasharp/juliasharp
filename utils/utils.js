export function createTextCanvas({ text, fontSize, width, height }) {
  var textCtx = document.createElement('canvas').getContext('2d');

  textCtx.save();

  textCtx.canvas.width = width;
  textCtx.canvas.height = height;

  textCtx.clearRect(0, 0, textCtx.canvas.width, textCtx.canvas.height);

  textCtx.font = `700 ${fontSize}px Montserrat`;
  textCtx.textAlign = 'center';
  textCtx.textBaseline = 'middle';

  textCtx.fillStyle = 'white';
  textCtx.fillRect(0, 0, width, height);

  textCtx.fillStyle = 'black';
  textCtx.fillText(text, width / 2, height / 2);

  textCtx.restore();

  return textCtx.canvas;
}