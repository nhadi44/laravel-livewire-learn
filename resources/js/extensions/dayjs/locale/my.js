!(function (_, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e(require('dayjs')))
		: 'function' == typeof define && define.amd
			? define(['dayjs'], e)
			: ((_ = 'undefined' != typeof globalThis ? globalThis : _ || self).dayjs_locale_my = e(_.dayjs));
})(this, function (_) {
	'use strict';
	function e(_) {
		return _ && 'object' == typeof _ && 'default' in _ ? _ : { default: _ };
	}
	var t = e(_),
		d = {
			name: 'my',
			weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
			months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split(
				'_',
			),
			weekStart: 1,
			weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
			monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
			weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
			ordinal: function (_) {
				return _;
			},
			formats: {
				LT: 'HH:mm',
				LTS: 'HH:mm:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY HH:mm',
				LLLL: 'dddd D MMMM YYYY HH:mm',
			},
			relativeTime: {
				future: 'လာမည့် %s မှာ',
				past: 'လွန်ခဲ့သော %s က',
				s: 'စက္ကန်.အနည်းငယ်',
				m: 'တစ်မိနစ်',
				mm: '%d မိနစ်',
				h: 'တစ်နာရီ',
				hh: '%d နာရီ',
				d: 'တစ်ရက်',
				dd: '%d ရက်',
				M: 'တစ်လ',
				MM: '%d လ',
				y: 'တစ်နှစ်',
				yy: '%d နှစ်',
			},
		};
	return t.default.locale(d, null, !0), d;
});
