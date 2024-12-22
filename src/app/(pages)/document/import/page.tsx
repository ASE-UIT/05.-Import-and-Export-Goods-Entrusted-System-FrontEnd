"use client";

import Barcode from "@/components/ui/barcode";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useShipmentTracking from "@/hooks/use-shipment-tracking";
import { useState } from "react";

export default function Page() {
  const border = " border-r-[1px] border-b-[1px]";
  const borderB = " border-b-[1px]";
  const borderLT = " border-l-[1px] border-t-[1px]";
  const borderR = " border-r-[1px]";

  const { useGetShipment } = useShipmentTracking;

  const { data: shipmentData } = useGetShipment();

  const [shipmentId, setShipmentId] = useState("");

  const [productRows, setProductRows] = useState([
    {
      id: 1,
      moTa: "",
      maSo: "",
      xuatXu: "",
      uuDai: "",
      luongHang: "",
      donVi: "",
      donGia: "",
      triGia: "",
    },
  ]);

  const [containerRows, setContainerRows] = useState([
    {
      id: 1,
      soHieu: "",
      soLuongKien: "",
      trongLuong: "",
    },
  ]);

  const [formState, setFormState] = useState({
    // Header section
    chiCucHaiQuanDangKy: "",
    chiCucHaiQuanCuaKhauNhap: "",
    soThamChieu: "",
    ngayGioGui: "",
    soToKhai: "",
    ngayGioDangKy: "",
    soLuongPhuLuc: "",
    congChucDangKy: "",

    // Section 1-4
    nguoiXuatKhau: "",
    nguoiNhapKhau: "",
    mstNhapKhau: "",
    nguoiUyThac: "",
    mstUyThac: "",
    daiLyHaiQuan: "",
    mstDaiLy: "",

    // Section 5-17
    loaiHinh: "",
    hoaDonThuongMai: "",
    giayPhepSo: "",
    giayPhepNgay: "",
    giayPhepHetHan: "",
    hopDong: "",
    hopDongNgay: "",
    hopDongHetHan: "",
    vanDon: "",
    cangXepHang: "",
    cangDoHang: "",
    phuongTienVanTai: "",
    tenSoHieu: "",
    ngayDen: "",
    nuocXuatKhau: "",
    dieuKienGiaoHang: "",
    phuongThucThanhToan: "",
    dongTienThanhToan: "",
    tyGiaTinhThue: "",
  });

  const addProductsRow = () => {
    setProductRows([
      ...productRows,
      {
        id: productRows.length + 1,
        moTa: "",
        maSo: "",
        xuatXu: "",
        uuDai: "",
        luongHang: "",
        donVi: "",
        donGia: "",
        triGia: "",
      },
    ]);
  };

  const addContainerRow = () => {
    setContainerRows([
      ...containerRows,
      {
        id: containerRows.length + 1,
        soHieu: "",
        soLuongKien: "",
        trongLuong: "",
      },
    ]);
  };

  const handleInputChange = (id: number, field: string, value: string) => {
    const updatedRows = productRows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row,
    );
    setProductRows(updatedRows);
  };

  const handleContainerChange = (id: number, field: string, value: string) => {
    const updatedRows = containerRows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row,
    );
    setContainerRows(updatedRows);
  };

  const updateSingleField = (fieldName: any, value: any) => {
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    console.log({ ...formState, productRows, containerRows, shipmentId });
  };

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
                  <div className="flex">
                    Chi cục Hải quan đăng ký tờ khai:
                    <input
                      onChange={(e) =>
                        updateSingleField("chiCucHaiQuanDangKy", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal"
                    />
                  </div>
                  <div className="flex">
                    Chi cục Hải quan cửa khẩu nhập:
                    <input
                      onChange={(e) =>
                        updateSingleField(
                          "chiCucHaiQuanCuaKhauNhap",
                          e.target.value,
                        )
                      }
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                </div>
                <div className={"flex-[0.75]" + border}>
                  <div className="flex">
                    Số tham chiếu:
                    <input
                      onChange={(e) =>
                        updateSingleField("soThamChieu", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                  <div className="flex">
                    Ngày, giờ gửi:
                    <input
                      type="date"
                      value={new Date().toISOString().split("T")[0]}
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                </div>
                <div className={"flex-[0.75]" + border}>
                  <div className="flex">
                    Số tờ khai:
                    <input
                      onChange={(e) =>
                        updateSingleField("soToKhai", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                  <div className="flex">
                    Ngày, giờ đăng ký:
                    <input
                      type="date"
                      value={new Date().toISOString().split("T")[0]}
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                  <div className="flex">
                    Số lượng phụ lục tờ khai:
                    <input
                      onChange={(e) =>
                        updateSingleField("soLuongPhuLuc", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                </div>
                <div className={"flex-[0.75]" + borderB}>
                  <div className="flex">
                    Công chức đăng ký tờ khai
                    <input
                      onChange={(e) =>
                        updateSingleField("congChucDangKy", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="mt-1 flex w-full items-center border-b-[1px] pb-1">
                ShipmentID:
                <Select
                  value={shipmentId}
                  onValueChange={(value) => setShipmentId(value)}
                >
                  <SelectTrigger className="ml-2 w-[180px]">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {shipmentData?.results &&
                        shipmentData.results.map((shipment) => (
                          <SelectItem
                            value={shipment.id}
                            key={shipment.contractId}
                          >
                            {shipment.contractId}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className={"flex w-full"}>
                <div className={"flex flex-1 flex-col" + borderR}>
                  <div className={"flex-1" + borderB}>
                    <div className="flex">
                      1. Người xuất khẩu:
                      <input
                        onChange={(e) =>
                          updateSingleField("nguoiXuatKhau", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex flex-1 flex-col" + borderB}>
                    <div className="flex">
                      2. Người nhập khẩu:
                      <input
                        onChange={(e) =>
                          updateSingleField("nguoiNhapKhau", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"flex h-6 w-20" + borderLT}>
                        <input
                          onChange={(e) =>
                            updateSingleField("mstNhapKhau", e.target.value)
                          }
                          placeholder="   -"
                          className="w-16 font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className={"flex flex-1 flex-col" + borderB}>
                    <div className="flex">
                      3. Người uỷ thác/người được ủy quyền:
                      <input
                        onChange={(e) =>
                          updateSingleField("nguoiUyThac", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"flex h-6 w-20" + borderLT}>
                        <input
                          onChange={(e) =>
                            updateSingleField("mstUyThac", e.target.value)
                          }
                          placeholder="   -"
                          className="w-16 font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex">
                      4. Đại lý Hải quan:
                      <input
                        onChange={(e) =>
                          updateSingleField("daiLyHaiQuan", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"flex h-6 w-20" + borderLT}>
                        <input
                          onChange={(e) =>
                            updateSingleField("mstDaiLy", e.target.value)
                          }
                          placeholder="   -"
                          className="w-16 font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[2.25] flex-col">
                  <div className={borderB}>
                    <div className="flex">
                      5. Loại hình:
                      <input
                        onChange={(e) =>
                          updateSingleField("loaiHinh", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex flex-[0.75]" + borderR}>
                      6. Hóa đơn thương mại:
                      <input
                        onChange={(e) =>
                          updateSingleField("hoaDonThuongMai", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className={"flex-[0.9]" + borderR}>
                      <div className="flex">
                        7. Giấy phép số:
                        <input
                          onChange={(e) =>
                            updateSingleField("giayPhepSo", e.target.value)
                          }
                          placeholder="   -"
                          className="font-normal"
                        ></input>
                      </div>
                      <div className="flex">
                        Ngày
                        <input
                          type="date"
                          value={new Date().toISOString().split("T")[0]}
                          placeholder="   -"
                          className="font-normal"
                        ></input>
                      </div>
                      <div className="flex">
                        Ngày hết hạn
                        <input
                          type="date"
                          value={new Date().toISOString().split("T")[0]}
                          placeholder="   -"
                          className="font-normal"
                        ></input>
                      </div>
                    </div>
                    <div className="flex-[0.5]">
                      <div className="flex">
                        8. Hợp đồng:
                        <input
                          onChange={(e) =>
                            updateSingleField("hopDong", e.target.value)
                          }
                          placeholder="   -"
                          className="w-20 font-normal"
                        ></input>
                      </div>
                      <div className="flex">
                        Ngày
                        <input
                          type="date"
                          value={new Date().toISOString().split("T")[0]}
                          placeholder="   -"
                          className="w-20 font-normal"
                        ></input>
                      </div>
                      <div className="flex">
                        Ngày hết hạn
                        <input
                          type="date"
                          value={new Date().toISOString().split("T")[0]}
                          placeholder="  -"
                          className="w-20 font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex flex-[0.75]" + borderR}>
                      9. Vận đơn (số/ngày):
                      <input
                        onChange={(e) =>
                          updateSingleField("vanDon", e.target.value)
                        }
                        placeholder="  -"
                        className="w-20 font-normal"
                      ></input>
                    </div>
                    <div className={"flex flex-[0.9]" + borderR}>
                      10. Cảng xếp hàng:
                      <input
                        onChange={(e) =>
                          updateSingleField("cangXepHang", e.target.value)
                        }
                        placeholder="  -"
                        className="w-20 font-normal"
                      ></input>
                    </div>
                    <div className="flex flex-[0.5]">
                      11. Cảng dỡ hàng:
                      <input
                        onChange={(e) =>
                          updateSingleField("cangDoHang", e.target.value)
                        }
                        placeholder="  -"
                        className="w-20 font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[1.65]" + borderR}>
                      <div className="flex">
                        12. Phương tiện vận tải:
                        <input
                          onChange={(e) =>
                            updateSingleField(
                              "phuongTienVanTai",
                              e.target.value,
                            )
                          }
                          placeholder="  -"
                          className="font-normal"
                        ></input>
                      </div>
                      <div className="flex">
                        Tên, số hiệu:
                        <input
                          onChange={(e) =>
                            updateSingleField("tenSoHieu", e.target.value)
                          }
                          placeholder="  -"
                          className="font-normal"
                        ></input>
                      </div>
                      <div className="flex">
                        Ngày đến
                        <input
                          type="date"
                          value={new Date().toISOString().split("T")[0]}
                          placeholder="  -"
                          className="font-normal"
                        ></input>
                      </div>
                    </div>
                    <div className="flex flex-[0.5]">
                      13. Nước xuất khẩu:
                      <input
                        onChange={(e) =>
                          updateSingleField("nuocXuatKhau", e.target.value)
                        }
                        placeholder="  -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex flex-[1]" + borderR}>
                      14. Điều kiện giao hàng:
                      <input
                        onChange={(e) =>
                          updateSingleField("dieuKienGiaoHang", e.target.value)
                        }
                        placeholder="  -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex flex-[1]">
                      15. Phương thức thanh toán:
                      <input
                        onChange={(e) =>
                          updateSingleField(
                            "phuongThucThanhToan",
                            e.target.value,
                          )
                        }
                        placeholder="  -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className="flex">
                    <div className={"flex flex-[1]" + borderR}>
                      16. Đồng tiền thanh toán:
                      <input
                        onChange={(e) =>
                          updateSingleField("dongTienThanhToan", e.target.value)
                        }
                        placeholder="  -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex flex-[1]">
                      17. Tỷ giá tính thuế:
                      <input
                        onChange={(e) =>
                          updateSingleField("tyGiaTinhThue", e.target.value)
                        }
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
                  {productRows.map((row) => (
                    <tr key={row.id}>
                      <td className="border-b-[1px] border-t-[1px]">
                        {row.id}
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.moTa}
                          onChange={(e) =>
                            handleInputChange(row.id, "moTa", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.maSo}
                          onChange={(e) =>
                            handleInputChange(row.id, "maSo", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.xuatXu}
                          onChange={(e) =>
                            handleInputChange(row.id, "xuatXu", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.uuDai}
                          onChange={(e) =>
                            handleInputChange(row.id, "uuDai", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.luongHang}
                          onChange={(e) =>
                            handleInputChange(
                              row.id,
                              "luongHang",
                              e.target.value,
                            )
                          }
                        />
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.donVi}
                          onChange={(e) =>
                            handleInputChange(row.id, "donVi", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.donGia}
                          onChange={(e) =>
                            handleInputChange(row.id, "donGia", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-b-[1px] border-t-[1px]">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.triGia}
                          onChange={(e) =>
                            handleInputChange(row.id, "triGia", e.target.value)
                          }
                        />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={9} className="border-b-[1px] border-t-[1px]">
                      <button
                        onClick={addProductsRow}
                        className="h-full w-full rounded bg-transparent px-4 py-2 text-sm font-bold"
                      >
                        +
                      </button>
                    </td>
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
                  {containerRows.map((row) => (
                    <tr key={row.id}>
                      <td className="border-b-[1px] border-t-[1px]">
                        {row.id}
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.soHieu}
                          onChange={(e) =>
                            handleContainerChange(
                              row.id,
                              "soHieu",
                              e.target.value,
                            )
                          }
                        />
                      </td>
                      <td className="border-[1px]">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.soLuongKien}
                          onChange={(e) =>
                            handleContainerChange(
                              row.id,
                              "soLuongKien",
                              e.target.value,
                            )
                          }
                        />
                      </td>
                      <td className="border-[1px] border-r-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.trongLuong}
                          onChange={(e) =>
                            handleContainerChange(
                              row.id,
                              "trongLuong",
                              e.target.value,
                            )
                          }
                        />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={4} className="border-b-[1px] border-t-[1px]">
                      <button
                        onClick={addContainerRow}
                        className="h-full w-full rounded bg-transparent px-4 py-2 text-sm font-bold"
                      >
                        +
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="flex items-end justify-start font-bold">
                      Cộng: <span className="ml-1 font-normal"></span>
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
          <button
            onClick={handleSubmit}
            className="h-[50px] w-[200px] rounded-lg bg-blue-500 text-white"
          >
            Submit Document
          </button>
        </div>
      </div>
    </>
  );
}
