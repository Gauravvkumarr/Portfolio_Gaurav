# Portfolio Website - Replit Configuration

## Overview

This is a professional personal portfolio website built as a full-stack application. The project showcases a developer's work, experience, and achievements through a modern, responsive interface. It features a React-based frontend with TypeScript, Express backend, and PostgreSQL database integration using Drizzle ORM.

The application is designed to be a single-page application (SPA) with smooth animations, dynamic content loading, and a contact form with backend API integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured to serve from the `client` directory
- **Wouter** for lightweight client-side routing (single-page application)
- **TanStack Query (React Query)** for server state management and data fetching

**UI & Styling**
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Shadcn/UI** component library (New York style variant) for pre-built, accessible components
- **Radix UI** primitives for headless accessible components
- **Framer Motion** for smooth animations and transitions
- **Inter & Poppins** fonts from Google Fonts for typography

**Design System**
- Custom color palette with HSL-based CSS variables for theming
- Professional minimalism design approach inspired by Linear, Stripe, and Framer
- Responsive grid layouts with defined breakpoints
- Consistent spacing system using Tailwind's spacing units
- Gradient-based visual effects for depth and modern aesthetics

**State Management**
- Portfolio data stored in static TypeScript files (`client/src/data/portfolio.ts`, `client/src/data/skills.ts`)
- Contact form state managed locally with React hooks
- API interactions through TanStack Query with custom query client configuration

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the REST API server
- Custom middleware for request logging and JSON response capture
- Development and production build modes with environment-based configuration

**API Endpoints**
- `POST /api/contact` - Contact form submission endpoint with Zod validation
- Validation using `contactMessageSchema` from shared schema
- Currently logs messages to console (placeholder for email service integration)

**Database Layer**
- **Drizzle ORM** for type-safe database operations
- **@neondatabase/serverless** as the PostgreSQL driver
- Database schema defined in `shared/schema.ts`
- Migrations managed through `drizzle-kit` with output to `./migrations`

**Storage Abstraction**
- Interface-based storage system (`IStorage`) for database operations
- In-memory storage implementation (`MemStorage`) for development/testing
- User management methods (getUser, getUserByUsername, createUser)

### Data Storage Solutions

**Database Configuration**
- PostgreSQL as the primary database (via Neon serverless)
- Connection string from `DATABASE_URL` environment variable
- Schema includes `users` table with UUID primary keys
- Drizzle Zod integration for runtime validation of database types

**Content Management**
- Static data approach for portfolio content (projects, skills, achievements, experience, academics)
- Data stored as TypeScript objects for easy updates and type safety
- Images stored in `attached_assets/generated_images/` directory

### Authentication and Authorization

**Current Implementation**
- User schema defined with username/password fields
- Storage interface supports user creation and retrieval
- No active authentication flow implemented (prepared for future implementation)

### External Dependencies

**Third-Party Libraries**
- **Radix UI** - Accessible component primitives (@radix-ui/react-*)
- **React Hook Form** (@hookform/resolvers) - Form state management
- **Zod** - Schema validation (drizzle-zod integration)
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional className utilities
- **cmdk** - Command menu component
- **date-fns** - Date manipulation utilities
- **react-icons** (simple-icons) - Icon library for tech stack display

**Development Tools**
- **Replit-specific plugins** - Cartographer, dev banner, runtime error modal
- **esbuild** - Server-side bundling for production
- **tsx** - TypeScript execution for development

**Planned Integrations**
- Email service (placeholder comment mentions Resend) for contact form submissions
- Session management (connect-pg-simple dependency present but not configured)

### Build & Deployment

**Development**
- `npm run dev` - Runs development server with tsx and Vite HMR
- Vite proxy setup for API requests during development

**Production**
- `npm run build` - Builds both client (Vite) and server (esbuild)
- Client output: `dist/public`
- Server output: `dist/index.js`
- `npm start` - Runs production server from bundled output

**Database Management**
- `npm run db:push` - Push schema changes to database using Drizzle Kit