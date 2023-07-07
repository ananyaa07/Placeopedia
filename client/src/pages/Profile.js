import React from "react";
import NavbarP from "../components/NavbarP";
import { useState, useEffect } from "react";
import { getUser } from "../utils/API/user.js";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import EditUserModal from "../components/EditProfileModal";
import { getPostbyUser} from "../utils/API/posts.js";
import Post from "../components/Post";

export default function Profile() {
	const [user, setUser] = useState({});
	let userId = useParams().id;
	const [posts, setPosts] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const token = localStorage.getItem("jwt_token");
	const params = useParams();
  
	const getUserCaller = async (id) => {
	  try {
		const res = await getUser(id);
		setUser(res.user);
	  } catch (error) {
		console.error(error);
	  }
	};
  
	const getPostsByUserCaller = async (id) => {
	  try {
		const res = await getPostbyUser(id); 
		setPosts(res.posts);
	  } catch (error) {
		console.error(error);
	  }
	};
  
	useEffect(() => {
	  getUserCaller(userId);
	  getPostsByUserCaller(userId);
	}, []);


  return (
    <div>
      <NavbarP />
      <main class="profile-page">
        <section class="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80)",
            }}
          >
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section class="relative py-16 bg-blueGray-200">
          <div class="container mx-auto px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div class="relative">
                      {user?.imageUrl!=="" ? (
                        <img
                          alt="..?"
                          src={user.imageUrl}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                          style={{
                            maxWidth: "150px",
                            width: "180px",
                            height: "180px",
                            borderRadius: "50%",
                          }}
                        />
                      ) : (
                        <img
                          alt="..."
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                          class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      )}
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div class="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        class="bg-gray-700 active:bg-gray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setIsModalVisible(true);
                        }}
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-1">
                    <div class="flex justify-center py-4 lg:pt-4 pt-8"></div>
                  </div>
                </div>
                <div class="text-center mt-12">
                  <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {user.name}
                  </h3>
                  <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {user.rollNumber}
                  </div>
                  <div class="mb-2 text-blueGray-600 mt-10">
                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {user.admissionYear}
                  </div>
                  <div class="mb-2 text-blueGray-600">
                    <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    {user.program} at Indian Institute of Information
                    Technology, Allahabad
                  </div>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {user.briefDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-6/12 px-4 mx-auto text-center"></div>
              </div>
            </div>
          </footer>
          <div className="flex flex-col items-center justify-center">
          {posts.length > 0 ? (
              <div className="w-2/3 block">
                <h2 className="text-2xl font-bold mb-4">Posts by {user.name}</h2>
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-lg text-gray-500">No posts available.</p>
            )}
        </div>
        </section>

        

		{/* <section className="py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Posts by {user.name}</h2>
            
          </div>
        </section> */}

      </main>
      {setIsModalVisible && (
        <EditUserModal
          user={user}
          setUser={setUser}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </div>
  );
}
