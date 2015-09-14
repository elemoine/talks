//
// Map with BingMaps layer, standard interactions, standard controls
// plus a ScaleLine control.
//
var map = new ol.Map({
  target: 'map',
  controls: ol.control.defaults().extend([
    new ol.control.ScaleLine({
      units: 'imperial'
    })
  ]),
  layers: [new ol.layer.Tile({
    source: new ol.source.BingMaps({
      key: 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3',
      imagerySet: 'Aerial'
    })
  })],
  view: new ol.View({
    center: [-9101767, 2822912],
    zoom: 14
  })
});

//
// Geolocation
//
var geolocation = new ol.Geolocation();
geolocation.setProjection(map.getView().getProjection());
geolocation.on('change:position', function() {
  var duration = 2000;
  var start = +new Date();
  var pan = ol.animation.pan({
    duration: duration,
    source: map.getView().getCenter(),
    start: start
  });
  var bounce = ol.animation.bounce({
    duration: duration,
    resolution: 4 * map.getView().getResolution(),
    start: start
  });
  map.beforeRender(pan, bounce);
  map.getView().setCenter(geolocation.getPosition());
  geolocation.setTracking(false);
});
document.getElementById('locate').onclick = function() {
  geolocation.setTracking(true);
};

//
// Draw interaction
//
var style = new ol.style.Style({
  image: new ol.style.Icon({
    src: 'data/marker.png',
    anchorYUnits: 'pixels',
    anchor: [0.5, 50]
  })
});
var drawLayer = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: style
});
drawLayer.setMap(map);
var drawInteraction = new ol.interaction.Draw({
  type: 'Point',
  source: drawLayer.getSource(),
  style: style
});
drawInteraction.on('drawend', function(e) {
  e.target.setActive(false);
});
drawInteraction.setActive(false);
map.addInteraction(drawInteraction);
document.getElementById('marker').addEventListener('mousedown', function(e) {
  drawInteraction.setActive(true);
  e.preventDefault();
});
