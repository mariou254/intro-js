function listUser(){
    var listUsuario=JSON.parse(localStorage.getItem('listUsuario'))

if (listUsuario=null){
    userList[{nombre:"alvaro",
    pasword:'123',}
    ]
}
return listUsuario
}
function validar(pCorreo,pPaswword){
    var listaUsuario=listUser();
    var acceso=false;
    for(var i=0;i<listUser.length;i++){
        if(pCorreo==listaUsuario[i][0]&&pPaswword==listUser[i][1]){
            acceso=true
            sessionStorage.setItem('usuarioActivo',listUser[üsuario])
        }
        
    }
    return acceso
}