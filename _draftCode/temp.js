var _ = require('lodash');

var array = [1,2,3,4];
var evens = _.remove(array, function(n) {
	return n % 2 == 0;
});

console.log(array);

console.log(evens);