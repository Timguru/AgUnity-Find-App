import { Component, ViewChild, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../../../../environments/environment.prod';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})


export class MapPage implements OnInit {

  mapa: Mapboxgl.Map;

  latitude: number;
  longitude: number;

  geocoder: Mapboxgl.Map;

  constructor() { 
  }


  ngOnInit() {
    this.loadMap();
    this.mapa.on('load', () => {
      this.mapa.resize();
    });
    this.controlGeocoder();
    this.controlGeolocateControl();
  }

  onChange(search: string): any {
    console.log("onChange Event data: " + search); // search is the value of the search bar 
  }
  
  loadMap(): any {
    Mapboxgl.accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [35.94391836102586, -0.3477833086427684], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
    this.createMarker(35.94391836102586, -0.3477833086427684, "#ff000");
  }

  controlGeocoder() {
    this.mapa.addControl(
      new MapboxGeocoder({
        accessToken: environment.mapboxKey,
        mapboxgl: Mapboxgl,
    }))
  }
  controlGeolocateControl() {
    this.mapa.addControl(
      new Mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      }))
  }


  createMarker(latitude: number, longitude: number, colour: string): any {

    const marker = new Mapboxgl.Marker({
      draggable: true,
      color: colour,
    })
    .setLngLat([latitude, longitude])
    .addTo(this.mapa);
    console.log("marker:", marker, colour);  
  }

}
