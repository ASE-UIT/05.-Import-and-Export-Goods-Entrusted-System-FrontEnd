"use client";

import Barcode from "@/components/ui/barcode";
import { Button } from "@/components/ui/button";
import useExportCusDec from "@/hooks/use-export-cus-dec";

import { ExportCustomsDeclaration } from "@/types/document/export-customs-declaration.type";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const border = " border-r-[1px] border-b-[1px]";
  const borderB = " border-b-[1px]";
  const borderLT = " border-l-[1px] border-t-[1px]";
  const borderR = " border-r-[1px]";
  const router = useRouter();
  const [document, setDocument] = useState<ExportCustomsDeclaration>();
  const { data, isLoading, error } = useExportCusDec.useGetDetail(id);
  useEffect(() => {
    if (data && data.data && Array.isArray(data.data)) {
      setDocument(data.data[0]);
    }
  }, [data]);

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <div
        className={
          "font-t flex w-[calc(100vw-var(--sidebar-width))] flex-col p-[24px]"
        }
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">Customs Declaration</span>
            <Button
              onClick={() => router.push("/document/customs-declaration/")}
            >
              Back
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[20px]">
          <div className="mx-[150px] my-[20px] flex flex-col items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <div className="text-[24px] font-bold uppercase">
                Hải Quan Việt Nam
              </div>
              <div className="text-[24px] font-bold uppercase">
                Tờ Khai Hàng Hóa Xuất Khẩu
              </div>
              <Barcode></Barcode>
            </div>
            <div className="w-full text-[20px] font-bold">Cục Hải Quan</div>
            <div className="flex w-full justify-end">HQ/2024/NK</div>
            <div className="flex w-full flex-col border-[1px]">
              <div className="flex w-full">
                <div className={"flex-1" + border}>
                  <div>
                    <p className="font-bold">
                      Chi cục Hải quan đăng ký tờ khai:
                    </p>
                    <input
                      value={document?.fields?.chiCucHaiQuanDangKy}
                      readOnly
                      placeholder="   -"
                      className="w-full font-normal"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Chi cục Hải quan cửa khẩu xuất:</p>
                    <input
                      value={document?.fields?.chiCucHaiQuanCuaKhauXuat}
                      readOnly
                      placeholder="   -"
                      className="w-full font-normal"
                    />
                  </div>
                </div>
                <div className={"flex-[0.75]" + border}>
                  <div className="flex flex-col font-bold">
                    Số tham chiếu:
                    <input
                      value={document?.fields?.soThamChieu}
                      readOnly
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                  <div className="flex flex-col font-bold">
                    Ngày, giờ gửi:
                    <input
                      value={document?.fields?.ngayGioGui}
                      readOnly
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                </div>
                <div className={"flex-[0.75]" + border}>
                  <div className="font-bold">
                    Số tờ khai:
                    <input
                      value={document?.fields?.soToKhai}
                      readOnly
                      placeholder="   -"
                      className="w-full font-normal"
                    />
                  </div>
                  <div className="flex flex-col font-bold">
                    Ngày, giờ đăng ký:
                    <input
                      value={document?.fields?.ngayGioDangKy}
                      readOnly
                      placeholder="   -"
                      className="w-full font-normal"
                    />
                  </div>
                  <div className="font-bold">
                    Số lượng phụ lục tờ khai:
                    <input
                      value={document?.fields?.soLuongPhuLuc}
                      readOnly
                      placeholder="   -"
                      className="w-full font-normal"
                    />
                  </div>
                </div>
                <div className={"flex-[0.75] text-red-500" + borderB}>
                  <div className="font-bold">
                    Công chức đăng ký tờ khai
                    <input
                      value={document?.fields?.congChucDangKy}
                      readOnly
                      placeholder="   -"
                      className="w-full font-normal"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-1 flex w-full items-center border-b-[1px] pb-1">
                ShipmentID:
                <input
                  value={document?.shipmentId}
                  readOnly
                  placeholder="   -"
                  className="w-full font-normal"
                />
              </div>
              <div className={"flex w-full"}>
                <div className={"flex flex-1 flex-col" + borderR}>
                  <div className={"flex flex-1 flex-col" + borderB}>
                    <div className="flex flex-col">
                      1. Người xuất khẩu:
                      <input
                        value={document?.fields?.nguoiXuatKhau}
                        readOnly
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"flex h-6 w-32" + borderLT}>
                        <input
                          value={document?.fields?.mstXuatKhau}
                          readOnly
                          placeholder="   -"
                          className="w-full font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className={"flex-1" + borderB}>
                    <div>
                      2. Người nhập khẩu:
                      <input
                        value={document?.fields?.nguoiNhapKhau}
                        readOnly
                        placeholder="   -"
                        className="w-full font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex flex-1 flex-col" + borderB}>
                    <div className="flex flex-col">
                      3. Người uỷ thác/người được ủy quyền:
                      <input
                        value={document?.fields?.nguoiUyThac}
                        readOnly
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"flex h-6 w-32" + borderLT}>
                        <input
                          value={document?.fields?.mstUyThac}
                          readOnly
                          placeholder="   -"
                          className="w-full font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex flex-col">
                      4. Đại lý Hải quan:
                      <input
                        value={document?.fields?.daiLyHaiQuan}
                        readOnly
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"flex h-6 w-32" + borderLT}>
                        <input
                          value={document?.fields?.mstDaiLy}
                          readOnly
                          placeholder="   -"
                          className="w-full font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[2.25] flex-col">
                  <div className={borderB}>
                    <div>
                      5. Loại hình:
                      <input
                        value={document?.fields?.loaiHinh}
                        readOnly
                        placeholder="   -"
                        className="w-full font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[0.5]" + borderR}>
                      <div>
                        6. Giấy phép số:
                        <input
                          value={document?.fields?.giayPhepSo}
                          readOnly
                          placeholder="   -"
                          className="font-normal"
                        ></input>
                      </div>
                      <div>
                        Ngày
                        <input
                          value={document?.fields?.giayPhepNgay}
                          readOnly
                          placeholder="   -"
                          className="ml-2 font-normal"
                        ></input>
                      </div>
                      <div>
                        Ngày hết hạn
                        <input
                          value={document?.fields?.giayPhepHetHan}
                          readOnly
                          placeholder="   -"
                          className="ml-2 font-normal"
                        ></input>
                      </div>
                    </div>
                    <div className="flex-[0.5]">
                      <div>
                        7. Hợp đồng:
                        <input
                          value={document?.fields?.hopDong}
                          readOnly
                          placeholder="   -"
                          className="font-normal"
                        ></input>
                      </div>
                      <div>
                        Ngày
                        <input
                          value={document?.fields?.hopDongNgay}
                          readOnly
                          placeholder="   -"
                          className="ml-2 font-normal"
                        ></input>
                      </div>
                      <div>
                        Ngày hết hạn
                        <input
                          value={document?.fields?.hopDongHetHan}
                          readOnly
                          placeholder="   -"
                          className="ml-2 font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[0.5] text-red-500" + borderR}>
                      8. Hóa đơn thương mại:
                      <input
                        value={document?.fields?.hoaDonThuongMai}
                        readOnly
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex-[0.5] text-red-500">
                      9. Cửa khẩu xuất hàng:
                      <input
                        value={document?.fields?.cuaKhauXuatHang}
                        readOnly
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className="flex flex-[1]">
                      10. Nước nhập khẩu:
                      <input
                        value={document?.fields?.nuocNhapKhau}
                        readOnly
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[1]" + borderR}>
                      11. Điều kiện giao hàng:
                      <input
                        value={document?.fields?.dieuKienGiaoHang}
                        readOnly
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex-[1]">
                      12. Phương thức thanh toán:
                      <input
                        value={document?.fields?.phuongThucThanhToan}
                        readOnly
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className="flex">
                    <div className={"flex-[1]" + borderR}>
                      13. Đồng tiền thanh toán:
                      <input
                        value={document?.fields?.dongTienThanhToan}
                        readOnly
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex flex-[1] flex-col">
                      14. Tỷ giá tính thuế:
                      <input
                        value={document?.fields?.tyGiaTinhThue}
                        readOnly
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <table className="border-collapse">
                <thead>
                  <tr>
                    <td className="border-b-[1px] border-t-[1px]">Số TT</td>
                    <td className="border-[1px]">15. Mô tả hàng hóa</td>
                    <td className="border-[1px]">16.Mã số hàng hóa</td>
                    <td className="border-[1px]">17. Xuất xứ</td>
                    <td className="border-[1px]">18. Lượng hàng</td>
                    <td className="border-[1px]">19. Đơn vị tính</td>
                    <td className="border-[1px]">20. Đơn giá nguyên tệ</td>
                    <td className="border-b-[1px] border-r-0 border-t-[1px]">
                      21.Trị giá nguyên tệ
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {document?.fields?.productRows.map((row) => (
                    <tr key={row.id}>
                      <td className="border-b-[1px] border-t-[1px]">
                        {row.id}
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.moTa}
                          readOnly
                        />
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.maSo}
                          readOnly
                        />
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.xuatXu}
                          readOnly
                        />
                      </td>

                      <td className="border-[1px]">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.luongHang}
                          readOnly
                        />
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.donVi}
                          readOnly
                        />
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.donGia}
                          readOnly
                        />
                      </td>
                      <td className="border-b-[1px] border-t-[1px]">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.triGia}
                          readOnly
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table className="border-collapse">
                <thead>
                  <tr>
                    <td className="border-b-[1px]" rowSpan={2}>
                      Số TT
                    </td>
                    <td className="border-[1px] border-t-0" colSpan={3}>
                      22. Thuế Xuất Khẩu
                    </td>
                    <td
                      className="border-[1px] border-r-0 border-t-0"
                      colSpan={3}
                    >
                      23. Thu Khác
                    </td>
                  </tr>
                  <tr>
                    <td className="border-[1px] border-t-0">
                      a. Trị giá tính thuế
                    </td>
                    <td className="border-[1px] border-t-0">b. Thuế suất(%)</td>
                    <td className="border-[1px] border-t-0">c. Tiền thuế</td>
                    <td className="border-[1px] border-t-0">
                      a. Trị giá tính thu khác
                    </td>
                    <td className="border-[1px] border-t-0">b. Tỷ lệ(%)</td>
                    <td className="border-[1px] border-r-0 border-t-0">
                      c. Số tiền
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {document?.fields?.thueAndThu.map((row) => (
                    <tr key={row.id}>
                      <td className="border-b-[1px] border-t-0">{row.id}</td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.triGiaTinhThue}
                          readOnly
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.thueXuat}
                          readOnly
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.tienThue}
                          readOnly
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.triGiaThuKhac}
                          readOnly
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.tyLe}
                          readOnly
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.soTien}
                          readOnly
                        />
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td className="border-t-[1px]"></td>
                    <td
                      className="border-[1px] border-b-0 border-t-0 text-end font-bold"
                      colSpan={2}
                    >
                      Cộng:{" "}
                    </td>
                    <td className="border-[1px] border-b-0 border-t-0">
                      {document?.fields?.thueAndThu.reduce(
                        (acc, curr) => acc + Number(curr.tienThue),
                        0,
                      )}
                    </td>
                    <td
                      className="border-[1px] border-b-0 border-t-0 text-end font-bold"
                      colSpan={2}
                    >
                      Cộng:
                    </td>

                    <td className="border-t-[1px]">
                      {" "}
                      {document?.fields?.thueAndThu.reduce(
                        (acc, curr) => acc + Number(curr.soTien),
                        0,
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td className="border-t-[1px]">
                      <div className="flex items-center gap-2">
                        24. Tổng số tiền thuế và thu khác (ô 22+23) bằng số:
                        <p>
                          {document?.fields?.thueAndThu.reduce(
                            (acc, curr) =>
                              acc + Number(curr.soTien) + Number(curr.tienThue),
                            0,
                          )}
                        </p>
                      </div>
                      <div className="flex items-center">
                        Bằng chữ:
                        <input
                          value={
                            document?.fields?.tongSoTienThueVaThuKhacBangChu
                          }
                          readOnly
                          placeholder="   -"
                          className="ml-2 w-[90%] font-normal"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t-[1px] text-center">
                      <div>25. Lượng hàng, số hiệu container</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="border-collapse border-t-[1px]">
                <thead>
                  <tr>
                    <td className="border-b-[1px]">Số TT</td>
                    <td className="border-[1px] border-t-0">
                      a. Số hiệu container
                    </td>
                    <td className="border-[1px] border-t-0">
                      b. Số lượng kiện trong container
                    </td>
                    <td className="border-[1px] border-t-0">
                      c. Trọng lượng hàng trong container
                    </td>
                    <td className="border-[1px] border-r-0 border-t-0">
                      d. Địa điểm đóng hàng
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {document?.fields?.containerRows.map((row) => (
                    <tr key={row.id}>
                      <td className="border-b-[1px] border-t-0">{row.id}</td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.soHieu}
                          readOnly
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.soLuongKien}
                          readOnly
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.trongLuong}
                          readOnly
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.diaDiemDongHang}
                          readOnly
                        />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0 font-bold">
                      Cộng:{" "}
                      {document?.fields?.containerRows.reduce(
                        (acc, curr) => acc + Number(curr.trongLuong),
                        0,
                      )}
                    </td>
                    <td className="flex items-end justify-start"></td>
                  </tr>
                </tbody>
              </table>
              <table className="border-t-[1px]">
                <tbody>
                  <tr className="h-[200px]">
                    <td className="border-r-[1px] align-top">
                      26. Chứng từ đi kèm
                    </td>
                    <td className="flex flex-col items-center justify-center">
                      <div className="flex items-start justify-center">
                        27. Tôi xin cam đoan, chịu trách nhiệm
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
                          28. Kết quả phân luồng và hướng dẫn làm thủ tục hải
                          quan
                        </div>
                        <div>29. Ghi chép khác:</div>
                      </div>
                    </td>
                    <td className="border-r-[1px] align-top">
                      30. Xác nhận thông quan
                    </td>
                    <td className="align-top">
                      31. Xác nhận của hải quan giám sát
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
