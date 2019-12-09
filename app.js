new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack() {
            this.monsterHealth -= this.calcDamage(3, 10);
            if (this.checkWin()) {
                return;
            }
           
            this.playerHealth -= this.calcDamage(5, 12);
            this.checkWin();
        },
        specialAttack() {

        },
        heal() {

        },
        giveUp() {

        },
        calcDamage(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        checkWin() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                    return true;
                } else {
                    this.gameIsRunning = false;
                    return true;
                }
            }
            if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                    return true;
                } else {
                    this.gameIsRunning = false;
                    return true;
                }
            }
            return false;
        }
    }
})