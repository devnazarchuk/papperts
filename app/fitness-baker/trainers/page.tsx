'use client'
import TrainersList from '@/components/templates/TrainersPage';

const trainers = [
  {
    name: 'Harald Döppner',
    title: 'Head Trainer & E-Bike Specialist',
    bio: 'With over 15 years of experience in cycling and fitness training, Harald leads our E-Bike programs and specializes in endurance training for all fitness levels.',
    image: '/soft-images/mann.jpg',
    specialties: [
      {
        name: 'E-Bike Training',
        description: 'Expert in E-Bike techniques, safety, and tour planning for all skill levels.'
      },
      {
        name: 'Endurance Training',
        description: 'Specialized in building stamina and improving cardiovascular fitness.'
      },
      {
        name: 'Group Dynamics',
        description: 'Experienced in leading group rides and creating inclusive training environments.'
      }
    ],
    certifications: [
      'Certified E-Bike Instructor',
      'Licensed Cycling Coach',
      'First Aid Specialist',
      'Mountain Bike Guide'
    ]
  },
  {
    name: 'Maria Schmidt',
    title: 'Running Coach & Nutrition Specialist',
    bio: 'A former competitive runner turned coach, Maria combines her passion for running with expertise in sports nutrition to help clients achieve their fitness goals.',
    image: '/soft-images/frau.jpg',
    specialties: [
      {
        name: 'Running Technique',
        description: 'Expert in improving running form and preventing injuries.'
      },
      {
        name: 'Sports Nutrition',
        description: 'Specialized in creating nutrition plans for athletes and fitness enthusiasts.'
      },
      {
        name: 'Marathon Training',
        description: 'Experienced in preparing runners for long-distance events.'
      }
    ],
    certifications: [
      'Certified Running Coach',
      'Sports Nutrition Specialist',
      'Marathon Training Expert',
      'Exercise Physiology Certificate'
    ]
  },
  {
    name: 'Thomas Weber',
    title: 'Strength & Conditioning Coach',
    bio: 'Thomas specializes in functional training and rehabilitation, helping clients build strength and improve mobility through targeted exercise programs.',
    image: '/soft-images/mann1.jpg',
    specialties: [
      {
        name: 'Functional Training',
        description: 'Expert in bodyweight exercises and functional movement patterns.'
      },
      {
        name: 'Rehabilitation',
        description: 'Specialized in post-injury recovery and return to sport programs.'
      },
      {
        name: 'Core Training',
        description: 'Focus on building core strength and improving posture.'
      }
    ],
    certifications: [
      'Certified Strength & Conditioning Specialist',
      'Rehabilitation Therapy Certificate',
      'Functional Training Expert',
      'TRX Certified Trainer'
    ]
  }
];

export default function TrainersPage() {
  return (
    <TrainersList
      title="Our Expert Trainers"
      description="Meet our team of certified fitness professionals dedicated to helping you achieve your health and fitness goals."
      heroImage="/images/papperts_Fitnessbaecker-team.jpg"
      trainers={trainers}
    />
  );
} 