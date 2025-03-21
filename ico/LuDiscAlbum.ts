import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DiscAlbum icon from Lucide icons
 * @module
 */
export function LuDiscAlbum(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"5"},child:[]},{tag:"path",attr:{d:"M12 12h.01"},child:[]}]})(props);
}
export default LuDiscAlbum;
