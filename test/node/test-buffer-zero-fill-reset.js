define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
'use strict';
var Buffer = require('buffer/../').Buffer;



var assert = require('assert');


function testUint8Array(ui) {
  var length = ui.length;
  for (var i = 0; i < length; i++)
    if (ui[i] !== 0) return false;
  return true;
}


for (var i = 0; i < 100; i++) {
  Buffer.alloc(0);
  var ui = new Uint8Array(65);
  assert.ok(testUint8Array(ui), 'Uint8Array is not zero-filled');
}


return module.exports;});
