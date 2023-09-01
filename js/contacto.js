body.style.backgroundColor = '#DFCFB7'
const main = d.createElement('main')
main.className = "mainContacto"
body.appendChild(main)

class Usuario{
    constructor(email, texto){
        this.email = email
        this.texto = texto
    }
    async enviarEmail(){
        var data = {
            service_id: 'service_g349axf',
            template_id: 'template_absgcp3',
            user_id: 'nXCTnROCHmFDanZx6',
            template_params: {
                'from_email': this.email,
                'message': this.texto,
            }
        };
        
        const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json"
            }
        })
        if(resp.status > 300){
            await Swal.fire({
                icon: 'error',
                text: 'Por favor enviar el formulario nuevamente',
                timer: 5000   
            })
            return
        }
        await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su mensaje ha sido enviado con exito',
            showConfirmButton: true,
            timer: 5000
        })
        window.location.href = './contacto.html' 
    }
}

const contacto = d.createElement('form')
contacto.classList = "contacto"
contacto.id= "enviarFormulario"

contacto.innerHTML = `<h3>¡Contactanos!</h3>
                    <label for="exampleFormControlInput1" class="form-label">*Email</label>
                    <input type="email" class="form-control" id="emailUsuario" placeholder="nombre@gmail.com" required>
                    <br>
                    <label for="exampleFormControlTextarea1" class="form-label">*Mensaje</label>
                    <textarea class="form-control" id="mensajeUsuario" rows="3"></textarea>
                    <br>
                    <div class="divEnviar">
                        <input type="submit" class="btn btn-secondary enviar" value="ENVIAR" >
                    </div>`
main.appendChild(contacto)
                    
const enviarFormulario = d.getElementById('enviarFormulario')
enviarFormulario.addEventListener('submit', async (e) => {
    
    e.preventDefault()

    let form = e.target
    let email = d.getElementById('emailUsuario').value
    let texto = d.getElementById('mensajeUsuario').value

    if (email === '' || texto === '') {
        await Swal.fire({
            icon: 'error',
            text: 'Ambos campos son obligatorios',
            timer: 5000
        })
        return
    }          
    let usuarios = new Usuario(email,texto)
    await usuarios.enviarEmail()
})