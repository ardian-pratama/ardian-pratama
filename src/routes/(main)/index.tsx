import { LandscapeStackCard } from '@/components/card/LandscapeStackCard'
import { PortraitStackCard } from '@/components/card/PortraitStackCard'
import { StoryCard } from '@/components/card/StoryCard'
import { Timeline } from '@/components/Timeline'
import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'
import { BookOpen } from 'lucide-react'

const potraitCardData = [
  {
    img_url: '/images/ardian-pratama-potrait.webp',
    className: 'relative',
    motion: {
      initial: {
        scale: 1,
      },
      animate: {
        scale: 1.05,
      },
      transition: {
        duration: 0.4,
      },
    },
  },
  {
    img_url: '/images/ardian-pratama-potrait.webp',
    className: 'absolute -z-10',
    motion: {
      initial: {
        x: 0,
        rotate: 0,
        scale: 0.85,
      },
      animate: {
        x: -80,
        rotate: -15,
      },
      transition: {
        duration: 0.4,
      },
    },
  },
  {
    img_url: '/images/ardian-pratama-potrait.webp',
    className: 'absolute -z-10',
    motion: {
      initial: {
        x: 0,
        rotate: 0,
        scale: 0.85,
      },
      animate: {
        x: 80,
        rotate: 15,
      },
      transition: {
        duration: 0.4,
      },
    },
  },
];


const landscapeCardData = [
  {
    img_url: '/images/ardian-pratama-landscape.webp',
    className: 'relative',
    motion: {
      initial: {
        rotate: 0,
        scale: 1,
      },
      animate: {
        rotate: 5,
        scale: 1.05,
      },
      transition: {
        duration: 0.4,
      },
    },
  },
  {
    img_url: '/images/ardian-pratama-landscape.webp',
    className: 'absolute -z-10 origin-bottom-right',
    motion: {
      initial: {
        rotate: 0,
        scale: 0.85,
      },
      animate: {
        rotate: -10,
      },
      transition: {
        duration: 0.4,
      },
    },
  },
  {
    img_url: '/images/ardian-pratama-landscape.webp',
    className: 'absolute -z-10 origin-bottom-right',
    motion: {
      initial: {
        rotate: 0,
        scale: 0.85,
      },
      animate: {
        rotate: 20,
      },
      transition: {
        duration: 0.4,
      },
    },
  },
]


const journeyData = [
  {
    side: 'left',
    icon: <BookOpen />,
    title: 'Awal yang Sederhana',
    description:
      'Semua bermula dari rasa penasaran sederhana yang mendorong ke dunia baru. Tanpa arah pasti, hanya mengikuti keinginan untuk mencoba dan memahami lebih jauh.',
  },
  {
    side: 'right',
    icon: <BookOpen />,
    title: 'Langkah Tanpa Kepastian',
    description:
      'Di awal perjalanan, keraguan sering muncul dan membuat langkah terasa goyah. Namun tetap berjalan, percaya bahwa setiap proses akan membawa ke arah yang tepat.',
  },
  {
    side: 'left',
    icon: <BookOpen />,
    title: 'Belajar dari Ketidaktahuan',
    description:
      'Kesalahan demi kesalahan menjadi bagian yang tidak terhindarkan. Dari sana, mulai memahami bahwa belajar bukan tentang kesempurnaan, melainkan tentang keberanian menghadapi dan memperbaiki diri.',
  },
  {
    side: 'right',
    icon: <BookOpen />,
    title: 'Kepercayaan Pertama',
    description:
      'Ketika bergabung dalam organisasi dan dipercaya memegang tanggung jawab besar. Rasa bangga hadir, namun diiringi ketakutan karena sadar belum sepenuhnya siap menjalani peran tersebut.',
  },
  {
    side: 'left',
    icon: <BookOpen />,
    title: 'Harga Sebuah Tanggung Jawab',
    description:
      'Tanggung jawab itu mengajarkan bahwa setiap hal besar sering datang bersama pengorbanan. Waktu, tenaga, dan kenyamanan harus dilepas agar amanah yang diberikan dapat dijalankan dengan sebaik mungkin.',
  },
  {
    side: 'right',
    icon: <BookOpen />,
    title: 'Titik Jenuh dan Ragu',
    description:
      'Ada masa di mana lelah dan ragu datang bersamaan. Mulai mempertanyakan perjalanan ini, merasa usaha yang dilakukan belum sepadan dengan harapan.',
  },
  {
    side: 'left',
    icon: <BookOpen />,
    title: 'Memilih untuk Bertahan',
    description:
      'Di tengah keraguan, memutuskan untuk tetap bertahan. Meski langkah terasa kecil dan lambat, aku percaya bahwa konsistensi adalah kunci untuk melewati setiap proses.',
  },
  {
    side: 'right',
    icon: <BookOpen />,
    title: 'Tidak Harus Sendiri',
    description:
      'Perlahan menyadari bahwa tanggung jawab besar tidak harus dipikul sendirian. Berbagi peran, saling mendukung, dan bergerak menuju tujuan yang sama.',
  },
  {
    side: 'left',
    icon: <BookOpen />,
    title: 'Proses yang Membentuk',
    description:
      'Setiap pengalaman, baik keberhasilan maupun kegagalan, membentuk cara melihat dan menjalani perjalanan ini. Belajar menjadi lebih kuat, dan menghargai setiap proses yang dilalui.',
  },
  {
    side: 'right',
    icon: <BookOpen />,
    title: 'Makna dari Perjalanan',
    description:
      'Kini aku memahami bahwa hal besar tidak selalu dicapai melalui pengorbanan. Setiap langkah, jatuh, dan bangun pada akhirnya akan menemukan maknanya.',
  },
]

const storyData = [
  {
    author: {
      name: 'Ardian Pratama',
      avatar_url: '/images/ardian-pratama-potrait.webp'
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nesciunt ad voluptatibus! Vero ad id, doloremque quam illum obcaecati placeat maxime saepe asperiores laudantium, debitis.',
  },
  {
    author: {
      name: 'Ardian Pratama',
      avatar_url: '/images/ardian-pratama-potrait.webp'
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nesciunt ad voluptatibus! Vero ad id, doloremque quam illum obcaecati placeat maxime saepe asperiores laudantium, debitis.',
  },
  {
    author: {
      name: 'Ardian Pratama',
      avatar_url: '/images/ardian-pratama-potrait.webp'
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nesciunt ad voluptatibus! Vero ad id, doloremque quam illum obcaecati placeat maxime saepe asperiores laudantium, debitis.',
  },
  {
    author: {
      name: 'Ardian Pratama',
      avatar_url: '/images/ardian-pratama-potrait.webp'
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nesciunt ad voluptatibus! Vero ad id, doloremque quam illum obcaecati placeat maxime saepe asperiores laudantium, debitis.',
  },
  {
    author: {
      name: 'Ardian Pratama',
      avatar_url: '/images/ardian-pratama-potrait.webp'
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nesciunt ad voluptatibus! Vero ad id, doloremque quam illum obcaecati placeat maxime saepe asperiores laudantium, debitis.',
  },
  {
    author: {
      name: 'Ardian Pratama',
      avatar_url: '/images/ardian-pratama-potrait.webp'
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nesciunt ad voluptatibus! Vero ad id, doloremque quam illum obcaecati placeat maxime saepe asperiores laudantium, debitis.',
  },
]

export const Route = createFileRoute('/(main)/')({
  component: Home,
})

function Home() {
  return (
    <>
      <section className="@container overflow-x-hidden">
        <div
          className="my-8 grid place-content-center content-center gap-8 px-4
        @lg:px-8 @4xl:grid-cols-5 @4xl:px-12 @5xl:px-16
        @7xl:min-h-[calc(100svh-92px)]
        @7xl:px-32"
        >
          <div
            className="typography order-2 self-center @4xl:order-1
          @4xl:col-span-2"
          >
            <h1 className="@4xl:text-left">Ruang Cerita dan Dokumentasi Ide</h1>
            <p className="mt-4">
              Aku percaya setiap proses punya ceritanya sendiri, menghadirkan
              pelajaran dari setiap langkah, jatuh, dan bangkit, membentuk diri
              perlahan hingga kita mengerti arti perjuangan dan harapan.
            </p>
            <Link to="/#about">
              <Button className="mt-4 px-5">
                <BookOpen /> Mulai Eksplorasi
              </Button>
            </Link>
          </div>
          <div
            className="order-1
          @4xl:order-2 @4xl:col-span-3"
          >
            <PortraitStackCard data={potraitCardData} />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="@container mt-52 grid scroll-m-[76px] overflow-x-hidden"
      >
        <div
          className="my-8 grid place-content-center content-center gap-8 px-4
      @lg:px-8 @4xl:grid-cols-5 @4xl:px-12 @5xl:px-16
      @7xl:min-h-[calc(100svh-92px)]
      @7xl:px-32
      "
        >
          <div className="@4xl:col-span-3">
            <div className="my-10  flex items-center justify-center">
              <LandscapeStackCard data={landscapeCardData} />
            </div>
          </div>
          <div className="  self-center @4xl:col-span-2">
            <h2>Awal Perjalanan</h2>
            <p className="mt-4">
              Situs ini lahir dari rasa ingin tahu yang besar. Menjadikannya
              ruang untuk merangkai setiap pengalaman dan momen menjadi sesuatu
              yang bisa dibaca kembali, baik sebagai evaluasi diri maupun
              inspirasi bagi orang lain.
            </p>
            <Link to="/#journey">
              <Button className="mt-4 px-5">
                <BookOpen /> Eksplorasi Lebih Jauh
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="journey"
        className="@container mt-52 flex
      scroll-m-[76px] items-center justify-center overflow-x-hidden
      @7xl:min-h-[calc(100svh-92px)]"
      >
        <div
          className="my-8 flex w-full flex-col gap-8 px-4
        @lg:px-8 @4xl:px-12 @5xl:px-16 @7xl:px-32"
        >
          <div className="text-center">
            <h2>Jejak yang Membentuk Cerita</h2>
            <p className="mt-4">
              Sebuah rangkuman singkat dari setiap langkah, jatuh, dan bangun
              yang membawa aku sampai ke titik ini.
            </p>
          </div>
          <Timeline data={journeyData} />
        </div>
      </section>
      <section
        className="@container mt-52 
      flex items-center justify-center overflow-x-hidden @7xl:min-h-[calc(100svh-92px)]"
      >
        <div
          className="my-8 flex w-full flex-col gap-8 px-4
        @lg:px-8 @4xl:px-12 @5xl:px-16 @7xl:px-32"
        >
          <div className="  text-center">
            <h2>Titik Temu Berbagai Cerita</h2>
            <p className="mt-4">
              Menelusuri arti di setiap langkah dari mereka yang pernah singgah.
            </p>
          </div>
          <div className="grid gap-4 @4xl:grid-cols-5">
            {storyData.map((data, index) => (
              <StoryCard
                key={index}
                author={data.author}
                description={data.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
