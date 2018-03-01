function valida(){
	if (document.getElementById('nome_user').value =='') {
		alert("preencha os campos obrigatórios");
		document.getElementById('nome_user').focus();
	}
	if (document.getElementById('sobrenome_user').value =='') {
		alert("preencha os campos obrigatórios");
		document.getElementById('sobrenome_user').focus();
	}
	if (document.getElementById('email_user').value =='') {
		alert("preencha os campos obrigatórios");
		document.getElementById('email_user').focus();
	}

	if (document.getElementById('senha_user').value =='' || document.getElementById('senha_user') != document.getElementById('senha2_user')) {
		alert("As senhas nao conferem");
		document.getElementById('senha_user').focus();
		document.getElementById('senha2_user').focus();
	}


}