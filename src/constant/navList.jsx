const NAV_LIST = [
  { label: 'K망 요금제', path: '/KTpaymentsystem' },
  { label: 'L망 요금제', path: '/LGpaymentsystem' },
  {
    label: '개통방법',
    path: '/activation-method',
    dropdown: [
      { label: 'K망 개통방법', path: '/activation-method/KT' },
      { label: 'L망 개통방법', path: '/activation-method/LG' },
    ],
  },
  { label: '상담 문의', path: '/chat' },
];

export default NAV_LIST;
