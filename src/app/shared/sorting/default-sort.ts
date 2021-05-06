import { InjectionToken } from "@angular/core";

export type SortFn = <T>(a: T, b: T) => number;

export const SORT = new InjectionToken<SortFn>('SORT', {
  providedIn: 'root',
  factory: () => defaultSort
});

export function defaultSort<T>(a: T, b: T): number {
  return 0;
}
