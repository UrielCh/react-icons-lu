import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function LuAnchor(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"5","r":"3"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"22","y2":"8"}},{tag:"path",attr:{d:"M5 12H2a10 10 0 0 0 20 0h-3"}}]})(props);
}
