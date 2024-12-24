"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useDocument from "@/hooks/use-document";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DocumentDetails() {
  const router = useRouter();
  const { id: documentId } = useParams<{ id: string }>();

  const { data: documentData } = useDocument.useGetForwarderProviderListById(documentId);

  const handleBack = () => {
    router.push("/document/contract/forwarder-provider");
  };

  if (!documentData) {
    return <div className="text-center mt-8">Document not found.</div>;
  }

  const fields = documentData?.data?.[0]?.fields;

  return (
    <div className="relative w-full max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg border border-gray-200">
      
      <div className="mb-6">
        <Button
          onClick={handleBack}
          className="text-white px-5 py-2 rounded-md shadow transition-all"
        >
          Back
        </Button>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Document Details
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {fields && (
          <>
            <strong className="text-gray-600">Doc Number</strong>
            <p className="text-lg text-gray-900 font-medium">{documentData?.data?.[0].docNumber}</p>
          </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Hôm nay, </p>
          <p className="text-lg font-normal">{fields.date}. </p>
          <p className="text-lg font-normal"> Tại, </p>
          <p className="text-lg font-normal"> {fields.place}</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">Chúng tôi gồm có</p>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-bold">Bên chủ hàng (bên A): </p>
          <p className="text-lg font-normal">{fields.nameA}. </p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Địa chỉ: </p>
          <p className="text-lg font-normal">{fields.addressA}</p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Điện thoại: </p>
          <p className="text-lg font-normal">{fields.phoneA} </p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Fax: </p>
          <p className="text-lg font-normal">{fields.faxA} </p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Mã số thuế: </p>
          <p className="text-lg font-normal">{fields.taxA} </p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Tài khoản số: </p>
          <p className="text-lg font-normal">{fields.numberA} </p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Do ông (bà) đại diện: </p>
          <p className="text-lg font-normal">{fields.representA} </p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Chức vụ: </p>
          <p className="text-lg font-normal">{fields.positionA} </p>
        </>
        )}
      </div>
      {/* Party B */}
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-bold">Bên vận chuyển (bên B): </p>
          <p className="text-lg font-normal">{fields.nameB}. </p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Địa chỉ: </p>
          <p className="text-lg font-normal">{fields.addressB}</p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Điện thoại: </p>
          <p className="text-lg font-normal">{fields.phoneB} </p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Fax: </p>
          <p className="text-lg font-normal">{fields.faxB} </p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Mã số thuế: </p>
          <p className="text-lg font-normal">{fields.taxB} </p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Tài khoản số: </p>
          <p className="text-lg font-normal">{fields.numberB} </p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Do ông (bà) đại diện: </p>
          <p className="text-lg font-normal">{fields.representB} </p>
        </>
        )}
      </div>
      <div className="flex flex-end">
        {fields && (
          <>
          <p className="text-lg font-normal">Chức vụ: </p>
          <p className="text-lg font-normal">{fields.positionB} </p>
        </>
        )}
      </div>
      <h1 className="text-lg"> Hai bên cùng thỏa thuận ký hợp đồng với những nội dung sau:</h1>
      <h2 className="font-bold text-lg">ĐIỀU 1: HÀNG HÓA VẬN CHUYỂN</h2>
      <h1 className="text-lg"> 1.1. Tên hàng: Bên A thuê bên B vận tải những hàng hóa sau:</h1>
      <h1 className="text-lg">  1.2. Tính chất hàng hóa:</h1>
      <h1 className="text-lg">  Bên B cần lưu ý bảo đảm cho bên A những loại hàng sau được an toàn:</h1>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">a)</p>
          <p className="text-lg font-normal">{fields.fresh} </p>
          <p className="text-lg font-normal">(1) hàng cần giữ tươi sống</p>
          <p className="text-lg font-normal">{fields.freshNum} </p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">b)</p>
          <p className="text-lg font-normal">{fields.fade} </p>
          <p className="text-lg font-normal">hàng cần bảo quản không để biến chất:</p>
          <p className="text-lg font-normal">{fields.fadeNum} </p>
          <p className="text-lg font-normal">(2)</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">c)</p>
          <p className="text-lg font-normal">{fields.keep} </p>
          <p className="text-lg font-normal">hàng nguy hiểm cần che đậy hoặc để riêng:</p>
          <p className="text-lg font-normal">{fields.keepNum} </p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">d)</p>
          <p className="text-lg font-normal">{fields.fragile} </p>
          <p className="text-lg font-normal">hàng dễ vỡ: </p>
          <p className="text-lg font-normal">{fields.fragileNum} </p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">e)</p>
          <p className="text-lg font-normal">{fields.cattle} </p>
          <p className="text-lg font-normal">súc vật cần giữ sống bình thường: </p>
          <p className="text-lg font-normal">{fields.cattleNum} </p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">1.3. Đơn vị tính đơn giá cước: </p>
          <p className="text-lg font-normal">{fields.freight} </p>
          <p className="text-lg font-normal">(3)</p>
        </>
        )}
      </div>
      <h2 className="font-bold text-lg">ĐIỀU 2: ĐỊA ĐIỂM NHẬN HÀNG VÀ GIAO HÀNG</h2>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">2.1. Bên B đưa phương tiện đến nhận hàng tại (kho hàng) </p>
          <p className="text-lg font-normal">{fields.warehouse} </p>
          <p className="text-lg font-normal"> (4) do bên A giao.</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">2.2. Bên B giao hàng cho bên A tại địa điểm </p>
          <p className="text-lg font-normal">{fields.location} </p>
          <p className="text-lg font-normal"> (5).</p>
        </>
        )}
      </div>

      <h2 className="font-bold text-lg">ĐIỀU 3: ĐỊCH LỊCH THỜI GIAN GIAO NHẬN HÀNG</h2>
      <table className="w-full border-collapse table-auto border border-gray-300 rounded-md mb-8">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 p-2" rowSpan={2}>STT</th>
                  <th className="border border-gray-400 p-2" rowSpan={2}>Tên hàng</th>
                  <th className="border border-gray-400 p-2" colSpan={3}>Nhận hàng</th>
                  <th className="border border-gray-400 p-2" colSpan={3}>Giao hàng</th>
                  <th className="border border-gray-400 p-2" rowSpan={2}>Ghi chú</th>
                </tr>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 p-2">Số lượng</th>
                  <th className="border border-gray-400 p-2">Địa điểm</th>
                  <th className="border border-gray-400 p-2">Thời gian</th>
                  <th className="border border-gray-400 p-2">Số lượng</th>
                  <th className="border border-gray-400 p-2">Địa điểm</th>
                  <th className="border border-gray-400 p-2">Thời gian</th>
                </tr>
              </thead>
        <tbody>
          {fields?.rows.map((row: any, index: number) => (
            <tr
              key={index}
              className={`transition hover:bg-gray-50 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="border p-4 text-sm text-gray-800">{row.index}</td>
              <td className="border p-4 text-sm text-gray-800">{row.productName}</td>
              <td className="border p-4 text-sm text-gray-800">{row.qtyA}</td>
              <td className="border p-4 text-sm text-gray-800">{row.locationA}</td>
              <td className="border p-4 text-sm text-gray-800">{row.timeA}</td>
              <td className="border p-4 text-sm text-gray-800">{row.qtyB}</td>
              <td className="border p-4 text-sm text-gray-800">{row.locationB}</td>
              <td className="border p-4 text-sm text-gray-800">{row.timeB}</td>
              <td className="border p-4 text-sm text-gray-800">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="font-bold text-lg">ĐIỀU 4: PHƯƠNG TIỆN VẬN TẢI</h2>
      <h2 className="font-bold text-lg">ĐIỀU 5: GIẤY TỜ CHO VIỆC VẬN CHUYỂN HÀNG HÓA</h2>
      <h2 className="font-bold text-lg">ĐIỀU 6: PHƯƠNG THỨC GIAO NHẬN HÀNG HÓA</h2>
      <h2 className="font-bold text-lg">ĐIỀU 7: TRÁCH NHIỆM XẾP DỠ HÀNG HÓA</h2>
      <h2 className="font-bold text-lg">ĐIỀU 8: GIẢI QUYẾT HAO HỤT HÀNG HÓA</h2>
      <h2 className="font-bold text-lg">ĐIỀU 9: NGƯỜI ÁP TẢI HÀNG HÓA (Nếu có)</h2>
      <h2 className="font-bold text-lg">ĐIỀU 10: THANH TOÁN PHÍ VẬN TẢI (6)</h2>
      <h2 className="font-bold text-lg">ĐIỀU 11: QUYỀN VÀ NGHĨA VỤ CỦA CÁC BÊN</h2>
      <h2 className="font-bold text-lg">ĐIỀU 12: ĐĂNG KÝ BẢO HIỂM</h2>
      <h2 className="font-bold text-lg">ĐIỀU 13: BIỆN PHÁP BẢO ĐẢM THỰC HIỆN HỢP ĐỒNG (Nếu có)</h2>
      <h2 className="font-bold text-lg">ĐIỀU 14: TRÁCH NHIỆM DO VI PHẠM HỢP ĐỒNG</h2>
      <h2 className="font-bold text-lg">ĐIỀU 15: GIẢI QUYẾT TRANH CHẤP HỢP ĐỒNG</h2>
      <h2 className="font-bold text-lg">ĐIỀU 16: HIỆU LỰC CỦA HỢP ĐỒNG</h2>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">Hợp đồng này có hiệu lực từ ngày </p>
          <p className="text-lg font-normal">{fields.fromDate} </p>
          <p className="text-lg font-normal"> đến ngày</p>
          <p className="text-lg font-normal">{fields.toDate} </p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">Chữ ký bên A</p>
          <p className="text-lg font-normal">{fields.signatureA} </p>
          <p className="text-lg font-normal"> Chữ ký bên B</p>
          <p className="text-lg font-normal">{fields.signatureB} </p>
        </>
        )}
      </div>
    </div>
  );
}
