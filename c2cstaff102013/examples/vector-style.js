var raster = new ol.layer.Tile({
  source: new ol.source.MapQuestOpenAerial()
});

var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    parser: new ol.parser.GeoJSON(),
    url: 'data/nyc-streets-part.json'
  }),
  style: new ol.style.Style({
    rules: [
      new ol.style.Rule({
        filter: 'RTTYP == "M"',
        symbolizers: [
          new ol.style.Stroke({
            color: '#663300',
            width: 9
          }),
          new ol.style.Stroke({
            color: '#ddaa00',
            width: 5,
            opacity: 1
          })
        ]
      }),
      new ol.style.Rule({
        filter: 'RTTYP == "I"',
        symbolizers: [
          new ol.style.Stroke({
            color: '#663300',
            width: 14
          }),
          new ol.style.Stroke({
            color: '#cc3300',
            width: 10,
            opacity: 1
          })
        ]
      }),
      new ol.style.Rule({
        filter: 'RTTYP == null',
        symbolizers: [
          new ol.style.Stroke({
            color: '#663300',
            width: 9
          }),
          new ol.style.Stroke({
            color: '#aa9966',
            width: 5,
            opacity: 1
          })
        ]
      })
    ],
    symbolizers: [
      new ol.style.Stroke({
        color: '#333333',
        width: 5
      }),
      new ol.style.Stroke({
        color: '#cccccc',
        width: 3,
        opacity: 1
      })
    ]
  })
});

var map = new ol.Map({
  layers: [raster, vector],
  renderer: ol.RendererHint.CANVAS,
  target: 'map',
  view: new ol.View2D({
    center: [-8223937.934101715, 4986319.8659726735],
    zoom: 15
  })
});
