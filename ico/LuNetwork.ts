import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Network icon from Lucide icons
 * @module
 */
export function LuNetwork(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"16",y:"16","width":"6","height":"6","rx":"1"}},{tag:"rect",attr:{x:"2",y:"16","width":"6","height":"6","rx":"1"},child:[]},{tag:"rect",attr:{x:"9",y:"2","width":"6","height":"6","rx":"1"},child:[]},{tag:"path",attr:{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"},child:[]},{tag:"path",attr:{d:"M12 12V8"},child:[]}]})(props);
}
export default LuNetwork;
