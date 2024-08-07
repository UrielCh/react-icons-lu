import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Container icon from Lucide icons
 * @module
 */
export function LuContainer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}},{tag:"path",attr:{d:"M10 21.9V14L2.1 9.1"},child:[]},{tag:"path",attr:{d:"m10 14 11.9-6.9"},child:[]},{tag:"path",attr:{d:"M14 19.8v-8.1"},child:[]},{tag:"path",attr:{d:"M18 17.5V9.4"},child:[]}]})(props);
}
export default LuContainer;
