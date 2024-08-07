import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GalleryVertical icon from Lucide icons
 * @module
 */
export function LuGalleryVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 2h18"}},{tag:"rect",attr:{"width":"18","height":"12",x:"3",y:"6","rx":"2"},child:[]},{tag:"path",attr:{d:"M3 22h18"},child:[]}]})(props);
}
export default LuGalleryVertical;
