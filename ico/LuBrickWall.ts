import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrickWall icon from Lucide icons
 * @module
 */
export function LuBrickWall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M12 9v6"},child:[]},{tag:"path",attr:{d:"M16 15v6"},child:[]},{tag:"path",attr:{d:"M16 3v6"},child:[]},{tag:"path",attr:{d:"M3 15h18"},child:[]},{tag:"path",attr:{d:"M3 9h18"},child:[]},{tag:"path",attr:{d:"M8 15v6"},child:[]},{tag:"path",attr:{d:"M8 3v6"},child:[]}]})(props);
}
export default LuBrickWall;
