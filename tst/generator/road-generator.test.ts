import { assert, test } from 'vitest';

import { RoadGenerator } from '../../src/index.js';

test('RoadGenerator #generate should generate names', async () => {
  assert.isString(RoadGenerator.generate());
  assert.strictEqual(RoadGenerator.generate({ seed: 'some seed 1' }), 'Pine West End');
  assert.strictEqual(RoadGenerator.generate({ seed: 'some seed 2' }), 'Great Cooper Aurora Rt');
  assert.strictEqual(RoadGenerator.generate({ seed: 'some seed 3' }), 'NE Broad Magnolia Glade Autobahn');
  assert.strictEqual(RoadGenerator.generate({ seed: 'some seed 4' }), 'NE Broad Timberwolf Highway');
});
