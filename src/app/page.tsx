'use client';

import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/auth/LoginForm";

export default function Home() {
  const { isAuthenticated, username, login } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm onLogin={login} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">
            ようこそ、{username}さん
          </h1>
          <p className="text-gray-600">
            音声通話機能は現在実装中です。
          </p>
        </div>
      </div>
    </div>
  );
}
