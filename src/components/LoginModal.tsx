import { useState } from 'react';
import { X, Mail, Lock, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  title?: string;
}

export default function LoginModal({ isOpen, onClose, onSuccess, title = 'Sign in to continue' }: LoginModalProps) {
  const { signInWithGoogle, signInWithEmail, user, isAdmin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmail(email, password, mode);
      onSuccess?.();
    } catch (err: any) {
      setError(err?.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    setError('');
    try {
      await signInWithGoogle();
      onSuccess?.();
    } catch (err: any) {
      setError(err?.message || 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = () => {
    onSuccess?.();
    onClose();
  };

  const alreadySigned = user !== null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[9999] grid place-items-center px-4 py-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 transition"
          aria-label="Close login"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center text-navy-700">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500">Secure Access</p>
              <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
            </div>
          </div>

          {alreadySigned && (
            <div className="p-3 rounded-lg bg-teal-50 border border-teal-100 text-sm text-teal-800 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Signed in as {user?.email} {isAdmin ? '(Admin)' : ''}
            </div>
          )}

          {!alreadySigned && (
            <>
              <button
                onClick={handleGoogle}
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition disabled:opacity-60"
              >
                Continue with Google
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="h-px flex-1 bg-slate-200" />
                or continue with email
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <form onSubmit={handleEmailAuth} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                  <div className="flex items-center rounded-lg border border-slate-300 px-3">
                    <Mail className="w-4 h-4 text-slate-400 mr-2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full py-2 text-sm focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
                  <div className="flex items-center rounded-lg border border-slate-300 px-3">
                    <Lock className="w-4 h-4 text-slate-400 mr-2" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full py-2 text-sm focus:outline-none"
                      placeholder="********"
                    />
                  </div>
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="login"
                      checked={mode === 'login'}
                      onChange={() => setMode('login')}
                      className="accent-navy-700"
                    />
                    <label htmlFor="login">Login</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="signup"
                      checked={mode === 'signup'}
                      onChange={() => setMode('signup')}
                      className="accent-navy-700"
                    />
                    <label htmlFor="signup">Create account</label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-navy-800 text-white py-3 rounded-xl font-semibold hover:bg-navy-900 transition flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {mode === 'login' ? 'Login with Email' : 'Create Account'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </>
          )}

          {alreadySigned && (
            <button
              onClick={handleContinue}
              className="w-full bg-navy-800 text-white py-3 rounded-xl font-semibold hover:bg-navy-900 transition flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

