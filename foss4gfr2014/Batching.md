<!SLIDE>

# Batching

Système de batchs pour éviter les calculs et manipulations de données entre
chaque frame.

Un batch "cache" :

* calcul des styles
* simplification des géométries
* lecture des features dans le R-tree
* et toutes les implications sur le garbage collector
