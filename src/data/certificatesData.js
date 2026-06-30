// src/data/certificatesData.js
import docker from '../assets/images/certificates/Sertifikat Adinusa Docker Fundamental.png';
import linux from '../assets/images/certificates/Sertifikat Adinusa Linux System Administration.jpg';
import cybersecurity from '../assets/images/certificates/Sertifikat Cyber Security by Kominfo.png';
import idn from '../assets/images/certificates/Sertifikat IDN Mengajar.jpg';
import redhat from '../assets/images/certificates/Sertifikat Redhat Application Development with Java EE.png';
import devfest from '../assets/images/certificates/Sertifikat Kehadiran DevFest Bogor by GDG-1.png';
import bnspFront from '../assets/images/certificates/Sertifikat BNSP Jaringan Komputer.jpg';
import bnspBack from '../assets/images/certificates/Sertifikat BNSP Jaringan Komputer Belakang.jpg';
import matra from '../assets/images/certificates/Sertifikat Magang Mobile Developer.jpg';

export const certificates = [
  {
    id: 1,
    title: 'Computer Network Certification',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    date: '2026',
    image: bnspFront,
    backImage: bnspBack,
    credentialUrl: '#'
  },
  {
    id: 2,
    title: 'Mobile Developer Internship',
    issuer: 'PT Matra Hillindo Teknologi',
    date: '17 Jun 2025 - 17 Apr 2026',
    image: matra,
    credentialUrl: '#'
  },
  {
    id: 3,
    title: 'Docker Fundamental',
    issuer: 'Btech Academy',
    date: '2024',
    image: docker,
    credentialUrl: '#'
  },
  {
    id: 4,
    title: 'Linux System Administration',
    issuer: 'Btech Academy',
    date: '2024',
    image: linux,
    credentialUrl: '#'
  },
  {
    id: 5,
    title: 'Basic Cyber Security',
    issuer: 'Thematic Academy - Kominfo Digitalent',
    date: '2024',
    image: cybersecurity,
    credentialUrl: '#'
  },
  {
    id: 6,
    title: 'IDN Mengajar Participant',
    issuer: 'Politeknik Pengembangan Islamic Development Network',
    date: '2023',
    image: idn,
    credentialUrl: '#'
  },
  {
    id: 7,
    title: 'Red Hat Application Development I',
    issuer: 'Red Hat Training and Certification',
    date: '2025',
    image: redhat,
    credentialUrl: '#'
  },
  {
    id: 8,
    title: 'DevFest Bogor 2023',
    issuer: 'Google Developer Groups Bogor',
    date: '2023',
    image: devfest,
    credentialUrl: '#'
  },
];