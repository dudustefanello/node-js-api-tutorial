var isWinter = false;
var count = 5;
var aName = 'Eduardo';
var names = ['Eduardo', 26];
var Starks;
(function (Starks) {
    Starks[Starks["Eduardo"] = 0] = "Eduardo";
    Starks[Starks["Jhon"] = 1] = "Jhon";
})(Starks || (Starks = {}));
var cat = Starks.Eduardo;
function getName() {
    return 'Eduardo';
}
function consoleLog(message) {
    console.log(message);
}
