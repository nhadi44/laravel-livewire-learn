!(function (_, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e(require('dayjs')))
		: 'function' == typeof define && define.amd
			? define(['dayjs'], e)
			: ((_ = 'undefined' != typeof globalThis ? globalThis : _ || self).dayjs_locale_be = e(_.dayjs));
})(this, function (_) {
	'use strict';
	function e(_) {
		return _ && 'object' == typeof _ && 'default' in _ ? _ : { default: _ };
	}
	var t = e(_),
		n = {
			name: 'be',
			weekdays: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
			months: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split(
				'_',
			),
			weekStart: 1,
			weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
			monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
			weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
			ordinal: function (_) {
				return _;
			},
			formats: {
				LT: 'HH:mm',
				LTS: 'HH:mm:ss',
				L: 'DD.MM.YYYY',
				LL: 'D MMMM YYYY г.',
				LLL: 'D MMMM YYYY г., HH:mm',
				LLLL: 'dddd, D MMMM YYYY г., HH:mm',
			},
		};
	return t.default.locale(n, null, !0), n;
});
