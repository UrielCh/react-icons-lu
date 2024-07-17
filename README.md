# Lucide icons icons for deno / Preact

**License** [ISC License](https://lucide.dev/license)

**Project** [https://lucide.dev/](https://lucide.dev/)

[See available icons here](https://react-icons.deno.dev/lu)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.9",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/lu": "jsr:@preact-icons/lu@^1.0.10/mod.ts",
    "react-icons/lu/": "jsr:@preact-icons/lu@^1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib lu

```ts
import { LuAccessibility } from "jsr:preact-icons/lu@1.0.10/mod.ts"
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

