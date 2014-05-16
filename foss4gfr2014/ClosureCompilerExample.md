<!SLIDE>

# Exemple Compilateur Closure

    @@@JavaScript
    goog.provide('ANamespace.ASubNamespace.AClass');

    // une classe
    ANamespace.ASubNamespace.AClass = function() {
      this.aProperty = 'prop1';
    };

    // une méthode
    ANamespace.ASubNamespace.AClass.prototype.aMethod = function() {
      this.aProperty = 'change';
    };

    // une instance
    var anInstance = new ANamespace.ASubNamespace.AClass();

    // appel d'une méthode
    anInstance.aMethod();

compilé en :

    @@@JavaScript
    window.b=new function(){this.a="prop1"};window.b.a="change"; 
