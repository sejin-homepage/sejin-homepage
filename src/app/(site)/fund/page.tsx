'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export default function FundPage() {
  const [activeTab, setActiveTab] = useState<'fund' | 'consulting'>('fund')

  return (
    <>
      <style>{`
        .sejin-fund-hero{background:linear-gradient(135deg,#FFFFFF 0%,var(--navy) 100%);padding:0;margin:0;min-height:auto;display:flex;align-items:flex-start}
        .sejin-fund-hero-container{max-width:1200px;margin:0 auto;padding:60px 48px;display:grid;grid-template-columns:1.2fr 1fr;gap:64px;align-items:center;width:100%}
        .sejin-fund-hero-content{max-width:600px}
        .sejin-fund-hero-headline{font-size:48px;font-weight:700;color:var(--body-text);line-height:1.25;margin-bottom:20px;letter-spacing:-0.02em}
        .sejin-fund-hero-subheadline{font-size:18px;font-weight:400;color:#666;line-height:1.7;margin-bottom:36px}
        .sejin-fund-hero-cta-group{display:flex;gap:16px;flex-wrap:wrap}
        .sejin-fund-hero-visual{position:relative;display:flex;align-items:center;justify-content:center}
        .sejin-fund-hero-visual img{width:100%;max-width:500px;height:auto;aspect-ratio:1/1;object-fit:cover;border-radius:16px;box-shadow:0 24px 48px rgba(212,165,116,0.15)}
        .sejin-fund-hero-disclaimer{font-size:13px;color:#999;line-height:1.6;margin-top:20px}
        .sejin-fund-why{background:var(--navy);padding:80px 0}
        .sejin-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
        .sejin-why-card{background:#fff;border:1px solid var(--gold-lighter);border-radius:12px;padding:0;text-align:center;transition:all .3s ease;overflow:hidden}
        .sejin-why-card:hover{transform:translateY(-8px);box-shadow:0 12px 24px rgba(212,165,116,0.2);border-color:var(--gold)}
        .sejin-why-image{width:100%;height:200px;object-fit:cover;display:block;transition:transform .3s ease}
        .sejin-why-card:hover .sejin-why-image{transform:scale(1.05)}
        .sejin-why-content{padding:32px 28px}
        .sejin-why-title{font-size:24px;font-weight:600;color:var(--body-text);margin-bottom:16px}
        .sejin-why-description{font-size:16px;color:#666;line-height:1.6}
        .sejin-why-example{background:#fff;border:2px solid var(--gold);border-radius:12px;padding:32px 24px;margin-top:40px;text-align:center;max-width:600px;margin-left:auto;margin-right:auto;box-shadow:0 4px 16px rgba(212,165,116,0.15)}
        .sejin-example-desc{font-size:14px;color:#666;line-height:1.5;margin-bottom:12px}
        .sejin-example-amount{font-size:28px;font-weight:700;color:var(--gold);line-height:1.2;margin-bottom:8px;display:block}
        .sejin-example-result{font-size:14px;color:#666;line-height:1.5;margin:0}
        .sejin-fund-category{background:#fff;padding:80px 0}
        .sejin-tab-container{display:flex;flex-direction:column;gap:0;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.12)}
        .sejin-tab-menu{background:var(--gold-lighter);padding:0;border-bottom:2px solid var(--gold-lighter);display:flex;justify-content:center;gap:0}
        .sejin-tab-button{flex:0 0 auto;padding:24px 48px;text-align:center;background:transparent;border:none;border-bottom:4px solid transparent;cursor:pointer;transition:all .3s ease;font-size:18px;font-weight:600;color:#666;margin-bottom:-2px;font-family:inherit}
        .sejin-tab-button:hover{background:rgba(212,165,116,0.1);color:var(--body-text);border-bottom-color:var(--gold)}
        .sejin-tab-button.active{background:#fff;border-bottom-color:var(--gold);color:var(--body-text)}
        .sejin-tab-content{padding:48px;display:none}
        .sejin-tab-content.active{display:block;animation:sejinFadeIn .4s ease}
        @keyframes sejinFadeIn{from{opacity:0}to{opacity:1}}
        .sejin-tab-header-image{width:100%;height:auto;aspect-ratio:16/7;object-fit:cover;border-radius:8px;margin-bottom:32px}
        .sejin-consulting-items-container{display:flex;flex-direction:column}
        .sejin-consulting-item{display:grid;grid-template-columns:280px 1fr;gap:40px;margin-bottom:40px;padding-bottom:40px;border-bottom:1px solid var(--gold-lighter);align-items:start}
        .sejin-consulting-item:last-child{margin-bottom:0;padding-bottom:0;border-bottom:none}
        .sejin-item-icon{width:100%;height:auto;aspect-ratio:1/1;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);transition:all .3s ease}
        .sejin-item-icon:hover{box-shadow:0 8px 24px rgba(212,165,116,0.25);transform:translateY(-4px)}
        .sejin-item-icon img{width:100%;height:100%;object-fit:cover;transition:transform .3s ease}
        .sejin-item-icon:hover img{transform:scale(1.05)}
        .sejin-item-content{display:flex;flex-direction:column;gap:20px}
        .sejin-item-header{display:flex;align-items:center;gap:12px}
        .sejin-item-number{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;background:linear-gradient(135deg,var(--gold),var(--gold-dark));color:#fff;font-size:18px;font-weight:700;border-radius:50%;flex-shrink:0}
        .sejin-item-title{font-size:26px;font-weight:600;color:var(--body-text);margin:0}
        .sejin-item-details{display:flex;flex-direction:column;gap:16px}
        .sejin-detail-row{display:flex;align-items:baseline;gap:12px}
        .sejin-detail-label{font-size:17px;font-weight:600;color:#666;white-space:nowrap;min-width:100px}
        .sejin-detail-value{font-size:17px;font-weight:400;color:#666;line-height:1.6}
        .sejin-detail-highlight{font-size:24px;font-weight:700;color:var(--gold);margin-right:4px}
        .sejin-consulting-list{list-style:none;padding:0;margin:0}
        .sejin-consulting-list li{position:relative;padding-left:28px;margin-bottom:14px;font-size:18px;color:#666;line-height:1.6}
        .sejin-consulting-list li:last-child{margin-bottom:0}
        .sejin-consulting-list li::before{content:"\\2022";position:absolute;left:8px;color:var(--gold);font-weight:700;font-size:20px}
        .sejin-consulting-list strong{font-weight:600;color:var(--body-text)}
        .sejin-fund-process{background:var(--navy);padding:80px 0}
        .sejin-process-timeline{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;position:relative}
        .sejin-process-timeline::before{content:'';position:absolute;top:64px;left:12%;right:12%;height:2px;background:repeating-linear-gradient(to right,var(--gold) 0%,var(--gold) 8px,transparent 8px,transparent 16px);z-index:0}
        .sejin-process-step{background:#fff;border:1px solid var(--gold-lighter);border-radius:12px;padding:32px 24px;text-align:center;position:relative;transition:all .3s ease;z-index:1}
        .sejin-process-step:hover{transform:translateY(-8px);box-shadow:0 12px 24px rgba(212,165,116,0.2);border-color:var(--gold)}
        .sejin-step-number{display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;background:linear-gradient(135deg,var(--gold),var(--gold-dark));color:#fff;font-size:28px;font-weight:700;border-radius:50%;margin-bottom:24px;box-shadow:0 4px 12px rgba(212,165,116,0.3)}
        .sejin-step-title{font-size:22px;font-weight:600;color:var(--body-text);margin-bottom:16px;line-height:1.3}
        .sejin-step-description{list-style:none;padding:0;margin:0;text-align:left}
        .sejin-step-description li{position:relative;padding-left:20px;margin-bottom:10px;font-size:15px;color:#666;line-height:1.5}
        .sejin-step-description li::before{content:"\\2022";position:absolute;left:4px;color:var(--gold);font-weight:700;font-size:16px}
        .sejin-fund-final-cta{background:var(--gold-lighter);padding:80px 0}
        .sejin-final-cta-container{max-width:1200px;margin:0 auto;padding:0 40px;text-align:center}
        .sejin-final-cta-main-text{font-size:48px;font-weight:700;color:var(--body-text);line-height:1.4;margin-bottom:24px;letter-spacing:-0.02em}
        .sejin-final-cta-main-text .highlight{color:var(--gold)}
        .sejin-final-cta-sub-text{font-size:20px;color:#666;line-height:1.6;margin-bottom:40px}
        .sejin-final-cta-button-group{display:flex;justify-content:center;align-items:center;gap:24px;flex-wrap:wrap;margin-bottom:32px}
        .sejin-final-cta-links{display:flex;justify-content:center;align-items:center;gap:32px;flex-wrap:wrap}
        .sejin-final-cta-link{display:inline-flex;align-items:center;gap:8px;font-size:16px;font-weight:500;color:#666;text-decoration:none;transition:all .3s ease}
        .sejin-final-cta-link:hover{color:var(--gold);transform:translateX(4px)}
        .sejin-final-cta-link svg{width:18px;height:18px;color:var(--gold)}
        @media(max-width:1023px){
          .sejin-fund-hero-container{padding:60px 32px;gap:48px;grid-template-columns:1fr 1fr}
          .sejin-fund-hero-headline{font-size:40px}
          .sejin-why-grid{grid-template-columns:1fr;gap:24px}
          .sejin-fund-category{padding:60px 0}
          .sejin-tab-button{padding:20px 32px;font-size:16px}
          .sejin-tab-content{padding:32px 24px}
          .sejin-consulting-item{grid-template-columns:200px 1fr;gap:28px}
          .sejin-item-title{font-size:22px}
          .sejin-detail-label{font-size:15px;min-width:85px}
          .sejin-detail-value{font-size:15px}
          .sejin-detail-highlight{font-size:20px}
          .sejin-consulting-list li{font-size:16px}
          .sejin-process-timeline{grid-template-columns:repeat(2,1fr);gap:24px}
          .sejin-process-timeline::before{display:none}
          .sejin-final-cta-main-text{font-size:40px}
        }
        @media(max-width:767px){
          .sejin-fund-hero-container{grid-template-columns:1fr;padding:0;gap:0;text-align:center}
          .sejin-fund-hero-content{max-width:100%;padding:32px 20px 40px;order:1}
          .sejin-fund-hero-headline{font-size:24px;margin-bottom:16px;line-height:1.35;word-break:keep-all}
          .sejin-fund-hero-subheadline{font-size:15px;margin-bottom:28px}
          .sejin-fund-hero-cta-group{flex-direction:column;gap:12px}
          .sejin-fund-hero-cta-group .sejin-cta-primary,.sejin-fund-hero-cta-group .sejin-cta-ghost{width:100%;justify-content:center;font-size:15px;padding:15px 20px}
          .sejin-fund-hero-visual{order:-1;width:100%}
          .sejin-fund-hero-visual img{max-width:100%;width:100%;aspect-ratio:4/5;border-radius:0;box-shadow:none}
          .sejin-fund-hero-disclaimer{font-size:11px;margin-top:16px}
          .sejin-fund-why{padding:40px 0}
          .sejin-why-grid{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:16px;padding:12px 20px 20px;-ms-overflow-style:none;scrollbar-width:none}
          .sejin-why-grid::-webkit-scrollbar{display:none}
          .sejin-why-card{flex:0 0 85vw;max-width:320px;scroll-snap-align:start}
          .sejin-why-image{height:140px}
          .sejin-why-content{padding:20px 18px}
          .sejin-why-title{font-size:20px;margin-bottom:12px}
          .sejin-why-description{font-size:14px}
          .sejin-why-example{padding:24px 20px;margin:24px 20px 0}
          .sejin-fund-category{padding:40px 0}
          .sejin-fund-category .sejin-section-container{padding:0}
          .sejin-fund-category .sejin-section-header{margin-bottom:32px;padding:0 20px}
          .sejin-tab-container{border-radius:0}
          .sejin-tab-menu{padding:0}
          .sejin-tab-button{font-size:14px;padding:16px 20px}
          .sejin-tab-content{padding:0;position:relative}
          .sejin-tab-header-image{display:none}
          .sejin-consulting-items-container{display:flex;flex-direction:row;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;gap:16px;padding:20px;margin:0}
          .sejin-consulting-items-container::-webkit-scrollbar{display:none}
          .sejin-consulting-item{display:flex;flex-direction:column;flex:0 0 85vw;max-width:340px;scroll-snap-align:start;background:#fff;border:1px solid var(--gold-lighter);border-radius:12px;padding:24px 20px;margin:0;gap:16px}
          .sejin-consulting-item:last-child{padding-bottom:24px;border-bottom:1px solid var(--gold-lighter)}
          .sejin-item-icon{display:none}
          .sejin-item-number{width:28px;height:28px;font-size:14px}
          .sejin-item-title{font-size:18px}
          .sejin-item-details{gap:12px}
          .sejin-detail-row{flex-direction:row;gap:6px;align-items:baseline}
          .sejin-detail-label{font-size:12px;min-width:auto;font-weight:700;color:var(--body-text);white-space:nowrap}
          .sejin-detail-value{font-size:12px;line-height:1.5}
          .sejin-detail-highlight{font-size:14px}
          .sejin-consulting-list li{font-size:13px;padding-left:20px;margin-bottom:10px;line-height:1.5}
          .sejin-consulting-list li::before{font-size:15px;left:6px}
          .sejin-fund-process{padding:40px 0}
          .sejin-process-timeline{grid-template-columns:1fr;gap:16px}
          .sejin-process-timeline::before{display:none}
          .sejin-process-step{padding:24px 20px}
          .sejin-step-number{width:48px;height:48px;font-size:20px;margin-bottom:16px}
          .sejin-step-title{font-size:18px}
          .sejin-fund-final-cta{padding:50px 0}
          .sejin-final-cta-container{padding:0 20px}
          .sejin-final-cta-main-text{font-size:24px;word-break:keep-all}
          .sejin-final-cta-sub-text{font-size:16px;margin-bottom:32px}
          .sejin-final-cta-button-group{flex-direction:column;gap:16px}
          .sejin-final-cta-button-group .sejin-cta-primary{width:100%;font-size:16px;padding:16px 24px}
          .sejin-final-cta-links{flex-direction:column;gap:16px}
        }
      `}</style>

      {/* Hero Section */}
      <section id="sejin-fund-hero" className="sejin-fund-hero">
        <div className="sejin-fund-hero-container">
          <div className="sejin-fund-hero-content">
            <h1 className="sejin-fund-hero-headline">
              성장에 필요한 자금,<br/>
              정책자금으로 해결하세요
            </h1>

            <p className="sejin-fund-hero-subheadline">
              저금리, 장기 상환, 정부 보증까지<br/>
              기업 성장을 든든하게 지원합니다
            </p>

            <div className="sejin-fund-hero-cta-group">
              <Link href="/contact" className="sejin-cta-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
                무료 심사 신청
              </Link>

              <a href="tel:1877-0773" className="sejin-cta-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                전화 상담하기
              </a>
            </div>

            <p className="sejin-fund-hero-disclaimer">
              ※ 대표자 개인역량 및 성장잠재력을 분석합니다.<br/>
              정책자금 서류작성 및 접수대행을 하지 않습니다.
            </p>
          </div>

          <div className="sejin-fund-hero-visual">
            <Image src={IMAGES.fundHero} alt="세진컨설팅 - 정책자금 컨설팅" width={500} height={500} priority />
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="sejin-fund-why" className="sejin-fund-why">
        <div className="sejin-section-container">
          <div className="sejin-section-header">
            <h2 className="sejin-section-title">정책자금, 왜 필요한가요?</h2>
            <p className="sejin-section-subtitle">기업 성장의 든든한 자금 파트너가 되어드립니다</p>
          </div>

          <div className="sejin-why-grid">
            <div className="sejin-why-card">
              <Image src={IMAGES.whyLowRate} alt="저금리 장점" width={400} height={200} className="sejin-why-image" />
              <div className="sejin-why-content">
                <h3 className="sejin-why-title">저금리 장점</h3>
                <p className="sejin-why-description">
                  시중 금리 대비 1~3% 낮은 금리로<br/>
                  이자 부담을 크게 줄일 수 있습니다.
                </p>
              </div>
            </div>

            <div className="sejin-why-card">
              <Image src={IMAGES.whyGrowth} alt="성장 동력 확보" width={400} height={200} className="sejin-why-image" />
              <div className="sejin-why-content">
                <h3 className="sejin-why-title">성장 동력 확보</h3>
                <p className="sejin-why-description">
                  설비 투자, R&amp;D, 인력 채용 등<br/>
                  기업 성장의 핵심 자금을 지원합니다.
                </p>
              </div>
            </div>

            <div className="sejin-why-card">
              <Image src={IMAGES.whyTrust} alt="기업 신뢰도 향상" width={400} height={200} className="sejin-why-image" />
              <div className="sejin-why-content">
                <h3 className="sejin-why-title">기업 신뢰도 향상</h3>
                <p className="sejin-why-description">
                  정부 보증으로 대외 신뢰도 상승,<br/>
                  추가 투자 유치에도 유리합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="sejin-why-example">
            <p className="sejin-example-desc">실제 컨설팅 사례 기준</p>
            <span className="sejin-example-amount">연 1,150만원 절감</span>
            <p className="sejin-example-result">1억원 기준, 카드론 대비 정책자금 이자 절감액</p>
          </div>
        </div>
      </section>

      {/* Category Section - 주요 컨설팅 분야 (탭 UI) */}
      <section className="sejin-fund-category">
        <div className="sejin-section-container">
          <div className="sejin-section-header">
            <h2 className="sejin-section-title">주요 컨설팅 분야</h2>
            <p className="sejin-section-subtitle">기업 성장 단계에 맞는 맞춤형 지원을 제공합니다</p>
          </div>

          <div className="sejin-tab-container">
            {/* 탭 메뉴 */}
            <div className="sejin-tab-menu">
              <button
                className={`sejin-tab-button ${activeTab === 'fund' ? 'active' : ''}`}
                onClick={() => setActiveTab('fund')}
              >
                정책자금 컨설팅
              </button>
              <button
                className={`sejin-tab-button ${activeTab === 'consulting' ? 'active' : ''}`}
                onClick={() => setActiveTab('consulting')}
              >
                경영 컨설팅
              </button>
            </div>

            {/* 탭 1: 정책자금 컨설팅 */}
            <div className={`sejin-tab-content ${activeTab === 'fund' ? 'active' : ''}`}>
              <Image src={IMAGES.categoryFund} alt="정책자금 컨설팅" width={1200} height={525} className="sejin-tab-header-image" />

              <div className="sejin-consulting-items-container">
                {/* 1. 운전자금 */}
                <div className="sejin-consulting-item">
                  <div className="sejin-item-icon">
                    <Image src={IMAGES.itemOperation} alt="운전자금" width={280} height={280} />
                  </div>
                  <div className="sejin-item-content">
                    <div className="sejin-item-header">
                      <span className="sejin-item-number">1</span>
                      <h3 className="sejin-item-title">운전자금</h3>
                    </div>
                    <div className="sejin-item-details">
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">대상:</span>
                        <span className="sejin-detail-value">재료비, 인건비 등 일상 운영 자금이 필요한 기업</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">한도:</span>
                        <span className="sejin-detail-value"><span className="sejin-detail-highlight">연간 5억 원</span>이내</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">금리:</span>
                        <span className="sejin-detail-value"><span className="sejin-detail-highlight">2~4%</span>정책자금 기준금리(변동)</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">상환기간:</span>
                        <span className="sejin-detail-value"><span className="sejin-detail-highlight">최대 6년</span>(거치 3년)</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">보증비율:</span>
                        <span className="sejin-detail-value"><span className="sejin-detail-highlight">최대 100%</span>신용/기술보증</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">지원기관:</span>
                        <span className="sejin-detail-value">신용보증기금, 기술보증기금</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. 시설자금 */}
                <div className="sejin-consulting-item">
                  <div className="sejin-item-icon">
                    <Image src={IMAGES.itemFacility} alt="시설자금" width={280} height={280} />
                  </div>
                  <div className="sejin-item-content">
                    <div className="sejin-item-header">
                      <span className="sejin-item-number">2</span>
                      <h3 className="sejin-item-title">시설자금</h3>
                    </div>
                    <div className="sejin-item-details">
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">대상:</span>
                        <span className="sejin-detail-value">설비 구매, 공장 확장 등 시설 투자 기업</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">한도:</span>
                        <span className="sejin-detail-value"><span className="sejin-detail-highlight">기업당 60억 원</span>이내</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">금리:</span>
                        <span className="sejin-detail-value"><span className="sejin-detail-highlight">2~3.5%</span>정책자금 기준금리(변동 또는 고정)</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">상환기간:</span>
                        <span className="sejin-detail-value"><span className="sejin-detail-highlight">최대 10년</span>(거치 4년)</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">보증비율:</span>
                        <span className="sejin-detail-value"><span className="sejin-detail-highlight">최대 95%</span>신용/기술보증</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">지원기관:</span>
                        <span className="sejin-detail-value">중소벤처기업진흥공단</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. 기술개발(R&D) 자금 */}
                <div className="sejin-consulting-item">
                  <div className="sejin-item-icon">
                    <Image src={IMAGES.itemRnd} alt="R&D 자금" width={280} height={280} />
                  </div>
                  <div className="sejin-item-content">
                    <div className="sejin-item-header">
                      <span className="sejin-item-number">3</span>
                      <h3 className="sejin-item-title">기술개발(R&amp;D) 자금</h3>
                    </div>
                    <div className="sejin-item-details">
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">대상:</span>
                        <span className="sejin-detail-value">신제품 개발, 기술 혁신을 추진하는 기업</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">한도:</span>
                        <span className="sejin-detail-value"><span className="sejin-detail-highlight">최대 10억 원</span></span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">금리:</span>
                        <span className="sejin-detail-value"><span className="sejin-detail-highlight">1.5~3%</span>정책자금 기준금리 - 0.3%p</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">상환기간:</span>
                        <span className="sejin-detail-value"><span className="sejin-detail-highlight">5년</span>(거치 3년, 분할상환 2년)</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">보증비율:</span>
                        <span className="sejin-detail-value"><span className="sejin-detail-highlight">최대 100%</span>기술보증</span>
                      </div>
                      <div className="sejin-detail-row">
                        <span className="sejin-detail-label">지원기관:</span>
                        <span className="sejin-detail-value">중소벤처기업진흥공단, 중소기업기술정보진흥원</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 탭 2: 경영 컨설팅 */}
            <div className={`sejin-tab-content ${activeTab === 'consulting' ? 'active' : ''}`}>
              <Image src={IMAGES.categoryConsulting} alt="경영 컨설팅" width={1200} height={525} className="sejin-tab-header-image" />

              <div className="sejin-consulting-items-container">
                {/* 1. 재무구조 개선 */}
                <div className="sejin-consulting-item">
                  <div className="sejin-item-icon">
                    <Image src={IMAGES.itemFinance} alt="재무구조 개선" width={280} height={280} />
                  </div>
                  <div className="sejin-item-content">
                    <div className="sejin-item-header">
                      <span className="sejin-item-number">1</span>
                      <h3 className="sejin-item-title">재무구조 개선</h3>
                    </div>
                    <ul className="sejin-consulting-list">
                      <li><strong>부채비율</strong> 최적화</li>
                      <li><strong>유동비율</strong> 관리</li>
                      <li>자금 심사 시 유리한 <strong>재무제표</strong> 구성</li>
                      <li><strong>현금흐름</strong> 개선 전략 수립</li>
                      <li><strong>재무 건전성</strong> 지표 관리</li>
                      <li><strong>자본구조</strong> 재편성 컨설팅</li>
                      <li><strong>재무비율</strong> 분석 및 개선 방안</li>
                    </ul>
                  </div>
                </div>

                {/* 2. 원가절감 전략 */}
                <div className="sejin-consulting-item">
                  <div className="sejin-item-icon">
                    <Image src={IMAGES.itemCost} alt="원가절감 전략" width={280} height={280} />
                  </div>
                  <div className="sejin-item-content">
                    <div className="sejin-item-header">
                      <span className="sejin-item-number">2</span>
                      <h3 className="sejin-item-title">원가절감 전략</h3>
                    </div>
                    <ul className="sejin-consulting-list">
                      <li>불필요한 <strong>지출 분석</strong></li>
                      <li><strong>원가구조</strong> 개선</li>
                      <li><strong>수익성</strong> 개선 방안 제시</li>
                      <li><strong>고정비/변동비</strong> 최적화</li>
                      <li><strong>공정 효율화</strong>를 통한 원가절감</li>
                      <li><strong>구매 단가</strong> 협상 전략</li>
                      <li><strong>재고관리</strong> 최적화</li>
                    </ul>
                  </div>
                </div>

                {/* 3. 사업계획서 작성 코칭 */}
                <div className="sejin-consulting-item">
                  <div className="sejin-item-icon">
                    <Image src={IMAGES.itemPlan} alt="사업계획서 작성 코칭" width={280} height={280} />
                  </div>
                  <div className="sejin-item-content">
                    <div className="sejin-item-header">
                      <span className="sejin-item-number">3</span>
                      <h3 className="sejin-item-title">사업계획서 작성 코칭</h3>
                    </div>
                    <ul className="sejin-consulting-list">
                      <li><strong>심사관</strong>이 보는 <strong>핵심 포인트</strong> 전달</li>
                      <li>설득력 있는 <strong>사업계획서</strong> 구조화</li>
                      <li><strong>발표</strong> 및 <strong>인터뷰</strong> 대응 전략</li>
                      <li><strong>시장분석</strong> 및 <strong>경쟁우위</strong> 작성법</li>
                      <li><strong>재무계획</strong> 및 <strong>손익 추정</strong> 가이드</li>
                      <li><strong>사업모델</strong> 명확화 컨설팅</li>
                      <li><strong>PT 자료</strong> 제작 및 발표 코칭</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="sejin-fund-process">
        <div className="sejin-section-container">
          <div className="sejin-section-header">
            <h2 className="sejin-section-title">자금상담 진행 절차</h2>
            <p className="sejin-section-subtitle">체계적인 4단계 프로세스로 성공을 이끌어냅니다</p>
          </div>

          <div className="sejin-process-timeline">
            <div className="sejin-process-step">
              <div className="sejin-step-number">1</div>
              <h3 className="sejin-step-title">잠재력<br/>현황 진단</h3>
              <ul className="sejin-step-description">
                <li>재무 상태 분석</li>
                <li>사업 모델 검토</li>
                <li>지원 가능 사업 매칭</li>
              </ul>
            </div>

            <div className="sejin-process-step">
              <div className="sejin-step-number">2</div>
              <h3 className="sejin-step-title">최적 솔루션<br/>전략 수립</h3>
              <ul className="sejin-step-description">
                <li>맞춤형 자금 계획 수립</li>
                <li>필요 인증 확인</li>
                <li>재무 개선 방안 제시</li>
              </ul>
            </div>

            <div className="sejin-process-step">
              <div className="sejin-step-number">3</div>
              <h3 className="sejin-step-title">사업계획서<br/>작성 코칭</h3>
              <ul className="sejin-step-description">
                <li>심사 기준 서류 전략</li>
                <li>핵심 강점 부각</li>
                <li>서류 검토 및 피드백</li>
              </ul>
            </div>

            <div className="sejin-process-step">
              <div className="sejin-step-number">4</div>
              <h3 className="sejin-step-title">발표/심사<br/>대비 지원</h3>
              <ul className="sejin-step-description">
                <li>예상 질문 시뮬레이션</li>
                <li>답변 전략 수립</li>
                <li>최종 점검 및 제출</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="sejin-fund-final-cta">
        <div className="sejin-final-cta-container">
          <h2 className="sejin-final-cta-main-text">
            <span className="highlight">정책자금</span>으로<br/>
            기업의 성장을 시작하세요
          </h2>
          <p className="sejin-final-cta-sub-text">
            전문 컨설턴트가 대표님의 상황에 맞는<br/>
            최적의 자금 솔루션을 제시합니다
          </p>

          <div className="sejin-final-cta-button-group">
            <Link href="/contact" className="sejin-cta-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
              무료 심사 신청하기
            </Link>
          </div>

          <div className="sejin-final-cta-links">
            <Link href="/certification" className="sejin-final-cta-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
              인증 컨설팅 알아보기
            </Link>
            <Link href="/success" className="sejin-final-cta-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
              성공사례 확인하기
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
