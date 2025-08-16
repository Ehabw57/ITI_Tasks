var qParam = window.location.href.split('?')[1].split('&')
var firstName = qParam[0].split('=')[1]
var lastName = qParam[1].split('=')[1]
document.writeln(`<h1>Wellcome ${firstName} ${lastName}</h1>`)
