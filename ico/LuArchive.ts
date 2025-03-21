import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Archive icon from Lucide icons
 * @module
 */
export function LuArchive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"5",x:"2",y:"3","rx":"1"}},{tag:"path",attr:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"},child:[]},{tag:"path",attr:{d:"M10 12h4"},child:[]}]})(props);
}
export default LuArchive;
