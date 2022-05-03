/* escreva uma função (arrow function) que irá receber os parâmetros cpf, data de nascimento e cep (todos em string)

* e sem formatação, formate-os com regex e exiba no console

*/

const ArroFunction = (cpf, dataNascimento,cep) => {

    const retorno = `${cpf} ${dataNascimento} ${cep}`
      return retorno 
    
    };

console.log(ArroFunction(!!"458.548.488-48".match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}/gmi),
 !!"12/11/1992".match(/^[0-9]{2}\/[0-9]{2}\/[1-9]{4}/gmi),!!"58423-582".match(/^[0-9]{5}\-[0-9]{3}/gmi)))



 const person = {

  firstName: "John",

 lastName: "Doe"
 }

// Dado o objeto acima, extraia cada propriedade com destructuring

 var {firstName, lastName} = person

 console.log(firstName,lastName);

 const person2 = {

     firstName: "John",
    
     lastName: "Doe",
         

     endereco :{
    
     age: 30,
    
     country: "Brazil",
    
     city: "São Paulo",
    
     state: "SP",
    
     postalCode: "01001001",
    
     neighbohur: "Centro"
     }
    
    }
    
    
    
    // Dado o objeto acima, extraia os dados pessoais de John e todo restante (endereço) em uma variável
    
    //chamada endereco, ao final desse exercício, você deve ter apenas 4 variáveis
    
    
    var {firstName, lastName, endereco} = person2

    console.log(firstName,lastName, endereco);