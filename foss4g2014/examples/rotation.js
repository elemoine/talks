var rasterLayer = new ol.layer.Tile({
  source: new ol.source.BingMaps({
    key: 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3',
    imagerySet: 'Aerial',
    preload: Infinity
  })
});

var styleCache = {};
var vectorLayer = new ol.layer.Vector({
  source: new ol.source.GeoJSON({
    url: 'data/countries.geojson',
    projection: 'EPSG:3857'
  }),
  style: function(feature, resolution) {
    var text = feature.get('name');
    if (!styleCache[text]) {
      styleCache[text] = [new ol.style.Style({
        text: new ol.style.Text({
          font: '16px Calibri,sans-serif',
          text: text,
          fill: new ol.style.Fill({
            color: '#000'
          }),
          stroke: new ol.style.Stroke({
            color: '#fff',
            width: 3
          })
        })
      })];
    }
    return styleCache[text];
  }
});

var map = new ol.Map({
  target: 'map',
  layers: [rasterLayer, vectorLayer],
  view: new ol.View({
    center: [-8692416.162680985, 1821599.940530574],
    zoom: 6
  })
});


var rotation = new ol.dom.Input(document.getElementById('rotation'));
rotation.bindTo('value', map.getView(), 'rotation');

document.onkeydown = function(e) {
  var view = map.getView();
  var rotation = view.getRotation();
  if (e.keyCode == 82) {
    // "r" key
    rotation += 0.01;
    view.setRotation(Math.min(rotation, 3.14159));
  } else if (e.keyCode == 76) {
    // "l" key
    rotation -= 0.01;
    view.setRotation(Math.max(rotation, -3.14159));
  }
};
