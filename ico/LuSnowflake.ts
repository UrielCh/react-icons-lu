import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Snowflake icon from Lucide icons
 * @module
 */
export function LuSnowflake(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"2","x2":"22","y1":"12","y2":"12"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"2","y2":"22"},child:[]},{tag:"path",attr:{d:"m20 16-4-4 4-4"},child:[]},{tag:"path",attr:{d:"m4 8 4 4-4 4"},child:[]},{tag:"path",attr:{d:"m16 4-4 4-4-4"},child:[]},{tag:"path",attr:{d:"m8 20 4-4 4 4"},child:[]}]})(props);
}
export default LuSnowflake;
