import { GenIcon, type IconBaseProps } from "../deps.ts";

export function LuPauseCircle(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"line",attr:{"x1":"10","x2":"10","y1":"15","y2":"9"}},{tag:"line",attr:{"x1":"14","x2":"14","y1":"15","y2":"9"}}]})(props);
}
export default LuPauseCircle;
