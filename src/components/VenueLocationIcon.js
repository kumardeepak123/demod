import {icon} from 'leaflet';
import LocationIcon  from '../assets/venue_location_icon.svg'
export const VenueLocationIcon = icon({
  iconUrl: LocationIcon,
  iconRetinaUrl: LocationIcon,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [40, 35],
  className: 'leaflet-venue-icon'
});
