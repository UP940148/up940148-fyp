export function toJSON(tree = [], leaves = [], scale) {
  const retval = {
    branches: [],
    leaves: [],
  };

  // for every node in a tree, generate a "branch" between the previous node and this one
  for (const node of tree) {
    if (node.prev != null) {
      retval.branches.push(jsonBranch(node.prev, node, node.thickness));
    }
  }

  // generate leaves
  for (const leaf of leaves) {
    retval.leaves.push(jsonLeaf(leaf, scale));
  }

  return JSON.stringify(retval);
}


function jsonLeaf(p, scale) {
  if (p.prev == null) return '';

  const v = p.minus(p.prev);
  const a = Math.atan2(v.y, v.x) / Math.PI * 180;

  const translate = JSON.parse(p.toScad());

  return {
    translation: {
      x: translate[0],
      y: translate[1],
      z: translate[2],
    },
    rotation: {
      x: 0,
      y: 50,
      z: a,
    },
    scale: scale,
  };
}

function jsonBranch(p1, p2, w = 1) {
  // Origin position
  const start = {
    x: p1.x,
    y: p1.y,
    z: p1.z,
  };

  const end = {
    x: p2.x,
    y: p2.y,
    z: p2.z,
  };

  return {
    start: start,
    end: end,
    width: w,
  };
}
