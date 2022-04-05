import * as Rad from '../../../radiosity/index.js';
import Transform3 from '../../transform3.js';
import * as Cube from '../../cube.js';
import * as Plane from '../../singleface.js';

const defaultReflectance = new Rad.Spectra(1, 1, 1);
const defaultEmittance = new Rad.Spectra(1, 1, 1);
const floorEmittance = new Rad.Spectra(0, 0, 0);
const lightReflectance = new Rad.Spectra(0, 0, 0);
const defaultCubeReflectance = [
  lightReflectance,
  lightReflectance,
  lightReflectance,
  lightReflectance,
  lightReflectance,
  lightReflectance,
];
const defaultCubeEmittance = [
  defaultEmittance,
  defaultEmittance,
  defaultEmittance,
  defaultEmittance,
  defaultEmittance,
  defaultEmittance,
];

export default async function createScene() {
  const cube = makeCube();
  const xForm = new Transform3();
  xForm.translate(-0.5, -0.5, 0);
  xForm.transform(cube);

  setActiveTime(cube, [[0, 10], [30, 40]]);

  const floor = makePlane(defaultReflectance, floorEmittance, 8);
  const floorxForm = new Transform3();
  floorxForm.translate(-0.5, -0.5, 0);
  floorxForm.scale(50, 50, 1);
  floorxForm.transform(floor);

  return new Rad.Environment([cube, floor]);
}

function setActiveTime(subject, time) {
  for (const surface of subject.surfaces) {
    surface.activeTime = time;
  }
}

function makeCube(reflectance = defaultCubeReflectance, emittance = defaultCubeEmittance, subDivs = 1) {
  // Return value will be cube object
  const retval = Cube.unitCubeMultiSurface(subDivs);

  // Add reflectance and emittance values
  for (let i = 0; i < 6; i++) {
    retval.surfaces[i].reflectance.add(reflectance[i]);
    retval.surfaces[i].emittance.add(emittance[i]);
  }

  return retval;
}

function makePlane(reflectance = defaultReflectance, emittance = defaultEmittance, subDivs = [1, 1]) {
  // Return value will be plane object
  const retval = Plane.singleFace(reflectance, emittance, subDivs);

  return retval;
}
