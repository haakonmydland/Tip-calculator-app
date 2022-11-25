export function onlyNumber(target: any) {
  target.value = target.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*?)\..*/g, "$1");
}
export function numberWithSpace(x: number) {
  if (isNaN(x)) {
    return "0.00";
  } else {
    return x
      .toFixed(2)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
  }
}
