var raster = new ol.layer.Tile({
  source: new ol.source.MapQuestOpenAerial()
});

// build up some GeoJSON features
var count = 20000;
var features = new Array(count);
var e = 18000000;
for (var i = 0; i < count; ++i) {
  features[i] = {
    type: 'Feature',
    properties: {
      i: i,
      size: i % 2 ? 10 : 20
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2 * e * Math.random() - e, 2 * e * Math.random() - e
      ]
    }
  };
}

var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    projection: ol.proj.get('EPSG:3857'),
    parser: new ol.parser.GeoJSON(),
    data: {
      type: 'FeatureCollection',
      features: features
    }
  }),
  style: new ol.style.Style({rules: [
    new ol.style.Rule({
      symbolizers: [
        new ol.style.Shape({
          type: ol.style.ShapeType.CIRCLE,
          size: ol.expr.parse('size'),
          stroke: new ol.style.Stroke({color: '#666666'}),
          fill: new ol.style.Fill({color: '#bada55'})
        })
      ]
    })
  ]})
});

var popup = new ol.Overlay({
  element: document.getElementById('popup')
});

var map = new ol.Map({
  layers: [raster, vector],
  renderer: ol.RendererHint.CANVAS,
  target: 'map',
  view: new ol.View2D({
    center: [0, 0],
    zoom: 2
  }),
  overlays: [popup]
});

map.on('mousemove', function(evt) {
  map.getFeatureInfo({
    pixel: evt.getPixel(),
    layers: [vector],
    success: function(info) {
      var element = popup.getElement();
      var coordinate = evt.getCoordinate();
      popup.setPosition(coordinate);
      $(element).popover('destroy');
      $(element).popover({
        'placement': 'top',
        'animation': false,
        'html': true,
        'content': info[0]
      });
      $(element).popover(info[0].length ? 'show' : 'hide');
    }
  });
});
