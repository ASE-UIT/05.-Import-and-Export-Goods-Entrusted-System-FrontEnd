import React from "react";

const ImportExportForm = () => {
  return (
    <div className="container mx-auto p-6 max-w-screen-lg">
      <div
        className="border rounded shadow-lg p-6 max-h-[80vh] overflow-y-auto"
        style={{
          maxWidth: "1000px",
        }}
      >
        <div className="text-center mb-4">
          <h1 className="font-bold uppercase text-lg">
            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
          </h1>
          <h3 className="font-semibold">Độc lập - Tự do - Hạnh phúc</h3>
          <hr className="my-2 border-black" />
        </div>

        {/* Thủ trưởng */}
        <div className="text-center mb-4">
          <h2>Thủ trưởng ...................</h2>
        </div>

        <div className="mb-4">
          <p>Căn cứ Luật Phòng, chống ma túy ngày 30 tháng 3 năm 2021;</p>
          <p>
            Căn cứ Nghị định số .../ND-CP ngày ... tháng ... năm 2021 của Chính
            phủ quy định chi tiết và hướng dẫn thi hành một số điều của Luật
            Phòng, chống ma túy:
          </p>

          <p>
            Căn cứ Quyết định số:... ngày...tháng...năm ... của ...về việc quy
            định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của ...
          </p>
          <p>
            Xét đơn đề nghị cấp Giấy phép nhập khẩu (xuất khẩu)... tại hồ sơ số
            ...... ngày...tháng...năm... của
          </p>
          <p>
            Theo đề nghị của
            ............................................................................................................{" "}
          </p>
        </div>

        <h3 className="font-bold mb-2">QUYẾT ĐỊNH:</h3>
        <h4 className="font-semibold mb-2">Điều 1:</h4>

        {/* Điều 1 */}
        <div className="mb-4">
          <p>
            1. Công ty .......... trụ sở tại: ............, điện thoại:
            .........., số fax: ............, Giấy phép kinh doanh số:
            ............. do: ............... cấp ngày .... tháng .... năm ....,
            được phép:
          </p>
        </div>

        <h4 className=" mb-2">
          1. Nhập khẩu (xuất
          khẩu):........................................................................
        </h4>

        <h4 className=" mb-2">
          2. Mục đích nhập khẩu (xuất
          khẩu):........................................................................
        </h4>

        <h4 className=" mb-2">
          3. Cửa khẩu nhập khẩu (xuất
          khẩu):........................................................................
        </h4>

        <h4 className=" mb-2">
          4. Phương tiện và điều kiện vận
          chuyển:........................................................................
        </h4>

        <h4 className=" mb-2">
          5. Thời gian thực hiện nhập khẩu (xuất khẩu) dự
          kiến:........................................................................
        </h4>

        <h4 className=" mb-2">
          6. Số lần thực hiện nhập khẩu (xuất
          khẩu):........................................................................
        </h4>

        {/* Các điều khác */}
        <h4 className="font-semibold mb-2">Điều 2:</h4>
        <p>
          Công ty ........... có trách nhiệm thực hiện đúng quy định của Luật
          Phòng, chống ma túy; Nghị định số... /NĐ-CP ngày ...tháng... năm 2021
          của Chính phủ quy định chi tiết và hướng dẫn thi hành một số điều của
          Luật Phòng, chống ma túy và ....
        </p>

        <h4 className="font-semibold mb-2">Điều 3:</h4>
        <div className="mb-4">
          <p> Giấy phép này có giá trị đến hết ngày...tháng... năm..../.</p>
        </div>
      </div>
    </div>
  );
};

export default ImportExportForm;
