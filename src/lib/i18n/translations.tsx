export type LanguageData = {
    name: string;
    flag: React.ReactNode;
    translations: Record<string, string | (string | undefined | object)[]>;
};

const en = {
    name: "English",
    flag: (
        <svg viewBox="0 0 32 21" className="h-5">
            <path
                d="M31.5067 1.61538C30.8907 0.653423 29.7573 0 28.4444 0H16V1.61538H31.5067ZM0 16.1538H32V17.7692H0V16.1538ZM16 9.69231H32V11.3077H16V9.69231ZM16 6.46154H32V8.07692H16V6.46154ZM0 12.9231H32V14.5385H0V12.9231ZM3.55556 21H28.4444C29.7573 21 30.8907 20.3466 31.5067 19.3846H0.493333C1.10933 20.3466 2.24267 21 3.55556 21ZM16 3.23077H32V4.84615H16V3.23077Z"
                fill="#B22334"
            />
            <path
                d="M0.0604444 18.3176C0.0755556 18.3927 0.0924444 18.4679 0.112889 18.5414C0.136 18.6229 0.164444 18.7013 0.194667 18.7804C0.273778 18.9896 0.369778 19.1915 0.490667 19.3805L0.493333 19.3846H31.5067L31.5084 19.3814C31.6278 19.1909 31.7266 18.9905 31.8036 18.7829C31.8621 18.6313 31.9073 18.4757 31.9387 18.3176C31.9751 18.1399 32 17.9574 32 17.7692H0C0 17.9574 0.0248889 18.1391 0.0604444 18.3176ZM0 14.5384H32V16.1538H0V14.5384ZM0 11.3077V12.923H32V11.3077H16H0ZM16 8.07689H32V9.69228H16V8.07689ZM16 4.84613H32V6.46151H16V4.84613ZM0.493333 1.61536L0.490667 1.61939L0.493333 1.61536ZM0.113778 2.45859C0.136 2.3762 0.167111 2.29786 0.195556 2.2187C0.164687 2.29761 0.137405 2.37764 0.113778 2.45859V2.45859ZM16 3.23074H32C32 3.04255 31.9751 2.86001 31.9387 2.68151C31.9075 2.52329 31.862 2.36768 31.8027 2.21628C31.7256 2.00774 31.6265 1.80649 31.5067 1.61536H16V3.23074Z"
                fill="#EEEEEE"
            />
            <path d="M16 0H3.55556C2.61256 0 1.70819 0.340384 1.0414 0.94627C0.374602 1.55216 0 2.37392 0 3.23077L0 11.3077H16V0Z" fill="#3C3B6E" />
            <path
                d="M1.77866 2.20174L2.32799 2.5644L2.11821 3.14997L2.66666 2.78813L3.21599 3.14997L3.00621 2.5644L3.55555 2.20174H2.87643L2.66666 1.61536L2.45777 2.20174H1.77866ZM3.55643 3.81713L4.10577 4.17978L3.89599 4.76536L4.44443 4.40351L4.99377 4.76536L4.78399 4.17978L5.33332 3.81713H4.65421L4.44443 3.23074L4.23555 3.81713H3.55643ZM7.11199 3.81713L7.66132 4.17978L7.45155 4.76536L7.99999 4.40351L8.54932 4.76536L8.33955 4.17978L8.88888 3.81713H8.20977L7.99999 3.23074L7.7911 3.81713H7.11199ZM10.6675 3.81713L11.2169 4.17978L11.0071 4.76536L11.5555 4.40351L12.1049 4.76536L11.8951 4.17978L12.4444 3.81713H11.7653L11.5555 3.23074L11.3467 3.81713H10.6675ZM3.55643 7.04789L4.10577 7.41055L3.89599 7.99613L4.44443 7.63428L4.99377 7.99613L4.78399 7.41055L5.33332 7.04789H4.65421L4.44443 6.46151L4.23555 7.04789H3.55643ZM7.11199 7.04789L7.66132 7.41055L7.45155 7.99613L7.99999 7.63428L8.54932 7.99613L8.33955 7.41055L8.88888 7.04789H8.20977L7.99999 6.46151L7.7911 7.04789H7.11199ZM10.6675 7.04789L11.2169 7.41055L11.0071 7.99613L11.5555 7.63428L12.1049 7.99613L11.8951 7.41055L12.4444 7.04789H11.7653L11.5555 6.46151L11.3467 7.04789H10.6675ZM5.33421 2.20174L5.88355 2.5644L5.67377 3.14997L6.22221 2.78813L6.77155 3.14997L6.56177 2.5644L7.1111 2.20174H6.43199L6.22221 1.61536L6.01332 2.20174H5.33421ZM8.88977 2.20174L9.4391 2.5644L9.22932 3.14997L9.77777 2.78813L10.3271 3.14997L10.1173 2.5644L10.6667 2.20174H9.98755L9.77777 1.61536L9.56888 2.20174H8.88977ZM12.4453 2.20174L12.9947 2.5644L12.7849 3.14997L13.3333 2.78813L13.8827 3.14997L13.6729 2.5644L14.2222 2.20174H13.5431L13.3333 1.61536L13.1244 2.20174H12.4453ZM1.77866 5.43251L2.32799 5.79516L2.11821 6.38074L2.66666 6.01889L3.21599 6.38074L3.00621 5.79516L3.55555 5.43251H2.87643L2.66666 4.84613L2.45777 5.43251H1.77866ZM5.67377 6.38074L6.22221 6.01889L6.77155 6.38074L6.56177 5.79516L7.1111 5.43251H6.43199L6.22221 4.84613L6.01332 5.43251H5.33421L5.88355 5.79516L5.67377 6.38074ZM8.88977 5.43251L9.4391 5.79516L9.22932 6.38074L9.77777 6.01889L10.3271 6.38074L10.1173 5.79516L10.6667 5.43251H9.98755L9.77777 4.84613L9.56888 5.43251H8.88977ZM12.4453 5.43251L12.9947 5.79516L12.7849 6.38074L13.3333 6.01889L13.8827 6.38074L13.6729 5.79516L14.2222 5.43251H13.5431L13.3333 4.84613L13.1244 5.43251H12.4453ZM1.77866 8.66328L2.32799 9.02593L2.11821 9.61151L2.66666 9.24966L3.21599 9.61151L3.00621 9.02593L3.55555 8.66328H2.87643L2.66666 8.07689L2.45777 8.66328H1.77866ZM5.67377 9.61151L6.22221 9.24966L6.77155 9.61151L6.56177 9.02593L7.1111 8.66328H6.43199L6.22221 8.07689L6.01332 8.66328H5.33421L5.88355 9.02593L5.67377 9.61151ZM8.88977 8.66328L9.4391 9.02593L9.22932 9.61151L9.77777 9.24966L10.3271 9.61151L10.1173 9.02593L10.6667 8.66328H9.98755L9.77777 8.07689L9.56888 8.66328H8.88977ZM12.4453 8.66328L12.9947 9.02593L12.7849 9.61151L13.3333 9.24966L13.8827 9.61151L13.6729 9.02593L14.2222 8.66328H13.5431L13.3333 8.07689L13.1244 8.66328H12.4453Z"
                fill="white"
            />
        </svg>
    ),
    translations: {
        mainTitle: ["Making Things", "Simple", "For You"],
        mainSubtitle: ["Let's grow your brand together.", "We know handling business is hard, let us help you so you don't have to do everything yourself."],
        mainStoryButton: "See The Story",
        mainDeckButton: "View Our Company Deck",
        mainPricingButton: "View Our Pricing",
        mainStorySubtitles: [
            "Running a business alone is hard...",
            undefined,
            undefined,
            "You get tired, and sometimes you get stressed...",
            undefined,
            "But don't worry, we're here to help you!",
            undefined,
            undefined,
            "Let's grow together and make your business shine! ✨",
        ],
        introText1: ["We believe that every process should be", "simple and easy", "for everyone to understand."],
        introText2: ["And we also believe that great products", "should be delivered to everyone", "regardless of market level or anything."],
        partnersText: "These were the brands who trusted us to grow their brand to the top.",
        portfolioTitle: "Featured Projects",
        servicesTitle: ["We Do", "A Lot", "Of", "Things"],
        servicesList: [
            {
                name: "Graphic Design",
                description: "Build your own imaginative world.",
            },
            {
                name: "UI/UX Design",
                description: "Designing experiences that delight and inspire.",
            },
            {
                name: "Chat Bot",
                description: "Revolutionize your customer support with chatbots",
            },
            {
                name: "Social Media Management",
                description: "Boost your brand with strategic social media.",
            },
            {
                name: "Digital Advertising",
                description: "Maximizing your online presence with targeted ads.",
            },
            {
                name: "Web Development",
                description: "Building digital solutions that power your business.",
            },
            {
                name: "Branding",
                description: "Crafting identities that leave a lasting impression.",
            },
            {
                name: "Managed Hosting",
                description: "Secure, reliable, and hassle-free hosting solutions.",
            },
        ],
        faqTitle: ["You Probably", "Ask", "These Questions"],
        faqContents: [
            {
                question: "Why don't i just hire an in-house team?",
                answer: [
                    "Hiring an in-house team is a great idea, but it's not always the best option. Hiring an in-house team means you have to pay for their salary, insurance, and other benefits. Not to mention the time and effort you have to spend to find the right people for the job. With us, you don't have to worry about any of that. We'll take care of everything for you.",
                ],
            },
            {
                question: "Do you offer web maintenance service?",
                answer: ["Yes, we do. We offer web maintenance service for all of our clients. We'll make sure your website is always up-to-date and secure."],
            },
            {
                question: "Why don't i just hire a freelancer?",
                answer: [
                    "Hiring a freelancer is a great idea, but it's not always the best option. Hiring a freelancer means you have to spend time and effort to find the right person for the job. With us, you don't have to worry about any of that. We'll take care of everything for you.",
                    "Also with us, you'll get a team of experts working on your project instead of just one person. This means you'll get better results in less time.",
                ],
            },
            {
                question: "How do managed hosting work?",
                answer: [
                    "Our managed hosting service let you focus on your business while we take care of your application's infrastructure. We'll make sure your application is always up-to-date and secure.",
                    "We'll keeping the uptime of your application as high as possible. We'll also make sure your application is always up-to-date and secure.",
                ],
            },
            {
                question: "Can i contact the team directly?",
                answer: [
                    "Unfortunately, no. We don't allow direct contact between our clients and our team. This is to ensure that our team can focus on their work without any distractions.",
                    "But don't worry, we have a dedicated project manager who will be your point of contact. You can contact them anytime you want. They'll be happy to help you with anything you need.",
                ],
            },
            {
                question: "What's the difference between logo and branding?",
                answer: [
                    "Logo is a symbol or other small design adopted by an organization to identify its products, uniform, vehicles, etc.",
                    "Branding is the process of creating a unique name and image for a product in the consumers' mind, mainly through advertising campaigns with a consistent theme.",
                    "In short, logo is a part of branding. Branding is a bigger concept than logo.",
                ],
            },
        ],
        blogTitle: "Blogs & Insights",
        blogButton: "Check Our Blog",
        contactTitle: ["Every Great Thing", "Is", "Always", "Made", "Together"],
        contactSubtitle: [
            "Ready to take your business to the next level?",
            "Whether you have a specific project in mind or need ongoing support, our team is here to provide you with top-notch service and creative solutions.",
        ],
        contactMeetingButton: ["Schedule A", "Meeting"],
        contactUsButton: "Contact Us",
        footerContactTitle: ["Let's Get", "Connected"],
        footerAttributionText: ["A brand of", "company registered in Indonesia"],
    },
} satisfies LanguageData;

const id: typeof en = {
    name: "Bahasa Indonesia",
    flag: (
        <svg viewBox="0 0 32 21" className="h-5">
            <path
                d="M28.4444 0H3.55556C2.61256 0 1.70819 0.340383 1.0414 0.94627C0.374602 1.55216 0 2.37392 0 3.23077L0 10.5H32V3.23077C32 2.37392 31.6254 1.55216 30.9586 0.94627C30.2918 0.340383 29.3874 0 28.4444 0V0Z"
                fill="#DC1F26"
            />
            <path
                d="M32 17.7692C32 18.6261 31.6254 19.4478 30.9586 20.0537C30.2918 20.6596 29.3874 21 28.4444 21H3.55556C2.61256 21 1.70819 20.6596 1.0414 20.0537C0.374602 19.4478 0 18.6261 0 17.7692V10.5H32V17.7692Z"
                fill="#EEEEEE"
            />
        </svg>
    ),
    translations: {
        mainTitle: ["Membuat Semuanya", "Lebih Sederhana", "Untukmu"],
        mainSubtitle: ["Mari berkembang bersama.", "Kami tahu menangani bisnis itu sulit, biarkan kami membantu Anda sehingga Anda tidak perlu melakukan semuanya sendiri."],
        mainStoryButton: "Lihat Cerita Kami",
        mainDeckButton: "Lihat Presentasi Kami",
        mainPricingButton: "Cek Harga Kami",
        mainStorySubtitles: [
            "Menjalankan bisnis sendirian itu sulit...",
            undefined,
            undefined,
            "Seringkali Anda menjadi lelah, dan kadang-kadang Anda menjadi stres...",
            undefined,
            "Tapi jangan khawatir, kami di sini untuk membantu Anda!",
            undefined,
            undefined,
            "Mari berkembang bersama dan buat bisnis Anda bersinar! ✨",
        ],
        introText1: ["Kami percaya bahwa setiap proses seharusnya", "lebih sederhana dan mudah", "untuk semuanya."],
        introText2: ["Dan kami juga percaya bahwa produk hebat", "seharusnya dapat diberikan kepada semua orang", "terlepas dari tingkat pasar atau apapun."],
        partnersText: "Ini adalah merek yang mempercayai kami untuk menumbuhkan merek mereka ke atas.",
        portfolioTitle: "Pekerjaan Kami",
        servicesTitle: ["Kami Melalukan", "Banyak", "Sekali", "Hal"],
        servicesList: [
            {
                name: "Desain Grafis",
                description: "Bangun dunia imajinatif Anda sendiri.",
            },
            {
                name: "Desain UI/UX",
                description: "Merancang pengalaman yang menyenangkan dan menginspirasi.",
            },
            {
                name: "Chat Bot",
                description: "Buat pelanggan Anda lebih cepat berkomunikasi dengan chatbots",
            },
            {
                name: "Manajemen Media Sosial",
                description: "Tingkatkan merek Anda dengan media sosial yang strategis.",
            },
            {
                name: "Iklan Digital",
                description: "Memaksimalkan kehadiran online Anda dengan iklan bertarget.",
            },
            {
                name: "Pengembangan Web",
                description: "Membangun solusi digital yang memberi daya pada bisnis Anda.",
            },
            {
                name: "Branding",
                description: "Membuat identitas yang meninggalkan kesan abadi.",
            },
            {
                name: "Pengelolaan Hosting",
                description: "Solusi hosting yang aman, andal, dan bebas repot.",
            },
        ],
        faqTitle: ["Kamu Mungkin", "Menayakan", "Hal Berikut"],
        faqContents: [
            {
                question: "Mengapa saya tidak mempekerjakan tim internal saja??",
                answer: [
                    "Menyewa tim internal adalah ide yang bagus, tetapi itu tidak selalu merupakan pilihan terbaik. Menyewa tim internal berarti Anda harus membayar gaji, asuransi, dan tunjangan lainnya. Belum lagi waktu dan upaya yang harus Anda habiskan untuk menemukan orang yang tepat untuk pekerjaan itu. Bersama kami, Anda tidak perlu khawatir tentang semua itu. Kami akan mengurus semuanya untuk Anda.",
                ],
            },
            {
                question: "Apakah Anda menawarkan layanan pemeliharaan web?",
                answer: ["Ya, kita lakukan. Kami menawarkan layanan pemeliharaan web untuk semua klien kami. Kami akan memastikan situs web Anda selalu terkini dan aman."],
            },
            {
                question: "Mengapa saya tidak menyewa freelancer saja?",
                answer: [
                    "Menyewa freelancer adalah ide yang bagus, tetapi itu tidak selalu merupakan pilihan terbaik. Menyewa freelancer berarti Anda harus menghabiskan waktu dan upaya untuk menemukan orang yang tepat untuk pekerjaan itu. Bersama kami, Anda tidak perlu khawatir tentang semua itu. Kami akan mengurus semuanya untuk Anda.",
                    "Juga dengan kami, Anda akan mendapatkan tim ahli yang mengerjakan proyek Anda, bukan hanya satu orang. Ini berarti Anda akan mendapatkan hasil yang lebih baik dalam waktu yang lebih sedikit.",
                ],
            },
            {
                question: "Bagaimana cara kerja pengelolaan hosting?",
                answer: [
                    "Layanan hosting terkelola kami memungkinkan Anda untuk fokus pada bisnis Anda sementara kami mengurus infrastruktur aplikasi Anda. Kami akan memastikan aplikasi Anda selalu diperbarui dan aman.",
                    "Kami akan menjaga waktu aktif aplikasi Anda setinggi mungkin. Kami juga akan memastikan aplikasi Anda selalu diperbarui dan aman.",
                ],
            },
            {
                question: "Dapatkah saya menghubungi tim secara langsung?",
                answer: [
                    "Sayangnya tidak ada. Kami tidak mengizinkan kontak langsung antara klien kami dan tim kami. Ini untuk memastikan bahwa tim kami dapat fokus pada pekerjaan mereka tanpa gangguan apa pun.",
                    "Tapi jangan khawatir, kami memiliki manajer proyek khusus yang akan menjadi titik kontak Anda. Anda dapat menghubungi mereka kapan saja Anda mau. Mereka akan dengan senang hati membantu Anda dengan apa pun yang Anda butuhkan.",
                ],
            },
            {
                question: "Apa perbedaan antara logo dan branding?",
                answer: [
                    "Logo adalah simbol atau desain kecil lainnya yang diadopsi oleh organisasi untuk mengidentifikasi produk, seragam, kendaraan, dll.",
                    "Branding adalah proses menciptakan nama dan gambar yang unik untuk suatu produk dalam pikiran konsumen, terutama melalui kampanye iklan dengan tema yang konsisten.",
                    "Singkatnya, logo adalah bagian dari branding. Branding adalah konsep yang lebih besar dari logo.",
                ],
            },
        ],
        blogTitle: "Blog & Wawasan",
        blogButton: "Cek Blog Kami",
        contactTitle: ["Setiap Hal Hebat", "Pasti", "Selalu", "Dibuat", "Bersama"],
        contactSubtitle: [
            "Siap membawa bisnis Anda ke tingkat berikutnya?",
            "Jika anda sudah memiliki sebuah ide atau butuh bantuan, tim kami akan siap memberi Anda layanan terkemuka dan solusi kreatif.",
        ],
        contactMeetingButton: ["Jadwalkan", "Meeting"],
        contactUsButton: "Kontak Kami",
        footerContactTitle: ["Mari", "Terhubung"],
        footerAttributionText: ["Merek dagang dari", "perusahaan terdaftar di Indonesia"],
    },
};

const languages = {
    en,
    id,
};

export default languages;
