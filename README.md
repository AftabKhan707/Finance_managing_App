# Welth - AI-Powered Financial Management Platform

![Welth Logo](https://finance-managing-nms1u42ns-aftab-khans-projects-e8f62483.vercel.app/#features)

**Live Demo:** [https://finance-managing-nms1u42ns-aftab-khans-projects-e8f62483.vercel.app](https://finance-managing-nms1u42ns-aftab-khans-projects-e8f62483.vercel.app/#features)

Welth is an advanced AI-powered financial management platform that helps users track, analyze, and optimize their spending with intelligent insights and automated features. Built with modern technologies and AI integration, it provides a comprehensive solution for personal finance management.

## ✨ Key Features

### 🤖 AI-Powered Analytics

- **Smart Expense Analysis**: AI-powered monthly expense reports that analyze spending patterns and provide insights on where your money goes
- **Automated Insights**: Get intelligent recommendations and financial advice based on your spending behavior
- **Predictive Analytics**: Advanced algorithms to forecast spending trends and budget requirements

### 📊 Multi-Account Management

- **Multiple Account Support**: Track expenses across multiple bank accounts and credit cards in one unified dashboard
- **Real-time Balance Tracking**: Monitor account balances and transaction history across all connected accounts
- **Account Categorization**: Organize accounts by type (checking, savings, credit cards)

### 🔄 Automated Transaction Management

- **Recurring Transactions**: Set up and manage recurring income/expenses with automated cron job processing
- **Smart Categorization**: Automatic transaction categorization using AI algorithms
- **Bulk Transaction Management**: Import and manage large volumes of transaction data

### 📱 Smart Receipt Scanner

- **AI-Powered OCR**: Extract transaction data automatically from receipt images using advanced AI technology
- **Receipt Storage**: Attach and store receipt images to transactions for record-keeping
- **Data Validation**: Intelligent data extraction with error correction and validation

### 💰 Budget Management & Alerts

- **Intelligent Budget Planning**: Create and manage budgets with AI-powered recommendations
- **Real-time Budget Tracking**: Monitor budget progress with visual indicators and charts
- **Email Alerts**: Automated email notifications for budget limits, unusual spending, and monthly reports
- **Custom Budget Categories**: Set up personalized budget categories and spending limits

### 🌍 Multi-Currency Support

- **Global Currency Support**: Handle multiple currencies with real-time conversion rates
- **Automatic Exchange Rates**: Live currency conversion for international transactions
- **Currency-specific Analytics**: Separate analysis for different currencies

### 📈 Advanced Reporting

- **Interactive Dashboards**: Beautiful, responsive charts and graphs for expense visualization
- **Monthly Financial Reports**: Comprehensive AI-generated monthly expense summaries
- **Spending Pattern Analysis**: Detailed insights into spending habits and trends
- **Export Capabilities**: Download reports in various formats for tax and accounting purposes

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **React 18** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern component library
- **Recharts** - Data visualization and charting
- **Lucide React** - Modern icon library

### Backend & Database

- **Next.js API Routes** - Server-side API endpoints
- **Prisma ORM** - Database toolkit and ORM
- **PostgreSQL** - Primary database
- **Vercel Postgres** - Managed database solution

### Authentication & Security

- **Clerk** - User authentication and management
- **Arcjet** - Rate limiting and security
- **JWT** - Secure token-based authentication

### AI & Machine Learning

- **Google Gemini AI** - Advanced AI for financial insights and analysis
- **AI-powered OCR** - Receipt scanning and data extraction
- **Machine Learning Algorithms** - Spending pattern analysis and predictions

### Background Jobs & Automation

- **Inngest** - Background job processing and cron jobs
- **Automated Email System** - Scheduled email alerts and reports
- **Cron Job Management** - Recurring transaction processing

### Deployment & DevOps

- **Vercel** - Cloud deployment platform
- **Git/GitHub** - Version control
- **ESLint** - Code linting and formatting
- **TypeScript** - Type-safe JavaScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Clerk account for authentication
- Google Gemini AI API key

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/AftabKhan707/ai-finance-platform.git
cd ai-finance-platform
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Fill in your environment variables:

```env
# Database
DATABASE_URL="your-postgresql-url"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"

# Google Gemini AI
GEMINI_API_KEY="your-gemini-api-key"

# Inngest
INNGEST_EVENT_KEY="your-inngest-event-key"
INNGEST_SIGNING_KEY="your-inngest-signing-key"

# Arcjet Security
ARCJET_KEY="your-arcjet-key"
```

4. **Set up the database**

```bash
npx prisma generate
npx prisma db push
```

5. **Seed the database (optional)**

```bash
npm run seed
```

6. **Start the development server**

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application running.

## 📱 Usage

1. **Sign Up/Login**: Create an account using Clerk authentication
2. **Add Accounts**: Set up your bank accounts and credit cards
3. **Track Transactions**: Add manual transactions or upload receipts
4. **Set Budgets**: Create budget categories and set spending limits
5. **Monitor Progress**: View real-time dashboards and AI-generated insights
6. **Receive Alerts**: Get automated email notifications about your finances

## 🔧 API Endpoints

### Accounts

- `GET /api/accounts` - Get user accounts
- `POST /api/accounts` - Create new account
- `PUT /api/accounts/:id` - Update account
- `DELETE /api/accounts/:id` - Delete account

### Transactions

- `GET /api/transactions` - Get transactions with filtering
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Budgets

- `GET /api/budgets` - Get user budgets
- `POST /api/budgets` - Create/update budget
- `GET /api/budgets/current` - Get current month budget status

### AI Insights

- `POST /api/ai/analyze` - Generate AI-powered insights
- `GET /api/ai/monthly-report` - Get monthly AI report

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aftab Khan**

- GitHub: [@aftab-khan](https://github.com/AftabKhan707)
- LinkedIn: [Aftab Khan](https://linkedin.com/in/aftabskhan)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Clerk](https://clerk.dev/) for seamless authentication
- [Google Gemini AI](https://deepmind.google/technologies/gemini/) for powerful AI capabilities
- [Vercel](https://vercel.com/) for excellent deployment platform

---

⭐ Star this repository if you found it helpful!
