import Barcode from "@/components/ui/barcode";

export default function Page() {
  const border = " border-r-[1px] border-b-[1px]";
  const borderB = " border-b-[1px]";
  const borderLT = " border-l-[1px] border-t-[1px]";
  const borderR = " border-r-[1px]";
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
                  <div>Chi cục Hải quan đăng ký tờ khai:</div>
                  <div>Chi cục Hải quan cửa khẩu nhập:</div>
                </div>
                <div className={"flex-[0.75]" + border}>
                  <div>Số tham chiếu:</div>
                  <div>Ngày, giờ gửi:</div>
                </div>
                <div className={"flex-[0.75]" + border}>
                  <div>Số tờ khai:</div>
                  <div>Ngày, giờ đăng ký:</div>
                  <div>Số lượng phụ lục tờ khai:</div>
                </div>
                <div className={"flex-[0.75]" + borderB}>
                  <div>Công chức đăng ký tờ khai</div>
                </div>
              </div>
              <div className={"flex w-full"}>
                <div className={"flex flex-1 flex-col" + borderR}>
                  <div className={"flex-1" + borderB}>
                    <div>1. Người xuất khẩu:</div>
                  </div>
                  <div className={"flex flex-1 flex-col" + borderB}>
                    <div>2. Người nhập khẩu:</div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"h-6 w-20" + borderLT}></div>
                    </div>
                  </div>
                  <div className={"flex flex-1 flex-col" + borderB}>
                    <div>3. Người uỷ thác/người được ủy quyền:</div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"h-6 w-20" + borderLT}></div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div>4. Đại lý Hải quan:</div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"h-6 w-20" + borderLT}></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[2.25] flex-col">
                  <div className={borderB}>
                    <div>5. Loại hình:</div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[0.75]" + borderR}>
                      6. Hóa đơn thương mại:
                    </div>
                    <div className={"flex-[0.9]" + borderR}>
                      <div>7. Giấy phép số:</div>
                      <div>Ngày</div>
                      <div>Ngày hết hạn</div>
                    </div>
                    <div className="flex-[0.5]">
                      <div>8. Hợp đồng:</div>
                      <div>Ngày</div>
                      <div>Ngày hết hạn</div>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[0.75]" + borderR}>
                      9. Vận đơn (số/ngày):
                    </div>
                    <div className={"flex-[0.9]" + borderR}>
                      10. Cảng xếp hàng:
                    </div>
                    <div className="flex-[0.5]">11. Cảng dỡ hàng:</div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[1.65]" + borderR}>
                      <div>12. Phương tiện vận tải:</div>
                      <div>Tên, số hiệu:</div>
                      <div>Ngày đến</div>
                    </div>
                    <div className="flex-[0.5]">13. Nước xuất khẩu:</div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[1]" + borderR}>
                      14. Điều kiện giao hàng:
                    </div>
                    <div className="flex-[1]">15. Phương thức thanh toán:</div>
                  </div>
                  <div className="flex">
                    <div className={"flex-[1]" + borderR}>
                      16. Đồng tiền thanh toán:
                    </div>
                    <div className="flex-[1]">17. Tỷ giá tính thuế:</div>
                  </div>
                </div>
              </div>
              <table className="border-collapse">
                <tbody>
                  <tr>
                    <td className="border-b-[1px] border-t-[1px]">Số TT</td>
                    <td className="border-[1px]">18. Mô tả hàng hóa</td>
                    <td className="border-[1px]">19.Mã số hàng hóa</td>
                    <td className="border-[1px]">20. Xuất xứ</td>
                    <td className="border-[1px]">21. Chế độ ưu đãi</td>
                    <td className="border-[1px]">22. Lượng hàng</td>
                    <td className="border-[1px]">23. Đơn vị tính</td>
                    <td className="border-[1px]">24. Đơn giá nguyên tệ</td>
                    <td className="border-b-[1px] border-t-[1px]">
                      25.Trị giá nguyên tệ
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b-[1px] border-t-[1px]">1</td>
                    <td className="border-[1px]"></td>
                    <td className="border-[1px]"></td>
                    <td className="border-[1px]"></td>
                    <td className="border-[1px]"></td>
                    <td className="border-[1px]"></td>
                    <td className="border-[1px]"></td>
                    <td className="border-[1px]"></td>
                    <td className="border-b-[1px] border-t-[1px]"></td>
                  </tr>
                </tbody>
              </table>
              <table className="border-collapse">
                <tbody>
                  <tr>
                    <td className="border-b-[1px]">Loại thuế</td>
                    <td className="border-[1px] border-t-0">
                      Trị giá tính thuế/ Số lượng chịu thuế
                    </td>
                    <td className="border-[1px] border-t-0">
                      Thuế suất (%)/ Mức thuế
                    </td>
                    <td className="border-[1px] border-r-0 border-t-0">
                      Tiền thuế
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t-[1px]">26. Thuế nhập khẩu</td>
                    <td className="border-[1px] border-t-0"></td>
                    <td className="border-[1px] border-t-0"></td>
                    <td className="border-t-[1px]"></td>
                  </tr>
                  <tr>
                    <td className="border-t-[1px]">27. Thuế TTĐB</td>
                    <td className="border-[1px] border-t-0"></td>
                    <td className="border-[1px] border-t-0"></td>
                    <td className="border-t-[1px]"></td>
                  </tr>
                  <tr>
                    <td className="border-t-[1px]">28. Thuế BVMT</td>
                    <td className="border-[1px] border-t-0"></td>
                    <td className="border-[1px] border-t-0"></td>
                    <td className="border-t-[1px]"></td>
                  </tr>
                  <tr>
                    <td className="border-t-[1px]">29. Thuế GTGT</td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-t-[1px]"></td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td className="border-t-[1px]">
                      <div>30. Tổng số tiền thuế (ô 26+27+ 28+29):</div>{" "}
                      <div>Bằng chữ:</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td className="flex justify-center border-t-[1px]">
                      31. Lượng hàng, số hiệu container
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="border-collapse border-t-[1px]">
                <tbody>
                  <tr>
                    <td className="border-b-[1px]">Số TT</td>
                    <td className="border-[1px] border-t-0">
                      a. Số hiệu container
                    </td>
                    <td className="border-[1px] border-t-0">
                      b. Số lượng kiện trong container
                    </td>
                    <td className="border-[1px] border-r-0 border-t-0">
                      c. Trọng lượng hàng trong container
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="flex items-end justify-start"></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="flex items-end justify-start"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="flex items-end justify-start font-bold">
                      Cộng:
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="border-t-[1px]">
                <tbody>
                  <tr className="h-[200px]">
                    <td className="border-r-[1px] align-top">
                      32. Chứng từ đi kèm
                    </td>
                    <td className="flex flex-col items-center justify-center">
                      <div className="flex items-start justify-center">
                        33. Tôi xin cam đoan, chịu trách nhiệm
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
                          34. Kết quả phân luồng và hướng dẫn làm thủ tục hải
                          quan
                        </div>
                        <div>35. Ghi chép khác:</div>
                      </div>
                    </td>
                    <td className="border-r-[1px] align-top">
                      36. Xác nhận của hải quan giám sát
                    </td>
                    <td className="border-r-[1px] align-top">
                      37. Xác nhận giải phóng hàng/ đưa hàng về bảo quản/chuyển
                      cửa khẩu
                    </td>
                    <td className="align-top">38. Xác nhận thông quan</td>
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
