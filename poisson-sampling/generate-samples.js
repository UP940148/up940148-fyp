import sample from './poisson-disc-sampling.js';

const minRadius = Number(process.argv[2]) || 10;
const size = Number(process.argv[3]) || 100;
const samples = parseInt(process.argv[4]) || 50;

const points = sample([size, size], minRadius, samples);

// Centre the points at (0,0)
for (const point of points) {
  point.x = point.x - (size / 2);
  point.y = point.y - (size / 2);
}

console.log(JSON.stringify(points));
