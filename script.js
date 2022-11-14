
function play(){
    let dog = document.getElementById('dog')
    dog.play()
    dog.currentTime = 0.3
}
function regp(){
    let reg = document.getElementById('reg')
    reg.play()
    reg.currentTime = 0
}
function migp(){
    let mig = document.getElementById('mig')
    mig.play()
    mig.currentTime = 0
}
function fagp(){
    let fag = document.getElementById('fag')
    fag.play()
    fag.currentTime = 0
}
function solgp(){
    let solg = document.getElementById('solg')
    solg.play()
    solg.currentTime = 0
}
function lagp(){
    let lag = document.getElementById('lag')
    lag.play()
    lag.currentTime = 0
}
function sigp(){
    let sig = document.getElementById('sig')
    sig.play()
    sig.currentTime = 0
}
function domp(){
    let dom = document.getElementById('dom')
    dom.play()
    dom.currentTime = 0
}
function remp(){
    let rem = document.getElementById('rem')
    rem.play()
    rem.currentTime = 0
}
function mimp(){
    let mim = document.getElementById('mim')
    mim.play()
    mim.currentTime = 0
}
function famp(){
    let fam = document.getElementById('fam')
    fam.play()
    fam.currentTime = 0
}
function solmp(){
    let solm = document.getElementById('solm')
    solm.play()
    solm.currentTime = 0
}
function lamp(){
    let lam = document.getElementById('lam')
    lam.play()
    lam.currentTime = 0
}
function simp(){
    let sim = document.getElementById('sim')
    sim.play()
    sim.currentTime = 0
}

const body = document.getElementById('body')
const um = document.getElementById('um')
const dois = document.getElementById('dois')
const tres = document.getElementById('tres')
const quatro = document.getElementById('quatro')
const cinco = document.getElementById('cinco')
const seis = document.getElementById('seis')
const sete = document.getElementById('sete')
const oito = document.getElementById('oito')
const nove = document.getElementById('nove')
const dez = document.getElementById('dez')
const onze = document.getElementById('onze')
const doze = document.getElementById('doze')
const treze = document.getElementById('treze')
const quatorze = document.getElementById('quatorze')
const primeira = document.getElementById('primeira')
const segunda = document.getElementById('segunda')
const terceira = document.getElementById('terceira')
const quarta = document.getElementById('quarta')
const quinta = document.getElementById('quinta')
const sexta = document.getElementById('sexta')
const setima = document.getElementById('setima')
const oitava = document.getElementById('oitava')
const nona = document.getElementById('nona')
const decima = document.getElementById('decima')
um.addEventListener('click', play)
dois.addEventListener('click', regp)
tres.addEventListener('click', migp)
quatro.addEventListener('click', fagp)
cinco.addEventListener('click', solgp)
seis.addEventListener('click', lagp)
sete.addEventListener('click', sigp)
oito.addEventListener('click', domp)
nove.addEventListener('click', remp)
dez.addEventListener('click', mimp)
onze.addEventListener('click', famp)
doze.addEventListener('click', solmp)
treze.addEventListener('click', lamp)
quatorze.addEventListener('click', simp)
primeira.addEventListener('click', dore)
segunda.addEventListener('click', remi)
terceira.addEventListener('click', faso)
quarta.addEventListener('click', sola)
quinta.addEventListener('click', lasi)
sexta.addEventListener('click', dorem)
setima.addEventListener('click', remim)
oitava.addEventListener('click', fasom)
nona.addEventListener('click', solam)
decima.addEventListener('click', lasim)
function dore(){
    let dore = document.getElementById('dore')
    dore.play()
    dore.currentTime = 0
}
function remi(){
    let remi = document.getElementById('remi')
    remi.play()
    remi.currentTime = 0
}
function faso(){
    let faso = document.getElementById('faso')
    faso.play()
    faso.currentTime = 0
}
function sola(){
    let sola = document.getElementById('sola')
    sola.play()
    sola.currentTime = 0
}
function lasi(){
    let lasi = document.getElementById('lasi')
    lasi.play()
    lasi.currentTime = 0
}
function dorem(){
    let dorem = document.getElementById('dorem')
    dorem.play()
    dorem.currentTime = 0
}
function remim(){
    let remim = document.getElementById('remim')
    remim.play()
    remim.currentTime = 0
}
function fasom(){
    let fasom = document.getElementById('fasom')
    fasom.play()
    fasom.currentTime = 0
}
function solam(){
    let solam = document.getElementById('solam')
    solam.play()
    solam.currentTime = 0
}
function lasim(){
    let lasim = document.getElementById('lasim')
    lasim.play()
    lasim.currentTime = 0
}

body.addEventListener('keypress', (e)=> {
    
    if (e.key === '1'){play()} 
    else if (e.key === '2'){regp()}
    else if (e.key === '3'){migp()}
    else if (e.key === '4'){fagp()}
    else if (e.key === '5'){solgp()}
    else if (e.key === '6'){lagp()}
    else if (e.key === '7'){sigp()}
    else if (e.key === '8'){domp()}
    else if (e.key === '9'){remp()}
    else if (e.key === '0'){mimp()}
    else if (e.key === '-'){famp()}
    else if (e.key === '='){solmp()}
    else if (e.key === 'o'){lamp()}
    else if (e.key === 'p'){simp()}
    else if (e.key === 'q'){dore()}
    else if (e.key === 'w'){remi()}
    else if (e.key === 'e'){faso()}
    else if (e.key === 'r'){sola()}
    else if (e.key === 't'){lasi()}
    else if (e.key === 'a'){dorem()}
    else if (e.key === 's'){remim()}
    else if (e.key === 'd'){fasom()}
    else if (e.key === 'f'){solam()}
    else if (e.key === 'g'){lasim()}
})
