(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.Piggie = factory());
}(this, (function () { 'use strict';

	var club = 'Chelsea';
	var app = {
	  club: club
	};

	return app;

})));
