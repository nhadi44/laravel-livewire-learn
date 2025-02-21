!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
			? define(t)
			: ((e = 'undefined' != typeof globalThis ? globalThis : e || self).dayjs_plugin_devHelper = t());
})(this, function () {
	'use strict';
	return function (e, t, o) {
		if (!process || 'production' !== process.env.NODE_ENV) {
			var s = t.prototype,
				n = s.parse;
			s.parse = function (e) {
				var t = e.date;
				return (
					'string' == typeof t &&
						13 === t.length &&
						console.warn(
							'To parse a Unix timestamp like ' +
								t +
								', you should pass it as a Number. https://day.js.org/docs/en/parse/unix-timestamp-milliseconds',
						),
					'number' == typeof t &&
						4 === String(t).length &&
						console.warn(
							'Guessing you may want to parse the Year ' +
								t +
								', you should pass it as a String ' +
								t +
								', not a Number. Otherwise, ' +
								t +
								' will be treated as a Unix timestamp',
						),
					e.args.length >= 2 &&
						!o.p.customParseFormat &&
						console.warn(
							'To parse a date-time string like ' +
								t +
								' using the given format, you should enable customParseFormat plugin first. https://day.js.org/docs/en/parse/string-format',
						),
					n.bind(this)(e)
				);
			};
			var a = o.locale;
			o.locale = function (e, t, s) {
				return (
					void 0 === t &&
						'string' == typeof e &&
						(o.Ls[e] ||
							console.warn(
								'Guessing you may want to use locale ' +
									e +
									', you have to load it before using it. https://day.js.org/docs/en/i18n/loading-into-nodejs',
							)),
					a(e, t, s)
				);
			};
		}
	};
});
