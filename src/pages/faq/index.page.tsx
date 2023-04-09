import { AccardeonPanel, AtomHeading } from '@/components/Atom'
import { FaqInstruction } from '@/components/Content'
import { PageDecoration } from '@/components/Layout'
import { ClientOnly } from '@/components/Ui'

export const documentProps = {
  title: 'FAQ',
  description: 'Описание страницы',
}

import '@/components/Content/Faq/_faq.scss'
import '@/components/Content/Faq/_faq.scss'

export const Page = () => {
  const { faq } = useAppSelector((state) => state.sessionState)
  const [activeAccardeon, setActiveAccardeon] = useState<number | null>(null)

  return (
    <PageDecoration sectionClassName="faq">
      <div className="container _wide">
        <AtomHeading className="faq__head" useBack={true}>
          <h2 className="h3-title">КАК ЭТО РАБОТАЕТ?</h2>
        </AtomHeading>

        <div className="faq__wrapper">
          <FaqInstruction />

          <p className="faq__subtitle h3-title">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</p>

          <ul className="accordeon">
            {faq &&
              faq.map((faqitem, idx) => (
                <AccardeonPanel
                  key={idx}
                  faqitem={faqitem}
                  isActive={activeAccardeon === idx}
                  handleToggle={() => setActiveAccardeon(idx)}
                />
              ))}
          </ul>
        </div>
      </div>
    </PageDecoration>
  )
}
