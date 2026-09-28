export function cn(...classes: readonly (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
