const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5) //biblioteca do próprio js para data no momento atual
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert('Dia já está incluso nas suas anotações! ❌')
        return
    }

    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem('NLWSetup@memory', JSON.stringify(nlwSetup.data))
    //localStorage - guarda as informações dentro do navegador
}

const data = JSON.parse(localStorage.getItem('NLWSetup@memory')) || {} //|| = ou se o objeto estiver vazio ele vai atribuir
nlwSetup.setData(data)
nlwSetup.load()