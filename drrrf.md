# DRRF - Document Revision Request and Release Form System

A robust, role-based document management and routing system built with **Next.js**, **Prisma**, and **TailwindCSS**. This application digitizes the workflow for proposing, reviewing, and approving document revisions across various organizational departments.

## ✨ Features

- **Role-Based Access Control (RBAC):** Tailored dashboards and strict permissions for Originators, Department Heads, ISO Facilitators, Document Control Custodians (DCC), and System Admins. ISO Facilitators receive view-only access to critical procedures and reports.
- **Dynamic Document Routing:** Automated and customizable routing to simultaneous reviewing offices with digital signatures and timestamps.
- **Real-Time Updates:** Powered by Server-Sent Events (SSE) and `SWR` to push live notifications and form workflow updates across all connected clients instantly.
- **Comprehensive Reporting & Statistics:** A dedicated Reports page with key metrics (e.g., active documents, revisions) and an interactive data table breaking down procedures across all offices.
- **Advanced Office & Procedure Management:** Manage Offices directly from Settings with inline editing, and filter or track documents per office dynamically.
- **Export Capabilities:** Seamlessly download filtered lists of procedures and documents directly to CSV (Excel).
- **Secure Authentication:** Integrated with `NextAuth.js` and `bcrypt` for secure credentials-based login.
- **Global UI & Accessibility:** Features highly interactive, paginated `DataTables` and a robust global focus ring system for improved keyboard navigation on all interactive elements.
- **Print & PDF Generation:** Built-in print views for finalized document requests.
- **Type-Safe:** End-to-end type safety using strict TypeScript interfaces (zero `any` types!).

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State & Data Fetching:** [SWR](https://swr.vercel.app/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- A configured Prisma database provider (e.g., PostgreSQL, MySQL, or SQLite)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd DRRF
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up your environment variables:**
   Create a `.env` file in the root of your project and configure your database URL and NextAuth secret:
   ```env
   DATABASE_URL="your_database_connection_string"
   NEXTAUTH_SECRET="your_random_secret_string"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Initialize the database:**
   Run Prisma migrations to generate the schema:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to log into the system.

## 📖 Application Workflow

1. **Initiation:** An Originator creates a new DRRF, uploading necessary drafts and indicating the purpose.
2. **Routing Setup:** The ISO Facilitator, DCC, or Admin reviews the request and assigns the necessary reviewing departments.
3. **Simultaneous Routing:** The form instantly appears on the dashboard of all assigned reviewing offices for their comments and digital signatures.
4. **Final Approval:** Once all reviews are complete, the form workflow progresses forward for final sign-off and execution.

## 📄 License

This project is privately licensed.
