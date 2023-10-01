import { useRouter } from 'next/router'
import en from '../public/lang/en.js'
import vi from '../public/lang/vi.js'

const useTrans = () => {
    const { locale } = useRouter()

    const trans = locale === 'vi' ? vi : en

    return trans
}

export const GetCurrentLang = ()=>{
    const { locale } = useRouter()

    return locale === 'vi' ? 'vi' : 'en'
}

export default useTrans
