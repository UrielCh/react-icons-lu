// Copyright 2022-2024 the Lucide icons authors. All rights reserved. ISC License (https://lucide.dev/license).
/**
 * # Lucide icons icons for preact
 * 
 * [![JSR](https://jsr.io/badges/@preact-icons/lu)](https://jsr.io/@preact-icons/lu)
 * 
 * **License** [ISC License](https://lucide.dev/license)
 * 
 * **Project** [https://lucide.dev/](https://lucide.dev/)
 * 
 * [See available icons here](https://react-icons.deno.dev/lu)
 * 
 * ## install the module
 * 
 * ```bash
 * deno add @preact-icons/lu
 * dnpx jsr add @preact-icons/lu
 * pnpm dlx jsr add @preact-icons/lu
 * bunx jsr add @preact-icons/lu
 * ```
 * 
 * You may need to update your preact mapping to avoid mixing JSR and http import:
 * Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
 * ```json
 * {
 *  "preact": "npm:preact@10.22.1",
 *  "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 *  "preact/hooks": "npm:preact@10.22.1/hooks",
 * }
 * ```
 * 
 * ## import an icon from all icons
 * 
 * ```ts
 * import { LuAArrowDown } from "@preact-icons/lu"
 * ```
 * 
 * ## import a single icon, downloading just one icon
 * 
 * ```ts
 * import { LuAArrowDown } from "react-icons/lu/LuAArrowDown"
 * ```
 * 
 * or using default export
 * 
 * ```ts
 * import LuAArrowDown from "react-icons/lu/LuAArrowDown"
 * ```
 * @module
 * 
 */

import { GenIcon } from "./deps.ts";
import type { IconBaseProps, JSX, VNode } from "./deps.ts";

/**
 * AArrowDown icon from Lucide icons
 */
export function LuAArrowDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.5 13h6"}},{tag:"path",attr:{d:"m2 16 4.5-9 4.5 9"},child:[]},{tag:"path",attr:{d:"M18 7v9"},child:[]},{tag:"path",attr:{d:"m14 12 4 4 4-4"},child:[]}]})(props);
}
/**
 * AArrowUp icon from Lucide icons
 */
export function LuAArrowUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.5 13h6"}},{tag:"path",attr:{d:"m2 16 4.5-9 4.5 9"},child:[]},{tag:"path",attr:{d:"M18 16V7"},child:[]},{tag:"path",attr:{d:"m14 11 4-4 4 4"},child:[]}]})(props);
}
/**
 * ALargeSmall icon from Lucide icons
 */
export function LuALargeSmall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 14h-5"}},{tag:"path",attr:{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"},child:[]},{tag:"path",attr:{d:"M4.5 13h6"},child:[]},{tag:"path",attr:{d:"m3 16 4.5-9 4.5 9"},child:[]}]})(props);
}
/**
 * Accessibility icon from Lucide icons
 */
export function LuAccessibility(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"16","cy":"4","r":"1"}},{tag:"path",attr:{d:"m18 19 1-7-6 1"},child:[]},{tag:"path",attr:{d:"m5 8 3-3 5.5 3-2.36 3.5"},child:[]},{tag:"path",attr:{d:"M4.24 14.5a5 5 0 0 0 6.88 6"},child:[]},{tag:"path",attr:{d:"M13.76 17.5a5 5 0 0 0-6.88-6"},child:[]}]})(props);
}
/**
 * Activity icon from Lucide icons
 */
export function LuActivity(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}}]})(props);
}
/**
 * AirVent icon from Lucide icons
 */
export function LuAirVent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}},{tag:"path",attr:{d:"M6 8h12"},child:[]},{tag:"path",attr:{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"},child:[]},{tag:"path",attr:{d:"M6.6 15.6A2 2 0 1 0 10 17v-5"},child:[]}]})(props);
}
/**
 * Airplay icon from Lucide icons
 */
export function LuAirplay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}},{tag:"path",attr:{d:"m12 15 5 6H7Z"},child:[]}]})(props);
}
/**
 * AlarmClock icon from Lucide icons
 */
export function LuAlarmClock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"13","r":"8"}},{tag:"path",attr:{d:"M12 9v4l2 2"},child:[]},{tag:"path",attr:{d:"M5 3 2 6"},child:[]},{tag:"path",attr:{d:"m22 6-3-3"},child:[]},{tag:"path",attr:{d:"M6.38 18.7 4 21"},child:[]},{tag:"path",attr:{d:"M17.64 18.67 20 21"},child:[]}]})(props);
}
/**
 * AlarmClockCheck icon from Lucide icons
 */
export function LuAlarmClockCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"13","r":"8"}},{tag:"path",attr:{d:"M5 3 2 6"},child:[]},{tag:"path",attr:{d:"m22 6-3-3"},child:[]},{tag:"path",attr:{d:"M6.38 18.7 4 21"},child:[]},{tag:"path",attr:{d:"M17.64 18.67 20 21"},child:[]},{tag:"path",attr:{d:"m9 13 2 2 4-4"},child:[]}]})(props);
}
/**
 * AlarmClockMinus icon from Lucide icons
 */
export function LuAlarmClockMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"13","r":"8"}},{tag:"path",attr:{d:"M5 3 2 6"},child:[]},{tag:"path",attr:{d:"m22 6-3-3"},child:[]},{tag:"path",attr:{d:"M6.38 18.7 4 21"},child:[]},{tag:"path",attr:{d:"M17.64 18.67 20 21"},child:[]},{tag:"path",attr:{d:"M9 13h6"},child:[]}]})(props);
}
/**
 * AlarmClockOff icon from Lucide icons
 */
export function LuAlarmClockOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}},{tag:"path",attr:{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"},child:[]},{tag:"path",attr:{d:"m22 6-3-3"},child:[]},{tag:"path",attr:{d:"M6.26 18.67 4 21"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M4 4 2 6"},child:[]}]})(props);
}
/**
 * AlarmClockPlus icon from Lucide icons
 */
export function LuAlarmClockPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"13","r":"8"}},{tag:"path",attr:{d:"M5 3 2 6"},child:[]},{tag:"path",attr:{d:"m22 6-3-3"},child:[]},{tag:"path",attr:{d:"M6.38 18.7 4 21"},child:[]},{tag:"path",attr:{d:"M17.64 18.67 20 21"},child:[]},{tag:"path",attr:{d:"M12 10v6"},child:[]},{tag:"path",attr:{d:"M9 13h6"},child:[]}]})(props);
}
/**
 * AlarmSmoke icon from Lucide icons
 */
export function LuAlarmSmoke(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 21c0-2.5 2-2.5 2-5"}},{tag:"path",attr:{d:"M16 21c0-2.5 2-2.5 2-5"},child:[]},{tag:"path",attr:{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"},child:[]},{tag:"path",attr:{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"},child:[]},{tag:"path",attr:{d:"M6 21c0-2.5 2-2.5 2-5"},child:[]}]})(props);
}
/**
 * Album icon from Lucide icons
 */
export function LuAlbum(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"polyline",attr:{"points":"11 3 11 11 14 8 17 11 17 3"},child:[]}]})(props);
}
/**
 * AlignCenter icon from Lucide icons
 */
export function LuAlignCenter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 12H7"}},{tag:"path",attr:{d:"M19 18H5"},child:[]},{tag:"path",attr:{d:"M21 6H3"},child:[]}]})(props);
}
/**
 * AlignCenterHorizontal icon from Lucide icons
 */
export function LuAlignCenterHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12h20"}},{tag:"path",attr:{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"},child:[]},{tag:"path",attr:{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"},child:[]},{tag:"path",attr:{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"},child:[]},{tag:"path",attr:{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"},child:[]}]})(props);
}
/**
 * AlignCenterVertical icon from Lucide icons
 */
export function LuAlignCenterVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v20"}},{tag:"path",attr:{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"},child:[]},{tag:"path",attr:{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"},child:[]},{tag:"path",attr:{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"},child:[]},{tag:"path",attr:{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"},child:[]}]})(props);
}
/**
 * AlignEndHorizontal icon from Lucide icons
 */
export function LuAlignEndHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"16",x:"4",y:"2","rx":"2"}},{tag:"rect",attr:{"width":"6","height":"9",x:"14",y:"9","rx":"2"},child:[]},{tag:"path",attr:{d:"M22 22H2"},child:[]}]})(props);
}
/**
 * AlignEndVertical icon from Lucide icons
 */
export function LuAlignEndVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"6",x:"2",y:"4","rx":"2"}},{tag:"rect",attr:{"width":"9","height":"6",x:"9",y:"14","rx":"2"},child:[]},{tag:"path",attr:{d:"M22 22V2"},child:[]}]})(props);
}
/**
 * AlignHorizontalDistributeCenter icon from Lucide icons
 */
export function LuAlignHorizontalDistributeCenter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"14",x:"4",y:"5","rx":"2"}},{tag:"rect",attr:{"width":"6","height":"10",x:"14",y:"7","rx":"2"},child:[]},{tag:"path",attr:{d:"M17 22v-5"},child:[]},{tag:"path",attr:{d:"M17 7V2"},child:[]},{tag:"path",attr:{d:"M7 22v-3"},child:[]},{tag:"path",attr:{d:"M7 5V2"},child:[]}]})(props);
}
/**
 * AlignHorizontalDistributeEnd icon from Lucide icons
 */
export function LuAlignHorizontalDistributeEnd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"14",x:"4",y:"5","rx":"2"}},{tag:"rect",attr:{"width":"6","height":"10",x:"14",y:"7","rx":"2"},child:[]},{tag:"path",attr:{d:"M10 2v20"},child:[]},{tag:"path",attr:{d:"M20 2v20"},child:[]}]})(props);
}
/**
 * AlignHorizontalDistributeStart icon from Lucide icons
 */
export function LuAlignHorizontalDistributeStart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"14",x:"4",y:"5","rx":"2"}},{tag:"rect",attr:{"width":"6","height":"10",x:"14",y:"7","rx":"2"},child:[]},{tag:"path",attr:{d:"M4 2v20"},child:[]},{tag:"path",attr:{d:"M14 2v20"},child:[]}]})(props);
}
/**
 * AlignHorizontalJustifyCenter icon from Lucide icons
 */
export function LuAlignHorizontalJustifyCenter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"14",x:"2",y:"5","rx":"2"}},{tag:"rect",attr:{"width":"6","height":"10",x:"16",y:"7","rx":"2"},child:[]},{tag:"path",attr:{d:"M12 2v20"},child:[]}]})(props);
}
/**
 * AlignHorizontalJustifyEnd icon from Lucide icons
 */
export function LuAlignHorizontalJustifyEnd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"14",x:"2",y:"5","rx":"2"}},{tag:"rect",attr:{"width":"6","height":"10",x:"12",y:"7","rx":"2"},child:[]},{tag:"path",attr:{d:"M22 2v20"},child:[]}]})(props);
}
/**
 * AlignHorizontalJustifyStart icon from Lucide icons
 */
export function LuAlignHorizontalJustifyStart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"14",x:"6",y:"5","rx":"2"}},{tag:"rect",attr:{"width":"6","height":"10",x:"16",y:"7","rx":"2"},child:[]},{tag:"path",attr:{d:"M2 2v20"},child:[]}]})(props);
}
/**
 * AlignHorizontalSpaceAround icon from Lucide icons
 */
export function LuAlignHorizontalSpaceAround(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"10",x:"9",y:"7","rx":"2"}},{tag:"path",attr:{d:"M4 22V2"},child:[]},{tag:"path",attr:{d:"M20 22V2"},child:[]}]})(props);
}
/**
 * AlignHorizontalSpaceBetween icon from Lucide icons
 */
export function LuAlignHorizontalSpaceBetween(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"14",x:"3",y:"5","rx":"2"}},{tag:"rect",attr:{"width":"6","height":"10",x:"15",y:"7","rx":"2"},child:[]},{tag:"path",attr:{d:"M3 2v20"},child:[]},{tag:"path",attr:{d:"M21 2v20"},child:[]}]})(props);
}
/**
 * AlignJustify icon from Lucide icons
 */
export function LuAlignJustify(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12h18"}},{tag:"path",attr:{d:"M3 18h18"},child:[]},{tag:"path",attr:{d:"M3 6h18"},child:[]}]})(props);
}
/**
 * AlignLeft icon from Lucide icons
 */
export function LuAlignLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 12H3"}},{tag:"path",attr:{d:"M17 18H3"},child:[]},{tag:"path",attr:{d:"M21 6H3"},child:[]}]})(props);
}
/**
 * AlignRight icon from Lucide icons
 */
export function LuAlignRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12H9"}},{tag:"path",attr:{d:"M21 18H7"},child:[]},{tag:"path",attr:{d:"M21 6H3"},child:[]}]})(props);
}
/**
 * AlignStartHorizontal icon from Lucide icons
 */
export function LuAlignStartHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"16",x:"4",y:"6","rx":"2"}},{tag:"rect",attr:{"width":"6","height":"9",x:"14",y:"6","rx":"2"},child:[]},{tag:"path",attr:{d:"M22 2H2"},child:[]}]})(props);
}
/**
 * AlignStartVertical icon from Lucide icons
 */
export function LuAlignStartVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"9","height":"6",x:"6",y:"14","rx":"2"}},{tag:"rect",attr:{"width":"16","height":"6",x:"6",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M2 2v20"},child:[]}]})(props);
}
/**
 * AlignVerticalDistributeCenter icon from Lucide icons
 */
export function LuAlignVerticalDistributeCenter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 17h-3"}},{tag:"path",attr:{d:"M22 7h-5"},child:[]},{tag:"path",attr:{d:"M5 17H2"},child:[]},{tag:"path",attr:{d:"M7 7H2"},child:[]},{tag:"rect",attr:{x:"5",y:"14","width":"14","height":"6","rx":"2"},child:[]},{tag:"rect",attr:{x:"7",y:"4","width":"10","height":"6","rx":"2"},child:[]}]})(props);
}
/**
 * AlignVerticalDistributeEnd icon from Lucide icons
 */
export function LuAlignVerticalDistributeEnd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"6",x:"5",y:"14","rx":"2"}},{tag:"rect",attr:{"width":"10","height":"6",x:"7",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M2 20h20"},child:[]},{tag:"path",attr:{d:"M2 10h20"},child:[]}]})(props);
}
/**
 * AlignVerticalDistributeStart icon from Lucide icons
 */
export function LuAlignVerticalDistributeStart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"6",x:"5",y:"14","rx":"2"}},{tag:"rect",attr:{"width":"10","height":"6",x:"7",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M2 14h20"},child:[]},{tag:"path",attr:{d:"M2 4h20"},child:[]}]})(props);
}
/**
 * AlignVerticalJustifyCenter icon from Lucide icons
 */
export function LuAlignVerticalJustifyCenter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"6",x:"5",y:"16","rx":"2"}},{tag:"rect",attr:{"width":"10","height":"6",x:"7",y:"2","rx":"2"},child:[]},{tag:"path",attr:{d:"M2 12h20"},child:[]}]})(props);
}
/**
 * AlignVerticalJustifyEnd icon from Lucide icons
 */
export function LuAlignVerticalJustifyEnd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"6",x:"5",y:"12","rx":"2"}},{tag:"rect",attr:{"width":"10","height":"6",x:"7",y:"2","rx":"2"},child:[]},{tag:"path",attr:{d:"M2 22h20"},child:[]}]})(props);
}
/**
 * AlignVerticalJustifyStart icon from Lucide icons
 */
export function LuAlignVerticalJustifyStart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"6",x:"5",y:"16","rx":"2"}},{tag:"rect",attr:{"width":"10","height":"6",x:"7",y:"6","rx":"2"},child:[]},{tag:"path",attr:{d:"M2 2h20"},child:[]}]})(props);
}
/**
 * AlignVerticalSpaceAround icon from Lucide icons
 */
export function LuAlignVerticalSpaceAround(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"10","height":"6",x:"7",y:"9","rx":"2"}},{tag:"path",attr:{d:"M22 20H2"},child:[]},{tag:"path",attr:{d:"M22 4H2"},child:[]}]})(props);
}
/**
 * AlignVerticalSpaceBetween icon from Lucide icons
 */
export function LuAlignVerticalSpaceBetween(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"6",x:"5",y:"15","rx":"2"}},{tag:"rect",attr:{"width":"10","height":"6",x:"7",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M2 21h20"},child:[]},{tag:"path",attr:{d:"M2 3h20"},child:[]}]})(props);
}
/**
 * Ambulance icon from Lucide icons
 */
export function LuAmbulance(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 10H6"}},{tag:"path",attr:{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"},child:[]},{tag:"path",attr:{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"},child:[]},{tag:"path",attr:{d:"M8 8v4"},child:[]},{tag:"path",attr:{d:"M9 18h6"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"18","r":"2"},child:[]},{tag:"circle",attr:{"cx":"7","cy":"18","r":"2"},child:[]}]})(props);
}
/**
 * Ampersand icon from Lucide icons
 */
export function LuAmpersand(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}},{tag:"path",attr:{d:"M16 12h3"},child:[]}]})(props);
}
/**
 * Ampersands icon from Lucide icons
 */
export function LuAmpersands(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}},{tag:"path",attr:{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"},child:[]}]})(props);
}
/**
 * Amphora icon from Lucide icons
 */
export function LuAmphora(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"}},{tag:"path",attr:{d:"M10 5H8a2 2 0 0 0 0 4h.68"},child:[]},{tag:"path",attr:{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"},child:[]},{tag:"path",attr:{d:"M14 5h2a2 2 0 0 1 0 4h-.68"},child:[]},{tag:"path",attr:{d:"M18 22H6"},child:[]},{tag:"path",attr:{d:"M9 2h6"},child:[]}]})(props);
}
/**
 * Anchor icon from Lucide icons
 */
export function LuAnchor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22V8"}},{tag:"path",attr:{d:"M5 12H2a10 10 0 0 0 20 0h-3"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"5","r":"3"},child:[]}]})(props);
}
/**
 * Angry icon from Lucide icons
 */
export function LuAngry(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M16 16s-1.5-2-4-2-4 2-4 2"},child:[]},{tag:"path",attr:{d:"M7.5 8 10 9"},child:[]},{tag:"path",attr:{d:"m14 9 2.5-1"},child:[]},{tag:"path",attr:{d:"M9 10h.01"},child:[]},{tag:"path",attr:{d:"M15 10h.01"},child:[]}]})(props);
}
/**
 * Annoyed icon from Lucide icons
 */
export function LuAnnoyed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M8 15h8"},child:[]},{tag:"path",attr:{d:"M8 9h2"},child:[]},{tag:"path",attr:{d:"M14 9h2"},child:[]}]})(props);
}
/**
 * Antenna icon from Lucide icons
 */
export function LuAntenna(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12 7 2"}},{tag:"path",attr:{d:"m7 12 5-10"},child:[]},{tag:"path",attr:{d:"m12 12 5-10"},child:[]},{tag:"path",attr:{d:"m17 12 5-10"},child:[]},{tag:"path",attr:{d:"M4.5 7h15"},child:[]},{tag:"path",attr:{d:"M12 16v6"},child:[]}]})(props);
}
/**
 * Anvil icon from Lucide icons
 */
export function LuAnvil(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"}},{tag:"path",attr:{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"},child:[]},{tag:"path",attr:{d:"M9 12v5"},child:[]},{tag:"path",attr:{d:"M15 12v5"},child:[]},{tag:"path",attr:{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"},child:[]}]})(props);
}
/**
 * Aperture icon from Lucide icons
 */
export function LuAperture(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(props);
}
/**
 * AppWindow icon from Lucide icons
 */
export function LuAppWindow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"4","width":"20","height":"16","rx":"2"}},{tag:"path",attr:{d:"M10 4v4"},child:[]},{tag:"path",attr:{d:"M2 8h20"},child:[]},{tag:"path",attr:{d:"M6 4v4"},child:[]}]})(props);
}
/**
 * AppWindowMac icon from Lucide icons
 */
export function LuAppWindowMac(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"}},{tag:"path",attr:{d:"M6 8h.01"},child:[]},{tag:"path",attr:{d:"M10 8h.01"},child:[]},{tag:"path",attr:{d:"M14 8h.01"},child:[]}]})(props);
}
/**
 * Apple icon from Lucide icons
 */
export function LuApple(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}},{tag:"path",attr:{d:"M10 2c1 .5 2 2 2 5"},child:[]}]})(props);
}
/**
 * Archive icon from Lucide icons
 */
export function LuArchive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"5",x:"2",y:"3","rx":"1"}},{tag:"path",attr:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"},child:[]},{tag:"path",attr:{d:"M10 12h4"},child:[]}]})(props);
}
/**
 * ArchiveRestore icon from Lucide icons
 */
export function LuArchiveRestore(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"5",x:"2",y:"3","rx":"1"}},{tag:"path",attr:{d:"M4 8v11a2 2 0 0 0 2 2h2"},child:[]},{tag:"path",attr:{d:"M20 8v11a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"m9 15 3-3 3 3"},child:[]},{tag:"path",attr:{d:"M12 12v9"},child:[]}]})(props);
}
/**
 * ArchiveX icon from Lucide icons
 */
export function LuArchiveX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"5",x:"2",y:"3","rx":"1"}},{tag:"path",attr:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"},child:[]},{tag:"path",attr:{d:"m9.5 17 5-5"},child:[]},{tag:"path",attr:{d:"m9.5 12 5 5"},child:[]}]})(props);
}
/**
 * Armchair icon from Lucide icons
 */
export function LuArmchair(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"},child:[]},{tag:"path",attr:{d:"M5 18v2"},child:[]},{tag:"path",attr:{d:"M19 18v2"},child:[]}]})(props);
}
/**
 * ArrowBigDown icon from Lucide icons
 */
export function LuArrowBigDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}}]})(props);
}
/**
 * ArrowBigDownDash icon from Lucide icons
 */
export function LuArrowBigDownDash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 5H9"}},{tag:"path",attr:{d:"M15 9v3h4l-7 7-7-7h4V9z"},child:[]}]})(props);
}
/**
 * ArrowBigLeft icon from Lucide icons
 */
export function LuArrowBigLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}}]})(props);
}
/**
 * ArrowBigLeftDash icon from Lucide icons
 */
export function LuArrowBigLeftDash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 15V9"}},{tag:"path",attr:{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"},child:[]}]})(props);
}
/**
 * ArrowBigRight icon from Lucide icons
 */
export function LuArrowBigRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}}]})(props);
}
/**
 * ArrowBigRightDash icon from Lucide icons
 */
export function LuArrowBigRightDash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 9v6"}},{tag:"path",attr:{d:"M9 9h3V5l7 7-7 7v-4H9V9z"},child:[]}]})(props);
}
/**
 * ArrowBigUp icon from Lucide icons
 */
export function LuArrowBigUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}}]})(props);
}
/**
 * ArrowBigUpDash icon from Lucide icons
 */
export function LuArrowBigUpDash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19h6"}},{tag:"path",attr:{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"},child:[]}]})(props);
}
/**
 * ArrowDown icon from Lucide icons
 */
export function LuArrowDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5v14"}},{tag:"path",attr:{d:"m19 12-7 7-7-7"},child:[]}]})(props);
}
/**
 * ArrowDown01 icon from Lucide icons
 */
export function LuArrowDown01(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 16 4 4 4-4"}},{tag:"path",attr:{d:"M7 20V4"},child:[]},{tag:"rect",attr:{x:"15",y:"4","width":"4","height":"6","ry":"2"},child:[]},{tag:"path",attr:{d:"M17 20v-6h-2"},child:[]},{tag:"path",attr:{d:"M15 20h4"},child:[]}]})(props);
}
/**
 * ArrowDown10 icon from Lucide icons
 */
export function LuArrowDown10(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 16 4 4 4-4"}},{tag:"path",attr:{d:"M7 20V4"},child:[]},{tag:"path",attr:{d:"M17 10V4h-2"},child:[]},{tag:"path",attr:{d:"M15 10h4"},child:[]},{tag:"rect",attr:{x:"15",y:"14","width":"4","height":"6","ry":"2"},child:[]}]})(props);
}
/**
 * ArrowDownAZ icon from Lucide icons
 */
export function LuArrowDownAZ(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 16 4 4 4-4"}},{tag:"path",attr:{d:"M7 20V4"},child:[]},{tag:"path",attr:{d:"M20 8h-5"},child:[]},{tag:"path",attr:{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"},child:[]},{tag:"path",attr:{d:"M15 14h5l-5 6h5"},child:[]}]})(props);
}
/**
 * ArrowDownFromLine icon from Lucide icons
 */
export function LuArrowDownFromLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 3H5"}},{tag:"path",attr:{d:"M12 21V7"},child:[]},{tag:"path",attr:{d:"m6 15 6 6 6-6"},child:[]}]})(props);
}
/**
 * ArrowDownLeft icon from Lucide icons
 */
export function LuArrowDownLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 7 7 17"}},{tag:"path",attr:{d:"M17 17H7V7"},child:[]}]})(props);
}
/**
 * ArrowDownNarrowWide icon from Lucide icons
 */
export function LuArrowDownNarrowWide(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 16 4 4 4-4"}},{tag:"path",attr:{d:"M7 20V4"},child:[]},{tag:"path",attr:{d:"M11 4h4"},child:[]},{tag:"path",attr:{d:"M11 8h7"},child:[]},{tag:"path",attr:{d:"M11 12h10"},child:[]}]})(props);
}
/**
 * ArrowDownRight icon from Lucide icons
 */
export function LuArrowDownRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 7 10 10"}},{tag:"path",attr:{d:"M17 7v10H7"},child:[]}]})(props);
}
/**
 * ArrowDownToDot icon from Lucide icons
 */
export function LuArrowDownToDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v14"}},{tag:"path",attr:{d:"m19 9-7 7-7-7"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"21","r":"1"},child:[]}]})(props);
}
/**
 * ArrowDownToLine icon from Lucide icons
 */
export function LuArrowDownToLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17V3"}},{tag:"path",attr:{d:"m6 11 6 6 6-6"},child:[]},{tag:"path",attr:{d:"M19 21H5"},child:[]}]})(props);
}
/**
 * ArrowDownUp icon from Lucide icons
 */
export function LuArrowDownUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 16 4 4 4-4"}},{tag:"path",attr:{d:"M7 20V4"},child:[]},{tag:"path",attr:{d:"m21 8-4-4-4 4"},child:[]},{tag:"path",attr:{d:"M17 4v16"},child:[]}]})(props);
}
/**
 * ArrowDownWideNarrow icon from Lucide icons
 */
export function LuArrowDownWideNarrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 16 4 4 4-4"}},{tag:"path",attr:{d:"M7 20V4"},child:[]},{tag:"path",attr:{d:"M11 4h10"},child:[]},{tag:"path",attr:{d:"M11 8h7"},child:[]},{tag:"path",attr:{d:"M11 12h4"},child:[]}]})(props);
}
/**
 * ArrowDownZA icon from Lucide icons
 */
export function LuArrowDownZA(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 16 4 4 4-4"}},{tag:"path",attr:{d:"M7 4v16"},child:[]},{tag:"path",attr:{d:"M15 4h5l-5 6h5"},child:[]},{tag:"path",attr:{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"},child:[]},{tag:"path",attr:{d:"M20 18h-5"},child:[]}]})(props);
}
/**
 * ArrowLeft icon from Lucide icons
 */
export function LuArrowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 19-7-7 7-7"}},{tag:"path",attr:{d:"M19 12H5"},child:[]}]})(props);
}
/**
 * ArrowLeftFromLine icon from Lucide icons
 */
export function LuArrowLeftFromLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 6-6 6 6 6"}},{tag:"path",attr:{d:"M3 12h14"},child:[]},{tag:"path",attr:{d:"M21 19V5"},child:[]}]})(props);
}
/**
 * ArrowLeftRight icon from Lucide icons
 */
export function LuArrowLeftRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3 4 7l4 4"}},{tag:"path",attr:{d:"M4 7h16"},child:[]},{tag:"path",attr:{d:"m16 21 4-4-4-4"},child:[]},{tag:"path",attr:{d:"M20 17H4"},child:[]}]})(props);
}
/**
 * ArrowLeftToLine icon from Lucide icons
 */
export function LuArrowLeftToLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 19V5"}},{tag:"path",attr:{d:"m13 6-6 6 6 6"},child:[]},{tag:"path",attr:{d:"M7 12h14"},child:[]}]})(props);
}
/**
 * ArrowRight icon from Lucide icons
 */
export function LuArrowRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"}},{tag:"path",attr:{d:"m12 5 7 7-7 7"},child:[]}]})(props);
}
/**
 * ArrowRightFromLine icon from Lucide icons
 */
export function LuArrowRightFromLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 5v14"}},{tag:"path",attr:{d:"M21 12H7"},child:[]},{tag:"path",attr:{d:"m15 18 6-6-6-6"},child:[]}]})(props);
}
/**
 * ArrowRightLeft icon from Lucide icons
 */
export function LuArrowRightLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16 3 4 4-4 4"}},{tag:"path",attr:{d:"M20 7H4"},child:[]},{tag:"path",attr:{d:"m8 21-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M4 17h16"},child:[]}]})(props);
}
/**
 * ArrowRightToLine icon from Lucide icons
 */
export function LuArrowRightToLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 12H3"}},{tag:"path",attr:{d:"m11 18 6-6-6-6"},child:[]},{tag:"path",attr:{d:"M21 5v14"},child:[]}]})(props);
}
/**
 * ArrowUp icon from Lucide icons
 */
export function LuArrowUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m5 12 7-7 7 7"}},{tag:"path",attr:{d:"M12 19V5"},child:[]}]})(props);
}
/**
 * ArrowUp01 icon from Lucide icons
 */
export function LuArrowUp01(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 8 4-4 4 4"}},{tag:"path",attr:{d:"M7 4v16"},child:[]},{tag:"rect",attr:{x:"15",y:"4","width":"4","height":"6","ry":"2"},child:[]},{tag:"path",attr:{d:"M17 20v-6h-2"},child:[]},{tag:"path",attr:{d:"M15 20h4"},child:[]}]})(props);
}
/**
 * ArrowUp10 icon from Lucide icons
 */
export function LuArrowUp10(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 8 4-4 4 4"}},{tag:"path",attr:{d:"M7 4v16"},child:[]},{tag:"path",attr:{d:"M17 10V4h-2"},child:[]},{tag:"path",attr:{d:"M15 10h4"},child:[]},{tag:"rect",attr:{x:"15",y:"14","width":"4","height":"6","ry":"2"},child:[]}]})(props);
}
/**
 * ArrowUpAZ icon from Lucide icons
 */
export function LuArrowUpAZ(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 8 4-4 4 4"}},{tag:"path",attr:{d:"M7 4v16"},child:[]},{tag:"path",attr:{d:"M20 8h-5"},child:[]},{tag:"path",attr:{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"},child:[]},{tag:"path",attr:{d:"M15 14h5l-5 6h5"},child:[]}]})(props);
}
/**
 * ArrowUpDown icon from Lucide icons
 */
export function LuArrowUpDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21 16-4 4-4-4"}},{tag:"path",attr:{d:"M17 20V4"},child:[]},{tag:"path",attr:{d:"m3 8 4-4 4 4"},child:[]},{tag:"path",attr:{d:"M7 4v16"},child:[]}]})(props);
}
/**
 * ArrowUpFromDot icon from Lucide icons
 */
export function LuArrowUpFromDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m5 9 7-7 7 7"}},{tag:"path",attr:{d:"M12 16V2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"21","r":"1"},child:[]}]})(props);
}
/**
 * ArrowUpFromLine icon from Lucide icons
 */
export function LuArrowUpFromLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 9-6-6-6 6"}},{tag:"path",attr:{d:"M12 3v14"},child:[]},{tag:"path",attr:{d:"M5 21h14"},child:[]}]})(props);
}
/**
 * ArrowUpLeft icon from Lucide icons
 */
export function LuArrowUpLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 17V7h10"}},{tag:"path",attr:{d:"M17 17 7 7"},child:[]}]})(props);
}
/**
 * ArrowUpNarrowWide icon from Lucide icons
 */
export function LuArrowUpNarrowWide(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 8 4-4 4 4"}},{tag:"path",attr:{d:"M7 4v16"},child:[]},{tag:"path",attr:{d:"M11 12h4"},child:[]},{tag:"path",attr:{d:"M11 16h7"},child:[]},{tag:"path",attr:{d:"M11 20h10"},child:[]}]})(props);
}
/**
 * ArrowUpRight icon from Lucide icons
 */
export function LuArrowUpRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 7h10v10"}},{tag:"path",attr:{d:"M7 17 17 7"},child:[]}]})(props);
}
/**
 * ArrowUpToLine icon from Lucide icons
 */
export function LuArrowUpToLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 3h14"}},{tag:"path",attr:{d:"m18 13-6-6-6 6"},child:[]},{tag:"path",attr:{d:"M12 7v14"},child:[]}]})(props);
}
/**
 * ArrowUpWideNarrow icon from Lucide icons
 */
export function LuArrowUpWideNarrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 8 4-4 4 4"}},{tag:"path",attr:{d:"M7 4v16"},child:[]},{tag:"path",attr:{d:"M11 12h10"},child:[]},{tag:"path",attr:{d:"M11 16h7"},child:[]},{tag:"path",attr:{d:"M11 20h4"},child:[]}]})(props);
}
/**
 * ArrowUpZA icon from Lucide icons
 */
export function LuArrowUpZA(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 8 4-4 4 4"}},{tag:"path",attr:{d:"M7 4v16"},child:[]},{tag:"path",attr:{d:"M15 4h5l-5 6h5"},child:[]},{tag:"path",attr:{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"},child:[]},{tag:"path",attr:{d:"M20 18h-5"},child:[]}]})(props);
}
/**
 * ArrowsUpFromLine icon from Lucide icons
 */
export function LuArrowsUpFromLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m4 6 3-3 3 3"}},{tag:"path",attr:{d:"M7 17V3"},child:[]},{tag:"path",attr:{d:"m14 6 3-3 3 3"},child:[]},{tag:"path",attr:{d:"M17 17V3"},child:[]},{tag:"path",attr:{d:"M4 21h16"},child:[]}]})(props);
}
/**
 * Asterisk icon from Lucide icons
 */
export function LuAsterisk(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 6v12"}},{tag:"path",attr:{d:"M17.196 9 6.804 15"},child:[]},{tag:"path",attr:{d:"m6.804 9 10.392 6"},child:[]}]})(props);
}
/**
 * AtSign icon from Lucide icons
 */
export function LuAtSign(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"}},{tag:"path",attr:{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"},child:[]}]})(props);
}
/**
 * Atom icon from Lucide icons
 */
export function LuAtom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"1"}},{tag:"path",attr:{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"},child:[]},{tag:"path",attr:{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"},child:[]}]})(props);
}
/**
 * AudioLines icon from Lucide icons
 */
export function LuAudioLines(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 10v3"}},{tag:"path",attr:{d:"M6 6v11"},child:[]},{tag:"path",attr:{d:"M10 3v18"},child:[]},{tag:"path",attr:{d:"M14 8v7"},child:[]},{tag:"path",attr:{d:"M18 5v13"},child:[]},{tag:"path",attr:{d:"M22 10v3"},child:[]}]})(props);
}
/**
 * AudioWaveform icon from Lucide icons
 */
export function LuAudioWaveform(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}}]})(props);
}
/**
 * Award icon from Lucide icons
 */
export function LuAward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}},{tag:"circle",attr:{"cx":"12","cy":"8","r":"6"},child:[]}]})(props);
}
/**
 * Axe icon from Lucide icons
 */
export function LuAxe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"}},{tag:"path",attr:{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"},child:[]}]})(props);
}
/**
 * Axis3D icon from Lucide icons
 */
export function LuAxis3D(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4v16h16"}},{tag:"path",attr:{d:"m4 20 7-7"},child:[]}]})(props);
}
/**
 * Baby icon from Lucide icons
 */
export function LuBaby(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 12h.01"}},{tag:"path",attr:{d:"M15 12h.01"},child:[]},{tag:"path",attr:{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"},child:[]},{tag:"path",attr:{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"},child:[]}]})(props);
}
/**
 * Backpack icon from Lucide icons
 */
export function LuBackpack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}},{tag:"path",attr:{d:"M8 10h8"},child:[]},{tag:"path",attr:{d:"M8 18h8"},child:[]},{tag:"path",attr:{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"},child:[]},{tag:"path",attr:{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"},child:[]}]})(props);
}
/**
 * Badge icon from Lucide icons
 */
export function LuBadge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}}]})(props);
}
/**
 * BadgeAlert icon from Lucide icons
 */
export function LuBadgeAlert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"8","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12.01","y1":"16","y2":"16"},child:[]}]})(props);
}
/**
 * BadgeCent icon from Lucide icons
 */
export function LuBadgeCent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attr:{d:"M12 7v10"},child:[]},{tag:"path",attr:{d:"M15.4 10a4 4 0 1 0 0 4"},child:[]}]})(props);
}
/**
 * BadgeCheck icon from Lucide icons
 */
export function LuBadgeCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(props);
}
/**
 * BadgeDollarSign icon from Lucide icons
 */
export function LuBadgeDollarSign(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attr:{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"},child:[]},{tag:"path",attr:{d:"M12 18V6"},child:[]}]})(props);
}
/**
 * BadgeEuro icon from Lucide icons
 */
export function LuBadgeEuro(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attr:{d:"M7 12h5"},child:[]},{tag:"path",attr:{d:"M15 9.4a4 4 0 1 0 0 5.2"},child:[]}]})(props);
}
/**
 * BadgeHelp icon from Lucide icons
 */
export function LuBadgeHelp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12.01","y1":"17","y2":"17"},child:[]}]})(props);
}
/**
 * BadgeIndianRupee icon from Lucide icons
 */
export function LuBadgeIndianRupee(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attr:{d:"M8 8h8"},child:[]},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"m13 17-5-1h1a4 4 0 0 0 0-8"},child:[]}]})(props);
}
/**
 * BadgeInfo icon from Lucide icons
 */
export function LuBadgeInfo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"16","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12.01","y1":"8","y2":"8"},child:[]}]})(props);
}
/**
 * BadgeJapaneseYen icon from Lucide icons
 */
export function LuBadgeJapaneseYen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attr:{d:"m9 8 3 3v7"},child:[]},{tag:"path",attr:{d:"m12 11 3-3"},child:[]},{tag:"path",attr:{d:"M9 12h6"},child:[]},{tag:"path",attr:{d:"M9 16h6"},child:[]}]})(props);
}
/**
 * BadgeMinus icon from Lucide icons
 */
export function LuBadgeMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"line",attr:{"x1":"8","x2":"16","y1":"12","y2":"12"},child:[]}]})(props);
}
/**
 * BadgePercent icon from Lucide icons
 */
export function LuBadgePercent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attr:{d:"m15 9-6 6"},child:[]},{tag:"path",attr:{d:"M9 9h.01"},child:[]},{tag:"path",attr:{d:"M15 15h.01"},child:[]}]})(props);
}
/**
 * BadgePlus icon from Lucide icons
 */
export function LuBadgePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"8","y2":"16"},child:[]},{tag:"line",attr:{"x1":"8","x2":"16","y1":"12","y2":"12"},child:[]}]})(props);
}
/**
 * BadgePoundSterling icon from Lucide icons
 */
export function LuBadgePoundSterling(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attr:{d:"M8 12h4"},child:[]},{tag:"path",attr:{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"},child:[]},{tag:"path",attr:{d:"M8 16h7"},child:[]}]})(props);
}
/**
 * BadgeRussianRuble icon from Lucide icons
 */
export function LuBadgeRussianRuble(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attr:{d:"M9 16h5"},child:[]},{tag:"path",attr:{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"},child:[]}]})(props);
}
/**
 * BadgeSwissFranc icon from Lucide icons
 */
export function LuBadgeSwissFranc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attr:{d:"M11 17V8h4"},child:[]},{tag:"path",attr:{d:"M11 12h3"},child:[]},{tag:"path",attr:{d:"M9 16h4"},child:[]}]})(props);
}
/**
 * BadgeX icon from Lucide icons
 */
export function LuBadgeX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"line",attr:{"x1":"15","x2":"9","y1":"9","y2":"15"},child:[]},{tag:"line",attr:{"x1":"9","x2":"15","y1":"9","y2":"15"},child:[]}]})(props);
}
/**
 * BaggageClaim icon from Lucide icons
 */
export function LuBaggageClaim(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}},{tag:"path",attr:{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"},child:[]},{tag:"rect",attr:{"width":"13","height":"8",x:"8",y:"6","rx":"1"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"20","r":"2"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"20","r":"2"},child:[]}]})(props);
}
/**
 * Ban icon from Lucide icons
 */
export function LuBan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m4.9 4.9 14.2 14.2"},child:[]}]})(props);
}
/**
 * Banana icon from Lucide icons
 */
export function LuBanana(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}},{tag:"path",attr:{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"},child:[]}]})(props);
}
/**
 * Bandage icon from Lucide icons
 */
export function LuBandage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 10.01h.01"}},{tag:"path",attr:{d:"M10 14.01h.01"},child:[]},{tag:"path",attr:{d:"M14 10.01h.01"},child:[]},{tag:"path",attr:{d:"M14 14.01h.01"},child:[]},{tag:"path",attr:{d:"M18 6v11.5"},child:[]},{tag:"path",attr:{d:"M6 6v12"},child:[]},{tag:"rect",attr:{x:"2",y:"6","width":"20","height":"12","rx":"2"},child:[]}]})(props);
}
/**
 * Banknote icon from Lucide icons
 */
export function LuBanknote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"12",x:"2",y:"6","rx":"2"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]},{tag:"path",attr:{d:"M6 12h.01M18 12h.01"},child:[]}]})(props);
}
/**
 * Barcode icon from Lucide icons
 */
export function LuBarcode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 5v14"}},{tag:"path",attr:{d:"M8 5v14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]},{tag:"path",attr:{d:"M17 5v14"},child:[]},{tag:"path",attr:{d:"M21 5v14"},child:[]}]})(props);
}
/**
 * Baseline icon from Lucide icons
 */
export function LuBaseline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 20h16"}},{tag:"path",attr:{d:"m6 16 6-12 6 12"},child:[]},{tag:"path",attr:{d:"M8 12h8"},child:[]}]})(props);
}
/**
 * Bath icon from Lucide icons
 */
export function LuBath(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 4 8 6"}},{tag:"path",attr:{d:"M17 19v2"},child:[]},{tag:"path",attr:{d:"M2 12h20"},child:[]},{tag:"path",attr:{d:"M7 19v2"},child:[]},{tag:"path",attr:{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"},child:[]}]})(props);
}
/**
 * Battery icon from Lucide icons
 */
export function LuBattery(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"10",x:"2",y:"7","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"22","x2":"22","y1":"11","y2":"13"},child:[]}]})(props);
}
/**
 * BatteryCharging icon from Lucide icons
 */
export function LuBatteryCharging(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}},{tag:"path",attr:{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"},child:[]},{tag:"path",attr:{d:"m11 7-3 5h4l-3 5"},child:[]},{tag:"line",attr:{"x1":"22","x2":"22","y1":"11","y2":"13"},child:[]}]})(props);
}
/**
 * BatteryFull icon from Lucide icons
 */
export function LuBatteryFull(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"10",x:"2",y:"7","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"22","x2":"22","y1":"11","y2":"13"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6","y1":"11","y2":"13"},child:[]},{tag:"line",attr:{"x1":"10","x2":"10","y1":"11","y2":"13"},child:[]},{tag:"line",attr:{"x1":"14","x2":"14","y1":"11","y2":"13"},child:[]}]})(props);
}
/**
 * BatteryLow icon from Lucide icons
 */
export function LuBatteryLow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"10",x:"2",y:"7","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"22","x2":"22","y1":"11","y2":"13"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6","y1":"11","y2":"13"},child:[]}]})(props);
}
/**
 * BatteryMedium icon from Lucide icons
 */
export function LuBatteryMedium(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"10",x:"2",y:"7","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"22","x2":"22","y1":"11","y2":"13"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6","y1":"11","y2":"13"},child:[]},{tag:"line",attr:{"x1":"10","x2":"10","y1":"11","y2":"13"},child:[]}]})(props);
}
/**
 * BatteryWarning icon from Lucide icons
 */
export function LuBatteryWarning(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 17h.01"}},{tag:"path",attr:{d:"M10 7v6"},child:[]},{tag:"path",attr:{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M22 11v2"},child:[]},{tag:"path",attr:{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"},child:[]}]})(props);
}
/**
 * Beaker icon from Lucide icons
 */
export function LuBeaker(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4.5 3h15"}},{tag:"path",attr:{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"},child:[]},{tag:"path",attr:{d:"M6 14h12"},child:[]}]})(props);
}
/**
 * Bean icon from Lucide icons
 */
export function LuBean(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}},{tag:"path",attr:{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"},child:[]}]})(props);
}
/**
 * BeanOff icon from Lucide icons
 */
export function LuBeanOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}},{tag:"path",attr:{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"},child:[]},{tag:"path",attr:{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Bed icon from Lucide icons
 */
export function LuBed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 4v16"}},{tag:"path",attr:{d:"M2 8h18a2 2 0 0 1 2 2v10"},child:[]},{tag:"path",attr:{d:"M2 17h20"},child:[]},{tag:"path",attr:{d:"M6 8v9"},child:[]}]})(props);
}
/**
 * BedDouble icon from Lucide icons
 */
export function LuBedDouble(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}},{tag:"path",attr:{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"},child:[]},{tag:"path",attr:{d:"M12 4v6"},child:[]},{tag:"path",attr:{d:"M2 18h20"},child:[]}]})(props);
}
/**
 * BedSingle icon from Lucide icons
 */
export function LuBedSingle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}},{tag:"path",attr:{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"},child:[]},{tag:"path",attr:{d:"M3 18h18"},child:[]}]})(props);
}
/**
 * Beef icon from Lucide icons
 */
export function LuBeef(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12.5","cy":"8.5","r":"2.5"}},{tag:"path",attr:{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"},child:[]},{tag:"path",attr:{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"},child:[]}]})(props);
}
/**
 * Beer icon from Lucide icons
 */
export function LuBeer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 11h1a3 3 0 0 1 0 6h-1"}},{tag:"path",attr:{d:"M9 12v6"},child:[]},{tag:"path",attr:{d:"M13 12v6"},child:[]},{tag:"path",attr:{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"},child:[]},{tag:"path",attr:{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"},child:[]}]})(props);
}
/**
 * BeerOff icon from Lucide icons
 */
export function LuBeerOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 13v5"}},{tag:"path",attr:{d:"M17 11.47V8"},child:[]},{tag:"path",attr:{d:"M17 11h1a3 3 0 0 1 2.745 4.211"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"},child:[]},{tag:"path",attr:{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"},child:[]},{tag:"path",attr:{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"},child:[]},{tag:"path",attr:{d:"M9 14.6V18"},child:[]}]})(props);
}
/**
 * Bell icon from Lucide icons
 */
export function LuBell(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]}]})(props);
}
/**
 * BellDot icon from Lucide icons
 */
export function LuBellDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"}},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"8","r":"3"},child:[]}]})(props);
}
/**
 * BellElectric icon from Lucide icons
 */
export function LuBellElectric(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.8 4A6.3 8.7 0 0 1 20 9"}},{tag:"path",attr:{d:"M9 9h.01"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"9","r":"7"},child:[]},{tag:"rect",attr:{"width":"10","height":"6",x:"4",y:"16","rx":"2"},child:[]},{tag:"path",attr:{d:"M14 19c3 0 4.6-1.6 4.6-1.6"},child:[]},{tag:"circle",attr:{"cx":"20","cy":"16","r":"2"},child:[]}]})(props);
}
/**
 * BellMinus icon from Lucide icons
 */
export function LuBellMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"}},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"M15 8h6"},child:[]}]})(props);
}
/**
 * BellOff icon from Lucide icons
 */
export function LuBellOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"}},{tag:"path",attr:{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * BellPlus icon from Lucide icons
 */
export function LuBellPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"}},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"M15 8h6"},child:[]},{tag:"path",attr:{d:"M18 5v6"},child:[]}]})(props);
}
/**
 * BellRing icon from Lucide icons
 */
export function LuBellRing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"M4 2C2.8 3.7 2 5.7 2 8"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.3-.8-4.3-2-6"},child:[]}]})(props);
}
/**
 * BetweenHorizontalEnd icon from Lucide icons
 */
export function LuBetweenHorizontalEnd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"13","height":"7",x:"3",y:"3","rx":"1"}},{tag:"path",attr:{d:"m22 15-3-3 3-3"},child:[]},{tag:"rect",attr:{"width":"13","height":"7",x:"3",y:"14","rx":"1"},child:[]}]})(props);
}
/**
 * BetweenHorizontalStart icon from Lucide icons
 */
export function LuBetweenHorizontalStart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"13","height":"7",x:"8",y:"3","rx":"1"}},{tag:"path",attr:{d:"m2 9 3 3-3 3"},child:[]},{tag:"rect",attr:{"width":"13","height":"7",x:"8",y:"14","rx":"1"},child:[]}]})(props);
}
/**
 * BetweenVerticalEnd icon from Lucide icons
 */
export function LuBetweenVerticalEnd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"7","height":"13",x:"3",y:"3","rx":"1"}},{tag:"path",attr:{d:"m9 22 3-3 3 3"},child:[]},{tag:"rect",attr:{"width":"7","height":"13",x:"14",y:"3","rx":"1"},child:[]}]})(props);
}
/**
 * BetweenVerticalStart icon from Lucide icons
 */
export function LuBetweenVerticalStart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"7","height":"13",x:"3",y:"8","rx":"1"}},{tag:"path",attr:{d:"m15 2-3 3-3-3"},child:[]},{tag:"rect",attr:{"width":"7","height":"13",x:"14",y:"8","rx":"1"},child:[]}]})(props);
}
/**
 * BicepsFlexed icon from Lucide icons
 */
export function LuBicepsFlexed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"}},{tag:"path",attr:{d:"M15 14a5 5 0 0 0-7.584 2"},child:[]},{tag:"path",attr:{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15"},child:[]}]})(props);
}
/**
 * Bike icon from Lucide icons
 */
export function LuBike(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"18.5","cy":"17.5","r":"3.5"}},{tag:"circle",attr:{"cx":"5.5","cy":"17.5","r":"3.5"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"5","r":"1"},child:[]},{tag:"path",attr:{d:"M12 17.5V14l-3-3 4-3 2 3h2"},child:[]}]})(props);
}
/**
 * Binary icon from Lucide icons
 */
export function LuBinary(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"14","width":"4","height":"6","rx":"2"}},{tag:"rect",attr:{x:"6",y:"4","width":"4","height":"6","rx":"2"},child:[]},{tag:"path",attr:{d:"M6 20h4"},child:[]},{tag:"path",attr:{d:"M14 10h4"},child:[]},{tag:"path",attr:{d:"M6 14h2v6"},child:[]},{tag:"path",attr:{d:"M14 4h2v6"},child:[]}]})(props);
}
/**
 * Binoculars icon from Lucide icons
 */
export function LuBinoculars(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 10h4"}},{tag:"path",attr:{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"},child:[]},{tag:"path",attr:{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"},child:[]},{tag:"path",attr:{d:"M 22 16 L 2 16"},child:[]},{tag:"path",attr:{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"},child:[]},{tag:"path",attr:{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"},child:[]}]})(props);
}
/**
 * Biohazard icon from Lucide icons
 */
export function LuBiohazard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"11.9","r":"2"}},{tag:"path",attr:{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"},child:[]},{tag:"path",attr:{d:"m8.9 10.1 1.4.8"},child:[]},{tag:"path",attr:{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"},child:[]},{tag:"path",attr:{d:"m15.1 10.1-1.4.8"},child:[]},{tag:"path",attr:{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"},child:[]},{tag:"path",attr:{d:"M12 13.9v1.6"},child:[]},{tag:"path",attr:{d:"M13.5 5.4c-1-.2-2-.2-3 0"},child:[]},{tag:"path",attr:{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"},child:[]},{tag:"path",attr:{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"},child:[]}]})(props);
}
/**
 * Bird icon from Lucide icons
 */
export function LuBird(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 7h.01"}},{tag:"path",attr:{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"},child:[]},{tag:"path",attr:{d:"m20 7 2 .5-2 .5"},child:[]},{tag:"path",attr:{d:"M10 18v3"},child:[]},{tag:"path",attr:{d:"M14 17.75V21"},child:[]},{tag:"path",attr:{d:"M7 18a6 6 0 0 0 3.84-10.61"},child:[]}]})(props);
}
/**
 * Bitcoin icon from Lucide icons
 */
export function LuBitcoin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}}]})(props);
}
/**
 * Blend icon from Lucide icons
 */
export function LuBlend(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"9","cy":"9","r":"7"}},{tag:"circle",attr:{"cx":"15","cy":"15","r":"7"},child:[]}]})(props);
}
/**
 * Blinds icon from Lucide icons
 */
export function LuBlinds(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3h18"}},{tag:"path",attr:{d:"M20 7H8"},child:[]},{tag:"path",attr:{d:"M20 11H8"},child:[]},{tag:"path",attr:{d:"M10 19h10"},child:[]},{tag:"path",attr:{d:"M8 15h12"},child:[]},{tag:"path",attr:{d:"M4 3v14"},child:[]},{tag:"circle",attr:{"cx":"4","cy":"19","r":"2"},child:[]}]})(props);
}
/**
 * Blocks icon from Lucide icons
 */
export function LuBlocks(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"7","height":"7",x:"14",y:"3","rx":"1"}},{tag:"path",attr:{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"},child:[]}]})(props);
}
/**
 * Bluetooth icon from Lucide icons
 */
export function LuBluetooth(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 7 10 10-5 5V2l5 5L7 17"}}]})(props);
}
/**
 * BluetoothConnected icon from Lucide icons
 */
export function LuBluetoothConnected(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 7 10 10-5 5V2l5 5L7 17"}},{tag:"line",attr:{"x1":"18","x2":"21","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"3","x2":"6","y1":"12","y2":"12"},child:[]}]})(props);
}
/**
 * BluetoothOff icon from Lucide icons
 */
export function LuBluetoothOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 17-5 5V12l-5 5"}},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M14.5 9.5 17 7l-5-5v4.5"},child:[]}]})(props);
}
/**
 * BluetoothSearching icon from Lucide icons
 */
export function LuBluetoothSearching(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 7 10 10-5 5V2l5 5L7 17"}},{tag:"path",attr:{d:"M20.83 14.83a4 4 0 0 0 0-5.66"},child:[]},{tag:"path",attr:{d:"M18 12h.01"},child:[]}]})(props);
}
/**
 * Bold icon from Lucide icons
 */
export function LuBold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"}}]})(props);
}
/**
 * Bolt icon from Lucide icons
 */
export function LuBolt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"},child:[]}]})(props);
}
/**
 * Bomb icon from Lucide icons
 */
export function LuBomb(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"11","cy":"13","r":"9"}},{tag:"path",attr:{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"},child:[]},{tag:"path",attr:{d:"m22 2-1.5 1.5"},child:[]}]})(props);
}
/**
 * Bone icon from Lucide icons
 */
export function LuBone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}}]})(props);
}
/**
 * Book icon from Lucide icons
 */
export function LuBook(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}}]})(props);
}
/**
 * BookA icon from Lucide icons
 */
export function LuBookA(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}},{tag:"path",attr:{d:"m8 13 4-7 4 7"},child:[]},{tag:"path",attr:{d:"M9.1 11h5.7"},child:[]}]})(props);
}
/**
 * BookAudio icon from Lucide icons
 */
export function LuBookAudio(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 6v7"}},{tag:"path",attr:{d:"M16 8v3"},child:[]},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]},{tag:"path",attr:{d:"M8 8v3"},child:[]}]})(props);
}
/**
 * BookCheck icon from Lucide icons
 */
export function LuBookCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}},{tag:"path",attr:{d:"m9 9.5 2 2 4-4"},child:[]}]})(props);
}
/**
 * BookCopy icon from Lucide icons
 */
export function LuBookCopy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 16V4a2 2 0 0 1 2-2h11"}},{tag:"path",attr:{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"},child:[]},{tag:"path",attr:{d:"M5 14H4a2 2 0 1 0 0 4h1"},child:[]}]})(props);
}
/**
 * BookDashed icon from Lucide icons
 */
export function LuBookDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17h2"}},{tag:"path",attr:{d:"M12 22h2"},child:[]},{tag:"path",attr:{d:"M12 2h2"},child:[]},{tag:"path",attr:{d:"M18 22h1a1 1 0 0 0 1-1"},child:[]},{tag:"path",attr:{d:"M18 2h1a1 1 0 0 1 1 1v1"},child:[]},{tag:"path",attr:{d:"M20 15v2h-2"},child:[]},{tag:"path",attr:{d:"M20 8v3"},child:[]},{tag:"path",attr:{d:"M4 11V9"},child:[]},{tag:"path",attr:{d:"M4 19.5V15"},child:[]},{tag:"path",attr:{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"},child:[]},{tag:"path",attr:{d:"M8 22H6.5a1 1 0 0 1 0-5H8"},child:[]}]})(props);
}
/**
 * BookDown icon from Lucide icons
 */
export function LuBookDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13V7"}},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]},{tag:"path",attr:{d:"m9 10 3 3 3-3"},child:[]}]})(props);
}
/**
 * BookHeadphones icon from Lucide icons
 */
export function LuBookHeadphones(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}},{tag:"path",attr:{d:"M8 12v-2a4 4 0 0 1 8 0v2"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"12","r":"1"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"12","r":"1"},child:[]}]})(props);
}
/**
 * BookHeart icon from Lucide icons
 */
export function LuBookHeart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"}},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]}]})(props);
}
/**
 * BookImage icon from Lucide icons
 */
export function LuBookImage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]},{tag:"circle",attr:{"cx":"10","cy":"8","r":"2"},child:[]}]})(props);
}
/**
 * BookKey icon from Lucide icons
 */
export function LuBookKey(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m19 3 1 1"}},{tag:"path",attr:{d:"m20 2-4.5 4.5"},child:[]},{tag:"path",attr:{d:"M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"},child:[]},{tag:"circle",attr:{"cx":"14","cy":"8","r":"2"},child:[]}]})(props);
}
/**
 * BookLock icon from Lucide icons
 */
export function LuBookLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6V4a2 2 0 1 0-4 0v2"}},{tag:"path",attr:{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"},child:[]},{tag:"rect",attr:{x:"12",y:"6","width":"8","height":"5","rx":"1"},child:[]}]})(props);
}
/**
 * BookMarked icon from Lucide icons
 */
export function LuBookMarked(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2v8l3-3 3 3V2"}},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]}]})(props);
}
/**
 * BookMinus icon from Lucide icons
 */
export function LuBookMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}},{tag:"path",attr:{d:"M9 10h6"},child:[]}]})(props);
}
/**
 * BookOpen icon from Lucide icons
 */
export function LuBookOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 7v14"}},{tag:"path",attr:{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"},child:[]}]})(props);
}
/**
 * BookOpenCheck icon from Lucide icons
 */
export function LuBookOpenCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 21V7"}},{tag:"path",attr:{d:"m16 12 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"},child:[]}]})(props);
}
/**
 * BookOpenText icon from Lucide icons
 */
export function LuBookOpenText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 7v14"}},{tag:"path",attr:{d:"M16 12h2"},child:[]},{tag:"path",attr:{d:"M16 8h2"},child:[]},{tag:"path",attr:{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"},child:[]},{tag:"path",attr:{d:"M6 12h2"},child:[]},{tag:"path",attr:{d:"M6 8h2"},child:[]}]})(props);
}
/**
 * BookPlus icon from Lucide icons
 */
export function LuBookPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 7v6"}},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]},{tag:"path",attr:{d:"M9 10h6"},child:[]}]})(props);
}
/**
 * BookText icon from Lucide icons
 */
export function LuBookText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}},{tag:"path",attr:{d:"M8 11h8"},child:[]},{tag:"path",attr:{d:"M8 7h6"},child:[]}]})(props);
}
/**
 * BookType icon from Lucide icons
 */
export function LuBookType(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13h4"}},{tag:"path",attr:{d:"M12 6v7"},child:[]},{tag:"path",attr:{d:"M16 8V6H8v2"},child:[]},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]}]})(props);
}
/**
 * BookUp icon from Lucide icons
 */
export function LuBookUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13V7"}},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]},{tag:"path",attr:{d:"m9 10 3-3 3 3"},child:[]}]})(props);
}
/**
 * BookUp2 icon from Lucide icons
 */
export function LuBookUp2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13V7"}},{tag:"path",attr:{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"},child:[]},{tag:"path",attr:{d:"m9 10 3-3 3 3"},child:[]},{tag:"path",attr:{d:"m9 5 3-3 3 3"},child:[]}]})(props);
}
/**
 * BookUser icon from Lucide icons
 */
export function LuBookUser(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 13a3 3 0 1 0-6 0"}},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"8","r":"2"},child:[]}]})(props);
}
/**
 * BookX icon from Lucide icons
 */
export function LuBookX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m14.5 7-5 5"}},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]},{tag:"path",attr:{d:"m9.5 7 5 5"},child:[]}]})(props);
}
/**
 * Bookmark icon from Lucide icons
 */
export function LuBookmark(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}}]})(props);
}
/**
 * BookmarkCheck icon from Lucide icons
 */
export function LuBookmarkCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}},{tag:"path",attr:{d:"m9 10 2 2 4-4"},child:[]}]})(props);
}
/**
 * BookmarkMinus icon from Lucide icons
 */
export function LuBookmarkMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}},{tag:"line",attr:{"x1":"15","x2":"9","y1":"10","y2":"10"},child:[]}]})(props);
}
/**
 * BookmarkPlus icon from Lucide icons
 */
export function LuBookmarkPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"7","y2":"13"},child:[]},{tag:"line",attr:{"x1":"15","x2":"9","y1":"10","y2":"10"},child:[]}]})(props);
}
/**
 * BookmarkX icon from Lucide icons
 */
export function LuBookmarkX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}},{tag:"path",attr:{d:"m14.5 7.5-5 5"},child:[]},{tag:"path",attr:{d:"m9.5 7.5 5 5"},child:[]}]})(props);
}
/**
 * BoomBox icon from Lucide icons
 */
export function LuBoomBox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}},{tag:"path",attr:{d:"M8 8v1"},child:[]},{tag:"path",attr:{d:"M12 8v1"},child:[]},{tag:"path",attr:{d:"M16 8v1"},child:[]},{tag:"rect",attr:{"width":"20","height":"12",x:"2",y:"9","rx":"2"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"15","r":"2"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"15","r":"2"},child:[]}]})(props);
}
/**
 * Bot icon from Lucide icons
 */
export function LuBot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 8V4H8"}},{tag:"rect",attr:{"width":"16","height":"12",x:"4",y:"8","rx":"2"},child:[]},{tag:"path",attr:{d:"M2 14h2"},child:[]},{tag:"path",attr:{d:"M20 14h2"},child:[]},{tag:"path",attr:{d:"M15 13v2"},child:[]},{tag:"path",attr:{d:"M9 13v2"},child:[]}]})(props);
}
/**
 * BotMessageSquare icon from Lucide icons
 */
export function LuBotMessageSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 6V2H8"}},{tag:"path",attr:{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"},child:[]},{tag:"path",attr:{d:"M2 12h2"},child:[]},{tag:"path",attr:{d:"M9 11v2"},child:[]},{tag:"path",attr:{d:"M15 11v2"},child:[]},{tag:"path",attr:{d:"M20 12h2"},child:[]}]})(props);
}
/**
 * BotOff icon from Lucide icons
 */
export function LuBotOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33"}},{tag:"path",attr:{d:"M2 14h2"},child:[]},{tag:"path",attr:{d:"M20 14h2"},child:[]},{tag:"path",attr:{d:"M22 22 2 2"},child:[]},{tag:"path",attr:{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"},child:[]},{tag:"path",attr:{d:"M9 13v2"},child:[]},{tag:"path",attr:{d:"M9.67 4H12v2.33"},child:[]}]})(props);
}
/**
 * Box icon from Lucide icons
 */
export function LuBox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attr:{d:"m3.3 7 8.7 5 8.7-5"},child:[]},{tag:"path",attr:{d:"M12 22V12"},child:[]}]})(props);
}
/**
 * Boxes icon from Lucide icons
 */
export function LuBoxes(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}},{tag:"path",attr:{d:"m7 16.5-4.74-2.85"},child:[]},{tag:"path",attr:{d:"m7 16.5 5-3"},child:[]},{tag:"path",attr:{d:"M7 16.5v5.17"},child:[]},{tag:"path",attr:{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"},child:[]},{tag:"path",attr:{d:"m17 16.5-5-3"},child:[]},{tag:"path",attr:{d:"m17 16.5 4.74-2.85"},child:[]},{tag:"path",attr:{d:"M17 16.5v5.17"},child:[]},{tag:"path",attr:{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"},child:[]},{tag:"path",attr:{d:"M12 8 7.26 5.15"},child:[]},{tag:"path",attr:{d:"m12 8 4.74-2.85"},child:[]},{tag:"path",attr:{d:"M12 13.5V8"},child:[]}]})(props);
}
/**
 * Braces icon from Lucide icons
 */
export function LuBraces(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}},{tag:"path",attr:{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"},child:[]}]})(props);
}
/**
 * Brackets icon from Lucide icons
 */
export function LuBrackets(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 3h3v18h-3"}},{tag:"path",attr:{d:"M8 21H5V3h3"},child:[]}]})(props);
}
/**
 * Brain icon from Lucide icons
 */
export function LuBrain(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}},{tag:"path",attr:{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"},child:[]},{tag:"path",attr:{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"},child:[]},{tag:"path",attr:{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"},child:[]},{tag:"path",attr:{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"},child:[]},{tag:"path",attr:{d:"M3.477 10.896a4 4 0 0 1 .585-.396"},child:[]},{tag:"path",attr:{d:"M19.938 10.5a4 4 0 0 1 .585.396"},child:[]},{tag:"path",attr:{d:"M6 18a4 4 0 0 1-1.967-.516"},child:[]},{tag:"path",attr:{d:"M19.967 17.484A4 4 0 0 1 18 18"},child:[]}]})(props);
}
/**
 * BrainCircuit icon from Lucide icons
 */
export function LuBrainCircuit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}},{tag:"path",attr:{d:"M9 13a4.5 4.5 0 0 0 3-4"},child:[]},{tag:"path",attr:{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"},child:[]},{tag:"path",attr:{d:"M3.477 10.896a4 4 0 0 1 .585-.396"},child:[]},{tag:"path",attr:{d:"M6 18a4 4 0 0 1-1.967-.516"},child:[]},{tag:"path",attr:{d:"M12 13h4"},child:[]},{tag:"path",attr:{d:"M12 18h6a2 2 0 0 1 2 2v1"},child:[]},{tag:"path",attr:{d:"M12 8h8"},child:[]},{tag:"path",attr:{d:"M16 8V5a2 2 0 0 1 2-2"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"13","r":".5"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"3","r":".5"},child:[]},{tag:"circle",attr:{"cx":"20","cy":"21","r":".5"},child:[]},{tag:"circle",attr:{"cx":"20","cy":"8","r":".5"},child:[]}]})(props);
}
/**
 * BrainCog icon from Lucide icons
 */
export function LuBrainCog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"}},{tag:"path",attr:{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"},child:[]},{tag:"path",attr:{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"},child:[]},{tag:"path",attr:{d:"M3.477 10.896a4 4 0 0 1 .585-.396"},child:[]},{tag:"path",attr:{d:"M19.938 10.5a4 4 0 0 1 .585.396"},child:[]},{tag:"path",attr:{d:"M6 18a4 4 0 0 1-1.967-.516"},child:[]},{tag:"path",attr:{d:"M19.967 17.484A4 4 0 0 1 18 18"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]},{tag:"path",attr:{d:"m15.7 10.4-.9.4"},child:[]},{tag:"path",attr:{d:"m9.2 13.2-.9.4"},child:[]},{tag:"path",attr:{d:"m13.6 15.7-.4-.9"},child:[]},{tag:"path",attr:{d:"m10.8 9.2-.4-.9"},child:[]},{tag:"path",attr:{d:"m15.7 13.5-.9-.4"},child:[]},{tag:"path",attr:{d:"m9.2 10.9-.9-.4"},child:[]},{tag:"path",attr:{d:"m10.5 15.7.4-.9"},child:[]},{tag:"path",attr:{d:"m13.1 9.2.4-.9"},child:[]}]})(props);
}
/**
 * BrickWall icon from Lucide icons
 */
export function LuBrickWall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M12 9v6"},child:[]},{tag:"path",attr:{d:"M16 15v6"},child:[]},{tag:"path",attr:{d:"M16 3v6"},child:[]},{tag:"path",attr:{d:"M3 15h18"},child:[]},{tag:"path",attr:{d:"M3 9h18"},child:[]},{tag:"path",attr:{d:"M8 15v6"},child:[]},{tag:"path",attr:{d:"M8 3v6"},child:[]}]})(props);
}
/**
 * Briefcase icon from Lucide icons
 */
export function LuBriefcase(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"6","rx":"2"},child:[]}]})(props);
}
/**
 * BriefcaseBusiness icon from Lucide icons
 */
export function LuBriefcaseBusiness(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12h.01"}},{tag:"path",attr:{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"},child:[]},{tag:"path",attr:{d:"M22 13a18.15 18.15 0 0 1-20 0"},child:[]},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"6","rx":"2"},child:[]}]})(props);
}
/**
 * BriefcaseConveyorBelt icon from Lucide icons
 */
export function LuBriefcaseConveyorBelt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 20v2"}},{tag:"path",attr:{d:"M14 20v2"},child:[]},{tag:"path",attr:{d:"M18 20v2"},child:[]},{tag:"path",attr:{d:"M21 20H3"},child:[]},{tag:"path",attr:{d:"M6 20v2"},child:[]},{tag:"path",attr:{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"},child:[]},{tag:"rect",attr:{x:"4",y:"6","width":"16","height":"10","rx":"2"},child:[]}]})(props);
}
/**
 * BriefcaseMedical icon from Lucide icons
 */
export function LuBriefcaseMedical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 11v4"}},{tag:"path",attr:{d:"M14 13h-4"},child:[]},{tag:"path",attr:{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"},child:[]},{tag:"path",attr:{d:"M18 6v14"},child:[]},{tag:"path",attr:{d:"M6 6v14"},child:[]},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"6","rx":"2"},child:[]}]})(props);
}
/**
 * BringToFront icon from Lucide icons
 */
export function LuBringToFront(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"8",y:"8","width":"8","height":"8","rx":"2"}},{tag:"path",attr:{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"},child:[]}]})(props);
}
/**
 * Brush icon from Lucide icons
 */
export function LuBrush(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"}},{tag:"path",attr:{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"},child:[]}]})(props);
}
/**
 * Bug icon from Lucide icons
 */
export function LuBug(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m8 2 1.88 1.88"}},{tag:"path",attr:{d:"M14.12 3.88 16 2"},child:[]},{tag:"path",attr:{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"},child:[]},{tag:"path",attr:{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"},child:[]},{tag:"path",attr:{d:"M12 20v-9"},child:[]},{tag:"path",attr:{d:"M6.53 9C4.6 8.8 3 7.1 3 5"},child:[]},{tag:"path",attr:{d:"M6 13H2"},child:[]},{tag:"path",attr:{d:"M3 21c0-2.1 1.7-3.9 3.8-4"},child:[]},{tag:"path",attr:{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"},child:[]},{tag:"path",attr:{d:"M22 13h-4"},child:[]},{tag:"path",attr:{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"},child:[]}]})(props);
}
/**
 * BugOff icon from Lucide icons
 */
export function LuBugOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}},{tag:"path",attr:{d:"M14.12 3.88 16 2"},child:[]},{tag:"path",attr:{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"},child:[]},{tag:"path",attr:{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"},child:[]},{tag:"path",attr:{d:"M12 20v-8"},child:[]},{tag:"path",attr:{d:"M6 13H2"},child:[]},{tag:"path",attr:{d:"M3 21c0-2.1 1.7-3.9 3.8-4"},child:[]}]})(props);
}
/**
 * BugPlay icon from Lucide icons
 */
export function LuBugPlay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}},{tag:"path",attr:{d:"M14.12 3.88 16 2"},child:[]},{tag:"path",attr:{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"},child:[]},{tag:"path",attr:{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"},child:[]},{tag:"path",attr:{d:"M3 21c0-2.1 1.7-3.9 3.8-4"},child:[]},{tag:"path",attr:{d:"M6 13H2"},child:[]},{tag:"path",attr:{d:"M6.53 9C4.6 8.8 3 7.1 3 5"},child:[]},{tag:"path",attr:{d:"m8 2 1.88 1.88"},child:[]},{tag:"path",attr:{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"},child:[]}]})(props);
}
/**
 * Building icon from Lucide icons
 */
export function LuBuilding(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"20",x:"4",y:"2","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M9 22v-4h6v4"},child:[]},{tag:"path",attr:{d:"M8 6h.01"},child:[]},{tag:"path",attr:{d:"M16 6h.01"},child:[]},{tag:"path",attr:{d:"M12 6h.01"},child:[]},{tag:"path",attr:{d:"M12 10h.01"},child:[]},{tag:"path",attr:{d:"M12 14h.01"},child:[]},{tag:"path",attr:{d:"M16 10h.01"},child:[]},{tag:"path",attr:{d:"M16 14h.01"},child:[]},{tag:"path",attr:{d:"M8 10h.01"},child:[]},{tag:"path",attr:{d:"M8 14h.01"},child:[]}]})(props);
}
/**
 * Building2 icon from Lucide icons
 */
export function LuBuilding2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}},{tag:"path",attr:{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"},child:[]},{tag:"path",attr:{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M10 6h4"},child:[]},{tag:"path",attr:{d:"M10 10h4"},child:[]},{tag:"path",attr:{d:"M10 14h4"},child:[]},{tag:"path",attr:{d:"M10 18h4"},child:[]}]})(props);
}
/**
 * Bus icon from Lucide icons
 */
export function LuBus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 6v6"}},{tag:"path",attr:{d:"M15 6v6"},child:[]},{tag:"path",attr:{d:"M2 12h19.6"},child:[]},{tag:"path",attr:{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"},child:[]},{tag:"circle",attr:{"cx":"7","cy":"18","r":"2"},child:[]},{tag:"path",attr:{d:"M9 18h5"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"18","r":"2"},child:[]}]})(props);
}
/**
 * BusFront icon from Lucide icons
 */
export function LuBusFront(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 6 2 7"}},{tag:"path",attr:{d:"M10 6h4"},child:[]},{tag:"path",attr:{d:"m22 7-2-1"},child:[]},{tag:"rect",attr:{"width":"16","height":"16",x:"4",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M4 11h16"},child:[]},{tag:"path",attr:{d:"M8 15h.01"},child:[]},{tag:"path",attr:{d:"M16 15h.01"},child:[]},{tag:"path",attr:{d:"M6 19v2"},child:[]},{tag:"path",attr:{d:"M18 21v-2"},child:[]}]})(props);
}
/**
 * Cable icon from Lucide icons
 */
export function LuCable(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"}},{tag:"path",attr:{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"},child:[]},{tag:"path",attr:{d:"M21 21v-2h-4"},child:[]},{tag:"path",attr:{d:"M3 5h4V3"},child:[]},{tag:"path",attr:{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"},child:[]}]})(props);
}
/**
 * CableCar icon from Lucide icons
 */
export function LuCableCar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 3h.01"}},{tag:"path",attr:{d:"M14 2h.01"},child:[]},{tag:"path",attr:{d:"m2 9 20-5"},child:[]},{tag:"path",attr:{d:"M12 12V6.5"},child:[]},{tag:"rect",attr:{"width":"16","height":"10",x:"4",y:"12","rx":"3"},child:[]},{tag:"path",attr:{d:"M9 12v5"},child:[]},{tag:"path",attr:{d:"M15 12v5"},child:[]},{tag:"path",attr:{d:"M4 17h16"},child:[]}]})(props);
}
/**
 * Cake icon from Lucide icons
 */
export function LuCake(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}},{tag:"path",attr:{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"},child:[]},{tag:"path",attr:{d:"M2 21h20"},child:[]},{tag:"path",attr:{d:"M7 8v3"},child:[]},{tag:"path",attr:{d:"M12 8v3"},child:[]},{tag:"path",attr:{d:"M17 8v3"},child:[]},{tag:"path",attr:{d:"M7 4h.01"},child:[]},{tag:"path",attr:{d:"M12 4h.01"},child:[]},{tag:"path",attr:{d:"M17 4h.01"},child:[]}]})(props);
}
/**
 * CakeSlice icon from Lucide icons
 */
export function LuCakeSlice(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"9","cy":"7","r":"2"}},{tag:"path",attr:{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"},child:[]},{tag:"path",attr:{d:"M16 13H3"},child:[]},{tag:"path",attr:{d:"M16 17H3"},child:[]}]})(props);
}
/**
 * Calculator icon from Lucide icons
 */
export function LuCalculator(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"20",x:"4",y:"2","rx":"2"}},{tag:"line",attr:{"x1":"8","x2":"16","y1":"6","y2":"6"},child:[]},{tag:"line",attr:{"x1":"16","x2":"16","y1":"14","y2":"18"},child:[]},{tag:"path",attr:{d:"M16 10h.01"},child:[]},{tag:"path",attr:{d:"M12 10h.01"},child:[]},{tag:"path",attr:{d:"M8 10h.01"},child:[]},{tag:"path",attr:{d:"M12 14h.01"},child:[]},{tag:"path",attr:{d:"M8 14h.01"},child:[]},{tag:"path",attr:{d:"M12 18h.01"},child:[]},{tag:"path",attr:{d:"M8 18h.01"},child:[]}]})(props);
}
/**
 * Calendar icon from Lucide icons
 */
export function LuCalendar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]}]})(props);
}
/**
 * Calendar1 icon from Lucide icons
 */
export function LuCalendar1(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 14h1v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"rect",attr:{x:"3",y:"4","width":"18","height":"18","rx":"2"},child:[]}]})(props);
}
/**
 * CalendarArrowDown icon from Lucide icons
 */
export function LuCalendarArrowDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m14 18 4 4 4-4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M18 14v8"},child:[]},{tag:"path",attr:{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]}]})(props);
}
/**
 * CalendarArrowUp icon from Lucide icons
 */
export function LuCalendarArrowUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m14 18 4-4 4 4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M18 22v-8"},child:[]},{tag:"path",attr:{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]}]})(props);
}
/**
 * CalendarCheck icon from Lucide icons
 */
export function LuCalendarCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"m9 16 2 2 4-4"},child:[]}]})(props);
}
/**
 * CalendarCheck2 icon from Lucide icons
 */
export function LuCalendarCheck2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"m16 20 2 2 4-4"},child:[]}]})(props);
}
/**
 * CalendarClock icon from Lucide icons
 */
export function LuCalendarClock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"16","r":"6"},child:[]}]})(props);
}
/**
 * CalendarCog icon from Lucide icons
 */
export function LuCalendarCog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15.2 16.9-.9-.4"}},{tag:"path",attr:{d:"m15.2 19.1-.9.4"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"m16.9 15.2-.4-.9"},child:[]},{tag:"path",attr:{d:"m16.9 20.8-.4.9"},child:[]},{tag:"path",attr:{d:"m19.5 14.3-.4.9"},child:[]},{tag:"path",attr:{d:"m19.5 21.7-.4-.9"},child:[]},{tag:"path",attr:{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"},child:[]},{tag:"path",attr:{d:"m21.7 16.5-.9.4"},child:[]},{tag:"path",attr:{d:"m21.7 19.5-.9-.4"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"},child:[]}]})(props);
}
/**
 * CalendarDays icon from Lucide icons
 */
export function LuCalendarDays(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 14h.01"},child:[]},{tag:"path",attr:{d:"M12 14h.01"},child:[]},{tag:"path",attr:{d:"M16 14h.01"},child:[]},{tag:"path",attr:{d:"M8 18h.01"},child:[]},{tag:"path",attr:{d:"M12 18h.01"},child:[]},{tag:"path",attr:{d:"M16 18h.01"},child:[]}]})(props);
}
/**
 * CalendarFold icon from Lucide icons
 */
export function LuCalendarFold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M15 22v-4a2 2 0 0 1 2-2h4"},child:[]}]})(props);
}
/**
 * CalendarHeart icon from Lucide icons
 */
export function LuCalendarHeart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"}},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"},child:[]}]})(props);
}
/**
 * CalendarMinus icon from Lucide icons
 */
export function LuCalendarMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 19h6"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]}]})(props);
}
/**
 * CalendarMinus2 icon from Lucide icons
 */
export function LuCalendarMinus2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M10 16h4"},child:[]}]})(props);
}
/**
 * CalendarOff icon from Lucide icons
 */
export function LuCalendarOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}},{tag:"path",attr:{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h7"},child:[]},{tag:"path",attr:{d:"M21 10h-5.5"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * CalendarPlus icon from Lucide icons
 */
export function LuCalendarPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M16 19h6"},child:[]},{tag:"path",attr:{d:"M19 16v6"},child:[]}]})(props);
}
/**
 * CalendarPlus2 icon from Lucide icons
 */
export function LuCalendarPlus2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M10 16h4"},child:[]},{tag:"path",attr:{d:"M12 14v4"},child:[]}]})(props);
}
/**
 * CalendarRange icon from Lucide icons
 */
export function LuCalendarRange(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"4","rx":"2"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M17 14h-6"},child:[]},{tag:"path",attr:{d:"M13 18H7"},child:[]},{tag:"path",attr:{d:"M7 14h.01"},child:[]},{tag:"path",attr:{d:"M17 18h.01"},child:[]}]})(props);
}
/**
 * CalendarSearch icon from Lucide icons
 */
export function LuCalendarSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 2v4"}},{tag:"path",attr:{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"},child:[]},{tag:"path",attr:{d:"m22 22-1.875-1.875"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"},child:[]}]})(props);
}
/**
 * CalendarSync icon from Lucide icons
 */
export function LuCalendarSync(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 10v4h4"}},{tag:"path",attr:{d:"m11 14 1.535-1.605a5 5 0 0 1 8 1.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"m21 18-1.535 1.605a5 5 0 0 1-8-1.5"},child:[]},{tag:"path",attr:{d:"M21 22v-4h-4"},child:[]},{tag:"path",attr:{d:"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"},child:[]},{tag:"path",attr:{d:"M3 10h4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]}]})(props);
}
/**
 * CalendarX icon from Lucide icons
 */
export function LuCalendarX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"m14 14-4 4"},child:[]},{tag:"path",attr:{d:"m10 14 4 4"},child:[]}]})(props);
}
/**
 * CalendarX2 icon from Lucide icons
 */
export function LuCalendarX2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"m17 22 5-5"},child:[]},{tag:"path",attr:{d:"m17 17 5 5"},child:[]}]})(props);
}
/**
 * Camera icon from Lucide icons
 */
export function LuCamera(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}},{tag:"circle",attr:{"cx":"12","cy":"13","r":"3"},child:[]}]})(props);
}
/**
 * CameraOff icon from Lucide icons
 */
export function LuCameraOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"}},{tag:"path",attr:{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"},child:[]},{tag:"path",attr:{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"},child:[]},{tag:"path",attr:{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"},child:[]}]})(props);
}
/**
 * Candy icon from Lucide icons
 */
export function LuCandy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"}},{tag:"path",attr:{d:"M14 6.5v10"},child:[]},{tag:"path",attr:{d:"M10 7.5v10"},child:[]},{tag:"path",attr:{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"},child:[]},{tag:"path",attr:{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"},child:[]}]})(props);
}
/**
 * CandyCane icon from Lucide icons
 */
export function LuCandyCane(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}},{tag:"path",attr:{d:"M17.75 7 15 2.1"},child:[]},{tag:"path",attr:{d:"M10.9 4.8 13 9"},child:[]},{tag:"path",attr:{d:"m7.9 9.7 2 4.4"},child:[]},{tag:"path",attr:{d:"M4.9 14.7 7 18.9"},child:[]}]})(props);
}
/**
 * CandyOff icon from Lucide icons
 */
export function LuCandyOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"}},{tag:"path",attr:{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"},child:[]},{tag:"path",attr:{d:"M14 16.5V14"},child:[]},{tag:"path",attr:{d:"M14 6.5v1.843"},child:[]},{tag:"path",attr:{d:"M10 10v7.5"},child:[]},{tag:"path",attr:{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"},child:[]},{tag:"path",attr:{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Cannabis icon from Lucide icons
 */
export function LuCannabis(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22v-4"}},{tag:"path",attr:{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"},child:[]}]})(props);
}
/**
 * Captions icon from Lucide icons
 */
export function LuCaptions(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"14",x:"3",y:"5","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M7 15h4M15 15h2M7 11h2M13 11h4"},child:[]}]})(props);
}
/**
 * CaptionsOff icon from Lucide icons
 */
export function LuCaptionsOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5"}},{tag:"path",attr:{d:"M17 11h-.5"},child:[]},{tag:"path",attr:{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M7 11h4"},child:[]},{tag:"path",attr:{d:"M7 15h2.5"},child:[]}]})(props);
}
/**
 * Car icon from Lucide icons
 */
export function LuCar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}},{tag:"circle",attr:{"cx":"7","cy":"17","r":"2"},child:[]},{tag:"path",attr:{d:"M9 17h6"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"17","r":"2"},child:[]}]})(props);
}
/**
 * CarFront icon from Lucide icons
 */
export function LuCarFront(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}},{tag:"path",attr:{d:"M7 14h.01"},child:[]},{tag:"path",attr:{d:"M17 14h.01"},child:[]},{tag:"rect",attr:{"width":"18","height":"8",x:"3",y:"10","rx":"2"},child:[]},{tag:"path",attr:{d:"M5 18v2"},child:[]},{tag:"path",attr:{d:"M19 18v2"},child:[]}]})(props);
}
/**
 * CarTaxiFront icon from Lucide icons
 */
export function LuCarTaxiFront(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2h4"}},{tag:"path",attr:{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"},child:[]},{tag:"path",attr:{d:"M7 14h.01"},child:[]},{tag:"path",attr:{d:"M17 14h.01"},child:[]},{tag:"rect",attr:{"width":"18","height":"8",x:"3",y:"10","rx":"2"},child:[]},{tag:"path",attr:{d:"M5 18v2"},child:[]},{tag:"path",attr:{d:"M19 18v2"},child:[]}]})(props);
}
/**
 * Caravan icon from Lucide icons
 */
export function LuCaravan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}},{tag:"path",attr:{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"},child:[]},{tag:"path",attr:{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"19","r":"2"},child:[]}]})(props);
}
/**
 * Carrot icon from Lucide icons
 */
export function LuCarrot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}},{tag:"path",attr:{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"},child:[]},{tag:"path",attr:{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"},child:[]}]})(props);
}
/**
 * CaseLower icon from Lucide icons
 */
export function LuCaseLower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"7","cy":"12","r":"3"}},{tag:"path",attr:{d:"M10 9v6"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"12","r":"3"},child:[]},{tag:"path",attr:{d:"M14 7v8"},child:[]}]})(props);
}
/**
 * CaseSensitive icon from Lucide icons
 */
export function LuCaseSensitive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 15 4-8 4 8"}},{tag:"path",attr:{d:"M4 13h6"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"12","r":"3"},child:[]},{tag:"path",attr:{d:"M21 9v6"},child:[]}]})(props);
}
/**
 * CaseUpper icon from Lucide icons
 */
export function LuCaseUpper(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 15 4-8 4 8"}},{tag:"path",attr:{d:"M4 13h6"},child:[]},{tag:"path",attr:{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"},child:[]}]})(props);
}
/**
 * CassetteTape icon from Lucide icons
 */
export function LuCassetteTape(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"}},{tag:"circle",attr:{"cx":"8","cy":"10","r":"2"},child:[]},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"10","r":"2"},child:[]},{tag:"path",attr:{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"},child:[]}]})(props);
}
/**
 * Cast icon from Lucide icons
 */
export function LuCast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}},{tag:"path",attr:{d:"M2 12a9 9 0 0 1 8 8"},child:[]},{tag:"path",attr:{d:"M2 16a5 5 0 0 1 4 4"},child:[]},{tag:"line",attr:{"x1":"2","x2":"2.01","y1":"20","y2":"20"},child:[]}]})(props);
}
/**
 * Castle icon from Lucide icons
 */
export function LuCastle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}},{tag:"path",attr:{d:"M18 11V4H6v7"},child:[]},{tag:"path",attr:{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"},child:[]},{tag:"path",attr:{d:"M22 11V9"},child:[]},{tag:"path",attr:{d:"M2 11V9"},child:[]},{tag:"path",attr:{d:"M6 4V2"},child:[]},{tag:"path",attr:{d:"M18 4V2"},child:[]},{tag:"path",attr:{d:"M10 4V2"},child:[]},{tag:"path",attr:{d:"M14 4V2"},child:[]}]})(props);
}
/**
 * Cat icon from Lucide icons
 */
export function LuCat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}},{tag:"path",attr:{d:"M8 14v.5"},child:[]},{tag:"path",attr:{d:"M16 14v.5"},child:[]},{tag:"path",attr:{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"},child:[]}]})(props);
}
/**
 * Cctv icon from Lucide icons
 */
export function LuCctv(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"}},{tag:"path",attr:{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"},child:[]},{tag:"path",attr:{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"},child:[]},{tag:"path",attr:{d:"M2 21v-4"},child:[]},{tag:"path",attr:{d:"M7 9h.01"},child:[]}]})(props);
}
/**
 * ChartArea icon from Lucide icons
 */
export function LuChartArea(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"}},{tag:"path",attr:{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"},child:[]}]})(props);
}
/**
 * ChartBar icon from Lucide icons
 */
export function LuChartBar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"}},{tag:"path",attr:{d:"M7 16h8"},child:[]},{tag:"path",attr:{d:"M7 11h12"},child:[]},{tag:"path",attr:{d:"M7 6h3"},child:[]}]})(props);
}
/**
 * ChartBarBig icon from Lucide icons
 */
export function LuChartBarBig(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"}},{tag:"rect",attr:{x:"7",y:"13","width":"9","height":"4","rx":"1"},child:[]},{tag:"rect",attr:{x:"7",y:"5","width":"12","height":"4","rx":"1"},child:[]}]})(props);
}
/**
 * ChartBarDecreasing icon from Lucide icons
 */
export function LuChartBarDecreasing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"}},{tag:"path",attr:{d:"M7 11h8"},child:[]},{tag:"path",attr:{d:"M7 16h3"},child:[]},{tag:"path",attr:{d:"M7 6h12"},child:[]}]})(props);
}
/**
 * ChartBarIncreasing icon from Lucide icons
 */
export function LuChartBarIncreasing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"}},{tag:"path",attr:{d:"M7 11h8"},child:[]},{tag:"path",attr:{d:"M7 16h12"},child:[]},{tag:"path",attr:{d:"M7 6h3"},child:[]}]})(props);
}
/**
 * ChartBarStacked icon from Lucide icons
 */
export function LuChartBarStacked(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 13v4"}},{tag:"path",attr:{d:"M15 5v4"},child:[]},{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"},child:[]},{tag:"rect",attr:{x:"7",y:"13","width":"9","height":"4","rx":"1"},child:[]},{tag:"rect",attr:{x:"7",y:"5","width":"12","height":"4","rx":"1"},child:[]}]})(props);
}
/**
 * ChartCandlestick icon from Lucide icons
 */
export function LuChartCandlestick(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 5v4"}},{tag:"rect",attr:{"width":"4","height":"6",x:"7",y:"9","rx":"1"},child:[]},{tag:"path",attr:{d:"M9 15v2"},child:[]},{tag:"path",attr:{d:"M17 3v2"},child:[]},{tag:"rect",attr:{"width":"4","height":"8",x:"15",y:"5","rx":"1"},child:[]},{tag:"path",attr:{d:"M17 13v3"},child:[]},{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"},child:[]}]})(props);
}
/**
 * ChartColumn icon from Lucide icons
 */
export function LuChartColumn(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"}},{tag:"path",attr:{d:"M18 17V9"},child:[]},{tag:"path",attr:{d:"M13 17V5"},child:[]},{tag:"path",attr:{d:"M8 17v-3"},child:[]}]})(props);
}
/**
 * ChartColumnBig icon from Lucide icons
 */
export function LuChartColumnBig(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"}},{tag:"rect",attr:{x:"15",y:"5","width":"4","height":"12","rx":"1"},child:[]},{tag:"rect",attr:{x:"7",y:"8","width":"4","height":"9","rx":"1"},child:[]}]})(props);
}
/**
 * ChartColumnDecreasing icon from Lucide icons
 */
export function LuChartColumnDecreasing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 17V9"}},{tag:"path",attr:{d:"M18 17v-3"},child:[]},{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"},child:[]},{tag:"path",attr:{d:"M8 17V5"},child:[]}]})(props);
}
/**
 * ChartColumnIncreasing icon from Lucide icons
 */
export function LuChartColumnIncreasing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 17V9"}},{tag:"path",attr:{d:"M18 17V5"},child:[]},{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"},child:[]},{tag:"path",attr:{d:"M8 17v-3"},child:[]}]})(props);
}
/**
 * ChartColumnStacked icon from Lucide icons
 */
export function LuChartColumnStacked(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 13H7"}},{tag:"path",attr:{d:"M19 9h-4"},child:[]},{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"},child:[]},{tag:"rect",attr:{x:"15",y:"5","width":"4","height":"12","rx":"1"},child:[]},{tag:"rect",attr:{x:"7",y:"8","width":"4","height":"9","rx":"1"},child:[]}]})(props);
}
/**
 * ChartGantt icon from Lucide icons
 */
export function LuChartGantt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 6h8"}},{tag:"path",attr:{d:"M12 16h6"},child:[]},{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"},child:[]},{tag:"path",attr:{d:"M8 11h7"},child:[]}]})(props);
}
/**
 * ChartLine icon from Lucide icons
 */
export function LuChartLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"}},{tag:"path",attr:{d:"m19 9-5 5-4-4-3 3"},child:[]}]})(props);
}
/**
 * ChartNetwork icon from Lucide icons
 */
export function LuChartNetwork(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m13.11 7.664 1.78 2.672"}},{tag:"path",attr:{d:"m14.162 12.788-3.324 1.424"},child:[]},{tag:"path",attr:{d:"m20 4-6.06 1.515"},child:[]},{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"6","r":"2"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"12","r":"2"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"15","r":"2"},child:[]}]})(props);
}
/**
 * ChartNoAxesColumn icon from Lucide icons
 */
export function LuChartNoAxesColumn(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"18","x2":"18","y1":"20","y2":"10"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"20","y2":"4"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6","y1":"20","y2":"14"},child:[]}]})(props);
}
/**
 * ChartNoAxesColumnDecreasing icon from Lucide icons
 */
export function LuChartNoAxesColumnDecreasing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20V10"}},{tag:"path",attr:{d:"M18 20v-4"},child:[]},{tag:"path",attr:{d:"M6 20V4"},child:[]}]})(props);
}
/**
 * ChartNoAxesColumnIncreasing icon from Lucide icons
 */
export function LuChartNoAxesColumnIncreasing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"12","x2":"12","y1":"20","y2":"10"}},{tag:"line",attr:{"x1":"18","x2":"18","y1":"20","y2":"4"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6","y1":"20","y2":"16"},child:[]}]})(props);
}
/**
 * ChartNoAxesCombined icon from Lucide icons
 */
export function LuChartNoAxesCombined(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 16v5"}},{tag:"path",attr:{d:"M16 14v7"},child:[]},{tag:"path",attr:{d:"M20 10v11"},child:[]},{tag:"path",attr:{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"},child:[]},{tag:"path",attr:{d:"M4 18v3"},child:[]},{tag:"path",attr:{d:"M8 14v7"},child:[]}]})(props);
}
/**
 * ChartNoAxesGantt icon from Lucide icons
 */
export function LuChartNoAxesGantt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 6h10"}},{tag:"path",attr:{d:"M6 12h9"},child:[]},{tag:"path",attr:{d:"M11 18h7"},child:[]}]})(props);
}
/**
 * ChartPie icon from Lucide icons
 */
export function LuChartPie(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}},{tag:"path",attr:{d:"M21.21 15.89A10 10 0 1 1 8 2.83"},child:[]}]})(props);
}
/**
 * ChartScatter icon from Lucide icons
 */
export function LuChartScatter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"7.5","cy":"7.5","r":".5",fill:"currentColor"}},{tag:"circle",attr:{"cx":"18.5","cy":"5.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"11.5","cy":"11.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"7.5","cy":"16.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"17.5","cy":"14.5","r":".5",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"},child:[]}]})(props);
}
/**
 * ChartSpline icon from Lucide icons
 */
export function LuChartSpline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"}},{tag:"path",attr:{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"},child:[]}]})(props);
}
/**
 * Check icon from Lucide icons
 */
export function LuCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 6 9 17l-5-5"}}]})(props);
}
/**
 * CheckCheck icon from Lucide icons
 */
export function LuCheckCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 7 17l-5-5"}},{tag:"path",attr:{d:"m22 10-7.5 7.5L13 16"},child:[]}]})(props);
}
/**
 * ChefHat icon from Lucide icons
 */
export function LuChefHat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}},{tag:"path",attr:{d:"M6 17h12"},child:[]}]})(props);
}
/**
 * Cherry icon from Lucide icons
 */
export function LuCherry(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}},{tag:"path",attr:{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"},child:[]},{tag:"path",attr:{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"},child:[]},{tag:"path",attr:{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"},child:[]}]})(props);
}
/**
 * ChevronDown icon from Lucide icons
 */
export function LuChevronDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"}}]})(props);
}
/**
 * ChevronFirst icon from Lucide icons
 */
export function LuChevronFirst(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 18-6-6 6-6"}},{tag:"path",attr:{d:"M7 6v12"},child:[]}]})(props);
}
/**
 * ChevronLast icon from Lucide icons
 */
export function LuChevronLast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 18 6-6-6-6"}},{tag:"path",attr:{d:"M17 6v12"},child:[]}]})(props);
}
/**
 * ChevronLeft icon from Lucide icons
 */
export function LuChevronLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15 18-6-6 6-6"}}]})(props);
}
/**
 * ChevronRight icon from Lucide icons
 */
export function LuChevronRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 18 6-6-6-6"}}]})(props);
}
/**
 * ChevronUp icon from Lucide icons
 */
export function LuChevronUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"}}]})(props);
}
/**
 * ChevronsDown icon from Lucide icons
 */
export function LuChevronsDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 6 5 5 5-5"}},{tag:"path",attr:{d:"m7 13 5 5 5-5"},child:[]}]})(props);
}
/**
 * ChevronsDownUp icon from Lucide icons
 */
export function LuChevronsDownUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 20 5-5 5 5"}},{tag:"path",attr:{d:"m7 4 5 5 5-5"},child:[]}]})(props);
}
/**
 * ChevronsLeft icon from Lucide icons
 */
export function LuChevronsLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m11 17-5-5 5-5"}},{tag:"path",attr:{d:"m18 17-5-5 5-5"},child:[]}]})(props);
}
/**
 * ChevronsLeftRight icon from Lucide icons
 */
export function LuChevronsLeftRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 7-5 5 5 5"}},{tag:"path",attr:{d:"m15 7 5 5-5 5"},child:[]}]})(props);
}
/**
 * ChevronsLeftRightEllipsis icon from Lucide icons
 */
export function LuChevronsLeftRightEllipsis(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 8 4 4-4 4"}},{tag:"path",attr:{d:"m6 8-4 4 4 4"},child:[]},{tag:"path",attr:{d:"M8 12h.01"},child:[]},{tag:"path",attr:{d:"M12 12h.01"},child:[]},{tag:"path",attr:{d:"M16 12h.01"},child:[]}]})(props);
}
/**
 * ChevronsRight icon from Lucide icons
 */
export function LuChevronsRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 17 5-5-5-5"}},{tag:"path",attr:{d:"m13 17 5-5-5-5"},child:[]}]})(props);
}
/**
 * ChevronsRightLeft icon from Lucide icons
 */
export function LuChevronsRightLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m20 17-5-5 5-5"}},{tag:"path",attr:{d:"m4 17 5-5-5-5"},child:[]}]})(props);
}
/**
 * ChevronsUp icon from Lucide icons
 */
export function LuChevronsUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 11-5-5-5 5"}},{tag:"path",attr:{d:"m17 18-5-5-5 5"},child:[]}]})(props);
}
/**
 * ChevronsUpDown icon from Lucide icons
 */
export function LuChevronsUpDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 15 5 5 5-5"}},{tag:"path",attr:{d:"m7 9 5-5 5 5"},child:[]}]})(props);
}
/**
 * Chrome icon from Lucide icons
 */
export function LuChrome(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"},child:[]},{tag:"line",attr:{"x1":"21.17","x2":"12","y1":"8","y2":"8"},child:[]},{tag:"line",attr:{"x1":"3.95","x2":"8.54","y1":"6.06","y2":"14"},child:[]},{tag:"line",attr:{"x1":"10.88","x2":"15.46","y1":"21.94","y2":"14"},child:[]}]})(props);
}
/**
 * Church icon from Lucide icons
 */
export function LuChurch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 9h4"}},{tag:"path",attr:{d:"M12 7v5"},child:[]},{tag:"path",attr:{d:"M14 22v-4a2 2 0 0 0-4 0v4"},child:[]},{tag:"path",attr:{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"},child:[]},{tag:"path",attr:{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"},child:[]}]})(props);
}
/**
 * Cigarette icon from Lucide icons
 */
export function LuCigarette(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"}},{tag:"path",attr:{d:"M18 8c0-2.5-2-2.5-2-5"},child:[]},{tag:"path",attr:{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.5-2-2.5-2-5"},child:[]},{tag:"path",attr:{d:"M7 12v4"},child:[]}]})(props);
}
/**
 * CigaretteOff icon from Lucide icons
 */
export function LuCigaretteOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"}},{tag:"path",attr:{d:"M18 8c0-2.5-2-2.5-2-5"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.5-2-2.5-2-5"},child:[]},{tag:"path",attr:{d:"M7 12v4"},child:[]}]})(props);
}
/**
 * Circle icon from Lucide icons
 */
export function LuCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}}]})(props);
}
/**
 * CircleAlert icon from Lucide icons
 */
export function LuCircleAlert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"8","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12.01","y1":"16","y2":"16"},child:[]}]})(props);
}
/**
 * CircleArrowDown icon from Lucide icons
 */
export function LuCircleArrowDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M12 8v8"},child:[]},{tag:"path",attr:{d:"m8 12 4 4 4-4"},child:[]}]})(props);
}
/**
 * CircleArrowLeft icon from Lucide icons
 */
export function LuCircleArrowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M16 12H8"},child:[]},{tag:"path",attr:{d:"m12 8-4 4 4 4"},child:[]}]})(props);
}
/**
 * CircleArrowOutDownLeft icon from Lucide icons
 */
export function LuCircleArrowOutDownLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12a10 10 0 1 1 10 10"}},{tag:"path",attr:{d:"m2 22 10-10"},child:[]},{tag:"path",attr:{d:"M8 22H2v-6"},child:[]}]})(props);
}
/**
 * CircleArrowOutDownRight icon from Lucide icons
 */
export function LuCircleArrowOutDownRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22a10 10 0 1 1 10-10"}},{tag:"path",attr:{d:"M22 22 12 12"},child:[]},{tag:"path",attr:{d:"M22 16v6h-6"},child:[]}]})(props);
}
/**
 * CircleArrowOutUpLeft icon from Lucide icons
 */
export function LuCircleArrowOutUpLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 8V2h6"}},{tag:"path",attr:{d:"m2 2 10 10"},child:[]},{tag:"path",attr:{d:"M12 2A10 10 0 1 1 2 12"},child:[]}]})(props);
}
/**
 * CircleArrowOutUpRight icon from Lucide icons
 */
export function LuCircleArrowOutUpRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 12A10 10 0 1 1 12 2"}},{tag:"path",attr:{d:"M22 2 12 12"},child:[]},{tag:"path",attr:{d:"M16 2h6v6"},child:[]}]})(props);
}
/**
 * CircleArrowRight icon from Lucide icons
 */
export function LuCircleArrowRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"m12 16 4-4-4-4"},child:[]}]})(props);
}
/**
 * CircleArrowUp icon from Lucide icons
 */
export function LuCircleArrowUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m16 12-4-4-4 4"},child:[]},{tag:"path",attr:{d:"M12 16V8"},child:[]}]})(props);
}
/**
 * CircleCheck icon from Lucide icons
 */
export function LuCircleCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(props);
}
/**
 * CircleCheckBig icon from Lucide icons
 */
export function LuCircleCheckBig(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.801 10A10 10 0 1 1 17 3.335"}},{tag:"path",attr:{d:"m9 11 3 3L22 4"},child:[]}]})(props);
}
/**
 * CircleChevronDown icon from Lucide icons
 */
export function LuCircleChevronDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m16 10-4 4-4-4"},child:[]}]})(props);
}
/**
 * CircleChevronLeft icon from Lucide icons
 */
export function LuCircleChevronLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m14 16-4-4 4-4"},child:[]}]})(props);
}
/**
 * CircleChevronRight icon from Lucide icons
 */
export function LuCircleChevronRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m10 8 4 4-4 4"},child:[]}]})(props);
}
/**
 * CircleChevronUp icon from Lucide icons
 */
export function LuCircleChevronUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m8 14 4-4 4 4"},child:[]}]})(props);
}
/**
 * CircleDashed icon from Lucide icons
 */
export function LuCircleDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}},{tag:"path",attr:{d:"M13.9 21.818a10 10 0 0 1-3.8 0"},child:[]},{tag:"path",attr:{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"},child:[]},{tag:"path",attr:{d:"M2.182 13.9a10 10 0 0 1 0-3.8"},child:[]},{tag:"path",attr:{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"},child:[]},{tag:"path",attr:{d:"M21.818 10.1a10 10 0 0 1 0 3.8"},child:[]},{tag:"path",attr:{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"},child:[]},{tag:"path",attr:{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"},child:[]}]})(props);
}
/**
 * CircleDivide icon from Lucide icons
 */
export function LuCircleDivide(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"8","x2":"16","y1":"12","y2":"12"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"16","y2":"16"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"8","y2":"8"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"},child:[]}]})(props);
}
/**
 * CircleDollarSign icon from Lucide icons
 */
export function LuCircleDollarSign(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"},child:[]},{tag:"path",attr:{d:"M12 18V6"},child:[]}]})(props);
}
/**
 * CircleDot icon from Lucide icons
 */
export function LuCircleDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"1"},child:[]}]})(props);
}
/**
 * CircleDotDashed icon from Lucide icons
 */
export function LuCircleDotDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}},{tag:"path",attr:{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"},child:[]},{tag:"path",attr:{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"},child:[]},{tag:"path",attr:{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"},child:[]},{tag:"path",attr:{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"},child:[]},{tag:"path",attr:{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"},child:[]},{tag:"path",attr:{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"},child:[]},{tag:"path",attr:{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"1"},child:[]}]})(props);
}
/**
 * CircleEllipsis icon from Lucide icons
 */
export function LuCircleEllipsis(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M17 12h.01"},child:[]},{tag:"path",attr:{d:"M12 12h.01"},child:[]},{tag:"path",attr:{d:"M7 12h.01"},child:[]}]})(props);
}
/**
 * CircleEqual icon from Lucide icons
 */
export function LuCircleEqual(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 10h10"}},{tag:"path",attr:{d:"M7 14h10"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"},child:[]}]})(props);
}
/**
 * CircleFadingArrowUp icon from Lucide icons
 */
export function LuCircleFadingArrowUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2a10 10 0 0 1 7.38 16.75"}},{tag:"path",attr:{d:"m16 12-4-4-4 4"},child:[]},{tag:"path",attr:{d:"M12 16V8"},child:[]},{tag:"path",attr:{d:"M2.5 8.875a10 10 0 0 0-.5 3"},child:[]},{tag:"path",attr:{d:"M2.83 16a10 10 0 0 0 2.43 3.4"},child:[]},{tag:"path",attr:{d:"M4.636 5.235a10 10 0 0 1 .891-.857"},child:[]},{tag:"path",attr:{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"},child:[]}]})(props);
}
/**
 * CircleFadingPlus icon from Lucide icons
 */
export function LuCircleFadingPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2a10 10 0 0 1 7.38 16.75"}},{tag:"path",attr:{d:"M12 8v8"},child:[]},{tag:"path",attr:{d:"M16 12H8"},child:[]},{tag:"path",attr:{d:"M2.5 8.875a10 10 0 0 0-.5 3"},child:[]},{tag:"path",attr:{d:"M2.83 16a10 10 0 0 0 2.43 3.4"},child:[]},{tag:"path",attr:{d:"M4.636 5.235a10 10 0 0 1 .891-.857"},child:[]},{tag:"path",attr:{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"},child:[]}]})(props);
}
/**
 * CircleGauge icon from Lucide icons
 */
export function LuCircleGauge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]},{tag:"path",attr:{d:"M13.4 10.6 19 5"},child:[]}]})(props);
}
/**
 * CircleHelp icon from Lucide icons
 */
export function LuCircleHelp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(props);
}
/**
 * CircleMinus icon from Lucide icons
 */
export function LuCircleMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M8 12h8"},child:[]}]})(props);
}
/**
 * CircleOff icon from Lucide icons
 */
export function LuCircleOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 2 20 20"}},{tag:"path",attr:{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"},child:[]},{tag:"path",attr:{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"},child:[]}]})(props);
}
/**
 * CircleParking icon from Lucide icons
 */
export function LuCircleParking(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M9 17V7h4a3 3 0 0 1 0 6H9"},child:[]}]})(props);
}
/**
 * CircleParkingOff icon from Lucide icons
 */
export function LuCircleParkingOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m5 5 14 14"},child:[]},{tag:"path",attr:{d:"M13 13a3 3 0 1 0 0-6H9v2"},child:[]},{tag:"path",attr:{d:"M9 17v-2.34"},child:[]}]})(props);
}
/**
 * CirclePause icon from Lucide icons
 */
export function LuCirclePause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"line",attr:{"x1":"10","x2":"10","y1":"15","y2":"9"},child:[]},{tag:"line",attr:{"x1":"14","x2":"14","y1":"15","y2":"9"},child:[]}]})(props);
}
/**
 * CirclePercent icon from Lucide icons
 */
export function LuCirclePercent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m15 9-6 6"},child:[]},{tag:"path",attr:{d:"M9 9h.01"},child:[]},{tag:"path",attr:{d:"M15 15h.01"},child:[]}]})(props);
}
/**
 * CirclePlay icon from Lucide icons
 */
export function LuCirclePlay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polygon",attr:{"points":"10 8 16 12 10 16 10 8"},child:[]}]})(props);
}
/**
 * CirclePlus icon from Lucide icons
 */
export function LuCirclePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"M12 8v8"},child:[]}]})(props);
}
/**
 * CirclePower icon from Lucide icons
 */
export function LuCirclePower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 7v4"}},{tag:"path",attr:{d:"M7.998 9.003a5 5 0 1 0 8-.005"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"},child:[]}]})(props);
}
/**
 * CircleSlash icon from Lucide icons
 */
export function LuCircleSlash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"line",attr:{"x1":"9","x2":"15","y1":"15","y2":"9"},child:[]}]})(props);
}
/**
 * CircleSlash2 icon from Lucide icons
 */
export function LuCircleSlash2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M22 2 2 22"},child:[]}]})(props);
}
/**
 * CircleStop icon from Lucide icons
 */
export function LuCircleStop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"rect",attr:{x:"9",y:"9","width":"6","height":"6","rx":"1"},child:[]}]})(props);
}
/**
 * CircleUser icon from Lucide icons
 */
export function LuCircleUser(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"circle",attr:{"cx":"12","cy":"10","r":"3"},child:[]},{tag:"path",attr:{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"},child:[]}]})(props);
}
/**
 * CircleUserRound icon from Lucide icons
 */
export function LuCircleUserRound(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 20a6 6 0 0 0-12 0"}},{tag:"circle",attr:{"cx":"12","cy":"10","r":"4"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"},child:[]}]})(props);
}
/**
 * CircleX icon from Lucide icons
 */
export function LuCircleX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m15 9-6 6"},child:[]},{tag:"path",attr:{d:"m9 9 6 6"},child:[]}]})(props);
}
/**
 * CircuitBoard icon from Lucide icons
 */
export function LuCircuitBoard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M11 9h4a2 2 0 0 0 2-2V3"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"9","r":"2"},child:[]},{tag:"path",attr:{d:"M7 21v-4a2 2 0 0 1 2-2h4"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"15","r":"2"},child:[]}]})(props);
}
/**
 * Citrus icon from Lucide icons
 */
export function LuCitrus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}},{tag:"path",attr:{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"},child:[]},{tag:"path",attr:{d:"m14 10-5.5 5.5"},child:[]},{tag:"path",attr:{d:"M14 17.85V10H6.15"},child:[]}]})(props);
}
/**
 * Clapperboard icon from Lucide icons
 */
export function LuClapperboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}},{tag:"path",attr:{d:"m6.2 5.3 3.1 3.9"},child:[]},{tag:"path",attr:{d:"m12.4 3.4 3.1 4"},child:[]},{tag:"path",attr:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"},child:[]}]})(props);
}
/**
 * Clipboard icon from Lucide icons
 */
export function LuClipboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"4",x:"8",y:"2","rx":"1","ry":"1"}},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]}]})(props);
}
/**
 * ClipboardCheck icon from Lucide icons
 */
export function LuClipboardCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"4",x:"8",y:"2","rx":"1","ry":"1"}},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"m9 14 2 2 4-4"},child:[]}]})(props);
}
/**
 * ClipboardCopy icon from Lucide icons
 */
export function LuClipboardCopy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"4",x:"8",y:"2","rx":"1","ry":"1"}},{tag:"path",attr:{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"},child:[]},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v4"},child:[]},{tag:"path",attr:{d:"M21 14H11"},child:[]},{tag:"path",attr:{d:"m15 10-4 4 4 4"},child:[]}]})(props);
}
/**
 * ClipboardList icon from Lucide icons
 */
export function LuClipboardList(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"4",x:"8",y:"2","rx":"1","ry":"1"}},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"M12 11h4"},child:[]},{tag:"path",attr:{d:"M12 16h4"},child:[]},{tag:"path",attr:{d:"M8 11h.01"},child:[]},{tag:"path",attr:{d:"M8 16h.01"},child:[]}]})(props);
}
/**
 * ClipboardMinus icon from Lucide icons
 */
export function LuClipboardMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"4",x:"8",y:"2","rx":"1","ry":"1"}},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"M9 14h6"},child:[]}]})(props);
}
/**
 * ClipboardPaste icon from Lucide icons
 */
export function LuClipboardPaste(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"}},{tag:"path",attr:{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"},child:[]},{tag:"path",attr:{d:"m17 10 4 4-4 4"},child:[]}]})(props);
}
/**
 * ClipboardPen icon from Lucide icons
 */
export function LuClipboardPen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"4",x:"8",y:"2","rx":"1"}},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"},child:[]},{tag:"path",attr:{d:"M4 13.5V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"},child:[]}]})(props);
}
/**
 * ClipboardPenLine icon from Lucide icons
 */
export function LuClipboardPenLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"4",x:"8",y:"2","rx":"1"}},{tag:"path",attr:{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"},child:[]},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 1.73 1"},child:[]},{tag:"path",attr:{d:"M8 18h1"},child:[]},{tag:"path",attr:{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"},child:[]}]})(props);
}
/**
 * ClipboardPlus icon from Lucide icons
 */
export function LuClipboardPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"4",x:"8",y:"2","rx":"1","ry":"1"}},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"M9 14h6"},child:[]},{tag:"path",attr:{d:"M12 17v-6"},child:[]}]})(props);
}
/**
 * ClipboardType icon from Lucide icons
 */
export function LuClipboardType(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"4",x:"8",y:"2","rx":"1","ry":"1"}},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"M9 12v-1h6v1"},child:[]},{tag:"path",attr:{d:"M11 17h2"},child:[]},{tag:"path",attr:{d:"M12 11v6"},child:[]}]})(props);
}
/**
 * ClipboardX icon from Lucide icons
 */
export function LuClipboardX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"4",x:"8",y:"2","rx":"1","ry":"1"}},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"m15 11-6 6"},child:[]},{tag:"path",attr:{d:"m9 11 6 6"},child:[]}]})(props);
}
/**
 * Clock icon from Lucide icons
 */
export function LuClock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 16 14"},child:[]}]})(props);
}
/**
 * Clock1 icon from Lucide icons
 */
export function LuClock1(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 14.5 8"},child:[]}]})(props);
}
/**
 * Clock10 icon from Lucide icons
 */
export function LuClock10(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 8 10"},child:[]}]})(props);
}
/**
 * Clock11 icon from Lucide icons
 */
export function LuClock11(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 9.5 8"},child:[]}]})(props);
}
/**
 * Clock12 icon from Lucide icons
 */
export function LuClock12(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12"},child:[]}]})(props);
}
/**
 * Clock2 icon from Lucide icons
 */
export function LuClock2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 16 10"},child:[]}]})(props);
}
/**
 * Clock3 icon from Lucide icons
 */
export function LuClock3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 16.5 12"},child:[]}]})(props);
}
/**
 * Clock4 icon from Lucide icons
 */
export function LuClock4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 16 14"},child:[]}]})(props);
}
/**
 * Clock5 icon from Lucide icons
 */
export function LuClock5(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 14.5 16"},child:[]}]})(props);
}
/**
 * Clock6 icon from Lucide icons
 */
export function LuClock6(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 12 16.5"},child:[]}]})(props);
}
/**
 * Clock7 icon from Lucide icons
 */
export function LuClock7(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 9.5 16"},child:[]}]})(props);
}
/**
 * Clock8 icon from Lucide icons
 */
export function LuClock8(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 8 14"},child:[]}]})(props);
}
/**
 * Clock9 icon from Lucide icons
 */
export function LuClock9(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 7.5 12"},child:[]}]})(props);
}
/**
 * ClockAlert icon from Lucide icons
 */
export function LuClockAlert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 6v6l4 2"}},{tag:"path",attr:{d:"M16 21.16a10 10 0 1 1 5-13.516"},child:[]},{tag:"path",attr:{d:"M20 11.5v6"},child:[]},{tag:"path",attr:{d:"M20 21.5h.01"},child:[]}]})(props);
}
/**
 * ClockArrowDown icon from Lucide icons
 */
export function LuClockArrowDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227"}},{tag:"path",attr:{d:"M12 6v6l2 1"},child:[]},{tag:"path",attr:{d:"m14 18 4 4 4-4"},child:[]},{tag:"path",attr:{d:"M18 14v8"},child:[]}]})(props);
}
/**
 * ClockArrowUp icon from Lucide icons
 */
export function LuClockArrowUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338"}},{tag:"path",attr:{d:"M12 6v6l1.562.781"},child:[]},{tag:"path",attr:{d:"m14 18 4-4 4 4"},child:[]},{tag:"path",attr:{d:"M18 22v-8"},child:[]}]})(props);
}
/**
 * Cloud icon from Lucide icons
 */
export function LuCloud(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}}]})(props);
}
/**
 * CloudAlert icon from Lucide icons
 */
export function LuCloudAlert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12v4"}},{tag:"path",attr:{d:"M12 20h.01"},child:[]},{tag:"path",attr:{d:"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"},child:[]}]})(props);
}
/**
 * CloudCog icon from Lucide icons
 */
export function LuCloudCog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"17","r":"3"}},{tag:"path",attr:{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"},child:[]},{tag:"path",attr:{d:"m15.7 18.4-.9-.3"},child:[]},{tag:"path",attr:{d:"m9.2 15.9-.9-.3"},child:[]},{tag:"path",attr:{d:"m10.6 20.7.3-.9"},child:[]},{tag:"path",attr:{d:"m13.1 14.2.3-.9"},child:[]},{tag:"path",attr:{d:"m13.6 20.7-.4-1"},child:[]},{tag:"path",attr:{d:"m10.8 14.3-.4-1"},child:[]},{tag:"path",attr:{d:"m8.3 18.6 1-.4"},child:[]},{tag:"path",attr:{d:"m14.7 15.8 1-.4"},child:[]}]})(props);
}
/**
 * CloudDownload icon from Lucide icons
 */
export function LuCloudDownload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13v8l-4-4"}},{tag:"path",attr:{d:"m12 21 4-4"},child:[]},{tag:"path",attr:{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"},child:[]}]})(props);
}
/**
 * CloudDrizzle icon from Lucide icons
 */
export function LuCloudDrizzle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}},{tag:"path",attr:{d:"M8 19v1"},child:[]},{tag:"path",attr:{d:"M8 14v1"},child:[]},{tag:"path",attr:{d:"M16 19v1"},child:[]},{tag:"path",attr:{d:"M16 14v1"},child:[]},{tag:"path",attr:{d:"M12 21v1"},child:[]},{tag:"path",attr:{d:"M12 16v1"},child:[]}]})(props);
}
/**
 * CloudFog icon from Lucide icons
 */
export function LuCloudFog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}},{tag:"path",attr:{d:"M16 17H7"},child:[]},{tag:"path",attr:{d:"M17 21H9"},child:[]}]})(props);
}
/**
 * CloudHail icon from Lucide icons
 */
export function LuCloudHail(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}},{tag:"path",attr:{d:"M16 14v2"},child:[]},{tag:"path",attr:{d:"M8 14v2"},child:[]},{tag:"path",attr:{d:"M16 20h.01"},child:[]},{tag:"path",attr:{d:"M8 20h.01"},child:[]},{tag:"path",attr:{d:"M12 16v2"},child:[]},{tag:"path",attr:{d:"M12 22h.01"},child:[]}]})(props);
}
/**
 * CloudLightning icon from Lucide icons
 */
export function LuCloudLightning(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}},{tag:"path",attr:{d:"m13 12-3 5h4l-3 5"},child:[]}]})(props);
}
/**
 * CloudMoon icon from Lucide icons
 */
export function LuCloudMoon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}},{tag:"path",attr:{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"},child:[]}]})(props);
}
/**
 * CloudMoonRain icon from Lucide icons
 */
export function LuCloudMoonRain(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}},{tag:"path",attr:{d:"M11 20v2"},child:[]},{tag:"path",attr:{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"},child:[]},{tag:"path",attr:{d:"M7 19v2"},child:[]}]})(props);
}
/**
 * CloudOff icon from Lucide icons
 */
export function LuCloudOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 2 20 20"}},{tag:"path",attr:{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"},child:[]},{tag:"path",attr:{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"},child:[]}]})(props);
}
/**
 * CloudRain icon from Lucide icons
 */
export function LuCloudRain(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}},{tag:"path",attr:{d:"M16 14v6"},child:[]},{tag:"path",attr:{d:"M8 14v6"},child:[]},{tag:"path",attr:{d:"M12 16v6"},child:[]}]})(props);
}
/**
 * CloudRainWind icon from Lucide icons
 */
export function LuCloudRainWind(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}},{tag:"path",attr:{d:"m9.2 22 3-7"},child:[]},{tag:"path",attr:{d:"m9 13-3 7"},child:[]},{tag:"path",attr:{d:"m17 13-3 7"},child:[]}]})(props);
}
/**
 * CloudSnow icon from Lucide icons
 */
export function LuCloudSnow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}},{tag:"path",attr:{d:"M8 15h.01"},child:[]},{tag:"path",attr:{d:"M8 19h.01"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]},{tag:"path",attr:{d:"M12 21h.01"},child:[]},{tag:"path",attr:{d:"M16 15h.01"},child:[]},{tag:"path",attr:{d:"M16 19h.01"},child:[]}]})(props);
}
/**
 * CloudSun icon from Lucide icons
 */
export function LuCloudSun(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v2"}},{tag:"path",attr:{d:"m4.93 4.93 1.41 1.41"},child:[]},{tag:"path",attr:{d:"M20 12h2"},child:[]},{tag:"path",attr:{d:"m19.07 4.93-1.41 1.41"},child:[]},{tag:"path",attr:{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"},child:[]},{tag:"path",attr:{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"},child:[]}]})(props);
}
/**
 * CloudSunRain icon from Lucide icons
 */
export function LuCloudSunRain(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v2"}},{tag:"path",attr:{d:"m4.93 4.93 1.41 1.41"},child:[]},{tag:"path",attr:{d:"M20 12h2"},child:[]},{tag:"path",attr:{d:"m19.07 4.93-1.41 1.41"},child:[]},{tag:"path",attr:{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"},child:[]},{tag:"path",attr:{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"},child:[]},{tag:"path",attr:{d:"M11 20v2"},child:[]},{tag:"path",attr:{d:"M7 19v2"},child:[]}]})(props);
}
/**
 * CloudUpload icon from Lucide icons
 */
export function LuCloudUpload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13v8"}},{tag:"path",attr:{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"},child:[]},{tag:"path",attr:{d:"m8 17 4-4 4 4"},child:[]}]})(props);
}
/**
 * Cloudy icon from Lucide icons
 */
export function LuCloudy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}},{tag:"path",attr:{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"},child:[]}]})(props);
}
/**
 * Clover icon from Lucide icons
 */
export function LuClover(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16.17 7.83 2 22"}},{tag:"path",attr:{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"},child:[]},{tag:"path",attr:{d:"m7.83 7.83 8.34 8.34"},child:[]}]})(props);
}
/**
 * Club icon from Lucide icons
 */
export function LuClub(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}},{tag:"path",attr:{d:"M12 17.66L12 22"},child:[]}]})(props);
}
/**
 * Code icon from Lucide icons
 */
export function LuCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"16 18 22 12 16 6"}},{tag:"polyline",attr:{"points":"8 6 2 12 8 18"},child:[]}]})(props);
}
/**
 * CodeXml icon from Lucide icons
 */
export function LuCodeXml(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 16 4-4-4-4"}},{tag:"path",attr:{d:"m6 8-4 4 4 4"},child:[]},{tag:"path",attr:{d:"m14.5 4-5 16"},child:[]}]})(props);
}
/**
 * Codepen icon from Lucide icons
 */
export function LuCodepen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"22","y2":"15.5"},child:[]},{tag:"polyline",attr:{"points":"22 8.5 12 15.5 2 8.5"},child:[]},{tag:"polyline",attr:{"points":"2 15.5 12 8.5 22 15.5"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"2","y2":"8.5"},child:[]}]})(props);
}
/**
 * Codesandbox icon from Lucide icons
 */
export function LuCodesandbox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{tag:"polyline",attr:{"points":"7.5 4.21 12 6.81 16.5 4.21"},child:[]},{tag:"polyline",attr:{"points":"7.5 19.79 7.5 14.6 3 12"},child:[]},{tag:"polyline",attr:{"points":"21 12 16.5 14.6 16.5 19.79"},child:[]},{tag:"polyline",attr:{"points":"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"22.08","y2":"12"},child:[]}]})(props);
}
/**
 * Coffee icon from Lucide icons
 */
export function LuCoffee(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2v2"}},{tag:"path",attr:{d:"M14 2v2"},child:[]},{tag:"path",attr:{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M6 2v2"},child:[]}]})(props);
}
/**
 * Cog icon from Lucide icons
 */
export function LuCog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}},{tag:"path",attr:{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"},child:[]},{tag:"path",attr:{d:"M12 2v2"},child:[]},{tag:"path",attr:{d:"M12 22v-2"},child:[]},{tag:"path",attr:{d:"m17 20.66-1-1.73"},child:[]},{tag:"path",attr:{d:"M11 10.27 7 3.34"},child:[]},{tag:"path",attr:{d:"m20.66 17-1.73-1"},child:[]},{tag:"path",attr:{d:"m3.34 7 1.73 1"},child:[]},{tag:"path",attr:{d:"M14 12h8"},child:[]},{tag:"path",attr:{d:"M2 12h2"},child:[]},{tag:"path",attr:{d:"m20.66 7-1.73 1"},child:[]},{tag:"path",attr:{d:"m3.34 17 1.73-1"},child:[]},{tag:"path",attr:{d:"m17 3.34-1 1.73"},child:[]},{tag:"path",attr:{d:"m11 13.73-4 6.93"},child:[]}]})(props);
}
/**
 * Coins icon from Lucide icons
 */
export function LuCoins(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"8","cy":"8","r":"6"}},{tag:"path",attr:{d:"M18.09 10.37A6 6 0 1 1 10.34 18"},child:[]},{tag:"path",attr:{d:"M7 6h1v4"},child:[]},{tag:"path",attr:{d:"m16.71 13.88.7.71-2.82 2.82"},child:[]}]})(props);
}
/**
 * Columns2 icon from Lucide icons
 */
export function LuColumns2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M12 3v18"},child:[]}]})(props);
}
/**
 * Columns3 icon from Lucide icons
 */
export function LuColumns3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M9 3v18"},child:[]},{tag:"path",attr:{d:"M15 3v18"},child:[]}]})(props);
}
/**
 * Columns4 icon from Lucide icons
 */
export function LuColumns4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M7.5 3v18"},child:[]},{tag:"path",attr:{d:"M12 3v18"},child:[]},{tag:"path",attr:{d:"M16.5 3v18"},child:[]}]})(props);
}
/**
 * Combine icon from Lucide icons
 */
export function LuCombine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 18H5a3 3 0 0 1-3-3v-1"}},{tag:"path",attr:{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"m7 21 3-3-3-3"},child:[]},{tag:"rect",attr:{x:"14",y:"14","width":"8","height":"8","rx":"2"},child:[]},{tag:"rect",attr:{x:"2",y:"2","width":"8","height":"8","rx":"2"},child:[]}]})(props);
}
/**
 * Command icon from Lucide icons
 */
export function LuCommand(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}}]})(props);
}
/**
 * Compass icon from Lucide icons
 */
export function LuCompass(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"},child:[]}]})(props);
}
/**
 * Component icon from Lucide icons
 */
export function LuComponent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attr:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},child:[]},{tag:"path",attr:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},child:[]},{tag:"path",attr:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},child:[]}]})(props);
}
/**
 * Computer icon from Lucide icons
 */
export function LuComputer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"8",x:"5",y:"2","rx":"2"}},{tag:"rect",attr:{"width":"20","height":"8",x:"2",y:"14","rx":"2"},child:[]},{tag:"path",attr:{d:"M6 18h2"},child:[]},{tag:"path",attr:{d:"M12 18h6"},child:[]}]})(props);
}
/**
 * ConciergeBell icon from Lucide icons
 */
export function LuConciergeBell(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"}},{tag:"path",attr:{d:"M20 16a8 8 0 1 0-16 0"},child:[]},{tag:"path",attr:{d:"M12 4v4"},child:[]},{tag:"path",attr:{d:"M10 4h4"},child:[]}]})(props);
}
/**
 * Cone icon from Lucide icons
 */
export function LuCone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}},{tag:"ellipse",attr:{"cx":"12","cy":"19","rx":"9","ry":"3"},child:[]}]})(props);
}
/**
 * Construction icon from Lucide icons
 */
export function LuConstruction(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"6","width":"20","height":"8","rx":"1"}},{tag:"path",attr:{d:"M17 14v7"},child:[]},{tag:"path",attr:{d:"M7 14v7"},child:[]},{tag:"path",attr:{d:"M17 3v3"},child:[]},{tag:"path",attr:{d:"M7 3v3"},child:[]},{tag:"path",attr:{d:"M10 14 2.3 6.3"},child:[]},{tag:"path",attr:{d:"m14 6 7.7 7.7"},child:[]},{tag:"path",attr:{d:"m8 6 8 8"},child:[]}]})(props);
}
/**
 * Contact icon from Lucide icons
 */
export function LuContact(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 2v2"}},{tag:"path",attr:{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M8 2v2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"11","r":"3"},child:[]},{tag:"rect",attr:{x:"3",y:"4","width":"18","height":"18","rx":"2"},child:[]}]})(props);
}
/**
 * ContactRound icon from Lucide icons
 */
export function LuContactRound(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 2v2"}},{tag:"path",attr:{d:"M17.915 22a6 6 0 0 0-12 0"},child:[]},{tag:"path",attr:{d:"M8 2v2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"},child:[]},{tag:"rect",attr:{x:"3",y:"4","width":"18","height":"18","rx":"2"},child:[]}]})(props);
}
/**
 * Container icon from Lucide icons
 */
export function LuContainer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}},{tag:"path",attr:{d:"M10 21.9V14L2.1 9.1"},child:[]},{tag:"path",attr:{d:"m10 14 11.9-6.9"},child:[]},{tag:"path",attr:{d:"M14 19.8v-8.1"},child:[]},{tag:"path",attr:{d:"M18 17.5V9.4"},child:[]}]})(props);
}
/**
 * Contrast icon from Lucide icons
 */
export function LuContrast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M12 18a6 6 0 0 0 0-12v12z"},child:[]}]})(props);
}
/**
 * Cookie icon from Lucide icons
 */
export function LuCookie(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}},{tag:"path",attr:{d:"M8.5 8.5v.01"},child:[]},{tag:"path",attr:{d:"M16 15.5v.01"},child:[]},{tag:"path",attr:{d:"M12 12v.01"},child:[]},{tag:"path",attr:{d:"M11 17v.01"},child:[]},{tag:"path",attr:{d:"M7 14v.01"},child:[]}]})(props);
}
/**
 * CookingPot icon from Lucide icons
 */
export function LuCookingPot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12h20"}},{tag:"path",attr:{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"},child:[]},{tag:"path",attr:{d:"m4 8 16-4"},child:[]},{tag:"path",attr:{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"},child:[]}]})(props);
}
/**
 * Copy icon from Lucide icons
 */
export function LuCopy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"14",x:"8",y:"8","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(props);
}
/**
 * CopyCheck icon from Lucide icons
 */
export function LuCopyCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 15 2 2 4-4"}},{tag:"rect",attr:{"width":"14","height":"14",x:"8",y:"8","rx":"2","ry":"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(props);
}
/**
 * CopyMinus icon from Lucide icons
 */
export function LuCopyMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"12","x2":"18","y1":"15","y2":"15"}},{tag:"rect",attr:{"width":"14","height":"14",x:"8",y:"8","rx":"2","ry":"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(props);
}
/**
 * CopyPlus icon from Lucide icons
 */
export function LuCopyPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"15","x2":"15","y1":"12","y2":"18"}},{tag:"line",attr:{"x1":"12","x2":"18","y1":"15","y2":"15"},child:[]},{tag:"rect",attr:{"width":"14","height":"14",x:"8",y:"8","rx":"2","ry":"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(props);
}
/**
 * CopySlash icon from Lucide icons
 */
export function LuCopySlash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"12","x2":"18","y1":"18","y2":"12"}},{tag:"rect",attr:{"width":"14","height":"14",x:"8",y:"8","rx":"2","ry":"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(props);
}
/**
 * CopyX icon from Lucide icons
 */
export function LuCopyX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"12","x2":"18","y1":"12","y2":"18"}},{tag:"line",attr:{"x1":"12","x2":"18","y1":"18","y2":"12"},child:[]},{tag:"rect",attr:{"width":"14","height":"14",x:"8",y:"8","rx":"2","ry":"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(props);
}
/**
 * Copyleft icon from Lucide icons
 */
export function LuCopyleft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M9.17 14.83a4 4 0 1 0 0-5.66"},child:[]}]})(props);
}
/**
 * Copyright icon from Lucide icons
 */
export function LuCopyright(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M14.83 14.83a4 4 0 1 1 0-5.66"},child:[]}]})(props);
}
/**
 * CornerDownLeft icon from Lucide icons
 */
export function LuCornerDownLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"9 10 4 15 9 20"}},{tag:"path",attr:{d:"M20 4v7a4 4 0 0 1-4 4H4"},child:[]}]})(props);
}
/**
 * CornerDownRight icon from Lucide icons
 */
export function LuCornerDownRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"15 10 20 15 15 20"}},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(props);
}
/**
 * CornerLeftDown icon from Lucide icons
 */
export function LuCornerLeftDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"14 15 9 20 4 15"}},{tag:"path",attr:{d:"M20 4h-7a4 4 0 0 0-4 4v12"},child:[]}]})(props);
}
/**
 * CornerLeftUp icon from Lucide icons
 */
export function LuCornerLeftUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"14 9 9 4 4 9"}},{tag:"path",attr:{d:"M20 20h-7a4 4 0 0 1-4-4V4"},child:[]}]})(props);
}
/**
 * CornerRightDown icon from Lucide icons
 */
export function LuCornerRightDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"10 15 15 20 20 15"}},{tag:"path",attr:{d:"M4 4h7a4 4 0 0 1 4 4v12"},child:[]}]})(props);
}
/**
 * CornerRightUp icon from Lucide icons
 */
export function LuCornerRightUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"10 9 15 4 20 9"}},{tag:"path",attr:{d:"M4 20h7a4 4 0 0 0 4-4V4"},child:[]}]})(props);
}
/**
 * CornerUpLeft icon from Lucide icons
 */
export function LuCornerUpLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"9 14 4 9 9 4"}},{tag:"path",attr:{d:"M20 20v-7a4 4 0 0 0-4-4H4"},child:[]}]})(props);
}
/**
 * CornerUpRight icon from Lucide icons
 */
export function LuCornerUpRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"15 14 20 9 15 4"}},{tag:"path",attr:{d:"M4 20v-7a4 4 0 0 1 4-4h12"},child:[]}]})(props);
}
/**
 * Cpu icon from Lucide icons
 */
export function LuCpu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"16",x:"4",y:"4","rx":"2"}},{tag:"rect",attr:{"width":"6","height":"6",x:"9",y:"9","rx":"1"},child:[]},{tag:"path",attr:{d:"M15 2v2"},child:[]},{tag:"path",attr:{d:"M15 20v2"},child:[]},{tag:"path",attr:{d:"M2 15h2"},child:[]},{tag:"path",attr:{d:"M2 9h2"},child:[]},{tag:"path",attr:{d:"M20 15h2"},child:[]},{tag:"path",attr:{d:"M20 9h2"},child:[]},{tag:"path",attr:{d:"M9 2v2"},child:[]},{tag:"path",attr:{d:"M9 20v2"},child:[]}]})(props);
}
/**
 * CreativeCommons icon from Lucide icons
 */
export function LuCreativeCommons(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"},child:[]},{tag:"path",attr:{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"},child:[]}]})(props);
}
/**
 * CreditCard icon from Lucide icons
 */
export function LuCreditCard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"5","rx":"2"}},{tag:"line",attr:{"x1":"2","x2":"22","y1":"10","y2":"10"},child:[]}]})(props);
}
/**
 * Croissant icon from Lucide icons
 */
export function LuCroissant(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}},{tag:"path",attr:{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"},child:[]},{tag:"path",attr:{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"},child:[]},{tag:"path",attr:{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"},child:[]},{tag:"path",attr:{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"},child:[]}]})(props);
}
/**
 * Crop icon from Lucide icons
 */
export function LuCrop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 2v14a2 2 0 0 0 2 2h14"}},{tag:"path",attr:{d:"M18 22V8a2 2 0 0 0-2-2H2"},child:[]}]})(props);
}
/**
 * Cross icon from Lucide icons
 */
export function LuCross(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"}}]})(props);
}
/**
 * Crosshair icon from Lucide icons
 */
export function LuCrosshair(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"line",attr:{"x1":"22","x2":"18","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"6","x2":"2","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"6","y2":"2"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"22","y2":"18"},child:[]}]})(props);
}
/**
 * Crown icon from Lucide icons
 */
export function LuCrown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"}},{tag:"path",attr:{d:"M5 21h14"},child:[]}]})(props);
}
/**
 * Cuboid icon from Lucide icons
 */
export function LuCuboid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}},{tag:"path",attr:{d:"M10 22v-8L2.25 9.15"},child:[]},{tag:"path",attr:{d:"m10 14 11.77-6.87"},child:[]}]})(props);
}
/**
 * CupSoda icon from Lucide icons
 */
export function LuCupSoda(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}},{tag:"path",attr:{d:"M5 8h14"},child:[]},{tag:"path",attr:{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"},child:[]},{tag:"path",attr:{d:"m12 8 1-6h2"},child:[]}]})(props);
}
/**
 * Currency icon from Lucide icons
 */
export function LuCurrency(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"8"}},{tag:"line",attr:{"x1":"3","x2":"6","y1":"3","y2":"6"},child:[]},{tag:"line",attr:{"x1":"21","x2":"18","y1":"3","y2":"6"},child:[]},{tag:"line",attr:{"x1":"3","x2":"6","y1":"21","y2":"18"},child:[]},{tag:"line",attr:{"x1":"21","x2":"18","y1":"21","y2":"18"},child:[]}]})(props);
}
/**
 * Cylinder icon from Lucide icons
 */
export function LuCylinder(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{"cx":"12","cy":"5","rx":"9","ry":"3"}},{tag:"path",attr:{d:"M3 5v14a9 3 0 0 0 18 0V5"},child:[]}]})(props);
}
/**
 * Dam icon from Lucide icons
 */
export function LuDam(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}},{tag:"path",attr:{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"},child:[]},{tag:"path",attr:{d:"M2 10h4"},child:[]},{tag:"path",attr:{d:"M2 14h4"},child:[]},{tag:"path",attr:{d:"M2 18h4"},child:[]},{tag:"path",attr:{d:"M2 6h4"},child:[]},{tag:"path",attr:{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"},child:[]}]})(props);
}
/**
 * Database icon from Lucide icons
 */
export function LuDatabase(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{"cx":"12","cy":"5","rx":"9","ry":"3"}},{tag:"path",attr:{d:"M3 5V19A9 3 0 0 0 21 19V5"},child:[]},{tag:"path",attr:{d:"M3 12A9 3 0 0 0 21 12"},child:[]}]})(props);
}
/**
 * DatabaseBackup icon from Lucide icons
 */
export function LuDatabaseBackup(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{"cx":"12","cy":"5","rx":"9","ry":"3"}},{tag:"path",attr:{d:"M3 12a9 3 0 0 0 5 2.69"},child:[]},{tag:"path",attr:{d:"M21 9.3V5"},child:[]},{tag:"path",attr:{d:"M3 5v14a9 3 0 0 0 6.47 2.88"},child:[]},{tag:"path",attr:{d:"M12 12v4h4"},child:[]},{tag:"path",attr:{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"},child:[]}]})(props);
}
/**
 * DatabaseZap icon from Lucide icons
 */
export function LuDatabaseZap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{"cx":"12","cy":"5","rx":"9","ry":"3"}},{tag:"path",attr:{d:"M3 5V19A9 3 0 0 0 15 21.84"},child:[]},{tag:"path",attr:{d:"M21 5V8"},child:[]},{tag:"path",attr:{d:"M21 12L18 17H22L19 22"},child:[]},{tag:"path",attr:{d:"M3 12A9 3 0 0 0 14.59 14.87"},child:[]}]})(props);
}
/**
 * Delete icon from Lucide icons
 */
export function LuDelete(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"}},{tag:"path",attr:{d:"m12 9 6 6"},child:[]},{tag:"path",attr:{d:"m18 9-6 6"},child:[]}]})(props);
}
/**
 * Dessert icon from Lucide icons
 */
export function LuDessert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"4","r":"2"}},{tag:"path",attr:{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"},child:[]},{tag:"path",attr:{d:"M3.2 14.8a9 9 0 0 0 17.6 0"},child:[]}]})(props);
}
/**
 * Diameter icon from Lucide icons
 */
export function LuDiameter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"19","cy":"19","r":"2"}},{tag:"circle",attr:{"cx":"5","cy":"5","r":"2"},child:[]},{tag:"path",attr:{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"},child:[]},{tag:"path",attr:{d:"m6.41 6.41 11.18 11.18"},child:[]},{tag:"path",attr:{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"},child:[]}]})(props);
}
/**
 * Diamond icon from Lucide icons
 */
export function LuDiamond(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}}]})(props);
}
/**
 * DiamondMinus icon from Lucide icons
 */
export function LuDiamondMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}},{tag:"path",attr:{d:"M8 12h8"},child:[]}]})(props);
}
/**
 * DiamondPercent icon from Lucide icons
 */
export function LuDiamondPercent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}},{tag:"path",attr:{d:"M9.2 9.2h.01"},child:[]},{tag:"path",attr:{d:"m14.5 9.5-5 5"},child:[]},{tag:"path",attr:{d:"M14.7 14.8h.01"},child:[]}]})(props);
}
/**
 * DiamondPlus icon from Lucide icons
 */
export function LuDiamondPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 8v8"}},{tag:"path",attr:{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"},child:[]},{tag:"path",attr:{d:"M8 12h8"},child:[]}]})(props);
}
/**
 * Dice1 icon from Lucide icons
 */
export function LuDice1(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M12 12h.01"},child:[]}]})(props);
}
/**
 * Dice2 icon from Lucide icons
 */
export function LuDice2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M15 9h.01"},child:[]},{tag:"path",attr:{d:"M9 15h.01"},child:[]}]})(props);
}
/**
 * Dice3 icon from Lucide icons
 */
export function LuDice3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M16 8h.01"},child:[]},{tag:"path",attr:{d:"M12 12h.01"},child:[]},{tag:"path",attr:{d:"M8 16h.01"},child:[]}]})(props);
}
/**
 * Dice4 icon from Lucide icons
 */
export function LuDice4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M16 8h.01"},child:[]},{tag:"path",attr:{d:"M8 8h.01"},child:[]},{tag:"path",attr:{d:"M8 16h.01"},child:[]},{tag:"path",attr:{d:"M16 16h.01"},child:[]}]})(props);
}
/**
 * Dice5 icon from Lucide icons
 */
export function LuDice5(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M16 8h.01"},child:[]},{tag:"path",attr:{d:"M8 8h.01"},child:[]},{tag:"path",attr:{d:"M8 16h.01"},child:[]},{tag:"path",attr:{d:"M16 16h.01"},child:[]},{tag:"path",attr:{d:"M12 12h.01"},child:[]}]})(props);
}
/**
 * Dice6 icon from Lucide icons
 */
export function LuDice6(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M16 8h.01"},child:[]},{tag:"path",attr:{d:"M16 12h.01"},child:[]},{tag:"path",attr:{d:"M16 16h.01"},child:[]},{tag:"path",attr:{d:"M8 8h.01"},child:[]},{tag:"path",attr:{d:"M8 12h.01"},child:[]},{tag:"path",attr:{d:"M8 16h.01"},child:[]}]})(props);
}
/**
 * Dices icon from Lucide icons
 */
export function LuDices(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"12","height":"12",x:"2",y:"10","rx":"2","ry":"2"}},{tag:"path",attr:{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"},child:[]},{tag:"path",attr:{d:"M6 18h.01"},child:[]},{tag:"path",attr:{d:"M10 14h.01"},child:[]},{tag:"path",attr:{d:"M15 6h.01"},child:[]},{tag:"path",attr:{d:"M18 9h.01"},child:[]}]})(props);
}
/**
 * Diff icon from Lucide icons
 */
export function LuDiff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v14"}},{tag:"path",attr:{d:"M5 10h14"},child:[]},{tag:"path",attr:{d:"M5 21h14"},child:[]}]})(props);
}
/**
 * Disc icon from Lucide icons
 */
export function LuDisc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]}]})(props);
}
/**
 * Disc2 icon from Lucide icons
 */
export function LuDisc2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"},child:[]},{tag:"path",attr:{d:"M12 12h.01"},child:[]}]})(props);
}
/**
 * Disc3 icon from Lucide icons
 */
export function LuDisc3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M6 12c0-1.7.7-3.2 1.8-4.2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]},{tag:"path",attr:{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"},child:[]}]})(props);
}
/**
 * DiscAlbum icon from Lucide icons
 */
export function LuDiscAlbum(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"5"},child:[]},{tag:"path",attr:{d:"M12 12h.01"},child:[]}]})(props);
}
/**
 * Divide icon from Lucide icons
 */
export function LuDivide(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"6","r":"1"}},{tag:"line",attr:{"x1":"5","x2":"19","y1":"12","y2":"12"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"18","r":"1"},child:[]}]})(props);
}
/**
 * Dna icon from Lucide icons
 */
export function LuDna(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m10 16 1.5 1.5"}},{tag:"path",attr:{d:"m14 8-1.5-1.5"},child:[]},{tag:"path",attr:{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"},child:[]},{tag:"path",attr:{d:"m16.5 10.5 1 1"},child:[]},{tag:"path",attr:{d:"m17 6-2.891-2.891"},child:[]},{tag:"path",attr:{d:"M2 15c6.667-6 13.333 0 20-6"},child:[]},{tag:"path",attr:{d:"m20 9 .891.891"},child:[]},{tag:"path",attr:{d:"M3.109 14.109 4 15"},child:[]},{tag:"path",attr:{d:"m6.5 12.5 1 1"},child:[]},{tag:"path",attr:{d:"m7 18 2.891 2.891"},child:[]},{tag:"path",attr:{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"},child:[]}]})(props);
}
/**
 * DnaOff icon from Lucide icons
 */
export function LuDnaOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"}},{tag:"path",attr:{d:"m17 6-2.891-2.891"},child:[]},{tag:"path",attr:{d:"M2 15c3.333-3 6.667-3 10-3"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"m20 9 .891.891"},child:[]},{tag:"path",attr:{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"},child:[]},{tag:"path",attr:{d:"M3.109 14.109 4 15"},child:[]},{tag:"path",attr:{d:"m6.5 12.5 1 1"},child:[]},{tag:"path",attr:{d:"m7 18 2.891 2.891"},child:[]},{tag:"path",attr:{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"},child:[]}]})(props);
}
/**
 * Dock icon from Lucide icons
 */
export function LuDock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 8h20"}},{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M6 16h12"},child:[]}]})(props);
}
/**
 * Dog icon from Lucide icons
 */
export function LuDog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.25 16.25h1.5L12 17z"}},{tag:"path",attr:{d:"M16 14v.5"},child:[]},{tag:"path",attr:{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"},child:[]},{tag:"path",attr:{d:"M8 14v.5"},child:[]},{tag:"path",attr:{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"},child:[]}]})(props);
}
/**
 * DollarSign icon from Lucide icons
 */
export function LuDollarSign(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"12","x2":"12","y1":"2","y2":"22"}},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(props);
}
/**
 * Donut icon from Lucide icons
 */
export function LuDonut(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]}]})(props);
}
/**
 * DoorClosed icon from Lucide icons
 */
export function LuDoorClosed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}},{tag:"path",attr:{d:"M2 20h20"},child:[]},{tag:"path",attr:{d:"M14 12v.01"},child:[]}]})(props);
}
/**
 * DoorOpen icon from Lucide icons
 */
export function LuDoorOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 4h3a2 2 0 0 1 2 2v14"}},{tag:"path",attr:{d:"M2 20h3"},child:[]},{tag:"path",attr:{d:"M13 20h9"},child:[]},{tag:"path",attr:{d:"M10 12v.01"},child:[]},{tag:"path",attr:{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"},child:[]}]})(props);
}
/**
 * Dot icon from Lucide icons
 */
export function LuDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12.1","cy":"12.1","r":"1"}}]})(props);
}
/**
 * Download icon from Lucide icons
 */
export function LuDownload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{"points":"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"15","y2":"3"},child:[]}]})(props);
}
/**
 * DraftingCompass icon from Lucide icons
 */
export function LuDraftingCompass(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12.99 6.74 1.93 3.44"}},{tag:"path",attr:{d:"M19.136 12a10 10 0 0 1-14.271 0"},child:[]},{tag:"path",attr:{d:"m21 21-2.16-3.84"},child:[]},{tag:"path",attr:{d:"m3 21 8.02-14.26"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"5","r":"2"},child:[]}]})(props);
}
/**
 * Drama icon from Lucide icons
 */
export function LuDrama(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 11h.01"}},{tag:"path",attr:{d:"M14 6h.01"},child:[]},{tag:"path",attr:{d:"M18 6h.01"},child:[]},{tag:"path",attr:{d:"M6.5 13.1h.01"},child:[]},{tag:"path",attr:{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"},child:[]},{tag:"path",attr:{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"},child:[]},{tag:"path",attr:{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"},child:[]},{tag:"path",attr:{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"},child:[]}]})(props);
}
/**
 * Dribbble icon from Lucide icons
 */
export function LuDribbble(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"},child:[]},{tag:"path",attr:{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"},child:[]},{tag:"path",attr:{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"},child:[]}]})(props);
}
/**
 * Drill icon from Lucide icons
 */
export function LuDrill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"}},{tag:"path",attr:{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"},child:[]},{tag:"path",attr:{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"},child:[]},{tag:"path",attr:{d:"M18 6h4"},child:[]},{tag:"path",attr:{d:"m5 10-2 8"},child:[]},{tag:"path",attr:{d:"m7 18 2-8"},child:[]}]})(props);
}
/**
 * Droplet icon from Lucide icons
 */
export function LuDroplet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}}]})(props);
}
/**
 * Droplets icon from Lucide icons
 */
export function LuDroplets(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}},{tag:"path",attr:{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"},child:[]}]})(props);
}
/**
 * Drum icon from Lucide icons
 */
export function LuDrum(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 2 8 8"}},{tag:"path",attr:{d:"m22 2-8 8"},child:[]},{tag:"ellipse",attr:{"cx":"12","cy":"9","rx":"10","ry":"5"},child:[]},{tag:"path",attr:{d:"M7 13.4v7.9"},child:[]},{tag:"path",attr:{d:"M12 14v8"},child:[]},{tag:"path",attr:{d:"M17 13.4v7.9"},child:[]},{tag:"path",attr:{d:"M2 9v8a10 5 0 0 0 20 0V9"},child:[]}]})(props);
}
/**
 * Drumstick icon from Lucide icons
 */
export function LuDrumstick(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"}},{tag:"path",attr:{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"},child:[]}]})(props);
}
/**
 * Dumbbell icon from Lucide icons
 */
export function LuDumbbell(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.4 14.4 9.6 9.6"}},{tag:"path",attr:{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"},child:[]},{tag:"path",attr:{d:"m21.5 21.5-1.4-1.4"},child:[]},{tag:"path",attr:{d:"M3.9 3.9 2.5 2.5"},child:[]},{tag:"path",attr:{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"},child:[]}]})(props);
}
/**
 * Ear icon from Lucide icons
 */
export function LuEar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}},{tag:"path",attr:{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"},child:[]}]})(props);
}
/**
 * EarOff icon from Lucide icons
 */
export function LuEarOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}},{tag:"path",attr:{d:"M6 8.5c0-.75.13-1.47.36-2.14"},child:[]},{tag:"path",attr:{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"},child:[]},{tag:"path",attr:{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Earth icon from Lucide icons
 */
export function LuEarth(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}},{tag:"path",attr:{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"},child:[]},{tag:"path",attr:{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"},child:[]}]})(props);
}
/**
 * EarthLock icon from Lucide icons
 */
export function LuEarthLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 3.34V5a3 3 0 0 0 3 3"}},{tag:"path",attr:{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"},child:[]},{tag:"path",attr:{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"},child:[]},{tag:"path",attr:{d:"M12 2a10 10 0 1 0 9.54 13"},child:[]},{tag:"path",attr:{d:"M20 6V4a2 2 0 1 0-4 0v2"},child:[]},{tag:"rect",attr:{"width":"8","height":"5",x:"14",y:"6","rx":"1"},child:[]}]})(props);
}
/**
 * Eclipse icon from Lucide icons
 */
export function LuEclipse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M12 2a7 7 0 1 0 10 10"},child:[]}]})(props);
}
/**
 * Egg icon from Lucide icons
 */
export function LuEgg(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"}}]})(props);
}
/**
 * EggFried icon from Lucide icons
 */
export function LuEggFried(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"11.5","cy":"12.5","r":"3.5"}},{tag:"path",attr:{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"},child:[]}]})(props);
}
/**
 * EggOff icon from Lucide icons
 */
export function LuEggOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"}},{tag:"path",attr:{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Ellipsis icon from Lucide icons
 */
export function LuEllipsis(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"1"}},{tag:"circle",attr:{"cx":"19","cy":"12","r":"1"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"12","r":"1"},child:[]}]})(props);
}
/**
 * EllipsisVertical icon from Lucide icons
 */
export function LuEllipsisVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"1"}},{tag:"circle",attr:{"cx":"12","cy":"5","r":"1"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"19","r":"1"},child:[]}]})(props);
}
/**
 * Equal icon from Lucide icons
 */
export function LuEqual(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"5","x2":"19","y1":"9","y2":"9"}},{tag:"line",attr:{"x1":"5","x2":"19","y1":"15","y2":"15"},child:[]}]})(props);
}
/**
 * EqualApproximately icon from Lucide icons
 */
export function LuEqualApproximately(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}},{tag:"path",attr:{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"},child:[]}]})(props);
}
/**
 * EqualNot icon from Lucide icons
 */
export function LuEqualNot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"5","x2":"19","y1":"9","y2":"9"}},{tag:"line",attr:{"x1":"5","x2":"19","y1":"15","y2":"15"},child:[]},{tag:"line",attr:{"x1":"19","x2":"5","y1":"5","y2":"19"},child:[]}]})(props);
}
/**
 * Eraser icon from Lucide icons
 */
export function LuEraser(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"}},{tag:"path",attr:{d:"M22 21H7"},child:[]},{tag:"path",attr:{d:"m5 11 9 9"},child:[]}]})(props);
}
/**
 * EthernetPort icon from Lucide icons
 */
export function LuEthernetPort(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"}},{tag:"path",attr:{d:"M6 8v1"},child:[]},{tag:"path",attr:{d:"M10 8v1"},child:[]},{tag:"path",attr:{d:"M14 8v1"},child:[]},{tag:"path",attr:{d:"M18 8v1"},child:[]}]})(props);
}
/**
 * Euro icon from Lucide icons
 */
export function LuEuro(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 10h12"}},{tag:"path",attr:{d:"M4 14h9"},child:[]},{tag:"path",attr:{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"},child:[]}]})(props);
}
/**
 * Expand icon from Lucide icons
 */
export function LuExpand(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8"}},{tag:"path",attr:{d:"M3 16.2V21m0 0h4.8M3 21l6-6"},child:[]},{tag:"path",attr:{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6"},child:[]},{tag:"path",attr:{d:"M3 7.8V3m0 0h4.8M3 3l6 6"},child:[]}]})(props);
}
/**
 * ExternalLink icon from Lucide icons
 */
export function LuExternalLink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3h6v6"}},{tag:"path",attr:{d:"M10 14 21 3"},child:[]},{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]}]})(props);
}
/**
 * Eye icon from Lucide icons
 */
export function LuEye(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]}]})(props);
}
/**
 * EyeClosed icon from Lucide icons
 */
export function LuEyeClosed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15 18-.722-3.25"}},{tag:"path",attr:{d:"M2 8a10.645 10.645 0 0 0 20 0"},child:[]},{tag:"path",attr:{d:"m20 15-1.726-2.05"},child:[]},{tag:"path",attr:{d:"m4 15 1.726-2.05"},child:[]},{tag:"path",attr:{d:"m9 18 .722-3.25"},child:[]}]})(props);
}
/**
 * EyeOff icon from Lucide icons
 */
export function LuEyeOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * Facebook icon from Lucide icons
 */
export function LuFacebook(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}}]})(props);
}
/**
 * Factory icon from Lucide icons
 */
export function LuFactory(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}},{tag:"path",attr:{d:"M17 18h1"},child:[]},{tag:"path",attr:{d:"M12 18h1"},child:[]},{tag:"path",attr:{d:"M7 18h1"},child:[]}]})(props);
}
/**
 * Fan icon from Lucide icons
 */
export function LuFan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}},{tag:"path",attr:{d:"M12 12v.01"},child:[]}]})(props);
}
/**
 * FastForward icon from Lucide icons
 */
export function LuFastForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"13 19 22 12 13 5 13 19"}},{tag:"polygon",attr:{"points":"2 19 11 12 2 5 2 19"},child:[]}]})(props);
}
/**
 * Feather icon from Lucide icons
 */
export function LuFeather(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"}},{tag:"path",attr:{d:"M16 8 2 22"},child:[]},{tag:"path",attr:{d:"M17.5 15H9"},child:[]}]})(props);
}
/**
 * Fence icon from Lucide icons
 */
export function LuFence(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}},{tag:"path",attr:{d:"M6 8h4"},child:[]},{tag:"path",attr:{d:"M6 18h4"},child:[]},{tag:"path",attr:{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"},child:[]},{tag:"path",attr:{d:"M14 8h4"},child:[]},{tag:"path",attr:{d:"M14 18h4"},child:[]},{tag:"path",attr:{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"},child:[]}]})(props);
}
/**
 * FerrisWheel icon from Lucide icons
 */
export function LuFerrisWheel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"}},{tag:"path",attr:{d:"M12 2v4"},child:[]},{tag:"path",attr:{d:"m6.8 15-3.5 2"},child:[]},{tag:"path",attr:{d:"m20.7 7-3.5 2"},child:[]},{tag:"path",attr:{d:"M6.8 9 3.3 7"},child:[]},{tag:"path",attr:{d:"m20.7 17-3.5-2"},child:[]},{tag:"path",attr:{d:"m9 22 3-8 3 8"},child:[]},{tag:"path",attr:{d:"M8 22h8"},child:[]},{tag:"path",attr:{d:"M18 18.7a9 9 0 1 0-12 0"},child:[]}]})(props);
}
/**
 * Figma icon from Lucide icons
 */
export function LuFigma(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}},{tag:"path",attr:{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"},child:[]},{tag:"path",attr:{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"},child:[]},{tag:"path",attr:{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"},child:[]},{tag:"path",attr:{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"},child:[]}]})(props);
}
/**
 * File icon from Lucide icons
 */
export function LuFile(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]}]})(props);
}
/**
 * FileArchive icon from Lucide icons
 */
export function LuFileArchive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 12v-1"}},{tag:"path",attr:{d:"M10 18v-2"},child:[]},{tag:"path",attr:{d:"M10 7V6"},child:[]},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"},child:[]},{tag:"circle",attr:{"cx":"10","cy":"20","r":"2"},child:[]}]})(props);
}
/**
 * FileAudio icon from Lucide icons
 */
export function LuFileAudio(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"},child:[]}]})(props);
}
/**
 * FileAudio2 icon from Lucide icons
 */
export function LuFileAudio2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"circle",attr:{"cx":"3","cy":"17","r":"1"},child:[]},{tag:"path",attr:{d:"M2 17v-3a4 4 0 0 1 8 0v3"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"17","r":"1"},child:[]}]})(props);
}
/**
 * FileAxis3D icon from Lucide icons
 */
export function LuFileAxis3D(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"m8 18 4-4"},child:[]},{tag:"path",attr:{d:"M8 10v8h8"},child:[]}]})(props);
}
/**
 * FileBadge icon from Lucide icons
 */
export function LuFileBadge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"},child:[]},{tag:"path",attr:{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"},child:[]}]})(props);
}
/**
 * FileBadge2 icon from Lucide icons
 */
export function LuFileBadge2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"circle",attr:{"cx":"12","cy":"10","r":"3"},child:[]},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5"},child:[]}]})(props);
}
/**
 * FileBox icon from Lucide icons
 */
export function LuFileBox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"},child:[]},{tag:"path",attr:{d:"M7 17v5"},child:[]},{tag:"path",attr:{d:"M11.7 14.2 7 17l-4.7-2.8"},child:[]}]})(props);
}
/**
 * FileChartColumn icon from Lucide icons
 */
export function LuFileChartColumn(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M8 18v-1"},child:[]},{tag:"path",attr:{d:"M12 18v-6"},child:[]},{tag:"path",attr:{d:"M16 18v-3"},child:[]}]})(props);
}
/**
 * FileChartColumnIncreasing icon from Lucide icons
 */
export function LuFileChartColumnIncreasing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M8 18v-2"},child:[]},{tag:"path",attr:{d:"M12 18v-4"},child:[]},{tag:"path",attr:{d:"M16 18v-6"},child:[]}]})(props);
}
/**
 * FileChartLine icon from Lucide icons
 */
export function LuFileChartLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"m16 13-3.5 3.5-2-2L8 17"},child:[]}]})(props);
}
/**
 * FileChartPie icon from Lucide icons
 */
export function LuFileChartPie(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attr:{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"},child:[]},{tag:"path",attr:{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475"},child:[]},{tag:"path",attr:{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"},child:[]}]})(props);
}
/**
 * FileCheck icon from Lucide icons
 */
export function LuFileCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"m9 15 2 2 4-4"},child:[]}]})(props);
}
/**
 * FileCheck2 icon from Lucide icons
 */
export function LuFileCheck2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"m3 15 2 2 4-4"},child:[]}]})(props);
}
/**
 * FileClock icon from Lucide icons
 */
export function LuFileClock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"16","r":"6"},child:[]},{tag:"path",attr:{d:"M9.5 17.5 8 16.25V14"},child:[]}]})(props);
}
/**
 * FileCode icon from Lucide icons
 */
export function LuFileCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 12.5 8 15l2 2.5"}},{tag:"path",attr:{d:"m14 12.5 2 2.5-2 2.5"},child:[]},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"},child:[]}]})(props);
}
/**
 * FileCode2 icon from Lucide icons
 */
export function LuFileCode2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"m5 12-3 3 3 3"},child:[]},{tag:"path",attr:{d:"m9 18 3-3-3-3"},child:[]}]})(props);
}
/**
 * FileCog icon from Lucide icons
 */
export function LuFileCog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attr:{d:"m3.2 12.9-.9-.4"},child:[]},{tag:"path",attr:{d:"m3.2 15.1-.9.4"},child:[]},{tag:"path",attr:{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"},child:[]},{tag:"path",attr:{d:"m4.9 11.2-.4-.9"},child:[]},{tag:"path",attr:{d:"m4.9 16.8-.4.9"},child:[]},{tag:"path",attr:{d:"m7.5 10.3-.4.9"},child:[]},{tag:"path",attr:{d:"m7.5 17.7-.4-.9"},child:[]},{tag:"path",attr:{d:"m9.7 12.5-.9.4"},child:[]},{tag:"path",attr:{d:"m9.7 15.5-.9-.4"},child:[]},{tag:"circle",attr:{"cx":"6","cy":"14","r":"3"},child:[]}]})(props);
}
/**
 * FileDiff icon from Lucide icons
 */
export function LuFileDiff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M9 10h6"},child:[]},{tag:"path",attr:{d:"M12 13V7"},child:[]},{tag:"path",attr:{d:"M9 17h6"},child:[]}]})(props);
}
/**
 * FileDigit icon from Lucide icons
 */
export function LuFileDigit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"rect",attr:{"width":"4","height":"6",x:"2",y:"12","rx":"2"},child:[]},{tag:"path",attr:{d:"M10 12h2v6"},child:[]},{tag:"path",attr:{d:"M10 18h4"},child:[]}]})(props);
}
/**
 * FileDown icon from Lucide icons
 */
export function LuFileDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M12 18v-6"},child:[]},{tag:"path",attr:{d:"m9 15 3 3 3-3"},child:[]}]})(props);
}
/**
 * FileHeart icon from Lucide icons
 */
export function LuFileHeart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"},child:[]}]})(props);
}
/**
 * FileImage icon from Lucide icons
 */
export function LuFileImage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"circle",attr:{"cx":"10","cy":"12","r":"2"},child:[]},{tag:"path",attr:{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"},child:[]}]})(props);
}
/**
 * FileInput icon from Lucide icons
 */
export function LuFileInput(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M2 15h10"},child:[]},{tag:"path",attr:{d:"m9 18 3-3-3-3"},child:[]}]})(props);
}
/**
 * FileJson icon from Lucide icons
 */
export function LuFileJson(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"},child:[]},{tag:"path",attr:{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"},child:[]}]})(props);
}
/**
 * FileJson2 icon from Lucide icons
 */
export function LuFileJson2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"},child:[]},{tag:"path",attr:{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"},child:[]}]})(props);
}
/**
 * FileKey icon from Lucide icons
 */
export function LuFileKey(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"circle",attr:{"cx":"10","cy":"16","r":"2"},child:[]},{tag:"path",attr:{d:"m16 10-4.5 4.5"},child:[]},{tag:"path",attr:{d:"m15 11 1 1"},child:[]}]})(props);
}
/**
 * FileKey2 icon from Lucide icons
 */
export function LuFileKey2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"circle",attr:{"cx":"4","cy":"16","r":"2"},child:[]},{tag:"path",attr:{d:"m10 10-4.5 4.5"},child:[]},{tag:"path",attr:{d:"m9 11 1 1"},child:[]}]})(props);
}
/**
 * FileLock icon from Lucide icons
 */
export function LuFileLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"rect",attr:{"width":"8","height":"6",x:"8",y:"12","rx":"1"},child:[]},{tag:"path",attr:{d:"M10 12v-2a2 2 0 1 1 4 0v2"},child:[]}]})(props);
}
/**
 * FileLock2 icon from Lucide icons
 */
export function LuFileLock2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"rect",attr:{"width":"8","height":"5",x:"2",y:"13","rx":"1"},child:[]},{tag:"path",attr:{d:"M8 13v-2a2 2 0 1 0-4 0v2"},child:[]}]})(props);
}
/**
 * FileMinus icon from Lucide icons
 */
export function LuFileMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M9 15h6"},child:[]}]})(props);
}
/**
 * FileMinus2 icon from Lucide icons
 */
export function LuFileMinus2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M3 15h6"},child:[]}]})(props);
}
/**
 * FileMusic icon from Lucide icons
 */
export function LuFileMusic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"}},{tag:"path",attr:{d:"M8 18v-7.7L16 9v7"},child:[]},{tag:"circle",attr:{"cx":"14","cy":"16","r":"2"},child:[]},{tag:"circle",attr:{"cx":"6","cy":"18","r":"2"},child:[]}]})(props);
}
/**
 * FileOutput icon from Lucide icons
 */
export function LuFileOutput(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attr:{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"},child:[]},{tag:"path",attr:{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"},child:[]},{tag:"path",attr:{d:"m5 11-3 3"},child:[]},{tag:"path",attr:{d:"m5 17-3-3h10"},child:[]}]})(props);
}
/**
 * FilePen icon from Lucide icons
 */
export function LuFilePen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"},child:[]}]})(props);
}
/**
 * FilePenLine icon from Lucide icons
 */
export function LuFilePenLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"}},{tag:"path",attr:{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"},child:[]},{tag:"path",attr:{d:"M8 18h1"},child:[]}]})(props);
}
/**
 * FilePlus icon from Lucide icons
 */
export function LuFilePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M9 15h6"},child:[]},{tag:"path",attr:{d:"M12 18v-6"},child:[]}]})(props);
}
/**
 * FilePlus2 icon from Lucide icons
 */
export function LuFilePlus2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M3 15h6"},child:[]},{tag:"path",attr:{d:"M6 12v6"},child:[]}]})(props);
}
/**
 * FileQuestion icon from Lucide icons
 */
export function LuFileQuestion(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17h.01"}},{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"},child:[]},{tag:"path",attr:{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"},child:[]}]})(props);
}
/**
 * FileScan icon from Lucide icons
 */
export function LuFileScan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M16 14a2 2 0 0 0-2 2"},child:[]},{tag:"path",attr:{d:"M20 14a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M20 22a2 2 0 0 0 2-2"},child:[]},{tag:"path",attr:{d:"M16 22a2 2 0 0 1-2-2"},child:[]}]})(props);
}
/**
 * FileSearch icon from Lucide icons
 */
export function LuFileSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attr:{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"},child:[]},{tag:"path",attr:{d:"m9 18-1.5-1.5"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"14","r":"3"},child:[]}]})(props);
}
/**
 * FileSearch2 icon from Lucide icons
 */
export function LuFileSearch2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"circle",attr:{"cx":"11.5","cy":"14.5","r":"2.5"},child:[]},{tag:"path",attr:{d:"M13.3 16.3 15 18"},child:[]}]})(props);
}
/**
 * FileSliders icon from Lucide icons
 */
export function LuFileSliders(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"M10 11v2"},child:[]},{tag:"path",attr:{d:"M8 17h8"},child:[]},{tag:"path",attr:{d:"M14 16v2"},child:[]}]})(props);
}
/**
 * FileSpreadsheet icon from Lucide icons
 */
export function LuFileSpreadsheet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M8 13h2"},child:[]},{tag:"path",attr:{d:"M14 13h2"},child:[]},{tag:"path",attr:{d:"M8 17h2"},child:[]},{tag:"path",attr:{d:"M14 17h2"},child:[]}]})(props);
}
/**
 * FileStack icon from Lucide icons
 */
export function LuFileStack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7h-3a2 2 0 0 1-2-2V2"}},{tag:"path",attr:{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"},child:[]},{tag:"path",attr:{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"},child:[]},{tag:"path",attr:{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"},child:[]}]})(props);
}
/**
 * FileSymlink icon from Lucide icons
 */
export function LuFileSymlink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m10 18 3-3-3-3"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"},child:[]}]})(props);
}
/**
 * FileTerminal icon from Lucide icons
 */
export function LuFileTerminal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"m8 16 2-2-2-2"},child:[]},{tag:"path",attr:{d:"M12 18h4"},child:[]}]})(props);
}
/**
 * FileText icon from Lucide icons
 */
export function LuFileText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M10 9H8"},child:[]},{tag:"path",attr:{d:"M16 13H8"},child:[]},{tag:"path",attr:{d:"M16 17H8"},child:[]}]})(props);
}
/**
 * FileType icon from Lucide icons
 */
export function LuFileType(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M9 13v-1h6v1"},child:[]},{tag:"path",attr:{d:"M12 12v6"},child:[]},{tag:"path",attr:{d:"M11 18h2"},child:[]}]})(props);
}
/**
 * FileType2 icon from Lucide icons
 */
export function LuFileType2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M2 13v-1h6v1"},child:[]},{tag:"path",attr:{d:"M5 12v6"},child:[]},{tag:"path",attr:{d:"M4 18h2"},child:[]}]})(props);
}
/**
 * FileUp icon from Lucide icons
 */
export function LuFileUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M12 12v6"},child:[]},{tag:"path",attr:{d:"m15 15-3-3-3 3"},child:[]}]})(props);
}
/**
 * FileUser icon from Lucide icons
 */
export function LuFileUser(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attr:{d:"M15 18a3 3 0 1 0-6 0"},child:[]},{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"13","r":"2"},child:[]}]})(props);
}
/**
 * FileVideo icon from Lucide icons
 */
export function LuFileVideo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"m10 11 5 3-5 3v-6Z"},child:[]}]})(props);
}
/**
 * FileVideo2 icon from Lucide icons
 */
export function LuFileVideo2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"rect",attr:{"width":"8","height":"6",x:"2",y:"12","rx":"1"},child:[]},{tag:"path",attr:{d:"m10 15.5 4 2.5v-6l-4 2.5"},child:[]}]})(props);
}
/**
 * FileVolume icon from Lucide icons
 */
export function LuFileVolume(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 11a5 5 0 0 1 0 6"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"},child:[]},{tag:"path",attr:{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"},child:[]}]})(props);
}
/**
 * FileVolume2 icon from Lucide icons
 */
export function LuFileVolume2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M8 15h.01"},child:[]},{tag:"path",attr:{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3"},child:[]},{tag:"path",attr:{d:"M15 12a5 5 0 0 1 0 6"},child:[]}]})(props);
}
/**
 * FileWarning icon from Lucide icons
 */
export function LuFileWarning(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(props);
}
/**
 * FileX icon from Lucide icons
 */
export function LuFileX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"m14.5 12.5-5 5"},child:[]},{tag:"path",attr:{d:"m9.5 12.5 5 5"},child:[]}]})(props);
}
/**
 * FileX2 icon from Lucide icons
 */
export function LuFileX2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"m8 12.5-5 5"},child:[]},{tag:"path",attr:{d:"m3 12.5 5 5"},child:[]}]})(props);
}
/**
 * Files icon from Lucide icons
 */
export function LuFiles(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 7h-3a2 2 0 0 1-2-2V2"}},{tag:"path",attr:{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"},child:[]},{tag:"path",attr:{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"},child:[]}]})(props);
}
/**
 * Film icon from Lucide icons
 */
export function LuFilm(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M7 3v18"},child:[]},{tag:"path",attr:{d:"M3 7.5h4"},child:[]},{tag:"path",attr:{d:"M3 12h18"},child:[]},{tag:"path",attr:{d:"M3 16.5h4"},child:[]},{tag:"path",attr:{d:"M17 3v18"},child:[]},{tag:"path",attr:{d:"M17 7.5h4"},child:[]},{tag:"path",attr:{d:"M17 16.5h4"},child:[]}]})(props);
}
/**
 * Filter icon from Lucide icons
 */
export function LuFilter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}}]})(props);
}
/**
 * FilterX icon from Lucide icons
 */
export function LuFilterX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"}},{tag:"path",attr:{d:"m22 3-5 5"},child:[]},{tag:"path",attr:{d:"m17 3 5 5"},child:[]}]})(props);
}
/**
 * Fingerprint icon from Lucide icons
 */
export function LuFingerprint(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}},{tag:"path",attr:{d:"M14 13.12c0 2.38 0 6.38-1 8.88"},child:[]},{tag:"path",attr:{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"},child:[]},{tag:"path",attr:{d:"M2 12a10 10 0 0 1 18-6"},child:[]},{tag:"path",attr:{d:"M2 16h.01"},child:[]},{tag:"path",attr:{d:"M21.8 16c.2-2 .131-5.354 0-6"},child:[]},{tag:"path",attr:{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"},child:[]},{tag:"path",attr:{d:"M8.65 22c.21-.66.45-1.32.57-2"},child:[]},{tag:"path",attr:{d:"M9 6.8a6 6 0 0 1 9 5.2v2"},child:[]}]})(props);
}
/**
 * FireExtinguisher icon from Lucide icons
 */
export function LuFireExtinguisher(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}},{tag:"path",attr:{d:"M9 18h8"},child:[]},{tag:"path",attr:{d:"M18 3h-3"},child:[]},{tag:"path",attr:{d:"M11 3a6 6 0 0 0-6 6v11"},child:[]},{tag:"path",attr:{d:"M5 13h4"},child:[]},{tag:"path",attr:{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"},child:[]}]})(props);
}
/**
 * Fish icon from Lucide icons
 */
export function LuFish(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}},{tag:"path",attr:{d:"M18 12v.5"},child:[]},{tag:"path",attr:{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"},child:[]},{tag:"path",attr:{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"},child:[]},{tag:"path",attr:{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"},child:[]},{tag:"path",attr:{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"},child:[]}]})(props);
}
/**
 * FishOff icon from Lucide icons
 */
export function LuFishOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}},{tag:"path",attr:{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"},child:[]},{tag:"path",attr:{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"},child:[]}]})(props);
}
/**
 * FishSymbol icon from Lucide icons
 */
export function LuFishSymbol(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}}]})(props);
}
/**
 * Flag icon from Lucide icons
 */
export function LuFlag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}},{tag:"line",attr:{"x1":"4","x2":"4","y1":"22","y2":"15"},child:[]}]})(props);
}
/**
 * FlagOff icon from Lucide icons
 */
export function LuFlagOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}},{tag:"path",attr:{d:"M4 22V4"},child:[]},{tag:"path",attr:{d:"M4 15s1-1 4-1 5 2 8 2"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * FlagTriangleLeft icon from Lucide icons
 */
export function LuFlagTriangleLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 22V2L7 7l10 5"}}]})(props);
}
/**
 * FlagTriangleRight icon from Lucide icons
 */
export function LuFlagTriangleRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 22V2l10 5-10 5"}}]})(props);
}
/**
 * Flame icon from Lucide icons
 */
export function LuFlame(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}}]})(props);
}
/**
 * FlameKindling icon from Lucide icons
 */
export function LuFlameKindling(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}},{tag:"path",attr:{d:"m5 22 14-4"},child:[]},{tag:"path",attr:{d:"m5 18 14 4"},child:[]}]})(props);
}
/**
 * Flashlight icon from Lucide icons
 */
export function LuFlashlight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}},{tag:"line",attr:{"x1":"6","x2":"18","y1":"6","y2":"6"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"12","y2":"12"},child:[]}]})(props);
}
/**
 * FlashlightOff icon from Lucide icons
 */
export function LuFlashlightOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}},{tag:"path",attr:{d:"M7 2h11v4c0 2-2 2-2 4v1"},child:[]},{tag:"line",attr:{"x1":"11","x2":"18","y1":"6","y2":"6"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * FlaskConical icon from Lucide icons
 */
export function LuFlaskConical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"}},{tag:"path",attr:{d:"M8.5 2h7"},child:[]},{tag:"path",attr:{d:"M7 16h10"},child:[]}]})(props);
}
/**
 * FlaskConicalOff icon from Lucide icons
 */
export function LuFlaskConicalOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"}},{tag:"path",attr:{d:"M10 2v2.343"},child:[]},{tag:"path",attr:{d:"M14 2v6.343"},child:[]},{tag:"path",attr:{d:"M8.5 2h7"},child:[]},{tag:"path",attr:{d:"M7 16h9"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * FlaskRound icon from Lucide icons
 */
export function LuFlaskRound(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2v7.31"}},{tag:"path",attr:{d:"M14 9.3V1.99"},child:[]},{tag:"path",attr:{d:"M8.5 2h7"},child:[]},{tag:"path",attr:{d:"M14 9.3a6.5 6.5 0 1 1-4 0"},child:[]},{tag:"path",attr:{d:"M5.52 16h12.96"},child:[]}]})(props);
}
/**
 * FlipHorizontal icon from Lucide icons
 */
export function LuFlipHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}},{tag:"path",attr:{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"},child:[]},{tag:"path",attr:{d:"M12 20v2"},child:[]},{tag:"path",attr:{d:"M12 14v2"},child:[]},{tag:"path",attr:{d:"M12 8v2"},child:[]},{tag:"path",attr:{d:"M12 2v2"},child:[]}]})(props);
}
/**
 * FlipHorizontal2 icon from Lucide icons
 */
export function LuFlipHorizontal2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 7 5 5-5 5V7"}},{tag:"path",attr:{d:"m21 7-5 5 5 5V7"},child:[]},{tag:"path",attr:{d:"M12 20v2"},child:[]},{tag:"path",attr:{d:"M12 14v2"},child:[]},{tag:"path",attr:{d:"M12 8v2"},child:[]},{tag:"path",attr:{d:"M12 2v2"},child:[]}]})(props);
}
/**
 * FlipVertical icon from Lucide icons
 */
export function LuFlipVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"},child:[]},{tag:"path",attr:{d:"M4 12H2"},child:[]},{tag:"path",attr:{d:"M10 12H8"},child:[]},{tag:"path",attr:{d:"M16 12h-2"},child:[]},{tag:"path",attr:{d:"M22 12h-2"},child:[]}]})(props);
}
/**
 * FlipVertical2 icon from Lucide icons
 */
export function LuFlipVertical2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 3-5 5-5-5h10"}},{tag:"path",attr:{d:"m17 21-5-5-5 5h10"},child:[]},{tag:"path",attr:{d:"M4 12H2"},child:[]},{tag:"path",attr:{d:"M10 12H8"},child:[]},{tag:"path",attr:{d:"M16 12h-2"},child:[]},{tag:"path",attr:{d:"M22 12h-2"},child:[]}]})(props);
}
/**
 * Flower icon from Lucide icons
 */
export function LuFlower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"}},{tag:"path",attr:{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"},child:[]},{tag:"path",attr:{d:"M12 7.5V9"},child:[]},{tag:"path",attr:{d:"M7.5 12H9"},child:[]},{tag:"path",attr:{d:"M16.5 12H15"},child:[]},{tag:"path",attr:{d:"M12 16.5V15"},child:[]},{tag:"path",attr:{d:"m8 8 1.88 1.88"},child:[]},{tag:"path",attr:{d:"M14.12 9.88 16 8"},child:[]},{tag:"path",attr:{d:"m8 16 1.88-1.88"},child:[]},{tag:"path",attr:{d:"M14.12 14.12 16 16"},child:[]}]})(props);
}
/**
 * Flower2 icon from Lucide icons
 */
export function LuFlower2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}},{tag:"circle",attr:{"cx":"12","cy":"8","r":"2"},child:[]},{tag:"path",attr:{d:"M12 10v12"},child:[]},{tag:"path",attr:{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"},child:[]},{tag:"path",attr:{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"},child:[]}]})(props);
}
/**
 * Focus icon from Lucide icons
 */
export function LuFocus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"}},{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"M17 3h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M7 21H5a2 2 0 0 1-2-2v-2"},child:[]}]})(props);
}
/**
 * FoldHorizontal icon from Lucide icons
 */
export function LuFoldHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12h6"}},{tag:"path",attr:{d:"M22 12h-6"},child:[]},{tag:"path",attr:{d:"M12 2v2"},child:[]},{tag:"path",attr:{d:"M12 8v2"},child:[]},{tag:"path",attr:{d:"M12 14v2"},child:[]},{tag:"path",attr:{d:"M12 20v2"},child:[]},{tag:"path",attr:{d:"m19 9-3 3 3 3"},child:[]},{tag:"path",attr:{d:"m5 15 3-3-3-3"},child:[]}]})(props);
}
/**
 * FoldVertical icon from Lucide icons
 */
export function LuFoldVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22v-6"}},{tag:"path",attr:{d:"M12 8V2"},child:[]},{tag:"path",attr:{d:"M4 12H2"},child:[]},{tag:"path",attr:{d:"M10 12H8"},child:[]},{tag:"path",attr:{d:"M16 12h-2"},child:[]},{tag:"path",attr:{d:"M22 12h-2"},child:[]},{tag:"path",attr:{d:"m15 19-3-3-3 3"},child:[]},{tag:"path",attr:{d:"m15 5-3 3-3-3"},child:[]}]})(props);
}
/**
 * Folder icon from Lucide icons
 */
export function LuFolder(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}}]})(props);
}
/**
 * FolderArchive icon from Lucide icons
 */
export function LuFolderArchive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"15","cy":"19","r":"2"}},{tag:"path",attr:{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"},child:[]},{tag:"path",attr:{d:"M15 11v-1"},child:[]},{tag:"path",attr:{d:"M15 17v-2"},child:[]}]})(props);
}
/**
 * FolderCheck icon from Lucide icons
 */
export function LuFolderCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}},{tag:"path",attr:{d:"m9 13 2 2 4-4"},child:[]}]})(props);
}
/**
 * FolderClock icon from Lucide icons
 */
export function LuFolderClock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"16","cy":"16","r":"6"}},{tag:"path",attr:{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M16 14v2l1 1"},child:[]}]})(props);
}
/**
 * FolderClosed icon from Lucide icons
 */
export function LuFolderClosed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}},{tag:"path",attr:{d:"M2 10h20"},child:[]}]})(props);
}
/**
 * FolderCode icon from Lucide icons
 */
export function LuFolderCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 10.5 8 13l2 2.5"}},{tag:"path",attr:{d:"m14 10.5 2 2.5-2 2.5"},child:[]},{tag:"path",attr:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"},child:[]}]})(props);
}
/**
 * FolderCog icon from Lucide icons
 */
export function LuFolderCog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"}},{tag:"path",attr:{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"},child:[]},{tag:"path",attr:{d:"m21.7 19.4-.9-.3"},child:[]},{tag:"path",attr:{d:"m15.2 16.9-.9-.3"},child:[]},{tag:"path",attr:{d:"m16.6 21.7.3-.9"},child:[]},{tag:"path",attr:{d:"m19.1 15.2.3-.9"},child:[]},{tag:"path",attr:{d:"m19.6 21.7-.4-1"},child:[]},{tag:"path",attr:{d:"m16.8 15.3-.4-1"},child:[]},{tag:"path",attr:{d:"m14.3 19.6 1-.4"},child:[]},{tag:"path",attr:{d:"m20.7 16.8 1-.4"},child:[]}]})(props);
}
/**
 * FolderDot icon from Lucide icons
 */
export function LuFolderDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}},{tag:"circle",attr:{"cx":"12","cy":"13","r":"1"},child:[]}]})(props);
}
/**
 * FolderDown icon from Lucide icons
 */
export function LuFolderDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}},{tag:"path",attr:{d:"M12 10v6"},child:[]},{tag:"path",attr:{d:"m15 13-3 3-3-3"},child:[]}]})(props);
}
/**
 * FolderGit icon from Lucide icons
 */
export function LuFolderGit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"13","r":"2"}},{tag:"path",attr:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"},child:[]},{tag:"path",attr:{d:"M14 13h3"},child:[]},{tag:"path",attr:{d:"M7 13h3"},child:[]}]})(props);
}
/**
 * FolderGit2 icon from Lucide icons
 */
export function LuFolderGit2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}},{tag:"circle",attr:{"cx":"13","cy":"12","r":"2"},child:[]},{tag:"path",attr:{d:"M18 19c-2.8 0-5-2.2-5-5v8"},child:[]},{tag:"circle",attr:{"cx":"20","cy":"19","r":"2"},child:[]}]})(props);
}
/**
 * FolderHeart icon from Lucide icons
 */
export function LuFolderHeart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}},{tag:"path",attr:{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"},child:[]}]})(props);
}
/**
 * FolderInput icon from Lucide icons
 */
export function LuFolderInput(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}},{tag:"path",attr:{d:"M2 13h10"},child:[]},{tag:"path",attr:{d:"m9 16 3-3-3-3"},child:[]}]})(props);
}
/**
 * FolderKanban icon from Lucide icons
 */
export function LuFolderKanban(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}},{tag:"path",attr:{d:"M8 10v4"},child:[]},{tag:"path",attr:{d:"M12 10v2"},child:[]},{tag:"path",attr:{d:"M16 10v6"},child:[]}]})(props);
}
/**
 * FolderKey icon from Lucide icons
 */
export function LuFolderKey(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"16","cy":"20","r":"2"}},{tag:"path",attr:{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"m22 14-4.5 4.5"},child:[]},{tag:"path",attr:{d:"m21 15 1 1"},child:[]}]})(props);
}
/**
 * FolderLock icon from Lucide icons
 */
export function LuFolderLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"5",x:"14",y:"17","rx":"1"}},{tag:"path",attr:{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"},child:[]},{tag:"path",attr:{d:"M20 17v-2a2 2 0 1 0-4 0v2"},child:[]}]})(props);
}
/**
 * FolderMinus icon from Lucide icons
 */
export function LuFolderMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 13h6"}},{tag:"path",attr:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"},child:[]}]})(props);
}
/**
 * FolderOpen icon from Lucide icons
 */
export function LuFolderOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}}]})(props);
}
/**
 * FolderOpenDot icon from Lucide icons
 */
export function LuFolderOpenDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}},{tag:"circle",attr:{"cx":"14","cy":"15","r":"1"},child:[]}]})(props);
}
/**
 * FolderOutput icon from Lucide icons
 */
export function LuFolderOutput(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"}},{tag:"path",attr:{d:"M2 13h10"},child:[]},{tag:"path",attr:{d:"m5 10-3 3 3 3"},child:[]}]})(props);
}
/**
 * FolderPen icon from Lucide icons
 */
export function LuFolderPen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}},{tag:"path",attr:{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"},child:[]}]})(props);
}
/**
 * FolderPlus icon from Lucide icons
 */
export function LuFolderPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 10v6"}},{tag:"path",attr:{d:"M9 13h6"},child:[]},{tag:"path",attr:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"},child:[]}]})(props);
}
/**
 * FolderRoot icon from Lucide icons
 */
export function LuFolderRoot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}},{tag:"circle",attr:{"cx":"12","cy":"13","r":"2"},child:[]},{tag:"path",attr:{d:"M12 15v5"},child:[]}]})(props);
}
/**
 * FolderSearch icon from Lucide icons
 */
export function LuFolderSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}},{tag:"path",attr:{d:"m21 21-1.9-1.9"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"17","r":"3"},child:[]}]})(props);
}
/**
 * FolderSearch2 icon from Lucide icons
 */
export function LuFolderSearch2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"11.5","cy":"12.5","r":"2.5"}},{tag:"path",attr:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"},child:[]},{tag:"path",attr:{d:"M13.3 14.3 15 16"},child:[]}]})(props);
}
/**
 * FolderSymlink icon from Lucide icons
 */
export function LuFolderSymlink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}},{tag:"path",attr:{d:"m8 16 3-3-3-3"},child:[]}]})(props);
}
/**
 * FolderSync icon from Lucide icons
 */
export function LuFolderSync(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"}},{tag:"path",attr:{d:"M12 10v4h4"},child:[]},{tag:"path",attr:{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5"},child:[]},{tag:"path",attr:{d:"M22 22v-4h-4"},child:[]},{tag:"path",attr:{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5"},child:[]}]})(props);
}
/**
 * FolderTree icon from Lucide icons
 */
export function LuFolderTree(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}},{tag:"path",attr:{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"},child:[]},{tag:"path",attr:{d:"M3 5a2 2 0 0 0 2 2h3"},child:[]},{tag:"path",attr:{d:"M3 3v13a2 2 0 0 0 2 2h3"},child:[]}]})(props);
}
/**
 * FolderUp icon from Lucide icons
 */
export function LuFolderUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}},{tag:"path",attr:{d:"M12 10v6"},child:[]},{tag:"path",attr:{d:"m9 13 3-3 3 3"},child:[]}]})(props);
}
/**
 * FolderX icon from Lucide icons
 */
export function LuFolderX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}},{tag:"path",attr:{d:"m9.5 10.5 5 5"},child:[]},{tag:"path",attr:{d:"m14.5 10.5-5 5"},child:[]}]})(props);
}
/**
 * Folders icon from Lucide icons
 */
export function LuFolders(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}},{tag:"path",attr:{d:"M2 8v11a2 2 0 0 0 2 2h14"},child:[]}]})(props);
}
/**
 * Footprints icon from Lucide icons
 */
export function LuFootprints(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}},{tag:"path",attr:{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"},child:[]},{tag:"path",attr:{d:"M16 17h4"},child:[]},{tag:"path",attr:{d:"M4 13h4"},child:[]}]})(props);
}
/**
 * Forklift icon from Lucide icons
 */
export function LuForklift(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12H5a2 2 0 0 0-2 2v5"}},{tag:"circle",attr:{"cx":"13","cy":"19","r":"2"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"19","r":"2"},child:[]},{tag:"path",attr:{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"},child:[]}]})(props);
}
/**
 * Forward icon from Lucide icons
 */
export function LuForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"15 17 20 12 15 7"}},{tag:"path",attr:{d:"M4 18v-2a4 4 0 0 1 4-4h12"},child:[]}]})(props);
}
/**
 * Frame icon from Lucide icons
 */
export function LuFrame(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"22","x2":"2","y1":"6","y2":"6"}},{tag:"line",attr:{"x1":"22","x2":"2","y1":"18","y2":"18"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6","y1":"2","y2":"22"},child:[]},{tag:"line",attr:{"x1":"18","x2":"18","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Framer icon from Lucide icons
 */
export function LuFramer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}}]})(props);
}
/**
 * Frown icon from Lucide icons
 */
export function LuFrown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M16 16s-1.5-2-4-2-4 2-4 2"},child:[]},{tag:"line",attr:{"x1":"9","x2":"9.01","y1":"9","y2":"9"},child:[]},{tag:"line",attr:{"x1":"15","x2":"15.01","y1":"9","y2":"9"},child:[]}]})(props);
}
/**
 * Fuel icon from Lucide icons
 */
export function LuFuel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"3","x2":"15","y1":"22","y2":"22"}},{tag:"line",attr:{"x1":"4","x2":"14","y1":"9","y2":"9"},child:[]},{tag:"path",attr:{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"},child:[]},{tag:"path",attr:{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"},child:[]}]})(props);
}
/**
 * Fullscreen icon from Lucide icons
 */
export function LuFullscreen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2h2"}},{tag:"path",attr:{d:"M17 3h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M7 21H5a2 2 0 0 1-2-2v-2"},child:[]},{tag:"rect",attr:{"width":"10","height":"8",x:"7",y:"8","rx":"1"},child:[]}]})(props);
}
/**
 * GalleryHorizontal icon from Lucide icons
 */
export function LuGalleryHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3v18"}},{tag:"rect",attr:{"width":"12","height":"18",x:"6",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M22 3v18"},child:[]}]})(props);
}
/**
 * GalleryHorizontalEnd icon from Lucide icons
 */
export function LuGalleryHorizontalEnd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 7v10"}},{tag:"path",attr:{d:"M6 5v14"},child:[]},{tag:"rect",attr:{"width":"12","height":"18",x:"10",y:"3","rx":"2"},child:[]}]})(props);
}
/**
 * GalleryThumbnails icon from Lucide icons
 */
export function LuGalleryThumbnails(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"14",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M4 21h1"},child:[]},{tag:"path",attr:{d:"M9 21h1"},child:[]},{tag:"path",attr:{d:"M14 21h1"},child:[]},{tag:"path",attr:{d:"M19 21h1"},child:[]}]})(props);
}
/**
 * GalleryVertical icon from Lucide icons
 */
export function LuGalleryVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 2h18"}},{tag:"rect",attr:{"width":"18","height":"12",x:"3",y:"6","rx":"2"},child:[]},{tag:"path",attr:{d:"M3 22h18"},child:[]}]})(props);
}
/**
 * GalleryVerticalEnd icon from Lucide icons
 */
export function LuGalleryVerticalEnd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 2h10"}},{tag:"path",attr:{d:"M5 6h14"},child:[]},{tag:"rect",attr:{"width":"18","height":"12",x:"3",y:"10","rx":"2"},child:[]}]})(props);
}
/**
 * Gamepad icon from Lucide icons
 */
export function LuGamepad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"6","x2":"10","y1":"12","y2":"12"}},{tag:"line",attr:{"x1":"8","x2":"8","y1":"10","y2":"14"},child:[]},{tag:"line",attr:{"x1":"15","x2":"15.01","y1":"13","y2":"13"},child:[]},{tag:"line",attr:{"x1":"18","x2":"18.01","y1":"11","y2":"11"},child:[]},{tag:"rect",attr:{"width":"20","height":"12",x:"2",y:"6","rx":"2"},child:[]}]})(props);
}
/**
 * Gamepad2 icon from Lucide icons
 */
export function LuGamepad2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"6","x2":"10","y1":"11","y2":"11"}},{tag:"line",attr:{"x1":"8","x2":"8","y1":"9","y2":"13"},child:[]},{tag:"line",attr:{"x1":"15","x2":"15.01","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"18","x2":"18.01","y1":"10","y2":"10"},child:[]},{tag:"path",attr:{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"},child:[]}]})(props);
}
/**
 * Gauge icon from Lucide icons
 */
export function LuGauge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 14 4-4"}},{tag:"path",attr:{d:"M3.34 19a10 10 0 1 1 17.32 0"},child:[]}]})(props);
}
/**
 * Gavel icon from Lucide icons
 */
export function LuGavel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"}},{tag:"path",attr:{d:"m16 16 6-6"},child:[]},{tag:"path",attr:{d:"m8 8 6-6"},child:[]},{tag:"path",attr:{d:"m9 7 8 8"},child:[]},{tag:"path",attr:{d:"m21 11-8-8"},child:[]}]})(props);
}
/**
 * Gem icon from Lucide icons
 */
export function LuGem(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 3h12l4 6-10 13L2 9Z"}},{tag:"path",attr:{d:"M11 3 8 9l4 13 4-13-3-6"},child:[]},{tag:"path",attr:{d:"M2 9h20"},child:[]}]})(props);
}
/**
 * Ghost icon from Lucide icons
 */
export function LuGhost(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 10h.01"}},{tag:"path",attr:{d:"M15 10h.01"},child:[]},{tag:"path",attr:{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"},child:[]}]})(props);
}
/**
 * Gift icon from Lucide icons
 */
export function LuGift(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"8","width":"18","height":"4","rx":"1"}},{tag:"path",attr:{d:"M12 8v13"},child:[]},{tag:"path",attr:{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"},child:[]},{tag:"path",attr:{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"},child:[]}]})(props);
}
/**
 * GitBranch icon from Lucide icons
 */
export function LuGitBranch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"6","x2":"6","y1":"3","y2":"15"}},{tag:"circle",attr:{"cx":"18","cy":"6","r":"3"},child:[]},{tag:"circle",attr:{"cx":"6","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(props);
}
/**
 * GitBranchPlus icon from Lucide icons
 */
export function LuGitBranchPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 3v12"}},{tag:"path",attr:{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"},child:[]},{tag:"path",attr:{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"},child:[]},{tag:"path",attr:{d:"M15 6a9 9 0 0 0-9 9"},child:[]},{tag:"path",attr:{d:"M18 15v6"},child:[]},{tag:"path",attr:{d:"M21 18h-6"},child:[]}]})(props);
}
/**
 * GitCommitHorizontal icon from Lucide icons
 */
export function LuGitCommitHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"}},{tag:"line",attr:{"x1":"3","x2":"9","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"15","x2":"21","y1":"12","y2":"12"},child:[]}]})(props);
}
/**
 * GitCommitVertical icon from Lucide icons
 */
export function LuGitCommitVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v6"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]},{tag:"path",attr:{d:"M12 15v6"},child:[]}]})(props);
}
/**
 * GitCompare icon from Lucide icons
 */
export function LuGitCompare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"}},{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"},child:[]},{tag:"path",attr:{d:"M13 6h3a2 2 0 0 1 2 2v7"},child:[]},{tag:"path",attr:{d:"M11 18H8a2 2 0 0 1-2-2V9"},child:[]}]})(props);
}
/**
 * GitCompareArrows icon from Lucide icons
 */
export function LuGitCompareArrows(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"5","cy":"6","r":"3"}},{tag:"path",attr:{d:"M12 6h5a2 2 0 0 1 2 2v7"},child:[]},{tag:"path",attr:{d:"m15 9-3-3 3-3"},child:[]},{tag:"circle",attr:{"cx":"19","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"M12 18H7a2 2 0 0 1-2-2V9"},child:[]},{tag:"path",attr:{d:"m9 15 3 3-3 3"},child:[]}]})(props);
}
/**
 * GitFork icon from Lucide icons
 */
export function LuGitFork(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"18","r":"3"}},{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"6","r":"3"},child:[]},{tag:"path",attr:{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"},child:[]},{tag:"path",attr:{d:"M12 12v3"},child:[]}]})(props);
}
/**
 * GitGraph icon from Lucide icons
 */
export function LuGitGraph(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"5","cy":"6","r":"3"}},{tag:"path",attr:{d:"M5 9v6"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"M12 3v18"},child:[]},{tag:"circle",attr:{"cx":"19","cy":"6","r":"3"},child:[]},{tag:"path",attr:{d:"M16 15.7A9 9 0 0 0 19 9"},child:[]}]})(props);
}
/**
 * GitMerge icon from Lucide icons
 */
export function LuGitMerge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"}},{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(props);
}
/**
 * GitPullRequest icon from Lucide icons
 */
export function LuGitPullRequest(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"}},{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"},child:[]},{tag:"path",attr:{d:"M13 6h3a2 2 0 0 1 2 2v7"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6","y1":"9","y2":"21"},child:[]}]})(props);
}
/**
 * GitPullRequestArrow icon from Lucide icons
 */
export function LuGitPullRequestArrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"5","cy":"6","r":"3"}},{tag:"path",attr:{d:"M5 9v12"},child:[]},{tag:"circle",attr:{"cx":"19","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"m15 9-3-3 3-3"},child:[]},{tag:"path",attr:{d:"M12 6h5a2 2 0 0 1 2 2v7"},child:[]}]})(props);
}
/**
 * GitPullRequestClosed icon from Lucide icons
 */
export function LuGitPullRequestClosed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"}},{tag:"path",attr:{d:"M6 9v12"},child:[]},{tag:"path",attr:{d:"m21 3-6 6"},child:[]},{tag:"path",attr:{d:"m21 9-6-6"},child:[]},{tag:"path",attr:{d:"M18 11.5V15"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"},child:[]}]})(props);
}
/**
 * GitPullRequestCreate icon from Lucide icons
 */
export function LuGitPullRequestCreate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"}},{tag:"path",attr:{d:"M6 9v12"},child:[]},{tag:"path",attr:{d:"M13 6h3a2 2 0 0 1 2 2v3"},child:[]},{tag:"path",attr:{d:"M18 15v6"},child:[]},{tag:"path",attr:{d:"M21 18h-6"},child:[]}]})(props);
}
/**
 * GitPullRequestCreateArrow icon from Lucide icons
 */
export function LuGitPullRequestCreateArrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"5","cy":"6","r":"3"}},{tag:"path",attr:{d:"M5 9v12"},child:[]},{tag:"path",attr:{d:"m15 9-3-3 3-3"},child:[]},{tag:"path",attr:{d:"M12 6h5a2 2 0 0 1 2 2v3"},child:[]},{tag:"path",attr:{d:"M19 15v6"},child:[]},{tag:"path",attr:{d:"M22 18h-6"},child:[]}]})(props);
}
/**
 * GitPullRequestDraft icon from Lucide icons
 */
export function LuGitPullRequestDraft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"}},{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"},child:[]},{tag:"path",attr:{d:"M18 6V5"},child:[]},{tag:"path",attr:{d:"M18 11v-1"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6","y1":"9","y2":"21"},child:[]}]})(props);
}
/**
 * Github icon from Lucide icons
 */
export function LuGithub(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}},{tag:"path",attr:{d:"M9 18c-4.51 2-5-2-7-2"},child:[]}]})(props);
}
/**
 * Gitlab icon from Lucide icons
 */
export function LuGitlab(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}}]})(props);
}
/**
 * GlassWater icon from Lucide icons
 */
export function LuGlassWater(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"}},{tag:"path",attr:{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"},child:[]}]})(props);
}
/**
 * Glasses icon from Lucide icons
 */
export function LuGlasses(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"6","cy":"15","r":"4"}},{tag:"circle",attr:{"cx":"18","cy":"15","r":"4"},child:[]},{tag:"path",attr:{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"},child:[]},{tag:"path",attr:{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"},child:[]},{tag:"path",attr:{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"},child:[]}]})(props);
}
/**
 * Globe icon from Lucide icons
 */
export function LuGlobe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"},child:[]},{tag:"path",attr:{d:"M2 12h20"},child:[]}]})(props);
}
/**
 * GlobeLock icon from Lucide icons
 */
export function LuGlobeLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"}},{tag:"path",attr:{d:"M2 12h8.5"},child:[]},{tag:"path",attr:{d:"M20 6V4a2 2 0 1 0-4 0v2"},child:[]},{tag:"rect",attr:{"width":"8","height":"5",x:"14",y:"6","rx":"1"},child:[]}]})(props);
}
/**
 * Goal icon from Lucide icons
 */
export function LuGoal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13V2l8 4-8 4"}},{tag:"path",attr:{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29"},child:[]},{tag:"path",attr:{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02"},child:[]}]})(props);
}
/**
 * Grab icon from Lucide icons
 */
export function LuGrab(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}},{tag:"path",attr:{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"},child:[]},{tag:"path",attr:{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"},child:[]},{tag:"path",attr:{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"},child:[]},{tag:"path",attr:{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"},child:[]}]})(props);
}
/**
 * GraduationCap icon from Lucide icons
 */
export function LuGraduationCap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(props);
}
/**
 * Grape icon from Lucide icons
 */
export function LuGrape(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 5V2l-5.89 5.89"}},{tag:"circle",attr:{"cx":"16.6","cy":"15.89","r":"3"},child:[]},{tag:"circle",attr:{"cx":"8.11","cy":"7.4","r":"3"},child:[]},{tag:"circle",attr:{"cx":"12.35","cy":"11.65","r":"3"},child:[]},{tag:"circle",attr:{"cx":"13.91","cy":"5.85","r":"3"},child:[]},{tag:"circle",attr:{"cx":"18.15","cy":"10.09","r":"3"},child:[]},{tag:"circle",attr:{"cx":"6.56","cy":"13.2","r":"3"},child:[]},{tag:"circle",attr:{"cx":"10.8","cy":"17.44","r":"3"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"19","r":"3"},child:[]}]})(props);
}
/**
 * Grid2X2 icon from Lucide icons
 */
export function LuGrid2X2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v18"}},{tag:"path",attr:{d:"M3 12h18"},child:[]},{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"2"},child:[]}]})(props);
}
/**
 * Grid2X2Check icon from Lucide icons
 */
export function LuGrid2X2Check(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}},{tag:"path",attr:{d:"m16 19 2 2 4-4"},child:[]}]})(props);
}
/**
 * Grid2X2Plus icon from Lucide icons
 */
export function LuGrid2X2Plus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}},{tag:"path",attr:{d:"M16 19h6"},child:[]},{tag:"path",attr:{d:"M19 22v-6"},child:[]}]})(props);
}
/**
 * Grid2X2X icon from Lucide icons
 */
export function LuGrid2X2X(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}},{tag:"path",attr:{d:"m16 16 5 5"},child:[]},{tag:"path",attr:{d:"m16 21 5-5"},child:[]}]})(props);
}
/**
 * Grid3X3 icon from Lucide icons
 */
export function LuGrid3X3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M3 9h18"},child:[]},{tag:"path",attr:{d:"M3 15h18"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]},{tag:"path",attr:{d:"M15 3v18"},child:[]}]})(props);
}
/**
 * Grip icon from Lucide icons
 */
export function LuGrip(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"5","r":"1"}},{tag:"circle",attr:{"cx":"19","cy":"5","r":"1"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"5","r":"1"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"1"},child:[]},{tag:"circle",attr:{"cx":"19","cy":"12","r":"1"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"12","r":"1"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"19","r":"1"},child:[]},{tag:"circle",attr:{"cx":"19","cy":"19","r":"1"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"19","r":"1"},child:[]}]})(props);
}
/**
 * GripHorizontal icon from Lucide icons
 */
export function LuGripHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"9","r":"1"}},{tag:"circle",attr:{"cx":"19","cy":"9","r":"1"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"9","r":"1"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"15","r":"1"},child:[]},{tag:"circle",attr:{"cx":"19","cy":"15","r":"1"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"15","r":"1"},child:[]}]})(props);
}
/**
 * GripVertical icon from Lucide icons
 */
export function LuGripVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"9","cy":"12","r":"1"}},{tag:"circle",attr:{"cx":"9","cy":"5","r":"1"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"19","r":"1"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"12","r":"1"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"5","r":"1"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"19","r":"1"},child:[]}]})(props);
}
/**
 * Group icon from Lucide icons
 */
export function LuGroup(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7V5c0-1.1.9-2 2-2h2"}},{tag:"path",attr:{d:"M17 3h2c1.1 0 2 .9 2 2v2"},child:[]},{tag:"path",attr:{d:"M21 17v2c0 1.1-.9 2-2 2h-2"},child:[]},{tag:"path",attr:{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"},child:[]},{tag:"rect",attr:{"width":"7","height":"5",x:"7",y:"7","rx":"1"},child:[]},{tag:"rect",attr:{"width":"7","height":"5",x:"10",y:"12","rx":"1"},child:[]}]})(props);
}
/**
 * Guitar icon from Lucide icons
 */
export function LuGuitar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m11.9 12.1 4.514-4.514"}},{tag:"path",attr:{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"},child:[]},{tag:"path",attr:{d:"m6 16 2 2"},child:[]},{tag:"path",attr:{d:"M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"},child:[]},{tag:"circle",attr:{"cx":"11.5","cy":"12.5","r":".5",fill:"currentColor"},child:[]}]})(props);
}
/**
 * Ham icon from Lucide icons
 */
export function LuHam(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"}},{tag:"path",attr:{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"},child:[]},{tag:"path",attr:{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"},child:[]},{tag:"path",attr:{d:"m8.5 16.5-1-1"},child:[]}]})(props);
}
/**
 * Hammer icon from Lucide icons
 */
export function LuHammer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"}},{tag:"path",attr:{d:"m18 15 4-4"},child:[]},{tag:"path",attr:{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"},child:[]}]})(props);
}
/**
 * Hand icon from Lucide icons
 */
export function LuHand(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}},{tag:"path",attr:{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"},child:[]},{tag:"path",attr:{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"},child:[]},{tag:"path",attr:{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"},child:[]}]})(props);
}
/**
 * HandCoins icon from Lucide icons
 */
export function LuHandCoins(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"}},{tag:"path",attr:{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"},child:[]},{tag:"path",attr:{d:"m2 16 6 6"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"9","r":"2.9"},child:[]},{tag:"circle",attr:{"cx":"6","cy":"5","r":"3"},child:[]}]})(props);
}
/**
 * HandHeart icon from Lucide icons
 */
export function LuHandHeart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"}},{tag:"path",attr:{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"},child:[]},{tag:"path",attr:{d:"m2 15 6 6"},child:[]},{tag:"path",attr:{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"},child:[]}]})(props);
}
/**
 * HandHelping icon from Lucide icons
 */
export function LuHandHelping(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"}},{tag:"path",attr:{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"},child:[]},{tag:"path",attr:{d:"m2 13 6 6"},child:[]}]})(props);
}
/**
 * HandMetal icon from Lucide icons
 */
export function LuHandMetal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}},{tag:"path",attr:{d:"M14 11V9a2 2 0 1 0-4 0v2"},child:[]},{tag:"path",attr:{d:"M10 10.5V5a2 2 0 1 0-4 0v9"},child:[]},{tag:"path",attr:{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"},child:[]}]})(props);
}
/**
 * HandPlatter icon from Lucide icons
 */
export function LuHandPlatter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3V2"}},{tag:"path",attr:{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"},child:[]},{tag:"path",attr:{d:"M2 14h12a2 2 0 0 1 0 4h-2"},child:[]},{tag:"path",attr:{d:"M4 10h16"},child:[]},{tag:"path",attr:{d:"M5 10a7 7 0 0 1 14 0"},child:[]},{tag:"path",attr:{d:"M5 14v6a1 1 0 0 1-1 1H2"},child:[]}]})(props);
}
/**
 * Handshake icon from Lucide icons
 */
export function LuHandshake(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m11 17 2 2a1 1 0 1 0 3-3"}},{tag:"path",attr:{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"},child:[]},{tag:"path",attr:{d:"m21 3 1 11h-2"},child:[]},{tag:"path",attr:{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"},child:[]},{tag:"path",attr:{d:"M3 4h8"},child:[]}]})(props);
}
/**
 * HardDrive icon from Lucide icons
 */
export function LuHardDrive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"22","x2":"2","y1":"12","y2":"12"}},{tag:"path",attr:{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6.01","y1":"16","y2":"16"},child:[]},{tag:"line",attr:{"x1":"10","x2":"10.01","y1":"16","y2":"16"},child:[]}]})(props);
}
/**
 * HardDriveDownload icon from Lucide icons
 */
export function LuHardDriveDownload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v8"}},{tag:"path",attr:{d:"m16 6-4 4-4-4"},child:[]},{tag:"rect",attr:{"width":"20","height":"8",x:"2",y:"14","rx":"2"},child:[]},{tag:"path",attr:{d:"M6 18h.01"},child:[]},{tag:"path",attr:{d:"M10 18h.01"},child:[]}]})(props);
}
/**
 * HardDriveUpload icon from Lucide icons
 */
export function LuHardDriveUpload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16 6-4-4-4 4"}},{tag:"path",attr:{d:"M12 2v8"},child:[]},{tag:"rect",attr:{"width":"20","height":"8",x:"2",y:"14","rx":"2"},child:[]},{tag:"path",attr:{d:"M6 18h.01"},child:[]},{tag:"path",attr:{d:"M10 18h.01"},child:[]}]})(props);
}
/**
 * HardHat icon from Lucide icons
 */
export function LuHardHat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}},{tag:"path",attr:{d:"M14 6a6 6 0 0 1 6 6v3"},child:[]},{tag:"path",attr:{d:"M4 15v-3a6 6 0 0 1 6-6"},child:[]},{tag:"rect",attr:{x:"2",y:"15","width":"20","height":"4","rx":"1"},child:[]}]})(props);
}
/**
 * Hash icon from Lucide icons
 */
export function LuHash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"4","x2":"20","y1":"9","y2":"9"}},{tag:"line",attr:{"x1":"4","x2":"20","y1":"15","y2":"15"},child:[]},{tag:"line",attr:{"x1":"10","x2":"8","y1":"3","y2":"21"},child:[]},{tag:"line",attr:{"x1":"16","x2":"14","y1":"3","y2":"21"},child:[]}]})(props);
}
/**
 * Haze icon from Lucide icons
 */
export function LuHaze(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m5.2 6.2 1.4 1.4"}},{tag:"path",attr:{d:"M2 13h2"},child:[]},{tag:"path",attr:{d:"M20 13h2"},child:[]},{tag:"path",attr:{d:"m17.4 7.6 1.4-1.4"},child:[]},{tag:"path",attr:{d:"M22 17H2"},child:[]},{tag:"path",attr:{d:"M22 21H2"},child:[]},{tag:"path",attr:{d:"M16 13a4 4 0 0 0-8 0"},child:[]},{tag:"path",attr:{d:"M12 5V2.5"},child:[]}]})(props);
}
/**
 * HdmiPort icon from Lucide icons
 */
export function LuHdmiPort(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}},{tag:"path",attr:{d:"M7.5 12h9"},child:[]}]})(props);
}
/**
 * Heading icon from Lucide icons
 */
export function LuHeading(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 12h12"}},{tag:"path",attr:{d:"M6 20V4"},child:[]},{tag:"path",attr:{d:"M18 20V4"},child:[]}]})(props);
}
/**
 * Heading1 icon from Lucide icons
 */
export function LuHeading1(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12h8"}},{tag:"path",attr:{d:"M4 18V6"},child:[]},{tag:"path",attr:{d:"M12 18V6"},child:[]},{tag:"path",attr:{d:"m17 12 3-2v8"},child:[]}]})(props);
}
/**
 * Heading2 icon from Lucide icons
 */
export function LuHeading2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12h8"}},{tag:"path",attr:{d:"M4 18V6"},child:[]},{tag:"path",attr:{d:"M12 18V6"},child:[]},{tag:"path",attr:{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"},child:[]}]})(props);
}
/**
 * Heading3 icon from Lucide icons
 */
export function LuHeading3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12h8"}},{tag:"path",attr:{d:"M4 18V6"},child:[]},{tag:"path",attr:{d:"M12 18V6"},child:[]},{tag:"path",attr:{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"},child:[]}]})(props);
}
/**
 * Heading4 icon from Lucide icons
 */
export function LuHeading4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 18V6"}},{tag:"path",attr:{d:"M17 10v3a1 1 0 0 0 1 1h3"},child:[]},{tag:"path",attr:{d:"M21 10v8"},child:[]},{tag:"path",attr:{d:"M4 12h8"},child:[]},{tag:"path",attr:{d:"M4 18V6"},child:[]}]})(props);
}
/**
 * Heading5 icon from Lucide icons
 */
export function LuHeading5(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12h8"}},{tag:"path",attr:{d:"M4 18V6"},child:[]},{tag:"path",attr:{d:"M12 18V6"},child:[]},{tag:"path",attr:{d:"M17 13v-3h4"},child:[]},{tag:"path",attr:{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"},child:[]}]})(props);
}
/**
 * Heading6 icon from Lucide icons
 */
export function LuHeading6(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12h8"}},{tag:"path",attr:{d:"M4 18V6"},child:[]},{tag:"path",attr:{d:"M12 18V6"},child:[]},{tag:"circle",attr:{"cx":"19","cy":"16","r":"2"},child:[]},{tag:"path",attr:{d:"M20 10c-2 2-3 3.5-3 6"},child:[]}]})(props);
}
/**
 * HeadphoneOff icon from Lucide icons
 */
export function LuHeadphoneOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 14h-1.343"}},{tag:"path",attr:{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"},child:[]},{tag:"path",attr:{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"},child:[]}]})(props);
}
/**
 * Headphones icon from Lucide icons
 */
export function LuHeadphones(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}}]})(props);
}
/**
 * Headset icon from Lucide icons
 */
export function LuHeadset(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}},{tag:"path",attr:{d:"M21 16v2a4 4 0 0 1-4 4h-5"},child:[]}]})(props);
}
/**
 * Heart icon from Lucide icons
 */
export function LuHeart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}}]})(props);
}
/**
 * HeartCrack icon from Lucide icons
 */
export function LuHeartCrack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}},{tag:"path",attr:{d:"m12 13-1-1 2-2-3-3 2-2"},child:[]}]})(props);
}
/**
 * HeartHandshake icon from Lucide icons
 */
export function LuHeartHandshake(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}},{tag:"path",attr:{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"},child:[]},{tag:"path",attr:{d:"m18 15-2-2"},child:[]},{tag:"path",attr:{d:"m15 18-2-2"},child:[]}]})(props);
}
/**
 * HeartOff icon from Lucide icons
 */
export function LuHeartOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"2","y1":"2","x2":"22","y2":"22"}},{tag:"path",attr:{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"},child:[]},{tag:"path",attr:{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"},child:[]}]})(props);
}
/**
 * HeartPulse icon from Lucide icons
 */
export function LuHeartPulse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}},{tag:"path",attr:{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"},child:[]}]})(props);
}
/**
 * Heater icon from Lucide icons
 */
export function LuHeater(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 8c2-3-2-3 0-6"}},{tag:"path",attr:{d:"M15.5 8c2-3-2-3 0-6"},child:[]},{tag:"path",attr:{d:"M6 10h.01"},child:[]},{tag:"path",attr:{d:"M6 14h.01"},child:[]},{tag:"path",attr:{d:"M10 16v-4"},child:[]},{tag:"path",attr:{d:"M14 16v-4"},child:[]},{tag:"path",attr:{d:"M18 16v-4"},child:[]},{tag:"path",attr:{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"},child:[]},{tag:"path",attr:{d:"M5 20v2"},child:[]},{tag:"path",attr:{d:"M19 20v2"},child:[]}]})(props);
}
/**
 * Hexagon icon from Lucide icons
 */
export function LuHexagon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}}]})(props);
}
/**
 * Highlighter icon from Lucide icons
 */
export function LuHighlighter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 11-6 6v3h9l3-3"}},{tag:"path",attr:{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"},child:[]}]})(props);
}
/**
 * History icon from Lucide icons
 */
export function LuHistory(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attr:{d:"M3 3v5h5"},child:[]},{tag:"path",attr:{d:"M12 7v5l4 2"},child:[]}]})(props);
}
/**
 * Hop icon from Lucide icons
 */
export function LuHop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"}},{tag:"path",attr:{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"},child:[]},{tag:"path",attr:{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"},child:[]},{tag:"path",attr:{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"},child:[]},{tag:"path",attr:{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"},child:[]},{tag:"path",attr:{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"},child:[]},{tag:"path",attr:{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1"},child:[]},{tag:"path",attr:{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"},child:[]}]})(props);
}
/**
 * HopOff icon from Lucide icons
 */
export function LuHopOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"}},{tag:"path",attr:{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"},child:[]},{tag:"path",attr:{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"},child:[]},{tag:"path",attr:{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"},child:[]},{tag:"path",attr:{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"},child:[]},{tag:"path",attr:{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"},child:[]},{tag:"path",attr:{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"},child:[]},{tag:"path",attr:{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * Hospital icon from Lucide icons
 */
export function LuHospital(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 6v4"}},{tag:"path",attr:{d:"M14 14h-4"},child:[]},{tag:"path",attr:{d:"M14 18h-4"},child:[]},{tag:"path",attr:{d:"M14 8h-4"},child:[]},{tag:"path",attr:{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"},child:[]}]})(props);
}
/**
 * Hotel icon from Lucide icons
 */
export function LuHotel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 22v-6.57"}},{tag:"path",attr:{d:"M12 11h.01"},child:[]},{tag:"path",attr:{d:"M12 7h.01"},child:[]},{tag:"path",attr:{d:"M14 15.43V22"},child:[]},{tag:"path",attr:{d:"M15 16a5 5 0 0 0-6 0"},child:[]},{tag:"path",attr:{d:"M16 11h.01"},child:[]},{tag:"path",attr:{d:"M16 7h.01"},child:[]},{tag:"path",attr:{d:"M8 11h.01"},child:[]},{tag:"path",attr:{d:"M8 7h.01"},child:[]},{tag:"rect",attr:{x:"4",y:"2","width":"16","height":"20","rx":"2"},child:[]}]})(props);
}
/**
 * Hourglass icon from Lucide icons
 */
export function LuHourglass(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 22h14"}},{tag:"path",attr:{d:"M5 2h14"},child:[]},{tag:"path",attr:{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"},child:[]},{tag:"path",attr:{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"},child:[]}]})(props);
}
/**
 * House icon from Lucide icons
 */
export function LuHouse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}},{tag:"path",attr:{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]}]})(props);
}
/**
 * HousePlug icon from Lucide icons
 */
export function LuHousePlug(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 12V8.964"}},{tag:"path",attr:{d:"M14 12V8.964"},child:[]},{tag:"path",attr:{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"},child:[]},{tag:"path",attr:{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"},child:[]}]})(props);
}
/**
 * HousePlus icon from Lucide icons
 */
export function LuHousePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"}},{tag:"path",attr:{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"},child:[]},{tag:"path",attr:{d:"M15 6h6"},child:[]},{tag:"path",attr:{d:"M18 3v6"},child:[]}]})(props);
}
/**
 * IceCreamBowl icon from Lucide icons
 */
export function LuIceCreamBowl(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}},{tag:"path",attr:{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"},child:[]},{tag:"path",attr:{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"},child:[]}]})(props);
}
/**
 * IceCreamCone icon from Lucide icons
 */
export function LuIceCreamCone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}},{tag:"path",attr:{d:"M17 7A5 5 0 0 0 7 7"},child:[]},{tag:"path",attr:{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"},child:[]}]})(props);
}
/**
 * IdCard icon from Lucide icons
 */
export function LuIdCard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 10h2"}},{tag:"path",attr:{d:"M16 14h2"},child:[]},{tag:"path",attr:{d:"M6.17 15a3 3 0 0 1 5.66 0"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"11","r":"2"},child:[]},{tag:"rect",attr:{x:"2",y:"5","width":"20","height":"14","rx":"2"},child:[]}]})(props);
}
/**
 * Image icon from Lucide icons
 */
export function LuImage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"circle",attr:{"cx":"9","cy":"9","r":"2"},child:[]},{tag:"path",attr:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"},child:[]}]})(props);
}
/**
 * ImageDown icon from Lucide icons
 */
export function LuImageDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}},{tag:"path",attr:{d:"m14 19 3 3v-5.5"},child:[]},{tag:"path",attr:{d:"m17 22 3-3"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"9","r":"2"},child:[]}]})(props);
}
/**
 * ImageMinus icon from Lucide icons
 */
export function LuImageMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}},{tag:"line",attr:{"x1":"16","x2":"22","y1":"5","y2":"5"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"9","r":"2"},child:[]},{tag:"path",attr:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"},child:[]}]})(props);
}
/**
 * ImageOff icon from Lucide icons
 */
export function LuImageOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"}},{tag:"path",attr:{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"},child:[]},{tag:"line",attr:{"x1":"13.5","x2":"6","y1":"13.5","y2":"21"},child:[]},{tag:"line",attr:{"x1":"18","x2":"21","y1":"12","y2":"15"},child:[]},{tag:"path",attr:{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"},child:[]},{tag:"path",attr:{d:"M21 15V5a2 2 0 0 0-2-2H9"},child:[]}]})(props);
}
/**
 * ImagePlay icon from Lucide icons
 */
export function LuImagePlay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m11 16-5 5"}},{tag:"path",attr:{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"},child:[]},{tag:"path",attr:{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"9","r":"2"},child:[]}]})(props);
}
/**
 * ImagePlus icon from Lucide icons
 */
export function LuImagePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 5h6"}},{tag:"path",attr:{d:"M19 2v6"},child:[]},{tag:"path",attr:{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"},child:[]},{tag:"path",attr:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"9","r":"2"},child:[]}]})(props);
}
/**
 * ImageUp icon from Lucide icons
 */
export function LuImageUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}},{tag:"path",attr:{d:"m14 19.5 3-3 3 3"},child:[]},{tag:"path",attr:{d:"M17 22v-5.5"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"9","r":"2"},child:[]}]})(props);
}
/**
 * ImageUpscale icon from Lucide icons
 */
export function LuImageUpscale(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 3h5v5"}},{tag:"path",attr:{d:"M17 21h2a2 2 0 0 0 2-2"},child:[]},{tag:"path",attr:{d:"M21 12v3"},child:[]},{tag:"path",attr:{d:"m21 3-5 5"},child:[]},{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2"},child:[]},{tag:"path",attr:{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"},child:[]},{tag:"path",attr:{d:"M9 3h3"},child:[]},{tag:"rect",attr:{x:"3",y:"11","width":"10","height":"10","rx":"1"},child:[]}]})(props);
}
/**
 * Images icon from Lucide icons
 */
export function LuImages(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 22H4a2 2 0 0 1-2-2V6"}},{tag:"path",attr:{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"8","r":"2"},child:[]},{tag:"rect",attr:{"width":"16","height":"16",x:"6",y:"2","rx":"2"},child:[]}]})(props);
}
/**
 * Import icon from Lucide icons
 */
export function LuImport(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v12"}},{tag:"path",attr:{d:"m8 11 4 4 4-4"},child:[]},{tag:"path",attr:{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"},child:[]}]})(props);
}
/**
 * Inbox icon from Lucide icons
 */
export function LuInbox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"22 12 16 12 14 15 10 15 8 12 2 12"}},{tag:"path",attr:{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]}]})(props);
}
/**
 * IndentDecrease icon from Lucide icons
 */
export function LuIndentDecrease(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12H11"}},{tag:"path",attr:{d:"M21 18H11"},child:[]},{tag:"path",attr:{d:"M21 6H11"},child:[]},{tag:"path",attr:{d:"m7 8-4 4 4 4"},child:[]}]})(props);
}
/**
 * IndentIncrease icon from Lucide icons
 */
export function LuIndentIncrease(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12H11"}},{tag:"path",attr:{d:"M21 18H11"},child:[]},{tag:"path",attr:{d:"M21 6H11"},child:[]},{tag:"path",attr:{d:"m3 8 4 4-4 4"},child:[]}]})(props);
}
/**
 * IndianRupee icon from Lucide icons
 */
export function LuIndianRupee(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 3h12"}},{tag:"path",attr:{d:"M6 8h12"},child:[]},{tag:"path",attr:{d:"m6 13 8.5 8"},child:[]},{tag:"path",attr:{d:"M6 13h3"},child:[]},{tag:"path",attr:{d:"M9 13c6.667 0 6.667-10 0-10"},child:[]}]})(props);
}
/**
 * Infinity icon from Lucide icons
 */
export function LuInfinity(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"}}]})(props);
}
/**
 * Info icon from Lucide icons
 */
export function LuInfo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M12 16v-4"},child:[]},{tag:"path",attr:{d:"M12 8h.01"},child:[]}]})(props);
}
/**
 * InspectionPanel icon from Lucide icons
 */
export function LuInspectionPanel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M7 7h.01"},child:[]},{tag:"path",attr:{d:"M17 7h.01"},child:[]},{tag:"path",attr:{d:"M7 17h.01"},child:[]},{tag:"path",attr:{d:"M17 17h.01"},child:[]}]})(props);
}
/**
 * Instagram icon from Lucide icons
 */
export function LuInstagram(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"20",x:"2",y:"2","rx":"5","ry":"5"}},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{"x1":"17.5","x2":"17.51","y1":"6.5","y2":"6.5"},child:[]}]})(props);
}
/**
 * Italic icon from Lucide icons
 */
export function LuItalic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"19","x2":"10","y1":"4","y2":"4"}},{tag:"line",attr:{"x1":"14","x2":"5","y1":"20","y2":"20"},child:[]},{tag:"line",attr:{"x1":"15","x2":"9","y1":"4","y2":"20"},child:[]}]})(props);
}
/**
 * IterationCcw icon from Lucide icons
 */
export function LuIterationCcw(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}},{tag:"polyline",attr:{"points":"16 14 20 18 16 22"},child:[]}]})(props);
}
/**
 * IterationCw icon from Lucide icons
 */
export function LuIterationCw(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}},{tag:"polyline",attr:{"points":"8 22 4 18 8 14"},child:[]}]})(props);
}
/**
 * JapaneseYen icon from Lucide icons
 */
export function LuJapaneseYen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}},{tag:"path",attr:{d:"M6 15h12"},child:[]},{tag:"path",attr:{d:"M6 11h12"},child:[]}]})(props);
}
/**
 * Joystick icon from Lucide icons
 */
export function LuJoystick(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}},{tag:"path",attr:{d:"M6 15v-2"},child:[]},{tag:"path",attr:{d:"M12 15V9"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"6","r":"3"},child:[]}]})(props);
}
/**
 * Kanban icon from Lucide icons
 */
export function LuKanban(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 5v11"}},{tag:"path",attr:{d:"M12 5v6"},child:[]},{tag:"path",attr:{d:"M18 5v14"},child:[]}]})(props);
}
/**
 * Key icon from Lucide icons
 */
export function LuKey(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}},{tag:"path",attr:{d:"m21 2-9.6 9.6"},child:[]},{tag:"circle",attr:{"cx":"7.5","cy":"15.5","r":"5.5"},child:[]}]})(props);
}
/**
 * KeyRound icon from Lucide icons
 */
export function LuKeyRound(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}},{tag:"circle",attr:{"cx":"16.5","cy":"7.5","r":".5",fill:"currentColor"},child:[]}]})(props);
}
/**
 * KeySquare icon from Lucide icons
 */
export function LuKeySquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"}},{tag:"path",attr:{d:"m14 7 3 3"},child:[]},{tag:"path",attr:{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"},child:[]}]})(props);
}
/**
 * Keyboard icon from Lucide icons
 */
export function LuKeyboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 8h.01"}},{tag:"path",attr:{d:"M12 12h.01"},child:[]},{tag:"path",attr:{d:"M14 8h.01"},child:[]},{tag:"path",attr:{d:"M16 12h.01"},child:[]},{tag:"path",attr:{d:"M18 8h.01"},child:[]},{tag:"path",attr:{d:"M6 8h.01"},child:[]},{tag:"path",attr:{d:"M7 16h10"},child:[]},{tag:"path",attr:{d:"M8 12h.01"},child:[]},{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"},child:[]}]})(props);
}
/**
 * KeyboardMusic icon from Lucide icons
 */
export function LuKeyboardMusic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"}},{tag:"path",attr:{d:"M6 8h4"},child:[]},{tag:"path",attr:{d:"M14 8h.01"},child:[]},{tag:"path",attr:{d:"M18 8h.01"},child:[]},{tag:"path",attr:{d:"M2 12h20"},child:[]},{tag:"path",attr:{d:"M6 12v4"},child:[]},{tag:"path",attr:{d:"M10 12v4"},child:[]},{tag:"path",attr:{d:"M14 12v4"},child:[]},{tag:"path",attr:{d:"M18 12v4"},child:[]}]})(props);
}
/**
 * KeyboardOff icon from Lucide icons
 */
export function LuKeyboardOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M 20 4 A2 2 0 0 1 22 6"}},{tag:"path",attr:{d:"M 22 6 L 22 16.41"},child:[]},{tag:"path",attr:{d:"M 7 16 L 16 16"},child:[]},{tag:"path",attr:{d:"M 9.69 4 L 20 4"},child:[]},{tag:"path",attr:{d:"M14 8h.01"},child:[]},{tag:"path",attr:{d:"M18 8h.01"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"},child:[]},{tag:"path",attr:{d:"M6 8h.01"},child:[]},{tag:"path",attr:{d:"M8 12h.01"},child:[]}]})(props);
}
/**
 * Lamp icon from Lucide icons
 */
export function LuLamp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2h8l4 10H4L8 2Z"}},{tag:"path",attr:{d:"M12 12v6"},child:[]},{tag:"path",attr:{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"},child:[]}]})(props);
}
/**
 * LampCeiling icon from Lucide icons
 */
export function LuLampCeiling(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v5"}},{tag:"path",attr:{d:"M6 7h12l4 9H2l4-9Z"},child:[]},{tag:"path",attr:{d:"M9.17 16a3 3 0 1 0 5.66 0"},child:[]}]})(props);
}
/**
 * LampDesk icon from Lucide icons
 */
export function LuLampDesk(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m14 5-3 3 2 7 8-8-7-2Z"}},{tag:"path",attr:{d:"m14 5-3 3-3-3 3-3 3 3Z"},child:[]},{tag:"path",attr:{d:"M9.5 6.5 4 12l3 6"},child:[]},{tag:"path",attr:{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"},child:[]}]})(props);
}
/**
 * LampFloor icon from Lucide icons
 */
export function LuLampFloor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 2h6l3 7H6l3-7Z"}},{tag:"path",attr:{d:"M12 9v13"},child:[]},{tag:"path",attr:{d:"M9 22h6"},child:[]}]})(props);
}
/**
 * LampWallDown icon from Lucide icons
 */
export function LuLampWallDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 13h6l3 7H8l3-7Z"}},{tag:"path",attr:{d:"M14 13V8a2 2 0 0 0-2-2H8"},child:[]},{tag:"path",attr:{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"},child:[]}]})(props);
}
/**
 * LampWallUp icon from Lucide icons
 */
export function LuLampWallUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4h6l3 7H8l3-7Z"}},{tag:"path",attr:{d:"M14 11v5a2 2 0 0 1-2 2H8"},child:[]},{tag:"path",attr:{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"},child:[]}]})(props);
}
/**
 * LandPlot icon from Lucide icons
 */
export function LuLandPlot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 8 6-3-6-3v10"}},{tag:"path",attr:{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"},child:[]},{tag:"path",attr:{d:"m6.49 12.85 11.02 6.3"},child:[]},{tag:"path",attr:{d:"M17.51 12.85 6.5 19.15"},child:[]}]})(props);
}
/**
 * Landmark icon from Lucide icons
 */
export function LuLandmark(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"3","x2":"21","y1":"22","y2":"22"}},{tag:"line",attr:{"x1":"6","x2":"6","y1":"18","y2":"11"},child:[]},{tag:"line",attr:{"x1":"10","x2":"10","y1":"18","y2":"11"},child:[]},{tag:"line",attr:{"x1":"14","x2":"14","y1":"18","y2":"11"},child:[]},{tag:"line",attr:{"x1":"18","x2":"18","y1":"18","y2":"11"},child:[]},{tag:"polygon",attr:{"points":"12 2 20 7 4 7"},child:[]}]})(props);
}
/**
 * Languages icon from Lucide icons
 */
export function LuLanguages(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m5 8 6 6"}},{tag:"path",attr:{d:"m4 14 6-6 2-3"},child:[]},{tag:"path",attr:{d:"M2 5h12"},child:[]},{tag:"path",attr:{d:"M7 2h1"},child:[]},{tag:"path",attr:{d:"m22 22-5-10-5 10"},child:[]},{tag:"path",attr:{d:"M14 18h6"},child:[]}]})(props);
}
/**
 * Laptop icon from Lucide icons
 */
export function LuLaptop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"}}]})(props);
}
/**
 * LaptopMinimal icon from Lucide icons
 */
export function LuLaptopMinimal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"12",x:"3",y:"4","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"2","x2":"22","y1":"20","y2":"20"},child:[]}]})(props);
}
/**
 * LaptopMinimalCheck icon from Lucide icons
 */
export function LuLaptopMinimalCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 20h20"}},{tag:"path",attr:{d:"m9 10 2 2 4-4"},child:[]},{tag:"rect",attr:{x:"3",y:"4","width":"18","height":"12","rx":"2"},child:[]}]})(props);
}
/**
 * Lasso icon from Lucide icons
 */
export function LuLasso(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 22a5 5 0 0 1-2-4"}},{tag:"path",attr:{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"},child:[]},{tag:"path",attr:{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},child:[]}]})(props);
}
/**
 * LassoSelect icon from Lucide icons
 */
export function LuLassoSelect(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 22a5 5 0 0 1-2-4"}},{tag:"path",attr:{d:"M7 16.93c.96.43 1.96.74 2.99.91"},child:[]},{tag:"path",attr:{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"},child:[]},{tag:"path",attr:{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},child:[]},{tag:"path",attr:{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"},child:[]}]})(props);
}
/**
 * Laugh icon from Lucide icons
 */
export function LuLaugh(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"},child:[]},{tag:"line",attr:{"x1":"9","x2":"9.01","y1":"9","y2":"9"},child:[]},{tag:"line",attr:{"x1":"15","x2":"15.01","y1":"9","y2":"9"},child:[]}]})(props);
}
/**
 * Layers icon from Lucide icons
 */
export function LuLayers(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}},{tag:"path",attr:{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"},child:[]},{tag:"path",attr:{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"},child:[]}]})(props);
}
/**
 * Layers2 icon from Lucide icons
 */
export function LuLayers2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"}},{tag:"path",attr:{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"},child:[]}]})(props);
}
/**
 * Layers3 icon from Lucide icons
 */
export function LuLayers3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}},{tag:"path",attr:{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"},child:[]},{tag:"path",attr:{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"},child:[]}]})(props);
}
/**
 * LayoutDashboard icon from Lucide icons
 */
export function LuLayoutDashboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"7","height":"9",x:"3",y:"3","rx":"1"}},{tag:"rect",attr:{"width":"7","height":"5",x:"14",y:"3","rx":"1"},child:[]},{tag:"rect",attr:{"width":"7","height":"9",x:"14",y:"12","rx":"1"},child:[]},{tag:"rect",attr:{"width":"7","height":"5",x:"3",y:"16","rx":"1"},child:[]}]})(props);
}
/**
 * LayoutGrid icon from Lucide icons
 */
export function LuLayoutGrid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"7","height":"7",x:"3",y:"3","rx":"1"}},{tag:"rect",attr:{"width":"7","height":"7",x:"14",y:"3","rx":"1"},child:[]},{tag:"rect",attr:{"width":"7","height":"7",x:"14",y:"14","rx":"1"},child:[]},{tag:"rect",attr:{"width":"7","height":"7",x:"3",y:"14","rx":"1"},child:[]}]})(props);
}
/**
 * LayoutList icon from Lucide icons
 */
export function LuLayoutList(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"7","height":"7",x:"3",y:"3","rx":"1"}},{tag:"rect",attr:{"width":"7","height":"7",x:"3",y:"14","rx":"1"},child:[]},{tag:"path",attr:{d:"M14 4h7"},child:[]},{tag:"path",attr:{d:"M14 9h7"},child:[]},{tag:"path",attr:{d:"M14 15h7"},child:[]},{tag:"path",attr:{d:"M14 20h7"},child:[]}]})(props);
}
/**
 * LayoutPanelLeft icon from Lucide icons
 */
export function LuLayoutPanelLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"7","height":"18",x:"3",y:"3","rx":"1"}},{tag:"rect",attr:{"width":"7","height":"7",x:"14",y:"3","rx":"1"},child:[]},{tag:"rect",attr:{"width":"7","height":"7",x:"14",y:"14","rx":"1"},child:[]}]})(props);
}
/**
 * LayoutPanelTop icon from Lucide icons
 */
export function LuLayoutPanelTop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"7",x:"3",y:"3","rx":"1"}},{tag:"rect",attr:{"width":"7","height":"7",x:"3",y:"14","rx":"1"},child:[]},{tag:"rect",attr:{"width":"7","height":"7",x:"14",y:"14","rx":"1"},child:[]}]})(props);
}
/**
 * LayoutTemplate icon from Lucide icons
 */
export function LuLayoutTemplate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"7",x:"3",y:"3","rx":"1"}},{tag:"rect",attr:{"width":"9","height":"7",x:"3",y:"14","rx":"1"},child:[]},{tag:"rect",attr:{"width":"5","height":"7",x:"16",y:"14","rx":"1"},child:[]}]})(props);
}
/**
 * Leaf icon from Lucide icons
 */
export function LuLeaf(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}},{tag:"path",attr:{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"},child:[]}]})(props);
}
/**
 * LeafyGreen icon from Lucide icons
 */
export function LuLeafyGreen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}},{tag:"path",attr:{d:"M2 22 17 7"},child:[]}]})(props);
}
/**
 * Lectern icon from Lucide icons
 */
export function LuLectern(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"}},{tag:"path",attr:{d:"M18 6V3a1 1 0 0 0-1-1h-3"},child:[]},{tag:"rect",attr:{"width":"8","height":"12",x:"8",y:"10","rx":"1"},child:[]}]})(props);
}
/**
 * LetterText icon from Lucide icons
 */
export function LuLetterText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 12h6"}},{tag:"path",attr:{d:"M15 6h6"},child:[]},{tag:"path",attr:{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"},child:[]},{tag:"path",attr:{d:"M3 18h18"},child:[]},{tag:"path",attr:{d:"M4 11h6"},child:[]}]})(props);
}
/**
 * Library icon from Lucide icons
 */
export function LuLibrary(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16 6 4 14"}},{tag:"path",attr:{d:"M12 6v14"},child:[]},{tag:"path",attr:{d:"M8 8v12"},child:[]},{tag:"path",attr:{d:"M4 4v16"},child:[]}]})(props);
}
/**
 * LibraryBig icon from Lucide icons
 */
export function LuLibraryBig(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"18",x:"3",y:"3","rx":"1"}},{tag:"path",attr:{d:"M7 3v18"},child:[]},{tag:"path",attr:{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"},child:[]}]})(props);
}
/**
 * LifeBuoy icon from Lucide icons
 */
export function LuLifeBuoy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m4.93 4.93 4.24 4.24"},child:[]},{tag:"path",attr:{d:"m14.83 9.17 4.24-4.24"},child:[]},{tag:"path",attr:{d:"m14.83 14.83 4.24 4.24"},child:[]},{tag:"path",attr:{d:"m9.17 14.83-4.24 4.24"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"},child:[]}]})(props);
}
/**
 * Ligature icon from Lucide icons
 */
export function LuLigature(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}},{tag:"path",attr:{d:"M6 12h4"},child:[]},{tag:"path",attr:{d:"M14 12h2v8"},child:[]},{tag:"path",attr:{d:"M6 20h4"},child:[]},{tag:"path",attr:{d:"M14 20h4"},child:[]}]})(props);
}
/**
 * Lightbulb icon from Lucide icons
 */
export function LuLightbulb(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}},{tag:"path",attr:{d:"M9 18h6"},child:[]},{tag:"path",attr:{d:"M10 22h4"},child:[]}]})(props);
}
/**
 * LightbulbOff icon from Lucide icons
 */
export function LuLightbulbOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"},child:[]},{tag:"path",attr:{d:"M9 18h6"},child:[]},{tag:"path",attr:{d:"M10 22h4"},child:[]}]})(props);
}
/**
 * Link icon from Lucide icons
 */
export function LuLink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(props);
}
/**
 * Link2 icon from Lucide icons
 */
export function LuLink2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 17H7A5 5 0 0 1 7 7h2"}},{tag:"path",attr:{d:"M15 7h2a5 5 0 1 1 0 10h-2"},child:[]},{tag:"line",attr:{"x1":"8","x2":"16","y1":"12","y2":"12"},child:[]}]})(props);
}
/**
 * Link2Off icon from Lucide icons
 */
export function LuLink2Off(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 17H7A5 5 0 0 1 7 7"}},{tag:"path",attr:{d:"M15 7h2a5 5 0 0 1 4 8"},child:[]},{tag:"line",attr:{"x1":"8","x2":"12","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Linkedin icon from Lucide icons
 */
export function LuLinkedin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{"width":"4","height":"12",x:"2",y:"9"},child:[]},{tag:"circle",attr:{"cx":"4","cy":"4","r":"2"},child:[]}]})(props);
}
/**
 * List icon from Lucide icons
 */
export function LuList(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12h.01"}},{tag:"path",attr:{d:"M3 18h.01"},child:[]},{tag:"path",attr:{d:"M3 6h.01"},child:[]},{tag:"path",attr:{d:"M8 12h13"},child:[]},{tag:"path",attr:{d:"M8 18h13"},child:[]},{tag:"path",attr:{d:"M8 6h13"},child:[]}]})(props);
}
/**
 * ListCheck icon from Lucide icons
 */
export function LuListCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 18H3"}},{tag:"path",attr:{d:"m15 18 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M16 12H3"},child:[]},{tag:"path",attr:{d:"M16 6H3"},child:[]}]})(props);
}
/**
 * ListChecks icon from Lucide icons
 */
export function LuListChecks(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"}},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(props);
}
/**
 * ListCollapse icon from Lucide icons
 */
export function LuListCollapse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 10 2.5-2.5L3 5"}},{tag:"path",attr:{d:"m3 19 2.5-2.5L3 14"},child:[]},{tag:"path",attr:{d:"M10 6h11"},child:[]},{tag:"path",attr:{d:"M10 12h11"},child:[]},{tag:"path",attr:{d:"M10 18h11"},child:[]}]})(props);
}
/**
 * ListEnd icon from Lucide icons
 */
export function LuListEnd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 12H3"}},{tag:"path",attr:{d:"M16 6H3"},child:[]},{tag:"path",attr:{d:"M10 18H3"},child:[]},{tag:"path",attr:{d:"M21 6v10a2 2 0 0 1-2 2h-5"},child:[]},{tag:"path",attr:{d:"m16 16-2 2 2 2"},child:[]}]})(props);
}
/**
 * ListFilter icon from Lucide icons
 */
export function LuListFilter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"}},{tag:"path",attr:{d:"M7 12h10"},child:[]},{tag:"path",attr:{d:"M10 18h4"},child:[]}]})(props);
}
/**
 * ListMinus icon from Lucide icons
 */
export function LuListMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 12H3"}},{tag:"path",attr:{d:"M16 6H3"},child:[]},{tag:"path",attr:{d:"M16 18H3"},child:[]},{tag:"path",attr:{d:"M21 12h-6"},child:[]}]})(props);
}
/**
 * ListMusic icon from Lucide icons
 */
export function LuListMusic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15V6"}},{tag:"path",attr:{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"},child:[]},{tag:"path",attr:{d:"M12 12H3"},child:[]},{tag:"path",attr:{d:"M16 6H3"},child:[]},{tag:"path",attr:{d:"M12 18H3"},child:[]}]})(props);
}
/**
 * ListOrdered icon from Lucide icons
 */
export function LuListOrdered(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 12h11"}},{tag:"path",attr:{d:"M10 18h11"},child:[]},{tag:"path",attr:{d:"M10 6h11"},child:[]},{tag:"path",attr:{d:"M4 10h2"},child:[]},{tag:"path",attr:{d:"M4 6h1v4"},child:[]},{tag:"path",attr:{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"},child:[]}]})(props);
}
/**
 * ListPlus icon from Lucide icons
 */
export function LuListPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 12H3"}},{tag:"path",attr:{d:"M16 6H3"},child:[]},{tag:"path",attr:{d:"M16 18H3"},child:[]},{tag:"path",attr:{d:"M18 9v6"},child:[]},{tag:"path",attr:{d:"M21 12h-6"},child:[]}]})(props);
}
/**
 * ListRestart icon from Lucide icons
 */
export function LuListRestart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 6H3"}},{tag:"path",attr:{d:"M7 12H3"},child:[]},{tag:"path",attr:{d:"M7 18H3"},child:[]},{tag:"path",attr:{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"},child:[]},{tag:"path",attr:{d:"M11 10v4h4"},child:[]}]})(props);
}
/**
 * ListStart icon from Lucide icons
 */
export function LuListStart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 12H3"}},{tag:"path",attr:{d:"M16 18H3"},child:[]},{tag:"path",attr:{d:"M10 6H3"},child:[]},{tag:"path",attr:{d:"M21 18V8a2 2 0 0 0-2-2h-5"},child:[]},{tag:"path",attr:{d:"m16 8-2-2 2-2"},child:[]}]})(props);
}
/**
 * ListTodo icon from Lucide icons
 */
export function LuListTodo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"5","width":"6","height":"6","rx":"1"}},{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(props);
}
/**
 * ListTree icon from Lucide icons
 */
export function LuListTree(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12h-8"}},{tag:"path",attr:{d:"M21 6H8"},child:[]},{tag:"path",attr:{d:"M21 18h-8"},child:[]},{tag:"path",attr:{d:"M3 6v4c0 1.1.9 2 2 2h3"},child:[]},{tag:"path",attr:{d:"M3 10v6c0 1.1.9 2 2 2h3"},child:[]}]})(props);
}
/**
 * ListVideo icon from Lucide icons
 */
export function LuListVideo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12H3"}},{tag:"path",attr:{d:"M16 6H3"},child:[]},{tag:"path",attr:{d:"M12 18H3"},child:[]},{tag:"path",attr:{d:"m16 12 5 3-5 3v-6Z"},child:[]}]})(props);
}
/**
 * ListX icon from Lucide icons
 */
export function LuListX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 12H3"}},{tag:"path",attr:{d:"M16 6H3"},child:[]},{tag:"path",attr:{d:"M16 18H3"},child:[]},{tag:"path",attr:{d:"m19 10-4 4"},child:[]},{tag:"path",attr:{d:"m15 10 4 4"},child:[]}]})(props);
}
/**
 * Loader icon from Lucide icons
 */
export function LuLoader(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v4"}},{tag:"path",attr:{d:"m16.2 7.8 2.9-2.9"},child:[]},{tag:"path",attr:{d:"M18 12h4"},child:[]},{tag:"path",attr:{d:"m16.2 16.2 2.9 2.9"},child:[]},{tag:"path",attr:{d:"M12 18v4"},child:[]},{tag:"path",attr:{d:"m4.9 19.1 2.9-2.9"},child:[]},{tag:"path",attr:{d:"M2 12h4"},child:[]},{tag:"path",attr:{d:"m4.9 4.9 2.9 2.9"},child:[]}]})(props);
}
/**
 * LoaderCircle icon from Lucide icons
 */
export function LuLoaderCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12a9 9 0 1 1-6.219-8.56"}}]})(props);
}
/**
 * LoaderPinwheel icon from Lucide icons
 */
export function LuLoaderPinwheel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"}},{tag:"path",attr:{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"},child:[]},{tag:"path",attr:{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"},child:[]}]})(props);
}
/**
 * Locate icon from Lucide icons
 */
export function LuLocate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"2","x2":"5","y1":"12","y2":"12"}},{tag:"line",attr:{"x1":"19","x2":"22","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"2","y2":"5"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"19","y2":"22"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"7"},child:[]}]})(props);
}
/**
 * LocateFixed icon from Lucide icons
 */
export function LuLocateFixed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"2","x2":"5","y1":"12","y2":"12"}},{tag:"line",attr:{"x1":"19","x2":"22","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"2","y2":"5"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"19","y2":"22"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"7"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]}]})(props);
}
/**
 * LocateOff icon from Lucide icons
 */
export function LuLocateOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"2","x2":"5","y1":"12","y2":"12"}},{tag:"line",attr:{"x1":"19","x2":"22","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"2","y2":"5"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"19","y2":"22"},child:[]},{tag:"path",attr:{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"},child:[]},{tag:"path",attr:{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Lock icon from Lucide icons
 */
export function LuLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"11",x:"3",y:"11","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(props);
}
/**
 * LockKeyhole icon from Lucide icons
 */
export function LuLockKeyhole(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"16","r":"1"}},{tag:"rect",attr:{x:"3",y:"10","width":"18","height":"12","rx":"2"},child:[]},{tag:"path",attr:{d:"M7 10V7a5 5 0 0 1 10 0v3"},child:[]}]})(props);
}
/**
 * LockKeyholeOpen icon from Lucide icons
 */
export function LuLockKeyholeOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"16","r":"1"}},{tag:"rect",attr:{"width":"18","height":"12",x:"3",y:"10","rx":"2"},child:[]},{tag:"path",attr:{d:"M7 10V7a5 5 0 0 1 9.33-2.5"},child:[]}]})(props);
}
/**
 * LockOpen icon from Lucide icons
 */
export function LuLockOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"11",x:"3",y:"11","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 9.9-1"},child:[]}]})(props);
}
/**
 * LogIn icon from Lucide icons
 */
export function LuLogIn(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}},{tag:"polyline",attr:{"points":"10 17 15 12 10 7"},child:[]},{tag:"line",attr:{"x1":"15","x2":"3","y1":"12","y2":"12"},child:[]}]})(props);
}
/**
 * LogOut icon from Lucide icons
 */
export function LuLogOut(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{"points":"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{"x1":"21","x2":"9","y1":"12","y2":"12"},child:[]}]})(props);
}
/**
 * Logs icon from Lucide icons
 */
export function LuLogs(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 12h8"}},{tag:"path",attr:{d:"M13 18h8"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M3 12h1"},child:[]},{tag:"path",attr:{d:"M3 18h1"},child:[]},{tag:"path",attr:{d:"M3 6h1"},child:[]},{tag:"path",attr:{d:"M8 12h1"},child:[]},{tag:"path",attr:{d:"M8 18h1"},child:[]},{tag:"path",attr:{d:"M8 6h1"},child:[]}]})(props);
}
/**
 * Lollipop icon from Lucide icons
 */
export function LuLollipop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"11","cy":"11","r":"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]},{tag:"path",attr:{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"},child:[]}]})(props);
}
/**
 * Luggage icon from Lucide icons
 */
export function LuLuggage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}},{tag:"path",attr:{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"},child:[]},{tag:"path",attr:{d:"M10 20h4"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"20","r":"2"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"20","r":"2"},child:[]}]})(props);
}
/**
 * Magnet icon from Lucide icons
 */
export function LuMagnet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}},{tag:"path",attr:{d:"m5 8 4 4"},child:[]},{tag:"path",attr:{d:"m12 15 4 4"},child:[]}]})(props);
}
/**
 * Mail icon from Lucide icons
 */
export function LuMail(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"}},{tag:"path",attr:{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"},child:[]}]})(props);
}
/**
 * MailCheck icon from Lucide icons
 */
export function LuMailCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}},{tag:"path",attr:{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"},child:[]},{tag:"path",attr:{d:"m16 19 2 2 4-4"},child:[]}]})(props);
}
/**
 * MailMinus icon from Lucide icons
 */
export function LuMailMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}},{tag:"path",attr:{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"},child:[]},{tag:"path",attr:{d:"M16 19h6"},child:[]}]})(props);
}
/**
 * MailOpen icon from Lucide icons
 */
export function LuMailOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}},{tag:"path",attr:{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"},child:[]}]})(props);
}
/**
 * MailPlus icon from Lucide icons
 */
export function LuMailPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}},{tag:"path",attr:{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"},child:[]},{tag:"path",attr:{d:"M19 16v6"},child:[]},{tag:"path",attr:{d:"M16 19h6"},child:[]}]})(props);
}
/**
 * MailQuestion icon from Lucide icons
 */
export function LuMailQuestion(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}},{tag:"path",attr:{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"},child:[]},{tag:"path",attr:{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"},child:[]},{tag:"path",attr:{d:"M20 22v.01"},child:[]}]})(props);
}
/**
 * MailSearch icon from Lucide icons
 */
export function LuMailSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}},{tag:"path",attr:{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"},child:[]},{tag:"path",attr:{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"m22 22-1.5-1.5"},child:[]}]})(props);
}
/**
 * MailWarning icon from Lucide icons
 */
export function LuMailWarning(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}},{tag:"path",attr:{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"},child:[]},{tag:"path",attr:{d:"M20 14v4"},child:[]},{tag:"path",attr:{d:"M20 22v.01"},child:[]}]})(props);
}
/**
 * MailX icon from Lucide icons
 */
export function LuMailX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}},{tag:"path",attr:{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"},child:[]},{tag:"path",attr:{d:"m17 17 4 4"},child:[]},{tag:"path",attr:{d:"m21 17-4 4"},child:[]}]})(props);
}
/**
 * Mailbox icon from Lucide icons
 */
export function LuMailbox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}},{tag:"polyline",attr:{"points":"15,9 18,9 18,11"},child:[]},{tag:"path",attr:{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"},child:[]},{tag:"line",attr:{"x1":"6","x2":"7","y1":"10","y2":"10"},child:[]}]})(props);
}
/**
 * Mails icon from Lucide icons
 */
export function LuMails(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"13",x:"6",y:"4","rx":"2"}},{tag:"path",attr:{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"},child:[]},{tag:"path",attr:{d:"M2 8v11c0 1.1.9 2 2 2h14"},child:[]}]})(props);
}
/**
 * Map icon from Lucide icons
 */
export function LuMap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}},{tag:"path",attr:{d:"M15 5.764v15"},child:[]},{tag:"path",attr:{d:"M9 3.236v15"},child:[]}]})(props);
}
/**
 * MapPin icon from Lucide icons
 */
export function LuMapPin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}},{tag:"circle",attr:{"cx":"12","cy":"10","r":"3"},child:[]}]})(props);
}
/**
 * MapPinCheck icon from Lucide icons
 */
export function LuMapPinCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"}},{tag:"circle",attr:{"cx":"12","cy":"10","r":"3"},child:[]},{tag:"path",attr:{d:"m16 18 2 2 4-4"},child:[]}]})(props);
}
/**
 * MapPinCheckInside icon from Lucide icons
 */
export function LuMapPinCheckInside(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}},{tag:"path",attr:{d:"m9 10 2 2 4-4"},child:[]}]})(props);
}
/**
 * MapPinHouse icon from Lucide icons
 */
export function LuMapPinHouse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"}},{tag:"path",attr:{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"},child:[]},{tag:"path",attr:{d:"M18 22v-3"},child:[]},{tag:"circle",attr:{"cx":"10","cy":"10","r":"3"},child:[]}]})(props);
}
/**
 * MapPinMinus icon from Lucide icons
 */
export function LuMapPinMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}},{tag:"circle",attr:{"cx":"12","cy":"10","r":"3"},child:[]},{tag:"path",attr:{d:"M16 18h6"},child:[]}]})(props);
}
/**
 * MapPinMinusInside icon from Lucide icons
 */
export function LuMapPinMinusInside(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}},{tag:"path",attr:{d:"M9 10h6"},child:[]}]})(props);
}
/**
 * MapPinOff icon from Lucide icons
 */
export function LuMapPinOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16"}},{tag:"path",attr:{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"},child:[]},{tag:"path",attr:{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74"},child:[]}]})(props);
}
/**
 * MapPinPlus icon from Lucide icons
 */
export function LuMapPinPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}},{tag:"circle",attr:{"cx":"12","cy":"10","r":"3"},child:[]},{tag:"path",attr:{d:"M16 18h6"},child:[]},{tag:"path",attr:{d:"M19 15v6"},child:[]}]})(props);
}
/**
 * MapPinPlusInside icon from Lucide icons
 */
export function LuMapPinPlusInside(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}},{tag:"path",attr:{d:"M12 7v6"},child:[]},{tag:"path",attr:{d:"M9 10h6"},child:[]}]})(props);
}
/**
 * MapPinX icon from Lucide icons
 */
export function LuMapPinX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"}},{tag:"circle",attr:{"cx":"12","cy":"10","r":"3"},child:[]},{tag:"path",attr:{d:"m21.5 15.5-5 5"},child:[]},{tag:"path",attr:{d:"m21.5 20.5-5-5"},child:[]}]})(props);
}
/**
 * MapPinXInside icon from Lucide icons
 */
export function LuMapPinXInside(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}},{tag:"path",attr:{d:"m14.5 7.5-5 5"},child:[]},{tag:"path",attr:{d:"m9.5 7.5 5 5"},child:[]}]})(props);
}
/**
 * MapPinned icon from Lucide icons
 */
export function LuMapPinned(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"}},{tag:"circle",attr:{"cx":"12","cy":"8","r":"2"},child:[]},{tag:"path",attr:{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"},child:[]}]})(props);
}
/**
 * Martini icon from Lucide icons
 */
export function LuMartini(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 22h8"}},{tag:"path",attr:{d:"M12 11v11"},child:[]},{tag:"path",attr:{d:"m19 3-7 8-7-8Z"},child:[]}]})(props);
}
/**
 * Maximize icon from Lucide icons
 */
export function LuMaximize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M21 8V5a2 2 0 0 0-2-2h-3"},child:[]},{tag:"path",attr:{d:"M3 16v3a2 2 0 0 0 2 2h3"},child:[]},{tag:"path",attr:{d:"M16 21h3a2 2 0 0 0 2-2v-3"},child:[]}]})(props);
}
/**
 * Maximize2 icon from Lucide icons
 */
export function LuMaximize2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"15 3 21 3 21 9"}},{tag:"polyline",attr:{"points":"9 21 3 21 3 15"},child:[]},{tag:"line",attr:{"x1":"21","x2":"14","y1":"3","y2":"10"},child:[]},{tag:"line",attr:{"x1":"3","x2":"10","y1":"21","y2":"14"},child:[]}]})(props);
}
/**
 * Medal icon from Lucide icons
 */
export function LuMedal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}},{tag:"path",attr:{d:"M11 12 5.12 2.2"},child:[]},{tag:"path",attr:{d:"m13 12 5.88-9.8"},child:[]},{tag:"path",attr:{d:"M8 7h8"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"17","r":"5"},child:[]},{tag:"path",attr:{d:"M12 18v-2h-.5"},child:[]}]})(props);
}
/**
 * Megaphone icon from Lucide icons
 */
export function LuMegaphone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 11 18-5v12L3 14v-3z"}},{tag:"path",attr:{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"},child:[]}]})(props);
}
/**
 * MegaphoneOff icon from Lucide icons
 */
export function LuMegaphoneOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9.26 9.26 3 11v3l14.14 3.14"}},{tag:"path",attr:{d:"M21 15.34V6l-7.31 2.03"},child:[]},{tag:"path",attr:{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Meh icon from Lucide icons
 */
export function LuMeh(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"line",attr:{"x1":"8","x2":"16","y1":"15","y2":"15"},child:[]},{tag:"line",attr:{"x1":"9","x2":"9.01","y1":"9","y2":"9"},child:[]},{tag:"line",attr:{"x1":"15","x2":"15.01","y1":"9","y2":"9"},child:[]}]})(props);
}
/**
 * MemoryStick icon from Lucide icons
 */
export function LuMemoryStick(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 19v-3"}},{tag:"path",attr:{d:"M10 19v-3"},child:[]},{tag:"path",attr:{d:"M14 19v-3"},child:[]},{tag:"path",attr:{d:"M18 19v-3"},child:[]},{tag:"path",attr:{d:"M8 11V9"},child:[]},{tag:"path",attr:{d:"M16 11V9"},child:[]},{tag:"path",attr:{d:"M12 11V9"},child:[]},{tag:"path",attr:{d:"M2 15h20"},child:[]},{tag:"path",attr:{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"},child:[]}]})(props);
}
/**
 * Menu icon from Lucide icons
 */
export function LuMenu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"4","x2":"20","y1":"12","y2":"12"}},{tag:"line",attr:{"x1":"4","x2":"20","y1":"6","y2":"6"},child:[]},{tag:"line",attr:{"x1":"4","x2":"20","y1":"18","y2":"18"},child:[]}]})(props);
}
/**
 * Merge icon from Lucide icons
 */
export function LuMerge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m8 6 4-4 4 4"}},{tag:"path",attr:{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"},child:[]},{tag:"path",attr:{d:"m20 22-5-5"},child:[]}]})(props);
}
/**
 * MessageCircle icon from Lucide icons
 */
export function LuMessageCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}}]})(props);
}
/**
 * MessageCircleCode icon from Lucide icons
 */
export function LuMessageCircleCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 9.5 8 12l2 2.5"}},{tag:"path",attr:{d:"m14 9.5 2 2.5-2 2.5"},child:[]},{tag:"path",attr:{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z"},child:[]}]})(props);
}
/**
 * MessageCircleDashed icon from Lucide icons
 */
export function LuMessageCircleDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"}},{tag:"path",attr:{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"},child:[]},{tag:"path",attr:{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"},child:[]},{tag:"path",attr:{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"},child:[]},{tag:"path",attr:{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"},child:[]},{tag:"path",attr:{d:"M3.5 17.5 2 22l4.5-1.5"},child:[]},{tag:"path",attr:{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"},child:[]},{tag:"path",attr:{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"},child:[]}]})(props);
}
/**
 * MessageCircleHeart icon from Lucide icons
 */
export function LuMessageCircleHeart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}},{tag:"path",attr:{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"},child:[]}]})(props);
}
/**
 * MessageCircleMore icon from Lucide icons
 */
export function LuMessageCircleMore(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}},{tag:"path",attr:{d:"M8 12h.01"},child:[]},{tag:"path",attr:{d:"M12 12h.01"},child:[]},{tag:"path",attr:{d:"M16 12h.01"},child:[]}]})(props);
}
/**
 * MessageCircleOff icon from Lucide icons
 */
export function LuMessageCircleOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5"}},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"},child:[]}]})(props);
}
/**
 * MessageCirclePlus icon from Lucide icons
 */
export function LuMessageCirclePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"M12 8v8"},child:[]}]})(props);
}
/**
 * MessageCircleQuestion icon from Lucide icons
 */
export function LuMessageCircleQuestion(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(props);
}
/**
 * MessageCircleReply icon from Lucide icons
 */
export function LuMessageCircleReply(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}},{tag:"path",attr:{d:"m10 15-3-3 3-3"},child:[]},{tag:"path",attr:{d:"M7 12h7a2 2 0 0 1 2 2v1"},child:[]}]})(props);
}
/**
 * MessageCircleWarning icon from Lucide icons
 */
export function LuMessageCircleWarning(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}},{tag:"path",attr:{d:"M12 8v4"},child:[]},{tag:"path",attr:{d:"M12 16h.01"},child:[]}]})(props);
}
/**
 * MessageCircleX icon from Lucide icons
 */
export function LuMessageCircleX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}},{tag:"path",attr:{d:"m15 9-6 6"},child:[]},{tag:"path",attr:{d:"m9 9 6 6"},child:[]}]})(props);
}
/**
 * MessageSquare icon from Lucide icons
 */
export function LuMessageSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}}]})(props);
}
/**
 * MessageSquareCode icon from Lucide icons
 */
export function LuMessageSquareCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 7.5 8 10l2 2.5"}},{tag:"path",attr:{d:"m14 7.5 2 2.5-2 2.5"},child:[]},{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(props);
}
/**
 * MessageSquareDashed icon from Lucide icons
 */
export function LuMessageSquareDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 17H7l-4 4v-7"}},{tag:"path",attr:{d:"M14 17h1"},child:[]},{tag:"path",attr:{d:"M14 3h1"},child:[]},{tag:"path",attr:{d:"M19 3a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M21 14v1a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"M21 9v1"},child:[]},{tag:"path",attr:{d:"M3 9v1"},child:[]},{tag:"path",attr:{d:"M5 3a2 2 0 0 0-2 2"},child:[]},{tag:"path",attr:{d:"M9 3h1"},child:[]}]})(props);
}
/**
 * MessageSquareDiff icon from Lucide icons
 */
export function LuMessageSquareDiff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}},{tag:"path",attr:{d:"M9 10h6"},child:[]},{tag:"path",attr:{d:"M12 7v6"},child:[]},{tag:"path",attr:{d:"M9 17h6"},child:[]}]})(props);
}
/**
 * MessageSquareDot icon from Lucide icons
 */
export function LuMessageSquareDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"}},{tag:"circle",attr:{"cx":"18","cy":"6","r":"3"},child:[]}]})(props);
}
/**
 * MessageSquareHeart icon from Lucide icons
 */
export function LuMessageSquareHeart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}},{tag:"path",attr:{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"},child:[]}]})(props);
}
/**
 * MessageSquareLock icon from Lucide icons
 */
export function LuMessageSquareLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 15v-2a2 2 0 1 0-4 0v2"}},{tag:"path",attr:{d:"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5"},child:[]},{tag:"rect",attr:{x:"13",y:"15","width":"8","height":"5","rx":"1"},child:[]}]})(props);
}
/**
 * MessageSquareMore icon from Lucide icons
 */
export function LuMessageSquareMore(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}},{tag:"path",attr:{d:"M8 10h.01"},child:[]},{tag:"path",attr:{d:"M12 10h.01"},child:[]},{tag:"path",attr:{d:"M16 10h.01"},child:[]}]})(props);
}
/**
 * MessageSquareOff icon from Lucide icons
 */
export function LuMessageSquareOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15V5a2 2 0 0 0-2-2H9"}},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"},child:[]}]})(props);
}
/**
 * MessageSquarePlus icon from Lucide icons
 */
export function LuMessageSquarePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}},{tag:"path",attr:{d:"M12 7v6"},child:[]},{tag:"path",attr:{d:"M9 10h6"},child:[]}]})(props);
}
/**
 * MessageSquareQuote icon from Lucide icons
 */
export function LuMessageSquareQuote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}},{tag:"path",attr:{d:"M8 12a2 2 0 0 0 2-2V8H8"},child:[]},{tag:"path",attr:{d:"M14 12a2 2 0 0 0 2-2V8h-2"},child:[]}]})(props);
}
/**
 * MessageSquareReply icon from Lucide icons
 */
export function LuMessageSquareReply(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}},{tag:"path",attr:{d:"m10 7-3 3 3 3"},child:[]},{tag:"path",attr:{d:"M17 13v-1a2 2 0 0 0-2-2H7"},child:[]}]})(props);
}
/**
 * MessageSquareShare icon from Lucide icons
 */
export function LuMessageSquareShare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"}},{tag:"path",attr:{d:"M16 3h5v5"},child:[]},{tag:"path",attr:{d:"m16 8 5-5"},child:[]}]})(props);
}
/**
 * MessageSquareText icon from Lucide icons
 */
export function LuMessageSquareText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}},{tag:"path",attr:{d:"M13 8H7"},child:[]},{tag:"path",attr:{d:"M17 12H7"},child:[]}]})(props);
}
/**
 * MessageSquareWarning icon from Lucide icons
 */
export function LuMessageSquareWarning(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}},{tag:"path",attr:{d:"M12 7v2"},child:[]},{tag:"path",attr:{d:"M12 13h.01"},child:[]}]})(props);
}
/**
 * MessageSquareX icon from Lucide icons
 */
export function LuMessageSquareX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}},{tag:"path",attr:{d:"m14.5 7.5-5 5"},child:[]},{tag:"path",attr:{d:"m9.5 7.5 5 5"},child:[]}]})(props);
}
/**
 * MessagesSquare icon from Lucide icons
 */
export function LuMessagesSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"}},{tag:"path",attr:{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"},child:[]}]})(props);
}
/**
 * Mic icon from Lucide icons
 */
export function LuMic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}},{tag:"path",attr:{d:"M19 10v2a7 7 0 0 1-14 0v-2"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"19","y2":"22"},child:[]}]})(props);
}
/**
 * MicOff icon from Lucide icons
 */
export function LuMicOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"}},{tag:"path",attr:{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"},child:[]},{tag:"path",attr:{d:"M5 10v2a7 7 0 0 0 12 5"},child:[]},{tag:"path",attr:{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"},child:[]},{tag:"path",attr:{d:"M9 9v3a3 3 0 0 0 5.12 2.12"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"19","y2":"22"},child:[]}]})(props);
}
/**
 * MicVocal icon from Lucide icons
 */
export function LuMicVocal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"}},{tag:"path",attr:{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"7","r":"5"},child:[]}]})(props);
}
/**
 * Microchip icon from Lucide icons
 */
export function LuMicrochip(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 12h2"}},{tag:"path",attr:{d:"M18 16h2"},child:[]},{tag:"path",attr:{d:"M18 20h2"},child:[]},{tag:"path",attr:{d:"M18 4h2"},child:[]},{tag:"path",attr:{d:"M18 8h2"},child:[]},{tag:"path",attr:{d:"M4 12h2"},child:[]},{tag:"path",attr:{d:"M4 16h2"},child:[]},{tag:"path",attr:{d:"M4 20h2"},child:[]},{tag:"path",attr:{d:"M4 4h2"},child:[]},{tag:"path",attr:{d:"M4 8h2"},child:[]},{tag:"path",attr:{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"},child:[]}]})(props);
}
/**
 * Microscope icon from Lucide icons
 */
export function LuMicroscope(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 18h8"}},{tag:"path",attr:{d:"M3 22h18"},child:[]},{tag:"path",attr:{d:"M14 22a7 7 0 1 0 0-14h-1"},child:[]},{tag:"path",attr:{d:"M9 14h2"},child:[]},{tag:"path",attr:{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"},child:[]},{tag:"path",attr:{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"},child:[]}]})(props);
}
/**
 * Microwave icon from Lucide icons
 */
export function LuMicrowave(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"15",x:"2",y:"4","rx":"2"}},{tag:"rect",attr:{"width":"8","height":"7",x:"6",y:"8","rx":"1"},child:[]},{tag:"path",attr:{d:"M18 8v7"},child:[]},{tag:"path",attr:{d:"M6 19v2"},child:[]},{tag:"path",attr:{d:"M18 19v2"},child:[]}]})(props);
}
/**
 * Milestone icon from Lucide icons
 */
export function LuMilestone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13v8"}},{tag:"path",attr:{d:"M12 3v3"},child:[]},{tag:"path",attr:{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"},child:[]}]})(props);
}
/**
 * Milk icon from Lucide icons
 */
export function LuMilk(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2h8"}},{tag:"path",attr:{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"},child:[]},{tag:"path",attr:{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"},child:[]}]})(props);
}
/**
 * MilkOff icon from Lucide icons
 */
export function LuMilkOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2h8"}},{tag:"path",attr:{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"},child:[]},{tag:"path",attr:{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Minimize icon from Lucide icons
 */
export function LuMinimize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3v3a2 2 0 0 1-2 2H3"}},{tag:"path",attr:{d:"M21 8h-3a2 2 0 0 1-2-2V3"},child:[]},{tag:"path",attr:{d:"M3 16h3a2 2 0 0 1 2 2v3"},child:[]},{tag:"path",attr:{d:"M16 21v-3a2 2 0 0 1 2-2h3"},child:[]}]})(props);
}
/**
 * Minimize2 icon from Lucide icons
 */
export function LuMinimize2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"4 14 10 14 10 20"}},{tag:"polyline",attr:{"points":"20 10 14 10 14 4"},child:[]},{tag:"line",attr:{"x1":"14","x2":"21","y1":"10","y2":"3"},child:[]},{tag:"line",attr:{"x1":"3","x2":"10","y1":"21","y2":"14"},child:[]}]})(props);
}
/**
 * Minus icon from Lucide icons
 */
export function LuMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"}}]})(props);
}
/**
 * Monitor icon from Lucide icons
 */
export function LuMonitor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"3","rx":"2"}},{tag:"line",attr:{"x1":"8","x2":"16","y1":"21","y2":"21"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"17","y2":"21"},child:[]}]})(props);
}
/**
 * MonitorCheck icon from Lucide icons
 */
export function LuMonitorCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 10 2 2 4-4"}},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]}]})(props);
}
/**
 * MonitorCog icon from Lucide icons
 */
export function LuMonitorCog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17v4"}},{tag:"path",attr:{d:"m15.2 4.9-.9-.4"},child:[]},{tag:"path",attr:{d:"m15.2 7.1-.9.4"},child:[]},{tag:"path",attr:{d:"m16.9 3.2-.4-.9"},child:[]},{tag:"path",attr:{d:"m16.9 8.8-.4.9"},child:[]},{tag:"path",attr:{d:"m19.5 2.3-.4.9"},child:[]},{tag:"path",attr:{d:"m19.5 9.7-.4-.9"},child:[]},{tag:"path",attr:{d:"m21.7 4.5-.9.4"},child:[]},{tag:"path",attr:{d:"m21.7 7.5-.9-.4"},child:[]},{tag:"path",attr:{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"6","r":"3"},child:[]}]})(props);
}
/**
 * MonitorDot icon from Lucide icons
 */
export function LuMonitorDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"19","cy":"6","r":"3"}},{tag:"path",attr:{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]}]})(props);
}
/**
 * MonitorDown icon from Lucide icons
 */
export function LuMonitorDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13V7"}},{tag:"path",attr:{d:"m15 10-3 3-3-3"},child:[]},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]}]})(props);
}
/**
 * MonitorOff icon from Lucide icons
 */
export function LuMonitorOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}},{tag:"path",attr:{d:"M22 15V5a2 2 0 0 0-2-2H9"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * MonitorPause icon from Lucide icons
 */
export function LuMonitorPause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13V7"}},{tag:"path",attr:{d:"M14 13V7"},child:[]},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]}]})(props);
}
/**
 * MonitorPlay icon from Lucide icons
 */
export function LuMonitorPlay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}},{tag:"path",attr:{d:"M12 17v4"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]},{tag:"rect",attr:{x:"2",y:"3","width":"20","height":"14","rx":"2"},child:[]}]})(props);
}
/**
 * MonitorSmartphone icon from Lucide icons
 */
export function LuMonitorSmartphone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}},{tag:"path",attr:{d:"M10 19v-3.96 3.15"},child:[]},{tag:"path",attr:{d:"M7 19h5"},child:[]},{tag:"rect",attr:{"width":"6","height":"10",x:"16",y:"12","rx":"2"},child:[]}]})(props);
}
/**
 * MonitorSpeaker icon from Lucide icons
 */
export function LuMonitorSpeaker(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5.5 20H8"}},{tag:"path",attr:{d:"M17 9h.01"},child:[]},{tag:"rect",attr:{"width":"10","height":"16",x:"12",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"15","r":"1"},child:[]}]})(props);
}
/**
 * MonitorStop icon from Lucide icons
 */
export function LuMonitorStop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17v4"}},{tag:"path",attr:{d:"M8 21h8"},child:[]},{tag:"rect",attr:{x:"2",y:"3","width":"20","height":"14","rx":"2"},child:[]},{tag:"rect",attr:{x:"9",y:"7","width":"6","height":"6","rx":"1"},child:[]}]})(props);
}
/**
 * MonitorUp icon from Lucide icons
 */
export function LuMonitorUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 10 3-3 3 3"}},{tag:"path",attr:{d:"M12 13V7"},child:[]},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]}]})(props);
}
/**
 * MonitorX icon from Lucide icons
 */
export function LuMonitorX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m14.5 12.5-5-5"}},{tag:"path",attr:{d:"m9.5 12.5 5-5"},child:[]},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]}]})(props);
}
/**
 * Moon icon from Lucide icons
 */
export function LuMoon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}}]})(props);
}
/**
 * MoonStar icon from Lucide icons
 */
export function LuMoonStar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"}},{tag:"path",attr:{d:"M20 3v4"},child:[]},{tag:"path",attr:{d:"M22 5h-4"},child:[]}]})(props);
}
/**
 * Mountain icon from Lucide icons
 */
export function LuMountain(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m8 3 4 8 5-5 5 15H2L8 3z"}}]})(props);
}
/**
 * MountainSnow icon from Lucide icons
 */
export function LuMountainSnow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m8 3 4 8 5-5 5 15H2L8 3z"}},{tag:"path",attr:{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"},child:[]}]})(props);
}
/**
 * Mouse icon from Lucide icons
 */
export function LuMouse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"5",y:"2","width":"14","height":"20","rx":"7"}},{tag:"path",attr:{d:"M12 6v4"},child:[]}]})(props);
}
/**
 * MouseOff icon from Lucide icons
 */
export function LuMouseOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 6v.343"}},{tag:"path",attr:{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"},child:[]},{tag:"path",attr:{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902"},child:[]},{tag:"path",attr:{d:"M22 22 2 2"},child:[]}]})(props);
}
/**
 * MousePointer icon from Lucide icons
 */
export function LuMousePointer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.586 12.586 19 19"}},{tag:"path",attr:{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"},child:[]}]})(props);
}
/**
 * MousePointer2 icon from Lucide icons
 */
export function LuMousePointer2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"}}]})(props);
}
/**
 * MousePointerBan icon from Lucide icons
 */
export function LuMousePointerBan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"}},{tag:"circle",attr:{"cx":"16","cy":"16","r":"6"},child:[]},{tag:"path",attr:{d:"m11.8 11.8 8.4 8.4"},child:[]}]})(props);
}
/**
 * MousePointerClick icon from Lucide icons
 */
export function LuMousePointerClick(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 4.1 12 6"}},{tag:"path",attr:{d:"m5.1 8-2.9-.8"},child:[]},{tag:"path",attr:{d:"m6 12-1.9 2"},child:[]},{tag:"path",attr:{d:"M7.2 2.2 8 5.1"},child:[]},{tag:"path",attr:{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"},child:[]}]})(props);
}
/**
 * Move icon from Lucide icons
 */
export function LuMove(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v20"}},{tag:"path",attr:{d:"m15 19-3 3-3-3"},child:[]},{tag:"path",attr:{d:"m19 9 3 3-3 3"},child:[]},{tag:"path",attr:{d:"M2 12h20"},child:[]},{tag:"path",attr:{d:"m5 9-3 3 3 3"},child:[]},{tag:"path",attr:{d:"m9 5 3-3 3 3"},child:[]}]})(props);
}
/**
 * Move3D icon from Lucide icons
 */
export function LuMove3D(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 3v16h16"}},{tag:"path",attr:{d:"m5 19 6-6"},child:[]},{tag:"path",attr:{d:"m2 6 3-3 3 3"},child:[]},{tag:"path",attr:{d:"m18 16 3 3-3 3"},child:[]}]})(props);
}
/**
 * MoveDiagonal icon from Lucide icons
 */
export function LuMoveDiagonal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 19H5v-6"}},{tag:"path",attr:{d:"M13 5h6v6"},child:[]},{tag:"path",attr:{d:"M19 5 5 19"},child:[]}]})(props);
}
/**
 * MoveDiagonal2 icon from Lucide icons
 */
export function LuMoveDiagonal2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 13v6h-6"}},{tag:"path",attr:{d:"M5 11V5h6"},child:[]},{tag:"path",attr:{d:"m5 5 14 14"},child:[]}]})(props);
}
/**
 * MoveDown icon from Lucide icons
 */
export function LuMoveDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 18L12 22L16 18"}},{tag:"path",attr:{d:"M12 2V22"},child:[]}]})(props);
}
/**
 * MoveDownLeft icon from Lucide icons
 */
export function LuMoveDownLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 19H5V13"}},{tag:"path",attr:{d:"M19 5L5 19"},child:[]}]})(props);
}
/**
 * MoveDownRight icon from Lucide icons
 */
export function LuMoveDownRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 13V19H13"}},{tag:"path",attr:{d:"M5 5L19 19"},child:[]}]})(props);
}
/**
 * MoveHorizontal icon from Lucide icons
 */
export function LuMoveHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 8 4 4-4 4"}},{tag:"path",attr:{d:"M2 12h20"},child:[]},{tag:"path",attr:{d:"m6 8-4 4 4 4"},child:[]}]})(props);
}
/**
 * MoveLeft icon from Lucide icons
 */
export function LuMoveLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8L2 12L6 16"}},{tag:"path",attr:{d:"M2 12H22"},child:[]}]})(props);
}
/**
 * MoveRight icon from Lucide icons
 */
export function LuMoveRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8L22 12L18 16"}},{tag:"path",attr:{d:"M2 12H22"},child:[]}]})(props);
}
/**
 * MoveUp icon from Lucide icons
 */
export function LuMoveUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 6L12 2L16 6"}},{tag:"path",attr:{d:"M12 2V22"},child:[]}]})(props);
}
/**
 * MoveUpLeft icon from Lucide icons
 */
export function LuMoveUpLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 11V5H11"}},{tag:"path",attr:{d:"M5 5L19 19"},child:[]}]})(props);
}
/**
 * MoveUpRight icon from Lucide icons
 */
export function LuMoveUpRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 5H19V11"}},{tag:"path",attr:{d:"M19 5L5 19"},child:[]}]})(props);
}
/**
 * MoveVertical icon from Lucide icons
 */
export function LuMoveVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v20"}},{tag:"path",attr:{d:"m8 18 4 4 4-4"},child:[]},{tag:"path",attr:{d:"m8 6 4-4 4 4"},child:[]}]})(props);
}
/**
 * Music icon from Lucide icons
 */
export function LuMusic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 18V5l12-2v13"}},{tag:"circle",attr:{"cx":"6","cy":"18","r":"3"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"16","r":"3"},child:[]}]})(props);
}
/**
 * Music2 icon from Lucide icons
 */
export function LuMusic2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"8","cy":"18","r":"4"}},{tag:"path",attr:{d:"M12 18V2l7 4"},child:[]}]})(props);
}
/**
 * Music3 icon from Lucide icons
 */
export function LuMusic3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"18","r":"4"}},{tag:"path",attr:{d:"M16 18V2"},child:[]}]})(props);
}
/**
 * Music4 icon from Lucide icons
 */
export function LuMusic4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 18V5l12-2v13"}},{tag:"path",attr:{d:"m9 9 12-2"},child:[]},{tag:"circle",attr:{"cx":"6","cy":"18","r":"3"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"16","r":"3"},child:[]}]})(props);
}
/**
 * Navigation icon from Lucide icons
 */
export function LuNavigation(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"3 11 22 2 13 21 11 13 3 11"}}]})(props);
}
/**
 * Navigation2 icon from Lucide icons
 */
export function LuNavigation2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"12 2 19 21 12 17 5 21 12 2"}}]})(props);
}
/**
 * Navigation2Off icon from Lucide icons
 */
export function LuNavigation2Off(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}},{tag:"path",attr:{d:"M14.53 8.88 12 2l-1.17 3.17"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * NavigationOff icon from Lucide icons
 */
export function LuNavigationOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}},{tag:"path",attr:{d:"M17.39 11.73 22 2l-9.73 4.61"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Network icon from Lucide icons
 */
export function LuNetwork(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"16",y:"16","width":"6","height":"6","rx":"1"}},{tag:"rect",attr:{x:"2",y:"16","width":"6","height":"6","rx":"1"},child:[]},{tag:"rect",attr:{x:"9",y:"2","width":"6","height":"6","rx":"1"},child:[]},{tag:"path",attr:{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"},child:[]},{tag:"path",attr:{d:"M12 12V8"},child:[]}]})(props);
}
/**
 * Newspaper icon from Lucide icons
 */
export function LuNewspaper(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}},{tag:"path",attr:{d:"M18 14h-8"},child:[]},{tag:"path",attr:{d:"M15 18h-5"},child:[]},{tag:"path",attr:{d:"M10 6h8v4h-8V6Z"},child:[]}]})(props);
}
/**
 * Nfc icon from Lucide icons
 */
export function LuNfc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}},{tag:"path",attr:{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"},child:[]},{tag:"path",attr:{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"},child:[]},{tag:"path",attr:{d:"M16.37 2a20.16 20.16 0 0 1 0 20"},child:[]}]})(props);
}
/**
 * Notebook icon from Lucide icons
 */
export function LuNotebook(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 6h4"}},{tag:"path",attr:{d:"M2 10h4"},child:[]},{tag:"path",attr:{d:"M2 14h4"},child:[]},{tag:"path",attr:{d:"M2 18h4"},child:[]},{tag:"rect",attr:{"width":"16","height":"20",x:"4",y:"2","rx":"2"},child:[]},{tag:"path",attr:{d:"M16 2v20"},child:[]}]})(props);
}
/**
 * NotebookPen icon from Lucide icons
 */
export function LuNotebookPen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"}},{tag:"path",attr:{d:"M2 6h4"},child:[]},{tag:"path",attr:{d:"M2 10h4"},child:[]},{tag:"path",attr:{d:"M2 14h4"},child:[]},{tag:"path",attr:{d:"M2 18h4"},child:[]},{tag:"path",attr:{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"},child:[]}]})(props);
}
/**
 * NotebookTabs icon from Lucide icons
 */
export function LuNotebookTabs(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 6h4"}},{tag:"path",attr:{d:"M2 10h4"},child:[]},{tag:"path",attr:{d:"M2 14h4"},child:[]},{tag:"path",attr:{d:"M2 18h4"},child:[]},{tag:"rect",attr:{"width":"16","height":"20",x:"4",y:"2","rx":"2"},child:[]},{tag:"path",attr:{d:"M15 2v20"},child:[]},{tag:"path",attr:{d:"M15 7h5"},child:[]},{tag:"path",attr:{d:"M15 12h5"},child:[]},{tag:"path",attr:{d:"M15 17h5"},child:[]}]})(props);
}
/**
 * NotebookText icon from Lucide icons
 */
export function LuNotebookText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 6h4"}},{tag:"path",attr:{d:"M2 10h4"},child:[]},{tag:"path",attr:{d:"M2 14h4"},child:[]},{tag:"path",attr:{d:"M2 18h4"},child:[]},{tag:"rect",attr:{"width":"16","height":"20",x:"4",y:"2","rx":"2"},child:[]},{tag:"path",attr:{d:"M9.5 8h5"},child:[]},{tag:"path",attr:{d:"M9.5 12H16"},child:[]},{tag:"path",attr:{d:"M9.5 16H14"},child:[]}]})(props);
}
/**
 * NotepadText icon from Lucide icons
 */
export function LuNotepadText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M12 2v4"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{"width":"16","height":"18",x:"4",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M8 10h6"},child:[]},{tag:"path",attr:{d:"M8 14h8"},child:[]},{tag:"path",attr:{d:"M8 18h5"},child:[]}]})(props);
}
/**
 * NotepadTextDashed icon from Lucide icons
 */
export function LuNotepadTextDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M12 2v4"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M20 12v2"},child:[]},{tag:"path",attr:{d:"M20 18v2a2 2 0 0 1-2 2h-1"},child:[]},{tag:"path",attr:{d:"M13 22h-2"},child:[]},{tag:"path",attr:{d:"M7 22H6a2 2 0 0 1-2-2v-2"},child:[]},{tag:"path",attr:{d:"M4 14v-2"},child:[]},{tag:"path",attr:{d:"M4 8V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"M8 10h6"},child:[]},{tag:"path",attr:{d:"M8 14h8"},child:[]},{tag:"path",attr:{d:"M8 18h5"},child:[]}]})(props);
}
/**
 * Nut icon from Lucide icons
 */
export function LuNut(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 4V2"}},{tag:"path",attr:{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"},child:[]},{tag:"path",attr:{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"},child:[]}]})(props);
}
/**
 * NutOff icon from Lucide icons
 */
export function LuNutOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 4V2"}},{tag:"path",attr:{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"},child:[]},{tag:"path",attr:{d:"M19 10v3.343"},child:[]},{tag:"path",attr:{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Octagon icon from Lucide icons
 */
export function LuOctagon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}}]})(props);
}
/**
 * OctagonAlert icon from Lucide icons
 */
export function LuOctagonAlert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 16h.01"}},{tag:"path",attr:{d:"M12 8v4"},child:[]},{tag:"path",attr:{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"},child:[]}]})(props);
}
/**
 * OctagonMinus icon from Lucide icons
 */
export function LuOctagonMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}},{tag:"path",attr:{d:"M8 12h8"},child:[]}]})(props);
}
/**
 * OctagonPause icon from Lucide icons
 */
export function LuOctagonPause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 15V9"}},{tag:"path",attr:{d:"M14 15V9"},child:[]},{tag:"path",attr:{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"},child:[]}]})(props);
}
/**
 * OctagonX icon from Lucide icons
 */
export function LuOctagonX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15 9-6 6"}},{tag:"path",attr:{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"},child:[]},{tag:"path",attr:{d:"m9 9 6 6"},child:[]}]})(props);
}
/**
 * Omega icon from Lucide icons
 */
export function LuOmega(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"}}]})(props);
}
/**
 * Option icon from Lucide icons
 */
export function LuOption(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3h6l6 18h6"}},{tag:"path",attr:{d:"M14 3h7"},child:[]}]})(props);
}
/**
 * Orbit icon from Lucide icons
 */
export function LuOrbit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"}},{tag:"circle",attr:{"cx":"19","cy":"5","r":"2"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"19","r":"2"},child:[]},{tag:"path",attr:{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"},child:[]},{tag:"path",attr:{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"},child:[]}]})(props);
}
/**
 * Origami icon from Lucide icons
 */
export function LuOrigami(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"}},{tag:"path",attr:{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"},child:[]},{tag:"path",attr:{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"},child:[]}]})(props);
}
/**
 * Package icon from Lucide icons
 */
export function LuPackage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}},{tag:"path",attr:{d:"M12 22V12"},child:[]},{tag:"path",attr:{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"},child:[]},{tag:"path",attr:{d:"m7.5 4.27 9 5.15"},child:[]}]})(props);
}
/**
 * Package2 icon from Lucide icons
 */
export function LuPackage2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"}},{tag:"path",attr:{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"},child:[]},{tag:"path",attr:{d:"M12 3v6"},child:[]}]})(props);
}
/**
 * PackageCheck icon from Lucide icons
 */
export function LuPackageCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16 16 2 2 4-4"}},{tag:"path",attr:{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"},child:[]},{tag:"path",attr:{d:"m7.5 4.27 9 5.15"},child:[]},{tag:"polyline",attr:{"points":"3.29 7 12 12 20.71 7"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"22","y2":"12"},child:[]}]})(props);
}
/**
 * PackageMinus icon from Lucide icons
 */
export function LuPackageMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 16h6"}},{tag:"path",attr:{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"},child:[]},{tag:"path",attr:{d:"m7.5 4.27 9 5.15"},child:[]},{tag:"polyline",attr:{"points":"3.29 7 12 12 20.71 7"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"22","y2":"12"},child:[]}]})(props);
}
/**
 * PackageOpen icon from Lucide icons
 */
export function LuPackageOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22v-9"}},{tag:"path",attr:{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"},child:[]},{tag:"path",attr:{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"},child:[]},{tag:"path",attr:{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"},child:[]}]})(props);
}
/**
 * PackagePlus icon from Lucide icons
 */
export function LuPackagePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 16h6"}},{tag:"path",attr:{d:"M19 13v6"},child:[]},{tag:"path",attr:{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"},child:[]},{tag:"path",attr:{d:"m7.5 4.27 9 5.15"},child:[]},{tag:"polyline",attr:{"points":"3.29 7 12 12 20.71 7"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"22","y2":"12"},child:[]}]})(props);
}
/**
 * PackageSearch icon from Lucide icons
 */
export function LuPackageSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}},{tag:"path",attr:{d:"m7.5 4.27 9 5.15"},child:[]},{tag:"polyline",attr:{"points":"3.29 7 12 12 20.71 7"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"22","y2":"12"},child:[]},{tag:"circle",attr:{"cx":"18.5","cy":"15.5","r":"2.5"},child:[]},{tag:"path",attr:{d:"M20.27 17.27 22 19"},child:[]}]})(props);
}
/**
 * PackageX icon from Lucide icons
 */
export function LuPackageX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}},{tag:"path",attr:{d:"m7.5 4.27 9 5.15"},child:[]},{tag:"polyline",attr:{"points":"3.29 7 12 12 20.71 7"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"22","y2":"12"},child:[]},{tag:"path",attr:{d:"m17 13 5 5m-5 0 5-5"},child:[]}]})(props);
}
/**
 * PaintBucket icon from Lucide icons
 */
export function LuPaintBucket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}},{tag:"path",attr:{d:"m5 2 5 5"},child:[]},{tag:"path",attr:{d:"M2 13h15"},child:[]},{tag:"path",attr:{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"},child:[]}]})(props);
}
/**
 * PaintRoller icon from Lucide icons
 */
export function LuPaintRoller(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"6",x:"2",y:"2","rx":"2"}},{tag:"path",attr:{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"},child:[]},{tag:"rect",attr:{"width":"4","height":"6",x:"8",y:"16","rx":"1"},child:[]}]})(props);
}
/**
 * Paintbrush icon from Lucide icons
 */
export function LuPaintbrush(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m14.622 17.897-10.68-2.913"}},{tag:"path",attr:{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"},child:[]},{tag:"path",attr:{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"},child:[]}]})(props);
}
/**
 * PaintbrushVertical icon from Lucide icons
 */
export function LuPaintbrushVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2v2"}},{tag:"path",attr:{d:"M14 2v4"},child:[]},{tag:"path",attr:{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"},child:[]},{tag:"path",attr:{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"},child:[]}]})(props);
}
/**
 * Palette icon from Lucide icons
 */
export function LuPalette(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"13.5","cy":"6.5","r":".5",fill:"currentColor"}},{tag:"circle",attr:{"cx":"17.5","cy":"10.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"8.5","cy":"7.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"6.5","cy":"12.5","r":".5",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"},child:[]}]})(props);
}
/**
 * PanelBottom icon from Lucide icons
 */
export function LuPanelBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M3 15h18"},child:[]}]})(props);
}
/**
 * PanelBottomClose icon from Lucide icons
 */
export function LuPanelBottomClose(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M3 15h18"},child:[]},{tag:"path",attr:{d:"m15 8-3 3-3-3"},child:[]}]})(props);
}
/**
 * PanelBottomDashed icon from Lucide icons
 */
export function LuPanelBottomDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M14 15h1"},child:[]},{tag:"path",attr:{d:"M19 15h2"},child:[]},{tag:"path",attr:{d:"M3 15h2"},child:[]},{tag:"path",attr:{d:"M9 15h1"},child:[]}]})(props);
}
/**
 * PanelBottomOpen icon from Lucide icons
 */
export function LuPanelBottomOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M3 15h18"},child:[]},{tag:"path",attr:{d:"m9 10 3-3 3 3"},child:[]}]})(props);
}
/**
 * PanelLeft icon from Lucide icons
 */
export function LuPanelLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(props);
}
/**
 * PanelLeftClose icon from Lucide icons
 */
export function LuPanelLeftClose(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M9 3v18"},child:[]},{tag:"path",attr:{d:"m16 15-3-3 3-3"},child:[]}]})(props);
}
/**
 * PanelLeftDashed icon from Lucide icons
 */
export function LuPanelLeftDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M9 14v1"},child:[]},{tag:"path",attr:{d:"M9 19v2"},child:[]},{tag:"path",attr:{d:"M9 3v2"},child:[]},{tag:"path",attr:{d:"M9 9v1"},child:[]}]})(props);
}
/**
 * PanelLeftOpen icon from Lucide icons
 */
export function LuPanelLeftOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M9 3v18"},child:[]},{tag:"path",attr:{d:"m14 9 3 3-3 3"},child:[]}]})(props);
}
/**
 * PanelRight icon from Lucide icons
 */
export function LuPanelRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M15 3v18"},child:[]}]})(props);
}
/**
 * PanelRightClose icon from Lucide icons
 */
export function LuPanelRightClose(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M15 3v18"},child:[]},{tag:"path",attr:{d:"m8 9 3 3-3 3"},child:[]}]})(props);
}
/**
 * PanelRightDashed icon from Lucide icons
 */
export function LuPanelRightDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M15 14v1"},child:[]},{tag:"path",attr:{d:"M15 19v2"},child:[]},{tag:"path",attr:{d:"M15 3v2"},child:[]},{tag:"path",attr:{d:"M15 9v1"},child:[]}]})(props);
}
/**
 * PanelRightOpen icon from Lucide icons
 */
export function LuPanelRightOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M15 3v18"},child:[]},{tag:"path",attr:{d:"m10 15-3-3 3-3"},child:[]}]})(props);
}
/**
 * PanelTop icon from Lucide icons
 */
export function LuPanelTop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M3 9h18"},child:[]}]})(props);
}
/**
 * PanelTopClose icon from Lucide icons
 */
export function LuPanelTopClose(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M3 9h18"},child:[]},{tag:"path",attr:{d:"m9 16 3-3 3 3"},child:[]}]})(props);
}
/**
 * PanelTopDashed icon from Lucide icons
 */
export function LuPanelTopDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M14 9h1"},child:[]},{tag:"path",attr:{d:"M19 9h2"},child:[]},{tag:"path",attr:{d:"M3 9h2"},child:[]},{tag:"path",attr:{d:"M9 9h1"},child:[]}]})(props);
}
/**
 * PanelTopOpen icon from Lucide icons
 */
export function LuPanelTopOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M3 9h18"},child:[]},{tag:"path",attr:{d:"m15 14-3 3-3-3"},child:[]}]})(props);
}
/**
 * PanelsLeftBottom icon from Lucide icons
 */
export function LuPanelsLeftBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M9 3v18"},child:[]},{tag:"path",attr:{d:"M9 15h12"},child:[]}]})(props);
}
/**
 * PanelsRightBottom icon from Lucide icons
 */
export function LuPanelsRightBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M3 15h12"},child:[]},{tag:"path",attr:{d:"M15 3v18"},child:[]}]})(props);
}
/**
 * PanelsTopLeft icon from Lucide icons
 */
export function LuPanelsTopLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M3 9h18"},child:[]},{tag:"path",attr:{d:"M9 21V9"},child:[]}]})(props);
}
/**
 * Paperclip icon from Lucide icons
 */
export function LuPaperclip(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"}}]})(props);
}
/**
 * Parentheses icon from Lucide icons
 */
export function LuParentheses(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 21s-4-3-4-9 4-9 4-9"}},{tag:"path",attr:{d:"M16 3s4 3 4 9-4 9-4 9"},child:[]}]})(props);
}
/**
 * ParkingMeter icon from Lucide icons
 */
export function LuParkingMeter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 15h2"}},{tag:"path",attr:{d:"M12 12v3"},child:[]},{tag:"path",attr:{d:"M12 19v3"},child:[]},{tag:"path",attr:{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"},child:[]},{tag:"path",attr:{d:"M9 9a3 3 0 1 1 6 0"},child:[]}]})(props);
}
/**
 * PartyPopper icon from Lucide icons
 */
export function LuPartyPopper(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5.8 11.3 2 22l10.7-3.79"}},{tag:"path",attr:{d:"M4 3h.01"},child:[]},{tag:"path",attr:{d:"M22 8h.01"},child:[]},{tag:"path",attr:{d:"M15 2h.01"},child:[]},{tag:"path",attr:{d:"M22 20h.01"},child:[]},{tag:"path",attr:{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"},child:[]},{tag:"path",attr:{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"},child:[]},{tag:"path",attr:{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"},child:[]},{tag:"path",attr:{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"},child:[]}]})(props);
}
/**
 * Pause icon from Lucide icons
 */
export function LuPause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4","width":"4","height":"16","rx":"1"}},{tag:"rect",attr:{x:"6",y:"4","width":"4","height":"16","rx":"1"},child:[]}]})(props);
}
/**
 * PawPrint icon from Lucide icons
 */
export function LuPawPrint(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"11","cy":"4","r":"2"}},{tag:"circle",attr:{"cx":"18","cy":"8","r":"2"},child:[]},{tag:"circle",attr:{"cx":"20","cy":"16","r":"2"},child:[]},{tag:"path",attr:{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"},child:[]}]})(props);
}
/**
 * PcCase icon from Lucide icons
 */
export function LuPcCase(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"20",x:"5",y:"2","rx":"2"}},{tag:"path",attr:{d:"M15 14h.01"},child:[]},{tag:"path",attr:{d:"M9 6h6"},child:[]},{tag:"path",attr:{d:"M9 10h6"},child:[]}]})(props);
}
/**
 * Pen icon from Lucide icons
 */
export function LuPen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}}]})(props);
}
/**
 * PenLine icon from Lucide icons
 */
export function LuPenLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"}},{tag:"path",attr:{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"},child:[]}]})(props);
}
/**
 * PenOff icon from Lucide icons
 */
export function LuPenOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}},{tag:"path",attr:{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * PenTool icon from Lucide icons
 */
export function LuPenTool(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"}},{tag:"path",attr:{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"},child:[]},{tag:"path",attr:{d:"m2.3 2.3 7.286 7.286"},child:[]},{tag:"circle",attr:{"cx":"11","cy":"11","r":"2"},child:[]}]})(props);
}
/**
 * Pencil icon from Lucide icons
 */
export function LuPencil(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(props);
}
/**
 * PencilLine icon from Lucide icons
 */
export function LuPencilLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"}},{tag:"path",attr:{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"},child:[]},{tag:"path",attr:{d:"m15 5 3 3"},child:[]}]})(props);
}
/**
 * PencilOff icon from Lucide icons
 */
export function LuPencilOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}},{tag:"path",attr:{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * PencilRuler icon from Lucide icons
 */
export function LuPencilRuler(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}},{tag:"path",attr:{d:"m8 6 2-2"},child:[]},{tag:"path",attr:{d:"m18 16 2-2"},child:[]},{tag:"path",attr:{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"},child:[]},{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(props);
}
/**
 * Pentagon icon from Lucide icons
 */
export function LuPentagon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"}}]})(props);
}
/**
 * Percent icon from Lucide icons
 */
export function LuPercent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"19","x2":"5","y1":"5","y2":"19"}},{tag:"circle",attr:{"cx":"6.5","cy":"6.5","r":"2.5"},child:[]},{tag:"circle",attr:{"cx":"17.5","cy":"17.5","r":"2.5"},child:[]}]})(props);
}
/**
 * PersonStanding icon from Lucide icons
 */
export function LuPersonStanding(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"5","r":"1"}},{tag:"path",attr:{d:"m9 20 3-6 3 6"},child:[]},{tag:"path",attr:{d:"m6 8 6 2 6-2"},child:[]},{tag:"path",attr:{d:"M12 10v4"},child:[]}]})(props);
}
/**
 * PhilippinePeso icon from Lucide icons
 */
export function LuPhilippinePeso(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 11H4"}},{tag:"path",attr:{d:"M20 7H4"},child:[]},{tag:"path",attr:{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"},child:[]}]})(props);
}
/**
 * Phone icon from Lucide icons
 */
export function LuPhone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
}
/**
 * PhoneCall icon from Lucide icons
 */
export function LuPhoneCall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}},{tag:"path",attr:{d:"M14.05 2a9 9 0 0 1 8 7.94"},child:[]},{tag:"path",attr:{d:"M14.05 6A5 5 0 0 1 18 10"},child:[]}]})(props);
}
/**
 * PhoneForwarded icon from Lucide icons
 */
export function LuPhoneForwarded(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"18 2 22 6 18 10"}},{tag:"line",attr:{"x1":"14","x2":"22","y1":"6","y2":"6"},child:[]},{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(props);
}
/**
 * PhoneIncoming icon from Lucide icons
 */
export function LuPhoneIncoming(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"16 2 16 8 22 8"}},{tag:"line",attr:{"x1":"22","x2":"16","y1":"2","y2":"8"},child:[]},{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(props);
}
/**
 * PhoneMissed icon from Lucide icons
 */
export function LuPhoneMissed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"22","x2":"16","y1":"2","y2":"8"}},{tag:"line",attr:{"x1":"16","x2":"22","y1":"2","y2":"8"},child:[]},{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(props);
}
/**
 * PhoneOff icon from Lucide icons
 */
export function LuPhoneOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}},{tag:"line",attr:{"x1":"22","x2":"2","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * PhoneOutgoing icon from Lucide icons
 */
export function LuPhoneOutgoing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"22 8 22 2 16 2"}},{tag:"line",attr:{"x1":"16","x2":"22","y1":"8","y2":"2"},child:[]},{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(props);
}
/**
 * Pi icon from Lucide icons
 */
export function LuPi(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"9","x2":"9","y1":"4","y2":"20"}},{tag:"path",attr:{d:"M4 7c0-1.7 1.3-3 3-3h13"},child:[]},{tag:"path",attr:{d:"M18 20c-1.7 0-3-1.3-3-3V4"},child:[]}]})(props);
}
/**
 * Piano icon from Lucide icons
 */
export function LuPiano(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}},{tag:"path",attr:{d:"M2 14h20"},child:[]},{tag:"path",attr:{d:"M6 14v4"},child:[]},{tag:"path",attr:{d:"M10 14v4"},child:[]},{tag:"path",attr:{d:"M14 14v4"},child:[]},{tag:"path",attr:{d:"M18 14v4"},child:[]}]})(props);
}
/**
 * Pickaxe icon from Lucide icons
 */
export function LuPickaxe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"}},{tag:"path",attr:{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"},child:[]},{tag:"path",attr:{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"},child:[]},{tag:"path",attr:{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"},child:[]}]})(props);
}
/**
 * PictureInPicture icon from Lucide icons
 */
export function LuPictureInPicture(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"}},{tag:"rect",attr:{"width":"10","height":"7",x:"12",y:"13.5","ry":"2"},child:[]}]})(props);
}
/**
 * PictureInPicture2 icon from Lucide icons
 */
export function LuPictureInPicture2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}},{tag:"rect",attr:{"width":"10","height":"7",x:"12",y:"13","rx":"2"},child:[]}]})(props);
}
/**
 * PiggyBank icon from Lucide icons
 */
export function LuPiggyBank(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"}},{tag:"path",attr:{d:"M2 9v1c0 1.1.9 2 2 2h1"},child:[]},{tag:"path",attr:{d:"M16 11h.01"},child:[]}]})(props);
}
/**
 * Pilcrow icon from Lucide icons
 */
export function LuPilcrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 4v16"}},{tag:"path",attr:{d:"M17 4v16"},child:[]},{tag:"path",attr:{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"},child:[]}]})(props);
}
/**
 * PilcrowLeft icon from Lucide icons
 */
export function LuPilcrowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v11"}},{tag:"path",attr:{d:"M14 9h-3a3 3 0 0 1 0-6h9"},child:[]},{tag:"path",attr:{d:"M18 3v11"},child:[]},{tag:"path",attr:{d:"M22 18H2l4-4"},child:[]},{tag:"path",attr:{d:"m6 22-4-4"},child:[]}]})(props);
}
/**
 * PilcrowRight icon from Lucide icons
 */
export function LuPilcrowRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 3v11"}},{tag:"path",attr:{d:"M10 9H7a1 1 0 0 1 0-6h8"},child:[]},{tag:"path",attr:{d:"M14 3v11"},child:[]},{tag:"path",attr:{d:"m18 14 4 4H2"},child:[]},{tag:"path",attr:{d:"m22 18-4 4"},child:[]}]})(props);
}
/**
 * Pill icon from Lucide icons
 */
export function LuPill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}},{tag:"path",attr:{d:"m8.5 8.5 7 7"},child:[]}]})(props);
}
/**
 * PillBottle icon from Lucide icons
 */
export function LuPillBottle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"}},{tag:"path",attr:{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"},child:[]},{tag:"rect",attr:{"width":"16","height":"5",x:"4",y:"2","rx":"1"},child:[]}]})(props);
}
/**
 * Pin icon from Lucide icons
 */
export function LuPin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17v5"}},{tag:"path",attr:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"},child:[]}]})(props);
}
/**
 * PinOff icon from Lucide icons
 */
export function LuPinOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17v5"}},{tag:"path",attr:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"},child:[]}]})(props);
}
/**
 * Pipette icon from Lucide icons
 */
export function LuPipette(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 22 1-1h3l9-9"}},{tag:"path",attr:{d:"M3 21v-3l9-9"},child:[]},{tag:"path",attr:{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"},child:[]}]})(props);
}
/**
 * Pizza icon from Lucide icons
 */
export function LuPizza(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 14-1 1"}},{tag:"path",attr:{d:"m13.75 18.25-1.25 1.42"},child:[]},{tag:"path",attr:{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"},child:[]},{tag:"path",attr:{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7"},child:[]},{tag:"path",attr:{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"},child:[]}]})(props);
}
/**
 * Plane icon from Lucide icons
 */
export function LuPlane(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}}]})(props);
}
/**
 * PlaneLanding icon from Lucide icons
 */
export function LuPlaneLanding(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 22h20"}},{tag:"path",attr:{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"},child:[]}]})(props);
}
/**
 * PlaneTakeoff icon from Lucide icons
 */
export function LuPlaneTakeoff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 22h20"}},{tag:"path",attr:{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"},child:[]}]})(props);
}
/**
 * Play icon from Lucide icons
 */
export function LuPlay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"6 3 20 12 6 21 6 3"}}]})(props);
}
/**
 * Plug icon from Lucide icons
 */
export function LuPlug(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22v-5"}},{tag:"path",attr:{d:"M9 8V2"},child:[]},{tag:"path",attr:{d:"M15 8V2"},child:[]},{tag:"path",attr:{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"},child:[]}]})(props);
}
/**
 * Plug2 icon from Lucide icons
 */
export function LuPlug2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 2v6"}},{tag:"path",attr:{d:"M15 2v6"},child:[]},{tag:"path",attr:{d:"M12 17v5"},child:[]},{tag:"path",attr:{d:"M5 8h14"},child:[]},{tag:"path",attr:{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z"},child:[]}]})(props);
}
/**
 * PlugZap icon from Lucide icons
 */
export function LuPlugZap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}},{tag:"path",attr:{d:"m2 22 3-3"},child:[]},{tag:"path",attr:{d:"M7.5 13.5 10 11"},child:[]},{tag:"path",attr:{d:"M10.5 16.5 13 14"},child:[]},{tag:"path",attr:{d:"m18 3-4 4h6l-4 4"},child:[]}]})(props);
}
/**
 * Plus icon from Lucide icons
 */
export function LuPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"}},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(props);
}
/**
 * Pocket icon from Lucide icons
 */
export function LuPocket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}},{tag:"polyline",attr:{"points":"8 10 12 14 16 10"},child:[]}]})(props);
}
/**
 * PocketKnife icon from Lucide icons
 */
export function LuPocketKnife(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}},{tag:"path",attr:{d:"M18 6h.01"},child:[]},{tag:"path",attr:{d:"M6 18h.01"},child:[]},{tag:"path",attr:{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"},child:[]},{tag:"path",attr:{d:"M18 11.66V22a4 4 0 0 0 4-4V6"},child:[]}]})(props);
}
/**
 * Podcast icon from Lucide icons
 */
export function LuPodcast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16.85 18.58a9 9 0 1 0-9.7 0"}},{tag:"path",attr:{d:"M8 14a5 5 0 1 1 8 0"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"11","r":"1"},child:[]},{tag:"path",attr:{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"},child:[]}]})(props);
}
/**
 * Pointer icon from Lucide icons
 */
export function LuPointer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 14a8 8 0 0 1-8 8"}},{tag:"path",attr:{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"},child:[]},{tag:"path",attr:{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"},child:[]},{tag:"path",attr:{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"},child:[]},{tag:"path",attr:{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"},child:[]}]})(props);
}
/**
 * PointerOff icon from Lucide icons
 */
export function LuPointerOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}},{tag:"path",attr:{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"},child:[]},{tag:"path",attr:{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"},child:[]},{tag:"path",attr:{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"},child:[]},{tag:"path",attr:{d:"M6 6v8"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * Popcorn icon from Lucide icons
 */
export function LuPopcorn(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}},{tag:"path",attr:{d:"M10 22 9 8"},child:[]},{tag:"path",attr:{d:"m14 22 1-14"},child:[]},{tag:"path",attr:{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"},child:[]}]})(props);
}
/**
 * Popsicle icon from Lucide icons
 */
export function LuPopsicle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}},{tag:"path",attr:{d:"m22 22-5.5-5.5"},child:[]}]})(props);
}
/**
 * PoundSterling icon from Lucide icons
 */
export function LuPoundSterling(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 7c0-5.333-8-5.333-8 0"}},{tag:"path",attr:{d:"M10 7v14"},child:[]},{tag:"path",attr:{d:"M6 21h12"},child:[]},{tag:"path",attr:{d:"M6 13h10"},child:[]}]})(props);
}
/**
 * Power icon from Lucide icons
 */
export function LuPower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v10"}},{tag:"path",attr:{d:"M18.4 6.6a9 9 0 1 1-12.77.04"},child:[]}]})(props);
}
/**
 * PowerOff icon from Lucide icons
 */
export function LuPowerOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}},{tag:"path",attr:{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"},child:[]},{tag:"path",attr:{d:"M12 2v4"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * Presentation icon from Lucide icons
 */
export function LuPresentation(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h20"}},{tag:"path",attr:{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"},child:[]},{tag:"path",attr:{d:"m7 21 5-5 5 5"},child:[]}]})(props);
}
/**
 * Printer icon from Lucide icons
 */
export function LuPrinter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}},{tag:"path",attr:{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"},child:[]},{tag:"rect",attr:{x:"6",y:"14","width":"12","height":"8","rx":"1"},child:[]}]})(props);
}
/**
 * PrinterCheck icon from Lucide icons
 */
export function LuPrinterCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"}},{tag:"path",attr:{d:"m16 19 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"},child:[]}]})(props);
}
/**
 * Projector icon from Lucide icons
 */
export function LuProjector(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 7 3 5"}},{tag:"path",attr:{d:"M9 6V3"},child:[]},{tag:"path",attr:{d:"m13 7 2-2"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"13","r":"3"},child:[]},{tag:"path",attr:{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"},child:[]},{tag:"path",attr:{d:"M16 16h2"},child:[]}]})(props);
}
/**
 * Proportions icon from Lucide icons
 */
export function LuProportions(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"}},{tag:"path",attr:{d:"M12 9v11"},child:[]},{tag:"path",attr:{d:"M2 9h13a2 2 0 0 1 2 2v9"},child:[]}]})(props);
}
/**
 * Puzzle icon from Lucide icons
 */
export function LuPuzzle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"}}]})(props);
}
/**
 * Pyramid icon from Lucide icons
 */
export function LuPyramid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}},{tag:"path",attr:{d:"M12 2v20"},child:[]}]})(props);
}
/**
 * QrCode icon from Lucide icons
 */
export function LuQrCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"5","height":"5",x:"3",y:"3","rx":"1"}},{tag:"rect",attr:{"width":"5","height":"5",x:"16",y:"3","rx":"1"},child:[]},{tag:"rect",attr:{"width":"5","height":"5",x:"3",y:"16","rx":"1"},child:[]},{tag:"path",attr:{d:"M21 16h-3a2 2 0 0 0-2 2v3"},child:[]},{tag:"path",attr:{d:"M21 21v.01"},child:[]},{tag:"path",attr:{d:"M12 7v3a2 2 0 0 1-2 2H7"},child:[]},{tag:"path",attr:{d:"M3 12h.01"},child:[]},{tag:"path",attr:{d:"M12 3h.01"},child:[]},{tag:"path",attr:{d:"M12 16v.01"},child:[]},{tag:"path",attr:{d:"M16 12h1"},child:[]},{tag:"path",attr:{d:"M21 12v.01"},child:[]},{tag:"path",attr:{d:"M12 21v-1"},child:[]}]})(props);
}
/**
 * Quote icon from Lucide icons
 */
export function LuQuote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}},{tag:"path",attr:{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"},child:[]}]})(props);
}
/**
 * Rabbit icon from Lucide icons
 */
export function LuRabbit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 16a3 3 0 0 1 2.24 5"}},{tag:"path",attr:{d:"M18 12h.01"},child:[]},{tag:"path",attr:{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"},child:[]},{tag:"path",attr:{d:"M20 8.54V4a2 2 0 1 0-4 0v3"},child:[]},{tag:"path",attr:{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"},child:[]}]})(props);
}
/**
 * Radar icon from Lucide icons
 */
export function LuRadar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}},{tag:"path",attr:{d:"M4 6h.01"},child:[]},{tag:"path",attr:{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"},child:[]},{tag:"path",attr:{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"},child:[]},{tag:"path",attr:{d:"M12 18h.01"},child:[]},{tag:"path",attr:{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]},{tag:"path",attr:{d:"m13.41 10.59 5.66-5.66"},child:[]}]})(props);
}
/**
 * Radiation icon from Lucide icons
 */
export function LuRadiation(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12h.01"}},{tag:"path",attr:{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"},child:[]},{tag:"path",attr:{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"},child:[]},{tag:"path",attr:{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"},child:[]}]})(props);
}
/**
 * Radical icon from Lucide icons
 */
export function LuRadical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"}}]})(props);
}
/**
 * Radio icon from Lucide icons
 */
export function LuRadio(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}},{tag:"path",attr:{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]},{tag:"path",attr:{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"},child:[]},{tag:"path",attr:{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"},child:[]}]})(props);
}
/**
 * RadioReceiver icon from Lucide icons
 */
export function LuRadioReceiver(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 16v2"}},{tag:"path",attr:{d:"M19 16v2"},child:[]},{tag:"rect",attr:{"width":"20","height":"8",x:"2",y:"8","rx":"2"},child:[]},{tag:"path",attr:{d:"M18 12h.01"},child:[]}]})(props);
}
/**
 * RadioTower icon from Lucide icons
 */
export function LuRadioTower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}},{tag:"path",attr:{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"9","r":"2"},child:[]},{tag:"path",attr:{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"},child:[]},{tag:"path",attr:{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"},child:[]},{tag:"path",attr:{d:"M9.5 18h5"},child:[]},{tag:"path",attr:{d:"m8 22 4-11 4 11"},child:[]}]})(props);
}
/**
 * Radius icon from Lucide icons
 */
export function LuRadius(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}},{tag:"circle",attr:{"cx":"19","cy":"19","r":"2"},child:[]},{tag:"path",attr:{d:"m13.41 13.41 4.18 4.18"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]}]})(props);
}
/**
 * RailSymbol icon from Lucide icons
 */
export function LuRailSymbol(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 15h14"}},{tag:"path",attr:{d:"M5 9h14"},child:[]},{tag:"path",attr:{d:"m14 20-5-5 6-6-5-5"},child:[]}]})(props);
}
/**
 * Rainbow icon from Lucide icons
 */
export function LuRainbow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 17a10 10 0 0 0-20 0"}},{tag:"path",attr:{d:"M6 17a6 6 0 0 1 12 0"},child:[]},{tag:"path",attr:{d:"M10 17a2 2 0 0 1 4 0"},child:[]}]})(props);
}
/**
 * Rat icon from Lucide icons
 */
export function LuRat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7c0 2.2 1.8 4 4 4"}},{tag:"path",attr:{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"},child:[]},{tag:"path",attr:{d:"M13.2 18a3 3 0 0 0-2.2-5"},child:[]},{tag:"path",attr:{d:"M13 22H4a2 2 0 0 1 0-4h12"},child:[]},{tag:"path",attr:{d:"M16 9h.01"},child:[]}]})(props);
}
/**
 * Ratio icon from Lucide icons
 */
export function LuRatio(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"12","height":"20",x:"6",y:"2","rx":"2"}},{tag:"rect",attr:{"width":"20","height":"12",x:"2",y:"6","rx":"2"},child:[]}]})(props);
}
/**
 * Receipt icon from Lucide icons
 */
export function LuReceipt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}},{tag:"path",attr:{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"},child:[]},{tag:"path",attr:{d:"M12 17.5v-11"},child:[]}]})(props);
}
/**
 * ReceiptCent icon from Lucide icons
 */
export function LuReceiptCent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}},{tag:"path",attr:{d:"M12 6.5v11"},child:[]},{tag:"path",attr:{d:"M15 9.4a4 4 0 1 0 0 5.2"},child:[]}]})(props);
}
/**
 * ReceiptEuro icon from Lucide icons
 */
export function LuReceiptEuro(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}},{tag:"path",attr:{d:"M8 12h5"},child:[]},{tag:"path",attr:{d:"M16 9.5a4 4 0 1 0 0 5.2"},child:[]}]})(props);
}
/**
 * ReceiptIndianRupee icon from Lucide icons
 */
export function LuReceiptIndianRupee(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}},{tag:"path",attr:{d:"M8 7h8"},child:[]},{tag:"path",attr:{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8"},child:[]},{tag:"path",attr:{d:"M8 11h8"},child:[]}]})(props);
}
/**
 * ReceiptJapaneseYen icon from Lucide icons
 */
export function LuReceiptJapaneseYen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}},{tag:"path",attr:{d:"m12 10 3-3"},child:[]},{tag:"path",attr:{d:"m9 7 3 3v7.5"},child:[]},{tag:"path",attr:{d:"M9 11h6"},child:[]},{tag:"path",attr:{d:"M9 15h6"},child:[]}]})(props);
}
/**
 * ReceiptPoundSterling icon from Lucide icons
 */
export function LuReceiptPoundSterling(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}},{tag:"path",attr:{d:"M8 13h5"},child:[]},{tag:"path",attr:{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0"},child:[]},{tag:"path",attr:{d:"M8 17h7"},child:[]}]})(props);
}
/**
 * ReceiptRussianRuble icon from Lucide icons
 */
export function LuReceiptRussianRuble(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}},{tag:"path",attr:{d:"M8 15h5"},child:[]},{tag:"path",attr:{d:"M8 11h5a2 2 0 1 0 0-4h-3v10"},child:[]}]})(props);
}
/**
 * ReceiptSwissFranc icon from Lucide icons
 */
export function LuReceiptSwissFranc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}},{tag:"path",attr:{d:"M10 17V7h5"},child:[]},{tag:"path",attr:{d:"M10 11h4"},child:[]},{tag:"path",attr:{d:"M8 15h5"},child:[]}]})(props);
}
/**
 * ReceiptText icon from Lucide icons
 */
export function LuReceiptText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}},{tag:"path",attr:{d:"M14 8H8"},child:[]},{tag:"path",attr:{d:"M16 12H8"},child:[]},{tag:"path",attr:{d:"M13 16H8"},child:[]}]})(props);
}
/**
 * RectangleEllipsis icon from Lucide icons
 */
export function LuRectangleEllipsis(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"12",x:"2",y:"6","rx":"2"}},{tag:"path",attr:{d:"M12 12h.01"},child:[]},{tag:"path",attr:{d:"M17 12h.01"},child:[]},{tag:"path",attr:{d:"M7 12h.01"},child:[]}]})(props);
}
/**
 * RectangleHorizontal icon from Lucide icons
 */
export function LuRectangleHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"12",x:"2",y:"6","rx":"2"}}]})(props);
}
/**
 * RectangleVertical icon from Lucide icons
 */
export function LuRectangleVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"12","height":"20",x:"6",y:"2","rx":"2"}}]})(props);
}
/**
 * Recycle icon from Lucide icons
 */
export function LuRecycle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}},{tag:"path",attr:{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"},child:[]},{tag:"path",attr:{d:"m14 16-3 3 3 3"},child:[]},{tag:"path",attr:{d:"M8.293 13.596 7.196 9.5 3.1 10.598"},child:[]},{tag:"path",attr:{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"},child:[]},{tag:"path",attr:{d:"m13.378 9.633 4.096 1.098 1.097-4.096"},child:[]}]})(props);
}
/**
 * Redo icon from Lucide icons
 */
export function LuRedo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7v6h-6"}},{tag:"path",attr:{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"},child:[]}]})(props);
}
/**
 * Redo2 icon from Lucide icons
 */
export function LuRedo2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15 14 5-5-5-5"}},{tag:"path",attr:{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"},child:[]}]})(props);
}
/**
 * RedoDot icon from Lucide icons
 */
export function LuRedoDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"17","r":"1"}},{tag:"path",attr:{d:"M21 7v6h-6"},child:[]},{tag:"path",attr:{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"},child:[]}]})(props);
}
/**
 * RefreshCcw icon from Lucide icons
 */
export function LuRefreshCcw(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attr:{d:"M3 3v5h5"},child:[]},{tag:"path",attr:{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"},child:[]},{tag:"path",attr:{d:"M16 16h5v5"},child:[]}]})(props);
}
/**
 * RefreshCcwDot icon from Lucide icons
 */
export function LuRefreshCcwDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 2v6h6"}},{tag:"path",attr:{d:"M21 12A9 9 0 0 0 6 5.3L3 8"},child:[]},{tag:"path",attr:{d:"M21 22v-6h-6"},child:[]},{tag:"path",attr:{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"1"},child:[]}]})(props);
}
/**
 * RefreshCw icon from Lucide icons
 */
export function LuRefreshCw(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}},{tag:"path",attr:{d:"M21 3v5h-5"},child:[]},{tag:"path",attr:{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"},child:[]},{tag:"path",attr:{d:"M8 16H3v5"},child:[]}]})(props);
}
/**
 * RefreshCwOff icon from Lucide icons
 */
export function LuRefreshCwOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}},{tag:"path",attr:{d:"M8 16H3v5"},child:[]},{tag:"path",attr:{d:"M3 12C3 9.51 4 7.26 5.64 5.64"},child:[]},{tag:"path",attr:{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"},child:[]},{tag:"path",attr:{d:"M21 12c0 1-.16 1.97-.47 2.87"},child:[]},{tag:"path",attr:{d:"M21 3v5h-5"},child:[]},{tag:"path",attr:{d:"M22 22 2 2"},child:[]}]})(props);
}
/**
 * Refrigerator icon from Lucide icons
 */
export function LuRefrigerator(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}},{tag:"path",attr:{d:"M5 10h14"},child:[]},{tag:"path",attr:{d:"M15 7v6"},child:[]}]})(props);
}
/**
 * Regex icon from Lucide icons
 */
export function LuRegex(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3v10"}},{tag:"path",attr:{d:"m12.67 5.5 8.66 5"},child:[]},{tag:"path",attr:{d:"m12.67 10.5 8.66-5"},child:[]},{tag:"path",attr:{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"},child:[]}]})(props);
}
/**
 * RemoveFormatting icon from Lucide icons
 */
export function LuRemoveFormatting(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 7V4h16v3"}},{tag:"path",attr:{d:"M5 20h6"},child:[]},{tag:"path",attr:{d:"M13 4 8 20"},child:[]},{tag:"path",attr:{d:"m15 15 5 5"},child:[]},{tag:"path",attr:{d:"m20 15-5 5"},child:[]}]})(props);
}
/**
 * Repeat icon from Lucide icons
 */
export function LuRepeat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"}},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(props);
}
/**
 * Repeat1 icon from Lucide icons
 */
export function LuRepeat1(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"}},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]},{tag:"path",attr:{d:"M11 10h1v4"},child:[]}]})(props);
}
/**
 * Repeat2 icon from Lucide icons
 */
export function LuRepeat2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 9 3-3 3 3"}},{tag:"path",attr:{d:"M13 18H7a2 2 0 0 1-2-2V6"},child:[]},{tag:"path",attr:{d:"m22 15-3 3-3-3"},child:[]},{tag:"path",attr:{d:"M11 6h6a2 2 0 0 1 2 2v10"},child:[]}]})(props);
}
/**
 * Replace icon from Lucide icons
 */
export function LuReplace(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 4a2 2 0 0 1 2-2"}},{tag:"path",attr:{d:"M16 10a2 2 0 0 1-2-2"},child:[]},{tag:"path",attr:{d:"M20 2a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M22 8a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"m3 7 3 3 3-3"},child:[]},{tag:"path",attr:{d:"M6 10V5a3 3 0 0 1 3-3h1"},child:[]},{tag:"rect",attr:{x:"2",y:"14","width":"8","height":"8","rx":"2"},child:[]}]})(props);
}
/**
 * ReplaceAll icon from Lucide icons
 */
export function LuReplaceAll(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}},{tag:"path",attr:{d:"M14 4a2 2 0 0 1 2-2"},child:[]},{tag:"path",attr:{d:"M16 10a2 2 0 0 1-2-2"},child:[]},{tag:"path",attr:{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"M20 2a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M22 8a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"m3 7 3 3 3-3"},child:[]},{tag:"path",attr:{d:"M6 10V5a 3 3 0 0 1 3-3h1"},child:[]},{tag:"rect",attr:{x:"2",y:"14","width":"8","height":"8","rx":"2"},child:[]}]})(props);
}
/**
 * Reply icon from Lucide icons
 */
export function LuReply(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"9 17 4 12 9 7"}},{tag:"path",attr:{d:"M20 18v-2a4 4 0 0 0-4-4H4"},child:[]}]})(props);
}
/**
 * ReplyAll icon from Lucide icons
 */
export function LuReplyAll(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"7 17 2 12 7 7"}},{tag:"polyline",attr:{"points":"12 17 7 12 12 7"},child:[]},{tag:"path",attr:{d:"M22 18v-2a4 4 0 0 0-4-4H7"},child:[]}]})(props);
}
/**
 * Rewind icon from Lucide icons
 */
export function LuRewind(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"11 19 2 12 11 5 11 19"}},{tag:"polygon",attr:{"points":"22 19 13 12 22 5 22 19"},child:[]}]})(props);
}
/**
 * Ribbon icon from Lucide icons
 */
export function LuRibbon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"}},{tag:"path",attr:{d:"m12 18 2.57-3.5"},child:[]},{tag:"path",attr:{d:"M6.243 9.016a7 7 0 0 1 11.507-.009"},child:[]},{tag:"path",attr:{d:"M9.35 14.53 12 11.22"},child:[]},{tag:"path",attr:{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"},child:[]}]})(props);
}
/**
 * Rocket icon from Lucide icons
 */
export function LuRocket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}},{tag:"path",attr:{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"},child:[]},{tag:"path",attr:{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"},child:[]},{tag:"path",attr:{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"},child:[]}]})(props);
}
/**
 * RockingChair icon from Lucide icons
 */
export function LuRockingChair(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"3.5 2 6.5 12.5 18 12.5"}},{tag:"line",attr:{"x1":"9.5","x2":"5.5","y1":"12.5","y2":"20"},child:[]},{tag:"line",attr:{"x1":"15","x2":"18.5","y1":"12.5","y2":"20"},child:[]},{tag:"path",attr:{d:"M2.75 18a13 13 0 0 0 18.5 0"},child:[]}]})(props);
}
/**
 * RollerCoaster icon from Lucide icons
 */
export function LuRollerCoaster(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 19V5"}},{tag:"path",attr:{d:"M10 19V6.8"},child:[]},{tag:"path",attr:{d:"M14 19v-7.8"},child:[]},{tag:"path",attr:{d:"M18 5v4"},child:[]},{tag:"path",attr:{d:"M18 19v-6"},child:[]},{tag:"path",attr:{d:"M22 19V9"},child:[]},{tag:"path",attr:{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"},child:[]}]})(props);
}
/**
 * Rotate3D icon from Lucide icons
 */
export function LuRotate3D(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}},{tag:"path",attr:{d:"m15.194 13.707 3.814 1.86-1.86 3.814"},child:[]},{tag:"path",attr:{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"},child:[]}]})(props);
}
/**
 * RotateCcw icon from Lucide icons
 */
export function LuRotateCcw(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attr:{d:"M3 3v5h5"},child:[]}]})(props);
}
/**
 * RotateCcwSquare icon from Lucide icons
 */
export function LuRotateCcwSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 9V7a2 2 0 0 0-2-2h-6"}},{tag:"path",attr:{d:"m15 2-3 3 3 3"},child:[]},{tag:"path",attr:{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"},child:[]}]})(props);
}
/**
 * RotateCw icon from Lucide icons
 */
export function LuRotateCw(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}},{tag:"path",attr:{d:"M21 3v5h-5"},child:[]}]})(props);
}
/**
 * RotateCwSquare icon from Lucide icons
 */
export function LuRotateCwSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5H6a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"m9 8 3-3-3-3"},child:[]},{tag:"path",attr:{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"},child:[]}]})(props);
}
/**
 * Route icon from Lucide icons
 */
export function LuRoute(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"6","cy":"19","r":"3"}},{tag:"path",attr:{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"5","r":"3"},child:[]}]})(props);
}
/**
 * RouteOff icon from Lucide icons
 */
export function LuRouteOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"6","cy":"19","r":"3"}},{tag:"path",attr:{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"},child:[]},{tag:"path",attr:{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"},child:[]},{tag:"path",attr:{d:"M15 5h-4.3"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"5","r":"3"},child:[]}]})(props);
}
/**
 * Router icon from Lucide icons
 */
export function LuRouter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"8",x:"2",y:"14","rx":"2"}},{tag:"path",attr:{d:"M6.01 18H6"},child:[]},{tag:"path",attr:{d:"M10.01 18H10"},child:[]},{tag:"path",attr:{d:"M15 10v4"},child:[]},{tag:"path",attr:{d:"M17.84 7.17a4 4 0 0 0-5.66 0"},child:[]},{tag:"path",attr:{d:"M20.66 4.34a8 8 0 0 0-11.31 0"},child:[]}]})(props);
}
/**
 * Rows2 icon from Lucide icons
 */
export function LuRows2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M3 12h18"},child:[]}]})(props);
}
/**
 * Rows3 icon from Lucide icons
 */
export function LuRows3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M21 9H3"},child:[]},{tag:"path",attr:{d:"M21 15H3"},child:[]}]})(props);
}
/**
 * Rows4 icon from Lucide icons
 */
export function LuRows4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M21 7.5H3"},child:[]},{tag:"path",attr:{d:"M21 12H3"},child:[]},{tag:"path",attr:{d:"M21 16.5H3"},child:[]}]})(props);
}
/**
 * Rss icon from Lucide icons
 */
export function LuRss(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 11a9 9 0 0 1 9 9"}},{tag:"path",attr:{d:"M4 4a16 16 0 0 1 16 16"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"19","r":"1"},child:[]}]})(props);
}
/**
 * Ruler icon from Lucide icons
 */
export function LuRuler(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}},{tag:"path",attr:{d:"m14.5 12.5 2-2"},child:[]},{tag:"path",attr:{d:"m11.5 9.5 2-2"},child:[]},{tag:"path",attr:{d:"m8.5 6.5 2-2"},child:[]},{tag:"path",attr:{d:"m17.5 15.5 2-2"},child:[]}]})(props);
}
/**
 * RussianRuble icon from Lucide icons
 */
export function LuRussianRuble(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}},{tag:"path",attr:{d:"M6 15h8"},child:[]}]})(props);
}
/**
 * Sailboat icon from Lucide icons
 */
export function LuSailboat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}},{tag:"path",attr:{d:"M21 14 10 2 3 14h18Z"},child:[]},{tag:"path",attr:{d:"M10 2v16"},child:[]}]})(props);
}
/**
 * Salad icon from Lucide icons
 */
export function LuSalad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 21h10"}},{tag:"path",attr:{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"},child:[]},{tag:"path",attr:{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"},child:[]},{tag:"path",attr:{d:"m13 12 4-4"},child:[]},{tag:"path",attr:{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"},child:[]}]})(props);
}
/**
 * Sandwich icon from Lucide icons
 */
export function LuSandwich(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"}},{tag:"path",attr:{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"},child:[]},{tag:"path",attr:{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"},child:[]},{tag:"path",attr:{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"},child:[]},{tag:"rect",attr:{"width":"20","height":"4",x:"2",y:"11","rx":"1"},child:[]}]})(props);
}
/**
 * Satellite icon from Lucide icons
 */
export function LuSatellite(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 7 9 3 5 7l4 4"}},{tag:"path",attr:{d:"m17 11 4 4-4 4-4-4"},child:[]},{tag:"path",attr:{d:"m8 12 4 4 6-6-4-4Z"},child:[]},{tag:"path",attr:{d:"m16 8 3-3"},child:[]},{tag:"path",attr:{d:"M9 21a6 6 0 0 0-6-6"},child:[]}]})(props);
}
/**
 * SatelliteDish icon from Lucide icons
 */
export function LuSatelliteDish(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}},{tag:"path",attr:{d:"m9 15 3-3"},child:[]},{tag:"path",attr:{d:"M17 13a6 6 0 0 0-6-6"},child:[]},{tag:"path",attr:{d:"M21 13A10 10 0 0 0 11 3"},child:[]}]})(props);
}
/**
 * Save icon from Lucide icons
 */
export function LuSave(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}},{tag:"path",attr:{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"},child:[]},{tag:"path",attr:{d:"M7 3v4a1 1 0 0 0 1 1h7"},child:[]}]})(props);
}
/**
 * SaveAll icon from Lucide icons
 */
export function LuSaveAll(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2v3a1 1 0 0 0 1 1h5"}},{tag:"path",attr:{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"},child:[]},{tag:"path",attr:{d:"M18 22H4a2 2 0 0 1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"},child:[]}]})(props);
}
/**
 * SaveOff icon from Lucide icons
 */
export function LuSaveOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 13H8a1 1 0 0 0-1 1v7"}},{tag:"path",attr:{d:"M14 8h1"},child:[]},{tag:"path",attr:{d:"M17 21v-4"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"},child:[]},{tag:"path",attr:{d:"M29.5 11.5s5 5 4 5"},child:[]},{tag:"path",attr:{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"},child:[]}]})(props);
}
/**
 * Scale icon from Lucide icons
 */
export function LuScale(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}},{tag:"path",attr:{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"},child:[]},{tag:"path",attr:{d:"M7 21h10"},child:[]},{tag:"path",attr:{d:"M12 3v18"},child:[]},{tag:"path",attr:{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"},child:[]}]})(props);
}
/**
 * Scale3D icon from Lucide icons
 */
export function LuScale3D(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 7v11a1 1 0 0 0 1 1h11"}},{tag:"path",attr:{d:"M5.293 18.707 11 13"},child:[]},{tag:"circle",attr:{"cx":"19","cy":"19","r":"2"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"5","r":"2"},child:[]}]})(props);
}
/**
 * Scaling icon from Lucide icons
 */
export function LuScaling(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attr:{d:"M14 15H9v-5"},child:[]},{tag:"path",attr:{d:"M16 3h5v5"},child:[]},{tag:"path",attr:{d:"M21 3 9 15"},child:[]}]})(props);
}
/**
 * Scan icon from Lucide icons
 */
export function LuScan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2h2"}},{tag:"path",attr:{d:"M17 3h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M7 21H5a2 2 0 0 1-2-2v-2"},child:[]}]})(props);
}
/**
 * ScanBarcode icon from Lucide icons
 */
export function LuScanBarcode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2h2"}},{tag:"path",attr:{d:"M17 3h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M7 21H5a2 2 0 0 1-2-2v-2"},child:[]},{tag:"path",attr:{d:"M8 7v10"},child:[]},{tag:"path",attr:{d:"M12 7v10"},child:[]},{tag:"path",attr:{d:"M17 7v10"},child:[]}]})(props);
}
/**
 * ScanEye icon from Lucide icons
 */
export function LuScanEye(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2h2"}},{tag:"path",attr:{d:"M17 3h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M7 21H5a2 2 0 0 1-2-2v-2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"1"},child:[]},{tag:"path",attr:{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"},child:[]}]})(props);
}
/**
 * ScanFace icon from Lucide icons
 */
export function LuScanFace(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2h2"}},{tag:"path",attr:{d:"M17 3h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M7 21H5a2 2 0 0 1-2-2v-2"},child:[]},{tag:"path",attr:{d:"M8 14s1.5 2 4 2 4-2 4-2"},child:[]},{tag:"path",attr:{d:"M9 9h.01"},child:[]},{tag:"path",attr:{d:"M15 9h.01"},child:[]}]})(props);
}
/**
 * ScanLine icon from Lucide icons
 */
export function LuScanLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2h2"}},{tag:"path",attr:{d:"M17 3h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M7 21H5a2 2 0 0 1-2-2v-2"},child:[]},{tag:"path",attr:{d:"M7 12h10"},child:[]}]})(props);
}
/**
 * ScanQrCode icon from Lucide icons
 */
export function LuScanQrCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 12v4a1 1 0 0 1-1 1h-4"}},{tag:"path",attr:{d:"M17 3h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M17 8V7"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"M7 17h.01"},child:[]},{tag:"path",attr:{d:"M7 21H5a2 2 0 0 1-2-2v-2"},child:[]},{tag:"rect",attr:{x:"7",y:"7","width":"5","height":"5","rx":"1"},child:[]}]})(props);
}
/**
 * ScanSearch icon from Lucide icons
 */
export function LuScanSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2h2"}},{tag:"path",attr:{d:"M17 3h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M7 21H5a2 2 0 0 1-2-2v-2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]},{tag:"path",attr:{d:"m16 16-1.9-1.9"},child:[]}]})(props);
}
/**
 * ScanText icon from Lucide icons
 */
export function LuScanText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2h2"}},{tag:"path",attr:{d:"M17 3h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M7 21H5a2 2 0 0 1-2-2v-2"},child:[]},{tag:"path",attr:{d:"M7 8h8"},child:[]},{tag:"path",attr:{d:"M7 12h10"},child:[]},{tag:"path",attr:{d:"M7 16h6"},child:[]}]})(props);
}
/**
 * School icon from Lucide icons
 */
export function LuSchool(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 22v-4a2 2 0 1 0-4 0v4"}},{tag:"path",attr:{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"},child:[]},{tag:"path",attr:{d:"M18 5v17"},child:[]},{tag:"path",attr:{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"},child:[]},{tag:"path",attr:{d:"M6 5v17"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"9","r":"2"},child:[]}]})(props);
}
/**
 * Scissors icon from Lucide icons
 */
export function LuScissors(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"}},{tag:"path",attr:{d:"M8.12 8.12 12 12"},child:[]},{tag:"path",attr:{d:"M20 4 8.12 15.88"},child:[]},{tag:"circle",attr:{"cx":"6","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"M14.8 14.8 20 20"},child:[]}]})(props);
}
/**
 * ScissorsLineDashed icon from Lucide icons
 */
export function LuScissorsLineDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5.42 9.42 8 12"}},{tag:"circle",attr:{"cx":"4","cy":"8","r":"2"},child:[]},{tag:"path",attr:{d:"m14 6-8.58 8.58"},child:[]},{tag:"circle",attr:{"cx":"4","cy":"16","r":"2"},child:[]},{tag:"path",attr:{d:"M10.8 14.8 14 18"},child:[]},{tag:"path",attr:{d:"M16 12h-2"},child:[]},{tag:"path",attr:{d:"M22 12h-2"},child:[]}]})(props);
}
/**
 * ScreenShare icon from Lucide icons
 */
export function LuScreenShare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}},{tag:"path",attr:{d:"M8 21h8"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]},{tag:"path",attr:{d:"m17 8 5-5"},child:[]},{tag:"path",attr:{d:"M17 3h5v5"},child:[]}]})(props);
}
/**
 * ScreenShareOff icon from Lucide icons
 */
export function LuScreenShareOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}},{tag:"path",attr:{d:"M8 21h8"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]},{tag:"path",attr:{d:"m22 3-5 5"},child:[]},{tag:"path",attr:{d:"m17 3 5 5"},child:[]}]})(props);
}
/**
 * Scroll icon from Lucide icons
 */
export function LuScroll(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 17V5a2 2 0 0 0-2-2H4"}},{tag:"path",attr:{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"},child:[]}]})(props);
}
/**
 * ScrollText icon from Lucide icons
 */
export function LuScrollText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 12h-5"}},{tag:"path",attr:{d:"M15 8h-5"},child:[]},{tag:"path",attr:{d:"M19 17V5a2 2 0 0 0-2-2H4"},child:[]},{tag:"path",attr:{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"},child:[]}]})(props);
}
/**
 * Search icon from Lucide icons
 */
export function LuSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"11","cy":"11","r":"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(props);
}
/**
 * SearchCheck icon from Lucide icons
 */
export function LuSearchCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m8 11 2 2 4-4"}},{tag:"circle",attr:{"cx":"11","cy":"11","r":"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(props);
}
/**
 * SearchCode icon from Lucide icons
 */
export function LuSearchCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m13 13.5 2-2.5-2-2.5"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]},{tag:"path",attr:{d:"M9 8.5 7 11l2 2.5"},child:[]},{tag:"circle",attr:{"cx":"11","cy":"11","r":"8"},child:[]}]})(props);
}
/**
 * SearchSlash icon from Lucide icons
 */
export function LuSearchSlash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m13.5 8.5-5 5"}},{tag:"circle",attr:{"cx":"11","cy":"11","r":"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(props);
}
/**
 * SearchX icon from Lucide icons
 */
export function LuSearchX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m13.5 8.5-5 5"}},{tag:"path",attr:{d:"m8.5 8.5 5 5"},child:[]},{tag:"circle",attr:{"cx":"11","cy":"11","r":"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(props);
}
/**
 * Section icon from Lucide icons
 */
export function LuSection(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"}},{tag:"path",attr:{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"},child:[]}]})(props);
}
/**
 * Send icon from Lucide icons
 */
export function LuSend(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}},{tag:"path",attr:{d:"m21.854 2.147-10.94 10.939"},child:[]}]})(props);
}
/**
 * SendHorizontal icon from Lucide icons
 */
export function LuSendHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"}},{tag:"path",attr:{d:"M6 12h16"},child:[]}]})(props);
}
/**
 * SendToBack icon from Lucide icons
 */
export function LuSendToBack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"14","width":"8","height":"8","rx":"2"}},{tag:"rect",attr:{x:"2",y:"2","width":"8","height":"8","rx":"2"},child:[]},{tag:"path",attr:{d:"M7 14v1a2 2 0 0 0 2 2h1"},child:[]},{tag:"path",attr:{d:"M14 7h1a2 2 0 0 1 2 2v1"},child:[]}]})(props);
}
/**
 * SeparatorHorizontal icon from Lucide icons
 */
export function LuSeparatorHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"3","x2":"21","y1":"12","y2":"12"}},{tag:"polyline",attr:{"points":"8 8 12 4 16 8"},child:[]},{tag:"polyline",attr:{"points":"16 16 12 20 8 16"},child:[]}]})(props);
}
/**
 * SeparatorVertical icon from Lucide icons
 */
export function LuSeparatorVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"12","x2":"12","y1":"3","y2":"21"}},{tag:"polyline",attr:{"points":"8 8 4 12 8 16"},child:[]},{tag:"polyline",attr:{"points":"16 16 20 12 16 8"},child:[]}]})(props);
}
/**
 * Server icon from Lucide icons
 */
export function LuServer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"8",x:"2",y:"2","rx":"2","ry":"2"}},{tag:"rect",attr:{"width":"20","height":"8",x:"2",y:"14","rx":"2","ry":"2"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6.01","y1":"6","y2":"6"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6.01","y1":"18","y2":"18"},child:[]}]})(props);
}
/**
 * ServerCog icon from Lucide icons
 */
export function LuServerCog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"}},{tag:"path",attr:{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"},child:[]},{tag:"path",attr:{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"},child:[]},{tag:"path",attr:{d:"M6 6h.01"},child:[]},{tag:"path",attr:{d:"M6 18h.01"},child:[]},{tag:"path",attr:{d:"m15.7 13.4-.9-.3"},child:[]},{tag:"path",attr:{d:"m9.2 10.9-.9-.3"},child:[]},{tag:"path",attr:{d:"m10.6 15.7.3-.9"},child:[]},{tag:"path",attr:{d:"m13.6 15.7-.4-1"},child:[]},{tag:"path",attr:{d:"m10.8 9.3-.4-1"},child:[]},{tag:"path",attr:{d:"m8.3 13.6 1-.4"},child:[]},{tag:"path",attr:{d:"m14.7 10.8 1-.4"},child:[]},{tag:"path",attr:{d:"m13.4 8.3-.3.9"},child:[]}]})(props);
}
/**
 * ServerCrash icon from Lucide icons
 */
export function LuServerCrash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}},{tag:"path",attr:{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"},child:[]},{tag:"path",attr:{d:"M6 6h.01"},child:[]},{tag:"path",attr:{d:"M6 18h.01"},child:[]},{tag:"path",attr:{d:"m13 6-4 6h6l-4 6"},child:[]}]})(props);
}
/**
 * ServerOff icon from Lucide icons
 */
export function LuServerOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}},{tag:"path",attr:{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"},child:[]},{tag:"path",attr:{d:"M22 17v-1a2 2 0 0 0-2-2h-1"},child:[]},{tag:"path",attr:{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"},child:[]},{tag:"path",attr:{d:"M6 18h.01"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * Settings icon from Lucide icons
 */
export function LuSettings(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]}]})(props);
}
/**
 * Settings2 icon from Lucide icons
 */
export function LuSettings2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 7h-9"}},{tag:"path",attr:{d:"M14 17H5"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"17","r":"3"},child:[]},{tag:"circle",attr:{"cx":"7","cy":"7","r":"3"},child:[]}]})(props);
}
/**
 * Shapes icon from Lucide icons
 */
export function LuShapes(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}},{tag:"rect",attr:{x:"3",y:"14","width":"7","height":"7","rx":"1"},child:[]},{tag:"circle",attr:{"cx":"17.5","cy":"17.5","r":"3.5"},child:[]}]})(props);
}
/**
 * Share icon from Lucide icons
 */
export function LuShare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}},{tag:"polyline",attr:{"points":"16 6 12 2 8 6"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"2","y2":"15"},child:[]}]})(props);
}
/**
 * Share2 icon from Lucide icons
 */
export function LuShare2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"18","cy":"5","r":"3"}},{tag:"circle",attr:{"cx":"6","cy":"12","r":"3"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"19","r":"3"},child:[]},{tag:"line",attr:{"x1":"8.59","x2":"15.42","y1":"13.51","y2":"17.49"},child:[]},{tag:"line",attr:{"x1":"15.41","x2":"8.59","y1":"6.51","y2":"10.49"},child:[]}]})(props);
}
/**
 * Sheet icon from Lucide icons
 */
export function LuSheet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"3","x2":"21","y1":"9","y2":"9"},child:[]},{tag:"line",attr:{"x1":"3","x2":"21","y1":"15","y2":"15"},child:[]},{tag:"line",attr:{"x1":"9","x2":"9","y1":"9","y2":"21"},child:[]},{tag:"line",attr:{"x1":"15","x2":"15","y1":"9","y2":"21"},child:[]}]})(props);
}
/**
 * Shell icon from Lucide icons
 */
export function LuShell(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}}]})(props);
}
/**
 * Shield icon from Lucide icons
 */
export function LuShield(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}}]})(props);
}
/**
 * ShieldAlert icon from Lucide icons
 */
export function LuShieldAlert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}},{tag:"path",attr:{d:"M12 8v4"},child:[]},{tag:"path",attr:{d:"M12 16h.01"},child:[]}]})(props);
}
/**
 * ShieldBan icon from Lucide icons
 */
export function LuShieldBan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}},{tag:"path",attr:{d:"m4.243 5.21 14.39 12.472"},child:[]}]})(props);
}
/**
 * ShieldCheck icon from Lucide icons
 */
export function LuShieldCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(props);
}
/**
 * ShieldEllipsis icon from Lucide icons
 */
export function LuShieldEllipsis(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}},{tag:"path",attr:{d:"M8 12h.01"},child:[]},{tag:"path",attr:{d:"M12 12h.01"},child:[]},{tag:"path",attr:{d:"M16 12h.01"},child:[]}]})(props);
}
/**
 * ShieldHalf icon from Lucide icons
 */
export function LuShieldHalf(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}},{tag:"path",attr:{d:"M12 22V2"},child:[]}]})(props);
}
/**
 * ShieldMinus icon from Lucide icons
 */
export function LuShieldMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}},{tag:"path",attr:{d:"M9 12h6"},child:[]}]})(props);
}
/**
 * ShieldOff icon from Lucide icons
 */
export function LuShieldOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 2 20 20"}},{tag:"path",attr:{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"},child:[]},{tag:"path",attr:{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"},child:[]}]})(props);
}
/**
 * ShieldPlus icon from Lucide icons
 */
export function LuShieldPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}},{tag:"path",attr:{d:"M9 12h6"},child:[]},{tag:"path",attr:{d:"M12 9v6"},child:[]}]})(props);
}
/**
 * ShieldQuestion icon from Lucide icons
 */
export function LuShieldQuestion(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}},{tag:"path",attr:{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(props);
}
/**
 * ShieldX icon from Lucide icons
 */
export function LuShieldX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}},{tag:"path",attr:{d:"m14.5 9.5-5 5"},child:[]},{tag:"path",attr:{d:"m9.5 9.5 5 5"},child:[]}]})(props);
}
/**
 * Ship icon from Lucide icons
 */
export function LuShip(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 10.189V14"}},{tag:"path",attr:{d:"M12 2v3"},child:[]},{tag:"path",attr:{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"},child:[]},{tag:"path",attr:{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"},child:[]},{tag:"path",attr:{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"},child:[]}]})(props);
}
/**
 * ShipWheel icon from Lucide icons
 */
export function LuShipWheel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"8"}},{tag:"path",attr:{d:"M12 2v7.5"},child:[]},{tag:"path",attr:{d:"m19 5-5.23 5.23"},child:[]},{tag:"path",attr:{d:"M22 12h-7.5"},child:[]},{tag:"path",attr:{d:"m19 19-5.23-5.23"},child:[]},{tag:"path",attr:{d:"M12 14.5V22"},child:[]},{tag:"path",attr:{d:"M10.23 13.77 5 19"},child:[]},{tag:"path",attr:{d:"M9.5 12H2"},child:[]},{tag:"path",attr:{d:"M10.23 10.23 5 5"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2.5"},child:[]}]})(props);
}
/**
 * Shirt icon from Lucide icons
 */
export function LuShirt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}}]})(props);
}
/**
 * ShoppingBag icon from Lucide icons
 */
export function LuShoppingBag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}},{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M16 10a4 4 0 0 1-8 0"},child:[]}]})(props);
}
/**
 * ShoppingBasket icon from Lucide icons
 */
export function LuShoppingBasket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15 11-1 9"}},{tag:"path",attr:{d:"m19 11-4-7"},child:[]},{tag:"path",attr:{d:"M2 11h20"},child:[]},{tag:"path",attr:{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"},child:[]},{tag:"path",attr:{d:"M4.5 15.5h15"},child:[]},{tag:"path",attr:{d:"m5 11 4-7"},child:[]},{tag:"path",attr:{d:"m9 11 1 9"},child:[]}]})(props);
}
/**
 * ShoppingCart icon from Lucide icons
 */
export function LuShoppingCart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"8","cy":"21","r":"1"}},{tag:"circle",attr:{"cx":"19","cy":"21","r":"1"},child:[]},{tag:"path",attr:{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"},child:[]}]})(props);
}
/**
 * Shovel icon from Lucide icons
 */
export function LuShovel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 22v-5l5-5 5 5-5 5z"}},{tag:"path",attr:{d:"M9.5 14.5 16 8"},child:[]},{tag:"path",attr:{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"},child:[]}]})(props);
}
/**
 * ShowerHead icon from Lucide icons
 */
export function LuShowerHead(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m4 4 2.5 2.5"}},{tag:"path",attr:{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"},child:[]},{tag:"path",attr:{d:"M15 5 5 15"},child:[]},{tag:"path",attr:{d:"M14 17v.01"},child:[]},{tag:"path",attr:{d:"M10 16v.01"},child:[]},{tag:"path",attr:{d:"M13 13v.01"},child:[]},{tag:"path",attr:{d:"M16 10v.01"},child:[]},{tag:"path",attr:{d:"M11 20v.01"},child:[]},{tag:"path",attr:{d:"M17 14v.01"},child:[]},{tag:"path",attr:{d:"M20 11v.01"},child:[]}]})(props);
}
/**
 * Shrink icon from Lucide icons
 */
export function LuShrink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}},{tag:"path",attr:{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"},child:[]},{tag:"path",attr:{d:"M15 4.2V9m0 0h4.8M15 9l6-6"},child:[]},{tag:"path",attr:{d:"M9 4.2V9m0 0H4.2M9 9 3 3"},child:[]}]})(props);
}
/**
 * Shrub icon from Lucide icons
 */
export function LuShrub(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22v-7l-2-2"}},{tag:"path",attr:{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z"},child:[]},{tag:"path",attr:{d:"m14 14-2 2"},child:[]}]})(props);
}
/**
 * Shuffle icon from Lucide icons
 */
export function LuShuffle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 14 4 4-4 4"}},{tag:"path",attr:{d:"m18 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"},child:[]},{tag:"path",attr:{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"},child:[]},{tag:"path",attr:{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"},child:[]}]})(props);
}
/**
 * Sigma icon from Lucide icons
 */
export function LuSigma(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"}}]})(props);
}
/**
 * Signal icon from Lucide icons
 */
export function LuSignal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 20h.01"}},{tag:"path",attr:{d:"M7 20v-4"},child:[]},{tag:"path",attr:{d:"M12 20v-8"},child:[]},{tag:"path",attr:{d:"M17 20V8"},child:[]},{tag:"path",attr:{d:"M22 4v16"},child:[]}]})(props);
}
/**
 * SignalHigh icon from Lucide icons
 */
export function LuSignalHigh(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 20h.01"}},{tag:"path",attr:{d:"M7 20v-4"},child:[]},{tag:"path",attr:{d:"M12 20v-8"},child:[]},{tag:"path",attr:{d:"M17 20V8"},child:[]}]})(props);
}
/**
 * SignalLow icon from Lucide icons
 */
export function LuSignalLow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 20h.01"}},{tag:"path",attr:{d:"M7 20v-4"},child:[]}]})(props);
}
/**
 * SignalMedium icon from Lucide icons
 */
export function LuSignalMedium(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 20h.01"}},{tag:"path",attr:{d:"M7 20v-4"},child:[]},{tag:"path",attr:{d:"M12 20v-8"},child:[]}]})(props);
}
/**
 * SignalZero icon from Lucide icons
 */
export function LuSignalZero(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 20h.01"}}]})(props);
}
/**
 * Signature icon from Lucide icons
 */
export function LuSignature(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"}},{tag:"path",attr:{d:"M3 21h18"},child:[]}]})(props);
}
/**
 * Signpost icon from Lucide icons
 */
export function LuSignpost(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13v8"}},{tag:"path",attr:{d:"M12 3v3"},child:[]},{tag:"path",attr:{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"},child:[]}]})(props);
}
/**
 * SignpostBig icon from Lucide icons
 */
export function LuSignpostBig(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 9H4L2 7l2-2h6"}},{tag:"path",attr:{d:"M14 5h6l2 2-2 2h-6"},child:[]},{tag:"path",attr:{d:"M10 22V4a2 2 0 1 1 4 0v18"},child:[]},{tag:"path",attr:{d:"M8 22h8"},child:[]}]})(props);
}
/**
 * Siren icon from Lucide icons
 */
export function LuSiren(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 18v-6a5 5 0 1 1 10 0v6"}},{tag:"path",attr:{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"},child:[]},{tag:"path",attr:{d:"M21 12h1"},child:[]},{tag:"path",attr:{d:"M18.5 4.5 18 5"},child:[]},{tag:"path",attr:{d:"M2 12h1"},child:[]},{tag:"path",attr:{d:"M12 2v1"},child:[]},{tag:"path",attr:{d:"m4.929 4.929.707.707"},child:[]},{tag:"path",attr:{d:"M12 12v6"},child:[]}]})(props);
}
/**
 * SkipBack icon from Lucide icons
 */
export function LuSkipBack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"19 20 9 12 19 4 19 20"}},{tag:"line",attr:{"x1":"5","x2":"5","y1":"19","y2":"5"},child:[]}]})(props);
}
/**
 * SkipForward icon from Lucide icons
 */
export function LuSkipForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"5 4 15 12 5 20 5 4"}},{tag:"line",attr:{"x1":"19","x2":"19","y1":"5","y2":"19"},child:[]}]})(props);
}
/**
 * Skull icon from Lucide icons
 */
export function LuSkull(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12.5 17-.5-1-.5 1h1z"}},{tag:"path",attr:{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"12","r":"1"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"12","r":"1"},child:[]}]})(props);
}
/**
 * Slack icon from Lucide icons
 */
export function LuSlack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"3","height":"8",x:"13",y:"2","rx":"1.5"}},{tag:"path",attr:{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"},child:[]},{tag:"rect",attr:{"width":"3","height":"8",x:"8",y:"14","rx":"1.5"},child:[]},{tag:"path",attr:{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"},child:[]},{tag:"rect",attr:{"width":"8","height":"3",x:"14",y:"13","rx":"1.5"},child:[]},{tag:"path",attr:{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"},child:[]},{tag:"rect",attr:{"width":"8","height":"3",x:"2",y:"8","rx":"1.5"},child:[]},{tag:"path",attr:{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"},child:[]}]})(props);
}
/**
 * Slash icon from Lucide icons
 */
export function LuSlash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 2 2 22"}}]})(props);
}
/**
 * Slice icon from Lucide icons
 */
export function LuSlice(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"}}]})(props);
}
/**
 * SlidersHorizontal icon from Lucide icons
 */
export function LuSlidersHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"21","x2":"14","y1":"4","y2":"4"}},{tag:"line",attr:{"x1":"10","x2":"3","y1":"4","y2":"4"},child:[]},{tag:"line",attr:{"x1":"21","x2":"12","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"8","x2":"3","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"21","x2":"16","y1":"20","y2":"20"},child:[]},{tag:"line",attr:{"x1":"12","x2":"3","y1":"20","y2":"20"},child:[]},{tag:"line",attr:{"x1":"14","x2":"14","y1":"2","y2":"6"},child:[]},{tag:"line",attr:{"x1":"8","x2":"8","y1":"10","y2":"14"},child:[]},{tag:"line",attr:{"x1":"16","x2":"16","y1":"18","y2":"22"},child:[]}]})(props);
}
/**
 * SlidersVertical icon from Lucide icons
 */
export function LuSlidersVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"4","x2":"4","y1":"21","y2":"14"}},{tag:"line",attr:{"x1":"4","x2":"4","y1":"10","y2":"3"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"21","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"8","y2":"3"},child:[]},{tag:"line",attr:{"x1":"20","x2":"20","y1":"21","y2":"16"},child:[]},{tag:"line",attr:{"x1":"20","x2":"20","y1":"12","y2":"3"},child:[]},{tag:"line",attr:{"x1":"2","x2":"6","y1":"14","y2":"14"},child:[]},{tag:"line",attr:{"x1":"10","x2":"14","y1":"8","y2":"8"},child:[]},{tag:"line",attr:{"x1":"18","x2":"22","y1":"16","y2":"16"},child:[]}]})(props);
}
/**
 * Smartphone icon from Lucide icons
 */
export function LuSmartphone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"20",x:"5",y:"2","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M12 18h.01"},child:[]}]})(props);
}
/**
 * SmartphoneCharging icon from Lucide icons
 */
export function LuSmartphoneCharging(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"20",x:"5",y:"2","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M12.667 8 10 12h4l-2.667 4"},child:[]}]})(props);
}
/**
 * SmartphoneNfc icon from Lucide icons
 */
export function LuSmartphoneNfc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"7","height":"12",x:"2",y:"6","rx":"1"}},{tag:"path",attr:{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"},child:[]},{tag:"path",attr:{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"},child:[]},{tag:"path",attr:{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"},child:[]}]})(props);
}
/**
 * Smile icon from Lucide icons
 */
export function LuSmile(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M8 14s1.5 2 4 2 4-2 4-2"},child:[]},{tag:"line",attr:{"x1":"9","x2":"9.01","y1":"9","y2":"9"},child:[]},{tag:"line",attr:{"x1":"15","x2":"15.01","y1":"9","y2":"9"},child:[]}]})(props);
}
/**
 * SmilePlus icon from Lucide icons
 */
export function LuSmilePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11v1a10 10 0 1 1-9-10"}},{tag:"path",attr:{d:"M8 14s1.5 2 4 2 4-2 4-2"},child:[]},{tag:"line",attr:{"x1":"9","x2":"9.01","y1":"9","y2":"9"},child:[]},{tag:"line",attr:{"x1":"15","x2":"15.01","y1":"9","y2":"9"},child:[]},{tag:"path",attr:{d:"M16 5h6"},child:[]},{tag:"path",attr:{d:"M19 2v6"},child:[]}]})(props);
}
/**
 * Snail icon from Lucide icons
 */
export function LuSnail(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}},{tag:"circle",attr:{"cx":"10","cy":"13","r":"8"},child:[]},{tag:"path",attr:{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"},child:[]},{tag:"path",attr:{d:"M18 3 19.1 5.2"},child:[]},{tag:"path",attr:{d:"M22 3 20.9 5.2"},child:[]}]})(props);
}
/**
 * Snowflake icon from Lucide icons
 */
export function LuSnowflake(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"2","x2":"22","y1":"12","y2":"12"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"2","y2":"22"},child:[]},{tag:"path",attr:{d:"m20 16-4-4 4-4"},child:[]},{tag:"path",attr:{d:"m4 8 4 4-4 4"},child:[]},{tag:"path",attr:{d:"m16 4-4 4-4-4"},child:[]},{tag:"path",attr:{d:"m8 20 4-4 4 4"},child:[]}]})(props);
}
/**
 * Sofa icon from Lucide icons
 */
export function LuSofa(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"},child:[]},{tag:"path",attr:{d:"M4 18v2"},child:[]},{tag:"path",attr:{d:"M20 18v2"},child:[]},{tag:"path",attr:{d:"M12 4v9"},child:[]}]})(props);
}
/**
 * Soup icon from Lucide icons
 */
export function LuSoup(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}},{tag:"path",attr:{d:"M7 21h10"},child:[]},{tag:"path",attr:{d:"M19.5 12 22 6"},child:[]},{tag:"path",attr:{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"},child:[]},{tag:"path",attr:{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"},child:[]},{tag:"path",attr:{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"},child:[]}]})(props);
}
/**
 * Space icon from Lucide icons
 */
export function LuSpace(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}}]})(props);
}
/**
 * Spade icon from Lucide icons
 */
export function LuSpade(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}},{tag:"path",attr:{d:"M12 18v4"},child:[]}]})(props);
}
/**
 * Sparkle icon from Lucide icons
 */
export function LuSparkle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}}]})(props);
}
/**
 * Sparkles icon from Lucide icons
 */
export function LuSparkles(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}},{tag:"path",attr:{d:"M20 3v4"},child:[]},{tag:"path",attr:{d:"M22 5h-4"},child:[]},{tag:"path",attr:{d:"M4 17v2"},child:[]},{tag:"path",attr:{d:"M5 18H3"},child:[]}]})(props);
}
/**
 * Speaker icon from Lucide icons
 */
export function LuSpeaker(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"20",x:"4",y:"2","rx":"2"}},{tag:"path",attr:{d:"M12 6h.01"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"14","r":"4"},child:[]},{tag:"path",attr:{d:"M12 14h.01"},child:[]}]})(props);
}
/**
 * Speech icon from Lucide icons
 */
export function LuSpeech(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}},{tag:"path",attr:{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"},child:[]},{tag:"path",attr:{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"},child:[]}]})(props);
}
/**
 * SpellCheck icon from Lucide icons
 */
export function LuSpellCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 16 6-12 6 12"}},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"m16 20 2 2 4-4"},child:[]}]})(props);
}
/**
 * SpellCheck2 icon from Lucide icons
 */
export function LuSpellCheck2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 16 6-12 6 12"}},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"},child:[]}]})(props);
}
/**
 * Spline icon from Lucide icons
 */
export function LuSpline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"19","cy":"5","r":"2"}},{tag:"circle",attr:{"cx":"5","cy":"19","r":"2"},child:[]},{tag:"path",attr:{d:"M5 17A12 12 0 0 1 17 5"},child:[]}]})(props);
}
/**
 * Split icon from Lucide icons
 */
export function LuSplit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 3h5v5"}},{tag:"path",attr:{d:"M8 3H3v5"},child:[]},{tag:"path",attr:{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"},child:[]},{tag:"path",attr:{d:"m15 9 6-6"},child:[]}]})(props);
}
/**
 * SprayCan icon from Lucide icons
 */
export function LuSprayCan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3h.01"}},{tag:"path",attr:{d:"M7 5h.01"},child:[]},{tag:"path",attr:{d:"M11 7h.01"},child:[]},{tag:"path",attr:{d:"M3 7h.01"},child:[]},{tag:"path",attr:{d:"M7 9h.01"},child:[]},{tag:"path",attr:{d:"M3 11h.01"},child:[]},{tag:"rect",attr:{"width":"4","height":"4",x:"15",y:"5"},child:[]},{tag:"path",attr:{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"},child:[]},{tag:"path",attr:{d:"m13 14 8-2"},child:[]},{tag:"path",attr:{d:"m13 19 8-2"},child:[]}]})(props);
}
/**
 * Sprout icon from Lucide icons
 */
export function LuSprout(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 20h10"}},{tag:"path",attr:{d:"M10 20c5.5-2.5.8-6.4 3-10"},child:[]},{tag:"path",attr:{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"},child:[]},{tag:"path",attr:{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"},child:[]}]})(props);
}
/**
 * Square icon from Lucide icons
 */
export function LuSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}}]})(props);
}
/**
 * SquareActivity icon from Lucide icons
 */
export function LuSquareActivity(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M17 12h-2l-2 5-2-10-2 5H7"},child:[]}]})(props);
}
/**
 * SquareArrowDown icon from Lucide icons
 */
export function LuSquareArrowDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M12 8v8"},child:[]},{tag:"path",attr:{d:"m8 12 4 4 4-4"},child:[]}]})(props);
}
/**
 * SquareArrowDownLeft icon from Lucide icons
 */
export function LuSquareArrowDownLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m16 8-8 8"},child:[]},{tag:"path",attr:{d:"M16 16H8V8"},child:[]}]})(props);
}
/**
 * SquareArrowDownRight icon from Lucide icons
 */
export function LuSquareArrowDownRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m8 8 8 8"},child:[]},{tag:"path",attr:{d:"M16 8v8H8"},child:[]}]})(props);
}
/**
 * SquareArrowLeft icon from Lucide icons
 */
export function LuSquareArrowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m12 8-4 4 4 4"},child:[]},{tag:"path",attr:{d:"M16 12H8"},child:[]}]})(props);
}
/**
 * SquareArrowOutDownLeft icon from Lucide icons
 */
export function LuSquareArrowOutDownLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}},{tag:"path",attr:{d:"m3 21 9-9"},child:[]},{tag:"path",attr:{d:"M9 21H3v-6"},child:[]}]})(props);
}
/**
 * SquareArrowOutDownRight icon from Lucide icons
 */
export function LuSquareArrowOutDownRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}},{tag:"path",attr:{d:"m21 21-9-9"},child:[]},{tag:"path",attr:{d:"M21 15v6h-6"},child:[]}]})(props);
}
/**
 * SquareArrowOutUpLeft icon from Lucide icons
 */
export function LuSquareArrowOutUpLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}},{tag:"path",attr:{d:"m3 3 9 9"},child:[]},{tag:"path",attr:{d:"M3 9V3h6"},child:[]}]})(props);
}
/**
 * SquareArrowOutUpRight icon from Lucide icons
 */
export function LuSquareArrowOutUpRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}},{tag:"path",attr:{d:"m21 3-9 9"},child:[]},{tag:"path",attr:{d:"M15 3h6v6"},child:[]}]})(props);
}
/**
 * SquareArrowRight icon from Lucide icons
 */
export function LuSquareArrowRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"m12 16 4-4-4-4"},child:[]}]})(props);
}
/**
 * SquareArrowUp icon from Lucide icons
 */
export function LuSquareArrowUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m16 12-4-4-4 4"},child:[]},{tag:"path",attr:{d:"M12 16V8"},child:[]}]})(props);
}
/**
 * SquareArrowUpLeft icon from Lucide icons
 */
export function LuSquareArrowUpLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M8 16V8h8"},child:[]},{tag:"path",attr:{d:"M16 16 8 8"},child:[]}]})(props);
}
/**
 * SquareArrowUpRight icon from Lucide icons
 */
export function LuSquareArrowUpRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M8 8h8v8"},child:[]},{tag:"path",attr:{d:"m8 16 8-8"},child:[]}]})(props);
}
/**
 * SquareAsterisk icon from Lucide icons
 */
export function LuSquareAsterisk(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M12 8v8"},child:[]},{tag:"path",attr:{d:"m8.5 14 7-4"},child:[]},{tag:"path",attr:{d:"m8.5 10 7 4"},child:[]}]})(props);
}
/**
 * SquareBottomDashedScissors icon from Lucide icons
 */
export function LuSquareBottomDashedScissors(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}},{tag:"path",attr:{d:"M10 22H8"},child:[]},{tag:"path",attr:{d:"M16 22h-2"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"8","r":"2"},child:[]},{tag:"path",attr:{d:"M9.414 9.414 12 12"},child:[]},{tag:"path",attr:{d:"M14.8 14.8 18 18"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"16","r":"2"},child:[]},{tag:"path",attr:{d:"m18 6-8.586 8.586"},child:[]}]})(props);
}
/**
 * SquareChartGantt icon from Lucide icons
 */
export function LuSquareChartGantt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M9 8h7"},child:[]},{tag:"path",attr:{d:"M8 12h6"},child:[]},{tag:"path",attr:{d:"M11 16h5"},child:[]}]})(props);
}
/**
 * SquareCheck icon from Lucide icons
 */
export function LuSquareCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(props);
}
/**
 * SquareCheckBig icon from Lucide icons
 */
export function LuSquareCheckBig(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"}},{tag:"path",attr:{d:"m9 11 3 3L22 4"},child:[]}]})(props);
}
/**
 * SquareChevronDown icon from Lucide icons
 */
export function LuSquareChevronDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m16 10-4 4-4-4"},child:[]}]})(props);
}
/**
 * SquareChevronLeft icon from Lucide icons
 */
export function LuSquareChevronLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m14 16-4-4 4-4"},child:[]}]})(props);
}
/**
 * SquareChevronRight icon from Lucide icons
 */
export function LuSquareChevronRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m10 8 4 4-4 4"},child:[]}]})(props);
}
/**
 * SquareChevronUp icon from Lucide icons
 */
export function LuSquareChevronUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m8 14 4-4 4 4"},child:[]}]})(props);
}
/**
 * SquareCode icon from Lucide icons
 */
export function LuSquareCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 9.5 8 12l2 2.5"}},{tag:"path",attr:{d:"m14 9.5 2 2.5-2 2.5"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"},child:[]}]})(props);
}
/**
 * SquareDashed icon from Lucide icons
 */
export function LuSquareDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 3a2 2 0 0 0-2 2"}},{tag:"path",attr:{d:"M19 3a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M21 19a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"M5 21a2 2 0 0 1-2-2"},child:[]},{tag:"path",attr:{d:"M9 3h1"},child:[]},{tag:"path",attr:{d:"M9 21h1"},child:[]},{tag:"path",attr:{d:"M14 3h1"},child:[]},{tag:"path",attr:{d:"M14 21h1"},child:[]},{tag:"path",attr:{d:"M3 9v1"},child:[]},{tag:"path",attr:{d:"M21 9v1"},child:[]},{tag:"path",attr:{d:"M3 14v1"},child:[]},{tag:"path",attr:{d:"M21 14v1"},child:[]}]})(props);
}
/**
 * SquareDashedBottom icon from Lucide icons
 */
export function LuSquareDashedBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}},{tag:"path",attr:{d:"M9 21h1"},child:[]},{tag:"path",attr:{d:"M14 21h1"},child:[]}]})(props);
}
/**
 * SquareDashedBottomCode icon from Lucide icons
 */
export function LuSquareDashedBottomCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 9.5 8 12l2 2.5"}},{tag:"path",attr:{d:"M14 21h1"},child:[]},{tag:"path",attr:{d:"m14 9.5 2 2.5-2 2.5"},child:[]},{tag:"path",attr:{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"M9 21h1"},child:[]}]})(props);
}
/**
 * SquareDashedKanban icon from Lucide icons
 */
export function LuSquareDashedKanban(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 7v7"}},{tag:"path",attr:{d:"M12 7v4"},child:[]},{tag:"path",attr:{d:"M16 7v9"},child:[]},{tag:"path",attr:{d:"M5 3a2 2 0 0 0-2 2"},child:[]},{tag:"path",attr:{d:"M9 3h1"},child:[]},{tag:"path",attr:{d:"M14 3h1"},child:[]},{tag:"path",attr:{d:"M19 3a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M21 9v1"},child:[]},{tag:"path",attr:{d:"M21 14v1"},child:[]},{tag:"path",attr:{d:"M21 19a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"M14 21h1"},child:[]},{tag:"path",attr:{d:"M9 21h1"},child:[]},{tag:"path",attr:{d:"M5 21a2 2 0 0 1-2-2"},child:[]},{tag:"path",attr:{d:"M3 14v1"},child:[]},{tag:"path",attr:{d:"M3 9v1"},child:[]}]})(props);
}
/**
 * SquareDashedMousePointer icon from Lucide icons
 */
export function LuSquareDashedMousePointer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}},{tag:"path",attr:{d:"M5 3a2 2 0 0 0-2 2"},child:[]},{tag:"path",attr:{d:"M19 3a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M5 21a2 2 0 0 1-2-2"},child:[]},{tag:"path",attr:{d:"M9 3h1"},child:[]},{tag:"path",attr:{d:"M9 21h2"},child:[]},{tag:"path",attr:{d:"M14 3h1"},child:[]},{tag:"path",attr:{d:"M3 9v1"},child:[]},{tag:"path",attr:{d:"M21 9v2"},child:[]},{tag:"path",attr:{d:"M3 14v1"},child:[]}]})(props);
}
/**
 * SquareDivide icon from Lucide icons
 */
export function LuSquareDivide(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"8","x2":"16","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"16","y2":"16"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"8","y2":"8"},child:[]}]})(props);
}
/**
 * SquareDot icon from Lucide icons
 */
export function LuSquareDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"1"},child:[]}]})(props);
}
/**
 * SquareEqual icon from Lucide icons
 */
export function LuSquareEqual(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M7 10h10"},child:[]},{tag:"path",attr:{d:"M7 14h10"},child:[]}]})(props);
}
/**
 * SquareFunction icon from Lucide icons
 */
export function LuSquareFunction(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"},child:[]},{tag:"path",attr:{d:"M9 11.2h5.7"},child:[]}]})(props);
}
/**
 * SquareKanban icon from Lucide icons
 */
export function LuSquareKanban(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M8 7v7"},child:[]},{tag:"path",attr:{d:"M12 7v4"},child:[]},{tag:"path",attr:{d:"M16 7v9"},child:[]}]})(props);
}
/**
 * SquareLibrary icon from Lucide icons
 */
export function LuSquareLibrary(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M7 7v10"},child:[]},{tag:"path",attr:{d:"M11 7v10"},child:[]},{tag:"path",attr:{d:"m15 7 2 10"},child:[]}]})(props);
}
/**
 * SquareM icon from Lucide icons
 */
export function LuSquareM(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M8 16V8l4 4 4-4v8"},child:[]}]})(props);
}
/**
 * SquareMenu icon from Lucide icons
 */
export function LuSquareMenu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M7 8h10"},child:[]},{tag:"path",attr:{d:"M7 12h10"},child:[]},{tag:"path",attr:{d:"M7 16h10"},child:[]}]})(props);
}
/**
 * SquareMinus icon from Lucide icons
 */
export function LuSquareMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M8 12h8"},child:[]}]})(props);
}
/**
 * SquareMousePointer icon from Lucide icons
 */
export function LuSquareMousePointer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}},{tag:"path",attr:{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"},child:[]}]})(props);
}
/**
 * SquareParking icon from Lucide icons
 */
export function LuSquareParking(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M9 17V7h4a3 3 0 0 1 0 6H9"},child:[]}]})(props);
}
/**
 * SquareParkingOff icon from Lucide icons
 */
export function LuSquareParkingOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}},{tag:"path",attr:{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M13 13a3 3 0 1 0 0-6H9v2"},child:[]},{tag:"path",attr:{d:"M9 17v-2.3"},child:[]}]})(props);
}
/**
 * SquarePen icon from Lucide icons
 */
export function LuSquarePen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attr:{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"},child:[]}]})(props);
}
/**
 * SquarePercent icon from Lucide icons
 */
export function LuSquarePercent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m15 9-6 6"},child:[]},{tag:"path",attr:{d:"M9 9h.01"},child:[]},{tag:"path",attr:{d:"M15 15h.01"},child:[]}]})(props);
}
/**
 * SquarePi icon from Lucide icons
 */
export function LuSquarePi(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M7 7h10"},child:[]},{tag:"path",attr:{d:"M10 7v10"},child:[]},{tag:"path",attr:{d:"M16 17a2 2 0 0 1-2-2V7"},child:[]}]})(props);
}
/**
 * SquarePilcrow icon from Lucide icons
 */
export function LuSquarePilcrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"},child:[]},{tag:"path",attr:{d:"M12 7v10"},child:[]},{tag:"path",attr:{d:"M16 7v10"},child:[]}]})(props);
}
/**
 * SquarePlay icon from Lucide icons
 */
export function LuSquarePlay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m9 8 6 4-6 4Z"},child:[]}]})(props);
}
/**
 * SquarePlus icon from Lucide icons
 */
export function LuSquarePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"M12 8v8"},child:[]}]})(props);
}
/**
 * SquarePower icon from Lucide icons
 */
export function LuSquarePower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 7v4"}},{tag:"path",attr:{d:"M7.998 9.003a5 5 0 1 0 8-.005"},child:[]},{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"2"},child:[]}]})(props);
}
/**
 * SquareRadical icon from Lucide icons
 */
export function LuSquareRadical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 12h2l2 5 2-10h4"}},{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"2"},child:[]}]})(props);
}
/**
 * SquareScissors icon from Lucide icons
 */
export function LuSquareScissors(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"20",x:"2",y:"2","rx":"2"}},{tag:"circle",attr:{"cx":"8","cy":"8","r":"2"},child:[]},{tag:"path",attr:{d:"M9.414 9.414 12 12"},child:[]},{tag:"path",attr:{d:"M14.8 14.8 18 18"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"16","r":"2"},child:[]},{tag:"path",attr:{d:"m18 6-8.586 8.586"},child:[]}]})(props);
}
/**
 * SquareSigma icon from Lucide icons
 */
export function LuSquareSigma(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"},child:[]}]})(props);
}
/**
 * SquareSlash icon from Lucide icons
 */
export function LuSquareSlash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"line",attr:{"x1":"9","x2":"15","y1":"15","y2":"9"},child:[]}]})(props);
}
/**
 * SquareSplitHorizontal icon from Lucide icons
 */
export function LuSquareSplitHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}},{tag:"path",attr:{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"4","y2":"20"},child:[]}]})(props);
}
/**
 * SquareSplitVertical icon from Lucide icons
 */
export function LuSquareSplitVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}},{tag:"path",attr:{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"},child:[]},{tag:"line",attr:{"x1":"4","x2":"20","y1":"12","y2":"12"},child:[]}]})(props);
}
/**
 * SquareSquare icon from Lucide icons
 */
export function LuSquareSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"2"}},{tag:"rect",attr:{x:"8",y:"8","width":"8","height":"8","rx":"1"},child:[]}]})(props);
}
/**
 * SquareStack icon from Lucide icons
 */
export function LuSquareStack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}},{tag:"path",attr:{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"},child:[]},{tag:"rect",attr:{"width":"8","height":"8",x:"14",y:"14","rx":"2"},child:[]}]})(props);
}
/**
 * SquareTerminal icon from Lucide icons
 */
export function LuSquareTerminal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 11 2-2-2-2"}},{tag:"path",attr:{d:"M11 13h4"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"},child:[]}]})(props);
}
/**
 * SquareUser icon from Lucide icons
 */
export function LuSquareUser(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"circle",attr:{"cx":"12","cy":"10","r":"3"},child:[]},{tag:"path",attr:{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"},child:[]}]})(props);
}
/**
 * SquareUserRound icon from Lucide icons
 */
export function LuSquareUserRound(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 21a6 6 0 0 0-12 0"}},{tag:"circle",attr:{"cx":"12","cy":"11","r":"4"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"},child:[]}]})(props);
}
/**
 * SquareX icon from Lucide icons
 */
export function LuSquareX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"path",attr:{d:"m15 9-6 6"},child:[]},{tag:"path",attr:{d:"m9 9 6 6"},child:[]}]})(props);
}
/**
 * Squircle icon from Lucide icons
 */
export function LuSquircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}}]})(props);
}
/**
 * Squirrel icon from Lucide icons
 */
export function LuSquirrel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.236 22a3 3 0 0 0-2.2-5"}},{tag:"path",attr:{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"},child:[]},{tag:"path",attr:{d:"M18 13h.01"},child:[]},{tag:"path",attr:{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"},child:[]}]})(props);
}
/**
 * Stamp icon from Lucide icons
 */
export function LuStamp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 22h14"}},{tag:"path",attr:{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"},child:[]},{tag:"path",attr:{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"},child:[]}]})(props);
}
/**
 * Star icon from Lucide icons
 */
export function LuStar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}}]})(props);
}
/**
 * StarHalf icon from Lucide icons
 */
export function LuStarHalf(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"}}]})(props);
}
/**
 * StarOff icon from Lucide icons
 */
export function LuStarOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}},{tag:"path",attr:{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * StepBack icon from Lucide icons
 */
export function LuStepBack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"18","x2":"18","y1":"20","y2":"4"}},{tag:"polygon",attr:{"points":"14,20 4,12 14,4"},child:[]}]})(props);
}
/**
 * StepForward icon from Lucide icons
 */
export function LuStepForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"6","x2":"6","y1":"4","y2":"20"}},{tag:"polygon",attr:{"points":"10,4 20,12 10,20"},child:[]}]})(props);
}
/**
 * Stethoscope icon from Lucide icons
 */
export function LuStethoscope(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 2v2"}},{tag:"path",attr:{d:"M5 2v2"},child:[]},{tag:"path",attr:{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"},child:[]},{tag:"path",attr:{d:"M8 15a6 6 0 0 0 12 0v-3"},child:[]},{tag:"circle",attr:{"cx":"20","cy":"10","r":"2"},child:[]}]})(props);
}
/**
 * Sticker icon from Lucide icons
 */
export function LuSticker(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}},{tag:"path",attr:{d:"M14 3v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M8 13h.01"},child:[]},{tag:"path",attr:{d:"M16 13h.01"},child:[]},{tag:"path",attr:{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"},child:[]}]})(props);
}
/**
 * StickyNote icon from Lucide icons
 */
export function LuStickyNote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"}},{tag:"path",attr:{d:"M15 3v4a2 2 0 0 0 2 2h4"},child:[]}]})(props);
}
/**
 * Store icon from Lucide icons
 */
export function LuStore(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}},{tag:"path",attr:{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"},child:[]},{tag:"path",attr:{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"},child:[]},{tag:"path",attr:{d:"M2 7h20"},child:[]},{tag:"path",attr:{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"},child:[]}]})(props);
}
/**
 * StretchHorizontal icon from Lucide icons
 */
export function LuStretchHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"6",x:"2",y:"4","rx":"2"}},{tag:"rect",attr:{"width":"20","height":"6",x:"2",y:"14","rx":"2"},child:[]}]})(props);
}
/**
 * StretchVertical icon from Lucide icons
 */
export function LuStretchVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"20",x:"4",y:"2","rx":"2"}},{tag:"rect",attr:{"width":"6","height":"20",x:"14",y:"2","rx":"2"},child:[]}]})(props);
}
/**
 * Strikethrough icon from Lucide icons
 */
export function LuStrikethrough(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4H9a3 3 0 0 0-2.83 4"}},{tag:"path",attr:{d:"M14 12a4 4 0 0 1 0 8H6"},child:[]},{tag:"line",attr:{"x1":"4","x2":"20","y1":"12","y2":"12"},child:[]}]})(props);
}
/**
 * Subscript icon from Lucide icons
 */
export function LuSubscript(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m4 5 8 8"}},{tag:"path",attr:{d:"m12 5-8 8"},child:[]},{tag:"path",attr:{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"},child:[]}]})(props);
}
/**
 * Sun icon from Lucide icons
 */
export function LuSun(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"}},{tag:"path",attr:{d:"M12 2v2"},child:[]},{tag:"path",attr:{d:"M12 20v2"},child:[]},{tag:"path",attr:{d:"m4.93 4.93 1.41 1.41"},child:[]},{tag:"path",attr:{d:"m17.66 17.66 1.41 1.41"},child:[]},{tag:"path",attr:{d:"M2 12h2"},child:[]},{tag:"path",attr:{d:"M20 12h2"},child:[]},{tag:"path",attr:{d:"m6.34 17.66-1.41 1.41"},child:[]},{tag:"path",attr:{d:"m19.07 4.93-1.41 1.41"},child:[]}]})(props);
}
/**
 * SunDim icon from Lucide icons
 */
export function LuSunDim(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"}},{tag:"path",attr:{d:"M12 4h.01"},child:[]},{tag:"path",attr:{d:"M20 12h.01"},child:[]},{tag:"path",attr:{d:"M12 20h.01"},child:[]},{tag:"path",attr:{d:"M4 12h.01"},child:[]},{tag:"path",attr:{d:"M17.657 6.343h.01"},child:[]},{tag:"path",attr:{d:"M17.657 17.657h.01"},child:[]},{tag:"path",attr:{d:"M6.343 17.657h.01"},child:[]},{tag:"path",attr:{d:"M6.343 6.343h.01"},child:[]}]})(props);
}
/**
 * SunMedium icon from Lucide icons
 */
export function LuSunMedium(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"}},{tag:"path",attr:{d:"M12 3v1"},child:[]},{tag:"path",attr:{d:"M12 20v1"},child:[]},{tag:"path",attr:{d:"M3 12h1"},child:[]},{tag:"path",attr:{d:"M20 12h1"},child:[]},{tag:"path",attr:{d:"m18.364 5.636-.707.707"},child:[]},{tag:"path",attr:{d:"m6.343 17.657-.707.707"},child:[]},{tag:"path",attr:{d:"m5.636 5.636.707.707"},child:[]},{tag:"path",attr:{d:"m17.657 17.657.707.707"},child:[]}]})(props);
}
/**
 * SunMoon icon from Lucide icons
 */
export function LuSunMoon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}},{tag:"path",attr:{d:"M12 2v2"},child:[]},{tag:"path",attr:{d:"M12 20v2"},child:[]},{tag:"path",attr:{d:"m4.9 4.9 1.4 1.4"},child:[]},{tag:"path",attr:{d:"m17.7 17.7 1.4 1.4"},child:[]},{tag:"path",attr:{d:"M2 12h2"},child:[]},{tag:"path",attr:{d:"M20 12h2"},child:[]},{tag:"path",attr:{d:"m6.3 17.7-1.4 1.4"},child:[]},{tag:"path",attr:{d:"m19.1 4.9-1.4 1.4"},child:[]}]})(props);
}
/**
 * SunSnow icon from Lucide icons
 */
export function LuSunSnow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 9a3 3 0 1 0 0 6"}},{tag:"path",attr:{d:"M2 12h1"},child:[]},{tag:"path",attr:{d:"M14 21V3"},child:[]},{tag:"path",attr:{d:"M10 4V3"},child:[]},{tag:"path",attr:{d:"M10 21v-1"},child:[]},{tag:"path",attr:{d:"m3.64 18.36.7-.7"},child:[]},{tag:"path",attr:{d:"m4.34 6.34-.7-.7"},child:[]},{tag:"path",attr:{d:"M14 12h8"},child:[]},{tag:"path",attr:{d:"m17 4-3 3"},child:[]},{tag:"path",attr:{d:"m14 17 3 3"},child:[]},{tag:"path",attr:{d:"m21 15-3-3 3-3"},child:[]}]})(props);
}
/**
 * Sunrise icon from Lucide icons
 */
export function LuSunrise(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v8"}},{tag:"path",attr:{d:"m4.93 10.93 1.41 1.41"},child:[]},{tag:"path",attr:{d:"M2 18h2"},child:[]},{tag:"path",attr:{d:"M20 18h2"},child:[]},{tag:"path",attr:{d:"m19.07 10.93-1.41 1.41"},child:[]},{tag:"path",attr:{d:"M22 22H2"},child:[]},{tag:"path",attr:{d:"m8 6 4-4 4 4"},child:[]},{tag:"path",attr:{d:"M16 18a4 4 0 0 0-8 0"},child:[]}]})(props);
}
/**
 * Sunset icon from Lucide icons
 */
export function LuSunset(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 10V2"}},{tag:"path",attr:{d:"m4.93 10.93 1.41 1.41"},child:[]},{tag:"path",attr:{d:"M2 18h2"},child:[]},{tag:"path",attr:{d:"M20 18h2"},child:[]},{tag:"path",attr:{d:"m19.07 10.93-1.41 1.41"},child:[]},{tag:"path",attr:{d:"M22 22H2"},child:[]},{tag:"path",attr:{d:"m16 6-4 4-4-4"},child:[]},{tag:"path",attr:{d:"M16 18a4 4 0 0 0-8 0"},child:[]}]})(props);
}
/**
 * Superscript icon from Lucide icons
 */
export function LuSuperscript(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m4 19 8-8"}},{tag:"path",attr:{d:"m12 19-8-8"},child:[]},{tag:"path",attr:{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"},child:[]}]})(props);
}
/**
 * SwatchBook icon from Lucide icons
 */
export function LuSwatchBook(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attr:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"},child:[]},{tag:"path",attr:{d:"M 7 17h.01"},child:[]},{tag:"path",attr:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"},child:[]}]})(props);
}
/**
 * SwissFranc icon from Lucide icons
 */
export function LuSwissFranc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 21V3h8"}},{tag:"path",attr:{d:"M6 16h9"},child:[]},{tag:"path",attr:{d:"M10 9.5h7"},child:[]}]})(props);
}
/**
 * SwitchCamera icon from Lucide icons
 */
export function LuSwitchCamera(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}},{tag:"path",attr:{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]},{tag:"path",attr:{d:"m18 22-3-3 3-3"},child:[]},{tag:"path",attr:{d:"m6 2 3 3-3 3"},child:[]}]})(props);
}
/**
 * Sword icon from Lucide icons
 */
export function LuSword(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}},{tag:"line",attr:{"x1":"13","x2":"19","y1":"19","y2":"13"},child:[]},{tag:"line",attr:{"x1":"16","x2":"20","y1":"16","y2":"20"},child:[]},{tag:"line",attr:{"x1":"19","x2":"21","y1":"21","y2":"19"},child:[]}]})(props);
}
/**
 * Swords icon from Lucide icons
 */
export function LuSwords(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}},{tag:"line",attr:{"x1":"13","x2":"19","y1":"19","y2":"13"},child:[]},{tag:"line",attr:{"x1":"16","x2":"20","y1":"16","y2":"20"},child:[]},{tag:"line",attr:{"x1":"19","x2":"21","y1":"21","y2":"19"},child:[]},{tag:"polyline",attr:{"points":"14.5 6.5 18 3 21 3 21 6 17.5 9.5"},child:[]},{tag:"line",attr:{"x1":"5","x2":"9","y1":"14","y2":"18"},child:[]},{tag:"line",attr:{"x1":"7","x2":"4","y1":"17","y2":"20"},child:[]},{tag:"line",attr:{"x1":"3","x2":"5","y1":"19","y2":"21"},child:[]}]})(props);
}
/**
 * Syringe icon from Lucide icons
 */
export function LuSyringe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 2 4 4"}},{tag:"path",attr:{d:"m17 7 3-3"},child:[]},{tag:"path",attr:{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"},child:[]},{tag:"path",attr:{d:"m9 11 4 4"},child:[]},{tag:"path",attr:{d:"m5 19-3 3"},child:[]},{tag:"path",attr:{d:"m14 4 6 6"},child:[]}]})(props);
}
/**
 * Table icon from Lucide icons
 */
export function LuTable(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v18"}},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M3 9h18"},child:[]},{tag:"path",attr:{d:"M3 15h18"},child:[]}]})(props);
}
/**
 * Table2 icon from Lucide icons
 */
export function LuTable2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}}]})(props);
}
/**
 * TableCellsMerge icon from Lucide icons
 */
export function LuTableCellsMerge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 21v-6"}},{tag:"path",attr:{d:"M12 9V3"},child:[]},{tag:"path",attr:{d:"M3 15h18"},child:[]},{tag:"path",attr:{d:"M3 9h18"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"},child:[]}]})(props);
}
/**
 * TableCellsSplit icon from Lucide icons
 */
export function LuTableCellsSplit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 15V9"}},{tag:"path",attr:{d:"M3 15h18"},child:[]},{tag:"path",attr:{d:"M3 9h18"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"},child:[]}]})(props);
}
/**
 * TableColumnsSplit icon from Lucide icons
 */
export function LuTableColumnsSplit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 14v2"}},{tag:"path",attr:{d:"M14 20v2"},child:[]},{tag:"path",attr:{d:"M14 2v2"},child:[]},{tag:"path",attr:{d:"M14 8v2"},child:[]},{tag:"path",attr:{d:"M2 15h8"},child:[]},{tag:"path",attr:{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"},child:[]},{tag:"path",attr:{d:"M2 9h8"},child:[]},{tag:"path",attr:{d:"M22 15h-4"},child:[]},{tag:"path",attr:{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"},child:[]},{tag:"path",attr:{d:"M22 9h-4"},child:[]},{tag:"path",attr:{d:"M5 3v18"},child:[]}]})(props);
}
/**
 * TableOfContents icon from Lucide icons
 */
export function LuTableOfContents(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 12H3"}},{tag:"path",attr:{d:"M16 18H3"},child:[]},{tag:"path",attr:{d:"M16 6H3"},child:[]},{tag:"path",attr:{d:"M21 12h.01"},child:[]},{tag:"path",attr:{d:"M21 18h.01"},child:[]},{tag:"path",attr:{d:"M21 6h.01"},child:[]}]})(props);
}
/**
 * TableProperties icon from Lucide icons
 */
export function LuTableProperties(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3v18"}},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M21 9H3"},child:[]},{tag:"path",attr:{d:"M21 15H3"},child:[]}]})(props);
}
/**
 * TableRowsSplit icon from Lucide icons
 */
export function LuTableRowsSplit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 10h2"}},{tag:"path",attr:{d:"M15 22v-8"},child:[]},{tag:"path",attr:{d:"M15 2v4"},child:[]},{tag:"path",attr:{d:"M2 10h2"},child:[]},{tag:"path",attr:{d:"M20 10h2"},child:[]},{tag:"path",attr:{d:"M3 19h18"},child:[]},{tag:"path",attr:{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"},child:[]},{tag:"path",attr:{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"},child:[]},{tag:"path",attr:{d:"M8 10h2"},child:[]},{tag:"path",attr:{d:"M9 22v-8"},child:[]},{tag:"path",attr:{d:"M9 2v4"},child:[]}]})(props);
}
/**
 * Tablet icon from Lucide icons
 */
export function LuTablet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"20",x:"4",y:"2","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"12","x2":"12.01","y1":"18","y2":"18"},child:[]}]})(props);
}
/**
 * TabletSmartphone icon from Lucide icons
 */
export function LuTabletSmartphone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"10","height":"14",x:"3",y:"8","rx":"2"}},{tag:"path",attr:{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"},child:[]},{tag:"path",attr:{d:"M8 18h.01"},child:[]}]})(props);
}
/**
 * Tablets icon from Lucide icons
 */
export function LuTablets(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"7","cy":"7","r":"5"}},{tag:"circle",attr:{"cx":"17","cy":"17","r":"5"},child:[]},{tag:"path",attr:{d:"M12 17h10"},child:[]},{tag:"path",attr:{d:"m3.46 10.54 7.08-7.08"},child:[]}]})(props);
}
/**
 * Tag icon from Lucide icons
 */
export function LuTag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attr:{"cx":"7.5","cy":"7.5","r":".5",fill:"currentColor"},child:[]}]})(props);
}
/**
 * Tags icon from Lucide icons
 */
export function LuTags(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}},{tag:"path",attr:{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"},child:[]},{tag:"circle",attr:{"cx":"6.5","cy":"9.5","r":".5",fill:"currentColor"},child:[]}]})(props);
}
/**
 * Tally1 icon from Lucide icons
 */
export function LuTally1(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4v16"}}]})(props);
}
/**
 * Tally2 icon from Lucide icons
 */
export function LuTally2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4v16"}},{tag:"path",attr:{d:"M9 4v16"},child:[]}]})(props);
}
/**
 * Tally3 icon from Lucide icons
 */
export function LuTally3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4v16"}},{tag:"path",attr:{d:"M9 4v16"},child:[]},{tag:"path",attr:{d:"M14 4v16"},child:[]}]})(props);
}
/**
 * Tally4 icon from Lucide icons
 */
export function LuTally4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4v16"}},{tag:"path",attr:{d:"M9 4v16"},child:[]},{tag:"path",attr:{d:"M14 4v16"},child:[]},{tag:"path",attr:{d:"M19 4v16"},child:[]}]})(props);
}
/**
 * Tally5 icon from Lucide icons
 */
export function LuTally5(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4v16"}},{tag:"path",attr:{d:"M9 4v16"},child:[]},{tag:"path",attr:{d:"M14 4v16"},child:[]},{tag:"path",attr:{d:"M19 4v16"},child:[]},{tag:"path",attr:{d:"M22 6 2 18"},child:[]}]})(props);
}
/**
 * Tangent icon from Lucide icons
 */
export function LuTangent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"17","cy":"4","r":"2"}},{tag:"path",attr:{d:"M15.59 5.41 5.41 15.59"},child:[]},{tag:"circle",attr:{"cx":"4","cy":"17","r":"2"},child:[]},{tag:"path",attr:{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"},child:[]}]})(props);
}
/**
 * Target icon from Lucide icons
 */
export function LuTarget(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"6"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]}]})(props);
}
/**
 * Telescope icon from Lucide icons
 */
export function LuTelescope(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"}},{tag:"path",attr:{d:"m13.56 11.747 4.332-.924"},child:[]},{tag:"path",attr:{d:"m16 21-3.105-6.21"},child:[]},{tag:"path",attr:{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"},child:[]},{tag:"path",attr:{d:"m6.158 8.633 1.114 4.456"},child:[]},{tag:"path",attr:{d:"m8 21 3.105-6.21"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"13","r":"2"},child:[]}]})(props);
}
/**
 * Tent icon from Lucide icons
 */
export function LuTent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.5 21 14 3"}},{tag:"path",attr:{d:"M20.5 21 10 3"},child:[]},{tag:"path",attr:{d:"M15.5 21 12 15l-3.5 6"},child:[]},{tag:"path",attr:{d:"M2 21h20"},child:[]}]})(props);
}
/**
 * TentTree icon from Lucide icons
 */
export function LuTentTree(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"4","cy":"4","r":"2"}},{tag:"path",attr:{d:"m14 5 3-3 3 3"},child:[]},{tag:"path",attr:{d:"m14 10 3-3 3 3"},child:[]},{tag:"path",attr:{d:"M17 14V2"},child:[]},{tag:"path",attr:{d:"M17 14H7l-5 8h20Z"},child:[]},{tag:"path",attr:{d:"M8 14v8"},child:[]},{tag:"path",attr:{d:"m9 14 5 8"},child:[]}]})(props);
}
/**
 * Terminal icon from Lucide icons
 */
export function LuTerminal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"4 17 10 11 4 5"}},{tag:"line",attr:{"x1":"12","x2":"20","y1":"19","y2":"19"},child:[]}]})(props);
}
/**
 * TestTube icon from Lucide icons
 */
export function LuTestTube(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}},{tag:"path",attr:{d:"M8.5 2h7"},child:[]},{tag:"path",attr:{d:"M14.5 16h-5"},child:[]}]})(props);
}
/**
 * TestTubeDiagonal icon from Lucide icons
 */
export function LuTestTubeDiagonal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}},{tag:"path",attr:{d:"m16 2 6 6"},child:[]},{tag:"path",attr:{d:"M12 16H4"},child:[]}]})(props);
}
/**
 * TestTubes icon from Lucide icons
 */
export function LuTestTubes(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"}},{tag:"path",attr:{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"},child:[]},{tag:"path",attr:{d:"M3 2h7"},child:[]},{tag:"path",attr:{d:"M14 2h7"},child:[]},{tag:"path",attr:{d:"M9 16H4"},child:[]},{tag:"path",attr:{d:"M20 16h-5"},child:[]}]})(props);
}
/**
 * Text icon from Lucide icons
 */
export function LuText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 6.1H3"}},{tag:"path",attr:{d:"M21 12.1H3"},child:[]},{tag:"path",attr:{d:"M15.1 18H3"},child:[]}]})(props);
}
/**
 * TextCursor icon from Lucide icons
 */
export function LuTextCursor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}},{tag:"path",attr:{d:"M7 22h1a4 4 0 0 0 4-4v-1"},child:[]},{tag:"path",attr:{d:"M7 2h1a4 4 0 0 1 4 4v1"},child:[]}]})(props);
}
/**
 * TextCursorInput icon from Lucide icons
 */
export function LuTextCursorInput(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"}},{tag:"path",attr:{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"},child:[]},{tag:"path",attr:{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"},child:[]},{tag:"path",attr:{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"},child:[]},{tag:"path",attr:{d:"M9 7v10"},child:[]}]})(props);
}
/**
 * TextQuote icon from Lucide icons
 */
export function LuTextQuote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 6H3"}},{tag:"path",attr:{d:"M21 12H8"},child:[]},{tag:"path",attr:{d:"M21 18H8"},child:[]},{tag:"path",attr:{d:"M3 12v6"},child:[]}]})(props);
}
/**
 * TextSearch icon from Lucide icons
 */
export function LuTextSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 6H3"}},{tag:"path",attr:{d:"M10 12H3"},child:[]},{tag:"path",attr:{d:"M10 18H3"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"15","r":"3"},child:[]},{tag:"path",attr:{d:"m21 19-1.9-1.9"},child:[]}]})(props);
}
/**
 * TextSelect icon from Lucide icons
 */
export function LuTextSelect(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 3a2 2 0 0 0-2 2"}},{tag:"path",attr:{d:"M19 3a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M21 19a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"M5 21a2 2 0 0 1-2-2"},child:[]},{tag:"path",attr:{d:"M9 3h1"},child:[]},{tag:"path",attr:{d:"M9 21h1"},child:[]},{tag:"path",attr:{d:"M14 3h1"},child:[]},{tag:"path",attr:{d:"M14 21h1"},child:[]},{tag:"path",attr:{d:"M3 9v1"},child:[]},{tag:"path",attr:{d:"M21 9v1"},child:[]},{tag:"path",attr:{d:"M3 14v1"},child:[]},{tag:"path",attr:{d:"M21 14v1"},child:[]},{tag:"line",attr:{"x1":"7","x2":"15","y1":"8","y2":"8"},child:[]},{tag:"line",attr:{"x1":"7","x2":"17","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"7","x2":"13","y1":"16","y2":"16"},child:[]}]})(props);
}
/**
 * Theater icon from Lucide icons
 */
export function LuTheater(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 10s3-3 3-8"}},{tag:"path",attr:{d:"M22 10s-3-3-3-8"},child:[]},{tag:"path",attr:{d:"M10 2c0 4.4-3.6 8-8 8"},child:[]},{tag:"path",attr:{d:"M14 2c0 4.4 3.6 8 8 8"},child:[]},{tag:"path",attr:{d:"M2 10s2 2 2 5"},child:[]},{tag:"path",attr:{d:"M22 10s-2 2-2 5"},child:[]},{tag:"path",attr:{d:"M8 15h8"},child:[]},{tag:"path",attr:{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"},child:[]},{tag:"path",attr:{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"},child:[]}]})(props);
}
/**
 * Thermometer icon from Lucide icons
 */
export function LuThermometer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}}]})(props);
}
/**
 * ThermometerSnowflake icon from Lucide icons
 */
export function LuThermometerSnowflake(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12h10"}},{tag:"path",attr:{d:"M9 4v16"},child:[]},{tag:"path",attr:{d:"m3 9 3 3-3 3"},child:[]},{tag:"path",attr:{d:"M12 6 9 9 6 6"},child:[]},{tag:"path",attr:{d:"m6 18 3-3 1.5 1.5"},child:[]},{tag:"path",attr:{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"},child:[]}]})(props);
}
/**
 * ThermometerSun icon from Lucide icons
 */
export function LuThermometerSun(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 9a4 4 0 0 0-2 7.5"}},{tag:"path",attr:{d:"M12 3v2"},child:[]},{tag:"path",attr:{d:"m6.6 18.4-1.4 1.4"},child:[]},{tag:"path",attr:{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"},child:[]},{tag:"path",attr:{d:"M4 13H2"},child:[]},{tag:"path",attr:{d:"M6.34 7.34 4.93 5.93"},child:[]}]})(props);
}
/**
 * ThumbsDown icon from Lucide icons
 */
export function LuThumbsDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 14V2"}},{tag:"path",attr:{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"},child:[]}]})(props);
}
/**
 * ThumbsUp icon from Lucide icons
 */
export function LuThumbsUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 10v12"}},{tag:"path",attr:{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"},child:[]}]})(props);
}
/**
 * Ticket icon from Lucide icons
 */
export function LuTicket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}},{tag:"path",attr:{d:"M13 5v2"},child:[]},{tag:"path",attr:{d:"M13 17v2"},child:[]},{tag:"path",attr:{d:"M13 11v2"},child:[]}]})(props);
}
/**
 * TicketCheck icon from Lucide icons
 */
export function LuTicketCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(props);
}
/**
 * TicketMinus icon from Lucide icons
 */
export function LuTicketMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}},{tag:"path",attr:{d:"M9 12h6"},child:[]}]})(props);
}
/**
 * TicketPercent icon from Lucide icons
 */
export function LuTicketPercent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}},{tag:"path",attr:{d:"M9 9h.01"},child:[]},{tag:"path",attr:{d:"m15 9-6 6"},child:[]},{tag:"path",attr:{d:"M15 15h.01"},child:[]}]})(props);
}
/**
 * TicketPlus icon from Lucide icons
 */
export function LuTicketPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}},{tag:"path",attr:{d:"M9 12h6"},child:[]},{tag:"path",attr:{d:"M12 9v6"},child:[]}]})(props);
}
/**
 * TicketSlash icon from Lucide icons
 */
export function LuTicketSlash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}},{tag:"path",attr:{d:"m9.5 14.5 5-5"},child:[]}]})(props);
}
/**
 * TicketX icon from Lucide icons
 */
export function LuTicketX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}},{tag:"path",attr:{d:"m9.5 14.5 5-5"},child:[]},{tag:"path",attr:{d:"m9.5 9.5 5 5"},child:[]}]})(props);
}
/**
 * Tickets icon from Lucide icons
 */
export function LuTickets(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}},{tag:"path",attr:{d:"M6 10V8"},child:[]},{tag:"path",attr:{d:"M6 14v1"},child:[]},{tag:"path",attr:{d:"M6 19v2"},child:[]},{tag:"rect",attr:{x:"2",y:"8","width":"20","height":"13","rx":"2"},child:[]}]})(props);
}
/**
 * TicketsPlane icon from Lucide icons
 */
export function LuTicketsPlane(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"}},{tag:"path",attr:{d:"m12 13.5 3.75.5"},child:[]},{tag:"path",attr:{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"},child:[]},{tag:"path",attr:{d:"M6 10V8"},child:[]},{tag:"path",attr:{d:"M6 14v1"},child:[]},{tag:"path",attr:{d:"M6 19v2"},child:[]},{tag:"rect",attr:{x:"2",y:"8","width":"20","height":"13","rx":"2"},child:[]}]})(props);
}
/**
 * Timer icon from Lucide icons
 */
export function LuTimer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"10","x2":"14","y1":"2","y2":"2"}},{tag:"line",attr:{"x1":"12","x2":"15","y1":"14","y2":"11"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"14","r":"8"},child:[]}]})(props);
}
/**
 * TimerOff icon from Lucide icons
 */
export function LuTimerOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2h4"}},{tag:"path",attr:{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"},child:[]},{tag:"path",attr:{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M12 12v-2"},child:[]}]})(props);
}
/**
 * TimerReset icon from Lucide icons
 */
export function LuTimerReset(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2h4"}},{tag:"path",attr:{d:"M12 14v-4"},child:[]},{tag:"path",attr:{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"},child:[]},{tag:"path",attr:{d:"M9 17H4v5"},child:[]}]})(props);
}
/**
 * ToggleLeft icon from Lucide icons
 */
export function LuToggleLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"12",x:"2",y:"6","rx":"6","ry":"6"}},{tag:"circle",attr:{"cx":"8","cy":"12","r":"2"},child:[]}]})(props);
}
/**
 * ToggleRight icon from Lucide icons
 */
export function LuToggleRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"12",x:"2",y:"6","rx":"6","ry":"6"}},{tag:"circle",attr:{"cx":"16","cy":"12","r":"2"},child:[]}]})(props);
}
/**
 * Toilet icon from Lucide icons
 */
export function LuToilet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"}},{tag:"path",attr:{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"},child:[]}]})(props);
}
/**
 * Tornado icon from Lucide icons
 */
export function LuTornado(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 4H3"}},{tag:"path",attr:{d:"M18 8H6"},child:[]},{tag:"path",attr:{d:"M19 12H9"},child:[]},{tag:"path",attr:{d:"M16 16h-6"},child:[]},{tag:"path",attr:{d:"M11 20H9"},child:[]}]})(props);
}
/**
 * Torus icon from Lucide icons
 */
export function LuTorus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{"cx":"12","cy":"11","rx":"3","ry":"2"}},{tag:"ellipse",attr:{"cx":"12","cy":"12.5","rx":"10","ry":"8.5"},child:[]}]})(props);
}
/**
 * Touchpad icon from Lucide icons
 */
export function LuTouchpad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"}},{tag:"path",attr:{d:"M2 14h20"},child:[]},{tag:"path",attr:{d:"M12 20v-6"},child:[]}]})(props);
}
/**
 * TouchpadOff icon from Lucide icons
 */
export function LuTouchpadOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"}},{tag:"path",attr:{d:"M2 14h12"},child:[]},{tag:"path",attr:{d:"M22 14h-2"},child:[]},{tag:"path",attr:{d:"M12 20v-6"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M22 16V6a2 2 0 0 0-2-2H10"},child:[]}]})(props);
}
/**
 * TowerControl icon from Lucide icons
 */
export function LuTowerControl(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}},{tag:"path",attr:{d:"M8 13v9"},child:[]},{tag:"path",attr:{d:"M16 22v-9"},child:[]},{tag:"path",attr:{d:"m9 6 1 7"},child:[]},{tag:"path",attr:{d:"m15 6-1 7"},child:[]},{tag:"path",attr:{d:"M12 6V2"},child:[]},{tag:"path",attr:{d:"M13 2h-2"},child:[]}]})(props);
}
/**
 * ToyBrick icon from Lucide icons
 */
export function LuToyBrick(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"12",x:"3",y:"8","rx":"1"}},{tag:"path",attr:{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"},child:[]},{tag:"path",attr:{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"},child:[]}]})(props);
}
/**
 * Tractor icon from Lucide icons
 */
export function LuTractor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"}},{tag:"path",attr:{d:"M16 18h-5"},child:[]},{tag:"path",attr:{d:"M18 5a1 1 0 0 0-1 1v5.573"},child:[]},{tag:"path",attr:{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"},child:[]},{tag:"path",attr:{d:"M4 11V4"},child:[]},{tag:"path",attr:{d:"M7 15h.01"},child:[]},{tag:"path",attr:{d:"M8 10.1V4"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"18","r":"2"},child:[]},{tag:"circle",attr:{"cx":"7","cy":"15","r":"5"},child:[]}]})(props);
}
/**
 * TrafficCone icon from Lucide icons
 */
export function LuTrafficCone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0"}},{tag:"path",attr:{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"},child:[]},{tag:"path",attr:{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"},child:[]},{tag:"path",attr:{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"},child:[]}]})(props);
}
/**
 * TrainFront icon from Lucide icons
 */
export function LuTrainFront(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}},{tag:"path",attr:{d:"m9 15-1-1"},child:[]},{tag:"path",attr:{d:"m15 15 1-1"},child:[]},{tag:"path",attr:{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"},child:[]},{tag:"path",attr:{d:"m8 19-2 3"},child:[]},{tag:"path",attr:{d:"m16 19 2 3"},child:[]}]})(props);
}
/**
 * TrainFrontTunnel icon from Lucide icons
 */
export function LuTrainFrontTunnel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 22V12a10 10 0 1 1 20 0v10"}},{tag:"path",attr:{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"},child:[]},{tag:"path",attr:{d:"M10 15h.01"},child:[]},{tag:"path",attr:{d:"M14 15h.01"},child:[]},{tag:"path",attr:{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"},child:[]},{tag:"path",attr:{d:"m9 19-2 3"},child:[]},{tag:"path",attr:{d:"m15 19 2 3"},child:[]}]})(props);
}
/**
 * TrainTrack icon from Lucide icons
 */
export function LuTrainTrack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 17 17 2"}},{tag:"path",attr:{d:"m2 14 8 8"},child:[]},{tag:"path",attr:{d:"m5 11 8 8"},child:[]},{tag:"path",attr:{d:"m8 8 8 8"},child:[]},{tag:"path",attr:{d:"m11 5 8 8"},child:[]},{tag:"path",attr:{d:"m14 2 8 8"},child:[]},{tag:"path",attr:{d:"M7 22 22 7"},child:[]}]})(props);
}
/**
 * TramFront icon from Lucide icons
 */
export function LuTramFront(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"16",x:"4",y:"3","rx":"2"}},{tag:"path",attr:{d:"M4 11h16"},child:[]},{tag:"path",attr:{d:"M12 3v8"},child:[]},{tag:"path",attr:{d:"m8 19-2 3"},child:[]},{tag:"path",attr:{d:"m18 22-2-3"},child:[]},{tag:"path",attr:{d:"M8 15h.01"},child:[]},{tag:"path",attr:{d:"M16 15h.01"},child:[]}]})(props);
}
/**
 * Trash icon from Lucide icons
 */
export function LuTrash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"}},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]}]})(props);
}
/**
 * Trash2 icon from Lucide icons
 */
export function LuTrash2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"}},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{"x1":"10","x2":"10","y1":"11","y2":"17"},child:[]},{tag:"line",attr:{"x1":"14","x2":"14","y1":"11","y2":"17"},child:[]}]})(props);
}
/**
 * TreeDeciduous icon from Lucide icons
 */
export function LuTreeDeciduous(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}},{tag:"path",attr:{d:"M12 19v3"},child:[]}]})(props);
}
/**
 * TreePalm icon from Lucide icons
 */
export function LuTreePalm(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}},{tag:"path",attr:{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"},child:[]},{tag:"path",attr:{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"},child:[]},{tag:"path",attr:{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"},child:[]}]})(props);
}
/**
 * TreePine icon from Lucide icons
 */
export function LuTreePine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}},{tag:"path",attr:{d:"M12 22v-3"},child:[]}]})(props);
}
/**
 * Trees icon from Lucide icons
 */
export function LuTrees(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}},{tag:"path",attr:{d:"M7 16v6"},child:[]},{tag:"path",attr:{d:"M13 19v3"},child:[]},{tag:"path",attr:{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"},child:[]}]})(props);
}
/**
 * Trello icon from Lucide icons
 */
export function LuTrello(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"rect",attr:{"width":"3","height":"9",x:"7",y:"7"},child:[]},{tag:"rect",attr:{"width":"3","height":"5",x:"14",y:"7"},child:[]}]})(props);
}
/**
 * TrendingDown icon from Lucide icons
 */
export function LuTrendingDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"22 17 13.5 8.5 8.5 13.5 2 7"}},{tag:"polyline",attr:{"points":"16 17 22 17 22 11"},child:[]}]})(props);
}
/**
 * TrendingUp icon from Lucide icons
 */
export function LuTrendingUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"22 7 13.5 15.5 8.5 10.5 2 17"}},{tag:"polyline",attr:{"points":"16 7 22 7 22 13"},child:[]}]})(props);
}
/**
 * TrendingUpDown icon from Lucide icons
 */
export function LuTrendingUpDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.828 14.828 21 21"}},{tag:"path",attr:{d:"M21 16v5h-5"},child:[]},{tag:"path",attr:{d:"m21 3-9 9-4-4-6 6"},child:[]},{tag:"path",attr:{d:"M21 8V3h-5"},child:[]}]})(props);
}
/**
 * Triangle icon from Lucide icons
 */
export function LuTriangle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}}]})(props);
}
/**
 * TriangleAlert icon from Lucide icons
 */
export function LuTriangleAlert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(props);
}
/**
 * TriangleRight icon from Lucide icons
 */
export function LuTriangleRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}}]})(props);
}
/**
 * Trophy icon from Lucide icons
 */
export function LuTrophy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}},{tag:"path",attr:{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"},child:[]},{tag:"path",attr:{d:"M4 22h16"},child:[]},{tag:"path",attr:{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"},child:[]},{tag:"path",attr:{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"},child:[]},{tag:"path",attr:{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"},child:[]}]})(props);
}
/**
 * Truck icon from Lucide icons
 */
export function LuTruck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}},{tag:"path",attr:{d:"M15 18H9"},child:[]},{tag:"path",attr:{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"18","r":"2"},child:[]},{tag:"circle",attr:{"cx":"7","cy":"18","r":"2"},child:[]}]})(props);
}
/**
 * Turtle icon from Lucide icons
 */
export function LuTurtle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}},{tag:"path",attr:{d:"M4.82 7.9 8 10"},child:[]},{tag:"path",attr:{d:"M15.18 7.9 12 10"},child:[]},{tag:"path",attr:{d:"M16.93 10H20a2 2 0 0 1 0 4H2"},child:[]}]})(props);
}
/**
 * Tv icon from Lucide icons
 */
export function LuTv(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"15",x:"2",y:"7","rx":"2","ry":"2"}},{tag:"polyline",attr:{"points":"17 2 12 7 7 2"},child:[]}]})(props);
}
/**
 * TvMinimal icon from Lucide icons
 */
export function LuTvMinimal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 21h10"}},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"3","rx":"2"},child:[]}]})(props);
}
/**
 * TvMinimalPlay icon from Lucide icons
 */
export function LuTvMinimalPlay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}},{tag:"path",attr:{d:"M7 21h10"},child:[]},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"3","rx":"2"},child:[]}]})(props);
}
/**
 * Twitch icon from Lucide icons
 */
export function LuTwitch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}}]})(props);
}
/**
 * Twitter icon from Lucide icons
 */
export function LuTwitter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}}]})(props);
}
/**
 * Type icon from Lucide icons
 */
export function LuType(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"4 7 4 4 20 4 20 7"}},{tag:"line",attr:{"x1":"9","x2":"15","y1":"20","y2":"20"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"4","y2":"20"},child:[]}]})(props);
}
/**
 * TypeOutline icon from Lucide icons
 */
export function LuTypeOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"}}]})(props);
}
/**
 * Umbrella icon from Lucide icons
 */
export function LuUmbrella(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}},{tag:"path",attr:{d:"M12 12v8a2 2 0 0 0 4 0"},child:[]},{tag:"path",attr:{d:"M12 2v1"},child:[]}]})(props);
}
/**
 * UmbrellaOff icon from Lucide icons
 */
export function LuUmbrellaOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v1"}},{tag:"path",attr:{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"},child:[]},{tag:"path",attr:{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * Underline icon from Lucide icons
 */
export function LuUnderline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 4v6a6 6 0 0 0 12 0V4"}},{tag:"line",attr:{"x1":"4","x2":"20","y1":"20","y2":"20"},child:[]}]})(props);
}
/**
 * Undo icon from Lucide icons
 */
export function LuUndo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7v6h6"}},{tag:"path",attr:{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"},child:[]}]})(props);
}
/**
 * Undo2 icon from Lucide icons
 */
export function LuUndo2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 14 4 9l5-5"}},{tag:"path",attr:{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"},child:[]}]})(props);
}
/**
 * UndoDot icon from Lucide icons
 */
export function LuUndoDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 17a9 9 0 0 0-15-6.7L3 13"}},{tag:"path",attr:{d:"M3 7v6h6"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"17","r":"1"},child:[]}]})(props);
}
/**
 * UnfoldHorizontal icon from Lucide icons
 */
export function LuUnfoldHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 12h6"}},{tag:"path",attr:{d:"M8 12H2"},child:[]},{tag:"path",attr:{d:"M12 2v2"},child:[]},{tag:"path",attr:{d:"M12 8v2"},child:[]},{tag:"path",attr:{d:"M12 14v2"},child:[]},{tag:"path",attr:{d:"M12 20v2"},child:[]},{tag:"path",attr:{d:"m19 15 3-3-3-3"},child:[]},{tag:"path",attr:{d:"m5 9-3 3 3 3"},child:[]}]})(props);
}
/**
 * UnfoldVertical icon from Lucide icons
 */
export function LuUnfoldVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22v-6"}},{tag:"path",attr:{d:"M12 8V2"},child:[]},{tag:"path",attr:{d:"M4 12H2"},child:[]},{tag:"path",attr:{d:"M10 12H8"},child:[]},{tag:"path",attr:{d:"M16 12h-2"},child:[]},{tag:"path",attr:{d:"M22 12h-2"},child:[]},{tag:"path",attr:{d:"m15 19-3 3-3-3"},child:[]},{tag:"path",attr:{d:"m15 5-3-3-3 3"},child:[]}]})(props);
}
/**
 * Ungroup icon from Lucide icons
 */
export function LuUngroup(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"6",x:"5",y:"4","rx":"1"}},{tag:"rect",attr:{"width":"8","height":"6",x:"11",y:"14","rx":"1"},child:[]}]})(props);
}
/**
 * University icon from Lucide icons
 */
export function LuUniversity(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"10","r":"1"}},{tag:"path",attr:{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"},child:[]},{tag:"path",attr:{d:"M6 17v.01"},child:[]},{tag:"path",attr:{d:"M6 13v.01"},child:[]},{tag:"path",attr:{d:"M18 17v.01"},child:[]},{tag:"path",attr:{d:"M18 13v.01"},child:[]},{tag:"path",attr:{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"},child:[]}]})(props);
}
/**
 * Unlink icon from Lucide icons
 */
export function LuUnlink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}},{tag:"path",attr:{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"},child:[]},{tag:"line",attr:{"x1":"8","x2":"8","y1":"2","y2":"5"},child:[]},{tag:"line",attr:{"x1":"2","x2":"5","y1":"8","y2":"8"},child:[]},{tag:"line",attr:{"x1":"16","x2":"16","y1":"19","y2":"22"},child:[]},{tag:"line",attr:{"x1":"19","x2":"22","y1":"16","y2":"16"},child:[]}]})(props);
}
/**
 * Unlink2 icon from Lucide icons
 */
export function LuUnlink2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}}]})(props);
}
/**
 * Unplug icon from Lucide icons
 */
export function LuUnplug(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m19 5 3-3"}},{tag:"path",attr:{d:"m2 22 3-3"},child:[]},{tag:"path",attr:{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"},child:[]},{tag:"path",attr:{d:"M7.5 13.5 10 11"},child:[]},{tag:"path",attr:{d:"M10.5 16.5 13 14"},child:[]},{tag:"path",attr:{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"},child:[]}]})(props);
}
/**
 * Upload icon from Lucide icons
 */
export function LuUpload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{"points":"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"3","y2":"15"},child:[]}]})(props);
}
/**
 * Usb icon from Lucide icons
 */
export function LuUsb(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"10","cy":"7","r":"1"}},{tag:"circle",attr:{"cx":"4","cy":"20","r":"1"},child:[]},{tag:"path",attr:{d:"M4.7 19.3 19 5"},child:[]},{tag:"path",attr:{d:"m21 3-3 1 2 2Z"},child:[]},{tag:"path",attr:{d:"M9.26 7.68 5 12l2 5"},child:[]},{tag:"path",attr:{d:"m10 14 5 2 3.5-3.5"},child:[]},{tag:"path",attr:{d:"m18 12 1-1 1 1-1 1Z"},child:[]}]})(props);
}
/**
 * User icon from Lucide icons
 */
export function LuUser(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{"cx":"12","cy":"7","r":"4"},child:[]}]})(props);
}
/**
 * UserCheck icon from Lucide icons
 */
export function LuUserCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{"cx":"9","cy":"7","r":"4"},child:[]},{tag:"polyline",attr:{"points":"16 11 18 13 22 9"},child:[]}]})(props);
}
/**
 * UserCog icon from Lucide icons
 */
export function LuUserCog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"18","cy":"15","r":"3"}},{tag:"circle",attr:{"cx":"9","cy":"7","r":"4"},child:[]},{tag:"path",attr:{d:"M10 15H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"path",attr:{d:"m21.7 16.4-.9-.3"},child:[]},{tag:"path",attr:{d:"m15.2 13.9-.9-.3"},child:[]},{tag:"path",attr:{d:"m16.6 18.7.3-.9"},child:[]},{tag:"path",attr:{d:"m19.1 12.2.3-.9"},child:[]},{tag:"path",attr:{d:"m19.6 18.7-.4-1"},child:[]},{tag:"path",attr:{d:"m16.8 12.3-.4-1"},child:[]},{tag:"path",attr:{d:"m14.3 16.6 1-.4"},child:[]},{tag:"path",attr:{d:"m20.7 13.8 1-.4"},child:[]}]})(props);
}
/**
 * UserMinus icon from Lucide icons
 */
export function LuUserMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{"cx":"9","cy":"7","r":"4"},child:[]},{tag:"line",attr:{"x1":"22","x2":"16","y1":"11","y2":"11"},child:[]}]})(props);
}
/**
 * UserPen icon from Lucide icons
 */
export function LuUserPen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}},{tag:"path",attr:{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"},child:[]},{tag:"circle",attr:{"cx":"10","cy":"7","r":"4"},child:[]}]})(props);
}
/**
 * UserPlus icon from Lucide icons
 */
export function LuUserPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{"cx":"9","cy":"7","r":"4"},child:[]},{tag:"line",attr:{"x1":"19","x2":"19","y1":"8","y2":"14"},child:[]},{tag:"line",attr:{"x1":"22","x2":"16","y1":"11","y2":"11"},child:[]}]})(props);
}
/**
 * UserRound icon from Lucide icons
 */
export function LuUserRound(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"8","r":"5"}},{tag:"path",attr:{d:"M20 21a8 8 0 0 0-16 0"},child:[]}]})(props);
}
/**
 * UserRoundCheck icon from Lucide icons
 */
export function LuUserRoundCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 21a8 8 0 0 1 13.292-6"}},{tag:"circle",attr:{"cx":"10","cy":"8","r":"5"},child:[]},{tag:"path",attr:{d:"m16 19 2 2 4-4"},child:[]}]})(props);
}
/**
 * UserRoundCog icon from Lucide icons
 */
export function LuUserRoundCog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 21a8 8 0 0 1 10.434-7.62"}},{tag:"circle",attr:{"cx":"10","cy":"8","r":"5"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"m19.5 14.3-.4.9"},child:[]},{tag:"path",attr:{d:"m16.9 20.8-.4.9"},child:[]},{tag:"path",attr:{d:"m21.7 19.5-.9-.4"},child:[]},{tag:"path",attr:{d:"m15.2 16.9-.9-.4"},child:[]},{tag:"path",attr:{d:"m21.7 16.5-.9.4"},child:[]},{tag:"path",attr:{d:"m15.2 19.1-.9.4"},child:[]},{tag:"path",attr:{d:"m19.5 21.7-.4-.9"},child:[]},{tag:"path",attr:{d:"m16.9 15.2-.4-.9"},child:[]}]})(props);
}
/**
 * UserRoundMinus icon from Lucide icons
 */
export function LuUserRoundMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 21a8 8 0 0 1 13.292-6"}},{tag:"circle",attr:{"cx":"10","cy":"8","r":"5"},child:[]},{tag:"path",attr:{d:"M22 19h-6"},child:[]}]})(props);
}
/**
 * UserRoundPen icon from Lucide icons
 */
export function LuUserRoundPen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 21a8 8 0 0 1 10.821-7.487"}},{tag:"path",attr:{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"},child:[]},{tag:"circle",attr:{"cx":"10","cy":"8","r":"5"},child:[]}]})(props);
}
/**
 * UserRoundPlus icon from Lucide icons
 */
export function LuUserRoundPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 21a8 8 0 0 1 13.292-6"}},{tag:"circle",attr:{"cx":"10","cy":"8","r":"5"},child:[]},{tag:"path",attr:{d:"M19 16v6"},child:[]},{tag:"path",attr:{d:"M22 19h-6"},child:[]}]})(props);
}
/**
 * UserRoundSearch icon from Lucide icons
 */
export function LuUserRoundSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"10","cy":"8","r":"5"}},{tag:"path",attr:{d:"M2 21a8 8 0 0 1 10.434-7.62"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"m22 22-1.9-1.9"},child:[]}]})(props);
}
/**
 * UserRoundX icon from Lucide icons
 */
export function LuUserRoundX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 21a8 8 0 0 1 11.873-7"}},{tag:"circle",attr:{"cx":"10","cy":"8","r":"5"},child:[]},{tag:"path",attr:{d:"m17 17 5 5"},child:[]},{tag:"path",attr:{d:"m22 17-5 5"},child:[]}]})(props);
}
/**
 * UserSearch icon from Lucide icons
 */
export function LuUserSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"10","cy":"7","r":"4"}},{tag:"path",attr:{d:"M10.3 15H7a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"17","r":"3"},child:[]},{tag:"path",attr:{d:"m21 21-1.9-1.9"},child:[]}]})(props);
}
/**
 * UserX icon from Lucide icons
 */
export function LuUserX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{"cx":"9","cy":"7","r":"4"},child:[]},{tag:"line",attr:{"x1":"17","x2":"22","y1":"8","y2":"13"},child:[]},{tag:"line",attr:{"x1":"22","x2":"17","y1":"8","y2":"13"},child:[]}]})(props);
}
/**
 * Users icon from Lucide icons
 */
export function LuUsers(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{"cx":"9","cy":"7","r":"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(props);
}
/**
 * UsersRound icon from Lucide icons
 */
export function LuUsersRound(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 21a8 8 0 0 0-16 0"}},{tag:"circle",attr:{"cx":"10","cy":"8","r":"5"},child:[]},{tag:"path",attr:{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"},child:[]}]})(props);
}
/**
 * Utensils icon from Lucide icons
 */
export function LuUtensils(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}},{tag:"path",attr:{d:"M7 2v20"},child:[]},{tag:"path",attr:{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"},child:[]}]})(props);
}
/**
 * UtensilsCrossed icon from Lucide icons
 */
export function LuUtensilsCrossed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}},{tag:"path",attr:{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"},child:[]},{tag:"path",attr:{d:"m2.1 21.8 6.4-6.3"},child:[]},{tag:"path",attr:{d:"m19 5-7 7"},child:[]}]})(props);
}
/**
 * UtilityPole icon from Lucide icons
 */
export function LuUtilityPole(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v20"}},{tag:"path",attr:{d:"M2 5h20"},child:[]},{tag:"path",attr:{d:"M3 3v2"},child:[]},{tag:"path",attr:{d:"M7 3v2"},child:[]},{tag:"path",attr:{d:"M17 3v2"},child:[]},{tag:"path",attr:{d:"M21 3v2"},child:[]},{tag:"path",attr:{d:"m19 5-7 7-7-7"},child:[]}]})(props);
}
/**
 * Variable icon from Lucide icons
 */
export function LuVariable(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 21s-4-3-4-9 4-9 4-9"}},{tag:"path",attr:{d:"M16 3s4 3 4 9-4 9-4 9"},child:[]},{tag:"line",attr:{"x1":"15","x2":"9","y1":"9","y2":"15"},child:[]},{tag:"line",attr:{"x1":"9","x2":"15","y1":"9","y2":"15"},child:[]}]})(props);
}
/**
 * Vault icon from Lucide icons
 */
export function LuVault(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"circle",attr:{"cx":"7.5","cy":"7.5","r":".5",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"m7.9 7.9 2.7 2.7"},child:[]},{tag:"circle",attr:{"cx":"16.5","cy":"7.5","r":".5",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"m13.4 10.6 2.7-2.7"},child:[]},{tag:"circle",attr:{"cx":"7.5","cy":"16.5","r":".5",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"m7.9 16.1 2.7-2.7"},child:[]},{tag:"circle",attr:{"cx":"16.5","cy":"16.5","r":".5",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"m13.4 13.4 2.7 2.7"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]}]})(props);
}
/**
 * Vegan icon from Lucide icons
 */
export function LuVegan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8q6 0 6-6-6 0-6 6"}},{tag:"path",attr:{d:"M17.41 3.59a10 10 0 1 0 3 3"},child:[]},{tag:"path",attr:{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"},child:[]}]})(props);
}
/**
 * VenetianMask icon from Lucide icons
 */
export function LuVenetianMask(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 11c-1.5 0-2.5.5-3 2"}},{tag:"path",attr:{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"},child:[]},{tag:"path",attr:{d:"M6 11c1.5 0 2.5.5 3 2"},child:[]}]})(props);
}
/**
 * Vibrate icon from Lucide icons
 */
export function LuVibrate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 8 2 2-2 2 2 2-2 2"}},{tag:"path",attr:{d:"m22 8-2 2 2 2-2 2 2 2"},child:[]},{tag:"rect",attr:{"width":"8","height":"14",x:"8",y:"5","rx":"1"},child:[]}]})(props);
}
/**
 * VibrateOff icon from Lucide icons
 */
export function LuVibrateOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 8 2 2-2 2 2 2-2 2"}},{tag:"path",attr:{d:"m22 8-2 2 2 2-2 2 2 2"},child:[]},{tag:"path",attr:{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"},child:[]},{tag:"path",attr:{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Video icon from Lucide icons
 */
export function LuVideo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attr:{x:"2",y:"6","width":"14","height":"12","rx":"2"},child:[]}]})(props);
}
/**
 * VideoOff icon from Lucide icons
 */
export function LuVideoOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"}},{tag:"path",attr:{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * Videotape icon from Lucide icons
 */
export function LuVideotape(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"}},{tag:"path",attr:{d:"M2 8h20"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"14","r":"2"},child:[]},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"14","r":"2"},child:[]}]})(props);
}
/**
 * View icon from Lucide icons
 */
export function LuView(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}},{tag:"path",attr:{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"1"},child:[]},{tag:"path",attr:{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"},child:[]}]})(props);
}
/**
 * Voicemail icon from Lucide icons
 */
export function LuVoicemail(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"6","cy":"12","r":"4"}},{tag:"circle",attr:{"cx":"18","cy":"12","r":"4"},child:[]},{tag:"line",attr:{"x1":"6","x2":"18","y1":"16","y2":"16"},child:[]}]})(props);
}
/**
 * Volleyball icon from Lucide icons
 */
export function LuVolleyball(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.1 7.1a16.55 16.55 0 0 1 10.9 4"}},{tag:"path",attr:{d:"M12 12a12.6 12.6 0 0 1-8.7 5"},child:[]},{tag:"path",attr:{d:"M16.8 13.6a16.55 16.55 0 0 1-9 7.5"},child:[]},{tag:"path",attr:{d:"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"},child:[]},{tag:"path",attr:{d:"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"},child:[]}]})(props);
}
/**
 * Volume icon from Lucide icons
 */
export function LuVolume(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}}]})(props);
}
/**
 * Volume1 icon from Lucide icons
 */
export function LuVolume1(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}},{tag:"path",attr:{d:"M16 9a5 5 0 0 1 0 6"},child:[]}]})(props);
}
/**
 * Volume2 icon from Lucide icons
 */
export function LuVolume2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}},{tag:"path",attr:{d:"M16 9a5 5 0 0 1 0 6"},child:[]},{tag:"path",attr:{d:"M19.364 18.364a9 9 0 0 0 0-12.728"},child:[]}]})(props);
}
/**
 * VolumeOff icon from Lucide icons
 */
export function LuVolumeOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 9a5 5 0 0 1 .95 2.293"}},{tag:"path",attr:{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"},child:[]},{tag:"path",attr:{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"},child:[]}]})(props);
}
/**
 * VolumeX icon from Lucide icons
 */
export function LuVolumeX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}},{tag:"line",attr:{"x1":"22","x2":"16","y1":"9","y2":"15"},child:[]},{tag:"line",attr:{"x1":"16","x2":"22","y1":"9","y2":"15"},child:[]}]})(props);
}
/**
 * Vote icon from Lucide icons
 */
export function LuVote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 12 2 2 4-4"}},{tag:"path",attr:{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"},child:[]},{tag:"path",attr:{d:"M22 19H2"},child:[]}]})(props);
}
/**
 * Wallet icon from Lucide icons
 */
export function LuWallet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}},{tag:"path",attr:{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"},child:[]}]})(props);
}
/**
 * WalletCards icon from Lucide icons
 */
export function LuWalletCards(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"},child:[]}]})(props);
}
/**
 * WalletMinimal icon from Lucide icons
 */
export function LuWalletMinimal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 14h.01"}},{tag:"path",attr:{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"},child:[]}]})(props);
}
/**
 * Wallpaper icon from Lucide icons
 */
export function LuWallpaper(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"8","cy":"9","r":"2"}},{tag:"path",attr:{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]}]})(props);
}
/**
 * Wand icon from Lucide icons
 */
export function LuWand(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 4V2"}},{tag:"path",attr:{d:"M15 16v-2"},child:[]},{tag:"path",attr:{d:"M8 9h2"},child:[]},{tag:"path",attr:{d:"M20 9h2"},child:[]},{tag:"path",attr:{d:"M17.8 11.8 19 13"},child:[]},{tag:"path",attr:{d:"M15 9h.01"},child:[]},{tag:"path",attr:{d:"M17.8 6.2 19 5"},child:[]},{tag:"path",attr:{d:"m3 21 9-9"},child:[]},{tag:"path",attr:{d:"M12.2 6.2 11 5"},child:[]}]})(props);
}
/**
 * WandSparkles icon from Lucide icons
 */
export function LuWandSparkles(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}},{tag:"path",attr:{d:"m14 7 3 3"},child:[]},{tag:"path",attr:{d:"M5 6v4"},child:[]},{tag:"path",attr:{d:"M19 14v4"},child:[]},{tag:"path",attr:{d:"M10 2v2"},child:[]},{tag:"path",attr:{d:"M7 8H3"},child:[]},{tag:"path",attr:{d:"M21 16h-4"},child:[]},{tag:"path",attr:{d:"M11 3H9"},child:[]}]})(props);
}
/**
 * Warehouse icon from Lucide icons
 */
export function LuWarehouse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"}},{tag:"path",attr:{d:"M6 18h12"},child:[]},{tag:"path",attr:{d:"M6 14h12"},child:[]},{tag:"rect",attr:{"width":"12","height":"12",x:"6",y:"10"},child:[]}]})(props);
}
/**
 * WashingMachine icon from Lucide icons
 */
export function LuWashingMachine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h3"}},{tag:"path",attr:{d:"M17 6h.01"},child:[]},{tag:"rect",attr:{"width":"18","height":"20",x:"3",y:"2","rx":"2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"13","r":"5"},child:[]},{tag:"path",attr:{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"},child:[]}]})(props);
}
/**
 * Watch icon from Lucide icons
 */
export function LuWatch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"6"}},{tag:"polyline",attr:{"points":"12 10 12 12 13 13"},child:[]},{tag:"path",attr:{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"},child:[]},{tag:"path",attr:{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"},child:[]}]})(props);
}
/**
 * Waves icon from Lucide icons
 */
export function LuWaves(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}},{tag:"path",attr:{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"},child:[]},{tag:"path",attr:{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"},child:[]}]})(props);
}
/**
 * Waypoints icon from Lucide icons
 */
export function LuWaypoints(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"4.5","r":"2.5"}},{tag:"path",attr:{d:"m10.2 6.3-3.9 3.9"},child:[]},{tag:"circle",attr:{"cx":"4.5","cy":"12","r":"2.5"},child:[]},{tag:"path",attr:{d:"M7 12h10"},child:[]},{tag:"circle",attr:{"cx":"19.5","cy":"12","r":"2.5"},child:[]},{tag:"path",attr:{d:"m13.8 17.7 3.9-3.9"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"19.5","r":"2.5"},child:[]}]})(props);
}
/**
 * Webcam icon from Lucide icons
 */
export function LuWebcam(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"10","r":"8"}},{tag:"circle",attr:{"cx":"12","cy":"10","r":"3"},child:[]},{tag:"path",attr:{d:"M7 22h10"},child:[]},{tag:"path",attr:{d:"M12 22v-4"},child:[]}]})(props);
}
/**
 * Webhook icon from Lucide icons
 */
export function LuWebhook(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}},{tag:"path",attr:{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"},child:[]},{tag:"path",attr:{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"},child:[]}]})(props);
}
/**
 * WebhookOff icon from Lucide icons
 */
export function LuWebhookOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"}},{tag:"path",attr:{d:"M9 3.4a4 4 0 0 1 6.52.66"},child:[]},{tag:"path",attr:{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"},child:[]},{tag:"path",attr:{d:"M20.3 20.3a4 4 0 0 1-2.3.7"},child:[]},{tag:"path",attr:{d:"M18.6 13a4 4 0 0 1 3.357 3.414"},child:[]},{tag:"path",attr:{d:"m12 6 .6 1"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * Weight icon from Lucide icons
 */
export function LuWeight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"5","r":"3"}},{tag:"path",attr:{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"},child:[]}]})(props);
}
/**
 * Wheat icon from Lucide icons
 */
export function LuWheat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 22 16 8"}},{tag:"path",attr:{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"},child:[]},{tag:"path",attr:{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"},child:[]},{tag:"path",attr:{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"},child:[]},{tag:"path",attr:{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"},child:[]},{tag:"path",attr:{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"},child:[]},{tag:"path",attr:{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"},child:[]},{tag:"path",attr:{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"},child:[]}]})(props);
}
/**
 * WheatOff icon from Lucide icons
 */
export function LuWheatOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 22 10-10"}},{tag:"path",attr:{d:"m16 8-1.17 1.17"},child:[]},{tag:"path",attr:{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"},child:[]},{tag:"path",attr:{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"},child:[]},{tag:"path",attr:{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"},child:[]},{tag:"path",attr:{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"},child:[]},{tag:"path",attr:{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"},child:[]},{tag:"path",attr:{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"},child:[]},{tag:"path",attr:{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * WholeWord icon from Lucide icons
 */
export function LuWholeWord(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"7","cy":"12","r":"3"}},{tag:"path",attr:{d:"M10 9v6"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"12","r":"3"},child:[]},{tag:"path",attr:{d:"M14 7v8"},child:[]},{tag:"path",attr:{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"},child:[]}]})(props);
}
/**
 * Wifi icon from Lucide icons
 */
export function LuWifi(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h.01"}},{tag:"path",attr:{d:"M2 8.82a15 15 0 0 1 20 0"},child:[]},{tag:"path",attr:{d:"M5 12.859a10 10 0 0 1 14 0"},child:[]},{tag:"path",attr:{d:"M8.5 16.429a5 5 0 0 1 7 0"},child:[]}]})(props);
}
/**
 * WifiHigh icon from Lucide icons
 */
export function LuWifiHigh(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h.01"}},{tag:"path",attr:{d:"M5 12.859a10 10 0 0 1 14 0"},child:[]},{tag:"path",attr:{d:"M8.5 16.429a5 5 0 0 1 7 0"},child:[]}]})(props);
}
/**
 * WifiLow icon from Lucide icons
 */
export function LuWifiLow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h.01"}},{tag:"path",attr:{d:"M8.5 16.429a5 5 0 0 1 7 0"},child:[]}]})(props);
}
/**
 * WifiOff icon from Lucide icons
 */
export function LuWifiOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h.01"}},{tag:"path",attr:{d:"M8.5 16.429a5 5 0 0 1 7 0"},child:[]},{tag:"path",attr:{d:"M5 12.859a10 10 0 0 1 5.17-2.69"},child:[]},{tag:"path",attr:{d:"M19 12.859a10 10 0 0 0-2.007-1.523"},child:[]},{tag:"path",attr:{d:"M2 8.82a15 15 0 0 1 4.177-2.643"},child:[]},{tag:"path",attr:{d:"M22 8.82a15 15 0 0 0-11.288-3.764"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * WifiZero icon from Lucide icons
 */
export function LuWifiZero(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h.01"}}]})(props);
}
/**
 * Wind icon from Lucide icons
 */
export function LuWind(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.8 19.6A2 2 0 1 0 14 16H2"}},{tag:"path",attr:{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2"},child:[]},{tag:"path",attr:{d:"M9.8 4.4A2 2 0 1 1 11 8H2"},child:[]}]})(props);
}
/**
 * WindArrowDown icon from Lucide icons
 */
export function LuWindArrowDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2v8"}},{tag:"path",attr:{d:"M12.8 21.6A2 2 0 1 0 14 18H2"},child:[]},{tag:"path",attr:{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2"},child:[]},{tag:"path",attr:{d:"m6 6 4 4 4-4"},child:[]}]})(props);
}
/**
 * Wine icon from Lucide icons
 */
export function LuWine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 22h8"}},{tag:"path",attr:{d:"M7 10h10"},child:[]},{tag:"path",attr:{d:"M12 15v7"},child:[]},{tag:"path",attr:{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"},child:[]}]})(props);
}
/**
 * WineOff icon from Lucide icons
 */
export function LuWineOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 22h8"}},{tag:"path",attr:{d:"M7 10h3m7 0h-1.343"},child:[]},{tag:"path",attr:{d:"M12 15v7"},child:[]},{tag:"path",attr:{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
/**
 * Workflow icon from Lucide icons
 */
export function LuWorkflow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"8",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M7 11v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"rect",attr:{"width":"8","height":"8",x:"13",y:"13","rx":"2"},child:[]}]})(props);
}
/**
 * Worm icon from Lucide icons
 */
export function LuWorm(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m19 12-1.5 3"}},{tag:"path",attr:{d:"M19.63 18.81 22 20"},child:[]},{tag:"path",attr:{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"},child:[]}]})(props);
}
/**
 * WrapText icon from Lucide icons
 */
export function LuWrapText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"3","x2":"21","y1":"6","y2":"6"}},{tag:"path",attr:{d:"M3 12h15a3 3 0 1 1 0 6h-4"},child:[]},{tag:"polyline",attr:{"points":"16 16 14 18 16 20"},child:[]},{tag:"line",attr:{"x1":"3","x2":"10","y1":"18","y2":"18"},child:[]}]})(props);
}
/**
 * Wrench icon from Lucide icons
 */
export function LuWrench(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}}]})(props);
}
/**
 * X icon from Lucide icons
 */
export function LuX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"}},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(props);
}
/**
 * Youtube icon from Lucide icons
 */
export function LuYoutube(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}},{tag:"path",attr:{d:"m10 15 5-3-5-3z"},child:[]}]})(props);
}
/**
 * Zap icon from Lucide icons
 */
export function LuZap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}}]})(props);
}
/**
 * ZapOff icon from Lucide icons
 */
export function LuZapOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"}},{tag:"path",attr:{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"},child:[]},{tag:"path",attr:{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
/**
 * ZoomIn icon from Lucide icons
 */
export function LuZoomIn(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"11","cy":"11","r":"8"}},{tag:"line",attr:{"x1":"21","x2":"16.65","y1":"21","y2":"16.65"},child:[]},{tag:"line",attr:{"x1":"11","x2":"11","y1":"8","y2":"14"},child:[]},{tag:"line",attr:{"x1":"8","x2":"14","y1":"11","y2":"11"},child:[]}]})(props);
}
/**
 * ZoomOut icon from Lucide icons
 */
export function LuZoomOut(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"11","cy":"11","r":"8"}},{tag:"line",attr:{"x1":"21","x2":"16.65","y1":"21","y2":"16.65"},child:[]},{tag:"line",attr:{"x1":"8","x2":"14","y1":"11","y2":"11"},child:[]}]})(props);
}
