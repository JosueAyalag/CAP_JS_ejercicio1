import '../styles/index.scss';
import {corridasWeb} from './corridasWeb';


   

    function busc(){

        
        // corridasWeb.forEach(element => console.log( 
        //      `
        //      numeroCorrida: ${element.numeroCorrida},
        //      descripcionServicio: ${element.descripcionServicio}, 
        //      Empresa: ${element.empresa}, 
        //      descripcionEmpresa: ${element.descripcionEmpresa}`) );
            
                if(corridasWeb.listaDescuentos == true){
                    corridasWeb.forEach(element => console.log( 
                        `
                        numeroCorrida: ${element.numeroCorrida},
                        descripcionServicio: ${element.descripcionServicio}, 
                        Empresa: ${element.empresa}, 
                        descripcionEmpresa: ${element.descripcionEmpresa}
                        listaDescuentos: ${element.listaDescuentos}`) );
                }else{
                    corridasWeb.forEach(element => console.log( 
                        `
                        numeroCorrida: ${element.numeroCorrida},
                        descripcionServicio: ${element.descripcionServicio}, 
                        Empresa: ${element.empresa}, 
                        descripcionEmpresa: ${element.descripcionEmpresa}`) );
                }
    };
      
    
  busc();
  
