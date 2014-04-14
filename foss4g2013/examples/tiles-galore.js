var map = new ol.Map({
  target: 'map',
  renderer: ol.RendererHint.CANVAS,
  layers: [
    new ol.layer.TileLayer({
      source: new ol.source.BingMaps({
        key: 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3',
        style: 'Aerial'
      })
    })
  ],
  view: new ol.View2D({
    center: [0, 0],
    zoom: 2
  })
});
