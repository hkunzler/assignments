class Character {
    constructor(name, totalCoins, hasStar, setName, goHit, gotPowerUp, gameActive, addCoin, print) {
        this.name = name
        this.totalCoins = totalCoins
        // this.status = status
        this.hasStar = hasStar
        this.setName = setName
        this.goHit = goHit
        this.gotPowerUp = gotPowerUp
        this.gameActive = gameActive
        this.addCoin = addCoin
        this.print = print
    }
    status() {
        const statusArray = ["Powered Up", "Big", "Small", "Dead"]
    }
    setName() {
        
    }
}

const player = new Character()

player.setName("Mario")

player.goHit()



function randomRange() {
    // 0 - 2

    0 - player.gotHit()
    1 - player.gotPowerUp()
    2 - player.addCoin()
    
    player.print()
}