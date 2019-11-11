"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}!function(){var e=function(){function e(){_classCallCheck(this,e),this._storage=new Map,this._redrawController=this._redrawController.bind(this)}return _createClass(e,[{key:"setSvg",value:function(e,t){var r=e.getElementsByTagName("use")[0];this._storage.set(e,{controlObj:t,use:r,redrawPoint:-1/0}),this._initSvgAdaptive()}},{key:"_initSvgAdaptive",value:function(){document.addEventListener("DOMContentLoaded",this._redrawController),window.addEventListener("resize",this._redrawController)}},{key:"_getWindowsWidth",value:function(){var e=document.querySelector("body");e.style.overflow="hidden";var t=document.documentElement.clientWidth;return e.style.overflow="",t}},{key:"_redrawController",value:function(){var s=this,l=this._getWindowsWidth();this._storage.forEach(function(e){var t=e.controlObj,r=e.use,o=e.redrawPoint;if(!(l<o)){for(var n=0,i=Object.keys(t);n<i.length;n++){var a=i[n];+a<=l&&(o=+a)}s._redrawSvg({controlObj:t,use:r,redrawPoint:o})}})}},{key:"_redrawSvg",value:function(e){var t=e.use,r=e.controlObj,o=e.redrawPoint;t.setAttribute("xlink:href",r[o])}}]),e}();window.SvgAdaptive=e}(),function(){var e=window.SvgAdaptive,t=document.querySelector(".main-navigation__logo-image"),r=document.querySelector(".footer__logo"),o=new e;o.setSvg(t,{960:"./image/spriteSVG/sprite.svg#logotype-desktop",660:"./image/spriteSVG/sprite.svg#logotype-tablet",0:"./image/spriteSVG/sprite.svg#logotype-mobile"}),o.setSvg(r,{960:"./image/spriteSVG/sprite.svg#logotype-desktop-footer",660:"./image/spriteSVG/sprite.svg#logotype-tablet-footer"})}(),function(){function e(){document.querySelector(".main-navigation").classList.toggle("close")}e(),document.querySelector(".toggler").addEventListener("click",e)}();