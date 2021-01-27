function input(m){
    var a =document.getElementById('input').value += m
}
function render(){
    var b =document.getElementById('input')
    var val = b.value
    var final = eval(val)
    b.value = final
}
function exterminate(){
    var extermination = document.getElementById('input')
    extermination.value = ''
}

