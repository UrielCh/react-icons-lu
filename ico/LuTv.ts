import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tv icon from Lucide icons
 * @module
 */
export function LuTv(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"15",x:"2",y:"7","rx":"2","ry":"2"}},{tag:"polyline",attr:{"points":"17 2 12 7 7 2"},child:[]}]})(props);
}
export default LuTv;
