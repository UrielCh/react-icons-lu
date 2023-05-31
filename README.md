# Lucide icons icons for deno / Preact

**License** [ISC License](https://lucide.dev/license)

**Project** [https://lucide.dev/](https://lucide.dev/)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=lu)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/lu":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-lu@1.0.2/mod.ts",
    "react-icons/lu/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-lu/ico/",
  }
}
```

## Direct import sample

```ts
import { LuAccessibility } from "https://deno.land/x/react_icons_lu@1.0.2/mod.ts"
```

## import_map import sample

```ts
import { LuAccessibility } from "react-icons/lu"
```

## minimal import

```ts
import { LuAccessibility } from "react-icons/lu/LuAccessibility.ts"
```

## minimal import using default export

```ts
import LuAccessibility from "react-icons/lu/LuAccessibility.ts"
```

