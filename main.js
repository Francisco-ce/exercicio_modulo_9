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
    })

    $('.selecao-atividade').click(function(){
        $(this).css({'text-decoration':'line-through'});
    })


})