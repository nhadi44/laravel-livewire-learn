!(function (t, n) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = n())
		: 'function' == typeof define && define.amd
			? define(n)
			: ((t = 'undefined' != typeof globalThis ? globalThis : t || self).dayjs_plugin_objectSupport = n());
})(this, function () {
	'use strict';
	return function (t, n, e) {
		var i = n.prototype,
			r = function (t) {
				var n,
					r = t.date,
					o = t.utc,
					u = {};
				if (
					!(
						null === (n = r) ||
						n instanceof Date ||
						n instanceof Array ||
						i.$utils().u(n) ||
						'Object' !== n.constructor.name
					)
				) {
					if (!Object.keys(r).length) return new Date();
					var a = o ? e.utc() : e();
					Object.keys(r).forEach(function (t) {
						var n, e;
						u[((n = t), (e = i.$utils().p(n)), 'date' === e ? 'day' : e)] = r[t];
					});
					var c = u.day || (u.year || u.month >= 0 ? 1 : a.date()),
						s = u.year || a.year(),
						d = u.month >= 0 ? u.month : u.year || u.day ? 0 : a.month(),
						f = u.hour || 0,
						b = u.minute || 0,
						h = u.second || 0,
						y = u.millisecond || 0;
					return o ? new Date(Date.UTC(s, d, c, f, b, h, y)) : new Date(s, d, c, f, b, h, y);
				}
				return r;
			},
			o = i.parse;
		i.parse = function (t) {
			(t.date = r.bind(this)(t)), o.bind(this)(t);
		};
		var u = i.set,
			a = i.add,
			c = i.subtract,
			s = function (t, n, e, i) {
				void 0 === i && (i = 1);
				var r = Object.keys(n),
					o = this;
				return (
					r.forEach(function (e) {
						o = t.bind(o)(n[e] * i, e);
					}),
					o
				);
			};
		(i.set = function (t, n) {
			return (
				(n = void 0 === n ? t : n),
				'Object' === t.constructor.name
					? s.bind(this)(
							function (t, n) {
								return u.bind(this)(n, t);
							},
							n,
							t,
						)
					: u.bind(this)(t, n)
			);
		}),
			(i.add = function (t, n) {
				return 'Object' === t.constructor.name ? s.bind(this)(a, t, n) : a.bind(this)(t, n);
			}),
			(i.subtract = function (t, n) {
				return 'Object' === t.constructor.name ? s.bind(this)(a, t, n, -1) : c.bind(this)(t, n);
			});
	};
});
