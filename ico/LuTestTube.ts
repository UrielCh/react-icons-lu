import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TestTube icon from Lucide icons
 * @module
 */
export function LuTestTube(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}},{tag:"path",attr:{d:"M8.5 2h7"},child:[]},{tag:"path",attr:{d:"M14.5 16h-5"},child:[]}]})(props);
}
export default LuTestTube;
