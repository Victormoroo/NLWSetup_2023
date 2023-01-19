const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-01', '01-05', '01-07'],
    gym: ['01-03', '01-08'],
    water: ['01-01', '01-02', '01-03', '01-04'],
    study: ['01-02', '01-02', '01-04', '01-06']
}

nlwSetup.setData(data)
nlwSetup.load()