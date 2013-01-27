/* ria.exos.flatland.be - Notes de cours en ligne pour le cours de RIA - Applications Internet Riches
 * JS Document - /html5/dragnfile/js/script.js
 * november 2012
 */

/*jslint regexp: true, vars: true, white: true, browser: true */
/*jshint nonstandard: true, browser: true, boss: true */
/*global jQuery */

( function ( $ ) {
	"use strict";

	// -- globals

	var ajoutPanier = function(e){
		$(this).fadeOut('slow', function(){
			$(this).parent().append("<div class=\"added\">Ajouté avec succès</div>");
		});
	};
	
	var updateTotal = function(e){
		var prix, sub, total = 0;
		
		var prix = $(this).parent().parent().find(".basketPrice").text();
		var sub = $(this).parent().parent().find(".basketSubPrice");
		
		prix = parseFloat(prix.split(" ")[0]);
		sub.text((prix*$(this).val()) + " €");
		
		/* On update le total final */
		$('.basketSubPrice').each(function(i, obj) {
		    total += parseFloat($(this).text().split(" ")[0]);
		});
		
		$('.basketTotal').text(total + " €");
	};
	
	var deleteItem = function(e){
		$(this).parent().parent().fadeOut();
	};
	

	$( function () {
		var total = 0;
		$(".addBasket").on("click", ajoutPanier);
		$(".itemPicker").on("click", updateTotal);
		$(".deleteItem").on("click", deleteItem);
		
		/* On update le total final */
		$('.basketSubPrice').each(function(i, obj) {
		    total += parseFloat($(this).text().split(" ")[0]);
		});
		
		$('.basketTotal').text(total + " €");
	} );

}( jQuery ) );
