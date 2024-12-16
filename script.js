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
    functionality: "Cup cấp vi sinh có lợi, cân bằng men tiêu hóa đường ruột, tăng khả năng chuyển hóa các chất dinh dưỡng.",
    usage: "Cho ăn định kỳ 5ml/1kg thức ăn, ngày 1 lần trong suốt vụ nuôi."
  },
  {
    title: "BENFIS.R",
    price: "DIỆT KHUẨN AO NUÔI",
    image: "image/BENFIS.R_2LIT.CAN.png",
    functionality: "Bổ sung muối Acid Formic, ức chế vi khuẩn gây bệnh, ngăn ngừa bệnh đường ruột, tăng khả năng hấp thụ thức ăn",
    usage: "Sử dụng định kỳ 5g/1kg thức ăn trong các bữa ăn hằng ngày cho tôm-cá."
  },
  {
    title: "BEST",
    price: "DỊCH TỎI ĐEN",
    image: "image/BEST_1L.CHAI.jpg",
    functionality: "Bổ sung lợi khuẩn và enzyme tiêu hóa, bổ sung các vi khuẩn có lợi, ức chế vi sinh có hại cho đường ruột, nâng cao khả năng tiêu hóa.",
    usage: "Sử dụng 3-5ml/1kg thức ăn thường xuyên trong quá trình nuôi để ổn định đường ruột."
  },
  {
    title: "BETA.PRO",
    price: "MEN TIÊU HÓA",
    image: "image/BETA.PRO_1LIT. CHAI.jpg",
    functionality: "Bổ sung dưỡng chất, Tăng sức đề kháng cho tôm cá và động vật thủy sản.",
    usage: "Dùng 2-5g/kg thức ăn, ngày 1 lần trong suốt vụ nuôi."
  },
  {
    title: "BIO-FUCA",
    price: "MEN TIÊU HÓA",
    image: "image/BIO-FUCA_500G.jpg",
    functionality: "Ức chế vi khuẩn gây bệnh, nông to đường ruột.",
    usage: "Sử dụng thường xuyên trong suốt vụ nuôi 3-5g/1kg thức ăn giúp ổn định hệ tiêu hóa."
  },
  {
    title: "BKC 1 LIT",
    price: "DIỆT KHUẨN - CẮT TẢO",
    image: "image/BKC _1LIT.jpg",
    functionality: "Diệt vi khuẩn trong ao nuôi, giảm hiện tượng đứt râu, mòn đuôi, đen mang, sưng mang, hồng mang, diệt tảo độc, tảo lam, tảo đỏ,...",
    usage: "Giảm tảo, làm sạch váng nhớt dùng 1 lít/3.000m3 - Diệt khuẩn dùng 1 lít/2.000m3 - Định kỳ dùng 1 lít/3.000-5.000m3."
  },
  {
    title: "BKC 2 LIT",
    price: "DIỆT KHUẨN - CẮT TẢO",
    image: "image/BKC_2LIT.jpg",
    functionality: "Diệt vi khuẩn trong ao nuôi, giảm hiện tượng đứt râu, mòn đuôi, đen mang, sưng mang, hồng mang, diệt tảo độc, tảo lam, tảo đỏ,...",
    usage: "Giảm tảo, làm sạch váng nhớt dùng 1 lít/3.000m3 - Diệt khuẩn dùng 1 lít/2.000m3 - Định kỳ dùng 1 lít/3.000-5.000m3."
  },
  {
    title: "BZT GOLDTIC",
    price: "MEN VI SINH SỬ LÝ ĐÁY CAO CẤP",
    image: "image/BZT GOLDTIC_300G.jpg",
    functionality: "Triệt tiêu khí độc, làm sạch bùn đen đáy ao, phân hủy nhanh mùn bã hữu cơ.",
    usage: "Sử dụng 300g/10.000m3 nước trước khi thả tôm 3 ngày."
  },
  {
    title: "BZT PONMAX",
    price: "VI SINH SỬ LÝ ĐÁY CAO CẤP",
    image: "image/BZT-PONMAX_300G.jpg",
    functionality: "Làm sạch bùn đen đáy ao, sạch nhớt ao bạt,...",
    usage: "Sử dụng 300g/7.000m3 nước trước khi thả tôm 3 ngày."
  },
  {
    title: "CALPHOS",
    price: "KHOÁNG TỔNG HỢP CAO CẤP",
    image: "image/CALPHOS_01LIT.jpg",
    functionality: "Cung cấp khoáng chất cho sự phát triển chủa tôm, ngăn ngừa tình trạng ốp thân, mềm vỏ, cỏ xanh da trời,...",
    usage: "Cho ăn 3-5ml/1kg thức ăn, ngày 1 lần."
  },
  {
    title: "CANXI FOOD",
    price: "KHOÁNG ĂN CAO CẤP",
    image: "image/CANXI FOOD_1KG.jpg",
    functionality: "Cung cấp khoáng chất và vitamin cần thiết, giúp tôm nhanh lột xác, bóng vỏ, chắc vỏ,...",
    usage: "Dùng 2-3g/1kg thức ăn, cho ăn liên tục đến khi thu hoạch."
  },
  {
    title: "CITINPHOS 1 LÍT",
    price: "KHOÁNG ĂN DẠNG NƯỚC CAO CẤP",
    image: "image/CITINPHOS_1LIT.jpg",
    functionality: "Bổ sung khoáng chất và vitamin thiết yếu, khắc phục tình trạng mềm vỏ, khó lột xác,....",
    usage: "Dùng 3-5ml/1kg thức ăn, ngày 1 lần. Tạt trức tiếp dùng 1 lít/2.000-3.000m3 nước."
  },
  {
    title: "CITINPHOS 5 LÍT",
    price: "KHOÁNG ĂN DẠNG NƯỚC CAO CẤP",
    image: "image/CITINPHOS_5LIT.jpg",
    functionality: "Bổ sung khoáng chất và vitamin thiết yếu, khắc phục tình trạng mềm vỏ, khó lột xác,....",
    usage: "Dùng 3-5ml/1kg thức ăn, ngày 1 lần. Tạt trức tiếp dùng 1 lít/2.000-3.000m3 nước."
  },
  {
    title: "ECO ZYME",
    price: "MEN TIÊU HÓA CAO CẤP",
    image: "image/ECO-ZYME_500G.jpg",
    functionality: "Bổ sung Protease và Arginine vào thức ăn thủy sản, giúp tăng cường khả năng tiêu hóa và hấp thụ thức ăn,...",
    usage: "Dùng 3-5g/1kg thức ăn. Giai đoạn thúc lớn, cho ăn liều gấp đôi."
  },
  {
    title: "HEPA PHOTICS",
    price: "BỔ GAN CAO CẤP",
    image: "image/HEPA PHOTICS_500G.jpg",
    functionality: "Bổ sung Vitamin cần thiết cho tủy vật nuôi, tăng cường khả năng sinh trưởng và phát triển của tôm-cá, tăng cường chức năng gan tụy trên tôm.",
    usage: "Dùng 3-5g/1kg thức ăn."
  },
  {
    title: "HEPA GO",
    price: "BỔ GAN - GIẢI ĐỘC GAN",
    image: "image/HEPA-GO_500G.jpg",
    functionality: "Bổ gan, giải độc gan tụy và ổn định chức năng gan, ức chế sự hủy hoại của tế bào gan,....",
    usage: "Dùng định kỳ bổ dung 3-5g/1kg thức ăn trong suốt vụ nuôi."
  },
  {
    title: "HI TECH",
    price: "SẠCH ĐỐM ĐEN - SẠCH KHUẨN GÂY BỆNH",
    image: "image/HI TECH_1LIT.jpg",
    functionality: "Xử lý và sát trung nước trong ao tôm, cá. Tiêu diệt virus, vi khuẩn gây bệnh trên tôm cá,...",
    usage: "Dùng định kỳ: 1 lít/4.000m3 nước, ngày 1 lần"
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
