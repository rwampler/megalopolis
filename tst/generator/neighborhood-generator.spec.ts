import { assert, test } from 'vitest';

import { NeighborhoodGenerator } from '../../src/index.js';

test('NeighborhoodGenerator #generate should generate names', async () => {
  assert.isString(NeighborhoodGenerator.generate());
  assert.strictEqual(NeighborhoodGenerator.generate('some seed'), 'New Warren');
  assert.strictEqual(NeighborhoodGenerator.generate('some seed 2'), 'Victory Plaza');
  assert.strictEqual(NeighborhoodGenerator.generate('some seed 3'), 'Midnight Arlington');
  assert.strictEqual(NeighborhoodGenerator.generate('some seed 4'), 'Shadow Cave');
});
