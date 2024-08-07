import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Flower2 icon from Lucide icons
 * @module
 */
export function LuFlower2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}},{tag:"circle",attr:{"cx":"12","cy":"8","r":"2"},child:[]},{tag:"path",attr:{d:"M12 10v12"},child:[]},{tag:"path",attr:{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"},child:[]},{tag:"path",attr:{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"},child:[]}]})(props);
}
export default LuFlower2;
