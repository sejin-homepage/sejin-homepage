import type { Metadata } from 'next'

const SITE_URL = 'https://sejin.ai.kr'
const SITE_NAME = '세진컨설팅'

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: true, email: true },
  robots: { index: true, follow: true },
}

export const pageMetadata: Record<string, Metadata> = {
  home: {
    title: '세진컨설팅 | 중소기업 정책자금 전문 컨설팅',
    description:
      '중소기업 정책자금 전문 컨설팅 세진컨설팅. 저금리 정책자금, 벤처인증, 이노비즈 인증까지 대표님의 역량을 분석해 맞춤 자금지원 전략을 설계합니다. 무료 심사 신청으로 시작하세요.',
    keywords:
      '정책자금, 경영컨설팅, 자금조달, 정부지원금, 창업자금, 운전자금, 시설자금, 세진컨설팅, 벤처인증, 이노비즈',
    openGraph: {
      title: '세진컨설팅 | 중소기업 정책자금 전문 컨설팅',
      description:
        '저금리 정책자금, 벤처인증, 이노비즈 인증까지. 대표님의 역량을 분석해 맞춤 자금지원 전략을 설계합니다.',
      url: SITE_URL,
      siteName: SITE_NAME,
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '세진컨설팅 | 중소기업 정책자금 전문 컨설팅',
      description:
        '저금리 정책자금, 맞춤 자금조달 전략. 무료 심사 신청하세요.',
    },
    alternates: { canonical: SITE_URL },
  },

  fund: {
    title: '정책자금 컨설팅 | 저금리 정책자금 종류·프로세스 - 세진컨설팅',
    description:
      '창업자금, 운전자금, 시설자금, 긴급자금 등 중소기업 맞춤 정책자금 컨설팅. 연 2~4% 저금리 정책자금으로 자금 부담을 줄이세요.',
    openGraph: {
      title: '정책자금 컨설팅 | 세진컨설팅',
      description:
        '중소기업 맞춤 정책자금 컨설팅. 연 2~4% 저금리 자금조달 전략.',
      url: `${SITE_URL}/fund`,
      siteName: SITE_NAME,
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '정책자금 컨설팅 | 세진컨설팅',
      description: '연 2~4% 저금리 정책자금. 무료 심사 신청.',
    },
    alternates: { canonical: `${SITE_URL}/fund` },
  },
}
