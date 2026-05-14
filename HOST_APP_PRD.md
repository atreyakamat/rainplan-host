# RainPlan Host App PRD (v1.0)

## Product Goal
Build only the RainPlan **Host App** for Goa hosts so they can create listings, manage bookings, and earn during rainy periods.

## MVP Scope (Host App Only)
- Phone OTP onboarding with basic KYC and bank payout setup
- Listing creation/editing with category, pricing, schedule, photos, and map pin
- Dashboard with today's bookings, upcoming bookings, monthly earnings, rain alert, and availability toggle
- Booking management with accept/decline, auto-accept in 30 minutes, complete booking, no-show reporting
- Earnings view with gross, 8% platform commission, net payout, and Monday payout schedule
- Reviews screen with rating summary, host replies, and SuperHost badge logic

## Success Metrics
- 50+ active host listings in Panjim + North Goa
- 80% host retention month-over-month
- 100+ bookings during major rain events

## Non-Goals (v1)
- Host analytics beyond basic earnings
- Web host panel replacement
- In-app tourist-host chat

## Functional Requirements
1. Host onboarding must be understandable for low-tech users and use large tap targets.
2. Listing flow must support 3–8 images and fixed cancellation rule (free cancellation up to 1 hour before).
3. Booking management must show guest name, time, guest count, and total amount.
4. Rain alerts must be clearly visible on dashboard while raining.
5. Payout breakdown must transparently show gross, commission, and net.

## Release Phasing
- **Phase 1**: Onboarding, listings, booking management, manual admin approval
- **Phase 2**: Reviews/replies, SuperHost badge, earnings polish, push notifications
- **Phase 3**: Hindi support and expansion features
