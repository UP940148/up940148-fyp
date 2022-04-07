export function flightPath(step) {
  /*
    Camera:
    camX = axisX
    camY = axisZ
    camZ = axisY

    Objects:
    objX = axisX
    objY = axisY
    objZ = axisZ
  */
  const speed = 2;
  const t = (step * 2 * Math.PI / 1000) * speed;
  const x = 31 * Math.cos(t);
  const y = 31 * Math.sin(t);
  const z = (Math.sin(3 * t) + 2 * Math.cos(t)) + 16;

  const dx = -20 * Math.sin(t);
  const dy = 20 * Math.cos(t);
  const dz = 3 * Math.cos(3 * t) - Math.sin(t);

  return [x, y, z, dx, dy, dz];
}

// Derivatives
// dx/dt = -20sin(t)
// dy/dt = 20cos(t)
// dz/dt = 3cos(3t) - sin(t)
