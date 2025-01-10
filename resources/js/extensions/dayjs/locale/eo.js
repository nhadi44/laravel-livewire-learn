!(function (e, o) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = o(require('dayjs')))
		: 'function' == typeof define && define.amd
			? define(['dayjs'], o)
			: ((e = 'undefined' != typeof globalThis ? globalThis : e || self).dayjs_locale_eo = o(e.dayjs));
})(this, function (e) {
	'use strict';
	function o(e) {
		return e && 'object' == typeof e && 'default' in e ? e : { default: e };
	}
	var a = o(e),
		t = {
			name: 'eo',
			weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
			months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split(
				'_',
			),
			weekStart: 1,
			weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
			monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
			weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
			ordinal: function (e) {
				return e;
			},
			formats: {
				LT: 'HH:mm',
				LTS: 'HH:mm:ss',
				L: 'YYYY-MM-DD',
				LL: 'D[-a de] MMMM, YYYY',
				LLL: 'D[-a de] MMMM, YYYY HH:mm',
				LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm',
			},
			relativeTime: {
				future: 'post %s',
				past: 'antaŭ %s',
				s: 'sekundoj',
				m: 'minuto',
				mm: '%d minutoj',
				h: 'horo',
				hh: '%d horoj',
				d: 'tago',
				dd: '%d tagoj',
				M: 'monato',
				MM: '%d monatoj',
				y: 'jaro',
				yy: '%d jaroj',
			},
		};
	return a.default.locale(t, null, !0), t;
});
