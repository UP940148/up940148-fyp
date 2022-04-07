export default function getSamples(size = [100, 100], radius = 10, sampleCount = 20) {
  // Get cell wall size (a = r/sqrt(2))
  const cellSize = radius / Math.SQRT2;
  const columns = Math.ceil(size[0] / cellSize);
  const rows = Math.ceil(size[1] / cellSize);

  // Create cell grid, initialised with nulls
  const grid = [];
  let r = 0;
  while (r < rows) {
    let c = 0;
    const row = [];
    while (c < columns) {
      row.push(null);
      c++;
    }
    grid.push(row);
    r++;
  }

  // Generate random points
  const points = [];
  const spawnPoints = [];
  // Create a random spawn point to begin
  points.push({
    // x: size[0] / 2,
    // y: size[1] / 2,
    x: Math.random() * size[0],
    y: Math.random() * size[1],
  });
  spawnPoints.push(0);
  grid[Math.floor(points[0].y / cellSize)][Math.floor(points[0].x / cellSize)] = 0;


  while (spawnPoints.length > 0) {

    // Get random point to start from
    const spawnIndex = Math.floor(Math.random() * spawnPoints.length);
    const centre = points[spawnPoints[spawnIndex]];

    // Generate k points within the annulus with inner radius r, and outer radius 2r
    let k = 0;
    let validPointFound = false;
    while (k < sampleCount) {
      // Create random point
      const angle = Math.random() * Math.PI * 2;
      const magnitude = (Math.random() * radius) + radius;
      const point = {
        x: centre.x + magnitude * Math.cos(angle),
        y: centre.y + magnitude * Math.sin(angle),
      };


      // Bound the point to the plane
      point.x = Math.min(Math.max(0, point.x), size[0]);
      point.y = Math.min(Math.max(0, point.y), size[1]);

      // Get grid cell of point
      const gridX = Math.floor(point.x / cellSize);
      const gridY = Math.floor(point.y / cellSize);

      const searchStartX = Math.max(0, gridX - 2);
      const searchEndX = Math.min(gridX + 2, columns);
      const searchStartY = Math.max(0, gridY - 2);
      const searchEndY = Math.min(gridY + 2, rows);


      let isValid = true;
      if (grid[gridY][gridX] !== null) {
        isValid = false;
      }
      let x = searchStartX;
      searchLoop:
      while (x < searchEndX) {
        let y = searchStartY;
        while (y < searchEndY) {
          if (grid[y][x] !== null) {
            const allowed = isAllowed(points[grid[y][x]], point, radius);
            if (!allowed) {
              // console.log('invalid')
              isValid = false;
              break searchLoop;
            }
          }
          y++;
        }
        x++;
      }

      if (isValid) {
        validPointFound = true;
        grid[gridY][gridX] = points.length;
        spawnPoints.push(points.length);
        points.push(point);
      }

      k++;
    }

    if (!validPointFound) {
      spawnPoints.splice(spawnIndex, 1);
    }
  }

  return points;
}

function isAllowed(p0, p1, r) {
  const distX = p0.x - p1.x;
  const distY = p0.y - p1.y;
  const dist = Math.sqrt(distX ** 2 + distY ** 2);
  if (dist > r) {
    return true;
  }
  return false;
}
