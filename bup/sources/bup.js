var state = {
	initialized: false,
	ui: {},
};
var bup_version = '2022.03.16.2212723dbf4';

(function() {
'use strict';

function init() {
	i18n.init();
	i18n.ui_update_state(state);
	register_sworker();
	state.settings = settings.load();
	fullscreen.update_fullscreen_button();
}

function ui_init() {
	compat.ui_init();
	i18n.ui_init();

	uiu.text_qs('.version', bup_version);

	$('#script_jspdf').on('load', function() {
		scoresheet.jspdf_loaded();
		setupsheet.jspdf_loaded();
	});
	$('#script_pdfform').on('load', eventsheet.loaded('pdfform'));
	$('#script_jszip').on('load', eventsheet.loaded('jszip'));

	report_problem.ui_init(); // First because it reports problems in all other modules
	dads.ui_init(state); // Most be before settings

	editmode.ui_init();
	scoresheet.ui_init();
	timer.ui_init();
	control.ui_init();
	startmatch.ui_init();
	settings.ui_init(state);
	eventsheet.ui_init();
	stats.ui_init();
	order.ui_init();
	importexport.ui_init();
	urlimport.ui_init();
	editevent.ui_init();
	setupsheet.ui_init();
	shortcuts.ui_init(state);
	refmode_client_ui.ui_init(state);
	refmode_referee_ui.ui_init();
	printing.set_orientation('landscape');

	var hash_query = utils.parse_query_string(window.location.hash.substr(1));
	if (hash_query.lang) {
		settings.change(state, 'language', hash_query.lang);
	}
	var hub_url = hash_query.hub_url;
	if (hub_url) {
		settings.change_all(state, {
			refmode_client_ws_url: hub_url,
			refmode_referee_ws_url: hub_url,
		});
	}
	displaymode.ui_init(state, hash_query);
	network.ui_init(state, hash_query);
	buphistory.ui_init();
	buphistory.kickoff();

	if (state.settings.go_fullscreen) {
		fullscreen.autostart();
	}
}


	init();
	document.addEventListener('DOMContentLoaded', ui_init);


})();


