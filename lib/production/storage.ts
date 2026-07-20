import { EMPTY_PROGRESS } from "./progress";
import type { Progress } from "./types";

export interface ProgressStorage {
  load(): Progress;
  save(progress: Progress): void;
  clear(): void;
}

export const PRODUCTION_PROGRESS_KEY = "bridgepath-production-progress-v1";

export class LocalStorageProgressAdapter implements ProgressStorage {
  constructor(
    private readonly storage: Pick<Storage, "getItem" | "setItem" | "removeItem">,
    private readonly key = PRODUCTION_PROGRESS_KEY,
  ) {}

  load(): Progress {
    try {
      const saved = this.storage.getItem(this.key);
      return saved ? { ...EMPTY_PROGRESS, ...JSON.parse(saved) } : { ...EMPTY_PROGRESS };
    } catch {
      return { ...EMPTY_PROGRESS };
    }
  }

  save(progress: Progress) {
    this.storage.setItem(this.key, JSON.stringify(progress));
  }

  clear() {
    this.storage.removeItem(this.key);
  }
}
