
(function($){"use strict";var ajoutPanier=function(e){$(this).fadeOut('slow',function(){$(this).parent().append("<div class=\"added\">Ajouté avec succès</div>");});};var updateTotal=function(e){var prix,sub,total=0;var prix=$(this).parent().parent().find(".basketPrice").text();var sub=$(this).parent().parent().find(".basketSubPrice");if(($(this).val()<1||isNaN($(this).val()))&&$(this).val()!="")
{$(this).val(1);}
else
{prix=parseFloat(prix.split(" ")[0]);sub.text((Math.round(prix*$(this).val()*100)/100)+" €");$('.basketSubPrice').each(function(i,obj){total+=parseFloat($(this).text().split(" ")[0]);});$('.basketTotal').text(Math.round(total*100)/100+" €");}};var itemPlus=function(e){var prix,nombre,sub,total=0;var prix=$(this).parent().parent().find(".basketPrice").text();var sub=$(this).parent().parent().find(".basketSubPrice");var nombre=parseInt($(this).parent().find('.itemPicker').val());nombre++;$(this).parent().find('.itemPicker').val(nombre);prix=parseFloat(prix.split(" ")[0]);sub.text((Math.round(prix*nombre*100)/100)+" €");$('.basketSubPrice').each(function(i,obj){total+=parseFloat($(this).text().split(" ")[0]);});$('.basketTotal').text(Math.round(total*100)/100+" €");};var itemMinus=function(e){var prix,nombre,sub,total=0;var prix=$(this).parent().parent().find(".basketPrice").text();var sub=$(this).parent().parent().find(".basketSubPrice");var nombre=parseInt($(this).parent().find('.itemPicker').val());if(nombre>1)
{nombre--;$(this).parent().find('.itemPicker').val(nombre);prix=parseFloat(prix.split(" ")[0]);sub.text((Math.round(prix*nombre*100)/100)+" €");$('.basketSubPrice').each(function(i,obj){total+=parseFloat($(this).text().split(" ")[0]);});$('.basketTotal').text(Math.round(total*100)/100+" €");}};var deleteItem=function(e){$(this).parent().parent().fadeOut();};$(function(){var total=0;$(".addBasket").on("click",ajoutPanier);$(".itemPicker").on("keyup",updateTotal);$(".itemPlus").on("click",itemPlus);$(".itemMinus").on("click",itemMinus);$(".deleteItem").on("click",deleteItem);$('.basketSubPrice').each(function(i,obj){total+=parseFloat($(this).text().split(" ")[0]);});$('.basketTotal').text(total+" €");});}(jQuery));