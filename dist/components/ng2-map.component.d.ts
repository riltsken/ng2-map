/// <reference types="googlemaps" />
import { ElementRef, NgZone, OnChanges, OnDestroy, EventEmitter, SimpleChanges, AfterViewInit } from '@angular/core';
import { OptionBuilder } from '../services/option-builder';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
import { GeoCoder } from '../services/geo-coder';
import { Ng2Map } from '../services/ng2-map';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { IJson } from '../services/util';
declare class EventInputs {
    backgroundColor: any;
    center: any;
    disableDefaultUI: any;
    disableDoubleClickZoom: any;
    draggable: any;
    draggableCursor: any;
    draggingCursor: any;
    heading: any;
    keyboardShortcuts: any;
    mapMaker: any;
    mapTypeControl: any;
    mapTypeId: any;
    maxZoom: any;
    minZoom: any;
    noClear: any;
    overviewMapControl: any;
    panControl: any;
    panControlOptions: any;
    rotateControl: any;
    scaleControl: any;
    scrollwheel: any;
    streetView: any;
    styles: any;
    tilt: any;
    zoom: any;
    streetViewControl: any;
    zoomControl: any;
    mapTypeControlOptions: any;
    overviewMapControlOptions: any;
    rotateControlOptions: any;
    scaleControlOptions: any;
    streetViewControlOptions: any;
    options: any;
}
declare class EventOutputs {
    bounds_changed: any;
    center_changed: any;
    click: any;
    dblclick: any;
    drag: any;
    dragend: any;
    dragstart: any;
    heading_changed: any;
    idle: any;
    typeid_changed: any;
    mousemove: any;
    mouseout: any;
    mouseover: any;
    projection_changed: any;
    resize: any;
    rightclick: any;
    tilesloaded: any;
    tile_changed: any;
    zoom_changed: any;
}
interface Ng2MapComponent extends EventInputs, EventOutputs {
}
declare class Ng2MapComponent implements OnChanges, OnDestroy, AfterViewInit {
    optionBuilder: OptionBuilder;
    elementRef: ElementRef;
    zone: NgZone;
    geolocation: NavigatorGeolocation;
    geoCoder: GeoCoder;
    ng2Map: Ng2Map;
    el: HTMLElement;
    map: google.maps.Map;
    mapOptions: google.maps.MapOptions;
    inputChanges$: Subject<{}>;
    mapReady$: EventEmitter<any>;
    infoWindows: any;
    mapInitPath: number;
    mapIdledOnce: boolean;
    constructor(optionBuilder: OptionBuilder, elementRef: ElementRef, zone: NgZone, geolocation: NavigatorGeolocation, geoCoder: GeoCoder, ng2Map: Ng2Map);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    addGoogleMapsApi(): void;
    initializeMap(): void;
    setCenter(): void;
    openInfoWindow(id: string, anchor: google.maps.MVCObject, data: IJson): void;
    ngOnDestroy(): void;
    addToMapObjectGroup(mapObjectName: string, mapObject: any): void;
    removeFromMapObjectGroup(mapObjectName: string, mapObject: any): void;
}
export { EventInputs, EventOutputs, Ng2MapComponent };
