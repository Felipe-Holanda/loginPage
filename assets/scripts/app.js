//computar se o modal está sendo exibido.
let isModalAppearing = false;

document.querySelector('.modal').style.display = 'none'

function modalShow() {
    document.querySelector('.modal').style.display = 'flex'
    isModalAppearing = true;
}

function modalHide() {
    document.querySelector('.modal form').animate([
        { scale: 1 },
        { scale: 0.75 },
        { scale: 0.50 },
        { scale: 0.25 },
        { scale: 0 }
    ], { duration: 1000 })
    setTimeout(() => {
        document.querySelector('.modal').animate([
            { opacity: 1 },
            { opacity: 0.75 },
            { opacity: 0.5 },
            { opacity: 0.25 },
            { opacity: 0 }
        ], { duration: 1500 })
    }, 999)
    setTimeout(() => {
        document.querySelector('.modal').style.display = 'none';
    }, 989)
    isModalAppearing = false;
}


//Clicou no button de login
document.querySelector('#loginBtn').addEventListener('click', () => {
    event.preventDefault();
    const mail = document.querySelectorAll('main form input')[0]
    const pass = document.querySelectorAll('main form input')[1]
    if ((mail.value).length <= 0) {
        mail.style = "outline: 1px solid red; color: red; text-align: center;";
        mail.placeholder = 'Este campo é obrigatório!'
        setTimeout(() => {
            mail.style = "outline: none; color: black; text-align: left;";
            mail.placeholder = 'Insira o seu e-mail'
        }, 3000)
    }
    if ((pass.value).length <= 0) {
        pass.style = "outline: 1px solid red; color: red; text-align: center;";
        pass.placeholder = 'Este campo é obrigatório!'
        setTimeout(() => {
            pass.style = "outline: none; color: black; text-align: left;";
            pass.placeholder = 'Insira a sua senha'
        }, 3000)
    }
})

//Clicou no Esqueceu a senha
document.querySelector('#forgotPass').addEventListener('click', () => {
    modalShow()
})

//Elementos dentro do modal.
document.querySelector('#closeBtn').addEventListener('click', () => {
    modalHide()
})

// Clicou no botão de recover sem preencher o campo de e-mail.
document.querySelector('#recoverBtn').addEventListener('click', () => {
    event.preventDefault();
    const recoverInput = document.querySelector('#email').value;
    if (recoverInput.length <= 0) {
        document.querySelector('#email').style = "outline: 1px solid red; color: red; text-align: center;";
        document.querySelector('#email').placeholder = 'Este campo é obrigatório!'
        setTimeout(() => {
            document.querySelector('#email').style = "outline: none; color: black; text-align: left;";
            document.querySelector('#email').placeholder = 'E-mail de recuperação'
        }, 3000)
    }
})

// Mudando o Slogan dinamicamente
function displayHints() {
    hintsArr = [
        "Promovendo serviços de alta qualidade e bom custo benefício desde 2007",
        "Você sabia que nossa plataforma permite a recepção de pagamentos tipo PIX sem custo adicional?",
        "No plano Business, você pode utilizar nossa plataforma para emitir notas de pagamentos!",
        "Você pode aumentar o seu plano na quantidade que desejar?!",
        "Atualmente possuímos 819 clientes ativos!",
        "Ao acessar o seu Dashboad, sempre verifique suas notificações!",
        "Clientes Business e Enterprise também podem utilizar nossas soluções de pagamentos!"
    ]
    document.getElementById("hints").innerText = hintsArr[Math.floor(Math.random() * hintsArr.length)]
}

displayHints()