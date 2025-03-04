import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileStack icon from Lucide icons
 * @module
 */
export function LuFileStack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7h-3a2 2 0 0 1-2-2V2"}},{tag:"path",attr:{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"},child:[]},{tag:"path",attr:{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"},child:[]},{tag:"path",attr:{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"},child:[]}]})(props);
}
export default LuFileStack;
