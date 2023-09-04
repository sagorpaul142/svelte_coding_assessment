<script>
    import {onMount} from 'svelte';
    import 'ol/ol.css';
    import Map from 'ol/Map';
    import View from 'ol/View';
    import TileLayer from 'ol/layer/Tile';
    import OSM from 'ol/source/OSM';
    import Geolocation from 'ol/Geolocation';
    import Overlay from 'ol/Overlay';
    import {Fill, Stroke, Style} from "ol/style.js";
    import VectorLayer from "ol/layer/Vector.js";

    let geolocation;

    onMount(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });

        geolocation = new Geolocation({
            tracking: true,
            trackingOptions: {
                enableHighAccuracy: true,
            },
            projection: map.getView().getProjection(),
        });

        const marker = new Overlay({
            element: document.getElementById('marker'),
            positioning: 'center-center',
            stopEvent: false,
        });
        map.addOverlay(marker);

        geolocation.on('change:position', () => {
            const coordinates = geolocation.getPosition();
            marker.setPosition(coordinates);
            map.getView().setCenter(coordinates);
        });

        geolocation.setTracking(true);

        const geoJSONStyle = new Style({
            fill: new Fill({
                color: 'rgba(0, 106, 78, 0.75)',
            }),
            stroke: new Stroke({
                color: 'rgba(0, 0, 0, 0.8)',
                width: 1,
            }),
        });

        const geoJSONLayer = new VectorLayer({
            style: geoJSONStyle,
        });

        map.addLayer(geoJSONLayer);
    });
</script>

<style>
    #map {
        width: 100%;
        height: calc(100vh - 57px);
    }

    #marker {
        width: 10px;
        height: 10px;
        background-color: blue;
        border-radius: 50%;
    }
</style>

<main>
    <div id="map"></div>
    <div id="marker"></div>
</main>
