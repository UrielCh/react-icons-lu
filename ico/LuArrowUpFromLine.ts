import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuArrowUpFromLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 9-6-6-6 6"}},{tag:"path",attr:{d:"M12 3v14"},child:[]},{tag:"path",attr:{d:"M5 21h14"},child:[]}]})(props);
}
export default LuArrowUpFromLine;
