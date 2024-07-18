import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Image icon from Lucide icons
 * @module
 */
export function LuImage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"circle",attr:{"cx":"9","cy":"9","r":"2"},child:[]},{tag:"path",attr:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"},child:[]}]})(props);
}
export default LuImage;
