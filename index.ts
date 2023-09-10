// https://zakon.rada.gov.ua/laws/show/55-2010-%D0%BF#Text

type CharTransliteration = (prefix: string) => string
type AlphabetTransliteration = Map<string, CharTransliteration>

const uaToLatin: AlphabetTransliteration = new Map<string, CharTransliteration>([
    ["а", () => "a"],
    ["б", () => "b"],
    ["в", () => "v"],
    ["г", (acc: string) => acc.length > 0 && acc[acc.length - 1] == "z"
        ? "gh"
        : "h"
    ],
    ["ґ", () => "g"],
    ["д", () => "d"],
    ["е", () => "e"],
    ["є", (acc: string) => acc.length == 0
        ? "ye"
        : "ie"
    ],
    ["ж", () => "zh"],
    ["з", () => "z"],
    ["и", () => "y"],
    ["і", () => "i"],
    ["ї", (acc: string) => acc.length == 0
        ? "yi"
        : "i"
    ],
    ["й", (acc: string) => acc.length == 0
        ? "y"
        : "i"
    ],
    ["к", () => "k"],
    ["л", () => "l"],
    ["м", () => "m"],
    ["н", () => "n"],
    ["о", () => "o"],
    ["п", () => "p"],
    ["р", () => "r"],
    ["с", () => "s"],
    ["т", () => "t"],
    ["у", () => "u"],
    ["ф", () => "f"],
    ["х", () => "kh"],
    ["ц", () => "ts"],
    ["ч", () => "ch"],
    ["ш", () => "sh"],
    ["щ", () => "shch"],
    ["ь", () => ""],
    ["ю", (acc: string) => acc.length == 0
        ? "yu"
        : "iu"
    ],
    ["я", (acc: string) => acc.length == 0
        ? "ya"
        : "ia"
    ],
    ["ʼ", () => ""],
    ["’", () => ""],
    ["'", () => ""],
    ["`", () => ""],
]);

const transliterate = (transliterations: AlphabetTransliteration, source: string) =>
    source
        .split(/\s/)
        .map((value) =>
            [...value].reduce((acc, char) => {
                const lowercased = char.toLowerCase()
                const transliteration = transliterations.get(lowercased)
                if (transliteration !== undefined) {
                    const result = transliteration!!(acc.toLowerCase())
                    return acc + (char == lowercased
                        ? result
                        : result.charAt(0).toUpperCase() + result.substring(1)
                    )
                } else {
                    return acc + char
                }
            }, "")
        )
        .join(" ");

export const transliterateUaToLatin = (source: string) => transliterate(uaToLatin, source)
