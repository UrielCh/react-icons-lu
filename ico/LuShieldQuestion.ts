import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ShieldQuestion icon from Lucide icons
 * @module
 */
export function LuShieldQuestion(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17h.01"}},{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"},child:[]},{tag:"path",attr:{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"},child:[]}]})(props);
}
export default LuShieldQuestion;
