exports.random = Random_getNumber;

exports.random.seed = Random_seed;

Object.defineProperty( exports.random, 'alloWeak', {
    get: function () { return _random_allow_weak; },
    set: function ( a ) { _random_allow_weak = a; }
});

exports.getRandomValues = Random_getValues;

exports.getRandomValues.seed = Random_seed;

Object.defineProperty( exports.getRandomValues, 'alloWeak', {
    get: function () { return _random_allow_weak; },
    set: function ( a ) { _random_allow_weak = a; }
});
