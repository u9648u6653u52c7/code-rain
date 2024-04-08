export function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomElement(list: string | string[]) {
  list = [...list];
  return list[getRandomInt(list.length)];
}

export function isDOM(node: unknown) {
  if (node && typeof node === "object" && "nodeType" in node) {
    return node.nodeType === 1;
  }
  return false;
}
