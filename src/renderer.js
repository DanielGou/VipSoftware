function instagram(){
    webview.loadURL("https://www.instagram.com/?hl=pt-br")
}

function google(){
    webview.loadURL('http://google.com');
}

function flashcore(){
    webview.loadURL("https://www.flashscore.com.br/")
}
function menuFlashcore(){
    fecharMenu()

    document.getElementById('menu-flashcore').style.marginLeft= '60px'
}
function flashcoreAoVivo(){
    webview.loadURL('https://www.flashscore.com.br/')
    fecharMenu()
}

function telegram(){
    webview.loadURL("https://web.telegram.org/#/login")
}

function whatsapp(){
    webview.loadURL('https://web.whatsapp.com/')
}

function bet(){
    webview.loadURL('https://br.1xbet.com/pt/')
}
function menuBet(){
    fecharMenu()
    document.getElementById('menu-bet').style.marginLeft = '60px'
}
function betFutebol(){
    webview.loadURL('https://br.1xbet.com/pt/line/Football/')
    fecharMenu()
}
function betAovivo(){
    webview.loadURL('https://br.1xbet.com/pt/live/Football/')
    fecharMenu()
}
function betApostas(){
    webview.loadURL('https://br.1xbet.com/pt/office/history/')
    fecharMenu()
}

function p4f(){
    webview.loadURL('https://p4f.com/')
}
function menup4f(){
    fecharMenu()

    document.getElementById('menu-p4f').style.marginLeft = '60px'
}
function p4fDepositar(){
    webview.loadURL('')
    fecharMenu()
}
function p4fSaldo(){
    webview.loadURL('https://p4f.com/MyAccount/BalanceDetailed')
    fecharMenu()
}
function p4fSacar(){
    webview.loadURL('https://p4f.com/MoneyOut/MoneyOut')
    fecharMenu()
}
function p4fTransfe(){
    webview.loadURL('https://p4f.com/Transfer/Transfer')
    fecharMenu()
}

function conversor(){
    open(src="moedas/moedas.html", 'Conversor de moedas', 'minWidht=false, minHeight=false, width=1000, height= 400')
}
function calculadora(){
    window.open(src="calculadora/calculadora.html", 'Calculadora',"minWidth=false, minHeight=false, width=250, height=370")
}

var webview = document.getElementById('foo')

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
