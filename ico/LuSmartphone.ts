import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Smartphone icon from Lucide icons
 * @module
 */
export function LuSmartphone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"20",x:"5",y:"2","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M12 18h.01"},child:[]}]})(props);
}
export default LuSmartphone;
