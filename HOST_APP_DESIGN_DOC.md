# RainPlan Host App Design Doc

## Design Principles
- Calm, trustworthy, and simple for low/medium tech comfort hosts
- Fast interactions with clear hierarchy
- Minimum 48px tap targets on primary controls
- Friendly empty and loading states

## Visual Alignment with Tourist App
- Shared brand palette:
  - Primary Blue `#1A56A0`
  - Rain Grey `#6B7E8F`
  - Warm Amber `#F5A623`
  - Background `#F5F7FA`
  - Success `#27AE60`
  - Alert `#E74C3C`
- Typography: Inter/Nunito, no text below 12px
- Rounded cards (12px) with subtle shadows

## Key Host Screens
1. **Onboarding**: OTP, basic details/KYC, first listing, bank details, approval status
2. **Dashboard**: rain alert, availability toggle, today's bookings, upcoming bookings, earnings snapshot
3. **Create/Edit Listing**: guided form for name/category/description/photos/duration/group size/price/schedule/location
4. **Booking Management**: Accept/Decline controls and post-experience actions
5. **Earnings**: monthly summary, booking-level breakdown, payout timeline
6. **Reviews**: rating summary, review list, single host reply per review

## Interaction Notes
- Availability toggle is high-contrast and one tap
- Rain alert card is visually prominent when active
- Booking actions are side-by-side to reduce decision friction
- SuperHost indicator uses Warm Amber emphasis
