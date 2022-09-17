
function display(a){
    var b = document.getElementById('abc')
    b.value += a
}

function result(){
    var c = document.getElementById('abc')
    // console.log(eval(c.value))
    c.value = eval(c.value)
}

function clr(){
    var d = document.getElementById('abc')
    d .value = ''
}


