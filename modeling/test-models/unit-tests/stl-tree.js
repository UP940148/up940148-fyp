import { loadSTL } from '../../stl-loader.js';
import * as Rad from '../../../radiosity/index.js';

export default async function createScene() {
  const modelColour = new Rad.Spectra(1, 1, 1);
  const model = await loadSTL('../modeling/stl-models/tree.stl', modelColour, null, 10, false);

  return new Rad.Environment([model]);
}
