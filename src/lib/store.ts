import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const lightModeNavbar: Writable<boolean> = writable(false);
export const activeSectionId: Writable<string | null> = writable(null);
