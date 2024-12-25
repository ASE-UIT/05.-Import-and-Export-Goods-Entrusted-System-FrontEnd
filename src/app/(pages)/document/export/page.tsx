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
                Tờ Khai Hàng Hóa Xuất Khẩu
              </div>
              <Barcode></Barcode>
            </div>
            <div className="w-full text-[20px] font-bold">Cục Hải Quan</div>
            <div className="flex w-full justify-end">HQ/2024/NK</div>
            <div className="flex w-full flex-col border-[1px]">
              <div className="flex w-full font-bold">
                <div className={"flex-1" + border}>
                  <div>
                    Chi cục Hải quan đăng ký tờ khai:
                    <input></input>
                  </div>
                  <div>Chi cục Hải quan cửa khẩu xuất:</div>
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
                <div className={"flex-[0.75] text-red-500" + borderB}>
                  <div>Công chức đăng ký tờ khai</div>
                </div>
              </div>
              <div className={"flex w-full"}>
                <div className={"flex flex-1 flex-col" + borderR}>
                  <div className={"flex flex-1 flex-col" + borderB}>
                    <div>1. Người xuất khẩu:</div>
                    <div className="flex h-full items-end justify-end gap-1">
                      <div>MST</div>
                      <div className={"h-6 w-20" + borderLT}></div>
                    </div>
                  </div>
                  <div className={"flex-1" + borderB}>
                    <div>2. Người nhập khẩu:</div>
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
                    <div className={"flex-[0.5]" + borderR}>
                      <div>6. Giấy phép số:</div>
                      <div>Ngày</div>
                      <div>Ngày hết hạn</div>
                    </div>
                    <div className="flex-[0.5]">
                      <div>7. Hợp đồng:</div>
                      <div>Ngày</div>
                      <div>Ngày hết hạn</div>
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[0.5] text-red-500" + borderR}>
                      8. Hóa đơn thương mại:
                    </div>
                    <div className="flex-[0.5] text-red-500">
                      9. Cửa khẩu xuất hàng:
                    </div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className="flex-[0.5]">10. Nước nhập khẩu:</div>
                  </div>
                  <div className={"flex" + borderB}>
                    <div className={"flex-[1]" + borderR}>
                      11. Điều kiện giao hàng:
                    </div>
                    <div className="flex-[1]">12. Phương thức thanh toán:</div>
                  </div>
                  <div className="flex">
                    <div className={"flex-[1]" + borderR}>
                      13. Đồng tiền thanh toán:
                    </div>
                    <div className="flex-[1]">14. Tỷ giá tính thuế:</div>
                  </div>
                </div>
              </div>
              <table className="border-collapse">
                <tbody>
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
                  <tr>
                    <td className="border-b-[1px] border-t-[1px]">1</td>
                    <td className="border-[1px]"></td>
                    <td className="border-[1px]"></td>
                    <td className="border-[1px]"></td>
                    <td className="border-[1px]"></td>
                    <td className="border-[1px]"></td>
                    <td className="border-[1px]"></td>
                    <td className="border-b-[1px] border-t-[1px]"></td>
                  </tr>
                  <tr>
                    <td className="border-b-[1px] border-t-[1px]"></td>
                    <td className="border-b-[1px] border-t-[1px]"></td>
                    <td className="border-b-[1px] border-t-[1px]"></td>
                    <td className="border-b-[1px] border-t-[1px]"></td>
                    <td className="border-b-[1px] border-t-[1px]"></td>
                    <td className="border-b-[1px] border-t-[1px]"></td>
                    <td className="border-b-[1px] border-t-[1px] text-end font-bold">
                      Cộng:
                    </td>
                    <td className="border-b-[1px] border-l-[1px] border-t-[1px]"></td>
                  </tr>
                </tbody>
              </table>

              <table className="border-collapse">
                <tbody>
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
                  <tr>
                    <td className="border-b-0 border-r-[1px] border-t-[1px]">
                      1
                    </td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-l-0 border-r-0"></td>
                  </tr>
                  <tr>
                    <td className="border-0">2</td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-0"></td>
                  </tr>
                  <tr>
                    <td className="border-b-0 border-r-[1px] border-t-[0px]">
                      3
                    </td>
                    <td className="border-[1px] border-t-0"></td>
                    <td className="border-[1px] border-t-0"></td>
                    <td className="border-[1px] border-t-0"></td>
                    <td className="border-[1px] border-t-0"></td>
                    <td className="border-[1px] border-t-0"></td>
                    <td className="border-[1px] border-l-0 border-r-0 border-t-0"></td>
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
                <tbody>
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
                  <tr>
                    <td>1</td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="flex items-end justify-start"></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="flex items-end justify-start"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0"></td>
                    <td className="border-[1px] border-b-0 border-t-0 font-bold">
                      Cộng:
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
