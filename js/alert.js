
function showAlert(text, type = 'sucess') {
    
        
    const alertDialog = document.createElement('div');
    
    alertDialog.classList.add('alert-dialog');
    alertDialog.innerText = text;
    document.body.appendChild(alertDialog);
    
    if(type === 'error') {
        alertDialog.style.backgroundColor = 'red';
    }
    if(type === 'warning') {
        alertDialog.style.backgroundColor =  'orangered'
    }

    setTimeout(() => alertDialog.classList.add('show'), 10)

    setTimeout(() => {
        alertDialog.classList.remove('show');

        setTimeout(() => {
            alertDialog.remove();
        }, 1000)

    }, 3000);

}  
