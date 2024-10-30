
function Discriminant(a : number ,b : number ,c : number) : number{
    return (b ** 2 - 4 * a * c)
}
// ax**2 + bx + c
const args = Deno.args;
if (args.length < 2) {
    Deno.exit(1); 
}
const a = Number(args[0]); 
const b = Number(args[1]);
const c = Number(args[2]);
let x1 : number = 0;
let x2 : number = 0;


if (a != 0){
    let D : number = Discriminant(a , b , c)
    if (D > 0){
        x1 = (-b + D ** 0.5) / (2 * a)
        x2 = (-b - D ** 0.5) / (2 * a)
        console.log(x1 , x2)
    }else if ( D === 0){
        x1 = -b / (2 * a)
        console.log(x1)
    }else{
        console.log('Уравнение не имеет прикоснавений с Ox')
    }
} else {
    x1 = -(c / b)
    console.log(x1)
}