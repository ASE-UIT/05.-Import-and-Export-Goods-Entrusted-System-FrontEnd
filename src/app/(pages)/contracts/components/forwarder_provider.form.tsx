// components/TransportContractModal.tsx
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

export default function TransportContractModal() {
  const [formData, setFormData] = useState({
    documentNumber: "",
    date: "",
    location: "",
    partyA: "",
    addressA: "",
    phoneA: "",
    faxA: "",
    taxCodeA: "",
    accountA: "",
    representA: "",
    positionA: "",
    partyB: "",
    addressB: "",
    phoneB: "",
    faxB: "",
    taxCodeB: "",
    accountB: "",
    representB: "",
    positionB: "",
    termA: "",
    termB: "",
    termC: "",
    termD:"",
    termE: "",
    termF: "",
    placeA: "",
    placeB: "",
    transportA: "",
    speed: "",
    roof: "",
    number: "",
    responsibility: "",
    res5: "",
    res6: "",
    res7: "",
    res8: "",
    rule: "",
    rule6: "",
    rule7: "",
    rule8: "",
    rule9: "",
    rule10: "",
    rule14: "",
    rule16: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn btn-primary">View</button>
      </DialogTrigger>
      <DialogContent className="max-w-[50vw] w-full h-[90vh] overflow-y-auto rounded-lg p-6 shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-center">
            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM <br />
            <span className="font-bold">Độc lập - Tự do - Hạnh phúc</span><br></br>
            <span className="font-bold">__________________</span><br></br>
            <span className="font-bold text-xl mt-4 block">Hợp đồng vận chuyển hàng hóa</span><br></br>
          </DialogTitle>
          <div className="mt-1">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-center">
              <span className="mr-2">Số:</span>
              <input
                  name="documentNumber"
                  className="border-dotted border-b-2 w-1/10 py-1 outline-none text-center items-end"
                  value={formData.documentNumber}
                  onChange={handleInputChange}
                  readOnly
              />
              <span className="ml-2">/HĐVCHH</span>
            </div>
            <div>
              <span>Hôm nay, ngày </span>
              <input
              name="date"
              type="date"
              className="border-dotted border-b-2 py-1 outline-none"
              value={formData.date}
              onChange={handleInputChange}
              readOnly
              />
              <span> . Tại</span>
              <input
                  name="location"
                  className="border-dotted border-b-2 w-1/10 py-1 outline-none text-center"
                  value={formData.location}
                  onChange={handleInputChange}
                  readOnly
              />
            </div>
            {/* Party A */}
            <h1>Chúng tôi gồm có:</h1>
            <div className="flex items-end w-full">
              <span className="font-bold mr-2">BÊN CHỦ HÀNG (BÊN A):</span>
              <input
                name="partyA"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.partyA}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Address A */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Địa chỉ: </span>
              <input
                name="addressA"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.addressA}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Number phone A */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Số điện thoại: </span>
              <input
                name="phoneA"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.phoneA}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Fax A */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Fax: </span>
              <input
                name="faxA"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.faxA}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Tax A */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Mã số thuế: </span>
              <input
                name="taxCodeA"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.taxCodeA}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Account number A */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Tài khoản số: </span>
              <input
                name="accountA"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.accountA}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Represent A */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Do ông (bà) đại diện: </span>
              <input
                name="representA"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.representA}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Position A */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Chức vụ: </span>
              <input
                name="positionA"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.positionA}
                onChange={handleInputChange}
                readOnly
              />
              <span>làm đại diện</span>
            </div>
            {/* Party B */}
            <div className="flex items-end w-full">
              <span className="font-bold mr-2">BÊN VẬN CHUYỂN (BÊN B):</span>
              <span>Công ty</span>
              <input
                name="partyB"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.partyB}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Address B */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Địa chỉ: </span>
              <input
                name="addressB"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.addressB}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Number phone B */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Số điện thoại: </span>
              <input
                name="phoneB"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.phoneB}
                onChange={handleInputChange}
                readOnly
              />
              </div>
            {/* Fax B */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Fax: </span>
              <input
                name="faxB"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.faxB}
                onChange={handleInputChange}
                readOnly
              />
            </div>
             {/* Tax B */}
              <div className="flex items-end w-full">
              <span className="font-normal mr-2">Mã số thuế: </span>
              <input
                name="taxCodeB"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.taxCodeB}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Account number B */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Tài khoản số: </span>
              <input
                name="accountB"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.accountB}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Represent B */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Do ông (bà) đại diện: </span>
              <input
                name="representB"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.representB}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Position B */}
            <div className="flex items-end w-full">
              <span className="font-normal mr-2">Chức vụ: </span>
              <input
                name="positionB"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.positionB}
                onChange={handleInputChange}
                readOnly
              />
              <span>làm đại diện</span>
            </div>
            <h1 className="mt-1"> Hai bên cùng thỏa thuận ký hợp đồng với những nội dung sau:</h1>
            <h2 className="font-bold mt-1">ĐIỀU 1: HÀNG HÓA VẬN CHUYỂN</h2>
            <h1 className="mt-1"> 1.1. Tên hàng: Bên A thuê bên B vận tải những hàng hóa sau:</h1>
            <h1 className="mt-1">  1.2. Tính chất hàng hóa:</h1>
            <h1 className="mt-1">  Bên B cần lưu ý bảo đảm cho bên A những loại hàng sau được an toàn:</h1>
            {/* Terms */}
            <div className="flex items-end w-full">
              <span>a)</span>
              <input
                name="termA"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.termA}
                onChange={handleInputChange}
                readOnly
              />
              <span>(1) hàng cần giữ tươi sống</span>
              <input
                name="termA"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.termA}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Term B */}
            <div className="flex items-end w-full">
              <span>b)</span>
              <input
                name="termB"
                className="border-dotted border-b-2 w-24 py-1 outline-none text-center"
                value={formData.termA}
                onChange={handleInputChange}
                readOnly
              />
              <span>hàng cần bảo quản không để biến chất:</span>
              <input
                name="termB"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.termA}
                onChange={handleInputChange}
                readOnly
              />
              <span>(2)</span>
            </div>
            {/* Term C */}
            <div className="flex items-end w-full">
              <span>c)</span>
              <input
                name="termC"
                className="border-dotted border-b-2 w-24 py-1 outline-none text-center"
                value={formData.termA}
                onChange={handleInputChange}
                readOnly
              />
              <span>hàng nguy hiểm cần che đậy hoặc để riêng:</span>
              <input
                name="termC"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.termA}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Term D */}
            <div className="flex items-end w-full">
              <span>c)</span>
              <input
                name="termD"
                className="border-dotted border-b-2 w-24 py-1 outline-none text-center"
                value={formData.termA}
                onChange={handleInputChange}
                readOnly
              />
              <span>hàng dễ vỡ:</span>
              <input
                name="termD"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.termA}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Term E */}
            <div className="flex items-end w-full">
              <span>c)</span>
              <input
                name="termE"
                className="border-dotted border-b-2 w-24 py-1 outline-none text-center"
                value={formData.termA}
                onChange={handleInputChange}
                readOnly
              />
              <span>súc vật cần giữ sống bình thường:</span>
              <input
                name="termE"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.termE}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Term F */}
            <div className="flex items-end w-full">
              <span>1.3. Đơn vị tính đơn giá cước:</span>
              <input
                name="termF"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.termF}
                onChange={handleInputChange}
                readOnly
              />
              <span>(3)</span>
            </div>
            <h2 className="font-bold mt-1">ĐIỀU 2: ĐỊA ĐIỂM NHẬN HÀNG VÀ GIAO HÀNG</h2>
            {/* Place A */}
            <div className="flex items-end w-full">
              <span> 2.1. Bên B đưa phương tiện đến nhận hàng tại (kho hàng)</span>
              <input
                name="placeA"
                className="border-dotted border-b-2 w-32 py-1 outline-none text-center"
                value={formData.placeA}
                onChange={handleInputChange}
                readOnly
              />
              <span className="flex-1">(4) do bên A giao.</span>
            </div>
            {/* Place B */}
            <div className="flex items-end w-full">
              <span> 2.2. Bên B giao hàng cho bên A tại địa điểm</span>
              <input
                name="placeB"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.placeB}
                onChange={handleInputChange}
                readOnly
              />
              <span >(5)</span>
            </div>
            <h2 className="font-bold mt-1">ĐIỀU 3: ĐỊCH LỊCH THỜI GIAN GIAO NHẬN HÀNG</h2>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse border border-black w-full text-center">
                <thead>
                  <tr>
                    <th className="border border-black" rowSpan={2}>STT</th>
                    <th className="border border-black" rowSpan={2}>Tên hàng</th>
                    <th className="border border-black" colSpan={3}>Nhận hàng</th>
                    <th className="border border-black" colSpan={3}>Giao hàng</th>
                    <th className="border border-black" rowSpan={2}>Ghi chú</th>
                  </tr>
                  <tr>
                    <th className="border border-black">Số lượng</th>
                    <th className="border border-black">Địa điểm</th>
                    <th className="border border-black">Thời gian</th>
                    <th className="border border-black">Số lượng</th>
                    <th className="border border-black">Địa điểm</th>
                    <th className="border border-black">Thời gian</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black" style={{ height: "50px" }}>&nbsp;</td>
                    <td className="border border-black"> </td>
                    <td className="border border-black"> </td>
                    <td className="border border-black"> </td>
                    <td className="border border-black"> </td>
                    <td className="border border-black"> </td>
                    <td className="border border-black"> </td>
                    <td className="border border-black"> </td>
                    <td className="border border-black"> </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="font-bold mt-1">ĐIỀU 4: PHƯƠNG TIỆN VẬN TẢI</h2>
            {/* TransportA */}
            <div className="flex items-end w-full">
              <span>  4.1. Bên A yêu cầu bên B vận tải số hàng trên bằng phương tiện</span>
              <input
                name="transportA"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.transportA}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <h2 className="mt-1">Phải có những khả năng cần thiết như:</h2>
            {/* Requirement 1 */}
            <div className="flex items-end w-full">
              <span> - Tốc độ phải đạt</span>
              <input
                name="speed"
                className="border-dotted border-b-2 w-32 py-1 outline-none text-center"
                value={formData.speed}
                onChange={handleInputChange}
                readOnly
              />
              <span >km/giờ</span>
            </div>
            {/* Requirement 2 */}
            <div className="flex items-end w-full">
              <span> - Có mái che</span>
              <input
                name="roof"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.roof}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Requirement 3 */}
            <div className="flex items-end w-full">
              <span> - Số lượng phương tiện là:</span>
              <input
                name="number"
                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                value={formData.number}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Requirement 4 */}
            <div className="flex flex-wrap items-end mt-1">
              <span>  4.2. Bên B chịu trách nhiệm về kỹ thuật cho phương tiện vận tải để bảo đảm vận tải trong</span>
              <span> thời gian là:</span>
              <input
                name="responsibility"
                className="border-dotted border-b-2  py-1 outline-none text-center"
                value={formData.responsibility}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <h2 className="mt-1" style={{ lineHeight: "2.5" }}> 4.3. Bên B phải chuẩn bị đầy đủ giấy tờ cho phương tịên đi lại hợp lệ trên tuyến giao thông đó để vận tải số hàng hóa đã thỏa thuận như trên và chịu mọi hậu quả về giấy tờ pháp lý của phương tiện vận tải.</h2>
            {/* Requirement 5 */}
            <div className="flex flex-wrap items-end mt-1">
              <span>4.4. Bên B phải làm vệ sinh phương tiện vận tải khi nhận hàng, chi phí vệ sinh phương tiện</span>
              <span> vận tải sau khi giao hàng bên A phải chịu là</span>
              <input
                name="res5"
                className="border-dotted border-b-2 w-28 py-1 outline-none text-center"
                value={formData.res5}
                onChange={handleInputChange}
                readOnly
              />
              <span> đồng (Bằng chữ:</span>
                <input
                name="res5"
                className="border-dotted border-b-2 w-32 py-1 outline-none text-center"
                value={formData.res5}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Requirement 6 */}
            <div className="flex flex-wrap items-end mt-1">
              <span> 4.5. Sau khi bên B đưa phương tiện đến nhận hàng mà bên A chưa có hàng để giao sau:</span>
              <input
                name="res6"
                className="border-dotted border-b-2 w-12 py-1 outline-none text-center"
                value={formData.res6}
                onChange={handleInputChange}
                readOnly
              />
              <span className="mt-1"> phút thì bên A phải chứng nhận cho bên B đem phương tiện về và phải trả giá cước</span>
              <span className="mt-1">của loại hàng thấp nhất về giá vận tải theo đoạn đường đã hợp đồng. Trong trường hợp</span>
              <span className="mt-1">không tìm thấy người đại diện của bên A tại địa điểm giao hàng, bên B chờ sau</span>
              <input
                name="res6"
                className="border-dotted border-b-2 w-20 py-1 outline-none text-center"
                value={formData.res6}
                onChange={handleInputChange}
                readOnly
              />
              <h2 className="mt-1" style={{ lineHeight: "2.5" }}>Phút, có quyền nhờ Ủy ban nhân dân cơ sở xác nhận phương tiện có đến và cho phương tiện về và yêu cầu thanh toán chi phí như trên.</h2>
            </div>
            {/* Requirement 7 */}
            <div className="flex flex-wrap items-end">
              <span className="mt-1" style={{ lineHeight: "2" }}> 4.6. Bên B có quyền từ chối không nhận hàng nếu bên A giao hàng không đúng loại hàng ghi trong vận đơn khi xét thấy phương tiện điều động không thích hợp với loại hàng đó, có quyền</span>
              <span className="mt-1">  yêu cầu bên A phải chịu phạt</span>
              <input
                name="res7"
                className="border-dotted border-b-2 w-12 py-1 outline-none text-center"
                value={formData.res7}
                onChange={handleInputChange}
                readOnly
              />
              <span className="mt-1">% giá trị tổng cước phí.</span>
            </div>
            {/* Requirement 8 */}
            <div className="flex flex-wrap items-end">
              <span className="mt-1" style={{ lineHeight: "2.5" }}> 4.7. Trường hợp bên B đưa phương tiện đến nhận hàng chậm so với lịch giao nhận phải chịu</span>
              <span className="mt-1">phạt hợp đồng là:</span>
              <input
                name="res8"
                className="border-dotted border-b-2 w-12 py-1 outline-none text-center"
                value={formData.res8}
                onChange={handleInputChange}
                readOnly
              />
              <span className="mt-1">đồng/giờ.</span>
            </div>
            {/* Rule 5 */}
            <h2 className="font-bold mt-2">ĐIỀU 5: GIẤY TỜ CHO VIỆC VẬN CHUYỂN HÀNG HÓA</h2>
            <div className="flex flex-wrap items-end">
              <span className="mt-1" style={{ lineHeight: "2.5" }}>  5.1. Bên B phải làm giấy xác báo hàng hóa (phải được đại diện bên B ký, đóng dấu xác</span>
              <span className="mt-1"> nhận) trước {formData.rule || "......"}</span>
              <span className="mt-1">giờ so với thời điểm giao hàng.</span>
              <h2 className="mt-1" style={{ lineHeight: "2.5" }}>Bên B phải xác báo lại cho bên A số lượng và trọng tải các phương tiện có thể điều động trong 24 giờ trước khi bên A giao hàng. Nếu bên A không xác báo xin phương tiện thì bên B không chịu trách nhiệm.</h2>
              <h2 className="mt-1" style={{ lineHeight: "2.5" }}>5.2. Các giấy tờ khác nếu có.</h2>
            </div>
            {/* Rule 6 */}
            <h2 className="font-bold mt-1">ĐIỀU 6: PHƯƠNG THỨC GIAO NHẬN HÀNG HÓA</h2>
            <div className="flex flex-wrap items-end">
              <span className="mt-1" style={{ lineHeight: "2.5" }}> 6.1. Hai bên thỏa thuận nhận hàng theo phương thức sau:</span>
              <span className="mt-1" style={{ lineHeight: "2.5" }}> Lưu ý: Tùy theo từng loại hàng và tính chất phương tiện vận tải mà thỏa thuận giao nhận
              theo một trong các phương thức sau:</span>
              <ul className="mt-1" style={{ lineHeight: "2.5" }}>
                <li>- Nguyên đai, nguyên kiện, nguyên bao.</li>
                <li>- Theo trọng lượng, thể tích.</li>
                <li>- Theo nguyên hầm hay container.</li>
                <li>- Theo ngấn nước của phương tiện vận tải thủy.</li>
              </ul>
              <span className="mt-1" style={{ lineHeight: "2.5" }}> 6.2. Bên A đề nghị bên B giao hàng theo phương thức:</span>
              <input
                name="rule6"
                className="border-dotted border-b-2 w-full py-1 outline-none text-center"
                value={formData.rule6}
                onChange={handleInputChange}
                readOnly
              />
              <input
                name="rule6"
                className="border-dotted border-b-2 w-full py-1 outline-none text-center"
                value={formData.rule6}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            {/* Rule 7 */}
            <h2 className="font-bold mt-3"> ĐIỀU 7: TRÁCH NHIỆM XẾP DỠ HÀNG HÓA</h2>
            <div className="flex flex-wrap items-end">
              <span className="mt-1" style={{ lineHeight: "2.5" }}>  7.1. Bên B (A) có trách nhiệm xếp dỡ hàng hóa.</span>
              <span className="mt-1" style={{ lineHeight: "2.5" }}> Chú ý:</span>
              <ul className="mt-1" style={{ lineHeight: "2.5" }}>
                <li>- Tại địa điểm có thể tổ chức xếp dỡ chuyên trách thì chi phí xếp dỡ do bên A chịu.</li>
                <li>- Trong trường hợp bên A phụ trách xếp dỡ (không thuê chuyên trách) thì bên vận tải có
                trách nhiệm hướng dẫn về kỹ thuật xếp dỡ.</li>
              </ul>
              <span className="mt-1">  7.2. Thời gian xếp dỡ giải phóng phương tiện là {formData.rule6 || "......"}</span>
              <span className="mt-1">giờ.</span>
              <span className="mt-1" style={{ lineHeight: "2.5" }}>  Lưu ý : Nếu cần xếp dỡ vào ban đêm, vào ngày lễ và ngày chủ nhật bên A phải báo trước</span>
              <span className="mt-1">cho bên B {formData.rule6 || "......"}</span>
              <span className="mt-1" style={{ lineHeight: "2" }}>giờ, phải trả chi phí cao hơn giờ hành chính là {formData.rule6 || ".........................."}</span>
              <br/>
              <p className="mt-3"> 7.3. Mức thưởng phạt</p>
              <ul className="mt-1" style={{ lineHeight: "2.5" }}>
                <li>- Nếu xếp dỡ xong trước thời gian quy định và an toàn thì bên {formData.rule7 || "......"} sẽ thưởng cho
                bên {formData.rule7 || "......"} số tiền là {formData.rule7 || "......"} đồng/giờ.</li>
                <li>- Xếp dỡ chậm bị phạt là: {formData.rule7 || "......"} đồng/ giờ.</li>
                <li>- Xếp dỡ hư hỏng hàng hóa phải bồi thường theo giá trị thị trường tự do tại địa điểm bốc xếp.</li>
              </ul>
            </div>
            {/* Rule 8 */}
            <h2 className="font-bold mt-2">ĐIỀU 8: GIẢI QUYẾT HAO HỤT HÀNG HÓA</h2>
            <div className="flex flex-wrap items-end">
            <ul className="mt-1" style={{ lineHeight: "2.5" }}>
                <li>- Nếu hao hụt theo quy định dưới mức {formData.rule8 || "......"} % tổng số lượng hàng thì bên B không phải
                bồi thường.</li>
                <li>- Hao hụt trên tỷ lệ cho phép thì bên B phải bồi thường cho bên A theo giá trị thị trường
                tự do tại nơi giao hàng (áp dụng cho trường hợp bên A không cử người áp tải).</li>
              </ul>
            </div>
            {/* Rule 9 */}
            <h2 className="font-bold mt-2"> ĐIỀU 9: NGƯỜI ÁP TẢI HÀNG HÓA (Nếu có)</h2>
            <div className="flex flex-wrap items-end">
            <span className="mt-1" style={{ lineHeight: "2" }}>9.1. Bên A cử  {formData.rule9 || "......"} người theo phương tiện để áp tải hàng.</span>
            <span className="mt-1" style={{ lineHeight: "2" }}>Lưu ý: Các trường hợp sau đây bên A buộc phải cử người áp tải:</span>
            <ul className="mt-1" style={{ lineHeight: "2.5" }}>
                <li>- Hàng quý hiếm: vàng, kim cương, đá quý...</li>
                <li>- Hàng tươi sống đi đường phải ướp;</li>
                <li>- Súc vật sống cần cho ăn dọc đường;</li>
                <li>- Hàng nguy hiểm;</li>
                <li>- Các loại súng ống, đạn dược;</li>
                <li>- Linh cửu, thi hài.</li>
              </ul>
              <span className="mt-1" style={{ lineHeight: "2" }}>9.2. Người áp tải có trách nhiệm bảo vệ hàng hóa và giải quyết các thủ tục kiểm tra liên
              quan đến hàng hóa trên đường vận chuyển.</span>
              <span className="mt-1" style={{ lineHeight: "2" }}>9.3. Bên B không phải chịu trách nhiệm hàng mất mát nhưng phải có trách nhiệm điều
 khiển phương tiện đúng yêu cầu kỹ thuật để không gây hư hỏng, mất mát hàng hóa. Nếu
 không giúp đỡ hoặc điều khiển phương tiện theo yêu cầu của người áp tải nhằm giữ gìn
 bảo vệ hàng hóa hoặc có hành vi vô trách nhiệm khác làm thiệt hại cho bên A thì phải
 chịu trách nhiệm theo phần lỗi của mình.</span>
            </div>
            {/* Rule 10 */}
            <h2 className="font-bold mt-2"> ĐIỀU 10: THANH TOÁN PHÍ VẬN TẢI (6)</h2>
            <div className="flex flex-wrap items-end">
            <span className="mt-1" style={{ lineHeight: "2" }}>10.1. Tiền cước phí chính mà bên A phải thanh toán cho bên B bao gồm:</span>
            <ul className="mt-1" style={{ lineHeight: "2.5" }}>
                <li>- Loại hàng thứ nhất là: {formData.rule10 || "......"} Đồng.</li>
                <li>- Loại hàng thứ nhất là: {formData.rule10 || "......"} Đồng.</li>
                <li>- ................................................................................................</li>
              </ul>
              <span className="mt-1" style={{ lineHeight: "2" }}> Tổng cộng cước phí chính là: {formData.rule10 || "......"} đồng.</span>
              <span className="mt-1" style={{ lineHeight: "2" }}>10.2. Tiền phụ phí vận tải bên A phải thanh toán cho bên B gồm:</span>
              <ul className="mt-1" style={{ lineHeight: "2.5" }}>
                <li>- Phí tổn điều xe một số quãng đường không chở hàng là {formData.rule10 || "......"} đồng/ km.</li>
                <li>- Cước qua phà là {formData.rule10 || "......"} đồng.</li>
                <li>- Chi phí chuyển tải là {formData.rule10 || "......"} đồng.</li>
                <li>- Phí tổn vật dụng chèn lót là {formData.rule10 || "......"} đồng.</li>
                <li>- Chuồng cũi cho súc vật là {formData.rule10 || "......"}. đồng.</li>
                <li>- Giá chênh lệch nhiên liệu tổng cộng là {formData.rule10 || "......"} đồng.</li>
                <li>- Lệ phí bến đổ phương tiện là {formData.rule10 || "......"} đồng.</li>
                <li>- Kê khai trị giá hàng hóa {formData.rule10 || "......"} đồng.</li>
                <li>- Cảng phí {formData.rule10 || "......"} đồng.</li>
                <li>- Hoa tiêu phí {formData.rule10 || "......"} đồng.</li>
              </ul>
              <span className="mt-1" style={{ lineHeight: "2" }}>10.3. Tổng cộng cước phí bằng số: {formData.rule10 || "......"} (Bằng chữ: {formData.rule10 || "......"})</span>
              <span className="mt-1" style={{ lineHeight: "2" }}> 10.4. Bên A thanh toán cho bên B bằng hình thức sau:</span>
              <p className="mt-3">................................................................................................</p>
              <p className="mt-3">................................................................................................</p>
            </div>
            {/* Rule 11 */}
            <h2 className="font-bold mt-2">ĐIỀU 11: QUYỀN VÀ NGHĨA VỤ CỦA CÁC BÊN</h2>
            <div className="flex flex-col mt-2">
              <h1 className="mt-1" style={{ lineHeight: "2" }}>11.1. Quyền và nghĩa vụ của bên A</h1>
              <p className="mt-1">a) Nghĩa vụ của bên A:</p>
              <ul className="mt-1" style={{ lineHeight: "2.5" }}>
                <li>- Trả đủ tiền cước phí vận chuyển cho bên B theo đúng thời hạn, phương thức đã thoả
                thuận;</li>
                <li>- Trông coi tài sản trên đường vận chuyển, nếu có thoả thuận. Trong trường hợp bên A
                trông coi tài sản mà tài sản bị mất mát, hư hỏng thì không được bồi thường.</li>
                <li>- Bên A phải bồi thường thiệt hại cho bên B và người thứ ba về thiệt hại do tài sản vận
 chuyển có tính chất nguy hiểm, độc hại mà không có biện pháp đóng gói, bảo đảm an toàn
 trong quá trình vận chuyển.</li>
              </ul>
              <p className="mt-1"> b) Quyền của bên A:</p>
              <ul className="mt-1" style={{ lineHeight: "2.5" }}>
                <li>- Yêu cầu bên B chuyên chở tài sản đến đúng địa điểm, thời điểm đã thoả thuận;</li>
                <li>- Trực tiếp hoặc chỉ định người thứ ba nhận lại tài sản đã thuê vận chuyển;</li>
                <li>- Yêu cầu bên B bồi thường thiệt hại.</li>
              </ul>
              <h1 className="mt-1" style={{ lineHeight: "2" }}>11.2. Quyền và nghĩa vụ của bên B</h1>
              <p className="mt-1"> a) Nghĩa vụ của bên B:</p>
              <ul className="mt-1" style={{ lineHeight: "2.5" }}>
                <li>- Bảo đảm vận chuyển hàng hóa đầy đủ, an toàn đến địa điểm đã định, theo đúng thời hạn;</li>
                <li>- Trả tài sản cho người có quyền nhận;</li>
                <li>- Chịu chi phí liên quan đến việc chuyên chở tài sản, trừ trường hợp có thoả thuận khác;</li>
                <li>- Mua bảo hiểm trách nhiệm dân sự theo quy định của pháp luật;</li>
                <li>- Bồi thường thiệt hại cho bên A trong trường hợp bên B để mất mát, hư hỏng tài sản do
                lỗi của mình, trừ trường hợp có thoả thuận khác hoặc pháp luật có quy định khác.</li>
              </ul>
              <p className="mt-1">  b) Quyền của bên B:</p>
              <ul className="mt-1" style={{ lineHeight: "2.5" }}>
                <li>- Kiểm tra sự xác thực của tài sản, của vận đơn hoặc chứng từ vận chuyển tương đương
                khác;</li>
                <li>- Từ chối vận chuyển tài sản không đúng với loại tài sản đã thoả thuận trong hợp đồng;</li>
                <li>- Yêu cầu bên A thanh toán đủ cước phí vận chuyển đúng thời hạn;</li>
                <li>- Từ chối vận chuyển tài sản cấm giao dịch, tài sản có tính chất nguy hiểm, độc hại, nếu
                bên B biết hoặc phải biết;</li>
                <li>- Yêu cầu bên A bồi thường thiệt hại.</li>
              </ul>
            </div>
            {/* Rule 12 */}
            <h2 className="font-bold mt-2"> ĐIỀU 12: ĐĂNG KÝ BẢO HIỂM</h2>
            <ul className="mt-1" style={{ lineHeight: "2.5" }}>
                <li>- Bên A phải chi phí mua bảo hiểm hàng hóa.</li>
                <li>- Bên B chi phí mua bảo hiểm phương tiện vận tải với chi nhánh Bảo Việt.</li>
              </ul>
            {/* Rule 13 */}
            <h2 className="font-bold mt-2">  ĐIỀU 13: BIỆN PHÁP BẢO ĐẢM THỰC HIỆN HỢP ĐỒNG (Nếu có)</h2>
            <ul className="mt-1 w-full" style={{ lineHeight: "2.5" }}>
                <li>.............................................................................</li>
                <li>.............................................................................</li>
            </ul>
            {/* Rule 14 */}
            <h2 className="font-bold mt-2">   ĐIỀU 14: TRÁCH NHIỆM DO VI PHẠM HỢP ĐỒNG</h2>
            <h1 className="mt-1" style={{ lineHeight: "2" }}> 14.1. Bên nào vi phạm hợp đồng, một mặt phải trả cho bên bị vi phạm tiền phạt vi phạm
              hợp đồng, mặt khác nếu có thiệt hại xảy ra do lỗi vi phạm hợp đồng dẫn đến như mất mát,
              hư hỏng, tài sản phải chi phí để ngăn chặn hạn chế thiệt hại do vi phạm gây ra, tiền phạt
              do vi phạm hợp đồng khác và tiền bồi thường thiệt hại mà bên bị vi phạm đã phải trả cho
              bên thứ ba là hậu quả trực tiếp của sự vi phạm này gây ra.
            </h1>
            <h1 className="mt-1" style={{ lineHeight: "2" }}> 14.2. Nếu bên A đóng gói hàng mà không khai hoặc khai không đúng sự thật về số lượng,
              trọng lượng hàng hóa thì bên A phải chịu phạt đến {formData.rule14 || "......"} % số tiền cước phải trả cho lô
              hàng đó.
            </h1>
            <h1 className="mt-1" style={{ lineHeight: "2" }}> 14.3. Nếu bên B có lỗi làm hư hỏng hàng hóa trong quá trình vận chuyển thì:</h1>
            <ul className="mt-1 w-full" style={{ lineHeight: "2.5" }}>
                <li>- Trong trường hợp có thể sửa chữa được nếu bên A đã tiến hành sửa chữa thì bên B phải
                đài thọ phí tổn.</li>
                <li>- Nếu hư hỏng đến mức không còn khả năng sửa chữa thì hai bên thỏa thuận mức bồi
                thường hoặc nhờ cơ quan chuyên môn giám định và xác nhận tỷ lệ bồi thường.</li>
            </ul>
            <h1 className="mt-1" style={{ lineHeight: "2" }}> 14.4. Nếu bên A vi phạm nghĩa vụ thanh toán tổng cước phí vận chuyển thì phải chịu phạt
            theo mức lãi suất chậm trả của tín dụng ngân hàng là {formData.rule14 || "......"} % ngày (hoặc tháng) tính từ
            ngày hết hạn thanh toán.</h1>
            <h1 className="mt-1" style={{ lineHeight: "2" }}> 14.5. Bên nào đã ký hợp đồng mà không thực hiện hợp đồng hoặc đơn phương đình chỉ
            thực hiện hợp đồng mà không có lý do chính đáng thì sẽ bị phạt tới {formData.rule14 || "......"} % giá trị phần
            tổng cước phí dự chi.</h1>
            <h1 className="mt-1" style={{ lineHeight: "2" }}>  14.6. Nếu hợp đồng này có một bên nào đó gây ra đồng thời nhiều loại vi phạm, thì chỉ
            phải chịu một loại phạt có số tiền phạt ở mức cao nhất theo các mức phạt mà hai bên đã
            thỏa thuận trong hợp đồng này, trừ các loại trách hiệm bồi thường khi làm mất mát hoặc
            hư hỏng hàng hóa lúc vận chuyển.</h1>
            {/* Rule 15 */}
            <h2 className="font-bold mt-2">   ĐIỀU 15: GIẢI QUYẾT TRANH CHẤP HỢP ĐỒNG</h2>
            <h1 className="mt-1" style={{ lineHeight: "2" }}> Các bên cam kết cùng nhau thực hiện hợp đồng. Nếu trong quá trình thực hiện có phát
            sinh vướng mắc các bên sẽ trao đổi trên tinh thần hợp tác, trường hợp hai bên không thỏa
            thuận được thì việc tranh chấp sẽ được phán quyết bởi tòa án.</h1>
            {/* Rule 16 */}
            <h2 className="font-bold mt-2">   ĐIỀU 16: HIỆU LỰC CỦA HỢP ĐỒNG</h2>
            <h1 className="mt-1" style={{ lineHeight: "2" }}> Hợp đồng này có hiệu lực từ ngày {formData.rule16 || "......"} tháng {formData.rule16 || "......"} năm {formData.rule16 || "......"} đến ngày {formData.rule16 || "......"} tháng
            {formData.rule16 || "......"} năm {formData.rule16 || "......"}</h1>
            <h1 className="mt-1" style={{ lineHeight: "2" }}> Hai bên sẽ họp và lập biên bản thanh lý hợp đồng vận chuyển hàng hóa này vào ngày
            {formData.rule16 || "......"} tháng {formData.rule16 || "......"} năm.</h1>
            <h1 className="mt-1" style={{ lineHeight: "2" }}> Hợp đồng được lập thành {formData.rule16 || "......"} ({formData.rule16 || "......"}) bản, mỗi bên giữ một bản và có giá trị như
            nhau.</h1>
            {/* Signatures */}
            <div style={{ justifyContent: "center", width: "100%", alignItems: "center" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px", width: "100%", alignItems: "flex-end", alignSelf: "stretch" }}>
                <div style={{ textAlign: "center" }}>
                  <h3>ĐẠI DIỆN BÊN A</h3>
                  <p>Chức vụ</p>
                  <p>(Ký tên, đóng dấu)</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h3>ĐẠI DIỆN BÊN B</h3>
                  <p>Chức vụ</p>
                  <p>(Ký tên, đóng dấu)</p>
                </div>
              </div>
            </div>
           </form>
        </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
