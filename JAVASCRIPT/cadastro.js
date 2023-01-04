let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
	file.click();
});

file.addEventListener('change', () => {

	if (file.files.length <= 0) {
		return;
	}

	let reader = new FileReader();

	reader.onload = () => {
		photo.src = reader.result;
	}

	reader.readAsDataURL(file.files[0]);
});

$("#datanascimento").on('blur', function () {
	calcular_idade();
});

function calcular_idade() {
	if ($('datanascimento').val() != '') {
		var dataInput = new Date($("#datanascimento").val());
		if (!isNaN(dataInput)) {
			var dataAtual = new Date();
			var diferenca = dataAtual.getFullYear() - dataInput.getFullYear();
			document.getElementById('idade').value = diferenca;
			console.log("gg");
			return true;
		}
	}
	return false;
}
calcular_idade();


function validarCPF() {

	// cpf = '04909331140'
	var valor = document.querySelector("#valor").value;
	console.log(document.querySelector("#valor").value)


	// valor = '';
	valor = valor.replace(/[^\d]+/g, '');
	if (valor == '') {
		alert("Insira um CPF")
		return false
	} else {
		// Elimina CPFs invalidos conhecidos
		if (valor.length != 11 ||
			valor == "00000000000" ||
			valor == "11111111111" ||
			valor == "22222222222" ||
			valor == "33333333333" ||
			valor == "44444444444" ||
			valor == "55555555555" ||
			valor == "66666666666" ||
			valor == "77777777777" ||
			valor == "88888888888" ||
			valor == "99999999999") {
			alert("CPF Invalido")
			return false;
		}

		// Valida 1o digito	
		add = 0;
		for (i = 0; i < 9; i++)
			add += parseInt(valor.charAt(i)) * (10 - i);
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11)
			rev = 0;
		if (rev != parseInt(valor.charAt(9))) {
			alert("CPF Invalido")
			return false;
		}
		// Valida 2o digito	
		add = 0;
		for (i = 0; i < 10; i++)
			add += parseInt(valor.charAt(i)) * (11 - i);
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11)
			rev = 0;
		if (rev != parseInt(valor.charAt(10))) {
			alert("CPF Invalido")
			return false;

		}
		alert("Ok")
		return true;
	};


}
function mascara(i){
   
	var v = i.value;
	
	if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
	   i.value = v.substring(0, v.length-1);
	   return;
	}
	
	i.setAttribute("maxlength", "14");
	if (v.length == 3 || v.length == 7) i.value += ".";
	if (v.length == 11) i.value += "-";
 
 }
 

function verificaCbo(){
	var preencheCargo = document.getElementById("cbo").value;
	console.log("peguei")
	if (preencheCargo == "1") {
	document.getElementById('cargo').value = "ABACAXICULTOR";
	}
	if (preencheCargo == "2") {
	document.getElementById('cargo').value = "ABADE";
	}
	if (preencheCargo == "3") {
	document.getElementById('cargo').value = "ABADESSA";
	}
	if (preencheCargo == "4") {
	document.getElementById('cargo').value = "ABANADOR NA AGRICULTURA";
	}
	if (preencheCargo == "5") {
	document.getElementById('cargo').value = "ABASTECEDOR DE CALDEIRA";
	}
	if (preencheCargo == "6") {
	document.getElementById('cargo').value = "ABASTECEDOR DE COMBUSTÍVEL DE AERONAVE";
	}
	if (preencheCargo == "7") {
	document.getElementById('cargo').value = "ABASTECEDOR DE LINHA DE PRODUÇÃO";
	}
	if (preencheCargo == "8") {
	document.getElementById('cargo').value = "ABASTECEDOR DE MÁQUINAS DE LINHA DE PRODUÇÃO";
	}
	if (preencheCargo == "9") {
	document.getElementById('cargo').value = "ABASTECEDOR DE SILOS DE CARVÃO";
	}
	if (preencheCargo == "10") {
	document.getElementById('cargo').value = "ABATEDOR";
	}
}