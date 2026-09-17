/**
 * Coverage data for the schematic network map. City and region names are
 * proper nouns and are identical in both languages.
 *
 * City positions are real coordinates, projected linearly onto the map's
 * viewBox, so the diagram keeps Senegal's true relative geography without
 * pretending to be a surveyed map. Corridors describe the main road routes
 * LS Transport runs between those centres.
 */

export type City = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  /** Hubs get a larger marker and an always-visible label. */
  hub?: boolean;
  /** Manual label offset (in viewBox units) so labels never collide. */
  label: { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' };
};

export const cities: City[] = [
  { id: 'dakar', name: 'Dakar', lat: 14.72, lon: -17.45, hub: true, label: { dx: 0, dy: -18, anchor: 'middle' } },
  { id: 'thies', name: 'Thiès', lat: 14.79, lon: -16.93, hub: true, label: { dx: 12, dy: -6, anchor: 'start' } },
  { id: 'mbour', name: 'Mbour', lat: 14.42, lon: -16.97, label: { dx: -12, dy: 6, anchor: 'end' } },
  { id: 'saint-louis', name: 'Saint-Louis', lat: 16.02, lon: -16.49, hub: true, label: { dx: 12, dy: -4, anchor: 'start' } },
  { id: 'louga', name: 'Louga', lat: 15.62, lon: -16.22, label: { dx: 12, dy: 5, anchor: 'start' } },
  { id: 'diourbel', name: 'Diourbel', lat: 14.66, lon: -16.23, label: { dx: -12, dy: 14, anchor: 'end' } },
  { id: 'touba', name: 'Touba', lat: 14.85, lon: -15.88, label: { dx: 10, dy: -10, anchor: 'start' } },
  { id: 'fatick', name: 'Fatick', lat: 14.34, lon: -16.41, label: { dx: -12, dy: 2, anchor: 'end' } },
  { id: 'kaolack', name: 'Kaolack', lat: 14.15, lon: -16.07, hub: true, label: { dx: 4, dy: 22, anchor: 'start' } },
  { id: 'kaffrine', name: 'Kaffrine', lat: 14.11, lon: -15.55, label: { dx: 12, dy: -8, anchor: 'start' } },
  { id: 'matam', name: 'Matam', lat: 15.66, lon: -13.26, label: { dx: 12, dy: 2, anchor: 'start' } },
  { id: 'tambacounda', name: 'Tambacounda', lat: 13.77, lon: -13.67, hub: true, label: { dx: 0, dy: -18, anchor: 'middle' } },
  { id: 'kedougou', name: 'Kédougou', lat: 12.56, lon: -12.18, label: { dx: -12, dy: 6, anchor: 'end' } },
  { id: 'kolda', name: 'Kolda', lat: 12.9, lon: -14.94, label: { dx: 2, dy: 24, anchor: 'middle' } },
  { id: 'sedhiou', name: 'Sédhiou', lat: 12.71, lon: -15.56, label: { dx: -4, dy: -14, anchor: 'middle' } },
  { id: 'ziguinchor', name: 'Ziguinchor', lat: 12.58, lon: -16.27, hub: true, label: { dx: -12, dy: 2, anchor: 'end' } },
];

export type CorridorBase = {
  id: string;
  path: string[];
};

/** Corridor names and descriptions live in the i18n dictionaries. */
export const corridorBases: CorridorBase[] = [
  { id: 'north', path: ['dakar', 'thies', 'louga', 'saint-louis'] },
  {
    id: 'central',
    path: ['dakar', 'thies', 'diourbel', 'touba', 'kaffrine', 'tambacounda', 'kedougou'],
  },
  { id: 'south', path: ['dakar', 'fatick', 'kaolack', 'kolda', 'sedhiou', 'ziguinchor'] },
  { id: 'coast', path: ['dakar', 'mbour', 'fatick'] },
  { id: 'river', path: ['saint-louis', 'matam', 'tambacounda'] },
];

/** All fourteen administrative regions of Senegal. */
export const regions = [
  'Dakar',
  'Thiès',
  'Diourbel',
  'Fatick',
  'Kaolack',
  'Kaffrine',
  'Louga',
  'Saint-Louis',
  'Matam',
  'Tambacounda',
  'Kédougou',
  'Kolda',
  'Sédhiou',
  'Ziguinchor',
];

/** Projection bounds, padded a little beyond the outermost cities. */
export const bounds = {
  minLon: -17.75,
  maxLon: -11.8,
  minLat: 12.2,
  maxLat: 16.45,
};

export const project = (city: City, width: number, height: number) => ({
  x: ((city.lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * width,
  y: ((bounds.maxLat - city.lat) / (bounds.maxLat - bounds.minLat)) * height,
});
