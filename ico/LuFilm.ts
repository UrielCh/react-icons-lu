import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Film icon from Lucide icons
 * @module
 */
export function LuFilm(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M7 3v18"},child:[]},{tag:"path",attr:{d:"M3 7.5h4"},child:[]},{tag:"path",attr:{d:"M3 12h18"},child:[]},{tag:"path",attr:{d:"M3 16.5h4"},child:[]},{tag:"path",attr:{d:"M17 3v18"},child:[]},{tag:"path",attr:{d:"M17 7.5h4"},child:[]},{tag:"path",attr:{d:"M17 16.5h4"},child:[]}]})(props);
}
export default LuFilm;
