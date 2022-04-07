import forest from '../modeling/test-models/poisson-forest.js';

import invisLight from '../modeling/test-models/unit-tests/invisible-light.js';
import visLight from '../modeling/test-models/unit-tests/visible-light.js';
import camTest from '../modeling/test-models/unit-tests/camera-test.js';
import seqTest from '../modeling/test-models/unit-tests/sequential-lights.js';
import stlTreeTest from '../modeling/test-models/unit-tests/stl-tree.js';
import slowTree from '../modeling/test-models/unit-tests/json-tree1.js';

// list of available environments; the first one is the default

export const environmentsList = [
  {
    f: limitTester,
    name: 'Limit tester',
    id: 'limit-test',
  },
  {
    f: forest,
    name: 'Forest',
    id: 'forest',
  },
  {
    f: invisLight,
    name: 'TEST: Invisible light source',
    id: 'invisible-light-test',
  },
  {
    f: visLight,
    name: 'TEST: Visible light source',
    id: 'visible-light-test',
  },
  {
    f: camTest,
    name: 'TEST: Camera path',
    id: 'cam-test',
  },
  {
    f: seqTest,
    name: 'TEST: Sequential light',
    id: 'sequence-test',
  },
  // {
  //   f: stlTreeTest,
  //   name: 'TEST: Tree (.stl) *WILL CRASH*',
  //   id: 'stl-test',
  // },
  {
    f: slowTree,
    name: 'TEST: Tree (.json) slow',
    id: 'json-slow-test',
  }
];
