"use strict";

var sentences = [{ subject: "JavaScript", verb: "is", object: "great" }, { subject: "govno", verb: "pizdets", object: "vonyaet" }];
function say(_ref) {
	var subject = _ref.subject,
	    verb = _ref.verb,
	    object = _ref.object;

	console.log("${subject} ${verb} ${object}");
}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var s = _step.value;

		say(s);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}