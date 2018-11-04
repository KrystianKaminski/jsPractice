// Problem utraty wiązania

const felipe = {
    children: ['Alessio', 'Giovanna'],
    showChildren: function () {
        this.children.forEach(function (name, index) {
            console.log(this.children[index])
        })
    }
}

// felipe.showChildren()


// that = this

const felipe1 = {
    children: ['Alessio', 'Giovanna'],
    showChildren: function () {
        const that = this
        this.children.forEach(function (name, index) {
            console.log(that.children[index])
        })
    }
}

// felipe1.showChildren()


// for of loop

const felipe2 = {
    children: ['Alessio', 'Giovanna'],
    showChildren: function () {
        for (const child of this.children) {
            console.log(child)
        }
    }
}

// felipe2.showChildren()

// arrow fn

const felipe3 = {
    children: ['Alessio', 'Giovanna'],
    showChildren: function () {
        this.children.forEach((name, index) => {
            console.log(this.children[index])
        })
    }
}

// felipe3.showChildren()


// bind

const felipe4 = {
    children: ['Alessio', 'Giovanna'],
    showChildren: function () {
        this.children.forEach(function (name, index) {
            console.log(this.children[index])
        }.bind(this))
    }
}

felipe4.showChildren()