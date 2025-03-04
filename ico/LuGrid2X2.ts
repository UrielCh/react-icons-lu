import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Grid2X2 icon from Lucide icons
 * @module
 */
export function LuGrid2X2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v18"}},{tag:"path",attr:{d:"M3 12h18"},child:[]},{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"2"},child:[]}]})(props);
}
export default LuGrid2X2;
