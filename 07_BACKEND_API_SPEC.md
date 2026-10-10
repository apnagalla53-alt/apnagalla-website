# Apna Galla — Backend/API/Data Requirements

Reuse existing NestJS + Prisma architecture.

## Public Plan Catalog

Optional:
`GET /api/v1/public/plans`

Return:
- plan key
- name
- public price
- tagline
- public feature highlights
- Most Popular
- trial availability

Never expose:
- tenant overrides
- private notes
- internal feature debugging
- private limits unless intentionally public

## Contact / Demo

Suggested:
`POST /api/v1/public/contact`

Fields:
- name
- mobile
- email
- businessName
- city
- reason
- message
- page
- referrer
- UTM metadata
- referral code if present

Requirements:
- validation
- sanitization
- rate limiting
- spam protection
- persistence
- createdAt
- status

Potential statuses:
NEW
CONTACTED
QUALIFIED
CLOSED
SPAM

## Authentication

Providers:
MOBILE_OTP
GOOGLE
PASSWORD only where legacy/required

Rules:
- normalize phone numbers
- prevent duplicate accounts
- safe identity linking
- no OTP logs
- no OTP in production responses
- no plaintext password
- rate-limit send/verify

## Onboarding State

Suggested:
AUTH_VERIFIED
OWNER_PROFILE_REQUIRED
BUSINESS_PROFILE_REQUIRED
PLAN_REQUIRED
MIGRATION_OFFERED
READY

Persist authoritatively.

## Trial

Reuse subscription model:
- planKey
- status TRIAL
- startsAt
- endsAt
- convertedAt

## Referral

Conceptual:
ReferralCode
ReferralAttribution
ReferralCampaign
ReferralReward

Track:
- referrer
- referred account/tenant
- signup
- trial
- paid conversion
- qualification
- reward

Prevent:
- self-referral
- duplicate reward
- duplicate conversion

## Import Job

Conceptual:
- id
- tenantId
- userId
- sourceType
- file metadata
- mapping
- status
- validRows
- warnings
- errors
- importedRows
- timestamps

Never trust tenantId sent by browser without server-side authorization.

## Security

Public:
- strict validation
- CORS allow-list
- rate limits
- security headers
- abuse monitoring

Private:
- authentication
- tenant scoping
- role authorization

## Notifications

If email/SMS provider is not configured:
- persist lead
- return truthful receipt
- do not pretend notification was delivered

## Audit

Audit where appropriate:
- signup
- referral attribution
- plan selection
- trial conversion
- contact status changes
- imports
- platform manual overrides

## Retention

Document retention for:
- contact leads
- temporary import files
- referral logs
- auth logs
- support requests
