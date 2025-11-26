const start = () => {
    
    while(true){
        let opção = "cadastrar"
        switch(opção){
            case "cadastrar":
                console.log("Vamos cadastrar um usuário!");
                break
            case "listar":
                console.log("Vamos listar");
                break
            case "sair":
                return
        }
    }
}

start();