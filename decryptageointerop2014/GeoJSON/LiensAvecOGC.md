<!SLIDE>

# Liens avec OGC

GeoJSON fonctionne bien avec WFS/GetFeature (paramètre `outputFormat`).

Serveurs WFS prenant en charge WFS :

* MapServer (avec OGR)
* TinyOWS
* GeoServer
* ?

Mais les valeurs possibles pour `outputFormat` ne sont pas spécifiées
(`application/json` typiquement utilisé).
