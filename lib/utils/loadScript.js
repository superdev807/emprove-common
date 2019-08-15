'use strict';

import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
export var loadScript = function loadScript(src) {
  return new Promise(function (resolve, reject) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
};
export default loadScript;