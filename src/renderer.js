var webview = document.getElementById('foo')
function instagram(){
    document.getElementById('foo').src = 'https://www.instagram.com/?hl=pt-br';
}

function google(){
    document.getElementById('foo').src = 'https://google.com'
}

function flashcore(){
    document.getElementById('foo').src = 'https://www.flashscore.com.br'
}
function menuFlashcore(){
    fecharMenu()

    document.getElementById('menu-flashcore').style.marginLeft= '60px'
}
function flashcoreAoVivo(){
    document.getElementById('foo').src = 'https://www.flashscore.com.br'
    fecharMenu()
}

function telegram(){
    document.getElementById('foo').src = 'https://web.telegram.org/#/login'
}

function whatsapp(){
    document.getElementById('foo').src = 'https://web.whatsapp.com/'
}

function twitter(){
    document.getElementById('foo').src = 'https://twitter.com'
}

function bet(){
    document.getElementById('foo').src = 'https://br.1xbet.com/pt/'
}
function menuBet(){
    fecharMenu()
    document.getElementById('menu-bet').style.marginLeft = '60px'
}
function betFutebol(){
    document.getElementById('foo').src = 'https://br.1xbet.com/pt/line/Football/'
    fecharMenu()
}
function betAovivo(){
    document.getElementById('foo').src = 'https://br.1xbet.com/pt/live/Football/'
    fecharMenu()
}
function betApostas(){
    document.getElementById('foo').src = 'https://br.1xbet.com/pt/office/history/'
    fecharMenu()
}

function p4f(){
    document.getElementById('foo').src = 'https://p4f.com/'
}
function menup4f(){
    fecharMenu()

    document.getElementById('menu-p4f').style.marginLeft = '60px'
}
function p4fDepositar(){
    document.getElementById('foo').src = 'https://p4f.com/MoneyIn/MoneyIn'
    fecharMenu()
}
function p4fSaldo(){
    document.getElementById('foo').src = 'https://p4f.com/MyAccount/BalanceDetailed'
    fecharMenu()
}
function p4fSacar(){
    document.getElementById('foo').src = 'https://p4f.com/MoneyOut/MoneyOut'
    fecharMenu()
}
function p4fTransfe(){
    document.getElementById('foo').src = 'https://p4f.com/Transfer/Transfer'
    fecharMenu()
}

function conversor(){
    open(src="moedas/moedas.html", 'Conversor de moedas', 'minWidht=false, minHeight=false, width=1000, height= 400')
}
function calculadora(){
    window.open(src="calculadora/calculadora.html", 'Calculadora',"minWidth=false, minHeight=false, width=240, height=360")
}

function reload(){
    webview.reload()
}
function voltar(){
    webview.goBack()
}
function fechar(){
    webview.src = '(unknown)'
}

function fecharMenu(){
    document.getElementById('menu-p4f').style.marginLeft = '-300px'
    document.getElementById('menu-flashcore').style.marginLeft= '-300px'
    document.getElementById('menu-bet').style.marginLeft = '-300px'
}

// Mostra a versão do app
const { ipcRenderer } = require('electron');
const version = document.getElementById('nome');
    
ipcRenderer.send('app_version');
ipcRenderer.on('app_version', (event, arg) => {
    ipcRenderer.removeAllListeners('app_version');
    version.innerText += ' ' + arg.version;
});

// Listen for messages
const {ipcRenderer} = require('electron');
ipcRenderer.on('message', function(event, text) {
  var container = document.getElementById('messages');
  var message = document.createElement('div');
  message.innerHTML = text;
  container.appendChild(message);
})
