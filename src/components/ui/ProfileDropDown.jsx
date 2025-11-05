import { use, useEffect, useRef, useState } from "react";
import AuthContext from "../../contexts/authContext/AuthContext";
import { Link } from "react-router";
import toast from "react-hot-toast";

// Profile Dropdown
const ProfileDropDown = (props) => {
  const { user, loading, signOutUser } = use(AuthContext);

  const [state, setState] = useState(false);
  const profileRef = useRef();

  const navigation = [
    { title: "Dashboard", path: "javascript:void(0)" },
    { title: "Settings", path: "javascript:void(0)" },
    { title: "Log out", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);

  const handleLogOut = async () => {
    await signOutUser();
    toast.success("Log Out Successful");
  };

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className={`relative ${props.class}`}>
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img src={user.photoURL} className="w-full h-full rounded-full" />
        </button>
        <div className="lg:hidden">
          <span className="block">{user.displayName}</span>
          <span className="block text-sm text-gray-500">{user.email}</span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li>
            <Link
              onClick={item.title === "Log out" && handleLogOut}
              key={idx}
              className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
              to={item.path}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDropDown;
