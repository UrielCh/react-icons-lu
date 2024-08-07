import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ShieldClose icon from Lucide icons
 * @module
 */
export function LuShieldClose(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}},{tag:"line",attr:{"x1":"9.5","x2":"14.5","y1":"9","y2":"14"},child:[]},{tag:"line",attr:{"x1":"14.5","x2":"9.5","y1":"9","y2":"14"},child:[]}]})(props);
}
export default LuShieldClose;
