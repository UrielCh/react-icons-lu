import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function LuSpline(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"19","cy":"5","r":"2"}},{tag:"circle",attr:{"cx":"5","cy":"19","r":"2"}},{tag:"path",attr:{d:"M5 17A12 12 0 0 1 17 5"}}]})(props);
}
export default LuSpline;
