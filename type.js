var a = 5;
var b = "abc";
var c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, "a", true, false];
var h = ["a", 1];
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["eft"] = 2] = "eft";
    Payment[Payment["kapidaodeme"] = 3] = "kapidaodeme";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi;
var havale = Payment.havale;
var eft = Payment.eft;
var kapidaodeme = Payment.kapidaodeme;
