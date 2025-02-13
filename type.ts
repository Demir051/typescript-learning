let a: number = 5;
let b: string = "abc";  
let c: boolean = true;
let d: any;
let e: number[] = [1, 2, 3];
let f: Array<number> = [1, 2, 3];
let g: any[] = [1, "a", true, false];
let h: [string, number] = ["a", 1];

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi = 0, havale = 1, eft = 2 , kapidaodeme = 3};

let kredi = Payment.kredi;
let havale = Payment.havale;
let eft = Payment.eft;
let kapidaodeme = Payment.kapidaodeme;
