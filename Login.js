function validarFormulario() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    return  true;
}

// MOSTRA/OCUTAR SENHA

function mostraSenha(){
    var x = document.getElementById('senha');
    if (x.type === 'passaword') {
        x.type = 'text';
    } else{
        x.type = 'passaword';
    }
}


// LEMBRA SENHA

// function lembrarMe() {
//     // Utilizar localStorage ou cookies para armazenar as credenciais
//     if (document.getElementById('lembrar').checked) {
//       localStorage.setItem('email', document.getElementById('email').value);
//       localStorage.setItem('senha', document.getElementById('senha').value);   
  
//     } else {
//       localStorage.removeItem('email');
//       localStorage.removeItem('senha');
//     }
//   }


