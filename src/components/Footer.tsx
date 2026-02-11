import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="sejin-footer" className="sejin-footer">
      <div className="sejin-footer-container">
        {/* Footer Main */}
        <div className="sejin-footer-main">
          {/* Company Info */}
          <div className="sejin-footer-company">
            <div className="sejin-footer-logo">
              <img src="/images/logo-white.png" alt="세진컨설팅 로고" />
            </div>

            <p className="sejin-footer-description">
              대표님의 역량을 정확히 분석하고,<br />
              최적의 정책자금 솔루션을 제공합니다.
            </p>

            <div className="sejin-footer-info">
              <div><strong>상호</strong> 세진컨설팅</div>
              <div><strong>대표</strong> 유현서</div>
              <div><strong>사업자번호</strong> 446-39-01281</div>
              <div><strong>주소</strong> 대전광역시 서구 둔산로 73번길 22, 404호 (둔산동, 블루샵)</div>
            </div>
          </div>

          {/* Contact */}
          <div className="sejin-footer-contact">
            <h3 className="sejin-footer-heading">연락처</h3>
            <div className="sejin-contact-list">
              <div className="sejin-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <a href="tel:1877-0773" className="sejin-phone-highlight">1877-0773</a>
                </div>
              </div>

              <div className="sejin-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <a href="mailto:a01077457213@gmail.com">a01077457213@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sejin-footer-links">
            <h3 className="sejin-footer-heading">바로가기</h3>
            <ul className="sejin-footer-nav">
              <li><Link href="/">홈</Link></li>
              <li><Link href="/fund">정책자금</Link></li>
              <li><Link href="/certification">인증지원</Link></li>
              <li><Link href="/success">성공사례</Link></li>
              <li><Link href="/contact#sejin-contact-form">무료심사</Link></li>
            </ul>
          </div>
        </div>

        {/* Partnership Section (JJK) */}
        <div className="sejin-partnership-section">
          <div className="sejin-partnership-link">
            <a href="http://jjk-biz.com/" target="_blank" rel="noopener noreferrer">
              <img src="/images/jjk-logo.png" alt="업무협약 아이콘" className="sejin-partnership-icon" />
              <span>정책자금지원센터 | 업무협약 세진컨설팅</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="sejin-footer-bottom">
          <p className="sejin-footer-copyright">
            &copy; 2026 세진컨설팅. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
