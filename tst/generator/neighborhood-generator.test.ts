import { assert, test } from 'vitest';

import { NeighborhoodGenerator } from '../../src/index.js';

test('NeighborhoodGenerator #generate should generate names', async () => {
  assert.isString(NeighborhoodGenerator.generate());
  assert.strictEqual(NeighborhoodGenerator.generate({ seed: 'some seed 1' }), 'Narrow Viridian Vale');
  assert.strictEqual(NeighborhoodGenerator.generate({ seed: 'some seed 2' }), 'Wide Midnight');
  assert.strictEqual(NeighborhoodGenerator.generate({ seed: 'some seed 3' }), 'North Amber Magnolia');
  assert.strictEqual(NeighborhoodGenerator.generate({ seed: 'some seed 4' }), 'North Burgundy Buffalo');
});
