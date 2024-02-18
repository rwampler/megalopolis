
import seedrandom from 'seedrandom';

import { NameGenerator } from './name-generator.js';

const NAME_SEGMENTS: Array<Array<string | undefined>> = [
  [
    'adjective.size',
    'adjective.location',
    'adjective.status',
    'noun.direction',
  ],
  [
    undefined,
    undefined,
    undefined,
    'noun.color',
    'noun.color',
    'noun.color',
    'noun.direction',
    'noun.lightDisplay',
    'noun.tree'
  ],
  [
    'noun.animal',
    'noun.building',
    'noun.familyName',
    'noun.geography',
    'noun.geography',
    'noun.geography',
    'noun.geography',
    'noun.geography',
    'noun.lightDisplay',
    'noun.tree'
  ]
];

export interface NeighborhoodGeneratorOptions {
  /**
   * Seed to control random number generator, enabling predictable generation
   */
  seed?: string | undefined;

  /**
   * Array of name segments, with each segment an array of permitted word library keys. Undefined keys will be skipped
   */
  segments?: Array<Array<string | undefined>> | undefined;
}

export class NeighborhoodGenerator {

  static generate (options: NeighborhoodGeneratorOptions | undefined = undefined): string {
    const rng = options?.seed ? seedrandom(options.seed) : Math.random;
    const segments = options?.segments ?? NAME_SEGMENTS;
    return NameGenerator.generate(rng, segments);
  }

}
