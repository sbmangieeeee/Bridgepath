import type { Evidence } from "./learning";

export type ChildProfile = {
  id: string;
  name: string;
  standard: 3 | 4 | 5;
  avatar: string;
  pin: string[];
  narration: boolean;
  reducedMotion: boolean;
};

export type BridgepathState = {
  parentEmail: string;
  consentedAt: string | null;
  familyCode: string;
  children: ChildProfile[];
  activeChildId: string | null;
  completedStops: number;
  attempts: number;
  evidence: Evidence[];
  streak: number;
  lastActiveAt: string | null;
};

export const INITIAL_STATE: BridgepathState = {
  parentEmail: "",
  consentedAt: null,
  familyCode: "PATH-326",
  children: [],
  activeChildId: null,
  completedStops: 0,
  attempts: 0,
  evidence: [],
  streak: 1,
  lastActiveAt: null,
};

const KEY = "bridgepath-pilot-state-v1";

export function loadState(): BridgepathState {
  if (typeof window === "undefined") return INITIAL_STATE;
  try {
    const saved = window.localStorage.getItem(KEY);
    return saved ? { ...INITIAL_STATE, ...JSON.parse(saved) } : INITIAL_STATE;
  } catch {
    return INITIAL_STATE;
  }
}

export function saveState(state: BridgepathState) {
  window.localStorage.setItem(KEY, JSON.stringify(state));
}

export function clearState() {
  window.localStorage.removeItem(KEY);
}
