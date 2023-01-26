import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";
const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center mt-20  ">
        <div className="overflow-auto h-1/2 shadow-2xl  rounded-lg">
          <table className="  divide-y divide-gray-200 ">
            <thead className="bg-gray-200">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                >
                  Message
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {user.map((user, index) => {
                const { username, email, message } = user;

                return (
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {username}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {email}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                      {message}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
