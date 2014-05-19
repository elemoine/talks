var vectorStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: [255, 255, 255, 0.4]
  }),
  stroke: new ol.style.Stroke({
    color: '#3399CC',
    width: 1.25
  }),
  image: new ol.style.Icon({
    src: '/file/_files/arch.png',
    anchor: [0.5, 1.0]
  })
});

var vectorSource = new ol.source.GeoJSON({
  url: '/file/_files/countries.json',
  projection: 'EPSG:3857'
});

var map = new ol.Map({
  target: 'map',
  renderer: 'canvas',
  interactions: ol.interaction.defaults().extend([
    new ol.interaction.DragRotateAndZoom()
  ]),
  layers: [
    new ol.layer.Tile({
      name: 'raster',
      source: new ol.source.MapQuest({
        layer: 'osm'
      })
    }),
    new ol.layer.Vector({
      name: 'vector',
      style: vectorStyle,
      visible: false,
      source: vectorSource
    }),
    new ol.layer.Image({
      name: 'vector-image',
      visible: false,
      source: new ol.source.ImageVector({
        style: vectorStyle,
        source: vectorSource
      })
    })
  ],
  view: new ol.View2D({
    center: [645740.0149531711, 1007745.7809117641],
    zoom: 2
  })
});

var coordinates = ol.proj.transform([2.295, 48.8738],
    'EPSG:4326', map.getView().getProjection());
var pointFeature = new ol.Feature(new ol.geom.Point(coordinates));
vectorSource.addFeature(pointFeature);

$('#layerselect').change(function() {
  var name = $(this).find(':selected').val();
  console.log(name);
  var layers = map.getLayers().getArray();
  var i, ii;
  for (i = 0, ii = layers.length; i < ii; ++i) {
    if (layers[i].get('name') == 'raster') {
      continue;
    }
    layers[i].setVisible(layers[i].get('name') == name);
  }
});
$('#layerselect').trigger('change');
