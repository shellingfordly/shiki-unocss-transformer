import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import Markdown from "unplugin-vue-markdown/vite";
import { rendererRich, transformerTwoslash } from "@shikijs/twoslash";
import MarkdownItShiki from "@shikijs/markdown-it";
import { presetUno, presetIcons } from "unocss";
import { transformerToUnocss } from "shiki-unocss-transformer";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Unocss({
            presets: [
                presetUno(),
                presetIcons({
                    extraProperties: {
                        display: "inline-block",
                        height: "1.2em",
                        width: "1.2em",
                        "vertical-align": "text-bottom",
                    },
                }),
            ],
        }),
        Markdown({
            wrapperClasses: "prose m-auto slide-enter-content",
            async markdownItSetup(md) {
                md.use(await MarkdownItShiki({
                    themes: {
                        dark: "vitesse-dark",
                        light: "vitesse-light",
                    },
                    defaultColor: false,
                    cssVariablePrefix: "--s-",
                    transformers: [
                        transformerTwoslash({
                            explicitTrigger: true,
                            renderer: rendererRich(),
                        }),
                        transformerToUnocss({
                            explicitTrigger: true,
                        }),
                    ],
                }));
            },
        }),
    ],
});
