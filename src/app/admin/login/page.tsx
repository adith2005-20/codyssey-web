import AdminLoginForm from "@/components/admin/adminLoginForm";

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Admin Portal
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Sign in to access the admin dashboard
          </p>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  );
}