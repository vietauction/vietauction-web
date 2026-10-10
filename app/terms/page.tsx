import { LegalPage } from "@/components/common/legal-page"

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Thông tin pháp lý"
      title="Điều khoản dịch vụ"
      intro="Những nguyên tắc chung khi sử dụng giao diện và tham gia các luồng đấu giá trên VietAuction."
      sections={[
        {
          title: "Phạm vi sử dụng",
          body: "Người dùng chịu trách nhiệm cung cấp thông tin chính xác và sử dụng nền tảng đúng mục đích. Bản frontend hiện tại không tạo giao dịch pháp lý hoặc tài chính thật.",
        },
        {
          title: "Tài khoản và bảo mật",
          body: "Thông tin đăng nhập, quyền truy cập và xác minh danh tính sẽ được quy định chi tiết khi hệ thống kỹ thuật chính thức được tích hợp.",
        },
        {
          title: "Trách nhiệm của người tham gia",
          body: "Người tham gia cần đọc hồ sơ tài sản, quy chế phiên và các khoản phí được công bố trước khi xác nhận đăng ký hoặc đặt giá.",
        },
      ]}
    />
  )
}
