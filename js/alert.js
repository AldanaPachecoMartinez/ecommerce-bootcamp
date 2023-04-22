
function showAlert(text, type = 'sucess') {
    
        
    const alertDialog = document.createElement('div');

    alertDialog.classList.add('alert-dialog');
    
    alertDialog.innerHTML = "<i class='fa-solid fa-user-check'></i>" + '<p class= "alert-text">' + text + '</p>';
    
    document.body.appendChild(alertDialog);
    if(type === 'error') {
        alertDialog.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>' + '<p class= "alert-text">' + text + '</p>';
    }
    if(type === 'warning') {
        alertDialog.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>' + '<p class= "alert-text">' + text + '</p>';
    }

    setTimeout(() => alertDialog.classList.add('show'), 10)

    setTimeout(() => {
        alertDialog.classList.remove('show');

        setTimeout(() => {
            alertDialog.remove();
        }, 1000)

    }, 3000);

}  
