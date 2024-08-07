import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Voicemail icon from Lucide icons
 * @module
 */
export function LuVoicemail(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"6","cy":"12","r":"4"}},{tag:"circle",attr:{"cx":"18","cy":"12","r":"4"},child:[]},{tag:"line",attr:{"x1":"6","x2":"18","y1":"16","y2":"16"},child:[]}]})(props);
}
export default LuVoicemail;
