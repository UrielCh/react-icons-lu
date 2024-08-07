import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SendToBack icon from Lucide icons
 * @module
 */
export function LuSendToBack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"14","width":"8","height":"8","rx":"2"}},{tag:"rect",attr:{x:"2",y:"2","width":"8","height":"8","rx":"2"},child:[]},{tag:"path",attr:{d:"M7 14v1a2 2 0 0 0 2 2h1"},child:[]},{tag:"path",attr:{d:"M14 7h1a2 2 0 0 1 2 2v1"},child:[]}]})(props);
}
export default LuSendToBack;
