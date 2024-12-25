import { z } from "zod";

const exportCustomsDeclarationSchema = z.object({
  shipmentId: z.string().uuid(),
  type: z.literal("CUSTOM_EXPORT"),
  docNumber: z.string(),
  fields: z.object({
    chiCucHaiQuanDangKy: z.string(),
    chiCucHaiQuanCuaKhauXuat: z.string(),
    soThamChieu: z.string().optional(),
    ngayGioGui: z.string(),
    soToKhai: z.string(),
    ngayGioDangKy: z.string(),
    soLuongPhuLuc: z.string(),
    congChucDangKy: z.string(),
    nguoiXuatKhau: z.string(),
    mstXuatKhau: z.string(),
    nguoiNhapKhau: z.string(),
    nguoiUyThac: z.string(),
    mstUyThac: z.string(),
    daiLyHaiQuan: z.string(),
    mstDaiLy: z.string(),
    loaiHinh: z.string(),
    giayPhepSo: z.string(),
    giayPhepNgay: z.string(),
    giayPhepHetHan: z.string(),
    hopDong: z.string().uuid(),
    hopDongNgay: z.string(),
    hopDongHetHan: z.string(),
    hoaDonThuongMai: z.string(),
    cuaKhauXuatHang: z.string(),
    nuocNhapKhau: z.string(),
    dieuKienGiaoHang: z.string(),
    phuongThucThanhToan: z.string(),
    dongTienThanhToan: z.string(),
    tyGiaTinhThue: z.string(),
    tongSoTienThueVaThuKhacBangChu: z.string(),
    productRows: z.array(
      z.object({
        id: z.number(),
        moTa: z.string(),
        maSo: z.string(),
        xuatXu: z.string(),
        luongHang: z.string(),
        donVi: z.string(),
        donGia: z.string(),
        triGia: z.string(),
      }),
    ),
    containerRows: z.array(
      z.object({
        id: z.number(),
        soHieu: z.string(),
        soLuongKien: z.string(),
        trongLuong: z.string(),
        diaDiemDongHang: z.string(),
      }),
    ),
    thueAndThu: z.array(
      z.object({
        id: z.number(),
        triGiaTinhThue: z.string(),
        thueXuat: z.string(),
        tienThue: z.string(),
        triGiaThuKhac: z.string(),
        tyLe: z.string(),
        soTien: z.string(),
      }),
    ),
  }),
});

export default exportCustomsDeclarationSchema;
export type exportCustomsDeclarationData = z.infer<
  typeof exportCustomsDeclarationSchema
>;
