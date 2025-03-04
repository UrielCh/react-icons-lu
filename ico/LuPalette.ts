import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Palette icon from Lucide icons
 * @module
 */
export function LuPalette(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"13.5","cy":"6.5","r":".5",fill:"currentColor"}},{tag:"circle",attr:{"cx":"17.5","cy":"10.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"8.5","cy":"7.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"6.5","cy":"12.5","r":".5",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"},child:[]}]})(props);
}
export default LuPalette;
