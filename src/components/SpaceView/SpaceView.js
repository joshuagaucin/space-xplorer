import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { toggleNavMenuOpen, toggleNavMenuClose } from '../../actions/navToggleActions.js';
import { toggleSearchBarOpen, toggleSearchBarClose } from '../../actions/toggleSearchBarActions.js';
import { PostMap } from '../../actions/postMap.js';

import EsriLoaderReact from 'esri-loader-react';
import * as esriLoader from 'esri-loader';
import MainNav from '../MainNav/MainNav';

import './SpaceView.scss';

class SpaceView extends Component {
  constructor(props) {
    super(props);

    // Posts Data to redux
    this.props.PostMap(this.props.activeMap, this.props.baseLayer, this.props.layers, this.props.servers);
    this.props.toggleNavMenuOpen();
  }

  componentDidMount() {

    // Loads esri modules used
    esriLoader.loadModules([
    "esri/config",
    "esri/Map",
    "esri/layers/WMTSLayer",
    "esri/layers/support/WMTSStyle",
    "esri/layers/support/WMTSSublayer",
    "esri/Basemap",
    "esri/geometry/Extent",
    "esri/views/MapView",
    "esri/views/SceneView",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapToggle",
    "esri/widgets/ScaleBar",
    "esri/widgets/Search",
    "esri/layers/KMLLayer",
    "esri/layers/FeatureLayer",
    "dojo/domReady!"])
    .then(([esriConfig, Map, WMTSLayer, WMTSStyle, WMTSSublayer, Basemap, Extent, MapView, SceneView, LayerList, BasemapToggle, ScaleBar, Search, KMLLayer, FeatureLayer]) => {

      const mapInfo = this.props.mapInfo;

      // Enables cors for api requests
      const initCors = servers => {
        esriConfig.request.proxyUrl = servers[0];
        esriConfig.request.corsEnabledServers.push(servers[1]);
        esriConfig.request.corsEnabledServers.push(servers[2]);
      };

      // Initializes all widgets and attaches them to the DOM
      const initWidgets = (baseLayer, view) => {

        // sets actions for the layers
        const defineActions = (e) => {

          const item = e.item;

          item.actionsSections = [
            [{
              title: "Layer information",
              className: "esri-icon-description",
              id: "information"
            }], [{
              title: "Increase opacity",
              className: "esri-icon-up",
              id: "increase-opacity"
            }, {
              title: "Decrease opacity",
              className: "esri-icon-down",
              id: "decrease-opacity"
            }]
          ];

        };

        // Displays layer info when action is triggered
        const triggerActions = (event) => {

          // The layer visible in the view at the time of the trigger.
          const visibleLayer = event.item.layer;

          const triggerInfo = () => {
            let img, description;

            const removeInfo = () => {
              document.querySelector('.layerInfo').remove();
            };

            // Loops throgh layers and pulls thumbnail and description
            mapInfo.layersArr.forEach(layer => {

              if (layer.thumbnail.includes(visibleLayer.title)) {
                img =  require(`../Maps/${mapInfo.activeMap}/images/${layer.thumbnail}`);
                description = layer.description;
              }

            });

            const HTML = `
            <div class="layerInfo">
              <svg class="closeBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/></svg>
              <h2>${this.parseId(visibleLayer.title)}</h2>
              <img src=${img} alt=${visibleLayer.title}/>
              <p>${description ? description : 'Data failed to fetch'}</p>
            </div>
            `;
            document.getElementById('viewDiv').insertAdjacentHTML('beforeend', HTML);
            document.querySelector('.closeBtn').addEventListener('click', removeInfo);
          };

          // Capture the action id.
          const id = event.action.id;

          if (id === "information") {

            // If the information action is triggered, then
            // open the item details page of the service layer.
            triggerInfo();

          } else if (id === "increase-opacity") {

            // If the increase-opacity action is triggered, then
            // increase the opacity of the GroupLayer by 0.25.

            if (visibleLayer.opacity < 1) {
              visibleLayer.opacity += 0.25;
            }
          } else if (id === "decrease-opacity") {

            // If the decrease-opacity action is triggered, then
            // decrease the opacity of the GroupLayer by 0.25.

            if (visibleLayer.opacity > 0) {
              visibleLayer.opacity -= 0.25;
            }
          }
        };

        // List of sublayers widget
        const layerList = new LayerList({
          view: view,
          listItemCreatedFunction: defineActions
        });

        view.ui.add(layerList, {
          position: "top-right"
        });

        layerList.on('trigger-action', triggerActions);

        // Measuring scale bar widget
        const scaleBar = new ScaleBar({
          view: view
        });

        view.ui.add(scaleBar, {
          position: "bottom-right"
        });

        view.ui.move("zoom", "bottom-left");

        //Once the layer loads the the view extent to the layer's extent
        baseLayer.when(function(){
          view.extent = baseLayer.fullExtent;
        });

      };

      // Returns an array of esri layers
      const createLayers = (layersArr, type) => {

        return layersArr.map(layer => {

          if (type === 'WMTSLayer') {
            return new WMTSLayer({
              url: layer.url,
              id: this.parseId(layer.url),
              opacity: .8,
              visible: false
            });
          } else if (type === 'KMLLayer') {
              return new KMLLayer({
                url: layer,
                title: this.parseId(layer),
                opacity: .5
              });
          }

        });
      };

      // Initializes and renders the map
      const initMap = () => {

        // Creates baselayer of map
        let myLayer = new WMTSLayer({
          url: mapInfo.baseLayer,
          id: this.parseId(mapInfo.baseLayer)
        });

        // Creates a basemap out of the baselayer
        let basemap = new Basemap({
          baseLayers: [
            myLayer
          ]
        });

        // Creates the map to render the basemap and layers
        let map = new Map({
          basemap,
          layers: createLayers(this.props.KMLLayers, 'KMLLayer').concat(createLayers(mapInfo.layersArr, 'WMTSLayer'))
        });

        // Renders the Map to the view
        const view = new MapView({
          map: map,
          container: "viewDiv"
        });

        // Initializes all widgets and attaches them to the DOM
        initWidgets(myLayer, view);

      };

      // Starts Map
      initCors(mapInfo.servers);
      initMap();

      })
      .catch(err => {
        // handle any errors
        console.error(err);
      });

      // Caroussel for map info
      let counter = 0;

      const rotateMapInfo = (operator) => {

        if (operator === '+') {
          counter++;
        } else if (operator === '-') {
          counter--;
        }

        const sections = document.querySelectorAll('.infoSection');

        if (counter > sections.length - 1) {
          counter = 0;
        } else if (counter < 0) {
          counter = sections.length - 1;
        }

        sections.forEach((el, i) => {
          el.classList.add('removeMapInfo');
          if (counter === i) {
            el.classList.remove('removeMapInfo')
          }
        });

      };

      rotateMapInfo();
      document.querySelector('.mapInfoPlus').addEventListener('click', () => {rotateMapInfo('+')});
      document.querySelector('.mapInfoMinus').addEventListener('click', () => {rotateMapInfo('-')});
    }

  componentDidUpdate() {

    // Attaches layer list widget to Nav component
    if (!this.props.navToggle && document.querySelector('.esri-layer-list') !== null) {

      document.querySelector('.esri-layer-list').style.display = 'block';
      document.querySelector('.esri-layer-list').style.zIndex = '10';

      document.querySelector('.searchBarContainer').classList.add('activeSearchBarContainer');
      document.querySelector('.searchBar').classList.add('activeSearchBar');
      document.querySelector('.searchIcon').classList.add('activeSearchIcon');
      document.querySelector('.mapInfo').classList.remove('removeMapInfo');

      this.props.toggleSearchBarOpen();

    } else if (this.props.navToggle && document.querySelector('.esri-layer-list') !== null && !this.props.toggleSearchBar) {

        document.querySelector('.esri-layer-list').style.display = 'none';
        document.querySelector('.mapInfo').classList.add('removeMapInfo');

    }
  }

  // Takes a string url and extracts the ID
  parseId(str) {
    const strArray = str.split('/');
    return strArray[strArray.length - 1];
  }

  render() {
    return(
      <EsriLoaderReact>
        <div id="viewDiv">

          <MainNav content={'.'} handleSearchBarToggle={{toggleOff: this.props.toggleNavMenuClose, toggleOn: this.props.toggleNavMenuOpen, state: this.props.navToggle}} handleNavMenuToggle={{toggleOff: this.props.toggleSearchBarClose, toggleOn: this.props.toggleSearchBarOpen, state: this.props.toggleSearchBar}}/>

          <main className="mapInfo removeMapInfo">
            <h1>{this.props.activeMap}</h1>
            {this.props.mapDescription.map((info, i)=> <section key={i} className="infoSection"><p>{info}</p></section>)}
            <button className="mapInfoMinus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 128L192 256l128 128z"/></svg></button>
            <button className="mapInfoPlus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 128l128 128-128 128z"/></svg></button>
          </main>

          <Link className="toHome" to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"/></svg></Link>

        </div>
      </EsriLoaderReact>
    );
  }
}

// Checks propTypes for Redux
toggleNavMenuOpen.propTypes = {
  toggleNavMenu: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
}

toggleNavMenuClose.propTypes = {
  toggleNavMenu: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
}

toggleSearchBarOpen.propTypes = {
  toggleNavMenu: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
}

toggleSearchBarClose.propTypes = {
  toggleNavMenu: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
}

PostMap.propTypes = {
  PostMap: PropTypes.func.isRequired,
  payload: PropTypes.bool.isRequired
}

// Maps state to props
const mapStateToProps = state => {
  return {navToggle: state.navToggle.toggleNavMenu, toggleSearchBar: state.searchBarToggle.toggleSearchBar, mapInfo: state.PostMap.mapInfo}
};

export default connect(mapStateToProps, { toggleNavMenuOpen, toggleNavMenuClose, toggleSearchBarOpen, toggleSearchBarClose, PostMap })(SpaceView);
