import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Mouse icon from Lucide icons
 * @module
 */
export function LuMouse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"5",y:"2","width":"14","height":"20","rx":"7"}},{tag:"path",attr:{d:"M12 6v4"},child:[]}]})(props);
}
export default LuMouse;
