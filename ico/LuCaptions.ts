import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Captions icon from Lucide icons
 * @module
 */
export function LuCaptions(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"14",x:"3",y:"5","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M7 15h4M15 15h2M7 11h2M13 11h4"},child:[]}]})(props);
}
export default LuCaptions;
