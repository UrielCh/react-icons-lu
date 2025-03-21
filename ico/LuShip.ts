import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ship icon from Lucide icons
 * @module
 */
export function LuShip(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 10.189V14"}},{tag:"path",attr:{d:"M12 2v3"},child:[]},{tag:"path",attr:{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"},child:[]},{tag:"path",attr:{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"},child:[]},{tag:"path",attr:{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"},child:[]}]})(props);
}
export default LuShip;
