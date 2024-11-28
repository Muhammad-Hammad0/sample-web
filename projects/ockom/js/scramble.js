((Scrambler) => {
    const randomChar = function() {
        return Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 1);
    };

    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomTime = function() {
        return 0 + Math.random() * 7000;
    };

    // main fn
    let scrambleFn = function(element) {
        let truth = element.textContent.split("");
        let newLetters = element.textContent.split("");
        let revert = [];
        const ticker = setInterval(function() {
            truth.map((letter, i) => {
                if (" \t\n\r\v".indexOf(letter) > -1) return;
                // if (i % 3 == "0") {
                newLetters[i] = getRandomInRange(0, 1);
                //newLetters[i] = randomChar();
                setTimeout(function() {
                    revert[i] = true;
                }, randomTime());

                if (revert[i] === true) {
                    newLetters[i] = truth[i];
                }
                // }

                element.textContent = newLetters.join("");
            });
        }, 70);
    };

    window.onload = () => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const word = entry.target;
                    scrambleFn(word);
                    observer.unobserve(word);
                }
            });
        }, options);

        const arrScrumbledTexts = document.querySelectorAll(`[data-scrambler="true"]`);
        arrScrumbledTexts.forEach((i) => {
            observer.observe(i);
        });
    };
})();