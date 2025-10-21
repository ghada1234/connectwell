# ConnectWell - Therapist & Life Coach Matching Platform

ConnectWell is a comprehensive web application that helps users find and connect with certified therapists and life coaches from diverse backgrounds, languages, and specializations.

## Features

### 🔍 Advanced Search & Filtering
- Filter by **180+ nationalities**
- Search across **100+ languages**
- Filter by gender, certifications, and specializations
- Session type preferences (online, in-person, community)
- Price range and rating filters

### 🤖 AI-Powered Matching
- Intelligent therapist recommendations using Google Gemini AI
- Personalized matching based on user needs and preferences
- Context-aware suggestions

### 👥 Therapist Profiles
- Comprehensive professional information
- Certifications and qualifications
- Years of experience and specializations
- User reviews and ratings
- Availability calendar

### 📅 Session Booking System
- Book online, in-person, or community sessions
- Flexible scheduling
- Session duration options (30, 60, 90 minutes)
- Booking management dashboard

### 💬 Community Forum
- Anonymous support community
- Share experiences and success stories
- Category-based discussions
- Trending topics and hashtags

### 🔐 User Authentication
- Secure login and registration
- Password recovery
- Social authentication (Google, GitHub)

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI**: Google Gemini API
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Date Handling**: date-fns

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- A Google Gemini API key
- (Optional) Firebase project for full authentication

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd connectwell
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
connectwell/
├── app/                      # Next.js app directory
│   ├── ai-match/            # AI-powered matching page
│   ├── booking/             # Booking system
│   ├── community/           # Community forum
│   ├── login/               # Authentication pages
│   ├── register/
│   ├── forgot-password/
│   ├── therapists/          # Therapist listing and profiles
│   ├── bookings/            # User bookings dashboard
│   ├── how-it-works/        # Information page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── Navigation.tsx
│   ├── TherapistCard.tsx
│   └── SearchFilters.tsx
├── lib/                     # Utilities and data
│   ├── data/               # Mock data and constants
│   │   ├── languages.ts
│   │   ├── nationalities.ts
│   │   ├── specializations.ts
│   │   └── mockTherapists.ts
│   ├── firebase.ts         # Firebase configuration
│   ├── gemini.ts           # AI matching logic
│   └── types.ts            # TypeScript types
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Key Features Implementation

### Advanced Filtering
The search system supports multi-select filters for:
- Languages (100+ options)
- Nationalities (180+ options)
- Specializations (33 therapy areas)
- Certifications (15 professional credentials)
- Gender preferences
- Session types
- Price range
- Minimum rating

### AI Matching
Uses Google Gemini Pro to analyze user needs and match them with the most suitable therapists based on:
- Stated concerns and goals
- Language preferences
- Gender preferences
- Session type preferences
- Specialization needs

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Smooth animations and transitions
- Accessible UI components

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_GEMINI_API_KEY` - Google Gemini API key for AI matching

Optional (for full Firebase integration):
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## Future Enhancements

- [ ] Real-time chat between users and therapists
- [ ] Video calling integration
- [ ] Payment processing
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Multi-language UI support
- [ ] Email notifications
- [ ] Calendar integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For support, email support@connectwell.com or join our community forum.

---

Built with ❤️ for mental wellness and personal growth

