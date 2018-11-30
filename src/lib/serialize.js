const serialize = (form) =>{

    let data = new Object()
    let fieldEmpty = false
    for ( var i = 0 ; i < form.target.elements.length ; i++ ){
        if( form.target.elements[i].type === 'text' || form.target.elements[i].type === 'checkbox' ){
            form.target.elements[i].classList.remove('error-input')
            if(form.target.elements[i].type === 'checkbox'){
                
                data[form.target.elements[i].name] = form.target.elements[i].checked
            }else{
                data[form.target.elements[i].name] = form.target.elements[i].value
            }
            if (form.target.elements[i].value === ''){
                console.log(form.target.elements[i].name)
                fieldEmpty= true
                form.target.elements[i].classList.add('error-input')
            }
            
        }

    }
    if(!fieldEmpty){
        return {
            result: 'success',
            data
        }

    }else{
        return {
            result: 'error',
            data
        }
    }

}

export default serialize