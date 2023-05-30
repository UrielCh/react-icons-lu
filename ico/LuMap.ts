import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function LuMap(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"}},{tag:"line",attr:{"x1":"9","x2":"9","y1":"3","y2":"18"}},{tag:"line",attr:{"x1":"15","x2":"15","y1":"6","y2":"21"}}]})(props);
}
