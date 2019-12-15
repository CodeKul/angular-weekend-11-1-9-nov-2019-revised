let obj = {
    os: 'linux',
    man: 'community',
    ver: 10,
    isLive: true,
    support: 78,
    fn: () => console.log(),
    arr: [
        'Aandroid',
        'Apple',
        'Windows'
    ],
    ob: {
        sys: 8
    }
}

function Car() {
    let spd = 10
}

let cr = new Car()

class Remote {

    constructor() {
        this.range = 10
    }

    getRange() {
        return this.range
    }

    setRange(rng) {
        this.range = rng
    }
}

let rmt = new Remote()
rmt.getRange()
rmt.setRange(50)
