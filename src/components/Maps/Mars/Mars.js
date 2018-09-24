import React from 'react';
import SpaceView from '../../SpaceView/SpaceView';

const Mars = () => {
  const activeMap = "Mars";

  // Links to configure cors in esri
  const corsEnabledServers = ["https://api.nasa.gov", "https://api.nasa.gov", "https://api.nasa.gov/mars-wmts/catalog"];

  // Layers for the map
  const layers = [
    {
      url: 'https://api.nasa.gov/mars-wmts/catalog/MC11E_HRMOSCO_COL',
      description: 'ratios reduce brightness variations due to albedo and topography, and the resulting image contains brightness variations due primarily to changes in lunar soil composition and maturity. The red channel represents areas that are low in titanium, or high in glass content, the green channel is sensitive to the amount of iron in the surface, and the blue channel reflects the surfaces with high titanium or bright slopes and albedos that are not compensated by using the image ratios.',
      thumbnail: 'MC11E_HRMOSCO_COL-200.png'
    },
    {
      url: 'https://api.nasa.gov/mars-wmts/catalog/HRSC_Martian_east',
      description: 'The half degree thorium abundance data product contains data from the LP gamma ray spectrometer [Feldman et al., 1999]. The absolute abundances are given in units of ppm. These data are taken from the low-altitude portion of the LP mission. A description of the reduction of these data products is given by Lawrence et al. [2002a, 2002b]. The map bin size is 0.5 deg by 0.5 deg. This Lunar Prospector (LP) gamma ray special product and associated documentation have been prepared by the LP Spectrometer Team as part of a NASA Lunar Data Analysis Program.',
      thumbnail: 'HRSC_Martian_east-200.png'},
    {
      url: 'https://api.nasa.gov/mars-wmts/catalog/Mars_MGS_TES_Albedo_mosaic_global_7410m',
      description: 'Each sample represents the rock-free regolith surface temperature as estimated using the technique described in Bandfield et al. (2011). Data is derived from Diviner data collected from July 5, 2009 through September 2, 2012. Data were restricted to local times of 1930 to 0530 with the solar incidence angles greater than 90 degrees, latitudes between 60N and 60S, emission angles less than 15 degrees, brightness temperatures less than 200K. Several data quality constraints were used as well (quality flag for calibration, 0; quality flag for miscellaneous, 0; noise quality flag, 0 to 1).',
      thumbnail: 'Mars_MGS_TES_Albedo_mosaic_global_7410m-200.png'},
    {
      url: 'https://api.nasa.gov/mars-wmts/catalog/Mars_MGS_MOLA_ClrShade_merge_global_463m',
      description: 'The Lunar Orbiter Laser Altimeter (LOLA) is producing a high-resolution global topographic model and geodetic framework that enables precise targeting, safe landing, and surface mobility to carry out exploratory activities. LOLA characterizes the polar illumination environment, and images permanently shadowed polar regions of the Moon to identify possible locations of surface ice crystals in shadowed polar craters.',
      thumbnail: 'Mars_MGS_MOLA_ClrShade_merge_global_463m-200.jpg'
    },
    {
      url: 'https://api.nasa.gov/mars-wmts/catalog/hrsc_mawrth_vallis',
      description: 'Clementine UVVIS derived mineral and optical maturity maps. These datasets were generated from the UVVIS mosaics warped to the ULCN2005 control network. For more information on how the data set was derived, please see: Lucey, P.G., Blewett, D.T., Taylor, G.J., Hawke, B.R., 2000. Imaging of lunar surface maturity. J. Geophys. Res. 105, 20377–20386. Lucey, P. G., G. J. Taylor, and E. Malaret , 1995, Abundance and distribution of iron on the Moon. Science, vol. 268, p. 1150-1153. Lucey, P. G., D. T. Blewett, and B. R. Hawke, 1997, Mapping the FeO and TiO2 content of the lunar surface with multispectral imagery. Journal of Geophysical Research, in press.',
      thumbnail: 'Clem_UVVIS_TiO2_Clr_Global_152ppd-200.png'},
    {
      url: 'https://api.nasa.gov/mars-wmts/catalog/hrsc_mawrth_vallis_color',
      description: 'The Lunar Orbiter Laser Altimeter (LOLA) is producing a high-resolution global topographic model and geodetic framework that enables precise targeting, safe landing, and surface mobility to carry out exploratory activities. LOLA characterizes the polar illumination environment, and images permanently shadowed polar regions of the Moon to identify possible locations of surface ice crystals in shadowed polar craters.',
      thumbnail: 'LRO_LOLA_Shade_Global_256ppd_v06-200.png'
    },
  ];

  // Layers with waypoints
  const KMLLayers = ["http://abwtechnologies.com/Resources/Mars/labyrinth", "http://abwtechnologies.com/Resources/Mars/mountains", "http://abwtechnologies.com/Resources/Mars/Ridges"];

  // Map's base layer
  const baseLayer = "https://api.nasa.gov/mars-wmts/catalog/Mars_Viking_MDIM21_ClrMosaic_global_232m";

  const mapDescription = [
    "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury.",
    "In English, Mars carries a name of the Roman god of war, and is often referred to as the \"Red Planet\" because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye.", 
    "Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth."
  ];

  return(
    <div>
      <SpaceView activeMap={activeMap} servers={corsEnabledServers} layers={layers} baseLayer={baseLayer} KMLLayers={KMLLayers} mapDescription={mapDescription}/>
    </div>
  );
};

export default Mars;
