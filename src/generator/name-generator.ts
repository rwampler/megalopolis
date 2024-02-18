import { WORDS } from '../utils/words.js';

export class NameGenerator {

  static generate (rng: () => number, segments: Array<Array<string | undefined>>): string {
    const name = [];
    const chosenKeys = new Set<string>();
    for (const segmentKeys of segments) {
      const availableKeys: Array<string | undefined> = segmentKeys.filter((x: string | undefined) => !x || !chosenKeys.has(x));
      const key: string | undefined = availableKeys[Math.floor(rng() * availableKeys.length)];
      if (!key) {
        // skip segment when choosing undefined key
        continue;
      }

      const wordChoices = WORDS.get(key) ?? [];
      if (wordChoices.length) {
        name.push(wordChoices[Math.floor(rng() * wordChoices.length)])
        chosenKeys.add(key);
      }
    }
    return name.join(' ');
  }

}
