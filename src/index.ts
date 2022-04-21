export function fun() {
  return 1;
}
export function co() {}
export function transver(num, flag) {
  const arr: any = [];
  while (num > 0) {
    let n = Math.floor(num % flag);
    arr.push(n);
    num = Math.floor(num / flag);
  }
  return arr.reverse().join("");
}

export function EventEmitter () {

}