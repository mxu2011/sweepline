var sl = require('./index')
  , Polygon = sl.Polygon
  , Point = sl.Point
  , assert = require('assert')
  , _ = require('underscore');

console.log('test can build a polygon from an array of points')
  geom = [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]];
  points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
  polygon = new Polygon(points);
  
  assert.equal(polygon.vertices.length, geom.length);
  assert.equal(polygon.vertices[0].x, geom[0][0]);


console.log('test is polygon simple 1')
  
  // note hack on last co-ordinate.
  var geom = [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.000001, 0.000001]];
  var points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
  var polygon = new Polygon(points);
  
  assert.ok(polygon.simple_polygon(), "polygon is simple");



console.log('test is polygon simple 2')
  var geom = [[2.0, 2.0], [1.0, 2.0], [1.0, 1.0], [2.0, 1.0], [3.0, 1.0], [3.0, 2.0], [2.000001, 2.000001]];
  var points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
  var polygon = new Polygon(points);
  
  assert.ok(polygon.simple_polygon(), "polygon is simple");;

console.log('test is polygon simple 3')
  var geom = [[0, 0], [0, 1], [1, 1], [0, 1], [0.0001, 0.00001]];
  var points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
  var polygon = new Polygon(points);
  
  assert.ok(polygon.simple_polygon(), "polygon is simple");

console.log('test is polygon simple 4')
var geom = [[0.0, 0.0], [0.0, 3.0], [3.0, 3.0], [3.0, 0.0], [0.0, 0.0]];
var points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
var polygon = new Polygon(points);

assert.ok(polygon.simple_polygon(), "polygon is simple");


console.log('test is polygon simple 5')
  var geom = [[2.0, 2.0], [2.0, 3.0], [3.0, 3.0], [4.0, 3.0], [4.0, 2.0], [2.000001, 2.00001]];
  var points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
  var polygon = new Polygon(points);
  
  assert.ok(polygon.simple_polygon(), "polygon is simple");


console.log('test is polygon complex 1')
  var geom = [[2.0, 2.0], [2.0, 3.0], [3.0, 1.0], [4.0, 3.0], [4.0, 2.0], [2.00001, 2.00001]];
  var points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
  var polygon = new Polygon(points);
  
  assert.ok(!polygon.simple_polygon(), "polygon is complex");


console.log('test is polygon complex 2')
  var geom = [[2.0, 2.0], [3.0, 2.0], [3.0, 3.0], [2.0, 3.0], [4.0, 2.0], [2.0000001, 2.000001]];
  var points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
  var polygon = new Polygon(points);
  
  assert.ok(!polygon.simple_polygon(), "polygon is complex");


console.log('test is polygon complex 3')
var geom = [[0.0, 0.0], [3.0, 3.0], [0.0, 3.0], [3.0, 0.0], [0.0, 0.0]];
var points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
var polygon = new Polygon(points);

assert.ok(!polygon.simple_polygon(), "polygon is complex");


console.log('test is production polygon complex 3')
var geom = [[41.96514,-87.80356],[41.96182,-87.80115],[41.96156,-87.79909],[41.96131,-87.79635],[41.96105,-87.79394],[41.9608,-87.79188],[41.95978,-87.78914],[41.95876,-87.78708],[41.95722,-87.78467],[41.95544,-87.78193],[41.95339,-87.77987],[41.9511,-87.77781],[41.94803,-87.77541],[41.94446,-87.773],[41.94063,-87.7706],[41.9368,-87.76785],[41.93271,-87.76545],[41.92658,-87.76339],[41.91687,-87.76133],[41.87522,-87.76373],[41.87445,-87.76579],[41.87394,-87.76854],[41.87368,-87.7706],[41.87343,-87.77335],[41.87266,-87.77575],[41.8724,-87.77815],[41.87215,-87.78021],[41.87164,-87.78296],[41.87113,-87.78536],[41.87113,-87.78776],[41.87113,-87.78982],[41.87113,-87.79223],[41.87113,-87.79463],[41.87113,-87.79703],[41.87138,-87.79978],[41.87189,-87.80184],[41.8724,-87.8039],[41.87317,-87.8063],[41.87419,-87.80871],[41.87471,-87.81077],[41.87547,-87.81283],[41.87649,-87.81523],[41.87726,-87.81729],[41.87752,-87.81935],[41.87777,-87.82141],[41.87803,-87.82347],[41.87828,-87.82622],[41.87854,-87.82862],[41.87854,-87.83171],[41.8788,-87.83377],[41.87931,-87.83652],[41.88007,-87.83926],[41.88058,-87.84132],[41.88135,-87.84373],[41.88237,-87.84613],[41.88365,-87.84888],[41.88493,-87.85094],[41.88697,-87.85334],[41.89055,-87.8554],[41.89515,-87.85746],[41.90026,-87.85952],[41.90435,-87.86158],[41.92913,-87.85952],[41.93373,-87.85746],[41.94139,-87.8554],[41.94573,-87.85334],[41.94778,-87.85094],[41.94905,-87.84888],[41.95059,-87.84647],[41.95263,-87.84304],[41.95365,-87.84098],[41.95442,-87.83892],[41.95671,-87.83514],[41.95773,-87.83308],[41.95901,-87.83102],[41.96003,-87.82862],[41.96207,-87.82484],[41.9631,-87.82107],[41.9631,-87.81901],[41.9631,-87.81695],[41.9631,-87.81351],[41.96284,-87.81042],[41.96233,-87.80699],[41.96207,-87.80424],[41.96156,-87.80184],[41.96105,-87.79978],[41.95901,-87.79703],[41.96514,-87.80356]];
var points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
var polygon = new Polygon(points);

assert.ok(!polygon.simple_polygon(), "polygon is complex");


