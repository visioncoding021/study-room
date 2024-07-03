import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "abc",
    email: "abc@gmail.com",
    createdAt: new Date().toISOString(),
    profile_pic: "url",
    role: "admin",
    subscriptions: [
      {
        type: undefined,
      }
    ],
    playlist: [{}, {}]
  });

  return (
    <div className="container mx-auto">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden my-8">
        <div className="p-8">
          <div className="flex justify-center">
            <img className="h-24 w-24 rounded-full object-cover" src={user.profile_pic} alt="Profile Picture" />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{user.email}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Role: {user.role}</h3>
            <p className="text-sm text-gray-600 mt-1">Joined on: {new Date(user.createdAt).toDateString()}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Subscriptions:</h3>
            {user.subscriptions.map((subscription, index) => (
              <p key={index} className="text-sm text-gray-600 mt-1">{subscription.type}</p>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Playlist:</h3>
            {user.playlist.map((item, index) => (
              <div key={index} className="flex items-center mt-1">
                <span className="text-sm text-gray-600">{item.title}</span>
                {/* Add more details if available */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
