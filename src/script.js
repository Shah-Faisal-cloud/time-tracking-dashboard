const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".button");

function getTimeFrame(e) {
    const period = e.target.dataset.timeframe;
    return period;
};

function updateCards(data, activeTimePeriod = 'daily') {
    data.forEach((item, index) => {
        const card = cards[index];

        const title = card.querySelector(".card-title");
        const currentHrs = card.querySelector("[data-current-hours]");
        const prevHrs = card.querySelector("[data-prev-hours]");

        title.textContent = item.title;
        currentHrs.textContent = item.timeframes[activeTimePeriod].current;
        prevHrs.textContent = item.timeframes[activeTimePeriod].previous;

    });
};

async function startApp() {
    try {
        const response = await fetch("./src/data.json");
        const data = await response.json();

        buttons[0].classList.add("active");

        buttons.forEach(button => {
            button.addEventListener("click", (e) => {

                buttons.forEach(button => button.classList.remove("active"));
                e.currentTarget.classList.add("active");

                const selectedPeriod = getTimeFrame(e);
                updateCards(data, selectedPeriod);
            });
        });

        updateCards(data);
    } catch (error) {
        console.log("Error loading data: ", error);
    }
};

startApp();



