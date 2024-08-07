import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Video icon from Lucide icons
 * @module
 */
export function LuVideo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m22 8-6 4 6 4V8Z"}},{tag:"rect",attr:{"width":"14","height":"12",x:"2",y:"6","rx":"2","ry":"2"},child:[]}]})(props);
}
export default LuVideo;
