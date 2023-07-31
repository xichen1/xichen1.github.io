// light version of code viewer styles built for https://jettwave.com
// only uses colors found in default tailwindCSS => https://tailwindcss.com/docs/customizing-colors
// designed by: https://github.com/ryanmogk
import type { PrismTheme } from "prism-react-renderer"
export const jettwaveLightCustom: PrismTheme = {
    plain: {
        color: "#0f172a",
        backgroundColor: "#f1f5f9",
    },
    styles: [
        {
            types: ["prolog"],
            style: {
                color: "#000080",
            },
        },
        {
            types: ["comment"],
            style: {
                color: "#6A9955",
            },
        },
        {
            types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
            style: {
                color: "#0c4a6e",
            },
        },
        {
            types: ["number", "inserted"],
            style: {
                color: "#B5CEA8",
            },
        },
        {
            types: ["constant"],
            style: {
                color: "#0f172a",
            },
        },
        {
            types: ["attr-name", "variable"],
            style: {
                color: "#0c4a6e",
            },
        },
        {
            types: ["deleted", "string", "attr-value", "template-punctuation"],
            style: {
                color: "#64748b",
            },
        },
        {
            types: ["selector"],
            style: {
                color: "#D7BA7D",
            },
        },
        {
            types: ["tag"],
            style: {
                color: "#0ea5e9",
            },
        },
        {
            types: ["tag"],
            languages: ["markup"],
            style: {
                color: "#0ea5e9",
            },
        },
        {
            types: ["punctuation", "operator"],
            style: {
                color: "#475569",
            },
        },
        {
            types: ["punctuation"],
            languages: ["markup"],
            style: {
                color: "#808080",
            },
        },
        {
            types: ["function"],
            style: {
                color: "#0e7490",
            },
        },
        {
            types: ["class-name"],
            style: {
                color: "#0ea5e9",
            },
        },
        {
            types: ["char"],
            style: {
                color: "#D16969",
            },
        },
    ],
}

// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
export const duotoneDarkCustom: PrismTheme = {
    plain: {
        backgroundColor: "#2a2734",
        color: "#9a86fd",
    },
    styles: [
        {
            types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
            style: {
                color: "#6c6783",
            },
        },
        {
            types: ["namespace"],
            style: {
                opacity: 0.7,
            },
        },
        {
            types: ["tag", "operator", "number"],
            style: {
                color: "#e09142",
            },
        },
        {
            types: ["property", "function"],
            style: {
                color: "#9a86fd",
            },
        },
        {
            types: ["tag-id", "selector", "atrule-id"],
            style: {
                color: "#eeebff",
            },
        },
        {
            types: ["attr-name"],
            style: {
                color: "#c4b9fe",
            },
        },
        {
            types: [
                "boolean",
                "string",
                "entity",
                "url",
                "attr-value",
                "keyword",
                "control",
                "directive",
                "unit",
                "statement",
                "regex",
                "atrule",
                "placeholder",
                "variable",
            ],
            style: {
                color: "#ffcc99",
            },
        },
        {
            types: ["deleted"],
            style: {
                textDecorationLine: "line-through",
            },
        },
        {
            types: ["inserted"],
            style: {
                textDecorationLine: "underline",
            },
        },
        {
            types: ["italic"],
            style: {
                fontStyle: "italic",
            },
        },
        {
            types: ["important", "bold"],
            style: {
                fontWeight: "bold",
            },
        },
        {
            types: ["important"],
            style: {
                color: "#c4b9fe",
            },
        },
    ],
}