import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Notebook icon from Lucide icons
 * @module
 */
export function LuNotebook(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 6h4"}},{tag:"path",attr:{d:"M2 10h4"},child:[]},{tag:"path",attr:{d:"M2 14h4"},child:[]},{tag:"path",attr:{d:"M2 18h4"},child:[]},{tag:"rect",attr:{"width":"16","height":"20",x:"4",y:"2","rx":"2"},child:[]},{tag:"path",attr:{d:"M16 2v20"},child:[]}]})(props);
}
export default LuNotebook;
