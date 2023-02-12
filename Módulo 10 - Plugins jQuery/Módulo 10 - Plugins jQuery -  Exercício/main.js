$(document).ready(function() {


        $('#telefone').mask('(00) 00000-0000') 
        $('#cep').mask('00000-000') 
        $('#cpf').mask('000.000.000-00') 
        
        $('form').validate( {

            rules: {
                nome: {
                    required: true
                },
                telefone: {
                    required: true,
                    email: true
                },
                email: {
                    required: true
                },
                endereco:{
                    required: true
                },
                cep: {
                    required: true
                },
                cpf: {
                    required: true
                }
            },

            message: {
                nome: 'Por favor, insira seu nome',
                email: 'Por favor, insira um e-mail válido',
                telefone: 'Por favor, insira um número de telefone válido',
                cpf: 'Por favor, insira um CPF válido',
                cep: 'Por favor, insira um CEP válido'
            },                                                                // É muito importante colocar a virgula no final de cada chave


            submitHandler: function(form) {
                console.log(form)
            },
            invalidHandler: function(evento, validador) {
                let camposIncorretos = validador.numberOfInvalids()
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                }
            },

        })


})
