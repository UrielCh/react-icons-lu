import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Speaker icon from Lucide icons
 * @module
 */
export function LuSpeaker(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"20",x:"4",y:"2","rx":"2"}},{tag:"path",attr:{d:"M12 6h.01"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"14","r":"4"},child:[]},{tag:"path",attr:{d:"M12 14h.01"},child:[]}]})(props);
}
export default LuSpeaker;
