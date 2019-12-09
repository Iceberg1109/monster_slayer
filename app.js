new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack() {
            var damage = this.calcDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits the monster for ' + damage
            });

            if (this.checkWin()) {
                return;
            }
           
            this.monsterAttack();
        },
        specialAttack() {
            var damage = this.calcDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits the monster hard for ' + damage
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        monsterAttack() {
            var damage = this.calcDamage(5, 12);
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits the player for ' + damage
            });
            this.playerHealth -= damage;
            this.checkWin();
        },
        heal() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });

            this.monsterAttack();
        },
        giveUp() {
            this.gameIsRunning = false;
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
            } else if (this.playerHealth <= 0) {
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