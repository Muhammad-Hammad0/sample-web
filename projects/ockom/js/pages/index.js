document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelector(".razor-wrp"),
        t = /\(([^)]+)\)/,
        F = {
            1: "#FF1308",
            2: "#FF2424",
            3: "#FF4949",
            4: "#FF5656",
            5: "#FF7272",
            6: "#FF9B9B",
            7: "#FFAFAF",
            8: "#FFC7C7",
            9: "#FFDADA",
            10: "#FFFFFF"
        };
    new MutationObserver((r => {
        for (let o = 0; o < r.length; o += 1) {
            const r = t.exec(e.style.transform),
                o = parseInt(r[1].split(", ")[1], 10),
                n = document.body.clientWidth > 480 ? 200 : 90,
                d = F[Math.round(o / n / .1)];
            d && document.documentElement.style.setProperty("--razorLetterColor", `${d}`);
            break
        }
    })).observe(e, {
        attributes: !0,
        attributeOldValue: !0
    })
}));