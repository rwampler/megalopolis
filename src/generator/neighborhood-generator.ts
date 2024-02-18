
import seedrandom from 'seedrandom';

import { WORDS } from '../utils/words.js';

const NAME_SEGMENTS = [
  [
    'adjective.size',
    'adjective.location',
    'adjective.status',
    'noun.animal',
    'noun.color',
    'noun.direction',
    'noun.familyName',
    'noun.lightDisplay',
    'noun.tree'
  ],
  [
    'noun.animal',
    'noun.building',
    'noun.familyName',
    'noun.geography',
    'noun.lightDisplay',
    'noun.tree'
  ]
];

export class NeighborhoodGenerator {

  static generate (seed: string | undefined = undefined): string {
    const rng = seed ? seedrandom(seed) : Math.random;

    const name = [];
    const chosenKeys = new Set<string>();
    for (const segmentKeys of NAME_SEGMENTS) {
      const availableKeys = segmentKeys.filter((x: string) => !chosenKeys.has(x));
      const key = availableKeys[Math.floor(rng() * availableKeys.length)];
      chosenKeys.add(key);

      const wordChoices = WORDS.get(key) ?? [];
      if (wordChoices.length) {
        name.push(wordChoices[Math.floor(rng() * wordChoices.length)])
      }
    }

    return name.join(' ');
  }

}
