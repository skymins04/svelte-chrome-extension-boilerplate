/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { afterUpdate, onDestroy } from 'svelte';

export function useEffect(cb: () => any, deps: () => Array<any>) {
  let cleanup: () => any;

  function apply() {
    if (cleanup) cleanup();
    cleanup = cb();
  }

  if (deps) {
    let values: any[] = [];
    afterUpdate(() => {
      const new_values = deps();
      if (new_values.some((value, i) => value !== values[i])) {
        apply();
        values = new_values;
      }
    });
  } else {
    // no deps = always run
    afterUpdate(apply);
  }

  onDestroy(() => {
    if (cleanup) cleanup();
  });
}
