// Shared interfaces

export interface IPoints {
  x: number | null;
  y: number | null;
}

export interface IReqParams {
  centerX: number | null;
  centerY: number | null;
  polySize: number;
}

export interface IBikeRes {
  realtimeList?: IBike[] | null;
  loginYn: string;
  stationVO: StationVO;
  sessionId: string;
  stationImgPath: string;
  checkResult: boolean;
}
export interface IBike {
  stationId: string;
  usrSeq?: null;
  stationImgFileName: string;
  stationName: string;
  lang: string;
  pageYn: string;
  rackTotCnt: string | number;
  bikeTotCnt?: null | number;
  locateNo?: null;
  rackRate?: null;
  parkingRackTotCnt?: null | number;
  parkingBikeTotCnt: string | number;
  shared: string;
  stationLatitude: string;
  stationLongitude: string;
  parkingRack?: null;
  parkingBike?: null;
  criticalFlg?: null;
  closeFlg?: null;
  systemWarning?: null;
  currnetStatus?: null;
  stationAddr?: null;
  stationGrpSeq?: null;
  stationPostNo?: null;
  stationClsCd?: null;
  stationClsName?: null;
  brokenApFlg?: null;
  brokenBikeFlg?: null;
  brokenArmFlg?: null;
  stationUseYn: string;
  rackUsableCnt?: number | null;
  bkmkSeq?: null;
  stationUseCnt?: number | null;
  recordCountPerPage: number;
  pageSize: number;
  currentPageNo: number;
  totalRecordCount: number;
  firstRecordIndex: number;
  searchValue?: null;
  searchParameter?: null;
  searchDate?: null;
  searchStartDate?: null;
  searchEndDate?: null;
  mode?: null;
}
export interface StationVO {
  stationId?: null;
  usrSeq?: null;
  stationImgFileName?: null;
  stationName?: null;
  lang: string;
  pageYn: string;
  rackTotCnt?: null;
  bikeTotCnt?: null;
  locateNo?: null;
  rackRate?: null;
  parkingRackTotCnt?: null;
  parkingBikeTotCnt?: null;
  shared?: null;
  stationLatitude?: null;
  stationLongitude?: null;
  parkingRack?: null;
  parkingBike?: null;
  criticalFlg?: null;
  closeFlg?: null;
  systemWarning?: null;
  currnetStatus?: null;
  stationAddr?: null;
  stationGrpSeq: string;
  stationPostNo?: null;
  stationClsCd?: null;
  stationClsName?: null;
  brokenApFlg?: null;
  brokenBikeFlg?: null;
  brokenArmFlg?: null;
  stationUseYn?: null;
  rackUsableCnt?: null;
  bkmkSeq?: null;
  stationUseCnt?: null;
  recordCountPerPage: number;
  pageSize: number;
  currentPageNo: number;
  totalRecordCount: number;
  firstRecordIndex: number;
  searchValue?: null;
  searchParameter?: null;
  searchDate?: null;
  searchStartDate?: null;
  searchEndDate?: null;
  mode?: null;
}
