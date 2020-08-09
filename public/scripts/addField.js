// procurar o botão
document.querySelector('#add-time')

//quando clicar no botão
.addEventListener('click', cloneField) 

//excuatar uma ação
function cloneField(){
    //duplicar os campos, que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true, false

    //pegar os campos, de novo que campos ??
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e lempa 
        field.value = ''

    })

    //colocar na página, mas onde ??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}