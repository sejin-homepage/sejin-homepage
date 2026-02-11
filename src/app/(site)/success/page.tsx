import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export default function SuccessPage() {
  return (
    <>
      <style>{`
        .sejin-success-hero{background:linear-gradient(135deg,#FFFFFF 0%,var(--sejin-bg-ivory) 100%);padding:0;margin:0;min-height:auto;position:relative}
        .sejin-success-hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 0%,var(--sejin-primary-pale) 50%,transparent 100%)}
        .sejin-success-hero-container{max-width:1200px;margin:0 auto;padding:60px 48px;display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center}
        .sejin-success-hero-content{max-width:600px}
        .sejin-success-hero-headline{font-size:48px;font-weight:700;color:var(--sejin-text-primary);line-height:1.25;margin-bottom:20px;letter-spacing:-0.02em;animation:fadeInUp .6s ease-out .1s both}
        .sejin-success-hero-subheadline{font-size:18px;color:#666;line-height:1.7;margin-bottom:36px;animation:fadeInUp .6s ease-out .2s both}
        .sejin-success-hero-cta-group{display:flex;gap:16px;flex-wrap:wrap;animation:fadeInUp .6s ease-out .3s both}
        .sejin-success-hero-visual{display:flex;align-items:center;justify-content:center;animation:fadeIn .8s ease-out .5s both}
        .sejin-success-hero-visual img{width:100%;max-width:500px;height:auto;aspect-ratio:1/1;object-fit:cover;border-radius:20px;box-shadow:0 20px 40px rgba(0,0,0,0.15)}
        .sejin-success-hero-disclaimer{font-size:13px;color:#999;line-height:1.6;margin-top:20px;animation:fadeInUp .6s ease-out .4s both}
        .sejin-aftercare{background:linear-gradient(180deg,#f7f5f0 0%,var(--sejin-bg-ivory) 100%);padding:100px 0;position:relative}
        .sejin-aftercare::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--sejin-primary-pale) 0%,var(--sejin-primary) 50%,var(--sejin-primary-pale) 100%)}
        .sejin-aftercare-container{max-width:1200px;margin:0 auto;padding:0 48px;display:grid;grid-template-columns:1.2fr 1fr;gap:80px;align-items:center}
        .sejin-aftercare-content{max-width:650px}
        .sejin-aftercare-title{font-size:42px;font-weight:700;color:var(--sejin-text-primary);line-height:1.3;margin-bottom:20px}
        .sejin-aftercare-title .highlight{color:var(--sejin-primary)}
        .sejin-aftercare-subtitle{font-size:18px;color:#666;line-height:1.7;margin-bottom:50px}
        .sejin-timeline{position:relative;padding-left:0}
        .sejin-timeline-item{position:relative;padding-left:50px;margin-bottom:40px;padding-bottom:40px;border-left:3px solid var(--sejin-primary-pale)}
        .sejin-timeline-item:last-child{margin-bottom:0;padding-bottom:0;border-left:3px solid transparent}
        .sejin-timeline-icon{position:absolute;left:-18px;top:0;width:36px;height:36px;background:var(--sejin-primary);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 10px rgba(212,165,116,0.35)}
        .sejin-timeline-icon svg{width:20px;height:20px;stroke:#fff;stroke-width:2.5;fill:none}
        .sejin-timeline-step{font-size:14px;font-weight:600;color:var(--sejin-primary);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px}
        .sejin-timeline-title{font-size:20px;font-weight:700;color:var(--sejin-text-primary);margin-bottom:8px;line-height:1.3}
        .sejin-timeline-description{font-size:15px;color:#666;line-height:1.6}
        .sejin-aftercare-cta{margin-top:40px}
        .sejin-aftercare-visual{display:flex;flex-direction:column;align-items:center;gap:20px}
        .sejin-aftercare-visual img{width:100%;max-width:500px;height:auto;aspect-ratio:2/3;object-fit:cover;border-radius:20px;box-shadow:0 20px 40px rgba(0,0,0,0.15)}
        .sejin-aftercare-disclaimer{font-size:13px;color:#999;line-height:1.6;text-align:center;max-width:400px}
        .sejin-success-cta-bar{background:linear-gradient(135deg,var(--sejin-primary-dark) 0%,var(--sejin-primary) 100%);padding:48px 40px;text-align:center}
        .sejin-success-cta-text{font-size:36px;font-weight:700;font-style:italic;color:#fff;line-height:1.6;margin:0}
        .sejin-success-cta-text .highlight{color:var(--sejin-primary-pale);font-weight:800}
        .sejin-success-board{background:#fff;padding:80px 20px}
        .sejin-success-board-container{max-width:1200px;margin:0 auto}
        .sejin-success-board-header{text-align:center;margin-bottom:48px}
        .sejin-success-board-title{font-size:36px;font-weight:700;color:var(--sejin-text-primary);margin-bottom:12px}
        .sejin-success-board-title .highlight{color:var(--sejin-primary)}
        .sejin-success-board-subtitle{font-size:16px;color:#666;text-wrap:balance}
        .sejin-success-board-list{display:flex;flex-direction:column;gap:16px}
        .sejin-success-board-item{display:grid;grid-template-columns:120px 100px 1fr 120px 140px;gap:20px;align-items:center;padding:24px 28px;background:#f9fafb;border-radius:12px;transition:all .2s ease;border:1px solid transparent}
        .sejin-success-board-item:hover{background:#fff;border-color:var(--sejin-primary-pale);box-shadow:0 4px 12px rgba(212,165,116,0.1);cursor:pointer}
        .sejin-success-board-thumb{width:120px;height:80px;border-radius:8px;background:linear-gradient(135deg,var(--sejin-primary-pale) 0%,var(--sejin-primary-light) 100%);display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--sejin-primary-dark);font-weight:600;overflow:hidden;flex-shrink:0}
        .sejin-success-board-date{font-size:14px;color:#999;font-weight:500}
        .sejin-success-board-content{display:flex;flex-direction:column;gap:4px}
        .sejin-success-board-company{font-size:17px;font-weight:600;color:var(--sejin-text-primary);transition:color .2s ease}
        .sejin-success-board-item:hover .sejin-success-board-company{color:var(--sejin-primary)}
        .sejin-success-board-desc{font-size:14px;color:#666}
        .sejin-success-board-category{display:inline-flex;align-items:center;justify-content:center;padding:6px 14px;background:var(--sejin-primary-pale);color:var(--sejin-primary-dark);font-size:13px;font-weight:600;border-radius:20px}
        .sejin-success-board-amount{font-size:18px;font-weight:700;color:var(--sejin-primary);text-align:right}
        .sejin-success-board-empty{text-align:center;padding:60px 20px;color:#999}
        .sejin-success-board-more{display:flex;justify-content:center;margin-top:32px}
        .sejin-success-board-more-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 32px;border:2px solid var(--sejin-primary-pale);border-radius:8px;background:transparent;color:var(--sejin-text-primary);font-size:15px;font-weight:600;cursor:pointer;transition:all .2s ease;text-decoration:none}
        .sejin-success-board-more-btn:hover{border-color:var(--sejin-primary);background:var(--sejin-primary-pale);color:var(--sejin-primary-dark)}
        .sejin-final-cta{background:#fff;padding:80px 20px;text-align:center}
        .sejin-final-cta-title{font-size:42px;font-weight:700;color:var(--sejin-text-primary);margin-bottom:20px;line-height:1.4}
        .sejin-final-cta-title .highlight{color:var(--sejin-primary)}
        .sejin-final-cta-subtitle{font-size:18px;color:#666;margin-bottom:40px;line-height:1.6}
        .sejin-final-cta-buttons{display:flex;justify-content:center;gap:24px;flex-wrap:wrap;margin-bottom:32px}
        .sejin-final-cta-button{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--sejin-text-primary);color:#fff;font-size:18px;font-weight:600;padding:18px 40px;border-radius:8px;border:2px solid var(--sejin-primary);text-decoration:none;transition:all .3s ease}
        .sejin-final-cta-button:hover{background:var(--sejin-primary);transform:translateY(-2px);box-shadow:0 8px 20px rgba(212,165,116,0.4)}
        .sejin-final-cta-button svg{width:20px;height:20px}
        .sejin-final-cta-links-row{display:flex;justify-content:center;gap:32px;flex-wrap:wrap}
        .sejin-final-cta-link-item{display:inline-flex;align-items:center;gap:8px;font-size:16px;font-weight:500;color:#666;text-decoration:none;transition:all .3s ease}
        .sejin-final-cta-link-item:hover{color:var(--sejin-primary);transform:translateX(4px)}
        .sejin-final-cta-link-item svg{width:18px;height:18px;stroke:var(--sejin-primary)}
        @media(max-width:1024px){
          .sejin-success-hero-container{padding:48px 32px;gap:48px;grid-template-columns:1fr 1fr}
          .sejin-success-hero-headline{font-size:40px}
          .sejin-aftercare-container{padding:0 32px;gap:60px}
          .sejin-aftercare-title{font-size:36px}
          .sejin-final-cta-title{font-size:36px}
        }
        @media(max-width:767px){
          .sejin-success-hero-container{grid-template-columns:1fr;padding:0;gap:0;text-align:center}
          .sejin-success-hero-content{max-width:100%;padding:40px 20px;order:1}
          .sejin-success-hero-headline{font-size:26px;margin-bottom:16px;line-height:1.35;word-break:keep-all}
          .sejin-success-hero-subheadline{font-size:14px;margin-bottom:28px}
          .sejin-success-hero-cta-group{flex-direction:column;gap:12px}
          .sejin-success-hero-cta-group .sejin-cta-primary,.sejin-success-hero-cta-group .sejin-cta-ghost{width:100%;justify-content:center}
          .sejin-success-hero-visual{order:-1;width:100%}
          .sejin-success-hero-visual img{max-width:100%;width:100%;aspect-ratio:4/5;border-radius:0;box-shadow:none}
          .sejin-aftercare{padding:60px 0}
          .sejin-aftercare-container{grid-template-columns:1fr;gap:40px;padding:0 20px}
          .sejin-aftercare-title{font-size:26px;width:fit-content;margin-left:auto;margin-right:auto;text-align:left}
          .sejin-aftercare-subtitle{font-size:15px;margin-bottom:32px;width:fit-content;margin-left:auto;margin-right:auto;text-align:left}
          .sejin-aftercare-content{display:flex;flex-direction:column;align-items:center}
          .sejin-timeline{width:fit-content}
          .sejin-aftercare-cta{width:fit-content}
          .sejin-aftercare-visual{order:-1}
          .sejin-aftercare-visual img{max-width:100%;aspect-ratio:4/3;border-radius:12px}
          .sejin-success-cta-bar{padding:32px 20px}
          .sejin-success-cta-text{font-size:18px;line-height:1.7;text-wrap:balance}
          .sejin-success-board{padding:50px 16px}
          .sejin-success-board-title{font-size:26px}
          .sejin-success-board-item{display:flex;flex-direction:column;gap:12px;padding:16px}
          .sejin-success-board-thumb{width:100%;height:140px;order:-1;margin-bottom:4px}
          .sejin-success-board-date{order:4;font-size:12px}
          .sejin-success-board-content{order:1}
          .sejin-success-board-company{font-size:16px}
          .sejin-success-board-desc{font-size:13px}
          .sejin-success-board-category{order:2;align-self:flex-start}
          .sejin-success-board-amount{order:3;text-align:left;font-size:17px}
          .sejin-final-cta{padding:50px 20px}
          .sejin-final-cta-title{font-size:24px;word-break:keep-all;text-wrap:balance}
          .sejin-final-cta-subtitle{font-size:15px;margin-bottom:32px}
          .sejin-final-cta-buttons{flex-direction:column;gap:16px}
          .sejin-final-cta-button{width:100%;font-size:16px;padding:16px 24px}
          .sejin-final-cta-links-row{flex-direction:column;gap:16px}
        }
      `}</style>

      {/* 1. Hero Section */}
      <section className="sejin-success-hero">
        <div className="sejin-success-hero-container">
          <div className="sejin-success-hero-content">
            <h1 className="sejin-success-hero-headline">
              정책자금 성공사례를<br/>
              확인하세요
            </h1>

            <p className="sejin-success-hero-subheadline">
              정책자금부터 기업인증까지<br/>
              세진컨설팅과 함께한 자금조달 스토리
            </p>

            <div className="sejin-success-hero-cta-group">
              <Link href="/contact" className="sejin-cta-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
                무료 심사 신청하기
              </Link>

              <a href="tel:1877-0773" className="sejin-cta-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                전화 문의하기
              </a>
            </div>

            <p className="sejin-success-hero-disclaimer">
              ※ 실제 지원 사례를 바탕으로 작성되었습니다.<br/>
              상황에 따라 결과는 다를 수 있습니다.
            </p>
          </div>

          <div className="sejin-success-hero-visual">
            <Image unoptimized src={IMAGES.serviceSuccess} alt="세진컨설팅 성공사례" width={500} height={500} priority />
          </div>
        </div>
      </section>

      {/* 2. Aftercare Section */}
      <section className="sejin-aftercare">
        <div className="sejin-aftercare-container">
          <div className="sejin-aftercare-content">
            <h2 className="sejin-aftercare-title">
              한 번의 지원이<br/>
              <span className="highlight">끝이 아닙니다</span>
            </h2>

            <p className="sejin-aftercare-subtitle">
              지속적인 사후관리로<br/>
              추가 정책자금까지 책임집니다
            </p>

            <div className="sejin-timeline">
              <div className="sejin-timeline-item">
                <div className="sejin-timeline-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <div className="sejin-timeline-step">Step 1</div>
                  <h3 className="sejin-timeline-title">1차 정책자금 확보</h3>
                  <p className="sejin-timeline-description">
                    정책자금 또는 인증 취득으로<br/>
                    첫 번째 자금조달 달성
                  </p>
                </div>
              </div>

              <div className="sejin-timeline-item">
                <div className="sejin-timeline-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <div>
                  <div className="sejin-timeline-step">Step 2</div>
                  <h3 className="sejin-timeline-title">자금 집행 모니터링</h3>
                  <p className="sejin-timeline-description">
                    자금 사용 내역 관리 및<br/>
                    추가 지원 가능성 검토
                  </p>
                </div>
              </div>

              <div className="sejin-timeline-item">
                <div className="sejin-timeline-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <div className="sejin-timeline-step">Step 3</div>
                  <h3 className="sejin-timeline-title">추가 정책자금 시기 알림</h3>
                  <p className="sejin-timeline-description">
                    신청 가능한 정부지원사업 및<br/>
                    인증 시기를 사전 안내
                  </p>
                </div>
              </div>

              <div className="sejin-timeline-item">
                <div className="sejin-timeline-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div>
                  <div className="sejin-timeline-step">Step 4</div>
                  <h3 className="sejin-timeline-title">2차 정책자금 조달 지원</h3>
                  <p className="sejin-timeline-description">
                    다른 정책자금과 조합하여<br/>
                    추가 자금조달 성공
                  </p>
                </div>
              </div>
            </div>

            <div className="sejin-aftercare-cta">
              <Link href="/contact" className="sejin-cta-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
                무료심사 신청하기
              </Link>
            </div>
          </div>

          <div className="sejin-aftercare-visual">
            <Image quality={90} src={IMAGES.aftercareConsulting} alt="세진컨설팅 사후관리 상담" width={500} height={750} />
            <p className="sejin-aftercare-disclaimer">
              ※ 현황 분석 및 성장잠재력을 평가합니다.<br/>
              대표자가 직접 접수하는 것을 지원합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CTA Bar */}
      <section className="sejin-success-cta-bar">
        <p className="sejin-success-cta-text">
          체계적인 <span className="highlight">사후 컨설팅</span>으로<br/>
          자금상환까지 <span className="highlight">끝까지 함께</span>합니다
        </p>
      </section>

      {/* 4. Success Board Section */}
      <section className="sejin-success-board">
        <div className="sejin-success-board-container">
          <div className="sejin-success-board-header">
            <h2 className="sejin-success-board-title">
              <span className="highlight">성공사례</span> 게시판
            </h2>
            <p className="sejin-success-board-subtitle">세진컨설팅과 함께한 중소기업의 자금조달 스토리</p>
          </div>

          <div className="sejin-success-board-list">
            <div className="sejin-success-board-empty">
              <p>아직 등록된 성공사례가 없습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="sejin-final-cta">
        <h2 className="sejin-final-cta-title">
          다음 <span className="highlight">성공 주인공</span>은<br/>
          당신의 기업입니다
        </h2>
        <p className="sejin-final-cta-subtitle">
          무료 심사로 맞춤형 자금조달 전략을<br/>
          먼저 확인하고 시작하세요
        </p>

        <div className="sejin-final-cta-buttons">
          <Link href="/contact" className="sejin-final-cta-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4"/>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
            무료 심사 신청하기
          </Link>
        </div>

        <div className="sejin-final-cta-links-row">
          <a href="tel:1877-0773" className="sejin-final-cta-link-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            전화 심사: 1877-0773
          </a>
        </div>
      </section>
    </>
  )
}
