import type { Metadata } from 'next'
import Link from 'next/link'
import { articleSchema, breadcrumbSchema } from '@/lib/seo/schemas'

interface BoardPost {
  id: number
  title: string
  company: string
  category: string
  amount: string
  content: string
  date: string
  thumbnail?: string
}

async function getPost(id: string): Promise<BoardPost | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/board?id=${id}`, {
      cache: 'no-store',
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.post || null
  } catch {
    return null
  }
}

const SITE_URL = 'https://sejin.ai.kr'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const post = await getPost(id)

  if (!post) {
    return {
      title: '게시글을 찾을 수 없습니다 | 세진컨설팅',
      description: '요청하신 성공사례 게시글을 찾을 수 없습니다.',
    }
  }

  const title = `${post.title} | 성공사례 - 세진컨설팅`
  const description = `${post.company} ${post.category} 성공사례. ${post.amount ? `조달 금액: ${post.amount}.` : ''} 세진컨설팅의 정책자금 컨설팅 실적을 확인하세요.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/board/${id}`,
      siteName: '세진컨설팅',
      locale: 'ko_KR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: { canonical: `${SITE_URL}/board/${id}` },
  }
}

export default async function BoardPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = await getPost(id)

  return (
    <>
      {post && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              articleSchema({
                title: post.title,
                description: `${post.company} ${post.category} 성공사례`,
                url: `${SITE_URL}/board/${id}`,
                datePublished: post.date,
                image: post.thumbnail,
              }),
              breadcrumbSchema([
                { name: '홈', url: SITE_URL },
                { name: '성공사례', url: `${SITE_URL}/success` },
                { name: post.title, url: `${SITE_URL}/board/${id}` },
              ]),
            ]),
          }}
        />
      )}

      <style>{`
        .sejin-board-detail{max-width:900px;margin:0 auto;padding:60px 20px}
        .sejin-board-back{display:inline-flex;align-items:center;gap:8px;font-size:15px;font-weight:500;color:var(--gold);text-decoration:none;margin-bottom:32px;transition:all .3s ease}
        .sejin-board-back:hover{transform:translateX(-4px)}
        .sejin-board-back svg{width:18px;height:18px}
        .sejin-board-meta{display:flex;gap:16px;align-items:center;margin-bottom:24px;flex-wrap:wrap}
        .sejin-board-category{display:inline-flex;align-items:center;padding:6px 14px;background:var(--gold-lighter);color:var(--gold-dark);font-size:13px;font-weight:600;border-radius:20px}
        .sejin-board-date{font-size:14px;color:#999}
        .sejin-board-amount{font-size:18px;font-weight:700;color:var(--gold)}
        .sejin-board-title{font-size:32px;font-weight:700;color:var(--body-text);margin-bottom:16px;line-height:1.4}
        .sejin-board-company{font-size:16px;color:#666;margin-bottom:32px}
        .sejin-board-content{font-size:16px;color:#444;line-height:1.8;padding:32px 0;border-top:1px solid var(--gold-lighter);border-bottom:1px solid var(--gold-lighter)}
        .sejin-board-empty{text-align:center;padding:100px 20px;color:#999}
        .sejin-board-empty h2{font-size:24px;font-weight:600;color:var(--body-text);margin-bottom:16px}
        .sejin-board-cta{margin-top:40px;text-align:center}
        @media(max-width:767px){
          .sejin-board-detail{padding:40px 16px}
          .sejin-board-title{font-size:24px}
        }
      `}</style>

      <section className="sejin-board-detail">
        <Link href="/success" className="sejin-board-back">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          성공사례 목록
        </Link>

        {post ? (
          <>
            <div className="sejin-board-meta">
              <span className="sejin-board-category">{post.category}</span>
              <span className="sejin-board-date">{post.date}</span>
              {post.amount && <span className="sejin-board-amount">{post.amount}</span>}
            </div>

            <h1 className="sejin-board-title">{post.title}</h1>
            <p className="sejin-board-company">{post.company}</p>

            <div className="sejin-board-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </>
        ) : (
          <div className="sejin-board-empty">
            <h2>게시글을 찾을 수 없습니다</h2>
            <p>삭제되었거나 존재하지 않는 게시글입니다.</p>
          </div>
        )}

        <div className="sejin-board-cta">
          <Link href="/contact" className="sejin-cta-primary">
            무료 심사 신청하기
          </Link>
        </div>
      </section>
    </>
  )
}
