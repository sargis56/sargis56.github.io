module managers {
    export class Keyboard {
        // Variables
        public moveUp: boolean;
        public moveDown: boolean;
        public moveLeft: boolean;
        public moveRight: boolean;
        public attack: boolean;
        public gaurd:boolean;
        public pause: boolean;
        public enabled: boolean;
        public restart: boolean;

        // Constructor
        constructor() {
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }

        // Methods / Functions
        public onKeyDown(event: KeyboardEvent): void {
            switch( event.keyCode ) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveUp = true;
                break;
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = true;
                break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveDown = true;
                break;
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = true;
                break;
                case config.Keys.SPACE:
                    this.attack = true;
                break;
                case config.Keys.F:
                    this.gaurd = true;
                break;
                case config.Keys.ESC:
                    this.restart = true;
                break;
            }
        }

        public onKeyUp(event: KeyboardEvent): void {
            switch( event.keyCode ) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveUp = false;
                break;
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = false;
                break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveDown = false;
                break;
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = false;
                break;
                case config.Keys.SPACE:
                    this.attack = false;
                break;
                case config.Keys.F:
                    this.gaurd = false;
                break;
                case config.Keys.ESC:
                    this.restart = false;
                break;
            }
        }
    }
}