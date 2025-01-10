!(function (_, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e(require('dayjs')))
		: 'function' == typeof define && define.amd
			? define(['dayjs'], e)
			: ((_ = 'undefined' != typeof globalThis ? globalThis : _ || self).dayjs_locale_uz = e(_.dayjs));
})(this, function (_) {
	'use strict';
	function e(_) {
		return _ && 'object' == typeof _ && 'default' in _ ? _ : { default: _ };
	}
	var t = e(_),
		d = {
			name: 'uz',
			weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
			months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
			weekStart: 1,
			weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
			monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
			weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
			ordinal: function (_) {
				return _;
			},
			formats: {
				LT: 'HH:mm',
				LTS: 'HH:mm:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY HH:mm',
				LLLL: 'D MMMM YYYY, dddd HH:mm',
			},
			relativeTime: {
				future: 'Якин %s ичида',
				past: 'Бир неча %s олдин',
				s: 'фурсат',
				m: 'бир дакика',
				mm: '%d дакика',
				h: 'бир соат',
				hh: '%d соат',
				d: 'бир кун',
				dd: '%d кун',
				M: 'бир ой',
				MM: '%d ой',
				y: 'бир йил',
				yy: '%d йил',
			},
		};
	return t.default.locale(d, null, !0), d;
});
