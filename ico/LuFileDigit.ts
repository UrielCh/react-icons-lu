import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileDigit icon from Lucide icons
 * @module
 */
export function LuFileDigit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"rect",attr:{"width":"4","height":"6",x:"2",y:"12","rx":"2"},child:[]},{tag:"path",attr:{d:"M10 12h2v6"},child:[]},{tag:"path",attr:{d:"M10 18h4"},child:[]}]})(props);
}
export default LuFileDigit;
