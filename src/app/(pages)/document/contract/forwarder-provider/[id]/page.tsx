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
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">4.1. Bên A yêu cầu bên B vận tải số hàng trên bằng phương tiện </p>
          <p className="text-lg font-normal">{fields.transport} </p>
        </>
        )}
      </div>
      <p className="text-lg font-normal"> Phải có những khả năng cần thiết như :</p>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Tốc độ phải đạt </p>
          <p className="text-lg font-normal">{fields.speed} </p>
          <p className="text-lg font-normal">km/h </p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Có mái che </p>
          <p className="text-lg font-normal">{fields.roof} </p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[10px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Số lượng phương tiện là: </p>
          <p className="text-lg font-normal">{fields.transportNum} </p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">4.2. Bên B chịu trách nhiệm về kỹ thuật cho phương tiện vận tải để bảo đảm vận tải trong </p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">thời gian là </p>
          <p className="text-lg font-normal">{fields.resTime} </p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">4.3. Bên B phải chuẩn bị đầy đủ giấy tờ cho phương tịên đi lại hợp lệ trên tuyến giao thông đó để vận tải số hàng hóa đã thỏa thuận như trên và chịu mọi hậu quả về giấy tờ pháp lý của phương tiện vận tải.</p>
      <p className="text-lg font-normal">4.4. Bên B phải làm vệ sinh phương tiện vận tải khi nhận hàng, chi phí vệ sinh phương tiện vận tải</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">sau khi giao hàng bên A phải chịu là</p>
          <p className="text-lg font-normal">{fields.resMoney} </p>
          <p className="text-lg font-normal">đồng (Bằng chữ: </p>
          <p className="text-lg font-normal">{fields.resMoneyLetter} </p>
          <p className="text-lg font-normal">)</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">4.5. Sau khi bên B đưa phương tiện đến nhận hàng mà bên A chưa có hàng để giao sau</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">4.5. Sau khi bên B đưa phương tiện đến nhận hàng mà bên A chưa có hàng để giao sau</p>
          <p className="text-lg font-normal">{fields.resTime} </p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">phút thì bên A phải chứng nhận cho bên B đem phương tiện về và phải trả giá cước của loại hàng thấp nhất về giá vận tải theo đoạn đường đã hợp đồng. Trong trường hợp không tìm thấy người</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">đại diện của bên A tại địa điểm giao hàng, bên B chờ sau</p>
          <p className="text-lg font-normal">{fields.waitTime} </p>
          <p className="text-lg font-normal">Phút, có quyền nhờ Ủy ban nhân dân</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">cơ sở xác nhận phương tiện có đến và cho phương tiện về và yêu cầu thanh toán chi phí như trên.</p>
      <p className="text-lg font-normal">4.6. Bên B có quyền từ chối không nhận hàng nếu bên A giao hàng không đúng loại hàng ghi trong vận đơn khi xét thấy phương tiện điều động không thích hợp với loại hàng đó, có quyền</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">yêu cầu bên A phải chịu phạt </p>
          <p className="text-lg font-normal">{fields.totalFee} </p>
          <p className="text-lg font-normal">% giá trị tổng cước phí.</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">4.7. Trường hợp bên B đưa phương tiện đến nhận hàng chậm so với lịch giao nhận phải chịu phạt </p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal"> hợp đồng là:</p>
          <p className="text-lg font-normal">{fields.delayTime} </p>
          <p className="text-lg font-normal"> đồng/ giờ.</p>
        </>
        )}
      </div>

      <h2 className="font-bold text-lg">ĐIỀU 5: GIẤY TỜ CHO VIỆC VẬN CHUYỂN HÀNG HÓA</h2>
      <p className="text-lg font-normal">5.1. Bên B phải làm giấy xác báo hàng hóa (phải được đại diện bên B ký, đóng dấu xác nhận) </p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">  trước</p>
          <p className="text-lg font-normal">{fields.beforeTime} </p>
          <p className="text-lg font-normal"> giờ so với thời điểm giao hàng.</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">Bên B phải xác báo lại cho bên A số lượng và trọng tải các phương tiện có thể điều động trong 24 giờ trước khi bên A giao hàng. Nếu bên A không xác báo xin phương tiện thì bên B không chịu trách nhiệm. </p>
      <p className="text-lg font-normal">5.2. Các giấy tờ khác nếu có.</p>

      <h2 className="font-bold text-lg">ĐIỀU 6: PHƯƠNG THỨC GIAO NHẬN HÀNG HÓA</h2>
      <p className="text-lg font-normal">6.1. Hai bên thỏa thuận nhận hàng theo phương thức sau:</p>
      <p className="text-lg font-normal">Lưu ý: Tùy theo từng loại hàng và tính chất phương tiện vận tải mà thỏa thuận giao nhận theo một trong các phương thức sau:</p>
      <ul className="mt-1 text-lg" style={{ lineHeight: "1.6" }}>
        <li>- Nguyên đai, nguyên kiện, nguyên bao.</li>
        <li>- Theo trọng lượng, thể tích.</li>
        <li>- Theo nguyên hầm hay container.</li>
        <li>- Theo ngấn nước của phương tiện vận tải thủy.</li>
      </ul>
      <p className="text-lg font-normal">6.2. Bên A đề nghị bên B giao hàng theo phương thức:</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">{fields.methodA} </p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">{fields.methodB} </p>
        </>
        )}
      </div>

      <h2 className="font-bold text-lg">ĐIỀU 7: TRÁCH NHIỆM XẾP DỠ HÀNG HÓA</h2>
      <p className="text-lg font-normal">7.1. Bên B (A) có trách nhiệm xếp dỡ hàng hóa.</p>
      <p className="text-lg font-normal">Chú ý:</p>
      <ul className="mt-1 text-lg" style={{ lineHeight: "1.6" }}>
        <li>- Tại địa điểm có thể tổ chức xếp dỡ chuyên trách thì chi phí xếp dỡ do bên A chịu.</li>
        <li>- Trong trường hợp bên A phụ trách xếp dỡ (không thuê chuyên trách) thì bên vận tải có trách nhiệm hướng dẫn về kỹ thuật xếp dỡ.</li>
      </ul>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">7.2. Thời gian xếp dỡ giải phóng phương tiện là </p>
          <p className="text-lg font-normal">{fields.freeTime} </p>
          <p className="text-lg font-normal"> giờ.</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">Lưu ý : Nếu cần xếp dỡ vào ban đêm, vào ngày lễ và ngày chủ nhật bên A phải báo trước cho bên</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">B</p>
          <p className="text-lg font-normal">{fields.nightFee} </p>
          <p className="text-lg font-normal"> giờ, phải trả chi phí cao hơn giờ hành chính là</p>
          <p className="text-lg font-normal">{fields.holidayFee} </p>
          <p className="text-lg font-normal"> đồng/giờ (tấn).</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">7.3. Mức thưởng phạt</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Nếu xếp dỡ xong trước thời gian quy định và an toàn thì sẽ thưởng là</p>
          <p className="text-lg font-normal">{fields.rewardFee} </p>
          <p className="text-lg font-normal"> đồng/giờ.</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Xếp dỡ chậm bị phạt là: </p>
          <p className="text-lg font-normal">{fields.fineFee} </p>
          <p className="text-lg font-normal"> đồng/giờ.</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">- Xếp dỡ hư hỏng hàng hóa phải bồi thường theo giá trị thị trường tự do tại địa điểm bốc xếp.</p>

      <h2 className="font-bold text-lg">ĐIỀU 8: GIẢI QUYẾT HAO HỤT HÀNG HÓA</h2>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Nếu hao hụt theo quy định dưới mức </p>
          <p className="text-lg font-normal">{fields.loss} </p>
          <p className="text-lg font-normal">% tổng số lượng hàng thì bên B không phải bồi thường.</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">- Hao hụt trên tỷ lệ cho phép thì bên B phải bồi thường cho bên A theo giá trị thị trường tự do tại nơi giao hàng (áp dụng cho trường hợp bên A không cử người áp tải).</p>

      <h2 className="font-bold text-lg">ĐIỀU 9: NGƯỜI ÁP TẢI HÀNG HÓA (Nếu có)</h2>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">9.1. Bên A cử</p>
          <p className="text-lg font-normal">{fields.peopleNum} </p>
          <p className="text-lg font-normal">người theo phương tiện để áp tải hàng.</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">Lưu ý: Các trường hợp sau đây bên A buộc phải cử người áp tải:</p>
      <ul className="mt-1 text-lg" style={{ lineHeight: "1.6" }}>
        <li>- Hàng quý hiếm: vàng, kim cương, đá quý...</li>
        <li>- Hàng tươi sống đi đường phải ướp;</li>
        <li>- Súc vật sống cần cho ăn dọc đường;</li>
        <li>- Hàng nguy hiểm;</li>
        <li>- Các loại súng ống, đạn dược;</li>
        <li>- Linh cửu, thi hài.</li>
      </ul>
      <p className="text-lg font-normal">9.2. Người áp tải có trách nhiệm bảo vệ hàng hóa và giải quyết các thủ tục kiểm tra liên quan đến hàng hóa trên đường vận chuyển.</p>
      <p className="text-lg font-normal">9.3. Bên B không phải chịu trách nhiệm hàng mất mát nhưng phải có trách nhiệm điều khiển phương tiện đúng yêu cầu kỹ thuật để không gây hư hỏng, mất mát hàng hóa. Nếu không giúp đỡ hoặc điều khiển phương tiện theo yêu cầu của người áp tải nhằm giữ gìn bảo vệ hàng hóa hoặc có hành vi vô trách nhiệm khác làm thiệt hại cho bên A thì phải chịu trách nhiệm theo phần lỗi của mình.</p>

      <h2 className="font-bold text-lg">ĐIỀU 10: THANH TOÁN PHÍ VẬN TẢI (6)</h2>
      <p className="text-lg font-normal">10.1. Tiền cước phí chính mà bên A phải thanh toán cho bên B bao gồm:</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Loại hàng thứ nhất là:</p>
          <p className="text-lg font-normal">{fields.mainFeeA} </p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Loại hàng thứ hai là:</p>
          <p className="text-lg font-normal">{fields.mainFeeB} </p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">- ...</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">Tổng cộng cước phí chính là:</p>
          <p className="text-lg font-normal">{fields.totalCost} </p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">10.2. Tiền phụ phí vận tải bên A phải thanh toán cho bên B gồm:</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Phí tổn điều xe một số quãng đường không chở hàng là</p>
          <p className="text-lg font-normal">{fields.perMile} </p>
          <p className="text-lg font-normal">đồng/ km.</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Cước qua phà là</p>
          <p className="text-lg font-normal">{fields.boatFee} </p>
          <p className="text-lg font-normal">đồng.</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Chi phí chuyển tải là</p>
          <p className="text-lg font-normal">{fields.conveyFee} </p>
          <p className="text-lg font-normal">đồng.</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Phí tổn vật dụng chèn lót là</p>
          <p className="text-lg font-normal">{fields.materialFee} </p>
          <p className="text-lg font-normal">đồng.</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Chuồng cũi cho súc vật là</p>
          <p className="text-lg font-normal">{fields.cageFee} </p>
          <p className="text-lg font-normal">đồng.</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Giá chênh lệch nhiên liệu tổng cộng là</p>
          <p className="text-lg font-normal">{fields.fuelFee} </p>
          <p className="text-lg font-normal">đồng.</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Lệ phí bến đổ phương tiện là</p>
          <p className="text-lg font-normal">{fields.parkFee} </p>
          <p className="text-lg font-normal">đồng.</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Kê khai trị giá hàng hóa</p>
          <p className="text-lg font-normal">{fields.declareFee} </p>
          <p className="text-lg font-normal">đồng.</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Cảng phí</p>
          <p className="text-lg font-normal">{fields.portFee} </p>
          <p className="text-lg font-normal">đồng.</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">- Hoa tiêu phí</p>
          <p className="text-lg font-normal">{fields.navigatorFee} </p>
          <p className="text-lg font-normal">đồng.</p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">10.3. Tổng cộng cước phí bằng số:</p>
          <p className="text-lg font-normal">{fields.totalCostFee} </p>
          <p className="text-lg font-normal">(Bằng chữ:</p>
          <p className="text-lg font-normal">{fields.totalCostFeeLetter} </p>
          <p className="text-lg font-normal">)</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">10.4. Bên A thanh toán cho bên B bằng hình thức sau:</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">{fields.formA} </p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">{fields.formB} </p>
        </>
        )}
      </div>

      <h2 className="font-bold text-lg">ĐIỀU 11: QUYỀN VÀ NGHĨA VỤ CỦA CÁC BÊN</h2>
      <p className="text-lg font-normal">11.1. Quyền và nghĩa vụ của bên A</p>
      <p className="text-lg font-normal">a) Nghĩa vụ của bên A:</p>
      <ul className="mt-1 text-lg" style={{ lineHeight: "1.6" }}>
        <li>- Trả đủ tiền cước phí vận chuyển cho bên B theo đúng thời hạn, phương thức đã thoả thuận;</li>
        <li>- Trông coi tài sản trên đường vận chuyển, nếu có thoả thuận. Trong trường hợp bên A trông coi tài sản mà tài sản bị mất mát, hư hỏng thì không được bồi thường.</li>
        <li>- Bên A phải bồi thường thiệt hại cho bên B và người thứ ba về thiệt hại do tài sản vận chuyển có tính chất nguy hiểm, độc hại mà không có biện pháp đóng gói, bảo đảm an toàn trong quá trình vận chuyển.</li>
      </ul>
      <p className="text-lg font-normal">b) Quyền của bên A:</p>
      <ul className="mt-1 text-lg" style={{ lineHeight: "1.6" }}>
        <li>- Yêu cầu bên B chuyên chở tài sản đến đúng địa điểm, thời điểm đã thoả thuận;</li>
        <li>- Trực tiếp hoặc chỉ định người thứ ba nhận lại tài sản đã thuê vận chuyển;</li>
        <li>- Yêu cầu bên B bồi thường thiệt hại.</li>
      </ul>
      <p className="text-lg font-normal">11.2. Quyền và nghĩa vụ của bên B</p>
      <p className="text-lg font-normal">a) Nghĩa vụ của bên B:</p>
      <ul className="mt-1 text-lg" style={{ lineHeight: "1.6" }}>
        <li>- Bảo đảm vận chuyển hàng hóa đầy đủ, an toàn đến địa điểm đã định, theo đúng thời hạn;</li>
        <li>- Trả tài sản cho người có quyền nhận;</li>
        <li>- Chịu chi phí liên quan đến việc chuyên chở tài sản, trừ trường hợp có thoả thuận khác;</li>
        <li>- Mua bảo hiểm trách nhiệm dân sự theo quy định của pháp luật;</li>
        <li>- Bồi thường thiệt hại cho bên A trong trường hợp bên B để mất mát, hư hỏng tài sản do lỗi của mình, trừ trường hợp có thoả thuận khác hoặc pháp luật có quy định khác.</li>
      </ul>
      <p className="text-lg font-normal">b) Quyền của bên B:</p>
      <ul className="mt-1 text-lg" style={{ lineHeight: "1.6" }}>
        <li>- Kiểm tra sự xác thực của tài sản, của vận đơn hoặc chứng từ vận chuyển tương đương khác;</li>
        <li>- Từ chối vận chuyển tài sản không đúng với loại tài sản đã thoả thuận trong hợp đồng;</li>
        <li>- Yêu cầu bên A thanh toán đủ cước phí vận chuyển đúng thời hạn;</li>
        <li>- Từ chối vận chuyển tài sản cấm giao dịch, tài sản có tính chất nguy hiểm, độc hại, nếu bên B biết hoặc phải biết;</li>
        <li>- Yêu cầu bên A bồi thường thiệt hại.</li>
      </ul>

      <h2 className="font-bold text-lg">ĐIỀU 12: ĐĂNG KÝ BẢO HIỂM</h2>
      <ul className="mt-1 text-lg" style={{ lineHeight: "1.6" }}>
        <li>- Bên A phải chi phí mua bảo hiểm hàng hóa.</li>
        <li>- Bên B chi phí mua bảo hiểm phương tiện vận tải với chi nhánh Bảo Việt.</li>
      </ul>

      <h2 className="font-bold text-lg">ĐIỀU 13: BIỆN PHÁP BẢO ĐẢM THỰC HIỆN HỢP ĐỒNG (Nếu có)</h2>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">{fields.preventA} </p>
        </>
        )}
      </div>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">{fields.preventB} </p>
        </>
        )}
      </div>

      <h2 className="font-bold text-lg">ĐIỀU 14: TRÁCH NHIỆM DO VI PHẠM HỢP ĐỒNG</h2>
      <p className="text-lg font-normal">14.1. Bên nào vi phạm hợp đồng, một mặt phải trả cho bên bị vi phạm tiền phạt vi phạm hợp đồng, mặt khác nếu có thiệt hại xảy ra do lỗi vi phạm hợp đồng dẫn đến như mất mát, hư hỏng, tài sản phải chi phí để ngăn chặn hạn chế thiệt hại do vi phạm gây ra, tiền phạt do vi phạm hợp đồng khác và tiền bồi thường thiệt hại mà bên bị vi phạm đã phải trả cho bên thứ ba là hậu quả trực tiếp của sự vi phạm này gây ra.</p>
      <p className="text-lg font-normal">14.2. Nếu bên A đóng gói hàng mà không khai hoặc khai không đúng sự thật về số lượng, trọng</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">lượng, trọng lượng hàng hóa thì bên A phải chịu phạt đến</p>
          <p className="text-lg font-normal">{fields.fineFor} </p>
          <p className="text-lg font-normal">% số tiền cước phải trả cho lô hàng.</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">14.3. Nếu bên B có lỗi làm hư hỏng hàng hóa trong quá trình vận chuyển thì:</p>
      <ul className="mt-1 text-lg" style={{ lineHeight: "1.6" }}>
        <li>- Trong trường hợp có thể sửa chữa được nếu bên A đã tiến hành sửa chữa thì bên B phải đài thọ phí tổn.</li>
        <li>- Nếu hư hỏng đến mức không còn khả năng sửa chữa thì hai bên thỏa thuận mức bồi thường hoặc nhờ cơ quan chuyên môn giám định và xác nhận tỷ lệ bồi thường.</li>
      </ul>
      <p className="text-lg font-normal">14.4. Nếu bên A vi phạm nghĩa vụ thanh toán tổng cước phí vận chuyển thì phải chịu phạt theo</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal">mức lãi suất chậm trả của tín dụng ngân hàng là</p>
          <p className="text-lg font-normal">{fields.bankFee} </p>
          <p className="text-lg font-normal">% ngày (hoặc tháng) tính từ ngày hết hạn</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">thanh toán</p>
      <p className="text-lg font-normal">14.5. Bên nào đã ký hợp đồng mà không thực hiện hợp đồng hoặc đơn phương đình chỉ thực hiện</p>
      <div className="flex flex-end gap-[5px]">
        {fields && (
          <>
          <p className="text-lg font-normal"> hợp đồng mà không có lý do chính đáng thì sẽ bị phạt tới</p>
          <p className="text-lg font-normal">{fields.noReasonFee} </p>
          <p className="text-lg font-normal">% giá trị phần tổng cước phí dự chi.</p>
        </>
        )}
      </div>
      <p className="text-lg font-normal">14.6. Nếu hợp đồng này có một bên nào đó gây ra đồng thời nhiều loại vi phạm, thì chỉ phải chịu một loại phạt có số tiền phạt ở mức cao nhất theo các mức phạt mà hai bên đã thỏa thuận trong hợp đồng này, trừ các loại trách hiệm bồi thường khi làm mất mát hoặc hư hỏng hàng hóa lúc vận chuyển.</p>

      <h2 className="font-bold text-lg">ĐIỀU 15: GIẢI QUYẾT TRANH CHẤP HỢP ĐỒNG</h2>
      <p className="text-lg font-normal">Các bên cam kết cùng nhau thực hiện hợp đồng. Nếu trong quá trình thực hiện có phát sinh vướng mắc các bên sẽ trao đổi trên tinh thần hợp tác, trường hợp hai bên không thỏa thuận được thì việc tranh chấp sẽ được phán quyết bởi tòa án.</p>


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
          <p className="text-lg font-normal">Hai bên sẽ họp và lập biên bản thanh lý hợp đồng vận chuyển hàng hóa này vào ngày </p>
          <p className="text-lg font-normal">{fields.meetDate} </p>
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
