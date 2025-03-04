import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SunMoon icon from Lucide icons
 * @module
 */
export function LuSunMoon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}},{tag:"path",attr:{d:"M12 2v2"},child:[]},{tag:"path",attr:{d:"M12 20v2"},child:[]},{tag:"path",attr:{d:"m4.9 4.9 1.4 1.4"},child:[]},{tag:"path",attr:{d:"m17.7 17.7 1.4 1.4"},child:[]},{tag:"path",attr:{d:"M2 12h2"},child:[]},{tag:"path",attr:{d:"M20 12h2"},child:[]},{tag:"path",attr:{d:"m6.3 17.7-1.4 1.4"},child:[]},{tag:"path",attr:{d:"m19.1 4.9-1.4 1.4"},child:[]}]})(props);
}
export default LuSunMoon;
