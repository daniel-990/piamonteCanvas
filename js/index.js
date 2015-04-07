$(document).ready(function(e) {
	
	/*var lvol = true;
	
	if(lvol == true)
	{
		document.getElementById("spambiente").play();
		document.getElementById("spmusic").play();
	}else
	{
		document.getElementById("spambiente").pause();
		document.getElementById("spmusic").pause();
	}*/
	
	document.getElementById("spambiente").play();
		document.getElementById("spmusic").play();

	$("#highvl").click(function(){
		
	/*lvol = true;*/
	document.getElementById("spambiente").play();
		document.getElementById("spmusic").play();
		
		});
		
	$("#mutvl").click(function(){
		
	/*lvol = false;*/
	document.getElementById("spambiente").pause();
		document.getElementById("spmusic").pause();
	
		});
	
	$("#fredypp").click(function(){
		
		window.open("https://www.behance.net/graphfa");
		document.getElementById("sabrir").play();
		
		});
		
	$("#juanpp").click(function(){
		
		window.open("https://www.behance.net/JuanArroyave");
		document.getElementById("sabrir").play();
		
		});
		
	$("#luisapp").click(function(){
		
		window.open("https://www.behance.net/asiul");
		document.getElementById("sabrir").play();
		
		});
		
	$("#luispp").click(function(){
		
		window.open("https://www.behance.net/luiserovira");
		document.getElementById("sabrir").play();
		
		});
		
	$("#alexpp").click(function(){
		
		window.open("https://www.behance.net/AlexRoldanr");
		document.getElementById("sabrir").play();
		
		});
		
	$("#danielpp").click(function(){
		
		window.open("https://www.behance.net/danielarango");
		document.getElementById("sabrir").play();
		
		});
	
	if(localStorage.nicck == null)
	{
//		alert('Aun No te Has Registrado');
		//document.location.href = 'http://www.metropol.gov.co/portal/juego/apurate/apurate.html'
	}
	
	$("#creditos").click(function(){
		$("#cdcreditos").slideDown();
		document.getElementById("sabrir").play();	
		});
		
	$("#cerrarcrt").click(function(){
		$("#cdcreditos").slideUp();
		document.getElementById("scerrar").play();	
		});
	
	$("#imgavatar").click(function(){
		
		$("#viewestad").fadeIn();
	    document.getElementById("sabrir").play();
		});
		
	$("#cerrarvw").click(function(){
		
		$("#viewestad").fadeOut();
		document.getElementById("scerrar").play();
		});
		
	$("#eliminarpj").click(function(){
		
		document.getElementById("sabrir").play();
		$("#modalert").fadeIn();
		$("#viewestad").fadeOut();
		
		});
		
	$("#cerrarmt").click(function(){
		
		document.getElementById("scerrar").play();
		$("#modalert").fadeOut();
		
		});
		
	$("#confirm").click(function(){
		
		localStorage.clear();
		localStorage.removeItem('nicck');
		localStorage.removeItem('idavatar');
		document.getElementById("scerrar").play();
		$("#modalert").fadeOut();
//		document.location.href = 'http://www.metropol.gov.co/portal/juego/apurate/indexppl.html';
		
		});
		
	$("#modalert p").text('Estas Seguro Que Deseas Eliminar a  "' + localStorage.nicck + '"  Se Borrara Todo tu Proceso.');
	
	if(localStorage.ppiamonte == null){
		
		localStorage.ppiamonte = '0';
		
	}
	
	if(localStorage.pvolador == null){
		
		localStorage.pvolador = '0';
		
	}
	
	if(localStorage.pnutibara == null){
		
		localStorage.pnutibara = '0';
		
	}
	
	if(localStorage.pasomadera == null){
		
		localStorage.pasomadera = '0';
		
	}
	
	if(localStorage.pp1 == null){
		
		localStorage.pp1 = '0';
		
	}
	
	if(localStorage.pp2 == null){
		
		localStorage.pp2 = '0';
		
	}
	
	if(localStorage.pp3 == null){
		
		localStorage.pp3 = '0';
		
	}
	
	if(localStorage.pp4 == null){
		
		localStorage.pp4 = '0';
		
	}
	
	if(localStorage.pp5 == null){
		
		localStorage.pp5 = '0';
		
	}
	
	if(localStorage.pp6 == null){
		
		localStorage.pp6 = '0';
		
	}
	
	if(localStorage.pp7 == null){
		
		localStorage.pp7 = '0';
		
	}
	
	if(localStorage.pp8 == null){
		
		localStorage.pp8 = '0';
		
	}
	
	if(localStorage.pp9 == null){
		
		localStorage.pp9 = '0';
		
	}
	
	if(localStorage.pp10 == null){
		
		localStorage.pp10 = '0';
		
	}
	
	if(localStorage.pp11 == null){
		
		localStorage.pp11 = '0';
		
	}
	
	if(localStorage.pp12 == null){
		
		localStorage.pp12 = '0';
		
	}
	
	if(localStorage.pp13 == null){
		
		localStorage.pp13 = '0';
		
	}
	
	if(localStorage.pp14 == null){
		
		localStorage.pp14 = '0';
		
	}
	
	if(localStorage.pp15 == null){
		
		localStorage.pp15 = '0';
		
	}
	
	var ipuntospiamonte = localStorage.ppiamonte;
	var ipuntosvolador = localStorage.pvolador;
	var ipuntosnutibara = localStorage.pnutibara;
	var ipuntosasomadera = localStorage.pasomadera;
	var ipuntosp1 = localStorage.pp1;
	var ipuntosp2 = localStorage.pp2;
	var ipuntosp3 = localStorage.pp3;
	var ipuntosp4 = localStorage.pp4;
	var ipuntosp5 = localStorage.pp5;
	var ipuntosp6 = localStorage.pp6;
	var ipuntosp7 = localStorage.pp7;
	var ipuntosp8 = localStorage.pp8;
	var ipuntosp9 = localStorage.pp9;
	var ipuntosp10 = localStorage.pp10;
	var ipuntosp11 = localStorage.pp11;
	var ipuntosp12 = localStorage.pp12;
	var ipuntosp13 = localStorage.pp13;
	var ipuntosp14 = localStorage.pp14;
	var ipuntosp15 = localStorage.pp15;
	var ipuntoscplt = parseInt(ipuntospiamonte) + parseInt(ipuntosvolador) + parseInt(ipuntosnutibara) + parseInt(ipuntosasomadera) + parseInt(ipuntosp1) + parseInt(ipuntosp2) + parseInt(ipuntosp3) + parseInt(ipuntosp4) + parseInt(ipuntosp5) + parseInt(ipuntosp6) + parseInt(ipuntosp7) + parseInt(ipuntosp8) + parseInt(ipuntosp9) + parseInt(ipuntosp10) + parseInt(ipuntosp11) + parseInt(ipuntosp12) + parseInt(ipuntosp13) + parseInt(ipuntosp14) + parseInt(ipuntosp15);
	
	/*document.getElementById("spambiente").play();*/
	
	$("* a").click(function(){
		
		document.getElementById("sabrir").play();
		
		})
	
	localStorage.base1;
	localStorage.base2;
	localStorage.base3;
	
	if(localStorage.base1 == 'desblockk')
	{
		$("#base-click").addClass("base-desblock")
	}
	
	if(localStorage.base2 == 'desblockk')
	{
		$("#base-click2").addClass("base-desblock")
	}
	
	if(localStorage.base3 == 'desblockk')
	{
		$("#base-click3").addClass("base-desblock")
	}
	

		$("#puntajeprp").text( 'PUNTUACIÓN : ' + ipuntoscplt);
		$("#nickvw").text(localStorage.nicck);
		$("#nickelg").text(localStorage.nicck);
		
		if(localStorage.idavatar == 'Hombrem')
		{
			$("#imgavatar").addClass("elghombrem");
			$("#imgelg").addClass("hombremv");
		}
		
		if(localStorage.idavatar == 'Mujerm')
		{
			$("#imgavatar").addClass("elgmujerm");
			$("#imgelg").addClass("mujermv");
		}
		
		if(localStorage.idavatar == 'Ninom')
		{
			$("#imgavatar").addClass("elgninom");
			$("#imgelg").addClass("ninomv");
		}
		
		if(localStorage.idavatar == 'Ninam')
		{
			$("#imgavatar").addClass("elgninam");
			$("#imgelg").addClass("ninamv");
		}
		
		if(localStorage.idavatar == 'Hombren')
		{
			$("#imgavatar").addClass("elghombren");
			$("#imgelg").addClass("hombrenv");
		}
		
		if(localStorage.idavatar == 'Mujern')
		{
			$("#imgavatar").addClass("elgmujern");
			$("#imgelg").addClass("mujernv");
		}
		
		if(localStorage.idavatar == 'Ninon')
		{
			$("#imgavatar").addClass("elgninon");
			$("#imgelg").addClass("ninonv");
		}
		
		if(localStorage.idavatar == 'Ninan')
		{
			$("#imgavatar").addClass("elgninan");
			$("#imgelg").addClass("ninanv");
		}
		
		if(localStorage.idavatar == 'Hombrei')
		{
			$("#imgavatar").addClass("elghombrei");
			$("#imgelg").addClass("hombreiv");
		}
		
		if(localStorage.idavatar == 'Mujeri')
		{
			$("#imgavatar").addClass("elgmujeri");
			$("#imgelg").addClass("mujeriv");
		}
		
		if(localStorage.idavatar == 'Ninoi')
		{
			$("#imgavatar").addClass("elgninoi");
			$("#imgelg").addClass("ninoiv");
		}
		
		if(localStorage.idavatar == 'Ninai')
		{
			$("#imgavatar").addClass("elgninai");
			$("#imgelg").addClass("ninaiv");
		}
	
	if(localStorage.premio3 == 'cambio')
		{
			$("nav #preguntas1 li").eq(0).addClass("icon-location2");
		}
		
	if(localStorage.premio22 == 'cambio')
		{
			$("nav #preguntas1 li").eq(1).addClass("icon-location2");
		}
		
	if(localStorage.premio14 == 'cambio')
		{
			$("nav #preguntas1 li").eq(2).addClass("icon-location2");
		}
		
	if(localStorage.premio23 == 'cambio')
		{
			$("nav #preguntas2 li").eq(0).addClass("icon-location2");
		}
	
	if(localStorage.premio17 == 'cambio')
		{
			$("nav #preguntas2 li").eq(1).addClass("icon-location2");
		}
		
	if(localStorage.premio26 == 'cambio')
		{
			$("nav #preguntas2 li").eq(2).addClass("icon-location2");
		}
		
	if(localStorage.premio24 == 'cambio')
		{
			$("nav #preguntas3 li").eq(0).addClass("icon-location2");
		}
		
	if(localStorage.premio8 == 'cambio')
		{
			$("nav #preguntas3 li").eq(1).addClass("icon-location2");
		}
		
	if(localStorage.premio21 == 'cambio')
		{
			$("nav #preguntas3 li").eq(2).addClass("icon-location2");
		}
		
	if(localStorage.premio15 == 'cambio')
		{
			$("nav #preguntas4 li").eq(0).addClass("icon-location2");
		}
		
	if(localStorage.premio7 == 'cambio')
		{
			$("nav #preguntas4 li").eq(1).addClass("icon-location2");
		}
		
	if(localStorage.premio8 == 'cambio')
		{
			$("nav #preguntas4 li").eq(2).addClass("icon-location2");
		}
	contador();
	});