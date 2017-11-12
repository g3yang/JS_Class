"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
    function Circle(r) {
        _classCallCheck(this, Circle);

        this.r = r;
    }

    _createClass(Circle, [{
        key: "getArea",
        value: function getArea() {
            return Math.PI * Math.pow(this.r, 2);
        }
    }, {
        key: "getPerimeter",
        value: function getPerimeter() {
            return 2 * Math.PI * this.r;
        }
    }]);

    return Circle;
}();

exports.default = Circle;