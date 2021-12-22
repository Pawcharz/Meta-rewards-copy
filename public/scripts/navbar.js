class NavbarDisplayer {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.menu = this.navbar.querySelector('.menu');

        this.menuOpenButton = this.navbar.querySelector('.button-menu-open');
        this.menuCloseButton = this.menu.querySelector('.button-menu-close');

        this.openMenu = () => {
            this.menu.classList.add('active');
        }
        this.closeMenu = () => {
            this.menu.classList.remove('active');
        }


        this.menuGreyarea = this.menu.querySelector('.menu-greyarea');
        this.menuMain = this.menuGreyarea.querySelector('.menu-main');

        this.addListeners = () => {

            this.menuOpenButton.addEventListener('click', () => {
                this.openMenu();
            })
            this.menuCloseButton.addEventListener('click', () => {
                this.closeMenu();
            })

            this.menuGreyarea.addEventListener('click', () => {
                this.closeMenu();
            })
            this.menuMain.addEventListener('click', (e) => {
                e.stopPropagation();
            })



        }
        this.addListeners();

    }
}
const navbarDisplayer = new NavbarDisplayer();