import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GalleryHorizontal icon from Lucide icons
 * @module
 */
export function LuGalleryHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3v18"}},{tag:"rect",attr:{"width":"12","height":"18",x:"6",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M22 3v18"},child:[]}]})(props);
}
export default LuGalleryHorizontal;
