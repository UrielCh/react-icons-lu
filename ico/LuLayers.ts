import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function LuLayers(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"12 2 2 7 12 12 22 7 12 2"}},{tag:"polyline",attr:{"points":"2 17 12 22 22 17"}},{tag:"polyline",attr:{"points":"2 12 12 17 22 12"}}]})(props);
}
