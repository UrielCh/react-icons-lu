import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlertTriangle icon from Lucide icons
 * @module
 */
export function LuAlertTriangle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(props);
}
export default LuAlertTriangle;
