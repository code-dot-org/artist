const Visualization = require('../../artist.js');

test('sanity', () => {
  const viz = new Visualization();

  expect(viz.x).toEqual(200);
  expect(viz.y).toEqual(200);
});
