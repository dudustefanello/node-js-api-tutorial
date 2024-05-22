var Helpers;
(function (Helpers) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return useful;
    }());
    Helpers.useful = useful;
})(Helpers || (Helpers = {}));
/// <reference path="helpers.ts"/>
var use = new Helpers.useful();
console.log(use.timesTwo(9));
