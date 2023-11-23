import { TypeQuestion } from "../quetions.model";

export const section3Questions = [
    {
        question: ' Có mục tiêu nào dưới đây tụi mình có thể giúp bạn đạt được không nè?',
        type: TypeQuestion.Multiple,
        answers: [
            {
                code: 'A',
                text: 'Giảm <các triệu chứng điển hình của loại da người dùng>'
            },
            {
                code: 'B',
                text: 'Dứt điểm tình trạng nổi mụn và Cải thiện sẹo mụn'
            },
            {
                code: 'C',
                text: 'Tối giản chu trình chăm sóc da'
            },
            {
                code: 'D',
                text: 'Theo đổi chu trình chăm sóc da'
            },
            {
                code: 'E',
                text: 'Tìm thêm các sản phẩm chăm sóc phù hợp cho da của bản thân'
            }
        ]
    },
    {
        question:  'Có thể chia sẻ với mình điều gì đang ngăn cản bạn đạt được mục tiêu trên không?',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Không biết bắt đầu từ đâu'
            },
            {
                code: 'B',
                text: 'Thiếu sự hỗ trợ'
            },
            {
                code: 'C',
                text: 'Lịch trình quá bận'
            },
            {
                code: 'D',
                text: 'Các thói quen không tốt cho sức khỏe'
            },
            {
                code: 'E',
                text: 'Khum'
            }
        ]
    },
    {
        question: 'Bạn có thường xuyên tập thể dục tối thiểu 15 phút mỗi ngày chứ?',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Có'
            },
            {
                code: 'B',
                text: 'Không'
            }
        ]
    },
    {
        question: 'Bên cạnh việc chơi thể thao thì cường độ hoạt động của bạn mỗi ngày ở mức nào nhỉ?',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Hầu như không có hoạt động thể chất nào đáng kể'
            },
            {
                code: 'B',
                text: 'Có vài hoạt động mức độ nhẹ nhàng (Đi bộ quanh công viên, Đẩy xe em bé, …)'
            },
            {
                code: 'C',
                text: 'Các hoạt động ở trung bình (Làm vườn, Leo cầu thang dưới 3 tầng, …)'
            },
            {
                code: 'D',
                text: 'Nhiều hoạt động nặng (Khuân vác, Bưng đồ nặng, Leo cầu thang trên 7 tầng, …)'
            }
        ]
    },
    {
        question: 'Bạn có đang sử dụng thuốc hay đang trong quá trình điều trị y tế hay không?',
        type: TypeQuestion.Typing,
        answers: [
            {
                code: 'A',
                text: 'Có'
            },
            {
                code: 'B',
                text: 'Không'
            }
        ]
    },
    {
        question: 'Bạn có đang điều trị bệnh lý nào về da hiện tại hay không?',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Có'
            },
            {
                code: 'B',
                text: 'Không'
            },
            {
                code: 'C',
                text: 'Tôi không rõ'
            }
        ]
    },
]
