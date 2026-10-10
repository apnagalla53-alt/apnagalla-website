# Apna Galla — Auth, Onboarding, Referral & Migration

## Authentication

Primary:
- Mobile OTP
- Google

Optional legacy:
- Email/password

## Mobile OTP

Flow:
1. enter number
2. normalize
3. send OTP
4. verify
5. create/login user
6. issue secure session

Requirements:
- expiry
- resend limit
- attempt limit
- rate limit
- no OTP logs
- no OTP in production response

## Google

- server-side identity validation
- find/link/create account
- continue onboarding

Do not trust only frontend profile data.

## Identity Linking

Phone + Google can link to one account.
Never merge based only on matching names.

## Business Setup

Fields:
- Owner Name
- Shop Name
- Business Type
- Address
- City
- State
- PIN

## Business Type Presets

Examples:
Pharmacy → recommend Batch/Expiry/Multi-unit
Garments → Variants/Images
Hardware → Length/Multi-unit
Grocery → Stock/Khata

Plan entitlement still decides access.

## Plan Choice

Starter ₹75
Smart ₹120
Pro ₹210

Trial can be offered if enabled.

## Trial

Not a fourth plan.
Plan template + TRIAL status + dates.

## Migration

Start Fresh
or
Import Existing Data

Show only real supported imports.

## Referral

Referral comes from:
- `?ref=CODE`
- manual code

Preserve through auth/onboarding.

Owner screen:
- code
- copy
- share
- referred shops
- statuses
- reward state

Platform:
- campaigns
- qualification
- reward type
- fraud flags
- manual review
- audit

Do not hardcode reward amount.

## Trial End

- preserve data
- show plan choice
- restrict access according to policy
- never delete shop records

## Payment

No fake success.
If provider unavailable:
Contact Support / Request Activation.

## Password Security

Super Admin cannot view passwords.

Allowed:
- send reset
- force reset
- revoke sessions
- temporary one-time credential only if policy supports
- support access

## Onboarding Resume

Persist last completed stage.
Do not restart completed onboarding.

## Funnel Analytics

Track only non-sensitive funnel events:
signup_started
otp_verified
google_verified
owner_profile_complete
business_profile_complete
plan_selected
trial_started
migration_choice
onboarding_complete
