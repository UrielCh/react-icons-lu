import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileImage icon from Lucide icons
 * @module
 */
export function LuFileImage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"circle",attr:{"cx":"10","cy":"12","r":"2"},child:[]},{tag:"path",attr:{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"},child:[]}]})(props);
}
export default LuFileImage;
