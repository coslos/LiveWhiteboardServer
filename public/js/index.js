/**
 * Created by bhavyaagg on 11/01/18.
 */

'use strict';
//
// (function () {
//
//
//   canvas.addEventListener('mousedown', onMouseDown);
//   canvas.addEventListener('mouseup', onMouseUp);
//   canvas.addEventListener('mouseout', onMouseUp);
//   canvas.addEventListener('mousemove', throttle(onMouseMove, 10));
//
//   for (var i = 0; i < colors.length; i++) {
//     colors[i].addEventListener('click', onColorUpdate, false);
//   }
//
//
//   socket.on('drawing', onDrawingEvent);
//
//
// })();

$(document).ready(function () {
  console.log(1)
  const socket = io();
  const canvas = document.getElementById('whiteboard');
  const colors = document.getElementsByClassName('color');
  const context = canvas.getContext('2d');

  let current = {
    color: 'black'
  };
  let drawing = false;

  $(window).resize(onResize)
  onResize();

  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseout', onMouseUp);
  canvas.addEventListener('mousemove', throttle(onMouseMove, 10));

  for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', onColorUpdate, false);
  }

  socket.on('drawing', onDrawingEvent);


  function drawLine(x0, y0, x1, y1, color, emit) {
    y0 -= 50;
    y1 -= 50;
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.strokeStyle = color;
    context.lineWidth = 2;
    context.stroke();
    context.closePath();

    if (!emit) {
      return;
    }
    let w = canvas.width;
    let h = canvas.height;

    socket.emit('drawing', {
      x0: x0 / w,
      y0: y0 / h,
      x1: x1 / w,
      y1: y1 / h,
      color: color
    });
  }

  function onMouseDown(e) {
    drawing = true;
    current.x = e.clientX;
    current.y = e.clientY;
  }

  function onMouseUp(e) {
    if (!drawing) {
      return;
    }
    drawing = false;
    drawLine(current.x, current.y, e.clientX, e.clientY, current.color, true);
  }

  function onMouseMove(e) {
    if (!drawing) {
      return;
    }
    drawLine(current.x, current.y, e.clientX, e.clientY, current.color, true);
    current.x = e.clientX;
    current.y = e.clientY;
  }

  function onColorUpdate(e) {
    current.color = e.target.className.split(' ')[1];
  }

  // limit the number of events per second
  function throttle(callback, delay) {
    let previousCall = new Date().getTime();
    return function () {
      let time = new Date().getTime();

      if ((time - previousCall) >= delay) {
        previousCall = time;
        callback.apply(null, arguments);
      }
    };
  }

  function onDrawingEvent(data) {
    let w = canvas.width;
    let h = canvas.height;
    drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
  }

  // make the canvas fill its parent
  function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});
