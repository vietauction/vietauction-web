import { LegalPage } from "@/components/common/legal-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quy định gửi tài sản",
  description: "Nguyên tắc tiếp nhận và thẩm định tài sản trên VietAuction.",
  alternates: { canonical: "/seller-rules" },
}

export default function SellerRulesPage() {
  return (
    <LegalPage
      eyebrow="Dành cho người sở hữu"
      title="Quy định gửi tài sản"
      intro="Các nguyên tắc cơ bản khi gửi tài sản để tiếp nhận, thẩm định và đề xuất tổ chức đấu giá."
      sections={[
        {
          title: "Thông tin trung thực",
          body: "Người gửi cần mô tả đúng tình trạng, quyền sở hữu, nguồn gốc và các hạn chế liên quan đến tài sản.",
        },
        {
          title: "Hình ảnh và tài liệu",
          body: "Hình ảnh cần rõ nét, phản ánh đúng hiện trạng. Tài liệu hỗ trợ phải phù hợp với danh mục và yêu cầu thẩm định.",
        },
        {
          title: "Thẩm định và quyết định tiếp nhận",
          body: "Việc gửi hồ sơ không đồng nghĩa tài sản chắc chắn được tiếp nhận hoặc tổ chức đấu giá. Kết quả phụ thuộc quy trình đánh giá chính thức.",
        },
      ]}
    />
  )
}
