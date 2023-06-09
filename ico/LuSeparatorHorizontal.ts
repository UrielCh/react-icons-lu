import { GenIcon, type IconBaseProps } from "../deps.ts";

export function LuSeparatorHorizontal(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"3","x2":"21","y1":"12","y2":"12"}},{tag:"polyline",attr:{"points":"8 8 12 4 16 8"}},{tag:"polyline",attr:{"points":"16 16 12 20 8 16"}}]})(props);
}
export default LuSeparatorHorizontal;
