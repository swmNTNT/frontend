import { RenderAfterNavermapsLoaded, NaverMap, Marker, loadNavermapsScript } from 'react-naver-maps'; // naver map 패키지 불러오기
import React, { Component } from "react";

var _Map = null;
var _Markers = new Array();
var prevMarker = null;
var currMarker = null;

const navermaps = window.naver.maps;
const sample = [
  {
    lat: 37.554722, lng: 126.970833
  },
  {
    lat: 37.553722, lng: 126.920833
  },
  {
    lat: 37.553722, lng: 126.922833
  },
];

function init(lat,lng) {
    var mapOptions = {
        center: new navermaps.LatLng(lat, lng),
        zoom: 15,
    };

    _Map = new navermaps.Map('map', mapOptions);

    for (var i = 0; i < sample.length; i++) {
        addMarker(sample[i].lat, sample[i].lng);
    }
}

function addMarker(lat, lng) {
    var newMarker = new navermaps.Marker({
        position: new navermaps.LatLng(lat, lng),
        map: _Map,
        animation: null,
        icon: {
            url:  'http://localhost:3000/marker_normal.png'
        },
        onClick: clickMarkerHandler
    });

    _Markers.push(newMarker);
}

function clickMarkerHandler() {
    if (currMarker == null) {   // 처음 마커를 눌렀을 때
        currMarker = this;
        
        for (var i = 0; i < _Markers.length; i++) {
            _Markers[i].setIcon('http://localhost:3000/marker_unclicked.jpg');
        }

        this.setIcon('http://localhost:3000/marker_clicked.jpg')
    } else {    // 이미 눌린 마커가 있고 다른 마커를 클릭할 때
        prevMarker = currMarker;
        currMarker = this;

        prevMarker.setIcon('http://localhost:3000/marker_unclicked.jpg')
        currMarker.setIcon('http://localhost:3000/marker_clicked.jpg')
    }
}

navermaps.Event.addListener(_Markers, 'click', clickMarkerHandler);



