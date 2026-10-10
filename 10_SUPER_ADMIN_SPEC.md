# Apna Galla — Platform Super Admin Specification

## Purpose

Platform Super Admin is the SaaS control plane.

It should manage:
- Tenants
- Users
- Plans
- Subscriptions
- Trials
- Feature Overrides
- Limits
- Payments
- Referrals
- Support
- Sessions/Devices
- Audit
- Backup Health
- System Health

## Tenant List

Show:
- Shop / Organization
- Owner
- Phone
- Email
- Plan
- Subscription Status
- Access End
- User Count
- Override Count
- Created Date
- Last Activity
- Tenant Status
- Referral Source

Search:
- shop
- owner
- phone
- email
- tenant display code

## Tenant Detail

Tabs:
- Overview
- Owner & Contacts
- Subscription
- Features & Entitlements
- Limits
- Users
- Devices & Sessions
- Data / Usage
- Imports
- Referrals
- Payments
- Support
- Audit
- Danger Zone

## Tenant Identifier

Primary database tenant ID should remain immutable.

Allow editable:
- Display Code
- Slug
- External Reference

## Password Rule

Never display existing customer passwords.

Allowed:
- Send Password Reset
- Force Password Reset
- Sign Out All Sessions
- Revoke Device
- Support Access

## Subscription

Plans:
STARTER
SMART
PRO

Platform can:
- assign plan
- upgrade
- downgrade
- extend access
- trial
- suspend/reactivate
- manually activate with reason and audit

## Feature Overrides

For every eligible feature:
- INHERIT
- FORCE ENABLE
- FORCE DISABLE

Show:
- Plan Default
- Override
- Commercial Entitlement
- Shop Toggle
- Configured
- Effective State

## Numeric Limits

Support:
- Inherit Plan Limit
- Custom Limit

Examples:
- Staff
- Locations
- Storage
- Documents
- Voice usage if relevant

## Tenant Lifecycle

Actions:
- Suspend
- Reactivate
- Archive
- Restore
- Permanent Delete

Permanent delete:
- typed confirmation
- dependency preview
- reason
- retention/legal checks
- audit
- safe background process if needed

## Support Access

Audited support/impersonation:
- reason required
- time-limited
- visible Support Mode banner
- read-only by default where practical
- audit all mutations

## Referral Admin

Show:
- Referrer
- Referred Tenant
- Plan
- Status
- Conversion
- Reward
- Campaign
- Fraud flags

## Audit

Audit:
- tenant creation
- tenant edit
- plan changes
- trial changes
- feature overrides
- limit changes
- suspension/reactivation
- password reset triggers
- session revocation
- support access
- referral manual actions
- payment/subscription manual overrides
- deletion lifecycle

## Data Safety

Automatic backup is system-required and should not have a normal commercial Force Disable control.
