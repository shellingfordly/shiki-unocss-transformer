# shiki-unocss-transformer

> A [shiki](https://github.com/shikijs/shiki) transformer for css [to-unocss](https://github.com/Simon-He95/unot).

Inspired by a vscode-plugin [To Unocss](https://github.com/Simon-He95/tounocss), it is now updated to [UNT](https://github.com/Simon-He95/unot), and [@shikijs/twoslash](https://github.com/shikijs/shiki/tree/main/packages/twoslash) that the shiki transformer for TypeScript Twoslash.

So with this `Transformer`, let shikijs support the function of To Unocss. As follows:

```css
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

```ts twoslash
// @errors: 2540
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users".toUpperCase(),
};

todo.title = "Hello";
Number.parseInt("123", 10);

//
//
```
