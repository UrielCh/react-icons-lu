import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Vault icon from Lucide icons
 * @module
 */
export function LuVault(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"circle",attr:{"cx":"7.5","cy":"7.5","r":".5",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"m7.9 7.9 2.7 2.7"},child:[]},{tag:"circle",attr:{"cx":"16.5","cy":"7.5","r":".5",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"m13.4 10.6 2.7-2.7"},child:[]},{tag:"circle",attr:{"cx":"7.5","cy":"16.5","r":".5",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"m7.9 16.1 2.7-2.7"},child:[]},{tag:"circle",attr:{"cx":"16.5","cy":"16.5","r":".5",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"m13.4 13.4 2.7 2.7"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]}]})(props);
}
export default LuVault;
