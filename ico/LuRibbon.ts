import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ribbon icon from Lucide icons
 * @module
 */
export function LuRibbon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"}},{tag:"path",attr:{d:"m12 18 2.57-3.5"},child:[]},{tag:"path",attr:{d:"M6.243 9.016a7 7 0 0 1 11.507-.009"},child:[]},{tag:"path",attr:{d:"M9.35 14.53 12 11.22"},child:[]},{tag:"path",attr:{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"},child:[]}]})(props);
}
export default LuRibbon;
