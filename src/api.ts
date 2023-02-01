/**
 * ArcOS API Integration
 *
 * This file contains the definitions for interfacing with the ArcOS exposed API's.
 *
 * @var ArcOS The ArcOS Hook from which you will access ArcOS' resources
 */
export let ArcOS: ArcExposed;

export function loadArcAPIs(context: ArcExposed) {
  if (!context)
    throw new Error(
      "Unable to hook onto the ArcOS External APIs: ArcExposed is not defined."
    );

  ArcOS = context;
}
