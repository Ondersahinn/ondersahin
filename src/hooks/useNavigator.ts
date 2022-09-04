import { useEffect, useState } from "react";


const useNavigator = () => {
    const [locale, setLocale] = useState<'tr' | 'en'>();

    useEffect(() => {
        if (typeof navigator !== 'undefined') {
            if (navigator.language !== 'tr') {
                setLocale('en')
            }
            else {
                setLocale('tr')
            }
        }
    }, [])

    return {
        locale
    }
}
export default useNavigator