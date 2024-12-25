"use client";

import Barcode from "@/components/ui/barcode";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useContract from "@/hooks/use-contract";
import useImportCusDec from "@/hooks/use-import-cus-dec";
import useShipmentTracking from "@/hooks/use-shipment-tracking";
import { toast } from "@/hooks/use-toast";
import { ErrorType } from "@/types/error.type";
import { Shipment } from "@/types/shipment.type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const border = " border-r-[1px] border-b-[1px]";
  const borderB = " border-b-[1px]";
  const borderLT = " border-l-[1px] border-t-[1px]";
  const borderR = " border-r-[1px]";

  const { useGetShipment } = useShipmentTracking;

  const { data: shipmentData } = useGetShipment();
  const { data: documents } = useImportCusDec.useGetImportCusDec(
    undefined,
    undefined,
    "CUSTOM_IMPORT",
  );
  const create = useImportCusDec.useCreateImportCusDec();
  const { data: contracts } = useContract.useGetContracts();
  const [shipmentNotDocument, setShipmentNotDocument] = useState<Shipment[]>();

  useEffect(() => {
    if (shipmentData && documents) {
      const shipmentIds = shipmentData.results.map((shipment) => shipment.id);
      const documentShipmentIds = Array.isArray(documents?.data)
        ? documents.data.map((document) => document.shipmentId)
        : [];
      const shipmentNotDocument = shipmentIds.filter(
        (shipmentId) => !documentShipmentIds.includes(shipmentId),
      );
      setShipmentNotDocument(
        shipmentData.results.filter((shipment) =>
          shipmentNotDocument.includes(shipment.id),
        ),
      );
    }
  }, [shipmentData, documents]);

  const [shipmentId, setShipmentId] = useState("");
  const [ngayGioGui, setNgayGioGui] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [ngayGioDangKy, setNgayGioDangKy] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [giayPhepNgay, setGiayPhepNgay] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [giayPhepHetHan, setGiayPhepHetHan] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [hopDongNgay, setHopDongNgay] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [hopDongHetHan, setHopDongHetHan] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [ngayDen, setNgayDen] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [loading, setLoading] = useState(false);

  const [contractId, setContractId] = useState("");

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
    ngayGioGui: new Date().toISOString().split("T")[0],
    soToKhai: "",
    ngayGioDangKy: new Date().toISOString().split("T")[0],
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
    giayPhepNgay: new Date().toISOString().split("T")[0],
    giayPhepHetHan: new Date().toISOString().split("T")[0],
    hopDong: "",
    hopDongNgay: new Date().toISOString().split("T")[0],
    hopDongHetHan: new Date().toISOString().split("T")[0],
    vanDon: "",
    cangXepHang: "",
    cangDoHang: "",
    phuongTienVanTai: "",
    tenSoHieu: "",
    ngayDen: new Date().toISOString().split("T")[0],
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

  const router = useRouter();

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

  useEffect(() => {
    updateSingleField("hopDong", contractId);
  }, [contractId]);

  useEffect(() => {
    updateSingleField("hopDongNgay", hopDongNgay);
  }, [hopDongNgay]);

  useEffect(() => {
    updateSingleField("hopDongHetHan", hopDongHetHan);
  }, [hopDongHetHan]);

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);
    const formSubmit = {
      shipmentId,
      type: "CUSTOM_IMPORT" as const,
      docNumber: formState.soToKhai,
      fields: { ...formState, productRows, containerRows },
    };
    await create.mutateAsync(formSubmit, {
      onSuccess: () => {
        toast({
          title: "Success",
          description: "Create import customs declaration successfully",
        });
        router.push("/document/customs-declaration");
      },
    });
    setLoading(false);
  };

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
                    <input
                      onChange={(e) =>
                        updateSingleField("chiCucHaiQuanDangKy", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal"
                    />
                  </div>
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
                    Số tham chiếu:
                    <input
                      onChange={(e) =>
                        updateSingleField("soThamChieu", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    Ngày, giờ gửi:
                    <input
                      type="date"
                      value={ngayGioGui}
                      onChange={(e) => {
                        setNgayGioGui(e.target.value);
                        updateSingleField("ngayGioGui", e.target.value);
                      }}
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                </div>
                <div className={"flex-[0.75]" + border}>
                  <div className="flex flex-col">
                    Số tờ khai:
                    <input
                      onChange={(e) =>
                        updateSingleField("soToKhai", e.target.value)
                      }
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    Ngày, giờ đăng ký:
                    <input
                      type="date"
                      value={ngayGioDangKy}
                      onChange={(e) => {
                        setNgayGioDangKy(e.target.value);
                        updateSingleField("ngayGioDangKy", e.target.value);
                      }}
                      placeholder="   -"
                      className="font-normal"
                    ></input>
                  </div>
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  onValueChange={(value) => {
                    setShipmentId(value);
                    const contractId =
                      shipmentNotDocument?.find(
                        (shipment) => shipment.id === value,
                      )?.contractId || "";
                    setContractId(contractId);
                    const contract = contracts?.data?.find(
                      (contract) => contract.id === contractId,
                    );
                    setHopDongNgay(
                      contract?.contractDate
                        ? new Date(contract.contractDate)
                            .toISOString()
                            .split("T")[0]
                        : "",
                    );
                    setHopDongHetHan(
                      contract?.endDate
                        ? new Date(contract.endDate).toISOString().split("T")[0]
                        : "",
                    );
                  }}
                >
                  <SelectTrigger className="ml-2 w-[300px]">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {shipmentNotDocument?.length === 0 ? (
                        <SelectItem disabled value="no-shipment">
                          No shipment available
                        </SelectItem>
                      ) : (
                        shipmentNotDocument?.map((shipment) => (
                          <SelectItem value={shipment.id} key={shipment.id}>
                            {shipment.id}
                          </SelectItem>
                        ))
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className={"flex w-full"}>
                <div className={"flex flex-1 flex-col" + borderR}>
                  <div className={"flex-1" + borderB}>
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                      <div className={"flex h-6 w-32" + borderLT}>
                        <input
                          onChange={(e) =>
                            updateSingleField("mstNhapKhau", e.target.value)
                          }
                          placeholder="   -"
                          className="w-full font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className={"flex flex-1 flex-col" + borderB}>
                    <div className="flex flex-col">
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
                      <div className={"flex h-6 w-32" + borderLT}>
                        <input
                          onChange={(e) =>
                            updateSingleField("mstUyThac", e.target.value)
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
                          updateSingleField("daiLyHaiQuan", e.target.value)
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
                            updateSingleField("mstDaiLy", e.target.value)
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
                    <div className={"flex flex-[0.5] flex-col" + borderR}>
                      6. Hóa đơn thương mại:
                      <input
                        onChange={(e) =>
                          updateSingleField("hoaDonThuongMai", e.target.value)
                        }
                        placeholder="   -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className={"flex-[0.5]" + borderR}>
                      <div className="flex flex-col">
                        7. Giấy phép số:
                        <input
                          onChange={(e) =>
                            updateSingleField("giayPhepSo", e.target.value)
                          }
                          placeholder="   -"
                          className="font-normal"
                        ></input>
                      </div>
                      <div className="flex flex-col">
                        Ngày
                        <input
                          type="date"
                          value={giayPhepNgay}
                          onChange={(e) => {
                            setGiayPhepNgay(e.target.value);
                            updateSingleField("giayPhepNgay", e.target.value);
                          }}
                          placeholder="   -"
                          className="w-32 font-normal"
                        ></input>
                      </div>
                      <div className="flex flex-col">
                        Ngày hết hạn
                        <input
                          type="date"
                          value={giayPhepHetHan}
                          onChange={(e) => {
                            setGiayPhepHetHan(e.target.value);
                            updateSingleField("giayPhepHetHan", e.target.value);
                          }}
                          placeholder="   -"
                          className="w-32 font-normal"
                        ></input>
                      </div>
                    </div>
                    <div className="flex-[0.5]">
                      <div className="flex flex-col">
                        8. Hợp đồng:
                        <input
                          onChange={(e) =>
                            updateSingleField("hopDong", e.target.value)
                          }
                          readOnly
                          value={contractId}
                          placeholder="   -"
                          className="h-[24px] w-full text-[13px] font-normal"
                        ></input>
                      </div>
                      <div className="flex flex-col">
                        Ngày
                        <input
                          type="date"
                          value={hopDongNgay}
                          readOnly
                          onChange={(e) => {
                            setHopDongNgay(e.target.value);
                            updateSingleField("hopDongNgay", e.target.value);
                          }}
                          placeholder="   -"
                          className="w-32 font-normal"
                        ></input>
                      </div>
                      <div className="flex flex-col">
                        Ngày hết hạn
                        <input
                          type="date"
                          value={hopDongHetHan}
                          readOnly
                          onChange={(e) => {
                            setHopDongHetHan(e.target.value);
                            updateSingleField("hopDongHetHan", e.target.value);
                          }}
                          placeholder="  -"
                          className="w-32 font-normal"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex flex-[0.5] flex-col" + borderR}>
                      9. Vận đơn (số/ngày):
                      <input
                        onChange={(e) =>
                          updateSingleField("vanDon", e.target.value)
                        }
                        placeholder="  -"
                        className="w-full font-normal"
                      ></input>
                    </div>
                    <div className={"flex flex-[0.5] flex-col" + borderR}>
                      10. Cảng xếp hàng:
                      <input
                        onChange={(e) =>
                          updateSingleField("cangXepHang", e.target.value)
                        }
                        placeholder="  -"
                        className="w-full font-normal"
                      ></input>
                    </div>
                    <div className="flex flex-[0.5] flex-col">
                      11. Cảng dỡ hàng:
                      <input
                        onChange={(e) =>
                          updateSingleField("cangDoHang", e.target.value)
                        }
                        placeholder="  -"
                        className="w-full font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[1.65]" + borderR}>
                      <div className="flex gap-2">
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
                      <div className="flex gap-2">
                        Tên, số hiệu:
                        <input
                          onChange={(e) =>
                            updateSingleField("tenSoHieu", e.target.value)
                          }
                          placeholder="  -"
                          className="font-normal"
                        ></input>
                      </div>
                      <div className="flex gap-2">
                        Ngày đến
                        <input
                          type="date"
                          value={ngayDen}
                          onChange={(e) => {
                            setNgayDen(e.target.value);
                            updateSingleField("ngayDen", e.target.value);
                          }}
                          placeholder="  -"
                          className="font-normal"
                        ></input>
                      </div>
                    </div>
                    <div className="flex flex-[0.5] flex-col">
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
                    <div className={"flex flex-[1] flex-col" + borderR}>
                      14. Điều kiện giao hàng:
                      <input
                        onChange={(e) =>
                          updateSingleField("dieuKienGiaoHang", e.target.value)
                        }
                        placeholder="  -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex flex-[1] flex-col">
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
                    <div className={"flex flex-[1] flex-col" + borderR}>
                      16. Đồng tiền thanh toán:
                      <input
                        onChange={(e) =>
                          updateSingleField("dongTienThanhToan", e.target.value)
                        }
                        placeholder="  -"
                        className="font-normal"
                      ></input>
                    </div>
                    <div className="flex flex-[1] flex-col">
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
                      Cộng:{" "}
                      {containerRows.reduce(
                        (acc, row) => acc + (Number(row.trongLuong) || 0),
                        0,
                      )}{" "}
                      <span className="ml-1 font-normal"></span>
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
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </div>
    </>
  );
}
