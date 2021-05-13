import React, { Component } from "react";

const navermaps = window.naver.maps;
const sample = [
  {
    lat: 37.554722,
    lng: 126.970833,
  },
  {
    lat: 37.553722,
    lng: 126.920833,
  },
  {
    lat: 37.553722,
    lng: 126.922833,
  },
];
export default class MapComponent extends Component {
  // 1.
  constructor(props) {
    super(props);
    // this.rootRef = React.createRef();
  }

  //2 .
  componentDidMount() {
    // naver map , map id 를 가져와서 넣어주기
    // var mapOptions = {
    //   center: new navermaps.LatLng(lat, lng),
    //   zoom: 15,
    // };
    // _Map = new navermaps.Map("map", mapOptions);
    // for (var i = 0; i < sample.length; i++) {
    //   addMarker(sample[i].lat, sample[i].lng);
    // }
  }

  //4
  shouldComponentUpdate() {
    // const mapDiv = querySelect("#map")  ;
    // mapDiv.classlist ....
    // querySelect("#map")  = this.rootRef.current
  }

  //5.
  componentWillUnmount() {}

  //3
  render() {
    return <div ref={this.rootRef} id="map"></div>;
  }
}
