require('materialize-css');
require('materialize-css/dist/css/materialize.css');
require('materialize-css/dist/js/materialize.min.js');
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.min.js');
require('../css/app.css');
const $ = require('jquery');

$('select').formSelect();

$('.leagueTeams__button').click(function ($event) {
	$event.preventDefault();
	$('.esportToggled').slideToggle();
	$('.leagueTeams').toggleClass('opened')
});

$('.dropdown-trigger').dropdown();

$('.dismiss').click(function ($event) {
	$event.preventDefault();
	$(this).parent().fadeOut();
});

$('#news__categories').change(function ($event) {
	$event.preventDefault();
	console.log(window.location);
	window.location.href = window.location.origin + window.location.pathname + '?tag=' + $(this).val().toLowerCase();
});
