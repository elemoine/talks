var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.TileLayer({
      source: new ol.source.BingMaps({
        key: 'Ar33pRUvQOdESG8m_T15MUmNz__E1twPo42bFx9jvdDePhX0PNgAcEm44OVTS7tt',
        style: 'Aerial'
      })
    })
  ],
  view: new ol.View2D({
    center: [0, 0],
    zoom: 2
  })
});
