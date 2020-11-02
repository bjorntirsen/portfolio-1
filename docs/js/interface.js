class Interface {
    constructor() {
        this.addEventlisteners();
    }

    addEventlisteners() {
        let self = this;
        let enter_button = document.getElementById("enter_button");
        enter_button.addEventListener("click", e => {
            self.hideLandingPage();
            self.displayPortfolioPage();
        })
    }

    hideLandingPage() {
        let landing_page = document.getElementById("landing_page");
        landing_page.classList.add("d-none");
    }

    displayPortfolioPage() {
        let nav_bar = document.getElementById("nav_bar");
        nav_bar.classList.remove("d-none");
        let portfolio = document.getElementById("portfolio");
        portfolio.classList.remove("d-none");
    }
}