


// função clica dispara comandos do bloco quando aperto em verificar
function clica ()
 /*colchete que abre o bloco*/ {

        //definindo as variaveis de data
        
        var data = new Date()  //variavel que chama a data

        var ano = data.getFullYear() // variavel que chamaano do sistema

        //variavel que chama valores da caixa do input html
        var fano  = document.getElementById('txano')

       // variavel que altera o texto da id html e exibe o resultado 
        var res = document.getElementById('res')

       /*valores igual a zero ou maiores que o ano*/
        if (fano.value.length == 0 || fano.value > ano) { window.alert('erro')
    } else { 
            //variavel que chama os input de masculino e feminino 
            var fsex = document.getElementsByName('radsex')
            
            //variavel que calcula a idade com base nos dados de entrada
            var idade = ano - Number(fano.value)
            
            //variavel que vai ser preenchida com o valor do genero marcado

            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id','foto')

            if (fsex[0].checked) { 
                genero='Homem'
                if (idade >=0 && idade < 10) { img.setAttribute('src', 'homem-bb.png')}
                else if (idade < 21) {img.setAttribute('src', 'homem-criança.png')}
                else if ( idade < 50){img.setAttribute('src', 'homem-adulto.png')}
                else {img.setAttribute('src', 'homem-idoso.png')}
            
            
            } else if (fsex[1].checked) { genero = 'mulher'

            if (idade >=0 && idade < 10) {img.setAttribute('src', 'mulher-bb.png')}
                else if (idade < 21) {img.setAttribute('src', 'mulher-criança.png')}
                else if ( idade < 50){img.setAttribute('src', 'mulher.jovem  .png')}
                else {img.setAttribute('src', 'mulher-idoso.png')}
            
            
            }

                res.innerHTML = `${genero} com ${idade}`
                res.appendChild(img)
            }

          







/*colchete que fecha  o bloco*/ }