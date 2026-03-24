import { IdentityCard } from '@/components/card/IdentityCard';
import { SkillCard } from '@/components/card/SkillCard';
import { Timeline } from '@/components/Timeline';
import { Button } from '@/components/ui/button';
import { createFileRoute, Link } from '@tanstack/react-router';
import { BookOpen, GraduationCap, Network } from 'lucide-react';
import Html from '@/assets/icons/html.svg?react';
import Css from '@/assets/icons/css.svg?react';
import Javascript from '@/assets/icons/javascript.svg?react';
import NodeJs from '@/assets/icons/node-js.svg?react';
import Typescript from '@/assets/icons/typescript.svg?react';
import React from '@/assets/icons/react.svg?react';
import Tanstack from '@/assets/icons/tanstack.svg?react';
import ShadcnUi from '@/assets/icons/shadcn-ui.svg?react';
import TailwindCss from '@/assets/icons/tailwind-css.svg?react';
import MongoDb from '@/assets/icons/mongo-db.svg?react';
import Firebase from '@/assets/icons/firebase.svg?react';

const educationData = [
  {
    side: 'left',
    icon: <GraduationCap />,
    title: 'Sekolah Dasar (SD Negeri 147 Pekanbaru)',
    description:
      'Mulai mengenal angka dan huruf bukan sekadar sebagai simbol, melainkan sebagai pintu pertama untuk memahami bagaimana dunia ini bekerja.',
    content: (
      <div className='flex justify-end'>
        <span className='text-muted-foreground text-xs'>2012 - 2018</span>
      </div>
    ),
  },
  {
    side: 'right',
    icon: <GraduationCap />,
    title: 'Sekolah Menengah Pertama (SMP Negeri 23 Pekanbaru)',
    description:
      'Mulai belajar bahwa di balik setiap pertanyaan selalu ada jawaban yang logis, dan di balik setiap tantangan ada proses yang mendewasakan cara berfikir.',
    content: (
      <div className='flex justify-end'>
        <span className='text-muted-foreground text-xs'>2018 - 2021</span>
      </div>
    ),
  },
  {
    side: 'left',
    icon: <GraduationCap />,
    title: 'Sekolah Menengah Atas (SMA Negeri 12 Pekanbaru)',
    description:
      'Mulai menentukan arah, mengasah ketertarikan, serta belajar bahwa keberanian untuk mencoba adalah kunci untuk membuka pintu-pintu kesempatan yang lebih besar.',
    content: (
      <div className='flex justify-end'>
        <span className='text-muted-foreground text-xs'>2021 - 2024</span>
      </div>
    ),
  },
  {
    side: 'right',
    icon: <GraduationCap />,
    title: 'Perguruan Tinggi (Universitas Riau)',
    description:
      'Bukan lagi sekadar belajar untuk tahu, melainkan belajar untuk mewujudkan.',
    content: (
      <div className='flex justify-end'>
        <span className='text-muted-foreground text-xs'>Sekarang</span>
      </div>
    ),
  },
];

const organizationData = [
  {
    side: 'left',
    icon: <Network />,
    title:
      'Protokoler Himpunan Mahasiswa Pendidikan Matematika FKIP Universitas Riau',
    content: (
      <div className='flex justify-end'>
        <span className='text-muted-foreground text-xs'>2025</span>
      </div>
    ),
  },
  {
    side: 'right',
    icon: <Network />,
    title:
      'Bupati Mahasiswa Himpunan Mahasiswa Pendidikan Matematika FKIP Universitas Riau',
    description:
      'Memegang amanah sebagai penggerak utama, bukan untuk berjalan sendiri di garis depan, tetapi memastikan setiap anggota melangkah selaras. ',
    content: (
      <div className='flex justify-end'>
        <span className='text-muted-foreground text-xs'>Sekarang</span>
      </div>
    ),
  },
];

const skillData = [
  { skill: <Html className="text-primary" /> },
  { skill: <Css className="text-primary"/> },
  { skill: <Javascript className="text-primary"/> },
  { skill: <NodeJs className="text-primary"/> },
  { skill: <Typescript className="text-primary"/> },
  { skill: <React className="text-primary"/> },
  { skill: <Tanstack className="text-primary"/> },
  { skill: <ShadcnUi className="text-primary"/> },
  { skill: <TailwindCss className="text-primary"/> },
  { skill: <MongoDb className="text-primary"/> },
  { skill: <Firebase className="text-primary"/> },
];

export const Route = createFileRoute('/(main)/about/')({ component: About });

function About() {
  return (
    <>
      <section className='@container overflow-x-hidden'>
        <div
          className='my-8 grid place-content-center content-center gap-8 px-4
        @lg:px-8 @4xl:grid-cols-5 @4xl:px-12 @5xl:px-16
        @7xl:min-h-[calc(100svh-92px)]
        @7xl:px-32'
        >
          <IdentityCard />
          <div className='self-center @4xl:col-span-2'>
            <h1 className='text-left'>Tentang Aku dan Perjalanan Ini</h1>
            <p className='mt-4'>
              Halo, aku Ardian. Di balik bingkai ini, ada seorang pemimpi yang
              perlahan menapaki jalannya di dunia. Melalui ruang ini, aku ingin
              membagikan perjalanan yang membentuk diriku hingga hari ini.
            </p>
            <Link to='/about/#education'>
              <Button className='mt-4 px-5'>
                <BookOpen /> Mulai Eksplorasi
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id='education'
        className='@container mt-52 flex
      scroll-m-[76px] items-center justify-center overflow-x-hidden
      @7xl:min-h-[calc(100svh-92px)]'
      >
        <div
          className='my-8 flex w-full flex-col gap-8 px-4
        @lg:px-8 @4xl:px-12 @5xl:px-16 @7xl:px-32'
        >
          <div className='text-center'>
            <h2>Akar Pengetahuan</h2>
            <p className='mt-4'>
              Pendidikan bagiku adalah proses menyusun batu bata pemahaman,
              memastikan setiap langkah ke depan berdiri di atas landasan yang
              kokoh dan teruji.
            </p>
          </div>
          <Timeline data={educationData} />
        </div>
      </section>
      <section
        className='@container mt-52 flex items-center justify-center overflow-x-hidden
      @7xl:min-h-[calc(100svh-92px)]'
      >
        <div
          className='my-8 flex w-full flex-col gap-8 px-4
        @lg:px-8 @4xl:px-12 @5xl:px-16 @7xl:px-32'
        >
          <div className='text-center'>
            <h2>Tumbuh Bersama</h2>
            <p className='mt-4'>
              Aku percaya bahwa langkah yang besar tidak pernah ditempuh
              sendirian. Di setiap prosesnya, tumbuh tanggung jawab, empati, dan
              pemahaman akan makna sebuah visi bersama.
            </p>
          </div>
          <Timeline data={organizationData} />
        </div>
      </section>
      <section
        className='@container mt-52 
      flex items-center justify-center overflow-x-hidden @7xl:min-h-[calc(100svh-92px)]'
      >
        <div
          className='my-8 flex w-full flex-col gap-8 px-4
        @lg:px-8 @4xl:px-12 @5xl:px-16 @7xl:px-32'
        >
          <div className='text-center'>
            <h2>Arena Pengembangan Diri</h2>
            <p className='mt-4'>
              Ruang untuk mengasah keterampilan, memperkuat kemampuan, dan
              memperluas wawasan melalui setiap proses yang membentuk kualitas
              diri.
            </p>
          </div>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            {skillData.map((data, index) => (
              <SkillCard
                key={index}
                skill={data.skill}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
