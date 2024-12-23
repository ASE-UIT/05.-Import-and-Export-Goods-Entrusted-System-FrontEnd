"use client"

import Barcode from "@/components/ui/barcode";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const border = " border-r-[1px] border-b-[1px]";
  const borderB = " border-b-[1px]";
  const borderLT = " border-l-[1px] border-t-[1px]";
  const borderR = " border-r-[1px]";

  const [shipmentId, setShipmentId] = useState("");
  const [ngayGioGui, setNgayGioGui] = useState(new Date().toISOString().split("T")[0]);
  const [ngayGioDangKy, setNgayGioDangKy] = useState(new Date().toISOString().split("T")[0]);
  const [giayPhepNgay, setGiayPhepNgay] = useState(new Date().toISOString().split("T")[0]);
  const [giayPhepHetHan, setGiayPhepHetHan] = useState(new Date().toISOString().split("T")[0]);
  const [hopDongNgay, setHopDongNgay] = useState(new Date().toISOString().split("T")[0]);
  const [hopDongHetHan, setHopDongHetHan] = useState(new Date().toISOString().split("T")[0]);
  const [ngayDen, setNgayDen] = useState(new Date().toISOString().split("T")[0]);
  const [loading, setLoading] = useState(false);

  const [contractId, setContractId] = useState("");

  const [productRows, setProductRows] = useState([
    {
      id: 1,
      moTa: "",
      maSo: "",
      xuatXu: "",
      luongHang: "",
      donVi: "",
      donGia: "",
      triGia: "",
    },
  ]);

  const [thueAndThu, setThueAndThu] = useState([
    {
      id: 1,
      triGiaTinhThue: "",
      thueXuat: "",
      tienThue: "",
      triGiaThuKhac: "",
      tyLe: "",
      soTien: "",
    },
  ]);

  const [containerRows, setContainerRows] = useState([
    {
      id: 1,
      soHieu: "",
      soLuongKien: "",
      trongLuong: "",
      diaDiemDongHang: "",
    },
  ]);

  const [formState, setFormState] = useState({
    // Header section
    chiCucHaiQuanDangKy: "",
    chiCucHaiQuanCuaKhauXuat: "",
    soThamChieu: "",
    ngayGioGui: new Date().toISOString().split("T")[0],
    soToKhai: "",
    ngayGioDangKy: new Date().toISOString().split("T")[0],
    soLuongPhuLuc: "",
    congChucDangKy: "",

    // Section 1-4
    nguoiXuatKhau: "",
    mstXuatKhau: "",
    nguoiNhapKhau: "",
    nguoiUyThac: "",
    mstUyThac: "",
    daiLyHaiQuan: "",
    mstDaiLy: "",

    // Section 5-14
    loaiHinh: "",
    giayPhepSo: "",
    giayPhepNgay: new Date().toISOString().split("T")[0],
    giayPhepHetHan: new Date().toISOString().split("T")[0],
    hopDong: "",
    hopDongNgay: "",
    hopDongHetHan: "",
    hoaDonThuongMai: "",
    cuaKhauXuatHang: "",
    nuocNhapKhau: "",
    dieuKienGiaoHang: "",
    phuongThucThanhToan: "",
    dongTienThanhToan: "",
    tyGiaTinhThue: "",


    //section 24
    tongSoTienThueVaThuKhacBangChu: ""

  })

  const addProductsRow = () => {
    setProductRows([
      ...productRows,
      {
        id: productRows.length + 1,
        moTa: "",
        maSo: "",
        xuatXu: "",
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
        diaDiemDongHang: "",
      },
    ]);
  };

  const addThueAndThuRow = () => {
    setThueAndThu([
      ...thueAndThu,
      {
        id: thueAndThu.length + 1,
        triGiaTinhThue: "",
        thueXuat: "",
        tienThue: "",
        triGiaThuKhac: "",
        tyLe: "",
        soTien: "",
      },
    ]);
  };

  const handleInputChange = (id: number, field: string, value: string) => {
    const updatedRows = productRows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row,
    );
    setProductRows(updatedRows);
  };

  const handleInputChangeContainer = (id: number, field: string, value: string) => {
    const updatedRows = containerRows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row,
    );
    setContainerRows(updatedRows);
  };

  const handleInputChangeThueAndThu = (id: number, field: string, value: string) => {
    const updatedRows = thueAndThu.map((row) =>
      row.id === id ? { ...row, [field]: value } : row,
    );
    setThueAndThu(updatedRows);
  };

  const handleFormInputChange = (field: string, value: string) => {
    setFormState({
      ...formState,
      [field]: value
    })
  }

  const handleSubmit = async () => {
    const formSubmit = {
      shipmentId,
      type: "CUSTOM_EXPORT" as const,
      docNumber: Number(formState.soToKhai),
      fields:{
        ... formState, productRows, containerRows, thueAndThu
      }
    }
    console.log(formSubmit);
  }

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
                Tờ Khai Hàng Hóa Xuất Khẩu
              </div>
              <Barcode></Barcode>
            </div>
            <div className="w-full text-[20px] font-bold">Cục Hải Quan</div>
            <div className="flex w-full justify-end">HQ/2024/NK</div>
            <div className="flex w-full flex-col border-[1px]">
              <div className="flex w-full ">
                <div className={"flex-1" + border}>
                  <div>
                    <p className="font-bold">Chi cục Hải quan đăng ký tờ khai:</p>
                    <input
                      onChange={(e) =>
                        handleFormInputChange("chiCucHaiQuanDangKy", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal w-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Chi cục Hải quan cửa khẩu xuất:</p>
                    <input
                      onChange={(e) =>
                        handleFormInputChange("chiCucHaiQuanCuaKhauXuat", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal  w-full"
                    />
                  </div>
                </div>
                
                <div className={"flex-[0.75]" + border}>
                  <div className="font-bold">Số tờ khai:
                    <input
                      onChange={(e) =>
                        handleFormInputChange("soToKhai", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal w-full"
                    />
                  </div>
                  <div className="font-bold flex flex-col">Ngày, giờ đăng ký:
                  <input
                      type="date"
                      value={ ngayGioDangKy}
                      onChange={(e) =>
                      {
                        setNgayGioDangKy(e.target.value)
                        handleFormInputChange("ngayGioDangKy", e.target.value)
                      }
                      }
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                  <div className="font-bold">Số lượng phụ lục tờ khai:
                    <input
                      onChange={(e) =>
                        handleFormInputChange("soLuongPhuLuc", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal w-full"
                    />
                  </div>
                </div>
                <div className={"flex-[0.75] text-red-500" + borderB}>
                  <div className="font-bold">Công chức đăng ký tờ khai
                    <input
                      onChange={(e) =>
                        handleFormInputChange("congChucDangKy", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal w-full"
                    />
                  </div>
                </div>
              </div>
              <div className={"flex w-full"}>
                <div className={"flex flex-1 flex-col" + borderR}>
                <div className={"flex flex-1 flex-col" + borderB}>
                    <div className="flex flex-col">
                      1. Người xuất khẩu:
                      <input
                        onChange={(e) =>
                          handleFormInputChange("nguoiXuatKhau", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"flex h-6 w-32" + borderLT}>
                        <input
                          onChange={(e) =>
                            handleFormInputChange("mstXuatKhau", e.target.value)
                          }
                          placeholder="   -"
                          className="w-full font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className={"flex-1" + borderB}>
                    <div>2. Người nhập khẩu:
                      <input
                        onChange={(e) =>
                          handleFormInputChange("nguoiNhapKhau", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal w-full"
                      />
                    </div>
                  </div>
                  <div className={"flex flex-1 flex-col" + borderB}>
                    <div className="flex flex-col">
                      3. Người uỷ thác/người được ủy quyền:
                      <input
                        onChange={(e) =>
                          handleFormInputChange("nguoiUyThac", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"flex h-6 w-32" + borderLT}>
                        <input
                          onChange={(e) =>
                            handleFormInputChange("mstUyThac", e.target.value)
                          }
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
                        onChange={(e) =>
                          handleFormInputChange("daiLyHaiQuan", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"flex h-6 w-32" + borderLT}>
                        <input
                          onChange={(e) =>
                            handleFormInputChange("mstDaiLy", e.target.value)
                          }
                          placeholder="   -"
                          className="w-full font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[2.25] flex-col">
                  <div className={borderB}>
                    <div>5. Loại hình:
                      <input
                        onChange={(e) =>
                          handleFormInputChange("loaiHinh", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal w-full"
                      />
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[0.5]" + borderR}>
                      <div>6. Giấy phép số:
                        <input
                          onChange={(e) =>
                            handleFormInputChange("giayPhepSo", e.target.value)
                          }
                          placeholder="   -"
                          className="font-normal w-full"
                        />
                      </div>
                      <div>Ngày
                        <input
                          type="date"
                          value={ giayPhepNgay}
                          onChange={(e) =>
                          {
                            setGiayPhepNgay(e.target.value)
                            handleFormInputChange("giayPhepNgay", e.target.value)
                          }
                          }
                          placeholder="   -"
                          className="ml-2 font-normal"
                        ></input>
                      </div>
                      <div>Ngày hết hạn
                        <input
                          type="date"
                          value={ giayPhepHetHan}
                          onChange={(e) =>
                          {
                            setGiayPhepHetHan(e.target.value)
                            handleFormInputChange("giayPhepHetHan", e.target.value)
                          }
                          }
                          placeholder="   -"
                          className="ml-2 font-normal"
                        ></input>
                      </div>
                    </div>
                    <div className="flex-[0.5]">
                      <div>7. Hợp đồng:
                        <input
                          onChange={(e) =>
                            handleFormInputChange("hopDong", e.target.value)
                          }
                          value={contractId}
                          placeholder="   -"
                          className="font-normal w-full"
                        />
                      </div>
                      <div>Ngày
                        <input
                          type="date"
                          value={ hopDongNgay}
                          onChange={(e) =>
                          {
                            setHopDongNgay(e.target.value)
                            handleFormInputChange("hopDongNgay", e.target.value)
                          }
                          }
                          placeholder="   -"
                          className="ml-2 font-normal"
                        ></input>
                      </div>
                      <div>Ngày hết hạn
                        <input
                          type="date"
                          value={ hopDongHetHan}
                          onChange={(e) =>
                          {
                            setHopDongHetHan(e.target.value)
                            handleFormInputChange("hopDongHetHan", e.target.value)
                          }
                          }
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
                        onChange={(e) =>
                          handleFormInputChange("hoaDonThuongMai", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex-[0.5] text-red-500">
                      9. Cửa khẩu xuất hàng:
                      <input
                        onChange={(e) =>
                          handleFormInputChange("cuaKhauXuatHang", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                        ></input>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className="flex-[1] flex">10. Nước nhập khẩu:
                      <input
                        onChange={(e) =>
                          handleFormInputChange("nuocNhapKhau", e.target.value)
                        }
                        placeholder="   -"
                        className="ml-2 font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[1]" + borderR}>
                      11. Điều kiện giao hàng:
                      <input
                        onChange={(e) =>
                          handleFormInputChange("dieuKienGiaoHang", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex-[1]">12. Phương thức thanh toán:
                      <input
                        onChange={(e) =>
                          handleFormInputChange("phuongThucThanhToan", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className="flex">
                    <div className={"flex-[1]" + borderR}>
                      13. Đồng tiền thanh toán:
                      <input
                        onChange={(e) =>
                          handleFormInputChange("dongTienThanhToan", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex-[1] flex-col flex">14. Tỷ giá tính thuế:
                      <input
                        onChange={(e) =>
                          handleFormInputChange("tyGiaTinhThue", e.target.value)
                        }
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
                  {thueAndThu.map((row) => (
                    <tr key={row.id}>
                      <td className="border-b-[1px] border-t-0">{row.id}</td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.triGiaTinhThue}
                          onChange={(e) =>
                            handleInputChangeThueAndThu(row.id, "triGiaTinhThue", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.thueXuat}
                          onChange={(e) =>
                            handleInputChangeThueAndThu(row.id, "thueXuat", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.tienThue}
                          onChange={(e) =>
                            handleInputChangeThueAndThu(row.id, "tienThue", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.triGiaThuKhac}
                          onChange={(e) =>
                            handleInputChangeThueAndThu(row.id, "triGiaThuKhac", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.tyLe}
                          onChange={(e) =>
                            handleInputChangeThueAndThu(row.id, "tyLe", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.soTien}
                          onChange={(e) =>
                            handleInputChangeThueAndThu(row.id, "soTien", e.target.value)
                          }
                        />
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td colSpan={7} className="border-b-[1px] border-t-0">
                      <button
                        onClick={addThueAndThuRow}
                        className="h-full w-full rounded bg-transparent px-4 py-2 text-sm font-bold"
                      >
                        +
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t-[1px]"></td>
                    <td
                      className="border-[1px] border-b-0 border-t-0 text-end font-bold"
                      colSpan={2}
                    >
                      Cộng:
                    </td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td
                      className="border-[1px] border-b-0 border-t-0 text-end font-bold"
                      colSpan={2}
                    >
                      Cộng:
                    </td>

                    <td className="border-t-[1px]"></td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td className="border-t-[1px]">
                      <div>
                        24. Tổng số tiền thuế và thu khác (ô 22+23) bằng số:
                      </div>
                      <div>Bằng chữ:</div>
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
                  {containerRows.map((row) => (
                    <tr key={row.id}>
                      <td className="border-b-[1px] border-t-0">{row.id}</td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.soHieu}
                          onChange={(e) =>
                            handleInputChangeContainer(row.id, "soHieu", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.soLuongKien}
                          onChange={(e) =>
                            handleInputChangeContainer(row.id, "soLuongKien", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="number"
                          className="w-full border-none p-1 outline-none"
                          value={row.trongLuong}
                          onChange={(e) =>
                            handleInputChangeContainer(row.id, "trongLuong", e.target.value)
                          }
                        />
                      </td>
                      <td className="border-[1px] border-t-0">
                        <input
                          type="text"
                          className="w-full border-none p-1 outline-none"
                          value={row.diaDiemDongHang}
                          onChange={(e) =>
                            handleInputChangeContainer(row.id, "diaDiemDongHang", e.target.value)
                          }
                        />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0 font-bold">
                      Cộng:
                    </td>
                    <td className="flex items-end justify-start"></td>
                  </tr>
                  <tr className="border-t-[1px]">
                    <td colSpan={5} className="border-b-[1px] border-t-0">
                      <button
                        onClick={addContainerRow}
                        className="h-full w-full rounded bg-transparent px-4 py-2 text-sm font-bold"
                      >
                        +
                      </button>
                    </td>
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
        <div className="flex justify-center">
          <Button 
          onClick={handleSubmit}>
            Submit Document
          </Button>
        </div>
      </div>
    </>
  );
}
