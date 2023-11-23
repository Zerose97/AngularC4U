import { TypeQuestion } from "../quetions.model";

const regularQuestions = [
    {
        question: 'Mức độ các triệu chứng (có thể) xuất hiện trên da mặt của bạn?',
        shortQuestion: 'Mức độ triệu chứng',
        type: TypeQuestion.Multiple,
        answers: [
            {
                code: 'A',
                text: 'Da có tình trạng sung đỏ, ngứa, thắt chặt',
                type: ''
            },
            {
                code: 'B',
                text: 'Da có chỗ bong tróc hoặc nứt',
                type: ''
            },
            {
                code: 'C',
                text: 'Da mặt bóng nhẫy, cảm thấy bết dính',
                type: ''
            },
            {
                code: 'D',
                text: 'Da nổi mụn viêm, trứng cá và tập trung nhiều ở vùng mũi, má và gò má',
                type: ''
            },
            {
                code: 'E',
                text: 'Lỗ chân lông to tập trung nhiều ở vùng gò mà và cánh mũi',
                type: ''
            }
        ]
    },
    {
        question: 'Da mặt bạn dạo gần đây có dễ nổi thêm mụn hay không?',
        shortQuestion: 'Tình trạng lên mụn',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Hiếm khi nổi mụn'
            },
            {
                code: 'B',
                text: 'Thỉnh thoảng xuất hiện vài nốt'
            },
            {
                code: 'C',
                text: 'Tình trạng nổi mụn thường xuyên'
            }
        ]
    },
    {
        question: 'Dạo này bạn có thường xuyên tiếp vì ra ngoài trời mà tiếp xúc khói bụi liên tục không?',
        shortQuestion: 'Tác động môi trường',
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
        question: '(Nữ - Trên 18 tuổi) Bạn có đang trong thai kì?',
        shortQuestion: 'Thai kì',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Tôi chưa lập gia đình'
            },
            {
                code: 'B',
                text: 'Có'
            },
            {
                code: 'C',
                text: 'Tôi đang ở giai đoạn sau thai kì'
            },
            {
                code: 'D',
                text: 'Không muốn đề cập'
            }
        ]
    },
    {
        question: 'Các sản phẩm chăm sóc da như và trang điểm có dễ làm da mặt bạn nổi mẫn đỏ, ngứa, hay nổi mụn không?',
        shortQuestion: 'Mức độ dị ứng',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Không bao giờ'
            },
            {
                code: 'B',
                text: 'Hiếm khi bị'
            },
            {
                code: 'C',
                text: 'Thường bị'
            },
            {
                code: 'D',
                text: 'Luôn bị'
            }
        ]
    },
    {
        question: 'Trong gia đình bạn có ai từng dị ứng với các sản phẩm tương tự hay không?',
        shortQuestion: 'Di truyền',
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
    {
        question: 'Dựa theo bảng phân loại sắc tố của Fitzpatrick bạn hãy cho biết màu da của bạn thuộc nhóm nào?',
        shortQuestion: 'Fitzpatrick',
        type: TypeQuestion.Color,
        answers: [
            {
                code: 'A',
                text: '#f7dece'
            },
            {
                code: 'B',
                text: '#f3d2a2'
            },
            {
                code: 'C',
                text: '#d5ab88'
            },
            {
                code: 'D',
                text: '#d5ab88'
            },
            {
                code: 'E',
                text: '#af7e57'
            },
            {
                code: 'F',
                text: '#7c533e'
            }
        ]
    },
    {
        question: 'Điều gì xảy ra khi da bạn tiếp xúc với ánh nắng mặt trời?',
        shortQuestion: 'Tác động mặt trời',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Ửng đỏ - Reddens'
            },
            {
                code: 'B',
                text: 'Bỏng rát - Burns'
            },
            {
                code: 'C',
                text: 'Rám nắng - Tans'
            }
        ]
    },
    {
        question: 'Mức độ thường xuyên bôi kem chống nắng khi ở ngoài trời của bạn',
        shortQuestion: 'Kem chống nắng',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Chỉ dùng khi đi du lịch hoặc những lúc cần di chuyển nhiều ngoài trời'
            },
            {
                code: 'B',
                text: 'Mỗi khi ra đường luôn thoa kem'
            },
            {
                code: 'C',
                text: 'Không chỉ ra đường mà ngồi nơi có ánh nắng trực tiếp (ngay cả qua cửa kính) vẫn sử dụng kem chống nắng phù hợp'
            }
        ]
    },
    {
        question: 'Da mặt của bố hoặc mẹ bạn trông như thế nào?',
        shortQuestion: 'Di truyền',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Nhiều hơn những người có cùng độ tuổi với họ'
            },
            {
                code: 'B',
                text: 'Có nếp nhăn nhưng tương đối không nhiều'
            },
            {
                code: 'C',
                text: 'Rất ít, trông trẻ hơn với người cùng độ tuổi'
            }
        ]
    },
]

export const dataQuestionsA = [
    {
        question: 'Bạn trông như thế nào sau khi ngủ',
        shortQuestion: 'Sau khi thức dậy',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Cảm thấy da mặt khô, một số vùng xuất hiện bong tróc nhẹ'
            },
            {
                code: 'B',
                text: 'Cảm thấy dễ chịu, không cảm thấy khô căng hay bóng dầu'
            },
            {
                code: 'C',
                text: 'Cảm thấy có tình trạng bóng dầu , kèm cảm giác nhờn rít / bếch dính'
            },
            {
                code: 'D',
                text: 'Cảm thấy có vùng thì đổ dầu, có vùng thì khô căng hoặc thậm chí bong tróc da'
            }
        ]
    },
    {
        question: 'Điều nào sau đây miêu tả đúng với phong cách sống (thói quen sinh hoạt) và môi trường xung quanh bạn',
        shortQuestion: 'Thói quen sinh hoạt',
        type: TypeQuestion.MultipleRandom,
        answers: [
            {
                code: 'A',
                text: 'Tôi có lối sống năng động và thường xuyên tham gia các hoạt động ngoài trời',
                causeTag: ['SUNLIGHT', 'POPULATION'],
                condition: ['GOOD', 'BAD'],
                type: 'HABIT'
            },
            {
                code: 'B',
                text: 'Tôi thường mát xa mặt hoặc đôi lúc có tới spa để thư giãn',
                causeTag: [],
                condition: ['GOOD'],
                type: 'HABIT'
            },
            {
                code: 'C',
                text: 'Tôi thường xuyên di chuyển vì công việc hoặc đam mê du lịch',
                causeTag: ['SUNLIGHT', 'POPULATION'],
                condition: ['BAD'],
                type: 'HABIT'
            },
            {
                code: 'D',
                text: 'Tôi thường xuyên phải trang điểm',
                causeTag: ['ACNES', 'WRINKLES'],
                condition: ['BAD'],
                type: 'HABIT'
            },
            {
                code: 'E',
                text: 'Tôi có hút thuốc',
                causeTag: ['ACNES'],
                condition: ['BAD'],
                type: 'HABIT'
            },
            {
                code: 'F',
                text: 'Khu tôi đang sống có nhiều cây xanh và không khí tươi mát',
                causeTag: [''],
                condition: ['GOOD'],
                type: 'ENVIRONMENT'
            },
            {
                code: 'G',
                text: 'Tôi sống hoặc làm việc ở môi trường hanh khô (Điều hòa, Khí hậu lạnh, ..)',
                causeTag: ['DRY'],
                condition: ['BAD'],
                type: 'ENVIRONMENT'
            },
            {
                code: 'H',
                text: 'Tôi sống nơi có khí hậu ẩm ướt hoặc làm việc ở môi trường ẩm thấp',
                causeTag: ['HUMID', 'FLAKY'],
                condition: ['BAD'],
                type: 'ENVIRONMENT'
            },
            {
                code: 'J',
                text: 'Tôi sống ở thành thị',
                causeTag: ['SUNLIGHT', 'POPULATION'],
                condition: ['BAD'],
                type: 'ENVIRONMENT'
            },
            {
                code: 'K',
                text: 'Tuyến đường đi làm và (hoặc) môi trường làm việc của tôi có khói bụi nhiều, ngộp',
                causeTag: ['POPULATION'],
                condition: ['BAD'],
                type: 'ENVIRONMENT'
            },
        ]
    },
    {
        question: 'Vùng da ngay cánh mũi của bạn có hay bong tróc da chứ',
        shortQuestion: 'Nasolabial Fold',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Có, nhưng nhẹ thôi'
            },
            {
                code: 'B',
                text: 'Bong tróc nhiều và cảm thấy rát'
            },
            {
                code: 'C',
                text: 'Không có'
            }
        ]
    },
    ...regularQuestions
];

export const dataQuestionsB = [
    {
        question: 'Bạn thuộc nhóm da nào vậy nhỉ',
        shortQuestion: 'Nhóm da',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Dầu'
            },
            {
                code: 'B',
                text: 'Khô'
            },
            {
                code: 'C',
                text: 'Hỗn hợp'
            },
            {
                code: 'D',
                text: 'Trung tính'
            }
        ]
    },
    {
        question: 'Điều nào sau đây miêu tả đúng với phong cách sống và môi trường xung quanh bạn',
        shortQuestion: 'Phong cách sống',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Tôi tin việc da mặt kết hợp và kiên trì sử dụng nhiều sản phẩm mỹ phẩm tốt ở đủ các bước ngày qua ngày là cách tốt nhất cải thiện tình trạng da mặt'
            },
            {
                code: 'B',
                text: 'Hiện tại và trước đây tôi đang thử tự mua hoặc nghe lời khuyên sử dụng kết hợp thêm các loại mỹ phẩm mới lên da để xem da mặt mình có đẹp hơn không '
            }
        ]
    },
    {
        question: 'Những vấn đề về da của bản thân mà bạn đặc biệt quan tâm',
        shortQuestion: 'Vấn đề về da',
        type: TypeQuestion.MultipleRandom,
        answers: [
            {
                code: 'A',
                text: 'Mụn trứng cá và mụn nhọt',
                causeTag: ['DISEASE'],
                condition: [],
                type: ''
            },
            {
                code: 'B',
                text: 'Bệnh trứng cá',
                causeTag: ['DISEASE'],
                condition: [],
                type: ''
            },
            {
                code: 'C',
                text: 'Mụn đầu đen và mụn đầu trắng',
                causeTag: ['DISEASE'],
                condition: [],
                type: ''
            },
            {
                code: 'D',
                text: 'Bệnh chàm',
                causeTag: ['DISEASE'],
                condition: [],
                type: ''
            },
            {
                code: 'E',
                text: 'Bệnh vẩy nến',
                causeTag: ['DISEASE'],
                condition: [],
                type: ''
            },
            {
                code: 'F',
                text: 'Làn da khô ráp, nứt nẻ',
                causeTag: ['DRY'],
                condition: [],
                type: ''
            },
            {
                code: 'G',
                text: 'Mẫn đỏ trên da trắng hoặc Sậm màu trên da nâu/đen, gây ngứa',
                causeTag: ['DRY'],
                condition: [],
                type: ''
            },
            {
                code: 'H',
                text: 'Da căng, đóng vảy và bong tróc từ nhẹ tới nặng',
                causeTag: ['DRY'],
                condition: [],
                type: ''
            },
            {
                code: 'J',
                text: 'Da mất nước',
                causeTag: ['MIS_DRY'],
                condition: [],
                type: ''
            },
            {
                code: 'K',
                text: 'Lớp dầu nhờn trên mặt không đồng đều, nhiều chỗ xỉn màu và thậm chí có dấu hiệu bong tróc',
                causeTag: ['MIS_DRY'],
                condition: [],
                type: ''
            },
            {
                code: 'L',
                text: 'Lỗ chân lông to',
                causeTag: ['OIL'],
                condition: [],
                type: ''
            },
            {
                code: 'M',
                text: 'Đốm đen và Sắc tố da',
                causeTag: ['OIL'],
                condition: [],
                type: ''
            },
            {
                code: 'N',
                text: 'Da bóng bẩy, vùng mũi đổ nhiều dầu nhờn',
                causeTag: ['OIL'],
                condition: [],
                type: ''
            },
            
            {
                code: 'O',
                text: 'Da mặt cảm thấy khô căng mặc dù vẫn bóng nhầy dầu',
                causeTag: ['MIS_OIL'],
                condition: [],
                type: ''
            },
        ]
    },
    {
        question: 'Vùng da ngay cánh mũi của bạn có hay bong tróc da chứ',
        shortQuestion: 'Nasolabial Fold',
        type: TypeQuestion.Normal,
        answers: [
            {
                code: 'A',
                text: 'Có, nhưng nhẹ thôi'
            },
            {
                code: 'B',
                text: 'Bong tróc nhiều và cảm thấy rát'
            },
            {
                code: 'C',
                text: 'Không có'
            }
        ]
    },
    ...regularQuestions
]