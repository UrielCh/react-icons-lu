import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Proportions icon from Lucide icons
 * @module
 */
export function LuProportions(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"}},{tag:"path",attr:{d:"M12 9v11"},child:[]},{tag:"path",attr:{d:"M2 9h13a2 2 0 0 1 2 2v9"},child:[]}]})(props);
}
export default LuProportions;
