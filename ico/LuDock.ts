import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Dock icon from Lucide icons
 * @module
 */
export function LuDock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 8h20"}},{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M6 16h12"},child:[]}]})(props);
}
export default LuDock;
