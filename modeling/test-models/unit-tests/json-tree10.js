import * as Rad from '../../../radiosity/index.js';
import * as TreeLoader from '../../json-tree-loader.js';

export default async function createScene() {
  const tree = await TreeLoader.load('../modeling/trees/r60N10000(1).json', true, true);
  return new Rad.Environment([tree]);
}
