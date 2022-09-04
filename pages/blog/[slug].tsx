

const BlogDetail = () => {


    return (
        <>
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <h1>ReactJs &Ouml;zel API Servisi ve Interceptor ile API İsteklerini Takip Etme</h1>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*VjWJqiAXy8A9EFEAO-cY3w.jpeg" /></p>

            <p>Api isteklerini d&uuml;zenli bir şekilde y&ouml;netmek ve her component de aynı api fonksiyonunu yazmamak i&ccedil;in genel bir yapı kurabilirsiniz.</p>

            <p>Axios interceptors fonksiyonu api isteklerini takip eder ve hata durumuna g&ouml;re istediğiniz işlemleri ger&ccedil;ekleştirmenizi sağlar.</p>

            <p>Şimdi bir react projesi oluşturup adımları beraber yapalım.</p>

            <p>npm veya yarn ile bir react projesi oluşturup src i&ccedil;ersine constans klas&ouml;r&uuml;n&uuml; a&ccedil;alım.</p>

            <blockquote>
                <p>Not: npm ile bir react projesi oluşturma (<code>npx create-react-app my-app</code>).<br />
                    yarn ile bir react projesi oluşturma (<code><em>yarn create react-app my-app</em></code>).</p>
            </blockquote>

            <p>Constans klas&ouml;r&uuml; i&ccedil;erisine header.json ve config.json dosyalarını oluşturalım. config.json dosyasına kullanacağımız urlleri tanımlıyoruz.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*6cUfndHL9c0fPqWkhFhZEA.png" /></p>

            <p>config.json</p>

            <p>header.json dosyasın da api isteklerindeki kullanacağımız content type &lsquo;ları belirtiyoruz.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*pe-utA22Oj_QhKpvH7jOrw.png" /></p>

            <p>header.json</p>

            <p>Şimdi src i&ccedil;erisine api &gt; client klas&ouml;r&uuml; a&ccedil;ıp client.js, errorParser.js ve https.js dosyalarını oluşturalım.</p>

            <p>errorParser.js hatalı http isteklerini istediğimiz formata &ccedil;evireceğimiz bir fonksiyon yazıp export edelim. Api isteği hataya d&uuml;şt&uuml;ğ&uuml;nde bu fonksiyon &ccedil;alışarak status ve mesajı formatlayıp return etmektedir.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*uVQI82ElGqdyU_Kj92OfRw.png" /></p>

            <p>errorParser.js</p>

            <p>http.js dosyamız da axios create ederek api isteği &uuml;zerinde ki ayarlarımızı yapıyoruz. Burada interceptor request ve response y&ouml;netebiliriz. Burada ki &ouml;rnekte her api isteğinde bearer token&rsquo;ı ayrı ayrı g&ouml;ndermek yerine interceptor request ile her api isteğinde iletilmesini sağladık.</p>

            <p>Sizler request ve response fonksiyonunda gereksinim duyduğunuz işlemleri ger&ccedil;ekleştirebilirsiniz. Axios create ettikten sonra t&uuml;m axios methodlarını http.js &uuml;zerinden y&ouml;neterek interceptor &lsquo;&uuml;n &ccedil;alışmasını sağlayacağız.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*6nkWnRtJE5xdaOYmqPQUjQ.png" /></p>

            <p>http.js</p>

            <p>client.js dosyası axios methodlarının bulunduğu alandır burada kullanacağınız axios methodlarını yazıp export edelim. Dikkat ederseniz http.js dosyasında axios create etmiştik burada doğrudan axios methodlarını kullanmadık http.js &uuml;zerinden get, post, delete ve put methodlarını oluşturduk.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*PpyDSRf3ohaMVgWV6N-UQw.png" /></p>

            <p>client.js</p>

            <p>Şimdi api &gt; service klas&ouml;r&uuml; a&ccedil;ıp i&ccedil;erisine dataParser.js ve generalService.js dosyaları oluşturalım.</p>

            <p>dataParser.js de servisten d&ouml;nen cevabı success ve error olarak formatlayarak her api cevabını standart bir formata d&ouml;n&uuml;şt&uuml;rm&uuml;ş oluyoruz.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*t332HkwoxO9D99tenaxA3A.png" /></p>

            <p>dataParser.js</p>

            <p>Geriye yazmış olduğumuz bu yapıda api istekleri i&ccedil;in &ouml;zel dosyalar oluşturup bu dosyalar da ilgili api leri y&ouml;netmek kaldı.</p>

            <p>Genel api istekleri i&ccedil;in generalService.js dosyasını oluşturdum. Burada isteklerimizi gruplayıp ona g&ouml;re dosyalar oluşturarak yalın ve okunabilir servis hazırlamış olacağız.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*7hk4lU8Dpe2v0WC08BOdNQ.png" /></p>

            <p>generalService.js</p>

            <p>Yapıyı oluşturduktan sonra kullanmak istediğimiz servisde ki fonksiyonu &ccedil;ağırıp sonucu g&ouml;rebiliriz.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*PFMVHMUqle55usEqckiCWg.png" /></p>

            <p>App.js</p>

            <p>T&uuml;m servislerinizi fonksiyonlara &ccedil;evirerek dinamik bir yapı oluşturduk. Bu yapıda her component de axios import edip config&rsquo;lerini yada body ayarlamak zorunda kalmıyoruz. D&uuml;zenli ve temiz bir g&ouml;r&uuml;n&uuml;m elde etmiş olduk.</p>

            <p>Github:&nbsp;<a href="https://github.com/Ondersahinn/axios-interceptor-and-custom-services" target="_blank" rel="noreferrer">https://github.com/Ondersahinn/axios-interceptor-and-custom-services</a></p>

        </>
    )
}

export default BlogDetail