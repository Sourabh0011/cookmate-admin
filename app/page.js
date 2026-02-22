"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, Mail, LayoutDashboard, Users, Activity, Settings, 
  Database, ChefHat, LogOut, Search, TrendingUp, AlertCircle 
} from 'lucide-react';

export default function CookMateAdmin() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Dashboard State
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@cookmate.ai' && password === 'cookmate2027') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid admin credentials. Access denied.');
    }
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 selection:bg-orange-500/30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[120px]" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-rose-600/10 blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-10 rounded-3xl w-full max-w-md relative z-10 shadow-2xl shadow-orange-900/20"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <ChefHat size={32} color="white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white text-center mb-2 tracking-tight">CookMate Admin</h1>
          <p className="text-zinc-400 text-center mb-8 text-sm">Restricted Access. Authorized personnel only.</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input 
                  type="email" 
                  placeholder="Admin Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  required
                />
              </div>
            </div>
            
            <AnimatePresence>
              {error && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-rose-500 text-xs font-medium text-center flex items-center justify-center gap-1">
                  <AlertCircle size={14} /> {error}
                </motion.p>
              )}
            </AnimatePresence>

            <button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-orange-600/20 active:scale-95">
              Secure Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // --- MOCK DATA ---
  const stats = [
    { label: 'Total Users', value: '450', increase: '+14%', icon: Users, color: 'text-blue-400' },
    { label: 'Recipes Generated', value: '801', increase: '+22%', icon: ChefHat, color: 'text-orange-400' },
    { label: 'API Calls (Today)', value: '492', increase: '+5%', icon: Database, color: 'text-emerald-400' },
    { label: 'System Health', value: '99.9%', increase: 'Optimal', icon: Activity, color: 'text-rose-400' }
  ];

  const recentPrompts = [
    { id: 1, user: 'rahul.v@gmail.com', prompt: 'Leftover paneer, spinach, no garlic.', time: '2 mins ago', status: 'Success' },
    { id: 2, user: 'dolly_writer@yahoo.com', prompt: 'dessert under 15 mins.', time: '14 mins ago', status: 'Success' },
    { id: 3, user: 'sourabh_@outlook.com', prompt: 'Maggi under 1 minutes.', time: '1 hour ago', status: 'Success' },
    { id: 4, user: 'unknown_user_99', prompt: 'ajsdhfkajshdf', time: '2 hours ago', status: 'Failed' },
  ];

  // --- DASHBOARD SCREEN ---
  return (
    <div className="min-h-screen bg-[#050505] text-white flex font-sans selection:bg-orange-500/30">
      
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-950 border-r border-white/5 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="h-20 flex items-center px-6 border-b border-white/5 gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-rose-600 rounded-lg flex items-center justify-center">
              <ChefHat size={16} color="white" />
            </div>
            <span className="font-bold text-lg tracking-tight">CookMate OS</span>
          </div>
          
          <nav className="p-4 space-y-2">
            {[
              { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
              { id: 'users', icon: Users, label: 'User Management' },
              { id: 'ai_logs', icon: Activity, label: 'AI Generation Logs' },
              { id: 'settings', icon: Settings, label: 'System Settings' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                  activeTab === item.id 
                    ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' 
                    : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon size={18} /> {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-zinc-400 hover:bg-rose-500/10 hover:text-rose-400 transition-all"
          >
            <LogOut size={18} /> Secure Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Topbar */}
        <header className="h-20 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8">
          <h2 className="text-xl font-bold capitalize">{activeTab.replace('_', ' ')}</h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
              <input type="text" placeholder="Search logs, users..." className="bg-black border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-orange-500 w-64" />
            </div>
            <div className="flex items-center gap-3 border-l border-white/10 pl-6">
              <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-xs font-bold border-2 border-zinc-950">A</div>
              <div className="hidden lg:block">
                <p className="text-sm font-bold leading-none">Admin User</p>
                <p className="text-xs text-zinc-500">Superuser Access</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-zinc-900 border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-36 relative overflow-hidden group hover:border-white/10 transition-colors">
                      <div className="flex justify-between items-start">
                        <stat.icon size={24} className={stat.color} />
                        <span className="text-xs font-bold text-zinc-400 flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full"><TrendingUp size={12}/> {stat.increase}</span>
                      </div>
                      <div>
                        <h4 className="text-zinc-500 text-sm font-medium">{stat.label}</h4>
                        <p className="text-3xl font-black mt-1 tracking-tight">{stat.value}</p>
                      </div>
                      <div className={`absolute -bottom-10 -right-10 w-24 h-24 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity bg-current ${stat.color}`} />
                    </div>
                  ))}
                </div>

                {/* AI Activity Log Preview */}
                <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-white/5 flex justify-between items-center">
                    <h3 className="font-bold">Live AI Generations</h3>
                    <button className="text-xs font-bold text-orange-500 hover:text-orange-400">View All</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-black/20 text-zinc-400 uppercase text-xs tracking-wider">
                        <tr>
                          <th className="px-6 py-4">User</th>
                          <th className="px-6 py-4">Prompt Trigger</th>
                          <th className="px-6 py-4">Time</th>
                          <th className="px-6 py-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {recentPrompts.map((log) => (
                          <tr key={log.id} className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 font-medium text-zinc-300">{log.user}</td>
                            <td className="px-6 py-4 text-zinc-400 italic">"{log.prompt}"</td>
                            <td className="px-6 py-4 text-zinc-500">{log.time}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${log.status === 'Success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                                {log.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Placeholder for other tabs */}
            {activeTab !== 'overview' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center h-96 text-zinc-500 border border-dashed border-white/10 rounded-2xl bg-zinc-900/50">
                <Settings size={48} className="mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-white mb-2">{activeTab.replace('_', ' ')} Module</h3>
                <p>This backend module is currently under development.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}