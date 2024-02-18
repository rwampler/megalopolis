
import seedrandom from 'seedrandom';

import { NameGenerator } from './name-generator.js';

const NAME_SEGMENTS: Array<Array<string | undefined>> = [
  [
    undefined,
    undefined,
    undefined,
    undefined,
    'noun.direction.route'
  ],
  [
    undefined,
    undefined,
    undefined,
    'adjective.size',
    'adjective.location',
    'adjective.status'
  ],
  [
    undefined,
    undefined,
    undefined,
    'noun.color',
    'noun.familyName',
    'noun.tree'
  ],
  [
    'noun.animal',
    'noun.building',
    'noun.familyName',
    'noun.geography',
    'noun.lightDisplay',
    'noun.tree'
  ],
  [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'noun.direction'
  ]
];

export interface RoadGeneratorOptions {
  /**
   * Seed to control random number generator, enabling predictable generation
   */
  seed?: string | undefined;

  /**
   * Array of name segments, with each segment an array of permitted word library keys. Undefined keys will be skipped
   */
  segments?: Array<Array<string | undefined>> | undefined;

  /**
   * Exclude standard street type suffixes; option ignored if segments provided
   */
  excludeTypesStandard?: boolean | undefined;

  /**
   * Exclude ending-street type suffixes; option ignored if segments provided
   */
  excludeTypesEnd?: boolean | undefined;

  /**
   * Exclude large street type suffixes; option ignored if segments provided
   */
  excludeTypesLarge?: boolean | undefined;
}

export class RoadGenerator {

  static generate (options: RoadGeneratorOptions | undefined = undefined): string {
    const rng = options?.seed ? seedrandom(options.seed) : Math.random;
    const suffixKeys = (options?.excludeTypesStandard ? [] : ['noun.road.street']).concat(options?.excludeTypesEnd ? [] : ['noun.road.street.end']).concat(options?.excludeTypesLarge ? [] : ['noun.road.street.large']);
    const segments = options?.segments ?? Array.from([...NAME_SEGMENTS, suffixKeys]);
    return NameGenerator.generate(rng, segments);
  }

}
