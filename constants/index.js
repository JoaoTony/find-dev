export function HendleLike(item) {
  if (item < 1000) {
    return item;
  } else if (item >= 1000 && item < 1000000) {
    return `${item / 1000}mil`;
  } else if (item >= 1000000 && item < 1000000000) {
    return `${item / 1000000}M`;
  } else if (item >= 1000000000) {
    return `${item / 1000000000}B`;
  }
}
