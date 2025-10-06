
export function cn(...args) {
  return args
    .flatMap((arg) => {
      if (!arg) return [];
      if (typeof arg === "string") return [arg];
      if (Array.isArray(arg)) return arg;
      if (typeof arg === "object") {
        return Object.keys(arg).filter((k) => arg[k]);
      }
      return [];
    })
    .filter(Boolean)
    .join(" ");
}
