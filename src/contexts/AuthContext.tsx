import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged, signInWithRedirect, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getRedirectResult, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  isAdmin: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string, mode?: 'login' | 'signup') => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Resolve redirect results (e.g., Google) so user state updates after returning
    getRedirectResult(auth).catch(() => {
      /* ignore redirect errors, onAuthStateChanged will still fire */
    });

    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setIsLoading(false);
    });
    return unsub;
  }, []);

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      if (res.user) setUser(res.user);
    } catch {
      await signInWithRedirect(auth, googleProvider);
    }
  };

  const signInWithEmail = async (email: string, password: string, mode: 'login' | 'signup' = 'login') => {
    if (mode === 'signup') {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res.user) setUser(res.user);
    } else {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user) setUser(res.user);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const isAdmin = !!user && user.email === 'admin@123';

  return (
    <AuthContext.Provider value={{ user, isLoading, isAdmin, signInWithGoogle, signInWithEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}

