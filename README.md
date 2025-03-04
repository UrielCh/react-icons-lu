# Lucide icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/lu)](https://jsr.io/@preact-icons/lu)

**License** [ISC License](https://lucide.dev/license)

**Project** [https://lucide.dev/](https://lucide.dev/)

[See available icons here](https://react-icons.deno.dev/lu)

## install the module

```bash
deno add @preact-icons/lu
dnpx jsr add @preact-icons/lu
pnpm dlx jsr add @preact-icons/lu
bunx jsr add @preact-icons/lu
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { LuAArrowDown } from "@preact-icons/lu"
```

## import a single icon, downloading just one icon

```ts
import { LuAArrowDown } from "react-icons/lu/LuAArrowDown"
```

or using default export

```ts
import LuAArrowDown from "react-icons/lu/LuAArrowDown"
```
