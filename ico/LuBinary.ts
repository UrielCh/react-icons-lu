import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Binary icon from Lucide icons
 * @module
 */
export function LuBinary(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"14","width":"4","height":"6","rx":"2"}},{tag:"rect",attr:{x:"6",y:"4","width":"4","height":"6","rx":"2"},child:[]},{tag:"path",attr:{d:"M6 20h4"},child:[]},{tag:"path",attr:{d:"M14 10h4"},child:[]},{tag:"path",attr:{d:"M6 14h2v6"},child:[]},{tag:"path",attr:{d:"M14 4h2v6"},child:[]}]})(props);
}
export default LuBinary;
