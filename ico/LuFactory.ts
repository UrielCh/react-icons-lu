import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Factory icon from Lucide icons
 * @module
 */
export function LuFactory(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}},{tag:"path",attr:{d:"M17 18h1"},child:[]},{tag:"path",attr:{d:"M12 18h1"},child:[]},{tag:"path",attr:{d:"M7 18h1"},child:[]}]})(props);
}
export default LuFactory;
