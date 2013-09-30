var view = new ol.View2D({
  center: [-9101767, 2822912],
  zoom: 14
});

var layer = new ol.layer.Tile({
  source: new ol.source.BingMaps({
    key: 'Ar33pRUvQOdESG8m_T15MUmNz__E1twPo42bFx9jvdDePhX0PNgAcEm44OVTS7tt',
    style: 'Aerial'
  })
});

var map = new ol.Map({
  target: 'map',
  interactions: ol.interaction.defaults().extend([
    new ol.interaction.DragRotateAndZoom()
  ]),
  controls: ol.control.defaults().extend([
    new ol.control.FullScreen(),
    new ol.control.ScaleLine({
      units: ol.control.ScaleLineUnits.IMPERIAL
    })
  ]),
  layers: [layer],
  view: view
});


var rotation = new ol.dom.Input(document.getElementById('rotation'));
rotation.bindTo('value', map.getView(), 'rotation');

var geolocation = new ol.Geolocation();
geolocation.bindTo('projection', map.getView());

geolocation.on('change:position', function() {
  var duration = 2000;
  var start = +new Date();
  var pan = ol.animation.pan({
    duration: duration,
    source: view.getCenter(),
    start: start
  });
  var bounce = ol.animation.bounce({
    duration: duration,
    resolution: 4 * view.getResolution(),
    start: start
  });
  map.addPreRenderFunctions([pan, bounce]);
  view.setCenter(geolocation.getPosition());
  geolocation.setTracking(false);
});

document.getElementById('locate').onclick = function() {
  geolocation.setTracking(true);
};
