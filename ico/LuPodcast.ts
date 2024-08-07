import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Podcast icon from Lucide icons
 * @module
 */
export function LuPodcast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"11","r":"1"}},{tag:"path",attr:{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"},child:[]},{tag:"path",attr:{d:"M8 14a5 5 0 1 1 8 0"},child:[]},{tag:"path",attr:{d:"M17 18.5a9 9 0 1 0-10 0"},child:[]}]})(props);
}
export default LuPodcast;
