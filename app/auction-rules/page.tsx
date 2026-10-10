import { LegalPage } from "@/components/common/legal-page"

export default function AuctionRulesPage() {
  return (
    <LegalPage
      eyebrow="Quy chế tham gia"
      title="Quy chế đấu giá"
      intro="Khung nội dung mẫu giúp người tham gia hiểu các bước đăng ký, đặt giá và xác nhận kết quả."
      sections={[
        {
          title: "Đăng ký phiên",
          body: "Người tham gia cần đáp ứng điều kiện của từng phiên, xác nhận hồ sơ và hoàn tất nghĩa vụ đặt trước nếu được yêu cầu.",
        },
        {
          title: "Nguyên tắc đặt giá",
          body: "Mỗi mức giá phải đáp ứng giá tối thiểu và bước giá công bố. Giao diện luôn yêu cầu xác nhận trước khi gửi.",
        },
        {
          title: "Kết thúc và kết quả",
          body: "Kết quả, nghĩa vụ thanh toán và bàn giao được xác định theo quy chế chính thức của đơn vị tổ chức phiên.",
        },
      ]}
    />
  )
}
