<!SLIDE>

# Hit Detection

Pas de "hit detection" natif avec Canvas (et WebGL).

&#8680; On redessine toute la "scène" dans un canvas de 1x1 px, et on teste
si on a une couleur. Réutilisation du batch.

Avantages :

* Détection parfaite au pixel
* Tolérance pour la détection de lignes sur device touch

<a target="blank" href="/file/_files/vector.html">La démo…</a>
