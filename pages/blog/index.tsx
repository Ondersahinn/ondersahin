import Link from "next/link"
import { slugify } from "src/constants"

const Blog = () => {

    return (
        <>
            <div>
                <Link href={'/blog/' + slugify('ReactJs Özel API Servisi ve Interceptor ile API İsteklerini Takip Etme')}>
                    <h3 className="dark:text-white text-lg font-bold">ReactJs Özel API Servisi ve Interceptor ile API İsteklerini Takip Etme</h3>
                </Link>
                <p className="text-gray-300 mt-4">Api isteklerini düzenli bir şekilde yönetmek ve her component de aynı api fonksiyonunu yazmamak için genel bir yapı kurabilirsiniz.
                    Axios interceptors fonksiyonu ile api isteklerini takip eder ve hata durumuna göre istediğiniz işlemleri gerçekleştirmenizi sağlar.</p>
                <div className="text-gray-300 text-sm mt-2">#ractJs #axios #interceptors #client #api</div>

            </div>
        </>
    )
}
export default Blog