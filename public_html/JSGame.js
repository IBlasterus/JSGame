/**
 * JSGame (for fun)
 * 
 * @author Aleksandr Chernyi <iblasterus@gmail.com>
 */

/**
 * Entry point
 * 
 * @returns {undefined}
 */
function start() {
    var gf = new GameField();
}

/**
 * GameField
 */
class GameField {
    constructor() {
        // Params
        this.width = 800;
        this.height = 500;
        this.color = 'black';
        
        // Visualization
        document.write('<center><canvas id="gameField"></canvas></center>');
        this.gf = document.getElementById('gameField');
        this.gf.width = this.width;
        this.gf.height = this.height;
        this.context = this.gf.getContext('2d');
        this.context.strokeStyle = this.color;
        this.context.strokeRect(0, 0, this.width, this.height);
    }
}