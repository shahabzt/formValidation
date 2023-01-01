const forms = document.getElementsByClassName('needs-validation')
const validFn = () => {


    Array.prototype.slice.call(forms)
        .forEach( (form)=> {
            form.addEventListener('submit', function (e) {
                if (!form.checkValidity()) {
                    e.preventDefault()
                    e.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
}

validFn(forms)