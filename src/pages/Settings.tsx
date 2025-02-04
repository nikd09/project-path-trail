import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Lock, Bell, Globe, Shield, 
  Mail, Phone, Key, LogOut, Save, X
} from 'lucide-react';

interface NotificationSettings {
  emailUpdates: boolean;
  applicationAlerts: boolean;
  mentorMessages: boolean;
  marketingEmails: boolean;
}

interface LanguageOption {
  code: string;
  name: string;
}

export function Settings() {
  // Profile Settings State
  const [profile, setProfile] = useState({
    name: 'Nikhil',
    email: 'nikhil@example.com',
    phone: '+91 9876543210'
  });

  // Password Change State
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  // Notification Settings State
  const [notifications, setNotifications] = useState<NotificationSettings>({
    emailUpdates: true,
    applicationAlerts: true,
    mentorMessages: true,
    marketingEmails: false
  });

  // Language Settings
  const languages: LanguageOption[] = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'German' },
    { code: 'hi', name: 'Hindi' }
  ];
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // Error and Success Messages
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to update the profile
    setMessage({ type: 'success', text: 'Profile updated successfully!' });
    setTimeout(() => setMessage(null), 3000);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      setMessage({ type: 'error', text: 'New passwords do not match!' });
      return;
    }
    // Here you would typically make an API call to change the password
    setMessage({ type: 'success', text: 'Password changed successfully!' });
    setPasswords({ current: '', new: '', confirm: '' });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleNotificationToggle = (key: keyof NotificationSettings) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    setMessage({ type: 'success', text: 'Notification preferences updated!' });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
    setMessage({ type: 'success', text: 'Language preference updated!' });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleLogout = () => {
    // Here you would typically clear the auth token and redirect to login
    window.location.href = '/login';
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-[#1a2942] rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account preferences</p>
      </div>

      {/* Message Display */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg flex items-center justify-between ${
            message.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
          }`}
        >
          <span>{message.text}</span>
          <button onClick={() => setMessage(null)}>
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {/* Profile Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <User className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-bold text-white">Profile Settings</h2>
        </div>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label className="text-gray-400 text-sm">Full Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={e => setProfile(prev => ({ ...prev, name: e.target.value }))}
              className="w-full bg-[#243755] text-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm">Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={e => setProfile(prev => ({ ...prev, email: e.target.value }))}
              className="w-full bg-[#243755] text-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm">Phone</label>
            <input
              type="tel"
              value={profile.phone}
              onChange={e => setProfile(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full bg-[#243755] text-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </form>
      </motion.div>

      {/* Security Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Lock className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">Security</h2>
        </div>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="text-gray-400 text-sm">Current Password</label>
            <input
              type="password"
              value={passwords.current}
              onChange={e => setPasswords(prev => ({ ...prev, current: e.target.value }))}
              className="w-full bg-[#243755] text-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm">New Password</label>
            <input
              type="password"
              value={passwords.new}
              onChange={e => setPasswords(prev => ({ ...prev, new: e.target.value }))}
              className="w-full bg-[#243755] text-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm">Confirm New Password</label>
            <input
              type="password"
              value={passwords.confirm}
              onChange={e => setPasswords(prev => ({ ...prev, confirm: e.target.value }))}
              className="w-full bg-[#243755] text-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center space-x-2"
          >
            <Key className="w-4 h-4" />
            <span>Change Password</span>
          </button>
        </form>
      </motion.div>

      {/* Notification Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Bell className="w-6 h-6 text-yellow-400" />
          <h2 className="text-xl font-bold text-white">Notifications</h2>
        </div>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-gray-400">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
              <button
                onClick={() => handleNotificationToggle(key as keyof NotificationSettings)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  value ? 'bg-green-500' : 'bg-gray-600'
                } relative`}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                  value ? 'right-1' : 'left-1'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Language Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Globe className="w-6 h-6 text-green-400" />
          <h2 className="text-xl font-bold text-white">Language</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`p-4 rounded-lg transition-colors flex items-center justify-center ${
                selectedLanguage === lang.code
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-[#243755] text-white hover:bg-[#2a4060]'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="w-6 h-6 text-red-400" />
          <h2 className="text-xl font-bold text-white">Danger Zone</h2>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors flex items-center space-x-2"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </motion.div>
    </div>
  );
} 