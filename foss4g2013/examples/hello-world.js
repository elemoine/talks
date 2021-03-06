var map = new ol.Map({
  target: 'map',
  renderer: ol.RendererHint.CANVAS,
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View2D({
    center: [0, 0],
    zoom: 2
  })
});
