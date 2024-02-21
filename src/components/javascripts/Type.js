import Typed from 'typed.js';

const Type = () => {
    new Typed("#name", {
        strings: [
            "Hi! I'm Vire.",
            "¡Hola! Soy Vire.",
            "Salut! Je suis Vire.",
            "Olá! Eu sou Vire.",
            "Привет! Я Вире.",
            "Γειά σας! Είμαι Βιρέ.",
            "嗨！ 我是 Vire。",
            "やあ！ 俺は Vire だ。",
            "안녕! 나 Vire 야."
        ],
        typeSpeed: 25,
        backSpeed: 25,
        backDelay: 3000,
        cursorChar: "\u258C",
        autoInsertCss: false,
        loop: true
    });
    setTimeout(() => {
        new Typed("#introA", {
            strings: [
                "Passionate about "
            ],
            typeSpeed: 25,
            cursorChar: "\u258F",
            autoInsertCss: false,
            onComplete: (self) => {
                self.destroy();
            },
            onDestroy: () => {
                const introA = document.querySelector("#introA");
                introA.innerText = "Passionate about ";
                new Typed("#introB", {
                    strings: [
                        "Hardware Engineering.",
                        "Backend Software Engineering.",
                        "Data Encryption.",
                        "Data Hashing."
                    ],
                    typeSpeed: 25,
                    backSpeed: 25,
                    smartBackspace: true,
                    backDelay: 2000,
                    cursorChar: "\u258F",
                    autoInsertCss: false,
                    loop: true
                });
            }
        });
    }, 1500);
    setTimeout(() => {
        new Typed("#desc", {
            strings: [
                "A man with a sharp focus, unwavering commitment, sheer willpower, embodying honesty, and possessing excellent self-discipline."
            ],
            typeSpeed: 10,
            cursorChar: "\u2593",
            autoInsertCss: false,
            onComplete: (self) => {
                setTimeout(() => {
                    self.destroy();
                }, 5000);
            },
            onDestroy: () => {
                const desc = document.querySelector("#desc");
                desc.textContent = "A man with a sharp focus, unwavering commitment, sheer willpower, embodying honesty, and possessing excellent self-discipline."
            }
        });
    }, 4500);
};
export default Type;