// 'use strict'
// THIS

this // global object -> window

const fn = function () {
    console.log(this.name) // odnosi się do window
}

//fn() // this nabiera wiązania w chwili wywołania. Jest wywoływane na nowo // wiąze się z kontekstem w którym tę funkcję wywołujemy

const obj = {
    name: 'Gianni',
    showName: fn
}

const fun = fn
//fun()

obj.showName()

const outside = obj.showName
outside() // error with use strict, otherwise ''

document.addEventListener('click', () => {
    console.log(this)
    const inside = function () {
        'use strict'
        console.log(this)
    }
    inside()
})