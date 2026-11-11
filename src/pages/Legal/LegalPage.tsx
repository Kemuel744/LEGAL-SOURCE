import { Container } from '@/components/common/Container'
import { LegalContent } from '@/components/common/LegalContent'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { legalPages, type LegalPageKey } from '@/data/legal'

type LegalPageProps = {
  page: LegalPageKey
}

export default function LegalPage({ page }: LegalPageProps) {
  const config = legalPages[page]

  useDocumentMeta({
    title: config.title,
    description: config.description,
    path: config.path,
    type: 'article',
    updatedAt: config.updatedAt,
  })

  return (
    <section className="section">
      <Container>
        <LegalContent
          title={config.title}
          sections={config.sections}
          updatedAt={config.updatedAt}
          currentPath={config.path}
        />
      </Container>
    </section>
  )
}
