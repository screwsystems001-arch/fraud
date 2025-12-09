import { useEffect, useState } from 'react';
import { Lock, LogOut, RefreshCw, Mail, Phone, MapPin, User } from 'lucide-react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../contexts/AuthContext';

interface Enquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  city: string;
  state: string;
  college: string;
  message?: string;
  internshipTitle?: string;
  internshipDepartment?: string;
  internshipLocation?: string;
  internshipType?: string;
  createdAt?: { seconds: number; nanoseconds: number };
}

const ADMIN_USER = 'admin@123';
const ADMIN_PASS = '123456789';

export default function AdminPanel() {
  const { user: authUser, isAdmin, signInWithGoogle, signInWithEmail, logout, isLoading } = useAuth();
  const [isAuthed, setIsAuthed] = useState(false);
  const [localUser, setLocalUser] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState<Enquiry | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError('');
    try {
      const q = query(collection(db, 'internshipEnquiries'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data: Enquiry[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Enquiry[];
      setEnquiries(data);
    } catch (err) {
      setError('Failed to load enquiries. Check Firestore configuration.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authUser && isAdmin) {
      setIsAuthed(true);
    } else if (!authUser) {
      setIsAuthed(false);
    }
  }, [authUser, isAdmin]);

  useEffect(() => {
    if (isAuthed) {
      loadData();
    }
  }, [isAuthed]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmail(localUser.username, localUser.password, 'login');
      if (localUser.username === ADMIN_USER && localUser.password === ADMIN_PASS) {
        setIsAuthed(true);
      } else if (authUser && isAdmin) {
        setIsAuthed(true);
      } else {
        setError('Invalid admin credentials.');
      }
    } catch (err: any) {
      if (localUser.username === ADMIN_USER && localUser.password === ADMIN_PASS) {
        setIsAuthed(true);
      } else {
        setError(err?.message || 'Invalid admin credentials.');
      }
    }
  };

  const handleLogout = () => {
    setIsAuthed(false);
    setLocalUser({ username: '', password: '' });
    setEnquiries([]);
    logout();
  };

  if (!isAuthed) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-6 max-w-lg">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center text-navy-700">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500">Admin Portal</p>
                <h2 className="text-2xl font-bold text-slate-900">Secure Login</h2>
              </div>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => signInWithGoogle()}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 font-semibold hover:bg-slate-50"
              >
                Continue with Google
              </button>
              <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Admin Username</label>
                  <input
                    type="text"
                    value={localUser.username}
                    onChange={(e) => setLocalUser({ ...localUser, username: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 text-sm"
                    placeholder="admin@123"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
                  <input
                    type="password"
                    value={localUser.password}
                    onChange={(e) => setLocalUser({ ...localUser, password: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 text-sm"
                    placeholder="********"
                    required
                  />
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-navy-800 text-white py-3 rounded-lg font-semibold hover:bg-navy-900 transition"
                >
                  Log In (Admin)
                </button>
              </form>
              <p className="text-xs text-slate-500">
                Or sign in via the main login modal with email {ADMIN_USER} to unlock admin.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-teal-600">Admin</p>
            <h2 className="text-3xl font-bold text-slate-900">Internship Enquiries</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">Applicant</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">Contact</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">Location</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">Internship</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">Submitted</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-slate-500">Loading enquiries...</td>
                </tr>
              ) : enquiries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-slate-500">No enquiries yet.</td>
                </tr>
              ) : (
                enquiries.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 cursor-pointer" onClick={() => setSelected(item)}>
                    <td className="px-4 py-3 text-sm text-slate-800">
                      <div className="flex items-start gap-2">
                        <User className="w-4 h-4 mt-0.5 text-slate-500" />
                        <div>
                          <div className="font-semibold text-navy-800 underline">{item.fullName}</div>
                          <div className="text-xs text-slate-500">{item.college}</div>
                          {item.message && <div className="text-xs text-slate-500 mt-1 line-clamp-2">{item.message}</div>}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-800">
                      <div className="flex items-center text-slate-700"><Mail className="w-4 h-4 mr-2 text-slate-500" /> {item.email}</div>
                      <div className="flex items-center text-slate-700"><Phone className="w-4 h-4 mr-2 text-slate-500" /> {item.phone}</div>
                      {item.whatsapp && <div className="text-xs text-teal-700">WA: {item.whatsapp}</div>}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-800">
                      <div className="flex items-center text-slate-700"><MapPin className="w-4 h-4 mr-2 text-slate-500" /> {item.city}, {item.state}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-800">
                      <div className="font-semibold">{item.internshipTitle || 'N/A'}</div>
                      <div className="text-xs text-slate-500">
                        {item.internshipDepartment} {item.internshipType ? `• ${item.internshipType}` : ''} {item.internshipLocation ? `• ${item.internshipLocation}` : ''}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {item.createdAt?.seconds
                        ? new Date(item.createdAt.seconds * 1000).toLocaleString()
                        : '—'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {selected && (
          <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-[9999] flex items-center justify-center px-4 py-6">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative overflow-hidden">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 transition"
                aria-label="Close detail"
              >
                <LogOut className="w-5 h-5 rotate-45" />
              </button>
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-teal-700 inline-flex px-3 py-1 bg-teal-50 rounded-full mb-2">
                    Enquiry Detail
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">{selected.fullName}</h3>
                  <p className="text-slate-600 text-sm">{selected.college}</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-800">
                  <div className="flex items-center"><Mail className="w-4 h-4 mr-2 text-slate-500" />{selected.email}</div>
                  <div className="flex items-center"><Phone className="w-4 h-4 mr-2 text-slate-500" />{selected.phone}</div>
                  {selected.whatsapp && <div className="flex items-center"><Phone className="w-4 h-4 mr-2 text-teal-600" />WA: {selected.whatsapp}</div>}
                  <div className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-slate-500" />{selected.city}, {selected.state}</div>
                  <div className="flex items-center"><User className="w-4 h-4 mr-2 text-slate-500" />{selected.internshipTitle}</div>
                  <div className="flex items-center text-slate-600 text-xs">
                    {selected.internshipDepartment} {selected.internshipType ? `• ${selected.internshipType}` : ''} {selected.internshipLocation ? `• ${selected.internshipLocation}` : ''}
                  </div>
                  <div className="text-xs text-slate-500">
                    Submitted: {selected.createdAt?.seconds ? new Date(selected.createdAt.seconds * 1000).toLocaleString() : '—'}
                  </div>
                </div>
                {selected.message && (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-800">
                    <p className="font-semibold text-slate-900 mb-1">Message / Goals</p>
                    <p>{selected.message}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

