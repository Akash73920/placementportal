import React, { useState } from 'react';

const ChangePassword = () => {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match');
      return;
    }

    console.log(`Role: ${role}, Email: ${email}, Old Password: ${oldPassword}, New Password: ${newPassword}`);
    // Handle password change logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Change Password</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-700">
              Select Role
            </label>
            <select
              id="role"
              value={role}
              onChange={handleRoleChange}
              className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            >
              <option value="student">Student</option>
              <option value="admin">Admin/Hod</option>
              <option value="company">Company</option>
            </select>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Old Password Input */}
          <div>
            <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium text-gray-700">
              Old Password
            </label>
            <input
              id="oldPassword"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Enter your old password"
            />
          </div>

          {/* New Password Input */}
          <div>
            <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Enter your new password"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Confirm your new password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
