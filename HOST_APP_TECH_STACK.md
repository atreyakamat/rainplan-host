# RainPlan Host App Tech Stack (Aligned with Tourist App)

## Platform
- React Native (single Android + iOS codebase)
- TypeScript for application code

## Core Integrations
- Authentication: Firebase Auth (Phone OTP)
- Backend API: Node.js services + PostgreSQL data model
- Payments & Payouts: Razorpay (host payout flow)
- Maps: Google Maps SDK for listing location pin
- Weather: OpenWeatherMap or Tomorrow.io rain signals
- Notifications: Firebase Cloud Messaging for booking/rain/payout alerts
- Media Storage: AWS S3 or Cloudflare R2 for listing images
- Analytics: Mixpanel for host funnel and retention metrics

## Mobile Architecture
- Feature modules for onboarding, listings, bookings, earnings, reviews
- API client layer for auth/session/network handling
- Shared design tokens for color, typography, spacing, and component sizing

## Operational Notes
- Keep API contracts aligned with Tourist App backend primitives (bookings, reviews, payouts)
- Prioritize Android performance for low/mid-range devices
- Enforce secure secret handling via environment configuration and CI secrets
