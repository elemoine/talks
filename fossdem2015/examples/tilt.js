var center = [-8620815.572252877, 2078464.5633878764];

var view = new ol.View({
  center: center,
  zoom: 6
});

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.MapQuest({
        url: 'http://localhost:8080/tiles/0/tiles/{z}/{x}/{y}',
        layer: 'osm'
      })
    })
  ],
  renderer: 'webgl',
  target: 'map',
  view: view
});

var tiltInput = document.getElementById('tilt');

function setViewTilt(tilt) {
  tilt = Math.max(Math.min(tilt, 33 * Math.PI / 180.0), 0);
  tiltInput.value = tilt;
  view.setTilt(tilt);
}

tiltInput.onchange = function() {
  setViewTilt(+tiltInput.value);
};

document.onkeydown = function(e) {
  var view = map.getView();
  var rotation = view.getRotation();
  if (e.keyCode == 82) {
    // "r" key
    setViewTilt(view.getTilt() - (5 * Math.PI / 180));
  } else if (e.keyCode == 76) {
    // "l" key
    setViewTilt(view.getTilt() + (5 * Math.PI / 180));
  }
};

setViewTilt(0);
