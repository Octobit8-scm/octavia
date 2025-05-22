export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  experience?: number;
  qualification?: string;
  phone?: string;
  email?: string;
  location?: string;
  schedule?: {
    days: string[];
    timings: string[];
  };
}

export const doctors: Doctor[] = [
  // Orthopedics and Joint Replacement
  {
    id: '1',
    name: 'Dr. Sunil Kr. Singh',
    specialty: 'Orthopedics and Joint Replacement',
    image: '/images/doctors/Dr-Suneel-Kumar-Singh.jpg',
    qualification: 'MBBS, MS',
    experience: 20,
    location: 'Octavia Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 12:00PM, 3:00PM - 5:00PM']
    }
  },
  {
    id: '2',
    name: 'Dr. S. Kumar Singh',
    specialty: 'Orthopedics and Joint Replacement',
    image: '/images/doctors/Dr-S-Kumar-Singh.jpg',
    qualification: 'MBBS, DNB, D. Ortho MNAMS',
    experience: 22,
    location: 'Octavia Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 11:30AM']
    }
  },
  // Minimal Access Surgery
  {
    id: '3',
    name: 'Dr. S. P. Gupta',
    specialty: 'Minimal Access Surgery',
    image: '/images/doctors/Dr-S-P-Gupta.jpg',
    qualification: 'MBBS, MS, FMAS, FIAGES (General Surgery)',
    experience: 25,
    location: 'Octavia Hospital, Varanasi',
  },
  {
    id: '4',
    name: 'Dr. Pramendra Singh',
    specialty: 'Minimal Access Surgery',
    image: '/images/doctors/Dr-Pramendra-Singh.jpg',
    qualification: 'MBBS, MS, FMAS Adv. GI & Laparoscopic Surgery',
    experience: 20,
    location: 'Octavia Hospital, Varanasi',
  },
  {
    id: '5',
    name: 'Dr. Md Najim',
    specialty: 'Minimal Access Surgery',
    image: '/images/doctors/dr-nazim.jpg',
    qualification: 'MBBS, MS, FIAGES, FMAS - General & Laparoscopic Surgeon',
    location: 'Octavia Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['11:00AM - 05:30PM']
    }
  },
  // Neurology
  {
    id: '6',
    name: 'Dr. Vivek Tripathi',
    specialty: 'Neurology',
    image: '/images/doctors/dr-vivek-tripathi.jpg',
    qualification: 'MBBS, DNB(Medicine), DrNB',
    experience: 11,
    location: 'Octavia Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['11:30AM - 02:30PM']
    }
  },
  // Pediatrics & Neonatology
  {
    id: '7',
    name: 'Dr. Vibhesh Raj Tiwari',
    specialty: 'Pediatrics & Neonatology',
    image: '/images/doctors/dr-vibhesh-raj-tiwari.jpg',
    qualification: 'MBBS, MD, Fellowship Paediatrics Hematology Oncology, IMS-BHU',
    location: 'Octavia Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 05:00PM']
    }
  },
  {
    id: '8',
    name: 'Dr. Amita Srivastava',
    specialty: 'Pediatrics & Neonatology',
    image: '/images/doctors/Dr-Amita-Srivastava-01.jpg',
    qualification: 'MBBS, DCH (KGMU, LUCKNOW)',
    experience: 18,
    location: 'Octavia Hospital, Varanasi',
  },
  // Obstetrics & Gynaecology
  {
    id: '9',
    name: 'Dr. Tulika Singh',
    specialty: 'Obstetrics & Gynaecology',
    image: '/images/doctors/dr-tulika-singh-01.jpg',
    qualification: 'M.B.B.S., FGO, PGDS',
    location: 'Octavia Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['11:00AM - 12:00PM']
    }
  },
  {
    id: '10',
    name: 'Dr. Rubi Singh',
    specialty: 'Obstetrics & Gynaecology',
    image: '/images/doctors/dr-rubi-devi-02.jpg',
    qualification: 'M.B.B.S., M.S.',
    location: 'Octavia Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 04:00PM']
    }
  },
  // Cardiology
  {
    id: '11',
    name: 'Dr. Shadab Rauf',
    specialty: 'Cardiology',
    image: '/images/doctors/dr-sadab-rauf.jpg',
    qualification: 'MBBS, DNB, DM (Cardiology) - Dr. RML Hospital, New Delhi',
    location: 'Octavia Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 04:00PM']
    }
  },
  {
    id: '12',
    name: 'Dr. Ashutosh Marwah',
    specialty: 'Cardiology',
    image: '/images/doctors/dr-sagar-rai.jpg',
    qualification: 'MBBS, MD Pediatrics (Maulana Azad Medical College, Delhi), Fellowship in Pediatric Cardiology- Melbourne, Australia',
    location: 'Octavia Hospital, Varanasi',
  },
  // Nephrology
  {
    id: '13',
    name: 'Dr. Rishab Jaiswal',
    specialty: 'Nephrology',
    image: '/images/doctors/dr-rishab.jpg',
    qualification: 'MBBS, MD (Internal Medicine), Ex. Sr. (Nephro) – BHU',
    location: 'Octavia Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 04:00PM']
    }
  },
  // General Medicine
  {
    id: '14',
    name: 'Dr. Raghvendra Kumar Singh',
    specialty: 'General Medicine',
    image: '/images/doctors/dr-vibhesh-raj-tiwari.jpg',
    qualification: 'MBBS, MD Internal Medicine',
    location: 'Octavia Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 02:00PM and 04:00PM - 06:00PM']
    }
  },
  // Radiology
  {
    id: '15',
    name: 'Dr. Sneha Mandal',
    specialty: 'Radiology',
    image: '/images/doctors/Dr-Supriya-Singh-01.jpg',
    qualification: 'MBBS, MD',
    location: 'Octavia Hospital, Varanasi',
  },
  // Pathology
  {
    id: '16',
    name: 'Dr. Sunil Kumar',
    specialty: 'Pathology',
    image: '/images/doctors/dr-sunil-kumar-Pathology.jpg',
    qualification: 'MBBS, MD (Pathology)',
    location: 'Octavia Hospital, Varanasi',
  },
  {
    id: '17',
    name: 'Dr. Alka Gupta',
    specialty: 'Pathology',
    image: '/images/doctors/Dr-Alka-Gupta-Pathology.jpg',
    qualification: 'MBBS, MD (Pathology)',
    location: 'Octavia Hospital, Varanasi',
  },
  // Anesthesiology & Critical Care
  {
    id: '18',
    name: 'Dr. Sagar Rai',
    specialty: 'Anesthesiology & Critical Care',
    image: '/images/doctors/dr-sagar-rai.jpg',
    qualification: 'MBBS, MD, PDF (Anesthesiology & Critical Care)',
    location: 'Octavia Hospital, Varanasi',
  },
  {
    id: '19',
    name: 'Dr. Savita Kumari',
    specialty: 'Anesthesiology & Critical Care',
    image: '/images/doctors/dr-vibhesh-raj-tiwari.jpg',
    qualification: 'MBBS, MD (Anesthesiology & Critical Care)',
    location: 'Octavia Hospital, Varanasi',
  },
  // Dentistry
  {
    id: '20',
    name: 'Dr. Md. Nasir Ansari',
    specialty: 'Dentistry',
    image: '/images/doctors/Dr-Alka-Gupta-Pathology.jpg',
    qualification: 'BDS (Dental Surgeon)',
    location: 'Octavia Hospital, Varanasi',
    schedule: {
      days: ['Tuesday', 'Thursday', 'Saturday'],
      timings: ['11:00AM - 02:00PM']
    }
  },
  {
    id: '21',
    name: 'Dr. Supriya Singh',
    specialty: 'Dentistry',
    image: '/images/doctors/Dr-Supriya-Singh-01.jpg',
    qualification: 'BDS (Dentist)',
    location: 'Octavia Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday', 'Tuesday', 'Thursday', 'Saturday'],
      timings: ['11:00AM - 02:00PM', '04:00PM - 06:00PM']
    }
  },
]; 