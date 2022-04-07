import lenniesRoom2 from '../modeling/test-models/lennie-test2.js';
import forest from '../modeling/test-models/poisson-forest.js';

import invisLight from '../modeling/test-models/unit-tests/invisible-light.js';
import visLight from '../modeling/test-models/unit-tests/visible-light.js';
import camTest from '../modeling/test-models/unit-tests/camera-test.js';
import seqTest from '../modeling/test-models/unit-tests/sequential-lights.js';
import stlTreeTest from '../modeling/test-models/unit-tests/stl-tree.js';
import slowTree from '../modeling/test-models/unit-tests/json-tree1.js';
import accurateTree from '../modeling/test-models/unit-tests/json-tree10.js';

import tree from '../modeling/test-models/tree-room.js';

// list of available environments; the first one is the default

export const environmentsList = [
  {
    f: accurateTree,
    name: 'Tree (Accurate)',
    id: 'accurate-tree',
  },
  {
    f: forest,
    name: 'Forest',
    id: 'forest',
  },
  {
    f: lenniesRoom2,
    name: 'Testing Scene',
    id: 'testing-scene',
  },
  {
    f: tree,
    name: 'Tree',
  },
  {
    f: invisLight,
    name: 'TEST: Invisible light source',
    id: 'invisible-light',
  },
  {
    f: visLight,
    name: 'TEST: Visible light source',
    id: 'visible-light',
  },
  {
    f: camTest,
    name: 'TEST: Camera path',
    id: 'test-cam',
  },
  {
    f: seqTest,
    name: 'TEST: Sequential light',
    id: 'sequence-test',
  },
  {
    f: stlTreeTest,
    name: 'TEST: Tree (.stl) *WILL CRASH*',
    id: 'stl-tree',
  },
  {
    f: slowTree,
    name: 'TEST: Tree (.json) slow',
    id: 'json-tree-slow',
  }
];
