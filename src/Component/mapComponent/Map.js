import React, { Component } from "react";
import * as action from "../../redux/action";
import { connect } from "react-redux";
import { Map as LeafletMap, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import coordinateData from "./coordinate.json";
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerLocation: {
        lat: 34.80746,
        lng: -40.4796,
      },
      userLocation: {
        lat: 34.80746,
        lng: -40.4796,
      },
      zoom: 12,
      theaterDetail: [],
      indexClickButton: 0,

    };
  }
  getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.storeUserLocation);
    }
  };
  storeUserLocation = (position) => {
    this.setState({
      userLocation: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
      centerLocation: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  };
  drawUserLocationCircle = () => {
    const userMarkerIcon = new L.Icon({
      iconUrl:
        "https://www.designhouseagency.com/wp-content/uploads/2017/10/home-map-marker.png",
      iconRetinaUrl:
        "https://www.designhouseagency.com/wp-content/uploads/2017/10/home-map-marker.png",
      iconAnchor: new L.Point(0, 0),
      popupAnchor: new L.Point(16, 0),
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(32, 32),
      className: "leaflet-div-icon",
    });
    return (
      <Marker
        position={[this.state.userLocation.lat, this.state.userLocation.lng]}
        icon={userMarkerIcon}
      >
        <Popup>
          <h4 style={{ color: "#fb4226" }}>Bạn đang ở đây</h4>
        </Popup>
      </Marker>
    );
  };
  drawTheaterLocation = () => {
    const theaterMarkerIcon = new L.Icon({
      iconUrl:
        "https://www.zerocarbmarvel.com/wp-content/uploads/2018/10/kisspng-google-map-maker-google-maps-computer-icons-map-marker-5ac5e809e0db14.727932521522919433921.png",
      iconRetinaUrl:
        "https://www.zerocarbmarvel.com/wp-content/uploads/2018/10/kisspng-google-map-maker-google-maps-computer-icons-map-marker-5ac5e809e0db14.727932521522919433921.png",
      iconAnchor: new L.Point(0, 0),
      popupAnchor: new L.Point(16, 0),
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(32, 32),
      className: "leaflet-div-icon-theater",
    });
    if (this.state.theaterDetail.length > 0) {
      return this.state.theaterDetail.map((item, index) => {
        return (
          <Marker
            position={[item.lat, item.long]}
            icon={theaterMarkerIcon}
            key={index}
            onClick={() => {
              this.focusOnTheater(item.lat, item.long);
            }}
          >
            <Popup>
              <div>
                <img
                  src={item.theaterImg}
                  alt={item.theaterName}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    height: "100px",
                  }}
                />
                <h4 style={{ color: "#fb4226" }}>{item.theaterName}</h4>
                <p style={{ margin: "0" }}>{item.address}</p>
              </div>
            </Popup>
          </Marker>
        );
      });
    }else{
      return coordinateData.BHDStar.map((item, index) => {
        return (
          <Marker
            position={[item.lat, item.long]}
            icon={theaterMarkerIcon}
            key={index}
            onClick={() => {
              this.focusOnTheater(item.lat, item.long);
            }}
          >
            <Popup>
              <div>
                <img
                  src={item.theaterImg}
                  alt={item.theaterName}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    height: "100px",
                  }}
                />
                <h4 style={{ color: "#fb4226" }}>{item.theaterName}</h4>
                <p style={{ margin: "0" }}>{item.address}</p>
              </div>
            </Popup>
          </Marker>
        );
      });
    }
  };
  focusOnTheater = (lat, long) => {
    this.setState({
      centerLocation: {
        lat: lat,
        lng: long,
      }
    });
  };
  handleLocateTheater = (maRap,index) => {
    switch (maRap) {
      case "BHDStar":
        this.setState({
          theaterDetail: coordinateData.BHDStar,
        });
        this.props.LayThongTinCumRapTheoHeThongRap("BHDStar")
        break;
      case "Galaxy":
        this.setState({
          theaterDetail: coordinateData.Galaxy,
        });
        this.props.LayThongTinCumRapTheoHeThongRap("Galaxy")
        break;
      case "LotteCinima":
        this.setState({
          theaterDetail: coordinateData.LotteCinima,
        });
        this.props.LayThongTinCumRapTheoHeThongRap("LotteCinima")
        break;
      case "CineStar":
        this.setState({
          theaterDetail: coordinateData.CineStar,
        });
        this.props.LayThongTinCumRapTheoHeThongRap("CineStar")
        break;
      case "MegaGS":
        this.setState({
          theaterDetail: coordinateData.MegaGS,
        });
        this.props.LayThongTinCumRapTheoHeThongRap("MegaGS")
        break;
      case "CGV":
      this.setState({
        theaterDetail: coordinateData.cgv,
      });
      this.props.LayThongTinCumRapTheoHeThongRap("CGV")
        break;
      default:
        break;
    }
    this.setState({
      indexClickButton:index
    })
  };
  renderButton=()=>{
    if(this.props.heThongRap.length >0){
      return this.props.heThongRap.map((item,index)=>{
        if(index===this.state.indexClickButton){
          return (
            <button key={index}
              className="mapButton active p-1"
              onClick={() => {
                this.handleLocateTheater(item.maHeThongRap,index);
              }}
            >
              <img src={item.logo} alt={item.biDanh} style={{borderRadius:"50%",width:"50px"}}/>
              {item.tenHeThongRap}
            </button>
          );
        }
        else{
          return (
            <button key={index}
            className="mapButton p-1"
              onClick={() => {
                this.handleLocateTheater(item.maHeThongRap,index);
              }}
            >
              <img src={item.logo} alt={item.biDanh} style={{borderRadius:"50%",width:"50px"}}/>
              {item.tenHeThongRap}
            </button>
          );
        }
        
      })
    }
    else{
      return (
        <div></div>
      )
    }
  }
  renderDatailTheater=()=>{
    if(this.props.thongTinCumRapTheoHeThongRap.length >0){
      return this.props.thongTinCumRapTheoHeThongRap.map((item,index)=>{
        return (
          <tr key={index} >
            <td>{index+1}</td>
            <td>{item.tenCumRap}</td>
            <td>{item.diaChi}</td>
          </tr>
        )
      })
    }
    else{
      return (
        <tr></tr>
      )
    }
  }
  componentDidMount() {
    this.getUserLocation();
    this.props.LayFullHeThongRap()
    this.props.LayThongTinCumRapTheoHeThongRap("BHDStar")
  }
  render() {
    return (
      <section className="map-container">
        <div className="row" >
          <div className="col-lg-6" style={{ height: "100%" }}>
            <div className="map">
              <LeafletMap
                center={this.state.centerLocation}
                zoom={this.state.zoom}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  minZoom="10"
                />
                {this.drawUserLocationCircle()}
                {this.drawTheaterLocation()}
              </LeafletMap>
            </div>
          </div>
          <div className="col-lg-6" style={{height:"100%"}}>
            <div className="theater-nearby" style={{height:"100%"}}>
              <div className="heThongRap" style={{height:"100%"}}>
                <div className="theater-nearby-title">Rạp phim trong khu vực TP.HCM</div>
                <div className="d-flex flex-column" style={{height:"100%"}}>
                  <div>
                    {this.renderButton()}
                  </div>
                  <div style={{overflowY:"scroll",height:"100%"}}>
                    <table className="table detail-table table-borderless">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Tên rạp</th>
                          <th>Địa chỉ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderDatailTheater()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    thongTinCumRapTheoHeThongRap:state.movieReducer.thongTinCumRapTheoHeThongRap,
    heThongRap:state.movieReducer.listOfTheaterSystem
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    LayThongTinCumRapTheoHeThongRap: (maRap) => {
      dispatch(action.actLayThongTinCumRapTheoHeThongRap(maRap));
    },
    LayFullHeThongRap:()=>{
      dispatch(action.actLayThongTinHeThongRap())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Map);
