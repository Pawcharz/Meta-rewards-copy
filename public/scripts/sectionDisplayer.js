class SectionDisplayer {
    constructor() {

        this.navbar = document.querySelector('.navbar');
        this.banner = document.querySelector('.banner');

        this.info = document.querySelector('.info');
        this.tokenomics = document.querySelector('.tokenomics');
        this.features = document.querySelector('.features');
        this.roadmap = document.querySelector('.roadmap');
        this.whitepaper = document.querySelector('.whitepaper');


        this.showNavbar = () => {
            this.navbar.classList.remove('hidden');
        }
        this.showBanner = () => {
            this.banner.classList.remove('hidden');
        }
        this.showInfo = () => {
            this.info.classList.remove('hidden');
        }
        this.showTokenomics = () => {
            this.tokenomics.classList.remove('hidden');
        }
        this.showFeatures = () => {
            this.features.classList.remove('hidden');
        }
        this.showRoadmap = () => {
            this.roadmap.classList.remove('hidden');
        }
        this.showWhitepaper = () => {
            this.whitepaper.classList.remove('hidden');
        }

        this.showFeatureContainers = (scrollPosition) => {
            let containers = this.features.querySelectorAll('.feature-container');

            for (let i = 0; i < containers.length; i++) {
                let container = containers[i];
                
                if(scrollPosition >= container.offsetTop + this.features.offsetTop) {
                    container.classList.remove('hidden');
                }
                
            }
        }


        this.listenWindow = () => {

            let scrollPosition = window.scrollY + window.innerHeight;
            let fixedScrollPosition = scrollPosition - 200;         
            
            this.showNavbar();

            if(fixedScrollPosition >= this.banner.offsetTop) {
                this.showBanner();
            }            
            if(fixedScrollPosition >= this.info.offsetTop) {
                this.showInfo();
            }
            if(fixedScrollPosition >= this.tokenomics.offsetTop) {
                this.showTokenomics();
            }
            if(fixedScrollPosition >= this.features.offsetTop) {
                this.showFeatures();
            }
            this.showFeatureContainers(scrollPosition);

            if(fixedScrollPosition >= this.roadmap.offsetTop) {
                this.showRoadmap();
            }
            if(fixedScrollPosition >= this.whitepaper.offsetTop) {
                this.showWhitepaper();
            }


        }
        this.listenWindow();
        window.addEventListener('scroll', () => {
            this.listenWindow();
        })
    }
}
let sectionDisplayer = new SectionDisplayer();

window.addEventListener('DOMContentLoaded', () => {
    
    sectionDisplayer.listenWindow()
});