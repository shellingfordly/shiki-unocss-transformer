# shiki-unocss-transformer

> A [shiki](https://github.com/shikijs/shiki) transformer for css [to-unocss](https://github.com/Simon-He95/unot).

Inspired by a vscode-plugin [To Unocss](https://github.com/Simon-He95/tounocss), it is now updated to [UoT](https://github.com/Simon-He95/unot), and [@shikijs/twoslash](https://github.com/shikijs/shiki/tree/main/packages/twoslash) that the shiki transformer for TypeScript Twoslash.

So with the `shiki-unocss-transformer`, let shikijs support the function of to unocss. As follows:

![](https://github.com/shellingfordly/shiki-unocss-transformer/blob/main/apps/demo/public/preview.png)

## Install

```
pnpm add -D shiki-unocss-transformer
```

## Usage

This package is a transformer addon to Shiki.

```ts
import { codeToHtml } from "shiki";
import { transformerToUnocss } from "shiki-unocss-transformer";

const html = await codeToHtml(`console.log()`, {
  lang: "ts",
  theme: "vitesse-dark",
  transformers: [
    transformerToUnocss(), // <-- here
    // ...
  ],
});
```

## Explicit Trigger

For not let `shiki-unocss-transformer` to run on every code block. you can set explicitTrigger to true to only run on code blocks with `unocss` presented in the codeframe.

```ts
import { transformerToUnocss } from "shiki-unocss-transformer";

transformerTwoslash({
  explicitTrigger: true, // <--
});
```

````css
In markdown, you can use the following syntax to trigger unocss:

```css
// this is a normal code block
```

```css unocss
// this will run unocss
```
````
