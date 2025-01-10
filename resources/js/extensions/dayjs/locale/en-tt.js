!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t(require('dayjs')))
		: 'function' == typeof define && define.amd
			? define(['dayjs'], t)
			: ((e = 'undefined' != typeof globalThis ? globalThis : e || self).dayjs_locale_en_tt = t(e.dayjs));
})(this, function (e) {
	'use strict';
	function t(e) {
		return e && 'object' == typeof e && 'default' in e ? e : { default: e };
	}
	var a = t(e),
		_ = {
			name: 'en-tt',
			weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
			weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
			weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
			months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
			monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
			weekStart: 1,
			yearStart: 4,
			relativeTime: {
				future: 'in %s',
				past: '%s ago',
				s: 'a few seconds',
				m: 'a minute',
				mm: '%d minutes',
				h: 'an hour',
				hh: '%d hours',
				d: 'a day',
				dd: '%d days',
				M: 'a month',
				MM: '%d months',
				y: 'a year',
				yy: '%d years',
			},
			formats: {
				LT: 'HH:mm',
				LTS: 'HH:mm:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY HH:mm',
				LLLL: 'dddd, D MMMM YYYY HH:mm',
			},
			ordinal: function (e) {
				var t = ['th', 'st', 'nd', 'rd'],
					a = e % 100;
				return '[' + e + (t[(a - 20) % 10] || t[a] || t[0]) + ']';
			},
		};
	return a.default.locale(_, null, !0), _;
});
