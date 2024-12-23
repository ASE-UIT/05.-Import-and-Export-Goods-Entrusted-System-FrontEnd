"use client";

import Barcode from "@/components/ui/barcode";
import useImportCusDec from "@/hooks/use-import-cus-dec";
import { ImportCustomsDeclaration } from "@/types/document/import-customs-declaration.type";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id} = useParams<{ id: string }>();
  const border = " border-r-[1px] border-b-[1px]";
  const borderB = " border-b-[1px]";
  const borderLT = " border-l-[1px] border-t-[1px]";
  const borderR = " border-r-[1px]";

  const [importDocument, setImportDocument] = useState<ImportCustomsDeclaration>();

  const {data: document} = useImportCusDec.useGetDetail(id);

  useEffect(() => {
    if (Array.isArray(document?.data) && document.data.length > 0) {
      setImportDocument(document.data[0]);
    }
  }, [document]);

  return (
    <>
      <div
        className={
          "font-t flex w-[calc(100vw-var(--sidebar-width))] flex-col p-[24px]"
        }
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        <div className="flex w-full flex-col gap-[20px]">
          <div className="mx-[150px] my-[20px] flex flex-col items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <div className="text-[24px] font-bold uppercase">
                Hải Quan Việt Nam
              </div>
              <div className="text-[24px] font-bold uppercase">
                Tờ Khai Hàng Hóa Nhập Khẩu
              </div>
              <Barcode></Barcode>
            </div>
            <div className="w-full text-[20px] font-bold">Cục Hải Quan</div>
            <div className="flex w-full justify-end">HQ/2024/NK</div>
            <div className="flex w-full flex-col border-[1px]">
              <div className="flex w-full font-bold">
                <div className={"flex-1" + border}>
                  <div className="flex flex-col">
                    Chi cục Hải quan đăng ký tờ khai:
                    <input readOnly 
                      value={importDocument?.fields?.chiCucHaiQuanDangKy}
                      placeholder="   -"
                      className="font-normal"
                    />
                  </div>
                  <div className="flex flex-col">
                    Chi cục Hải quan cửa khẩu nhập:
                    <input readOnly 
                      value={importDocument?.fields?.chiCucHaiQuanCuaKhauNhap}
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                </div>
                <div className={"flex-[0.75]" + border}>
                  <div className="flex flex-col">
                    Số tham chiếu:
                    <input readOnly 
                      value={importDocument?.fields?.soThamChieu}
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    Ngày, giờ gửi:
                    <input readOnly 
                      type="date"
                      value={importDocument?.fields?.ngayGioGui}
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                </div>
                <div className={"flex-[0.75]" + border}>
                  <div className="flex flex-col">
                    Số tờ khai:
                    <input readOnly 
                      value={importDocument?.fields?.soToKhai}
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    Ngày, giờ đăng ký:
                    <input readOnly 
                      type="date"
                      value={importDocument?.fields?.ngayGioDangKy}
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    Số lượng phụ lục tờ khai:
                    <input readOnly 
                      value={importDocument?.fields?.soLuongPhuLuc}
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                </div>
                <div className={"flex-[0.75]" + borderB}>
                  <div className="flex flex-col">
                    Công chức đăng ký tờ khai
                    <input readOnly 
                      value={importDocument?.fields?.congChucDangKy}
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="mt-1 flex w-full items-center border-b-[1px] pb-1">
                ShipmentID:
                <input readOnly 
                      value={importDocument?.shipmentId}
                      placeholder="   -"
                      className="font-normal"
                    ></input>
              </div>
              <div className={"flex w-full"}>
                <div className={"flex flex-1 flex-col" + borderR}>
                  <div className={"flex-1" + borderB}>
                    <div className="flex flex-col">
                      1. Người xuất khẩu:
                      <input readOnly 
                        value={importDocument?.fields?.nguoiXuatKhau}
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex flex-1 flex-col" + borderB}>
                    <div className="flex flex-col">
                      2. Người nhập khẩu:
                      <input readOnly 
                        value={importDocument?.fields?.nguoiNhapKhau}
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"flex h-6 w-32" + borderLT}>
                        <input readOnly 
                          value={importDocument?.fields?.mstNhapKhau}
                          placeholder="   -"
                          className="w-full font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className={"flex flex-1 flex-col" + borderB}>
                    <div className="flex flex-col">
                      3. Người uỷ thác/người được ủy quyền:
                      <input readOnly 
                        value={importDocument?.fields?.nguoiUyThac}
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"flex h-6 w-32" + borderLT}>
                        <input readOnly 
                          value={importDocument?.fields?.mstUyThac}
                          placeholder="   -"
                          className="w-full font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex flex-col">
                      4. Đại lý Hải quan:
                      <input readOnly 
                        value={importDocument?.fields?.daiLyHaiQuan}
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"flex h-6 w-32" + borderLT}>
                        <input readOnly 
                          value={importDocument?.fields?.mstDaiLy}
                          placeholder="   -"
                          className="w-full font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[2.25] flex-col">
                  <div className={borderB}>
                    <div className="flex">
                      5. Loại hình:
                      <input readOnly 
                        value={importDocument?.fields?.loaiHinh}
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex flex-col flex-[0.5]" + borderR}>
                      6. Hóa đơn thương mại:
                      <input readOnly 
                        value={importDocument?.fields?.hoaDonThuongMai}
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className={"flex-[0.5]" + borderR}>
                      <div className="flex flex-col">
                        7. Giấy phép số:
                        <input readOnly 
                          value={importDocument?.fields?.giayPhepSo}
                          placeholder="   -"
                          className="font-normal"
                        ></input>
                      </div>
                      <div className="flex flex-col">
                        Ngày
                        <input readOnly 
                          type="date"
                          value={importDocument?.fields?.giayPhepNgay}
                          placeholder="   -"
                          className="w-32 font-normal "
                        ></input>
                      </div>
                      <div className="flex flex-col">
                        Ngày hết hạn
                        <input readOnly 
                          type="date"
                          value={importDocument?.fields?.giayPhepHetHan}
                          placeholder="   -"
                          className="w-32 font-normal"
                        ></input>
                      </div>
                    </div>
                    <div className="flex-[0.5]">
                      <div className="flex flex-col">
                        8. Hợp đồng:
                        <input readOnly 
                          value={importDocument?.fields?.hopDong}
                          placeholder="   -"
                          className="w-full font-normal"
                        ></input>
                      </div>
                      <div className="flex flex-col">
                        Ngày
                        <input readOnly 
                          type="date"
                          value={importDocument?.fields?.hopDongNgay}
                          placeholder="   -"
                          className="w-32 font-normal"
                        ></input>
                      </div>
                      <div className="flex flex-col">
                        Ngày hết hạn
                        <input readOnly 
                          type="date"
                          value={importDocument?.fields?.hopDongHetHan}
                          placeholder="  -"
                          className="w-32 font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex flex-col flex-[0.5]" + borderR}>
                      9. Vận đơn (số/ngày):
                      <input readOnly 
                        value={importDocument?.fields?.vanDon}
                        placeholder="  -"
                        className="w-full font-normal"
                      ></input>
                    </div>
                    <div className={"flex flex-col flex-[0.5]" + borderR}>
                      10. Cảng xếp hàng:
                      <input readOnly 
                        value={importDocument?.fields?.cangXepHang}
                        placeholder="  -"
                        className="w-full font-normal"
                      ></input>
                    </div>
                    <div className="flex flex-col flex-[0.5]">
                      11. Cảng dỡ hàng:
                      <input readOnly 
                        value={importDocument?.fields?.cangDoHang}
                        placeholder="  -"
                        className="w-full font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[1.65]" + borderR}>
                      <div className="flex gap-2">
                        12. Phương tiện vận tải:
                        <input readOnly 
                          value={importDocument?.fields?.phuongTienVanTai}
                          placeholder="  -"
                          className="font-normal"
                        ></input>
                      </div>
                      <div className="flex gap-2">
                        Tên, số hiệu:
                        <input readOnly 
                          value={importDocument?.fields?.tenSoHieu}
                          placeholder="  -"
                          className="font-normal"
                        ></input>
                      </div>
                      <div className="flex gap-2">
                        Ngày đến
                        <input readOnly 
                          type="date"
                          value={importDocument?.fields?.ngayDen}
                          placeholder="  -"
                          className="font-normal"
                        ></input>
                      </div>
                    </div>
                    <div className="flex flex-col flex-[0.5]">
                      13. Nước xuất khẩu:
                      <input readOnly 
                        value={importDocument?.fields?.nuocXuatKhau}
                        placeholder="  -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex flex-col flex-[1]" + borderR}>
                      14. Điều kiện giao hàng:
                      <input readOnly 
                        value={importDocument?.fields?.dieuKienGiaoHang}
                        placeholder="  -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex flex-col flex-[1]">
                      15. Phương thức thanh toán:
                      <input readOnly 
                        value={importDocument?.fields?.phuongThucThanhToan}
                        placeholder="  -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className="flex">
                    <div className={"flex flex-col flex-[1]" + borderR}>
                      16. Đồng tiền thanh toán:
                      <input readOnly 
                        value={importDocument?.fields?.dongTienThanhToan}
                        placeholder="  -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex flex-col flex-[1]">
                      17. Tỷ giá tính thuế:
                      <input readOnly 
                        value={importDocument?.fields?.tyGiaTinhThue}
                        placeholder="  -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <table className="border-collapse">
                <thead>
                  <tr>
                    <th className="border-b-[1px] border-t-[1px]">Số TT</th>
                    <th className="border-[1px]">18. Mô tả hàng hóa</th>
                    <th className="border-[1px]">19.Mã số hàng hóa</th>
                    <th className="border-[1px]">20. Xuất xứ</th>
                    <th className="border-[1px]">21. Chế độ ưu đãi</th>
                    <th className="border-[1px]">22. Lượng hàng</th>
                    <th className="border-[1px]">23. Đơn vị tính</th>
                    <th className="border-[1px]">24. Đơn giá nguyên tệ</th>
                    <th className="border-b-[1px] border-t-[1px]">
                      25.Trị giá nguyên tệ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {importDocument?.fields.productRows.map((row) => (
                    <tr key={row.id}>
                      <td className="border-b-[1px] border-t-[1px]">
                        {row.id}
                      </td>
                      <td className="border-[1px]">
                        <input readOnly 
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.moTa}
                        />
                      </td>
                      <td className="border-[1px]">
                        <input readOnly 
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.maSo}
                          
                        />
                      </td>
                      <td className="border-[1px]">
                        <input readOnly 
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.xuatXu}
                         
                        />
                      </td>
                      <td className="border-[1px]">
                        <input readOnly 
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.uuDai}
                          
                        />
                      </td>
                      <td className="border-[1px]">
                        <input readOnly 
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.luongHang}
                          
                        />
                      </td>
                      <td className="border-[1px]">
                        <input readOnly 
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.donVi}
                          
                        />
                      </td>
                      <td className="border-[1px]">
                        <input readOnly 
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.donGia}
                         
                        />
                      </td>
                      <td className="border-b-[1px] border-t-[1px]">
                        <input readOnly 
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.triGia}
                          
                        />
                      </td>
                    </tr>
                  ))}
                  <tr>
                  
                  </tr>
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <td className="flex justify-center">
                      26. Lượng hàng, số hiệu container
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="border-collapse border-t-[1px]">
                <thead>
                  <tr>
                    <th>Số TT</th>
                    <th>a. Số hiệu container</th>
                    <th>b. Số lượng kiện trong container</th>
                    <th>c. Trọng lượng hàng trong container</th>
                  </tr>
                </thead>
                <tbody>
                  {importDocument?.fields.containerRows.map((row) => (
                    <tr key={row.id}>
                      <td className="border-b-[1px] border-t-[1px]">
                        {row.id}
                      </td>
                      <td className="border-[1px]">
                        <input readOnly 
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.soHieu}
                          
                        />
                      </td>
                      <td className="border-[1px]">
                        <input readOnly 
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.soLuongKien}
                          
                        />
                      </td>
                      <td className="border-[1px] border-r-0">
                        <input readOnly 
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.trongLuong}
                         
                        />
                      </td>
                    </tr>
                  ))}
                 
                  <tr>
                    <td></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="flex items-end justify-start font-bold">
                      Cộng: <span className="ml-1 font-normal"></span>
                      {importDocument?.fields.containerRows.reduce((acc, row) => acc + (Number(row.trongLuong) || 0), 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="border-t-[1px]">
                <tbody>
                  <tr className="h-[200px]">
                    <td className="border-r-[1px] align-top">
                      27. Chứng từ đi kèm
                    </td>
                    <td className="flex flex-col items-center justify-center">
                      <div className="flex items-start justify-center">
                        28. Tôi xin cam đoan, chịu trách nhiệm
                      </div>
                      <div className="flex items-start justify-center">
                        trước pháp luật về nội dung khai trên tờ khai
                      </div>
                      <div className="flex items-start justify-center">
                        {"Ngày    tháng     năm"}
                      </div>
                      <div className="flex items-start justify-center italic">
                        (Người khai ký, ghi rõ họ tên, đóng dấu)
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="border-t-[1px]">
                <tbody>
                  <tr className="h-[200px]">
                    <td className="border-r-[1px] align-top">
                      <div className="flex h-full flex-col gap-14">
                        <div>
                          29. Kết quả phân luồng và hướng dẫn làm thủ tục hải
                          quan
                        </div>
                        <div>30. Ghi chép khác:</div>
                      </div>
                    </td>
                    <td className="border-r-[1px] align-top">
                      31. Xác nhận của hải quan giám sát
                    </td>
                    <td className="border-r-[1px] align-top">
                      32. Xác nhận giải phóng hàng/ đưa hàng về bảo quản/chuyển
                      cửa khẩu
                    </td>
                    <td className="align-top">33. Xác nhận thông quan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center">

        </div>
      </div>
    </>
  );
}
