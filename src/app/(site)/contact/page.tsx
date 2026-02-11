'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const fundTypes: string[] = []
    formData.getAll('fundType').forEach(v => fundTypes.push(v as string))

    const data = {
      companyName: formData.get('company-name') as string,
      ceoName: formData.get('ceo-name') as string,
      phone: formData.get('phone') as string,
      consultTime: formData.get('consult-time') as string,
      amount: formData.get('amount') as string,
      fundType: fundTypes,
      message: formData.get('message') as string,
    }

    try {
      const res = await fetch('/api/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        alert('상담 신청이 완료되었습니다. 24시간 내 연락드리겠습니다.')
        form.reset()
      } else {
        alert('신청 중 오류가 발생했습니다. 전화(1877-0773)로 문의해주세요.')
      }
    } catch {
      alert('네트워크 오류가 발생했습니다. 전화(1877-0773)로 문의해주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  const faqs = [
    { q: '상담 비용이 정말 무료인가요?', a: '네, 초기 상담은 100% 무료입니다. 기업 현황 분석부터 최적의 지원 전략 제시까지 비용 부담 없이 전문 컨설턴트의 상담을 받으실 수 있습니다. 상담 후 실제 신청 진행 시에만 별도 비용이 발생합니다.' },
    { q: '상담 시간은 얼마나 걸리나요?', a: '기본 상담은 약 30분~1시간 정도 소요됩니다. 기업 현황과 필요한 지원 내용에 따라 시간이 조금씩 달라질 수 있으며, 충분한 시간을 가지고 상세히 상담해 드립니다.' },
    { q: '어떤 서류를 준비해야 하나요?', a: '초기 상담 시에는 별도 서류 준비가 필요하지 않습니다. 기업 기본 정보(업종, 설립일, 직원 수 등)만 알고 계시면 됩니다. 필요한 서류는 상담 후 맞춤 전략 수립 단계에서 안내해 드립니다.' },
    { q: '이미 정책자금을 받고 있는데도 상담 가능한가요?', a: '네, 상담 가능합니다. 이미 정책자금을 받고 계신 경우에도 추가 지원이 가능한 다른 정책자금이 있거나, 기업인증을 통해 더 유리한 조건으로 재신청할 수 있는 방법이 있습니다. 현재 상황을 분석하여 최적의 추가 지원 방안을 안내해 드립니다.' },
    { q: '상담 후 계약은 필수인가요?', a: '아니요, 상담 후 계약은 전혀 강제되지 않습니다. 상담을 통해 제시된 전략과 조건을 충분히 검토하신 후, 필요하다고 판단되실 때만 진행하시면 됩니다. 부담 없이 상담받으실 수 있습니다.' },
    { q: '소규모 기업도 상담 가능한가요?', a: '물론입니다. 1인 기업부터 중소기업까지 기업 규모와 관계없이 모두 상담 가능합니다. 각 기업의 규모와 특성에 맞는 최적의 지원 방안을 제시해 드립니다.' },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .sejin-contact-hero{background:linear-gradient(135deg,#FFFFFF 0%,var(--navy) 100%);padding:0;margin:0;min-height:auto;display:flex;align-items:flex-start}
        .sejin-contact-hero-container{max-width:1400px;margin:0 auto;padding:40px 40px;display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;width:100%}
        .sejin-contact-hero-content{max-width:650px}
        .sejin-contact-hero-headline{font-size:56px;font-weight:700;color:#000;line-height:1.2;margin-bottom:24px;letter-spacing:-0.02em;animation:fadeInUp .8s ease-out}
        .sejin-contact-hero-subheadline{font-size:20px;font-weight:400;color:#666;line-height:1.6;margin-bottom:40px;animation:fadeInUp .8s ease-out .2s both}
        .sejin-contact-hero-cta-group{display:flex;gap:16px;flex-wrap:wrap;animation:fadeInUp .8s ease-out .4s both}
        .sejin-contact-hero-disclaimer{font-size:13px;color:#999;line-height:1.5;margin-top:16px}
        .sejin-contact-hero-visual{position:relative;display:flex;align-items:center;justify-content:center;animation:fadeIn 1s ease-out .6s both}
        .sejin-contact-hero-visual img{width:100%;max-width:500px;height:auto;aspect-ratio:1/1;object-fit:cover;object-position:70% center;border-radius:20px;box-shadow:0 20px 40px rgba(0,0,0,0.15)}
        .sejin-floating-consult,.sejin-floating-overlay,.sejin-bottom-nav{display:none!important}
        .sejin-contact-process{background:linear-gradient(135deg,#f7f5f0 0%,var(--navy) 100%);padding:100px 0}
        .sejin-process-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;position:relative}
        .sejin-process-step-card{text-align:center;position:relative}
        .sejin-step-icon-wrap{width:100px;height:100px;margin:0 auto 24px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative;box-shadow:0 8px 20px rgba(0,0,0,0.1);transition:all .3s ease}
        .sejin-step-icon-wrap svg{width:48px;height:48px;color:var(--gold);stroke:var(--gold);transition:all .3s ease}
        .sejin-step-number-badge{position:absolute;top:-10px;right:-10px;width:32px;height:32px;background:var(--gold);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;border:3px solid #f7f5f0}
        .sejin-process-step-card::after{content:'';position:absolute;top:50px;left:calc(50% + 50px);width:calc(100% - 100px);height:2px;background:linear-gradient(90deg,var(--gold) 0%,var(--gold-dark) 100%);z-index:0}
        .sejin-process-step-card:last-child::after{display:none}
        .sejin-step-card-title{font-size:20px;font-weight:700;color:#000;margin-bottom:12px;line-height:1.3;transition:color .3s ease}
        .sejin-step-card-desc{font-size:15px;color:#666;line-height:1.6}
        @media(min-width:768px){
          .sejin-process-step-card:hover .sejin-step-icon-wrap{transform:translateY(-8px);box-shadow:0 12px 30px rgba(212,165,116,0.4)}
          .sejin-process-step-card:hover .sejin-step-icon-wrap svg{transform:scale(1.1)}
          .sejin-process-step-card:hover .sejin-step-card-title{color:var(--gold)}
        }
        .sejin-contact-faq{background:#fff;padding:100px 0}
        .sejin-faq-list{max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:16px}
        .sejin-faq-item{background:#fff;border:2px solid #E5E7EB;border-radius:12px;overflow:hidden;transition:all .3s ease}
        .sejin-faq-item:hover{border-color:var(--gold);box-shadow:0 4px 12px rgba(212,165,116,0.15)}
        .sejin-faq-item.active{border-color:var(--gold);box-shadow:0 8px 20px rgba(212,165,116,0.2)}
        .sejin-faq-question{width:100%;display:flex;align-items:center;justify-content:space-between;padding:24px 28px;background:transparent;border:none;cursor:pointer;text-align:left;transition:all .3s ease;font-family:inherit}
        .sejin-faq-question:hover{background:#F9FAFB}
        .sejin-faq-item.active .sejin-faq-question{background:var(--gold-lighter)}
        .sejin-faq-question-inner{display:flex;align-items:center;flex:1}
        .sejin-faq-label{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:var(--gold);color:#fff;font-size:14px;font-weight:700;border-radius:6px;margin-right:12px;flex-shrink:0}
        .sejin-faq-question-text{font-size:18px;font-weight:600;color:#000;line-height:1.5;padding-right:20px;flex:1}
        .sejin-faq-icon{flex-shrink:0;width:32px;height:32px;background:#F3F4F6;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all .3s ease}
        .sejin-faq-item.active .sejin-faq-icon{background:var(--gold);transform:rotate(180deg)}
        .sejin-faq-icon svg{width:18px;height:18px;color:#666;stroke:#666;transition:all .3s ease}
        .sejin-faq-item.active .sejin-faq-icon svg{color:#fff;stroke:#fff}
        .sejin-faq-answer{max-height:0;overflow:hidden;transition:max-height .4s ease,padding .4s ease}
        .sejin-faq-item.active .sejin-faq-answer{max-height:500px;padding:0 28px 28px}
        .sejin-faq-answer-text{font-size:16px;color:#666;line-height:1.8}
        .sejin-contact-form-section{background:linear-gradient(135deg,#f7f5f0 0%,var(--navy) 100%);padding:100px 0}
        .sejin-form-wrapper{display:grid;grid-template-columns:300px 1fr;gap:60px;align-items:stretch}
        .sejin-form-info{display:flex;flex-direction:column;width:300px}
        .sejin-info-title{font-size:36px;font-weight:700;color:#000;line-height:1.3;margin-bottom:20px;letter-spacing:-0.02em}
        .sejin-info-title .highlight{color:var(--gold)}
        .sejin-info-desc{font-size:17px;color:#666;line-height:1.7;margin-bottom:32px}
        .sejin-info-image{margin-bottom:24px;border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.12);width:100%;flex:1 1 0;min-height:200px;display:flex}
        .sejin-info-image img{width:100%;height:100%;object-fit:cover;object-position:center 20%;display:block;flex:1}
        .sejin-contact-box{background:#fff;border:2px solid var(--gold-lighter);border-radius:12px;padding:20px;width:100%;flex-shrink:0}
        .sejin-contact-box-item{display:flex;align-items:center;gap:12px;margin-bottom:12px}
        .sejin-contact-box-item:last-child{margin-bottom:0}
        .sejin-contact-box-item svg{width:24px;height:24px;color:var(--gold);flex-shrink:0}
        .sejin-contact-box-text{font-size:15px;color:#333}
        .sejin-contact-box-text strong{font-size:20px;font-weight:700;color:var(--gold)}
        .sejin-form-area{background:#fff;border-radius:20px;padding:48px;box-shadow:0 15px 50px rgba(0,0,0,0.1)}
        .sejin-form-header{margin-bottom:32px;padding-bottom:24px;border-bottom:2px solid #F3F4F6}
        .sejin-form-title{font-size:26px;font-weight:700;color:#000;margin-bottom:8px}
        .sejin-form-subtitle{font-size:15px;color:#666}
        .sejin-form-row{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:20px}
        .sejin-form-row-half{grid-template-columns:repeat(2,1fr)}
        .sejin-form-group{display:flex;flex-direction:column}
        .sejin-form-full{grid-column:1/-1}
        .sejin-form-label{font-size:14px;font-weight:600;color:#333;margin-bottom:8px}
        .sejin-form-label .required{color:#EF4444}
        .sejin-form-input,.sejin-form-select,.sejin-form-textarea{width:100%;padding:14px 16px;font-size:16px;border:2px solid #E5E7EB;border-radius:8px;background:#fff;transition:all .3s ease;font-family:inherit}
        .sejin-form-input:focus,.sejin-form-select:focus,.sejin-form-textarea:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px rgba(212,165,116,0.1)}
        .sejin-form-input::placeholder,.sejin-form-textarea::placeholder{color:#9CA3AF}
        .sejin-form-textarea{min-height:120px;resize:vertical}
        .sejin-fund-type-group{margin-bottom:24px}
        .sejin-fund-type-label{display:block;font-size:14px;font-weight:600;color:#333;margin-bottom:12px}
        .sejin-fund-type-options{display:flex;flex-wrap:wrap;gap:12px}
        .sejin-fund-type-option{position:relative}
        .sejin-fund-type-option input[type="checkbox"]{position:absolute;opacity:0;width:0;height:0}
        .sejin-fund-type-option label{display:inline-block;padding:10px 20px;font-size:14px;font-weight:500;color:#666;background:#F9FAFB;border:2px solid #E5E7EB;border-radius:8px;cursor:pointer;transition:all .2s ease}
        .sejin-fund-type-option input[type="checkbox"]:checked+label{background:var(--gold-lighter);border-color:var(--gold);color:var(--gold-dark);font-weight:600}
        .sejin-fund-type-option label:hover{border-color:var(--gold);background:#F3F4F6}
        .sejin-privacy-section{margin-top:24px;padding:20px;background:#F9FAFB;border-radius:10px;border:1px solid #E5E7EB}
        .sejin-privacy-checkbox{display:flex;align-items:center;gap:10px}
        .sejin-privacy-checkbox input[type="checkbox"]{width:20px;height:20px;accent-color:var(--gold);cursor:pointer;flex-shrink:0}
        .sejin-privacy-checkbox-label{font-size:14px;font-weight:500;color:#333;cursor:pointer;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
        .sejin-privacy-detail-link{font-size:13px;color:var(--gold);text-decoration:underline;cursor:pointer}
        .sejin-privacy-content{max-height:0;overflow:hidden;transition:max-height .3s ease,margin .3s ease,padding .3s ease}
        .sejin-privacy-content.active{max-height:200px;margin-top:16px;padding-top:16px;border-top:1px solid #E5E7EB}
        .sejin-privacy-content p{font-size:13px;color:#666;line-height:1.6;margin-bottom:6px}
        .sejin-privacy-content p:last-child{margin-bottom:0}
        .sejin-form-submit{margin-top:32px;text-align:center}
        .sejin-submit-button{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:linear-gradient(135deg,var(--gold) 0%,var(--gold-dark) 100%);color:#fff;font-size:18px;font-weight:600;padding:18px 48px;border:none;border-radius:10px;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 16px rgba(212,165,116,0.35);width:100%;max-width:400px;font-family:inherit}
        .sejin-submit-button svg{width:22px;height:22px}
        .sejin-submit-button:hover{background:linear-gradient(135deg,var(--gold-dark) 0%,var(--gold) 100%);transform:translateY(-2px);box-shadow:0 8px 24px rgba(212,165,116,0.5)}
        .sejin-submit-button:disabled{opacity:0.6;cursor:not-allowed;transform:none}
        .sejin-submit-note{margin-top:12px;font-size:13px;color:#999}
        @media(max-width:1023px){
          .sejin-contact-hero-container{padding:80px 40px;gap:60px;grid-template-columns:1fr 1fr}
          .sejin-contact-hero-headline{font-size:48px}
          .sejin-contact-hero-subheadline{font-size:18px;margin-bottom:32px}
          .sejin-contact-hero-visual img{max-width:400px}
          .sejin-contact-process{padding:80px 0}
          .sejin-process-steps{grid-template-columns:repeat(2,1fr);gap:60px 40px}
          .sejin-process-step-card::after{display:none}
          .sejin-process-step-card:nth-child(odd)::after{display:block}
          .sejin-process-step-card:nth-child(3)::after{display:none}
          .sejin-contact-faq{padding:80px 0}
          .sejin-faq-question{padding:20px 24px}
          .sejin-faq-question-text{font-size:17px}
          .sejin-faq-item.active .sejin-faq-answer{padding:0 24px 24px}
          .sejin-contact-form-section{padding:80px 0}
          .sejin-form-wrapper{gap:40px}
          .sejin-info-title{font-size:30px}
          .sejin-info-desc{font-size:16px}
          .sejin-form-area{padding:36px}
          .sejin-form-row{grid-template-columns:repeat(2,1fr)}
          .sejin-form-row-half{grid-template-columns:1fr}
        }
        @media(max-width:767px){
          .sejin-contact-hero{min-height:auto;padding:0}
          .sejin-contact-hero-container{grid-template-columns:1fr;padding:0;gap:0;text-align:center}
          .sejin-contact-hero-content{max-width:100%;padding:40px 20px;order:1}
          .sejin-contact-hero-headline{font-size:26px;margin-bottom:20px;line-height:1.3;word-break:keep-all}
          .sejin-contact-hero-subheadline{font-size:14px;margin-bottom:32px;line-height:1.6;word-break:keep-all}
          .sejin-contact-hero-disclaimer{font-size:11px;margin-top:20px;line-height:1.4}
          .sejin-contact-hero-cta-group{flex-direction:column;gap:12px}
          .sejin-contact-hero-cta-group .sejin-cta-primary,.sejin-contact-hero-cta-group .sejin-cta-ghost{width:100%;justify-content:center;font-size:15px;padding:15px 20px}
          .sejin-contact-hero-visual{order:-1;width:100%}
          .sejin-contact-hero-visual img{max-width:100%;width:100%;aspect-ratio:4/5;border-radius:0;box-shadow:none}
          .sejin-contact-process{padding:60px 0}
          .sejin-process-steps{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:0;padding:0 20px;-ms-overflow-style:none;scrollbar-width:none}
          .sejin-process-steps::-webkit-scrollbar{display:none}
          .sejin-process-step-card{flex:0 0 85%;scroll-snap-align:center;padding:30px 20px;margin-right:16px;background:rgba(255,255,255,0.5);border-radius:16px;backdrop-filter:blur(10px);border:1px solid rgba(212,165,116,0.2)}
          .sejin-process-step-card:last-child{margin-right:0}
          .sejin-process-step-card::after{display:none !important}
          .sejin-step-icon-wrap{width:80px;height:80px;margin-bottom:20px}
          .sejin-step-icon-wrap svg{width:40px;height:40px}
          .sejin-step-number-badge{width:28px;height:28px;font-size:13px}
          .sejin-step-card-title{font-size:18px}
          .sejin-step-card-desc{font-size:14px}
          .sejin-contact-faq{padding:60px 0}
          .sejin-faq-list{gap:12px}
          .sejin-faq-question{padding:16px}
          .sejin-faq-question-text{font-size:13px;padding-right:8px;word-break:keep-all}
          .sejin-faq-label{width:20px;height:20px;font-size:11px;margin-right:8px}
          .sejin-faq-icon{width:24px;height:24px}
          .sejin-faq-icon svg{width:14px;height:14px}
          .sejin-faq-item.active .sejin-faq-answer{padding:0 16px 16px}
          .sejin-faq-answer-text{font-size:13px;line-height:1.7}
          .sejin-contact-form-section{padding:60px 0}
          .sejin-form-wrapper{grid-template-columns:1fr;gap:0}
          .sejin-form-info{display:none}
          .sejin-form-area{padding:28px 20px;border-radius:16px}
          .sejin-form-header{margin-bottom:24px;padding-bottom:20px;text-align:center}
          .sejin-form-title{font-size:22px}
          .sejin-form-subtitle{font-size:14px}
          .sejin-form-row{grid-template-columns:1fr;gap:16px;margin-bottom:16px}
          .sejin-form-row-half{grid-template-columns:1fr}
          .sejin-form-input,.sejin-form-select,.sejin-form-textarea{padding:12px 14px;font-size:15px}
          .sejin-form-textarea{min-height:100px}
          .sejin-fund-type-label{font-size:13px}
          .sejin-fund-type-options{gap:8px}
          .sejin-fund-type-option label{padding:8px 14px;font-size:13px}
          .sejin-privacy-section{padding:16px}
          .sejin-privacy-checkbox-label{font-size:13px}
          .sejin-privacy-detail-link{font-size:12px}
          .sejin-privacy-content p{font-size:12px}
          .sejin-form-submit{margin-top:24px}
          .sejin-submit-button{width:100%;max-width:none;font-size:16px;padding:16px 24px}
          .sejin-submit-note{font-size:12px}
        }
      ` }} />

      {/* Hero Section */}
      <section id="sejin-contact-hero" className="sejin-contact-hero">
        <div className="sejin-contact-hero-container">
          <div className="sejin-contact-hero-content">
            <h1 className="sejin-contact-hero-headline">
              무료 심사로<br/>
              시작하세요
            </h1>

            <p className="sejin-contact-hero-subheadline">
              정책자금부터 인증까지<br/>
              맞춤형 지원 전략을 무료로 확인하세요
            </p>

            <div className="sejin-contact-hero-cta-group">
              <a href="#sejin-contact-form" className="sejin-cta-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
                무료 심사 신청하기
              </a>

              <a href="tel:1877-0773" className="sejin-cta-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                전화 문의하기
              </a>
            </div>

            <p className="sejin-contact-hero-disclaimer">
              ※ 개인역량 및 성장잠재력을 분석합니다.<br/>
              정책자금 서류작성 및 접수대행을 하지 않습니다.
            </p>
          </div>

          <div className="sejin-contact-hero-visual">
            <Image src={IMAGES.contactHero} alt="세진컨설팅 - 무료심사" width={500} height={500} priority />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="sejin-contact-process">
        <div className="sejin-section-container">
          <div className="sejin-section-header">
            <h2 className="sejin-section-title">상담 진행 프로세스</h2>
            <p className="sejin-section-subtitle">
              체계적인 4단계 프로세스로<br/>
              최적의 지원 전략을 제시합니다
            </p>
          </div>

          <div className="sejin-process-steps">
            <div className="sejin-process-step-card">
              <div className="sejin-step-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
                <span className="sejin-step-number-badge">01</span>
              </div>
              <h3 className="sejin-step-card-title">무료심사 신청</h3>
              <p className="sejin-step-card-desc">
                온라인 또는 전화로<br/>
                간편하게 신청하세요
              </p>
            </div>

            <div className="sejin-process-step-card">
              <div className="sejin-step-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                <span className="sejin-step-number-badge">02</span>
              </div>
              <h3 className="sejin-step-card-title">현황 분석</h3>
              <p className="sejin-step-card-desc">
                전문 컨설턴트가<br/>
                현재 상황을 면밀히 분석
              </p>
            </div>

            <div className="sejin-process-step-card">
              <div className="sejin-step-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                <span className="sejin-step-number-badge">03</span>
              </div>
              <h3 className="sejin-step-card-title">맞춤 전략 수립</h3>
              <p className="sejin-step-card-desc">
                상황에 최적화된<br/>
                지원 전략을 제시
              </p>
            </div>

            <div className="sejin-process-step-card">
              <div className="sejin-step-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="sejin-step-number-badge">04</span>
              </div>
              <h3 className="sejin-step-card-title">실행 지원</h3>
              <p className="sejin-step-card-desc">
                신청부터 승인까지<br/>
                전 과정을 밀착 지원
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="sejin-cta-bar">
        <div className="sejin-cta-bar-container">
          <p className="sejin-cta-text">
            지금 바로 <span className="highlight">무료 심사</span>를 신청하세요<br/>
            맞춤형 지원 전략을 확인할 수 있습니다
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sejin-contact-faq">
        <div className="sejin-section-container">
          <div className="sejin-section-header">
            <h2 className="sejin-section-title">자주 묻는 질문</h2>
            <p className="sejin-section-subtitle">
              상담 전 궁금하신 사항을<br className="mobile-br"/>
              빠르게 확인하세요
            </p>
          </div>

          <div className="sejin-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`sejin-faq-item ${openFaq === i ? 'active' : ''}`}>
                <button className="sejin-faq-question" onClick={() => toggleFaq(i)} aria-expanded={openFaq === i}>
                  <div className="sejin-faq-question-inner">
                    <span className="sejin-faq-label">Q</span>
                    <span className="sejin-faq-question-text">{faq.q}</span>
                  </div>
                  <div className="sejin-faq-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </button>
                <div className="sejin-faq-answer">
                  <p className="sejin-faq-answer-text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="sejin-contact-form" className="sejin-contact-form-section">
        <div className="sejin-section-container">
          <div className="sejin-form-wrapper">
            {/* Left: Info */}
            <div className="sejin-form-info">
              <h2 className="sejin-info-title">
                정책자금<br/>
                <span className="highlight">무료 상담 신청</span>
              </h2>
              <p className="sejin-info-desc">
                세진컨설팅의 전문 컨설턴트가<br/>
                맞춤형 자금 조달 방안을<br/>
                제시해드립니다.
              </p>

              <div className="sejin-info-image">
                <Image src={IMAGES.consultantPortrait} alt="정책자금 상담" width={300} height={400} />
              </div>

              <div className="sejin-contact-box">
                <div className="sejin-contact-box-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="sejin-contact-box-text"><strong>1877-0773</strong></span>
                </div>
                <div className="sejin-contact-box-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  <span className="sejin-contact-box-text">평일 09:00 ~ 18:00</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="sejin-form-area">
              <div className="sejin-form-header">
                <h3 className="sejin-form-title">상담 신청서</h3>
                <p className="sejin-form-subtitle">정보를 입력해주시면 전문가가 24시간 내 연락드립니다</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="sejin-form-row">
                  <div className="sejin-form-group">
                    <label htmlFor="company-name" className="sejin-form-label">기업명 <span className="required">*</span></label>
                    <input type="text" id="company-name" name="company-name" className="sejin-form-input" required />
                  </div>
                  <div className="sejin-form-group">
                    <label htmlFor="ceo-name" className="sejin-form-label">대표자명 <span className="required">*</span></label>
                    <input type="text" id="ceo-name" name="ceo-name" className="sejin-form-input" required />
                  </div>
                  <div className="sejin-form-group">
                    <label htmlFor="phone" className="sejin-form-label">연락처 <span className="required">*</span></label>
                    <input type="tel" id="phone" name="phone" className="sejin-form-input" placeholder="010-0000-0000" required />
                  </div>
                  <div className="sejin-form-group">
                    <label htmlFor="consult-time" className="sejin-form-label">통화 가능 시간 <span className="required">*</span></label>
                    <select id="consult-time" name="consult-time" className="sejin-form-select" required>
                      <option value="">선택하세요</option>
                      <option value="09:00-10:00">오전 09:00 - 10:00</option>
                      <option value="10:00-11:00">오전 10:00 - 11:00</option>
                      <option value="11:00-12:00">오전 11:00 - 12:00</option>
                      <option value="14:00-15:00">오후 14:00 - 15:00</option>
                      <option value="15:00-16:00">오후 15:00 - 16:00</option>
                      <option value="16:00-17:00">오후 16:00 - 17:00</option>
                      <option value="17:00-18:00">오후 17:00 - 18:00</option>
                      <option value="언제나가능">언제나 가능</option>
                    </select>
                  </div>
                </div>

                <div className="sejin-form-row sejin-form-row-half">
                  <div className="sejin-form-group">
                    <label htmlFor="amount" className="sejin-form-label">필요 자금 규모</label>
                    <select id="amount" name="amount" className="sejin-form-select">
                      <option value="">선택하세요</option>
                      <option value="5천만원 이하">5천만원 이하</option>
                      <option value="5천만원~1억원">5천만원 ~ 1억원</option>
                      <option value="1억원~3억원">1억원 ~ 3억원</option>
                      <option value="3억원~5억원">3억원 ~ 5억원</option>
                      <option value="5억원~10억원">5억원 ~ 10억원</option>
                      <option value="10억원 이상">10억원 이상</option>
                    </select>
                  </div>
                </div>

                <div className="sejin-fund-type-group">
                  <label className="sejin-fund-type-label">지원받고 싶은 자금 종류 (복수 선택 가능)</label>
                  <div className="sejin-fund-type-options">
                    {['창업자금', '운전자금', '시설자금', '기타자금'].map((type, i) => (
                      <div key={i} className="sejin-fund-type-option">
                        <input type="checkbox" id={`fund${i + 1}`} name="fundType" value={type} />
                        <label htmlFor={`fund${i + 1}`}>{type}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sejin-form-group sejin-form-full">
                  <label htmlFor="message" className="sejin-form-label">문의사항</label>
                  <textarea id="message" name="message" className="sejin-form-textarea" placeholder="필요하신 자금의 용도나 현재 경영 상황 등을 간략히 적어주세요"></textarea>
                </div>

                <div className="sejin-privacy-section">
                  <div className="sejin-privacy-checkbox">
                    <input type="checkbox" id="privacy" name="privacy-agree" required />
                    <label htmlFor="privacy" className="sejin-privacy-checkbox-label">
                      개인정보 수집·이용에 동의합니다 <span className="required">*</span>
                      <span className="sejin-privacy-detail-link" onClick={() => setPrivacyOpen(!privacyOpen)}>내용보기</span>
                    </label>
                  </div>
                  <div className={`sejin-privacy-content ${privacyOpen ? 'active' : ''}`}>
                    <p><strong>1. 수집항목:</strong> 기업명, 대표자명, 연락처, 이메일, 문의내용</p>
                    <p><strong>2. 수집목적:</strong> 정책자금 상담 및 지원 서비스 제공</p>
                    <p><strong>3. 보유기간:</strong> 서비스 종료 후 3년</p>
                    <p><strong>4.</strong> 동의 거부 시 서비스 이용이 제한될 수 있습니다.</p>
                  </div>
                </div>

                <div className="sejin-form-submit">
                  <button type="submit" className="sejin-submit-button" disabled={submitting}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11l3 3L22 4"/>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    </svg>
                    {submitting ? '신청 중...' : '무료 상담 신청하기'}
                  </button>
                  <p className="sejin-submit-note">신청 후 24시간 내 연락드립니다</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
