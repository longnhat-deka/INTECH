document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("search-box");
  const products = document.querySelectorAll(".product");

  // Lọc sản phẩm dựa trên từ khóa tìm kiếm
  searchBox.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim(); // Từ khóa tìm kiếm, loại bỏ khoảng trắng

    products.forEach((product) => {
      const productTitle = product.querySelector("h2")?.textContent.toLowerCase() || ""; // Tiêu đề sản phẩm
      const productDescription = product.querySelector("p")?.textContent.toLowerCase() || ""; // Mô tả sản phẩm

      // Hiển thị sản phẩm nếu tiêu đề hoặc mô tả khớp với từ khóa tìm kiếm
      if (productTitle.includes(searchTerm) || productDescription.includes(searchTerm)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const detailButtons = document.querySelectorAll(".product button");
  const modal = document.createElement("div");

  // Tạo modal chi tiết sản phẩm
  modal.id = "product-modal";
  modal.style.display = "none";
  modal.innerHTML = `
  <div class="modal-content modern-modal">
    <span class="close-button">&times;</span>
    <div class="modal-header">
      <h2 id="modal-title"></h2>
    </div>
    <div class="modal-body">
      <img id="modal-image" src="" alt="Product Image" />
      <div class="modal-info">
        <p><strong><span id="modal-price"></span></strong></p>
        <p><strong>Công dụng:</strong> <span id="modal-functionality"></span></p>
        <p><strong>Hướng dẫn sử dụng:</strong> <span id="modal-usage"></span></p>
      </div>
    </div>
  </div>
  `;
  document.body.appendChild(modal);

  const closeButton = modal.querySelector(".close-button");

  // Hiển thị modal
  detailButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = productData[index];
      document.getElementById("modal-title").textContent = product.title;
      document.getElementById("modal-image").src = product.image;
      document.getElementById("modal-price").textContent = `${product.price}`;
      document.getElementById("modal-functionality").textContent = `${product.functionality}`;
      document.getElementById("modal-usage").textContent = `${product.usage}`;
      

      modal.style.display = "block";
    });
  });

  // Đóng modal
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Đóng modal khi nhấp ra ngoài nội dung
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Thêm hướng dẫn sử dụng:
const productData = [
  {
    title: "AMINPHOS",
    price: "KHOÁNG - VITAMIN TỔNG HỢP",
    image: "image/AMINPHOS_1LIT.CHAI.jpg",
    functionality: "Cung cấp khoáng chất và các acid amin cần thiết yếu cho tôm, cá phát triển tốt, bổ gan bổ máu, chống còi",
    usage: "Tạt trực tiếp xuống ao 1L/1.000-2.000m3"
  },
  {
    title: "BENFIS.R",
    price: "DIỆT KHUẨN AO NUÔI",
    image: "image/BENFIS.R_2LIT.CAN.png",
    functionality: "Tẩy ký sinh trùng Gregarine trong ruột tôm, cá. Ức chế và tiêu diệt nhanh vi khuẩn gây ra bệnh phân trăng trong ao nuôi.",
    usage: "Dùng để phòng: 7 ngày 1 lần, 1 lần 1L/3.000m3. Dùng khi xuất hiện phân trắng: Liên tục sáng chiều 2 lần trong ngày, 1 lần 1L/2.000m3."
  },
  {
    title: "BEST",
    price: "DỊCH TỎI ĐEN",
    image: "image/BEST_1L.CHAI.jpg",
    functionality: "Xử lý hoại tử cơ, đốm đỏ, vàng gan, sưng gan, nhiễm trùng. Ngừa phân trắng, phân lỏng, nhiễm khuẩn đường ruột.",
    usage: "Sử dụng 2-5ml/1kg thức ăn thường xuyên trong quá trình nuôi để phòng bệnh. Khi tôm bệnh dùng liều gấp đôi."
  },
  {
    title: "BETA.PRO",
    price: "MEN TIÊU HÓA",
    image: "image/BETA.PRO_1LIT. CHAI.jpg",
    functionality: "Cung cấp vi sinh vật có lợi, cạnh tranh, ức chế vi khuẩn có hại. Tăng khả năng chuyển hóa thức ăn.",
    usage: "Dùng 2-5g/kg thức ăn, ngày 1 lần trong suốt vụ nuôi."
  },
  {
    title: "BIO.ZYME",
    price: "VI SINH XỬ LÝ TẢO",
    image: "image/BIO.ZYME_500G. GÓI.jpg",
    functionality: "BIO.ZYME là sản phẩm đặc biệt ức chế vi khuẩn có hại gây ra các bệnh về đường ruột, cải tạo nhanh môi trường, sạch nhớt áo bạt, ức chế vi sinh vật gây bệnh.",
    usage: "Sử dụng 500g/5.000m3 trước khi thả tôm 3 ngày. "
  },
  {
    title: "BZT BACILLUS MAX",
    price: "VI SINH SỬ LÝ ĐÁY AO CAO CẤP",
    image: "image/BZT BACILLUS MAX_300G.GÓI.jpg",
    functionality: "Chuyên gia xử lý đáy ao, làm giảm ngay nồng độ khí độc NH3, NO2, H2O,... khử mùi hôi trong ao nuôi.",
    usage: "Sử dụng 300g/5.000m3 trước khi thả tôm 3 ngày."
  },
  {
    title: "BZT XL",
    price: "VI SINH THẾ HỆ MỚI",
    image: "image/BZT XL_300G.GÓI.jpg",
    functionality: "Chuyên gia xử lý đáy ao, làm sạch bùn đen, sạch nhớt ao bạt. Phân hủy nhanh thức ăn dư thừa, ức chế vi sinh vật gây bệnh phát triển.",
    usage: "Sử dụng 300g/5.000-10.000M3 trước khi thả tôm 3 ngày."
  },
  {
    title: "CLEAR SHR",
    price: "XỬ LÝ NẤM - ĐỐM ĐEN",
    image: "image/CLEAR SHR_1L.CHAI.jpg",
    functionality: "Xử lý hiện tượng đốm đen, sát trùng nước trong ao nuôi tôm, ức chế vi sinh vật gây bệnh",
    usage: "Dùng định kỳ: 1L/5.000m3 10 ngày 1 lần."
  },
  {
    title: "FEN RS19",
    price: "XỬ LÝ CÁC LOẠI NẤM ĐỘC",
    image: "image/FEN RS19_1L.CHAI.jpg",
    functionality: "Chuyên gia xử lý các loại nấm, giải pháp hữu hiệu với các bệnh loét mình, đen mang…..",
    usage: "Dùng định kỳ: 1L/3.000-4.000m3 7 ngày đến 10 ngày 1 lần trong suốt quá trình nuôi."
  },
  {
    title: "GAN-Z",
    price: "GAN TẠT CAO CẤP",
    image: "image/GAN-Z_1LIT.CHAI.jpg",
    functionality: "Thảo dược giúp tái tạo, phục hồi nhanh các biểu mô gan tụy phòng ngừa các bệnh về gan. Hỗ trợ cải thiện sức khỏe, màu sắc gan tụy trong điều kiện thời tiết thay đổi, khắc phục hiện tượng gan yếu, gan xấu, vàng gan.",
    usage: "Dùng định kỳ 1 lít cho 1.500-3.000m3 5 ngày một lần."
  },
  {
    title: "HEPA VIRO",
    price: "BỔ GAN CAO CẤP",
    image: "image/CANXI FOOD_1KG.jpg",
    functionality: "Giải độc gan, tăng cường chức năng gan tụy. Kích thích tôm ăn mạnh, chống còi. Khống chế các loại vi khuẩn, virus như vi bào tử, ký sinh trùng...",
    usage: "Định kỳ: Dùng 2-5g/kg thức ăn, cho ăn mỗi ngày một cữ, liên tục cho đến hết vụ nuôi."
  },
  {
    title: "LACTOMIN",
    price: "MEN TIÊU HÓA CAO CẤP",
    image: "image/LACTOMIN_500G.LON.png",
    functionality: "Cung cấp chất dinh dưỡng cần thiết cho sự sinh trưởng và phát triển của tôm-cá. Tăng sức kháng bệnh, giảm hàm lượng đạm thừa trong phân, không gây ô nhiễm môi trường nước.",
    usage: "Sử dụng định kỳ, bổ sung 3-4g/kg thức ăn trong suốt vụ nuôi."
  },
  {
    title: "LIVER-URA",
    price: "GAN THẢO DƯỢC",
    image: "image/LIVER-URA_1LIT.CHAI.jpg",
    functionality: "Bổ gan, giải độc gan tụy và ổn định chức năng gan. Ức chế sự hủy hoại tế bào gan, cải thiện nhanh sự suy giảm chức năng gan và các triệu chứng sưng gan, teo gan, vàng gan.",
    usage: "Dùng định kỳ 3-5ml/kg thức ăn ngày 2 lần trong suốt vụ nuôi."
  },
  {
    title: "MEGA.3",
    price: "MEN TIÊU HÓA",
    image: "image/MEGA.3_500G.HŨ.jpg",
    functionality: "Bổ sung men tiêu hóa trong bữa ăn cho tôm cá hàng ngày, tăng sức đề kháng, ức chế các loại vi khuẩn có hại, tạo chuỗi vi sinh có lợi cho hệ tiêu hóa.",
    usage: "Sử dụng thường xuyên trong suốt quá trình nuôi 3-5g/kg thức ăn giúp ổn định hệ tiêu hóa."
  },
  {
    title: "ONEMIX5",
    price: "KHOÁNG ĐA VI LƯỢNG",
    image: "image/ONEMIX5_5KG.GÓI.jpg",
    functionality: "Bổ sung khoáng chất cần thiết cho tôm cá, giúp tôm cá tăng trưởng nhanh, tăng năng suất. Xử lý triệu chứng cong thân, đục thân, xanh da trời, ốp vỏ, mềm vỏ kinh niên.",
    usage: "Xử lý cong thân: tạt 2kg/1.000m³ nước, định kỳ 2-3 ngày một lần."
  },
  {
    title: "ONEMIX10",
    price: "KHOÁNG ĐA VI LƯỢNG",
    image: "image/ONEMIX10_10KG.BAO.jpg",
    functionality: "Bổ sung khoáng chất cần thiết cho tôm cá, giúp tôm cá tăng trưởng nhanh, tăng năng suất. Xử lý triệu chứng cong thân, đục thân, xanh da trời, ốp vỏ, mềm vỏ kinh niên.",
    usage: "Xử lý cong thân: tạt 2kg/1.000m³ nước, định kỳ 2-3 ngày một lần."
  },
  {
    title: "VITAMINO",
    price: "VITAMIN TỔNG HỢP",
    image: "image/VITAMINO_1LIT. CHAI.jpg",
    functionality: "Tăng cường quá trình trao đổi chất, hỗ trợ quá trình tăng trưởng và phát triển của tôm, cá. Bồi bổ nhanh sức khỏe, làm tăng khả năng miễn dịch, ngăn ngừa các loại bệnh.",
    usage: "Tạt trực tiếp xuống ao nuôi 1 lít/3.000m3 nước khi tôm yếu do thời tiết thay đổi đột ngột. Tạt trực tiếp xuống ao nuôi 1 lít/2.000m3 nước khi sang tôm hoăc thu tỉa tôm trước 2 giờ."
  },
  {
    title: "IODINE 99",
    price: "DIỆT KHUẨN NẤM VÀ BÀO TỬ TRÙNG",
    image: "image/IODINE 99_1LIT.jpg",
    functionality: "Sát trùng phổ rộng, diệt khuẩn cực mạnh, tiêu diệt vi khuẩn có hại, nấm nguyên sinh động vật,....",
    usage: "Dùng định kỳ 1 lít/3.000-5.000m3 nước, 7-10 ngày/lần cho ao nuôi "
  },
  {
    title: "LIVER PHOTICS",
    price: "SÁT TRÙNG - DIỆT KHUẨN",
    image: "image/LIVER PHOTICS_1L.jpg",
    functionality: "Sát trùng phổ rộng, diệt khuẩn cực mạnh, tiêu diệt vi khuẩn có hại, nấm nguyên sinh động vật,....",
    usage: "Bảo vệ hệ tiêu hóa và chức năng gan cho tôm cá."
  },
  {
    title: "MIX ONE PRO",
    price: "KHOÁNG TỎI",
    image: "image/MIX ONE PRO (KH - TỎI) 5KG,10kg.jpg",
    functionality: "Giúp ổn định môi trường, giữ ấm cho cơ thể lúc nhiệt độ xuống thấp, dễ dàng hấp thụ, cung cấp khoáng chất cần thiết cho tôm trng quá trình lột xác.",
    usage: "Dùng định kỳ 5kg cho 3.000-5.000m3 nước."
  },
  {
    title: "ORGANs1",
    price: "GAN TẠT CAO CẤP",
    image: "image/ORGANs1_01LIT.jpg",
    functionality: "Tái tạo tế bào gan, tăng chức năng gan tụy",
    usage: "Dùng 3-5ml/1kg thức ăn cho ăn ngày 1 lần trong suốt vụ nuôi."
  },
  {
    title: "PREMIX",
    price: "SIÊU KHOÁNG",
    image: "image/PREMIX_10KG.jpg",
    functionality: "Bổ sung khoáng chất giúp tôm lột xác, cứng vỏ.",
    usage: "Sử dụng 10kg/5.000-7.000m3, định kỳ 7-10 ngày một lần."
  },
  {
    title: "S4000",
    price: "XỬ LÝ CÁC LOẠI NẤM",
    image: "image/S4000_1LÍT.jpg",
    functionality: "Xử lý các loại nấm trong ao (Nấm đồng tiền, nấm chân chó), loại bỏ đóng rong, đóng nhớt, đen mang trên tôm cá,...",
    usage: "Dùng định kỳ 1 lít cho 3.000-4.000m3 nước."
  },
  {
    title: "SODA MAX",
    price: "KHOÁNG TĂNG KIỀM",
    image: "image/SODA MAX_05KG.jpg",
    functionality: "Tăng kiềm, ổn định độ pH trong ao, giúp tôm nahnh cứng vỏ, kháng bệnh tốt,...",
    usage: "Dùng 5kg cho 3.000-5000m3 nước, định kỳ 5-7 ngày 1 lần."
  },
  {
    title: "SUPER CUT ALGAR",
    price: "CẮT TẢO XANH, TẢO ĐỎ",
    image: "image/SUPER CUT ALGAR_500G.jpg",
    functionality: "Diệt tảo xanh, hạn chế sự phát triển của tảo và rong rêu trong ao nuôi. Sản phẩm cắt tảo theo cơ chế sinh học không gây sốc cho tôm.",
    usage: "Dùng định kỳ để giảm bớt tảo già và sạch nước: 500g/3.000-5.000m3 nước, 7 ngày 1 lần vào lức 9-10h sáng."
  },
  {
    title: "SUPER GOLD",
    price: "DIỆT KHUẨN TRÊN GAN TỤY",
    image: "image/SUPER GOLD_1LIT.jpg",
    functionality: "Ngăn ngừa hội chứng chết sớm ở tôm giai đoạn 14 đến 60 ngày tuổi, hiệu quả cao với hiện tượng hoại tử gan tụy, sưng gan,...",
    usage: "Dùng 1 lít cho 3.000-4.000m3 nước, liên tục 2 ngày."
  },
  {
    title: "SUPER GROW",
    price: "TĂNG TRỌNG - TĂNG CƯỜNG MIỄN DỊCH",
    image: "image/SUPER GROW_1 LIT.jpg",
    functionality: "Bổ sung vitamin cần thiết cho tôm cá, tăng cường sức đề kháng, hỗ trợ và thức đẩy sự phát triển cho đàn thủy sản,...",
    usage: "Cho ăn định kỳ 5-7ml/1kg thức ăn, ngày 1 lần."
  },
  {
    title: "THIO MAX",
    price: "KHỬ KIM LOẠI NẶNG - KHỬ ĐỘC NƯỚC",
    image: "image/THIO MAX_01KG.jpg",
    functionality: "Khử kim loại nặng tồn dư trong ao nuôi, khử độc nước. Giúp tôm nhanh lột xác.",
    usage: "Xử lý định kỳ: 1kg/3.500-4.000m3 nước, 5-7 ngày 1 lần."
  },
  {
    title: "VITA MILK",
    price: "TĂNG CƯỜNG SỨC ĐỀ KHÁNG",
    image: "image/VITA MILK_1LIT.jpg",
    functionality: "Bồi bổ nhanh sức khỏe, làm tăng khả năng miễn dịch, ngăn ngừa cadc loại bệnh,...",
    usage: "Dùng cho tôm mẹ: 2ml/kg thức ăn. Dùng cho tôm thịt: 3ml/kg thức ăn, cho ăn liên tục trong suốt quá trình nuôi."
  },
  {
    title: "YUCCA C",
    price: "CHỐNG SỐC - ỔN ĐỊNH MÔI TRƯỜNG",
    image: "image/YUCCA C_3KG.jpg",
    functionality: "Giảm stress cho tôm, cá khi thời tiết xấu và thay đổi đột ngột. Cải thiện tốc độ tăng trưởng cho tôm.",
    usage: "Dùng trước khi thả tôm cá, sử dụng 1kg/1.000-2.000m3 nước. Sử dụng định kỳ 1kg cho 3.000-4.000m3 nước, 5-7 ngày 1 lần."
  },
  {
    title: "YUCCA NEW",
    price: "HẤP THỤ KHÍ ĐỘC",
    image: "image/YUCCA NEW_1LIT.jpg",
    functionality: "Hấp thụ khí độc, cấp cứu tôm cá nổi đầu. Sản phẩm có thể dùng cho ăn phòng bệnh đường ruột.",
    usage: "Pha 1 lượng nước vừa đủ, tạt đều khắp ao. Định kỳ dùng 1 lít/6.000-8.000m3 nước, 2 lần 1 tuần."
  }
];
