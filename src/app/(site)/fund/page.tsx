import type { Metadata } from 'next'
import FundClient from './FundClient'
import JsonLd from '@/components/JsonLd'
import { pageMetadata } from '@/lib/seo/metadata'
import { serviceSchema, breadcrumbSchema } from '@/lib/seo/schemas'

export const metadata: Metadata = pageMetadata.fund

export default function FundPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema('fund'),
          breadcrumbSchema([
            { name: '홈', url: 'https://sejin.ai.kr' },
            { name: '자금상담', url: 'https://sejin.ai.kr/fund' },
          ]),
        ]}
      />
      <FundClient />
    </>
  )
}
