import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SendHorizonal icon from Lucide icons
 * @module
 */
export function LuSendHorizonal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 3 3 9-3 9 19-9Z"}},{tag:"path",attr:{d:"M6 12h16"},child:[]}]})(props);
}
export default LuSendHorizonal;
