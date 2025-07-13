# Backend Plan - Supabase Job Board Backend

## Overview
This document outlines the backend architecture for Contract King, a job board where employers pay to post contract positions. We'll use Supabase (PostgreSQL database + authentication + API) with React + Vite frontend. Use context7 documentation for best practices

## Database Schema

### Users Table (`users`)
```sql
- id (UUID, primary key)
- email (text, unique)
- created_at (timestamp)
- updated_at (timestamp)
- role (text) - 'employer' or 'admin'
- company_name (text)
- subscription_status (text) - 'active', 'inactive', 'trial'
```

### Job Postings Table (`job_postings`)
```sql
- id (UUID, primary key)
- user_id (UUID, foreign key to users)
- title (text) - "Senior Web Designer"
- company_name (text) - "Microsoft"
- location (text) - "London"
- day_rate (integer) - 400 (stored as pence/cents)
- contract_length (text) - "6 Months"
- contract_type (text) - "Outside IR35", "Inside IR35", "Fixed term", "Freelance Agreement"
- role_description (text) - full job description
- custom_url (text, nullable) - optional custom apply URL
- status (text) - 'live', 'closed', 'draft'
- applicant_count (integer, default 0)
- posted_at (timestamp)
- closed_at (timestamp, nullable)
- created_at (timestamp)
- updated_at (timestamp)
```

### Payments Table (`payments`)
```sql
- id (UUID, primary key)
- user_id (UUID, foreign key to users)
- job_posting_id (UUID, foreign key to job_postings)
- amount (integer) - amount in pence/cents
- currency (text) - 'GBP'
- payment_status (text) - 'pending', 'completed', 'failed'
- stripe_payment_intent_id (text)
- created_at (timestamp)
```

### Applications Table (`applications`)
```sql
- id (UUID, primary key)
- job_posting_id (UUID, foreign key to job_postings)
- applicant_email (text)
- applicant_name (text)
- applied_at (timestamp)
- status (text) - 'new', 'reviewed', 'shortlisted', 'rejected'
```

## Authentication & User Management

### Supabase Auth Setup
- **Email/Password Authentication**: Employers create accounts with email
- **Row Level Security (RLS)**: Users can only see/edit their own job postings
- **User Roles**: Distinguish between employers and admins

### Key Auth Functions
1. **Sign Up**: Create employer account
2. **Sign In**: Login existing employers
3. **Password Reset**: Standard forgot password flow
4. **Profile Management**: Update company details

## Core Backend Features

### 1. Job Posting Management
**Create Job Posting**
- Validate all required fields
- Save as 'draft' initially
- Only set to 'live' after payment

**Edit Job Posting**
- Only allow editing of live posts by owner
- Update timestamp when modified

**Delete Job Posting**
- Soft delete (update status to 'deleted')
- Keep record for payment history

**Close Job Posting**
- Set status to 'closed'
- Set closed_at timestamp
- Stop accepting new applications

### 2. Payment Integration (Stripe)
**Payment Flow**
1. User creates job posting (saves as draft)
2. Payment page creates Stripe PaymentIntent
3. On successful payment, activate job posting
4. Record payment in payments table

**Payment Methods**
- One-time payment per job posting
- Different pricing tiers (basic, featured, etc.)

### 3. Application Management
**Application Tracking**
- Count applications per job
- Store applicant details
- Track application status

**Employer View**
- View all applications for their jobs
- Update application status
- Export applicant data

### 4. Search & Filtering
**Search Functionality**
- Search by job title, company, location
- Filter by contract type, day rate, contract length
- Sort by date posted, day rate

**Database Indexes**
- Index on title, company_name, location for search
- Index on contract_type, status for filtering

## API Endpoints Structure

### Authentication
- `POST /auth/signup` - Create employer account
- `POST /auth/signin` - Login
- `POST /auth/signout` - Logout
- `POST /auth/reset-password` - Password reset

### Job Postings
- `GET /api/jobs` - Get all live jobs (with search/filter)
- `GET /api/jobs/:id` - Get single job details
- `POST /api/jobs` - Create new job posting
- `PUT /api/jobs/:id` - Update job posting
- `DELETE /api/jobs/:id` - Delete job posting
- `POST /api/jobs/:id/close` - Close job posting

### Employer Dashboard
- `GET /api/employer/jobs` - Get employer's job postings
- `GET /api/employer/applications` - Get applications for employer's jobs
- `PUT /api/applications/:id` - Update application status

### Payments
- `POST /api/payments/create-intent` - Create Stripe payment intent
- `POST /api/payments/confirm` - Confirm payment and activate job
- `GET /api/payments/history` - Get payment history

## Security & Best Practices

### Data Protection
- Use Supabase Row Level Security (RLS)
- Validate all inputs on server side
- Sanitize user-generated content
- Rate limiting on API endpoints

### Payment Security
- Never store card details (use Stripe)
- Validate payment status before activating jobs
- Log all payment attempts

### Database Security
- Use prepared statements (Supabase handles this)
- Encrypt sensitive data
- Regular backups
- Monitor for suspicious activity

## Development Approach

### Phase 1: Core Setup
1. Set up Supabase project
2. Create database tables
3. Configure authentication
4. Set up basic CRUD operations

### Phase 2: Job Management
1. Create job posting forms
2. Build employer dashboard
3. Implement job search/filtering
4. Add job detail pages

### Phase 3: Payment Integration
1. Set up Stripe account
2. Create payment flow
3. Handle payment success/failure
4. Add payment history

### Phase 4: Application System
1. Build application tracking
2. Create applicant management
3. Add email notifications
4. Export functionality

## Key Points for Implementation

### For the AI Assistant:
- **Explain Database Relationships**: Always explain how tables connect
- **Show SQL Examples**: Provide actual SQL for complex queries
- **Error Handling**: Explain what happens when things go wrong
- **Security First**: Always implement RLS and validation
- **Test Data**: Create sample data for testing
- **Simple Explanations**: Break down complex backend concepts
- **Step-by-Step**: Build one feature at a time, test thoroughly

### Supabase-Specific Guidelines:
- Use Supabase client library for API calls
- Implement real-time subscriptions for live updates
- Use Supabase Edge Functions for complex business logic
- Leverage Supabase Storage for file uploads (if needed)
- Use Supabase's built-in email auth templates