export default function Login() {
  return (
    <div className="flex items-center h-screen bg-slate-100 text-black">
      <form className="w-full max-w-sm ml-[340px]">
        <div className="bg-white shadow-lg w-[900px] h-[600px] p-8 mx-auto flex flex-col justify-center items-center">
          <div className="mb-20 -mt-20">
            <img
              src="https://cdn.discordapp.com/attachments/963226363362422794/1196259638253998151/telkom_logo.png?ex=65b6fa9b&is=65a4859b&hm=6d68c01cbfc364d72d5aceeec94526974c149bff2e72603e8e5ae935e726c803&"
              className="w-60"
              alt="Logo"
            />
          </div>
          <div className="relative w-[800px] mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-700 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-4"
              placeholder="Nama Pengguna"
              required
            />
          </div>
          <div className="relative w-[800px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-700 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-4"
              placeholder="Kata Sandi"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#CC0606] text-white rounded-lg p-3 mt-4 w-[800px] font-poppins text-sm"
          >
            Masuk
          </button>
        </div>
      </form>
    </div>
  );
}
