$(document).ready(function(){

    $('.container button').click(function(){
        $('nav').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('nav').slideUp();
    })

    $('#botao-adicionar').click(function(){
        const descicaoAtividade = $('#nova-atividade').val();
        const novoItem = $(`<div class="selecao-atividade"> 
                                <li>
                                    ${descicaoAtividade} 
                                </li>
                            </div>`);
        $(novoItem).appendTo('ul');
        $('#nova-atividade').val('');


        $(novoItem).click(function(){
            $(novoItem).css({'text-decoration':'line-through'});
        })

        $(novoItem).dblclick(function(){
            $(novoItem).css({'text-decoration':'none'});
        })
    })

})