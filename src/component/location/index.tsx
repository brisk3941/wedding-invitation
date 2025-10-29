import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 2호선 <b>문래역 5번출구</b> 나와서
            <br />
            → 전방직진 300M
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 간선(파랑): 641
            <br />
            - 지선(초록): 6211, 6625
            <br />
			- 마을버스 <b>영등포 05번</b> 이용
			<br /><br />
			* 셔틀 이용 시
            <br />
            - 2호선 문래역 4번출구 에이스하이테크시티 앞
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>JK아트컨벤션 또는 문래동 SK리더스뷰</b> 검색
            <br />
            - 주차 요금은 2시간 무료입니다. (주차등록 필수)
          </div>
          <div />
          <div className="content">
            <b>
              ※ JK아트컨벤션 TEL 02-2628-9100
			  <br />
			  서울 영등포구 문래로 164 SK리더뷰 4층 
			  <br />
			  (서울 영등포구 문래동3가 55-16)
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
