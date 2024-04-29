# shiki-unocss-transformer

> A [shiki](https://github.com/shikijs/shiki) transformer for css [to-unocss](https://github.com/Simon-He95/unot).

Inspired by a vscode-plugin [To Unocss](https://github.com/Simon-He95/tounocss), it is now updated to [UoT](https://github.com/Simon-He95/unot), and [@shikijs/twoslash](https://github.com/shikijs/shiki/tree/main/packages/twoslash) that the shiki transformer for TypeScript Twoslash.

So with the `shiki-unocss-transformer`, let shikijs support the function of to unocss. As follows:

```css unocss
.container {
  display: none;
  background: red;
}
```

```vue unocss
<style>
.container {
  display: none;
  color: red;
}
</style>

<template>
  <div style="background: red; color: red; width: 100px"></div>
</template>
```

## Install

```
pnpm add -D shiki-unocss-transformer
```

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
