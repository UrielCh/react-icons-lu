import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function LuFileBadge(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6"}},{tag:"polyline",attr:{"points":"14 2 14 8 20 8"}},{tag:"path",attr:{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}},{tag:"path",attr:{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"}}]})(props);
}
export default LuFileBadge;
