export type ProductRow = {
    id: number;
    moTa: string;
    maSo: string;
    xuatXu: string;
    uuDai: string;
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
};

export type ImportCustomsDeclaration = {
    id: string;
    type: string;
    docNumber: number;
    userId: string;
    fields: {
        chiCucHaiQuanDangKy: string;
        chiCucHaiQuanCuaKhauNhap: string;
        soThamChieu: string;
        ngayGioGui: string;
        soToKhai: string;
        ngayGioDangKy: string;
        soLuongPhuLuc: string;
        congChucDangKy: string;
        nguoiXuatKhau: string;
        nguoiNhapKhau: string;
        mstNhapKhau: string;
        nguoiUyThac: string;
        mstUyThac: string;
        daiLyHaiQuan: string;
        mstDaiLy: string;
        loaiHinh: string;
        hoaDonThuongMai: string;
        giayPhepSo: string;
        giayPhepNgay: string;
        giayPhepHetHan: string;
        hopDong: string;
        hopDongNgay: string;
        hopDongHetHan: string;
        vanDon: string;
        cangXepHang: string;
        cangDoHang: string;
        phuongTienVanTai: string;
        tenSoHieu: string;
        ngayDen: string;
        nuocXuatKhau: string;
        dieuKienGiaoHang: string;
        phuongThucThanhToan: string;
        dongTienThanhToan: string;
        tyGiaTinhThue: string;
        productRows: ProductRow[];
        containerRows: ContainerRow[];
    };
    schema: Record<string, unknown>;
    shipmentId: string;
    createdAt: string;
    updatedAt: string;
};