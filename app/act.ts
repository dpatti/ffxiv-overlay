export type LogLine = string;

export interface StateUpdate {
  isLocked: boolean;
}

export interface DataUpdate {
  Encounter: {
    title: string;
    DURATION: string;
    damage: string;
    encdps: string;
    healed: string;
    enchps: string;
    deaths: string;
    maxhit: string;
    maxheal: string;
  };
  Combatant: {
    [name: string]: {
      name: string;
      Job: string;
      ["crithit%"]: string;
      DirectHitPct: string;
      CritDirectHitPct: string;
      ["critheal%"]: string;
      damage: string;
      encdps: string;
      ["damage%"]: string;
      healed: string;
      enchps: string;
      ["healed%"]: string;
      OverHealPct: string;
      damagetaken: string;
      ParryPct: string;
      BlockPct: string;
      deaths: string;
      maxhit: string;
      maxheal: string;
    };
  };
  isActive: "true" | "false";
}
