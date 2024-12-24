export type ProductRow = {
  id: number;
  moTa: string;
  maSo: string;
  xuatXu: string;
  luongHang: string;
  donVi: string;
  donGia: string;
  triGia: string;
};

export type ContainerRow = {
  id: number;
  soHieu: string;
  soLuongKien: string;
  trongLuong: string;
  diaDiemDongHang: string;
};

export type ThueAndThu = {
  id: number;
  triGiaTinhThue: string;
  thueXuat: string;
  tienThue: string;
  triGiaThuKhac: string;
  tyLe: string;
  soTien: string;
};

export type ExportCustomsDeclaration = {
  id: string;
  shipmentId: string;
  userId: string;
  type: string;
  docNumber: number;
  fields: {
    chiCucHaiQuanDangKy: string;
    chiCucHaiQuanCuaKhauXuat: string;
    soThamChieu: string;
    ngayGioGui: string;
    soToKhai: string;
    ngayGioDangKy: string;
    soLuongPhuLuc: string;
    congChucDangKy: string;
    nguoiXuatKhau: string;
    mstXuatKhau: string;
    nguoiNhapKhau: string;
    nguoiUyThac: string;
    mstUyThac: string;
    daiLyHaiQuan: string;
    mstDaiLy: string;
    loaiHinh: string;
    giayPhepSo: string;
    giayPhepNgay: string;
    giayPhepHetHan: string;
    hopDong: string;
    hopDongNgay: string;
    hopDongHetHan: string;
    hoaDonThuongMai: string;
    cuaKhauXuatHang: string;
    nuocNhapKhau: string;
    dieuKienGiaoHang: string;
    phuongThucThanhToan: string;
    dongTienThanhToan: string;
    tyGiaTinhThue: string;
    tongSoTienThueVaThuKhacBangChu: string;
    productRows: ProductRow[];
    containerRows: ContainerRow[];
    thueAndThu: ThueAndThu[];
  };
  schema: Record<string, unknown>;
  updatedAt: string;
  createdAt: string;
};
