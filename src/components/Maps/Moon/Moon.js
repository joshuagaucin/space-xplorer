import React from 'react';
import SpaceView from '../../SpaceView/SpaceView';

const Moon = () => {
  const activeMap = "Moon";

  //Links to enable cors in esri's config
  const corsEnabledServers = ["https://moontrek.jpl.nasa.gov", "https://moontrek.jpl.nasa.gov", "https://moontrek.jpl.nasa.gov/trektiles/Moon/EQ"];

  // Layers for map
  const layers = [
    {
      url: 'https://moontrek.jpl.nasa.gov/trektiles/Moon/EQ/LRO_DIVINER_ClrRockFreeSurfaceTemp_Global_128ppd',
      description: 'Each sample represents the rock-free regolith surface temperature as estimated using the technique described in Bandfield et al. (2011). Data is derived from Diviner data collected from July 5, 2009 through September 2, 2012. Data were restricted to local times of 1930 to 0530 with the solar incidence angles greater than 90 degrees, latitudes between 60N and 60S, emission angles less than 15 degrees, brightness temperatures less than 200K. Several data quality constraints were used as well (quality flag for calibration, 0; quality flag for miscellaneous, 0; noise quality flag, 0 to 1).',
      thumbnail: 'LRO_DIVINER_ClrRockFreeSurfaceTemp_Global_128ppd-200.png'},
    {
      url: 'https://moontrek.jpl.nasa.gov/trektiles/Moon/EQ/LRO_LOLA_ClrRoughness_Global_16ppd',
      description: 'The Lunar Orbiter Laser Altimeter (LOLA) is producing a high-resolution global topographic model and geodetic framework that enables precise targeting, safe landing, and surface mobility to carry out exploratory activities. LOLA characterizes the polar illumination environment, and images permanently shadowed polar regions of the Moon to identify possible locations of surface ice crystals in shadowed polar craters.',
      thumbnail: 'LRO_LOLA_ClrRoughness_Global_16ppd-200.png'},
    {
      url: 'https://moontrek.jpl.nasa.gov/trektiles/Moon/EQ/Clem_UVVIS_TiO2_Clr_Global_152ppd',
      description: 'Clementine UVVIS derived mineral and optical maturity maps. These datasets were generated from the UVVIS mosaics warped to the ULCN2005 control network. For more information on how the data set was derived, please see: Lucey, P.G., Blewett, D.T., Taylor, G.J., Hawke, B.R., 2000. Imaging of lunar surface maturity. J. Geophys. Res. 105, 20377–20386. Lucey, P. G., G. J. Taylor, and E. Malaret , 1995, Abundance and distribution of iron on the Moon. Science, vol. 268, p. 1150-1153. Lucey, P. G., D. T. Blewett, and B. R. Hawke, 1997, Mapping the FeO and TiO2 content of the lunar surface with multispectral imagery. Journal of Geophysical Research, in press.',
      thumbnail: 'Clem_UVVIS_TiO2_Clr_Global_152ppd-200.png'},
    {
      url: 'https://moontrek.jpl.nasa.gov/trektiles/Moon/EQ/LRO_LOLA_Shade_Global_256ppd_v06',
      description: 'The Lunar Orbiter Laser Altimeter (LOLA) is producing a high-resolution global topographic model and geodetic framework that enables precise targeting, safe landing, and surface mobility to carry out exploratory activities. LOLA characterizes the polar illumination environment, and images permanently shadowed polar regions of the Moon to identify possible locations of surface ice crystals in shadowed polar craters.',
      thumbnail: 'LRO_LOLA_Shade_Global_256ppd_v06-200.png'},
    {
      url: 'https://moontrek.jpl.nasa.gov/trektiles/Moon/EQ/Clem_UVVIS_3ClrRatio_Global_152ppd',
      description: 'ratios reduce brightness variations due to albedo and topography, and the resulting image contains brightness variations due primarily to changes in lunar soil composition and maturity. The red channel represents areas that are low in titanium, or high in glass content, the green channel is sensitive to the amount of iron in the surface, and the blue channel reflects the surfaces with high titanium or bright slopes and albedos that are not compensated by using the image ratios.',
      thumbnail: 'Clem_UVVIS_3ClrRatio_Global_152ppd.png'
    },
    {
      url: 'https://moontrek.jpl.nasa.gov/trektiles/Moon/EQ/LP_GRS_Th_Clr_Global_2ppd',
      description: 'The half degree thorium abundance data product contains data from the LP gamma ray spectrometer [Feldman et al., 1999]. The absolute abundances are given in units of ppm. These data are taken from the low-altitude portion of the LP mission. A description of the reduction of these data products is given by Lawrence et al. [2002a, 2002b]. The map bin size is 0.5 deg by 0.5 deg. This Lunar Prospector (LP) gamma ray special product and associated documentation have been prepared by the LP Spectrometer Team as part of a NASA Lunar Data Analysis Program.',
      thumbnail: 'LP_GRS_Th_Clr_Global_2ppd.png'},
    {
      url: 'https://moontrek.jpl.nasa.gov/trektiles/Moon/EQ/LRO_WAC-GLD100_ClrShade_79S79N_256ppd',
      description: 'This is a colorized shaded-relief of the 256 pixel/degree (ppd, ~118 meter/pixel) WAC Digital Elevation Model (DEM) was constructed from Lunar Reconnaissance Orbiter (LRO) Wide Angle Camera (WAC) stereo images. This DEM was derived from the original DLR 100 m topographic model, or &quot;GLD100&quot;, and covers 98.2% of the lunar surface and combined with the LRO Lunar Orbiter Laser Altimeter (LOLA) polar gridded DEM for the areas not covered. Using digital photogrammetric techniques the GLD100 was computed from 69,000 WAC stereo models. Due to persistent shadows near the poles it is not possible to create a complete WAC stereo map at the very highest latitudes.',
      thumbnail: 'LRO_WAC-GLD100_ClrShade_79S79N_256ppd-200.png'},
  ];

  // Layers with waypoints
  const KMLLayers = [
    "http://abwtechnologies.com/Resources/Moon/landingSites",
    "http://abwtechnologies.com/Resources/Moon/mountains",
    "http://abwtechnologies.com/Resources/Moon/valleys"
  ];

  const baseLayer = "https://moontrek.jpl.nasa.gov/trektiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02";

  const mapDescription = [
    "The Moon is an astronomical body that orbits planet Earth and is Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary).",
    " The Moon is after Jupiter's satellite Io the second-densest satellite in the Solar System among those whose densities are known. The Moon is thought to have formed about 4.51 billion years ago, not long after Earth.",
    "The most widely accepted explanation is that the Moon formed from the debris left over after a giant impact between Earth and a Mars-sized body called Theia."
  ];

  return(
    <div>
      <SpaceView activeMap={activeMap} servers={corsEnabledServers} layers={layers} baseLayer={baseLayer} KMLLayers={KMLLayers} mapDescription={mapDescription}/>
    </div>
  );
};

export default Moon;
