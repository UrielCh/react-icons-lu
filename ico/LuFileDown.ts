import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileDown icon from Lucide icons
 * @module
 */
export function LuFileDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M12 18v-6"},child:[]},{tag:"path",attr:{d:"m9 15 3 3 3-3"},child:[]}]})(props);
}
export default LuFileDown;
