!(function (n, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
			? define(e)
			: ((n = 'undefined' != typeof globalThis ? globalThis : n || self).dayjs_plugin_bigIntSupport = e());
})(this, function () {
	'use strict';
	var n = function (n) {
		return 'bigint' == typeof n;
	};
	return function (e, t, i) {
		var o = t.prototype,
			u = function (e) {
				var t = e.date;
				return n(t) ? Number(t) : t;
			},
			r = o.parse;
		o.parse = function (n) {
			(n.date = u.bind(this)(n)), r.bind(this)(n);
		};
		var f = i.unix;
		i.unix = function (e) {
			var t = n(e) ? Number(e) : e;
			return f(t);
		};
	};
});
