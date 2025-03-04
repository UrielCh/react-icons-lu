import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lectern icon from Lucide icons
 * @module
 */
export function LuLectern(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"}},{tag:"path",attr:{d:"M18 6V3a1 1 0 0 0-1-1h-3"},child:[]},{tag:"rect",attr:{"width":"8","height":"12",x:"8",y:"10","rx":"1"},child:[]}]})(props);
}
export default LuLectern;
