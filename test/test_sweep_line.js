var sl = require('./index')
  , Polygon = sl.Polygon
  , Point = sl.Point
  , SweepLine = sl.SweepLine
  , EventQueue = sl.EventQueue
  , assert = require('assert')
  , _ = require('underscore');





  geojson = [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]];
  points  = _.map(geojson, function(pnt){ return new Point(pnt[0],pnt[1]); });
  polygon = new Polygon(points);
  sweep_line = new SweepLine(polygon);
  event_queue = new EventQueue(polygon);
  
  while (ev = event_queue.events.pop()){
    sweep_line.add(ev);
  }
  
  var nd = sweep_line.find({edge:1});

  console.log("nd="+nd.toString())



//more tests here!