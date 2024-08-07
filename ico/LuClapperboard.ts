import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Clapperboard icon from Lucide icons
 * @module
 */
export function LuClapperboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z"}},{tag:"path",attr:{d:"m4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.01Z"},child:[]},{tag:"path",attr:{d:"m6.6 4.99 3.38 4.2"},child:[]},{tag:"path",attr:{d:"m11.86 3.38 3.38 4.2"},child:[]}]})(props);
}
export default LuClapperboard;
