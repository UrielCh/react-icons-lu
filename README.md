# Lucide icons icons for deno / Preact

**License** [ISC License](https://lucide.dev/license)

**Project** [https://lucide.dev/](https://lucide.dev/)

[See available icons here](https://react-icons.deno.dev/lu)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/lu":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-lu@1.0.8/mod.ts",
    "react-icons/lu/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-lu@1.0.8/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib lu

```ts
import { LuAccessibility } from "https://deno.land/x/react_icons_lu@1.0.8/mod.ts"
```

## import_map import an icon from all icons

```ts
import { LuAccessibility } from "react-icons/lu"
```

## import a single icon, downloading just one icon

```ts
import { LuAccessibility } from "react-icons/lu/LuAccessibility.ts"
```

or using default export

```ts
import LuAccessibility from "react-icons/lu/LuAccessibility.ts"
```

