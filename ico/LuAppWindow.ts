import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AppWindow icon from Lucide icons
 * @module
 */
export function LuAppWindow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"4","width":"20","height":"16","rx":"2"}},{tag:"path",attr:{d:"M10 4v4"},child:[]},{tag:"path",attr:{d:"M2 8h20"},child:[]},{tag:"path",attr:{d:"M6 4v4"},child:[]}]})(props);
}
export default LuAppWindow;
