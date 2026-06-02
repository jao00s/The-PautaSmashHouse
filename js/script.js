const form = document.getElementById("formLogin");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const localizacao = document.getElementById("localizacao").value;

    if(email === ""){
        alert("Digite seu e-mail.");
        return;
    }

    if(!email.includes("@")){
        alert("E-mail inválido.");
        return;
    }

    if(telefone.length < 14){
        alert("Telefone inválido.");
        return;
    }

    if(localizacao === ""){
        alert("Digite sua localização.");
        return;
    }

    alert("Login realizado com sucesso!");

    form.reset();
});

const telefone = document.getElementById("telefone");

telefone.addEventListener("input", function(){

    let valor = telefone.value.replace(/\D/g,"");

    valor = valor.replace(/^(\d{2})(\d)/g,"($1) $2");
    valor = valor.replace(/(\d{5})(\d)/,"$1-$2");

    telefone.value = valor;
});